import { BaseRepository } from '../../libraries/baseRepository/BaseRepository'

class TasksRepository extends BaseRepository {
  constructor() {
    super()
    this.tableName = 'tasks'
  }
}

export { TasksRepository }
