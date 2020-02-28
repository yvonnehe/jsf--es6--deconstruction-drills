
// question

var obj = {
    name: "Name",
};
// standard
var name = obj.name;
// desconstruct
var {name} = obj;


// question

var obj = {
    name: "Name",
    age: 24,
    job: "Dolphin shaver",
};
// standard
var name = obj.name;
var age = obj.age;
var job = obj.job;
// desconstruct


// question

var obj = {
    name: "Name",
    age: 24,
    job: "Dolphin shaver",
};
// standard
var name = obj.name;
var job = obj.job;
// desconstruct



// question

var apiResult = {
    articles: [{
        id: 1, title: "title", intro: "content",
    }],
    errorMessage: null,
    timeStamp: "2020-01-12 12:34",
};
// standard
var articles = apiResult.articles;
var errorMessage = apiResult.errorMessage;
var timeStamp = apiResult.timeStamp;
// desconstruct



// question

var apiResult = {
    articles: [{
        id: 1, title: "title", intro: "content",
    }],
    errorMessage: null,
    timeStamp: "2020-01-12 12:34",
};
// standard
var articles = apiResult.articles;
var errorMessage = apiResult.errorMessage;
// desconstruct


/**
 * Parameter deconstruction
 */

// question

var obj = {
    name: "Name",
};
testFunction(obj);
// standard
function testFunction(obj) {
    var name = obj.name;

    // function code...
}
// desconstruct
function testFunction({ name }) {
    // function code...
}


// question

var obj = {
    name: "Name",
    age: 24,
    job: "Dolphin shaver",
};
testFunction(obj);
// standard
function testFunction(obj) {
    var name = obj.name;
    var age = obj.age;
    var job = obj.job;
    // function code...
}
// desconstruct



// question

var obj = {
    name: "Name",
    age: 24,
    job: "Dolphin shaver",
};
testFunction(obj);
// standard
function testFunction(obj) {
    var name = obj.name;
    var job = obj.job;
    // function code...
}
// desconstruct




// question

var apiResult = {
    articles: [{
        id: 1, title: "title", intro: "content",
    }],
    errorMessage: null,
    timeStamp: "2020-01-12 12:34",
};
testFunction(apiResult);
// standard
function testFunction(apiResult) {
    var articles = apiResult.articles;
    var errorMessage = apiResult.errorMessage;
    var timeStamp = apiResult.timeStamp;
    // function code...
}
// desconstruct



// question

var apiResult = {
    articles: [{
        id: 1, title: "title", intro: "content",
    }],
    errorMessage: null,
    timeStamp: "2020-01-12 12:34",
};
testFunction(apiResult);
// standard
function testFunction(apiResult) {
    var articles = apiResult.articles;
    var errorMessage = apiResult.errorMessage;
    // function code...
}
// desconstruct
