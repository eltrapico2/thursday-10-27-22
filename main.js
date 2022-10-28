let items = {
  cart: [],//(item: "Bag", price: 200)],
          //()
};

function addItem() {
  let input_item = document.getElementById("add_item").value;
  let input_price = Number(document.getElementById("add_price").value);

  //alert(input_item, input_price);
  items.cart.push({item: input_item, price: input_price});
  showCart();
  localStorage.setItem("items", JSON.stringify(items));
}

function showCart() {
  let x = document.getElementById("items_in_cart");
  let current = "";

  if (items.cart == "") {
    x.innerHTML = "<b>No items in cart!</b>";
  }
  else {
    items.cart.forEach(function(show_item) {
        current += "<br>Item: " + show_item.item + "<b> Price: " + show_item.price + "<br>";
    });
    x.innerHTML = current;
    document.getElementById("add_item").value = "";
    document.getElementById("add_price").value = "";
  }
showCart();


//123

}


