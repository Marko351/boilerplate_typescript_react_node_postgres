import { NextFunction, Request, Response } from 'express';
import { HTTP_CREATED, HTTP_OK } from '../../constants/HTTPStatusCode';
import { BaseRepository } from './BaseRepository';

type IBaseRepo = BaseRepository;

class BaseController {
  public repo: IBaseRepo;
  constructor(repo: IBaseRepo) {
    this.repo = repo;
  }

  async create<D>(req: Request, res: Response, next: NextFunction) {
    try {
      console.log(this.repo);
      const data = req.body;
      const response = await this.repo.create<D>(data);
      res.status(HTTP_CREATED).json(response);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  async updateOne<D>(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;
      const { id } = req.params;
      const parsedId = parseInt(id);
      const response = await this.repo.updateOne<D>(data, parsedId);
      res.status(HTTP_OK).json(response);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  async deleteOne(req: Request, res: Response, next: NextFunction) {
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

export { BaseController };
