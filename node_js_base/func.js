const  { odd, even} = require('./var');


function check(num){

    if(num % 2){
        return odd;
    }
    return even;

}

module.exports = check