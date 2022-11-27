// Code your solutions in this file
 
function writeCards(strin,even){
    let newA = []
    for(let i = 0; i< strin.length; i++){
        const message = `Thank you, ${strin[i]}, for the wonderful ${even} gift!`
         newA.push(message)

    }
    return newA
    
    
}


// function countDown(integer){
//     for(let i = 0; i>=integer; i-- ) { //use ; in the ()of the for loop
//     console.log(`this is ${integer[i]} `)}

// }


function countDown(integers){
{ while(integers>integers.length){
        console.log(`this is ${integers}`)
        integer--;}
        }
        console.log(integers)
}