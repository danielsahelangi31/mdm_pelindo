import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class EntityLocationView extends BaseModel {
  public static table = 'entity_locations'
  @column({ isPrimary: true })
  public id: string;
  @column()
  public location_id: string
  @column()
  public entity_name: string
  @column()
  public title_alias: string
  @column()
  public job_title: string
  @column()
  public location_name: string
  @column()
  public entity_location_id: string
  @column()
  public departement: string
}
