
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
var {name, age, job} = obj;

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
var {name, job} = obj;


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
var {articles, errorMessage, timeStamp} = apiResult; 


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
var {articles, errorMessage} = apiResult; 

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
    var {name} = obj;
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
function testFunction(obj) {
    var {name, age, job} = obj;
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
    var job = obj.job;
    // function code...
}
// desconstruct
function testFunction(obj) {
    var {name, job} = obj;
}



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
function testFunction(apiResult) {
    var {articles, errorMessage, timeStamp} = apiResult;
}


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
function testFunction(apiResult) {
    var {articles, errorMessage} = apiResult; 
}