# Code-With-Node-Ian
## Intermediate Node Developement Course

## Section 1
### Intro and Overview

- Going to build a Shoping site at the end of the course and it's in progress and will get updated regularly.
- RTFM kind of advice in debugging the code.
- **Trello** - Improves productivity a lot. 

## Section 2
### Bootstrapping of Express and Database Design
#### Setting up Express with Express Generator
- [**Express-Generator**](https://expressjs.com/en/starter/generator.html) to quickly create application skeleton.
- `npm i express-generator -g` - Installed Express Generator

- **Initial Template**
    ```console
    $ express --view=ejs surf-shop

   create : surf-shop/
   create : surf-shop/public/
   create : surf-shop/public/javascripts/
   create : surf-shop/public/images/
   create : surf-shop/public/stylesheets/
   create : surf-shop/public/stylesheets/style.css
   create : surf-shop/routes/
   create : surf-shop/routes/index.js
   create : surf-shop/routes/users.js
   create : surf-shop/views/
   create : surf-shop/views/error.pug
   create : surf-shop/views/index.pug
   create : surf-shop/views/layout.pug
   create : surf-shop/app.js
   create : surf-shop/package.json
   create : surf-shop/bin/
   create : surf-shop/bin/www

   change directory:
     $ cd surf-shop

   install dependencies:
     $ npm install

   run the app:
     $ DEBUG=surf-shop:* npm start
    ```
- Initial auto generated **package.json**
    ```json
    {
      "name": "surf-shop",
      "version": "0.0.0",
      "private": true,
      "scripts": {
        "start": "node ./bin/www"
      },
      "dependencies": {
        "cookie-parser": "~1.4.3",
        "debug": "~2.6.9",
        "ejs": "~2.5.7",
        "express": "~4.16.0",
        "http-errors": "~1.6.2",
        "morgan": "~1.9.0"
      }
    }
    ```
- More dependencies - `npm i -S mongoose body-parser passport`  `npm i -D locus dotenv`
- Created `mkdir models controllers middleware`
- Changed all the `var` to `const` that are meant to be constant in complaince with ES6.
- Installing the **Nodemon**
- Adding **VCS git** for tracking my files
- [UseLoom](https://www.useloom.com) -  To share hours and hours of coding videos

## Section 3
### Routes
- Created Posts Routes with CRUD.
- Created Reviews Routes for Posts with CRUD.
- Created User and Index Routes with CRUD.

## Section 4
### Models
- Created users models.
- used `passport-local-mongoose`.
- Created posts models.
- Created reviews models.

## Section 5
### User Authentication
- Included ` npm i -S passport-local express-session` for the authentication process.
- Created a controller which is something new `const { postRegister } = require("../controller/index");` - destructuring the objects instead of saving them in a variable and getting them back.
- Connected to Mongo DB.
- Configuring Register post route using async/await. Below are the helpful materials to gain a knowledge about promises,
    + https://medium.com/@bluepnume/learn-about-promises-before-you-start-using-async-await-eb148164a9c8
    + https://blog.sessionstack.com/how-javascript-works-event-loop-and-the-rise-of-async-programming-5-ways-to-better-coding-with-2f077c4438b5
    + https://tutorialzine.com/2017/07/javascript-async-await-explained
- User auth login, register and logout routes controller and middleware has been configured.

## Section 6
### Post Resources
- Posts Index Page route setup done.
- Posts New Page route setup done.
- Posts Show Page route setup done.
- Posts Edit Page route setup done. Used `method-override` for PUT requests.
- Update the post and destroy. Used `locus` for debugging.

## Section 7
### Image Upload with Cloudinary
- Signed up with Cloudinary.
- Installed `npm i -S cloudinary multer` 
- Setup was made to upload 4 images and saved environment variables with dotenv
- Image Edit and Delete in Post Form.

## Section 8 
### GeoLocation with Mapbox
- Signed up with MapBox.
- `npm install @mapbox/mapbox-sdk` to install MapBox SDK into the Node.
- 