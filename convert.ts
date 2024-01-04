import * as fs from 'fs';
import * as xml2js from 'xml2js';
import * as path from 'path';

// ... rest of your code ...

const parser = new xml2js.Parser();
const xmlFolder = 'src/xmlfiles'; // Corrected path to the folder containing XML files

// ... rest of your script ...


fs.readdir(xmlFolder, (err, files) => {
    if (err) {
        console.error("Could not list the directory.", err);
        process.exit(1);
    }

    files.forEach((file, index) => {
        const filePath = path.join(xmlFolder, file);

        fs.readFile(filePath, (err, data) => {
            if (err) throw err;

            parser.parseString(data, (err, result) => {
                if (err) throw err;

                const jsonFileName = `${path.basename(file, '.xml')}.json`;

                fs.writeFile(jsonFileName, JSON.stringify(result, null, 2), (err) => {
                    if (err) throw err;
                    console.log(`JSON file created for ${file}`);
                });
            });
        });
    });
});
