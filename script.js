function getPersons(name, age) {

    // Object literal
    const obj1 = {
      name: name,
      age: age
    };
  

    // Object.create()
    const personPrototype = {
      getName: function() {
        return this.name;
      },
      getAge: function() {
        return this.age;
      }
    };
  
    const obj2 = Object.create(personPrototype);
    obj2.name = name;
    obj2.age = age;
  

    // Constructor function
    function Person(name, age) {
      this.name = name;
      this.age = age;
    }
  
    const obj3 = new Person(name, age);
  

    // Object.assign()
    const obj4 = Object.assign({}, { name, age });
  

    // Object spread syntax 
    const obj5 = { ...{ name, age } };
  

    // Object.setPrototypeOf()
    const obj6 = Object.setPrototypeOf({ name, age }, personPrototype);
  

    return [obj1, obj2, obj3, obj4, obj5, obj6];
}
  

  console.log(getPersons('Daria', 24));