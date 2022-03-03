const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const postRouter = require("./routes/post");
const userRouter = require("./routes/user");
const db = require("./models");
const passportConfig = require("./passport");
const passport = require("passport");

dotenv.config();
const app = express();

db.sequelize
  .sync()
  .then(() => {
    console.log("DB Connection Success");
  })
  .catch(console.error);

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.set({ "access-control-allow-origin": "*" });
passportConfig();
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/post", postRouter);
app.use("/user", userRouter);

app.listen(3065, () => {
  console.log("Server Starting...");
});
