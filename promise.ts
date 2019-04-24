console.log("Person 1 : shows tic");
console.log("Person 2 : shows tic");

//person 3 forgets it's tic and promised to show as soon as friend arrive 
// frind comes and he is hungry , buys pizza , then shows tics

const friendArrivingWithTic = new Promise(function(resolve,reject)
{
    setTimeout(() => {
        let friendArrived = 0;
        if (friendArrived)
        {
            resolve('friend have tics; ')
        }
        else
        {
            reject('fails to show tic')
        }
    }, 1000); //waiting for friend - 1000 (1sec) is timer
    
})

const friendIsHungry = friendArrivingWithTic.then(function(result){
    return new Promise((resolve,reject)=>
    {
        //resolve(result + "friend is hungry ;")
        resolve(result + "...resolved... ")
    })
}).catch(function(result)
{
    console.log("\n friendIsHungry -> catch ...")
  print();
    
})


const friendbuysPizza = friendIsHungry.then(function(result)
{
    console.log("\n friendbuysPizza -> then ...")
    return new Promise((resolve,reject)=>
    {
        resolve(result + "   buys pizza ;")
    })
}).catch(function(result)
{

    console.log("\n friendbuysPizza -> catch ...")
    print();
})

const friendShowsTicks = friendbuysPizza.then(function(result)
{
    console.log("\n friendShowsTicks -> then .....")
    return new Promise((resolve,reject)=>{
        resolve(result + "  1111111 shows tics ;")
    })
}).catch(function()
{
    console.log("\n friendShowsTicks -> catch .....")
    //print();
})

friendShowsTicks.then(function(result)
{
    console.log(`Person 3 :  ${result}`);
}).catch(function(result)
{
    console.log("\n friendshowsticks -> catch ...")
    //print();
    
})
