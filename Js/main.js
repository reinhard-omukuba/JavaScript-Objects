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


document.getElementById("prodOneName").innerText = Nike.Name;
document.getElementById("prodOneDesc").innerText = Nike.desc;
document.getElementById("prodOnePrice").innerText =  "KES. " +Nike.Price;
document.getElementById("prodOnePhoto").src = Nike.photo;

document.getElementById("prodTwoName").innerText = Bata.Name;
document.getElementById("prodTwoDesc").innerText = Bata.desc;
document.getElementById("prodTwoPrice").innerText =  "KES. " +Bata.Price;
document.getElementById("prodTwoPhoto").src = Bata.photo;


document.getElementById("productOne").onclick = function(){

    window.location.href = "product.html" + "?" + Nike.id;
}


document.getElementById("productTwo").onclick = function(){

    window.location.href = "product.html" + "?" + Bata.id;
}