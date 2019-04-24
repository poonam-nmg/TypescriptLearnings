interface Person
{
	firstname: string,
	lastname: string,
	fun: ()=>void
}

let P1:Person =
{
	firstname:"Sachin",
	lastname:"Tendulkar",
  
    get fun() {
        return this._fun;
    },
    set fun(value) {
        this._fun = value;
    },
}

P1.fun(); 