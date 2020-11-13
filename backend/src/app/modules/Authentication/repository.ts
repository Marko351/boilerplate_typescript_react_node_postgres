import { BaseRepository } from '../../libraries/baseControllerAndRepository/BaseRepository'

class AuthenticationRepository extends BaseRepository {
  constructor() {
    super()
    this.tableName = 'users'
  }
}

export { AuthenticationRepository }
