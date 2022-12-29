(() => {

  class Avenger {
    // name; No es necesario
    // power;

    constructor(name = 'No name', power = 0) {
      this.name = name;
      this.power = power;
    }
  }

  // Herencia
  class FlyingAvenger extends Avenger {
    // flying; No es necesario

    constructor(name, power) {
      super(name, power);
      this.flying = true;
    }
  }

  const hulk = new Avenger('Hulk', 9000);
  console.log(hulk);
  const falcon = new FlyingAvenger('Falcon', 50);

})