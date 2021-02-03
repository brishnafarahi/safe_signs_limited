if (window.XMLHttpRequest)
{// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
}
else
{// code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttp.open("GET","https://brishnafarahi.github.io/safe_signs_limited/common/products.xml",false);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML;

x=xmlDoc.getElementsByTagName("product");

index_card1=0;
index_card2=0;
index_card3=0;
index_card4=0;
index_card5=0;
index_card6=4;
index_card7=4;
index_card8=4;
index_card9=4;
index_card10=4;

function displayCard(index) {
    let title=(x[index].getElementsByTagName("title")[0].childNodes[0].nodeValue);
    let material=(x[index].getElementsByTagName("material")[0].childNodes[0].nodeValue);
    let thickness=(x[index].getElementsByTagName("thickness")[0].childNodes[0].nodeValue);
    let lifespan=(x[index].getElementsByTagName("lifespan")[0].childNodes[0].nodeValue);
    let coating=(x[index].getElementsByTagName("coating")[0].childNodes[0].nodeValue);
    let edgesAndMount=(x[index].getElementsByTagName("EdgesAndMount")[0].childNodes[0].nodeValue);
    let price=(x[index].getElementsByTagName("price")[0].childNodes[0].nodeValue);
    let txt="Title: " + title + "<br>Material: " + material + "<br>Thickness: "+ thickness  + "<br>Lifespan: " + lifespan + "<br>Coating: "+ coating + "<br>Edges And Mount: " + edgesAndMount + "<br> Price:" + price;
    return txt
}

function next1()
{
    if (index_card1<3)
    {
        index_card1++;
        document.getElementById("card1").innerHTML=displayCard(index_card1);
    }
}
function previous1()
{
    if (index_card1>0)
    {
        index_card1--;
        document.getElementById("card1").innerHTML=displayCard(index_card1);
    }
}

function next2()
{
    if (index_card2<3)
    {
        index_card2++;
        document.getElementById("card2").innerHTML=displayCard(index_card2);
    }
}
function previous2()
{
    if (index_card2>0)
    {
        index_card2--;
        document.getElementById("card2").innerHTML=displayCard(index_card2);
    }
}

function next3()
{
    if (index_card3<3)
    {
        index_card3++;
        document.getElementById("card3").innerHTML=displayCard(index_card3);
    }
}
function previous3()
{
    if (index_card3>0)
    {
        index_card3--;
        document.getElementById("card3").innerHTML=displayCard(index_card3);
    }
}

function next4()
{
    if (index_card4<3)
    {
        index_card4++;
        document.getElementById("card4").innerHTML=displayCard(index_card4);
    }
}
function previous4()
{
    if (index_card4>0)
    {
        index_card1--;
        document.getElementById("card4").innerHTML=displayCard(index_card4);
    }
}

function next5()
{
    if (index_card5<3)
    {
        index_card5++;
        document.getElementById("card5").innerHTML=displayCard(index_card5);
    }
}
function previous5()
{
    if (index_card5>0)
    {
        index_card5--;
        document.getElementById("card5").innerHTML=displayCard(index_card5);
    }
}


function next6()
{
    if (index_card6<7)
    {
        index_card6++;
        document.getElementById("card6").innerHTML=displayCard(index_card6);
    }
}
function previous6()
{
    if (index_card6>4)
    {
        index_card6--;
        document.getElementById("card6").innerHTML=displayCard(index_card6);
    }
}

function next7()
{
    if (index_card7<7)
    {
        index_card7++;
        document.getElementById("card7").innerHTML=displayCard(index_card7);
    }
}
function previous7()
{
    if (index_card7>4)
    {
        index_card7--;
        document.getElementById("card7").innerHTML=displayCard(index_card7);
    }
}

function next8()
{
    if (index_card8<7)
    {
        index_card8++;
        document.getElementById("card8").innerHTML=displayCard(index_card8);
    }
}
function previous8()
{
    if (index_card8>4)
    {
        index_card8--;
        document.getElementById("card8").innerHTML=displayCard(index_card8);
    }
}

function next9()
{
    if (index_card9<7)
    {
        index_card9++;
        document.getElementById("card9").innerHTML=displayCard(index_card9);
    }
}
function previous9()
{
    if (index_card9>4)
    {
        index_card9--;
        document.getElementById("card9").innerHTML=displayCard(index_card9);
    }
}

function next10()
{
    if (index_card10<7)
    {
        index_card10++;
        document.getElementById("card10").innerHTML=displayCard(index_card10);
    }
}
function previous10()
{
    if (index_card10>4)
    {
        index_card10--;
        document.getElementById("card10").innerHTML=displayCard(index_card10);
    }
}