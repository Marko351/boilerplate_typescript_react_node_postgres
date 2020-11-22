import { BaseRepository } from '../../libraries/baseRepository/BaseRepository'

class CommentsRepository extends BaseRepository {
  constructor() {
    super()
    this.tableName = 'comments'
  }
}

export { CommentsRepository }
