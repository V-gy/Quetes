process.stdin.resume()
process.stdin.setEncoding('utf8')

console.log('Can you give me a number please?')
process.stdin.on('data', (num) => {
    if(num > 0 && num <= 99){
        console.log("I think you birth in " + (2019 - num));
    }else if(num > 99){
        console.log("You can't be so old !!!");
    }else{
        console.log("Sorry it's not a number");
    }
    process.exit()
})
