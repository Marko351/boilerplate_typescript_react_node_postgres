import { BaseRepository } from '../../libraries/baseRepository/BaseRepository'

class ChecklistRepository extends BaseRepository {
  constructor() {
    super()
    this.tableName = 'checklists'
  }
}

export { ChecklistRepository }
