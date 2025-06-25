const { Sequelize } = require("sequelize")

const sequelize = new Sequelize(
    'Cadastro_Produtos',
    'postgres',
    '123456',
    {
        host: 'localhost',
        dialect: 'postgres'
    }
)

sequelize.authenticate().then((()=>{
    console.log('Banco de dados conectado com sucesso!')
})).catch((erro)=>{
    console.error(`Erro ao conectar com o banco de dados: ${erro}`)
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}