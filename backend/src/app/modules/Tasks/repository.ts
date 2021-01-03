import { BaseRepository } from '../../libraries/baseRepository/BaseRepository'
import { IGetAllTaskOptions } from './Task'

class TasksRepository extends BaseRepository {
  constructor() {
    super()
    this.tableName = 'tasks'
  }

  async getTask(id: number) {
    const data = await this.knex(this.tableName).select(['tasks.*']).where('tasks.id', id).groupBy('tasks.id').first()
    return data
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

    const count: any = await this.knex(this.tableName).count('*').first()

    // console.log(count)
    return {
      data,
      options: {
        totalRecords: count.count,
        limit: options.limit,
        skip: options.skip,
      },
    }
  }

  async completeTask(id: number, now: string) {
    return this.knex(this.tableName).update({ isCompleted: true, completionDate: now }).where('id', id)
  }
}

export { TasksRepository }
