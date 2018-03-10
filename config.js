const patch = require('path');

//webpack.config.js

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.resolve(_dirname, 'build'),
		filename: 'app.bundle.js'
	}
};