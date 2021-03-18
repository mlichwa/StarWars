# Star Wars React App.
This readme will guide you though the installation, the code setup, the development and deployment process of the app.

## Installation
Once you clone or download this repo, use 'npm install' or 'yarn install' to get all necessary dependencies.
This app is based on the reactjs.org template and since we will be adding dependencies, it has been ejected.
You can run the app by executing the 'npm start' command in your terminal.

## Development
I'm using Github to develop this app. Majority of my work will be carried in the Develop branch. The Master branch will be used to deploy the project to the server.

## Deployment
TBD.... but for now, I'm thinking about using Github hooks to push the Master branch to the server.


## Development
There are a few libraries I decided to use in order to enhance the app. Also, I wanted to use a few of them and this small example app might be a good way for me to learn new things.

### Router
I'm using React Router to navigate between pages ( I call them tabs) with differnt information. 

### MobX
https://mobx.js.org/
MobX- a library for state management. Our app will be dealing with updating record fields such as favorited movies and actors. Also, we will be deading with asynchronus processes to fetch the data and store them onto the app. Thanks to MobX the change in any of the data will result in an UI update.

### Axios.js
https://github.com/axios/axios
Axios is a HTTP client. 
