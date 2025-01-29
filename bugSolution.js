function myFunc() {
  console.log(this);
}

// Solutions to explicitly set 'this'

// 1. Using bind
const boundFunc = myFunc.bind({ someProperty: 'Hello' });
boundFunc(); // this will be { someProperty: 'Hello' }

// 2. Using call
myFunc.call({ anotherProperty: 'World' }); // this will be { anotherProperty: 'World' }

// 3. Using apply
myFunc.apply({ yetAnotherProperty: 123 }); // this will be { yetAnotherProperty: 123 }

// 4. Inside a class or object method (recommended)
class MyClass {
  myMethod() {
    console.log(this); // this will be the MyClass instance
  }
}

const myInstance = new MyClass();
myInstance.myMethod();