import { BaseRepository } from '../../libraries/baseRepository/BaseRepository'

class EventsRepository extends BaseRepository {
  constructor() {
    super()
    this.tableName = 'events'
  }
}

export { EventsRepository }
