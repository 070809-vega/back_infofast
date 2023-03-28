const mongoose = require('mongoose')
const Schema = mongoose.Schema

const clienteSchema = Schema({
    cliente:{
        type: String,
    },
    date:{
        type: String,
    },
    createdAt:{
        type:Date,
        default: Date.now
    },
    productos:{
        type: String,
    },
    cantidades:{
        type: Number,
    },
    totales:{
        type: Number
    }
})

module.exports = mongoose.model('cliente', clienteSchema)