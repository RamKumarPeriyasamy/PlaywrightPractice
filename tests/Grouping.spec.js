import {test , expect } from '@playwright/test'

test.beforeEach(async ()=>{
    console.log("BeforeEach test are executed ..")
})

test.afterEach(async ()=>{
    console.log("AfterEach test are executed ..")
})

test.beforeAll(async ()=>{
    console.log("BeforeAll test are executed ..")
})

test.afterAll(async ()=>{
    console.log("AfterAll test are executed ..")
})

//only keyword is used for only that test will be executed 
//test.describe.only('group 1' , async () =>
//skip keyword is used for skip the specific test then remaing all test will be executed 
//test.describe.skip('group 1' , async () =>
test.describe('group 1' , async () => {

    test('Test 1' , async({page}) => {
        console.log("this is the test 1");
    })
    
    test('Test 2' , async({page}) => {
        console.log("this is the test 2");
    })
})

test.describe('Group 2' , async () => {

    test('Test 3' , async({page}) => {
        console.log("this is the test 3");
    })
    
    test('Test 4' , async({page}) => {
        console.log("this is the test 4");
    })
})
