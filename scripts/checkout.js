import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import {products} from '../data/products.mjs';
import {loadCart} from '../data/cart.js';
// import '../data/cart-class.js';
// import '../data/backend-practice.js';

async function loadPage() {
  try {
    // Ensure cart is loaded before rendering summaries
    await new Promise((resolve) => loadCart(resolve));
  } catch (error) {
    console.log('Unexpected error. Please try again later.');
  }

  // Render order and payment summaries after cart loads
  renderOrderSummary(products);
  renderPaymentSummary(products);
}

loadPage();


/*
Promise.all([
  loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })

]).then((values) => {
  console.log(values);
  renderOrderSummary();
  renderPaymentSummary();
});
*/

/*
new Promise((resolve) => {
  loadProducts(() => {
    resolve('value1');
  });

}).then((value) => {
  console.log(value);

  return new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  });

}).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/

/*
loadProducts(() => {
  loadCart(() => {
    renderOrderSummary();
    renderPaymentSummary();
  });
});
*/
