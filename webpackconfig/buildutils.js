const path = require('path');

const filename = '[name].[contenthash:8]';

// removes leading directory (i.e. src/dir1/dir2 -> dir1/dir2)
function assetFileName(buildInfo) {
    const separator = '/';
    const directories = path
        .dirname(buildInfo.filename)
        .split(separator)
        .slice(1);
    const outputPath = directories.join(separator);
    return path.join(outputPath, `${filename}[ext]`);
}

module.exports = { filename, assetFileName };
