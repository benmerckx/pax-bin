var binwrap = require("binwrap");
var path = require("path");

var packageInfo = require(path.join(__dirname, "package.json"));
var version = packageInfo.version;
var root = "https://github.com/nathan/pax/releases/download/pax-v" + version + "/pax-v" + version;

module.exports = binwrap({
  dirname: __dirname,
  binaries: [
    "px"
  ],
  urls: {
    "darwin-x64": root + "-x86_64-apple-darwin.tar.gz",
    "linux-x64": root + "-x86_64-unknown-linux-gnu.tar.gz",
    "win32-x64": root + "-x86_64-pc-windows-gnu.zip",
    "win32-ia32": root + "-i686-pc-windows-gnu.zip"
  }
});