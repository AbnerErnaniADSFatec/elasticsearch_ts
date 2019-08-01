"use strict";
exports.__esModule = true;
var HelloElasticSearch = /** @class */ (function () {
    function HelloElasticSearch() {
    }
    HelloElasticSearch.prototype.hello = function () {
        console.log("Hello Faster Searches with Elastic!!!!");
    };
    return HelloElasticSearch;
}());
exports.HelloElasticSearch = HelloElasticSearch;
var elastic = new HelloElasticSearch();
elastic.hello();
