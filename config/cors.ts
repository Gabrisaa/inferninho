/**
 * Config source: https://git.io/JfefC
 *
 * Feel free to let us know via PR, if you find something broken in this config
 * file.
 */

import type { CorsConfig } from '@ioc:Adonis/Core/Cors'

const corsConfig: CorsConfig = {
 
  enabled: true,

  
  origin: true,

 
  methods: ['GET', 'HEAD', 'POST', 'PUT', 'DELETE'],

  
  headers: true,

  /*
  |--------------------------------------------------------------------------
  | Expose Headers
  |--------------------------------------------------------------------------
  |
  | A list of headers to be exposed by setting `Access-Control-Expose-Headers`.
  | header. By default following 6 simple response headers are exposed.
  |
  | Cache-Control
  | Content-Language
  | Content-Type
  | Expires
  | Last-Modified
  | Pragma
  |
  | In order to add more headers, simply define them inside the following array.
  |
  | https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Expose-Headers
  |
  */
  exposeHeaders: [
    'cache-control',
    'content-language',
    'content-type',
    'expires',
    'last-modified',
    'pragma',
  ],

  /*
  |--------------------------------------------------------------------------
  | Credentials
  |--------------------------------------------------------------------------
  |
  | Toggle `Access-Control-Allow-Credentials` header. If value is set to `true`,
  | then header will be set, otherwise not.
  |
  | https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials
  |
  */
  credentials: true,

  /*
  |--------------------------------------------------------------------------
  | MaxAge
  |--------------------------------------------------------------------------
  |
  | Define `Access-Control-Max-Age` header in seconds.
  | https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Max-Age
  |
  */
  maxAge: 90,
}

export default corsConfig
