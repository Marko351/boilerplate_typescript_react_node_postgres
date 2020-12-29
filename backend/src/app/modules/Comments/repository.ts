import { BaseRepository } from '../../libraries/baseRepository/BaseRepository'

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

    return data
  }
}

export { CommentsRepository }
