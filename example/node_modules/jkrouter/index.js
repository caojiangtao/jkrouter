
var path = require('path'); //路径解析
var _jkrouter = path.join(__dirname, 'jkrouter.js');
var fs = require('fs');
var ls = require('ls-sync');
module.exports = function(app, options) {
	if(typeof options === 'string') {
		options = {
			root: options
		};
	} else if(!options || !options.root) {
		throw new Error('`root` config required.');
	};
	var root = options.root;
	ls(root).forEach(function(filePath) {
		if(path.extname(filePath) !== '.js') {
			return;
		} else {
			var exportFuncs = require(filePath);
			var pathRegexp = formatPath(filePath, root);
			for(var method in exportFuncs) {
				try {
					exportFuncs[method].pathRegexp = pathRegexp;
					if(exportFuncs[method].pathRegexp == "/index"){
						exportFuncs[method].pathRegexp = "/";
					}
					app.use(exportFuncs[method].pathRegexp,exportFuncs);
				} catch(e) {}
			};
		}
	})
};

function formatPath(filePath, root) {
	return filePath
		.replace(path.resolve(process.cwd(), root), '')
		.replace(/\\/g, '/')
		.split('.')[0];
}
