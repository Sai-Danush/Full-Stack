class Animal {
    constructor(name, legCount, speaks, owner, age) {
      this.name = name;
      this.legCount = legCount;
      this.speaks = speaks;
      this.owner = owner;
      this.age = age;
    }
    describe() {
      // return `${this.name} has ${this.legCount} legs and speaks ${this.speaks}`    
      console.log(this.name +" has " + this.legCount + " legs and speaks " + this.speaks + " The owner of this dog is " + this.owner + 
      " the age of the dog is " + this.age )
    }
  }
  
  let dog = new Animal("dog", 4, "bhow bhow", "Vaibavi", 10); // creating a object
  /* const a = dog.describe();
    console.log(a);  Use the following if we use return statement */
   dog.describe(); // call function on object 

   /* if you have static method you can call that on the function but here we can only call other methods which are not static on objects */

   