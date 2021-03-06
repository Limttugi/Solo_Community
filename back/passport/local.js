const passport = require("passport");
const { Strategy } = require("passport-local");
const User = require("../models/user");
const bcrypt = require("bcrypt");

module.exports = () => {
  passport.use(
    new Strategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      async (email, password, done) => {
        try {
          const user = await User.findOne({
            where: { email },
          });
          if (!user) {
            // done(서버에러, 성공, 클라이언트에러)
            return done(null, false, { reason: "가입되지 않은 이메일입니다" });
          }
          const pwResult = await bcrypt.compare(password, user.password);
          if (pwResult) {
            return done(null, user);
          }
          return done(null, false, { reason: "비밀번호가 틀렸습니다" });
        } catch (err) {
          console.error(err);
          return done(err);
        }
      }
    )
  );
};
