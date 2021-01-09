var i = 0;
var x;

if (window.XMLHttpRequest)
{// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
}
else
{// code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttp.open("GET","file:///D:/Assignment%202b/safe_signs_limited/docs/common/products.xml",false);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML;

x=xmlDoc.getElementsByTagName("product");
i=0;

function displayProducts()
{
    let title=(x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue);
    let material=(x[i].getElementsByTagName("material")[0].childNodes[0].nodeValue);
    let thickness=(x[i].getElementsByTagName("thickness")[0].childNodes[0].nodeValue);
    let lifespan=(x[i].getElementsByTagName("lifespan")[0].childNodes[0].nodeValue);
    let coating=(x[i].getElementsByTagName("coating")[0].childNodes[0].nodeValue);
    let edgesAndMount=(x[i].getElementsByTagName("EdgesAndMount")[0].childNodes[0].nodeValue);
    let price=(x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue);
    let txt="title: " + title + "<br>Material: " + material + "<br>thickness: "+ thickness  + "<br>lifespan: " + lifespan + "<br>coating: "+ coating + "<br>edgesAndMount: " + edgesAndMount + "<br> price:" + price;
    document.getElementById("show").innerHTML=txt;
}

function next()
{
    if (i<x.length-1)
    {
        i++;
        displayProducts();
    }
}

function previous()
{
    if (i>0)
    {
        i--;
        displayProducts();
    }
}

console.log(x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue);