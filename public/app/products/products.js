angular.module('myApp')
.factory('productsFactory', productsFactory);

function productsFactory($http) {
  var factory = {
    addProduct: addProduct,
    getProducts: getProducts,
    getProductById: getProductById,
    addToCart: addToCart,
    getProductsFromCart: getProductsFromCart,
    clearCart: clearCart
  };

  var products = [];
  var cart = [];
  activate()

  return factory;

  function activate() {
    if (!getProducts().length) {
      $http.get('http://beta.json-generator.com/api/json/get/41IRga-kW')
      .then(function(response) {
        products = response.data;
      });
    }
    var localProducts = JSON.parse(window.localStorage.cart ? window.localStorage.cart : '[]');
    cart = localProducts
  }

  function addProduct(product) {
    products.push(product)
  }

  function getProducts() {
    return products;
  }

  function addToCart(product) {
    var productIndex = cart.indexOf(product)
    if (productIndex === -1) {
      product.quantity = 1;
      cart.push(product);
    } else {
      cart[productIndex].quantity++;
    }
    cacheProducts();
  }

  function getProductById(productId) {
    var product = {};
    products.forEach(function(_product) {
      if (_product._id === productId) {
        product = _product;
      }
    });
    return product;
  }

  function cacheProducts() {
    window.localStorage.setItem('cart', JSON.stringify(cart));
  }

  function getProductsFromCart() {
    return cart;
  }

  function clearCart() {
    cart = [];
    window.localStorage.removeItem('cart');
  }
}
