const Cliente = require('../models/clientes')

const createCliente = async (req, res) =>{
    // console.log('hola mundo')
    let data = req.body
    let cliente = await Cliente.create(data)
    res.status(200).send({data:cliente})
}

const listarClientes = async (req, res) => {
    if(req.body){
        const clientes = await Cliente.find()
        res.status(200).send(clientes)
    }else{
        res.status(500).send({
            data: undefined,
            message: 'No se pudo mostrar'
        })
    }
}

module.exports = {
    createCliente,
    listarClientes
}
