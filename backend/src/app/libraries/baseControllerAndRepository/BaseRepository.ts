import { knex, knexType } from '../../config/dbConfig';

class BaseRepository {
  public tableName?: string;
  public readonly knex: knexType;
  public columns?: string[];

  constructor(tableName?: string, columns?: string[]) {
    this.knex = knex;
    this.tableName = tableName;
    this.columns = columns;
  }

  async create<D>(data: D) {
    return this.knex(this.tableName)
      .insert(data)
      .returning(this.columns || '*');
  }

  async updateOne<D>(data: D, id: number) {
    return this.knex(this.tableName).update(data).where({ id }).first();
  }

  async deleteOne(id: number) {
    return this.knex(this.tableName).delete().where({ id });
  }
}

export { BaseRepository };
