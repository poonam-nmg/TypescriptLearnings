function add(x, y) {
    return x + y;
}
var myAdd1 = function (x, y) { return x + y; };
var myAdd = function (x, y) { return x + y; };
function buildName(firstName, middleName, lastName) {
    if (middleName === void 0) { middleName = "Smith"; }
    // if (lastName)
    return firstName + " " + middleName + " " + lastName;
    // else
    //   return firstName+ " " + middleName;
}
var result1 = buildName("Bob"); // works correctly now
//let result2 = buildName("Bob", "Adams", "Sr.",""jr");  // error, too many parameters
var result3 = buildName("Bob", "Adams"); // ah, just right
var result2 = buildName("Bob", "Adams", "Sr.");
var result4 = buildName("Bob", undefined);
console.log(result1 + "			" + result2 + "			" + result3 + "			" + result4 + "			");
function buildNae(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
// employeeName will be "Joseph Samuel Lucas MacKinzie"
var employeeName = buildNae("Joseph", "Samuel", "Lucas", "MacKinzie");
var buildNameFun = buildNae;
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
