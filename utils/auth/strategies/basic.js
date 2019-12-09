const passport = require('passport')
const { BasicStrategy } = require('passport-http')
const boom = require('@hapi/boom')
const brcrypt = require('bcryptjs')
const UsersService = require('../../../services/users')

passport.use(new BasicStrategy(async function (email, password, cb) {
    
    const userService = new UsersService()
    try {
        const user = await userService.getUser({ email })

        if (!user) {
            return cb(boom.unauthorized(), false)
        }

        if (!(await brcrypt.compare(password, user.password))) {
            return cb(boom.unauthorized(), false)
        }

        delete user.password
        return cb(null, user)
    } catch (err) {
        return cb(err)
    }
}))