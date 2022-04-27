class Contenedor {
  constructor() {
    this.objects = [];
  }

  save(object) {
    this.objects.push(object);
  }

  getById(id) {
    return this.objects.find((object) => object.id === id);
  }
  getAll() {
    return this.objects;
  }
  deleteById(id) {
    this.objects = this.objects.filter((object) => object.id !== id);
  }
  deleteAll() {
    this.objects = [];
  }
}

let testContainer = new Contenedor();

testContainer.save({id:1, title:"title1", price:500, thumbnail:"thumbnail1"});
testContainer.save({id:2, title:"title2", price:500, thumbnail:"thumbnail2"});
testContainer.save({id:3, title:"title3", price:500, thumbnail:"thumbnail3"});
testContainer.save({id:4, title:"title4", price:500, thumbnail:"thumbnail4"});
console.log(testContainer);
console.log(testContainer.getById(3))
console.log(testContainer.getAll())
testContainer.deleteById(2);
console.log(testContainer)
testContainer.deleteAll(2);
console.log(testContainer)

