(() => {
  let avenger: any = 123;
  let exists;
  let power;

  avenger = 'Dr. Strange';
  console.log('avenger :', avenger.charAt(0));
  console.log('avenger :', (avenger as string).charAt(0));
})();