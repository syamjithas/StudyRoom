

function opennew(){
var  config='height=50px,width=50px,toolbar=no,top=150,left=150,menubar=no,scrollbars=no,resizable=no';
var popup = window.open("chiled/index.html","asd",config);
}

function receiveMessage(event) {
alert(event);
}
window.addEventListener("message", receiveMessage, false);
