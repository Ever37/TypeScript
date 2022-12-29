(() => {

  class Avenger {
    constructor(
      protected name: string,
      public realName: string,  
    ) {
      // console.log('Constructor Avenger llamado!')
    }

    protected getFullname() {
      return `${this.name} ${this.realName}`;
    }
  }

  class Xmen extends Avenger {
    constructor(
      protected name: string,
      realName: string,
      public isMutant: boolean,  
    ){
      super(name, realName);
      // console.log('Constructor Xmen llamado');
    }


    // Getter
    get fullName() {
      return `${this.name} - ${this.realName}`;
    }

    // Setter
    set fullName(name: string) {
      if (name.length < 3) {
        throw new Error('El nombre debe de ser mayor de 3 letras');
      }
      this.name = name;
    }

    getFullnameDesdeXmen() {
      console.log(super.getFullname());
    }
  }

  const wolverine = new Xmen('Wolverine', 'Logan', true);
  wolverine.getFullnameDesdeXmen();
  // console.log('wolverine :', wolverine.fullName);
  wolverine.fullName = 'Ever';
  // console.log('wolverine.fullName :', wolverine.fullName);

})()