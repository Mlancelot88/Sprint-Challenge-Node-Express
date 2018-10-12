# Review Questions

## What is Node.js?
Answer: `Node.js` is a JavaScript runtime environment. It allows the user to execute JS code outside of a browser window, thus allowing for server-side scripting.

## What is Express?
Answer: `Express` is a web application framework for Node. Though it has a range of uses, it is most commonly used for building servers and APIs.

## Mention two parts of Express that you learned about this week.
Answer: Express `routers` are ideal for compartmentalizing request handlers, making it easier to organize and navigate through them.

Express has different types of `middleware`: not only regular middleware, but error handling middleware. These can be used to bypass regular middleware in order to catch and deal with certain errors.

## What is Middleware?
Answer: `Middleware` in Express are functions that can take request objects, response objects, and the next middleware in the development cycle. They can execute code and apply changes to the request and response before handing them off to the next middleware.

## What is a Resource?
Answer: `Resources` are what Express has access to via URL routes. These can be anything, and allow you to perform such actions as making GET and POST requests to a user database.

## What can the API return to help clients know if a request was successful?
Answer: Status codes. These `status codes` can, at a glance, help clients know if the request was successful or not.

## How can we partition our application into sub-applications?
Answer: We can partition our applications via `routers`. This practice helps in making resource handling more modular.

## What is express.json() and why do we need it?
Answer: `express.json()` is middleware that comes built-in to Express. We need it in order to parse incoming requests with JSON payloads, which our application is then able to use.
