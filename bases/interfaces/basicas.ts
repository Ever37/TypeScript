(() => {

  // Interfaces - No tiene una representación fisica en JS.
  // type no es extendible, una interface se puede extender
  interface Hero {
    name: string,
    age?: number,
    powers: string[],
    getName?: () => string,
  }

  let flash: Hero = {
    name: 'Barry Allen',
    age: 24,
    powers: ['Super velocidad', 'Viajar en el tiempo'],
  };

  let superman: Hero = {
    name: 'Clark Kent',
    age: 60,
    powers: ['Super velocidad'],
    getName() {
      return this.name;
    }
  };

})();