"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs"); // Corrected import statement
// Load JSON data
var jsonData = JSON.parse(fs.readFileSync('team.json', 'utf8'));
// Access the 'item' array within the nested structure
var items = jsonData.rss.channel[0].item;
items.forEach(function (profile) {
    var name = profile.title[0].replace(/\s+/g, '_').replace(/[^\w\s]/gi, '');
    var fileName = "./src/team/".concat(name, ".ts");
    // Extract personal information
    var personalInfo = profile['content:encoded'][0];
    // Extract post ID and post name
    var postId = profile['wp:post_id'][0];
    var postName = profile['wp:post_name'][0];
    // Extract the nicename
    var nicename = profile['wp:post_name'][0]; // Assuming nicename is the same as post_name
    var profileData = {
        name: profile.title[0],
        info: personalInfo,
        postId: postId,
        postName: postName,
        nicename: nicename
    };
    var fileContent = "export const ".concat(name.replace(/-/g, ''), "Profile = ").concat(JSON.stringify(profileData, null, 2), ";");
    fs.writeFile(fileName, fileContent, function (err) {
        if (err) {
            console.error('Error writing file:', fileName, err);
            return;
        }
        console.log('Created file:', fileName);
    });
});
