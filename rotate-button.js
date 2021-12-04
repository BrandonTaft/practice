<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Button</title>
        <link rel="stylesheet" href="css/button.css" type="text/css">
    </head>
    <body>
       
        <div id="btns" class="buttonContainer">
            <button id="btn1" class="buttonClass">1</button>
            <button id="btn2" class="buttonClass">2</button>
            <button id="btn3" class="buttonClass">3</button>
            <button id="btn4" class="buttonClass">4</button>
            <button id="btn5" class="buttonClass">5</button>
            <button id="btn6" class="buttonClass">6</button>
            <button id="btn7" class="buttonClass">7</button>
            <button id="btn8" class="buttonClass">8</button>
            <button id="btn9" class="buttonClass">9</button>
        </div>
        
    </body>
</html>

#btns{
   width: 75%;
}

.buttonClass{
 width:30%;
 height:48px;
 font-size:24px;
}

/*r myBtn = document.getElementById('btn5');
myBtn.onclick=function(){
var myBtn1= document.getElementById('btn1');
myBtn1.innerHTML=4
var myBtn2= document.getElementById('btn2');
myBtn2.innerHTML=1
var myBtn3= document.getElementById('btn3');
myBtn3.innerHTML=2
var myBtn6= document.getElementById('btn6');
myBtn6.innerHTML=3
var myBtn9= document.getElementById('btn9');
myBtn9.innerHTML=6
var myBtn8= document.getElementById('btn8');
myBtn8.innerHTML=9
var myBtn7= document.getElementById('btn7');
myBtn7.innerHTML=8
var myBtn4= document.getElementById('btn4');
myBtn4.innerHTML=7

}*/
 btn5.onclick = function () { var viarableNum=btn1.innerHTML; btn1.innerHTML=btn4.innerHTML; btn4.innerHTML=btn7.innerHTML; btn7.innerHTML=btn8.innerHTML; btn8.innerHTML=btn9.innerHTML; btn9.innerHTML=btn6.innerHTML; btn6.innerHTML=btn3.innerHTML; btn3.innerHTML=btn2.innerHTML; btn2.innerHTML=viarableNum;  }
           
       
