
import { genericFunctionArrow } from '../generics/generics';
import { Villain } from '../interfaces';

// printObject(1234);
// printObject( new Date());
// printObject([1,2,3,4,5,6,7,8,9,10]);
// printObject('Hola Mundo');

const deadpool = {
  name: 'Deadpool',
  realName: 'Wade Winston Wilson',
  dangerLevel: 130
}

console.log(genericFunctionArrow<Villain>(deadpool).dangerLevel);