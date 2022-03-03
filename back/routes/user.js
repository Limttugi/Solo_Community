const express = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");

const { User } = require("../models");
const router = express.Router();

router.post("/signup", async (req, res, next) => {
  try {
    const alreadyUser = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (alreadyUser) {
      return res.status(400).send("이미 사용 중인 아이디 입니다");
    }
    const encPassword = await bcrypt.hash(req.body.password, 6);
    await User.create({
      email: req.body.email,
      password: encPassword,
      nickname: req.body.nickname,
    });
    res.status(200).send("회원가입 완료");
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.post("/login", async (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      return res.status(400).send(info.reason);
    }
    return req.login(user, async (loginErr) => {
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
      return res.status(200).json(user);
    });
  })(req, res, next);
});

module.exports = router;
