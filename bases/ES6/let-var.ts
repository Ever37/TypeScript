(() => {

  // Ya no debemos trabajar con var - En TS ya no existe
  const nombre = 'Fernando';

  const hero = {
    a: 1,
    b: 2,
  }

  const getName = ():void => {
    console.log('viejo getName');
  }

})();