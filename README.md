# Book Management Project

This is a book management project that allows you to perform various operations on a collection of books. You can add, update, delete, find books, and get a list of books through the provided API endpoints.

## API Endpoints

1. **addBook**
   - Endpoint: `/addBook`
   - Description: Add a new book to the collection.
   - HTTP Method: POST

2. **updateBook**
   - Endpoint: `/updateBook`
   - Description: Update a book using its unique Mongoose ID.
   - HTTP Method: PUT

3. **deleteBook/:id**
   - Endpoint: `/deleteBook/:id`
   - Description: Delete a book by specifying its ID as a parameter in the request URL.
   - HTTP Method: DELETE

4. **getAllBookList**
   - Endpoint: `/getAllBookList`
   - Description: Retrieve a list of all the books in the collection.
   - HTTP Method: GET

5. **getBookByBookId/:id**
   - Endpoint: `/getBookByBookId/:id`
   - Description: Get details of a specific book by specifying its Mongoose ID as a parameter in the request URL.
   - HTTP Method: GET

## Setup Instructions

To set up this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/sajiddev207/manage-books.git
   ```

2. Create a `.env` file in the project root directory and define the following environment variables:

   ```
   PORT=[Specify the desired port number]
   MONGO_URL=[Specify the MongoDB database URL]
   ```

3. Install project dependencies using npm:
   ```bash
   npm install
   ```

4. Start the project using nodemon:
   ```bash
   nodemon
   ```

Now, you can access and test the Book Management API on your local server.

## Live on server also 

1. make account on amazon it provide us free server for some time
2. after that set the password and open it on terminal 
3. install nginx, node, mongodb into server 
4. clone the git repo into it intall the dependencies with npm i after that make .env file into it same describe above. 
5. pm2 start app.js ( when port is not allow where your project is running than allow it from setting of amazon website where you create account)


**live url = http://34.236.146.248:8080/api/${endpoint}**




## Dependencies Used

This project utilizes the following dependencies:

- **body-parser**: For parsing request body data.
- **cors**: To handle Cross-Origin Resource Sharing (CORS) for API access.
- **dotenv**: For loading environment variables from the `.env` file.
- **express**: The web application framework for building the API.
- **joi**: A validation library for request data validation.
- **mongoose**: An Object Data Modeling (ODM) library for MongoDB, used for database operations.

Make sure to install these dependencies using `npm install` as mentioned in the setup instructions.

Feel free to use and customize this README for your project as needed.