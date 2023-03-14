const sevenBin = require('7zip-bin');
const { extractFull } = require('node-7z')


const path = 'c:/Program Files/7-Zip/7zG.exe' // will not work
const seven = extractFull('c:/Program Files/7-Zip/archive.7z', './output/dir/', {
    $bin: path
})


async function extractWith7zBin() {
    const pathTo7zip = sevenBin.path7za;
    const seven = await extractFull('./archive.7z', './output/bin/', {
        $bin: pathTo7zip
    });
    console.log("Extraction Done using 7z-bin");

}

async function extractWith7zExe() {
    const pathTo7zExe = 'c:/Program Files/7-Zip/7zG.exe' // will only work on windows
    const seven = await extractFull('./archive.7z', './output/exe/', {
        $bin: pathTo7zExe
    })
    console.log("Extraction Done Using 7z .exe");
}

extractWith7zBin();
extractWith7zExe();
