const toyToFind = 2

const toys = [
  {
    id: 1,
    name: "truck",
    brand: "Tonka",
    size: "small",
    color: "red",
    price: 20,
    inventory: 100,
    batteries: true,
  },
  {
    id: 2,
    name: "ball",
    brand: "beautiful",
    size: "big",
    color: "orange",
    price: 5,
    inventory: 400,
    batteries: false,
  },
  {
    id: 3,
    name: "bike",
    brand: "huffy",
    size: "medium",
    color: "silver",
    price: 100,
    inventory: 100,
    batteries: false,
  },
];


const giJoe = 
{
  id: 4,
  name: "G.I. Joe",
  brand: "G.I. Joe",
  size: "small",
  color: "orange",
  price: 20,
  inventory: 300,
  batteries: false,
};



const soccerBall = 
  {
    id: 5,
    name: "Jabulani",
    brand: "adidas",
    size: "5",
    color: "white",
    price: 120,
    inventory: 300,
    batteries: false,
  };


toys.push(giJoe)
toys.push(soccerBall)



const addToyToInventory = (toyObject) => {
     /*
        Step 1: Get maximum id current in array
    */
    // Get index of last item in array
  const lastIndex = toys.length - 1

    // Get the last object in the array
  const currentLastToy = toys[lastIndex]

    // Get id property value of last phone
  const maxId = currentLastToy.id
    /*
        Step 2: Increase the current max id by 1
    */
  const idForNewToy = maxId + 1

      /*
        Step 3: Add the id property to the phone object
    */
  toyObject.id = idForNewToy
   /*
        Step 4: Add the phone object to the array
    */
  toys.push(toyObject)
}

const football = 
{
  name: "Football",
  brand: "Nike",
  size: "massive",
  color: "dark clear",
  price: 555,
  inventory: 1,
  batteries: true,
};
addToyToInventory(football)

for (const toy of toys) {
console.log( `The ${toy.color} ${toy.name} costs ${toy.price}.`)
}

console.log(toys)
/*
  Now that the function is defined, you can invoke it
  and put a value in the parenthesis (a.k.a. the argument).
  The object will be stored in the `phoneObject`
  parameter for use in the function.
*/

/* for (const toy of toys) {
 if (toy.id === toyToFind) {
  //add 5% to each price
  toy.price += toy.price * .05 
   
console.log( `The ${toy.color} ${toy.name} costs ${toy.price}.`)
  }
}
 */