import { BaseModel, beforeCreate, beforeUpdate, column } from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuidv4 } from "uuid";

export default class RequestCustomerExpDocument extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public exp_ket_domisili: Date;

  @column()
  public exp_siupal_siupkk: Date;

  @column()
  public exp_siupbm: Date;

  @column()
  public exp_siup_nib: Date;

  @column()
  public exp_sktd: Date;

  @column()
  public exp_cor_dgt: Date;

  @column()
  public exp_surat_izin_pengelolaan: Date;

  @column()
  public exp_skpt: Date;

  @column()
  public exp_siopsus: Date;

  @column()
  public start_date_sktd: Date;

  @column()
  public customer_document_id: string;

  @column()
  public created_at: Date;

  @column()
  public updated_at: Date;
  @beforeCreate()
  public static async genCreatedAt(RequestCustomerExpDocument: RequestCustomerExpDocument) {
    let date = new Date();
    date.setHours(date.getHours()+7);
    let timestamp = date;
    RequestCustomerExpDocument.created_at = timestamp;
    RequestCustomerExpDocument.updated_at = timestamp;
  }

  @beforeUpdate()
  public static async genUpdatedAt(RequestCustomerExpDocument: RequestCustomerExpDocument) {
    let date = new Date();
    date.setHours(date.getHours()+7);
    let timestamp = date;
    RequestCustomerExpDocument.updated_at = timestamp;
  }

  @beforeCreate()
  public static async uuid(RequestCustomerExpDocument: RequestCustomerExpDocument) {
    RequestCustomerExpDocument.id = uuidv4();
  }
}
