
const addElment = ()=> {
    var inputEle = document.getElementById("message");
    var buttonEle = document.getElementById("add");
    var msgEle = document.getElementById("msg")

    buttonEle.onclick = ()=>{
        if(inputEle.value !== ""){
            msgEle.innerHTML = inputEle.value;
            inputEle.value = ""
        }
    }
}

addElment();