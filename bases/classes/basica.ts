(() => {
  class Avenger {
    // private name: string;
    // public team: string;
    // public realName: string;

    static avgAge: number = 35;
    static getAvgAge() {
      return this.name; // Las clases tienen un nombre -> Avenger
    }

    // Forma corta de asignar propiedades
    constructor(
      private name: string,
      private team: string,
      public realName?: string,
    ) {
      // this.name = name;
      // this.team = team;
      // this.realName = realName;
    }

    public bio() {
      return `${this.name} (${this.team})`;
    }
  }

  const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott Lang');
  console.log('antman :', antman);
  console.log('antman :', antman.bio());
  console.log('  Avenger.getAvgAge(); :',   Avenger.getAvgAge());

})();