import { BaseRepository } from '../../libraries/baseRepository/BaseRepository'
import { IGetAllTaskOptions } from './Task'

class TasksRepository extends BaseRepository {
  constructor() {
    super()
    this.tableName = 'tasks'
  }

  async getAllTasks(options: IGetAllTaskOptions, userId: number) {
    const data = await this.knex(this.tableName)
      .select('*')
      .where({ createdBy: userId })
      .orderBy([{ column: 'creation_date', order: 'desc' }])
      .limit(options.limit)
      .offset(options.skip)
    return data
  }
}

export { TasksRepository }
