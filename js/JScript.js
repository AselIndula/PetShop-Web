
//changing font size
var sizeU=23;
//increase font size
function upFont(){
    sizeU+=2;
    if(sizeU>40){
        sizeU=40;
    }
    var s=document.getElementsByTagName('p');
    for(var i=0;i<s.length;i++)
    {
        s[i].setAttribute("style","font-size:"+sizeU+"px");
    }

}

//decrease font size
function dFont(){
    sizeU-=2;
    if(sizeU<12){
        sizeU=12;
    }
    var s=document.getElementsByTagName('p');
    for(var i=0;i<s.length;i++)
    {
        s[i].setAttribute("style","font-size:"+sizeU+"px");
    }

}

//JS for shop
var Total=0;
var Icount=0;
var Iprice=1;
var itemlist=[];
var itemName=[];
var Quantity;
var CartWindow;
var itemQuantity=[];



// add item
function addItem(num){
    Quantity = document.getElementById("p" + num).value;
    if(isNaN(Quantity)){
        alert("Invalid Quantity");
    }else if(parseInt(Quantity)>10){
        alert("You can only order 10 items for one product at once")
    }else {
        switch (num) {
            case 1:
                Iprice = 3700;
                itemName.push("Whole hearted Dog Food");
                itemQuantity.push(Quantity);
                alert(Quantity + " Whole hearted Dog Food ");
                break;
            case 2:
                Iprice = 800;
                itemName.push("Dog Belt Small");
                itemQuantity.push(Quantity);
                alert(Quantity + " Dog Belt Small Added to the cart");

                break;
            case 3:
                Iprice = 550;
                itemName.push("Whole hearted Dog Food");
                itemQuantity.push(Quantity);
                alert(Quantity + " Whole hearted Dog Food  Added to the cart");

                break;
            case 4:
                Iprice = 1850;
                itemName.push("Whole hearted Dog Food");
                itemQuantity.push(Quantity);
                alert(Quantity + " Whole hearted Dog Food  Added to the cart");

                break;
            case 5:
                Iprice = 2550;
                itemName.push("FWhole hearted Dog Foods");
                itemQuantity.push(Quantity);
                alert(Quantity + " Whole hearted Dog Food  Added to the cart");

                break;
            case 6:
                Iprice = 1200;
                itemName.push(" Dog Comb");
                itemQuantity.push(Quantity);
                alert(Quantity + "Dog Comb  Added to the cart");

                break;
        }
//calculate Total

        Total += Iprice * Quantity;
        itemlist.push(Iprice * Quantity);
        Icount += parseInt(Quantity);

        //Display the real time value in cart
        document.getElementById("total").innerHTML = "<b>Rs." + Total + "</b>";
        document.getElementById("Item").innerHTML = Icount.toString();
    }

}

//creation cart
var name;
function tCreate(){
    Tbl="<html>\n";
    Tbl+="<head>\n";
    Tbl+="<title>YOUR CART</title>\n";
    Tbl+='<link rel="stylesheet" href="css/style2.css">';
    Tbl+="</head>\n";
    Tbl+="<body>\n"
    Tbl+='<div class="picture picCart"  style="padding: 100px 0">\n';
    Tbl+="<h1>YOUR CART</h1>";
    Tbl+="</div>";
    Tbl+="<div class='mainBody'>";
    Tbl+="<table border='1'>\n";
    Tbl+="<h3>Dear, "+name+" your cart is displayed </h3>\n";
    Tbl+="<br><br>";
    Tbl+="<tr><td width='200px'>Item</td>\n";
    Tbl+="<td width='90px'>Quantity</td>\n";
    Tbl+="<td width='90px'>Price</td></tr>\n";

//creating the description
    for(var i=0; i<itemName.length; i++){
        Tbl+="<tr>\n";
        Tbl+="<td width='200px'>"+itemName[i]+"</td>\n";
        Tbl+="<td width='90px'>"+itemQuantity[i]+"</td>\n";
        Tbl+="<td width='90px'>"+itemlist[i]+"</td>\n";
        Tbl+="</tr>\n";
    }

    Tbl+="<tr>\n";
    Tbl+="<td colspan='2' width='90px'>Total</td>\n";
    Tbl+="<td width='90px'>"+Total+"</td>\n";
    Tbl+="</tr>\n";

    Tbl+="<table>\n";

    Tbl+="<a href=\"javascript:self.close()\">Exit</a>\n";
    Tbl+="</div>";

    Tbl+="</body>\n";
    Tbl+="</html>";

    return Tbl

}

//clear cart
function clearTable(){
    Icount=0;
    Total=0;
    Iprice=1;
    itemlist=[];
    itemName=[];
    itemQuantity=[];
    Quantity=0;
    document.getElementById("Total").innerHTML="<b>Rs."+Total+"</b>";
    document.getElementById("Item").innerHTML=Icount;

}

//creating the tabe
function dTable(){
    if(Total!=0){
        name=prompt("Enter Name");
        if(isNaN(name)){
            CartWindow=window.open('','pop','resizable=0,height=550,width=380');
            CartWindow.document.write(tCreate());
            CartWindow.document.close();
        }else{
            alert('Invalid  name')
        }
    }else{
        alert(' Your cart is empty !!')
    }


}




// Used to toggle the menu on small screens when clicking the more button

var isShown=false;
function show(){
    if(isShown==false){
        document.getElementById("navSml").setAttribute("style", "display:block");
        isShown=true;
    }else{
        document.getElementById("navSml").setAttribute("style", "display:none");
        isShown=false;
    }
}

//function to change the images in the slide show along with the slide number and the dot
var slideIndex = 0;
showSlides();

function showSlides() {

    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

//arrays containg the path of the images to be used
var image1Arr=["images/galle1.jpg","images/galle2.jpg","images/galle3.jpg","images/galle4.jpg","images/galle5.jpg"];
var image2Arr=["images/eden1.jpg","images/eden2.jpg","images/eden3.jpg","images/eden4.jpg","images/eden5.jpg"];
var image3Arr=["images/suriya1.jpg","images/suriya2.jpg","images/suriya3.jpg","images/suriya4.jpg","images/suriya5.jpg"];
var image4Arr=["images/ta1.jpg","images/ta2.jpg","images/ta3.jpg","images/ta4.jpg","images/ta5.jpg"];
var image5Arr=["images/taj1.jpg","images/taj2.jpg","images/taj3.jpg","images/taj4.jpg","images/taj5.jpg"];



//function to get the value of the selected index in the dropdown box
function getSelectedValue( selectList ){

    return selectList[ selectList.selectedIndex ].value;

}

//function to get the text of the selected index in the dropdown box
function getSelectedText( selectList ){

    return selectList.options[ selectList.selectedIndex ].text;

}


//function passing values update_form function to change the images and the description that is being displayed
function add_image(product) {
    var x,y,z;


    switch(product) {

        case product1:

            x="images/galle1.jpg";
            y ="product_description1";
            z =image1Arr;
            update_form(x,y,z);
            break;

        case product2:

            x="images/eden1.jpg";
            y ="product_description2";
            z =image2Arr;
            update_form(x,y,z);
            break;


        case product3:

            x="images/suriya1.jpg";
            y ="product_description3";
            z =image3Arr;
            update_form(x,y,z);

            break;
        case product4:

            x="images/ta1.jpg";
            y ="product_description4";
            z =image4Arr;
            update_form(x,y,z);


            break;
        case product5:

            x="images/taj1.jpg";
            y ="product_description5";
            z =image5Arr;
            update_form(x,y,z);

            break;
        default:

    }


    //function which updates the images and the description displayedin the form
    function update_form(x,y,z){

        document.getElementById("newimage").src =x;
        document.getElementById("newimage").style.width="500px";

        document.getElementById("decription_form").style.display = "block";
        document.getElementById("leftColumn").style.display = "block";
        document.getElementById("rightColumn").style.display = "block";
        document.getElementById("product_description").innerHTML= document.getElementById(y).innerHTML;
        sub_imgreplace(z);
        window.location = '#newimage';

    }


}


//function to change the background colour of the web page
document.getElementById("backcolor").addEventListener("change",function(){

    var bckcolor =getSelectedValue(backcolor);

    if(bckcolor==="red"){
        document.getElementById("mainBody").style.backgroundColor="red";
        // document.mainBody.style.backgroundColor = "red";
    }

    if(bckcolor==="blue"){

        document.getElementById("mainBody").style.backgroundColor="blue";
    }

    if(bckcolor==="black"){

        document.getElementById("mainBody").style.backgroundColor="black";
    }

    if(bckcolor==="white"){

        document.getElementById("mainBody").style.backgroundColor="white";
    }

    if(bckcolor==="yellow"){

        document.getElementById("mainBody").style.backgroundColor="yellow";
    }
});

//function to change the colour of text of the web page
document.getElementById("textcolor").addEventListener("change",function(){

    var txtcolor =getSelectedValue(textcolor);

    if(txtcolor==="red"){

        document.getElementById('product_description').style.color  = "red";
    }

    if(txtcolor==="blue"){

        document.getElementById('product_description').style.color  = "blue";
    }

    if(txtcolor==="black"){

        document.getElementById('product_description').style.color  = "black";
    }
});

//image replacing function
function imgreplace(name){

    document.getElementById("newimage").src = name;
    document.getElementById("newimage").style.width="500px";


}

//sub images replacing function
function sub_imgreplace(arr) {

    for(x=0;x<arr.length;x++){

        document.getElementById("sub_img"+x).src = arr[x];

    }

}
