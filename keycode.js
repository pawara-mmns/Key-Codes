document.addEventListener("keyup", procesKeyEvent);

const code = document.getElementById("code");
const which = document.getElementById("which");
const key = document.getElementById("key");
const keyCode = document.getElementById("keyCode");
const keyPressed = document.getElementById("key-pressed");

function procesKeyEvent(e){
    // console.log(e);

    // if(e.key == "Enter"){
    //     document.body.style.backgroundColor = "lightcoral";
    // }
    
    if(e.code){
        code.innerText = e.code;
    }
    if(e.which){
        which.innerText = e.which;
    }
    if(e.key){
        key.innerText = e.key;
        keyPressed.innerText = e.key;
        
    }
    if(e.code){
        keyCode.innerText = e.keyCode;
    }

}