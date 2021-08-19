const {test, expect} = require('@jest/globals')
const sum = require('./sum')
test('properly adds two numbers', ()=>{
    // if(sum(1,2)===3){
    //     do this 
    // }else{
    //     throw error
    // }

    expect(sum(1,3)).toBe(4)
})



// let us create a test for substraction  -- specification 
// i want to start with a test that fails 
