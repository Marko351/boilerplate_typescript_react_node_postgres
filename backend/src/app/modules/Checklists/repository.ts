import { BaseRepository } from '../../libraries/baseRepository/BaseRepository'

class ChecklistRepository extends BaseRepository {
  constructor() {
    super()
    this.tableName = 'checklists'
  }

  async getChecklists(taskId: number) {
    return this.knex(this.tableName).select(['id', 'description', 'is_done']).where('task_id', taskId)
  }
}

export { ChecklistRepository }
