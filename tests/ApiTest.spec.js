const{test , expect } = require ("@playwright/test")
const { request } = require("http")
var userId;

test("get Users" , async ({request}) => {

    const response = await request.get('https://reqres.in/api/users?page=2')
    console.log(await response.json())
    expect(response.status()).toBe(200)
})

test("post request", async ({ request }) => {
    const response = await request.post('https://reqres.in/api/users', {
      data: { name: "ramkumarperiyasamy", job: "Intern" },
      headers: { Accept: "application/json" },
    });
  
    const res = await response.json(); // Parse the response JSON once
    console.log(res);
    expect(response.status()).toBe(201);
  
    // Save the user ID for later use
    userId = res.id;
    console.log("User ID:", userId);
  });
  
  test("Update Request", async ({ request }) => {
    if (!userId) {
      throw new Error("User ID is not available. Ensure the POST request test has run successfully.");
    }
  
    const response = await request.put(`https://reqres.in/api/users/${userId}`, {
      data: { name: "ramkumarperiyasamy", job: "SDET" },
      headers: { Accept: "application/json" },
    });
  
    const res = await response.json();
    console.log(res);
    expect(response.status()).toBe(200);
  });
  

test("delete Request" , async ({request}) => {

    const response = await request.delete('https://reqres.in/api/users'+userId)
    expect(response.status()).toBe(204);
})