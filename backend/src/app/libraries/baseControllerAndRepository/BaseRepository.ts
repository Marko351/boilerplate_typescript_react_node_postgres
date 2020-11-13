import { knex, knexType } from '../../config/dbConfig'

interface DataI {
  [key: string]: string | number | boolean
}

class BaseRepository {
  public tableName?: string
  public readonly knex: knexType
  public columns?: string[]

  constructor(tableName?: string, columns?: string[]) {
    this.knex = knex
    this.tableName = tableName
    this.columns = columns
  }

  async getByField(filed: string, value: string | number | boolean) {
    return this.knex(this.tableName)
      .select('*')
      .where({ [filed]: value })
  }

  async create(data: DataI) {
    return this.knex(this.tableName)
      .insert(data)
      .returning(this.columns || '*')
  }

  async updateOne(data: DataI, id: number) {
    return this.knex(this.tableName).update(data).where({ id }).first()
  }

  async deleteOne(id: number) {
    return this.knex(this.tableName).delete().where({ id })
  }
}

export { BaseRepository }
