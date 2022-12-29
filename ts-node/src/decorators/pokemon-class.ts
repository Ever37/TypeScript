
function printToConsole( constructor: Function ) {
  console.log(constructor);
}

const printToConsoleConditional = ( print: boolean ): Function => {
  if ( print ) {
    return printToConsole;
  } else {
    return () => {};
  }
}

// decorador que bloquea la expansión de una clase (tipo candado)
const bloquearPrototipo = function( constructor: Function ) {
  Object.seal( constructor );
  Object.seal( constructor.prototype );
}

function CheckValidPokemonId() {
  return function( target: any, propertyKey: string, descriptor: PropertyDescriptor ) {
    // console.log({ target, propertyKey, descriptor });
    // descriptor.value = () => console.log('Hola Mundo!');
    const originalMethod = descriptor.value;
    descriptor.value = (id: number) => {
      if ( id < 1 || id > 800) {
        return console.error('El ID del pokemon debe de estar entre 1 y 800');
      } else {
        return originalMethod(id)
      }
    }
  }
}

function readonly( isWritable: boolean = true): Function {
  return function(target: any, propertyKey: string) {
    console.log({ target, propertyKey });
  
    const descriptor: PropertyDescriptor = {
      get() {
        console.log(this);
        return 'Fernando';
      },
      set(this, val) {
        // console.log(this, val);
        Object.defineProperty(this, propertyKey, {
          value: val,
          writable: !isWritable,
          enumerable: false
        });
      }
    }

    return descriptor;
  }
}

// Los decoradores se ejecutan en orden secuencial
@bloquearPrototipo
@printToConsoleConditional( false )
export class Pokemon {

  @readonly()
  public publicApi: string = 'https://pokeapi.co/';

  constructor(
    public name: string
  ){}

  @CheckValidPokemonId()
  savePokemonToDB( id: number ) {
    console.log(`Pokemon guardado en DB ${ id }`)
  }
}