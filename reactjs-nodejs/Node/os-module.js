// built-in OS Module
const os = require('os');
// info about current user
const user = os.userInfo();
console.log(user);

// method return system uptime in seconds
console.log(os.uptime());

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);