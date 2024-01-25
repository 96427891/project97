var message;
one = 1
function send1(){
    message = document.getElementById("input").value;
    document.getElementById("notestorage1").innerHTML = message + "<hr><br>";
    
};
function send2(){
    message = document.getElementById("input").value;
    document.getElementById("notestorage2").innerHTML = message + "<hr><br>";
    
};
function send3(){
    message = document.getElementById("input").value;
    document.getElementById("notestorage3").innerHTML = message + "<hr><br>";
    
};
function send4(){
    message = document.getElementById("input").value;
    document.getElementById("notestorage4").innerHTML = message + "<hr><br>";
    
};
function send5(){
    message = document.getElementById("input").value;
    document.getElementById("notestorage5").innerHTML = message + "<hr><br>";
    counter = 1
    if(counter == one){
     document.getElementById("warning_note").innerHTML = "<h3>Too many notes!</h3>"
    };
};
function remove(){
    document.getElementById("notestorage1").innerHTML = "";
    document.getElementById("notestorage2").innerHTML = "";
    document.getElementById("notestorage3").innerHTML = "";
    document.getElementById("notestorage4").innerHTML = "";
    document.getElementById("notestorage5").innerHTML = "";
}