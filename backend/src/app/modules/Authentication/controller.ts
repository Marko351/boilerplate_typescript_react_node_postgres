import { NextFunction, Request, Response } from 'express';

import { BaseController } from '../../libraries/baseControllerAndRepository/BaseController';
import { AuthenticationRepository } from './repository';
class AuthenticationController extends BaseController {
  constructor(repo = new AuthenticationRepository()) {
    super(repo);
  }
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      this.repo;
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      res.status(200).json('success');
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

export { AuthenticationController };

// app.post("/login", (req, res) => {
//   const user = req.body.user;
//   console.log(user);

//   if (!user) {
//       return res.status(404).json({ message: "Body empty" });
//   }

//   let accessToken = jwt.sign(user, "access", { expiresIn: "2s" });
//   let refreshToken = jwt.sign(user, "refresh", { expiresIn: "7d" });
//   refreshTokens.push(refreshToken);

//   return res.status(201).json({
//       accessToken,
//       refreshToken
//   });
// });
