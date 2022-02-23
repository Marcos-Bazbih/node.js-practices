const fs = require("fs");
const zlib = require("zlib");

const readStream = fs.createReadStream("./zip.txt");
const writeStream = fs.createWriteStream("./txt.gz");
const gzip = zlib.createGzip();

readStream.pipe(gzip).pipe(writeStream);