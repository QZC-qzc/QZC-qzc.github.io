window.onload = function (){
    var total=0;
    document.getElementById("QZC1").onclick=function(){
    var item=document.getElementById("order");
        item.options.add(new Option('$1.95-Espresso'));
    total=total+1.95;
    document.getElementById("total").innerHTML="Total:$"+total.toFixed(2);
        document.getElementById("clear_order").onclick=function(){
        total=0;
        document.getElementById("order").options.length=0;
        document.getElementById("total").innerHTML="Total:$"+total.toFixed(2);
    }
    }
    document.getElementById("QZC2").onclick=function(){
    var item=document.getElementById("order");
        item.options.add(new Option('$2.95-Latte'));
    total=total+2.95;
    document.getElementById("total").innerHTML="Total:$"+total.toFixed(2);
        document.getElementById("clear_order").onclick=function(){
        total=0;
        document.getElementById("order").options.length=0;
        document.getElementById("total").innerHTML="Total:$"+total.toFixed(2);
    }
    }
    document.getElementById("QZC3").onclick=function(){
    var item=document.getElementById("order");
        item.options.add(new Option('$3.45-Cappuccino'));
    total=total+3.45;
    document.getElementById("total").innerHTML="Total:$"+total.toFixed(2);
        document.getElementById("clear_order").onclick=function(){
        total=0;
        document.getElementById("order").options.length=0;
        document.getElementById("total").innerHTML="Total:$"+total.toFixed(2);
    }
    }
    document.getElementById("QZC4").onclick=function(){
    var item=document.getElementById("order");
        item.options.add(new Option('$1.75-Drip coffee'));
    total=total+1.75;
    document.getElementById("total").innerHTML="Total:$"+total.toFixed(2);
        document.getElementById("clear_order").onclick=function(){
        total=0;
        document.getElementById("order").options.length=0;
        document.getElementById("total").innerHTML="Total:$"+total.toFixed(2);
    }
    }
    document.getElementById("QZC5").onclick=function(){
    var item=document.getElementById("order");
        item.options.add(new Option('$1.95-Biscotti'));
    total=total+1.95;
    document.getElementById("total").innerHTML="Total:$"+total.toFixed(2);
        document.getElementById("clear_order").onclick=function(){
        total=0;
        document.getElementById("order").options.length=0;
        document.getElementById("total").innerHTML="Total:$"+total.toFixed(2);
    }
    }
    document.getElementById("QZC6").onclick=function(){
    var item=document.getElementById("order");
        item.options.add(new Option('$2.95-Scone'));
    total=total+2.95;
    document.getElementById("total").innerHTML="Total:$"+total.toFixed(2);
        document.getElementById("clear_order").onclick=function(){
        total=0;
        document.getElementById("order").options.length=0;
        document.getElementById("total").innerHTML="Total:$"+total.toFixed(2);
    }
    }
}
