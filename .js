const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },

  get appetizers() {

  },
  get mains() {

  },
  get desserts() {

  },
  set appetizers(appetizerIn) {

  },
  set mains(mainsIn) {

  },
  set desserts(dessertsIn) {

  },

  get courses() {
    return{
      appetizers: this.appetizers, mains: this.mains, desserts: this.desserts
    }
  },

  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    };
    this._courses[courseName].push(dish)
  },

  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random()*dishes.length);
    return dishes[randomIndex];
  }, 

  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const mains = this.getRandomDishFromCourse('mains');
    const desserts = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + mains.price + desserts.price;

    return `Your meal is ${appetizer.name}, ${mains.name}, ${desserts.name}. The total price is $${totalPrice}.`;
  }
 
}; 
menu.addDishToCourse('appetizers', 'Ceasar Salad', 9.25);
menu.addDishToCourse('appetizers', 'Nachos', 6.50);
menu.addDishToCourse('appetizers', 'CinniBiscuit', 1.75);

menu.addDishToCourse('mains', 'Bacon, Egg N Cheese Biscuit', 5.00);
menu.addDishToCourse('mains', 'Chicken Sandwich', 6.25);
menu.addDishToCourse('mains', 'Tomato Basil Soup', 4.00);

menu.addDishToCourse('desserts', 'Samuian Bread', 3.90);
menu.addDishToCourse('desserts', 'Flap Jacks', 2.80);
menu.addDishToCourse('desserts', 'Samuian Bites', 3.00);

const meal = menu.generateRandomMeal();
console.log(meal);
