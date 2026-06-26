const os = require("os");

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.hostname());
// console.log(os.type());
// console.log(os.release());
// console.log(os.version());
// console.log(os.uptime());
// console.log(os.userInfo());
// console.log(os.homedir());
// console.log(os.cpus());
// console.log(os.totalmem());
// console.log(os.freemem());
// console.log(os.networkInterfaces());

console.log("================= SYSTEM INFORMATION ================");

console.log(`Operating System: ${os.type()} ${os.release()}`);
console.log(`Architecture: ${os.arch()}`);
console.log(`Hostname: ${os.hostname()}`);

console.log(`Uptime: ${os.uptime()} seconds`);
console.log(`Total Memory: ${os.totalmem()} bytes`);
console.log(`Free Memory: ${os.freemem()} bytes`);

const userInfo = os.userInfo();
console.log(`User: ${userInfo.username}`);
console.log(`Home Directory: ${userInfo.homedir}`);

const cpus = os.cpus();
console.log(`Number of CPU Cores: ${cpus.length}`);
console.log(`CPU Model: ${cpus[0].model}`);
console.log(`CPU Speed: ${cpus[0].speed} MHz`);

console.log("================= NETWORK INFORMATION ================");

const networkInterfaces = os.networkInterfaces();
for (const interfaceName in networkInterfaces) {
  const interfaceInfo = networkInterfaces[interfaceName];
  console.log(`Interface: ${interfaceName}`);
  interfaceInfo.forEach((info) => {
    console.log(`  - Address: ${info.address}`);
    console.log(`  - Netmask: ${info.netmask}`);
    console.log(`  - MAC: ${info.mac}`);
  });
}

console.log("================= MEMORY INFORMATION ================");

console.log(`Total Memory: ${os.totalmem()} bytes`);
console.log(`Free Memory: ${os.freemem()} bytes`);
// in GBs
console.log(
  `Total Memory: ${(os.totalmem() / (1024 * 1024 * 1024)).toFixed(2)} GB`,
);
console.log(
  `Free Memory: ${(os.freemem() / (1024 * 1024 * 1024)).toFixed(2)} GB`,
);

console.log("================= END OF INFORMATION ================");
