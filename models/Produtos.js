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

// Produto.create({
//     nome: 'Monitor T350 24``',
//     preco: '420.99',
//     descricao: 'Monitor da Samsung'
// })

Produto.destroy({
    where: {id: 7}
})




Produto.sync({force: false})