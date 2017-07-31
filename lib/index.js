'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultClass = {
    container: {
        display: 'flex',
        alignItems: 'center',
        height: 70,
        fontWeight: 300,
        width: '100%',
        textAlign: 'center',
        margin: 'auto'
    },
    chart: {
        margin: '10 auto',
        width: '100%',
        height: 40
    },
    label: {
        width: '100%',
        textAlign: 'center',
        color: 'white',
        whiteSpace: 'nowrap',
        textOverflow: 'clip',
        padding: 'auto 2px'
    }
};

var Colors = ['#3D97D2', '#4EB970', '#EEC518', '#E74D3A', '#FFA858', '#C0FFC0', '#C05800'];

var CapsuleChart = function (_React$Component) {
    _inherits(CapsuleChart, _React$Component);

    function CapsuleChart(props) {
        _classCallCheck(this, CapsuleChart);

        var _this = _possibleConstructorReturn(this, (CapsuleChart.__proto__ || Object.getPrototypeOf(CapsuleChart)).call(this, props));

        if (_this.props.colors !== undefined) {
            Colors = _this.props.colors;
        }
        _this.state = _this.getInitialState();
        _this.handleChange.bind(_this);
        _this.getChartElements.bind(_this);
        return _this;
    }

    _createClass(CapsuleChart, [{
        key: 'getInitialState',
        value: function getInitialState() {
            var chartComp = this.getChartElements(this.props.chartData);
            return { chartComp: chartComp };
        }
    }, {
        key: 'getChartElements',
        value: function getChartElements(data) {
            var chartComp = [];
            var totalChartElement = data.length;
            var totalChartWeight = 0;

            data.forEach(function (d) {
                totalChartWeight += d.weight;
            });

            data.forEach(function (d, index) {
                var style = {
                    backgroundColor: Colors[index % Colors.length],
                    width: String(Math.floor(d.weight * 100 / totalChartWeight)) + '%',
                    height: defaultClass.chart.height,
                    display: 'inline-flex',
                    alignItems: 'center',
                    textAlign: 'center',
                    margin: '0 !important'
                };

                if (index == totalChartElement - 1) {
                    style.borderTopRightRadius = defaultClass.chart.height / 2, style.borderBottomRightRadius = defaultClass.chart.height / 2;
                }
                if (index == 0) {
                    style.borderTopLeftRadius = defaultClass.chart.height / 2, style.borderBottomLeftRadius = defaultClass.chart.height / 2;
                }
                var el = _react2.default.createElement(
                    'span',
                    { key: index, style: style },
                    _react2.default.createElement(
                        'span',
                        { style: defaultClass.label },
                        d.label
                    )
                );
                chartComp.push(el);
            });
            return chartComp;
        }
    }, {
        key: 'handleChange',
        value: function handleChange() {}
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var chartComp = this.getChartElements(nextProps.chartData);
            this.setState({
                chartComp: chartComp
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'capsule-chart-container', style: defaultClass.container },
                _react2.default.createElement(
                    'div',
                    { style: defaultClass.chart },
                    this.state.chartComp
                )
            );
        }
    }]);

    return CapsuleChart;
}(_react2.default.Component);

exports.default = CapsuleChart;


CapsuleChart.propTypes = {
    chartData: _propTypes2.default.array.isRequired,
    colors: _propTypes2.default.array
};