const readline = require('readline')
const fs = require('fs')

const pathClientes = './datos/clientes.txt'


const leerClientes = () => {
    const lector = readline.createInterface({
        input:fs.createReadStream(pathClientes),
        output:process.stdin,
        terminal:false
    })
    lector.on('line',leeLineaCliente)
}

const insertaCliente = (cliente) => {
    const datos = "\n"+cliente.nombre+";"+cliente.email+";"+cliente.telefono //\n para meter nueva línea
    //añadimos al final del fichero
    fs.appendFile(pathClientes,datos, (err) => {
        if(err){
            console.log('Se ha producido un error en la escritura', err)
        }
        console.log('Cambios guardados')
    })
}

const leeLineaCliente = (linea) =>{
    let datosCliente = linea.split(";")
    let cliente = {
        nombre: datosCliente[0],
        email: datosCliente[1],
        telefono: datosCliente[2]
    }
    console.log(cliente)
}

export { leerClientes, insertaCliente}