function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// A garden object stores everything about the environment
// contains all the parameter to give a prediction
var Garden = function Garden(w, h, beddings, weather, location) {
    _classCallCheck(this, Garden);

    this.width = w;
    this.height = h;
    this.beddings = beddings;
};

// A bedding object stores all data about a specific bedding


var Bedding = function (_fabric$Rect) {
    _inherits(Bedding, _fabric$Rect);

    function Bedding(plants, soil, argmap) {
        _classCallCheck(this, Bedding);

        var _this = _possibleConstructorReturn(this, (Bedding.__proto__ || Object.getPrototypeOf(Bedding)).call(this, argmap));

        _this.plants = plants;
        _this.soil = soil;
        return _this;
    }

    return Bedding;
}(fabric.Rect);

// represents a plant object, can be parsed from database


var Plant = function Plant(name, spacing, companions, icon) {
    _classCallCheck(this, Plant);

    this.name = name;
    this.spacing = spacing;
    this.companions = companions;
    this.icon = icon;
};