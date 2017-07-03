[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

# test-for-moneo
This project demonstrates on how you can implement the [moneo plugin / middleware](https://github.com/srfrnk/moneo/) for Mongoose to Neo4j.

The project file structure
* [`bin/www`](bin/www) - variable declarations for the connections to mongoose and moneo [Note: oneo connection is same as neo4j. We use the localhost with post number `7474`] . Also, the port number `3000` is used in the project to know; if the server is working or not.

* [`connection/mongofile.js`](connection/mongofile.js) - mongoose connection

* [`connection/moneofile.js`](connection/moneofile.js) - moneo connection and sample data for two mongoose data models i.e. user and notice

* [`model/userModel.js`](model/userModel.js) - Mongoose schema and data model for user sample data. Also, cypherQuery i.e. query to fetch data from neo4j graph database

* [`model/noticeModel.js`](model/noticeModel.js) - Mongoose schema and data model for notice sample data. Also, cypherQuery i.e. query to fetch data from neo4j graph database

## Installation
cd into folder `test-for-neo` then

    npm install -save

##### Note
    Keep mongodb and neo4j started before running !
## Run

    nodemon bin/www

### Credits
This application uses Open Source components. You can find the source code of their open source projects along with license information below. We acknowledge and are grateful to these developers for their contributions to open source.
* Project: [node-mongodb-neo4j](https://github.com/akarsh/node-mongodb-neo4j)

  Author: [Nicolas Ibanheiz](https://github.com/Ibanheiz)

  License: [ISC](https://github.com/akarsh/node-mongodb-neo4j)

* Project: [moneo](https://github.com/srfrnk/moneo)

  Author: [Shahar Frank](https://github.com/srfrnk)

  License: [MIT](https://github.com/srfrnk/moneo/blob/master/LICENSE.txt)
