// or const {=nabil}= require(`os`); if i want a specific one
const os = require(`os`)

//info about current user
const user=os.userInfo();
console.log(user);

//method returns the system uptime in seconds
console.log(`the system Uptime is ${os.uptime()}seconds`);

const currentOS = {
    name:os.type(),
    release:os.release(),
    totaleMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOS);