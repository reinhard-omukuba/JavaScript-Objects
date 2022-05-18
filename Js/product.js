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

}else if(theID == Bata.id){

    document.getElementById("receivedImg").src = Bata.photo; 
    document.getElementById("receivedName").innerText = Bata.Name;
    document.getElementById("receivedDesc").innerText = Bata.desc;
    document.getElementById("receivedPrice").innerText = "KES. " + Bata.Price;
}