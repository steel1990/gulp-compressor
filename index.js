var path = require('path');
var through = require('through2');
var compressor = require('easy-compressor');

var clone = function (obj) {
    var result = {};
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            result[i] = obj[i];
        }
    }
    return result;
};

module.exports = function (options) {
    return through.obj(function (file, encoding, callback) {
        var me = this;
        if (file.isDirectory()) {
            return callback();
        }
        var ext = path.extname(file).slice(1).toLowerCase();
        var opt = clone(options);
        if (ext) {
            opt.type = ext;
        }
        opt.fromString = true;

        compressor(String(file.contents), opt, function (err, result) {
            if (err) {
                throw new Error(err);
            }
            file.contents = new Buffer(result);
            me.push(file);
            callback();
        });
    });
};