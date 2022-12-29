(() => {

  // Una clase abstracta no se puede instanciar.
  // Sirve para extender en otras clases
  abstract class Mutante {
    constructor(
      public name: string,
      public realName: string,  
    ) {}
  }

  class Xmen extends Mutante {
    salvarMundo() {
      return 'Mundo a salvo!';
    }
  }

  class Villian extends Mutante {
    conquistarMundo() {
      return 'Mundo conquistado';
    }
  }

  const wolverine: Xmen = new Xmen('Wolverine', 'Logan');
  const magneto: Villian = new Villian('Magneto', 'Magnus');

  // console.log('magnero :', magneto.conquistarMundo());
  // console.log('wolverine :', wolverine.salvarMundo());

  const printName = ( character: Mutante ) => {
    console.log(character.realName);
  }

  printName(wolverine);

})();