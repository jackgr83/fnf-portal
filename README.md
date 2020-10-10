# fnf-portal

Instructions:

1. After locally cloning this repository, run npm install in the root directory and in the client directory.
2. Extract the contents of img.zip (located in Dropbox under Jack's Development) to a new folder called img within ./client/src.
3. Run 'npm run dev' command to start the application on your local server and connect to the MongoDB database.


This application can be deployed in two ways:

1. Using Docker. Set up a Dockerfile from the application, and then push and release a container with Heroku. For more information on deploying with Docker on Heroku, see the [documentation](https://devcenter.heroku.com/categories/deploying-with-docker).

2. (Recommended) By separating out the frontend and backend code and hosting each separately. I have already deployed the frontend (./client) to firebase [here](https://fnf-portal.web.app/). The backend code (everything that is not in ./client) could be hosted on Heroku server for example and the frontend code could then be configured to make calls to it.
