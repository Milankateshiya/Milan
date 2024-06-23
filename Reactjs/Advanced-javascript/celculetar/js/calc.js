// clear button
function clr(){
    document.getElementById("result").value="";
}

// number on button press                     
function getResult(val){
    document.getElementById("result").value+=val;
}

// back spece button
function clrSlice()
{
    var bck=document.getElementById("result").value;
    var res=bck.slice(0,-1);
    document.getElementById("result").value=res;
}

// all airthmetic
function getFinalResult(){
    var x=document.getElementById("result").value;
    var y=eval(x);
    document.getElementById("result").value=+y
}

// create a function for sqroot
function sqrResult(){
    var number=parseInt(document.getElementById("result").value);
    var res=Math.pow(number);
    document.getElementById("result").value=res;
}

function sqrResult(){
    var number=parseInt(document.getElementById("result").value);
    var res=Math.pow(number,2);
    document.getElementById("result").value=res;
}


