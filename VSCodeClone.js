function displayNone(){
    document.getElementById("secc1").style.display = "none";
    document.getElementById("secc2").style.display = "none";
    document.getElementById("secc3").style.display = "none";
}
function displayFlex(){
    document.getElementById("secc1").style.display = "flex";
    document.getElementById("secc2").style.display = "flex";
    document.getElementById("secc3").style.display = "flex";
}
mainsecc1 = document.querySelector(".mainsecc1");
b1 = true;
mainsecc1.addEventListener('click',function(){
    if(b1){
        mainsecc1.innerHTML = '<img class="invert1" src="images/chevron-right.svg" alt="">UNTITLED (WORKSPACE)<br>';
        document.querySelector(".mainsecc2").style.display = "none";
        displayNone();
        b1 = false;
    }
    else{
        mainsecc1.innerHTML = '<img class="invert1" src="images/chevron-down.svg" alt="">UNTITLED (WORKSPACE)<br>';
        document.querySelector(".mainsecc2").style.display = "flex";
        displayFlex();
        b1 = true;
    }
});
mainsecc2 = document.querySelector(".mainsecc2");
b2 = true;
mainsecc2.addEventListener('click',function(){
    if(b2){
        mainsecc2.innerHTML = '<img class="invert1" src="images/chevron-right.svg" alt=""><img class="pad" src="images/folder-vscode.svg" alt="">VSCodeClone<br>';
        displayNone();
        b2 = false;
    }
    else{
        mainsecc2.innerHTML = '<img class="invert1" src="images/chevron-down.svg" alt=""><img class="pad" src="images/folder-vscode-open.svg" alt="">VSCodeClone<br>';
        displayFlex();
        b2 = true;
    }
});