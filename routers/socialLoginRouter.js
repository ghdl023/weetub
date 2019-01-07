import express from "express";
import passport from "passport";
import routes from "../routes";
import { githubLogin, postGithubLogin } from "../controllers/userController";

const socialLoginRouter = express.Router();

socialLoginRouter.get(routes.github, githubLogin);
socialLoginRouter.get(
  routes.githubCallback,
  passport.authenticate("github", { failureRedirect: "/login" }),
  postGithubLogin
);

export default socialLoginRouter;
