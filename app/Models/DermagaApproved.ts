import { v4 as uuidv4 } from 'uuid';
import { BaseModel, beforeCreate, beforeUpdate, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm';
import DermagaCoordinates from './DermagaCoordinates';
export default class DermagaApproved extends BaseModel {
  public static table = "dermaga_approveds"

  @column({ isPrimary: true })
  public id: string

  @column()
  public kode_pelabuhan: string

  @column()
  public nama_pelabuhan: string

  @column()
  public kode_terminal: string

  @column()
  public nama_terminal: string

  @column()
  public nama_dermaga: string

  @column()
  public jenis_dermaga: string

  @column()
  public jenis_konstruksi: string

  @column()
  public pemilik: string

  @column()
  public status_milik: string

  @column()
  public kode_area_labuh: string

  @column()
  public jenis_perairan: string

  @column()
  public tipe_layanan_utama: string

  @column()
  public zonasi: string

  @column()
  public layanan_labuh: number

  @column()
  public layanan_tambat: number

  @column()
  public longitude: string

  @column()
  public latitude: string

  @column()
  public kode_dermaga_inaportnet: string

  @column()
  public panjang: string

  @column()
  public lebar: string

  @column()
  public kade_meter_awal: string

  @column()
  public kade_meter_akhir: string

  @column()
  public kedalaman_minimal: string

  @column()
  public kedalaman_maximal: string

  @column()
  public elevasi_dermaga_minimal: string

  @column()
  public elevasi_dermaga_maximal: string

  @column()
  public jarak_station_tunda: string

  @column()
  public jarak_station_pandu: string

  @column()
  public overhang_at_start: string

  @column()
  public overhang_at_end: string

  @column()
  public kode_dermaga: string

  @column()
  public status: string

  @column()
  public request_number: string

  @column()
  public submitter: string

  @column()
  public mob_demob: string

  @column()
  public id_staging: string

  @column()
  public is_edit: number

  @column()
  public created_at: Date

  @column()
  public updated_at: Date

  @beforeCreate()
  public static async setId(data: DermagaApproved) {
    data.id = uuidv4();
    data.created_at = new Date();
  }

  @beforeUpdate()
  public static async updateDate(data: DermagaApproved) {
    data.updated_at = new Date();
  }

  @hasMany(() => DermagaCoordinates, { foreignKey: "id_dermaga_approved" })
  public id_dermaga: HasMany<typeof DermagaCoordinates>
}
