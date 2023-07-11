import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
		import { getDatabase } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js";
var config = {
    apiKey: "AIzaSyBtrU7ws4Xg_bx1SYeFT1CSIcz3WdMasDA",
    authDomain: "books-task-a613d.firebaseapp.com",
    databaseURL: "https://books-task-a613d-default-rtdb.firebaseio.com/",
    projectId: "books-task-a613d",
    storageBucket: "books-task-a613d.appspot.com",
    messagingSenderId: "986267204465",
    appId: "1:986267204465:web:6c86f5bb65551ca5e554d0"
  };
  firebase.initializeApp(config);
// Get a reference to the products collection in the database
var productsRef = firebase.database().ref('products');

// Get the form element
var form = document.getElementById('add-product-form');

// Add an event listener for the form submission
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent the default form submission

  // Get the values from the form inputs
  var name = document.getElementById('name').value;
  var price = document.getElementById('price').value;

  // Create a new product object
  var newProduct = {
    name: name,
    price: price
  };

  // Push the new product to the Firebase Realtime Database
  productsRef.push(newProduct)
    .then(function() {
      // Clear the form inputs after successful upload
      form.reset();
    })
    .catch(function(error) {
      // Handle any errors that occur during upload
      console.error('Error uploading product:', error);
    });
});
