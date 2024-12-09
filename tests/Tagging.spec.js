const{test , expect } =require('@playwright/test');

test('test1@sanity' , async({page}) => {

    console.log("test 1 is executed .....");

})

test('test2@sanity' , async({page}) => {

    console.log("test 2 is executed .....");

})


test('test3@reg' , async({page}) => {

    console.log("test 3 is executed .....");

})


test('test4@reg' , async({page}) => {

    console.log("test 4 is executed .....");

})

test('test5@sanity@reg' , async({page}) => {

    console.log("test 5 is executed .....");

})