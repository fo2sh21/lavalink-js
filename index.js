const { default: { stream } } = require("got");
const { createWriteStream } = require("fs");
const { execSync } = require("child_process");
const path = "./Lavalink.jar";
const { exec } = require('child_process');
// Based on https://github.com/Cog-Creators/Lavalink-Jars/, untill that koltin based one is fixed.
const lljar = "https://cdn.darrennathanael.com/jars/cogs/Lavalink.jar";
// temp code untill I made jar options & checking.
// aka selection between downloading the "custom" "dev" "dev-with-plugins"
exec('sudo apt-get install default-jdk', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});
const start = () => {
     const download = stream(lljar).pipe(createWriteStream('Lavalink.jar'));
     download.on("finish", () => {
         execSync("java -jar Lavalink.jar", { stdio: "inherit" });
     });
 };

start();
