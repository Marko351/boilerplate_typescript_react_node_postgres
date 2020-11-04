import { knex, knexType } from '../../config/dbConfig';

class BaseController {
  public tableName: string;
  public readonly knex: knexType;
  public columns: string[];

  constructor(tableName: string, columns: string[]) {
    this.knex = knex;
    this.tableName = tableName;
    this.columns = columns;
  }

  async create<D>(data: D) {
    return this.knex(this.tableName)
      .insert(data)
      .returning(this.columns || '*');
    // .spread((one) => one)
  }
}

export { BaseController };
