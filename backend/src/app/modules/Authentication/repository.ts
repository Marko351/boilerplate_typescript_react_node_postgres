import { BaseRepository } from '../../libraries/baseRepository/BaseRepository'

class AuthenticationRepository extends BaseRepository {
  constructor() {
    super()
    this.tableName = 'users'
  }
}

export { AuthenticationRepository }
