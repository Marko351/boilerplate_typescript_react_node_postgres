import { BaseRepository } from '../../libraries/baseRepository/BaseRepository'
import { IGetAllTaskOptions } from './Task'

class TasksRepository extends BaseRepository {
  constructor() {
    super()
    this.tableName = 'tasks'
  }

  async getAllTasks(options: IGetAllTaskOptions, userId: number) {
    const joins = 'LEFT JOIN users ON users.id = tasks.created_by'
    const data = await this.knex(this.tableName)
      .select([
        'tasks.creation_date',
        'tasks.id',
        'tasks.is_completed',
        'tasks.due_date',
        'tasks.name',
        'tasks.task_priority',
        this.knex.raw(`
          to_json(json_build_object('username', users.username)) as created_by_obj
        `),
      ])
      .joinRaw(joins)
      .where({ createdBy: userId })
      .orderBy([{ column: 'creation_date', order: 'desc' }])
      .limit(options.limit)
      .offset(options.skip)
    return data
  }
}

export { TasksRepository }
