const {test, expect} = require('@jest/globals')
const subtract = require('./subtract')
test('properly  subtract two  numbers', ()=>{
    // if(sum(1,2)===3){
    //     do this 
    // }else{
    //     throw error
    // }

    expect(subtract(5,3)).toBe(2)
})