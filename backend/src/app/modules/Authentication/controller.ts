import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { AuthenticationRepository } from './repository';
class AuthenticationController {
  public repo: AuthenticationRepository;
  constructor() {
    this.repo = new AuthenticationRepository();
  }
  async register(req: Request, res: Response, next: NextFunction) {
    try {
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

  generateToken(user: any) {
    return new Promise((resolve, reject) => {
      if (!user) {
        reject(new Error());
      }
      const token = jwt.sign(
        {
          userId: user.id,
          email: user.email,
          name: user.name,
        },
        process.env.JWT_SECRET || 'thisWillChange',
        { expiresIn: '999999 days' },
      );
      resolve(token);
    });
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
