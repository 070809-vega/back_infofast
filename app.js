const express = require("express")
const mongoose = require("mongoose")
const bodyparser = require("body-parser")
const port = process.env.port || 4000

const app = express()

const clienteRoutes = require('./routes/clientes')

app.use(bodyparser.urlencoded({limit: '50mb', extended:true}))
app.use(bodyparser.json({limit: '50mb', extended: true}))

const uri = 'mongodb://localhost:27017/info'
// Conexion en la nube 
// const uri = 'mongodb+srv://luis:RWPaVMc8TJHRzy1i@infofast.olmovrq.mongodb.net/?retryWrites=true&w=majority'

main().catch(err => console.log(err))
async function main() {
  await mongoose.connect(uri, console.log('BD en el puerto 27017'))
  app.listen(port, function(){
    console.log('Server on port', port)
  })
}

app.use((req,res,next)=>{
  res.header('Access-Control-Allow-Origin','*'); 
  res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE, OPTIONS');
  res.header('Allow','GET, PUT, POST, DELETE, OPTIONS');
  next();
});

app.use('/api', clienteRoutes)


module.exports = app