const path = require('path');

const nameRegex = /^(content_(.*))|^background/;

module.exports = {
  entry: {
    background_scripts: './scripts/background/main.js',
    content_website: './scripts/content/website/main.js',
  },
  output: {
    path: path.resolve(__dirname, 'addon'),
    filename: (chunkData) => {
      const found = chunkData.chunk.name.match(nameRegex).filter((x) => x !== undefined);
      if (found.length === 1) {
        return `${found[0]}.js`;
      } if (found.length === 3) {
        return `content/${found[2]}.js`;
      }
      return '[name]/index.js';
    },
  },
};
