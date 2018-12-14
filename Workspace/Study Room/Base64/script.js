var handleFileSelect = function (evt) {
    var files = evt.target.files;
    var file = files[0];
    if (files && file) {
        var reader = new FileReader();
        if (file.type === "application/x-zip-compressed") {
            reader.onload = function (readerEvt) {
                var arrayBuffer = readerEvt.target.result;
                var base64Data = base64ArrayBuffer(arrayBuffer);
                saveText(base64Data, "text/plain");
            };
            reader.readAsArrayBuffer(file);
        }
        if (file.type === "text/plain") {
            reader.onload = function (readerEvt) {
                var results =  readerEvt.target.result;;
                saveZip(results, "application/x-zip-compressed");
            };
            reader.readAsText(file);
        }

    }
};

if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('filePicker').addEventListener('change', handleFileSelect, false);
} else {
    alert('The File APIs are not fully supported in this browser.');
}
var _base64ToArrayBuffer = function (base64) {
    var binary_string = window.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
}
var saveZip = (function () {
    return function (data, type) {
        var data = _base64ToArrayBuffer(data);
        var blob = new Blob([data], { type: type });
        var link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
        link.href = URL.createObjectURL(blob);
        link.download = "data.zip";
        link.click();
    };
} ());


var saveText = (function () {
    return function (data, type) {
        var blob = new Blob([data], { type: type });
        var link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
        link.href = window.URL.createObjectURL(blob);
        link.download = "data.txt";
        link.click();
    };
} ());


function base64ArrayBuffer(arrayBuffer) {
    var base64 = ''
    var encodings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'

    var bytes = new Uint8Array(arrayBuffer)
    var byteLength = bytes.byteLength
    var byteRemainder = byteLength % 3
    var mainLength = byteLength - byteRemainder

    var a, b, c, d
    var chunk

    // Main loop deals with bytes in chunks of 3
    for (var i = 0; i < mainLength; i = i + 3) {
        // Combine the three bytes into a single integer
        chunk = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2]

        // Use bitmasks to extract 6-bit segments from the triplet
        a = (chunk & 16515072) >> 18 // 16515072 = (2^6 - 1) << 18
        b = (chunk & 258048) >> 12 // 258048   = (2^6 - 1) << 12
        c = (chunk & 4032) >> 6 // 4032     = (2^6 - 1) << 6
        d = chunk & 63               // 63       = 2^6 - 1

        // Convert the raw binary segments to the appropriate ASCII encoding
        base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d]
    }

    // Deal with the remaining bytes and padding
    if (byteRemainder == 1) {
        chunk = bytes[mainLength]

        a = (chunk & 252) >> 2 // 252 = (2^6 - 1) << 2

        // Set the 4 least significant bits to zero
        b = (chunk & 3) << 4 // 3   = 2^2 - 1

        base64 += encodings[a] + encodings[b] + '=='
    } else if (byteRemainder == 2) {
        chunk = (bytes[mainLength] << 8) | bytes[mainLength + 1]

        a = (chunk & 64512) >> 10 // 64512 = (2^6 - 1) << 10
        b = (chunk & 1008) >> 4 // 1008  = (2^6 - 1) << 4

        // Set the 2 least significant bits to zero
        c = (chunk & 15) << 2 // 15    = 2^4 - 1

        base64 += encodings[a] + encodings[b] + encodings[c] + '='
    }

    return base64
}

