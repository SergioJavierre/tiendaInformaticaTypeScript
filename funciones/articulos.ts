const readline = require('readline')
const fs = require('fs')

const pathArticulos = './datos/articulos.txt'


const leerArticulos = () => {
    const lector = readline.createInterface({
        input:fs.createReadStream(pathArticulos),
        output:process.stdin,
        terminal:false
    })
    lector.on('line',leeLineaArticulo)
}

const insertaArticulo = (articulo) => {
    const datos = "\n"+articulo.nombre+";"+articulo.precio //\n para meter nueva línea
    //añadimos al final del fichero
    fs.appendFile(pathArticulos,datos, (err) => {
        if(err){
            console.log('Se ha producido un error en la escritura', err)
        }
        console.log('Cambios guardados')
    })
}

const leeLineaArticulo = (linea) =>{
    let datosArticulo = linea.split(";")
    let articulo = {
        nombre: datosArticulo[0],
        precio: datosArticulo[1]
    }
    console.log(articulo)
}

export { leerArticulos, insertaArticulo}