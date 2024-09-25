//Modules
const names = require(`./4-modules_names`);
// const {moni , karen}=require(`./4-modules_names`)
const func = require(`./5-modules_utiles`);
const flavor = require(`./6-modules_alternative`);
const num1 = require("./7-mind-grenade");
console.log(flavor);
console.log(names)
func(`nabil`);
func(names.karen);
func(names.moni);
console.log(karen);

require(`./7-mind-grenade`);

//if we do anything on the mind grenade file it will run on this file 
