import { BaseRepository, DataI } from '../../libraries/baseRepository/BaseRepository'
import { IComment } from './Comment'

class CommentsRepository extends BaseRepository {
  constructor() {
    super()
    this.tableName = 'comments'
  }

  async getAllComments(id: number, reference: string) {
    const data = await this.knex(this.tableName)
      .select([
        'id',
        'comment',
        'creation_date',
        this.knex.raw(`(select username from users where comments.created_by = users.id) as created_by`),
      ])
      .where(`${reference}_id`, id)
      .orderBy('creation_date', 'desc')

    return data
  }

  async createComment(data: DataI) {
    const responseCreate: IComment[] = await this.knex(this.tableName)
      .insert(data)
      .returning(this.columns || '*')
    return this.knex(this.tableName)
      .select([
        'id',
        'comment',
        'creation_date',
        this.knex.raw(`(select username from users where comments.created_by = users.id) as created_by`),
      ])
      .where('comments.id', responseCreate[0].id!)
      .first()
  }
}

export { CommentsRepository }
