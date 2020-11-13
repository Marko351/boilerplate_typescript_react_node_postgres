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

  async getByField<T>(field: string, value: string | number | boolean) {
    const response = (await this.knex(this.tableName)
      .select('*')
      .where({ [field]: value })) as T[]
    return response
  }

  async create<T>(data: DataI) {
    const response = (await this.knex(this.tableName)
      .insert(data)
      .returning(this.columns || '*')) as T[]
    return response
  }

  async updateOne(data: DataI, id: number) {
    return this.knex(this.tableName).update(data).where({ id }).first()
  }

  async deleteOne(id: number) {
    return this.knex(this.tableName).delete().where({ id })
  }
}

export { BaseRepository }
