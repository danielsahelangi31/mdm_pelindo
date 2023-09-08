import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'safm_perubahan_organisasi'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.string('pernr', 8)
      table.string('cname', 80)
      table.string('pnalt', 14).nullable()
      table.string('werks', 4).nullable()
      table.string('pbtxt', 200).nullable()
      table.string('btrtl', 4).nullable()
      table.string('btrtx', 200).nullable()
      table.string('ansvh', 5).nullable()
      table.string('anstx', 200).nullable()
      table.string('persg', 5).nullable()
      table.string('pgtxt', 200).nullable()
      table.string('persk', 5).nullable()
      table.string('pktxt', 200).nullable()
      table.string('trfg0', 8).nullable()
      table.string('trfs0', 2).nullable()
      table.string('gol', 8).nullable()
      table.string('gol_mkg', 4).nullable()
      table.string('short', 12).nullable()
      table.string('plans', 600).nullable()
      table.string('direk', 8).nullable()
      table.string('direk_text', 600).nullable()
      table.string('subdi', 8).nullable()
      table.string('subdi_text', 600).nullable()
      table.string('seksi', 8).nullable()
      table.string('seksi_text', 600).nullable()
      table.string('subsi', 8).nullable()
      table.string('subsi_text', 600).nullable()
      table.string('plvar', 2).nullable()
      table.timestamp('created_date', { useTz: true })
      table.string('created_by', 30).nullable()
      table.timestamp('last_updated_date', { useTz: true })
      table.string('last_updated_by', 30).nullable()
      table.string('program_name', 30).nullable()
      table.string('kd_aktif', 1).nullable()
      table.date('begda').nullable()
      table.date('enda').nullable()
      table.string('pin', 10).nullable()
      table.date('begda_pin').nullable()
      table.date('endda_pin').nullable()
      table.string('werks_pin', 4).nullable()
      table.string('cost_center', 20).nullable()
      table.string('lo_id', 4).nullable()
      table.string('bank_key', 15).nullable()
      table.string('bank_name', 40).nullable()
      table.string('bank_account', 100).nullable()
      table.string('pnalt_new', 12).nullable()
      table.string('werks_new', 4).nullable()
      table.string('pbtxt_new', 100).nullable()
      table.string('btrtl_new', 4).nullable()
      table.string('btrtx_new', 100).nullable()
      table.string('company_code', 10).nullable()
      table.string('payscaletype', 2).nullable()
      table.string('payscaletypetext', 100).nullable()
      table.string('payrollarea', 2).nullable()
      table.string('payrollareatext', 100).nullable()
      table.string('travelcostcenter', 100).nullable()
      table.date('tmtmulaibekerja').nullable()
      table.date('tmtdiangkatpegawai').nullable()
      table.date('tmtkelasjabatan').nullable()
      table.date('tmtjabatan').nullable()
      table.date('tmtpensiun').nullable()
      table.string('generaltextorg', 200).nullable()
      table.string('generaltextpos', 200).nullable()
      table.string('general_text_pos', 240).nullable()
      table.date('tmt_golongan').nullable()
      table.string('nomor_sk', 100).nullable()
      table.date('tanggal_sk').nullable()
      table.string('posisi_2021', 20).nullable()
      table.string('kjposisi_2021', 20).nullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
