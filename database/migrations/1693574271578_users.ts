import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {//ele e uma classe de herança 
  protected tableName = 'users'// atribulto protegido e vai criar uma tabela com o nome de user 

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()//chave primaria 
      table.string('name', 80).notNullable()
      table.string('email', 255).notNullable().unique()// coluna o ponto é fim de extrução, mas não e obrigatorio
      table.string('password', 180).notNullable()
      table.string('remember_me_token').nullable()

      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
