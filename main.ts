const readline = require('readline')

import { leerArticulos, insertaArticulo } from './funciones/articulos'
import { leerClientes, insertaCliente } from './funciones/clientes'

const menuPrincipal = () =>  {
    const lector = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    console.log("1) Gestión de artículos")
    console.log("2) Gestión de clientes")
    lector.question('Opción: ', (opcion) => {
        lector.close()
        if(opcion == 1){
            menuArticulos()
        }
        else if(opcion == 2){
            menuClientes()
        }
    })
}

const menuArticulos = () =>  {
    console.log("1) Listar artículos")
    console.log("2) Añadir artículo")
    const lector = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    lector.question('Opción: ', (opcion) => {
        lector.close()
        if(opcion == 1){
            leerArticulos()
        }
        else if(opcion == 2){
            insertaArticulo({nombre:"GPU",precio:300})
        }
    })
}

const menuClientes = () =>  {
    console.log("1) Listar clientes")
    console.log("2) Añadir cliente")
    const lector = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    lector.question('Opción: ', (opcion) => {
        lector.close()
        if(opcion == 1){
            leerClientes()
        }
        else if(opcion == 2){
            insertaCliente({nombre:"John",email:"john@gmail.com",telefono:"666444999"})
        }
    })
}

menuPrincipal()