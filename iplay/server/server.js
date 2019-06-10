var express = require('express');
// var React = require('react');

var bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const { Address, User } = require("../database/database-models.js");

//add sql database

const app = express();
const port = process.env.PORT || 3000
const saltRounds = 10;
 
//status codes
const UNAUTHORIZED_status = 401;
const SERVER_ERROR = 500;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

//sign up for admin(dispatch)

app.post('/sign-up-customer', (req, res) => {
  console.log(req.body);
  const username = req.body.username;
  const email = req.body.email;
  const phonenumber = req.body.phonenumber;
  const password = req.body.password;
  const hashedpass = bcrypt.hashSync(password, saltRounds);
  res.send(req.body)

  console.log(password);
  console.log(hashedpass);

  User.findOne({ email: email, phonenumber: phonenumber }).then((data) => {
    if (data.email) {
      console.log("Email already exists!");
      alert('Email already exists!');
      console.error('Please Change your email address, Thank you!');
      return res.send('Email already in use from another customer, Please sign up with another email address.')

    } else if (data.phonenumber) {
      console.log("phone numbar already exists!");
      alert('phone numbar already exists!');
      console.error('Please Change your phonen umbar, Thank you!');
      return res.send('phone numbar already in use for another customer, Please sign up with another phone numbar.')

    } else if (data.email && data.phonenumber) {
      console.log("Please Change your email and phone number to signup");
      alert('Please Change your email and phone number to signup');
      console.error('Email & Phone number are already used, Please change them to sign up');
      return res.send('Email & Phone number are used for another customer please change them, Thank you!');

    } else {
      User.create({
        username: username,
        email: email,
        phonenumber: phonenumber,
        password: hashedpass
      }).then((tt) => {
        console.log('Done, You are succesfully sign up :D');
        return res.send({ done: " succesful", tt: tt });
      }).catch((err) => {
        console.log(err);
        return res.status(SERVER_ERROR).send({ error: 'server error' });
      });
    }

  });

});

// Sign In Admin (dispatch)
app.post('/sign-in-customer', (req, res) => {
  const emailorphonenumber = req.body.email || req.body.phonenumber;
  const password = req.body.password;

  User.findOne({ emailorphonenumber: emailorphonenumber }).then((data) => {
    if (!data.req.body.email) {
      console.log("You Email is not registered yet, Please sign up first");
      alert('You Email is not registered yet, Please sign up first');
      console.error('You Email is not registered yet, Please sign up first');
      return res.send('You Email is not registered yet, Please sign up first');
    } else if (!data.req.body.phonenumber) {
      console.log("Your phone number is not registered, Please Sign up first");
      alert('Your phone number is not registered, Please Sign up first');
      console.error('Your phone number is not registered, Please Sign up first');
      return res.send('Your phone number is not registered, Please Sign up first');

    }
    const passcheckup = data.password;
    bcrypt.compare(password, passcheckup).then((ismatch) => {
      if (ismatch) {
        const token = jwt.sign({ email: data.emailorphonenumber }, /*Secret Key */ { expiresin: '1h' });
        return res.send({ token: token });
      } else {
        return res.status(UNAUTHORIZED_status).send({ error: "Password is incorrect" });
      }
    });
  });

});


app.post("/register-address", (req, res) => {
  console.log(req.body);
  const area = req.body.area;
  const streetName = req.body.streetName;
  const buildingNumberr = req.body.buildingNumberr;
  const phoneNumber = req.body.phoneNumber;

    Address.create({
      area: area,
      streetName: streetName,
      buildingNumberr: buildingNumberr,
      phoneNumber: phoneNumber
    }).then((tt) => {
      console.log('Done, You are succesfully sign up :D');
      return res.send({ done: " succesful", tt: tt });
    }).catch((err) => {
      console.log(err);
      return res.status(SERVER_ERROR).send({ error: 'server error' });
    });
    
    
  });

// if (data.email) {
//   console.log("Email already exists!");
//   alert('Email already exists!');
//   console.error('Please Change your email address, Thank you!');
//   return res.send('Email already in use from another customer, Please sign up with another email address.')

// } else if (data.phonenumber) {
//   console.log("phone numbar already exists!");
//   alert('phone numbar already exists!');
//   console.error('Please Change your phonen umbar, Thank you!');
//   return res.send('phone numbar already in use for another customer, Please sign up with another phone numbar.')

// } else if (data.email && data.phonenumber) {
//   console.log("Please Change your email and phone number to signup");
//   alert('Please Change your email and phone number to signup');
//   console.error('Email & Phone number are already used, Please change them to sign up');
//   return res.send('Email & Phone number are used for another customer please change them, Thank you!');

// } 


app.get('/', function (req, res) {
  res.send('Welcome to thesis MVP')
});

app.listen(port, () => {
  console.log('listening on port ' + port + ' Happy Hacking!')
});
