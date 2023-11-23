## Getting Started

1. Make sure you have Node.js installed on your machine. You can download it from the official website: https://nodejs.org/

2. Open your terminal and navigate to the directory where you want to clone this project.

3. Run the following command to clone this repository:

```git clone https://github.com/siiine-764/BookingApp.git```

Navigate to the cloned directory:

    cd BookingApp

4. Run the following command to install the required dependencies:

        npm install
        npm init -y
        npm add express
        npm add nodemon
        npm add dotenv
        npm add mongoose

To start the development server, run the following command:

    npm start

Now, you can visit http://localhost:8800 in your browser to access the application.

Please note that you need to set up the environment variables mentioned in the .env.example file and have access to a MongoDB database.

### Setting Up Environment Variables

You need to set up the environment variables mentioned in the `.env.example` file. Create a new file called `.env` in the root directory of the project and add the values for each variable.

Make sure to replace `<YOUR_MONGODB_URI>` with your actual MongoDB URI.

### Connecting to a MongoDB Database

To use this project, you need to have access to a MongoDB database. You can set up a MongoDB database using a cloud service like MongoDB Atlas.


Once you have completed the setup process, you can start using the application.

Remember to replace <YOUR_MONGODB_URI>
