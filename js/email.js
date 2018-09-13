document.body.innerHTML = document.body.innerHTML.replace(/(<(pre|script|style|textarea)[^]+?<\/\2)|(^|>)\s+|\s+(?=<|$)/g, "$1$3");

function myFocus(elem) {
    elem.previousSibling.classList.add("addTop");
    elem.nextSibling.style.width="100%";
}
function myBlur(elem){
    if(elem.value.trim()===""){
        elem.previousSibling.classList.remove("addTop");
        elem.nextSibling.style.width="0px";
    }
}
