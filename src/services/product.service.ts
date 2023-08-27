const API_URL = 'http://fakestock.everys.com/api/v1/Stock';

export async function getProducts(filter: string = '') {
  try {
    const response = await fetch(`${API_URL}?Take=300&Filter=${filter}`, {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'Authorization': 'Basic Y2FuZGlkYXRlOmNhbmRpZGF0ZTMyMQ=='
      }
    })
    const unpackedResponse = await response.json();
    if (unpackedResponse.status === 'Error') {
      return unpackedResponse;
    }
    return unpackedResponse.result;
  } catch (error) {
    console.log(error);
  }
}
