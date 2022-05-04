Env to run JS outside the client -> Chrome V8 engine

GLOBALS

__dirname
__filename
require
module
Process

Build in modules

	- OS
	- PATH
	- FS
	- HTTP

Npm i -D -> installa pacchetti solo per dev
Nodemon -> refresh automatico del package
---
Event Loop
perfom non blocking I/O ops -> usa delle callback functions per delegare il codice -> simile a ajax
---
Events emitters
posso usare .on() più volte per lo stesso evento se devo usare una logica diversa
prima devo sempre mettere on -> listen for events -> emit event
posso anche passare dei parametri quando emetto un evento -> usati solo in .on() che li usa
---
HTTP - EXPRESS
devo sempre chiamare res.end() per mandare una risposta al browser
le API possono ritornare sempre e solo una risposta per chiamata -> se metto due volte res.json funziona ma lancia un errore
---
MiddleWare
function che gira mentre la chiamata la server viene eseguita
es. chiamata al DB e estrazione dati
richiamata nella richiesta
---
Router
Raggruppo le API sulla base del path