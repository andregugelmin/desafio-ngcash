<p align="center">
   <img src="https://github.com/andregugelmin/desafio-ngcash/blob/main/front-end/src/assets/images/ngcashlogo.png?raw=true" width="110"/>
</p>

<div align="center">
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px"/>  
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express.js&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/JWT-323330?style=for-the-badge&logo=json-web-tokens&logoColor=pink" height="30px"/>
   <img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" height="30px"/>
</div>

---

## Description

Project made for NG.CASH selection process, where you can create an account with an username and password, and make money transactions 
in a very easy way.

---

## Setup with Docker

- Don't forget to configure .env accordly with .env.example in back-end folder before docker-compose up

```bash
$ git clone https://github.com/andregugelmin/desafio-ngcash.git

$ cd desafio-ngcash/

$ docker-compose up --build
```

 - Wait for server start running then you can acess port 80 in your browser to access app or port 5000 to access server.
 
 ## Setup for running locally
 
  - Configure .env accordly with .env.example in back-end folder and modify REACT_APP_API_BASE_URL in front-end .env to http://localhost:5000
 
 ```bash
$ git clone https://github.com/andregugelmin/desafio-ngcash.git

$ cd desafio-ngcash/back-end/

$ npm i

$ npm run dev
```
 - In another terminal access front-end folder
 
  ```bash
$ npm i

$ npm start
```
 
  - Access localhost:3000 in your browser
 
