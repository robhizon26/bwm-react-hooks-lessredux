This is the converted project from the online training material [React, Angular, Node In-Depth Guide: Beginner to Pro (2020)](https://www.udemy.com/course/react-angular-node-in-depth-guide-beginner-to-pro-2020/) in Udemy by Filip Jerga with source code [here](https://github.com/robhizon26/bwm-react-rohi). 

I changed the project using React Hooks replacing class-based components with functional components and I also changed Redux with custom hooks as the whole state management approach.   

If you want to see my code that is still using Redux, you can find it [here](https://github.com/robhizon26/bwm-react-hooks).

## How to run this project

Create `dev.js` file in `server/config/dev.js` with content of:
```javascript
module.exports = {
  DB_URI: 'your_mongo_db_connection_string', // Get it here -> https://www.mongodb.com/
  JWT_SECRET: 'some_unique_value' // e.g: 'dasid7asd7xc68zxc!'
  CLOUDINARY_NAME: 'your_cloudinary_name', 
  CLOUDINARY_KEY: 'your_cloudinary_key', 
  CLOUDINARY_SECRET: 'your_cloudinary_secret'
}
```

Create `.env` file in the root folder with content of:
```javascript
REACT_APP_TOMTOM_APIKEY=`your_TOMTOM_API_key`
```


In base folder of project run `npm install` and then `npm start`

To run api server navigate to server folder `cd server` and run `node index.js`

## How to populate DB

In case your `dev.js` file is created you can run in `server` folder command to populate database `node fakeDB/cleanDB.js`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
 