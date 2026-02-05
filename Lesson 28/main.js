var butoni1 = document.getElementById("btn1");

butoni1.onclick = function() {
    alert("You clicked the button");
}

var butoni1 = document.querySelector('button');

butoni1.onclick = function(){
    alert('hello');
}

butoni1.addEventsListener('click', function(){
    alert('hello');
})

ourElement.addEventListener('click', funksioni1);
ourElement.addEventListener('click', funksioni2);

var button2 = document.getElementById('btn2');
var button3 = document.getElementById('btn3');
var button4 = document.getElementById('btn4');

button2.onmouseover = function(){
    alert('hello');
}

button2.onmouseleave = function(){
    alert('goodbye');
}

button2.onmousewheel = function(){
    alert('rotate');
}

var v_text = document.getElementById("btn1");

v_text.onclick = function(){
   v_text.style.color = "red";
   v_text.style.backgroundColor = "lightgrey";
   v_text.style.textAlign = "center";
   v_text.style.fontSize = "100px";
   v_text.style.padding = "20px";
}

v_text.onclick = function(){
    v_text.setAttribute("class", "test");
}


