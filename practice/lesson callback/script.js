function first () {
    //Что-то делаем
    setTimeout( function() {
        console.log(1);

    },500)
}

function second () {
    console.log(2);
}

first();
second();

function learnjs (lang, callback) {
    console.log("Я учу " + lang);
    callback();
}

learnjs("JS", function() {
    console.log("Я прошел 3 урок")
})

function learnjs (lang, callback) {
    console.log("Я учу " + lang);
    callback();
}
function done() {
    console.log("Я прошел 3 урок")
}
    

learnjs("JS", done);