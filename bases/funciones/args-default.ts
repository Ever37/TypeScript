(() => {
	// = value (argumentos por defecto)
	// primero van todos los args requeridos, últimos los opcionales
	const fullName = (firstName: string, lastName?: string, upper: boolean = false): string => {
		if (upper) {
			return `${firstName} ${lastName || '-----------'}`.toUpperCase();
		} else {
			return `${firstName} ${lastName || '-----------'}`;
		}
	}
	const name = fullName('Tony', 'Stark', true);
 	console.log('name :', name);
})();