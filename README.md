
# Hot Dog

Hot Dog is an app built with your pet's best interest in mind. Using data from several external APIs, the app provides a dashboard to help you decide if it is too hot for your pet to be outside. 

Users can also log in with their Google account to access a database of locations that are pet friendly. Looking for a rest stop with a grassy area nearby? Or a dog park with lots of trees for shade?

## Screenshots
![App Screenshot](https://placedog.net/250?r)

Please enjoy this doggo until project screenshots are completed.


## Tech Stack

Node.js, MongoDB, Express.js, Passport.js
## Usage

View the live deployment here:

[Hot Dog App Live Deployment](#)


## Run Locally

**Requirements before starting:**

  - [MongoDB Atlas URI](https://www.mongodb.com/atlas/database)

Clone the project to your local environment

```bash
  git clone https://github.com/chadvidovcich/hot-dog.git
```

Go to the project directory

```bash
  cd hot-dog
```

Install dependencies

```bash
  npm install
```

Create environment variable file

```bash
  cd config
  touch .env
```

Add the following entries to the environment variable file (.env)

```bash
  PORT = 2121
  MONGO_URI = MONGODB-PLACEHOLDER-URI
```

Start the server in production mode

```bash
  npm run start
```


## Authors

- [@ChadVidovcich](https://www.github.com/chadvidovcich)


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Roadmap
- Create MVP
- Create user dashboard
- Integrate Open UV Index API
- Integrate Open Weather Map API
- Integrate Google Maps API
