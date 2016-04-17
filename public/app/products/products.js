angular.module('myApp')
.factory('productsFactory', productsFactory);

function productsFactory($http) {
  var factory = {
    addProduct: addProduct,
    getProducts: getProducts,
    getProductById: getProductById,
    addToCart: addToCart,
    getProductsFromCart: getProductsFromCart,
    removeFromCart: removeFromCart,
    clearCart: clearCart,
    getCartTotal: getCartTotal
  };

  var products = [];
  var cart = [];
  activate()

  return factory;

  function activate() {
    if (!getProducts().length) {
      $http.get('http://www.json-generator.com/api/json/get/cgdxmppCZK?indent=2')
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
    var indices = cart.map(function(_product) {
      return _product._id;
    });
    var productIndex = indices.indexOf(product._id)
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
    console.log(cart);
    return cart;
  }

  function clearCart() {
    cart = [];
    window.localStorage.removeItem('cart');
  }

  function removeFromCart(productId) {
    var productIndex;
    cart.forEach(function(_product, index) {
      if (_product._id === productId) {
        productIndex = index;
      }
    });
    if (cart[productIndex].quantity > 1) {
      cart[productIndex].quantity--;
    } else {
      cart.splice(productIndex, 1);
    }
  }

  function getCartTotal() {
    var total = 0;
    cart.forEach(function(product) {
      var price = product.price.replace(/\$|,/g, '');
      total += parseFloat(price) * product.quantity;
    });
    return total;
  }
}
