
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
