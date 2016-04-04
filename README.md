Express Session Middleware Examples
===

This project contains three express apps.

* [cookiesession](/cookiesession) stores the session data in a cookie
* [memorystore] stores the session data in memory (not for production use!)
* [redisstore] stores the session data in Redis, a distributed key-value database

Each app can be started as follows:

```
PORT=3000 node app.js
```

Try starting two instances of the same app (hint, set PORT=3001 on the second) and
open your browser to http://localhost:3000 and a second tab at http://localhost:3001

Do any of these apps have trouble when running two different copies?  Why?

What happens if you use Incognito mode?

