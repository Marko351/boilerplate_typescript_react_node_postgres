import { NextFunction, Request, Response } from 'express';
import { HTTP_OK } from '../../constants/HTTPStatusCode';
import { UserRepository } from './repository';

class UserController {
  public repo: UserRepository;
  constructor() {
    this.repo = new UserRepository();
  }

  async updateUser(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;
      const { id } = req.params;
      const parsedId = parseInt(id);
      const response = await this.repo.updateOne(data, parsedId);
      res.status(HTTP_OK).json(response);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  async deleteUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const parsedId = parseInt(id);
      const response = await this.repo.deleteOne(parsedId);
      res.status(HTTP_OK).json(response);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

export { UserController };
