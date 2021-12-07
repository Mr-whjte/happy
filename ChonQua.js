consoleText(['Happy Birthday Nguyên Nguyên', 'Chỉ được chọn duy nhất 1 hộp quà', 'Ký tên : Sơn Ngáo'], 'text', ['DarkViolet', 'OrangeRed']);

function consoleText(words, id, colors) {
    if (colors === undefined) colors = ['#0093E9'];
    var visible = true;
    var con = document.getElementById('console');
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id)
    target.setAttribute('style', 'color:' + colors[0])
    window.setInterval(function() {

        if (letterCount === 0 && waiting === false) {
            waiting = true;
            target.innerHTML = words[0].substring(0, letterCount)
            window.setTimeout(function() {
                var usedColor = colors.shift();
                colors.push(usedColor);
                var usedWord = words.shift();
                words.push(usedWord);
                x = 1;
                target.setAttribute('style', 'color:' + colors[0])
                letterCount += x;
                waiting = false;
            }, 500)
        } else if (letterCount === words[0].length + 1 && waiting === false) {
            waiting = true;
            window.setTimeout(function() {
                x = -1;
                letterCount += x;
                waiting = false;
            }, 500)
        } else if (waiting === false) {
            target.innerHTML = words[0].substring(0, letterCount)
            letterCount += x;
        }
    }, 80)
    window.setInterval(function() {
        if (visible === true) {
            con.className = 'console-underscore hidden'
            visible = false;

        } else {
            con.className = 'console-underscore'

            visible = true;
        }
    }, 400)
}


// chọn quà
function show_one_box_one() {
    document.querySelector(".gift_one").style.display = 'block';
}

function show_one_box_two() {
    document.querySelector(".gift_two").style.display = 'block';
}

function show_one_box_there() {
    document.querySelector(".gift_there").style.display = 'block';
}


var btuon = document.querySelector('#box1');
btuon.onclick = function() {
    document.querySelector(".gift_one").style.display = 'block';

}
var btuon = document.querySelector('#box2');
btuon.onclick = function() {
    document.querySelector(".gift_two").style.display = 'block';

}
var btuon = document.querySelector('#box3');
btuon.onclick = function() {
    document.querySelector(".gift_there").style.display = 'block';
}