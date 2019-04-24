interface IKeyValueProcessor<T, U>
{
    process(key: T, val: U): void;
};

class kvProcessor implements IKeyValueProcessor<number, string>
{ 
    process(key:number, val:string):void { 
        console.log(`Key = ${key}, val = ${val}`);
    }
}

interface KyValueProcessor<T, U>
{
    (key: T, val: U): void;
};


function processKeyPairs<T, U>(key:T, value:U):void { 
    console.log(`processKeyPairs: key = ${key}, value = ${value}`)
}

let numKVProcessor: KyValueProcessor<number, number> = processKeyPairs;
numKVProcessor(1, 12345); //Output: processKeyPairs: key = 1, value = 12345 

let strKVProcessor: KyValueProcessor<number, string> = processKeyPairs;
strKVProcessor(1, "Bill"); //Output: processKeyPairs: key = 1, value = Bill 


let proc: IKeyValueProcessor<number, string> = new kvProcessor();
proc.process(1, 'Bill'); //Output: processKeyPairs: key = 1, value = Bill 





class KeyValuePair<T,U>
{ 
    private key: T;
    private val: U;

    setKeyValue(key: T, val: U): void { 
        this.key = key;
        this.val = val;
    }

    display():void { 
        console.log(`Key = ${this.key}, val = ${this.val}`);
    }
}

let kvp1 = new KeyValuePair<number, string>();
kvp1.setKeyValue(1, "Steve");
kvp1.display(); //Output: Key = 1, Val = Steve 

let kvp2 = new KeyValuePair<string, string>();
kvp2.setKeyValue("CEO", "Bill"); 
kvp2.display(); //Output: Key = CEO, Val = Bill



interface IKeyVlueProcessor<T, U>
{
    proces(key: T, val: U): void;
};

class kavProcessor<T, U> implements IKeyVlueProcessor<T, U>
{ 
    proces(key:T, val:U):void { 
        console.log(`Key = ${key}, val = ${val}`);
    }
}

let proc1: IKeyVlueProcessor<number, string> = new kavProcessor();
proc1.proces(1, 'Bill'); //Output: processKeyPairs: key = 1, value = Bill 