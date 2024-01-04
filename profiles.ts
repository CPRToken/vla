import * as fs from 'fs'; // Corrected import statement

// Load JSON data
const jsonData: any = JSON.parse(fs.readFileSync('abogados.json', 'utf8'));

// Access the 'item' array within the nested structure
const items = jsonData.rss.channel[0].item;

items.forEach((profile: any) => {
  const name = profile.title[0].replace(/\s+/g, '_').replace(/[^\w\s]/gi, '');
  const fileName = `./src/team/${name}.ts`;

  // Extract personal information
  const personalInfo = profile['content:encoded'][0];

  // Extract post ID and post name
  const postId = profile['wp:post_id'][0];
  const postName = profile['wp:post_name'][0];

  // Extract the nicename
  const nicename = profile['wp:post_name'][0]; // Assuming nicename is the same as post_name

  const profileData = {
    name: profile.title[0],
    info: personalInfo,
    postId: postId,
    postName: postName,
    nicename: nicename
  };

  const fileContent = `export const ${name.replace(/-/g, '')}Profile = ${JSON.stringify(profileData, null, 2)};`;

  fs.writeFile(fileName, fileContent, (err) => {
    if (err) {
      console.error('Error writing file:', fileName, err);
      return;
    }
    console.log('Created file:', fileName);
  });
});
