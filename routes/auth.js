const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const validateRegister = require('../validators/validateRegister');
const validateLogin = require('../validators/validateLogin');
const jwt = require('jsonwebtoken');
const passport = require('passport');

// Regular auth routes and social auth logout route
router.post('/register', validateRegister.rules, authController.register);
router.put('/update-profile', authController.updateProfile); //validateRegister.rules,
router.post('/login', validateLogin.rules, authController.login);
router.get('/logout', authController.logout);

// Passport.js Facebook auth routes
router.get('/facebook', passport.authenticate('facebook', {session: false}));
router.get('/facebook/callback', passport.authenticate('facebook', {
    failureRedirect: '/login',
    scope: ['email', 'openid', 'profile'],
    session: false
}), (req, res) => {
    let token = jwt.sign(req.user, 'secretkey', {expiresIn: '8h'});
    res.redirect(`${process.env.FRONT_URL}/?token=${token}`);
});

// Passport.js Facebook-token auth route
router.post('/facebook/token', passport.authenticate('facebook-token', {session: false}), (req, res) => {
    if (!req.user) {
        return res.send(401, 'User Not Authenticated');
    } else {
        let token = jwt.sign(req.user, 'secretkey', {expiresIn: '8h'});
        res.json({token});
    }
});


// Passport.js Google auth routes
router.get('/google', passport.authenticate('google', {session: false, scope: ['profile', 'email']}));
router.get('/google/callback', passport.authenticate('google', {
    failureRedirect: '/login',
    scope: ['email', 'openid', 'profile'],
    session: false
}), (req, res) => {
    let token = jwt.sign(req.user, 'secretkey', {expiresIn: '8h'});
    res.redirect(`${process.env.FRONT_URL}/?token=${token}`);
});


module.exports = router;

