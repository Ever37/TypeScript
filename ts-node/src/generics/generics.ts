
// Función genérica -> función que puede recibir cualquier tipo de argumento
export const printObject = (argument: any) => {
  console.log(argument);
}

// T nombre estandar para definir un tipo genérico de función
export function genericFunction<T>(argument: T):T {
  return argument;
}

export const genericFunctionArrow = <T>( argument: T) => argument;
