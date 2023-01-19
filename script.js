const agregarCarrito = (carro, producto) => carro += producto ;
const calcularIva = (numero) => numero * 1.21 ;
function book(nombre, tipo, precio){
    this.nombre = nombre;
    this.tipo = tipo;
    this.precio = precio;
}

const manga1 = new book("dragon ball", "manga", 900)
const manga2 = new book("vinland saga", "manga", 1300)
const manga3 = new book("chainsaw man", "manga", 900)
const manga4 = new book("evangelion", "manga", 900)
const manga5 = new book("berserk", "manga", 1300)
const comic1 = new book("civil war", "comic", 3200)
const comic2 = new book("watchmen", "comic", 5500)
const comic3 = new book("the killing joke", "comic", 2800)
const comic4 = new book("sandman", "comic", 6300)
const libro1 = new book("it", "libro", 4200)
const libro2 = new book("cancion de hielo y fuego", "libro", 4600)
const libro3 = new book("el resplandor", "libro", 3800)

const productos = [manga1, manga2, manga3, manga4, manga5, comic1, comic2, comic3, comic4, libro1, libro2, libro3];



function calcularlibreria(mercaderia){
    let carrito =[];
    let buscar;
    let opcion;
    do{
        opcion = prompt("Aqui tiene nuestros productos en venta, elija el que quiera escribiendo su nombre tal cual aparece en pantalla, escriba FIN para salir. \n -" + mercaderia[0].nombre + "  $" + mercaderia[0].precio +
            "\n -" + mercaderia[1].nombre + "  $" + mercaderia[1].precio + "\n -" + mercaderia[2].nombre + "  $" + mercaderia[2].precio + "\n -" + mercaderia[3].nombre + "  $" + mercaderia[3].precio +
            "\n -" + mercaderia[4].nombre + "  $" + mercaderia[4].precio +"\n -" + mercaderia[5].nombre + "  $" + mercaderia[5].precio +"\n -" + mercaderia[6].nombre + "  $" + mercaderia[6].precio +
            "\n -" + mercaderia[7].nombre + "  $" + mercaderia[7].precio +"\n -" + mercaderia[8].nombre + "  $" + mercaderia[8].precio +"\n -" + mercaderia[9].nombre + "  $" + mercaderia[9].precio +
            "\n -" + mercaderia[10].nombre + "  $" + mercaderia[10].precio +"\n -" + mercaderia[11].nombre + "  $" + mercaderia[11].precio)
        buscar = mercaderia.find((producto) => producto.nombre === opcion)
        if (buscar){
            carrito.push(buscar)}
        
    }while (opcion !== "FIN")
    return carrito
}

function carrito(mercaderia){
    let opcion = 0;
    let carro;
    let total = 0;
    let cuotas = 0;
    let texto = ""

    do{
        opcion = parseInt(prompt("Hola! Bienvenido al carrito, ingrese el numero asignado para lo que quiera hacer" + "\n -" + "-1 Comprar" + "\n -" + "-2 total del carrito + impuestos" + "\n -" + "-3 elegir cantidad de cuotas"+ "\n -" + "-4 vaciar carrito"+ "\n --5 para ver carrito" + "\n --6 salir"))
        if (opcion === 1){
            carro = calcularlibreria(mercaderia)
            console.log(carro)
            carro.forEach((producto) => {total += producto.precio})
            carro.forEach((producto) =>(texto += producto.nombre + " ("+ producto.tipo + ")\n" ))
        }
        else if(opcion === 2){
            alert("el total del carrito es: " + calcularIva(total))
            
        }
        else if (opcion === 3){
            cuotas = parseInt(prompt("ingrese la cantidad de cuotas en las que quiere efectuar el pago, 3, 6 o 12: "))
            if (cuotas === 3  || cuotas === 6  || cuotas ===12){
                alert("en " + cuotas + " cuotas serian: " + "$" + (calcularIva(total)/cuotas) + "*mes")
            }
        }
        else if (opcion === 4 ){
            total = 0
            carro = []
            alert("carrito vaciado")
        }
        else if(opcion === 5){
            alert("los productos en el carrito son: \n" + texto)
        }
        else if (opcion === 6 ){
            alert("gracias por usar este carrito!")
        }
    } while(opcion !== 6)
}

carrito(productos)