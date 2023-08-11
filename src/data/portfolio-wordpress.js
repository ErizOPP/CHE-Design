import { resolve } from "path";
import { config } from "dotenv";

config({ path: resolve( "./.env") });

const username = process.env.WP_USER;
const password = process.env.WP_PASS;
const headers = new Headers();
headers.set('Authorization', `Basic ${btoa(`${username}:${password}`)}`);

// Realizar una solicitud GET con autenticación básica



const DOMAIN =  "http://c1721991.ferozo.com/api";
const API_WP =  `${DOMAIN}/wp-json/wp/v2`;
const POST =  `${API_WP}/posts`;
const CATEGORIES =  `${API_WP}/categories`;
const MEDIA =  `${API_WP}/media`;

export function getPortfolios(){
  fetch(POST, {
    method: 'GET',
    headers: headers,
    }
  )
  .then(res => res.ok ? res.json(): Promise.reject(res))
  .then(json =>{
    console.log(json);
  })
  .catch(error => {
    return Astro.redirect("/404"),
    console.error('Error fetching data:', error);
  });
}

getPortfolios()


/* fetch(POST, {
  method: 'GET',
  headers: headers,
})
  .then(response => response.json())
  .then(data => {console.log(data)})
  .catch(error => {
    console.error('Error fetching data:', error);
  });

*/