function paru() {
    var chattayiStatus = "alive"
    var chettayiResponse = prompt("Chettayi");
    if (chettayiResponse && chettayiResponse.toLowerCase() == "entho") {
        alert("onnulla");
    }
    do {
        paru();
    }
    while (chattayiStatus == "alive")
}