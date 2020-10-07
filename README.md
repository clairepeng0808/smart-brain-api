<div align='center'><img src="./banner.png"/></div>

# <div align='center'>💡 Smart Brain App API</div>

<div align='center'>
<p>
    <img src="https://www.herokucdn.com/deploy/button.svg"/><p>
    <a href="https://smart-brain-claire.herokuapp.com/"><img src="https://img.shields.io/website?down_color=grey&down_message=offline&style=flat-square&up_color=brightgreen&up_message=online&url=https%3A%2F%2Fsmart-brain-claire.herokuapp.com%2F"/></a>
    <img src="https://img.shields.io/npm/v/npm?label=npm&style=flat-square&color=9cf"/>

</p>
<p>
A face recognition app that uses the Clarifai API to detect and locate a human face in the picture.

A full-fledged app with user registration and login system. Frontend built with React.js, backend server and APIs with Node.js & Express.js, and PostgresSQL as database to keep track of how many entries a user has made. Deployed on Heroku.

</p>
<p><strong><a href="https://smart-brain-claire.herokuapp.com/">
Click here for Live demo</a></strong>
</p>
<img src="./demo.gif"/>
</div>

## ✨ Features

- A complete user registration system
- Modern & Responsive UI, particle background effects created with Particle.js library
- Separate frontend and backend, easy modifications

This is the Smart Brain API repo. For the frontend repo, please visit [smart-brain-app](https://github.com/clairepeng0808/smart-brain-app).

## ⚙️ Installation

From your command line, first clone the project:

### Clone this repository

```zsh
$ git clone https://github.com/clairepeng0808/smart-brain-api

Go into the repository
$ cd smart-brain-api

# Remove current origin repository
$ git remote remove origin
```

### Install the dependencies

```zsh
# Install dependencies
$ npm install

# Start dev development server
$ npm run dev
```

### Setup DB

You need to create your dev database first, and name it **smart-brain-db**. I used PostgreSQL in this project, and knex to connect to the db. Add the snippet of code to your server.js file to set up.

```zsh
const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "yourdbUserName",
    password: "",
    database: "smart-brain-db",
  },
});
```

After installation, open [http://localhost:3000](http://localhost:3000) to view it in the browser. If you see the text **It's working!**, it is running successfully on your localhost.

You can clone the [frontend repo here.](https://github.com/clairepeng0808/smart-brain-app)

## API Endpoints

### Register a user

`POST` `/register`

- Sample body:

```
{
    "email":"helloworld@gmail.com",
    "password":"hellohello",
    "name": "helloworld"
}
```

- Sample response:

```
{
    "id": 45,
    "name": "helloworld",
    "email": "helloworld@gmail.com",
    "entries": "0",
    "date_joined": "2020-10-07T03:55:18.205Z"
}
```

### Sign a user in

`POST` `/signin`

- Sample body:

```
{
    "email":"helloworld@gmail.com",
    "password":"hellohello"
}
```

- Sample response:

```
{
    "id": 45,
    "name": "helloworld",
    "email": "helloworld@gmail.com",
    "entries": "0",
    "date_joined": "2020-10-07T03:55:18.205Z"
}
```

### Detect the Face in the image

`POST` `/imageurl`

- Sample body:

```
{
    "input":"https://ichef.bbci.co.uk/news/976/cpsprodpb/2D45/production/_92798511_afp_gomez.jpg"
}
```

Note: Clarifai's APIs are down sometimes. You can [click here](https://www.clarifai.com/models/face-detection) to check if it's working properly.

### Add to User Entry

`PUT` `/image`

- Sample body:

```
{
    "id":45,
}
```

- Sample response:

```
{
    "1"
}
```

### Access to User Profile

`GET` `/:profile`

- Sample URL:

```
http://localhost:3000/profile/45
```

- Sample response:

```
{
    "id": 45,
    "name": "helloworld",
    "email": "helloworld@gmail.com",
    "entries": "0",
    "date_joined": "2020-10-07T03:55:18.205Z"
}
```

### New Build

```zsh
$ npm start
```

### Deploy to Heroku

Please Refer to the [official document](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up)

## 🤟 Languages

<div>
<img src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
<img src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
<img src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/express.js%20-%23404d59.svg?&style=for-the-badge"/>
<img src="https://img.shields.io/badge/postgres-%23316192.svg?&style=for-the-badge&logo=postgresql&logoColor=white"/>
<img src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/>
<img src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/>
</div>

## 🛠️ Technologies

### APIs

- [Clarifai API](https://www.clarifai.com/models/face-detection) - Predict api to tell what is in your images, videos or text. Capture data about the physical world through images.

### NPM Packages

- [Express](https://www.npmjs.com/package/express) - Web framework for node.js
- [bcrypt](https://www.npmjs.com/package/bcrypt) - store hashed password in the database
- [cors](https://vincentgarreau.com/particles.js/) - Express middleware to enable cross orgin resources sharing.
- [knex](https://www.npmjs.com/package/knex) - SQL query builder

## 💎 Credits

This project is a clone of one of the projects [Smart Brain](https://github.com/aneagoie/smart-brain) in the course: **The Complete Web Developer in 2020**. Thanks for the support from the instructor [Andrei](https://github.com/aneagoie) and the [ZTM community](https://github.com/zero-to-mastery).

## 📚 License

<img src="https://img.shields.io/github/license/clairepeng0808/smart-brain-app?style=flat-square&color=9cf" />
