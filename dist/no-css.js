(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ScrollArea"] = factory(require("react"));
	else
		root["ScrollArea"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_38__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _ScrollAreaJsx = __webpack_require__(2);
	
	var _ScrollAreaJsx2 = _interopRequireDefault(_ScrollAreaJsx);

	exports['default'] = _ScrollAreaJsx2['default'];
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};
	
	exports.__esModule = true;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = __webpack_require__(3)['default'];
	
	var _inherits = __webpack_require__(19)['default'];
	
	var _createClass = __webpack_require__(28)['default'];
	
	var _classCallCheck = __webpack_require__(31)['default'];
	
	var _extends = __webpack_require__(32)['default'];
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _react = __webpack_require__(38);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Scrollbar = __webpack_require__(39);
	
	var _Scrollbar2 = _interopRequireDefault(_Scrollbar);
	
	var _utils = __webpack_require__(57);
	
	var _lineHeight = __webpack_require__(58);
	
	var _lineHeight2 = _interopRequireDefault(_lineHeight);
	
	var _reactMotion = __webpack_require__(40);
	
	var eventTypes = {
	    wheel: 'wheel',
	    api: 'api',
	    touch: 'touch',
	    touchEnd: 'touchEnd',
	    mousemove: 'mousemove'
	};
	
	var ScrollArea = (function (_React$Component) {
	    _inherits(ScrollArea, _React$Component);
	
	    function ScrollArea(props) {
	        var _this = this;
	
	        _classCallCheck(this, ScrollArea);
	
	        _get(Object.getPrototypeOf(ScrollArea.prototype), 'constructor', this).call(this, props);
	        this.state = {
	            topPosition: 0,
	            leftPosition: 0,
	            realHeight: 0,
	            containerHeight: 0,
	            realWidth: 0,
	            containerWidth: 0
	        };
	
	        this.scrollArea = {
	            refresh: function refresh() {
	                _this.setSizesToState();
	            },
	            scrollTop: function scrollTop() {
	                _this.scrollTop();
	            },
	            scrollBottom: function scrollBottom() {
	                _this.scrollBottom();
	            },
	            scrollYTo: function scrollYTo(position) {
	                _this.scrollYTo(position);
	            },
	            scrollLeft: function scrollLeft() {
	                _this.scrollLeft();
	            },
	            scrollRight: function scrollRight() {
	                _this.scrollRight();
	            },
	            scrollXTo: function scrollXTo(position) {
	                _this.scrollXTo(position);
	            }
	        };
	
	        this.evntsPreviousValues = {
	            clientX: 0,
	            clientY: 0,
	            deltaX: 0,
	            deltaY: 0
	        };
	
	        this.bindedHandleWindowResize = this.handleWindowResize.bind(this);
	    }
	
	    _createClass(ScrollArea, [{
	        key: 'getChildContext',
	        value: function getChildContext() {
	            return {
	                scrollArea: this.scrollArea
	            };
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            if (this.props.contentWindow) {
	                this.props.contentWindow.addEventListener("resize", this.bindedHandleWindowResize);
	            }
	            this.lineHeightPx = (0, _lineHeight2['default'])((0, _utils.findDOMNode)(this.content));
	            this.setSizesToState();
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            if (this.props.contentWindow) {
	                this.props.contentWindow.removeEventListener("resize", this.bindedHandleWindowResize);
	            }
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            this.setSizesToState();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            var _props = this.props;
	            var children = _props.children;
	            var className = _props.className;
	            var contentClassName = _props.contentClassName;
	            var ownerDocument = _props.ownerDocument;
	
	            var withMotion = this.props.smoothScrolling && (this.state.eventType === eventTypes.wheel || this.state.eventType === eventTypes.api || this.state.eventType === eventTypes.touchEnd);
	
	            var scrollbarY = this.canScrollY() ? _react2['default'].createElement(_Scrollbar2['default'], {
	                ownerDocument: ownerDocument,
	                realSize: this.state.realHeight,
	                containerSize: this.state.containerHeight,
	                position: this.state.topPosition,
	                onMove: this.handleScrollbarMove.bind(this),
	                onPositionChange: this.handleScrollbarYPositionChange.bind(this),
	                containerStyle: this.props.verticalContainerStyle,
	                scrollbarStyle: this.props.verticalScrollbarStyle,
	                smoothScrolling: withMotion,
	                minScrollSize: this.props.minScrollSize,
	                type: 'vertical' }) : null;
	
	            var scrollbarX = this.canScrollX() ? _react2['default'].createElement(_Scrollbar2['default'], {
	                ownerDocument: ownerDocument,
	                realSize: this.state.realWidth,
	                containerSize: this.state.containerWidth,
	                position: this.state.leftPosition,
	                onMove: this.handleScrollbarMove.bind(this),
	                onPositionChange: this.handleScrollbarXPositionChange.bind(this),
	                containerStyle: this.props.horizontalContainerStyle,
	                scrollbarStyle: this.props.horizontalScrollbarStyle,
	                smoothScrolling: withMotion,
	                minScrollSize: this.props.minScrollSize,
	                type: 'horizontal' }) : null;
	
	            if (typeof children === 'function') {
	                (0, _utils.warnAboutFunctionChild)();
	                children = children();
	            } else {
	                (0, _utils.warnAboutElementChild)();
	            }
	
	            var classes = 'scrollarea ' + (className || '');
	            var contentClasses = 'scrollarea-content ' + (contentClassName || '');
	
	            var contentStyle = {
	                marginTop: -this.state.topPosition,
	                marginLeft: -this.state.leftPosition
	            };
	            var springifiedContentStyle = withMotion ? (0, _utils.modifyObjValues)(contentStyle, function (x) {
	                return (0, _reactMotion.spring)(x);
	            }) : contentStyle;
	
	            return _react2['default'].createElement(
	                _reactMotion.Motion,
	                { style: _extends({}, this.props.contentStyle, springifiedContentStyle) },
	                function (style) {
	                    return _react2['default'].createElement(
	                        'div',
	                        { ref: function (x) {
	                                return _this2.wrapper = x;
	                            }, style: _this2.props.style, className: classes, onWheel: _this2.handleWheel.bind(_this2) },
	                        _react2['default'].createElement(
	                            'div',
	                            { ref: function (x) {
	                                    return _this2.content = x;
	                                },
	                                style: style,
	                                className: contentClasses,
	                                onTouchStart: _this2.handleTouchStart.bind(_this2),
	                                onTouchMove: _this2.handleTouchMove.bind(_this2),
	                                onTouchEnd: _this2.handleTouchEnd.bind(_this2) },
	                            children
	                        ),
	                        scrollbarY,
	                        scrollbarX
	                    );
	                }
	            );
	        }
	    }, {
	        key: 'setStateFromEvent',
	        value: function setStateFromEvent(newState, eventType) {
	            if (this.props.onScroll) {
	                this.props.onScroll(newState);
	            }
	            this.setState(_extends({}, newState, { eventType: eventType }));
	        }
	    }, {
	        key: 'handleTouchStart',
	        value: function handleTouchStart(e) {
	            var touches = e.touches;
	
	            if (touches.length === 1) {
	                var _touches$0 = touches[0];
	                var clientX = _touches$0.clientX;
	                var clientY = _touches$0.clientY;
	
	                this.eventPreviousValues = _extends({}, this.eventPreviousValues, {
	                    clientY: clientY,
	                    clientX: clientX,
	                    timestamp: Date.now()
	                });
	            }
	        }
	    }, {
	        key: 'handleTouchMove',
	        value: function handleTouchMove(e) {
	            e.preventDefault();
	
	            var touches = e.touches;
	
	            if (touches.length === 1) {
	                var _touches$02 = touches[0];
	                var clientX = _touches$02.clientX;
	                var clientY = _touches$02.clientY;
	
	                var deltaY = this.eventPreviousValues.clientY - clientY;
	                var deltaX = this.eventPreviousValues.clientX - clientX;
	
	                this.eventPreviousValues = _extends({}, this.eventPreviousValues, {
	                    deltaY: deltaY,
	                    deltaX: deltaX,
	                    clientY: clientY,
	                    clientX: clientX,
	                    timestamp: Date.now()
	                });
	
	                this.setStateFromEvent(this.composeNewState(-deltaX, -deltaY));
	            }
	        }
	    }, {
	        key: 'handleTouchEnd',
	        value: function handleTouchEnd(e) {
	            var _eventPreviousValues = this.eventPreviousValues;
	            var lastDeltaX = _eventPreviousValues.deltaX;
	            var lastDeltaY = _eventPreviousValues.deltaY;
	            var lastTimestamp = _eventPreviousValues.timestamp;
	
	            if (Date.now() - lastTimestamp < 200) {
	                this.setStateFromEvent(this.composeNewState(-lastDeltaX * 10, -lastDeltaY * 10), eventTypes.touchEnd);
	            }
	
	            this.eventPreviousValues = _extends({}, this.eventPreviousValues, {
	                deltaY: 0,
	                deltaX: 0
	            });
	        }
	    }, {
	        key: 'handleScrollbarMove',
	        value: function handleScrollbarMove(deltaY, deltaX) {
	            this.setStateFromEvent(this.composeNewState(deltaX, deltaY));
	        }
	    }, {
	        key: 'handleScrollbarXPositionChange',
	        value: function handleScrollbarXPositionChange(position) {
	            this.scrollXTo(position);
	        }
	    }, {
	        key: 'handleScrollbarYPositionChange',
	        value: function handleScrollbarYPositionChange(position) {
	            this.scrollYTo(position);
	        }
	    }, {
	        key: 'handleWheel',
	        value: function handleWheel(e) {
	            var deltaY = e.deltaY;
	            var deltaX = e.deltaX;
	
	            if (this.props.swapWheelAxes) {
	                var _ref = [deltaX, deltaY];
	                deltaY = _ref[0];
	                deltaX = _ref[1];
	            }
	
	            /*
	             * WheelEvent.deltaMode can differ between browsers and must be normalized
	             * e.deltaMode === 0: The delta values are specified in pixels
	             * e.deltaMode === 1: The delta values are specified in lines
	             * https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent/deltaMode
	             */
	            if (e.deltaMode === 1) {
	                deltaY = deltaY * this.lineHeightPx;
	                deltaX = deltaX * this.lineHeightPx;
	            }
	
	            deltaY = deltaY * this.props.speed;
	            deltaX = deltaX * this.props.speed;
	
	            var newState = this.composeNewState(-deltaX, -deltaY);
	
	            if (newState.topPosition && this.state.topPosition !== newState.topPosition || newState.leftPosition && this.state.leftPosition !== newState.leftPosition) {
	                e.preventDefault();
	            }
	
	            this.setStateFromEvent(newState, eventTypes.wheel);
	        }
	    }, {
	        key: 'handleWindowResize',
	        value: function handleWindowResize() {
	            var newState = this.computeSizes();
	            newState = this.getModifiedPositionsIfNeeded(newState);
	            this.setStateFromEvent(newState);
	        }
	    }, {
	        key: 'composeNewState',
	        value: function composeNewState(deltaX, deltaY) {
	            var newState = this.computeSizes();
	
	            if (this.canScrollY(newState)) {
	                newState.topPosition = this.computeTopPosition(deltaY, newState);
	            }
	            if (this.canScrollX(newState)) {
	                newState.leftPosition = this.computeLeftPosition(deltaX, newState);
	            }
	
	            return newState;
	        }
	    }, {
	        key: 'computeTopPosition',
	        value: function computeTopPosition(deltaY, sizes) {
	            var newTopPosition = this.state.topPosition - deltaY;
	            return this.normalizeTopPosition(newTopPosition, sizes);
	        }
	    }, {
	        key: 'computeLeftPosition',
	        value: function computeLeftPosition(deltaX, sizes) {
	            var newLeftPosition = this.state.leftPosition - deltaX;
	            return this.normalizeLeftPosition(newLeftPosition, sizes);
	        }
	    }, {
	        key: 'normalizeTopPosition',
	        value: function normalizeTopPosition(newTopPosition, sizes) {
	            if (newTopPosition > sizes.realHeight - sizes.containerHeight) {
	                newTopPosition = sizes.realHeight - sizes.containerHeight;
	            }
	            if (newTopPosition < 0) {
	                newTopPosition = 0;
	            }
	            return newTopPosition;
	        }
	    }, {
	        key: 'normalizeLeftPosition',
	        value: function normalizeLeftPosition(newLeftPosition, sizes) {
	            if (newLeftPosition > sizes.realWidth - sizes.containerWidth) {
	                newLeftPosition = sizes.realWidth - sizes.containerWidth;
	            } else if (newLeftPosition < 0) {
	                newLeftPosition = 0;
	            }
	
	            return newLeftPosition;
	        }
	    }, {
	        key: 'computeSizes',
	        value: function computeSizes() {
	            var realHeight = this.content.offsetHeight;
	            var containerHeight = this.wrapper.offsetHeight;
	            var realWidth = this.content.offsetWidth;
	            var containerWidth = this.wrapper.offsetWidth;
	
	            return {
	                realHeight: realHeight,
	                containerHeight: containerHeight,
	                realWidth: realWidth,
	                containerWidth: containerWidth
	            };
	        }
	    }, {
	        key: 'setSizesToState',
	        value: function setSizesToState() {
	            var sizes = this.computeSizes();
	            if (sizes.realHeight !== this.state.realHeight || sizes.realWidth !== this.state.realWidth) {
	                this.setStateFromEvent(this.getModifiedPositionsIfNeeded(sizes));
	            }
	        }
	    }, {
	        key: 'scrollTop',
	        value: function scrollTop() {
	            this.scrollYTo(0);
	        }
	    }, {
	        key: 'scrollBottom',
	        value: function scrollBottom() {
	            this.scrollYTo(this.state.realHeight - this.state.containerHeight);
	        }
	    }, {
	        key: 'scrollLeft',
	        value: function scrollLeft() {
	            this.scrollXTo(0);
	        }
	    }, {
	        key: 'scrollRight',
	        value: function scrollRight() {
	            this.scrollXTo(this.state.realWidth - this.state.containerWidth);
	        }
	    }, {
	        key: 'scrollYTo',
	        value: function scrollYTo(topPosition) {
	            if (this.canScrollY()) {
	                var position = this.normalizeTopPosition(topPosition, this.computeSizes());
	                this.setStateFromEvent({ topPosition: position }, eventTypes.api);
	            }
	        }
	    }, {
	        key: 'scrollXTo',
	        value: function scrollXTo(leftPosition) {
	            if (this.canScrollX()) {
	                var position = this.normalizeLeftPosition(leftPosition, this.computeSizes());
	                this.setStateFromEvent({ leftPosition: position }, eventTypes.api);
	            }
	        }
	    }, {
	        key: 'canScrollY',
	        value: function canScrollY() {
	            var state = arguments.length <= 0 || arguments[0] === undefined ? this.state : arguments[0];
	
	            var scrollableY = state.realHeight > state.containerHeight;
	            return scrollableY && this.props.vertical;
	        }
	    }, {
	        key: 'canScrollX',
	        value: function canScrollX() {
	            var state = arguments.length <= 0 || arguments[0] === undefined ? this.state : arguments[0];
	
	            var scrollableX = state.realWidth > state.containerWidth;
	            return scrollableX && this.props.horizontal;
	        }
	    }, {
	        key: 'getModifiedPositionsIfNeeded',
	        value: function getModifiedPositionsIfNeeded(newState) {
	            var bottomPosition = newState.realHeight - newState.containerHeight;
	            if (this.state.topPosition >= bottomPosition) {
	                newState.topPosition = this.canScrollY(newState) ? (0, _utils.positiveOrZero)(bottomPosition) : 0;
	            }
	
	            var rightPosition = newState.realWidth - newState.containerWidth;
	            if (this.state.leftPosition >= rightPosition) {
	                newState.leftPosition = this.canScrollX(newState) ? (0, _utils.positiveOrZero)(rightPosition) : 0;
	            }
	
	            return newState;
	        }
	    }]);
	
	    return ScrollArea;
	})(_react2['default'].Component);
	
	exports['default'] = ScrollArea;
	
	ScrollArea.childContextTypes = {
	    scrollArea: _react2['default'].PropTypes.object
	};
	
	ScrollArea.propTypes = {
	    className: _react2['default'].PropTypes.string,
	    style: _react2['default'].PropTypes.object,
	    speed: _react2['default'].PropTypes.number,
	    contentClassName: _react2['default'].PropTypes.string,
	    contentStyle: _react2['default'].PropTypes.object,
	    vertical: _react2['default'].PropTypes.bool,
	    verticalContainerStyle: _react2['default'].PropTypes.object,
	    verticalScrollbarStyle: _react2['default'].PropTypes.object,
	    horizontal: _react2['default'].PropTypes.bool,
	    horizontalContainerStyle: _react2['default'].PropTypes.object,
	    horizontalScrollbarStyle: _react2['default'].PropTypes.object,
	    onScroll: _react2['default'].PropTypes.func,
	    contentWindow: _react2['default'].PropTypes.any,
	    ownerDocument: _react2['default'].PropTypes.any,
	    smoothScrolling: _react2['default'].PropTypes.bool,
	    minScrollSize: _react2['default'].PropTypes.number,
	    swapWheelAxes: _react2['default'].PropTypes.bool
	};
	
	ScrollArea.defaultProps = {
	    speed: 1,
	    vertical: true,
	    horizontal: true,
	    smoothScrolling: false,
	    swapWheelAxes: false,
	    contentWindow: typeof window === "object" ? window : undefined,
	    ownerDocument: typeof document === "object" ? document : undefined
	};
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$getOwnPropertyDescriptor = __webpack_require__(4)["default"];
	
	exports["default"] = function get(_x, _x2, _x3) {
	  var _again = true;
	
	  _function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;
	    _again = false;
	    if (object === null) object = Function.prototype;
	
	    var desc = _Object$getOwnPropertyDescriptor(object, property);
	
	    if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);
	
	      if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;
	        _x2 = property;
	        _x3 = receiver;
	        _again = true;
	        desc = parent = undefined;
	        continue _function;
	      }
	    } else if ("value" in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;
	
	      if (getter === undefined) {
	        return undefined;
	      }
	
	      return getter.call(receiver);
	    }
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(5), __esModule: true };

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(6);
	__webpack_require__(7);
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $.getDesc(it, key);
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(8);
	
	__webpack_require__(12)('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(9)
	  , defined = __webpack_require__(11);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(10);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(13)
	  , core    = __webpack_require__(15)
	  , fails   = __webpack_require__(18);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(14)
	  , core      = __webpack_require__(15)
	  , ctx       = __webpack_require__(16)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 14 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 15 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(17);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$create = __webpack_require__(20)["default"];
	
	var _Object$setPrototypeOf = __webpack_require__(22)["default"];
	
	exports["default"] = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }
	
	  subClass.prototype = _Object$create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};
	
	exports.__esModule = true;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(21), __esModule: true };

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(6);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(23), __esModule: true };

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(24);
	module.exports = __webpack_require__(15).Object.setPrototypeOf;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(13);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(25).set});

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(6).getDesc
	  , isObject = __webpack_require__(26)
	  , anObject = __webpack_require__(27);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(16)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(26);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$defineProperty = __webpack_require__(29)["default"];
	
	exports["default"] = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	
	      _Object$defineProperty(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();
	
	exports.__esModule = true;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(30), __esModule: true };

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(6);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$assign = __webpack_require__(33)["default"];
	
	exports["default"] = _Object$assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	
	  return target;
	};
	
	exports.__esModule = true;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(34), __esModule: true };

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(35);
	module.exports = __webpack_require__(15).Object.assign;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(13);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(36)});

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(6)
	  , toObject = __webpack_require__(37)
	  , IObject  = __webpack_require__(9);
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(18)(function(){
	  var a = Object.assign
	    , A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , $$    = arguments
	    , $$len = $$.length
	    , index = 1
	    , getKeys    = $.getKeys
	    , getSymbols = $.getSymbols
	    , isEnum     = $.isEnum;
	  while($$len > index){
	    var S      = IObject($$[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  }
	  return T;
	} : Object.assign;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(11);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_38__;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = __webpack_require__(3)['default'];
	
	var _inherits = __webpack_require__(19)['default'];
	
	var _createClass = __webpack_require__(28)['default'];
	
	var _classCallCheck = __webpack_require__(31)['default'];
	
	var _extends = __webpack_require__(32)['default'];
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _react = __webpack_require__(38);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactMotion = __webpack_require__(40);
	
	var _utils = __webpack_require__(57);
	
	var ScrollBar = (function (_React$Component) {
	    _inherits(ScrollBar, _React$Component);
	
	    function ScrollBar(props) {
	        _classCallCheck(this, ScrollBar);
	
	        _get(Object.getPrototypeOf(ScrollBar.prototype), 'constructor', this).call(this, props);
	        var newState = this.calculateState(props);
	        this.state = {
	            position: newState.position,
	            scrollSize: newState.scrollSize,
	            isDragging: false,
	            lastClientPosition: 0
	        };
	
	        if (props.type === 'vertical') {
	            this.bindedHandleMouseMove = this.handleMouseMoveForVertical.bind(this);
	        } else {
	            this.bindedHandleMouseMove = this.handleMouseMoveForHorizontal.bind(this);
	        }
	
	        this.bindedHandleMouseUp = this.handleMouseUp.bind(this);
	    }
	
	    _createClass(ScrollBar, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            if (this.props.ownerDocument) {
	                this.props.ownerDocument.addEventListener("mousemove", this.bindedHandleMouseMove);
	                this.props.ownerDocument.addEventListener("mouseup", this.bindedHandleMouseUp);
	            }
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            this.setState(this.calculateState(nextProps));
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            if (this.props.ownerDocument) {
	                this.props.ownerDocument.removeEventListener("mousemove", this.bindedHandleMouseMove);
	                this.props.ownerDocument.removeEventListener("mouseup", this.bindedHandleMouseUp);
	            }
	        }
	    }, {
	        key: 'calculateFractionalPosition',
	        value: function calculateFractionalPosition(realContentSize, containerSize, contentPosition) {
	            var relativeSize = realContentSize - containerSize;
	
	            return 1 - (relativeSize - contentPosition) / relativeSize;
	        }
	    }, {
	        key: 'calculateState',
	        value: function calculateState(props) {
	            var fractionalPosition = this.calculateFractionalPosition(props.realSize, props.containerSize, props.position);
	            var proportionalToPageScrollSize = props.containerSize * props.containerSize / props.realSize;
	            var scrollSize = proportionalToPageScrollSize < props.minScrollSize ? props.minScrollSize : proportionalToPageScrollSize;
	
	            var scrollPosition = (props.containerSize - scrollSize) * fractionalPosition;
	            return {
	                scrollSize: scrollSize,
	                position: Math.round(scrollPosition)
	            };
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this = this;
	
	            var _props = this.props;
	            var smoothScrolling = _props.smoothScrolling;
	            var isDragging = _props.isDragging;
	            var type = _props.type;
	            var scrollbarStyle = _props.scrollbarStyle;
	            var containerStyle = _props.containerStyle;
	
	            var isVoriziontal = type === 'horizontal';
	            var isVertical = type === 'vertical';
	            var scrollStyles = this.createScrollStyles();
	            var springifiedScrollStyles = smoothScrolling ? (0, _utils.modifyObjValues)(scrollStyles, function (x) {
	                return (0, _reactMotion.spring)(x);
	            }) : scrollStyles;
	
	            var scrollbarClasses = 'scrollbar-container ' + (isDragging ? 'active' : '') + ' ' + (isVoriziontal ? 'horizontal' : '') + ' ' + (isVertical ? 'vertical' : '');
	
	            return _react2['default'].createElement(
	                _reactMotion.Motion,
	                { style: _extends({}, scrollbarStyle, springifiedScrollStyles) },
	                function (style) {
	                    return _react2['default'].createElement(
	                        'div',
	                        { className: scrollbarClasses,
	                            style: containerStyle,
	                            onMouseDown: _this.handleScrollBarContainerClick.bind(_this),
	                            ref: function (x) {
	                                _this.scrollbarContainer = x;
	                            } },
	                        _react2['default'].createElement('div', { className: 'scrollbar',
	                            style: style,
	                            onMouseDown: _this.handleMouseDown.bind(_this)
	                        })
	                    );
	                }
	            );
	        }
	    }, {
	        key: 'handleScrollBarContainerClick',
	        value: function handleScrollBarContainerClick(e) {
	            e.preventDefault();
	            var multiplier = this.computeMultiplier();
	            var clientPosition = this.isVertical() ? e.clientY : e.clientX;
	
	            var _scrollbarContainer$getBoundingClientRect = this.scrollbarContainer.getBoundingClientRect();
	
	            var top = _scrollbarContainer$getBoundingClientRect.top;
	            var left = _scrollbarContainer$getBoundingClientRect.left;
	
	            var clientScrollPosition = this.isVertical() ? top : left;
	
	            var position = clientPosition - clientScrollPosition;
	            var proportionalToPageScrollSize = this.props.containerSize * this.props.containerSize / this.props.realSize;
	
	            this.setState({ isDragging: true, lastClientPosition: clientPosition });
	            this.props.onPositionChange((position - proportionalToPageScrollSize / 2) / multiplier);
	        }
	    }, {
	        key: 'handleMouseMoveForHorizontal',
	        value: function handleMouseMoveForHorizontal(e) {
	            var multiplier = this.computeMultiplier();
	
	            if (this.state.isDragging) {
	                e.preventDefault();
	                var deltaX = this.state.lastClientPosition - e.clientX;
	                this.setState({ lastClientPosition: e.clientX });
	                this.props.onMove(0, deltaX / multiplier);
	            }
	        }
	    }, {
	        key: 'handleMouseMoveForVertical',
	        value: function handleMouseMoveForVertical(e) {
	            var multiplier = this.computeMultiplier();
	
	            if (this.state.isDragging) {
	                e.preventDefault();
	                var deltaY = this.state.lastClientPosition - e.clientY;
	                this.setState({ lastClientPosition: e.clientY });
	                this.props.onMove(deltaY / multiplier, 0);
	            }
	        }
	    }, {
	        key: 'handleMouseDown',
	        value: function handleMouseDown(e) {
	            e.preventDefault();
	            e.stopPropagation();
	            var lastClientPosition = this.isVertical() ? e.clientY : e.clientX;
	            this.setState({ isDragging: true, lastClientPosition: lastClientPosition });
	        }
	    }, {
	        key: 'handleMouseUp',
	        value: function handleMouseUp(e) {
	            e.preventDefault();
	            this.setState({ isDragging: false });
	        }
	    }, {
	        key: 'createScrollStyles',
	        value: function createScrollStyles() {
	            if (this.props.type === 'vertical') {
	                return {
	                    height: this.state.scrollSize,
	                    marginTop: this.state.position
	                };
	            } else {
	                return {
	                    width: this.state.scrollSize,
	                    marginLeft: this.state.position
	                };
	            }
	        }
	    }, {
	        key: 'computeMultiplier',
	        value: function computeMultiplier() {
	            return this.props.containerSize / this.props.realSize;
	        }
	    }, {
	        key: 'isVertical',
	        value: function isVertical() {
	            return this.props.type === 'vertical';
	        }
	    }]);
	
	    return ScrollBar;
	})(_react2['default'].Component);
	
	ScrollBar.propTypes = {
	    onMove: _react2['default'].PropTypes.func,
	    onPositionChange: _react2['default'].PropTypes.func,
	    realSize: _react2['default'].PropTypes.number,
	    containerSize: _react2['default'].PropTypes.number,
	    position: _react2['default'].PropTypes.number,
	    containerStyle: _react2['default'].PropTypes.object,
	    scrollbarStyle: _react2['default'].PropTypes.object,
	    type: _react2['default'].PropTypes.oneOf(['vertical', 'horizontal']),
	    ownerDocument: _react2['default'].PropTypes.any,
	    smoothScrolling: _react2['default'].PropTypes.bool,
	    minScrollSize: _react2['default'].PropTypes.number
	};
	
	ScrollBar.defaultProps = {
	    type: 'vertical',
	    smoothScrolling: false
	};
	exports['default'] = ScrollBar;
	module.exports = exports['default'];

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(38);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _components2 = __webpack_require__(41);
	
	var _components3 = _interopRequireDefault(_components2);
	
	var _reorderKeys = __webpack_require__(56);
	
	var _reorderKeys2 = _interopRequireDefault(_reorderKeys);
	
	var _components = _components3['default'](_react2['default']);
	
	var Spring = _components.Spring;
	var TransitionSpring = _components.TransitionSpring;
	var Motion = _components.Motion;
	var StaggeredMotion = _components.StaggeredMotion;
	var TransitionMotion = _components.TransitionMotion;
	exports.Spring = Spring;
	exports.TransitionSpring = TransitionSpring;
	exports.Motion = Motion;
	exports.StaggeredMotion = StaggeredMotion;
	exports.TransitionMotion = TransitionMotion;
	
	var _spring2 = __webpack_require__(52);
	
	var _spring3 = _interopRequireDefault(_spring2);
	
	exports.spring = _spring3['default'];
	
	var _presets2 = __webpack_require__(53);
	
	var _presets3 = _interopRequireDefault(_presets2);
	
	exports.presets = _presets3['default'];
	var utils = {
	  reorderKeys: _reorderKeys2['default']
	};
	exports.utils = utils;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = components;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _noVelocity = __webpack_require__(42);
	
	var _noVelocity2 = _interopRequireDefault(_noVelocity);
	
	var _hasReachedStyle = __webpack_require__(43);
	
	var _hasReachedStyle2 = _interopRequireDefault(_hasReachedStyle);
	
	var _mergeDiff = __webpack_require__(44);
	
	var _mergeDiff2 = _interopRequireDefault(_mergeDiff);
	
	var _animationLoop = __webpack_require__(45);
	
	var _animationLoop2 = _interopRequireDefault(_animationLoop);
	
	var _zero = __webpack_require__(49);
	
	var _zero2 = _interopRequireDefault(_zero);
	
	var _updateTree = __webpack_require__(50);
	
	var _deprecatedSprings2 = __webpack_require__(54);
	
	var _deprecatedSprings3 = _interopRequireDefault(_deprecatedSprings2);
	
	var _stripStyle = __webpack_require__(55);
	
	var _stripStyle2 = _interopRequireDefault(_stripStyle);
	
	var startAnimation = _animationLoop2['default']();
	
	function mapObject(f, obj) {
	  var ret = {};
	  for (var key in obj) {
	    if (!obj.hasOwnProperty(key)) {
	      continue;
	    }
	    ret[key] = f(obj[key], key);
	  }
	  return ret;
	}
	
	function everyObj(f, obj) {
	  for (var key in obj) {
	    if (!obj.hasOwnProperty(key)) {
	      continue;
	    }
	    if (!f(obj[key], key)) {
	      return false;
	    }
	  }
	  return true;
	}
	
	function components(React) {
	  var PropTypes = React.PropTypes;
	
	  var Motion = React.createClass({
	    displayName: 'Motion',
	
	    propTypes: {
	      // TOOD: warn against putting a config in here
	      defaultValue: function defaultValue(prop, propName) {
	        if (prop[propName]) {
	          return new Error('Spring\'s `defaultValue` has been changed to `defaultStyle`. ' + 'Its format received a few (easy to update!) changes as well.');
	        }
	      },
	      endValue: function endValue(prop, propName) {
	        if (prop[propName]) {
	          return new Error('Spring\'s `endValue` has been changed to `style`. Its format ' + 'received a few (easy to update!) changes as well.');
	        }
	      },
	      defaultStyle: PropTypes.object,
	      style: PropTypes.object.isRequired,
	      children: PropTypes.func.isRequired
	    },
	
	    getInitialState: function getInitialState() {
	      var _props = this.props;
	      var defaultStyle = _props.defaultStyle;
	      var style = _props.style;
	
	      var currentStyle = defaultStyle || style;
	      return {
	        currentStyle: currentStyle,
	        currentVelocity: mapObject(_zero2['default'], currentStyle)
	      };
	    },
	
	    componentDidMount: function componentDidMount() {
	      this.startAnimating();
	    },
	
	    componentWillReceiveProps: function componentWillReceiveProps() {
	      this.startAnimating();
	    },
	
	    animationStep: function animationStep(timestep, state) {
	      var currentStyle = state.currentStyle;
	      var currentVelocity = state.currentVelocity;
	      var style = this.props.style;
	
	      var newCurrentStyle = _updateTree.updateCurrentStyle(timestep, currentStyle, currentVelocity, style);
	      var newCurrentVelocity = _updateTree.updateCurrentVelocity(timestep, currentStyle, currentVelocity, style);
	
	      // TOOD: this isn't necessary anymore. It was used only against endValue func
	      if (_noVelocity2['default'](currentVelocity, newCurrentStyle) && _noVelocity2['default'](newCurrentVelocity, newCurrentStyle)) {
	        // check explanation in `Motion.animationRender`
	        this.stopAnimation(); // Nasty side effects....
	      }
	
	      return {
	        currentStyle: newCurrentStyle,
	        currentVelocity: newCurrentVelocity
	      };
	    },
	
	    stopAnimation: null,
	
	    // used in animationRender
	    hasUnmounted: false,
	
	    componentWillUnmount: function componentWillUnmount() {
	      this.stopAnimation();
	      this.hasUnmounted = true;
	    },
	
	    startAnimating: function startAnimating() {
	      // Is smart enough to not start it twice
	      this.stopAnimation = startAnimation(this.state, this.animationStep, this.animationRender);
	    },
	
	    animationRender: function animationRender(alpha, nextState, prevState) {
	      // `this.hasUnmounted` might be true in the following condition:
	      // user does some checks in `style` and calls an owner handler
	      // owner sets state in the callback, triggering a re-render
	      // unmounts Motion
	      if (!this.hasUnmounted) {
	        this.setState({
	          currentStyle: _updateTree.interpolateValue(alpha, nextState.currentStyle, prevState.currentStyle),
	          currentVelocity: nextState.currentVelocity
	        });
	      }
	    },
	
	    render: function render() {
	      var strippedStyle = _stripStyle2['default'](this.state.currentStyle);
	      var renderedChildren = this.props.children(strippedStyle);
	      return renderedChildren && React.Children.only(renderedChildren);
	    }
	  });
	
	  var StaggeredMotion = React.createClass({
	    displayName: 'StaggeredMotion',
	
	    propTypes: {
	      defaultStyle: function defaultStyle(prop, propName) {
	        if (prop[propName]) {
	          return new Error('You forgot the "s" for `StaggeredMotion`\'s `defaultStyles`.');
	        }
	      },
	      style: function style(prop, propName) {
	        if (prop[propName]) {
	          return new Error('You forgot the "s" for `StaggeredMotion`\'s `styles`.');
	        }
	      },
	      // TOOD: warn against putting configs in here
	      defaultStyles: PropTypes.arrayOf(PropTypes.object),
	      styles: PropTypes.func.isRequired,
	      children: PropTypes.func.isRequired
	    },
	
	    getInitialState: function getInitialState() {
	      var _props2 = this.props;
	      var styles = _props2.styles;
	      var defaultStyles = _props2.defaultStyles;
	
	      var currentStyles = defaultStyles ? defaultStyles : styles();
	      return {
	        currentStyles: currentStyles,
	        currentVelocities: currentStyles.map(function (s) {
	          return mapObject(_zero2['default'], s);
	        })
	      };
	    },
	
	    componentDidMount: function componentDidMount() {
	      this.startAnimating();
	    },
	
	    componentWillReceiveProps: function componentWillReceiveProps() {
	      this.startAnimating();
	    },
	
	    animationStep: function animationStep(timestep, state) {
	      var currentStyles = state.currentStyles;
	      var currentVelocities = state.currentVelocities;
	
	      var styles = this.props.styles(currentStyles.map(_stripStyle2['default']));
	
	      var newCurrentStyles = currentStyles.map(function (currentStyle, i) {
	        return _updateTree.updateCurrentStyle(timestep, currentStyle, currentVelocities[i], styles[i]);
	      });
	      var newCurrentVelocities = currentStyles.map(function (currentStyle, i) {
	        return _updateTree.updateCurrentVelocity(timestep, currentStyle, currentVelocities[i], styles[i]);
	      });
	
	      // TODO: is this right?
	      if (currentVelocities.every(function (v, k) {
	        return _noVelocity2['default'](v, currentStyles[k]);
	      }) && newCurrentVelocities.every(function (v, k) {
	        return _noVelocity2['default'](v, newCurrentStyles[k]);
	      })) {
	        this.stopAnimation();
	      }
	
	      return {
	        currentStyles: newCurrentStyles,
	        currentVelocities: newCurrentVelocities
	      };
	    },
	
	    stopAnimation: null,
	
	    // used in animationRender
	    hasUnmounted: false,
	
	    componentWillUnmount: function componentWillUnmount() {
	      this.stopAnimation();
	      this.hasUnmounted = true;
	    },
	
	    startAnimating: function startAnimating() {
	      this.stopAnimation = startAnimation(this.state, this.animationStep, this.animationRender);
	    },
	
	    animationRender: function animationRender(alpha, nextState, prevState) {
	      // See comment in Motion.
	      if (!this.hasUnmounted) {
	        var currentStyles = nextState.currentStyles.map(function (style, i) {
	          return _updateTree.interpolateValue(alpha, style, prevState.currentStyles[i]);
	        });
	        this.setState({
	          currentStyles: currentStyles,
	          currentVelocities: nextState.currentVelocities
	        });
	      }
	    },
	
	    render: function render() {
	      var strippedStyle = this.state.currentStyles.map(_stripStyle2['default']);
	      var renderedChildren = this.props.children(strippedStyle);
	      return renderedChildren && React.Children.only(renderedChildren);
	    }
	  });
	
	  var TransitionMotion = React.createClass({
	    displayName: 'TransitionMotion',
	
	    propTypes: {
	      defaultValue: function defaultValue(prop, propName) {
	        if (prop[propName]) {
	          return new Error('TransitionSpring\'s `defaultValue` has been changed to ' + '`defaultStyles`. Its format received a few (easy to update!) ' + 'changes as well.');
	        }
	      },
	      endValue: function endValue(prop, propName) {
	        if (prop[propName]) {
	          return new Error('TransitionSpring\'s `endValue` has been changed to `styles`. ' + 'Its format received a few (easy to update!) changes as well.');
	        }
	      },
	      defaultStyle: function defaultStyle(prop, propName) {
	        if (prop[propName]) {
	          return new Error('You forgot the "s" for `TransitionMotion`\'s `defaultStyles`.');
	        }
	      },
	      style: function style(prop, propName) {
	        if (prop[propName]) {
	          return new Error('You forgot the "s" for `TransitionMotion`\'s `styles`.');
	        }
	      },
	      // TOOD: warn against putting configs in here
	      defaultStyles: PropTypes.objectOf(PropTypes.any),
	      styles: PropTypes.oneOfType([PropTypes.func, PropTypes.objectOf(PropTypes.any.isRequired)]).isRequired,
	      willLeave: PropTypes.oneOfType([PropTypes.func]),
	      // TOOD: warn against putting configs in here
	      willEnter: PropTypes.oneOfType([PropTypes.func]),
	      children: PropTypes.func.isRequired
	    },
	
	    getDefaultProps: function getDefaultProps() {
	      return {
	        willEnter: function willEnter(key, value) {
	          return value;
	        },
	        willLeave: function willLeave() {
	          return null;
	        }
	      };
	    },
	
	    getInitialState: function getInitialState() {
	      var _props3 = this.props;
	      var styles = _props3.styles;
	      var defaultStyles = _props3.defaultStyles;
	
	      var currentStyles = undefined;
	      if (defaultStyles == null) {
	        if (typeof styles === 'function') {
	          currentStyles = styles();
	        } else {
	          currentStyles = styles;
	        }
	      } else {
	        currentStyles = defaultStyles;
	      }
	      return {
	        currentStyles: currentStyles,
	        currentVelocities: mapObject(function (s) {
	          return mapObject(_zero2['default'], s);
	        }, currentStyles)
	      };
	    },
	
	    componentDidMount: function componentDidMount() {
	      this.startAnimating();
	    },
	
	    componentWillReceiveProps: function componentWillReceiveProps() {
	      this.startAnimating();
	    },
	
	    animationStep: function animationStep(timestep, state) {
	      var currentStyles = state.currentStyles;
	      var currentVelocities = state.currentVelocities;
	      var _props4 = this.props;
	      var styles = _props4.styles;
	      var willEnter = _props4.willEnter;
	      var willLeave = _props4.willLeave;
	
	      if (typeof styles === 'function') {
	        styles = styles(currentStyles);
	      }
	
	      // TODO: huh?
	      var mergedStyles = styles; // set mergedStyles to styles as the default
	      var hasNewKey = false;
	
	      mergedStyles = _mergeDiff2['default'](currentStyles, styles,
	      // TODO: stop allocating like crazy in this whole code path
	      function (key) {
	        var res = willLeave(key, currentStyles[key], styles, currentStyles, currentVelocities);
	        if (res == null) {
	          // For legacy reason. We won't allow returning null soon
	          // TODO: remove, after next release
	          return null;
	        }
	
	        if (_noVelocity2['default'](currentVelocities[key], currentStyles[key]) && _hasReachedStyle2['default'](currentStyles[key], res)) {
	          return null;
	        }
	        return res;
	      });
	
	      Object.keys(mergedStyles).filter(function (key) {
	        return !currentStyles.hasOwnProperty(key);
	      }).forEach(function (key) {
	        var _extends2, _extends3;
	
	        hasNewKey = true;
	        var enterStyle = willEnter(key, mergedStyles[key], styles, currentStyles, currentVelocities);
	
	        // We can mutate this here because mergeDiff returns a new Obj
	        mergedStyles[key] = enterStyle;
	
	        currentStyles = _extends({}, currentStyles, (_extends2 = {}, _extends2[key] = enterStyle, _extends2));
	        currentVelocities = _extends({}, currentVelocities, (_extends3 = {}, _extends3[key] = mapObject(_zero2['default'], enterStyle), _extends3));
	      });
	
	      var newCurrentStyles = mapObject(function (mergedStyle, key) {
	        return _updateTree.updateCurrentStyle(timestep, currentStyles[key], currentVelocities[key], mergedStyle);
	      }, mergedStyles);
	      var newCurrentVelocities = mapObject(function (mergedStyle, key) {
	        return _updateTree.updateCurrentVelocity(timestep, currentStyles[key], currentVelocities[key], mergedStyle);
	      }, mergedStyles);
	
	      if (!hasNewKey && everyObj(function (v, k) {
	        return _noVelocity2['default'](v, currentStyles[k]);
	      }, currentVelocities) && everyObj(function (v, k) {
	        return _noVelocity2['default'](v, newCurrentStyles[k]);
	      }, newCurrentVelocities)) {
	        // check explanation in `Motion.animationRender`
	        this.stopAnimation(); // Nasty side effects....
	      }
	
	      return {
	        currentStyles: newCurrentStyles,
	        currentVelocities: newCurrentVelocities
	      };
	    },
	
	    stopAnimation: null,
	
	    // used in animationRender
	    hasUnmounted: false,
	
	    componentWillUnmount: function componentWillUnmount() {
	      this.stopAnimation();
	      this.hasUnmounted = true;
	    },
	
	    startAnimating: function startAnimating() {
	      this.stopAnimation = startAnimation(this.state, this.animationStep, this.animationRender);
	    },
	
	    animationRender: function animationRender(alpha, nextState, prevState) {
	      // See comment in Motion.
	      if (!this.hasUnmounted) {
	        var currentStyles = mapObject(function (style, key) {
	          return _updateTree.interpolateValue(alpha, style, prevState.currentStyles[key]);
	        }, nextState.currentStyles);
	        this.setState({
	          currentStyles: currentStyles,
	          currentVelocities: nextState.currentVelocities
	        });
	      }
	    },
	
	    render: function render() {
	      var strippedStyle = mapObject(_stripStyle2['default'], this.state.currentStyles);
	      var renderedChildren = this.props.children(strippedStyle);
	      return renderedChildren && React.Children.only(renderedChildren);
	    }
	  });
	
	  var _deprecatedSprings = _deprecatedSprings3['default'](React);
	
	  var Spring = _deprecatedSprings.Spring;
	  var TransitionSpring = _deprecatedSprings.TransitionSpring;
	
	  return { Spring: Spring, TransitionSpring: TransitionSpring, Motion: Motion, StaggeredMotion: StaggeredMotion, TransitionMotion: TransitionMotion };
	}
	
	module.exports = exports['default'];

/***/ },
/* 42 */
/***/ function(module, exports) {

	
	// currentStyle keeps the info about whether a prop is configured as a spring
	// or if it's just a random prop that happens to be present on the style
	
	'use strict';
	
	exports.__esModule = true;
	exports['default'] = noVelocity;
	
	function noVelocity(currentVelocity, currentStyle) {
	  for (var key in currentVelocity) {
	    if (!currentVelocity.hasOwnProperty(key)) {
	      continue;
	    }
	    if (currentStyle[key] != null && currentStyle[key].config && currentVelocity[key] !== 0) {
	      return false;
	    }
	  }
	  return true;
	}
	
	module.exports = exports['default'];

/***/ },
/* 43 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = hasReachedStyle;
	
	function hasReachedStyle(currentStyle, style) {
	  for (var key in style) {
	    if (!style.hasOwnProperty(key)) {
	      continue;
	    }
	    var currentValue = currentStyle[key];
	    var destValue = style[key];
	    if (destValue == null || !destValue.config) {
	      // not a spring config
	      continue;
	    }
	    if (currentValue.config && currentValue.val !== destValue.val) {
	      return false;
	    }
	    if (!currentValue.config && currentValue !== destValue.val) {
	      return false;
	    }
	  }
	
	  return true;
	}
	
	module.exports = exports['default'];

/***/ },
/* 44 */
/***/ function(module, exports) {

	
	
	// this function is allocation-less thanks to babel, which transforms the tail
	// calls into loops
	'use strict';
	
	exports.__esModule = true;
	exports['default'] = mergeDiff;
	function mergeDiffArr(_x, _x2, _x3, _x4, _x5, _x6, _x7) {
	  var _again = true;
	
	  _function: while (_again) {
	    var arrA = _x,
	        arrB = _x2,
	        collB = _x3,
	        indexA = _x4,
	        indexB = _x5,
	        onRemove = _x6,
	        accum = _x7;
	    endA = endB = keyA = keyB = fill = fill = undefined;
	    _again = false;
	
	    var endA = indexA === arrA.length;
	    var endB = indexB === arrB.length;
	    var keyA = arrA[indexA];
	    var keyB = arrB[indexB];
	    if (endA && endB) {
	      // returning null here, otherwise lint complains that we're not expecting
	      // a return value in subsequent calls. We know what we're doing.
	      return null;
	    }
	
	    if (endA) {
	      accum[keyB] = collB[keyB];
	      _x = arrA;
	      _x2 = arrB;
	      _x3 = collB;
	      _x4 = indexA;
	      _x5 = indexB + 1;
	      _x6 = onRemove;
	      _x7 = accum;
	      _again = true;
	      continue _function;
	    }
	
	    if (endB) {
	      var fill = onRemove(keyA);
	      if (fill != null) {
	        accum[keyA] = fill;
	      }
	      _x = arrA;
	      _x2 = arrB;
	      _x3 = collB;
	      _x4 = indexA + 1;
	      _x5 = indexB;
	      _x6 = onRemove;
	      _x7 = accum;
	      _again = true;
	      continue _function;
	    }
	
	    if (keyA === keyB) {
	      accum[keyA] = collB[keyA];
	      _x = arrA;
	      _x2 = arrB;
	      _x3 = collB;
	      _x4 = indexA + 1;
	      _x5 = indexB + 1;
	      _x6 = onRemove;
	      _x7 = accum;
	      _again = true;
	      continue _function;
	    }
	
	    if (!collB.hasOwnProperty(keyA)) {
	      var fill = onRemove(keyA);
	      if (fill != null) {
	        accum[keyA] = fill;
	      }
	      _x = arrA;
	      _x2 = arrB;
	      _x3 = collB;
	      _x4 = indexA + 1;
	      _x5 = indexB;
	      _x6 = onRemove;
	      _x7 = accum;
	      _again = true;
	      continue _function;
	    }
	
	    _x = arrA;
	    _x2 = arrB;
	    _x3 = collB;
	    _x4 = indexA + 1;
	    _x5 = indexB;
	    _x6 = onRemove;
	    _x7 = accum;
	    _again = true;
	    continue _function;
	  }
	}
	
	function mergeDiff(a, b, onRemove) {
	  var ret = {};
	  // if anyone can make this work without allocating the arrays here, we'll
	  // give you a medal
	  mergeDiffArr(Object.keys(a), Object.keys(b), b, 0, 0, onRemove, ret);
	  return ret;
	}
	
	module.exports = exports['default'];

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = configAnimation;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _performanceNow = __webpack_require__(46);
	
	var _performanceNow2 = _interopRequireDefault(_performanceNow);
	
	var _raf = __webpack_require__(48);
	
	var _raf2 = _interopRequireDefault(_raf);
	
	function configAnimation() {
	  var config = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var _config$timeStep = config.timeStep;
	  var timeStep = _config$timeStep === undefined ? 1 / 60 * 1000 : _config$timeStep;
	  var _config$timeScale = config.timeScale;
	  var timeScale = _config$timeScale === undefined ? 1 : _config$timeScale;
	  var _config$maxSteps = config.maxSteps;
	  var maxSteps = _config$maxSteps === undefined ? 10 : _config$maxSteps;
	  var _config$raf = config.raf;
	  var raf = _config$raf === undefined ? _raf2['default'] : _config$raf;
	  var _config$now = config.now;
	  var now = _config$now === undefined ? _performanceNow2['default'] : _config$now;
	
	  var animRunning = [];
	  var running = false;
	  var prevTime = 0;
	  var accumulatedTime = 0;
	
	  function loop() {
	    var currentTime = now();
	    var frameTime = currentTime - prevTime; // delta
	
	    prevTime = currentTime;
	    accumulatedTime += frameTime * timeScale;
	
	    if (accumulatedTime > timeStep * maxSteps) {
	      accumulatedTime = 0;
	    }
	
	    var frameNumber = Math.ceil(accumulatedTime / timeStep);
	    for (var i = 0; i < animRunning.length; i++) {
	      var _animRunning$i = animRunning[i];
	      var active = _animRunning$i.active;
	      var animationStep = _animRunning$i.animationStep;
	      var prevPrevState = _animRunning$i.prevState;
	      var prevNextState = animRunning[i].nextState;
	
	      if (!active) {
	        continue;
	      }
	
	      // Seems like because the TS sets destVals as enterVals for the first
	      // tick, we might render that value twice. We render it once, currValue is
	      // enterVal and destVal is enterVal. The next tick is faster than 16ms,
	      // so accumulatedTime (which would be about -16ms from the previous tick)
	      // is negative (-16ms + any number less than 16ms < 0). So we just render
	      // part ways towards the nextState, but that's enterVal still. We render
	      // say 75% between currValue (=== enterVal) and destValue (=== enterVal).
	      // So we render the same value a second time.
	      // The solution below is to recalculate the destination state even when
	      // you're moving partially towards it.
	      if (accumulatedTime <= 0) {
	        animRunning[i].nextState = animationStep(timeStep / 1000, prevPrevState);
	      } else {
	        for (var j = 0; j < frameNumber; j++) {
	          animRunning[i].nextState = animationStep(timeStep / 1000, prevNextState);
	          var _ref = [prevNextState, animRunning[i].nextState];
	          animRunning[i].prevState = _ref[0];
	          prevNextState = _ref[1];
	        }
	      }
	    }
	
	    accumulatedTime = accumulatedTime - frameNumber * timeStep;
	
	    // Render and filter in one iteration.
	    var alpha = 1 + accumulatedTime / timeStep;
	    for (var i = 0; i < animRunning.length; i++) {
	      var _animRunning$i2 = animRunning[i];
	      var animationRender = _animRunning$i2.animationRender;
	      var nextState = _animRunning$i2.nextState;
	      var prevState = _animRunning$i2.prevState;
	
	      // Might mutate animRunning........
	      animationRender(alpha, nextState, prevState);
	    }
	
	    animRunning = animRunning.filter(function (_ref2) {
	      var active = _ref2.active;
	      return active;
	    });
	
	    if (animRunning.length === 0) {
	      running = false;
	    } else {
	      raf(loop);
	    }
	  }
	
	  function start() {
	    if (!running) {
	      running = true;
	      prevTime = now();
	      accumulatedTime = 0;
	      raf(loop);
	    }
	  }
	
	  return function startAnimation(state, animationStep, animationRender) {
	    for (var i = 0; i < animRunning.length; i++) {
	      var val = animRunning[i];
	      if (val.animationStep === animationStep) {
	        val.active = true;
	        val.prevState = state;
	        start();
	        return val.stop;
	      }
	    }
	
	    var newAnim = {
	      animationStep: animationStep,
	      animationRender: animationRender,
	      prevState: state,
	      nextState: state,
	      active: true
	    };
	
	    newAnim.stop = function () {
	      return newAnim.active = false;
	    };
	    animRunning.push(newAnim);
	
	    start();
	
	    return newAnim.stop;
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.7.1
	(function() {
	  var getNanoSeconds, hrtime, loadTime;
	
	  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
	    module.exports = function() {
	      return performance.now();
	    };
	  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
	    module.exports = function() {
	      return (getNanoSeconds() - loadTime) / 1e6;
	    };
	    hrtime = process.hrtime;
	    getNanoSeconds = function() {
	      var hr;
	      hr = hrtime();
	      return hr[0] * 1e9 + hr[1];
	    };
	    loadTime = getNanoSeconds();
	  } else if (Date.now) {
	    module.exports = function() {
	      return Date.now() - loadTime;
	    };
	    loadTime = Date.now();
	  } else {
	    module.exports = function() {
	      return new Date().getTime() - loadTime;
	    };
	    loadTime = new Date().getTime();
	  }
	
	}).call(this);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(47)))

/***/ },
/* 47 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	(function () {
	    try {
	        cachedSetTimeout = setTimeout;
	    } catch (e) {
	        cachedSetTimeout = function () {
	            throw new Error('setTimeout is not defined');
	        }
	    }
	    try {
	        cachedClearTimeout = clearTimeout;
	    } catch (e) {
	        cachedClearTimeout = function () {
	            throw new Error('clearTimeout is not defined');
	        }
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var now = __webpack_require__(46)
	  , root = typeof window === 'undefined' ? global : window
	  , vendors = ['moz', 'webkit']
	  , suffix = 'AnimationFrame'
	  , raf = root['request' + suffix]
	  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]
	
	for(var i = 0; !raf && i < vendors.length; i++) {
	  raf = root[vendors[i] + 'Request' + suffix]
	  caf = root[vendors[i] + 'Cancel' + suffix]
	      || root[vendors[i] + 'CancelRequest' + suffix]
	}
	
	// Some versions of FF have rAF but not cAF
	if(!raf || !caf) {
	  var last = 0
	    , id = 0
	    , queue = []
	    , frameDuration = 1000 / 60
	
	  raf = function(callback) {
	    if(queue.length === 0) {
	      var _now = now()
	        , next = Math.max(0, frameDuration - (_now - last))
	      last = next + _now
	      setTimeout(function() {
	        var cp = queue.slice(0)
	        // Clear queue here to prevent
	        // callbacks from appending listeners
	        // to the current frame's queue
	        queue.length = 0
	        for(var i = 0; i < cp.length; i++) {
	          if(!cp[i].cancelled) {
	            try{
	              cp[i].callback(last)
	            } catch(e) {
	              setTimeout(function() { throw e }, 0)
	            }
	          }
	        }
	      }, Math.round(next))
	    }
	    queue.push({
	      handle: ++id,
	      callback: callback,
	      cancelled: false
	    })
	    return id
	  }
	
	  caf = function(handle) {
	    for(var i = 0; i < queue.length; i++) {
	      if(queue[i].handle === handle) {
	        queue[i].cancelled = true
	      }
	    }
	  }
	}
	
	module.exports = function(fn) {
	  // Wrap in a new function to prevent
	  // `cancel` potentially being assigned
	  // to the native rAF function
	  return raf.call(root, fn)
	}
	module.exports.cancel = function() {
	  caf.apply(root, arguments)
	}
	module.exports.polyfill = function() {
	  root.requestAnimationFrame = raf
	  root.cancelAnimationFrame = caf
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 49 */
/***/ function(module, exports) {

	
	// used by the tree-walking updates and springs. Avoids some allocations
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = zero;
	
	function zero() {
	  return 0;
	}
	
	module.exports = exports["default"];

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	
	
	// TODO: refactor common logic with updateCurrValue and updateCurrVelocity
	'use strict';
	
	exports.__esModule = true;
	exports.interpolateValue = interpolateValue;
	exports.updateCurrentStyle = updateCurrentStyle;
	exports.updateCurrentVelocity = updateCurrentVelocity;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _stepper = __webpack_require__(51);
	
	var _stepper2 = _interopRequireDefault(_stepper);
	
	var _spring = __webpack_require__(52);
	
	var _spring2 = _interopRequireDefault(_spring);
	
	function interpolateValue(alpha, nextStyle, prevStyle) {
	  // might be used by a TransitionMotion, where prevStyle might not exist anymore
	  if (!prevStyle) {
	    return nextStyle;
	  }
	
	  var ret = {};
	  for (var key in nextStyle) {
	    if (!nextStyle.hasOwnProperty(key)) {
	      continue;
	    }
	
	    if (nextStyle[key] == null || !nextStyle[key].config) {
	      ret[key] = nextStyle[key];
	      // not a spring config, not something we want to interpolate
	      continue;
	    }
	    var prevValue = prevStyle[key].config ? prevStyle[key].val : prevStyle[key];
	    ret[key] = _spring2['default'](nextStyle[key].val * alpha + prevValue * (1 - alpha), nextStyle[key].config);
	  }
	
	  return ret;
	}
	
	// TODO: refactor common logic with updateCurrentVelocity
	
	function updateCurrentStyle(frameRate, currentStyle, currentVelocity, style) {
	  var ret = {};
	  for (var key in style) {
	    if (!style.hasOwnProperty(key)) {
	      continue;
	    }
	    if (style[key] == null || !style[key].config) {
	      ret[key] = style[key];
	      // not a spring config, not something we want to interpolate
	      continue;
	    }
	    var _style$key$config = style[key].config;
	    var k = _style$key$config[0];
	    var b = _style$key$config[1];
	
	    var val = _stepper2['default'](frameRate,
	    // might have been a non-springed prop that just became one
	    currentStyle[key].val == null ? currentStyle[key] : currentStyle[key].val, currentVelocity[key], style[key].val, k, b)[0];
	    ret[key] = _spring2['default'](val, style[key].config);
	  }
	  return ret;
	}
	
	function updateCurrentVelocity(frameRate, currentStyle, currentVelocity, style) {
	  var ret = {};
	  for (var key in style) {
	    if (!style.hasOwnProperty(key)) {
	      continue;
	    }
	    if (style[key] == null || !style[key].config) {
	      // not a spring config, not something we want to interpolate
	      ret[key] = 0;
	      continue;
	    }
	    var _style$key$config2 = style[key].config;
	    var k = _style$key$config2[0];
	    var b = _style$key$config2[1];
	
	    var val = _stepper2['default'](frameRate,
	    // might have been a non-springed prop that just became one
	    currentStyle[key].val == null ? currentStyle[key] : currentStyle[key].val, currentVelocity[key], style[key].val, k, b)[1];
	    ret[key] = val;
	  }
	  return ret;
	}

/***/ },
/* 51 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = stepper;
	
	var errorMargin = 0.0001;
	
	function stepper(frameRate, x, v, destX, k, b) {
	  // Spring stiffness, in kg / s^2
	
	  // for animations, destX is really spring length (spring at rest). initial
	  // position is considered as the stretched/compressed position of a spring
	  var Fspring = -k * (x - destX);
	
	  // Damping, in kg / s
	  var Fdamper = -b * v;
	
	  // usually we put mass here, but for animation purposes, specifying mass is a
	  // bit redundant. you could simply adjust k and b accordingly
	  // let a = (Fspring + Fdamper) / mass;
	  var a = Fspring + Fdamper;
	
	  var newV = v + a * frameRate;
	  var newX = x + newV * frameRate;
	
	  if (Math.abs(newV - v) < errorMargin && Math.abs(newX - x) < errorMargin) {
	    return [destX, 0];
	  }
	
	  return [newX, newV];
	}
	
	module.exports = exports["default"];

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = spring;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _presets = __webpack_require__(53);
	
	var _presets2 = _interopRequireDefault(_presets);
	
	function spring(val) {
	  var config = arguments.length <= 1 || arguments[1] === undefined ? _presets2['default'].noWobble : arguments[1];
	
	  return { val: val, config: config };
	}
	
	module.exports = exports['default'];

/***/ },
/* 53 */
/***/ function(module, exports) {

	
	// [stiffness, damping]
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = {
	  noWobble: [170, 26], // the default
	  gentle: [120, 14],
	  wobbly: [180, 12],
	  stiff: [210, 20]
	};
	module.exports = exports["default"];

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports['default'] = deprecatedSprings;
	var hasWarnedForSpring = {};
	var hasWarnedForTransitionSpring = {};
	
	function deprecatedSprings(React) {
	  var Spring = React.createClass({
	    displayName: 'Spring',
	
	    componentWillMount: function componentWillMount() {
	      if (process.env.NODE_ENV === 'development') {
	        var ownerName = this._reactInternalInstance._currentElement._owner && this._reactInternalInstance._currentElement._owner.getName();
	        if (!hasWarnedForSpring[ownerName]) {
	          hasWarnedForSpring[ownerName] = true;
	          console.error('Spring (used in %srender) has now been renamed to Motion. ' + 'Please see the release note for the upgrade path. Thank you!', ownerName ? ownerName + '\'s ' : 'React.');
	        }
	      }
	    },
	
	    render: function render() {
	      return null;
	    }
	  });
	
	  var TransitionSpring = React.createClass({
	    displayName: 'TransitionSpring',
	
	    componentWillMount: function componentWillMount() {
	      if (process.env.NODE_ENV === 'development') {
	        var ownerName = this._reactInternalInstance._currentElement._owner && this._reactInternalInstance._currentElement._owner.getName();
	        if (!hasWarnedForTransitionSpring[ownerName]) {
	          hasWarnedForTransitionSpring[ownerName] = true;
	          console.error('TransitionSpring (used in %srender) has now been renamed to ' + 'TransitionMotion. Please see the release note for the upgrade ' + 'path. Thank you!', ownerName ? ownerName + '\'s ' : 'React.');
	        }
	      }
	    },
	
	    render: function render() {
	      return null;
	    }
	  });
	
	  return { Spring: Spring, TransitionSpring: TransitionSpring };
	}
	
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(47)))

/***/ },
/* 55 */
/***/ function(module, exports) {

	
	// turn {x: {val: 1, config: [1, 2]}, y: 2} generated by
	// `{x: spring(1, [1, 2]), y: 2}` into {x: 1, y: 2}
	
	'use strict';
	
	exports.__esModule = true;
	exports['default'] = stripStyle;
	
	function stripStyle(style) {
	  var ret = {};
	  for (var key in style) {
	    if (!style.hasOwnProperty(key)) {
	      continue;
	    }
	    ret[key] = style[key] == null || style[key].val == null ? style[key] : style[key].val;
	  }
	  return ret;
	}
	
	module.exports = exports['default'];

/***/ },
/* 56 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = reorderKeys;
	
	function reorderKeys(obj, f) {
	  var newKeys = f(Object.keys(obj));
	  var ret = {};
	  for (var i = 0; i < newKeys.length; i++) {
	    var key = newKeys[i];
	    ret[key] = obj[key];
	  }
	
	  return ret;
	}
	
	module.exports = exports["default"];

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports.findDOMNode = findDOMNode;
	exports.warnAboutFunctionChild = warnAboutFunctionChild;
	exports.warnAboutElementChild = warnAboutElementChild;
	exports.positiveOrZero = positiveOrZero;
	exports.modifyObjValues = modifyObjValues;
	exports.isReact13 = isReact13;
	
	var _react = __webpack_require__(38);
	
	var _react2 = _interopRequireDefault(_react);
	
	var react13 = isReact13(_react2['default']);
	var didWarnAboutChild = false;
	
	function findDOMNode(component) {
	    if (!react13) {
	        return component;
	    } else {
	        return _react2['default'].findDOMNode(component);
	    }
	}
	
	function warnAboutFunctionChild() {
	    if (didWarnAboutChild || react13) {
	        return;
	    }
	
	    didWarnAboutChild = true;
	    console.error('With React 0.14 and later versions, you no longer need to wrap <ScrollArea> child into a function.');
	}
	
	function warnAboutElementChild() {
	    if (didWarnAboutChild || !react13) {
	        return;
	    }
	
	    didWarnAboutChild = true;
	    console.error('With React 0.13, you need to wrap <ScrollArea> child into a function.');
	}
	
	function positiveOrZero(number) {
	    return number < 0 ? 0 : number;
	}
	
	function modifyObjValues(obj) {
	    var modifier = arguments.length <= 1 || arguments[1] === undefined ? function (x) {
	        return x;
	    } : arguments[1];
	
	    var modifiedObj = {};
	    for (var key in obj) {
	        if (obj.hasOwnProperty(key)) modifiedObj[key] = modifier(obj[key]);
	    }
	
	    return modifiedObj;
	}
	
	function isReact13(React) {
	    var version = React.version;
	
	    if (typeof version !== 'string') {
	        return true;
	    }
	
	    var parts = version.split('.');
	    var major = parseInt(parts[0], 10);
	    var minor = parseInt(parts[1], 10);
	
	    return major === 0 && minor === 13;
	}

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// Load in dependencies
	var computedStyle = __webpack_require__(59);
	
	/**
	 * Calculate the `line-height` of a given node
	 * @param {HTMLElement} node Element to calculate line height of. Must be in the DOM.
	 * @returns {Number} `line-height` of the element in pixels
	 */
	function lineHeight(node) {
	  // Grab the line-height via style
	  var lnHeightStr = computedStyle(node, 'line-height'),
	      lnHeight = parseFloat(lnHeightStr, 10);
	
	  // If the lineHeight did not contain a unit (i.e. it was numeric), convert it to ems (e.g. '2.3' === '2.3em')
	  if (lnHeightStr === lnHeight + '') {
	    // Save the old lineHeight style and update the em unit to the element
	    var _lnHeightStyle = node.style.lineHeight;
	    node.style.lineHeight = lnHeightStr + 'em';
	
	    // Calculate the em based height
	    lnHeightStr = computedStyle(node, 'line-height');
	    lnHeight = parseFloat(lnHeightStr, 10);
	
	    // Revert the lineHeight style
	    if (_lnHeightStyle) {
	      node.style.lineHeight = _lnHeightStyle;
	    } else {
	      delete node.style.lineHeight;
	    }
	  }
	
	  // If the lineHeight is in `pt`, convert it to pixels (4px for 3pt)
	  // DEV: `em` units are converted to `pt` in IE6
	  // Conversion ratio from https://developer.mozilla.org/en-US/docs/Web/CSS/length
	  if (lnHeightStr.indexOf('pt') !== -1) {
	    lnHeight *= 4;
	    lnHeight /= 3;
	  } else if (lnHeightStr.indexOf('mm') !== -1) {
	  // Otherwise, if the lineHeight is in `mm`, convert it to pixels (96px for 25.4mm)
	    lnHeight *= 96;
	    lnHeight /= 25.4;
	  } else if (lnHeightStr.indexOf('cm') !== -1) {
	  // Otherwise, if the lineHeight is in `cm`, convert it to pixels (96px for 2.54cm)
	    lnHeight *= 96;
	    lnHeight /= 2.54;
	  } else if (lnHeightStr.indexOf('in') !== -1) {
	  // Otherwise, if the lineHeight is in `in`, convert it to pixels (96px for 1in)
	    lnHeight *= 96;
	  } else if (lnHeightStr.indexOf('pc') !== -1) {
	  // Otherwise, if the lineHeight is in `pc`, convert it to pixels (12pt for 1pc)
	    lnHeight *= 16;
	  }
	
	  // Continue our computation
	  lnHeight = Math.round(lnHeight);
	
	  // If the line-height is "normal", calculate by font-size
	  if (lnHeightStr === 'normal') {
	    // Create a temporary node
	    var nodeName = node.nodeName,
	        _node = document.createElement(nodeName);
	    _node.innerHTML = '&nbsp;';
	
	    // Set the font-size of the element
	    var fontSizeStr = computedStyle(node, 'font-size');
	    _node.style.fontSize = fontSizeStr;
	
	    // Append it to the body
	    var body = document.body;
	    body.appendChild(_node);
	
	    // Assume the line height of the element is the height
	    var height = _node.offsetHeight;
	    lnHeight = height;
	
	    // Remove our child from the DOM
	    body.removeChild(_node);
	  }
	
	  // Return the calculated height
	  return lnHeight;
	}
	
	// Export lineHeight
	module.exports = lineHeight;

/***/ },
/* 59 */
/***/ function(module, exports) {

	// This code has been refactored for 140 bytes
	// You can see the original here: https://github.com/twolfson/computedStyle/blob/04cd1da2e30fa45844f95f5cb1ac898e9b9ef050/lib/computedStyle.js
	var computedStyle = function (el, prop, getComputedStyle) {
	  getComputedStyle = window.getComputedStyle;
	
	  // In one fell swoop
	  return (
	    // If we have getComputedStyle
	    getComputedStyle ?
	      // Query it
	      // TODO: From CSS-Query notes, we might need (node, null) for FF
	      getComputedStyle(el) :
	
	    // Otherwise, we are in IE and use currentStyle
	      el.currentStyle
	  )[
	    // Switch to camelCase for CSSOM
	    // DEV: Grabbed from jQuery
	    // https://github.com/jquery/jquery/blob/1.9-stable/src/css.js#L191-L194
	    // https://github.com/jquery/jquery/blob/1.9-stable/src/core.js#L593-L597
	    prop.replace(/-(\w)/gi, function (word, letter) {
	      return letter.toUpperCase();
	    })
	  ];
	};
	
	module.exports = computedStyle;


/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAzY2VmNGIxMWY2YWE4MjJlMWM4YSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvU2Nyb2xsQXJlYVdpdGhvdXRDc3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1Njcm9sbEFyZWEuanN4Iiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2dldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnRvLWlvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmlvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmNvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQub2JqZWN0LXNhcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZXhwb3J0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmNvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmN0eC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZmFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5zZXQtcHJvdG8uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmlzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZS1jbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3MtY2FsbC1jaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5vYmplY3QtYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC50by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0XCIsXCJjb21tb25qczJcIjpcInJlYWN0XCIsXCJjb21tb25qc1wiOlwicmVhY3RcIixcImFtZFwiOlwicmVhY3RcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1Njcm9sbGJhci5qc3giLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tb3Rpb24vbGliL3JlYWN0LW1vdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1vdGlvbi9saWIvY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1vdGlvbi9saWIvbm9WZWxvY2l0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1vdGlvbi9saWIvaGFzUmVhY2hlZFN0eWxlLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtbW90aW9uL2xpYi9tZXJnZURpZmYuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tb3Rpb24vbGliL2FuaW1hdGlvbkxvb3AuanMiLCJ3ZWJwYWNrOi8vLy4vfi9wZXJmb3JtYW5jZS1ub3cvbGliL3BlcmZvcm1hbmNlLW5vdy5qcyIsIndlYnBhY2s6Ly8vLi9+L3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JhZi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1vdGlvbi9saWIvemVyby5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1vdGlvbi9saWIvdXBkYXRlVHJlZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1vdGlvbi9saWIvc3RlcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1vdGlvbi9saWIvc3ByaW5nLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtbW90aW9uL2xpYi9wcmVzZXRzLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtbW90aW9uL2xpYi9kZXByZWNhdGVkU3ByaW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1vdGlvbi9saWIvc3RyaXBTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1vdGlvbi9saWIvcmVvcmRlcktleXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL34vbGluZS1oZWlnaHQvbGliL2xpbmUtaGVpZ2h0LmpzIiwid2VicGFjazovLy8uL34vY29tcHV0ZWQtc3R5bGUvZGlzdC9jb21wdXRlZFN0eWxlLmNvbW1vbmpzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4QkFBNkI7QUFDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsUUFBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWdDO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87O0FBRVA7QUFDQTtBQUNBLFFBQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0NBQW1DLGdDQUFnQztBQUNuRSx3Q0FBdUMsb0NBQW9DO0FBQzNFLFFBQU87O0FBRVA7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsUUFBTzs7QUFFUDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQO0FBQ0EsOEJBQTZCO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIOztBQUVBO0FBQ0E7O0FBRUEsV0FBVTtBQUNWOztBQUVBLHFDOzs7Ozs7O0FDcGNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDOzs7Ozs7QUNyQkE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxxQzs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQzs7Ozs7O0FDOUdBOztBQUVBO0FBQ0E7O0FBRUEsdUNBQXNDLHVDQUF1QyxrQkFBa0I7O0FBRS9GOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0Esd0VBQXVFO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBMkM7O0FBRTNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW1CLHdCQUF3QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1Asd0JBQXVCLGlCQUFpQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW1CLHdCQUF3QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW1CLHdCQUF3QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxQzs7Ozs7O0FDL0lBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUM7Ozs7Ozs7O0FDL0JEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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aWxlIjoiM2NlZjRiMTFmNmFhODIyZTFjOGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJyZWFjdFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJTY3JvbGxBcmVhXCJdID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlNjcm9sbEFyZWFcIl0gPSBmYWN0b3J5KHJvb3RbXCJSZWFjdFwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzM4X18pIHtcbnJldHVybiBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb25cbiAqKi8iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDNjZWY0YjExZjZhYTgyMmUxYzhhXG4gKiovIiwiaW1wb3J0IFNjcm9sbEFyZWEgZnJvbSAnLi9TY3JvbGxBcmVhLmpzeCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxBcmVhO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL1Njcm9sbEFyZWFXaXRob3V0Q3NzLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0LmpzXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNjcm9sbEJhciBmcm9tICcuL1Njcm9sbGJhcic7XHJcbmltcG9ydCB7ZmluZERPTU5vZGUsIHdhcm5BYm91dEZ1bmN0aW9uQ2hpbGQsIHdhcm5BYm91dEVsZW1lbnRDaGlsZCwgcG9zaXRpdmVPclplcm8sIG1vZGlmeU9ialZhbHVlc30gZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCBsaW5lSGVpZ2h0IGZyb20gJ2xpbmUtaGVpZ2h0JztcclxuaW1wb3J0IHtNb3Rpb24sIHNwcmluZ30gZnJvbSAncmVhY3QtbW90aW9uJztcclxuXHJcbmNvbnN0IGV2ZW50VHlwZXM9IHtcclxuICAgIHdoZWVsOiAnd2hlZWwnLFxyXG4gICAgYXBpOiAnYXBpJyxcclxuICAgIHRvdWNoOiAndG91Y2gnLFxyXG4gICAgdG91Y2hFbmQ6ICd0b3VjaEVuZCcsXHJcbiAgICBtb3VzZW1vdmU6ICdtb3VzZW1vdmUnXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JvbGxBcmVhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB0b3BQb3NpdGlvbjogMCxcclxuICAgICAgICAgICAgbGVmdFBvc2l0aW9uOiAwLFxyXG4gICAgICAgICAgICByZWFsSGVpZ2h0OiAwLFxyXG4gICAgICAgICAgICBjb250YWluZXJIZWlnaHQ6IDAsXHJcbiAgICAgICAgICAgIHJlYWxXaWR0aDogMCxcclxuICAgICAgICAgICAgY29udGFpbmVyV2lkdGg6IDBcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnNjcm9sbEFyZWEgPSB7XHJcbiAgICAgICAgICAgIHJlZnJlc2g6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U2l6ZXNUb1N0YXRlKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNjcm9sbFRvcDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUb3AoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2Nyb2xsQm90dG9tOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbEJvdHRvbSgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzY3JvbGxZVG86IChwb3NpdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxZVG8ocG9zaXRpb24pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzY3JvbGxMZWZ0OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbExlZnQoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2Nyb2xsUmlnaHQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsUmlnaHQoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2Nyb2xsWFRvOiAocG9zaXRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsWFRvKHBvc2l0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5ldm50c1ByZXZpb3VzVmFsdWVzID0ge1xyXG4gICAgICAgICAgICBjbGllbnRYOiAwLFxyXG4gICAgICAgICAgICBjbGllbnRZOiAwLFxyXG4gICAgICAgICAgICBkZWx0YVg6IDAsXHJcbiAgICAgICAgICAgIGRlbHRhWTogMFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5iaW5kZWRIYW5kbGVXaW5kb3dSZXNpemUgPSB0aGlzLmhhbmRsZVdpbmRvd1Jlc2l6ZS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENoaWxkQ29udGV4dCgpe1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHNjcm9sbEFyZWE6IHRoaXMuc2Nyb2xsQXJlYVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICBpZih0aGlzLnByb3BzLmNvbnRlbnRXaW5kb3cpe1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNvbnRlbnRXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLmJpbmRlZEhhbmRsZVdpbmRvd1Jlc2l6ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGluZUhlaWdodFB4ID0gbGluZUhlaWdodChmaW5kRE9NTm9kZSh0aGlzLmNvbnRlbnQpKTtcclxuICAgICAgICB0aGlzLnNldFNpemVzVG9TdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5jb250ZW50V2luZG93KXtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jb250ZW50V2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5iaW5kZWRIYW5kbGVXaW5kb3dSZXNpemUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUoKXtcclxuICAgICAgICB0aGlzLnNldFNpemVzVG9TdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGxldCB7Y2hpbGRyZW4sIGNsYXNzTmFtZSwgY29udGVudENsYXNzTmFtZSwgb3duZXJEb2N1bWVudH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgbGV0IHdpdGhNb3Rpb24gPSB0aGlzLnByb3BzLnNtb290aFNjcm9sbGluZyAmJiBcclxuICAgICAgICAgICAgKHRoaXMuc3RhdGUuZXZlbnRUeXBlID09PSBldmVudFR5cGVzLndoZWVsIHx8IHRoaXMuc3RhdGUuZXZlbnRUeXBlID09PSBldmVudFR5cGVzLmFwaSB8fCB0aGlzLnN0YXRlLmV2ZW50VHlwZSA9PT0gZXZlbnRUeXBlcy50b3VjaEVuZCk7XHJcblxyXG4gICAgICAgIGxldCBzY3JvbGxiYXJZID0gdGhpcy5jYW5TY3JvbGxZKCk/IChcclxuICAgICAgICAgICAgPFNjcm9sbEJhclxyXG5cdFx0XHRcdG93bmVyRG9jdW1lbnQ9e293bmVyRG9jdW1lbnR9XHJcbiAgICAgICAgICAgICAgICByZWFsU2l6ZT17dGhpcy5zdGF0ZS5yZWFsSGVpZ2h0fVxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyU2l6ZT17dGhpcy5zdGF0ZS5jb250YWluZXJIZWlnaHR9XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbj17dGhpcy5zdGF0ZS50b3BQb3NpdGlvbn1cclxuICAgICAgICAgICAgICAgIG9uTW92ZT17dGhpcy5oYW5kbGVTY3JvbGxiYXJNb3ZlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICBvblBvc2l0aW9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNjcm9sbGJhcllQb3NpdGlvbkNoYW5nZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyU3R5bGU9e3RoaXMucHJvcHMudmVydGljYWxDb250YWluZXJTdHlsZX1cclxuICAgICAgICAgICAgICAgIHNjcm9sbGJhclN0eWxlPXt0aGlzLnByb3BzLnZlcnRpY2FsU2Nyb2xsYmFyU3R5bGV9XHJcbiAgICAgICAgICAgICAgICBzbW9vdGhTY3JvbGxpbmc9e3dpdGhNb3Rpb259XHJcbiAgICAgICAgICAgICAgICBtaW5TY3JvbGxTaXplPXt0aGlzLnByb3BzLm1pblNjcm9sbFNpemV9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidmVydGljYWxcIi8+XHJcbiAgICAgICAgKTogbnVsbDtcclxuXHJcbiAgICAgICAgbGV0IHNjcm9sbGJhclggPSB0aGlzLmNhblNjcm9sbFgoKT8gKFxyXG4gICAgICAgICAgICA8U2Nyb2xsQmFyXHJcblx0XHRcdFx0b3duZXJEb2N1bWVudD17b3duZXJEb2N1bWVudH1cclxuICAgICAgICAgICAgICAgIHJlYWxTaXplPXt0aGlzLnN0YXRlLnJlYWxXaWR0aH1cclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lclNpemU9e3RoaXMuc3RhdGUuY29udGFpbmVyV2lkdGh9XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbj17dGhpcy5zdGF0ZS5sZWZ0UG9zaXRpb259XHJcbiAgICAgICAgICAgICAgICBvbk1vdmU9e3RoaXMuaGFuZGxlU2Nyb2xsYmFyTW92ZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgb25Qb3NpdGlvbkNoYW5nZT17dGhpcy5oYW5kbGVTY3JvbGxiYXJYUG9zaXRpb25DaGFuZ2UuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lclN0eWxlPXt0aGlzLnByb3BzLmhvcml6b250YWxDb250YWluZXJTdHlsZX1cclxuICAgICAgICAgICAgICAgIHNjcm9sbGJhclN0eWxlPXt0aGlzLnByb3BzLmhvcml6b250YWxTY3JvbGxiYXJTdHlsZX1cclxuICAgICAgICAgICAgICAgIHNtb290aFNjcm9sbGluZz17d2l0aE1vdGlvbn1cclxuICAgICAgICAgICAgICAgIG1pblNjcm9sbFNpemU9e3RoaXMucHJvcHMubWluU2Nyb2xsU2l6ZX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJob3Jpem9udGFsXCIvPlxyXG4gICAgICAgICk6IG51bGw7XHJcblxyXG4gICAgICAgIGlmKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ2Z1bmN0aW9uJyl7XHJcbiAgICAgICAgICAgIHdhcm5BYm91dEZ1bmN0aW9uQ2hpbGQoKTtcclxuICAgICAgICAgICAgY2hpbGRyZW4gPSBjaGlsZHJlbigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHdhcm5BYm91dEVsZW1lbnRDaGlsZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGNsYXNzZXMgPSAnc2Nyb2xsYXJlYSAnICsgKGNsYXNzTmFtZSB8fCAnJyk7XHJcbiAgICAgICAgbGV0IGNvbnRlbnRDbGFzc2VzID0gJ3Njcm9sbGFyZWEtY29udGVudCAnICsgKGNvbnRlbnRDbGFzc05hbWUgfHwgJycpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBjb250ZW50U3R5bGUgPSB7XHJcbiAgICAgICAgICAgIG1hcmdpblRvcDogLXRoaXMuc3RhdGUudG9wUG9zaXRpb24sXHJcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ6IC10aGlzLnN0YXRlLmxlZnRQb3NpdGlvblxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbGV0IHNwcmluZ2lmaWVkQ29udGVudFN0eWxlID0gd2l0aE1vdGlvbiA/IG1vZGlmeU9ialZhbHVlcyhjb250ZW50U3R5bGUsIHggPT4gc3ByaW5nKHgpKSA6IGNvbnRlbnRTdHlsZTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TW90aW9uIHN0eWxlPXt7Li4udGhpcy5wcm9wcy5jb250ZW50U3R5bGUsIC4uLnNwcmluZ2lmaWVkQ29udGVudFN0eWxlfX0+XHJcbiAgICAgICAgICAgICAgICB7IHN0eWxlID0+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgcmVmPXt4ID0+IHRoaXMud3JhcHBlciA9IHh9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfSBjbGFzc05hbWU9e2NsYXNzZXN9IG9uV2hlZWw9e3RoaXMuaGFuZGxlV2hlZWwuYmluZCh0aGlzKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgcmVmPXt4ID0+IHRoaXMuY29udGVudCA9IHh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NvbnRlbnRDbGFzc2VzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Ub3VjaFN0YXJ0PXt0aGlzLmhhbmRsZVRvdWNoU3RhcnQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVG91Y2hNb3ZlPXt0aGlzLmhhbmRsZVRvdWNoTW92ZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Ub3VjaEVuZD17dGhpcy5oYW5kbGVUb3VjaEVuZC5iaW5kKHRoaXMpfT5cclxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtzY3JvbGxiYXJZfVxyXG4gICAgICAgICAgICAgICAge3Njcm9sbGJhclh9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L01vdGlvbj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFN0YXRlRnJvbUV2ZW50KG5ld1N0YXRlLCBldmVudFR5cGUpe1xyXG4gICAgICAgIGlmKHRoaXMucHJvcHMub25TY3JvbGwpe1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uU2Nyb2xsKG5ld1N0YXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Li4ubmV3U3RhdGUsIGV2ZW50VHlwZX0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVRvdWNoU3RhcnQoZSl7XHJcbiAgICAgICAgbGV0IHt0b3VjaGVzfSA9IGU7XHJcbiAgICAgICAgaWYodG91Y2hlcy5sZW5ndGggPT09IDEpe1xyXG4gICAgICAgICAgICBsZXQge2NsaWVudFgsIGNsaWVudFl9ID0gdG91Y2hlc1swXTtcclxuICAgICAgICAgICAgdGhpcy5ldmVudFByZXZpb3VzVmFsdWVzID0ge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5ldmVudFByZXZpb3VzVmFsdWVzLFxyXG4gICAgICAgICAgICAgICAgY2xpZW50WSxcclxuICAgICAgICAgICAgICAgIGNsaWVudFgsXHJcbiAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KClcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlVG91Y2hNb3ZlKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQge3RvdWNoZXN9ID0gZTtcclxuICAgICAgICBpZih0b3VjaGVzLmxlbmd0aCA9PT0gMSl7XHJcbiAgICAgICAgICAgIGxldCB7Y2xpZW50WCwgY2xpZW50WX0gPSB0b3VjaGVzWzBdO1xyXG5cclxuICAgICAgICAgICAgbGV0IGRlbHRhWSA9IHRoaXMuZXZlbnRQcmV2aW91c1ZhbHVlcy5jbGllbnRZIC0gY2xpZW50WTtcclxuICAgICAgICAgICAgbGV0IGRlbHRhWCA9IHRoaXMuZXZlbnRQcmV2aW91c1ZhbHVlcy5jbGllbnRYIC0gY2xpZW50WDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRQcmV2aW91c1ZhbHVlcyA9IHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuZXZlbnRQcmV2aW91c1ZhbHVlcyxcclxuICAgICAgICAgICAgICAgIGRlbHRhWSxcclxuICAgICAgICAgICAgICAgIGRlbHRhWCxcclxuICAgICAgICAgICAgICAgIGNsaWVudFksXHJcbiAgICAgICAgICAgICAgICBjbGllbnRYLFxyXG4gICAgICAgICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlRnJvbUV2ZW50KHRoaXMuY29tcG9zZU5ld1N0YXRlKC1kZWx0YVgsIC1kZWx0YVkpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlVG91Y2hFbmQoZSl7XHJcbiAgICAgICAgbGV0IHtkZWx0YVg6IGxhc3REZWx0YVgsIGRlbHRhWTogbGFzdERlbHRhWSwgdGltZXN0YW1wOiBsYXN0VGltZXN0YW1wfSA9IHRoaXMuZXZlbnRQcmV2aW91c1ZhbHVlczsgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKERhdGUubm93KCkgLSBsYXN0VGltZXN0YW1wIDwgMjAwKXtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZUZyb21FdmVudCh0aGlzLmNvbXBvc2VOZXdTdGF0ZSgtbGFzdERlbHRhWCAqIDEwLCAtbGFzdERlbHRhWSAqIDEwKSwgZXZlbnRUeXBlcy50b3VjaEVuZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuZXZlbnRQcmV2aW91c1ZhbHVlcyA9IHtcclxuICAgICAgICAgICAgLi4udGhpcy5ldmVudFByZXZpb3VzVmFsdWVzLFxyXG4gICAgICAgICAgICBkZWx0YVk6IDAsXHJcbiAgICAgICAgICAgIGRlbHRhWDogMFxyXG4gICAgICAgIH07ICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGhhbmRsZVNjcm9sbGJhck1vdmUoZGVsdGFZLCBkZWx0YVgpe1xyXG4gICAgICAgICB0aGlzLnNldFN0YXRlRnJvbUV2ZW50KHRoaXMuY29tcG9zZU5ld1N0YXRlKGRlbHRhWCwgZGVsdGFZKSk7ICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGhhbmRsZVNjcm9sbGJhclhQb3NpdGlvbkNoYW5nZShwb3NpdGlvbil7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxYVG8ocG9zaXRpb24pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBoYW5kbGVTY3JvbGxiYXJZUG9zaXRpb25DaGFuZ2UocG9zaXRpb24pe1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsWVRvKHBvc2l0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVXaGVlbChlKXtcclxuICAgICAgICBsZXQgZGVsdGFZID0gZS5kZWx0YVk7XHJcbiAgICAgICAgbGV0IGRlbHRhWCA9IGUuZGVsdGFYO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMucHJvcHMuc3dhcFdoZWVsQXhlcyl7XHJcbiAgICAgICAgICAgIFtkZWx0YVksIGRlbHRhWF0gPSBbZGVsdGFYLCBkZWx0YVldO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICAgKiBXaGVlbEV2ZW50LmRlbHRhTW9kZSBjYW4gZGlmZmVyIGJldHdlZW4gYnJvd3NlcnMgYW5kIG11c3QgYmUgbm9ybWFsaXplZFxyXG4gICAgICAgICAqIGUuZGVsdGFNb2RlID09PSAwOiBUaGUgZGVsdGEgdmFsdWVzIGFyZSBzcGVjaWZpZWQgaW4gcGl4ZWxzXHJcbiAgICAgICAgICogZS5kZWx0YU1vZGUgPT09IDE6IFRoZSBkZWx0YSB2YWx1ZXMgYXJlIHNwZWNpZmllZCBpbiBsaW5lc1xyXG4gICAgICAgICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaGVlbEV2ZW50L2RlbHRhTW9kZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGlmIChlLmRlbHRhTW9kZSA9PT0gMSkge1xyXG4gICAgICAgICAgICBkZWx0YVkgPSBkZWx0YVkgKiB0aGlzLmxpbmVIZWlnaHRQeDtcclxuICAgICAgICAgICAgZGVsdGFYID0gZGVsdGFYICogdGhpcy5saW5lSGVpZ2h0UHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkZWx0YVkgPSBkZWx0YVkgKiB0aGlzLnByb3BzLnNwZWVkO1xyXG4gICAgICAgIGRlbHRhWCA9IGRlbHRhWCAqIHRoaXMucHJvcHMuc3BlZWQ7XHJcblxyXG4gICAgICAgIGxldCBuZXdTdGF0ZSA9IHRoaXMuY29tcG9zZU5ld1N0YXRlKC1kZWx0YVgsIC1kZWx0YVkpO1xyXG5cclxuICAgICAgICBpZigobmV3U3RhdGUudG9wUG9zaXRpb24gJiYgdGhpcy5zdGF0ZS50b3BQb3NpdGlvbiAhPT0gbmV3U3RhdGUudG9wUG9zaXRpb24pIHx8XHJcbiAgICAgICAgICAgKG5ld1N0YXRlLmxlZnRQb3NpdGlvbiAmJiB0aGlzLnN0YXRlLmxlZnRQb3NpdGlvbiAhPT0gbmV3U3RhdGUubGVmdFBvc2l0aW9uKSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlRnJvbUV2ZW50KG5ld1N0YXRlLCBldmVudFR5cGVzLndoZWVsKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVXaW5kb3dSZXNpemUoKXtcclxuICAgICAgICBsZXQgbmV3U3RhdGUgPSB0aGlzLmNvbXB1dGVTaXplcygpO1xyXG4gICAgICAgIG5ld1N0YXRlID0gdGhpcy5nZXRNb2RpZmllZFBvc2l0aW9uc0lmTmVlZGVkKG5ld1N0YXRlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlRnJvbUV2ZW50KG5ld1N0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb3NlTmV3U3RhdGUoZGVsdGFYLCBkZWx0YVkpe1xyXG4gICAgICAgIGxldCBuZXdTdGF0ZSA9IHRoaXMuY29tcHV0ZVNpemVzKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5jYW5TY3JvbGxZKG5ld1N0YXRlKSl7XHJcbiAgICAgICAgICAgIG5ld1N0YXRlLnRvcFBvc2l0aW9uID0gdGhpcy5jb21wdXRlVG9wUG9zaXRpb24oZGVsdGFZLCBuZXdTdGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuY2FuU2Nyb2xsWChuZXdTdGF0ZSkpe1xyXG4gICAgICAgICAgICBuZXdTdGF0ZS5sZWZ0UG9zaXRpb24gPSB0aGlzLmNvbXB1dGVMZWZ0UG9zaXRpb24oZGVsdGFYLCBuZXdTdGF0ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3U3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcHV0ZVRvcFBvc2l0aW9uKGRlbHRhWSwgc2l6ZXMpe1xyXG4gICAgICAgIGxldCBuZXdUb3BQb3NpdGlvbiA9IHRoaXMuc3RhdGUudG9wUG9zaXRpb24gLSBkZWx0YVk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubm9ybWFsaXplVG9wUG9zaXRpb24obmV3VG9wUG9zaXRpb24sIHNpemVzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wdXRlTGVmdFBvc2l0aW9uKGRlbHRhWCwgc2l6ZXMpe1xyXG4gICAgICAgIGxldCBuZXdMZWZ0UG9zaXRpb24gPSB0aGlzLnN0YXRlLmxlZnRQb3NpdGlvbiAtIGRlbHRhWDtcclxuICAgICAgICByZXR1cm4gdGhpcy5ub3JtYWxpemVMZWZ0UG9zaXRpb24obmV3TGVmdFBvc2l0aW9uLCBzaXplcyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIG5vcm1hbGl6ZVRvcFBvc2l0aW9uKG5ld1RvcFBvc2l0aW9uLCBzaXplcyl7ICAgIFxyXG4gICAgICAgIGlmKG5ld1RvcFBvc2l0aW9uID4gc2l6ZXMucmVhbEhlaWdodCAtIHNpemVzLmNvbnRhaW5lckhlaWdodCl7XHJcbiAgICAgICAgICAgIG5ld1RvcFBvc2l0aW9uID0gc2l6ZXMucmVhbEhlaWdodCAtIHNpemVzLmNvbnRhaW5lckhlaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYobmV3VG9wUG9zaXRpb24gPCAwKXtcclxuICAgICAgICAgICAgbmV3VG9wUG9zaXRpb24gPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3VG9wUG9zaXRpb247XHJcbiAgICB9XHJcbiAgICBcclxuICAgIG5vcm1hbGl6ZUxlZnRQb3NpdGlvbihuZXdMZWZ0UG9zaXRpb24sIHNpemVzKXtcclxuICAgICAgICBpZihuZXdMZWZ0UG9zaXRpb24gPiBzaXplcy5yZWFsV2lkdGggLSBzaXplcy5jb250YWluZXJXaWR0aCl7XHJcbiAgICAgICAgICAgIG5ld0xlZnRQb3NpdGlvbiA9IHNpemVzLnJlYWxXaWR0aCAtIHNpemVzLmNvbnRhaW5lcldpZHRoO1xyXG4gICAgICAgIH0gZWxzZSBpZihuZXdMZWZ0UG9zaXRpb24gPCAwKXtcclxuICAgICAgICAgICAgbmV3TGVmdFBvc2l0aW9uID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXdMZWZ0UG9zaXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgY29tcHV0ZVNpemVzKCl7XHJcbiAgICAgICAgbGV0IHJlYWxIZWlnaHQgPSB0aGlzLmNvbnRlbnQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgIGxldCBjb250YWluZXJIZWlnaHQgPSB0aGlzLndyYXBwZXIub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgIGxldCByZWFsV2lkdGggPSB0aGlzLmNvbnRlbnQub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgbGV0IGNvbnRhaW5lcldpZHRoID0gdGhpcy53cmFwcGVyLm9mZnNldFdpZHRoO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByZWFsSGVpZ2h0OiByZWFsSGVpZ2h0LFxyXG4gICAgICAgICAgICBjb250YWluZXJIZWlnaHQ6IGNvbnRhaW5lckhlaWdodCxcclxuICAgICAgICAgICAgcmVhbFdpZHRoOiByZWFsV2lkdGgsXHJcbiAgICAgICAgICAgIGNvbnRhaW5lcldpZHRoOiBjb250YWluZXJXaWR0aFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U2l6ZXNUb1N0YXRlKCl7XHJcbiAgICAgICAgbGV0IHNpemVzID0gdGhpcy5jb21wdXRlU2l6ZXMoKTtcclxuICAgICAgICBpZihzaXplcy5yZWFsSGVpZ2h0ICE9PSB0aGlzLnN0YXRlLnJlYWxIZWlnaHQgfHwgc2l6ZXMucmVhbFdpZHRoICE9PSB0aGlzLnN0YXRlLnJlYWxXaWR0aCl7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGVGcm9tRXZlbnQodGhpcy5nZXRNb2RpZmllZFBvc2l0aW9uc0lmTmVlZGVkKHNpemVzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNjcm9sbFRvcCgpe1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsWVRvKDApO1xyXG4gICAgfVxyXG5cclxuICAgIHNjcm9sbEJvdHRvbSgpe1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsWVRvKCh0aGlzLnN0YXRlLnJlYWxIZWlnaHQgLSB0aGlzLnN0YXRlLmNvbnRhaW5lckhlaWdodCkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzY3JvbGxMZWZ0KCl7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxYVG8oMCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2Nyb2xsUmlnaHQoKXtcclxuICAgICAgICB0aGlzLnNjcm9sbFhUbygodGhpcy5zdGF0ZS5yZWFsV2lkdGggLSB0aGlzLnN0YXRlLmNvbnRhaW5lcldpZHRoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2Nyb2xsWVRvKHRvcFBvc2l0aW9uKXtcclxuICAgICAgICBpZih0aGlzLmNhblNjcm9sbFkoKSl7XHJcbiAgICAgICAgICAgIGxldCBwb3NpdGlvbiA9IHRoaXMubm9ybWFsaXplVG9wUG9zaXRpb24odG9wUG9zaXRpb24sIHRoaXMuY29tcHV0ZVNpemVzKCkpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlRnJvbUV2ZW50KHt0b3BQb3NpdGlvbjogcG9zaXRpb259LCBldmVudFR5cGVzLmFwaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzY3JvbGxYVG8obGVmdFBvc2l0aW9uKXtcclxuICAgICAgICBpZih0aGlzLmNhblNjcm9sbFgoKSl7XHJcbiAgICAgICAgICAgIGxldCBwb3NpdGlvbiA9IHRoaXMubm9ybWFsaXplTGVmdFBvc2l0aW9uKGxlZnRQb3NpdGlvbiwgdGhpcy5jb21wdXRlU2l6ZXMoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGVGcm9tRXZlbnQoe2xlZnRQb3NpdGlvbjogcG9zaXRpb259LCBldmVudFR5cGVzLmFwaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNhblNjcm9sbFkoc3RhdGUgPSB0aGlzLnN0YXRlKXtcclxuICAgICAgICBsZXQgc2Nyb2xsYWJsZVkgPSBzdGF0ZS5yZWFsSGVpZ2h0ID4gc3RhdGUuY29udGFpbmVySGVpZ2h0O1xyXG4gICAgICAgIHJldHVybiBzY3JvbGxhYmxlWSAmJiB0aGlzLnByb3BzLnZlcnRpY2FsO1xyXG4gICAgfVxyXG5cclxuICAgIGNhblNjcm9sbFgoc3RhdGUgPSB0aGlzLnN0YXRlKXtcclxuICAgICAgICBsZXQgc2Nyb2xsYWJsZVggPSBzdGF0ZS5yZWFsV2lkdGggPiBzdGF0ZS5jb250YWluZXJXaWR0aDtcclxuICAgICAgICByZXR1cm4gc2Nyb2xsYWJsZVggJiYgdGhpcy5wcm9wcy5ob3Jpem9udGFsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE1vZGlmaWVkUG9zaXRpb25zSWZOZWVkZWQobmV3U3RhdGUpe1xyXG4gICAgICAgIGxldCBib3R0b21Qb3NpdGlvbiA9IG5ld1N0YXRlLnJlYWxIZWlnaHQgLSBuZXdTdGF0ZS5jb250YWluZXJIZWlnaHQ7XHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS50b3BQb3NpdGlvbiA+PSBib3R0b21Qb3NpdGlvbil7XHJcbiAgICAgICAgICAgIG5ld1N0YXRlLnRvcFBvc2l0aW9uID0gdGhpcy5jYW5TY3JvbGxZKG5ld1N0YXRlKSA/IHBvc2l0aXZlT3JaZXJvKGJvdHRvbVBvc2l0aW9uKSA6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcmlnaHRQb3NpdGlvbiA9IG5ld1N0YXRlLnJlYWxXaWR0aCAtIG5ld1N0YXRlLmNvbnRhaW5lcldpZHRoO1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUubGVmdFBvc2l0aW9uID49IHJpZ2h0UG9zaXRpb24pe1xyXG4gICAgICAgICAgICBuZXdTdGF0ZS5sZWZ0UG9zaXRpb24gPSB0aGlzLmNhblNjcm9sbFgobmV3U3RhdGUpID8gcG9zaXRpdmVPclplcm8ocmlnaHRQb3NpdGlvbikgOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ld1N0YXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5TY3JvbGxBcmVhLmNoaWxkQ29udGV4dFR5cGVzID0ge1xyXG4gICAgc2Nyb2xsQXJlYTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxyXG59O1xyXG5cclxuU2Nyb2xsQXJlYS5wcm9wVHlwZXMgPSB7XHJcbiAgICBjbGFzc05hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBzdHlsZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIHNwZWVkOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgY29udGVudENsYXNzTmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGNvbnRlbnRTdHlsZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIHZlcnRpY2FsOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcclxuICAgIHZlcnRpY2FsQ29udGFpbmVyU3R5bGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXHJcbiAgICB2ZXJ0aWNhbFNjcm9sbGJhclN0eWxlOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgaG9yaXpvbnRhbDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBob3Jpem9udGFsQ29udGFpbmVyU3R5bGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBob3Jpem9udGFsU2Nyb2xsYmFyU3R5bGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBvblNjcm9sbDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBjb250ZW50V2luZG93OiBSZWFjdC5Qcm9wVHlwZXMuYW55LFxyXG4gICAgb3duZXJEb2N1bWVudDogUmVhY3QuUHJvcFR5cGVzLmFueSxcclxuICAgIHNtb290aFNjcm9sbGluZzogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBtaW5TY3JvbGxTaXplOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgc3dhcFdoZWVsQXhlczogUmVhY3QuUHJvcFR5cGVzLmJvb2xcclxufTtcclxuXHJcblNjcm9sbEFyZWEuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgc3BlZWQ6IDEsXHJcbiAgICB2ZXJ0aWNhbDogdHJ1ZSxcclxuICAgIGhvcml6b250YWw6IHRydWUsXHJcbiAgICBzbW9vdGhTY3JvbGxpbmc6IGZhbHNlLFxyXG4gICAgc3dhcFdoZWVsQXhlczogZmFsc2UsXHJcbiAgICBjb250ZW50V2luZG93OiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgPyB3aW5kb3cgOiB1bmRlZmluZWQsXHJcbiAgICBvd25lckRvY3VtZW50OiAodHlwZW9mIGRvY3VtZW50ID09PSBcIm9iamVjdFwiKSA/IGRvY3VtZW50IDogdW5kZWZpbmVkXHJcbn07XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL1Njcm9sbEFyZWEuanN4XG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfT2JqZWN0JGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvclwiKVtcImRlZmF1bHRcIl07XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gZ2V0KF94LCBfeDIsIF94Mykge1xuICB2YXIgX2FnYWluID0gdHJ1ZTtcblxuICBfZnVuY3Rpb246IHdoaWxlIChfYWdhaW4pIHtcbiAgICB2YXIgb2JqZWN0ID0gX3gsXG4gICAgICAgIHByb3BlcnR5ID0gX3gyLFxuICAgICAgICByZWNlaXZlciA9IF94MztcbiAgICBfYWdhaW4gPSBmYWxzZTtcbiAgICBpZiAob2JqZWN0ID09PSBudWxsKSBvYmplY3QgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbiAgICB2YXIgZGVzYyA9IF9PYmplY3QkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHkpO1xuXG4gICAgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHBhcmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpO1xuXG4gICAgICBpZiAocGFyZW50ID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfeCA9IHBhcmVudDtcbiAgICAgICAgX3gyID0gcHJvcGVydHk7XG4gICAgICAgIF94MyA9IHJlY2VpdmVyO1xuICAgICAgICBfYWdhaW4gPSB0cnVlO1xuICAgICAgICBkZXNjID0gcGFyZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICBjb250aW51ZSBfZnVuY3Rpb247XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChcInZhbHVlXCIgaW4gZGVzYykge1xuICAgICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBkZXNjLmdldDtcblxuICAgICAgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9nZXQuanNcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyICQgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzLyQnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpe1xuICByZXR1cm4gJC5nZXREZXNjKGl0LCBrZXkpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qc1xuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciAkT2JqZWN0ID0gT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNyZWF0ZTogICAgICRPYmplY3QuY3JlYXRlLFxuICBnZXRQcm90bzogICAkT2JqZWN0LmdldFByb3RvdHlwZU9mLFxuICBpc0VudW06ICAgICB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZSxcbiAgZ2V0RGVzYzogICAgJE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIHNldERlc2M6ICAgICRPYmplY3QuZGVmaW5lUHJvcGVydHksXG4gIHNldERlc2NzOiAgICRPYmplY3QuZGVmaW5lUHJvcGVydGllcyxcbiAgZ2V0S2V5czogICAgJE9iamVjdC5rZXlzLFxuICBnZXROYW1lczogICAkT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMsXG4gIGdldFN5bWJvbHM6ICRPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzLFxuICBlYWNoOiAgICAgICBbXS5mb3JFYWNoXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuanNcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi8kLnRvLWlvYmplY3QnKTtcblxucmVxdWlyZSgnLi8kLm9iamVjdC1zYXAnKSgnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJywgZnVuY3Rpb24oJGdldE93blByb3BlcnR5RGVzY3JpcHRvcil7XG4gIHJldHVybiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSl7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodG9JT2JqZWN0KGl0KSwga2V5KTtcbiAgfTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vJC5pb2JqZWN0JylcbiAgLCBkZWZpbmVkID0gcmVxdWlyZSgnLi8kLmRlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQudG8taW9iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi8kLmNvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmlvYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY29mLmpzXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmRlZmluZWQuanNcbiAqKiBtb2R1bGUgaWQgPSAxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gbW9zdCBPYmplY3QgbWV0aG9kcyBieSBFUzYgc2hvdWxkIGFjY2VwdCBwcmltaXRpdmVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIGNvcmUgICAgPSByZXF1aXJlKCcuLyQuY29yZScpXG4gICwgZmFpbHMgICA9IHJlcXVpcmUoJy4vJC5mYWlscycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVksIGV4ZWMpe1xuICB2YXIgZm4gID0gKGNvcmUuT2JqZWN0IHx8IHt9KVtLRVldIHx8IE9iamVjdFtLRVldXG4gICAgLCBleHAgPSB7fTtcbiAgZXhwW0tFWV0gPSBleGVjKGZuKTtcbiAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbigpeyBmbigxKTsgfSksICdPYmplY3QnLCBleHApO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLm9iamVjdC1zYXAuanNcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vJC5jb3JlJylcbiAgLCBjdHggICAgICAgPSByZXF1aXJlKCcuLyQuY3R4JylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgSVNfV1JBUCAgID0gdHlwZSAmICRleHBvcnQuV1xuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGtleSwgb3duLCBvdXQ7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYga2V5IGluIHRhcmdldDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbihDKXtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24ocGFyYW0pe1xuICAgICAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIEMgPyBuZXcgQyhwYXJhbSkgOiBDKHBhcmFtKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgaWYoSVNfUFJPVE8pKGV4cG9ydHNbUFJPVE9UWVBFXSB8fCAoZXhwb3J0c1tQUk9UT1RZUEVdID0ge30pKVtrZXldID0gb3V0O1xuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7IC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAvLyB3cmFwXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5leHBvcnQuanNcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZ2xvYmFsLmpzXG4gKiogbW9kdWxlIGlkID0gMTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzEuMi42J307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmNvcmUuanNcbiAqKiBtb2R1bGUgaWQgPSAxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi8kLmEtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG4gIHN3aXRjaChsZW5ndGgpe1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jdHguanNcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5hLWZ1bmN0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gMTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZmFpbHMuanNcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfT2JqZWN0JGNyZWF0ZSA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2NyZWF0ZVwiKVtcImRlZmF1bHRcIl07XG5cbnZhciBfT2JqZWN0JHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZlwiKVtcImRlZmF1bHRcIl07XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IF9PYmplY3QkY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBfT2JqZWN0JHNldFByb3RvdHlwZU9mID8gX09iamVjdCRzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanNcbiAqKiBtb2R1bGUgaWQgPSAxOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGVcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2NyZWF0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGUoUCwgRCl7XG4gIHJldHVybiAkLmNyZWF0ZShQLCBEKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGUuanNcbiAqKiBtb2R1bGUgaWQgPSAyMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzXG4gKiogbW9kdWxlIGlkID0gMjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJC5jb3JlJykuT2JqZWN0LnNldFByb3RvdHlwZU9mO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qc1xuICoqIG1vZHVsZSBpZCA9IDIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAxOS4xLjMuMTkgT2JqZWN0LnNldFByb3RvdHlwZU9mKE8sIHByb3RvKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0Jyk7XG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtzZXRQcm90b3R5cGVPZjogcmVxdWlyZSgnLi8kLnNldC1wcm90bycpLnNldH0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZi5qc1xuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29yayB3aXRoIG51bGwgcHJvdG8gb2JqZWN0cy5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG52YXIgZ2V0RGVzYyAgPSByZXF1aXJlKCcuLyQnKS5nZXREZXNjXG4gICwgaXNPYmplY3QgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0JylcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKTtcbnZhciBjaGVjayA9IGZ1bmN0aW9uKE8sIHByb3RvKXtcbiAgYW5PYmplY3QoTyk7XG4gIGlmKCFpc09iamVjdChwcm90bykgJiYgcHJvdG8gIT09IG51bGwpdGhyb3cgVHlwZUVycm9yKHByb3RvICsgXCI6IGNhbid0IHNldCBhcyBwcm90b3R5cGUhXCIpO1xufTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgZnVuY3Rpb24odGVzdCwgYnVnZ3ksIHNldCl7XG4gICAgICB0cnkge1xuICAgICAgICBzZXQgPSByZXF1aXJlKCcuLyQuY3R4JykoRnVuY3Rpb24uY2FsbCwgZ2V0RGVzYyhPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0LCAyKTtcbiAgICAgICAgc2V0KHRlc3QsIFtdKTtcbiAgICAgICAgYnVnZ3kgPSAhKHRlc3QgaW5zdGFuY2VvZiBBcnJheSk7XG4gICAgICB9IGNhdGNoKGUpeyBidWdneSA9IHRydWU7IH1cbiAgICAgIHJldHVybiBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZihPLCBwcm90byl7XG4gICAgICAgIGNoZWNrKE8sIHByb3RvKTtcbiAgICAgICAgaWYoYnVnZ3kpTy5fX3Byb3RvX18gPSBwcm90bztcbiAgICAgICAgZWxzZSBzZXQoTywgcHJvdG8pO1xuICAgICAgICByZXR1cm4gTztcbiAgICAgIH07XG4gICAgfSh7fSwgZmFsc2UpIDogdW5kZWZpbmVkKSxcbiAgY2hlY2s6IGNoZWNrXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuc2V0LXByb3RvLmpzXG4gKiogbW9kdWxlIGlkID0gMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmlzLW9iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5hbi1vYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfT2JqZWN0JGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpW1wiZGVmYXVsdFwiXTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcblxuICAgICAgX09iamVjdCRkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSkoKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlLWNsYXNzLmpzXG4gKiogbW9kdWxlIGlkID0gMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanNcbiAqKiBtb2R1bGUgaWQgPSAyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyICQgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzLyQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyl7XG4gIHJldHVybiAkLnNldERlc2MoaXQsIGtleSwgZGVzYyk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzXG4gKiogbW9kdWxlIGlkID0gMzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzcy1jYWxsLWNoZWNrLmpzXG4gKiogbW9kdWxlIGlkID0gMzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX09iamVjdCRhc3NpZ24gPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ25cIilbXCJkZWZhdWx0XCJdO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9PYmplY3QkYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qc1xuICoqIG1vZHVsZSBpZCA9IDMyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnblwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzXG4gKiogbW9kdWxlIGlkID0gMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kLmNvcmUnKS5PYmplY3QuYXNzaWduO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzXG4gKiogbW9kdWxlIGlkID0gMzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7YXNzaWduOiByZXF1aXJlKCcuLyQub2JqZWN0LWFzc2lnbicpfSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanNcbiAqKiBtb2R1bGUgaWQgPSAzNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxudmFyICQgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCB0b09iamVjdCA9IHJlcXVpcmUoJy4vJC50by1vYmplY3QnKVxuICAsIElPYmplY3QgID0gcmVxdWlyZSgnLi8kLmlvYmplY3QnKTtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHZhciBhID0gT2JqZWN0LmFzc2lnblxuICAgICwgQSA9IHt9XG4gICAgLCBCID0ge31cbiAgICAsIFMgPSBTeW1ib2woKVxuICAgICwgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uKGspeyBCW2tdID0gazsgfSk7XG4gIHJldHVybiBhKHt9LCBBKVtTXSAhPSA3IHx8IE9iamVjdC5rZXlzKGEoe30sIEIpKS5qb2luKCcnKSAhPSBLO1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUICAgICA9IHRvT2JqZWN0KHRhcmdldClcbiAgICAsICQkICAgID0gYXJndW1lbnRzXG4gICAgLCAkJGxlbiA9ICQkLmxlbmd0aFxuICAgICwgaW5kZXggPSAxXG4gICAgLCBnZXRLZXlzICAgID0gJC5nZXRLZXlzXG4gICAgLCBnZXRTeW1ib2xzID0gJC5nZXRTeW1ib2xzXG4gICAgLCBpc0VudW0gICAgID0gJC5pc0VudW07XG4gIHdoaWxlKCQkbGVuID4gaW5kZXgpe1xuICAgIHZhciBTICAgICAgPSBJT2JqZWN0KCQkW2luZGV4KytdKVxuICAgICAgLCBrZXlzICAgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpXG4gICAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgICAsIGogICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKGxlbmd0aCA+IGopaWYoaXNFbnVtLmNhbGwoUywga2V5ID0ga2V5c1tqKytdKSlUW2tleV0gPSBTW2tleV07XG4gIH1cbiAgcmV0dXJuIFQ7XG59IDogT2JqZWN0LmFzc2lnbjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLm9iamVjdC1hc3NpZ24uanNcbiAqKiBtb2R1bGUgaWQgPSAzNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuLyQuZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnRvLW9iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDM3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMzhfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0XCIsXCJjb21tb25qczJcIjpcInJlYWN0XCIsXCJjb21tb25qc1wiOlwicmVhY3RcIixcImFtZFwiOlwicmVhY3RcIn1cbiAqKiBtb2R1bGUgaWQgPSAzOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtNb3Rpb24sIHNwcmluZ30gZnJvbSAncmVhY3QtbW90aW9uJztcclxuaW1wb3J0IHttb2RpZnlPYmpWYWx1ZXN9IGZyb20gJy4vdXRpbHMnO1xyXG5cclxuY2xhc3MgU2Nyb2xsQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgbGV0IG5ld1N0YXRlID0gdGhpcy5jYWxjdWxhdGVTdGF0ZShwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IG5ld1N0YXRlLnBvc2l0aW9uLFxyXG4gICAgICAgICAgICBzY3JvbGxTaXplOiBuZXdTdGF0ZS5zY3JvbGxTaXplLFxyXG4gICAgICAgICAgICBpc0RyYWdnaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgbGFzdENsaWVudFBvc2l0aW9uOiAwXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihwcm9wcy50eXBlID09PSAndmVydGljYWwnKXtcclxuICAgICAgICAgICAgdGhpcy5iaW5kZWRIYW5kbGVNb3VzZU1vdmUgPSB0aGlzLmhhbmRsZU1vdXNlTW92ZUZvclZlcnRpY2FsLmJpbmQodGhpcyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5iaW5kZWRIYW5kbGVNb3VzZU1vdmUgPSB0aGlzLmhhbmRsZU1vdXNlTW92ZUZvckhvcml6b250YWwuYmluZCh0aGlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYmluZGVkSGFuZGxlTW91c2VVcCA9IHRoaXMuaGFuZGxlTW91c2VVcC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub3duZXJEb2N1bWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm93bmVyRG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLmJpbmRlZEhhbmRsZU1vdXNlTW92ZSk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub3duZXJEb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLmJpbmRlZEhhbmRsZU1vdXNlVXApO1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5jYWxjdWxhdGVTdGF0ZShuZXh0UHJvcHMpKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm93bmVyRG9jdW1lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vd25lckRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5iaW5kZWRIYW5kbGVNb3VzZU1vdmUpO1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm93bmVyRG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy5iaW5kZWRIYW5kbGVNb3VzZVVwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2FsY3VsYXRlRnJhY3Rpb25hbFBvc2l0aW9uKHJlYWxDb250ZW50U2l6ZSwgY29udGFpbmVyU2l6ZSwgY29udGVudFBvc2l0aW9uKXtcclxuICAgICAgICBsZXQgcmVsYXRpdmVTaXplID0gcmVhbENvbnRlbnRTaXplIC0gY29udGFpbmVyU2l6ZTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gMSAtICgocmVsYXRpdmVTaXplIC0gY29udGVudFBvc2l0aW9uKSAvIHJlbGF0aXZlU2l6ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsY3VsYXRlU3RhdGUocHJvcHMpe1xyXG4gICAgICAgIGxldCBmcmFjdGlvbmFsUG9zaXRpb24gPSB0aGlzLmNhbGN1bGF0ZUZyYWN0aW9uYWxQb3NpdGlvbihwcm9wcy5yZWFsU2l6ZSwgcHJvcHMuY29udGFpbmVyU2l6ZSwgcHJvcHMucG9zaXRpb24pOyBcclxuICAgICAgICBsZXQgcHJvcG9ydGlvbmFsVG9QYWdlU2Nyb2xsU2l6ZSA9IHByb3BzLmNvbnRhaW5lclNpemUgKiBwcm9wcy5jb250YWluZXJTaXplIC8gcHJvcHMucmVhbFNpemU7XHJcbiAgICAgICAgbGV0IHNjcm9sbFNpemUgPSBwcm9wb3J0aW9uYWxUb1BhZ2VTY3JvbGxTaXplIDwgcHJvcHMubWluU2Nyb2xsU2l6ZSA/IHByb3BzLm1pblNjcm9sbFNpemUgOiBwcm9wb3J0aW9uYWxUb1BhZ2VTY3JvbGxTaXplO1xyXG5cclxuICAgICAgICBsZXQgc2Nyb2xsUG9zaXRpb24gPSAocHJvcHMuY29udGFpbmVyU2l6ZSAtIHNjcm9sbFNpemUpICogZnJhY3Rpb25hbFBvc2l0aW9uOyAgICBcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzY3JvbGxTaXplOiBzY3JvbGxTaXplLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogTWF0aC5yb3VuZChzY3JvbGxQb3NpdGlvbilcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGxldCB7c21vb3RoU2Nyb2xsaW5nLCBpc0RyYWdnaW5nLCB0eXBlLCBzY3JvbGxiYXJTdHlsZSwgY29udGFpbmVyU3R5bGV9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBsZXQgaXNWb3JpemlvbnRhbCA9IHR5cGUgPT09ICdob3Jpem9udGFsJztcclxuICAgICAgICBsZXQgaXNWZXJ0aWNhbCA9IHR5cGUgPT09ICd2ZXJ0aWNhbCc7XHJcbiAgICAgICAgbGV0IHNjcm9sbFN0eWxlcyA9IHRoaXMuY3JlYXRlU2Nyb2xsU3R5bGVzKCk7XHJcbiAgICAgICAgbGV0IHNwcmluZ2lmaWVkU2Nyb2xsU3R5bGVzID0gc21vb3RoU2Nyb2xsaW5nID8gbW9kaWZ5T2JqVmFsdWVzKHNjcm9sbFN0eWxlcywgeCA9PiBzcHJpbmcoeCkpIDogc2Nyb2xsU3R5bGVzO1xyXG5cclxuICAgICAgICBsZXQgc2Nyb2xsYmFyQ2xhc3NlcyA9IGBzY3JvbGxiYXItY29udGFpbmVyICR7aXNEcmFnZ2luZyA/ICdhY3RpdmUnIDogJyd9ICR7aXNWb3JpemlvbnRhbCA/ICdob3Jpem9udGFsJyA6ICcnfSAke2lzVmVydGljYWwgPyAndmVydGljYWwnIDogJyd9YDsgXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxNb3Rpb24gc3R5bGU9e3suLi5zY3JvbGxiYXJTdHlsZSwgLi4uc3ByaW5naWZpZWRTY3JvbGxTdHlsZXN9fT5cclxuICAgICAgICAgICAgICAgIHsgc3R5bGUgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Njcm9sbGJhckNsYXNzZXN9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17Y29udGFpbmVyU3R5bGV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5oYW5kbGVTY3JvbGxCYXJDb250YWluZXJDbGljay5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9eyB4ID0+IHsgdGhpcy5zY3JvbGxiYXJDb250YWluZXIgPSB4fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcm9sbGJhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5oYW5kbGVNb3VzZURvd24uYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvTW90aW9uPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGhhbmRsZVNjcm9sbEJhckNvbnRhaW5lckNsaWNrKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7ICAgICAgICBcclxuICAgICAgICBsZXQgbXVsdGlwbGllciA9IHRoaXMuY29tcHV0ZU11bHRpcGxpZXIoKTtcclxuICAgICAgICBsZXQgY2xpZW50UG9zaXRpb24gPSB0aGlzLmlzVmVydGljYWwoKSA/IGUuY2xpZW50WSA6IGUuY2xpZW50WDtcclxuICAgICAgICBsZXQgeyB0b3AsIGxlZnQgfSA9IHRoaXMuc2Nyb2xsYmFyQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIGxldCBjbGllbnRTY3JvbGxQb3NpdGlvbiA9IHRoaXMuaXNWZXJ0aWNhbCgpID8gdG9wIDogbGVmdDsgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBwb3NpdGlvbiA9IGNsaWVudFBvc2l0aW9uIC0gY2xpZW50U2Nyb2xsUG9zaXRpb247XHJcbiAgICAgICAgbGV0IHByb3BvcnRpb25hbFRvUGFnZVNjcm9sbFNpemUgPSB0aGlzLnByb3BzLmNvbnRhaW5lclNpemUgKiB0aGlzLnByb3BzLmNvbnRhaW5lclNpemUgLyB0aGlzLnByb3BzLnJlYWxTaXplO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzRHJhZ2dpbmc6IHRydWUsIGxhc3RDbGllbnRQb3NpdGlvbjogY2xpZW50UG9zaXRpb24gfSk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vblBvc2l0aW9uQ2hhbmdlKChwb3NpdGlvbiAtIHByb3BvcnRpb25hbFRvUGFnZVNjcm9sbFNpemUgLyAyKSAvIG11bHRpcGxpZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZU1vdXNlTW92ZUZvckhvcml6b250YWwoZSl7XHJcbiAgICAgICAgbGV0IG11bHRpcGxpZXIgPSB0aGlzLmNvbXB1dGVNdWx0aXBsaWVyKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5pc0RyYWdnaW5nKXtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBsZXQgZGVsdGFYID0gdGhpcy5zdGF0ZS5sYXN0Q2xpZW50UG9zaXRpb24gLSBlLmNsaWVudFg7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsYXN0Q2xpZW50UG9zaXRpb246IGUuY2xpZW50WCB9KTtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbk1vdmUoMCwgZGVsdGFYIC8gbXVsdGlwbGllcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZU1vdXNlTW92ZUZvclZlcnRpY2FsKGUpe1xyXG4gICAgICAgIGxldCBtdWx0aXBsaWVyID0gdGhpcy5jb21wdXRlTXVsdGlwbGllcigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuaXNEcmFnZ2luZyl7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgbGV0IGRlbHRhWSA9IHRoaXMuc3RhdGUubGFzdENsaWVudFBvc2l0aW9uIC0gZS5jbGllbnRZO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbGFzdENsaWVudFBvc2l0aW9uOiBlLmNsaWVudFkgfSk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25Nb3ZlKGRlbHRhWSAvIG11bHRpcGxpZXIsIDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVNb3VzZURvd24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgbGV0IGxhc3RDbGllbnRQb3NpdGlvbiA9IHRoaXMuaXNWZXJ0aWNhbCgpID8gZS5jbGllbnRZOiBlLmNsaWVudFg7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNEcmFnZ2luZzogdHJ1ZSwgbGFzdENsaWVudFBvc2l0aW9uOiBsYXN0Q2xpZW50UG9zaXRpb24gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlTW91c2VVcChlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNEcmFnZ2luZzogZmFsc2UgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlU2Nyb2xsU3R5bGVzKCl7XHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy50eXBlID09PSAndmVydGljYWwnKXtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogdGhpcy5zdGF0ZS5zY3JvbGxTaXplLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wOiB0aGlzLnN0YXRlLnBvc2l0aW9uXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLnN0YXRlLnNjcm9sbFNpemUsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiB0aGlzLnN0YXRlLnBvc2l0aW9uXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb21wdXRlTXVsdGlwbGllcigpe1xyXG4gICAgICAgIHJldHVybiAodGhpcy5wcm9wcy5jb250YWluZXJTaXplKSAvIHRoaXMucHJvcHMucmVhbFNpemU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlzVmVydGljYWwoKXtcclxuICAgICAgIHJldHVybiB0aGlzLnByb3BzLnR5cGUgPT09ICd2ZXJ0aWNhbCc7XHJcbiAgICB9XHJcbn1cclxuXHJcblNjcm9sbEJhci5wcm9wVHlwZXMgPSB7XHJcbiAgICBvbk1vdmU6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxyXG4gICAgb25Qb3NpdGlvbkNoYW5nZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICByZWFsU2l6ZTogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcclxuICAgIGNvbnRhaW5lclNpemU6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBwb3NpdGlvbjogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcclxuICAgIGNvbnRhaW5lclN0eWxlOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgc2Nyb2xsYmFyU3R5bGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXHJcbiAgICB0eXBlOiBSZWFjdC5Qcm9wVHlwZXMub25lT2YoWyd2ZXJ0aWNhbCcsICdob3Jpem9udGFsJ10pLFxyXG4gICAgb3duZXJEb2N1bWVudDogUmVhY3QuUHJvcFR5cGVzLmFueSxcclxuICAgIHNtb290aFNjcm9sbGluZzogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBtaW5TY3JvbGxTaXplOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyXHJcbn07XHJcblxyXG5TY3JvbGxCYXIuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgdHlwZSA6ICd2ZXJ0aWNhbCcsXHJcbiAgICBzbW9vdGhTY3JvbGxpbmc6IGZhbHNlXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFNjcm9sbEJhcjtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvU2Nyb2xsYmFyLmpzeFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY29tcG9uZW50czIgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMnKTtcblxudmFyIF9jb21wb25lbnRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBvbmVudHMyKTtcblxudmFyIF9yZW9yZGVyS2V5cyA9IHJlcXVpcmUoJy4vcmVvcmRlcktleXMnKTtcblxudmFyIF9yZW9yZGVyS2V5czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZW9yZGVyS2V5cyk7XG5cbnZhciBfY29tcG9uZW50cyA9IF9jb21wb25lbnRzM1snZGVmYXVsdCddKF9yZWFjdDJbJ2RlZmF1bHQnXSk7XG5cbnZhciBTcHJpbmcgPSBfY29tcG9uZW50cy5TcHJpbmc7XG52YXIgVHJhbnNpdGlvblNwcmluZyA9IF9jb21wb25lbnRzLlRyYW5zaXRpb25TcHJpbmc7XG52YXIgTW90aW9uID0gX2NvbXBvbmVudHMuTW90aW9uO1xudmFyIFN0YWdnZXJlZE1vdGlvbiA9IF9jb21wb25lbnRzLlN0YWdnZXJlZE1vdGlvbjtcbnZhciBUcmFuc2l0aW9uTW90aW9uID0gX2NvbXBvbmVudHMuVHJhbnNpdGlvbk1vdGlvbjtcbmV4cG9ydHMuU3ByaW5nID0gU3ByaW5nO1xuZXhwb3J0cy5UcmFuc2l0aW9uU3ByaW5nID0gVHJhbnNpdGlvblNwcmluZztcbmV4cG9ydHMuTW90aW9uID0gTW90aW9uO1xuZXhwb3J0cy5TdGFnZ2VyZWRNb3Rpb24gPSBTdGFnZ2VyZWRNb3Rpb247XG5leHBvcnRzLlRyYW5zaXRpb25Nb3Rpb24gPSBUcmFuc2l0aW9uTW90aW9uO1xuXG52YXIgX3NwcmluZzIgPSByZXF1aXJlKCcuL3NwcmluZycpO1xuXG52YXIgX3NwcmluZzMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zcHJpbmcyKTtcblxuZXhwb3J0cy5zcHJpbmcgPSBfc3ByaW5nM1snZGVmYXVsdCddO1xuXG52YXIgX3ByZXNldHMyID0gcmVxdWlyZSgnLi9wcmVzZXRzJyk7XG5cbnZhciBfcHJlc2V0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVzZXRzMik7XG5cbmV4cG9ydHMucHJlc2V0cyA9IF9wcmVzZXRzM1snZGVmYXVsdCddO1xudmFyIHV0aWxzID0ge1xuICByZW9yZGVyS2V5czogX3Jlb3JkZXJLZXlzMlsnZGVmYXVsdCddXG59O1xuZXhwb3J0cy51dGlscyA9IHV0aWxzO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LW1vdGlvbi9saWIvcmVhY3QtbW90aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gNDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gY29tcG9uZW50cztcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX25vVmVsb2NpdHkgPSByZXF1aXJlKCcuL25vVmVsb2NpdHknKTtcblxudmFyIF9ub1ZlbG9jaXR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX25vVmVsb2NpdHkpO1xuXG52YXIgX2hhc1JlYWNoZWRTdHlsZSA9IHJlcXVpcmUoJy4vaGFzUmVhY2hlZFN0eWxlJyk7XG5cbnZhciBfaGFzUmVhY2hlZFN0eWxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hhc1JlYWNoZWRTdHlsZSk7XG5cbnZhciBfbWVyZ2VEaWZmID0gcmVxdWlyZSgnLi9tZXJnZURpZmYnKTtcblxudmFyIF9tZXJnZURpZmYyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWVyZ2VEaWZmKTtcblxudmFyIF9hbmltYXRpb25Mb29wID0gcmVxdWlyZSgnLi9hbmltYXRpb25Mb29wJyk7XG5cbnZhciBfYW5pbWF0aW9uTG9vcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hbmltYXRpb25Mb29wKTtcblxudmFyIF96ZXJvID0gcmVxdWlyZSgnLi96ZXJvJyk7XG5cbnZhciBfemVybzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF96ZXJvKTtcblxudmFyIF91cGRhdGVUcmVlID0gcmVxdWlyZSgnLi91cGRhdGVUcmVlJyk7XG5cbnZhciBfZGVwcmVjYXRlZFNwcmluZ3MyID0gcmVxdWlyZSgnLi9kZXByZWNhdGVkU3ByaW5ncycpO1xuXG52YXIgX2RlcHJlY2F0ZWRTcHJpbmdzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlcHJlY2F0ZWRTcHJpbmdzMik7XG5cbnZhciBfc3RyaXBTdHlsZSA9IHJlcXVpcmUoJy4vc3RyaXBTdHlsZScpO1xuXG52YXIgX3N0cmlwU3R5bGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RyaXBTdHlsZSk7XG5cbnZhciBzdGFydEFuaW1hdGlvbiA9IF9hbmltYXRpb25Mb29wMlsnZGVmYXVsdCddKCk7XG5cbmZ1bmN0aW9uIG1hcE9iamVjdChmLCBvYmopIHtcbiAgdmFyIHJldCA9IHt9O1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIHJldFtrZXldID0gZihvYmpba2V5XSwga2V5KTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBldmVyeU9iaihmLCBvYmopIHtcbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmICghb2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoIWYob2JqW2tleV0sIGtleSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudHMoUmVhY3QpIHtcbiAgdmFyIFByb3BUeXBlcyA9IFJlYWN0LlByb3BUeXBlcztcblxuICB2YXIgTW90aW9uID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIGRpc3BsYXlOYW1lOiAnTW90aW9uJyxcblxuICAgIHByb3BUeXBlczoge1xuICAgICAgLy8gVE9PRDogd2FybiBhZ2FpbnN0IHB1dHRpbmcgYSBjb25maWcgaW4gaGVyZVxuICAgICAgZGVmYXVsdFZhbHVlOiBmdW5jdGlvbiBkZWZhdWx0VmFsdWUocHJvcCwgcHJvcE5hbWUpIHtcbiAgICAgICAgaWYgKHByb3BbcHJvcE5hbWVdKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignU3ByaW5nXFwncyBgZGVmYXVsdFZhbHVlYCBoYXMgYmVlbiBjaGFuZ2VkIHRvIGBkZWZhdWx0U3R5bGVgLiAnICsgJ0l0cyBmb3JtYXQgcmVjZWl2ZWQgYSBmZXcgKGVhc3kgdG8gdXBkYXRlISkgY2hhbmdlcyBhcyB3ZWxsLicpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZW5kVmFsdWU6IGZ1bmN0aW9uIGVuZFZhbHVlKHByb3AsIHByb3BOYW1lKSB7XG4gICAgICAgIGlmIChwcm9wW3Byb3BOYW1lXSkge1xuICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ1NwcmluZ1xcJ3MgYGVuZFZhbHVlYCBoYXMgYmVlbiBjaGFuZ2VkIHRvIGBzdHlsZWAuIEl0cyBmb3JtYXQgJyArICdyZWNlaXZlZCBhIGZldyAoZWFzeSB0byB1cGRhdGUhKSBjaGFuZ2VzIGFzIHdlbGwuJyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBkZWZhdWx0U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgY2hpbGRyZW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgICB9LFxuXG4gICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICAgIHZhciBkZWZhdWx0U3R5bGUgPSBfcHJvcHMuZGVmYXVsdFN0eWxlO1xuICAgICAgdmFyIHN0eWxlID0gX3Byb3BzLnN0eWxlO1xuXG4gICAgICB2YXIgY3VycmVudFN0eWxlID0gZGVmYXVsdFN0eWxlIHx8IHN0eWxlO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY3VycmVudFN0eWxlOiBjdXJyZW50U3R5bGUsXG4gICAgICAgIGN1cnJlbnRWZWxvY2l0eTogbWFwT2JqZWN0KF96ZXJvMlsnZGVmYXVsdCddLCBjdXJyZW50U3R5bGUpXG4gICAgICB9O1xuICAgIH0sXG5cbiAgICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLnN0YXJ0QW5pbWF0aW5nKCk7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoKSB7XG4gICAgICB0aGlzLnN0YXJ0QW5pbWF0aW5nKCk7XG4gICAgfSxcblxuICAgIGFuaW1hdGlvblN0ZXA6IGZ1bmN0aW9uIGFuaW1hdGlvblN0ZXAodGltZXN0ZXAsIHN0YXRlKSB7XG4gICAgICB2YXIgY3VycmVudFN0eWxlID0gc3RhdGUuY3VycmVudFN0eWxlO1xuICAgICAgdmFyIGN1cnJlbnRWZWxvY2l0eSA9IHN0YXRlLmN1cnJlbnRWZWxvY2l0eTtcbiAgICAgIHZhciBzdHlsZSA9IHRoaXMucHJvcHMuc3R5bGU7XG5cbiAgICAgIHZhciBuZXdDdXJyZW50U3R5bGUgPSBfdXBkYXRlVHJlZS51cGRhdGVDdXJyZW50U3R5bGUodGltZXN0ZXAsIGN1cnJlbnRTdHlsZSwgY3VycmVudFZlbG9jaXR5LCBzdHlsZSk7XG4gICAgICB2YXIgbmV3Q3VycmVudFZlbG9jaXR5ID0gX3VwZGF0ZVRyZWUudXBkYXRlQ3VycmVudFZlbG9jaXR5KHRpbWVzdGVwLCBjdXJyZW50U3R5bGUsIGN1cnJlbnRWZWxvY2l0eSwgc3R5bGUpO1xuXG4gICAgICAvLyBUT09EOiB0aGlzIGlzbid0IG5lY2Vzc2FyeSBhbnltb3JlLiBJdCB3YXMgdXNlZCBvbmx5IGFnYWluc3QgZW5kVmFsdWUgZnVuY1xuICAgICAgaWYgKF9ub1ZlbG9jaXR5MlsnZGVmYXVsdCddKGN1cnJlbnRWZWxvY2l0eSwgbmV3Q3VycmVudFN0eWxlKSAmJiBfbm9WZWxvY2l0eTJbJ2RlZmF1bHQnXShuZXdDdXJyZW50VmVsb2NpdHksIG5ld0N1cnJlbnRTdHlsZSkpIHtcbiAgICAgICAgLy8gY2hlY2sgZXhwbGFuYXRpb24gaW4gYE1vdGlvbi5hbmltYXRpb25SZW5kZXJgXG4gICAgICAgIHRoaXMuc3RvcEFuaW1hdGlvbigpOyAvLyBOYXN0eSBzaWRlIGVmZmVjdHMuLi4uXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGN1cnJlbnRTdHlsZTogbmV3Q3VycmVudFN0eWxlLFxuICAgICAgICBjdXJyZW50VmVsb2NpdHk6IG5ld0N1cnJlbnRWZWxvY2l0eVxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgc3RvcEFuaW1hdGlvbjogbnVsbCxcblxuICAgIC8vIHVzZWQgaW4gYW5pbWF0aW9uUmVuZGVyXG4gICAgaGFzVW5tb3VudGVkOiBmYWxzZSxcblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMuc3RvcEFuaW1hdGlvbigpO1xuICAgICAgdGhpcy5oYXNVbm1vdW50ZWQgPSB0cnVlO1xuICAgIH0sXG5cbiAgICBzdGFydEFuaW1hdGluZzogZnVuY3Rpb24gc3RhcnRBbmltYXRpbmcoKSB7XG4gICAgICAvLyBJcyBzbWFydCBlbm91Z2ggdG8gbm90IHN0YXJ0IGl0IHR3aWNlXG4gICAgICB0aGlzLnN0b3BBbmltYXRpb24gPSBzdGFydEFuaW1hdGlvbih0aGlzLnN0YXRlLCB0aGlzLmFuaW1hdGlvblN0ZXAsIHRoaXMuYW5pbWF0aW9uUmVuZGVyKTtcbiAgICB9LFxuXG4gICAgYW5pbWF0aW9uUmVuZGVyOiBmdW5jdGlvbiBhbmltYXRpb25SZW5kZXIoYWxwaGEsIG5leHRTdGF0ZSwgcHJldlN0YXRlKSB7XG4gICAgICAvLyBgdGhpcy5oYXNVbm1vdW50ZWRgIG1pZ2h0IGJlIHRydWUgaW4gdGhlIGZvbGxvd2luZyBjb25kaXRpb246XG4gICAgICAvLyB1c2VyIGRvZXMgc29tZSBjaGVja3MgaW4gYHN0eWxlYCBhbmQgY2FsbHMgYW4gb3duZXIgaGFuZGxlclxuICAgICAgLy8gb3duZXIgc2V0cyBzdGF0ZSBpbiB0aGUgY2FsbGJhY2ssIHRyaWdnZXJpbmcgYSByZS1yZW5kZXJcbiAgICAgIC8vIHVubW91bnRzIE1vdGlvblxuICAgICAgaWYgKCF0aGlzLmhhc1VubW91bnRlZCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBjdXJyZW50U3R5bGU6IF91cGRhdGVUcmVlLmludGVycG9sYXRlVmFsdWUoYWxwaGEsIG5leHRTdGF0ZS5jdXJyZW50U3R5bGUsIHByZXZTdGF0ZS5jdXJyZW50U3R5bGUpLFxuICAgICAgICAgIGN1cnJlbnRWZWxvY2l0eTogbmV4dFN0YXRlLmN1cnJlbnRWZWxvY2l0eVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgc3RyaXBwZWRTdHlsZSA9IF9zdHJpcFN0eWxlMlsnZGVmYXVsdCddKHRoaXMuc3RhdGUuY3VycmVudFN0eWxlKTtcbiAgICAgIHZhciByZW5kZXJlZENoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlbihzdHJpcHBlZFN0eWxlKTtcbiAgICAgIHJldHVybiByZW5kZXJlZENoaWxkcmVuICYmIFJlYWN0LkNoaWxkcmVuLm9ubHkocmVuZGVyZWRDaGlsZHJlbik7XG4gICAgfVxuICB9KTtcblxuICB2YXIgU3RhZ2dlcmVkTW90aW9uID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIGRpc3BsYXlOYW1lOiAnU3RhZ2dlcmVkTW90aW9uJyxcblxuICAgIHByb3BUeXBlczoge1xuICAgICAgZGVmYXVsdFN0eWxlOiBmdW5jdGlvbiBkZWZhdWx0U3R5bGUocHJvcCwgcHJvcE5hbWUpIHtcbiAgICAgICAgaWYgKHByb3BbcHJvcE5hbWVdKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignWW91IGZvcmdvdCB0aGUgXCJzXCIgZm9yIGBTdGFnZ2VyZWRNb3Rpb25gXFwncyBgZGVmYXVsdFN0eWxlc2AuJyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzdHlsZTogZnVuY3Rpb24gc3R5bGUocHJvcCwgcHJvcE5hbWUpIHtcbiAgICAgICAgaWYgKHByb3BbcHJvcE5hbWVdKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignWW91IGZvcmdvdCB0aGUgXCJzXCIgZm9yIGBTdGFnZ2VyZWRNb3Rpb25gXFwncyBgc3R5bGVzYC4nKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIFRPT0Q6IHdhcm4gYWdhaW5zdCBwdXR0aW5nIGNvbmZpZ3MgaW4gaGVyZVxuICAgICAgZGVmYXVsdFN0eWxlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXG4gICAgICBzdHlsZXM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICAgIH0sXG5cbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcztcbiAgICAgIHZhciBzdHlsZXMgPSBfcHJvcHMyLnN0eWxlcztcbiAgICAgIHZhciBkZWZhdWx0U3R5bGVzID0gX3Byb3BzMi5kZWZhdWx0U3R5bGVzO1xuXG4gICAgICB2YXIgY3VycmVudFN0eWxlcyA9IGRlZmF1bHRTdHlsZXMgPyBkZWZhdWx0U3R5bGVzIDogc3R5bGVzKCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjdXJyZW50U3R5bGVzOiBjdXJyZW50U3R5bGVzLFxuICAgICAgICBjdXJyZW50VmVsb2NpdGllczogY3VycmVudFN0eWxlcy5tYXAoZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgICByZXR1cm4gbWFwT2JqZWN0KF96ZXJvMlsnZGVmYXVsdCddLCBzKTtcbiAgICAgICAgfSlcbiAgICAgIH07XG4gICAgfSxcblxuICAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuc3RhcnRBbmltYXRpbmcoKTtcbiAgICB9LFxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcygpIHtcbiAgICAgIHRoaXMuc3RhcnRBbmltYXRpbmcoKTtcbiAgICB9LFxuXG4gICAgYW5pbWF0aW9uU3RlcDogZnVuY3Rpb24gYW5pbWF0aW9uU3RlcCh0aW1lc3RlcCwgc3RhdGUpIHtcbiAgICAgIHZhciBjdXJyZW50U3R5bGVzID0gc3RhdGUuY3VycmVudFN0eWxlcztcbiAgICAgIHZhciBjdXJyZW50VmVsb2NpdGllcyA9IHN0YXRlLmN1cnJlbnRWZWxvY2l0aWVzO1xuXG4gICAgICB2YXIgc3R5bGVzID0gdGhpcy5wcm9wcy5zdHlsZXMoY3VycmVudFN0eWxlcy5tYXAoX3N0cmlwU3R5bGUyWydkZWZhdWx0J10pKTtcblxuICAgICAgdmFyIG5ld0N1cnJlbnRTdHlsZXMgPSBjdXJyZW50U3R5bGVzLm1hcChmdW5jdGlvbiAoY3VycmVudFN0eWxlLCBpKSB7XG4gICAgICAgIHJldHVybiBfdXBkYXRlVHJlZS51cGRhdGVDdXJyZW50U3R5bGUodGltZXN0ZXAsIGN1cnJlbnRTdHlsZSwgY3VycmVudFZlbG9jaXRpZXNbaV0sIHN0eWxlc1tpXSk7XG4gICAgICB9KTtcbiAgICAgIHZhciBuZXdDdXJyZW50VmVsb2NpdGllcyA9IGN1cnJlbnRTdHlsZXMubWFwKGZ1bmN0aW9uIChjdXJyZW50U3R5bGUsIGkpIHtcbiAgICAgICAgcmV0dXJuIF91cGRhdGVUcmVlLnVwZGF0ZUN1cnJlbnRWZWxvY2l0eSh0aW1lc3RlcCwgY3VycmVudFN0eWxlLCBjdXJyZW50VmVsb2NpdGllc1tpXSwgc3R5bGVzW2ldKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBUT0RPOiBpcyB0aGlzIHJpZ2h0P1xuICAgICAgaWYgKGN1cnJlbnRWZWxvY2l0aWVzLmV2ZXJ5KGZ1bmN0aW9uICh2LCBrKSB7XG4gICAgICAgIHJldHVybiBfbm9WZWxvY2l0eTJbJ2RlZmF1bHQnXSh2LCBjdXJyZW50U3R5bGVzW2tdKTtcbiAgICAgIH0pICYmIG5ld0N1cnJlbnRWZWxvY2l0aWVzLmV2ZXJ5KGZ1bmN0aW9uICh2LCBrKSB7XG4gICAgICAgIHJldHVybiBfbm9WZWxvY2l0eTJbJ2RlZmF1bHQnXSh2LCBuZXdDdXJyZW50U3R5bGVzW2tdKTtcbiAgICAgIH0pKSB7XG4gICAgICAgIHRoaXMuc3RvcEFuaW1hdGlvbigpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBjdXJyZW50U3R5bGVzOiBuZXdDdXJyZW50U3R5bGVzLFxuICAgICAgICBjdXJyZW50VmVsb2NpdGllczogbmV3Q3VycmVudFZlbG9jaXRpZXNcbiAgICAgIH07XG4gICAgfSxcblxuICAgIHN0b3BBbmltYXRpb246IG51bGwsXG5cbiAgICAvLyB1c2VkIGluIGFuaW1hdGlvblJlbmRlclxuICAgIGhhc1VubW91bnRlZDogZmFsc2UsXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLnN0b3BBbmltYXRpb24oKTtcbiAgICAgIHRoaXMuaGFzVW5tb3VudGVkID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgc3RhcnRBbmltYXRpbmc6IGZ1bmN0aW9uIHN0YXJ0QW5pbWF0aW5nKCkge1xuICAgICAgdGhpcy5zdG9wQW5pbWF0aW9uID0gc3RhcnRBbmltYXRpb24odGhpcy5zdGF0ZSwgdGhpcy5hbmltYXRpb25TdGVwLCB0aGlzLmFuaW1hdGlvblJlbmRlcik7XG4gICAgfSxcblxuICAgIGFuaW1hdGlvblJlbmRlcjogZnVuY3Rpb24gYW5pbWF0aW9uUmVuZGVyKGFscGhhLCBuZXh0U3RhdGUsIHByZXZTdGF0ZSkge1xuICAgICAgLy8gU2VlIGNvbW1lbnQgaW4gTW90aW9uLlxuICAgICAgaWYgKCF0aGlzLmhhc1VubW91bnRlZCkge1xuICAgICAgICB2YXIgY3VycmVudFN0eWxlcyA9IG5leHRTdGF0ZS5jdXJyZW50U3R5bGVzLm1hcChmdW5jdGlvbiAoc3R5bGUsIGkpIHtcbiAgICAgICAgICByZXR1cm4gX3VwZGF0ZVRyZWUuaW50ZXJwb2xhdGVWYWx1ZShhbHBoYSwgc3R5bGUsIHByZXZTdGF0ZS5jdXJyZW50U3R5bGVzW2ldKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGN1cnJlbnRTdHlsZXM6IGN1cnJlbnRTdHlsZXMsXG4gICAgICAgICAgY3VycmVudFZlbG9jaXRpZXM6IG5leHRTdGF0ZS5jdXJyZW50VmVsb2NpdGllc1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgc3RyaXBwZWRTdHlsZSA9IHRoaXMuc3RhdGUuY3VycmVudFN0eWxlcy5tYXAoX3N0cmlwU3R5bGUyWydkZWZhdWx0J10pO1xuICAgICAgdmFyIHJlbmRlcmVkQ2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuKHN0cmlwcGVkU3R5bGUpO1xuICAgICAgcmV0dXJuIHJlbmRlcmVkQ2hpbGRyZW4gJiYgUmVhY3QuQ2hpbGRyZW4ub25seShyZW5kZXJlZENoaWxkcmVuKTtcbiAgICB9XG4gIH0pO1xuXG4gIHZhciBUcmFuc2l0aW9uTW90aW9uID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIGRpc3BsYXlOYW1lOiAnVHJhbnNpdGlvbk1vdGlvbicsXG5cbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgIGRlZmF1bHRWYWx1ZTogZnVuY3Rpb24gZGVmYXVsdFZhbHVlKHByb3AsIHByb3BOYW1lKSB7XG4gICAgICAgIGlmIChwcm9wW3Byb3BOYW1lXSkge1xuICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ1RyYW5zaXRpb25TcHJpbmdcXCdzIGBkZWZhdWx0VmFsdWVgIGhhcyBiZWVuIGNoYW5nZWQgdG8gJyArICdgZGVmYXVsdFN0eWxlc2AuIEl0cyBmb3JtYXQgcmVjZWl2ZWQgYSBmZXcgKGVhc3kgdG8gdXBkYXRlISkgJyArICdjaGFuZ2VzIGFzIHdlbGwuJyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBlbmRWYWx1ZTogZnVuY3Rpb24gZW5kVmFsdWUocHJvcCwgcHJvcE5hbWUpIHtcbiAgICAgICAgaWYgKHByb3BbcHJvcE5hbWVdKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignVHJhbnNpdGlvblNwcmluZ1xcJ3MgYGVuZFZhbHVlYCBoYXMgYmVlbiBjaGFuZ2VkIHRvIGBzdHlsZXNgLiAnICsgJ0l0cyBmb3JtYXQgcmVjZWl2ZWQgYSBmZXcgKGVhc3kgdG8gdXBkYXRlISkgY2hhbmdlcyBhcyB3ZWxsLicpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGVmYXVsdFN0eWxlOiBmdW5jdGlvbiBkZWZhdWx0U3R5bGUocHJvcCwgcHJvcE5hbWUpIHtcbiAgICAgICAgaWYgKHByb3BbcHJvcE5hbWVdKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignWW91IGZvcmdvdCB0aGUgXCJzXCIgZm9yIGBUcmFuc2l0aW9uTW90aW9uYFxcJ3MgYGRlZmF1bHRTdHlsZXNgLicpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc3R5bGU6IGZ1bmN0aW9uIHN0eWxlKHByb3AsIHByb3BOYW1lKSB7XG4gICAgICAgIGlmIChwcm9wW3Byb3BOYW1lXSkge1xuICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ1lvdSBmb3Jnb3QgdGhlIFwic1wiIGZvciBgVHJhbnNpdGlvbk1vdGlvbmBcXCdzIGBzdHlsZXNgLicpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gVE9PRDogd2FybiBhZ2FpbnN0IHB1dHRpbmcgY29uZmlncyBpbiBoZXJlXG4gICAgICBkZWZhdWx0U3R5bGVzOiBQcm9wVHlwZXMub2JqZWN0T2YoUHJvcFR5cGVzLmFueSksXG4gICAgICBzdHlsZXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMub2JqZWN0T2YoUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkKV0pLmlzUmVxdWlyZWQsXG4gICAgICB3aWxsTGVhdmU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jXSksXG4gICAgICAvLyBUT09EOiB3YXJuIGFnYWluc3QgcHV0dGluZyBjb25maWdzIGluIGhlcmVcbiAgICAgIHdpbGxFbnRlcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gICAgfSxcblxuICAgIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd2lsbEVudGVyOiBmdW5jdGlvbiB3aWxsRW50ZXIoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgd2lsbExlYXZlOiBmdW5jdGlvbiB3aWxsTGVhdmUoKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSxcblxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgICAgdmFyIF9wcm9wczMgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIHN0eWxlcyA9IF9wcm9wczMuc3R5bGVzO1xuICAgICAgdmFyIGRlZmF1bHRTdHlsZXMgPSBfcHJvcHMzLmRlZmF1bHRTdHlsZXM7XG5cbiAgICAgIHZhciBjdXJyZW50U3R5bGVzID0gdW5kZWZpbmVkO1xuICAgICAgaWYgKGRlZmF1bHRTdHlsZXMgPT0gbnVsbCkge1xuICAgICAgICBpZiAodHlwZW9mIHN0eWxlcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGN1cnJlbnRTdHlsZXMgPSBzdHlsZXMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdXJyZW50U3R5bGVzID0gc3R5bGVzO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyZW50U3R5bGVzID0gZGVmYXVsdFN0eWxlcztcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGN1cnJlbnRTdHlsZXM6IGN1cnJlbnRTdHlsZXMsXG4gICAgICAgIGN1cnJlbnRWZWxvY2l0aWVzOiBtYXBPYmplY3QoZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgICByZXR1cm4gbWFwT2JqZWN0KF96ZXJvMlsnZGVmYXVsdCddLCBzKTtcbiAgICAgICAgfSwgY3VycmVudFN0eWxlcylcbiAgICAgIH07XG4gICAgfSxcblxuICAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuc3RhcnRBbmltYXRpbmcoKTtcbiAgICB9LFxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcygpIHtcbiAgICAgIHRoaXMuc3RhcnRBbmltYXRpbmcoKTtcbiAgICB9LFxuXG4gICAgYW5pbWF0aW9uU3RlcDogZnVuY3Rpb24gYW5pbWF0aW9uU3RlcCh0aW1lc3RlcCwgc3RhdGUpIHtcbiAgICAgIHZhciBjdXJyZW50U3R5bGVzID0gc3RhdGUuY3VycmVudFN0eWxlcztcbiAgICAgIHZhciBjdXJyZW50VmVsb2NpdGllcyA9IHN0YXRlLmN1cnJlbnRWZWxvY2l0aWVzO1xuICAgICAgdmFyIF9wcm9wczQgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIHN0eWxlcyA9IF9wcm9wczQuc3R5bGVzO1xuICAgICAgdmFyIHdpbGxFbnRlciA9IF9wcm9wczQud2lsbEVudGVyO1xuICAgICAgdmFyIHdpbGxMZWF2ZSA9IF9wcm9wczQud2lsbExlYXZlO1xuXG4gICAgICBpZiAodHlwZW9mIHN0eWxlcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBzdHlsZXMgPSBzdHlsZXMoY3VycmVudFN0eWxlcyk7XG4gICAgICB9XG5cbiAgICAgIC8vIFRPRE86IGh1aD9cbiAgICAgIHZhciBtZXJnZWRTdHlsZXMgPSBzdHlsZXM7IC8vIHNldCBtZXJnZWRTdHlsZXMgdG8gc3R5bGVzIGFzIHRoZSBkZWZhdWx0XG4gICAgICB2YXIgaGFzTmV3S2V5ID0gZmFsc2U7XG5cbiAgICAgIG1lcmdlZFN0eWxlcyA9IF9tZXJnZURpZmYyWydkZWZhdWx0J10oY3VycmVudFN0eWxlcywgc3R5bGVzLFxuICAgICAgLy8gVE9ETzogc3RvcCBhbGxvY2F0aW5nIGxpa2UgY3JhenkgaW4gdGhpcyB3aG9sZSBjb2RlIHBhdGhcbiAgICAgIGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIHJlcyA9IHdpbGxMZWF2ZShrZXksIGN1cnJlbnRTdHlsZXNba2V5XSwgc3R5bGVzLCBjdXJyZW50U3R5bGVzLCBjdXJyZW50VmVsb2NpdGllcyk7XG4gICAgICAgIGlmIChyZXMgPT0gbnVsbCkge1xuICAgICAgICAgIC8vIEZvciBsZWdhY3kgcmVhc29uLiBXZSB3b24ndCBhbGxvdyByZXR1cm5pbmcgbnVsbCBzb29uXG4gICAgICAgICAgLy8gVE9ETzogcmVtb3ZlLCBhZnRlciBuZXh0IHJlbGVhc2VcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfbm9WZWxvY2l0eTJbJ2RlZmF1bHQnXShjdXJyZW50VmVsb2NpdGllc1trZXldLCBjdXJyZW50U3R5bGVzW2tleV0pICYmIF9oYXNSZWFjaGVkU3R5bGUyWydkZWZhdWx0J10oY3VycmVudFN0eWxlc1trZXldLCByZXMpKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH0pO1xuXG4gICAgICBPYmplY3Qua2V5cyhtZXJnZWRTdHlsZXMpLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiAhY3VycmVudFN0eWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpO1xuICAgICAgfSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciBfZXh0ZW5kczIsIF9leHRlbmRzMztcblxuICAgICAgICBoYXNOZXdLZXkgPSB0cnVlO1xuICAgICAgICB2YXIgZW50ZXJTdHlsZSA9IHdpbGxFbnRlcihrZXksIG1lcmdlZFN0eWxlc1trZXldLCBzdHlsZXMsIGN1cnJlbnRTdHlsZXMsIGN1cnJlbnRWZWxvY2l0aWVzKTtcblxuICAgICAgICAvLyBXZSBjYW4gbXV0YXRlIHRoaXMgaGVyZSBiZWNhdXNlIG1lcmdlRGlmZiByZXR1cm5zIGEgbmV3IE9ialxuICAgICAgICBtZXJnZWRTdHlsZXNba2V5XSA9IGVudGVyU3R5bGU7XG5cbiAgICAgICAgY3VycmVudFN0eWxlcyA9IF9leHRlbmRzKHt9LCBjdXJyZW50U3R5bGVzLCAoX2V4dGVuZHMyID0ge30sIF9leHRlbmRzMltrZXldID0gZW50ZXJTdHlsZSwgX2V4dGVuZHMyKSk7XG4gICAgICAgIGN1cnJlbnRWZWxvY2l0aWVzID0gX2V4dGVuZHMoe30sIGN1cnJlbnRWZWxvY2l0aWVzLCAoX2V4dGVuZHMzID0ge30sIF9leHRlbmRzM1trZXldID0gbWFwT2JqZWN0KF96ZXJvMlsnZGVmYXVsdCddLCBlbnRlclN0eWxlKSwgX2V4dGVuZHMzKSk7XG4gICAgICB9KTtcblxuICAgICAgdmFyIG5ld0N1cnJlbnRTdHlsZXMgPSBtYXBPYmplY3QoZnVuY3Rpb24gKG1lcmdlZFN0eWxlLCBrZXkpIHtcbiAgICAgICAgcmV0dXJuIF91cGRhdGVUcmVlLnVwZGF0ZUN1cnJlbnRTdHlsZSh0aW1lc3RlcCwgY3VycmVudFN0eWxlc1trZXldLCBjdXJyZW50VmVsb2NpdGllc1trZXldLCBtZXJnZWRTdHlsZSk7XG4gICAgICB9LCBtZXJnZWRTdHlsZXMpO1xuICAgICAgdmFyIG5ld0N1cnJlbnRWZWxvY2l0aWVzID0gbWFwT2JqZWN0KGZ1bmN0aW9uIChtZXJnZWRTdHlsZSwga2V5KSB7XG4gICAgICAgIHJldHVybiBfdXBkYXRlVHJlZS51cGRhdGVDdXJyZW50VmVsb2NpdHkodGltZXN0ZXAsIGN1cnJlbnRTdHlsZXNba2V5XSwgY3VycmVudFZlbG9jaXRpZXNba2V5XSwgbWVyZ2VkU3R5bGUpO1xuICAgICAgfSwgbWVyZ2VkU3R5bGVzKTtcblxuICAgICAgaWYgKCFoYXNOZXdLZXkgJiYgZXZlcnlPYmooZnVuY3Rpb24gKHYsIGspIHtcbiAgICAgICAgcmV0dXJuIF9ub1ZlbG9jaXR5MlsnZGVmYXVsdCddKHYsIGN1cnJlbnRTdHlsZXNba10pO1xuICAgICAgfSwgY3VycmVudFZlbG9jaXRpZXMpICYmIGV2ZXJ5T2JqKGZ1bmN0aW9uICh2LCBrKSB7XG4gICAgICAgIHJldHVybiBfbm9WZWxvY2l0eTJbJ2RlZmF1bHQnXSh2LCBuZXdDdXJyZW50U3R5bGVzW2tdKTtcbiAgICAgIH0sIG5ld0N1cnJlbnRWZWxvY2l0aWVzKSkge1xuICAgICAgICAvLyBjaGVjayBleHBsYW5hdGlvbiBpbiBgTW90aW9uLmFuaW1hdGlvblJlbmRlcmBcbiAgICAgICAgdGhpcy5zdG9wQW5pbWF0aW9uKCk7IC8vIE5hc3R5IHNpZGUgZWZmZWN0cy4uLi5cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY3VycmVudFN0eWxlczogbmV3Q3VycmVudFN0eWxlcyxcbiAgICAgICAgY3VycmVudFZlbG9jaXRpZXM6IG5ld0N1cnJlbnRWZWxvY2l0aWVzXG4gICAgICB9O1xuICAgIH0sXG5cbiAgICBzdG9wQW5pbWF0aW9uOiBudWxsLFxuXG4gICAgLy8gdXNlZCBpbiBhbmltYXRpb25SZW5kZXJcbiAgICBoYXNVbm1vdW50ZWQ6IGZhbHNlLFxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5zdG9wQW5pbWF0aW9uKCk7XG4gICAgICB0aGlzLmhhc1VubW91bnRlZCA9IHRydWU7XG4gICAgfSxcblxuICAgIHN0YXJ0QW5pbWF0aW5nOiBmdW5jdGlvbiBzdGFydEFuaW1hdGluZygpIHtcbiAgICAgIHRoaXMuc3RvcEFuaW1hdGlvbiA9IHN0YXJ0QW5pbWF0aW9uKHRoaXMuc3RhdGUsIHRoaXMuYW5pbWF0aW9uU3RlcCwgdGhpcy5hbmltYXRpb25SZW5kZXIpO1xuICAgIH0sXG5cbiAgICBhbmltYXRpb25SZW5kZXI6IGZ1bmN0aW9uIGFuaW1hdGlvblJlbmRlcihhbHBoYSwgbmV4dFN0YXRlLCBwcmV2U3RhdGUpIHtcbiAgICAgIC8vIFNlZSBjb21tZW50IGluIE1vdGlvbi5cbiAgICAgIGlmICghdGhpcy5oYXNVbm1vdW50ZWQpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRTdHlsZXMgPSBtYXBPYmplY3QoZnVuY3Rpb24gKHN0eWxlLCBrZXkpIHtcbiAgICAgICAgICByZXR1cm4gX3VwZGF0ZVRyZWUuaW50ZXJwb2xhdGVWYWx1ZShhbHBoYSwgc3R5bGUsIHByZXZTdGF0ZS5jdXJyZW50U3R5bGVzW2tleV0pO1xuICAgICAgICB9LCBuZXh0U3RhdGUuY3VycmVudFN0eWxlcyk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGN1cnJlbnRTdHlsZXM6IGN1cnJlbnRTdHlsZXMsXG4gICAgICAgICAgY3VycmVudFZlbG9jaXRpZXM6IG5leHRTdGF0ZS5jdXJyZW50VmVsb2NpdGllc1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgc3RyaXBwZWRTdHlsZSA9IG1hcE9iamVjdChfc3RyaXBTdHlsZTJbJ2RlZmF1bHQnXSwgdGhpcy5zdGF0ZS5jdXJyZW50U3R5bGVzKTtcbiAgICAgIHZhciByZW5kZXJlZENoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlbihzdHJpcHBlZFN0eWxlKTtcbiAgICAgIHJldHVybiByZW5kZXJlZENoaWxkcmVuICYmIFJlYWN0LkNoaWxkcmVuLm9ubHkocmVuZGVyZWRDaGlsZHJlbik7XG4gICAgfVxuICB9KTtcblxuICB2YXIgX2RlcHJlY2F0ZWRTcHJpbmdzID0gX2RlcHJlY2F0ZWRTcHJpbmdzM1snZGVmYXVsdCddKFJlYWN0KTtcblxuICB2YXIgU3ByaW5nID0gX2RlcHJlY2F0ZWRTcHJpbmdzLlNwcmluZztcbiAgdmFyIFRyYW5zaXRpb25TcHJpbmcgPSBfZGVwcmVjYXRlZFNwcmluZ3MuVHJhbnNpdGlvblNwcmluZztcblxuICByZXR1cm4geyBTcHJpbmc6IFNwcmluZywgVHJhbnNpdGlvblNwcmluZzogVHJhbnNpdGlvblNwcmluZywgTW90aW9uOiBNb3Rpb24sIFN0YWdnZXJlZE1vdGlvbjogU3RhZ2dlcmVkTW90aW9uLCBUcmFuc2l0aW9uTW90aW9uOiBUcmFuc2l0aW9uTW90aW9uIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LW1vdGlvbi9saWIvY29tcG9uZW50cy5qc1xuICoqIG1vZHVsZSBpZCA9IDQxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbi8vIGN1cnJlbnRTdHlsZSBrZWVwcyB0aGUgaW5mbyBhYm91dCB3aGV0aGVyIGEgcHJvcCBpcyBjb25maWd1cmVkIGFzIGEgc3ByaW5nXG4vLyBvciBpZiBpdCdzIGp1c3QgYSByYW5kb20gcHJvcCB0aGF0IGhhcHBlbnMgdG8gYmUgcHJlc2VudCBvbiB0aGUgc3R5bGVcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1snZGVmYXVsdCddID0gbm9WZWxvY2l0eTtcblxuZnVuY3Rpb24gbm9WZWxvY2l0eShjdXJyZW50VmVsb2NpdHksIGN1cnJlbnRTdHlsZSkge1xuICBmb3IgKHZhciBrZXkgaW4gY3VycmVudFZlbG9jaXR5KSB7XG4gICAgaWYgKCFjdXJyZW50VmVsb2NpdHkuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChjdXJyZW50U3R5bGVba2V5XSAhPSBudWxsICYmIGN1cnJlbnRTdHlsZVtrZXldLmNvbmZpZyAmJiBjdXJyZW50VmVsb2NpdHlba2V5XSAhPT0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtbW90aW9uL2xpYi9ub1ZlbG9jaXR5LmpzXG4gKiogbW9kdWxlIGlkID0gNDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGhhc1JlYWNoZWRTdHlsZTtcblxuZnVuY3Rpb24gaGFzUmVhY2hlZFN0eWxlKGN1cnJlbnRTdHlsZSwgc3R5bGUpIHtcbiAgZm9yICh2YXIga2V5IGluIHN0eWxlKSB7XG4gICAgaWYgKCFzdHlsZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgdmFyIGN1cnJlbnRWYWx1ZSA9IGN1cnJlbnRTdHlsZVtrZXldO1xuICAgIHZhciBkZXN0VmFsdWUgPSBzdHlsZVtrZXldO1xuICAgIGlmIChkZXN0VmFsdWUgPT0gbnVsbCB8fCAhZGVzdFZhbHVlLmNvbmZpZykge1xuICAgICAgLy8gbm90IGEgc3ByaW5nIGNvbmZpZ1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChjdXJyZW50VmFsdWUuY29uZmlnICYmIGN1cnJlbnRWYWx1ZS52YWwgIT09IGRlc3RWYWx1ZS52YWwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCFjdXJyZW50VmFsdWUuY29uZmlnICYmIGN1cnJlbnRWYWx1ZSAhPT0gZGVzdFZhbHVlLnZhbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1tb3Rpb24vbGliL2hhc1JlYWNoZWRTdHlsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDQzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcblxuLy8gdGhpcyBmdW5jdGlvbiBpcyBhbGxvY2F0aW9uLWxlc3MgdGhhbmtzIHRvIGJhYmVsLCB3aGljaCB0cmFuc2Zvcm1zIHRoZSB0YWlsXG4vLyBjYWxscyBpbnRvIGxvb3BzXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzWydkZWZhdWx0J10gPSBtZXJnZURpZmY7XG5mdW5jdGlvbiBtZXJnZURpZmZBcnIoX3gsIF94MiwgX3gzLCBfeDQsIF94NSwgX3g2LCBfeDcpIHtcbiAgdmFyIF9hZ2FpbiA9IHRydWU7XG5cbiAgX2Z1bmN0aW9uOiB3aGlsZSAoX2FnYWluKSB7XG4gICAgdmFyIGFyckEgPSBfeCxcbiAgICAgICAgYXJyQiA9IF94MixcbiAgICAgICAgY29sbEIgPSBfeDMsXG4gICAgICAgIGluZGV4QSA9IF94NCxcbiAgICAgICAgaW5kZXhCID0gX3g1LFxuICAgICAgICBvblJlbW92ZSA9IF94NixcbiAgICAgICAgYWNjdW0gPSBfeDc7XG4gICAgZW5kQSA9IGVuZEIgPSBrZXlBID0ga2V5QiA9IGZpbGwgPSBmaWxsID0gdW5kZWZpbmVkO1xuICAgIF9hZ2FpbiA9IGZhbHNlO1xuXG4gICAgdmFyIGVuZEEgPSBpbmRleEEgPT09IGFyckEubGVuZ3RoO1xuICAgIHZhciBlbmRCID0gaW5kZXhCID09PSBhcnJCLmxlbmd0aDtcbiAgICB2YXIga2V5QSA9IGFyckFbaW5kZXhBXTtcbiAgICB2YXIga2V5QiA9IGFyckJbaW5kZXhCXTtcbiAgICBpZiAoZW5kQSAmJiBlbmRCKSB7XG4gICAgICAvLyByZXR1cm5pbmcgbnVsbCBoZXJlLCBvdGhlcndpc2UgbGludCBjb21wbGFpbnMgdGhhdCB3ZSdyZSBub3QgZXhwZWN0aW5nXG4gICAgICAvLyBhIHJldHVybiB2YWx1ZSBpbiBzdWJzZXF1ZW50IGNhbGxzLiBXZSBrbm93IHdoYXQgd2UncmUgZG9pbmcuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoZW5kQSkge1xuICAgICAgYWNjdW1ba2V5Ql0gPSBjb2xsQltrZXlCXTtcbiAgICAgIF94ID0gYXJyQTtcbiAgICAgIF94MiA9IGFyckI7XG4gICAgICBfeDMgPSBjb2xsQjtcbiAgICAgIF94NCA9IGluZGV4QTtcbiAgICAgIF94NSA9IGluZGV4QiArIDE7XG4gICAgICBfeDYgPSBvblJlbW92ZTtcbiAgICAgIF94NyA9IGFjY3VtO1xuICAgICAgX2FnYWluID0gdHJ1ZTtcbiAgICAgIGNvbnRpbnVlIF9mdW5jdGlvbjtcbiAgICB9XG5cbiAgICBpZiAoZW5kQikge1xuICAgICAgdmFyIGZpbGwgPSBvblJlbW92ZShrZXlBKTtcbiAgICAgIGlmIChmaWxsICE9IG51bGwpIHtcbiAgICAgICAgYWNjdW1ba2V5QV0gPSBmaWxsO1xuICAgICAgfVxuICAgICAgX3ggPSBhcnJBO1xuICAgICAgX3gyID0gYXJyQjtcbiAgICAgIF94MyA9IGNvbGxCO1xuICAgICAgX3g0ID0gaW5kZXhBICsgMTtcbiAgICAgIF94NSA9IGluZGV4QjtcbiAgICAgIF94NiA9IG9uUmVtb3ZlO1xuICAgICAgX3g3ID0gYWNjdW07XG4gICAgICBfYWdhaW4gPSB0cnVlO1xuICAgICAgY29udGludWUgX2Z1bmN0aW9uO1xuICAgIH1cblxuICAgIGlmIChrZXlBID09PSBrZXlCKSB7XG4gICAgICBhY2N1bVtrZXlBXSA9IGNvbGxCW2tleUFdO1xuICAgICAgX3ggPSBhcnJBO1xuICAgICAgX3gyID0gYXJyQjtcbiAgICAgIF94MyA9IGNvbGxCO1xuICAgICAgX3g0ID0gaW5kZXhBICsgMTtcbiAgICAgIF94NSA9IGluZGV4QiArIDE7XG4gICAgICBfeDYgPSBvblJlbW92ZTtcbiAgICAgIF94NyA9IGFjY3VtO1xuICAgICAgX2FnYWluID0gdHJ1ZTtcbiAgICAgIGNvbnRpbnVlIF9mdW5jdGlvbjtcbiAgICB9XG5cbiAgICBpZiAoIWNvbGxCLmhhc093blByb3BlcnR5KGtleUEpKSB7XG4gICAgICB2YXIgZmlsbCA9IG9uUmVtb3ZlKGtleUEpO1xuICAgICAgaWYgKGZpbGwgIT0gbnVsbCkge1xuICAgICAgICBhY2N1bVtrZXlBXSA9IGZpbGw7XG4gICAgICB9XG4gICAgICBfeCA9IGFyckE7XG4gICAgICBfeDIgPSBhcnJCO1xuICAgICAgX3gzID0gY29sbEI7XG4gICAgICBfeDQgPSBpbmRleEEgKyAxO1xuICAgICAgX3g1ID0gaW5kZXhCO1xuICAgICAgX3g2ID0gb25SZW1vdmU7XG4gICAgICBfeDcgPSBhY2N1bTtcbiAgICAgIF9hZ2FpbiA9IHRydWU7XG4gICAgICBjb250aW51ZSBfZnVuY3Rpb247XG4gICAgfVxuXG4gICAgX3ggPSBhcnJBO1xuICAgIF94MiA9IGFyckI7XG4gICAgX3gzID0gY29sbEI7XG4gICAgX3g0ID0gaW5kZXhBICsgMTtcbiAgICBfeDUgPSBpbmRleEI7XG4gICAgX3g2ID0gb25SZW1vdmU7XG4gICAgX3g3ID0gYWNjdW07XG4gICAgX2FnYWluID0gdHJ1ZTtcbiAgICBjb250aW51ZSBfZnVuY3Rpb247XG4gIH1cbn1cblxuZnVuY3Rpb24gbWVyZ2VEaWZmKGEsIGIsIG9uUmVtb3ZlKSB7XG4gIHZhciByZXQgPSB7fTtcbiAgLy8gaWYgYW55b25lIGNhbiBtYWtlIHRoaXMgd29yayB3aXRob3V0IGFsbG9jYXRpbmcgdGhlIGFycmF5cyBoZXJlLCB3ZSdsbFxuICAvLyBnaXZlIHlvdSBhIG1lZGFsXG4gIG1lcmdlRGlmZkFycihPYmplY3Qua2V5cyhhKSwgT2JqZWN0LmtleXMoYiksIGIsIDAsIDAsIG9uUmVtb3ZlLCByZXQpO1xuICByZXR1cm4gcmV0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1tb3Rpb24vbGliL21lcmdlRGlmZi5qc1xuICoqIG1vZHVsZSBpZCA9IDQ0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzWydkZWZhdWx0J10gPSBjb25maWdBbmltYXRpb247XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9wZXJmb3JtYW5jZU5vdyA9IHJlcXVpcmUoJ3BlcmZvcm1hbmNlLW5vdycpO1xuXG52YXIgX3BlcmZvcm1hbmNlTm93MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BlcmZvcm1hbmNlTm93KTtcblxudmFyIF9yYWYgPSByZXF1aXJlKCdyYWYnKTtcblxudmFyIF9yYWYyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmFmKTtcblxuZnVuY3Rpb24gY29uZmlnQW5pbWF0aW9uKCkge1xuICB2YXIgY29uZmlnID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG4gIHZhciBfY29uZmlnJHRpbWVTdGVwID0gY29uZmlnLnRpbWVTdGVwO1xuICB2YXIgdGltZVN0ZXAgPSBfY29uZmlnJHRpbWVTdGVwID09PSB1bmRlZmluZWQgPyAxIC8gNjAgKiAxMDAwIDogX2NvbmZpZyR0aW1lU3RlcDtcbiAgdmFyIF9jb25maWckdGltZVNjYWxlID0gY29uZmlnLnRpbWVTY2FsZTtcbiAgdmFyIHRpbWVTY2FsZSA9IF9jb25maWckdGltZVNjYWxlID09PSB1bmRlZmluZWQgPyAxIDogX2NvbmZpZyR0aW1lU2NhbGU7XG4gIHZhciBfY29uZmlnJG1heFN0ZXBzID0gY29uZmlnLm1heFN0ZXBzO1xuICB2YXIgbWF4U3RlcHMgPSBfY29uZmlnJG1heFN0ZXBzID09PSB1bmRlZmluZWQgPyAxMCA6IF9jb25maWckbWF4U3RlcHM7XG4gIHZhciBfY29uZmlnJHJhZiA9IGNvbmZpZy5yYWY7XG4gIHZhciByYWYgPSBfY29uZmlnJHJhZiA9PT0gdW5kZWZpbmVkID8gX3JhZjJbJ2RlZmF1bHQnXSA6IF9jb25maWckcmFmO1xuICB2YXIgX2NvbmZpZyRub3cgPSBjb25maWcubm93O1xuICB2YXIgbm93ID0gX2NvbmZpZyRub3cgPT09IHVuZGVmaW5lZCA/IF9wZXJmb3JtYW5jZU5vdzJbJ2RlZmF1bHQnXSA6IF9jb25maWckbm93O1xuXG4gIHZhciBhbmltUnVubmluZyA9IFtdO1xuICB2YXIgcnVubmluZyA9IGZhbHNlO1xuICB2YXIgcHJldlRpbWUgPSAwO1xuICB2YXIgYWNjdW11bGF0ZWRUaW1lID0gMDtcblxuICBmdW5jdGlvbiBsb29wKCkge1xuICAgIHZhciBjdXJyZW50VGltZSA9IG5vdygpO1xuICAgIHZhciBmcmFtZVRpbWUgPSBjdXJyZW50VGltZSAtIHByZXZUaW1lOyAvLyBkZWx0YVxuXG4gICAgcHJldlRpbWUgPSBjdXJyZW50VGltZTtcbiAgICBhY2N1bXVsYXRlZFRpbWUgKz0gZnJhbWVUaW1lICogdGltZVNjYWxlO1xuXG4gICAgaWYgKGFjY3VtdWxhdGVkVGltZSA+IHRpbWVTdGVwICogbWF4U3RlcHMpIHtcbiAgICAgIGFjY3VtdWxhdGVkVGltZSA9IDA7XG4gICAgfVxuXG4gICAgdmFyIGZyYW1lTnVtYmVyID0gTWF0aC5jZWlsKGFjY3VtdWxhdGVkVGltZSAvIHRpbWVTdGVwKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFuaW1SdW5uaW5nLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgX2FuaW1SdW5uaW5nJGkgPSBhbmltUnVubmluZ1tpXTtcbiAgICAgIHZhciBhY3RpdmUgPSBfYW5pbVJ1bm5pbmckaS5hY3RpdmU7XG4gICAgICB2YXIgYW5pbWF0aW9uU3RlcCA9IF9hbmltUnVubmluZyRpLmFuaW1hdGlvblN0ZXA7XG4gICAgICB2YXIgcHJldlByZXZTdGF0ZSA9IF9hbmltUnVubmluZyRpLnByZXZTdGF0ZTtcbiAgICAgIHZhciBwcmV2TmV4dFN0YXRlID0gYW5pbVJ1bm5pbmdbaV0ubmV4dFN0YXRlO1xuXG4gICAgICBpZiAoIWFjdGl2ZSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gU2VlbXMgbGlrZSBiZWNhdXNlIHRoZSBUUyBzZXRzIGRlc3RWYWxzIGFzIGVudGVyVmFscyBmb3IgdGhlIGZpcnN0XG4gICAgICAvLyB0aWNrLCB3ZSBtaWdodCByZW5kZXIgdGhhdCB2YWx1ZSB0d2ljZS4gV2UgcmVuZGVyIGl0IG9uY2UsIGN1cnJWYWx1ZSBpc1xuICAgICAgLy8gZW50ZXJWYWwgYW5kIGRlc3RWYWwgaXMgZW50ZXJWYWwuIFRoZSBuZXh0IHRpY2sgaXMgZmFzdGVyIHRoYW4gMTZtcyxcbiAgICAgIC8vIHNvIGFjY3VtdWxhdGVkVGltZSAod2hpY2ggd291bGQgYmUgYWJvdXQgLTE2bXMgZnJvbSB0aGUgcHJldmlvdXMgdGljaylcbiAgICAgIC8vIGlzIG5lZ2F0aXZlICgtMTZtcyArIGFueSBudW1iZXIgbGVzcyB0aGFuIDE2bXMgPCAwKS4gU28gd2UganVzdCByZW5kZXJcbiAgICAgIC8vIHBhcnQgd2F5cyB0b3dhcmRzIHRoZSBuZXh0U3RhdGUsIGJ1dCB0aGF0J3MgZW50ZXJWYWwgc3RpbGwuIFdlIHJlbmRlclxuICAgICAgLy8gc2F5IDc1JSBiZXR3ZWVuIGN1cnJWYWx1ZSAoPT09IGVudGVyVmFsKSBhbmQgZGVzdFZhbHVlICg9PT0gZW50ZXJWYWwpLlxuICAgICAgLy8gU28gd2UgcmVuZGVyIHRoZSBzYW1lIHZhbHVlIGEgc2Vjb25kIHRpbWUuXG4gICAgICAvLyBUaGUgc29sdXRpb24gYmVsb3cgaXMgdG8gcmVjYWxjdWxhdGUgdGhlIGRlc3RpbmF0aW9uIHN0YXRlIGV2ZW4gd2hlblxuICAgICAgLy8geW91J3JlIG1vdmluZyBwYXJ0aWFsbHkgdG93YXJkcyBpdC5cbiAgICAgIGlmIChhY2N1bXVsYXRlZFRpbWUgPD0gMCkge1xuICAgICAgICBhbmltUnVubmluZ1tpXS5uZXh0U3RhdGUgPSBhbmltYXRpb25TdGVwKHRpbWVTdGVwIC8gMTAwMCwgcHJldlByZXZTdGF0ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGZyYW1lTnVtYmVyOyBqKyspIHtcbiAgICAgICAgICBhbmltUnVubmluZ1tpXS5uZXh0U3RhdGUgPSBhbmltYXRpb25TdGVwKHRpbWVTdGVwIC8gMTAwMCwgcHJldk5leHRTdGF0ZSk7XG4gICAgICAgICAgdmFyIF9yZWYgPSBbcHJldk5leHRTdGF0ZSwgYW5pbVJ1bm5pbmdbaV0ubmV4dFN0YXRlXTtcbiAgICAgICAgICBhbmltUnVubmluZ1tpXS5wcmV2U3RhdGUgPSBfcmVmWzBdO1xuICAgICAgICAgIHByZXZOZXh0U3RhdGUgPSBfcmVmWzFdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgYWNjdW11bGF0ZWRUaW1lID0gYWNjdW11bGF0ZWRUaW1lIC0gZnJhbWVOdW1iZXIgKiB0aW1lU3RlcDtcblxuICAgIC8vIFJlbmRlciBhbmQgZmlsdGVyIGluIG9uZSBpdGVyYXRpb24uXG4gICAgdmFyIGFscGhhID0gMSArIGFjY3VtdWxhdGVkVGltZSAvIHRpbWVTdGVwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYW5pbVJ1bm5pbmcubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBfYW5pbVJ1bm5pbmckaTIgPSBhbmltUnVubmluZ1tpXTtcbiAgICAgIHZhciBhbmltYXRpb25SZW5kZXIgPSBfYW5pbVJ1bm5pbmckaTIuYW5pbWF0aW9uUmVuZGVyO1xuICAgICAgdmFyIG5leHRTdGF0ZSA9IF9hbmltUnVubmluZyRpMi5uZXh0U3RhdGU7XG4gICAgICB2YXIgcHJldlN0YXRlID0gX2FuaW1SdW5uaW5nJGkyLnByZXZTdGF0ZTtcblxuICAgICAgLy8gTWlnaHQgbXV0YXRlIGFuaW1SdW5uaW5nLi4uLi4uLi5cbiAgICAgIGFuaW1hdGlvblJlbmRlcihhbHBoYSwgbmV4dFN0YXRlLCBwcmV2U3RhdGUpO1xuICAgIH1cblxuICAgIGFuaW1SdW5uaW5nID0gYW5pbVJ1bm5pbmcuZmlsdGVyKGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgdmFyIGFjdGl2ZSA9IF9yZWYyLmFjdGl2ZTtcbiAgICAgIHJldHVybiBhY3RpdmU7XG4gICAgfSk7XG5cbiAgICBpZiAoYW5pbVJ1bm5pbmcubGVuZ3RoID09PSAwKSB7XG4gICAgICBydW5uaW5nID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJhZihsb29wKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICBpZiAoIXJ1bm5pbmcpIHtcbiAgICAgIHJ1bm5pbmcgPSB0cnVlO1xuICAgICAgcHJldlRpbWUgPSBub3coKTtcbiAgICAgIGFjY3VtdWxhdGVkVGltZSA9IDA7XG4gICAgICByYWYobG9vcCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHN0YXJ0QW5pbWF0aW9uKHN0YXRlLCBhbmltYXRpb25TdGVwLCBhbmltYXRpb25SZW5kZXIpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFuaW1SdW5uaW5nLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgdmFsID0gYW5pbVJ1bm5pbmdbaV07XG4gICAgICBpZiAodmFsLmFuaW1hdGlvblN0ZXAgPT09IGFuaW1hdGlvblN0ZXApIHtcbiAgICAgICAgdmFsLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHZhbC5wcmV2U3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgc3RhcnQoKTtcbiAgICAgICAgcmV0dXJuIHZhbC5zdG9wO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBuZXdBbmltID0ge1xuICAgICAgYW5pbWF0aW9uU3RlcDogYW5pbWF0aW9uU3RlcCxcbiAgICAgIGFuaW1hdGlvblJlbmRlcjogYW5pbWF0aW9uUmVuZGVyLFxuICAgICAgcHJldlN0YXRlOiBzdGF0ZSxcbiAgICAgIG5leHRTdGF0ZTogc3RhdGUsXG4gICAgICBhY3RpdmU6IHRydWVcbiAgICB9O1xuXG4gICAgbmV3QW5pbS5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG5ld0FuaW0uYWN0aXZlID0gZmFsc2U7XG4gICAgfTtcbiAgICBhbmltUnVubmluZy5wdXNoKG5ld0FuaW0pO1xuXG4gICAgc3RhcnQoKTtcblxuICAgIHJldHVybiBuZXdBbmltLnN0b3A7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LW1vdGlvbi9saWIvYW5pbWF0aW9uTG9vcC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuNy4xXG4oZnVuY3Rpb24oKSB7XG4gIHZhciBnZXROYW5vU2Vjb25kcywgaHJ0aW1lLCBsb2FkVGltZTtcblxuICBpZiAoKHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBwZXJmb3JtYW5jZSAhPT0gbnVsbCkgJiYgcGVyZm9ybWFuY2Uubm93KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICB9O1xuICB9IGVsc2UgaWYgKCh0eXBlb2YgcHJvY2VzcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBwcm9jZXNzICE9PSBudWxsKSAmJiBwcm9jZXNzLmhydGltZSkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gKGdldE5hbm9TZWNvbmRzKCkgLSBsb2FkVGltZSkgLyAxZTY7XG4gICAgfTtcbiAgICBocnRpbWUgPSBwcm9jZXNzLmhydGltZTtcbiAgICBnZXROYW5vU2Vjb25kcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGhyO1xuICAgICAgaHIgPSBocnRpbWUoKTtcbiAgICAgIHJldHVybiBoclswXSAqIDFlOSArIGhyWzFdO1xuICAgIH07XG4gICAgbG9hZFRpbWUgPSBnZXROYW5vU2Vjb25kcygpO1xuICB9IGVsc2UgaWYgKERhdGUubm93KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBEYXRlLm5vdygpIC0gbG9hZFRpbWU7XG4gICAgfTtcbiAgICBsb2FkVGltZSA9IERhdGUubm93KCk7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIGxvYWRUaW1lO1xuICAgIH07XG4gICAgbG9hZFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgfVxuXG59KS5jYWxsKHRoaXMpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcGVyZm9ybWFuY2Utbm93L2xpYi9wZXJmb3JtYW5jZS1ub3cuanNcbiAqKiBtb2R1bGUgaWQgPSA0NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGlzIG5vdCBkZWZpbmVkJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaXMgbm90IGRlZmluZWQnKTtcbiAgICAgICAgfVxuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9wcm9jZXNzL2Jyb3dzZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA0N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIG5vdyA9IHJlcXVpcmUoJ3BlcmZvcm1hbmNlLW5vdycpXG4gICwgcm9vdCA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogd2luZG93XG4gICwgdmVuZG9ycyA9IFsnbW96JywgJ3dlYmtpdCddXG4gICwgc3VmZml4ID0gJ0FuaW1hdGlvbkZyYW1lJ1xuICAsIHJhZiA9IHJvb3RbJ3JlcXVlc3QnICsgc3VmZml4XVxuICAsIGNhZiA9IHJvb3RbJ2NhbmNlbCcgKyBzdWZmaXhdIHx8IHJvb3RbJ2NhbmNlbFJlcXVlc3QnICsgc3VmZml4XVxuXG5mb3IodmFyIGkgPSAwOyAhcmFmICYmIGkgPCB2ZW5kb3JzLmxlbmd0aDsgaSsrKSB7XG4gIHJhZiA9IHJvb3RbdmVuZG9yc1tpXSArICdSZXF1ZXN0JyArIHN1ZmZpeF1cbiAgY2FmID0gcm9vdFt2ZW5kb3JzW2ldICsgJ0NhbmNlbCcgKyBzdWZmaXhdXG4gICAgICB8fCByb290W3ZlbmRvcnNbaV0gKyAnQ2FuY2VsUmVxdWVzdCcgKyBzdWZmaXhdXG59XG5cbi8vIFNvbWUgdmVyc2lvbnMgb2YgRkYgaGF2ZSByQUYgYnV0IG5vdCBjQUZcbmlmKCFyYWYgfHwgIWNhZikge1xuICB2YXIgbGFzdCA9IDBcbiAgICAsIGlkID0gMFxuICAgICwgcXVldWUgPSBbXVxuICAgICwgZnJhbWVEdXJhdGlvbiA9IDEwMDAgLyA2MFxuXG4gIHJhZiA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgaWYocXVldWUubGVuZ3RoID09PSAwKSB7XG4gICAgICB2YXIgX25vdyA9IG5vdygpXG4gICAgICAgICwgbmV4dCA9IE1hdGgubWF4KDAsIGZyYW1lRHVyYXRpb24gLSAoX25vdyAtIGxhc3QpKVxuICAgICAgbGFzdCA9IG5leHQgKyBfbm93XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY3AgPSBxdWV1ZS5zbGljZSgwKVxuICAgICAgICAvLyBDbGVhciBxdWV1ZSBoZXJlIHRvIHByZXZlbnRcbiAgICAgICAgLy8gY2FsbGJhY2tzIGZyb20gYXBwZW5kaW5nIGxpc3RlbmVyc1xuICAgICAgICAvLyB0byB0aGUgY3VycmVudCBmcmFtZSdzIHF1ZXVlXG4gICAgICAgIHF1ZXVlLmxlbmd0aCA9IDBcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGNwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYoIWNwW2ldLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICBjcFtpXS5jYWxsYmFjayhsYXN0KVxuICAgICAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IHRocm93IGUgfSwgMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIE1hdGgucm91bmQobmV4dCkpXG4gICAgfVxuICAgIHF1ZXVlLnB1c2goe1xuICAgICAgaGFuZGxlOiArK2lkLFxuICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrLFxuICAgICAgY2FuY2VsbGVkOiBmYWxzZVxuICAgIH0pXG4gICAgcmV0dXJuIGlkXG4gIH1cblxuICBjYWYgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgcXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmKHF1ZXVlW2ldLmhhbmRsZSA9PT0gaGFuZGxlKSB7XG4gICAgICAgIHF1ZXVlW2ldLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbikge1xuICAvLyBXcmFwIGluIGEgbmV3IGZ1bmN0aW9uIHRvIHByZXZlbnRcbiAgLy8gYGNhbmNlbGAgcG90ZW50aWFsbHkgYmVpbmcgYXNzaWduZWRcbiAgLy8gdG8gdGhlIG5hdGl2ZSByQUYgZnVuY3Rpb25cbiAgcmV0dXJuIHJhZi5jYWxsKHJvb3QsIGZuKVxufVxubW9kdWxlLmV4cG9ydHMuY2FuY2VsID0gZnVuY3Rpb24oKSB7XG4gIGNhZi5hcHBseShyb290LCBhcmd1bWVudHMpXG59XG5tb2R1bGUuZXhwb3J0cy5wb2x5ZmlsbCA9IGZ1bmN0aW9uKCkge1xuICByb290LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHJhZlxuICByb290LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gY2FmXG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yYWYvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA0OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG4vLyB1c2VkIGJ5IHRoZSB0cmVlLXdhbGtpbmcgdXBkYXRlcyBhbmQgc3ByaW5ncy4gQXZvaWRzIHNvbWUgYWxsb2NhdGlvbnNcblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB6ZXJvO1xuXG5mdW5jdGlvbiB6ZXJvKCkge1xuICByZXR1cm4gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1tb3Rpb24vbGliL3plcm8uanNcbiAqKiBtb2R1bGUgaWQgPSA0OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG5cbi8vIFRPRE86IHJlZmFjdG9yIGNvbW1vbiBsb2dpYyB3aXRoIHVwZGF0ZUN1cnJWYWx1ZSBhbmQgdXBkYXRlQ3VyclZlbG9jaXR5XG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmludGVycG9sYXRlVmFsdWUgPSBpbnRlcnBvbGF0ZVZhbHVlO1xuZXhwb3J0cy51cGRhdGVDdXJyZW50U3R5bGUgPSB1cGRhdGVDdXJyZW50U3R5bGU7XG5leHBvcnRzLnVwZGF0ZUN1cnJlbnRWZWxvY2l0eSA9IHVwZGF0ZUN1cnJlbnRWZWxvY2l0eTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3N0ZXBwZXIgPSByZXF1aXJlKCcuL3N0ZXBwZXInKTtcblxudmFyIF9zdGVwcGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0ZXBwZXIpO1xuXG52YXIgX3NwcmluZyA9IHJlcXVpcmUoJy4vc3ByaW5nJyk7XG5cbnZhciBfc3ByaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NwcmluZyk7XG5cbmZ1bmN0aW9uIGludGVycG9sYXRlVmFsdWUoYWxwaGEsIG5leHRTdHlsZSwgcHJldlN0eWxlKSB7XG4gIC8vIG1pZ2h0IGJlIHVzZWQgYnkgYSBUcmFuc2l0aW9uTW90aW9uLCB3aGVyZSBwcmV2U3R5bGUgbWlnaHQgbm90IGV4aXN0IGFueW1vcmVcbiAgaWYgKCFwcmV2U3R5bGUpIHtcbiAgICByZXR1cm4gbmV4dFN0eWxlO1xuICB9XG5cbiAgdmFyIHJldCA9IHt9O1xuICBmb3IgKHZhciBrZXkgaW4gbmV4dFN0eWxlKSB7XG4gICAgaWYgKCFuZXh0U3R5bGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKG5leHRTdHlsZVtrZXldID09IG51bGwgfHwgIW5leHRTdHlsZVtrZXldLmNvbmZpZykge1xuICAgICAgcmV0W2tleV0gPSBuZXh0U3R5bGVba2V5XTtcbiAgICAgIC8vIG5vdCBhIHNwcmluZyBjb25maWcsIG5vdCBzb21ldGhpbmcgd2Ugd2FudCB0byBpbnRlcnBvbGF0ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIHZhciBwcmV2VmFsdWUgPSBwcmV2U3R5bGVba2V5XS5jb25maWcgPyBwcmV2U3R5bGVba2V5XS52YWwgOiBwcmV2U3R5bGVba2V5XTtcbiAgICByZXRba2V5XSA9IF9zcHJpbmcyWydkZWZhdWx0J10obmV4dFN0eWxlW2tleV0udmFsICogYWxwaGEgKyBwcmV2VmFsdWUgKiAoMSAtIGFscGhhKSwgbmV4dFN0eWxlW2tleV0uY29uZmlnKTtcbiAgfVxuXG4gIHJldHVybiByZXQ7XG59XG5cbi8vIFRPRE86IHJlZmFjdG9yIGNvbW1vbiBsb2dpYyB3aXRoIHVwZGF0ZUN1cnJlbnRWZWxvY2l0eVxuXG5mdW5jdGlvbiB1cGRhdGVDdXJyZW50U3R5bGUoZnJhbWVSYXRlLCBjdXJyZW50U3R5bGUsIGN1cnJlbnRWZWxvY2l0eSwgc3R5bGUpIHtcbiAgdmFyIHJldCA9IHt9O1xuICBmb3IgKHZhciBrZXkgaW4gc3R5bGUpIHtcbiAgICBpZiAoIXN0eWxlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoc3R5bGVba2V5XSA9PSBudWxsIHx8ICFzdHlsZVtrZXldLmNvbmZpZykge1xuICAgICAgcmV0W2tleV0gPSBzdHlsZVtrZXldO1xuICAgICAgLy8gbm90IGEgc3ByaW5nIGNvbmZpZywgbm90IHNvbWV0aGluZyB3ZSB3YW50IHRvIGludGVycG9sYXRlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgdmFyIF9zdHlsZSRrZXkkY29uZmlnID0gc3R5bGVba2V5XS5jb25maWc7XG4gICAgdmFyIGsgPSBfc3R5bGUka2V5JGNvbmZpZ1swXTtcbiAgICB2YXIgYiA9IF9zdHlsZSRrZXkkY29uZmlnWzFdO1xuXG4gICAgdmFyIHZhbCA9IF9zdGVwcGVyMlsnZGVmYXVsdCddKGZyYW1lUmF0ZSxcbiAgICAvLyBtaWdodCBoYXZlIGJlZW4gYSBub24tc3ByaW5nZWQgcHJvcCB0aGF0IGp1c3QgYmVjYW1lIG9uZVxuICAgIGN1cnJlbnRTdHlsZVtrZXldLnZhbCA9PSBudWxsID8gY3VycmVudFN0eWxlW2tleV0gOiBjdXJyZW50U3R5bGVba2V5XS52YWwsIGN1cnJlbnRWZWxvY2l0eVtrZXldLCBzdHlsZVtrZXldLnZhbCwgaywgYilbMF07XG4gICAgcmV0W2tleV0gPSBfc3ByaW5nMlsnZGVmYXVsdCddKHZhbCwgc3R5bGVba2V5XS5jb25maWcpO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUN1cnJlbnRWZWxvY2l0eShmcmFtZVJhdGUsIGN1cnJlbnRTdHlsZSwgY3VycmVudFZlbG9jaXR5LCBzdHlsZSkge1xuICB2YXIgcmV0ID0ge307XG4gIGZvciAodmFyIGtleSBpbiBzdHlsZSkge1xuICAgIGlmICghc3R5bGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChzdHlsZVtrZXldID09IG51bGwgfHwgIXN0eWxlW2tleV0uY29uZmlnKSB7XG4gICAgICAvLyBub3QgYSBzcHJpbmcgY29uZmlnLCBub3Qgc29tZXRoaW5nIHdlIHdhbnQgdG8gaW50ZXJwb2xhdGVcbiAgICAgIHJldFtrZXldID0gMDtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICB2YXIgX3N0eWxlJGtleSRjb25maWcyID0gc3R5bGVba2V5XS5jb25maWc7XG4gICAgdmFyIGsgPSBfc3R5bGUka2V5JGNvbmZpZzJbMF07XG4gICAgdmFyIGIgPSBfc3R5bGUka2V5JGNvbmZpZzJbMV07XG5cbiAgICB2YXIgdmFsID0gX3N0ZXBwZXIyWydkZWZhdWx0J10oZnJhbWVSYXRlLFxuICAgIC8vIG1pZ2h0IGhhdmUgYmVlbiBhIG5vbi1zcHJpbmdlZCBwcm9wIHRoYXQganVzdCBiZWNhbWUgb25lXG4gICAgY3VycmVudFN0eWxlW2tleV0udmFsID09IG51bGwgPyBjdXJyZW50U3R5bGVba2V5XSA6IGN1cnJlbnRTdHlsZVtrZXldLnZhbCwgY3VycmVudFZlbG9jaXR5W2tleV0sIHN0eWxlW2tleV0udmFsLCBrLCBiKVsxXTtcbiAgICByZXRba2V5XSA9IHZhbDtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LW1vdGlvbi9saWIvdXBkYXRlVHJlZS5qc1xuICoqIG1vZHVsZSBpZCA9IDUwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gc3RlcHBlcjtcblxudmFyIGVycm9yTWFyZ2luID0gMC4wMDAxO1xuXG5mdW5jdGlvbiBzdGVwcGVyKGZyYW1lUmF0ZSwgeCwgdiwgZGVzdFgsIGssIGIpIHtcbiAgLy8gU3ByaW5nIHN0aWZmbmVzcywgaW4ga2cgLyBzXjJcblxuICAvLyBmb3IgYW5pbWF0aW9ucywgZGVzdFggaXMgcmVhbGx5IHNwcmluZyBsZW5ndGggKHNwcmluZyBhdCByZXN0KS4gaW5pdGlhbFxuICAvLyBwb3NpdGlvbiBpcyBjb25zaWRlcmVkIGFzIHRoZSBzdHJldGNoZWQvY29tcHJlc3NlZCBwb3NpdGlvbiBvZiBhIHNwcmluZ1xuICB2YXIgRnNwcmluZyA9IC1rICogKHggLSBkZXN0WCk7XG5cbiAgLy8gRGFtcGluZywgaW4ga2cgLyBzXG4gIHZhciBGZGFtcGVyID0gLWIgKiB2O1xuXG4gIC8vIHVzdWFsbHkgd2UgcHV0IG1hc3MgaGVyZSwgYnV0IGZvciBhbmltYXRpb24gcHVycG9zZXMsIHNwZWNpZnlpbmcgbWFzcyBpcyBhXG4gIC8vIGJpdCByZWR1bmRhbnQuIHlvdSBjb3VsZCBzaW1wbHkgYWRqdXN0IGsgYW5kIGIgYWNjb3JkaW5nbHlcbiAgLy8gbGV0IGEgPSAoRnNwcmluZyArIEZkYW1wZXIpIC8gbWFzcztcbiAgdmFyIGEgPSBGc3ByaW5nICsgRmRhbXBlcjtcblxuICB2YXIgbmV3ViA9IHYgKyBhICogZnJhbWVSYXRlO1xuICB2YXIgbmV3WCA9IHggKyBuZXdWICogZnJhbWVSYXRlO1xuXG4gIGlmIChNYXRoLmFicyhuZXdWIC0gdikgPCBlcnJvck1hcmdpbiAmJiBNYXRoLmFicyhuZXdYIC0geCkgPCBlcnJvck1hcmdpbikge1xuICAgIHJldHVybiBbZGVzdFgsIDBdO1xuICB9XG5cbiAgcmV0dXJuIFtuZXdYLCBuZXdWXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1tb3Rpb24vbGliL3N0ZXBwZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA1MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1snZGVmYXVsdCddID0gc3ByaW5nO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcHJlc2V0cyA9IHJlcXVpcmUoJy4vcHJlc2V0cycpO1xuXG52YXIgX3ByZXNldHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlc2V0cyk7XG5cbmZ1bmN0aW9uIHNwcmluZyh2YWwpIHtcbiAgdmFyIGNvbmZpZyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IF9wcmVzZXRzMlsnZGVmYXVsdCddLm5vV29iYmxlIDogYXJndW1lbnRzWzFdO1xuXG4gIHJldHVybiB7IHZhbDogdmFsLCBjb25maWc6IGNvbmZpZyB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1tb3Rpb24vbGliL3NwcmluZy5qc1xuICoqIG1vZHVsZSBpZCA9IDUyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbi8vIFtzdGlmZm5lc3MsIGRhbXBpbmddXG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0ge1xuICBub1dvYmJsZTogWzE3MCwgMjZdLCAvLyB0aGUgZGVmYXVsdFxuICBnZW50bGU6IFsxMjAsIDE0XSxcbiAgd29iYmx5OiBbMTgwLCAxMl0sXG4gIHN0aWZmOiBbMjEwLCAyMF1cbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LW1vdGlvbi9saWIvcHJlc2V0cy5qc1xuICoqIG1vZHVsZSBpZCA9IDUzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzWydkZWZhdWx0J10gPSBkZXByZWNhdGVkU3ByaW5ncztcbnZhciBoYXNXYXJuZWRGb3JTcHJpbmcgPSB7fTtcbnZhciBoYXNXYXJuZWRGb3JUcmFuc2l0aW9uU3ByaW5nID0ge307XG5cbmZ1bmN0aW9uIGRlcHJlY2F0ZWRTcHJpbmdzKFJlYWN0KSB7XG4gIHZhciBTcHJpbmcgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgZGlzcGxheU5hbWU6ICdTcHJpbmcnLFxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgdmFyIG93bmVyTmFtZSA9IHRoaXMuX3JlYWN0SW50ZXJuYWxJbnN0YW5jZS5fY3VycmVudEVsZW1lbnQuX293bmVyICYmIHRoaXMuX3JlYWN0SW50ZXJuYWxJbnN0YW5jZS5fY3VycmVudEVsZW1lbnQuX293bmVyLmdldE5hbWUoKTtcbiAgICAgICAgaWYgKCFoYXNXYXJuZWRGb3JTcHJpbmdbb3duZXJOYW1lXSkge1xuICAgICAgICAgIGhhc1dhcm5lZEZvclNwcmluZ1tvd25lck5hbWVdID0gdHJ1ZTtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdTcHJpbmcgKHVzZWQgaW4gJXNyZW5kZXIpIGhhcyBub3cgYmVlbiByZW5hbWVkIHRvIE1vdGlvbi4gJyArICdQbGVhc2Ugc2VlIHRoZSByZWxlYXNlIG5vdGUgZm9yIHRoZSB1cGdyYWRlIHBhdGguIFRoYW5rIHlvdSEnLCBvd25lck5hbWUgPyBvd25lck5hbWUgKyAnXFwncyAnIDogJ1JlYWN0LicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9KTtcblxuICB2YXIgVHJhbnNpdGlvblNwcmluZyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICBkaXNwbGF5TmFtZTogJ1RyYW5zaXRpb25TcHJpbmcnLFxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgdmFyIG93bmVyTmFtZSA9IHRoaXMuX3JlYWN0SW50ZXJuYWxJbnN0YW5jZS5fY3VycmVudEVsZW1lbnQuX293bmVyICYmIHRoaXMuX3JlYWN0SW50ZXJuYWxJbnN0YW5jZS5fY3VycmVudEVsZW1lbnQuX293bmVyLmdldE5hbWUoKTtcbiAgICAgICAgaWYgKCFoYXNXYXJuZWRGb3JUcmFuc2l0aW9uU3ByaW5nW293bmVyTmFtZV0pIHtcbiAgICAgICAgICBoYXNXYXJuZWRGb3JUcmFuc2l0aW9uU3ByaW5nW293bmVyTmFtZV0gPSB0cnVlO1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RyYW5zaXRpb25TcHJpbmcgKHVzZWQgaW4gJXNyZW5kZXIpIGhhcyBub3cgYmVlbiByZW5hbWVkIHRvICcgKyAnVHJhbnNpdGlvbk1vdGlvbi4gUGxlYXNlIHNlZSB0aGUgcmVsZWFzZSBub3RlIGZvciB0aGUgdXBncmFkZSAnICsgJ3BhdGguIFRoYW5rIHlvdSEnLCBvd25lck5hbWUgPyBvd25lck5hbWUgKyAnXFwncyAnIDogJ1JlYWN0LicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4geyBTcHJpbmc6IFNwcmluZywgVHJhbnNpdGlvblNwcmluZzogVHJhbnNpdGlvblNwcmluZyB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1tb3Rpb24vbGliL2RlcHJlY2F0ZWRTcHJpbmdzLmpzXG4gKiogbW9kdWxlIGlkID0gNTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxuLy8gdHVybiB7eDoge3ZhbDogMSwgY29uZmlnOiBbMSwgMl19LCB5OiAyfSBnZW5lcmF0ZWQgYnlcbi8vIGB7eDogc3ByaW5nKDEsIFsxLCAyXSksIHk6IDJ9YCBpbnRvIHt4OiAxLCB5OiAyfVxuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzWydkZWZhdWx0J10gPSBzdHJpcFN0eWxlO1xuXG5mdW5jdGlvbiBzdHJpcFN0eWxlKHN0eWxlKSB7XG4gIHZhciByZXQgPSB7fTtcbiAgZm9yICh2YXIga2V5IGluIHN0eWxlKSB7XG4gICAgaWYgKCFzdHlsZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgcmV0W2tleV0gPSBzdHlsZVtrZXldID09IG51bGwgfHwgc3R5bGVba2V5XS52YWwgPT0gbnVsbCA/IHN0eWxlW2tleV0gOiBzdHlsZVtrZXldLnZhbDtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1tb3Rpb24vbGliL3N0cmlwU3R5bGUuanNcbiAqKiBtb2R1bGUgaWQgPSA1NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHJlb3JkZXJLZXlzO1xuXG5mdW5jdGlvbiByZW9yZGVyS2V5cyhvYmosIGYpIHtcbiAgdmFyIG5ld0tleXMgPSBmKE9iamVjdC5rZXlzKG9iaikpO1xuICB2YXIgcmV0ID0ge307XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbmV3S2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBuZXdLZXlzW2ldO1xuICAgIHJldFtrZXldID0gb2JqW2tleV07XG4gIH1cblxuICByZXR1cm4gcmV0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LW1vdGlvbi9saWIvcmVvcmRlcktleXMuanNcbiAqKiBtb2R1bGUgaWQgPSA1NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IHJlYWN0MTMgPSBpc1JlYWN0MTMoUmVhY3QpO1xyXG52YXIgZGlkV2FybkFib3V0Q2hpbGQgPSBmYWxzZTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kRE9NTm9kZShjb21wb25lbnQpe1xyXG4gICAgaWYoIXJlYWN0MTMpe1xyXG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4gUmVhY3QuZmluZERPTU5vZGUoY29tcG9uZW50KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHdhcm5BYm91dEZ1bmN0aW9uQ2hpbGQoKSB7XHJcbiAgICBpZiAoZGlkV2FybkFib3V0Q2hpbGQgfHwgcmVhY3QxMykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZGlkV2FybkFib3V0Q2hpbGQgPSB0cnVlO1xyXG4gICAgY29uc29sZS5lcnJvcignV2l0aCBSZWFjdCAwLjE0IGFuZCBsYXRlciB2ZXJzaW9ucywgeW91IG5vIGxvbmdlciBuZWVkIHRvIHdyYXAgPFNjcm9sbEFyZWE+IGNoaWxkIGludG8gYSBmdW5jdGlvbi4nKTtcclxuICB9XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd2FybkFib3V0RWxlbWVudENoaWxkKCkge1xyXG4gICAgaWYgKGRpZFdhcm5BYm91dENoaWxkIHx8ICFyZWFjdDEzKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZGlkV2FybkFib3V0Q2hpbGQgPSB0cnVlO1xyXG4gICAgY29uc29sZS5lcnJvciggJ1dpdGggUmVhY3QgMC4xMywgeW91IG5lZWQgdG8gd3JhcCA8U2Nyb2xsQXJlYT4gY2hpbGQgaW50byBhIGZ1bmN0aW9uLicgKTtcclxuICB9XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9zaXRpdmVPclplcm8obnVtYmVyKXtcclxuICAgIHJldHVybiBudW1iZXIgPCAwID8gMCA6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1vZGlmeU9ialZhbHVlcyAob2JqLCBtb2RpZmllciA9IHggPT4geCl7XHJcbiAgICBsZXQgbW9kaWZpZWRPYmogPSB7fTtcclxuICAgIGZvcihsZXQga2V5IGluIG9iail7XHJcbiAgICAgICAgaWYob2JqLmhhc093blByb3BlcnR5KGtleSkpIG1vZGlmaWVkT2JqW2tleV0gPSBtb2RpZmllcihvYmpba2V5XSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBtb2RpZmllZE9iajtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVhY3QxMyhSZWFjdCkge1xyXG4gICAgY29uc3QgeyB2ZXJzaW9uIH0gPSBSZWFjdDtcclxuICAgIGlmICh0eXBlb2YgdmVyc2lvbiAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwYXJ0cyA9IHZlcnNpb24uc3BsaXQoJy4nKTtcclxuICAgIGNvbnN0IG1ham9yID0gcGFyc2VJbnQocGFydHNbMF0sIDEwKTtcclxuICAgIGNvbnN0IG1pbm9yID0gcGFyc2VJbnQocGFydHNbMV0sIDEwKTtcclxuXHJcbiAgICByZXR1cm4gbWFqb3IgPT09IDAgJiYgbWlub3IgPT09IDEzO1xyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL3V0aWxzLmpzXG4gKiovIiwiLy8gTG9hZCBpbiBkZXBlbmRlbmNpZXNcbnZhciBjb21wdXRlZFN0eWxlID0gcmVxdWlyZSgnY29tcHV0ZWQtc3R5bGUnKTtcblxuLyoqXG4gKiBDYWxjdWxhdGUgdGhlIGBsaW5lLWhlaWdodGAgb2YgYSBnaXZlbiBub2RlXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBub2RlIEVsZW1lbnQgdG8gY2FsY3VsYXRlIGxpbmUgaGVpZ2h0IG9mLiBNdXN0IGJlIGluIHRoZSBET00uXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBgbGluZS1oZWlnaHRgIG9mIHRoZSBlbGVtZW50IGluIHBpeGVsc1xuICovXG5mdW5jdGlvbiBsaW5lSGVpZ2h0KG5vZGUpIHtcbiAgLy8gR3JhYiB0aGUgbGluZS1oZWlnaHQgdmlhIHN0eWxlXG4gIHZhciBsbkhlaWdodFN0ciA9IGNvbXB1dGVkU3R5bGUobm9kZSwgJ2xpbmUtaGVpZ2h0JyksXG4gICAgICBsbkhlaWdodCA9IHBhcnNlRmxvYXQobG5IZWlnaHRTdHIsIDEwKTtcblxuICAvLyBJZiB0aGUgbGluZUhlaWdodCBkaWQgbm90IGNvbnRhaW4gYSB1bml0IChpLmUuIGl0IHdhcyBudW1lcmljKSwgY29udmVydCBpdCB0byBlbXMgKGUuZy4gJzIuMycgPT09ICcyLjNlbScpXG4gIGlmIChsbkhlaWdodFN0ciA9PT0gbG5IZWlnaHQgKyAnJykge1xuICAgIC8vIFNhdmUgdGhlIG9sZCBsaW5lSGVpZ2h0IHN0eWxlIGFuZCB1cGRhdGUgdGhlIGVtIHVuaXQgdG8gdGhlIGVsZW1lbnRcbiAgICB2YXIgX2xuSGVpZ2h0U3R5bGUgPSBub2RlLnN0eWxlLmxpbmVIZWlnaHQ7XG4gICAgbm9kZS5zdHlsZS5saW5lSGVpZ2h0ID0gbG5IZWlnaHRTdHIgKyAnZW0nO1xuXG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBlbSBiYXNlZCBoZWlnaHRcbiAgICBsbkhlaWdodFN0ciA9IGNvbXB1dGVkU3R5bGUobm9kZSwgJ2xpbmUtaGVpZ2h0Jyk7XG4gICAgbG5IZWlnaHQgPSBwYXJzZUZsb2F0KGxuSGVpZ2h0U3RyLCAxMCk7XG5cbiAgICAvLyBSZXZlcnQgdGhlIGxpbmVIZWlnaHQgc3R5bGVcbiAgICBpZiAoX2xuSGVpZ2h0U3R5bGUpIHtcbiAgICAgIG5vZGUuc3R5bGUubGluZUhlaWdodCA9IF9sbkhlaWdodFN0eWxlO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgbm9kZS5zdHlsZS5saW5lSGVpZ2h0O1xuICAgIH1cbiAgfVxuXG4gIC8vIElmIHRoZSBsaW5lSGVpZ2h0IGlzIGluIGBwdGAsIGNvbnZlcnQgaXQgdG8gcGl4ZWxzICg0cHggZm9yIDNwdClcbiAgLy8gREVWOiBgZW1gIHVuaXRzIGFyZSBjb252ZXJ0ZWQgdG8gYHB0YCBpbiBJRTZcbiAgLy8gQ29udmVyc2lvbiByYXRpbyBmcm9tIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9sZW5ndGhcbiAgaWYgKGxuSGVpZ2h0U3RyLmluZGV4T2YoJ3B0JykgIT09IC0xKSB7XG4gICAgbG5IZWlnaHQgKj0gNDtcbiAgICBsbkhlaWdodCAvPSAzO1xuICB9IGVsc2UgaWYgKGxuSGVpZ2h0U3RyLmluZGV4T2YoJ21tJykgIT09IC0xKSB7XG4gIC8vIE90aGVyd2lzZSwgaWYgdGhlIGxpbmVIZWlnaHQgaXMgaW4gYG1tYCwgY29udmVydCBpdCB0byBwaXhlbHMgKDk2cHggZm9yIDI1LjRtbSlcbiAgICBsbkhlaWdodCAqPSA5NjtcbiAgICBsbkhlaWdodCAvPSAyNS40O1xuICB9IGVsc2UgaWYgKGxuSGVpZ2h0U3RyLmluZGV4T2YoJ2NtJykgIT09IC0xKSB7XG4gIC8vIE90aGVyd2lzZSwgaWYgdGhlIGxpbmVIZWlnaHQgaXMgaW4gYGNtYCwgY29udmVydCBpdCB0byBwaXhlbHMgKDk2cHggZm9yIDIuNTRjbSlcbiAgICBsbkhlaWdodCAqPSA5NjtcbiAgICBsbkhlaWdodCAvPSAyLjU0O1xuICB9IGVsc2UgaWYgKGxuSGVpZ2h0U3RyLmluZGV4T2YoJ2luJykgIT09IC0xKSB7XG4gIC8vIE90aGVyd2lzZSwgaWYgdGhlIGxpbmVIZWlnaHQgaXMgaW4gYGluYCwgY29udmVydCBpdCB0byBwaXhlbHMgKDk2cHggZm9yIDFpbilcbiAgICBsbkhlaWdodCAqPSA5NjtcbiAgfSBlbHNlIGlmIChsbkhlaWdodFN0ci5pbmRleE9mKCdwYycpICE9PSAtMSkge1xuICAvLyBPdGhlcndpc2UsIGlmIHRoZSBsaW5lSGVpZ2h0IGlzIGluIGBwY2AsIGNvbnZlcnQgaXQgdG8gcGl4ZWxzICgxMnB0IGZvciAxcGMpXG4gICAgbG5IZWlnaHQgKj0gMTY7XG4gIH1cblxuICAvLyBDb250aW51ZSBvdXIgY29tcHV0YXRpb25cbiAgbG5IZWlnaHQgPSBNYXRoLnJvdW5kKGxuSGVpZ2h0KTtcblxuICAvLyBJZiB0aGUgbGluZS1oZWlnaHQgaXMgXCJub3JtYWxcIiwgY2FsY3VsYXRlIGJ5IGZvbnQtc2l6ZVxuICBpZiAobG5IZWlnaHRTdHIgPT09ICdub3JtYWwnKSB7XG4gICAgLy8gQ3JlYXRlIGEgdGVtcG9yYXJ5IG5vZGVcbiAgICB2YXIgbm9kZU5hbWUgPSBub2RlLm5vZGVOYW1lLFxuICAgICAgICBfbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobm9kZU5hbWUpO1xuICAgIF9ub2RlLmlubmVySFRNTCA9ICcmbmJzcDsnO1xuXG4gICAgLy8gU2V0IHRoZSBmb250LXNpemUgb2YgdGhlIGVsZW1lbnRcbiAgICB2YXIgZm9udFNpemVTdHIgPSBjb21wdXRlZFN0eWxlKG5vZGUsICdmb250LXNpemUnKTtcbiAgICBfbm9kZS5zdHlsZS5mb250U2l6ZSA9IGZvbnRTaXplU3RyO1xuXG4gICAgLy8gQXBwZW5kIGl0IHRvIHRoZSBib2R5XG4gICAgdmFyIGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoX25vZGUpO1xuXG4gICAgLy8gQXNzdW1lIHRoZSBsaW5lIGhlaWdodCBvZiB0aGUgZWxlbWVudCBpcyB0aGUgaGVpZ2h0XG4gICAgdmFyIGhlaWdodCA9IF9ub2RlLm9mZnNldEhlaWdodDtcbiAgICBsbkhlaWdodCA9IGhlaWdodDtcblxuICAgIC8vIFJlbW92ZSBvdXIgY2hpbGQgZnJvbSB0aGUgRE9NXG4gICAgYm9keS5yZW1vdmVDaGlsZChfbm9kZSk7XG4gIH1cblxuICAvLyBSZXR1cm4gdGhlIGNhbGN1bGF0ZWQgaGVpZ2h0XG4gIHJldHVybiBsbkhlaWdodDtcbn1cblxuLy8gRXhwb3J0IGxpbmVIZWlnaHRcbm1vZHVsZS5leHBvcnRzID0gbGluZUhlaWdodDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9saW5lLWhlaWdodC9saWIvbGluZS1oZWlnaHQuanNcbiAqKiBtb2R1bGUgaWQgPSA1OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gVGhpcyBjb2RlIGhhcyBiZWVuIHJlZmFjdG9yZWQgZm9yIDE0MCBieXRlc1xuLy8gWW91IGNhbiBzZWUgdGhlIG9yaWdpbmFsIGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS90d29sZnNvbi9jb21wdXRlZFN0eWxlL2Jsb2IvMDRjZDFkYTJlMzBmYTQ1ODQ0Zjk1ZjVjYjFhYzg5OGU5YjllZjA1MC9saWIvY29tcHV0ZWRTdHlsZS5qc1xudmFyIGNvbXB1dGVkU3R5bGUgPSBmdW5jdGlvbiAoZWwsIHByb3AsIGdldENvbXB1dGVkU3R5bGUpIHtcbiAgZ2V0Q29tcHV0ZWRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlO1xuXG4gIC8vIEluIG9uZSBmZWxsIHN3b29wXG4gIHJldHVybiAoXG4gICAgLy8gSWYgd2UgaGF2ZSBnZXRDb21wdXRlZFN0eWxlXG4gICAgZ2V0Q29tcHV0ZWRTdHlsZSA/XG4gICAgICAvLyBRdWVyeSBpdFxuICAgICAgLy8gVE9ETzogRnJvbSBDU1MtUXVlcnkgbm90ZXMsIHdlIG1pZ2h0IG5lZWQgKG5vZGUsIG51bGwpIGZvciBGRlxuICAgICAgZ2V0Q29tcHV0ZWRTdHlsZShlbCkgOlxuXG4gICAgLy8gT3RoZXJ3aXNlLCB3ZSBhcmUgaW4gSUUgYW5kIHVzZSBjdXJyZW50U3R5bGVcbiAgICAgIGVsLmN1cnJlbnRTdHlsZVxuICApW1xuICAgIC8vIFN3aXRjaCB0byBjYW1lbENhc2UgZm9yIENTU09NXG4gICAgLy8gREVWOiBHcmFiYmVkIGZyb20galF1ZXJ5XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2pxdWVyeS9qcXVlcnkvYmxvYi8xLjktc3RhYmxlL3NyYy9jc3MuanMjTDE5MS1MMTk0XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2pxdWVyeS9qcXVlcnkvYmxvYi8xLjktc3RhYmxlL3NyYy9jb3JlLmpzI0w1OTMtTDU5N1xuICAgIHByb3AucmVwbGFjZSgvLShcXHcpL2dpLCBmdW5jdGlvbiAod29yZCwgbGV0dGVyKSB7XG4gICAgICByZXR1cm4gbGV0dGVyLnRvVXBwZXJDYXNlKCk7XG4gICAgfSlcbiAgXTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY29tcHV0ZWRTdHlsZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvbXB1dGVkLXN0eWxlL2Rpc3QvY29tcHV0ZWRTdHlsZS5jb21tb25qcy5qc1xuICoqIG1vZHVsZSBpZCA9IDU5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9