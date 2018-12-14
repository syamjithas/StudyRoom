arr = ["Loading.",
    "Loading..",
    "Loading...",
    "Loading....",
    "Loading....."
]
arr2 = ["Vaveeeeeeeeee",
    "You know you love me, I know you care",
    "Just shout whenever and I 'll be there",
    "You are my love, you are my heart",
    "And we will never, ever, ever be apart...........",
    "Love you lots vaveeeeeeee",
    "I don't know how much i miss you............",
    "When I see your face",
    "There 's not a thing that I would change",
    "Cause you 're amazing just the way you are",
    "And when you smile",
    "The whole world stops and stares for a while",
    "Cause, girl, you 're amazing just the way you are...........",
    "Can't Live without you, Cause my heart is beating for you"
]
arr2 = [];

var div = document.createElement('div')
div.classList.add('left');
var getRandom = function(n) {
    return Math.floor((Math.random() * n) + 1)
}

function wait(time) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(true);
        }, time)
    })
}
async function domWriter() {
    for (var j = 0; j < getRandom(2); j++)
        for (var i = 0; i < arr.length; i++) {
            await wait(500);
            document.querySelector('div.content').innerText = arr[i];
        }
    await wait(200);
    document.querySelector('div.content').innerText = "Loading Complated";
    await wait(200);

    document.querySelector('div.content').innerText = "";
    await wait(200);
    for (var i = 0; i < arr2.length; i++) {
        await wait(2000);
        for (var j = 0; j <= arr2[i].length; j++) {
            document.querySelector('div.left').innerText = arr2[i].substring(0, j);
            if (arr2[i][j - 1] == ",") {
                await wait(500);
            }
            await wait(50);
        }
    }
    var i = 0;
    while (true) {
        i = i == 1 ? 0 : 1;
        var ummma1 = "umma umma umma."
        var ummma2 = "ummmmmmaa..";
        var umma = i == 1 ? ummma1 : ummma2;
        var doc = div.cloneNode();
        document.body.appendChild(doc);
        for (var j = 0; j <= umma.length; j++) {
            doc.innerText = umma.substring(0, j);
            await wait(100);
        }
        document.body.removeChild(document.querySelector('div.left'))
    }

}

var started = false;
document.getElementById('heart').addEventListener("touchstart", function() {
    !started && domWriter();
    started = true;
}, false);

document.getElementById('heart').addEventListener("click", function() {
    !started && domWriter();
    started = true;
}, false);