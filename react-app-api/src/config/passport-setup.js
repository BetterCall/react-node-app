 import passport from 'passport'
 import GoogleStrategy from 'passport-google-oauth20'
 import { facebook, google } from './keys';


 // Register Google Passport strategy
 passport.use(new GoogleStrategy(google,
   async (accessToken, refreshToken, profile, done)
     => done(null, console.log(profile))
 ));
