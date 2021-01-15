const Joi = require('@hapi/joi')

export const newUser = Joi.object({
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().required()
})