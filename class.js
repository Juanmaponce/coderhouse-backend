class Usuario {
  constructor(nombre, apellido, libros, mascotas ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }
  getFullName() {
    return this.nombre;
  }
  addMascota(mascota) {
    this.mascotas.push(mascota);
  }
  countMascotas() {
    return this.mascotas.length;
  }
  addlibro(nombre, autor) {
    this.libros.push({
      nombre: nombre,
      autor: autor
    });
  }
  getBookNames() {
    return this.libros.map(libro => libro.nombre);
  }

}

let testUsuario = new Usuario('Juan', 'Perez', [{nombre: 'libro1', autor:'autor1'}], ['perro1', 'perro2']);

testUsuario.addlibro('libro2', 'autor2');
testUsuario.addMascota('perro3');
testUsuario.addMascota('perro4');
testUsuario.getBookNames();
testUsuario.countMascotas();
testUsuario.getFullName();

