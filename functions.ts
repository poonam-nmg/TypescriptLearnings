function add(x: number, y: number): number {
    return x + y;
}

let myAdd1 = function(x: number, y: number): number { return x + y; };

let myAdd: (baseValue: number, increment: number) => number =
    function(x: number, y: number): number { return x + y; };
	
	
function buildName(firstName: string, middleName = "Smith", lastName?: string) 
{
   // if (lastName)
        return firstName + " " + middleName + " " +lastName;
   // else
     //   return firstName+ " " + middleName;
}

let result1 = buildName("Bob");                  // works correctly now
//let result2 = buildName("Bob", "Adams", "Sr.",""jr");  // error, too many parameters
let result3 = buildName("Bob", "Adams");         // ah, just right
let result2 = buildName("Bob", "Adams", "Sr.");
let result4 = buildName("Bob", undefined);
console.log(result1 + "			" +result2 + "			" +result3 + "			" +result4 + "			" ); 
	
	
function buildNae(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

// employeeName will be "Joseph Samuel Lucas MacKinzie"
let employeeName = buildNae("Joseph", "Samuel", "Lucas", "MacKinzie");
let buildNameFun: (fname: string, ...rest: string[]) => string = buildNae;


let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
        // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log("card: " + pickedCard.card + " of " + pickedCard.suit);





