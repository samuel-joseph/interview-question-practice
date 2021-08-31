// What is the Singleton design pattern?
// The Singleton design pattern is a creational pattern that states that one and only one instance of a class would persist in the memory during the application’s life cycle. In other words, this design pattern restricts instantiation of a class to just one object.

let Singleton = (function () {
  function Singleton() {}

  let instance;
  return {
    getInstance: function () {
      if (null == instance) {
        instance = new Singleton();
        instance.constructor = null;
      }
      return instance;
    },
  };
})();

let justOneInstance = Singleton.getInstance();
