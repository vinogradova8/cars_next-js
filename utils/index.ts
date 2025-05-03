export async function fetchCars() {
  const headers = {
    'x-rapidapi-key': '1e12ddea63msh79ed6c3f811df7cp1349bcjsn0b979698d527',
    'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com',
	};
	
	const response = await fetch(
		'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
			headers: headers,
		}
	);
	
	const result = await response.json();

	return result;
}
