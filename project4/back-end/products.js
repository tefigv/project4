const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST, GET, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static('public'));

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
// connect to the database
mongoose.connect('mongodb://localhost:27017/test', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});


const proSchema = new mongoose.Schema({ 
    img: String,
    name: String,
    price: String,
});

proSchema.virtual('id')
  .get(function() {
    return this._id.toHexString();
  });
  
proSchema.set('toJSON', {
  virtuals: true
});

const Product = mongoose.model('Product', proSchema);

app.get('/api/pro', async (req, res) => {
    console.log("in get products"); 
  try {
    let pro = await Product.find();
    res.send({products: pro});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.post('/api/pro', async (req, res) => {
    console.log("in post product"); 
    const pro = new Product({
    img: req.params.img,
    name: req.params.name,
    price: req.params.price
  });
  try {
    await pro.save();
    res.send({products: pro});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/pro/:id', async (req, res) => {
    console.log("in delete products"); 
  try {
    await Product.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

//CART

let cart = [];
let id = 0;

app.get('/api/cart', (req, res) => {
  console.log("In cart get");
  res.send(cart);
});

app.post('/api/cart/:id/:name/:price', (req, res) => {
  console.log("In cart post");
  id = req.params.id;
  const additionalItem = cart.find(item => item.id == id);
  if (additionalItem) {
    additionalItem.quantity += 1;
    res.send(additionalItem);
  }else{
    let item = {
      id: id,
      name: req.params.name,
      price: req.params.price,
      quantity: 1,
    };
    cart.push(item);
    res.send(item);
  }
  
});

app.put('/api/cart/:id/:quantity', (req,res) => {
    console.log("in cart put");
    let id = req.params.id;
    let quantity = req.params.quantity;
    let itemsMap = cart.map(item => {
      return item.id;
      });
    let index = itemsMap.indexOf(id);
    if (index === -1) {
      res.status(404)
        .send("Sorry, that item doesn't exist\n");
      return;
      }
    let item = cart[index];
    item.quantity = parseInt(quantity);
    res.send(item);
    }
);

app.delete('/api/cart/:id', (req, res) => {
  console.log("In cart delete");
  let id = req.params.id;
  let removeIndex = cart.map(item => {
      return item.id;
    })
    .indexOf(id);
  if (removeIndex === -1) {
    res.status(404)
      .send("Sorry, that product doesn't exist");
    return;
  }
  cart.splice(removeIndex, 1);
  res.sendStatus(200);
});

app.listen(3000, () => console.log('Server listening on port 3000!'));
