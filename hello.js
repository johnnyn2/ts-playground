var printName = function (obj) {
    var age = obj.age;
    if (typeof age === 'string') {
        console.log(Number(age));
    }
    else {
        console.log(age);
    }
};
function welcomePeople(x) {
    if (Array.isArray(x)) {
        console.log("Hello, " + x.join(" and "));
    }
    else {
        console.log(x.toLowerCase());
    }
}
/** Type Assertions */
var myCanvas = document.getElementById('myCanvas');
function printText(s, alignment) {
    switch (alignment) {
        case 'center': return 0;
        case 'left': return -1;
        case 'right': return 1;
    }
}
var req = { url: 'https://google.com', method: 'GET' };
function handleRequest(url, method) {
}
handleRequest(req.url, req.method);
/** Not null */
function nonNull(x) {
    x.toFixed();
}
nonNull();
