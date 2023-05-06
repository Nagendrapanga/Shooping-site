
let total = JSON.parse (localStorage.getItem('total'));
var options = {
  key: "rzp_test_xkt3a0VeLgXWhH", 
  amount: total*100, 
  currency: "INR",
  name: "MeShop Checkout",
  description: "This is your order", 
  theme: {
    color: "#000",
  },
  image:
    "https://www.mintformations.co.uk/blog/wp-content/uploads/2020/05/shutterstock_583717939.jpg",
};

var rzpy1 = new Razorpay(options);
 rzpy1.open();

localStorage.removeItem('cartproducts');
localStorage.removeItem('total');

e.preventDefault();