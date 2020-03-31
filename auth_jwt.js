// Load required packages
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
require('dotenv').config();

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
opts.secretOrKey = process.env.UNIQUE_KEY;

passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
        var user = db.find(jwt_payload.id);

                    if (user)
                        done(null, user);
                    else
                        done(null, false);
                
    }
));
exports.isAuthenticated = passport.authenticate('jwt', { session : false });
exports.secret = opts.secretOrKey ;