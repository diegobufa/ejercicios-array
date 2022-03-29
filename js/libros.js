class Libros{
    constructor (titulo, autor, año, genero){
        this.titulo = titulo;
        this.autor =  autor;
        this.año = año;
        this.genero = genero;        
    }
    getAutor () {
        return this.autor;
    }
    getGenero (){
        return this.genero;
    }
    libroInfo (){
        return `${this.titulo} es un libro de ${this.genero} escrito por ${this.autor} en el año ${this.año}.`;
    }
}

let libros = [];

while (libros.length < 3) {
    let titulo = prompt ("Introduce el titulo del libro ");
    let autor = prompt ("Introduce el autor del libro");
    let año = prompt ("Introduce el año del libro");
    let genero = prompt ("Introduce el genero del libro, los cuales pueden ser aventura, terror, romantica, biografia y fantasia?").toLowerCase();
  

    if (titulo != "" && autor != "" && !isNaN(año) && año.length == 4 & año < 2022 && (genero == "aventura" || genero == "terror"  || genero == "romantica" || genero == "biografia" || genero == "fantasia")) {

        libros.push( new Libros (titulo, autor, año, genero));

    }
} 

const muestraLibros = () => {
    console.log (libros);
}

const muestraAutor = () =>{
    let autores = []; 
    for (const libro of libros ){
        autores.push(libro.getAutor());
    }
    console.log(autores.sort());
}

const muestraGenero = () => {
    const genero = prompt ("Introduce el genero a buscar?");

        for (const libro of libros ) {
            if (libro.getGenero () == genero) {
               alert(libro.libroInfo ());
            }
        }

}

let librosGeneros = libros.forEach (producto => console.log (producto.genero));

let autorFecha = libros.map (producto2 => console.log(producto2.autor +  producto2.año));


muestraLibros();
muestraGenero();
muestraAutor();