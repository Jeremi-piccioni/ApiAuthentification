const express = require('express')
const cors = require('cors')
const router = require('express-promise-router')()

const { validateBody, schemas } = require('../helpers/routerHelpers')
const UsersController = require('../controllers/users')

router.route('/signup')
    .post(validateBody(schemas.authSchema), UsersController.signUp)

router.route('/signin')
    .post(UsersController.signIn)

router.route('/secret')
    .get(UsersController.secret)

module.exports = router