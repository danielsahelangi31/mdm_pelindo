import { BaseModel, column,beforeCreate,beforeUpdate } from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuidv4 } from "uuid";

export default class RequestVesselSpecific extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public kp_gt: number

  @column()
  public kp_dwt: number

  @column()
  public kp_brt: number

  @column()
  public kp_nrt: number

  @column()
  public kp_loa: number

  @column()
  public kp_lebar: number

  @column()
  public kp_tinggi: number

  @column()
  public dr_maximum: number

  @column()
  public dr_depan: number

  @column()
  public dr_belakang: number

  @column()
  public max_speed: number

  @column()
  public jm_palka: number

  @column()
  public jm_derek: number

  @column()
  public jn_derek: string

  @column()
  public request_vessel_id: string;

  @column()
  public horse_power: number;

  @column()
  public created_at: Date;

  @column()
  public updated_at: Date;

  @beforeCreate()
  public static async genCreatedAt(RequestVesselSpecific: RequestVesselSpecific) {
    RequestVesselSpecific.created_at = new Date();
    RequestVesselSpecific.updated_at = new Date();
  }

  @beforeUpdate()
  public static async genUpdatedAt(RequestVesselSpecific: RequestVesselSpecific) {
    RequestVesselSpecific.updated_at = new Date();
  }

  @beforeCreate()
  public static async uuid(RequestVesselSpecific: RequestVesselSpecific) {
    RequestVesselSpecific.id = uuidv4();
  }
}
