#  API REST MY-STORE 🛒

CRUD MONGO - EXPRESS - NODE

![My etiqueta](https://img.shields.io/badge/David%20Maza-DiveCode%F0%9F%90%99-blue)  ![Node Version](https://img.shields.io/badge/Node-v18.12.1-green) ![GitHub repo size](https://img.shields.io/github/repo-size/d-maza/mystrore_back-MEAN) ![GitHub repo licence](https://img.shields.io/github/license/d-maza/mystrore_back-MEAN) ![Codigoutil](https://img.shields.io/badge/Co--Founder-CodigoUtil%F0%9F%92%A1-orange) 

### Normar de uso 🤜🏼🤛🏼

- Ejecuta la clonación del repositorio en tu teminal:

``git clone https://github.com/d-maza/mystrore_back-MEAN.git``



- Acede a la carpeta con el comando:

`cd mystrore_back-MEAN`


- Recuerda que es necesario tener instalado NodeJS, decasrgar los repositorios con en comando.

 `npm install `


- Elimina el `.example` del archivo `.env.example` quedandote un archivo con el nombre `.env`


> En este archivo puedes editar las whitelist de tus accesos permitidos (dominios o puertos) y cambiar en acceso de base de dados (Actuamente esta en localhots:3000)

El ejercicio de ejecuta en el archivo app.js:

 `node app`

 
## API Reference

#### Get all Products

```http
  GET /api/get_products
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **NO Required**. Your API key |

#### Get Product

```http
  GET /api/get_product/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


#### Delete Product
```http
  DELETE /api/delete_product/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


### DATA TRANSFER OBJECT (DTO)
```
{
  name:         string;
  price:        number;
  description:  string;
  category:     string;
}
```


### Ejemplo de uso 🐱‍💻

#### Ejemplo GET de JavaScript Fetch 
 
```javascript

async function get_products() {
    let response = await fetch("http://localhost:3000/api/get_products", {
        method: "GET",
    });
let data = await response.json();
console.log(data);
}

get_products()
```


#### Ejemplo PHP de Laravel Http
```php

<?php
 
use Illuminate\Support\Facades\Http;
 
$response = Http::withHeaders([ 
    ]) 
    ->get('http://localhost:3000/api/get_products'); 

echo $response->body();
```
## 🛠 Skills

- [Node.js](https://nodejs.org/es/)
- [Express](http://expressjs.com/)
- [Mongosse.js](https://mongoosejs.com/)
- [CORS](http://expressjs.com/)
- [DotEnv](https://www.npmjs.com/package/dotenv)
- [Morgan](https://www.npmjs.com/package/morgan)
- [Nodemon](https://nodemon.io/)
- [JsonWebToken](https://www.npmjs.com/package/jsonwebtoken)



## Las solicitudes de extracción y los problemas son bienvenidos

Si encuentras algo que se pueda mejorar, envíe una solicitud de extracción. 

## Authors

- [@D-MAZA](https://github.com/d-maza)


