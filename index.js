require('colors');
require('dotenv').config();
const mutations = require("./modules/mutations");
const post = require("./modules/post");

console.info("Creating customer:".cyan);
post(mutations.createCustomer);

console.info("Generating the customer token:".cyan);
var response = post(mutations.generateCustomerToken);
var token = response.generateCustomerToken.token;

console.info("Creating an empty guest cart:".cyan);
response = post(mutations.createGuestCart);
var cartId = response.createEmptyCart;

console.info("Adding a simple product to the cart:".cyan);
response = post(mutations.addSimpleProductToCart.replace("CART_ID", cartId));

console.info("Setting a shipping address:".cyan);
response = post(mutations.setShippingAddress.replace("CART_ID", cartId));

console.info("Setting a billing address:".cyan);
response = post(mutations.setBillingAddress.replace("CART_ID", cartId));

console.info("Setting a shipping method:".cyan);
response = post(mutations.setShippingMethod.replace("CART_ID", cartId));

console.info("Setting a guest email address:".cyan);
response = post(mutations.setGuestEmail.replace("CART_ID", cartId));

console.info("Setting the payment method:".cyan);
response = post(mutations.setPaymentMethod.replace("CART_ID", cartId));

console.info("Placing the order:".cyan);
response = post(mutations.placeOrder.replace("CART_ID", cartId));
