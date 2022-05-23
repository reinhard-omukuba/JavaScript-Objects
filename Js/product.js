var Nike = {
    Name: "Nike Shoe",
    Price: 5700,
    desc: "Lorem ipsum dolor sit amet consec tetur adipisicing elit.",
    photo: "Images/nike.jfif",
    id:"44123"
}

var Bata = {
    Name: "Bata Shoes",
    Price: 3000,
    desc: "Lorem ipsum dolor sit amet consec tetur adipisicing elit.",
    photo: "Images/bata.jpg",
    id: "22547"
}

var receivedId = decodeURIComponent(window.location.search);
var theID = receivedId.substring(1);


if(theID == Nike.id){

    document.getElementById("receivedImg").src = Nike.photo; 
    document.getElementById("receivedName").innerText = Nike.Name;
    document.getElementById("receivedDesc").innerText = Nike.desc;
    document.getElementById("receivedPrice").innerText = "KES. " + Nike.Price;
    
    var price = Nike.Price;

    totalPrice(price);


}else if(theID == Bata.id){

    document.getElementById("receivedImg").src = Bata.photo; 
    document.getElementById("receivedName").innerText = Bata.Name;
    document.getElementById("receivedDesc").innerText = Bata.desc;
    document.getElementById("receivedPrice").innerText = "KES. " + Bata.Price;

    var price = Bata.Price;
    totalPrice(price);
}



function totalPrice(price){

    document.getElementById("grandPrice").innerText = "KES." + price;

    document.getElementById("qty").onkeyup = function(){
        var qty = document.getElementById("qty").value;
        var qtyInt = parseInt(qty);
        var total = qtyInt * price;

        if(qty == ""){
            document.getElementById("grandPrice").innerText = "KES." + price;
            deliveryPrice(price);
        }else{
            document.getElementById("grandPrice").innerText = "KES." + total;
            deliveryPrice(total);
        }       
    }

    deliveryPrice(price);
}

function deliveryPrice(steve){

    console.log(steve)

    var itemPrice = parseInt(steve)

    document.getElementById("paypal-button-container").innerHTML = "";
    payNow(itemPrice);
    


    document.getElementById("city").onchange = function(){
        var city = document.getElementById("city").value;
        if(city == "Kakamega"){
            document.getElementById("zoneB").style.display = "block";
            document.getElementById("zoneA").style.display = "none";
        }else if(city == "Nairobi"){
            document.getElementById("zoneA").style.display = "block";
            document.getElementById("zoneB").style.display = "none";
        }
    }

    //
    document.getElementById("zoneA").onchange = function(){
        var zoneA = document.getElementById("zoneA").value;

        if(zoneA == "Kilimani"){
            var delPrice = 100;
            var theTotal = delPrice + itemPrice
            document.getElementById("grandPrice").innerText = "KES." + theTotal;

            document.getElementById("paypal-button-container").innerHTML = "";
            payNow(theTotal)

        }else if(zoneA == "Lavington"){
            var delPriceB = 150;
            var theTotalB = delPriceB + itemPrice
            document.getElementById("grandPrice").innerText = "KES." + theTotalB;

            document.getElementById("paypal-button-container").innerHTML = "";
            payNow(theTotalB)
        }

    }

    document.getElementById("zoneB").onchange = function(){
        var zoneA = document.getElementById("zoneB").value;

        if(zoneA == "Kimilili"){
            var delPrice = 700;
            var theTotal = delPrice + itemPrice
            document.getElementById("grandPrice").innerText = "KES." + theTotal;

            document.getElementById("paypal-button-container").innerHTML = "";
            payNow(theTotal)

        }else if(zoneA == "Bahati"){
            var delPriceB = 850;
            var theTotalB = delPriceB + itemPrice
            document.getElementById("grandPrice").innerText = "KES." + theTotalB;

            document.getElementById("paypal-button-container").innerHTML = "";
            payNow(theTotalB)
        }

    }

}


function payNow(recAmount){

    //converting into usd
    var amtUsd = recAmount / 100;

    ///
    paypal.Buttons({
        createOrder: function(data, actions) {
          // Set up the transaction
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: amtUsd
              }
            }]
          });
        },

        onApprove: function(data, actions) {
            alert('Payment Sucessful');

        },

        onCancel: function (data) {
            alert('payment not successful')
        }



      }).render('#paypal-button-container');
}

