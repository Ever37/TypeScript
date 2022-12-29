(() => {
  // Constructores privados
  class Apocalipsis {
    
    static instance:Apocalipsis;
  
    private constructor(public name: string) {
    
    }

    // Principio Singleton - Siempre va a ser la misma instancia
    // la que se generó la primera y única vez.
    static callApocalipsis(): Apocalipsis {
      if(!Apocalipsis.instance) {
        Apocalipsis.instance = new Apocalipsis('Soy apocalipsis... el único');
      }
      return Apocalipsis.instance;
    }

    changeName(newName: string): void {
      this.name = newName;
    }
  }

  // Esto llama siempre a la misma instancia (Singleton)
  const apocalipsis1 = Apocalipsis.callApocalipsis();
  const apocalipsis2 = Apocalipsis.callApocalipsis();
  const apocalipsis3 = Apocalipsis.callApocalipsis();

  apocalipsis1.changeName('Xavier');

})();