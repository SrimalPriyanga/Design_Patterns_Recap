// Singleton Design Pattern Example 1

const Singleton = (function () {
  let instance;
  function creteInstance() {
    let object = new Object("New Instance");
    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = creteInstance();
      }
      return instance;
    },
  };
})();

console.log("---------- EXAMPLE 1 ----------");

// Create first instant
const instance1 = Singleton.getInstance();
console.log(instance1);

// Create second instant
const instance2 = Singleton.getInstance();
console.log(instance2);

// Instance Comparison
console.log(instance1 === instance2);
