var plusOne = function plusOne(num) {
  return num + 1;
};

function getDefaultExportFromCjs (x) {
	return x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var common = "hello";
var commonjs = /*@__PURE__*/getDefaultExportFromCjs(common);

function main() {
  console.log(commonjs, plusOne(1));
}

export { main as default };
