# Express Routing Lab

## Introduction

We've now seen how to write an app with Node and Express from scratch, so let's apply this concept again by creating another RESTful API using Express.

A kid has come to you with an idea for an API to keep track of his candies.  You love candies!  So, you accept his proposal. You will create a resource `Candy` and use the kid's candy "data" to populate and post to your database.

## Exercise

#### Requirements

- Create an Express app from minimal starter code
- Use a local JS `array` of candy `object`s to mimic a database of candies
- This app will only respond to/with JSON; it is just an API, so don't worry about displaying HTML or files
- The resource `Candy` should be accessible via the endpoint `/candies` and be RESTful
- Implement `index`,`show`, `create`, `update`, and `destroy` functionality

**Bonus:**
- Handle wrong responses with appropriate HTTP status and responses (404, 500, 422)
- Add some validations for `create` and `update` to make sure our candies have a `name` and a `color`

#### Your candy "database"

We will soon create a fully functioning database, but for now we can use our tools from Unit 1 to fake a database.  We will do this by creating a `candies` array, and putting candy objects inside of it. To see how we would build this array, look below at our first expected API response, for `index`.

<!-- You should model up through index and create, including creation of the candies database, then briefly talk about rest of steps -->

#### Deliverable

By the end of the lab, you should have an app with all of the 5 RESTful routes listed above.

Once you spin up your local server, open up Postman. Look below at the Postman commands, and try to get each of your 5 routes to match the expected responses. The HTTP response status should always be 2XX.

`Index` Postman Request

- Method: GET
- Endpoint: `http://localhost:3000/candies`

  - Expected Response
  `[{"id":1,"name":"Chewing Gum","color":"Red"},{"id":2,"name":"Pez","color":"Green"},{"id":3,"name":"Marshmellow","color":"Pink"},{"id":4,"name":"Candy Stick","color":"Blue"}]`

---

`Show` Postman Request

- Method: GET
- Endpoint: `http://localhost:3000/candies/3`

  - Expected Response
  `{"id":3,"name":"Marshmallow","color":"Pink"}`

---

`Create` Postman Request

- Method: POST
- Header: "Content-Type: application/json"
- Body: `{"id": 5, "name":"Jelly Belly","color":"Orange"}`
- Endpoint: `http://localhost:3000/candies`

  - Expected Response
    `{"id":5,"name":"Jelly Belly","color":"Orange"}`

---


A second `Index` Postman Request

- Method: GET
- Endpoint: `http://localhost:3000/candies`

  - Expected Response

  `[{"id":1,"name":"Chewing Gum","color":"Red"},{"id":2,"name":"Pez","color":"Green"},{"id":3,"name":"Marshmallow","color":"Pink"},{"id":4,"name":"Candy Stick","color":"Blue"},{"id": 5, "name":"Jelly Belly","color":"Orange"}]`
  > Note: The new record is sent back !

---

`Update` Postman Request

- Method: PUT
- Headers: "Content-Type: application/json"
- Body: `{"name":"Marshmallows","color":"white"}`
- Endpoint: `http://localhost:3000/candies/3`

---

Yet Another `Index` Request

- Method: GET
- Endpoint: `http://localhost:3000/candies`

  - Expected Response

  `[{"id":1,"name":"Chewing Gum","color":"Red"},{"id":2,"name":"Pez","color":"Green"},{"name":"Marshmallows","color":"white"},{"id":4,"name":"Candy Stick","color":"Blue"}]`
  
  > Note: The record corresponding to the ID passed in the first request has been updated.

---

`Destroy` Postman Request

- Method: DELETE
- Endpoint: `http://localhost:3000/candies/2`

  - Expected Response
    `{"message":"deleted"}`

---

`Index` Postman request, one last time!

- Method: GET
- Endpoint: `http://localhost:3000/candies`

 - Expected Response

  `[{"id":1,"name":"Chewing Gum","color":"Red"},null,{"id":3,"name":"Marshmallow","color":"Pink"},{"id":4,"name":"Candy Stick","color":"Blue"}]`

> Note: The record corresponding to the ID passed in the first request has been deleted.

## Additional Resources

- [Curl Manual](http://curl.haxx.se/docs/manual.html)
- [ExpressJS documentation](http://expressjs.com/4x/api.html)

## Licensing
All content is licensed under a CC­BY­NC­SA 4.0 license.
All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
