import { sequelize, Sequelize } from "./db.js";

const Produto = sequelize.define('produtos', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    preco: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Produto.sync({force: false})

export { Produto }