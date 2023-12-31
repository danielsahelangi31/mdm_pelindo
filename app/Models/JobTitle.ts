import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column } from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuidv4 } from "uuid";

export default class JobTitle extends BaseModel {
  @column({ isPrimary: true })
  public id: string;
  
  @column()
  public name: string;

  @column()
  public departement: string;
  // @column.dateTime({ autoCreate: true })
  // public createdAt: DateTime

  // @column.dateTime({ autoCreate: true, autoUpdate: true })
  // public updatedAt: DateTime

  @beforeCreate()
  public static async uuid(JobTitle: JobTitle) {
    JobTitle.id = uuidv4();
  }
}
