Big Brother Retail - Reviews Component

READ AND FOLLOW THESE DIRECTIONS IN ORDER:

Change 'user' and 'pw' in config.js to your own (probably 'root', ''?)

This component uses mariadb for a DBMS. Installing mariadb may cause conflicts with your mysql, so feel free to use mysql by following the numbered steps below.
if using mariadb, skip the numbered steps.

======= TO USE MYSQL INSTEAD OF MARIADB FOLLOW THESE STEPS ==============================================================================

1. in database/index.js: change "const mariadb = require("mariadb/callback");" to "const mariadb = require("mysql");"
2. terminal command: npm install mysql
3. terminal command: mysql -u <USER> -p < schema.sql // ----> should add the database 'reviews' to your databases
4. terminal command: npm run seed // ----> seeds the database, give it about 10 seconds
5. to run webpack: npm run watch
6. to run nodemon: nodemon ./server.js localhost 3004
7. visit http://localhost:3004/?id=[id] to visit the reviews page for the corresponding id (replace [id] with a number ranging from 1-100).
8. to run the tests: npm test
9. to run the tests with a coverage report: npm test:coverage
10. IGNORE THE REST OF THE PAGE ========================================================================================================

============= FOR MARIADB ==============================================================================================================
Please ensure that mariadb is running and execute [mysql -u <USER> -p < schema.sql] to add the database followed by [npm run seed] to seed your database

to run webpack: npm run watch
to run nodemon: nodemon ./server.js localhost 3004

visit http://localhost:3004/?id=[id] to visit the reviews page for the corresponding id (replace [id] with a number ranging from 1-100).

to run the tests: npm test
to run the tests with a coverage report: npm test:coverage

========================================================================================================================================


# Single Item Service
This component renders the reviews to a product page

## Getting Started
```sh
npm install
```

## Running the tests

```sh
npm run test
```

## Running server and client locally

```sh
npm start:dev
npm run build
```

## CRUD Operations
| HTTP Verb |           Endpoint          |            Action            |
|-----------| --------------------------- | ---------------------------- |
| **POST**  |     /api/addReview/         |  CREATE a new item into DB   |
| **GET**   |     /api/allReviews/?={id}  |  READ data and return data   |
| **PATCH** |     /api/allReviews/        |  UPDATE item with new review |
| **DELETE**|     /api/allReviews/        |  DELETE item based on ID     |