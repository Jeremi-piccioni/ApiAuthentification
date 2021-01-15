const Joi = require('@hapi/joi') // @hapi/joi require('joi')

module.exports = {
    validateBody: (schema) => {
        return (req, res, next) => {
            const result = Joi.valid(req.body, schema)  // validate(req.body, schema)
            if (result.error) {
                return res.status(400).json(result.error)
            }

            if (!req.value) {req.value = {} }
            req.value['body'] = result.value
            next()     
        }
    },

    schemas: {
        authSchema: Joi.object().keys({
            email: Joi.string().email().required(),
            password: Joi.string().email().required()
        })
    }
}