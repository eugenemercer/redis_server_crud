# CRUD Redis App

[![N|Solid](https://m.popkey.co/977f82/veaOk.gif)](https://nodesource.com/products/nsolid)

As basic as it sounds its a side project i created in less than 1 hour and im pretty proud of myself

  - SemanticUI
  - Handlebars Templating
  - Magic

# You can:
  - Create a user
  - Search for a user
  working on Remove and additional functionality.

    I ran into difficulty finding how to install Redis and launch the server as I assumed it was different from MySQL and MongoDB. It is and the syntax is different 'HGETALL' instead of MongoDB's query search. however Redis documentation was easy to read and resources I found in less than 30s on stackoverflow. I will build with Redis in the future I value their minimal resources and easy setup.

I also loved writing in JavaScript and with this project gotten the hang of () => ES6 function syntax. right. Even automated my server start script to initialize nodemon.

### Tech



* Visual Studio Code - keybindings, integrated terminal, dual editors.
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework [@tjholowaychuk]
* Nodemon - Restart node apps on the go
* Redis - In-memory database
* SemanticUI - good UI

### Installation

This app requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd redisusers
$ npm install -d
$ npm start
```


### Development

Want to contribute? Great!
    Could use help with adding users and session key stores, tests and more.

### Todos

 - Write Tests
 -  Add User functionality
