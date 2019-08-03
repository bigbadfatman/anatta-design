export const API_URL = 'https://anatta-demo-app.herokuapp.com/api';

export const PRODUCT_URL = `${API_URL}/products`;
export const PRODUCT_DETAILS_URL = (id) => `${PRODUCT_URL}/${id}`;
export const PRODUCT_IMAGE_URL = (id) => `${PRODUCT_URL}/${id}/image`;

export const getData = (url) => fetch(url).then(r => r.json()).catch(e => {throw new Error(e)});