const { test, expect  } = require("@jest/globals");

const cloneArray = require('./cloneArray')


test('properly clones an Array ', ()=>{
    const array = [1,2,3,4]
    // const array2 = [1,2,3]
    //expect(cloneArray(array)).toBe(array)  -- pass by reference 
    expect(cloneArray(array)).toEqual(array)  
    expect(cloneArray(array)).not.toBe(array) 
})