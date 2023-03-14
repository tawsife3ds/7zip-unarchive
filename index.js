const sevenBin = require('7zip-bin');
const { extractFull } = require('node-7z')

const pathTo7zip = sevenBin.path7za
const path = '/usr/share/man/man1/7za.1.gz' // will not work
const seven = extractFull('./archive.7z', './output/dir/', {
  $bin: pathTo7zip
})