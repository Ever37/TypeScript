(() => {

  type Avengers = {
    nick: string,
    ironman: string,
    vision: string,
    activo: boolean,
    poder: number,
  }

  const avengers: Avengers = {
    nick: 'Samuel L. Jackson',
    ironman: 'Robert Downey Jr.',
    vision: 'Paul Bettany',
    activo: true,
    poder: 1500,
  }

  const printAvener = ({ ironman, ...resto }: Avengers ) => {
    console.log(ironman);
  }

  // const { poder, vision,} = avengers;
  // console.log(poder.toFixed(2), vision.toUpperCase());

  // printAvener( avengers );

  const avengersArr: [string, boolean, number]= ['Cap. América', true, 150.15];
  const [ capitan, ironman, seriaUnNumero ] = avengersArr;
  console.log(ironman, capitan);

})();
