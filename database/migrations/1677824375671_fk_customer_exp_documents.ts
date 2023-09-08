import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'customer_exp_documents'

  public async up () {
    this.schema.alterTable(this.tableName,(table)=>{
      table.foreign('customer_document_id').references('id').inTable('customer_documents').onDelete('CASCADE')
    })

  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
