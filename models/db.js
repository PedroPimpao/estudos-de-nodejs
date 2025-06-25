import { Sequelize } from "sequelize"

const sequelize = new Sequelize(
    'Cadastro_Produtos',
    'postgres',
    '123456',
    {
        host: 'localhost',
        dialect: 'postgres'
    }
)

const conectar = async ()=>{
    try {
        await sequelize.authenticate()
        console.log('Banco de dados conectado com sucesso!')
    } catch (error) {
        console.error(`Erro ao conectar com o banco de dados: ${error}`)
    }
}
conectar()

export { Sequelize, sequelize }