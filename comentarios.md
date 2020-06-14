Querida Celi, estoy muy contenta viendo tu trabajo final, ya que demuestra la comprension de los principios basicos de React y JavaScript, asi como de maquetado y todas las herramientas accesorias que fuimos viendo. 
Se que tu cursada no fue tan tranquila como las demas chicas y que tuviste que poner mucho mas de vos en los ultimos meses para ponerte al dia: me alegra muchisimo que este haya sido el resultado, ya que tu trabajo esta realmente muy bien. 

Ojala hayas disfrutado este recorrido por el mundo del front end, y tengas ganas de seguir explorando lo que el desarrollo te puede ofrecer. 

Te dejo algunos comentarios para ir mejorando si tenes ganas:

- Es costumbre poner en el README de Github los pasos que tiene que hacer alguien para poder correr tu codigo. En React lo habitual es contar que hay que clonar el repo, hacer npm install y que la app corre en el puerto localhost:3000. Te recomiendo agregarlo, ya que suma bastante para los lectores de tu github. 

- Tenes muchos warnings en la consola. Es algo que cualquier persona que evalúe tu código - ya sea para un challenge tecnico o en un eventual trabajo - va a mirar, y ademas suelen ser consejos útiles para ir mejorando el código. Te recomiendo que los revises y los vayas sacando. 

- Me gusta que hayas modificado el diseño propuesto de acuerdo a lo que vos te gusta, especialmente el footer. Hace que funcionen esos links a tus redes! Suman muchisimo. 

- Hay algunos detalles que si bien pueden ser molestos de arreglar, resaltan a primera vista y le quitan merito a tu web. Los iconos de la navbar no estan alineados con el icono de buscar, asi como la flecha con los titulos. Son detalles, pero se espera que un desarrollador front end tenga ojo para esos detalles. Si podes hacer el responsive en algun momento, tambien te va a sumar mucho. 

- Tu formulario no tiene un onsubmit, pero como tiene un solo input, html hace que el form se envie cuando hacemos enter. Es un detalle, pero si no tenes tiempo de hacer la busqueda, agrega un falso onsubmit en tu formulario que solo tenga un e.preventDefault() asi la pagina no se recarga si un usuario trata de hacer una busqueda. 

- Hay varias ocasiones donde usas React Fragment (<>) innecesariamente. Atención a esos detalles. 

- Trata de respetar las convenciones en los nombres de tus variables: camelCase para las variables, como titleMedia en lugar de titlemedia. Simplifica la lectura, pero mas importante aun, en el mundo del desarrollo trabajamos en equipo y es importante que todos usemos la misma convención para evitar problemas a futuro (tus compañeros de trabajo van a escribir titleMedia y su codigo no va a funcionar si vos escribis titlemedia sin mayuscula)

- Tu tabulado es un poco desprolijo, tomate el tiempo de pasarle el linter (clic derecho + format document) antes de enviarlo. 

- Deberias sacar lo antes posible la API_KEY del codigo. Como comentamos en clase, esto es practicamente una contraseña, y no deberia nunca subirse a un repositorio publico. Si es solo para mostrar tu codigo en github, mi sugerencia es reemplazar el string que tiene la api key por un API_KEY y cualquier persona que te lea va a entender a que se refiere. Una mejor alternativa seria incluir una variable de entorno: no dejes de consultarme si te interesa hacerlo. 

- El substring "https://api.themoviedb.org/3/" se repite muchas, muchas veces a lo largo del codigo, y es logico ya que es la base de todas las url de nuestra api. Lo habitual y preferible en este caso es convertirla en una variable global. Por ejemplo en la carpeta /assets podemos hacer un archivo (lo usual es que se llame constants.js) y ahi asignarles una variable a estos strings que se usan siempre. Luego se lo exporta, y se lo importa en donde se necesite. 

Por ejemplo:


```js 
const API_URL = "https://api.themoviedb.org/3/";

export default API_URL
```

Y al usar la variable escribimos: 

```js
API URL + 'trending/movie/week?api_key=' + API_KEY 
```

