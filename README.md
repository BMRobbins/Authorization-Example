# Authorization Example
##  The authorization example react app, is a project that mimics a common
          use case where a user reaches a website and must login to get access
          to the site information. In this example, a user may log in as an
          existing customer or create a new user by clicking the sign up link.
          This is a front end only app, in a real-world situation on form submit
          a request would be made to the backend to first validate the request
          and then return the information that would be presented to that
          specific customer. Since we are not using a backend in this example no
          validation is done on the form other than to make sure the fields are
          not empty. This applies to both login and create new user forms. Once
          the user logs in they will get access to the internal portion of the
          web page. Also, once a user is logged in, they may logout at any time
          and they will be rerouted to the user login section. Since the site
          was very small, I decided not to use Redux, but on a larger website
          with data that spans across a large page or multiple pages a state
          management system such as Redux should be used. It should be noted
          that it may be better to maximize the embedded editor to have a better
          view of the working project.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

![Screen Shot 2023-03-14 at 5 29 09 PM](https://user-images.githubusercontent.com/29494588/225164818-0244642a-8b13-4d35-a8e4-467a2674a357.png)
![Screen Shot 2023-03-14 at 5 29 29 PM](https://user-images.githubusercontent.com/29494588/225164971-48c589bf-5742-46a8-831d-7a4bc49b8920.png)
![Screen Shot 2023-03-14 at 5 29 58 PM](https://user-images.githubusercontent.com/29494588/225164981-feb76bd1-48ae-4d33-8d53-e491e7aaf796.png)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
