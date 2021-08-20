function add(...args){
    let sum = 0;

    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum 
}
const sum = add(5,5,5,5,5)
console.log(sum)