# Star Wars React App.
This readme will guide you though the installation, the code setup, the development and deployment process of the app.

![alt text](https://github.com/mlichwa/StarWars/blob/82a98c33f43c5fa45c1bb4c6bf6260cb3dd78537/img.png "Preview")

## Installation
Once you clone or download this repo, use `npm install` or `yarn install` to get all necessary dependencies.
This app is based on the reactjs.org template.
You can run it by executing the `npm start` command in your terminal.

## Development
I'm using Github to develop this app. Majority of my work will be carried in the Develop branch. The Master branch will be used to deploy the project to the server.
Additioal libraries worth mentioning:

* [MobX](https://mobx.js.org/): a library for state management. Our app will be dealing with updating record fields such as favorited movies and actors. Also, we will be deading with asynchronus processes to fetch the data and store them onto the app. Thanks to MobX the change in any of the data will result in an UI update.

* [Axios](https://github.com/axios/axios) is a robust asynchronous HTTP client with minimal setup.

## Deployment
I'm using Github 'develop' branch to test out new features and add code. Master branch is treated as a release branch. Every time there is a pull request, Netlify is notified and re-compiles the app. On Netlify I treat warnings as errors. 
