/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/
/* quandoa requição get chegar a esse endereço execute a função abaixo */
import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})
Route.post("/register", "AuthController.register")
Route.post("/login", "AuthController.login")
/* a tarefada da rota e receber a requisição e devolver o codigo  */

/* controler-> são classes que centaliza o procesamento pela rota que ultiliza o processamento do codigo solicitado   */
