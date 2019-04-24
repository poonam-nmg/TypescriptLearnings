;
var kvProcessor = /** @class */ (function () {
    function kvProcessor() {
    }
    kvProcessor.prototype.process = function (key, val) {
        console.log("Key = " + key + ", val = " + val);
    };
    return kvProcessor;
}());
;
function processKeyPairs(key, value) {
    console.log("processKeyPairs: key = " + key + ", value = " + value);
}
var numKVProcessor = processKeyPairs;
numKVProcessor(1, 12345); //Output: processKeyPairs: key = 1, value = 12345 
var strKVProcessor = processKeyPairs;
strKVProcessor(1, "Bill"); //Output: processKeyPairs: key = 1, value = Bill 
var proc = new kvProcessor();
proc.process(1, 'Bill'); //Output: processKeyPairs: key = 1, value = Bill 
var KeyValuePair = /** @class */ (function () {
    function KeyValuePair() {
    }
    KeyValuePair.prototype.setKeyValue = function (key, val) {
        this.key = key;
        this.val = val;
    };
    KeyValuePair.prototype.display = function () {
        console.log("Key = " + this.key + ", val = " + this.val);
    };
    return KeyValuePair;
}());
var kvp1 = new KeyValuePair();
kvp1.setKeyValue(1, "Steve");
kvp1.display(); //Output: Key = 1, Val = Steve 
var kvp2 = new KeyValuePair();
kvp2.setKeyValue("CEO", "Bill");
kvp2.display(); //Output: Key = CEO, Val = Bill
;
var kavProcessor = /** @class */ (function () {
    function kavProcessor() {
    }
    kavProcessor.prototype.proces = function (key, val) {
        console.log("Key = " + key + ", val = " + val);
    };
    return kavProcessor;
}());
var proc1 = new kavProcessor();
proc1.proces(1, 'Bill'); //Output: processKeyPairs: key = 1, value = Bill 
