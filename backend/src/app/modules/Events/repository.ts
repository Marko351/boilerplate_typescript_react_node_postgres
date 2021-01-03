import { BaseRepository } from '../../libraries/baseRepository/BaseRepository'
import { IGetAllEventsOptions } from './Event'

class EventsRepository extends BaseRepository {
  constructor() {
    super()
    this.tableName = 'events'
  }

  async getEvent(id: number) {
    const data = await this.knex(this.tableName)
      .select(['events.*'])
      .where('events.id', id)
      .groupBy('events.id')
      .first()
    return data
  }

  async getAllEvents(options: IGetAllEventsOptions, userId: number) {
    const joins = 'LEFT JOIN users ON users.id = events.created_by'
    const data = await this.knex(this.tableName)
      .select([
        'events.creation_date',
        'events.id',
        'events.start_date',
        'events.end_date',
        'events.name',
        'events.location',
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
}

export { EventsRepository }
