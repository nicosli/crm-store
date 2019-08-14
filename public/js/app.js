webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(5);
module.exports = __webpack_require__(19);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_buefy__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_buefy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_buefy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_apexcharts__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_apexcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_apexcharts__);

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

window.Vue = __webpack_require__(0);



Vue.component('apexchart', __WEBPACK_IMPORTED_MODULE_1_vue_apexcharts___default.a);

Vue.component('lista-proveedores', __webpack_require__(13));

Vue.use(__WEBPACK_IMPORTED_MODULE_0_buefy___default.a, {
    defaultIconPack: 'fa'
});

Vue.use(__webpack_require__(17));
Vue.http.headers.common['Access-Control-Allow-Origin'] = '*';
Vue.http.interceptors.push(function (request, next) {
    request.headers.set('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjdmMjk0MTdmMjhkNTg4ZTJhODNkMjNkMGY0YmU4MjRhM2UzNDI5N2U1YjMzNTk5MWIyYTYyMWViNDZiYTAzYThkZTBlYmUxNDBjM2IxMWM2In0.eyJhdWQiOiIxIiwianRpIjoiN2YyOTQxN2YyOGQ1ODhlMmE4M2QyM2QwZjRiZTgyNGEzZTM0Mjk3ZTViMzM1OTkxYjJhNjIxZWI0NmJhMDNhOGRlMGViZTE0MGMzYjExYzYiLCJpYXQiOjE1NjU3MTUxNDQsIm5iZiI6MTU2NTcxNTE0NCwiZXhwIjoxNTk3MzM3NTQ0LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.a7gqi8rWV_SOxLr7FrH-6H9loQiVA2R_vw1X08dJNx27oPPStCnmF7vI2U809oUxNSN9srGMdj0twFKyTJX_WRk7igmknnMjo7e2xRLXRuf9alfb0uTD63ZLZwRcNksUujzmbbrfxRWokYidOxyx_WoPrxhAodN_1ktRtUGEpcPWewFHONlpHGFQAYk5YZxAcqxCxLltI8XjkyKwQN-8UZe1vCqPzlbderalilFzFFcZ-MhgY6FkQnGVkv0ISB5Gwc0G9iG39mo7jPGmKzXad_Na5IA8JiHS3aXacgVp7jfd71K7rKNROtswMrXO6dqHi8rxPHBCHPbaOPZQGCtCYvc5phUKuWlsdQuYhJFvn7kvCn8-Bxo7RNH5DBmh8Y255aAegVq0s6BUqRbZx6Ur8jvBVD2nJCbm3r9JCU6_j8ZYHqo1NiCNIy8KiSrNi1i9rLHrdMp-YFHtMzclyyfqdLfnipe_FOkunJGgFP7b8H_3v54S-KQ36wT_9vGXFQdKduq0Gao_IWjmoezT6T70JlPkVOlUlvr-rDdSmvPPTyQjzHPBx7nORfpV3V1qlXNyqHVHhxEYBDydSRYFpWVJ0c1AGG4Tcy7PfVW6eep0cnkmJI5LDvPck_bHPfyYs2AmAQA474OPxeaG-VN6hv9OqEa05TWNU4UgzMbrPvaVTn0');
    request.headers.set('Content-Type', 'application/x-www-form-urlencoded');
    request.headers.set('Accept', 'application/json');
    next();
});

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

var app = new Vue({
    el: '#app'
});

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(10)) :
  typeof define === 'function' && define.amd ? define(['apexcharts'], factory) :
  (global.VueApexCharts = factory(global.ApexCharts));
}(this, (function (ApexCharts) { 'use strict';

  ApexCharts = ApexCharts && ApexCharts.hasOwnProperty('default') ? ApexCharts['default'] : ApexCharts;

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var ApexChartsComponent = {
    props: {
      options: {
        type: Object
      },
      type: {
        type: String,
        default: 'line'
      },
      series: {
        type: Array,
        required: true,
        default: function _default() {
          return [];
        }
      },
      width: {
        default: '100%'
      },
      height: {
        default: 'auto'
      }
    },
    data: function data() {
      return {
        chart: null
      };
    },
    beforeMount: function beforeMount() {
      window.ApexCharts = ApexCharts;
    },
    mounted: function mounted() {
      this.init();
    },
    created: function created() {
      var _this = this;

      this.$watch('options', function (options) {
        if (!_this.chart && options) {
          _this.init();
        } else {
          _this.chart.updateOptions(_this.options);
        }
      });
      this.$watch('series', function (series) {
        if (!_this.chart && series) {
          _this.init();
        } else {
          _this.chart.updateSeries(_this.series);
        }
      }, {
        deep: true
      });
      var watched = ['type', 'width', 'height'];
      watched.forEach(function (prop) {
        _this.$watch(prop, function () {
          _this.refresh();
        });
      });
    },
    beforeDestroy: function beforeDestroy() {
      if (!this.chart) {
        return;
      }

      this.destroy();
    },
    render: function render(createElement) {
      return createElement('div');
    },
    methods: {
      init: function init() {
        var _this2 = this;

        var newOptions = {
          chart: {
            type: this.type,
            height: this.height,
            width: this.width,
            events: {}
          },
          series: this.series
        };
        Object.keys(this.$listeners).forEach(function (evt) {
          newOptions.chart.events[evt] = _this2.$listeners[evt];
        });
        var config = this.extend(this.options, newOptions);
        this.chart = new ApexCharts(this.$el, config);
        this.chart.render();
      },
      isObject: function isObject(item) {
        return item && _typeof(item) === 'object' && !Array.isArray(item) && item != null;
      },
      extend: function extend(target, source) {
        var _this3 = this;

        if (typeof Object.assign !== 'function') {
          (function () {
            Object.assign = function (target) {
              // We must check against these specific cases.
              if (target === undefined || target === null) {
                throw new TypeError('Cannot convert undefined or null to object');
              }

              var output = Object(target);

              for (var index = 1; index < arguments.length; index++) {
                var _source = arguments[index];

                if (_source !== undefined && _source !== null) {
                  for (var nextKey in _source) {
                    if (_source.hasOwnProperty(nextKey)) {
                      output[nextKey] = _source[nextKey];
                    }
                  }
                }
              }

              return output;
            };
          })();
        }

        var output = Object.assign({}, target);

        if (this.isObject(target) && this.isObject(source)) {
          Object.keys(source).forEach(function (key) {
            if (_this3.isObject(source[key])) {
              if (!(key in target)) {
                Object.assign(output, _defineProperty({}, key, source[key]));
              } else {
                output[key] = _this3.extend(target[key], source[key]);
              }
            } else {
              Object.assign(output, _defineProperty({}, key, source[key]));
            }
          });
        }

        return output;
      },
      refresh: function refresh() {
        this.destroy();
        this.init();
      },
      destroy: function destroy() {
        this.chart.destroy();
      },
      updateSeries: function updateSeries(newSeries, animate) {
        this.chart.updateSeries(newSeries, animate);
      },
      updateOptions: function updateOptions(newOptions, redrawPaths, animate) {
        this.chart.updateOptions(newOptions, redrawPaths, animate);
      },
      toggleSeries: function toggleSeries(seriesName) {
        this.chart.toggleSeries(seriesName);
      },
      resetSeries: function resetSeries() {
        this.chart.resetSeries();
      },
      toggleDataPointSelection: function toggleDataPointSelection(seriesIndex, dataPointIndex) {
        this.chart.toggleDataPointSelection(seriesIndex, dataPointIndex);
      },
      appendData: function appendData(newData) {
        this.chart.appendData(newData);
      },
      addText: function addText(options) {
        this.chart.addText(options);
      },
      dataURI: function dataURI() {
        return this.chart.dataURI();
      },
      addXaxisAnnotation: function addXaxisAnnotation(options, pushToMemory) {
        this.chart.addXaxisAnnotation(options, pushToMemory);
      },
      addYaxisAnnotation: function addYaxisAnnotation(options, pushToMemory) {
        this.chart.addYaxisAnnotation(options, pushToMemory);
      },
      addPointAnnotation: function addPointAnnotation(options, pushToMemory) {
        this.chart.addPointAnnotation(options, pushToMemory);
      },
      clearAnnotations: function clearAnnotations() {
        this.chart.clearAnnotations();
      }
    }
  };

  var VueApexCharts = ApexChartsComponent;
  window.ApexCharts = ApexCharts;

  VueApexCharts.install = function (Vue) {
    //adding a global method or property
    Vue.ApexCharts = ApexCharts;
    window.ApexCharts = ApexCharts; // add the instance method

    Object.defineProperty(Vue.prototype, '$apexcharts', {
      get: function get() {
        return ApexCharts;
      }
    });
  };

  return VueApexCharts;

})));


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(setImmediate, module) {/*!
 * ApexCharts v3.8.4
 * (c) 2018-2019 Juned Chhipa
 * Released under the MIT License.
 */
function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function _createClass(t,e,i){return e&&_defineProperties(t.prototype,e),i&&_defineProperties(t,i),t}function _defineProperty(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},s=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),s.forEach(function(e){_defineProperty(t,e,i[e])})}return t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_nonIterableSpread()}function _arrayWithoutHoles(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}function _iterableToArray(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}var Utils=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"shadeRGBColor",value:function(t,e){var i=e.split(","),s=t<0?0:255,a=t<0?-1*t:t,r=parseInt(i[0].slice(4)),n=parseInt(i[1]),o=parseInt(i[2]);return"rgb("+(Math.round((s-r)*a)+r)+","+(Math.round((s-n)*a)+n)+","+(Math.round((s-o)*a)+o)+")"}},{key:"shadeHexColor",value:function(t,e){var i=parseInt(e.slice(1),16),s=t<0?0:255,a=t<0?-1*t:t,r=i>>16,n=i>>8&255,o=255&i;return"#"+(16777216+65536*(Math.round((s-r)*a)+r)+256*(Math.round((s-n)*a)+n)+(Math.round((s-o)*a)+o)).toString(16).slice(1)}},{key:"shadeColor",value:function(t,e){return e.length>7?this.shadeRGBColor(t,e):this.shadeHexColor(t,e)}}],[{key:"bind",value:function(t,e){return function(){return t.apply(e,arguments)}}},{key:"isObject",value:function(t){return t&&"object"===_typeof(t)&&!Array.isArray(t)&&null!=t}},{key:"listToArray",value:function(t){var e,i=[];for(e=0;e<t.length;e++)i[e]=t[e];return i}},{key:"extend",value:function(t,e){var i=this;"function"!=typeof Object.assign&&(Object.assign=function(t){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),i=1;i<arguments.length;i++){var s=arguments[i];if(null!=s)for(var a in s)s.hasOwnProperty(a)&&(e[a]=s[a])}return e});var s=Object.assign({},t);return this.isObject(t)&&this.isObject(e)&&Object.keys(e).forEach(function(a){i.isObject(e[a])&&a in t?s[a]=i.extend(t[a],e[a]):Object.assign(s,_defineProperty({},a,e[a]))}),s}},{key:"extendArray",value:function(e,i){var s=[];return e.map(function(e){s.push(t.extend(i,e))}),e=s}},{key:"monthMod",value:function(t){return t%12}},{key:"addProps",value:function(t,e,i){"string"==typeof e&&(e=e.split(".")),t[e[0]]=t[e[0]]||{};var s=t[e[0]];return e.length>1?(e.shift(),this.addProps(s,e,i)):t[e[0]]=i,t}},{key:"clone",value:function(t){if("[object Array]"===Object.prototype.toString.call(t)){for(var e=[],i=0;i<t.length;i++)e[i]=this.clone(t[i]);return e}if("object"===_typeof(t)){var s={};for(var a in t)t.hasOwnProperty(a)&&(s[a]=this.clone(t[a]));return s}return t}},{key:"log10",value:function(t){return Math.log(t)/Math.LN10}},{key:"roundToBase10",value:function(t){return Math.pow(10,Math.floor(Math.log10(t)))}},{key:"roundToBase",value:function(t,e){return Math.pow(e,Math.floor(Math.log(t)/Math.log(e)))}},{key:"parseNumber",value:function(t){return null===t?t:parseFloat(t)}},{key:"noExponents",value:function(t){var e=String(t).split(/[eE]/);if(1==e.length)return e[0];var i="",s=t<0?"-":"",a=e[0].replace(".",""),r=Number(e[1])+1;if(r<0){for(i=s+"0.";r++;)i+="0";return i+a.replace(/^\-/,"")}for(r-=a.length;r--;)i+="0";return a+i}},{key:"getDimensions",value:function(t){var e=getComputedStyle(t),i=[],s=t.clientHeight,a=t.clientWidth;return s-=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom),a-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight),i.push(a),i.push(s),i}},{key:"getBoundingClientRect",value:function(t){var e=t.getBoundingClientRect();return{top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.width,height:e.height,x:e.x,y:e.y}}},{key:"hexToRgba",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#999999",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.6;"#"!==t.substring(0,1)&&(t="#999999");var i=t.replace("#","");i=i.match(new RegExp("(.{"+i.length/3+"})","g"));for(var s=0;s<i.length;s++)i[s]=parseInt(1===i[s].length?i[s]+i[s]:i[s],16);return void 0!==e&&i.push(e),"rgba("+i.join(",")+")"}},{key:"getOpacityFromRGBA",value:function(t){return(t=t.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i))[3]}},{key:"rgb2hex",value:function(t){return(t=t.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i))&&4===t.length?"#"+("0"+parseInt(t[1],10).toString(16)).slice(-2)+("0"+parseInt(t[2],10).toString(16)).slice(-2)+("0"+parseInt(t[3],10).toString(16)).slice(-2):""}},{key:"isColorHex",value:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)}},{key:"polarToCartesian",value:function(t,e,i,s){var a=(s-90)*Math.PI/180;return{x:t+i*Math.cos(a),y:e+i*Math.sin(a)}}},{key:"escapeString",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"x",i=t.toString().slice();return i=i.replace(/[` ~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,e)}},{key:"negToZero",value:function(t){return t<0?0:t}},{key:"moveIndexInArray",value:function(t,e,i){if(i>=t.length)for(var s=i-t.length+1;s--;)t.push(void 0);return t.splice(i,0,t.splice(e,1)[0]),t}},{key:"extractNumber",value:function(t){return parseFloat(t.replace(/[^\d\.]*/g,""))}},{key:"randomString",value:function(t){for(var e="",i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",s=0;s<t;s++)e+=i.charAt(Math.floor(Math.random()*i.length));return e}},{key:"findAncestor",value:function(t,e){for(;(t=t.parentElement)&&!t.classList.contains(e););return t}},{key:"setELstyles",value:function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t.style.key=e[i])}},{key:"isNumber",value:function(t){return!isNaN(t)&&parseFloat(Number(t))===t&&!isNaN(parseInt(t,10))}},{key:"isFloat",value:function(t){return Number(t)===t&&t%1!=0}},{key:"isSafari",value:function(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)}},{key:"isFirefox",value:function(){return navigator.userAgent.toLowerCase().indexOf("firefox")>-1}},{key:"isIE11",value:function(){if(-1!==window.navigator.userAgent.indexOf("MSIE")||window.navigator.appVersion.indexOf("Trident/")>-1)return!0}},{key:"isIE",value:function(){var t=window.navigator.userAgent,e=t.indexOf("MSIE ");if(e>0)return parseInt(t.substring(e+5,t.indexOf(".",e)),10);if(t.indexOf("Trident/")>0){var i=t.indexOf("rv:");return parseInt(t.substring(i+3,t.indexOf(".",i)),10)}var s=t.indexOf("Edge/");return s>0&&parseInt(t.substring(s+5,t.indexOf(".",s)),10)}}]),t}(),Filters=function(){function t(e){_classCallCheck(this,t),this.ctx=e,this.w=e.w}return _createClass(t,[{key:"getDefaultFilter",value:function(t,e){var i=this.w;t.unfilter(!0),(new window.SVG.Filter).size("120%","180%","-5%","-40%"),"none"!==i.config.states.normal.filter?this.applyFilter(t,e,i.config.states.normal.filter.type,i.config.states.normal.filter.value):i.config.chart.dropShadow.enabled&&this.dropShadow(t,i.config.chart.dropShadow,e)}},{key:"addNormalFilter",value:function(t,e){var i=this.w;i.config.chart.dropShadow.enabled&&this.dropShadow(t,i.config.chart.dropShadow,e)}},{key:"addLightenFilter",value:function(t,e,i){var s=this,a=this.w,r=i.intensity;if(!Utils.isFirefox()){t.unfilter(!0);var n=new window.SVG.Filter;n.size("120%","180%","-5%","-40%"),t.filter(function(t){var i=a.config.chart.dropShadow;(n=i.enabled?s.addShadow(t,e,i):t).componentTransfer({rgb:{type:"linear",slope:1.5,intercept:r}})}),t.filterer.node.setAttribute("filterUnits","userSpaceOnUse")}}},{key:"addDarkenFilter",value:function(t,e,i){var s=this,a=this.w,r=i.intensity;if(!Utils.isFirefox()){t.unfilter(!0);var n=new window.SVG.Filter;n.size("120%","180%","-5%","-40%"),t.filter(function(t){var i=a.config.chart.dropShadow;(n=i.enabled?s.addShadow(t,e,i):t).componentTransfer({rgb:{type:"linear",slope:r}})}),t.filterer.node.setAttribute("filterUnits","userSpaceOnUse")}}},{key:"applyFilter",value:function(t,e,i){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5;switch(i){case"none":this.addNormalFilter(t,e);break;case"lighten":this.addLightenFilter(t,e,{intensity:s});break;case"darken":this.addDarkenFilter(t,e,{intensity:s})}}},{key:"addShadow",value:function(t,e,i){var s=i.blur,a=i.top,r=i.left,n=i.color,o=i.opacity,l=t.flood(Array.isArray(n)?n[e]:n,o).composite(t.sourceAlpha,"in").offset(r,a).gaussianBlur(s).merge(t.source);return t.blend(t.source,l)}},{key:"dropShadow",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=e.top,a=e.left,r=e.blur,n=e.color,o=e.opacity,l=e.noUserSpaceOnUse,h=this.w;return t.unfilter(!0),Utils.isIE()&&"radialBar"===h.config.chart.type?t:(n=Array.isArray(n)?n[i]:n,(new window.SVG.Filter).size("120%","180%","-5%","-40%"),t.filter(function(t){var e=null;e=Utils.isSafari()||Utils.isFirefox()||Utils.isIE()?t.flood(n,o).composite(t.sourceAlpha,"in").offset(a,s).gaussianBlur(r):t.flood(n,o).composite(t.sourceAlpha,"in").offset(a,s).gaussianBlur(r).merge(t.source),t.blend(t.source,e)}),l||t.filterer.node.setAttribute("filterUnits","userSpaceOnUse"),t)}},{key:"setSelectionFilter",value:function(t,e,i){var s=this.w;if(void 0!==s.globals.selectedDataPoints[e]&&s.globals.selectedDataPoints[e].indexOf(i)>-1){t.node.setAttribute("selected",!0);var a=s.config.states.active.filter;"none"!==a&&this.applyFilter(t,e,a.type,a.value)}}}]),t}(),Animations=function(){function t(e){_classCallCheck(this,t),this.ctx=e,this.w=e.w,this.setEasingFunctions()}return _createClass(t,[{key:"setEasingFunctions",value:function(){var t;switch(this.w.config.chart.animations.easing){case"linear":t="-";break;case"easein":t="<";break;case"easeout":t=">";break;case"easeinout":t="<>";break;case"swing":t=function(t){var e=1.70158;return(t-=1)*t*((e+1)*t+e)+1};break;case"bounce":t=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375};break;case"elastic":t=function(t){return t===!!t?t:Math.pow(2,-10*t)*Math.sin((t-.075)*(2*Math.PI)/.3)+1};break;default:t="<>"}this.w.globals.easing=t}},{key:"animateLine",value:function(t,e,i,s){t.attr(e).animate(s).attr(i)}},{key:"animateCircleRadius",value:function(t,e,i,s,a){e||(e=0),t.attr({r:e}).animate(s,a).attr({r:i})}},{key:"animateCircle",value:function(t,e,i,s,a){t.attr({r:e.r,cx:e.cx,cy:e.cy}).animate(s,a).attr({r:i.r,cx:i.cx,cy:i.cy})}},{key:"animateRect",value:function(t,e,i,s,a){t.attr(e).animate(s).attr(i).afterAll(function(){a()})}},{key:"animatePathsGradually",value:function(t){var e=t.el,i=t.j,s=t.pathFrom,a=t.pathTo,r=t.speed,n=t.delay,o=t.strokeWidth,l=this.w,h=0;l.config.chart.animations.animateGradually.enabled&&(h=l.config.chart.animations.animateGradually.delay),l.config.chart.animations.dynamicAnimation.enabled&&l.globals.dataChanged&&(h=0),this.morphSVG(e,i,s,a,r,o,n*h)}},{key:"showDelayedElements",value:function(){this.w.globals.delayedElements.forEach(function(t){t.el.classList.remove("hidden")})}},{key:"morphSVG",value:function(t,e,i,s,a,r,n){var o=this,l=this.w;i||(i=t.attr("pathFrom")),s||(s=t.attr("pathTo")),(!i||i.indexOf("undefined")>-1||i.indexOf("NaN")>-1)&&(i="M 0 ".concat(l.globals.gridHeight),a=1),(s.indexOf("undefined")>-1||s.indexOf("NaN")>-1)&&(s="M 0 ".concat(l.globals.gridHeight),a=1),l.globals.shouldAnimate||(a=1),t.plot(i).animate(1,l.globals.easing,n).plot(i).animate(a,l.globals.easing,n).plot(s).afterAll(function(){Utils.isNumber(e)?e===l.globals.series[l.globals.maxValsInArrayIndex].length-2&&l.globals.shouldAnimate&&(l.globals.animationEnded=!0):l.globals.shouldAnimate&&(l.globals.animationEnded=!0,"function"==typeof l.config.chart.events.animationEnd&&l.config.chart.events.animationEnd(o.ctx,l)),o.showDelayedElements()})}}]),t}(),Graphics=function(){function t(e){_classCallCheck(this,t),this.ctx=e,this.w=e.w}return _createClass(t,[{key:"drawLine",value:function(t,e,i,s){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"#a8a8a8",r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,n=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;return this.w.globals.dom.Paper.line().attr({x1:t,y1:e,x2:i,y2:s,stroke:a,"stroke-dasharray":r,"stroke-width":n})}},{key:"drawRect",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"#fefefe",n=arguments.length>6&&void 0!==arguments[6]?arguments[6]:1,o=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null,l=arguments.length>8&&void 0!==arguments[8]?arguments[8]:null,h=arguments.length>9&&void 0!==arguments[9]?arguments[9]:0,c=this.w.globals.dom.Paper.rect();return c.attr({x:t,y:e,width:i>0?i:0,height:s>0?s:0,rx:a,ry:a,fill:r,opacity:n,"stroke-width":null!==o?o:0,stroke:null!==l?l:"none","stroke-dasharray":h}),c}},{key:"drawPolygon",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#e1e1e1",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"none";return this.w.globals.dom.Paper.polygon(t).attr({fill:i,stroke:e})}},{key:"drawCircle",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=this.w.globals.dom.Paper.circle(2*t);return null!==e&&i.attr(e),i}},{key:"drawPath",value:function(t){var e=t.d,i=void 0===e?"":e,s=t.stroke,a=void 0===s?"#a8a8a8":s,r=t.strokeWidth,n=void 0===r?1:r,o=t.fill,l=t.fillOpacity,h=void 0===l?1:l,c=t.strokeOpacity,d=void 0===c?1:c,u=t.classes,g=t.strokeLinecap,f=void 0===g?null:g,p=t.strokeDashArray,x=void 0===p?0:p,m=this.w;return null===f&&(f=m.config.stroke.lineCap),(i.indexOf("undefined")>-1||i.indexOf("NaN")>-1)&&(i="M 0 ".concat(m.globals.gridHeight)),m.globals.dom.Paper.path(i).attr({fill:o,"fill-opacity":h,stroke:a,"stroke-opacity":d,"stroke-linecap":f,"stroke-width":n,"stroke-dasharray":x,class:u})}},{key:"group",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=this.w.globals.dom.Paper.group();return null!==t&&e.attr(t),e}},{key:"move",value:function(t,e){var i=["M",t,e].join(" ");return i}},{key:"line",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=null;return null===i?s=["L",t,e].join(" "):"H"===i?s=["H",t].join(" "):"V"===i&&(s=["V",e].join(" ")),s}},{key:"curve",value:function(t,e,i,s,a,r){var n=["C",t,e,i,s,a,r].join(" ");return n}},{key:"quadraticCurve",value:function(t,e,i,s){return["Q",t,e,i,s].join(" ")}},{key:"arc",value:function(t,e,i,s,a,r,n){var o="A";arguments.length>7&&void 0!==arguments[7]&&arguments[7]&&(o="a");var l=[o,t,e,i,s,a,r,n].join(" ");return l}},{key:"renderPaths",value:function(t){var e,i=t.j,s=t.realIndex,a=t.pathFrom,r=t.pathTo,n=t.stroke,o=t.strokeWidth,l=t.strokeLinecap,h=t.fill,c=t.animationDelay,d=t.initialSpeed,u=t.dataChangeSpeed,g=t.className,f=t.shouldClipToGrid,p=void 0===f||f,x=t.bindEventsOnPaths,m=void 0===x||x,b=t.drawShadow,v=void 0===b||b,y=this.w,w=new Filters(this.ctx),k=new Animations(this.ctx),A=this.w.config.chart.animations.enabled,S=A&&this.w.config.chart.animations.dynamicAnimation.enabled,C=!!(A&&!y.globals.resized||S&&y.globals.dataChanged&&y.globals.shouldAnimate);C?e=a:(e=r,this.w.globals.animationEnded=!0);var L=y.config.stroke.dashArray,P=0;P=Array.isArray(L)?L[s]:y.config.stroke.dashArray;var z=this.drawPath({d:e,stroke:n,strokeWidth:o,fill:h,fillOpacity:1,classes:g,strokeLinecap:l,strokeDashArray:P});if(z.attr("index",s),p&&z.attr({"clip-path":"url(#gridRectMask".concat(y.globals.cuid,")")}),"none"!==y.config.states.normal.filter.type)w.getDefaultFilter(z,s);else if(y.config.chart.dropShadow.enabled&&v&&(!y.config.chart.dropShadow.enabledSeries||y.config.chart.dropShadow.enabledSeries&&-1!==y.config.chart.dropShadow.enabledSeries.indexOf(s))){var T=y.config.chart.dropShadow;w.dropShadow(z,T,s)}m&&(z.node.addEventListener("mouseenter",this.pathMouseEnter.bind(this,z)),z.node.addEventListener("mouseleave",this.pathMouseLeave.bind(this,z)),z.node.addEventListener("mousedown",this.pathMouseDown.bind(this,z))),z.attr({pathTo:r,pathFrom:a});var M={el:z,j:i,pathFrom:a,pathTo:r,strokeWidth:o};return!A||y.globals.resized||y.globals.dataChanged?!y.globals.resized&&y.globals.dataChanged||k.showDelayedElements():k.animatePathsGradually(_objectSpread({},M,{speed:d,delay:c})),y.globals.dataChanged&&S&&C&&k.animatePathsGradually(_objectSpread({},M,{speed:u})),z}},{key:"drawPattern",value:function(t,e,i){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"#a8a8a8",a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;return this.w.globals.dom.Paper.pattern(e,i,function(r){"horizontalLines"===t?r.line(0,0,i,0).stroke({color:s,width:a+1}):"verticalLines"===t?r.line(0,0,0,e).stroke({color:s,width:a+1}):"slantedLines"===t?r.line(0,0,e,i).stroke({color:s,width:a}):"squares"===t?r.rect(e,i).fill("none").stroke({color:s,width:a}):"circles"===t&&r.circle(e).fill("none").stroke({color:s,width:a})})}},{key:"drawGradient",value:function(t,e,i,s,a){var r,n=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null,h=arguments.length>8&&void 0!==arguments[8]?arguments[8]:0,c=this.w;e=Utils.hexToRgba(e,s),i=Utils.hexToRgba(i,a);var d=0,u=1,g=1,f=null;null!==o&&(d=void 0!==o[0]?o[0]/100:0,u=void 0!==o[1]?o[1]/100:1,g=void 0!==o[2]?o[2]/100:1,f=void 0!==o[3]?o[3]/100:null);var p=!("donut"!==c.config.chart.type&&"pie"!==c.config.chart.type&&"bubble"!==c.config.chart.type);if(r=null===l||0===l.length?c.globals.dom.Paper.gradient(p?"radial":"linear",function(t){t.at(d,e,s),t.at(u,i,a),t.at(g,i,a),null!==f&&t.at(f,e,s)}):c.globals.dom.Paper.gradient(p?"radial":"linear",function(t){(Array.isArray(l[h])?l[h]:l).forEach(function(e){t.at(e.offset/100,e.color,e.opacity)})}),p){var x=c.globals.gridWidth/2,m=c.globals.gridHeight/2;"bubble"!==c.config.chart.type?r.attr({gradientUnits:"userSpaceOnUse",cx:x,cy:m,r:n}):r.attr({cx:.5,cy:.5,r:.8,fx:.2,fy:.2})}else"vertical"===t?r.from(0,0).to(0,1):"diagonal"===t?r.from(0,0).to(1,1):"horizontal"===t?r.from(0,1).to(1,1):"diagonal2"===t&&r.from(0,1).to(2,2);return r}},{key:"drawText",value:function(t){var e,i=this.w,s=t.x,a=t.y,r=t.text,n=t.textAnchor,o=t.fontSize,l=t.fontFamily,h=t.fontWeight,c=t.foreColor,d=t.opacity;return void 0===r&&(r=""),n||(n="start"),c||(c=i.config.chart.foreColor),l=l||i.config.chart.fontFamily,h=h||"regular",(e=Array.isArray(r)?i.globals.dom.Paper.text(function(t){for(var e=0;e<r.length;e++)t.tspan(r[e])}):i.globals.dom.Paper.plain(r)).attr({x:s,y:a,"text-anchor":n,"dominant-baseline":"auto","font-size":o,"font-family":l,"font-weight":h,fill:c,class:(t.cssClass,t.cssClass)}),e.node.style.fontFamily=l,e.node.style.opacity=d,e}},{key:"addTspan",value:function(t,e,i){var s=t.tspan(e);i||(i=this.w.config.chart.fontFamily),s.node.style.fontFamily=i}},{key:"drawMarker",value:function(t,e,i){t=t||0;var s=i.pSize||0,a=null;if("square"===i.shape){var r=void 0===i.pRadius?s/2:i.pRadius;null===e&&(s=0,r=0);var n=1.2*s+r,o=this.drawRect(n,n,n,n,r);o.attr({x:t-n/2,y:e-n/2,cx:t,cy:e,class:i.class?i.class:"",fill:i.pointFillColor,"fill-opacity":i.pointFillOpacity?i.pointFillOpacity:1,stroke:i.pointStrokeColor,"stroke-width":i.pWidth?i.pWidth:0,"stroke-opacity":i.pointStrokeOpacity?i.pointStrokeOpacity:1}),a=o}else"circle"===i.shape&&(Utils.isNumber(e)||(s=0,e=0),a=this.drawCircle(s,{cx:t,cy:e,class:i.class?i.class:"",stroke:i.pointStrokeColor,fill:i.pointFillColor,"fill-opacity":i.pointFillOpacity?i.pointFillOpacity:1,"stroke-width":i.pWidth?i.pWidth:0,"stroke-opacity":i.pointStrokeOpacity?i.pointStrokeOpacity:1}));return a}},{key:"pathMouseEnter",value:function(t,e){var i=this.w,s=new Filters(this.ctx),a=parseInt(t.node.getAttribute("index")),r=parseInt(t.node.getAttribute("j"));if("function"==typeof i.config.chart.events.dataPointMouseEnter&&i.config.chart.events.dataPointMouseEnter(e,this.ctx,{seriesIndex:a,dataPointIndex:r,w:i}),this.ctx.fireEvent("dataPointMouseEnter",[e,this.ctx,{seriesIndex:a,dataPointIndex:r,w:i}]),("none"===i.config.states.active.filter.type||"true"!==t.node.getAttribute("selected"))&&"none"!==i.config.states.hover.filter.type&&"none"!==i.config.states.active.filter.type&&!i.globals.isTouchDevice){var n=i.config.states.hover.filter;s.applyFilter(t,a,n.type,n.value)}}},{key:"pathMouseLeave",value:function(t,e){var i=this.w,s=new Filters(this.ctx),a=parseInt(t.node.getAttribute("index")),r=parseInt(t.node.getAttribute("j"));"function"==typeof i.config.chart.events.dataPointMouseLeave&&i.config.chart.events.dataPointMouseLeave(e,this.ctx,{seriesIndex:a,dataPointIndex:r,w:i}),this.ctx.fireEvent("dataPointMouseLeave",[e,this.ctx,{seriesIndex:a,dataPointIndex:r,w:i}]),"none"!==i.config.states.active.filter.type&&"true"===t.node.getAttribute("selected")||"none"!==i.config.states.hover.filter.type&&s.getDefaultFilter(t,a)}},{key:"pathMouseDown",value:function(t,e){var i=this.w,s=new Filters(this.ctx),a=parseInt(t.node.getAttribute("index")),r=parseInt(t.node.getAttribute("j")),n="false";if("true"===t.node.getAttribute("selected")){if(t.node.setAttribute("selected","false"),i.globals.selectedDataPoints[a].indexOf(r)>-1){var o=i.globals.selectedDataPoints[a].indexOf(r);i.globals.selectedDataPoints[a].splice(o,1)}}else{if(!i.config.states.active.allowMultipleDataPointsSelection&&i.globals.selectedDataPoints.length>0){i.globals.selectedDataPoints=[];var l=i.globals.dom.Paper.select(".apexcharts-series path").members,h=i.globals.dom.Paper.select(".apexcharts-series circle, .apexcharts-series rect").members;l.forEach(function(t){t.node.setAttribute("selected","false"),s.getDefaultFilter(t,a)}),h.forEach(function(t){t.node.setAttribute("selected","false"),s.getDefaultFilter(t,a)})}t.node.setAttribute("selected","true"),n="true",void 0===i.globals.selectedDataPoints[a]&&(i.globals.selectedDataPoints[a]=[]),i.globals.selectedDataPoints[a].push(r)}if("true"===n){var c=i.config.states.active.filter;"none"!==c&&s.applyFilter(t,a,c.type,c.value)}else"none"!==i.config.states.active.filter.type&&s.getDefaultFilter(t,a);"function"==typeof i.config.chart.events.dataPointSelection&&i.config.chart.events.dataPointSelection(e,this.ctx,{selectedDataPoints:i.globals.selectedDataPoints,seriesIndex:a,dataPointIndex:r,w:i}),e&&this.ctx.fireEvent("dataPointSelection",[e,this.ctx,{selectedDataPoints:i.globals.selectedDataPoints,seriesIndex:a,dataPointIndex:r,w:i}])}},{key:"rotateAroundCenter",value:function(t){var e=t.getBBox();return{x:e.x+e.width/2,y:e.y+e.height/2}}},{key:"getTextRects",value:function(t,e,i,s){var a=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],r=this.w,n=this.drawText({x:-200,y:-200,text:t,textAnchor:"start",fontSize:e,fontFamily:i,foreColor:"#fff",opacity:0});s&&n.attr("transform",s),r.globals.dom.Paper.add(n);var o=n.bbox();return a||(o=n.node.getBoundingClientRect()),n.remove(),{width:o.width,height:o.height}}},{key:"placeTextWithEllipsis",value:function(t,e,i){if(t.textContent=e,e.length>0&&t.getComputedTextLength()>=i){for(var s=e.length-3;s>0;s-=3)if(t.getSubStringLength(0,s)<=i)return void(t.textContent=e.substring(0,s)+"...");t.textContent="..."}}}],[{key:"setAttrs",value:function(t,e){for(var i in e)e.hasOwnProperty(i)&&t.setAttribute(i,e[i])}}]),t}();const name="en",options={months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],toolbar:{exportToSVG:"Download SVG",exportToPNG:"Download PNG",menu:"Menu",selection:"Selection",selectionZoom:"Selection Zoom",zoomIn:"Zoom In",zoomOut:"Zoom Out",pan:"Panning",reset:"Reset Zoom"}};var en={name:"en",options:options},Options=function(){function t(){_classCallCheck(this,t),this.yAxis={show:!0,showAlways:!1,seriesName:void 0,opposite:!1,reversed:!1,logarithmic:!1,tickAmount:void 0,forceNiceScale:!1,max:void 0,min:void 0,floating:!1,decimalsInFloat:void 0,labels:{show:!0,minWidth:0,maxWidth:160,offsetX:0,offsetY:0,align:void 0,rotate:0,padding:20,style:{colors:[],fontSize:"11px",fontFamily:void 0,cssClass:""},formatter:void 0},axisBorder:{show:!1,color:"#78909C",offsetX:0,offsetY:0},axisTicks:{show:!1,color:"#78909C",width:6,offsetX:0,offsetY:0},title:{text:void 0,rotate:90,offsetY:0,offsetX:0,style:{color:void 0,fontSize:"11px",fontFamily:void 0,cssClass:""}},tooltip:{enabled:!1,offsetX:0},crosshairs:{show:!0,position:"front",stroke:{color:"#b6b6b6",width:1,dashArray:0}}},this.xAxisAnnotation={x:0,x2:null,strokeDashArray:1,fillColor:"#c2c2c2",borderColor:"#c2c2c2",opacity:.3,offsetX:0,offsetY:0,label:{borderColor:"#c2c2c2",borderWidth:1,text:void 0,textAnchor:"middle",orientation:"vertical",position:"top",offsetX:0,offsetY:0,style:{background:"#fff",color:void 0,fontSize:"11px",fontFamily:void 0,cssClass:"",padding:{left:5,right:5,top:2,bottom:2}}}},this.yAxisAnnotation={y:0,y2:null,strokeDashArray:1,fillColor:"#c2c2c2",borderColor:"#c2c2c2",opacity:.3,offsetX:0,offsetY:0,yAxisIndex:0,label:{borderColor:"#c2c2c2",borderWidth:1,text:void 0,textAnchor:"end",position:"right",offsetX:0,offsetY:-3,style:{background:"#fff",color:void 0,fontSize:"11px",fontFamily:void 0,cssClass:"",padding:{left:5,right:5,top:0,bottom:2}}}},this.pointAnnotation={x:0,y:null,yAxisIndex:0,seriesIndex:0,marker:{size:4,fillColor:"#fff",strokeWidth:2,strokeColor:"#333",shape:"circle",offsetX:0,offsetY:0,radius:2,cssClass:""},label:{borderColor:"#c2c2c2",borderWidth:1,text:void 0,textAnchor:"middle",offsetX:0,offsetY:-15,style:{background:"#fff",color:void 0,fontSize:"11px",fontFamily:void 0,cssClass:"",padding:{left:5,right:5,top:0,bottom:2}}},customSVG:{SVG:void 0,cssClass:void 0,offsetX:0,offsetY:0}}}return _createClass(t,[{key:"init",value:function(){return{annotations:{position:"front",yaxis:[this.yAxisAnnotation],xaxis:[this.xAxisAnnotation],points:[this.pointAnnotation]},chart:{animations:{enabled:!0,easing:"easeinout",speed:800,animateGradually:{delay:150,enabled:!0},dynamicAnimation:{enabled:!0,speed:350}},background:"transparent",locales:[en],defaultLocale:"en",dropShadow:{enabled:!1,enabledSeries:void 0,top:2,left:2,blur:4,color:"#000",opacity:.35},events:{animationEnd:void 0,beforeMount:void 0,mounted:void 0,updated:void 0,click:void 0,legendClick:void 0,markerClick:void 0,selection:void 0,dataPointSelection:void 0,dataPointMouseEnter:void 0,dataPointMouseLeave:void 0,beforeZoom:void 0,zoomed:void 0,scrolled:void 0},foreColor:"#373d3f",fontFamily:"Helvetica, Arial, sans-serif",height:"auto",parentHeightOffset:15,id:void 0,group:void 0,offsetX:0,offsetY:0,selection:{enabled:!1,type:"x",fill:{color:"#24292e",opacity:.1},stroke:{width:1,color:"#24292e",opacity:.4,dashArray:3},xaxis:{min:void 0,max:void 0},yaxis:{min:void 0,max:void 0}},sparkline:{enabled:!1},brush:{enabled:!1,autoScaleYaxis:!0,target:void 0},stacked:!1,stackType:"normal",toolbar:{show:!0,tools:{download:!0,selection:!0,zoom:!0,zoomin:!0,zoomout:!0,pan:!0,reset:!0,customIcons:[]},autoSelected:"zoom"},type:"line",width:"100%",zoom:{enabled:!0,type:"x",autoScaleYaxis:!1,zoomedArea:{fill:{color:"#90CAF9",opacity:.4},stroke:{color:"#0D47A1",opacity:.4,width:1}}}},plotOptions:{bar:{horizontal:!1,columnWidth:"70%",barHeight:"70%",distributed:!1,endingShape:"flat",colors:{ranges:[],backgroundBarColors:[],backgroundBarOpacity:1},dataLabels:{maxItems:100,hideOverflowingLabels:!0,position:"top"}},candlestick:{colors:{upward:"#00B746",downward:"#EF403C"},wick:{useFillColor:!0}},heatmap:{radius:2,enableShades:!0,shadeIntensity:.5,reverseNegativeShade:!0,distributed:!1,colorScale:{inverse:!1,ranges:[],min:void 0,max:void 0}},radialBar:{size:void 0,inverseOrder:!1,startAngle:0,endAngle:360,offsetX:0,offsetY:0,hollow:{margin:5,size:"50%",background:"transparent",image:void 0,imageWidth:150,imageHeight:150,imageOffsetX:0,imageOffsetY:0,imageClipped:!0,position:"front",dropShadow:{enabled:!1,top:0,left:0,blur:3,color:"#000",opacity:.5}},track:{show:!0,startAngle:void 0,endAngle:void 0,background:"#f2f2f2",strokeWidth:"97%",opacity:1,margin:5,dropShadow:{enabled:!1,top:0,left:0,blur:3,color:"#000",opacity:.5}},dataLabels:{show:!0,name:{show:!0,fontSize:"16px",fontFamily:void 0,color:void 0,offsetY:0},value:{show:!0,fontSize:"14px",fontFamily:void 0,color:void 0,offsetY:16,formatter:function(t){return t+"%"}},total:{show:!1,label:"Total",color:void 0,formatter:function(t){return t.globals.seriesTotals.reduce(function(t,e){return t+e},0)/t.globals.series.length+"%"}}}},rangeBar:{},pie:{size:void 0,customScale:1,offsetX:0,offsetY:0,expandOnClick:!0,dataLabels:{offset:0,minAngleToShowLabel:10},donut:{size:"65%",background:"transparent",labels:{show:!1,name:{show:!0,fontSize:"16px",fontFamily:void 0,color:void 0,offsetY:-10},value:{show:!0,fontSize:"20px",fontFamily:void 0,color:void 0,offsetY:10,formatter:function(t){return t}},total:{show:!1,label:"Total",color:void 0,formatter:function(t){return t.globals.seriesTotals.reduce(function(t,e){return t+e},0)}}}}},radar:{size:void 0,offsetX:0,offsetY:0,polygons:{strokeColors:"#e8e8e8",connectorColors:"#e8e8e8",fill:{colors:void 0}}}},colors:void 0,dataLabels:{enabled:!0,enabledOnSeries:void 0,formatter:function(t){return null!==t?t:""},textAnchor:"middle",offsetX:0,offsetY:0,style:{fontSize:"12px",fontFamily:void 0,colors:void 0},dropShadow:{enabled:!1,top:1,left:1,blur:1,color:"#000",opacity:.45}},fill:{type:"solid",colors:void 0,opacity:.85,gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:void 0,inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,50,100],colorStops:[]},image:{src:[],width:void 0,height:void 0},pattern:{style:"sqaures",width:6,height:6,strokeWidth:2}},grid:{show:!0,borderColor:"#e0e0e0",strokeDashArray:0,position:"back",xaxis:{lines:{show:!1,animate:!1}},yaxis:{lines:{show:!0,animate:!1}},row:{colors:void 0,opacity:.5},column:{colors:void 0,opacity:.5},padding:{top:0,right:10,bottom:0,left:12}},labels:[],legend:{show:!0,showForSingleSeries:!1,showForNullSeries:!0,showForZeroSeries:!0,floating:!1,position:"bottom",horizontalAlign:"center",fontSize:"12px",fontFamily:void 0,width:void 0,height:void 0,formatter:void 0,offsetX:-20,offsetY:0,labels:{colors:void 0,useSeriesColors:!1},markers:{width:12,height:12,strokeWidth:0,strokeColor:"#fff",radius:12,customHTML:void 0,offsetX:0,offsetY:0,onClick:void 0},itemMargin:{horizontal:0,vertical:5},onItemClick:{toggleDataSeries:!0},onItemHover:{highlightDataSeries:!0}},markers:{discrete:[],size:0,colors:void 0,strokeColors:"#fff",strokeWidth:2,strokeOpacity:.9,fillOpacity:1,shape:"circle",radius:2,offsetX:0,offsetY:0,onClick:void 0,onDblClick:void 0,hover:{size:void 0,sizeOffset:3}},noData:{text:void 0,align:"center",verticalAlign:"middle",offsetX:0,offsetY:0,style:{color:void 0,fontSize:"14px",fontFamily:void 0}},responsive:[],series:void 0,states:{normal:{filter:{type:"none",value:0}},hover:{filter:{type:"lighten",value:.15}},active:{allowMultipleDataPointsSelection:!1,filter:{type:"darken",value:.65}}},title:{text:void 0,align:"left",margin:10,offsetX:0,offsetY:0,floating:!1,style:{fontSize:"14px",fontFamily:void 0,color:void 0}},subtitle:{text:void 0,align:"left",margin:10,offsetX:0,offsetY:30,floating:!1,style:{fontSize:"12px",fontFamily:void 0,color:void 0}},stroke:{show:!0,curve:"smooth",lineCap:"butt",width:2,colors:void 0,dashArray:0},tooltip:{enabled:!0,enabledOnSeries:void 0,shared:!0,followCursor:!1,intersect:!1,inverseOrder:!1,custom:void 0,fillSeriesColor:!1,theme:"light",style:{fontSize:"12px",fontFamily:void 0},onDatasetHover:{highlightDataSeries:!1},x:{show:!0,format:"dd MMM",formatter:void 0},y:{formatter:void 0,title:{formatter:function(t){return t}}},z:{formatter:void 0,title:"Size: "},marker:{show:!0},items:{display:"flex"},fixed:{enabled:!1,position:"topRight",offsetX:0,offsetY:0}},xaxis:{type:"category",categories:[],offsetX:0,offsetY:0,labels:{show:!0,rotate:-45,rotateAlways:!1,hideOverlappingLabels:!0,trim:!0,minHeight:void 0,maxHeight:120,showDuplicates:!0,style:{colors:[],fontSize:"12px",fontFamily:void 0,cssClass:""},offsetX:0,offsetY:0,format:void 0,formatter:void 0,datetimeFormatter:{year:"yyyy",month:"MMM 'yy",day:"dd MMM",hour:"HH:mm",minute:"HH:mm:ss"}},axisBorder:{show:!0,color:"#78909C",width:"100%",height:1,offsetX:0,offsetY:0},axisTicks:{show:!0,color:"#78909C",height:6,offsetX:0,offsetY:0},tickAmount:void 0,tickPlacement:"on",min:void 0,max:void 0,range:void 0,floating:!1,position:"bottom",title:{text:void 0,offsetX:0,offsetY:0,style:{color:void 0,fontSize:"12px",fontFamily:void 0,cssClass:""}},crosshairs:{show:!0,width:1,position:"back",opacity:.9,stroke:{color:"#b6b6b6",width:1,dashArray:3},fill:{type:"solid",color:"#B1B9C4",gradient:{colorFrom:"#D8E3F0",colorTo:"#BED1E6",stops:[0,100],opacityFrom:.4,opacityTo:.5}},dropShadow:{enabled:!1,left:0,top:0,blur:1,opacity:.4}},tooltip:{enabled:!0,offsetY:0,formatter:void 0,style:{fontSize:"12px",fontFamily:void 0}}},yaxis:this.yAxis,theme:{mode:"light",palette:"palette1",monochrome:{enabled:!1,color:"#008FFB",shadeTo:"light",shadeIntensity:.65}}}}}]),t}(),Annotations=function(){function t(e){_classCallCheck(this,t),this.ctx=e,this.w=e.w,this.graphics=new Graphics(this.ctx),this.w.globals.isBarHorizontal&&(this.invertAxis=!0),this.xDivision=this.w.globals.gridWidth/this.w.globals.dataPoints}return _createClass(t,[{key:"drawAnnotations",value:function(){var t=this.w;if(t.globals.axisCharts){for(var e=this.drawYAxisAnnotations(),i=this.drawXAxisAnnotations(),s=this.drawPointAnnotations(),a=t.config.chart.animations.enabled,r=[e,i,s],n=[i.node,e.node,s.node],o=0;o<3;o++)t.globals.dom.elGraphical.add(r[o]),!a||t.globals.resized||t.globals.dataChanged||"scatter"!==t.config.chart.type&&"bubble"!==t.config.chart.type&&n[o].classList.add("hidden"),t.globals.delayedElements.push({el:n[o],index:0});this.annotationsBackground()}}},{key:"getStringX",value:function(t){var e=this.w,i=t,s=e.globals.labels.indexOf(t),a=e.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g text:nth-child("+(s+1)+")");return a&&(i=parseFloat(a.getAttribute("x"))),i}},{key:"addXaxisAnnotation",value:function(t,e,i){var s=this.w,a=this.invertAxis?s.globals.minY:s.globals.minX,r=this.invertAxis?s.globals.yRange[0]:s.globals.xRange,n=(t.x-a)/(r/s.globals.gridWidth),o=t.label.text;"category"!==s.config.xaxis.type&&!s.config.xaxis.convertedCatToNumeric||this.invertAxis||s.globals.isXNumeric||(n=this.getStringX(t.x));var l=t.strokeDashArray;if(!(n<0||n>s.globals.gridWidth)){if(null===t.x2){var h=this.graphics.drawLine(n+t.offsetX,0+t.offsetY,n+t.offsetX,s.globals.gridHeight+t.offsetY,t.borderColor,l);e.appendChild(h.node)}else{var c=(t.x2-a)/(r/s.globals.gridWidth);if("category"!==s.config.xaxis.type&&!s.config.xaxis.convertedCatToNumeric||this.invertAxis||s.globals.isXNumeric||(c=this.getStringX(t.x2)),c<n){var d=n;n=c,c=d}if(o){var u=this.graphics.drawRect(n+t.offsetX,0+t.offsetY,c-n,s.globals.gridHeight+t.offsetY,0,t.fillColor,t.opacity,1,t.borderColor,l);e.appendChild(u.node)}}var g="top"===t.label.position?-3:s.globals.gridHeight,f=this.graphics.drawText({x:n+t.label.offsetX,y:g+t.label.offsetY,text:o,textAnchor:t.label.textAnchor,fontSize:t.label.style.fontSize,fontFamily:t.label.style.fontFamily,foreColor:t.label.style.color,cssClass:"apexcharts-xaxis-annotation-label "+t.label.style.cssClass});f.attr({rel:i}),e.appendChild(f.node),this.setOrientations(t,i)}}},{key:"drawXAxisAnnotations",value:function(){var t=this,e=this.w,i=this.graphics.group({class:"apexcharts-xaxis-annotations"});return e.config.annotations.xaxis.map(function(e,s){t.addXaxisAnnotation(e,i.node,s)}),i}},{key:"addYaxisAnnotation",value:function(t,e,i){var s,a,r=this.w,n=t.strokeDashArray;if(this.invertAxis){var o=r.globals.labels.indexOf(t.y),l=r.globals.dom.baseEl.querySelector(".apexcharts-yaxis-texts-g text:nth-child("+(o+1)+")");l&&(s=parseFloat(l.getAttribute("y")))}else s=r.globals.gridHeight-(t.y-r.globals.minYArr[t.yAxisIndex])/(r.globals.yRange[t.yAxisIndex]/r.globals.gridHeight),r.config.yaxis[t.yAxisIndex]&&r.config.yaxis[t.yAxisIndex].reversed&&(s=(t.y-r.globals.minYArr[t.yAxisIndex])/(r.globals.yRange[t.yAxisIndex]/r.globals.gridHeight));var h=t.label.text;if(null===t.y2){var c=this.graphics.drawLine(0+t.offsetX,s+t.offsetY,r.globals.gridWidth+t.offsetX,s+t.offsetY,t.borderColor,n);e.appendChild(c.node)}else{if(this.invertAxis){var d=r.globals.labels.indexOf(t.y2),u=r.globals.dom.baseEl.querySelector(".apexcharts-yaxis-texts-g text:nth-child("+(d+1)+")");u&&(a=parseFloat(u.getAttribute("y")))}else a=r.globals.gridHeight-(t.y2-r.globals.minYArr[t.yAxisIndex])/(r.globals.yRange[t.yAxisIndex]/r.globals.gridHeight),r.config.yaxis[t.yAxisIndex]&&r.config.yaxis[t.yAxisIndex].reversed&&(a=(t.y2-r.globals.minYArr[t.yAxisIndex])/(r.globals.yRange[t.yAxisIndex]/r.globals.gridHeight));if(a>s){var g=s;s=a,a=g}if(h){var f=this.graphics.drawRect(0+t.offsetX,a+t.offsetY,r.globals.gridWidth+t.offsetX,s-a,0,t.fillColor,t.opacity,1,t.borderColor,n);e.appendChild(f.node)}}var p="right"===t.label.position?r.globals.gridWidth:0,x=this.graphics.drawText({x:p+t.label.offsetX,y:(a||s)+t.label.offsetY-3,text:h,textAnchor:t.label.textAnchor,fontSize:t.label.style.fontSize,fontFamily:t.label.style.fontFamily,foreColor:t.label.style.color,cssClass:"apexcharts-yaxis-annotation-label "+t.label.style.cssClass});x.attr({rel:i}),e.appendChild(x.node)}},{key:"drawYAxisAnnotations",value:function(){var t=this,e=this.w,i=this.graphics.group({class:"apexcharts-yaxis-annotations"});return e.config.annotations.yaxis.map(function(e,s){t.addYaxisAnnotation(e,i.node,s)}),i}},{key:"clearAnnotations",value:function(t){var e=t.w.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-annotations, .apexcharts-xaxis-annotations, .apexcharts-point-annotations");(e=Utils.listToArray(e)).forEach(function(t){for(;t.firstChild;)t.removeChild(t.firstChild)})}},{key:"addPointAnnotation",value:function(t,e,i){var s=this.w,a=0,r=0,n=0;if(this.invertAxis&&console.warn("Point annotation is not supported in horizontal bar charts."),"string"==typeof t.x){var o=s.globals.labels.indexOf(t.x),l=s.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g text:nth-child("+(o+1)+")");a=parseFloat(l.getAttribute("x"));var h=t.y;null===t.y&&(h=s.globals.series[t.seriesIndex][o]),r=s.globals.gridHeight-(h-s.globals.minYArr[t.yAxisIndex])/(s.globals.yRange[t.yAxisIndex]/s.globals.gridHeight)-parseInt(t.label.style.fontSize)-t.marker.size,n=s.globals.gridHeight-(h-s.globals.minYArr[t.yAxisIndex])/(s.globals.yRange[t.yAxisIndex]/s.globals.gridHeight),s.config.yaxis[t.yAxisIndex]&&s.config.yaxis[t.yAxisIndex].reversed&&(r=(h-s.globals.minYArr[t.yAxisIndex])/(s.globals.yRange[t.yAxisIndex]/s.globals.gridHeight)+parseInt(t.label.style.fontSize)+t.marker.size,n=(h-s.globals.minYArr[t.yAxisIndex])/(s.globals.yRange[t.yAxisIndex]/s.globals.gridHeight))}else a=(t.x-s.globals.minX)/(s.globals.xRange/s.globals.gridWidth),r=s.globals.gridHeight-(parseFloat(t.y)-s.globals.minYArr[t.yAxisIndex])/(s.globals.yRange[t.yAxisIndex]/s.globals.gridHeight)-parseInt(t.label.style.fontSize)-t.marker.size,n=s.globals.gridHeight-(t.y-s.globals.minYArr[t.yAxisIndex])/(s.globals.yRange[t.yAxisIndex]/s.globals.gridHeight),s.config.yaxis[t.yAxisIndex]&&s.config.yaxis[t.yAxisIndex].reversed&&(r=(parseFloat(t.y)-s.globals.minYArr[t.yAxisIndex])/(s.globals.yRange[t.yAxisIndex]/s.globals.gridHeight)-parseInt(t.label.style.fontSize)-t.marker.size,n=(t.y-s.globals.minYArr[t.yAxisIndex])/(s.globals.yRange[t.yAxisIndex]/s.globals.gridHeight));if(!(a<0||a>s.globals.gridWidth)){var c={pSize:t.marker.size,pWidth:t.marker.strokeWidth,pointFillColor:t.marker.fillColor,pointStrokeColor:t.marker.strokeColor,shape:t.marker.shape,radius:t.marker.radius,class:"apexcharts-point-annotation-marker "+t.marker.cssClass},d=this.graphics.drawMarker(a+t.marker.offsetX,n+t.marker.offsetY,c);e.appendChild(d.node);var u=t.label.text?t.label.text:"",g=this.graphics.drawText({x:a+t.label.offsetX,y:r+t.label.offsetY,text:u,textAnchor:t.label.textAnchor,fontSize:t.label.style.fontSize,fontFamily:t.label.style.fontFamily,foreColor:t.label.style.color,cssClass:"apexcharts-point-annotation-label "+t.label.style.cssClass});if(g.attr({rel:i}),e.appendChild(g.node),t.customSVG.SVG){var f=this.graphics.group({class:"apexcharts-point-annotations-custom-svg "+t.customSVG.cssClass});f.attr({transform:"translate(".concat(a+t.customSVG.offsetX,", ").concat(r+t.customSVG.offsetY,")")}),f.node.innerHTML=t.customSVG.SVG,e.appendChild(f.node)}}}},{key:"drawPointAnnotations",value:function(){var t=this,e=this.w,i=this.graphics.group({class:"apexcharts-point-annotations"});return e.config.annotations.points.map(function(e,s){t.addPointAnnotation(e,i.node,s)}),i}},{key:"setOrientations",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=this.w;if("vertical"===t.label.orientation){var s=null!==e?e:0,a=i.globals.dom.baseEl.querySelector(".apexcharts-xaxis-annotations .apexcharts-xaxis-annotation-label[rel='".concat(s,"']"));if(null!==a){var r=a.getBoundingClientRect();a.setAttribute("x",parseFloat(a.getAttribute("x"))-r.height+4),"top"===t.label.position?a.setAttribute("y",parseFloat(a.getAttribute("y"))+r.width):a.setAttribute("y",parseFloat(a.getAttribute("y"))-r.width);var n=this.graphics.rotateAroundCenter(a),o=n.x,l=n.y;a.setAttribute("transform","rotate(-90 ".concat(o," ").concat(l,")"))}}}},{key:"addBackgroundToAnno",value:function(t,e){var i=this.w;if(!e.label.text||e.label.text&&!e.label.text.trim())return null;var s=i.globals.dom.baseEl.querySelector(".apexcharts-grid").getBoundingClientRect(),a=t.getBoundingClientRect(),r=e.label.style.padding.left,n=e.label.style.padding.right,o=e.label.style.padding.top,l=e.label.style.padding.bottom;"vertical"===e.label.orientation&&(o=e.label.style.padding.left,l=e.label.style.padding.right,r=e.label.style.padding.top,n=e.label.style.padding.bottom);var h=a.left-s.left-r,c=a.top-s.top-o;return this.graphics.drawRect(h,c,a.width+r+n,a.height+o+l,0,e.label.style.background,1,e.label.borderWidth,e.label.borderColor,0)}},{key:"annotationsBackground",value:function(){var t=this,e=this.w,i=function(i,s,a){var r=e.globals.dom.baseEl.querySelector(".apexcharts-".concat(a,"-annotations .apexcharts-").concat(a,"-annotation-label[rel='").concat(s,"']"));if(r){var n=r.parentNode,o=t.addBackgroundToAnno(r,i);o&&n.insertBefore(o.node,r)}};e.config.annotations.xaxis.map(function(t,e){i(t,e,"xaxis")}),e.config.annotations.yaxis.map(function(t,e){i(t,e,"yaxis")}),e.config.annotations.points.map(function(t,e){i(t,e,"point")})}},{key:"addText",value:function(t,e,i){var s=t.x,a=t.y,r=t.text,n=t.textAnchor,o=t.appendTo,l=void 0===o?".apexcharts-inner":o,h=t.foreColor,c=t.fontSize,d=t.fontFamily,u=t.cssClass,g=t.backgroundColor,f=t.borderWidth,p=t.strokeDashArray,x=t.radius,m=t.borderColor,b=t.paddingLeft,v=void 0===b?4:b,y=t.paddingRight,w=void 0===y?4:y,k=t.paddingBottom,A=void 0===k?2:k,S=t.paddingTop,C=void 0===S?2:S,L=i,P=L.w,z=P.globals.dom.baseEl.querySelector(l),T=this.graphics.drawText({x:s,y:a,text:r,textAnchor:n||"start",fontSize:c||"12px",fontFamily:d||P.config.chart.fontFamily,foreColor:h||P.config.chart.foreColor,cssClass:u});z.appendChild(T.node);var M=T.bbox();if(r){var E=this.graphics.drawRect(M.x-v,M.y-C,M.width+v+w,M.height+A+C,x,g,1,f,m,p);T.before(E)}return e&&P.globals.memory.methodsToExec.push({context:L,method:L.addText,params:{x:s,y:a,text:r,textAnchor:n,appendTo:l,foreColor:h,fontSize:c,cssClass:u,backgroundColor:g,borderWidth:f,strokeDashArray:p,radius:x,borderColor:m,paddingLeft:v,paddingRight:w,paddingBottom:A,paddingTop:C}}),i}},{key:"addPointAnnotationExternal",value:function(t,e,i){return void 0===this.invertAxis&&(this.invertAxis=i.w.globals.isBarHorizontal),this.addAnnotationExternal({params:t,pushToMemory:e,context:i,type:"point",contextMethod:i.addPointAnnotation}),i}},{key:"addYaxisAnnotationExternal",value:function(t,e,i){return this.addAnnotationExternal({params:t,pushToMemory:e,context:i,type:"yaxis",contextMethod:i.addYaxisAnnotation}),i}},{key:"addXaxisAnnotationExternal",value:function(t,e,i){return this.addAnnotationExternal({params:t,pushToMemory:e,context:i,type:"xaxis",contextMethod:i.addXaxisAnnotation}),i}},{key:"addAnnotationExternal",value:function(t){var e=t.params,i=t.pushToMemory,s=t.context,a=t.type,r=t.contextMethod,n=s,o=n.w,l=o.globals.dom.baseEl.querySelector(".apexcharts-".concat(a,"-annotations")),h=l.childNodes.length+1,c=new Options,d=Object.assign({},"xaxis"===a?c.xAxisAnnotation:"yaxis"===a?c.yAxisAnnotation:c.pointAnnotation),u=Utils.extend(d,e);switch(a){case"xaxis":this.addXaxisAnnotation(u,l,h);break;case"yaxis":this.addYaxisAnnotation(u,l,h);break;case"point":this.addPointAnnotation(u,l,h)}var g=o.globals.dom.baseEl.querySelector(".apexcharts-".concat(a,"-annotations .apexcharts-").concat(a,"-annotation-label[rel='").concat(h,"']")),f=this.addBackgroundToAnno(g,u);return f&&l.insertBefore(f.node,g),i&&o.globals.memory.methodsToExec.push({context:n,method:r,params:e}),s}}]),t}(),DateTime=function(){function t(e){_classCallCheck(this,t),this.ctx=e,this.w=e.w,this.months31=[1,3,5,7,8,10,12],this.months30=[2,4,6,9,11],this.daysCntOfYear=[0,31,59,90,120,151,181,212,243,273,304,334]}return _createClass(t,[{key:"isValidDate",value:function(t){return!isNaN(this.parseDate(t))}},{key:"getUTCTimeStamp",value:function(t){return Date.parse(t)?new Date(new Date(t).toISOString().substr(0,25)).getTime():t}},{key:"parseDate",value:function(t){var e=Date.parse(t);if(!isNaN(e))return this.getUTCTimeStamp(t);var i=Date.parse(t.replace(/-/g,"/").replace(/[a-z]+/gi," "));return i=this.getUTCTimeStamp(i)}},{key:"treatAsUtc",value:function(t){var e=new Date(t);return e.setMinutes(e.getMinutes()-e.getTimezoneOffset()),e}},{key:"formatDate",value:function(t,e){var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],s=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=this.w.globals.locale,r=["\0"].concat(_toConsumableArray(a.months)),n=["\x01"].concat(_toConsumableArray(a.shortMonths)),o=["\x02"].concat(_toConsumableArray(a.days)),l=["\x03"].concat(_toConsumableArray(a.shortDays));function h(t,e){var i=t+"";for(e=e||2;i.length<e;)i="0"+i;return i}s&&(t=this.treatAsUtc(t));var c=i?t.getUTCFullYear():t.getFullYear();e=(e=(e=e.replace(/(^|[^\\])yyyy+/g,"$1"+c)).replace(/(^|[^\\])yy/g,"$1"+c.toString().substr(2,2))).replace(/(^|[^\\])y/g,"$1"+c);var d=(i?t.getUTCMonth():t.getMonth())+1;e=(e=(e=(e=e.replace(/(^|[^\\])MMMM+/g,"$1"+r[0])).replace(/(^|[^\\])MMM/g,"$1"+n[0])).replace(/(^|[^\\])MM/g,"$1"+h(d))).replace(/(^|[^\\])M/g,"$1"+d);var u=i?t.getUTCDate():t.getDate();e=(e=(e=(e=e.replace(/(^|[^\\])dddd+/g,"$1"+o[0])).replace(/(^|[^\\])ddd/g,"$1"+l[0])).replace(/(^|[^\\])dd/g,"$1"+h(u))).replace(/(^|[^\\])d/g,"$1"+u);var g=i?t.getUTCHours():t.getHours(),f=g>12?g-12:0===g?12:g;e=(e=(e=(e=e.replace(/(^|[^\\])HH+/g,"$1"+h(g))).replace(/(^|[^\\])H/g,"$1"+g)).replace(/(^|[^\\])hh+/g,"$1"+h(f))).replace(/(^|[^\\])h/g,"$1"+f);var p=i?t.getUTCMinutes():t.getMinutes();e=(e=e.replace(/(^|[^\\])mm+/g,"$1"+h(p))).replace(/(^|[^\\])m/g,"$1"+p);var x=i?t.getUTCSeconds():t.getSeconds();e=(e=e.replace(/(^|[^\\])ss+/g,"$1"+h(x))).replace(/(^|[^\\])s/g,"$1"+x);var m=i?t.getUTCMilliseconds():t.getMilliseconds();e=e.replace(/(^|[^\\])fff+/g,"$1"+h(m,3)),m=Math.round(m/10),e=e.replace(/(^|[^\\])ff/g,"$1"+h(m)),m=Math.round(m/10);var b=g<12?"AM":"PM";e=(e=(e=e.replace(/(^|[^\\])f/g,"$1"+m)).replace(/(^|[^\\])TT+/g,"$1"+b)).replace(/(^|[^\\])T/g,"$1"+b.charAt(0));var v=b.toLowerCase();e=(e=e.replace(/(^|[^\\])tt+/g,"$1"+v)).replace(/(^|[^\\])t/g,"$1"+v.charAt(0));var y=-t.getTimezoneOffset(),w=i||!y?"Z":y>0?"+":"-";if(!i){var k=(y=Math.abs(y))%60;w+=h(Math.floor(y/60))+":"+h(k)}e=e.replace(/(^|[^\\])K/g,"$1"+w);var A=(i?t.getUTCDay():t.getDay())+1;return e=(e=(e=(e=(e=e.replace(new RegExp(o[0],"g"),o[A])).replace(new RegExp(l[0],"g"),l[A])).replace(new RegExp(r[0],"g"),r[d])).replace(new RegExp(n[0],"g"),n[d])).replace(/\\(.)/g,"$1")}},{key:"getTimeUnitsfromTimestamp",value:function(t,e){var i=this.w;void 0!==i.config.xaxis.min&&(t=i.config.xaxis.min),void 0!==i.config.xaxis.max&&(e=i.config.xaxis.max);var s=new Date(t).getFullYear(),a=new Date(e).getFullYear(),r=new Date(t).getMonth(),n=new Date(e).getMonth(),o=new Date(t).getDate(),l=new Date(e).getDate(),h=new Date(t).getHours(),c=new Date(e).getHours();return{minMinute:new Date(t).getMinutes(),maxMinute:new Date(e).getMinutes(),minHour:h,maxHour:c,minDate:o,maxDate:l,minMonth:r,maxMonth:n,minYear:s,maxYear:a}}},{key:"isLeapYear",value:function(t){return t%4==0&&t%100!=0||t%400==0}},{key:"calculcateLastDaysOfMonth",value:function(t,e,i){return this.determineDaysOfMonths(t,e)-i}},{key:"determineDaysOfYear",value:function(t){var e=365;return this.isLeapYear(t)&&(e=366),e}},{key:"determineRemainingDaysOfYear",value:function(t,e,i){var s=this.daysCntOfYear[e]+i;return e>1&&this.isLeapYear()&&s++,s}},{key:"determineDaysOfMonths",value:function(t,e){var i=30;switch(t=Utils.monthMod(t),!0){case this.months30.indexOf(t)>-1:2===t&&(i=this.isLeapYear(e)?29:28);break;case this.months31.indexOf(t)>-1:default:i=31}return i}}]),t}(),Defaults=function(){function t(e){_classCallCheck(this,t),this.opts=e}return _createClass(t,[{key:"line",value:function(){return{chart:{animations:{easing:"swing"}},dataLabels:{enabled:!1},stroke:{width:5,curve:"straight"},markers:{size:0,hover:{sizeOffset:6}},xaxis:{crosshairs:{width:1}}}}},{key:"sparkline",value:function(t){this.opts.yaxis[0].labels.show=!1,this.opts.yaxis[0].floating=!0;return Utils.extend(t,{grid:{show:!1,padding:{left:0,right:0,top:0,bottom:0}},legend:{show:!1},xaxis:{labels:{show:!1},tooltip:{enabled:!1},axisBorder:{show:!1}},chart:{toolbar:{show:!1},zoom:{enabled:!1}},dataLabels:{enabled:!1}})}},{key:"bar",value:function(){return{chart:{stacked:!1,animations:{easing:"swing"}},plotOptions:{bar:{dataLabels:{position:"center"}}},dataLabels:{style:{colors:["#fff"]}},stroke:{width:0},fill:{opacity:.85},legend:{markers:{shape:"square",radius:2,size:8}},tooltip:{shared:!1},xaxis:{tooltip:{enabled:!1},crosshairs:{width:"barWidth",position:"back",fill:{type:"gradient"},dropShadow:{enabled:!1},stroke:{width:0}}}}}},{key:"candlestick",value:function(){return{stroke:{width:1,colors:["#333"]},dataLabels:{enabled:!1},tooltip:{shared:!0,custom:function(t){var e=t.seriesIndex,i=t.dataPointIndex,s=t.w;return'<div class="apexcharts-tooltip-candlestick"><div>Open: <span class="value">'+s.globals.seriesCandleO[e][i]+'</span></div><div>High: <span class="value">'+s.globals.seriesCandleH[e][i]+'</span></div><div>Low: <span class="value">'+s.globals.seriesCandleL[e][i]+'</span></div><div>Close: <span class="value">'+s.globals.seriesCandleC[e][i]+"</span></div></div>"}},states:{active:{filter:{type:"none"}}},xaxis:{crosshairs:{width:1}}}}},{key:"rangeBar",value:function(){return{stroke:{width:0},plotOptions:{bar:{dataLabels:{position:"center"}}},dataLabels:{enabled:!1,formatter:function(t,e){e.ctx;var i=e.seriesIndex,s=e.dataPointIndex,a=e.w,r=a.globals.seriesRangeStart[i][s];return a.globals.seriesRangeEnd[i][s]-r},style:{colors:["#fff"]}},tooltip:{shared:!1,followCursor:!0,custom:function(t){var e=t.ctx,i=t.seriesIndex,s=t.dataPointIndex,a=t.w,r=a.globals.seriesRangeStart[i][s],n=a.globals.seriesRangeEnd[i][s],o="",l="",h=a.globals.colors[i];if(void 0===a.config.tooltip.x.formatter)if("datetime"===a.config.xaxis.type){var c=new DateTime(e);o=c.formatDate(new Date(r),a.config.tooltip.x.format,!0,!0),l=c.formatDate(new Date(n),a.config.tooltip.x.format,!0,!0)}else o=r,l=n;else o=a.config.tooltip.x.formatter(r),l=a.config.tooltip.x.formatter(n);var d=a.globals.labels[s];return'<div class="apexcharts-tooltip-rangebar"><div> <span class="series-name" style="color: '+h+'">'+(a.config.series[i].name?a.config.series[i].name:"")+'</span></div><div> <span class="category">'+d+': </span> <span class="value start-value">'+o+'</span> <span class="separator">-</span> <span class="value end-value">'+l+"</span></div></div>"}},xaxis:{tooltip:{enabled:!1},crosshairs:{stroke:{width:0}}}}}},{key:"area",value:function(){return{stroke:{width:4},fill:{type:"gradient",gradient:{inverseColors:!1,shade:"light",type:"vertical",opacityFrom:.65,opacityTo:.5,stops:[0,100,100]}},markers:{size:0,hover:{sizeOffset:6}},tooltip:{followCursor:!1}}}},{key:"brush",value:function(t){return Utils.extend(t,{chart:{toolbar:{autoSelected:"selection",show:!1},zoom:{enabled:!1}},dataLabels:{enabled:!1},stroke:{width:1},tooltip:{enabled:!1},xaxis:{tooltip:{enabled:!1}}})}},{key:"stacked100",value:function(){var t=this;this.opts.dataLabels=this.opts.dataLabels||{},this.opts.dataLabels.formatter=this.opts.dataLabels.formatter||void 0;var e=this.opts.dataLabels.formatter;this.opts.yaxis.forEach(function(e,i){t.opts.yaxis[i].min=0,t.opts.yaxis[i].max=100}),"bar"===this.opts.chart.type&&(this.opts.dataLabels.formatter=e||function(t){return"number"==typeof t&&t?t.toFixed(0)+"%":t})}},{key:"bubble",value:function(){return{dataLabels:{style:{colors:["#fff"]}},tooltip:{shared:!1,intersect:!0},xaxis:{crosshairs:{width:0}},fill:{type:"solid",gradient:{shade:"light",inverse:!0,shadeIntensity:.55,opacityFrom:.4,opacityTo:.8}}}}},{key:"scatter",value:function(){return{dataLabels:{enabled:!1},tooltip:{shared:!1,intersect:!0},markers:{size:6,strokeWidth:2,hover:{sizeOffset:2}}}}},{key:"heatmap",value:function(){return{chart:{stacked:!1,zoom:{enabled:!1}},fill:{opacity:1},dataLabels:{style:{colors:["#fff"]}},stroke:{colors:["#fff"]},tooltip:{followCursor:!0,marker:{show:!1},x:{show:!1}},legend:{position:"top",markers:{shape:"square",size:10,offsetY:2}},grid:{padding:{right:20}}}}},{key:"pie",value:function(){return{chart:{toolbar:{show:!1}},plotOptions:{pie:{donut:{labels:{show:!1}}}},dataLabels:{formatter:function(t){return t.toFixed(1)+"%"},style:{colors:["#fff"]},dropShadow:{enabled:!0}},stroke:{colors:["#fff"]},fill:{opacity:1,gradient:{shade:"dark",shadeIntensity:.35,inverseColors:!1,stops:[0,100,100]}},padding:{right:0,left:0},tooltip:{theme:"dark",fillSeriesColor:!0},legend:{position:"right"}}}},{key:"donut",value:function(){return{chart:{toolbar:{show:!1}},dataLabels:{formatter:function(t){return t.toFixed(1)+"%"},style:{colors:["#fff"]},dropShadow:{enabled:!0}},stroke:{colors:["#fff"]},fill:{opacity:1,gradient:{shade:"dark",shadeIntensity:.4,inverseColors:!1,type:"vertical",opacityFrom:1,opacityTo:1,stops:[70,98,100]}},padding:{right:0,left:0},tooltip:{theme:"dark",fillSeriesColor:!0},legend:{position:"right"}}}},{key:"radar",value:function(){return this.opts.yaxis[0].labels.style.fontSize="13px",this.opts.yaxis[0].labels.offsetY=6,{dataLabels:{enabled:!0,style:{colors:["#a8a8a8"],fontSize:"11px"}},stroke:{width:2},markers:{size:3,strokeWidth:1,strokeOpacity:1},fill:{opacity:.2},tooltip:{shared:!1,intersect:!0,followCursor:!0},grid:{show:!1},xaxis:{tooltip:{enabled:!1},crosshairs:{show:!1}}}}},{key:"radialBar",value:function(){return{chart:{animations:{dynamicAnimation:{enabled:!0,speed:800}},toolbar:{show:!1}},fill:{gradient:{shade:"dark",shadeIntensity:.4,inverseColors:!1,type:"diagonal2",opacityFrom:1,opacityTo:1,stops:[70,98,100]}},padding:{right:0,left:0},legend:{show:!1,position:"right"},tooltip:{enabled:!1,fillSeriesColor:!0}}}}],[{key:"convertCatToNumeric",value:function(t){t.xaxis.type="numeric",t.xaxis.convertedCatToNumeric=!0,t.xaxis.labels=t.xaxis.labels||{},t.xaxis.labels.formatter=t.xaxis.labels.formatter||function(t){return t},t.chart=t.chart||{},t.chart.zoom=t.chart.zoom||window.Apex.chart&&window.Apex.chart.zoom||{};var e=t.xaxis.labels.formatter,i=t.xaxis.categories&&t.xaxis.categories.length?t.xaxis.categories:t.labels;return i&&i.length&&(t.xaxis.labels.formatter=function(t){return e(i[t-1])}),t.xaxis.categories=[],t.labels=[],t.chart.zoom.enabled=t.chart.zoom.enabled||!1,t}}]),t}(),CoreUtils=function(){function t(e){_classCallCheck(this,t),this.ctx=e,this.w=e.w}return _createClass(t,[{key:"getStackedSeriesTotals",value:function(){var t=this.w,e=[];if(0===t.globals.series.length)return e;for(var i=0;i<t.globals.series[t.globals.maxValsInArrayIndex].length;i++){for(var s=0,a=0;a<t.globals.series.length;a++)s+=t.globals.series[a][i];e.push(s)}return t.globals.stackedSeriesTotals=e,e}},{key:"getSeriesTotalByIndex",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===t?this.w.config.series.reduce(function(t,e){return t+e},0):this.w.globals.series[t].reduce(function(t,e){return t+e},0)}},{key:"isSeriesNull",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return 0===(null===t?this.w.config.series.filter(function(t){return null!==t}):this.w.globals.series[t].filter(function(t){return null!==t})).length}},{key:"seriesHaveSameValues",value:function(t){return this.w.globals.series[t].every(function(t,e,i){return t===i[0]})}},{key:"getLargestSeries",value:function(){var t=this.w;t.globals.maxValsInArrayIndex=t.globals.series.map(function(t){return t.length}).indexOf(Math.max.apply(Math,t.globals.series.map(function(t){return t.length})))}},{key:"getLargestMarkerSize",value:function(){var t=this.w,e=0;return t.globals.markers.size.forEach(function(t){e=Math.max(e,t)}),t.globals.markers.largestSize=e,e}},{key:"getSeriesTotals",value:function(){var t=this.w;t.globals.seriesTotals=t.globals.series.map(function(t,e){var i=0;if(Array.isArray(t))for(var s=0;s<t.length;s++)i+=t[s];else i+=t;return i})}},{key:"getSeriesTotalsXRange",value:function(t,e){var i=this.w;return i.globals.series.map(function(s,a){for(var r=0,n=0;n<s.length;n++)i.globals.seriesX[a][n]>t&&i.globals.seriesX[a][n]<e&&(r+=s[n]);return r})}},{key:"getPercentSeries",value:function(){var t=this.w;t.globals.seriesPercent=t.globals.series.map(function(e,i){var s=[];if(Array.isArray(e))for(var a=0;a<e.length;a++){var r=t.globals.stackedSeriesTotals[a],n=0;r&&(n=100*e[a]/r),s.push(n)}else{var o=100*e/t.globals.seriesTotals.reduce(function(t,e){return t+e},0);s.push(o)}return s})}},{key:"getCalculatedRatios",value:function(){var t,e,i,s,a,r=this.w.globals,n=[],o=[],l=.1,h=0;if(r.yRange=[],r.isMultipleYAxis)for(var c=0;c<r.minYArr.length;c++)r.yRange.push(Math.abs(r.minYArr[c]-r.maxYArr[c])),o.push(0);else r.yRange.push(Math.abs(r.minY-r.maxY));r.xRange=Math.abs(r.maxX-r.minX),r.zRange=Math.abs(r.maxZ-r.minZ);for(var d=0;d<r.yRange.length;d++)n.push(r.yRange[d]/r.gridHeight);if(e=r.xRange/r.gridWidth,i=Math.abs(r.initialmaxX-r.initialminX)/r.gridWidth,t=r.yRange/r.gridWidth,s=r.xRange/r.gridHeight,a=r.zRange/r.gridHeight*16,r.minY!==Number.MIN_VALUE&&0!==Math.abs(r.minY)&&(r.hasNegs=!0),r.isMultipleYAxis){o=[];for(var u=0;u<n.length;u++)o.push(-r.minYArr[u]/n[u])}else o.push(-r.minY/n[0]),r.minY!==Number.MIN_VALUE&&0!==Math.abs(r.minY)&&(l=-r.minY/t,h=r.minX/e);return{yRatio:n,invertedYRatio:t,zRatio:a,xRatio:e,initialXRatio:i,invertedXRatio:s,baseLineInvertedY:l,baseLineY:o,baseLineX:h}}},{key:"getLogSeries",value:function(t){var e=this.w;return e.globals.seriesLog=t.map(function(t,i){return e.config.yaxis[i]&&e.config.yaxis[i].logarithmic?t.map(function(t){return null===t?null:(Math.log(t)-Math.log(e.globals.minYArr[i]))/(Math.log(e.globals.maxYArr[i])-Math.log(e.globals.minYArr[i]))}):t}),e.globals.seriesLog}},{key:"getLogYRatios",value:function(t){var e=this,i=this.w,s=this.w.globals;return s.yLogRatio=t.slice(),s.logYRange=s.yRange.map(function(t,a){if(i.config.yaxis[a]&&e.w.config.yaxis[a].logarithmic){var r,n=-Number.MAX_VALUE,o=Number.MIN_VALUE;return s.seriesLog.forEach(function(t,e){t.forEach(function(t){i.config.yaxis[e]&&i.config.yaxis[e].logarithmic&&(n=Math.max(t,n),o=Math.min(t,o))})}),r=Math.pow(s.yRange[a],Math.abs(o-n)/s.yRange[a]),s.yLogRatio[a]=r/s.gridHeight,r}}),s.yLogRatio}}],[{key:"checkComboSeries",value:function(t){var e=!1,i=!1;return t.length&&void 0!==t[0].type&&(e=!0,t.forEach(function(t){"bar"!==t.type&&"column"!==t.type||(i=!0)})),{comboCharts:e,comboChartsHasBars:i}}},{key:"extendArrayProps",value:function(t,e){return e.yaxis&&(e=t.extendYAxis(e)),e.annotations&&(e.annotations.yaxis&&(e=t.extendYAxisAnnotations(e)),e.annotations.xaxis&&(e=t.extendXAxisAnnotations(e)),e.annotations.points&&(e=t.extendPointAnnotations(e))),e}}]),t}(),Config=function(){function t(e){_classCallCheck(this,t),this.opts=e}return _createClass(t,[{key:"init",value:function(){var t=this.opts,e=new Options,i=new Defaults(t);this.chartType=t.chart.type,"histogram"===this.chartType&&(t.chart.type="bar",t=Utils.extend({plotOptions:{bar:{columnWidth:"99.99%"}}},t)),t=this.extendYAxis(t),t=this.extendAnnotations(t);var s=e.init(),a={};if(t&&"object"===_typeof(t)){var r={};switch(this.chartType){case"line":r=i.line();break;case"area":r=i.area();break;case"bar":r=i.bar();break;case"candlestick":r=i.candlestick();break;case"rangeBar":r=i.rangeBar();break;case"histogram":r=i.bar();break;case"bubble":r=i.bubble();break;case"scatter":r=i.scatter();break;case"heatmap":r=i.heatmap();break;case"pie":r=i.pie();break;case"donut":r=i.donut();break;case"radar":r=i.radar();break;case"radialBar":r=i.radialBar();break;default:r=i.line()}t.chart.brush&&t.chart.brush.enabled&&(r=i.brush(r)),t.chart.stacked&&"100%"===t.chart.stackType&&i.stacked100(),this.checkForDarkTheme(window.Apex),this.checkForDarkTheme(t),t.xaxis=t.xaxis||window.Apex.xaxis||{};var n=CoreUtils.checkComboSeries(t.series);"line"!==t.chart.type&&"area"!==t.chart.type&&"scatter"!==t.chart.type||n.comboChartsHasBars||"datetime"===t.xaxis.type||"numeric"===t.xaxis.type||"between"===t.xaxis.tickPlacement||(t=Defaults.convertCatToNumeric(t)),(t.chart.sparkline&&t.chart.sparkline.enabled||window.Apex.chart&&window.Apex.chart.sparkline&&window.Apex.chart.sparkline.enabled)&&(r=i.sparkline(r)),a=Utils.extend(s,r)}var o=Utils.extend(a,window.Apex);return s=Utils.extend(o,t),s=this.handleUserInputErrors(s)}},{key:"extendYAxis",value:function(t){var e=new Options;return void 0===t.yaxis&&(t.yaxis={}),t.yaxis.constructor!==Array&&window.Apex.yaxis&&window.Apex.yaxis.constructor!==Array&&(t.yaxis=Utils.extend(t.yaxis,window.Apex.yaxis)),t.yaxis.constructor!==Array?t.yaxis=[Utils.extend(e.yAxis,t.yaxis)]:t.yaxis=Utils.extendArray(t.yaxis,e.yAxis),t}},{key:"extendAnnotations",value:function(t){return void 0===t.annotations&&(t.annotations={},t.annotations.yaxis=[],t.annotations.xaxis=[],t.annotations.points=[]),t=this.extendYAxisAnnotations(t),t=this.extendXAxisAnnotations(t),t=this.extendPointAnnotations(t)}},{key:"extendYAxisAnnotations",value:function(t){var e=new Options;return t.annotations.yaxis=Utils.extendArray(void 0!==t.annotations.yaxis?t.annotations.yaxis:[],e.yAxisAnnotation),t}},{key:"extendXAxisAnnotations",value:function(t){var e=new Options;return t.annotations.xaxis=Utils.extendArray(void 0!==t.annotations.xaxis?t.annotations.xaxis:[],e.xAxisAnnotation),t}},{key:"extendPointAnnotations",value:function(t){var e=new Options;return t.annotations.points=Utils.extendArray(void 0!==t.annotations.points?t.annotations.points:[],e.pointAnnotation),t}},{key:"checkForDarkTheme",value:function(t){t.theme&&"dark"===t.theme.mode&&(t.tooltip||(t.tooltip={}),"light"!==t.tooltip.theme&&(t.tooltip.theme="dark"),t.chart.foreColor||(t.chart.foreColor="#f6f7f8"),t.theme.palette||(t.theme.palette="palette4"))}},{key:"handleUserInputErrors",value:function(t){var e=t;if(e.tooltip.shared&&e.tooltip.intersect)throw new Error("tooltip.shared cannot be enabled when tooltip.intersect is true. Turn off any other option by setting it to false.");if(e.chart.scroller&&console.warn("Scroller has been deprecated since v2.0.0. Please remove the configuration for chart.scroller"),("bar"===e.chart.type||"rangeBar"===e.chart.type)&&e.plotOptions.bar.horizontal){if(e.yaxis.length>1)throw new Error("Multiple Y Axis for bars are not supported. Switch to column chart by setting plotOptions.bar.horizontal=false");e.yaxis[0].reversed&&(e.yaxis[0].opposite=!0),e.xaxis.tooltip.enabled=!1,e.yaxis[0].tooltip.enabled=!1,e.chart.zoom.enabled=!1}return"bar"!==e.chart.type&&"rangeBar"!==e.chart.type||e.tooltip.shared&&("barWidth"===e.xaxis.crosshairs.width&&e.series.length>1&&(console.warn('crosshairs.width = "barWidth" is only supported in single series, not in a multi-series barChart.'),e.xaxis.crosshairs.width="tickWidth"),e.plotOptions.bar.horizontal&&(e.states.hover.type="none",e.tooltip.shared=!1),e.tooltip.followCursor||(console.warn("followCursor option in shared columns cannot be turned off. Please set %ctooltip.followCursor: true","color: blue;"),e.tooltip.followCursor=!0)),"candlestick"===e.chart.type&&e.yaxis[0].reversed&&(console.warn("Reversed y-axis in candlestick chart is not supported."),e.yaxis[0].reversed=!1),e.chart.group&&0===e.yaxis[0].labels.minWidth&&console.warn("It looks like you have multiple charts in synchronization. You must provide yaxis.labels.minWidth which must be EQUAL for all grouped charts to prevent incorrect behaviour."),Array.isArray(e.stroke.width)&&"line"!==e.chart.type&&"area"!==e.chart.type&&(console.warn("stroke.width option accepts array only for line and area charts. Reverted back to Number"),e.stroke.width=e.stroke.width[0]),e}}]),t}(),Globals=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"globalVars",value:function(t){return{chartID:null,cuid:null,events:{beforeMount:[],mounted:[],updated:[],clicked:[],selection:[],dataPointSelection:[],zoomed:[],scrolled:[]},colors:[],clientX:null,clientY:null,fill:{colors:[]},stroke:{colors:[]},dataLabels:{style:{colors:[]}},radarPolygons:{fill:{colors:[]}},markers:{colors:[],size:t.markers.size,largestSize:0},animationEnded:!1,isTouchDevice:"ontouchstart"in window||navigator.msMaxTouchPoints,isDirty:!1,isExecCalled:!1,initialConfig:null,lastXAxis:[],lastYAxis:[],series:[],seriesRangeStart:[],seriesRangeEnd:[],seriesPercent:[],seriesTotals:[],stackedSeriesTotals:[],seriesX:[],seriesZ:[],labels:[],timelineLabels:[],invertedTimelineLabels:[],seriesNames:[],noLabelsProvided:!1,allSeriesCollapsed:!1,collapsedSeries:[],collapsedSeriesIndices:[],ancillaryCollapsedSeries:[],ancillaryCollapsedSeriesIndices:[],risingSeries:[],dataFormatXNumeric:!1,selectedDataPoints:[],ignoreYAxisIndexes:[],yAxisSameScaleIndices:[],padHorizontal:0,maxValsInArrayIndex:0,radialSize:0,zoomEnabled:"zoom"===t.chart.toolbar.autoSelected&&t.chart.toolbar.tools.zoom&&t.chart.zoom.enabled,panEnabled:"pan"===t.chart.toolbar.autoSelected&&t.chart.toolbar.tools.pan,selectionEnabled:"selection"===t.chart.toolbar.autoSelected&&t.chart.toolbar.tools.selection,yaxis:null,minY:Number.MIN_VALUE,maxY:-Number.MAX_VALUE,minYArr:[],maxYArr:[],maxX:-Number.MAX_VALUE,initialmaxX:-Number.MAX_VALUE,minX:Number.MIN_VALUE,initialminX:Number.MIN_VALUE,minZ:Number.MIN_VALUE,maxZ:-Number.MAX_VALUE,minXDiff:Number.MAX_VALUE,mousedown:!1,lastClientPosition:{},visibleXRange:void 0,yRange:[],zRange:0,xRange:0,yValueDecimal:0,total:0,SVGNS:"http://www.w3.org/2000/svg",svgWidth:0,svgHeight:0,noData:!1,locale:{},dom:{},memory:{methodsToExec:[]},shouldAnimate:!0,skipLastTimelinelabel:!1,delayedElements:[],axisCharts:!0,isXNumeric:!1,isDataXYZ:!1,resized:!1,resizeTimer:null,comboCharts:!1,comboChartsHasBars:!1,dataChanged:!1,previousPaths:[],seriesXvalues:[],seriesYvalues:[],seriesCandleO:[],seriesCandleH:[],seriesCandleL:[],seriesCandleC:[],allSeriesHasEqualX:!0,dataPoints:0,pointsArray:[],dataLabelsRects:[],lastDrawnDataLabelsIndexes:[],hasNullValues:!1,easing:null,zoomed:!1,gridWidth:0,gridHeight:0,yAxisScale:[],xAxisScale:null,xAxisTicksPositions:[],timescaleTicks:[],rotateXLabels:!1,defaultLabels:!1,xLabelFormatter:void 0,yLabelFormatters:[],xaxisTooltipFormatter:void 0,ttKeyFormatter:void 0,ttVal:void 0,ttZFormatter:void 0,LINE_HEIGHT_RATIO:1.618,xAxisLabelsHeight:0,yAxisLabelsWidth:0,scaleX:1,scaleY:1,translateX:0,translateY:0,translateYAxisX:[],yLabelsCoords:[],yTitleCoords:[],yAxisWidths:[],translateXAxisY:0,translateXAxisX:0,tooltip:null,tooltipOpts:null}}},{key:"init",value:function(t){var e=this.globalVars(t);return e.initialConfig=Utils.extend({},t),e.initialSeries=JSON.parse(JSON.stringify(e.initialConfig.series)),e.lastXAxis=JSON.parse(JSON.stringify(e.initialConfig.xaxis)),e.lastYAxis=JSON.parse(JSON.stringify(e.initialConfig.yaxis)),e}}]),t}(),Base=function(){function t(e){_classCallCheck(this,t),this.opts=e}return _createClass(t,[{key:"init",value:function(){var t=new Config(this.opts).init();return{config:t,globals:(new Globals).init(t)}}}]),t}(),Fill=function(){function t(e){_classCallCheck(this,t),this.ctx=e,this.w=e.w,this.opts=null,this.seriesIndex=0}return _createClass(t,[{key:"clippedImgArea",value:function(t){var e=this.w,i=e.config,s=parseInt(e.globals.gridWidth),a=parseInt(e.globals.gridHeight),r=s>a?s:a,n=t.image,o=0,l=0;void 0===t.width&&void 0===t.height?void 0!==i.fill.image.width&&void 0!==i.fill.image.height?(o=i.fill.image.width+1,l=i.fill.image.height):(o=r+1,l=r):(o=t.width,l=t.height);var h=document.createElementNS(e.globals.SVGNS,"pattern");Graphics.setAttrs(h,{id:t.patternID,patternUnits:t.patternUnits?t.patternUnits:"userSpaceOnUse",width:o+"px",height:l+"px"});var c=document.createElementNS(e.globals.SVGNS,"image");h.appendChild(c),c.setAttributeNS("http://www.w3.org/1999/xlink","href",n),Graphics.setAttrs(c,{x:0,y:0,preserveAspectRatio:"none",width:o+"px",height:l+"px"}),c.style.opacity=t.opacity,e.globals.dom.elDefs.node.appendChild(h)}},{key:"getSeriesIndex",value:function(t){var e=this.w;return"bar"===e.config.chart.type&&e.config.plotOptions.bar.distributed||"heatmap"===e.config.chart.type?this.seriesIndex=t.seriesNumber:this.seriesIndex=t.seriesNumber%e.globals.series.length,this.seriesIndex}},{key:"fillPath",value:function(t){var e=this.w;this.opts=t;var i,s,a,r=this.w.config;this.seriesIndex=this.getSeriesIndex(t);var n=this.getFillColors()[this.seriesIndex];"function"==typeof n&&(n=n({seriesIndex:this.seriesIndex,value:t.value,w:e}));var o=this.getFillType(this.seriesIndex),l=Array.isArray(r.fill.opacity)?r.fill.opacity[this.seriesIndex]:r.fill.opacity,h=n;return t.color&&(n=t.color),-1===n.indexOf("rgb")?h=Utils.hexToRgba(n,l):n.indexOf("rgba")>-1&&(l="0."+Utils.getOpacityFromRGBA(n)),"pattern"===o&&(s=this.handlePatternFill(s,n,l,h)),"gradient"===o&&(a=this.handleGradientFill(a,n,l,this.seriesIndex)),r.fill.image.src.length>0&&"image"===o?t.seriesNumber<r.fill.image.src.length?(this.clippedImgArea({opacity:l,image:r.fill.image.src[t.seriesNumber],patternUnits:t.patternUnits,patternID:"pattern".concat(e.globals.cuid).concat(t.seriesNumber+1)}),i="url(#pattern".concat(e.globals.cuid).concat(t.seriesNumber+1,")")):i=h:i="gradient"===o?a:"pattern"===o?s:h,t.solid&&(i=h),i}},{key:"getFillType",value:function(t){var e=this.w;return Array.isArray(e.config.fill.type)?e.config.fill.type[t]:e.config.fill.type}},{key:"getFillColors",value:function(){var t=this.w,e=t.config,i=this.opts,s=[];return t.globals.comboCharts?"line"===t.config.series[this.seriesIndex].type?t.globals.stroke.colors instanceof Array?s=t.globals.stroke.colors:s.push(t.globals.stroke.colors):t.globals.fill.colors instanceof Array?s=t.globals.fill.colors:s.push(t.globals.fill.colors):"line"===e.chart.type?t.globals.stroke.colors instanceof Array?s=t.globals.stroke.colors:s.push(t.globals.stroke.colors):t.globals.fill.colors instanceof Array?s=t.globals.fill.colors:s.push(t.globals.fill.colors),void 0!==i.fillColors&&(s=[],i.fillColors instanceof Array?s=i.fillColors.slice():s.push(i.fillColors)),s}},{key:"handlePatternFill",value:function(t,e,i,s){var a=this.w.config,r=this.opts,n=new Graphics(this.ctx),o=void 0===a.fill.pattern.strokeWidth?Array.isArray(a.stroke.width)?a.stroke.width[this.seriesIndex]:a.stroke.width:Array.isArray(a.fill.pattern.strokeWidth)?a.fill.pattern.strokeWidth[this.seriesIndex]:a.fill.pattern.strokeWidth,l=e;a.fill.pattern.style instanceof Array?t=void 0!==a.fill.pattern.style[r.seriesNumber]?n.drawPattern(a.fill.pattern.style[r.seriesNumber],a.fill.pattern.width,a.fill.pattern.height,l,o,i):s:t=n.drawPattern(a.fill.pattern.style,a.fill.pattern.width,a.fill.pattern.height,l,o,i);return t}},{key:"handleGradientFill",value:function(t,e,i,s){var a,r,n=this.w.config,o=this.opts,l=new Graphics(this.ctx),h=new Utils,c=n.fill.gradient.type,d=void 0===n.fill.gradient.opacityFrom?i:Array.isArray(n.fill.gradient.opacityFrom)?n.fill.gradient.opacityFrom[s]:n.fill.gradient.opacityFrom,u=void 0===n.fill.gradient.opacityTo?i:Array.isArray(n.fill.gradient.opacityTo)?n.fill.gradient.opacityTo[s]:n.fill.gradient.opacityTo;if(a=e,r=void 0===n.fill.gradient.gradientToColors||0===n.fill.gradient.gradientToColors.length?"dark"===n.fill.gradient.shade?h.shadeColor(-1*parseFloat(n.fill.gradient.shadeIntensity),e):h.shadeColor(parseFloat(n.fill.gradient.shadeIntensity),e):n.fill.gradient.gradientToColors[o.seriesNumber],n.fill.gradient.inverseColors){var g=a;a=r,r=g}return l.drawGradient(c,a,r,d,u,o.size,n.fill.gradient.stops,n.fill.gradient.colorStops,s)}}]),t}(),Markers=function(){function t(e,i){_classCallCheck(this,t),this.ctx=e,this.w=e.w}return _createClass(t,[{key:"setGlobalMarkerSize",value:function(){var t=this.w;if(t.globals.markers.size=Array.isArray(t.config.markers.size)?t.config.markers.size:[t.config.markers.size],t.globals.markers.size.length>0){if(t.globals.markers.size.length<t.globals.series.length+1)for(var e=0;e<=t.globals.series.length;e++)void 0===t.globals.markers.size[e]&&t.globals.markers.size.push(t.globals.markers.size[0])}else t.globals.markers.size=t.config.series.map(function(e){return t.config.markers.size})}},{key:"plotChartMarkers",value:function(t,e,i){var s,a=this.w,r=e,n=t,o=null,l=new Graphics(this.ctx);if(a.globals.markers.size[e]>0&&(o=l.group({class:"apexcharts-series-markers"})).attr("clip-path","url(#gridRectMarkerMask".concat(a.globals.cuid,")")),n.x instanceof Array)for(var h=0;h<n.x.length;h++){var c=i;1===i&&0===h&&(c=0),1===i&&1===h&&(c=1);var d="apexcharts-marker";if("line"!==a.config.chart.type&&"area"!==a.config.chart.type||a.globals.comboCharts||a.config.tooltip.intersect||(d+=" no-pointer-events"),Array.isArray(a.config.markers.size)?a.globals.markers.size[e]>0:a.config.markers.size>0){Utils.isNumber(n.y[h])?d+=" w".concat((Math.random()+1).toString(36).substring(4)):d="apexcharts-nullpoint";var u=this.getMarkerConfig(d,e,c);a.config.series[r].data[i]&&(a.config.series[r].data[i].fillColor&&(u.pointFillColor=a.config.series[r].data[i].fillColor),a.config.series[r].data[i].strokeColor&&(u.pointStrokeColor=a.config.series[r].data[i].strokeColor)),(s=l.drawMarker(n.x[h],n.y[h],u)).attr("rel",c),s.attr("j",c),s.attr("index",e),s.node.setAttribute("default-marker-size",u.pSize),new Filters(this.ctx).setSelectionFilter(s,e,c),this.addEvents(s),o&&o.add(s)}else void 0===a.globals.pointsArray[e]&&(a.globals.pointsArray[e]=[]),a.globals.pointsArray[e].push([n.x[h],n.y[h]])}return o}},{key:"getMarkerConfig",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=this.w,a=this.getMarkerStyle(e),r=s.globals.markers.size[e];return null!==i&&s.config.markers.discrete.length&&s.config.markers.discrete.map(function(t){t.seriesIndex===e&&t.dataPointIndex===i&&(a.pointStrokeColor=t.strokeColor,a.pointFillColor=t.fillColor,r=t.size)}),{pSize:r,pRadius:s.config.markers.radius,pWidth:s.config.markers.strokeWidth,pointStrokeColor:a.pointStrokeColor,pointFillColor:a.pointFillColor,shape:s.config.markers.shape instanceof Array?s.config.markers.shape[e]:s.config.markers.shape,class:t,pointStrokeOpacity:s.config.markers.strokeOpacity,pointFillOpacity:s.config.markers.fillOpacity,seriesIndex:e}}},{key:"addEvents",value:function(t){var e=this.w,i=new Graphics(this.ctx);t.node.addEventListener("mouseenter",i.pathMouseEnter.bind(this.ctx,t)),t.node.addEventListener("mouseleave",i.pathMouseLeave.bind(this.ctx,t)),t.node.addEventListener("mousedown",i.pathMouseDown.bind(this.ctx,t)),t.node.addEventListener("click",e.config.markers.onClick),t.node.addEventListener("dblclick",e.config.markers.onDblClick),t.node.addEventListener("touchstart",i.pathMouseDown.bind(this.ctx,t),{passive:!0})}},{key:"getMarkerStyle",value:function(t){var e=this.w,i=e.globals.markers.colors,s=e.config.markers.strokeColor||e.config.markers.strokeColors;return{pointStrokeColor:s instanceof Array?s[t]:s,pointFillColor:i instanceof Array?i[t]:i}}}]),t}(),Scatter=function(){function t(e){_classCallCheck(this,t),this.ctx=e,this.w=e.w,this.initialAnim=this.w.config.chart.animations.enabled,this.dynamicAnim=this.initialAnim&&this.w.config.chart.animations.dynamicAnimation.enabled,this.radiusSizes=[]}return _createClass(t,[{key:"draw",value:function(t,e,i){var s=this.w,a=new Graphics(this.ctx),r=i.realIndex,n=i.pointsPos,o=i.zRatio,l=i.elParent,h=a.group({class:"apexcharts-series-markers apexcharts-series-".concat(s.config.chart.type)});if(h.attr("clip-path","url(#gridRectMarkerMask".concat(s.globals.cuid,")")),n.x instanceof Array)for(var c=0;c<n.x.length;c++){var d=e+1,u=!0;0===e&&0===c&&(d=0),0===e&&1===c&&(d=1);var g=0,f=s.globals.markers.size[r];o!==1/0&&(f=s.globals.seriesZ[r][d]/o,void 0===this.radiusSizes[r]&&this.radiusSizes.push([]),this.radiusSizes[r].push(f)),s.config.chart.animations.enabled||(g=f);var p=n.x[c],x=n.y[c];if(g=g||0,(0===p&&0===x||null===x||void 0===s.globals.series[r][d])&&(u=!1),u){var m=this.drawPoint(p,x,g,f,r,d,e);h.add(m)}l.add(h)}}},{key:"drawPoint",value:function(t,e,i,s,a,r,n){var o=this.w,l=a,h=new Animations(this.ctx),c=new Filters(this.ctx),d=new Fill(this.ctx),u=new Markers(this.ctx),g=new Graphics(this.ctx),f=u.getMarkerConfig("apexcharts-marker",l),p=d.fillPath({seriesNumber:a,patternUnits:"objectBoundingBox",value:o.globals.series[a][n]}),x=g.drawCircle(i);if(o.config.series[l].data[r]&&o.config.series[l].data[r].fillColor&&(p=o.config.series[l].data[r].fillColor),x.attr({cx:t,cy:e,fill:p,stroke:f.pointStrokeColor,strokeWidth:f.pWidth}),o.config.chart.dropShadow.enabled){var m=o.config.chart.dropShadow;c.dropShadow(x,m,a)}if(this.initialAnim&&!o.globals.dataChanged){var b=1;o.globals.resized||(b=o.config.chart.animations.speed),h.animateCircleRadius(x,0,s,b,o.globals.easing)}if(o.globals.dataChanged)if(this.dynamicAnim){var v,y,w,k,A=o.config.chart.animations.dynamicAnimation.speed;null!=(k=o.globals.previousPaths[a]&&o.globals.previousPaths[a][n])&&(v=k.x,y=k.y,w=void 0!==k.r?k.r:s);for(var S=0;S<o.globals.collapsedSeries.length;S++)o.globals.collapsedSeries[S].index===a&&(A=1,s=0);0===t&&0===e&&(s=0),h.animateCircle(x,{cx:v,cy:y,r:w},{cx:t,cy:e,r:s},A,o.globals.easing)}else x.attr({r:s});return x.attr({rel:r,j:r,index:a,"default-marker-size":s}),c.setSelectionFilter(x,a,r),u.addEvents(x),x.node.classList.add("apexcharts-marker"),x}},{key:"centerTextInBubble",value:function(t){var e=this.w;return{y:t+=parseInt(e.config.dataLabels.style.fontSize)/4}}}]),t}(),DataLabels=function(){function t(e){_classCallCheck(this,t),this.ctx=e,this.w=e.w}return _createClass(t,[{key:"dataLabelsCorrection",value:function(t,e,i,s,a,r,n){var o=this.w,l=!1,h=new Graphics(this.ctx).getTextRects(i,n),c=h.width,d=h.height;void 0===o.globals.dataLabelsRects[s]&&(o.globals.dataLabelsRects[s]=[]),o.globals.dataLabelsRects[s].push({x:t,y:e,width:c,height:d});var u=o.globals.dataLabelsRects[s].length-2,g=void 0!==o.globals.lastDrawnDataLabelsIndexes[s]?o.globals.lastDrawnDataLabelsIndexes[s][o.globals.lastDrawnDataLabelsIndexes[s].length-1]:0;if(void 0!==o.globals.dataLabelsRects[s][u]){var f=o.globals.dataLabelsRects[s][g];(t>f.x+f.width+2||e>f.y+f.height+2||t+c<f.x)&&(l=!0)}return(0===a||r)&&(l=!0),{x:t,y:e,textRects:h,drawnextLabel:l}}},{key:"drawDataLabel",value:function(t,e,i){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"top",a=this.w,r=new Graphics(this.ctx),n=a.config.dataLabels,o=0,l=0,h=i,c=null;if(!n.enabled||t.x instanceof Array!=!0)return c;c=r.group({class:"apexcharts-data-labels"});for(var d=0;d<t.x.length;d++)if(o=t.x[d]+n.offsetX,l=t.y[d]+n.offsetY-a.globals.markers.size[e]-5,"bottom"===s&&(l=l+2*a.globals.markers.size[e]+1.4*parseInt(n.style.fontSize)),!isNaN(o)){1===i&&0===d&&(h=0),1===i&&1===d&&(h=1);var u=a.globals.series[e][h],g="";if("bubble"===a.config.chart.type)g=a.globals.seriesZ[e][h],l=t.y[d]+a.config.dataLabels.offsetY,l=new Scatter(this.ctx).centerTextInBubble(l,e,h).y;else void 0!==u&&(g=a.config.dataLabels.formatter(u,{ctx:this.ctx,seriesIndex:e,dataPointIndex:h,w:a}));this.plotDataLabelsText({x:o,y:l,text:g,i:e,j:h,parent:c,offsetCorrection:!0,dataLabelsConfig:a.config.dataLabels})}return c}},{key:"plotDataLabelsText",value:function(t){var e=this.w,i=new Graphics(this.ctx),s=t.x,a=t.y,r=t.i,n=t.j,o=t.text,l=t.textAnchor,h=t.parent,c=t.dataLabelsConfig,d=t.alwaysDrawDataLabel,u=t.offsetCorrection;if(!(Array.isArray(e.config.dataLabels.enabledOnSeries)&&e.config.dataLabels.enabledOnSeries.indexOf(r)>-1)){var g={x:s,y:a,drawnextLabel:!0};if(u&&(g=this.dataLabelsCorrection(s,a,o,r,n,d,parseInt(c.style.fontSize))),e.globals.zoomed||(s=g.x,a=g.y),g.textRects&&(s+g.textRects.width<10||s>e.globals.gridWidth+10)&&(o=""),g.drawnextLabel){var f=i.drawText({width:100,height:parseInt(c.style.fontSize),x:s,y:a,foreColor:e.globals.dataLabels.style.colors[r],textAnchor:l||c.textAnchor,text:o,fontSize:c.style.fontSize,fontFamily:c.style.fontFamily});if(f.attr({class:"apexcharts-datalabel",cx:s,cy:a}),c.dropShadow.enabled){var p=c.dropShadow;new Filters(this.ctx).dropShadow(f,p)}h.add(f),void 0===e.globals.lastDrawnDataLabelsIndexes[r]&&(e.globals.lastDrawnDataLabelsIndexes[r]=[]),e.globals.lastDrawnDataLabelsIndexes[r].push(n)}}}}]),t}(),Bar=function(){function t(e,i){_classCallCheck(this,t),this.ctx=e,this.w=e.w;var s=this.w;this.barOptions=s.config.plotOptions.bar,this.isHorizontal=this.barOptions.horizontal,this.strokeWidth=s.config.stroke.width,this.isNullValue=!1,this.xyRatios=i,null!==this.xyRatios&&(this.xRatio=i.xRatio,this.yRatio=i.yRatio,this.invertedXRatio=i.invertedXRatio,this.invertedYRatio=i.invertedYRatio,this.baseLineY=i.baseLineY,this.baseLineInvertedY=i.baseLineInvertedY),this.yaxisIndex=0,this.seriesLen=0}return _createClass(t,[{key:"draw",value:function(t,e){var i=this.w,s=new Graphics(this.ctx),a=new CoreUtils(this.ctx,i);t=a.getLogSeries(t),this.series=t,this.yRatio=a.getLogYRatios(this.yRatio),this.initVariables(t);var r=s.group({class:"apexcharts-bar-series apexcharts-plot-series"});i.config.dataLabels.enabled&&this.totalItems>i.config.plotOptions.bar.dataLabels.maxItems&&console.warn("WARNING: DataLabels are enabled but there are too many to display. This may cause performance issue when rendering.");for(var n=0,o=0;n<t.length;n++,o++){var l,h,c,d,u=void 0,g=void 0,f=void 0,p=void 0,x=[],m=[],b=i.globals.comboCharts?e[n]:n,v=s.group({class:"apexcharts-series",rel:n+1,seriesName:Utils.escapeString(i.globals.seriesNames[b]),"data:realIndex":b});this.ctx.series.addCollapsedClassToSeries(v,b),t[n].length>0&&(this.visibleI=this.visibleI+1);var y=0,w=0,k=0;this.yRatio.length>1&&(this.yaxisIndex=b),this.isReversed=i.config.yaxis[this.yaxisIndex]&&i.config.yaxis[this.yaxisIndex].reversed;var A=this.initialPositions();p=A.y,w=A.barHeight,h=A.yDivision,d=A.zeroW,f=A.x,k=A.barWidth,l=A.xDivision,c=A.zeroH,this.horizontal||m.push(f+k/2);for(var S=s.group({class:"apexcharts-datalabels"}),C=0,L=i.globals.dataPoints;C<i.globals.dataPoints;C++,L--){void 0===this.series[n][C]||null===t[n][C]?this.isNullValue=!0:this.isNullValue=!1,i.config.stroke.show&&(y=this.isNullValue?0:Array.isArray(this.strokeWidth)?this.strokeWidth[b]:this.strokeWidth);var P=null;this.isHorizontal?(P=this.drawBarPaths({indexes:{i:n,j:C,realIndex:b,bc:o},barHeight:w,strokeWidth:y,pathTo:u,pathFrom:g,zeroW:d,x:f,y:p,yDivision:h,elSeries:v}),k=this.series[n][C]/this.invertedYRatio):(P=this.drawColumnPaths({indexes:{i:n,j:C,realIndex:b,bc:o},x:f,y:p,xDivision:l,pathTo:u,pathFrom:g,barWidth:k,zeroH:c,strokeWidth:y,elSeries:v}),w=this.series[n][C]/this.yRatio[this.yaxisIndex]),u=P.pathTo,g=P.pathFrom,p=P.y,f=P.x,C>0&&m.push(f+k/2),x.push(p);var z=this.getPathFillColor(t,n,C,b);v=this.renderSeries({realIndex:b,pathFill:z,j:C,i:n,pathFrom:g,pathTo:u,strokeWidth:y,elSeries:v,x:f,y:p,series:t,barHeight:w,barWidth:k,elDataLabelsWrap:S,visibleSeries:this.visibleI,type:"bar"})}i.globals.seriesXvalues[b]=m,i.globals.seriesYvalues[b]=x,r.add(v)}return r}},{key:"getPathFillColor",value:function(t,e,i,s){var a=this.w,r=new Fill(this.ctx),n=null,o=this.barOptions.distributed?i:e;this.barOptions.colors.ranges.length>0&&this.barOptions.colors.ranges.map(function(s){t[e][i]>=s.from&&t[e][i]<=s.to&&(n=s.color)});return a.config.series[e].data[i]&&a.config.series[e].data[i].fillColor&&(n=a.config.series[e].data[i].fillColor),r.fillPath({seriesNumber:this.barOptions.distributed?o:s,color:n,value:t[e][i]})}},{key:"renderSeries",value:function(t){var e=t.realIndex,i=t.pathFill,s=t.lineFill,a=t.j,r=t.i,n=t.pathFrom,o=t.pathTo,l=t.strokeWidth,h=t.elSeries,c=t.x,d=t.y,u=t.series,g=t.barHeight,f=t.barWidth,p=t.elDataLabelsWrap,x=t.visibleSeries,m=t.type,b=this.w,v=new Graphics(this.ctx);s||(s=this.barOptions.distributed?b.globals.stroke.colors[a]:b.globals.stroke.colors[e]),b.config.series[r].data[a]&&b.config.series[r].data[a].strokeColor&&(s=b.config.series[r].data[a].strokeColor),this.isNullValue&&(i="none");var y=a/b.config.chart.animations.animateGradually.delay*(b.config.chart.animations.speed/b.globals.dataPoints)/2.4,w=v.renderPaths({i:r,j:a,realIndex:e,pathFrom:n,pathTo:o,stroke:s,strokeWidth:l,strokeLineCap:b.config.stroke.lineCap,fill:i,animationDelay:y,initialSpeed:b.config.chart.animations.speed,dataChangeSpeed:b.config.chart.animations.dynamicAnimation.speed,className:"apexcharts-".concat(m,"-area")});w.attr("clip-path","url(#gridRectMask".concat(b.globals.cuid,")")),new Filters(this.ctx).setSelectionFilter(w,e,a),h.add(w);var k=this.calculateDataLabelsPos({x:c,y:d,i:r,j:a,series:u,realIndex:e,barHeight:g,barWidth:f,renderedPath:w,visibleSeries:x});return null!==k&&p.add(k),h.add(p),h}},{key:"initVariables",value:function(t){var e=this.w;this.series=t,this.totalItems=0,this.seriesLen=0,this.visibleI=-1,this.visibleItems=1;for(var i=0;i<t.length;i++)if(t[i].length>0&&(this.seriesLen=this.seriesLen+1,this.totalItems+=t[i].length),e.globals.isXNumeric)for(var s=0;s<t[i].length;s++)e.globals.seriesX[i][s]>e.globals.minX&&e.globals.seriesX[i][s]<e.globals.maxX&&this.visibleItems++;else this.visibleItems=e.globals.dataPoints;0===this.seriesLen&&(this.seriesLen=1)}},{key:"initialPositions",value:function(){var t,e,i,s,a,r,n,o,l=this.w;return this.isHorizontal?(a=(i=l.globals.gridHeight/l.globals.dataPoints)/this.seriesLen,l.globals.isXNumeric&&(a=(i=l.globals.gridHeight/this.totalItems)/this.seriesLen),a=a*parseInt(this.barOptions.barHeight)/100,o=this.baseLineInvertedY+l.globals.padHorizontal+(this.isReversed?l.globals.gridWidth:0)-(this.isReversed?2*this.baseLineInvertedY:0),e=(i-a*this.seriesLen)/2):(r=(s=l.globals.gridWidth/this.visibleItems)/this.seriesLen*parseInt(this.barOptions.columnWidth)/100,l.globals.isXNumeric&&(r=(s=l.globals.minXDiff/this.xRatio)/this.seriesLen*parseInt(this.barOptions.columnWidth)/100),n=l.globals.gridHeight-this.baseLineY[this.yaxisIndex]-(this.isReversed?l.globals.gridHeight:0)+(this.isReversed?2*this.baseLineY[this.yaxisIndex]:0),t=l.globals.padHorizontal+(s-r*this.seriesLen)/2),{x:t,y:e,yDivision:i,xDivision:s,barHeight:a,barWidth:r,zeroH:n,zeroW:o}}},{key:"drawBarPaths",value:function(t){var e=t.indexes,i=t.barHeight,s=t.strokeWidth,a=t.pathTo,r=t.pathFrom,n=t.zeroW,o=t.x,l=t.y,h=t.yDivision,c=t.elSeries,d=this.w,u=new Graphics(this.ctx),g=e.i,f=e.j,p=e.realIndex,x=e.bc;d.globals.isXNumeric&&(l=(d.globals.seriesX[g][f]-d.globals.minX)/this.invertedXRatio-i);var m=l+i*this.visibleI;a=u.move(n,m),r=u.move(n,m),d.globals.previousPaths.length>0&&(r=this.getPathFrom(p,f));var b={barHeight:i,strokeWidth:s,barYPosition:m,x:o=void 0===this.series[g][f]||null===this.series[g][f]?n:n+this.series[g][f]/this.invertedYRatio-2*(this.isReversed?this.series[g][f]/this.invertedYRatio:0),zeroW:n},v=this.barEndingShape(d,b,this.series,g,f);if(a=a+u.line(v.newX,m)+v.path+u.line(n,m+i-s)+u.line(n,m),r=r+u.line(n,m)+v.ending_p_from+u.line(n,m+i-s)+u.line(n,m+i-s)+u.line(n,m),d.globals.isXNumeric||(l+=h),this.barOptions.colors.backgroundBarColors.length>0&&0===g){x>=this.barOptions.colors.backgroundBarColors.length&&(x=0);var y=this.barOptions.colors.backgroundBarColors[x],w=u.drawRect(0,m-i*this.visibleI,d.globals.gridWidth,i*this.seriesLen,0,y,this.barOptions.colors.backgroundBarOpacity);c.add(w),w.node.classList.add("apexcharts-backgroundBar")}return{pathTo:a,pathFrom:r,x:o,y:l,barYPosition:m}}},{key:"drawColumnPaths",value:function(t){var e=t.indexes,i=t.x,s=t.y,a=t.xDivision,r=t.pathTo,n=t.pathFrom,o=t.barWidth,l=t.zeroH,h=t.strokeWidth,c=t.elSeries,d=this.w,u=new Graphics(this.ctx),g=e.i,f=e.j,p=e.realIndex,x=e.bc;d.globals.isXNumeric&&(i=(d.globals.seriesX[g][f]-d.globals.minX)/this.xRatio-o/2);var m=i+o*this.visibleI;r=u.move(m,l),n=u.move(m,l),d.globals.previousPaths.length>0&&(n=this.getPathFrom(p,f));var b={barWidth:o,strokeWidth:h,barXPosition:m,y:s=void 0===this.series[g][f]||null===this.series[g][f]?l:l-this.series[g][f]/this.yRatio[this.yaxisIndex]+2*(this.isReversed?this.series[g][f]/this.yRatio[this.yaxisIndex]:0),zeroH:l},v=this.barEndingShape(d,b,this.series,g,f);if(r=r+u.line(m,v.newY)+v.path+u.line(m+o-h,l)+u.line(m-h/2,l),n=n+u.line(m,l)+v.ending_p_from+u.line(m+o-h,l)+u.line(m+o-h,l)+u.line(m-h/2,l),d.globals.isXNumeric||(i+=a),this.barOptions.colors.backgroundBarColors.length>0&&0===g){x>=this.barOptions.colors.backgroundBarColors.length&&(x=0);var y=this.barOptions.colors.backgroundBarColors[x],w=u.drawRect(m-o*this.visibleI,0,o*this.seriesLen,d.globals.gridHeight,0,y,this.barOptions.colors.backgroundBarOpacity);c.add(w),w.node.classList.add("apexcharts-backgroundBar")}return{pathTo:r,pathFrom:n,x:i,y:s,barXPosition:m}}},{key:"getPathFrom",value:function(t,e){for(var i,s=this.w,a=0;a<s.globals.previousPaths.length;a++){var r=s.globals.previousPaths[a];r.paths.length>0&&parseInt(r.realIndex)===parseInt(t)&&void 0!==s.globals.previousPaths[a].paths[e]&&(i=s.globals.previousPaths[a].paths[e].d)}return i}},{key:"calculateDataLabelsPos",value:function(t){var e=t.x,i=t.y,s=t.i,a=t.j,r=t.realIndex,n=t.series,o=t.barHeight,l=t.barWidth,h=t.visibleSeries,c=t.renderedPath,d=this.w,u=new Graphics(this.ctx),g=Array.isArray(this.strokeWidth)?this.strokeWidth[r]:this.strokeWidth,f=e+parseFloat(l*h),p=i+parseFloat(o*h);d.globals.isXNumeric&&!d.globals.isBarHorizontal&&(f=e+parseFloat(l*(h+1))-g,p=i+parseFloat(o*(h+1))-g);var x=e,m=i,b={},v=d.config.dataLabels,y=this.barOptions.dataLabels,w=v.offsetX,k=v.offsetY,A={width:0,height:0};return d.config.dataLabels.enabled&&(A=u.getTextRects(d.globals.yLabelFormatters[0](d.globals.maxY),parseInt(v.style.fontSize))),b=this.isHorizontal?this.calculateBarsDataLabelsPosition({x:e,y:i,i:s,j:a,renderedPath:c,bcy:p,barHeight:o,barWidth:l,textRects:A,strokeWidth:g,dataLabelsX:x,dataLabelsY:m,barDataLabelsConfig:y,offX:w,offY:k}):this.calculateColumnsDataLabelsPosition({x:e,y:i,i:s,j:a,renderedPath:c,realIndex:r,bcx:f,bcy:p,barHeight:o,barWidth:l,textRects:A,strokeWidth:g,dataLabelsY:m,barDataLabelsConfig:y,offX:w,offY:k}),c.attr({cy:b.bcy,cx:b.bcx,j:a,val:n[s][a],barHeight:o,barWidth:l}),this.drawCalculatedDataLabels({x:b.dataLabelsX,y:b.dataLabelsY,val:n[s][a],i:r,j:a,barWidth:l,barHeight:o,textRects:A,dataLabelsConfig:v})}},{key:"calculateColumnsDataLabelsPosition",value:function(t){var e,i=this.w,s=t.i,a=t.j,r=t.y,n=t.bcx,o=t.barWidth,l=t.barHeight,h=t.textRects,c=t.dataLabelsY,d=t.barDataLabelsConfig,u=t.strokeWidth,g=t.offX,f=t.offY,p=i.globals.gridWidth/i.globals.dataPoints;n-=u/2,e=i.globals.isXNumeric?n-o/2+g:n-p+o/2+g;var x=this.series[s][a]<=0;switch(this.isReversed&&(r-=l),d.position){case"center":c=x?r+l/2+h.height/2+f:r+l/2+h.height/2-f;break;case"bottom":c=x?r+l+h.height+u+f:r+l-h.height/2+u-f;break;case"top":c=x?r-h.height/2-f:r+h.height+f}return i.config.chart.stacked||(c<0?c=0+u:c+h.height/3>i.globals.gridHeight&&(c=i.globals.gridHeight-u)),{bcx:n,bcy:r,dataLabelsX:e,dataLabelsY:c}}},{key:"calculateBarsDataLabelsPosition",value:function(t){var e=this.w,i=t.x,s=t.i,a=t.j,r=t.bcy,n=t.barHeight,o=t.barWidth,l=t.textRects,h=t.dataLabelsX,c=t.strokeWidth,d=t.barDataLabelsConfig,u=t.offX,g=t.offY,f=r-e.globals.gridHeight/e.globals.dataPoints+n/2+l.height/2+g-3,p=this.series[s][a]<=0;switch(this.isReversed&&(i+=o),d.position){case"center":h=p?i-o/2-u:i-o/2+u;break;case"bottom":h=p?i-o-c-Math.round(l.width/2)-u:i-o+c+Math.round(l.width/2)+u;break;case"top":h=p?i-c+Math.round(l.width/2)-u:i-c-Math.round(l.width/2)+u}return e.config.chart.stacked||(h<0?h=h+l.width+c:h+l.width/2>e.globals.gridWidth&&(h=e.globals.gridWidth-l.width-c)),{bcx:i,bcy:r,dataLabelsX:h,dataLabelsY:f}}},{key:"drawCalculatedDataLabels",value:function(t){var e=t.x,i=t.y,s=t.val,a=t.i,r=t.j,n=t.textRects,o=t.barHeight,l=t.barWidth,h=t.dataLabelsConfig,c=this.w,d=new DataLabels(this.ctx),u=new Graphics(this.ctx),g=h.formatter,f=null,p=c.globals.collapsedSeriesIndices.indexOf(a)>-1;if(h.enabled&&!p){f=u.group({class:"apexcharts-data-labels"});var x="";void 0!==s&&(x=g(s,{seriesIndex:a,dataPointIndex:r,w:c})),0===s&&c.config.chart.stacked&&(x=""),c.config.chart.stacked&&this.barOptions.dataLabels.hideOverflowingLabels&&(this.isHorizontal?((l=this.series[a][r]/this.yRatio[this.yaxisIndex])>0&&n.width/1.6>l||l<0&&n.width/1.6<l)&&(x=""):(o=this.series[a][r]/this.yRatio[this.yaxisIndex],n.height/1.6>o&&(x="")));var m=_objectSpread({},h);this.isHorizontal&&s<0&&("start"===h.textAnchor?m.textAnchor="end":"end"===h.textAnchor&&(m.textAnchor="start")),d.plotDataLabelsText({x:e,y:i,text:x,i:a,j:r,parent:f,dataLabelsConfig:m,alwaysDrawDataLabel:!0,offsetCorrection:!0})}return f}},{key:"barEndingShape",value:function(t,e,i,s,a){var r=new Graphics(this.ctx);if(this.isHorizontal){var n=null,o=e.x;if(void 0!==i[s][a]||null!==i[s][a]){var l=i[s][a]<0,h=e.barHeight/2-e.strokeWidth;switch(l&&(h=-e.barHeight/2-e.strokeWidth),t.config.chart.stacked||"rounded"===this.barOptions.endingShape&&(o=e.x-h/2),this.barOptions.endingShape){case"flat":n=r.line(o,e.barYPosition+e.barHeight-e.strokeWidth);break;case"rounded":n=r.quadraticCurve(o+h,e.barYPosition+(e.barHeight-e.strokeWidth)/2,o,e.barYPosition+e.barHeight-e.strokeWidth)}}return{path:n,ending_p_from:"",newX:o}}var c=null,d=e.y;if(void 0!==i[s][a]||null!==i[s][a]){var u=i[s][a]<0,g=e.barWidth/2-e.strokeWidth;switch(u&&(g=-e.barWidth/2-e.strokeWidth),t.config.chart.stacked||"rounded"===this.barOptions.endingShape&&(d+=g/2),this.barOptions.endingShape){case"flat":c=r.line(e.barXPosition+e.barWidth-e.strokeWidth,d);break;case"rounded":c=r.quadraticCurve(e.barXPosition+(e.barWidth-e.strokeWidth)/2,d-g,e.barXPosition+e.barWidth-e.strokeWidth,d)}}return{path:c,ending_p_from:"",newY:d}}}]),t}(),BarStacked=function(t){function e(){return _classCallCheck(this,e),_possibleConstructorReturn(this,_getPrototypeOf(e).apply(this,arguments))}return _inherits(e,Bar),_createClass(e,[{key:"draw",value:function(t,e){var i=this.w;this.graphics=new Graphics(this.ctx),this.fill=new Fill(this.ctx),this.bar=new Bar(this.ctx,this.xyRatios);var s=new CoreUtils(this.ctx,i);t=s.getLogSeries(t),this.yRatio=s.getLogYRatios(this.yRatio),this.initVariables(t),"100%"===i.config.chart.stackType&&(t=i.globals.seriesPercent.slice()),this.series=t,this.totalItems=0,this.prevY=[],this.prevX=[],this.prevYF=[],this.prevXF=[],this.prevYVal=[],this.prevXVal=[],this.xArrj=[],this.xArrjF=[],this.xArrjVal=[],this.yArrj=[],this.yArrjF=[],this.yArrjVal=[];for(var a=0;a<t.length;a++)t[a].length>0&&(this.totalItems+=t[a].length);for(var r=this.graphics.group({class:"apexcharts-bar-series apexcharts-plot-series"}),n=0,o=0,l=0,h=0;l<t.length;l++,h++){var c=void 0,d=void 0,u=void 0,g=void 0,f=void 0,p=void 0,x=[],m=[],b=i.globals.comboCharts?e[l]:l;this.yRatio.length>1&&(this.yaxisIndex=b),this.isReversed=i.config.yaxis[this.yaxisIndex]&&i.config.yaxis[this.yaxisIndex].reversed;var v=this.graphics.group({class:"apexcharts-series",seriesName:Utils.escapeString(i.globals.seriesNames[b]),rel:l+1,"data:realIndex":b}),y=this.graphics.group({class:"apexcharts-datalabels"}),w=0,k=0,A=0,S=this.initialPositions(n,o,u,g,f,p);o=S.y,k=S.barHeight,g=S.yDivision,p=S.zeroW,n=S.x,A=S.barWidth,u=S.xDivision,f=S.zeroH,this.yArrj=[],this.yArrjF=[],this.yArrjVal=[],this.xArrj=[],this.xArrjF=[],this.xArrjVal=[];for(var C=0;C<i.globals.dataPoints;C++){i.config.stroke.show&&(w=this.isNullValue?0:Array.isArray(this.strokeWidth)?this.strokeWidth[b]:this.strokeWidth);var L=null;this.isHorizontal?(L=this.drawBarPaths({indexes:{i:l,j:C,realIndex:b,bc:h},barHeight:k,strokeWidth:w,pathTo:c,pathFrom:d,zeroW:p,x:n,y:o,yDivision:g,elSeries:v}),A=this.series[l][C]/this.invertedYRatio):(L=this.drawColumnPaths({indexes:{i:l,j:C,realIndex:b,bc:h},x:n,y:o,xDivision:u,pathTo:c,pathFrom:d,barWidth:A,zeroH:f,strokeWidth:w,elSeries:v}),k=this.series[l][C]/this.yRatio[this.yaxisIndex]),c=L.pathTo,d=L.pathFrom,o=L.y,n=L.x,x.push(n),m.push(o);var P=this.bar.getPathFillColor(t,l,C,b);v=this.renderSeries({realIndex:b,pathFill:P,j:C,i:l,pathFrom:d,pathTo:c,strokeWidth:w,elSeries:v,x:n,y:o,series:t,barHeight:k,barWidth:A,elDataLabelsWrap:y,type:"bar",visibleSeries:0})}i.globals.seriesXvalues[b]=x,i.globals.seriesYvalues[b]=m,this.prevY.push(this.yArrj),this.prevYF.push(this.yArrjF),this.prevYVal.push(this.yArrjVal),this.prevX.push(this.xArrj),this.prevXF.push(this.xArrjF),this.prevXVal.push(this.xArrjVal),r.add(v)}return r}},{key:"initialPositions",value:function(t,e,i,s,a,r){var n,o,l=this.w;return this.isHorizontal?(n=(n=s=l.globals.gridHeight/l.globals.dataPoints)*parseInt(l.config.plotOptions.bar.barHeight)/100,r=this.baseLineInvertedY+l.globals.padHorizontal+(this.isReversed?l.globals.gridWidth:0)-(this.isReversed?2*this.baseLineInvertedY:0),e=(s-n)/2):(o=i=l.globals.gridWidth/l.globals.dataPoints,o=l.globals.isXNumeric?(i=l.globals.minXDiff/this.xRatio)*parseInt(this.barOptions.columnWidth)/100:o*parseInt(l.config.plotOptions.bar.columnWidth)/100,a=this.baseLineY[this.yaxisIndex]+(this.isReversed?l.globals.gridHeight:0)-(this.isReversed?2*this.baseLineY[this.yaxisIndex]:0),t=l.globals.padHorizontal+(i-o)/2),{x:t,y:e,yDivision:s,xDivision:i,barHeight:n,barWidth:o,zeroH:a,zeroW:r}}},{key:"drawBarPaths",value:function(t){for(var e,i=t.indexes,s=t.barHeight,a=t.strokeWidth,r=t.pathTo,n=t.pathFrom,o=t.zeroW,l=t.x,h=t.y,c=t.yDivision,d=t.elSeries,u=this.w,g=h,f=i.i,p=i.j,x=i.realIndex,m=i.bc,b=0,v=0;v<this.prevXF.length;v++)b+=this.prevXF[v][p];if(f>0){var y=o;this.prevXVal[f-1][p]<0?y=this.series[f][p]>=0?this.prevX[f-1][p]+b-2*(this.isReversed?b:0):this.prevX[f-1][p]:this.prevXVal[f-1][p]>=0&&(y=this.series[f][p]>=0?this.prevX[f-1][p]:this.prevX[f-1][p]-b+2*(this.isReversed?b:0)),e=y}else e=o;l=null===this.series[f][p]?e:e+this.series[f][p]/this.invertedYRatio-2*(this.isReversed?this.series[f][p]/this.invertedYRatio:0);var w={barHeight:s,strokeWidth:a,invertedYRatio:this.invertedYRatio,barYPosition:g,x:l},k=this.bar.barEndingShape(u,w,this.series,f,p);if(this.series.length>1&&f!==this.endingShapeOnSeriesNumber&&(k.path=this.graphics.line(k.newX,g+s-a)),this.xArrj.push(k.newX),this.xArrjF.push(Math.abs(e-k.newX)),this.xArrjVal.push(this.series[f][p]),r=this.graphics.move(e,g),n=this.graphics.move(e,g),u.globals.previousPaths.length>0&&(n=this.bar.getPathFrom(x,p,!1)),r=r+this.graphics.line(k.newX,g)+k.path+this.graphics.line(e,g+s-a)+this.graphics.line(e,g),n=n+this.graphics.line(e,g)+this.graphics.line(e,g+s-a)+this.graphics.line(e,g+s-a)+this.graphics.line(e,g+s-a)+this.graphics.line(e,g),u.config.plotOptions.bar.colors.backgroundBarColors.length>0&&0===f){m>=u.config.plotOptions.bar.colors.backgroundBarColors.length&&(m=0);var A=u.config.plotOptions.bar.colors.backgroundBarColors[m],S=this.graphics.drawRect(0,g,u.globals.gridWidth,s,0,A,u.config.plotOptions.bar.colors.backgroundBarOpacity);d.add(S),S.node.classList.add("apexcharts-backgroundBar")}return{pathTo:r,pathFrom:n,x:l,y:h+=c}}},{key:"drawColumnPaths",value:function(t){var e=t.indexes,i=t.x,s=t.y,a=t.xDivision,r=t.pathTo,n=t.pathFrom,o=t.barWidth,l=t.zeroH,h=t.strokeWidth,c=t.elSeries,d=this.w,u=e.i,g=e.j,f=e.realIndex,p=e.bc;if(d.globals.isXNumeric){var x=d.globals.seriesX[u][g];x||(x=0),i=(x-d.globals.minX)/this.xRatio-o/2}for(var m,b=i,v=0,y=0;y<this.prevYF.length;y++)v+=this.prevYF[y][g];if(u>0&&!d.globals.isXNumeric||u>0&&d.globals.isXNumeric&&d.globals.seriesX[u-1][g]===d.globals.seriesX[u][g]){var w=this.prevY[u-1][g];m=this.prevYVal[u-1][g]<0?this.series[u][g]>=0?w-v+2*(this.isReversed?v:0):w:this.series[u][g]>=0?w:w+v-2*(this.isReversed?v:0)}else m=d.globals.gridHeight-l;s=m-this.series[u][g]/this.yRatio[this.yaxisIndex]+2*(this.isReversed?this.series[u][g]/this.yRatio[this.yaxisIndex]:0);var k={barWidth:o,strokeWidth:h,yRatio:this.yRatio[this.yaxisIndex],barXPosition:b,y:s},A=this.bar.barEndingShape(d,k,this.series,u,g);if(this.yArrj.push(A.newY),this.yArrjF.push(Math.abs(m-A.newY)),this.yArrjVal.push(this.series[u][g]),r=this.graphics.move(b,m),n=this.graphics.move(b,m),d.globals.previousPaths.length>0&&(n=this.bar.getPathFrom(f,g,!1)),r=r+this.graphics.line(b,A.newY)+A.path+this.graphics.line(b+o-h,m)+this.graphics.line(b-h/2,m),n=n+this.graphics.line(b,m)+this.graphics.line(b+o-h,m)+this.graphics.line(b+o-h,m)+this.graphics.line(b+o-h,m)+this.graphics.line(b-h/2,m),d.config.plotOptions.bar.colors.backgroundBarColors.length>0&&0===u){p>=d.config.plotOptions.bar.colors.backgroundBarColors.length&&(p=0);var S=d.config.plotOptions.bar.colors.backgroundBarColors[p],C=this.graphics.drawRect(b,0,o,d.globals.gridHeight,0,S,d.config.plotOptions.bar.colors.backgroundBarOpacity);c.add(C),C.node.classList.add("apexcharts-backgroundBar")}return i+=a,{pathTo:r,pathFrom:n,x:d.globals.isXNumeric?i-a:i,y:s}}},{key:"checkZeroSeries",value:function(t){for(var e=t.series,i=this.w,s=0;s<e.length;s++){for(var a=0,r=0;r<e[i.globals.maxValsInArrayIndex].length;r++)a+=e[s][r];0===a&&this.zeroSerieses.push(s)}for(var n=e.length-1;n>=0;n--)this.zeroSerieses.indexOf(n)>-1&&n===this.endingShapeOnSeriesNumber&&(this.endingShapeOnSeriesNumber-=1)}}]),e}(),CandleStick=function(t){function e(){return _classCallCheck(this,e),_possibleConstructorReturn(this,_getPrototypeOf(e).apply(this,arguments))}return _inherits(e,Bar),_createClass(e,[{key:"draw",value:function(t,e){var i=this.w,s=new Graphics(this.ctx),a=new Fill(this.ctx);this.candlestickOptions=this.w.config.plotOptions.candlestick;var r=new CoreUtils(this.ctx,i);t=r.getLogSeries(t),this.series=t,this.yRatio=r.getLogYRatios(this.yRatio),this.initVariables(t);for(var n=s.group({class:"apexcharts-candlestick-series apexcharts-plot-series"}),o=0,l=0;o<t.length;o++,l++){var h,c,d=void 0,u=void 0,g=void 0,f=void 0,p=[],x=[],m=i.globals.comboCharts?e[o]:o,b=s.group({class:"apexcharts-series",seriesName:Utils.escapeString(i.globals.seriesNames[m]),rel:o+1,"data:realIndex":m});t[o].length>0&&(this.visibleI=this.visibleI+1);var v,y,w=0;this.yRatio.length>1&&(this.yaxisIndex=m);var k=this.initialPositions();f=k.y,v=k.barHeight,g=k.x,y=k.barWidth,h=k.xDivision,c=k.zeroH,x.push(g+y/2);for(var A=s.group({class:"apexcharts-datalabels"}),S=0,C=i.globals.dataPoints;S<i.globals.dataPoints;S++,C--){void 0===this.series[o][S]||null===t[o][S]?this.isNullValue=!0:this.isNullValue=!1,i.config.stroke.show&&(w=this.isNullValue?0:Array.isArray(this.strokeWidth)?this.strokeWidth[m]:this.strokeWidth);var L,P=this.drawCandleStickPaths({indexes:{i:o,j:S,realIndex:m,bc:l},x:g,y:f,xDivision:h,pathTo:d,pathFrom:u,barWidth:y,zeroH:c,strokeWidth:w,elSeries:b});d=P.pathTo,u=P.pathFrom,f=P.y,g=P.x,L=P.color,S>0&&x.push(g+y/2),p.push(f);var z=a.fillPath({seriesNumber:m,color:L,value:t[o][S]}),T=this.candlestickOptions.wick.useFillColor?L:void 0;b=this.renderSeries({realIndex:m,pathFill:z,lineFill:T,j:S,i:o,pathFrom:u,pathTo:d,strokeWidth:w,elSeries:b,x:g,y:f,series:t,barHeight:v,barWidth:y,elDataLabelsWrap:A,visibleSeries:this.visibleI,type:"candlestick"})}i.globals.seriesXvalues[m]=x,i.globals.seriesYvalues[m]=p,n.add(b)}return n}},{key:"drawCandleStickPaths",value:function(t){var e=t.indexes,i=t.x,s=(t.y,t.xDivision),a=t.pathTo,r=t.pathFrom,n=t.barWidth,o=t.zeroH,l=t.strokeWidth,h=this.w,c=new Graphics(this.ctx),d=e.i,u=e.j,g=!0,f=h.config.plotOptions.candlestick.colors.upward,p=h.config.plotOptions.candlestick.colors.downward,x=this.yRatio[this.yaxisIndex],m=e.realIndex,b=this.getOHLCValue(m,u),v=o,y=o;b.o>b.c&&(g=!1);var w=Math.min(b.o,b.c),k=Math.max(b.o,b.c);h.globals.isXNumeric&&(i=(h.globals.seriesX[d][u]-h.globals.minX)/this.xRatio-n/2);var A=i+n*this.visibleI;return void 0===this.series[d][u]||null===this.series[d][u]?w=o:(w=o-w/x,k=o-k/x,v=o-b.h/x,y=o-b.l/x),c.move(A,o),r=c.move(A,w),h.globals.previousPaths.length>0&&(r=this.getPathFrom(m,u,!0)),a=c.move(A,k)+c.line(A+n/2,k)+c.line(A+n/2,v)+c.line(A+n/2,k)+c.line(A+n,k)+c.line(A+n,w)+c.line(A+n/2,w)+c.line(A+n/2,y)+c.line(A+n/2,w)+c.line(A,w)+c.line(A,k-l/2),r+=c.move(A,w),h.globals.isXNumeric||(i+=s),{pathTo:a,pathFrom:r,x:i,y:k,barXPosition:A,color:g?f:p}}},{key:"getOHLCValue",value:function(t,e){var i=this.w;return{o:i.globals.seriesCandleO[t][e],h:i.globals.seriesCandleH[t][e],l:i.globals.seriesCandleL[t][e],c:i.globals.seriesCandleC[t][e]}}}]),e}(),Crosshairs=function(){function t(e){_classCallCheck(this,t),this.ctx=e,this.w=e.w}return _createClass(t,[{key:"drawXCrosshairs",value:function(){var t=this.w,e=new Graphics(this.ctx),i=new Filters(this.ctx),s=t.config.xaxis.crosshairs.fill.gradient,a=t.config.xaxis.crosshairs.dropShadow,r=t.config.xaxis.crosshairs.fill.type,n=s.colorFrom,o=s.colorTo,l=s.opacityFrom,h=s.opacityTo,c=s.stops,d=a.enabled,u=a.left,g=a.top,f=a.blur,p=a.color,x=a.opacity,m=t.config.xaxis.crosshairs.fill.color;if(t.config.xaxis.crosshairs.show){"gradient"===r&&(m=e.drawGradient("vertical",n,o,l,h,null,c,null));var b=e.drawRect();1===t.config.xaxis.crosshairs.width&&(b=e.drawLine()),b.attr({class:"apexcharts-xcrosshairs",x:0,y:0,y2:t.globals.gridHeight,width:Utils.isNumber(t.config.xaxis.crosshairs.width)?t.config.xaxis.crosshairs.width:0,height:t.globals.gridHeight,fill:m,filter:"none","fill-opacity":t.config.xaxis.crosshairs.opacity,stroke:t.config.xaxis.crosshairs.stroke.color,"stroke-width":t.config.xaxis.crosshairs.stroke.width,"stroke-dasharray":t.config.xaxis.crosshairs.stroke.dashArray}),d&&(b=i.dropShadow(b,{left:u,top:g,blur:f,color:p,opacity:x})),t.globals.dom.elGraphical.add(b)}}},{key:"drawYCrosshairs",value:function(){var t=this.w,e=new Graphics(this.ctx),i=t.config.yaxis[0].crosshairs;if(t.config.yaxis[0].crosshairs.show){var s=e.drawLine(0,0,t.globals.gridWidth,0,i.stroke.color,i.stroke.dashArray,i.stroke.width);s.attr({class:"apexcharts-ycrosshairs"}),t.globals.dom.elGraphical.add(s)}var a=e.drawLine(0,0,t.globals.gridWidth,0,i.stroke.color,0,0);a.attr({class:"apexcharts-ycrosshairs-hidden"}),t.globals.dom.elGraphical.add(a)}}]),t}(),HeatMap=function(){function t(e,i){_classCallCheck(this,t),this.ctx=e,this.w=e.w,this.xRatio=i.xRatio,this.yRatio=i.yRatio,this.negRange=!1,this.dynamicAnim=this.w.config.chart.animations.dynamicAnimation,this.rectRadius=this.w.config.plotOptions.heatmap.radius,this.strokeWidth=this.w.config.stroke.width}return _createClass(t,[{key:"draw",value:function(t){var e=this.w,i=new Graphics(this.ctx),s=i.group({class:"apexcharts-heatmap"});s.attr("clip-path","url(#gridRectMask".concat(e.globals.cuid,")"));var a=e.globals.gridWidth/e.globals.dataPoints,r=e.globals.gridHeight/e.globals.series.length,n=0,o=!1;this.checkColorRange();var l=t.slice();e.config.yaxis[0].reversed&&(o=!0,l.reverse());for(var h=o?0:l.length-1;o?h<l.length:h>=0;o?h++:h--){var c=i.group({class:"apexcharts-series apexcharts-heatmap-series",seriesName:Utils.escapeString(e.globals.seriesNames[h]),rel:h+1,"data:realIndex":h});if(e.config.chart.dropShadow.enabled){var d=e.config.chart.dropShadow;new Filters(this.ctx).dropShadow(c,d,h)}for(var u=0,g=0;g<l[h].length;g++){var f=1,p=this.determineHeatColor(h,g);if(e.globals.hasNegs||this.negRange){var x=e.config.plotOptions.heatmap.shadeIntensity;f=e.config.plotOptions.heatmap.reverseNegativeShade?p.percent<0?p.percent/100*(1.25*x):(1-p.percent/100)*(1.25*x):p.percent<0?1-(1+p.percent/100)*x:(1-p.percent/100)*x}else f=1-p.percent/100;var m=p.color;if(e.config.plotOptions.heatmap.enableShades){var b=new Utils;m=Utils.hexToRgba(b.shadeColor(f,p.color),e.config.fill.opacity)}var v=this.rectRadius,y=i.drawRect(u,n,a,r,v);if(y.attr({cx:u,cy:n}),y.node.classList.add("apexcharts-heatmap-rect"),c.add(y),y.attr({fill:m,i:h,index:h,j:g,val:l[h][g],"stroke-width":this.strokeWidth,stroke:e.globals.stroke.colors[0],color:m}),y.node.addEventListener("mouseenter",i.pathMouseEnter.bind(this,y)),y.node.addEventListener("mouseleave",i.pathMouseLeave.bind(this,y)),y.node.addEventListener("mousedown",i.pathMouseDown.bind(this,y)),e.config.chart.animations.enabled&&!e.globals.dataChanged){var w=1;e.globals.resized||(w=e.config.chart.animations.speed),this.animateHeatMap(y,u,n,a,r,w)}if(e.globals.dataChanged){var k=1;if(this.dynamicAnim.enabled&&e.globals.shouldAnimate){k=this.dynamicAnim.speed;var A=e.globals.previousPaths[h]&&e.globals.previousPaths[h][g]&&e.globals.previousPaths[h][g].color;A||(A="rgba(255, 255, 255, 0)"),this.animateHeatColor(y,Utils.isColorHex(A)?A:Utils.rgb2hex(A),Utils.isColorHex(m)?m:Utils.rgb2hex(m),k)}}var S=this.calculateHeatmapDataLabels({x:u,y:n,i:h,j:g,series:l,rectHeight:r,rectWidth:a});null!==S&&c.add(S),u+=a}n+=r,s.add(c)}var C=e.globals.yAxisScale[0].result.slice();e.config.yaxis[0].reversed?C.unshift(""):C.push(""),e.globals.yAxisScale[0].result=C;var L=e.globals.gridHeight/e.globals.series.length;return e.config.yaxis[0].labels.offsetY=-L/2,s}},{key:"checkColorRange",value:function(){var t=this,e=this.w.config.plotOptions.heatmap;e.colorScale.ranges.length>0&&e.colorScale.ranges.map(function(e,i){e.from<0&&(t.negRange=!0)})}},{key:"determineHeatColor",value:function(t,e){var i=this.w,s=i.globals.series[t][e],a=i.config.plotOptions.heatmap,r=a.colorScale.inverse?e:t,n=i.globals.colors[r],o=Math.min.apply(Math,_toConsumableArray(i.globals.series[t])),l=Math.max.apply(Math,_toConsumableArray(i.globals.series[t]));a.distributed||(o=i.globals.minY,l=i.globals.maxY),void 0!==a.colorScale.min&&(o=a.colorScale.min<i.globals.minY?a.colorScale.min:i.globals.minY,l=a.colorScale.max>i.globals.maxY?a.colorScale.max:i.globals.maxY);var h=Math.abs(l)+Math.abs(o),c=100*s/(0===h?h-1e-6:h);a.colorScale.ranges.length>0&&a.colorScale.ranges.map(function(t,e){if(s>=t.from&&s<=t.to){n=t.color,o=t.from,l=t.to;var i=Math.abs(l)+Math.abs(o);c=100*s/(0===i?i-1e-6:i)}});return{color:n,percent:c}}},{key:"calculateHeatmapDataLabels",value:function(t){var e=t.x,i=t.y,s=t.i,a=t.j,r=(t.series,t.rectHeight),n=t.rectWidth,o=this.w,l=o.config.dataLabels,h=new Graphics(this.ctx),c=new DataLabels(this.ctx),d=l.formatter,u=null;if(l.enabled){u=h.group({class:"apexcharts-data-labels"});var g=l.offsetX,f=l.offsetY,p=e+n/2+g,x=i+r/2+parseInt(l.style.fontSize)/3+f,m=d(o.globals.series[s][a],{seriesIndex:s,dataPointIndex:a,w:o});c.plotDataLabelsText({x:p,y:x,text:m,i:s,j:a,parent:u,dataLabelsConfig:l})}return u}},{key:"animateHeatMap",value:function(t,e,i,s,a,r){var n=this;new Animations(this.ctx).animateRect(t,{x:e+s/2,y:i+a/2,width:0,height:0},{x:e,y:i,width:s,height:a},r,function(){n.w.globals.animationEnded=!0})}},{key:"animateHeatColor",value:function(t,e,i,s){t.attr({fill:e}).animate(s).attr({fill:i})}}]),t}(),Pie=function(){function t(e){_classCallCheck(this,t),this.ctx=e,this.w=e.w,this.chartType=this.w.config.chart.type,this.initialAnim=this.w.config.chart.animations.enabled,this.dynamicAnim=this.initialAnim&&this.w.config.chart.animations.dynamicAnimation.enabled,this.animBeginArr=[0],this.animDur=0,this.donutDataLabels=this.w.config.plotOptions.pie.donut.labels;var i=this.w;this.lineColorArr=void 0!==i.globals.stroke.colors?i.globals.stroke.colors:i.globals.colors,this.defaultSize=i.globals.svgHeight<i.globals.svgWidth?i.globals.svgHeight-35:i.globals.gridWidth,this.centerY=this.defaultSize/2,this.centerX=i.globals.gridWidth/2,this.fullAngle=360,this.donutSize=0,this.sliceLabels=[],this.prevSectorAngleArr=[]}return _createClass(t,[{key:"draw",value:function(t){var e=this.w,i=new Graphics(this.ctx),s=i.group({class:"apexcharts-pie"});if(e.globals.noData)return s;for(var a=0,r=0;r<t.length;r++)a+=Utils.negToZero(t[r]);var n=[],o=i.group();0===a&&(a=1e-5);for(var l=0;l<t.length;l++){var h=this.fullAngle*Utils.negToZero(t[l])/a;n.push(h)}if(e.globals.dataChanged){for(var c,d=0,u=0;u<e.globals.previousPaths.length;u++)d+=Utils.negToZero(e.globals.previousPaths[u]);for(var g=0;g<e.globals.previousPaths.length;g++)c=this.fullAngle*Utils.negToZero(e.globals.previousPaths[g])/d,this.prevSectorAngleArr.push(c)}e.globals.radialSize=this.defaultSize/2.05-e.config.stroke.width-e.config.chart.dropShadow.blur,void 0!==e.config.plotOptions.pie.size&&(e.globals.radialSize=e.config.plotOptions.pie.size),this.donutSize=e.globals.radialSize*parseInt(e.config.plotOptions.pie.donut.size)/100,this.donutSize<0&&(this.donutSize=0);var f=e.config.plotOptions.pie.customScale,p=e.globals.gridWidth/2,x=e.globals.gridHeight/2,m=p-e.globals.gridWidth/2*f,b=x-e.globals.gridHeight/2*f;if(this.donutDataLabels.show){var v=this.renderInnerDataLabels(this.donutDataLabels,{hollowSize:this.donutSize,centerX:this.centerX,centerY:this.centerY,opacity:this.donutDataLabels.show,translateX:m,translateY:b});s.add(v)}if("donut"===e.config.chart.type){var y=i.drawCircle(this.donutSize);y.attr({cx:this.centerX,cy:this.centerY,fill:e.config.plotOptions.pie.donut.background}),o.add(y)}var w=this.drawArcs(n,t);return this.sliceLabels.forEach(function(t){w.add(t)}),o.attr({transform:"translate(".concat(m,", ").concat(b-5,") scale(").concat(f,")")}),s.attr({"data:innerTranslateX":m,"data:innerTranslateY":b-25}),o.add(w),s.add(o),s}},{key:"drawArcs",value:function(t,e){var i=this.w,s=new Filters(this.ctx),a=new Graphics(this.ctx),r=new Fill(this.ctx),n=a.group({class:"apexcharts-slices"}),o=0,l=0,h=0,c=0;this.strokeWidth=i.config.stroke.show?i.config.stroke.width:0;for(var d=0;d<t.length;d++){var u=a.group({class:"apexcharts-series apexcharts-pie-series",seriesName:Utils.escapeString(i.globals.seriesNames[d]),rel:d+1,"data:realIndex":d});n.add(u),l=c,h=(o=h)+t[d],c=l+this.prevSectorAngleArr[d];var g=h-o,f=r.fillPath({seriesNumber:d,size:i.globals.radialSize,value:e[d]}),p=this.getChangedPath(l,c),x=a.drawPath({d:p,stroke:this.lineColorArr instanceof Array?this.lineColorArr[d]:this.lineColorArr,strokeWidth:this.strokeWidth,fill:f,fillOpacity:i.config.fill.opacity,classes:"apexcharts-pie-area apexcharts-".concat(i.config.chart.type,"-slice-").concat(d)});if(x.attr({index:0,j:d}),i.config.chart.dropShadow.enabled){var m=i.config.chart.dropShadow;s.dropShadow(x,m,d)}this.addListeners(x,this.donutDataLabels),Graphics.setAttrs(x.node,{"data:angle":g,"data:startAngle":o,"data:strokeWidth":this.strokeWidth,"data:value":e[d]});var b={x:0,y:0};"pie"===i.config.chart.type?b=Utils.polarToCartesian(this.centerX,this.centerY,i.globals.radialSize/1.25+i.config.plotOptions.pie.dataLabels.offset,o+(h-o)/2):"donut"===i.config.chart.type&&(b=Utils.polarToCartesian(this.centerX,this.centerY,(i.globals.radialSize+this.donutSize)/2+i.config.plotOptions.pie.dataLabels.offset,o+(h-o)/2)),u.add(x);var v=0;if(!this.initialAnim||i.globals.resized||i.globals.dataChanged?this.animBeginArr.push(0):(v=(h-o)/this.fullAngle*i.config.chart.animations.speed,this.animDur=v+this.animDur,this.animBeginArr.push(this.animDur)),this.dynamicAnim&&i.globals.dataChanged?this.animatePaths(x,{size:i.globals.radialSize,endAngle:h,startAngle:o,prevStartAngle:l,prevEndAngle:c,animateStartingPos:!0,i:d,animBeginArr:this.animBeginArr,dur:i.config.chart.animations.dynamicAnimation.speed}):this.animatePaths(x,{size:i.globals.radialSize,endAngle:h,startAngle:o,i:d,totalItems:t.length-1,animBeginArr:this.animBeginArr,dur:v}),i.config.plotOptions.pie.expandOnClick&&x.click(this.pieClicked.bind(this,d)),i.config.dataLabels.enabled){var y=b.x,w=b.y,k=100*(h-o)/360+"%";if(0!==g&&i.config.plotOptions.pie.dataLabels.minAngleToShowLabel<t[d]){var A=i.config.dataLabels.formatter;void 0!==A&&(k=A(i.globals.seriesPercent[d][0],{seriesIndex:d,w:i}));var S=i.globals.dataLabels.style.colors[d],C=a.drawText({x:y,y:w,text:k,textAnchor:"middle",fontSize:i.config.dataLabels.style.fontSize,fontFamily:i.config.dataLabels.style.fontFamily,foreColor:S});if(i.config.dataLabels.dropShadow.enabled){var L=i.config.dataLabels.dropShadow;new Filters(this.ctx).dropShadow(C,L)}C.node.classList.add("apexcharts-pie-label"),i.config.chart.animations.animate&&!1===i.globals.resized&&(C.node.classList.add("apexcharts-pie-label-delay"),C.node.style.animationDelay=i.config.chart.animations.speed/940+"s"),this.sliceLabels.push(C)}}}return n}},{key:"addListeners",value:function(t,e){var i=new Graphics(this.ctx);t.node.addEventListener("mouseenter",i.pathMouseEnter.bind(this,t)),t.node.addEventListener("mouseenter",this.printDataLabelsInner.bind(this,t.node,e)),t.node.addEventListener("mouseleave",i.pathMouseLeave.bind(this,t)),t.node.addEventListener("mouseleave",this.revertDataLabelsInner.bind(this,t.node,e)),t.node.addEventListener("mousedown",i.pathMouseDown.bind(this,t)),t.node.addEventListener("mousedown",this.printDataLabelsInner.bind(this,t.node,e))}},{key:"animatePaths",value:function(t,e){var i=this.w,s=e.endAngle-e.startAngle,a=s,r=e.startAngle,n=e.startAngle;void 0!==e.prevStartAngle&&void 0!==e.prevEndAngle&&(r=e.prevEndAngle,a=e.prevEndAngle-e.prevStartAngle),e.i===i.config.series.length-1&&(s+n>this.fullAngle?e.endAngle=e.endAngle-(s+n):s+n<this.fullAngle&&(e.endAngle=e.endAngle+(this.fullAngle-(s+n)))),s===this.fullAngle&&(s=this.fullAngle-.01),this.animateArc(t,r,n,s,a,e)}},{key:"animateArc",value:function(t,e,i,s,a,r){var n,o=this,l=this.w,h=r.size;(isNaN(e)||isNaN(a))&&(e=i,a=s,r.dur=0);var c=s,d=i,u=e-i;l.globals.dataChanged&&r.shouldSetPrevPaths&&(n=o.getPiePath({me:o,startAngle:d,angle:a,size:h}),t.attr({d:n})),0!==r.dur?t.animate(r.dur,l.globals.easing,r.animBeginArr[r.i]).afterAll(function(){"pie"!==l.config.chart.type&&"donut"!==l.config.chart.type||this.animate(300).attr({"stroke-width":l.config.stroke.width}),l.globals.animationEnded=!0}).during(function(l){c=u+(s-u)*l,r.animateStartingPos&&(c=a+(s-a)*l,d=e-a+(i-(e-a))*l),n=o.getPiePath({me:o,startAngle:d,angle:c,size:h}),t.node.setAttribute("data:pathOrig",n),t.attr({d:n})}):(n=o.getPiePath({me:o,startAngle:d,angle:s,size:h}),r.isTrack||(l.globals.animationEnded=!0),t.node.setAttribute("data:pathOrig",n),t.attr({d:n}))}},{key:"pieClicked",value:function(t){var e,i=this.w,s=this.w.globals.radialSize+4,a=i.globals.dom.Paper.select(".apexcharts-".concat(i.config.chart.type.toLowerCase(),"-slice-").concat(t)).members[0],r=a.attr("d");if("true"!==a.attr("data:pieClicked")){var n=i.globals.dom.baseEl.querySelectorAll(".apexcharts-pie-area");Array.prototype.forEach.call(n,function(t){t.setAttribute("data:pieClicked","false");var e=t.getAttribute("data:pathOrig");t.setAttribute("d",e)}),a.attr("data:pieClicked","true");var o=parseInt(a.attr("data:startAngle")),l=parseInt(a.attr("data:angle"));e=this.getPiePath({me:this,startAngle:o,angle:l,size:s}),360!==l&&a.plot(e).animate(1).plot(r).animate(100).plot(e)}else{a.attr({"data:pieClicked":"false"}),this.revertDataLabelsInner(a.node,this.donutDataLabels);var h=a.attr("data:pathOrig");a.attr({d:h})}}},{key:"getChangedPath",value:function(t,e){var i="";return this.dynamicAnim&&this.w.globals.dataChanged&&(i=this.getPiePath({me:this,startAngle:t,angle:e-t,size:this.size})),i}},{key:"getPiePath",value:function(t){var e=t.me,i=t.startAngle,s=t.angle,a=t.size,r=this.w,n=i,o=Math.PI*(n-90)/180,l=s+i;Math.ceil(l)>=360&&(l=359.99);var h=Math.PI*(l-90)/180,c=e.centerX+a*Math.cos(o),d=e.centerY+a*Math.sin(o),u=e.centerX+a*Math.cos(h),g=e.centerY+a*Math.sin(h),f=Utils.polarToCartesian(e.centerX,e.centerY,e.donutSize,l),p=Utils.polarToCartesian(e.centerX,e.centerY,e.donutSize,n),x=s>180?1:0;return"donut"===r.config.chart.type?["M",c,d,"A",a,a,0,x,1,u,g,"L",f.x,f.y,"A",e.donutSize,e.donutSize,0,x,0,p.x,p.y,"L",c,d,"z"].join(" "):"pie"===r.config.chart.type?["M",c,d,"A",a,a,0,x,1,u,g,"L",e.centerX,e.centerY,"L",c,d].join(" "):["M",c,d,"A",a,a,0,x,1,u,g].join(" ")}},{key:"renderInnerDataLabels",value:function(t,e){var i=this.w,s=new Graphics(this.ctx),a=s.group({class:"apexcharts-datalabels-group",transform:"translate(".concat(e.translateX?e.translateX:0,", ").concat(e.translateY?e.translateY:0,")")}),r=t.total.show;a.node.style.opacity=e.opacity;var n,o,l=e.centerX,h=e.centerY;n=void 0===t.name.color?i.globals.colors[0]:t.name.color,o=void 0===t.value.color?i.config.chart.foreColor:t.value.color;var c=t.value.formatter,d="",u="";if(r?(n=t.total.color,u=t.total.label,d=t.total.formatter(i)):1===i.globals.series.length&&(d=c(i.globals.series[0],i),u=i.globals.seriesNames[0]),t.name.show){var g=s.drawText({x:l,y:h+parseInt(t.name.offsetY),text:u,textAnchor:"middle",foreColor:n,fontSize:t.name.fontSize,fontFamily:t.name.fontFamily});g.node.classList.add("apexcharts-datalabel-label"),a.add(g)}if(t.value.show){var f=t.name.show?parseInt(t.value.offsetY)+16:t.value.offsetY,p=s.drawText({x:l,y:h+f,text:d,textAnchor:"middle",foreColor:o,fontSize:t.value.fontSize,fontFamily:t.value.fontFamily});p.node.classList.add("apexcharts-datalabel-value"),a.add(p)}return a}},{key:"printInnerLabels",value:function(t,e,i,s){var a,r=this.w;s?a=void 0===t.name.color?r.globals.colors[parseInt(s.parentNode.getAttribute("rel"))-1]:t.name.color:r.globals.series.length>1&&t.total.show&&(a=t.total.color);var n=r.globals.dom.baseEl.querySelector(".apexcharts-datalabel-label"),o=r.globals.dom.baseEl.querySelector(".apexcharts-datalabel-value");i=(0,t.value.formatter)(i,r),s||"function"!=typeof t.total.formatter||(i=t.total.formatter(r)),null!==n&&(n.textContent=e),null!==o&&(o.textContent=i),null!==n&&(n.style.fill=a)}},{key:"printDataLabelsInner",value:function(t,e){var i=this.w,s=t.getAttribute("data:value"),a=i.globals.seriesNames[parseInt(t.parentNode.getAttribute("rel"))-1];i.globals.series.length>1&&this.printInnerLabels(e,a,s,t);var r=i.globals.dom.baseEl.querySelector(".apexcharts-datalabels-group");null!==r&&(r.style.opacity=1)}},{key:"revertDataLabelsInner",value:function(e,i,s){var a=this,r=this.w,n=r.globals.dom.baseEl.querySelector(".apexcharts-datalabels-group");if(i.total.show&&r.globals.series.length>1){new t(this.ctx).printInnerLabels(i,i.total.label,i.total.formatter(r))}else{var o=document.querySelectorAll(".apexcharts-pie-area"),l=!1;if(Array.prototype.forEach.call(o,function(t){"true"===t.getAttribute("data:pieClicked")&&(l=!0,a.printDataLabelsInner(t,i))}),!l)if(r.globals.selectedDataPoints.length&&r.globals.series.length>1)if(r.globals.selectedDataPoints[0].length>0){var h=r.globals.selectedDataPoints[0],c=r.globals.dom.baseEl.querySelector(".apexcharts-".concat(r.config.chart.type.toLowerCase(),"-slice-").concat(h));this.printDataLabelsInner(c,i)}else n&&r.globals.selectedDataPoints.length&&0===r.globals.selectedDataPoints[0].length&&(n.style.opacity=0);else n&&r.globals.series.length>1&&(n.style.opacity=0)}}}]),t}(),Radar=function(){function t(e){_classCallCheck(this,t),this.ctx=e,this.w=e.w,this.chartType=this.w.config.chart.type,this.initialAnim=this.w.config.chart.animations.enabled,this.dynamicAnim=this.initialAnim&&this.w.config.chart.animations.dynamicAnimation.enabled,this.animDur=0;var i=this.w;this.graphics=new Graphics(this.ctx),this.lineColorArr=void 0!==i.globals.stroke.colors?i.globals.stroke.colors:i.globals.colors,this.defaultSize=i.globals.svgHeight<i.globals.svgWidth?i.globals.svgHeight-35:i.globals.gridWidth,this.maxValue=this.w.globals.maxY,this.polygons=i.config.plotOptions.radar.polygons,this.maxLabelWidth=20;var s=i.globals.labels.slice().sort(function(t,e){return e.length-t.length})[0],a=this.graphics.getTextRects(s,i.config.dataLabels.style.fontSize);this.size=this.defaultSize/2.1-i.config.stroke.width-i.config.chart.dropShadow.blur-a.width/1.75,void 0!==i.config.plotOptions.radar.size&&(this.size=i.config.plotOptions.radar.size),this.dataRadiusOfPercent=[],this.dataRadius=[],this.angleArr=[],this.yaxisLabelsTextsPos=[]}return _createClass(t,[{key:"draw",value:function(t){var e=this,i=this.w,s=new Fill(this.ctx),a=[];t.length&&(this.dataPointsLen=t[i.globals.maxValsInArrayIndex].length),this.disAngle=2*Math.PI/this.dataPointsLen;var r=i.globals.gridWidth/2,n=i.globals.gridHeight/2,o=this.graphics.group({class:"apexcharts-radar-series","data:innerTranslateX":r,"data:innerTranslateY":n-25,transform:"translate(".concat(r||0,", ").concat(n||0,")")}),l=[],h=null;if(this.yaxisLabels=this.graphics.group({class:"apexcharts-yaxis"}),t.forEach(function(t,r){var n=e.graphics.group().attr({class:"apexcharts-series",seriesName:Utils.escapeString(i.globals.seriesNames[r]),rel:r+1,"data:realIndex":r});e.dataRadiusOfPercent[r]=[],e.dataRadius[r]=[],e.angleArr[r]=[],t.forEach(function(t,i){e.dataRadiusOfPercent[r][i]=t/e.maxValue,e.dataRadius[r][i]=e.dataRadiusOfPercent[r][i]*e.size,e.angleArr[r][i]=i*e.disAngle}),l=e.getDataPointsPos(e.dataRadius[r],e.angleArr[r]);var o=e.createPaths(l,{x:0,y:0});h=e.graphics.group({class:"apexcharts-series-markers-wrap hidden"}),i.globals.delayedElements.push({el:h.node,index:r});var c={i:r,realIndex:r,animationDelay:r,initialSpeed:i.config.chart.animations.speed,dataChangeSpeed:i.config.chart.animations.dynamicAnimation.speed,className:"apexcharts-radar",shouldClipToGrid:!1,bindEventsOnPaths:!1,stroke:i.globals.stroke.colors[r],strokeLineCap:i.config.stroke.lineCap},d=null;i.globals.previousPaths.length>0&&(d=e.getPathFrom(r));for(var u=0;u<o.linePathsTo.length;u++){var g=e.graphics.renderPaths(_objectSpread({},c,{pathFrom:null===d?o.linePathsFrom[u]:d,pathTo:o.linePathsTo[u],strokeWidth:Array.isArray(i.config.stroke.width)?i.config.stroke.width[r]:i.config.stroke.width,fill:"none",drawShadow:!1}));n.add(g);var f=s.fillPath({seriesNumber:r}),p=e.graphics.renderPaths(_objectSpread({},c,{pathFrom:null===d?o.areaPathsFrom[u]:d,pathTo:o.areaPathsTo[u],strokeWidth:0,fill:f,drawShadow:!1}));if(i.config.chart.dropShadow.enabled){var x=new Filters(e.ctx),m=i.config.chart.dropShadow;x.dropShadow(p,Object.assign({},m,{noUserSpaceOnUse:!0}),r)}n.add(p)}t.forEach(function(t,i){var s=new Markers(e.ctx).getMarkerConfig("apexcharts-marker",r,i),a=e.graphics.drawMarker(l[i].x,l[i].y,s);a.attr("rel",i),a.attr("j",i),a.attr("index",r),a.node.setAttribute("default-marker-size",s.pSize);var o=e.graphics.group({class:"apexcharts-series-markers"});o&&o.add(a),h.add(o),n.add(h)}),a.push(n)}),this.drawPolygons({parent:o}),i.config.dataLabels.enabled){var c=this.drawLabels();o.add(c)}return o.add(this.yaxisLabels),a.forEach(function(t){o.add(t)}),o}},{key:"drawPolygons",value:function(t){for(var e=this,i=this.w,s=t.parent,a=i.globals.yAxisScale[0].result.reverse(),r=a.length,n=[],o=this.size/(r-1),l=0;l<r;l++)n[l]=o*l;n.reverse();var h=[],c=[];n.forEach(function(t,i){var s=e.getPolygonPos(t),a="";s.forEach(function(t,s){if(0===i){var r=e.graphics.drawLine(t.x,t.y,0,0,Array.isArray(e.polygons.connectorColors)?e.polygons.connectorColors[s]:e.polygons.connectorColors);c.push(r)}0===s&&e.yaxisLabelsTextsPos.push({x:t.x,y:t.y}),a+=t.x+","+t.y+" "}),h.push(a)}),h.forEach(function(t,a){var r=e.polygons.strokeColors,n=e.graphics.drawPolygon(t,Array.isArray(r)?r[a]:r,i.globals.radarPolygons.fill.colors[a]);s.add(n)}),c.forEach(function(t){s.add(t)}),i.config.yaxis[0].show&&this.yaxisLabelsTextsPos.forEach(function(t,i){var s=e.drawYAxisText(t.x,t.y,i,a[i]);e.yaxisLabels.add(s)})}},{key:"drawYAxisText",value:function(t,e,i,s){var a=this.w,r=a.config.yaxis[0],n=a.globals.yLabelFormatters[0];return this.graphics.drawText({x:t+r.labels.offsetX,y:e+r.labels.offsetY,text:n(s,i),textAnchor:"middle",fontSize:r.labels.style.fontSize,fontFamily:r.labels.style.fontFamily,foreColor:r.labels.style.color})}},{key:"drawLabels",value:function(){var t=this,e=this.w,i="middle",s=e.config.dataLabels,a=this.graphics.group({class:"apexcharts-datalabels"}),r=this.getPolygonPos(this.size),n=0,o=0;return e.globals.labels.forEach(function(l,h){var c=s.formatter,d=new DataLabels(t.ctx);if(r[h]){n=r[h].x,o=r[h].y,Math.abs(r[h].x)>=10?r[h].x>0?(i="start",n+=10):r[h].x<0&&(i="end",n-=10):i="middle",Math.abs(r[h].y)>=t.size-10&&(r[h].y<0?o-=10:r[h].y>0&&(o+=10));var u=c(l,{seriesIndex:-1,dataPointIndex:h,w:e});d.plotDataLabelsText({x:n,y:o,text:u,textAnchor:i,i:h,j:h,parent:a,dataLabelsConfig:s,offsetCorrection:!1})}}),a}},{key:"createPaths",value:function(t,e){var i=this,s=[],a=[],r=[],n=[];if(t.length){a=[this.graphics.move(e.x,e.y)],n=[this.graphics.move(e.x,e.y)];var o=this.graphics.move(t[0].x,t[0].y),l=this.graphics.move(t[0].x,t[0].y);t.forEach(function(e,s){o+=i.graphics.line(e.x,e.y),l+=i.graphics.line(e.x,e.y),s===t.length-1&&(o+="Z",l+="Z")}),s.push(o),r.push(l)}return{linePathsFrom:a,linePathsTo:s,areaPathsFrom:n,areaPathsTo:r}}},{key:"getPathFrom",value:function(t){for(var e=this.w,i=null,s=0;s<e.globals.previousPaths.length;s++){var a=e.globals.previousPaths[s];a.paths.length>0&&parseInt(a.realIndex)===parseInt(t)&&void 0!==e.globals.previousPaths[s].paths[0]&&(i=e.globals.previousPaths[s].paths[0].d)}return i}},{key:"getDataPointsPos",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.dataPointsLen;t=t||[],e=e||[];for(var s=[],a=0;a<i;a++){var r={};r.x=t[a]*Math.sin(e[a]),r.y=-t[a]*Math.cos(e[a]),s.push(r)}return s}},{key:"getPolygonPos",value:function(t){for(var e=[],i=2*Math.PI/this.dataPointsLen,s=0;s<this.dataPointsLen;s++){var a={};a.x=t*Math.sin(s*i),a.y=-t*Math.cos(s*i),e.push(a)}return e}}]),t}(),Radial=function(t){function e(t){var i;_classCallCheck(this,e),(i=_possibleConstructorReturn(this,_getPrototypeOf(e).call(this,t))).ctx=t,i.w=t.w,i.animBeginArr=[0],i.animDur=0;var s=i.w;return i.startAngle=s.config.plotOptions.radialBar.startAngle,i.endAngle=s.config.plotOptions.radialBar.endAngle,i.trackStartAngle=s.config.plotOptions.radialBar.track.startAngle,i.trackEndAngle=s.config.plotOptions.radialBar.track.endAngle,i.radialDataLabels=s.config.plotOptions.radialBar.dataLabels,i.trackStartAngle||(i.trackStartAngle=i.startAngle),i.trackEndAngle||(i.trackEndAngle=i.endAngle),360===i.endAngle&&(i.endAngle=359.99),i.fullAngle=360-s.config.plotOptions.radialBar.endAngle-s.config.plotOptions.radialBar.startAngle,i.margin=parseInt(s.config.plotOptions.radialBar.track.margin),i}return _inherits(e,Pie),_createClass(e,[{key:"draw",value:function(t){var e=this.w,i=new Graphics(this.ctx),s=i.group({class:"apexcharts-radialbar"});if(e.globals.noData)return s;var a=i.group(),r=this.defaultSize/2,n=e.globals.gridWidth/2,o=this.defaultSize/2.05-e.config.stroke.width-e.config.chart.dropShadow.blur;void 0!==e.config.plotOptions.radialBar.size&&(o=e.config.plotOptions.radialBar.size);var l=e.globals.fill.colors;if(e.config.plotOptions.radialBar.track.show){var h=this.drawTracks({size:o,centerX:n,centerY:r,colorArr:l,series:t});a.add(h)}var c=this.drawArcs({size:o,centerX:n,centerY:r,colorArr:l,series:t}),d=360;return e.config.plotOptions.radialBar.startAngle<0&&(d=Math.abs(e.config.plotOptions.radialBar.endAngle-e.config.plotOptions.radialBar.startAngle)),e.globals.radialSize=o-o/(360/(360-d))+10,a.add(c.g),"front"===e.config.plotOptions.radialBar.hollow.position&&(c.g.add(c.elHollow),c.dataLabels&&c.g.add(c.dataLabels)),s.add(a),s}},{key:"drawTracks",value:function(t){var e=this.w,i=new Graphics(this.ctx),s=i.group({class:"apexcharts-tracks"}),a=new Filters(this.ctx),r=new Fill(this.ctx),n=this.getStrokeWidth(t);t.size=t.size-n/2;for(var o=0;o<t.series.length;o++){var l=i.group({class:"apexcharts-radialbar-track apexcharts-track"});s.add(l),l.attr({rel:o+1}),t.size=t.size-n-this.margin;var h=e.config.plotOptions.radialBar.track,c=r.fillPath({seriesNumber:0,size:t.size,fillColors:Array.isArray(h.background)?h.background[o]:h.background,solid:!0}),d=this.trackStartAngle,u=this.trackEndAngle;Math.abs(u)+Math.abs(d)>=360&&(u=360-Math.abs(this.startAngle)-.1);var g=i.drawPath({d:"",stroke:c,strokeWidth:n*parseInt(h.strokeWidth)/100,fill:"none",strokeOpacity:h.opacity,classes:"apexcharts-radialbar-area"});if(h.dropShadow.enabled){var f=h.dropShadow;a.dropShadow(g,f)}l.add(g),g.attr("id","apexcharts-radialbarTrack-"+o),this.animatePaths(g,{centerX:t.centerX,centerY:t.centerY,endAngle:u,startAngle:d,size:t.size,i:o,totalItems:2,animBeginArr:0,dur:0,isTrack:!0,easing:e.globals.easing})}return s}},{key:"drawArcs",value:function(t){var e=this.w,i=new Graphics(this.ctx),s=new Fill(this.ctx),a=new Filters(this.ctx),r=i.group(),n=this.getStrokeWidth(t);t.size=t.size-n/2;var o=e.config.plotOptions.radialBar.hollow.background,l=t.size-n*t.series.length-this.margin*t.series.length-n*parseInt(e.config.plotOptions.radialBar.track.strokeWidth)/100/2,h=l-e.config.plotOptions.radialBar.hollow.margin;void 0!==e.config.plotOptions.radialBar.hollow.image&&(o=this.drawHollowImage(t,r,l,o));var c=this.drawHollow({size:h,centerX:t.centerX,centerY:t.centerY,fill:o});if(e.config.plotOptions.radialBar.hollow.dropShadow.enabled){var d=e.config.plotOptions.radialBar.hollow.dropShadow;a.dropShadow(c,d)}var u=1;!this.radialDataLabels.total.show&&e.globals.series.length>1&&(u=0);var g=null;this.radialDataLabels.show&&(g=this.renderInnerDataLabels(this.radialDataLabels,{hollowSize:l,centerX:t.centerX,centerY:t.centerY,opacity:u})),"back"===e.config.plotOptions.radialBar.hollow.position&&(r.add(c),g&&r.add(g));var f=!1;e.config.plotOptions.radialBar.inverseOrder&&(f=!0);for(var p=f?t.series.length-1:0;f?p>=0:p<t.series.length;f?p--:p++){var x=i.group({class:"apexcharts-series apexcharts-radial-series",seriesName:Utils.escapeString(e.globals.seriesNames[p])});r.add(x),x.attr({rel:p+1,"data:realIndex":p}),this.ctx.series.addCollapsedClassToSeries(x,p),t.size=t.size-n-this.margin;var m=s.fillPath({seriesNumber:p,size:t.size,value:t.series[p]}),b=this.startAngle,v=void 0,y=Math.abs(e.config.plotOptions.radialBar.endAngle-e.config.plotOptions.radialBar.startAngle),w=Utils.negToZero(t.series[p]>100?100:t.series[p])/100,k=Math.round(y*w)+this.startAngle,A=void 0;e.globals.dataChanged&&(v=this.startAngle,A=Math.round(y*Utils.negToZero(e.globals.previousPaths[p])/100)+v),Math.abs(k)+Math.abs(b)>=360&&(k-=.01),Math.abs(A)+Math.abs(v)>=360&&(A-=.01);var S=k-b,C=Array.isArray(e.config.stroke.dashArray)?e.config.stroke.dashArray[p]:e.config.stroke.dashArray,L=i.drawPath({d:"",stroke:m,strokeWidth:n,fill:"none",fillOpacity:e.config.fill.opacity,classes:"apexcharts-radialbar-area apexcharts-radialbar-slice-"+p,strokeDashArray:C});if(Graphics.setAttrs(L.node,{"data:angle":S,"data:value":t.series[p]}),e.config.chart.dropShadow.enabled){var P=e.config.chart.dropShadow;a.dropShadow(L,P,p)}this.addListeners(L,this.radialDataLabels),x.add(L),L.attr({index:0,j:p});var z=0;!this.initialAnim||e.globals.resized||e.globals.dataChanged||(z=(k-b)/360*e.config.chart.animations.speed,this.animDur=z/(1.2*t.series.length)+this.animDur,this.animBeginArr.push(this.animDur)),e.globals.dataChanged&&(z=(k-b)/360*e.config.chart.animations.dynamicAnimation.speed,this.animDur=z/(1.2*t.series.length)+this.animDur,this.animBeginArr.push(this.animDur)),this.animatePaths(L,{centerX:t.centerX,centerY:t.centerY,endAngle:k,startAngle:b,prevEndAngle:A,prevStartAngle:v,size:t.size,i:p,totalItems:2,animBeginArr:this.animBeginArr,dur:z,shouldSetPrevPaths:!0,easing:e.globals.easing})}return{g:r,elHollow:c,dataLabels:g}}},{key:"drawHollow",value:function(t){var e=new Graphics(this.ctx).drawCircle(2*t.size);return e.attr({class:"apexcharts-radialbar-hollow",cx:t.centerX,cy:t.centerY,r:t.size,fill:t.fill}),e}},{key:"drawHollowImage",value:function(t,e,i,s){var a=this.w,r=new Fill(this.ctx),n=(Math.random()+1).toString(36).substring(4),o=a.config.plotOptions.radialBar.hollow.image;if(a.config.plotOptions.radialBar.hollow.imageClipped)r.clippedImgArea({width:i,height:i,image:o,patternID:"pattern".concat(a.globals.cuid).concat(n)}),s="url(#pattern".concat(a.globals.cuid).concat(n,")");else{var l=a.config.plotOptions.radialBar.hollow.imageWidth,h=a.config.plotOptions.radialBar.hollow.imageHeight;if(void 0===l&&void 0===h){var c=a.globals.dom.Paper.image(o).loaded(function(e){this.move(t.centerX-e.width/2+a.config.plotOptions.radialBar.hollow.imageOffsetX,t.centerY-e.height/2+a.config.plotOptions.radialBar.hollow.imageOffsetY)});e.add(c)}else{var d=a.globals.dom.Paper.image(o).loaded(function(e){this.move(t.centerX-l/2+a.config.plotOptions.radialBar.hollow.imageOffsetX,t.centerY-h/2+a.config.plotOptions.radialBar.hollow.imageOffsetY),this.size(l,h)});e.add(d)}}return s}},{key:"getStrokeWidth",value:function(t){var e=this.w;return t.size*(100-parseInt(e.config.plotOptions.radialBar.hollow.size))/100/(t.series.length+1)-this.margin}}]),e}(),RangeBar=function(t){function e(){return _classCallCheck(this,e),_possibleConstructorReturn(this,_getPrototypeOf(e).apply(this,arguments))}return _inherits(e,Bar),_createClass(e,[{key:"draw",value:function(t,e){var i=this.w,s=new Graphics(this.ctx),a=new Fill(this.ctx);this.rangeBarOptions=this.w.config.plotOptions.rangeBar,this.series=t,this.seriesRangeStart=i.globals.seriesRangeStart,this.seriesRangeEnd=i.globals.seriesRangeEnd,this.initVariables(t);for(var r=s.group({class:"apexcharts-rangebar-series apexcharts-plot-series"}),n=0,o=0;n<t.length;n++,o++){var l,h,c,d,u=void 0,g=void 0,f=void 0,p=void 0,x=[],m=[],b=i.globals.comboCharts?e[n]:n,v=s.group({class:"apexcharts-series",seriesName:Utils.escapeString(i.globals.seriesNames[b]),rel:n+1,"data:realIndex":b});t[n].length>0&&(this.visibleI=this.visibleI+1);var y=0,w=0,k=0;this.yRatio.length>1&&(this.yaxisIndex=b);var A=this.initialPositions();p=A.y,h=A.yDivision,w=A.barHeight,d=A.zeroW,f=A.x,k=A.barWidth,l=A.xDivision,c=A.zeroH,m.push(f+k/2);for(var S=s.group({class:"apexcharts-datalabels"}),C=0,L=i.globals.dataPoints;C<i.globals.dataPoints;C++,L--){void 0===this.series[n][C]||null===t[n][C]?this.isNullValue=!0:this.isNullValue=!1,i.config.stroke.show&&(y=this.isNullValue?0:Array.isArray(this.strokeWidth)?this.strokeWidth[b]:this.strokeWidth);var P=null;this.isHorizontal?k=(P=this.drawRangeBarPaths({indexes:{i:n,j:C,realIndex:b,bc:o},barHeight:w,strokeWidth:y,pathTo:u,pathFrom:g,zeroW:d,x:f,y:p,yDivision:h,elSeries:v})).barWidth:w=(P=this.drawRangeColumnPaths({indexes:{i:n,j:C,realIndex:b,bc:o},x:f,y:p,xDivision:l,pathTo:u,pathFrom:g,barWidth:k,zeroH:c,strokeWidth:y,elSeries:v})).barHeight,u=P.pathTo,g=P.pathFrom,p=P.y,f=P.x,C>0&&m.push(f+k/2),x.push(p);var z=a.fillPath({seriesNumber:b}),T=i.globals.stroke.colors[b];v=this.renderSeries({realIndex:b,pathFill:z,lineFill:T,j:C,i:n,pathFrom:g,pathTo:u,strokeWidth:y,elSeries:v,x:f,y:p,series:t,barHeight:w,barWidth:k,elDataLabelsWrap:S,visibleSeries:this.visibleI,type:"rangebar"})}i.globals.seriesXvalues[b]=m,i.globals.seriesYvalues[b]=x,r.add(v)}return r}},{key:"drawRangeColumnPaths",value:function(t){var e=t.indexes,i=t.x,s=(t.y,t.strokeWidth),a=t.xDivision,r=t.pathTo,n=t.pathFrom,o=t.barWidth,l=t.zeroH,h=this.w,c=new Graphics(this.ctx),d=e.i,u=e.j,g=this.yRatio[this.yaxisIndex],f=e.realIndex,p=this.getRangeValue(f,u),x=Math.min(p.start,p.end),m=Math.max(p.start,p.end);h.globals.isXNumeric&&(i=(h.globals.seriesX[d][u]-h.globals.minX)/this.xRatio-o/2);var b=i+o*this.visibleI;void 0===this.series[d][u]||null===this.series[d][u]?x=l:(x=l-x/g,m=l-m/g);var v=Math.abs(m-x);return c.move(b,l),n=c.move(b,x),h.globals.previousPaths.length>0&&(n=this.getPathFrom(f,u,!0)),r=c.move(b,m)+c.line(b+o,m)+c.line(b+o,x)+c.line(b,x)+c.line(b,m-s/2),n=n+c.move(b,x)+c.line(b+o,x)+c.line(b+o,x)+c.line(b,x),h.globals.isXNumeric||(i+=a),{pathTo:r,pathFrom:n,barHeight:v,x:i,y:m,barXPosition:b}}},{key:"drawRangeBarPaths",value:function(t){var e=t.indexes,i=(t.x,t.y),s=t.yDivision,a=t.pathTo,r=t.pathFrom,n=t.barHeight,o=t.zeroW,l=this.w,h=new Graphics(this.ctx),c=e.i,d=e.j,u=e.realIndex,g=o,f=o;l.globals.isXNumeric&&(i=(l.globals.seriesX[c][d]-l.globals.minX)/this.invertedXRatio-n);var p=i+n*this.visibleI;void 0!==this.series[c][d]&&null!==this.series[c][d]&&(g=o+this.seriesRangeStart[c][d]/this.invertedYRatio,f=o+this.seriesRangeEnd[c][d]/this.invertedYRatio),h.move(o,p),r=h.move(o,p),l.globals.previousPaths.length>0&&(r=this.getPathFrom(u,d));var x=Math.abs(f-g);return a=h.move(g,p)+h.line(f,p)+h.line(f,p+n)+h.line(g,p+n)+h.line(g,p),r=r+h.line(g,p)+h.line(g,p+n)+h.line(g,p+n)+h.line(g,p),l.globals.isXNumeric||(i+=s),{pathTo:a,pathFrom:r,barWidth:x,x:f,y:i,barYPosition:p}}},{key:"getRangeValue",value:function(t,e){var i=this.w;return{start:i.globals.seriesRangeStart[t][e],end:i.globals.seriesRangeEnd[t][e]}}}]),e}(),Formatters=function(){function t(e){_classCallCheck(this,t),this.ctx=e,this.w=e.w,this.tooltipKeyFormat="dd MMM"}return _createClass(t,[{key:"xLabelFormat",value:function(t,e,i){var s=this.w;if("datetime"===s.config.xaxis.type&&(void 0===s.config.xaxis.labels.formatter&&void 0===s.config.tooltip.x.formatter))return new DateTime(this.ctx).formatDate(new Date(e),s.config.tooltip.x.format,!0,!0);return t(e,i)}},{key:"setLabelFormatters",value:function(){var t=this.w;return t.globals.xLabelFormatter=function(t){return t},t.globals.xaxisTooltipFormatter=function(t){return t},t.globals.ttKeyFormatter=function(t){return t},t.globals.ttZFormatter=function(t){return t},t.globals.legendFormatter=function(t){return t},void 0!==t.config.xaxis.labels.formatter?t.globals.xLabelFormatter=t.config.xaxis.labels.formatter:t.globals.xLabelFormatter=function(e){if(Utils.isNumber(e)){if("numeric"===t.config.xaxis.type&&t.globals.dataPoints<50)return e.toFixed(1);if(t.globals.isBarHorizontal)if(t.globals.maxY-t.globals.minYArr<4)return e.toFixed(1);return e.toFixed(0)}return e},"function"==typeof t.config.tooltip.x.formatter?t.globals.ttKeyFormatter=t.config.tooltip.x.formatter:t.globals.ttKeyFormatter=t.globals.xLabelFormatter,"function"==typeof t.config.xaxis.tooltip.formatter&&(t.globals.xaxisTooltipFormatter=t.config.xaxis.tooltip.formatter),Array.isArray(t.config.tooltip.y)?t.globals.ttVal=t.config.tooltip.y:void 0!==t.config.tooltip.y.formatter&&(t.globals.ttVal=t.config.tooltip.y),void 0!==t.config.tooltip.z.formatter&&(t.globals.ttZFormatter=t.config.tooltip.z.formatter),void 0!==t.config.legend.formatter&&(t.globals.legendFormatter=t.config.legend.formatter),t.config.yaxis.forEach(function(e,i){void 0!==e.labels.formatter?t.globals.yLabelFormatters[i]=e.labels.formatter:t.globals.yLabelFormatters[i]=function(s){return t.globals.xyCharts&&Utils.isNumber(s)?0!==t.globals.yValueDecimal?s.toFixed(void 0!==e.decimalsInFloat?e.decimalsInFloat:t.globals.yValueDecimal):t.globals.maxYArr[i]-t.globals.minYArr[i]<10?s.toFixed(1):s.toFixed(0):s}}),t.globals}},{key:"heatmapLabelFormatters",value:function(){var t=this.w;if("heatmap"===t.config.chart.type){t.globals.yAxisScale[0].result=t.globals.seriesNames.slice();var e=t.globals.seriesNames.reduce(function(t,e){return t.length>e.length?t:e},0);t.globals.yAxisScale[0].niceMax=e,t.globals.yAxisScale[0].niceMin=e}}}]),t}(),AxesUtils=function(){function t(e){_classCallCheck(this,t),this.ctx=e,this.w=e.w}return _createClass(t,[{key:"getLabel",value:function(t,e,i,s){var a,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],n=this.w,o=void 0===t[s]?"":t[s],l=n.globals.xLabelFormatter,h=n.config.xaxis.labels.formatter,c=!1,d=o;a=new Formatters(this.ctx).xLabelFormat(l,o,d),void 0!==h&&(a=h(o,t[s],s));var u,g;return e.length>0?(u=e[s].unit,g=null,e.forEach(function(t){"month"===t.unit?g="year":"day"===t.unit?g="month":"hour"===t.unit?g="day":"minute"===t.unit&&(g="hour")}),c=g===u,i=e[s].position,a=e[s].value):"datetime"===n.config.xaxis.type&&void 0===h&&(a=""),void 0===a&&(a=""),(0===(a=a.toString()).indexOf("NaN")||0===a.toLowerCase().indexOf("invalid")||a.toLowerCase().indexOf("infinity")>=0||r.indexOf(a)>=0&&!n.config.xaxis.labels.showDuplicates)&&(a=""),{x:i,text:a,isBold:c}}},{key:"drawYAxisTicks",value:function(t,e,i,s,a,r,n){var o=this.w,l=new Graphics(this.ctx),h=o.globals.translateY;if(s.show){!0===o.config.yaxis[a].opposite&&(t+=s.width);for(var c=e;c>=0;c--){var d=h+e/10+o.config.yaxis[a].labels.offsetY-1;o.globals.isBarHorizontal&&(d=r*c);var u=l.drawLine(t+i.offsetX-s.width+s.offsetX,d+s.offsetY,t+i.offsetX+s.offsetX,d+s.offsetY,i.color);n.add(u),h+=r}}}}]),t}(),YAxis=function(){function t(e){_classCallCheck(this,t),this.ctx=e,this.w=e.w;var i=this.w;this.xaxisFontSize=i.config.xaxis.labels.style.fontSize,this.axisFontFamily=i.config.xaxis.labels.style.fontFamily,this.xaxisForeColors=i.config.xaxis.labels.style.colors,this.xAxisoffX=0,"bottom"===i.config.xaxis.position&&(this.xAxisoffX=i.globals.gridHeight),this.drawnLabels=[],this.axesUtils=new AxesUtils(e)}return _createClass(t,[{key:"drawYaxis",value:function(t){var e=this.w,i=new Graphics(this.ctx),s=e.config.yaxis[t].labels.style.fontSize,a=e.config.yaxis[t].labels.style.fontFamily,r=i.group({class:"apexcharts-yaxis",rel:t,transform:"translate("+e.globals.translateYAxisX[t]+", 0)"});if(!e.config.yaxis[t].show)return r;var n=i.group({class:"apexcharts-yaxis-texts-g"});r.add(n);var o=e.globals.yAxisScale[t].result.length-1,l=e.globals.gridHeight/o+.1,h=e.globals.translateY,c=e.globals.yLabelFormatters[t],d=e.globals.yAxisScale[t].result.slice();if(e.config.yaxis[t]&&e.config.yaxis[t].reversed&&d.reverse(),e.config.yaxis[t].labels.show)for(var u=o;u>=0;u--){var g=d[u];g=c(g,u);var f=e.config.yaxis[t].labels.padding;e.config.yaxis[t].opposite&&0!==e.config.yaxis.length&&(f*=-1);var p=i.drawText({x:f,y:h+o/10+e.config.yaxis[t].labels.offsetY+1,text:g,textAnchor:e.config.yaxis[t].opposite?"start":"end",fontSize:s,fontFamily:a,foreColor:e.config.yaxis[t].labels.style.color,cssClass:"apexcharts-yaxis-label "+e.config.yaxis[t].labels.style.cssClass});n.add(p);var x=i.rotateAroundCenter(p.node);0!==e.config.yaxis[t].labels.rotate&&p.node.setAttribute("transform","rotate(".concat(e.config.yaxis[t].labels.rotate," ").concat(x.x," ").concat(x.y,")")),h+=l}if(void 0!==e.config.yaxis[t].title.text){var m=i.group({class:"apexcharts-yaxis-title"}),b=0;e.config.yaxis[t].opposite&&(b=e.globals.translateYAxisX[t]);var v=i.drawText({x:b,y:e.globals.gridHeight/2+e.globals.translateY,text:e.config.yaxis[t].title.text,textAnchor:"end",foreColor:e.config.yaxis[t].title.style.color,fontSize:e.config.yaxis[t].title.style.fontSize,fontFamily:e.config.yaxis[t].title.style.fontFamily,cssClass:"apexcharts-yaxis-title-text "+e.config.yaxis[t].title.style.cssClass});m.add(v),r.add(m)}var y=e.config.yaxis[t].axisBorder;if(y.show){var w=31+y.offsetX;e.config.yaxis[t].opposite&&(w=-31-y.offsetX);var k=i.drawLine(w,e.globals.translateY+y.offsetY-2,w,e.globals.gridHeight+e.globals.translateY+y.offsetY+2,y.color);r.add(k),this.axesUtils.drawYAxisTicks(w,o,y,e.config.yaxis[t].axisTicks,t,l,r)}return r}},{key:"drawYaxisInversed",value:function(t){var e=this.w,i=new Graphics(this.ctx),s=i.group({class:"apexcharts-xaxis apexcharts-yaxis-inversed"}),a=i.group({class:"apexcharts-xaxis-texts-g",transform:"translate(".concat(e.globals.translateXAxisX,", ").concat(e.globals.translateXAxisY,")")});s.add(a);var r=e.globals.yAxisScale[t].result.length-1,n=e.globals.gridWidth/r+.1,o=n+e.config.xaxis.labels.offsetX,l=e.globals.xLabelFormatter,h=e.globals.yAxisScale[t].result.slice(),c=e.globals.invertedTimelineLabels;c.length>0&&(this.xaxisLabels=c.slice(),r=(h=c.slice()).length),e.config.yaxis[t]&&e.config.yaxis[t].reversed&&h.reverse();var d=c.length;if(e.config.xaxis.labels.show)for(var u=d?0:r;d?u<d-1:u>=0;d?u++:u--){var g=h[u];g=l(g,u);var f=e.globals.gridWidth+e.globals.padHorizontal-(o-n+e.config.xaxis.labels.offsetX);if(c.length){var p=this.axesUtils.getLabel(h,c,f,u,this.drawnLabels);f=p.x,g=p.text,this.drawnLabels.push(p.text)}var x=i.drawText({x:f,y:this.xAxisoffX+e.config.xaxis.labels.offsetY+30,text:"",textAnchor:"middle",foreColor:Array.isArray(this.xaxisForeColors)?this.xaxisForeColors[t]:this.xaxisForeColors,fontSize:this.xaxisFontSize,fontFamily:this.xaxisFontFamily,cssClass:"apexcharts-xaxis-label "+e.config.xaxis.labels.style.cssClass});a.add(x),x.tspan(g);var m=document.createElementNS(e.globals.SVGNS,"title");m.textContent=g,x.node.appendChild(m),o+=n}if(void 0!==e.config.xaxis.title.text){var b=i.group({class:"apexcharts-xaxis-title apexcharts-yaxis-title-inversed"}),v=i.drawText({x:e.globals.gridWidth/2,y:this.xAxisoffX+parseInt(this.xaxisFontSize)+parseInt(e.config.xaxis.title.style.fontSize)+20,text:e.config.xaxis.title.text,textAnchor:"middle",fontSize:e.config.xaxis.title.style.fontSize,fontFamily:e.config.xaxis.title.style.fontFamily,cssClass:"apexcharts-xaxis-title-text "+e.config.xaxis.title.style.cssClass});b.add(v),s.add(b)}var y=e.config.yaxis[t].axisBorder;if(y.show){var w=i.drawLine(e.globals.padHorizontal+y.offsetX,1+y.offsetY,e.globals.padHorizontal+y.offsetX,e.globals.gridHeight+y.offsetY,y.color);s.add(w)}return s}},{key:"yAxisTitleRotate",value:function(t,e){var i=this.w,s=new Graphics(this.ctx),a={width:0,height:0},r={width:0,height:0},n=i.globals.dom.baseEl.querySelector(" .apexcharts-yaxis[rel='".concat(t,"'] .apexcharts-yaxis-texts-g"));null!==n&&(a=n.getBoundingClientRect());var o=i.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(t,"'] .apexcharts-yaxis-title text"));if(null!==o&&(r=o.getBoundingClientRect()),null!==o){var l=this.xPaddingForYAxisTitle(t,a,r,e);o.setAttribute("x",l.xPos-(e?10:0))}if(null!==o){var h=s.rotateAroundCenter(o);e?o.setAttribute("transform","rotate(".concat(i.config.yaxis[t].title.rotate," ").concat(h.x," ").concat(h.y,")")):o.setAttribute("transform","rotate(-".concat(i.config.yaxis[t].title.rotate," ").concat(h.x," ").concat(h.y,")"))}}},{key:"xPaddingForYAxisTitle",value:function(t,e,i,s){var a=this.w,r=0,n=0,o=10;return void 0===a.config.yaxis[t].title.text||t<0?{xPos:n,padd:0}:(s?(n=e.width+a.config.yaxis[t].title.offsetX+i.width/2+o/2,0===(r+=1)&&(n-=o/2)):(n=-1*e.width+a.config.yaxis[t].title.offsetX+o/2+i.width/2,a.globals.isBarHorizontal&&(o=25,n=-1*e.width-a.config.yaxis[t].title.offsetX-o)),{xPos:n,padd:o})}},{key:"setYAxisXPosition",value:function(t,e){var i=this.w,s=0,a=0,r=21,n=1;i.config.yaxis.length>1&&(this.multipleYs=!0),i.config.yaxis.map(function(o,l){var h=i.globals.ignoreYAxisIndexes.indexOf(l)>-1||!o.show||o.floating||0===t[l].width,c=t[l].width+e[l].width;o.opposite?i.globals.isBarHorizontal?(a=i.globals.gridWidth+i.globals.translateX-1,i.globals.translateYAxisX[l]=a-o.labels.offsetX):(a=i.globals.gridWidth+i.globals.translateX+n,h||(n=n+c+20),i.globals.translateYAxisX[l]=a-o.labels.offsetX+20):(s=i.globals.translateX-r,h||(r=r+c+20),i.globals.translateYAxisX[l]=s+o.labels.offsetX)})}},{key:"setYAxisTextAlignments",value:function(){var t=this.w,e=t.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis");(e=Utils.listToArray(e)).forEach(function(e,i){var s=t.config.yaxis[i];if(void 0!==s.labels.align){var a=t.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(i,"'] .apexcharts-yaxis-texts-g")),r=t.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis[rel='".concat(i,"'] .apexcharts-yaxis-label"));r=Utils.listToArray(r);var n=a.getBoundingClientRect();"left"===s.labels.align?(r.forEach(function(t,e){t.setAttribute("text-anchor","start")}),s.opposite||a.setAttribute("transform","translate(-".concat(n.width,", 0)"))):"center"===s.labels.align?(r.forEach(function(t,e){t.setAttribute("text-anchor","middle")}),a.setAttribute("transform","translate(".concat(n.width/2*(s.opposite?1:-1),", 0)"))):"right"===s.labels.align&&(r.forEach(function(t,e){t.setAttribute("text-anchor","end")}),s.opposite&&a.setAttribute("transform","translate(".concat(n.width,", 0)")))}})}}]),t}(),Dimensions=function(){function t(e){_classCallCheck(this,t),this.ctx=e,this.w=e.w,this.lgRect={},this.yAxisWidth=0,this.xAxisHeight=0,this.isSparkline=this.w.config.chart.sparkline.enabled,this.xPadRight=0,this.xPadLeft=0}return _createClass(t,[{key:"plotCoords",value:function(){var t=this.w,e=t.globals,i=this.getLegendsRect();e.axisCharts?this.setGridCoordsForAxisCharts(i):this.setGridCoordsForNonAxisCharts(i),this.titleSubtitleOffset(),e.gridHeight=e.gridHeight-t.config.grid.padding.top-t.config.grid.padding.bottom,e.gridWidth=e.gridWidth-t.config.grid.padding.left-t.config.grid.padding.right-this.xPadRight-this.xPadLeft,e.translateX=e.translateX+t.config.grid.padding.left+this.xPadLeft,e.translateY=e.translateY+t.config.grid.padding.top}},{key:"conditionalChecksForAxisCoords",value:function(t,e){var i=this.w;this.xAxisHeight=(t.height+e.height)*i.globals.LINE_HEIGHT_RATIO+15,this.xAxisWidth=t.width,this.xAxisHeight-e.height>i.config.xaxis.labels.maxHeight&&(this.xAxisHeight=i.config.xaxis.labels.maxHeight),i.config.xaxis.labels.minHeight&&this.xAxisHeight<i.config.xaxis.labels.minHeight&&(this.xAxisHeight=i.config.xaxis.labels.minHeight),i.config.xaxis.floating&&(this.xAxisHeight=0),i.globals.isBarHorizontal?this.yAxisWidth=i.globals.yLabelsCoords[0].width+i.globals.yTitleCoords[0].width+15:this.yAxisWidth=this.getTotalYAxisWidth();var s=0,a=0;i.config.yaxis.forEach(function(t){s+=t.labels.minWidth,a+=t.labels.maxWidth}),this.yAxisWidth<s&&(this.yAxisWidth=s),this.yAxisWidth>a&&(this.yAxisWidth=a)}},{key:"setGridCoordsForAxisCharts",value:function(t){var e=this.w,i=e.globals,s=this.getyAxisLabelsCoords(),a=this.getxAxisLabelsCoords(),r=this.getyAxisTitleCoords(),n=this.getxAxisTitleCoords();e.globals.yLabelsCoords=[],e.globals.yTitleCoords=[],e.config.yaxis.map(function(t,i){e.globals.yLabelsCoords.push({width:s[i].width,index:i}),e.globals.yTitleCoords.push({width:r[i].width,index:i})}),this.conditionalChecksForAxisCoords(a,n),i.translateXAxisY=e.globals.rotateXLabels?this.xAxisHeight/8:-4,i.translateXAxisX=e.globals.rotateXLabels&&e.globals.isXNumeric&&e.config.xaxis.labels.rotate<=-45?-this.xAxisWidth/4:0,e.globals.isBarHorizontal&&(i.rotateXLabels=!1,i.translateXAxisY=parseInt(e.config.xaxis.labels.style.fontSize)/1.5*-1),i.translateXAxisY=i.translateXAxisY+e.config.xaxis.labels.offsetY,i.translateXAxisX=i.translateXAxisX+e.config.xaxis.labels.offsetX;var o=this.yAxisWidth,l=this.xAxisHeight;i.xAxisLabelsHeight=this.xAxisHeight,i.xAxisHeight=this.xAxisHeight;var h=10;switch(e.config.grid.show&&"radar"!==e.config.chart.type||(o=0,l=35),this.isSparkline&&(t={height:0,width:0},l=0,o=0,h=0),this.additionalPaddingXLabels(a),e.config.legend.position){case"bottom":i.translateY=h,i.translateX=o,i.gridHeight=i.svgHeight-t.height-l-(this.isSparkline?0:e.globals.rotateXLabels?10:15),i.gridWidth=i.svgWidth-o;break;case"top":i.translateY=t.height+h,i.translateX=o,i.gridHeight=i.svgHeight-t.height-l-(this.isSparkline?0:e.globals.rotateXLabels?10:15),i.gridWidth=i.svgWidth-o;break;case"left":i.translateY=h,i.translateX=t.width+o,i.gridHeight=i.svgHeight-l-12,i.gridWidth=i.svgWidth-t.width-o;break;case"right":i.translateY=h,i.translateX=o,i.gridHeight=i.svgHeight-l-12,i.gridWidth=i.svgWidth-t.width-o-5;break;default:throw new Error("Legend position not supported")}this.setGridXPosForDualYAxis(r,s),new YAxis(this.ctx).setYAxisXPosition(s,r)}},{key:"setGridCoordsForNonAxisCharts",value:function(t){var e=this.w,i=e.globals,s=0;e.config.legend.show&&!e.config.legend.floating&&(s=20);var a=10,r=0;if("pie"===e.config.chart.type||"donut"===e.config.chart.type?(a+=e.config.plotOptions.pie.offsetY,r+=e.config.plotOptions.pie.offsetX):"radialBar"===e.config.chart.type&&(a+=e.config.plotOptions.radialBar.offsetY,r+=e.config.plotOptions.radialBar.offsetX),!e.config.legend.show)return i.gridHeight=i.svgHeight-35,i.gridWidth=i.gridHeight,i.translateY=a-10,void(i.translateX=r+(i.svgWidth-i.gridWidth)/2);switch(e.config.legend.position){case"bottom":i.gridHeight=i.svgHeight-t.height-35,i.gridWidth=i.gridHeight,i.translateY=a-20,i.translateX=r+(i.svgWidth-i.gridWidth)/2;break;case"top":i.gridHeight=i.svgHeight-t.height-35,i.gridWidth=i.gridHeight,i.translateY=t.height+a+10,i.translateX=r+(i.svgWidth-i.gridWidth)/2;break;case"left":i.gridWidth=i.svgWidth-t.width-s,i.gridHeight=i.gridWidth,i.translateY=a,i.translateX=r+t.width+s;break;case"right":i.gridWidth=i.svgWidth-t.width-s-5,i.gridHeight=i.gridWidth,i.translateY=a,i.translateX=r+10;break;default:throw new Error("Legend position not supported")}}},{key:"setGridXPosForDualYAxis",value:function(t,e){var i=this.w;i.config.yaxis.map(function(s,a){-1===i.globals.ignoreYAxisIndexes.indexOf(a)&&!i.config.yaxis[a].floating&&i.config.yaxis[a].show&&s.opposite&&(i.globals.translateX=i.globals.translateX-(e[a].width+t[a].width)-parseInt(i.config.yaxis[a].labels.style.fontSize)/1.2-12)})}},{key:"additionalPaddingXLabels",value:function(t){var e=this,i=this.w;if("category"===i.config.xaxis.type&&i.globals.isBarHorizontal||"numeric"===i.config.xaxis.type||"datetime"===i.config.xaxis.type){var s=i.globals.isXNumeric;i.config.yaxis.forEach(function(a,r){var n;(!a.show||a.floating||-1!==i.globals.collapsedSeriesIndices.indexOf(r)||s||a.opposite&&i.globals.isBarHorizontal)&&((s&&i.globals.isMultipleYAxis&&-1!==i.globals.collapsedSeriesIndices.indexOf(r)||i.globals.isBarHorizontal&&a.opposite)&&(n=t,i.config.grid.padding.left<n.width&&(e.xPadLeft=n.width/2+1)),(!i.globals.isBarHorizontal&&a.opposite&&-1!==i.globals.collapsedSeriesIndices.indexOf(r)||s&&!i.globals.isMultipleYAxis)&&function(t){e.timescaleLabels?e.timescaleLabels[e.timescaleLabels.length-1].position+t.width>i.globals.gridWidth?i.globals.skipLastTimelinelabel=!0:i.globals.skipLastTimelinelabel=!1:"datetime"===i.config.xaxis.type?i.config.grid.padding.right<t.width&&(i.globals.skipLastTimelinelabel=!0):"datetime"!==i.config.xaxis.type&&i.config.grid.padding.right<t.width&&(e.xPadRight=t.width/2+1)}(t))})}}},{key:"titleSubtitleOffset",value:function(){var t=this.w,e=t.globals,i=this.isSparkline||!t.globals.axisCharts?0:10;void 0!==t.config.title.text?i+=t.config.title.margin:i+=this.isSparkline||!t.globals.axisCharts?0:5,void 0!==t.config.subtitle.text?i+=t.config.subtitle.margin:i+=this.isSparkline||!t.globals.axisCharts?0:5,t.config.legend.show&&"bottom"===t.config.legend.position&&!t.config.legend.floating&&(t.config.series.length>1||!t.globals.axisCharts||t.config.legend.showForSingleSeries)&&(i+=10);var s=this.getTitleSubtitleCoords("title"),a=this.getTitleSubtitleCoords("subtitle");e.gridHeight=e.gridHeight-s.height-a.height-i,e.translateY=e.translateY+s.height+a.height+i}},{key:"getTotalYAxisWidth",value:function(){var t=this.w,e=0,i=10,s=function(e){return t.globals.ignoreYAxisIndexes.indexOf(e)>-1};return t.globals.yLabelsCoords.map(function(a,r){var n=t.config.yaxis[r].floating;a.width>0&&!n?(e=e+a.width+i,s(r)&&(e=e-a.width-i)):e+=n||!t.config.yaxis[r].show?0:5}),t.globals.yTitleCoords.map(function(a,r){var n=t.config.yaxis[r].floating;i=parseInt(t.config.yaxis[r].title.style.fontSize),a.width>0&&!n?(e=e+a.width+i,s(r)&&(e=e-a.width-i)):e+=n||!t.config.yaxis[r].show?0:5}),e}},{key:"getxAxisTimeScaleLabelsCoords",value:function(){var t,e=this.w;this.timescaleLabels=e.globals.timelineLabels.slice(),e.globals.isBarHorizontal&&"datetime"===e.config.xaxis.type&&(this.timescaleLabels=e.globals.invertedTimelineLabels.slice());var i=this.timescaleLabels.map(function(t){return t.value}),s=i.reduce(function(t,e){return void 0===t?(console.error("You have possibly supplied invalid Date format. Please supply a valid JavaScript Date"),0):t.length>e.length?t:e},0);return 1.05*(t=new Graphics(this.ctx).getTextRects(s,e.config.xaxis.labels.style.fontSize)).width*i.length>e.globals.gridWidth&&0!==e.config.xaxis.labels.rotate&&(e.globals.overlappingXLabels=!0),t}},{key:"getxAxisLabelsCoords",value:function(){var t,e=this.w,i=e.globals.labels.slice();if(e.globals.timelineLabels.length>0){var s=this.getxAxisTimeScaleLabelsCoords();t={width:s.width,height:s.height}}else{var a="left"!==e.config.legend.position||"right"!==e.config.legend.position||e.config.legend.floating?0:this.lgRect.width,r=e.globals.xLabelFormatter,n=i.reduce(function(t,e){return t.length>e.length?t:e},0);e.globals.isBarHorizontal&&(n=e.globals.yAxisScale[0].result.reduce(function(t,e){return t.length>e.length?t:e},0));var o=n;n=new Formatters(this.ctx).xLabelFormat(r,n,o);var l=new Graphics(this.ctx),h=l.getTextRects(n,e.config.xaxis.labels.style.fontSize);(t={width:h.width,height:h.height}).width*i.length>e.globals.svgWidth-a-this.yAxisWidth&&0!==e.config.xaxis.labels.rotate?e.globals.isBarHorizontal||(e.globals.rotateXLabels=!0,h=l.getTextRects(n,e.config.xaxis.labels.style.fontSize,e.config.xaxis.labels.style.fontFamily,"rotate(".concat(e.config.xaxis.labels.rotate," 0 0)"),!1),t.height=h.height/1.66):e.globals.rotateXLabels=!1}return e.config.xaxis.labels.show||(t={width:0,height:0}),{width:t.width,height:t.height}}},{key:"getyAxisLabelsCoords",value:function(){var t=this,e=this.w,i=[],s=10;return e.config.yaxis.map(function(a,r){if(a.show&&a.labels.show&&e.globals.yAxisScale[r].result.length){var n=e.globals.yLabelFormatters[r],o=n(e.globals.yAxisScale[r].niceMax,-1);if(void 0!==o&&0!==o.length||(o=e.globals.yAxisScale[r].niceMax),e.globals.isBarHorizontal)s=0,o=n(o=e.globals.labels.slice().reduce(function(t,e){return t.length>e.length?t:e},0),-1);var l=new Graphics(t.ctx).getTextRects(o,a.labels.style.fontSize);i.push({width:l.width+s,height:l.height})}else i.push({width:0,height:0})}),i}},{key:"getxAxisTitleCoords",value:function(){var t=this.w,e=0,i=0;if(void 0!==t.config.xaxis.title.text){var s=new Graphics(this.ctx).getTextRects(t.config.xaxis.title.text,t.config.xaxis.title.style.fontSize);e=s.width,i=s.height}return{width:e,height:i}}},{key:"getyAxisTitleCoords",value:function(){var t=this,e=this.w,i=[];return e.config.yaxis.map(function(e,s){if(e.show&&void 0!==e.title.text){var a=new Graphics(t.ctx).getTextRects(e.title.text,e.title.style.fontSize,e.title.style.fontFamily,"rotate(-90 0 0)",!1);i.push({width:a.width,height:a.height})}else i.push({width:0,height:0})}),i}},{key:"getTitleSubtitleCoords",value:function(t){var e=this.w,i=0,s=0,a="title"===t?e.config.title.floating:e.config.subtitle.floating,r=e.globals.dom.baseEl.querySelector(".apexcharts-".concat(t,"-text"));if(null!==r&&!a){var n=r.getBoundingClientRect();i=n.width,s=e.globals.axisCharts?n.height+5:n.height}return{width:i,height:s}}},{key:"getLegendsRect",value:function(){var t=this.w,e=t.globals.dom.baseEl.querySelector(".apexcharts-legend"),i=Object.assign({},Utils.getBoundingClientRect(e));return null!==e&&!t.config.legend.floating&&t.config.legend.show?this.lgRect={x:i.x,y:i.y,height:i.height,width:0===i.height?0:i.width}:this.lgRect={x:0,y:0,height:0,width:0},this.lgRect}}]),t}(),Series=function(){function t(e){_classCallCheck(this,t),this.ctx=e,this.w=e.w}return _createClass(t,[{key:"getAllSeriesEls",value:function(){return this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series")}},{key:"getSeriesByName",value:function(t){return this.w.globals.dom.baseEl.querySelector("[seriesName='".concat(Utils.escapeString(t),"']"))}},{key:"addCollapsedClassToSeries",value:function(t,e){var i=this.w;function s(i){for(var s=0;s<i.length;s++)i[s].index===e&&t.node.classList.add("apexcharts-series-collapsed")}s(i.globals.collapsedSeries),s(i.globals.ancillaryCollapsedSeries)}},{key:"resetSeries",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=this.w,i=e.globals.initialSeries.slice();e.config.series=i,e.globals.collapsedSeries=[],e.globals.ancillaryCollapsedSeries=[],e.globals.collapsedSeriesIndices=[],e.globals.ancillaryCollapsedSeriesIndices=[],e.globals.previousPaths=[],t&&this.ctx._updateSeries(i,e.config.chart.animations.dynamicAnimation.enabled)}},{key:"toggleSeriesOnHover",value:function(t,e){var i=this.w,s=i.globals.dom.baseEl.querySelectorAll(".apexcharts-series");if("mousemove"===t.type){var a=parseInt(e.getAttribute("rel"))-1,r=null;r=i.globals.axisCharts||"radialBar"===i.config.chart.type?i.globals.axisCharts?i.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(a,"']")):i.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(a+1,"']")):i.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(a+1,"'] path"));for(var n=0;n<s.length;n++)s[n].classList.add("legend-mouseover-inactive");null!==r&&(i.globals.axisCharts||r.parentNode.classList.remove("legend-mouseover-inactive"),r.classList.remove("legend-mouseover-inactive"))}else if("mouseout"===t.type)for(var o=0;o<s.length;o++)s[o].classList.remove("legend-mouseover-inactive")}},{key:"highlightRangeInSeries",value:function(t,e){var i=this.w,s=i.globals.dom.baseEl.querySelectorAll(".apexcharts-heatmap-rect"),a=function(){for(var t=0;t<s.length;t++)s[t].classList.remove("legend-mouseover-inactive")};if("mousemove"===t.type){var r=parseInt(e.getAttribute("rel"))-1;a(),function(){for(var t=0;t<s.length;t++)s[t].classList.add("legend-mouseover-inactive")}(),function(t){for(var e=0;e<s.length;e++){var i=parseInt(s[e].getAttribute("val"));i>=t.from&&i<=t.to&&s[e].classList.remove("legend-mouseover-inactive")}}(i.config.plotOptions.heatmap.colorScale.ranges[r])}else"mouseout"===t.type&&a()}},{key:"getActiveSeriesIndex",value:function(){var t=this.w,e=0;if(t.globals.series.length>1)for(var i=t.globals.series.map(function(e,i){return e.length>0&&"bar"!==t.config.series[i].type&&"column"!==t.config.series[i].type?i:-1}),s=0;s<i.length;s++)if(-1!==i[s]){e=i[s];break}return e}},{key:"getActiveConfigSeriesIndex",value:function(){var t=this.w,e=0;if(t.config.series.length>1)for(var i=t.config.series.map(function(t,e){return t.data&&t.data.length>0?e:-1}),s=0;s<i.length;s++)if(-1!==i[s]){e=i[s];break}return e}},{key:"getPreviousPaths",value:function(){var t=this.w;function e(e,i,s){for(var a=e[i].childNodes,r={type:s,paths:[],realIndex:e[i].getAttribute("data:realIndex")},n=0;n<a.length;n++)if(a[n].hasAttribute("pathTo")){var o=a[n].getAttribute("pathTo");r.paths.push({d:o})}t.globals.previousPaths.push(r)}t.globals.previousPaths=[];var i=t.globals.dom.baseEl.querySelectorAll(".apexcharts-line-series .apexcharts-series");if(i.length>0)for(var s=i.length-1;s>=0;s--)e(i,s,"line");var a=t.globals.dom.baseEl.querySelectorAll(".apexcharts-area-series .apexcharts-series");if(a.length>0)for(var r=a.length-1;r>=0;r--)e(a,r,"area");var n=t.globals.dom.baseEl.querySelectorAll(".apexcharts-bar-series .apexcharts-series");if(n.length>0)for(var o=0;o<n.length;o++)e(n,o,"bar");var l=t.globals.dom.baseEl.querySelectorAll(".apexcharts-candlestick-series .apexcharts-series");if(l.length>0)for(var h=0;h<l.length;h++)e(l,h,"candlestick");var c=t.globals.dom.baseEl.querySelectorAll(".apexcharts-radar-series .apexcharts-series");if(c.length>0)for(var d=0;d<c.length;d++)e(c,d,"radar");var u=t.globals.dom.baseEl.querySelectorAll(".apexcharts-bubble-series .apexcharts-series");if(u.length>0)for(var g=0;g<u.length;g++){for(var f=t.globals.dom.baseEl.querySelectorAll(".apexcharts-bubble-series .apexcharts-series[data\\:realIndex='".concat(g,"'] circle")),p=[],x=0;x<f.length;x++)p.push({x:f[x].getAttribute("cx"),y:f[x].getAttribute("cy"),r:f[x].getAttribute("r")});t.globals.previousPaths.push(p)}var m=t.globals.dom.baseEl.querySelectorAll(".apexcharts-scatter-series .apexcharts-series");if(m.length>0)for(var b=0;b<m.length;b++){for(var v=t.globals.dom.baseEl.querySelectorAll(".apexcharts-scatter-series .apexcharts-series[data\\:realIndex='".concat(b,"'] circle")),y=[],w=0;w<v.length;w++)y.push({x:v[w].getAttribute("cx"),y:v[w].getAttribute("cy"),r:v[w].getAttribute("r")});t.globals.previousPaths.push(y)}var k=t.globals.dom.baseEl.querySelectorAll(".apexcharts-heatmap .apexcharts-series");if(k.length>0)for(var A=0;A<k.length;A++){for(var S=t.globals.dom.baseEl.querySelectorAll(".apexcharts-heatmap .apexcharts-series[data\\:realIndex='".concat(A,"'] rect")),C=[],L=0;L<S.length;L++)C.push({color:S[L].getAttribute("color")});t.globals.previousPaths.push(C)}t.globals.axisCharts||(t.globals.previousPaths=t.globals.series)}},{key:"handleNoData",value:function(){var t=this.w,e=t.config.noData,i=new Graphics(this.ctx),s=t.globals.svgWidth/2,a=t.globals.svgHeight/2,r="middle";if(t.globals.noData=!0,t.globals.animationEnded=!0,"left"===e.align?(s=10,r="start"):"right"===e.align&&(s=t.globals.svgWidth-10,r="end"),"top"===e.verticalAlign?a=50:"bottom"===e.verticalAlign&&(a=t.globals.svgHeight-50),s+=e.offsetX,a=a+parseInt(e.style.fontSize)+2,void 0!==e.text&&""!==e.text){var n=i.drawText({x:s,y:a,text:e.text,textAnchor:r,fontSize:e.style.fontSize,fontFamily:e.style.fontFamily,foreColor:e.style.color,opacity:1,class:"apexcharts-text-nodata"});n.node.setAttribute("class","apexcharts-title-text"),t.globals.dom.Paper.add(n)}}},{key:"setNullSeriesToZeroValues",value:function(t){for(var e=this.w,i=0;i<t.length;i++)if(0===t[i].length)for(var s=0;s<t[e.globals.maxValsInArrayIndex].length;s++)t[i].push(0);return t}},{key:"hasAllSeriesEqualX",value:function(){for(var t=!0,e=this.w,i=this.filteredSeriesX(),s=0;s<i.length-1;s++)if(i[s][0]!==i[s+1][0]){t=!1;break}return e.globals.allSeriesHasEqualX=t,t}},{key:"filteredSeriesX",value:function(){var t=this.w.globals.seriesX.map(function(t,e){return t.length>0?t:[]});return t}}]),t}(),Legend=function(){function t(e,i){_classCallCheck(this,t),this.ctx=e,this.w=e.w,this.onLegendClick=this.onLegendClick.bind(this),this.onLegendHovered=this.onLegendHovered.bind(this)}return _createClass(t,[{key:"init",value:function(){var t=this.w,e=t.globals,i=t.config;if((i.legend.showForSingleSeries&&1===e.series.length||e.series.length>1||!e.axisCharts)&&i.legend.show){for(;e.dom.elLegendWrap.firstChild;)e.dom.elLegendWrap.removeChild(e.dom.elLegendWrap.firstChild);this.drawLegends(),Utils.isIE11()?document.getElementsByTagName("head")[0].appendChild(this.getLegendStyles()):this.appendToForeignObject(),"bottom"===i.legend.position||"top"===i.legend.position?this.legendAlignHorizontal():"right"!==i.legend.position&&"left"!==i.legend.position||this.legendAlignVertical()}}},{key:"appendToForeignObject",value:function(){var t=this.w.globals;t.dom.elLegendForeign=document.createElementNS(t.SVGNS,"foreignObject");var e=t.dom.elLegendForeign;e.setAttribute("x",0),e.setAttribute("y",0),e.setAttribute("width",t.svgWidth),e.setAttribute("height",t.svgHeight),t.dom.elLegendWrap.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),e.appendChild(t.dom.elLegendWrap),e.appendChild(this.getLegendStyles()),t.dom.Paper.node.insertBefore(e,t.dom.elGraphical.node)}},{key:"drawLegends",value:function(){var t=this.w,e=t.config.legend.fontFamily,i=t.globals.seriesNames,s=t.globals.colors.slice();if("heatmap"===t.config.chart.type){var a=t.config.plotOptions.heatmap.colorScale.ranges;i=a.map(function(t){return t.name?t.name:t.from+" - "+t.to}),s=a.map(function(t){return t.color})}for(var r=t.globals.legendFormatter,n=0;n<=i.length-1;n++){var o=r(i[n],{seriesIndex:n,w:t}),l=!1,h=!1;if(t.globals.collapsedSeries.length>0)for(var c=0;c<t.globals.collapsedSeries.length;c++)t.globals.collapsedSeries[c].index===n&&(l=!0);if(t.globals.ancillaryCollapsedSeriesIndices.length>0)for(var d=0;d<t.globals.ancillaryCollapsedSeriesIndices.length;d++)t.globals.ancillaryCollapsedSeriesIndices[d]===n&&(h=!0);var u=document.createElement("span");u.classList.add("apexcharts-legend-marker");var g=t.config.legend.markers.offsetX,f=t.config.legend.markers.offsetY,p=t.config.legend.markers.height,x=t.config.legend.markers.width,m=t.config.legend.markers.strokeWidth,b=t.config.legend.markers.strokeColor,v=t.config.legend.markers.radius,y=u.style;y.background=s[n],y.color=s[n],y.height=Array.isArray(p)?parseFloat(p[n])+"px":parseFloat(p)+"px",y.width=Array.isArray(x)?parseFloat(x[n])+"px":parseFloat(x)+"px",y.left=Array.isArray(g)?g[n]:g,y.top=Array.isArray(f)?f[n]:f,y.borderWidth=Array.isArray(m)?m[n]:m,y.borderColor=Array.isArray(b)?b[n]:b,y.borderRadius=Array.isArray(v)?parseFloat(v[n])+"px":parseFloat(v)+"px",t.config.legend.markers.customHTML&&(Array.isArray(t.config.legend.markers.customHTML)?u.innerHTML=t.config.legend.markers.customHTML[n]():u.innerHTML=t.config.legend.markers.customHTML()),Graphics.setAttrs(u,{rel:n+1,"data:collapsed":l||h}),(l||h)&&u.classList.add("inactive-legend");var w=document.createElement("div"),k=document.createElement("span");k.classList.add("apexcharts-legend-text"),k.innerHTML=o;var A=t.config.legend.labels.useSeriesColors?t.globals.colors[n]:t.config.legend.labels.colors;A||(A=t.config.chart.foreColor),k.style.color=A,k.style.fontSize=parseFloat(t.config.legend.fontSize)+"px",k.style.fontFamily=e||t.config.chart.fontFamily,Graphics.setAttrs(k,{rel:n+1,"data:collapsed":l||h}),w.appendChild(u),w.appendChild(k);var S=new CoreUtils(this.ctx);if(!t.config.legend.showForZeroSeries)0===S.getSeriesTotalByIndex(n)&&S.seriesHaveSameValues(n)&&!S.isSeriesNull(n)&&-1===t.globals.collapsedSeriesIndices.indexOf(n)&&-1===t.globals.ancillaryCollapsedSeriesIndices.indexOf(n)&&w.classList.add("apexcharts-hidden-zero-series");t.config.legend.showForNullSeries||S.isSeriesNull(n)&&-1===t.globals.collapsedSeriesIndices.indexOf(n)&&-1===t.globals.ancillaryCollapsedSeriesIndices.indexOf(n)&&w.classList.add("apexcharts-hidden-null-series"),t.globals.dom.elLegendWrap.appendChild(w),t.globals.dom.elLegendWrap.classList.add(t.config.legend.horizontalAlign),t.globals.dom.elLegendWrap.classList.add("position-"+t.config.legend.position),w.classList.add("apexcharts-legend-series"),w.style.margin="".concat(t.config.legend.itemMargin.horizontal,"px ").concat(t.config.legend.itemMargin.vertical,"px"),t.globals.dom.elLegendWrap.style.width=t.config.legend.width?t.config.legend.width+"px":"",t.globals.dom.elLegendWrap.style.height=t.config.legend.height?t.config.legend.height+"px":"",Graphics.setAttrs(w,{rel:n+1,"data:collapsed":l||h}),(l||h)&&w.classList.add("inactive-legend"),t.config.legend.onItemClick.toggleDataSeries||w.classList.add("no-click")}"heatmap"!==t.config.chart.type&&t.config.legend.onItemClick.toggleDataSeries&&t.globals.dom.elWrap.addEventListener("click",this.onLegendClick,!0),t.config.legend.onItemHover.highlightDataSeries&&(t.globals.dom.elWrap.addEventListener("mousemove",this.onLegendHovered,!0),t.globals.dom.elWrap.addEventListener("mouseout",this.onLegendHovered,!0))}},{key:"getLegendBBox",value:function(){var t=this.w.globals.dom.baseEl.querySelector(".apexcharts-legend").getBoundingClientRect(),e=t.width;return{clwh:t.height,clww:e}}},{key:"setLegendWrapXY",value:function(t,e){var i=this.w,s=i.globals.dom.baseEl.querySelector(".apexcharts-legend"),a=s.getBoundingClientRect(),r=0,n=0;if("bottom"===i.config.legend.position)n+=i.globals.svgHeight-a.height/2;else if("top"===i.config.legend.position){var o=new Dimensions(this.ctx),l=o.getTitleSubtitleCoords("title").height,h=o.getTitleSubtitleCoords("subtitle").height;n=n+(l>0?l-10:0)+(h>0?h-10:0)}s.style.position="absolute",r=r+t+i.config.legend.offsetX,n=n+e+i.config.legend.offsetY,s.style.left=r+"px",s.style.top=n+"px","bottom"===i.config.legend.position?(s.style.top="auto",s.style.bottom=10+i.config.legend.offsetY+"px"):"right"===i.config.legend.position&&(s.style.left="auto",s.style.right=25+i.config.legend.offsetX+"px"),s.style.width&&(s.style.width=parseInt(i.config.legend.width)+"px"),s.style.height&&(s.style.height=parseInt(i.config.legend.height)+"px")}},{key:"legendAlignHorizontal",value:function(){var t=this.w;t.globals.dom.baseEl.querySelector(".apexcharts-legend").style.right=0;var e=this.getLegendBBox(),i=new Dimensions(this.ctx),s=i.getTitleSubtitleCoords("title"),a=i.getTitleSubtitleCoords("subtitle"),r=0;"bottom"===t.config.legend.position?r=-e.clwh/1.8:"top"===t.config.legend.position&&(r=s.height+a.height+t.config.title.margin+t.config.subtitle.margin-15),this.setLegendWrapXY(20,r)}},{key:"legendAlignVertical",value:function(){var t=this.w,e=this.getLegendBBox(),i=0;"left"===t.config.legend.position&&(i=20),"right"===t.config.legend.position&&(i=t.globals.svgWidth-e.clww-10),this.setLegendWrapXY(i,20)}},{key:"onLegendHovered",value:function(t){var e=this.w,i=t.target.classList.contains("apexcharts-legend-text")||t.target.classList.contains("apexcharts-legend-marker");if("heatmap"!==e.config.chart.type)!t.target.classList.contains("inactive-legend")&&i&&new Series(this.ctx).toggleSeriesOnHover(t,t.target);else if(i){var s=parseInt(t.target.getAttribute("rel"))-1;this.ctx.fireEvent("legendHover",[this.ctx,s,this.w]),new Series(this.ctx).highlightRangeInSeries(t,t.target)}}},{key:"onLegendClick",value:function(t){if(t.target.classList.contains("apexcharts-legend-text")||t.target.classList.contains("apexcharts-legend-marker")){var e=parseInt(t.target.getAttribute("rel"))-1,i="true"===t.target.getAttribute("data:collapsed"),s=this.w.config.chart.events.legendClick;"function"==typeof s&&s(this.ctx,e,this.w),this.ctx.fireEvent("legendClick",[this.ctx,e,this.w]);var a=this.w.config.legend.markers.onClick;"function"==typeof a&&t.target.classList.contains("apexcharts-legend-marker")&&(a(this.ctx,e,this.w),this.ctx.fireEvent("legendMarkerClick",[this.ctx,e,this.w])),this.toggleDataSeries(e,i)}}},{key:"getLegendStyles",value:function(){var t=document.createElement("style");t.setAttribute("type","text/css");var e=document.createTextNode("\n    \n      .apexcharts-legend {\n        display: flex;\n        overflow: auto;\n        padding: 0 10px;\n      }\n\n      .apexcharts-legend.position-bottom, .apexcharts-legend.position-top {\n        flex-wrap: wrap\n      }\n      .apexcharts-legend.position-right, .apexcharts-legend.position-left {\n        flex-direction: column;\n        bottom: 0;\n      }\n\n      .apexcharts-legend.position-bottom.left, .apexcharts-legend.position-top.left, .apexcharts-legend.position-right, .apexcharts-legend.position-left {\n        justify-content: flex-start;\n      }\n\n      .apexcharts-legend.position-bottom.center, .apexcharts-legend.position-top.center {\n        justify-content: center;  \n      }\n\n      .apexcharts-legend.position-bottom.right, .apexcharts-legend.position-top.right {\n        justify-content: flex-end;\n      }\n\n      .apexcharts-legend-series {\n        cursor: pointer;\n        line-height: normal;\n      }\n\n      .apexcharts-legend.position-bottom .apexcharts-legend-series, .apexcharts-legend.position-top .apexcharts-legend-series{\n        display: flex;\n        align-items: center;\n      }\n\n      .apexcharts-legend-text {\n        position: relative;\n        font-size: 14px;\n      }\n\n      .apexcharts-legend-text *, .apexcharts-legend-marker * {\n        pointer-events: none;\n      }\n\n      .apexcharts-legend-marker {\n        position: relative;\n        display: inline-block;\n        cursor: pointer;\n        margin-right: 3px;\n      }\n      \n      .apexcharts-legend.right .apexcharts-legend-series, .apexcharts-legend.left .apexcharts-legend-series{\n        display: inline-block;\n      }\n\n      .apexcharts-legend-series.no-click {\n        cursor: auto;\n      }\n\n      .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {\n        display: none !important;\n      }\n\n      .inactive-legend {\n        opacity: 0.45;\n      }");return t.appendChild(e),t}},{key:"toggleDataSeries",value:function(t,e){var i=this.w;if(i.globals.axisCharts||"radialBar"===i.config.chart.type){i.globals.resized=!0;var s=null,a=null;if(i.globals.risingSeries=[],i.globals.axisCharts?(s=i.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(t,"']")),a=parseInt(s.getAttribute("data:realIndex"))):(s=i.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(t+1,"']")),a=parseInt(s.getAttribute("rel"))-1),e)this.riseCollapsedSeries(i.globals.collapsedSeries,i.globals.collapsedSeriesIndices,a),this.riseCollapsedSeries(i.globals.ancillaryCollapsedSeries,i.globals.ancillaryCollapsedSeriesIndices,a);else{if(i.globals.axisCharts){var r=!1;if(i.config.yaxis[a]&&i.config.yaxis[a].show&&i.config.yaxis[a].showAlways&&(r=!0,i.globals.ancillaryCollapsedSeriesIndices.indexOf(a)<0&&(i.globals.ancillaryCollapsedSeries.push({index:a,data:i.config.series[a].data.slice(),type:s.parentNode.className.baseVal.split("-")[1]}),i.globals.ancillaryCollapsedSeriesIndices.push(a))),!r){i.globals.collapsedSeries.push({index:a,data:i.config.series[a].data.slice(),type:s.parentNode.className.baseVal.split("-")[1]}),i.globals.collapsedSeriesIndices.push(a);var n=i.globals.risingSeries.indexOf(a);i.globals.risingSeries.splice(n,1)}i.config.series[a].data=[]}else i.globals.collapsedSeries.push({index:a,data:i.config.series[a]}),i.globals.collapsedSeriesIndices.push(a),i.config.series[a]=0;for(var o=s.childNodes,l=0;l<o.length;l++)o[l].classList.contains("apexcharts-series-markers-wrap")&&(o[l].classList.contains("apexcharts-hide")?o[l].classList.remove("apexcharts-hide"):o[l].classList.add("apexcharts-hide"));i.globals.allSeriesCollapsed=i.globals.collapsedSeries.length===i.globals.series.length,this.ctx._updateSeries(i.config.series,i.config.chart.animations.dynamicAnimation.enabled)}}else{var h=i.globals.dom.Paper.select(" .apexcharts-series[rel='".concat(t+1,"'] path")),c=i.config.chart.type;if("pie"===c||"donut"===c){var d=i.config.plotOptions.pie.donut.labels,u=new Graphics(this.ctx),g=new Pie(this.ctx);u.pathMouseDown(h.members[0],null),g.printDataLabelsInner(h.members[0].node,d)}h.fire("click")}}},{key:"riseCollapsedSeries",value:function(t,e,i){var s=this.w;if(t.length>0)for(var a=0;a<t.length;a++)t[a].index===i&&(s.globals.axisCharts?(s.config.series[i].data=t[a].data.slice(),t.splice(a,1),e.splice(a,1),s.globals.risingSeries.push(i)):(s.config.series[i]=t[a].data,t.splice(a,1),e.splice(a,1),s.globals.risingSeries.push(i)),this.ctx._updateSeries(s.config.series,s.config.chart.animations.dynamicAnimation.enabled))}}]),t}(),Line=function(){function t(e,i,s){_classCallCheck(this,t),this.ctx=e,this.w=e.w,this.xyRatios=i,this.pointsChart=!("bubble"!==this.w.config.chart.type&&"scatter"!==this.w.config.chart.type)||s,this.scatter=new Scatter(this.ctx),this.noNegatives=this.w.globals.minX===Number.MAX_VALUE,this.yaxisIndex=0}return _createClass(t,[{key:"draw",value:function(t,e,i){var s=this.w,a=new Graphics(this.ctx),r=new Fill(this.ctx),n=s.globals.comboCharts?e:s.config.chart.type,o=a.group({class:"apexcharts-".concat(n,"-series apexcharts-plot-series")}),l=new CoreUtils(this.ctx,s);t=l.getLogSeries(t);var h=this.xyRatios.yRatio;h=l.getLogYRatios(h);for(var c=this.xyRatios.zRatio,d=this.xyRatios.xRatio,u=this.xyRatios.baseLineY,g=[],f=[],p=0,x=0;x<t.length;x++){if("line"===n&&("gradient"===s.config.fill.type||"gradient"===s.config.fill.type[x])&&l.seriesHaveSameValues(x)){var m=t[x].slice();m[m.length-1]=m[m.length-1]+1e-6,t[x]=m}var b=s.globals.gridWidth/s.globals.dataPoints,v=s.globals.comboCharts?i[x]:x;h.length>1&&(this.yaxisIndex=v),this.isReversed=s.config.yaxis[this.yaxisIndex]&&s.config.yaxis[this.yaxisIndex].reversed;var y=[],w=[],k=s.globals.gridHeight-u[this.yaxisIndex]-(this.isReversed?s.globals.gridHeight:0)+(this.isReversed?2*u[this.yaxisIndex]:0),A=k;k>s.globals.gridHeight&&(A=s.globals.gridHeight),p=b/2;var S=s.globals.padHorizontal+p,C=1;s.globals.isXNumeric&&s.globals.seriesX.length>0&&(S=(s.globals.seriesX[v][0]-s.globals.minX)/d),w.push(S);var L=void 0,P=void 0,z=void 0,T=void 0,M=[],E=[],X=a.group({class:"apexcharts-series",seriesName:Utils.escapeString(s.globals.seriesNames[v])}),I=a.group({class:"apexcharts-series-markers-wrap"}),Y=a.group({class:"apexcharts-datalabels"});this.ctx.series.addCollapsedClassToSeries(X,v);var F=t[x].length===s.globals.dataPoints;X.attr({"data:longestSeries":F,rel:x+1,"data:realIndex":v}),this.appendPathFrom=!0;var R=S,D=void 0,N=R,O=k,_=0;if(O=this.determineFirstPrevY({i:x,series:t,yRatio:h[this.yaxisIndex],zeroY:k,prevY:O,prevSeriesY:f,lineYPosition:_}).prevY,y.push(O),D=O,null===t[x][0]){for(var H=0;H<t[x].length;H++)if(null!==t[x][H]){N=b*H,O=k-t[x][H]/h[this.yaxisIndex],L=a.move(N,O),P=a.move(N,A);break}}else L=a.move(N,O),P=a.move(N,A)+a.line(N,O);if(z=a.move(-1,k)+a.line(-1,k),T=a.move(-1,k)+a.line(-1,k),s.globals.previousPaths.length>0){var W=this.checkPreviousPaths({pathFromLine:z,pathFromArea:T,realIndex:v});z=W.pathFromLine,T=W.pathFromArea}for(var G=s.globals.dataPoints>1?s.globals.dataPoints-1:s.globals.dataPoints,B=0;B<G;B++){if(s.globals.isXNumeric){var V=s.globals.seriesX[v][B+1];void 0===s.globals.seriesX[v][B+1]&&(V=s.globals.seriesX[v][G-1]),S=(V-s.globals.minX)/d}else S+=b;var U=Utils.isNumber(s.globals.minYArr[v])?s.globals.minYArr[v]:s.globals.minY;s.config.chart.stacked?(_=x>0&&s.globals.collapsedSeries.length<s.config.series.length-1?f[x-1][B+1]:k,C=void 0===t[x][B+1]||null===t[x][B+1]?_-U/h[this.yaxisIndex]+2*(this.isReversed?U/h[this.yaxisIndex]:0):_-t[x][B+1]/h[this.yaxisIndex]+2*(this.isReversed?t[x][B+1]/h[this.yaxisIndex]:0)):C=void 0===t[x][B+1]||null===t[x][B+1]?k-U/h[this.yaxisIndex]+2*(this.isReversed?U/h[this.yaxisIndex]:0):k-t[x][B+1]/h[this.yaxisIndex]+2*(this.isReversed?t[x][B+1]/h[this.yaxisIndex]:0),w.push(S),y.push(C);var j=this.createPaths({series:t,i:x,j:B,x:S,y:C,xDivision:b,pX:R,pY:D,areaBottomY:A,linePath:L,areaPath:P,linePaths:M,areaPaths:E,seriesIndex:i});E=j.areaPaths,M=j.linePaths,R=j.pX,D=j.pY,P=j.areaPath,L=j.linePath,this.appendPathFrom&&(z+=a.line(S,k),T+=a.line(S,k));var q=this.calculatePoints({series:t,x:S,y:C,realIndex:v,i:x,j:B,prevY:O,categoryAxisCorrection:p,xRatio:d});if(this.pointsChart)this.scatter.draw(X,B,{realIndex:v,pointsPos:q,zRatio:c,elParent:I});else{var Z=new Markers(this.ctx);s.globals.dataPoints>1&&I.node.classList.add("hidden");var $=Z.plotChartMarkers(q,v,B+1);null!==$&&I.add($)}var J=!t[x][B+1]||t[x][B+1]>t[x][B]?"top":"bottom",Q=new DataLabels(this.ctx).drawDataLabel(q,v,B+1,null,J);null!==Q&&Y.add(Q)}f.push(y),s.globals.seriesXvalues[v]=w,s.globals.seriesYvalues[v]=y,this.pointsChart||s.globals.delayedElements.push({el:I.node,index:v});var K={i:x,realIndex:v,animationDelay:x,initialSpeed:s.config.chart.animations.speed,dataChangeSpeed:s.config.chart.animations.dynamicAnimation.speed,className:"apexcharts-".concat(n)};if("area"===n)for(var tt=r.fillPath({seriesNumber:v}),et=0;et<E.length;et++){var it=a.renderPaths(_objectSpread({},K,{pathFrom:T,pathTo:E[et],stroke:"none",strokeWidth:0,strokeLineCap:null,fill:tt}));X.add(it)}if(s.config.stroke.show&&!this.pointsChart){var st=null;st="line"===n?r.fillPath({seriesNumber:v,i:x}):s.globals.stroke.colors[v];for(var at=0;at<M.length;at++){var rt=a.renderPaths(_objectSpread({},K,{pathFrom:z,pathTo:M[at],stroke:st,strokeWidth:Array.isArray(s.config.stroke.width)?s.config.stroke.width[v]:s.config.stroke.width,strokeLineCap:s.config.stroke.lineCap,fill:"none"}));X.add(rt)}}X.add(I),X.add(Y),g.push(X)}for(var nt=g.length;nt>0;nt--)o.add(g[nt-1]);return o}},{key:"createPaths",value:function(t){var e=t.series,i=t.i,s=t.j,a=t.x,r=t.y,n=t.pX,o=t.pY,l=t.xDivision,h=t.areaBottomY,c=t.linePath,d=t.areaPath,u=t.linePaths,g=t.areaPaths,f=t.seriesIndex,p=this.w,x=new Graphics(this.ctx),m=p.config.stroke.curve;if(Array.isArray(p.config.stroke.curve)&&(m=Array.isArray(f)?p.config.stroke.curve[f[i]]:p.config.stroke.curve[i]),"smooth"===m){var b=.35*(a-n);p.globals.hasNullValues?(null!==e[i][s]&&(null!==e[i][s+1]?(c=x.move(n,o)+x.curve(n+b,o,a-b,r,a+1,r),d=x.move(n+1,o)+x.curve(n+b,o,a-b,r,a+1,r)+x.line(a,h)+x.line(n,h)+"z"):(c=x.move(n,o),d=x.move(n,o)+"z")),u.push(c),g.push(d)):(c+=x.curve(n+b,o,a-b,r,a,r),d+=x.curve(n+b,o,a-b,r,a,r)),n=a,o=r,s===e[i].length-2&&(d=d+x.curve(n,o,a,r,a,h)+x.move(a,r)+"z",p.globals.hasNullValues||(u.push(c),g.push(d)))}else null===e[i][s+1]&&(c+=x.move(a,r),d=d+x.line(a-l,h)+x.move(a,r)),null===e[i][s]&&(c+=x.move(a,r),d+=x.move(a,h)),"stepline"===m?(c=c+x.line(a,null,"H")+x.line(null,r,"V"),d=d+x.line(a,null,"H")+x.line(null,r,"V")):"straight"===m&&(c+=x.line(a,r),d+=x.line(a,r)),s===e[i].length-2&&(d=d+x.line(a,h)+x.move(a,r)+"z",u.push(c),g.push(d));return{linePaths:u,areaPaths:g,pX:n,pY:o,linePath:c,areaPath:d}}},{key:"calculatePoints",value:function(t){var e=t.series,i=t.realIndex,s=t.x,a=t.y,r=t.i,n=t.j,o=t.prevY,l=t.categoryAxisCorrection,h=t.xRatio,c=this.w,d=[],u=[];if(0===n){var g=l+c.config.markers.offsetX;c.globals.isXNumeric&&(g=(c.globals.seriesX[i][0]-c.globals.minX)/h+c.config.markers.offsetX),d.push(g),u.push(Utils.isNumber(e[r][0])?o+c.config.markers.offsetY:null),d.push(s+c.config.markers.offsetX),u.push(Utils.isNumber(e[r][n+1])?a+c.config.markers.offsetY:null)}else d.push(s+c.config.markers.offsetX),u.push(Utils.isNumber(e[r][n+1])?a+c.config.markers.offsetY:null);return{x:d,y:u}}},{key:"checkPreviousPaths",value:function(t){for(var e=t.pathFromLine,i=t.pathFromArea,s=t.realIndex,a=this.w,r=0;r<a.globals.previousPaths.length;r++){var n=a.globals.previousPaths[r];("line"===n.type||"area"===n.type)&&n.paths.length>0&&parseInt(n.realIndex)===parseInt(s)&&("line"===n.type?(this.appendPathFrom=!1,e=a.globals.previousPaths[r].paths[0].d):"area"===n.type&&(this.appendPathFrom=!1,i=a.globals.previousPaths[r].paths[0].d,a.config.stroke.show&&(e=a.globals.previousPaths[r].paths[1].d)))}return{pathFromLine:e,pathFromArea:i}}},{key:"determineFirstPrevY",value:function(t){var e=t.i,i=t.series,s=t.yRatio,a=t.zeroY,r=t.prevY,n=t.prevSeriesY,o=t.lineYPosition,l=this.w;if(void 0!==i[e][0])r=l.config.chart.stacked?(o=e>0?n[e-1][0]:a)-i[e][0]/s+2*(this.isReversed?i[e][0]/s:0):a-i[e][0]/s+2*(this.isReversed?i[e][0]/s:0);else if(l.config.chart.stacked&&e>0&&void 0===i[e][0])for(var h=e-1;h>=0;h--)if(null!==i[h][0]&&void 0!==i[h][0]){r=o=n[h][0];break}return{prevY:r,lineYPosition:o}}}]),t}(),XAxis=function(){function t(e){_classCallCheck(this,t),this.ctx=e,this.w=e.w;var i=this.w;this.xaxisLabels=i.globals.labels.slice(),i.globals.timelineLabels.length>0&&(this.xaxisLabels=i.globals.timelineLabels.slice()),this.drawnLabels=[],"top"===i.config.xaxis.position?this.offY=0:this.offY=i.globals.gridHeight+1,this.offY=this.offY+i.config.xaxis.axisBorder.offsetY,this.xaxisFontSize=i.config.xaxis.labels.style.fontSize,this.xaxisFontFamily=i.config.xaxis.labels.style.fontFamily,this.xaxisForeColors=i.config.xaxis.labels.style.colors,this.xaxisBorderWidth=i.config.xaxis.axisBorder.width,this.xaxisBorderWidth.indexOf("%")>-1?this.xaxisBorderWidth=i.globals.gridWidth*parseInt(this.xaxisBorderWidth)/100:this.xaxisBorderWidth=parseInt(this.xaxisBorderWidth),this.xaxisBorderHeight=i.config.xaxis.axisBorder.height,this.yaxis=i.config.yaxis[0],this.axesUtils=new AxesUtils(e)}return _createClass(t,[{key:"drawXaxis",value:function(){var t,e=this.w,i=new Graphics(this.ctx),s=i.group({class:"apexcharts-xaxis",transform:"translate(".concat(e.config.xaxis.offsetX,", ").concat(e.config.xaxis.offsetY,")")}),a=i.group({class:"apexcharts-xaxis-texts-g",transform:"translate(".concat(e.globals.translateXAxisX,", ").concat(e.globals.translateXAxisY,")")});s.add(a);for(var r=e.globals.padHorizontal,n=[],o=0;o<this.xaxisLabels.length;o++)n.push(this.xaxisLabels[o]);r=e.globals.isXNumeric?r+(t=e.globals.gridWidth/(n.length-1))/2+e.config.xaxis.labels.offsetX:r+(t=e.globals.gridWidth/n.length)+e.config.xaxis.labels.offsetX;var l=n.length;if(e.config.xaxis.labels.show)for(var h=0;h<=l-1;h++){var c=r-t/2+e.config.xaxis.labels.offsetX,d=this.axesUtils.getLabel(n,e.globals.timelineLabels,c,h,this.drawnLabels);this.drawnLabels.push(d.text);var u=28;e.globals.rotateXLabels&&(u=22);var g=i.drawText({x:d.x,y:this.offY+e.config.xaxis.labels.offsetY+u,text:"",textAnchor:"middle",fontWeight:d.isBold?600:400,fontSize:this.xaxisFontSize,fontFamily:this.xaxisFontFamily,foreColor:Array.isArray(this.xaxisForeColors)?this.xaxisForeColors[h]:this.xaxisForeColors,cssClass:"apexcharts-xaxis-label "+e.config.xaxis.labels.style.cssClass});h===l-1&&e.globals.skipLastTimelinelabel&&(d.text=""),a.add(g),i.addTspan(g,d.text,this.xaxisFontFamily);var f=document.createElementNS(e.globals.SVGNS,"title");f.textContent=d.text,g.node.appendChild(f),r+=t}if(void 0!==e.config.xaxis.title.text){var p=i.group({class:"apexcharts-xaxis-title"}),x=i.drawText({x:e.globals.gridWidth/2+e.config.xaxis.title.offsetX,y:this.offY-parseInt(this.xaxisFontSize)+e.globals.xAxisLabelsHeight+e.config.xaxis.title.offsetY,text:e.config.xaxis.title.text,textAnchor:"middle",fontSize:e.config.xaxis.title.style.fontSize,fontFamily:e.config.xaxis.title.style.fontFamily,foreColor:e.config.xaxis.title.style.color,cssClass:"apexcharts-xaxis-title-text "+e.config.xaxis.title.style.cssClass});p.add(x),s.add(p)}if(e.config.xaxis.axisBorder.show){var m=0;"bar"===e.config.chart.type&&e.globals.isXNumeric&&(m-=15);var b=i.drawLine(e.globals.padHorizontal+m+e.config.xaxis.axisBorder.offsetX,this.offY,this.xaxisBorderWidth,this.offY,e.config.xaxis.axisBorder.color,0,this.xaxisBorderHeight);s.add(b)}return s}},{key:"drawXaxisInversed",value:function(t){var e,i,s=this.w,a=new Graphics(this.ctx),r=s.config.yaxis[0].opposite?s.globals.translateYAxisX[t]:0,n=a.group({class:"apexcharts-yaxis apexcharts-xaxis-inversed",rel:t}),o=a.group({class:"apexcharts-yaxis-texts-g apexcharts-xaxis-inversed-texts-g",transform:"translate("+r+", 0)"});n.add(o);for(var l=[],h=0;h<this.xaxisLabels.length;h++)l.push(this.xaxisLabels[h]);i=-(e=s.globals.gridHeight/l.length)/2.2;var c=s.globals.yLabelFormatters[0],d=s.config.yaxis[0].labels;if(d.show)for(var u=0;u<=l.length-1;u++){var g=void 0===l[u]?"":l[u];g=c(g);var f=a.drawText({x:d.offsetX-15,y:i+e+d.offsetY,text:g,textAnchor:this.yaxis.opposite?"start":"end",foreColor:d.style.color?d.style.color:d.style.colors[u],fontSize:d.style.fontSize,fontFamily:d.style.fontFamily,cssClass:"apexcharts-yaxis-label "+d.style.cssClass});if(o.add(f),0!==s.config.yaxis[t].labels.rotate){var p=a.rotateAroundCenter(f.node);f.node.setAttribute("transform","rotate(".concat(s.config.yaxis[t].labels.rotate," ").concat(p.x," ").concat(p.y,")"))}i+=e}if(void 0!==s.config.yaxis[0].title.text){var x=a.group({class:"apexcharts-yaxis-title apexcharts-xaxis-title-inversed",transform:"translate("+r+", 0)"}),m=a.drawText({x:0,y:s.globals.gridHeight/2,text:s.config.yaxis[0].title.text,textAnchor:"middle",foreColor:s.config.yaxis[0].title.style.color,fontSize:s.config.yaxis[0].title.style.fontSize,fontFamily:s.config.yaxis[0].title.style.fontFamily,cssClass:"apexcharts-yaxis-title-text "+s.config.yaxis[0].title.style.cssClass});x.add(m),n.add(x)}if(s.config.xaxis.axisBorder.show){var b=a.drawLine(s.globals.padHorizontal+s.config.xaxis.axisBorder.offsetX,this.offY,this.xaxisBorderWidth,this.offY,this.yaxis.axisBorder.color,0,this.xaxisBorderHeight);n.add(b),this.axesUtils.drawYAxisTicks(0,l.length,s.config.yaxis[0].axisBorder,s.config.yaxis[0].axisTicks,0,e,n)}return n}},{key:"drawXaxisTicks",value:function(t,e){var i=this.w,s=t;if(!(t<0||t>i.globals.gridWidth)){var a=this.offY+i.config.xaxis.axisTicks.offsetY,r=a+i.config.xaxis.axisTicks.height;if(i.config.xaxis.axisTicks.show){var n=new Graphics(this.ctx).drawLine(t+i.config.xaxis.axisTicks.offsetX,a+i.config.xaxis.offsetY,s+i.config.xaxis.axisTicks.offsetX,r+i.config.xaxis.offsetY,i.config.xaxis.axisTicks.color);e.add(n),n.node.classList.add("apexcharts-xaxis-tick")}}}},{key:"getXAxisTicksPositions",value:function(){var t=this.w,e=[],i=this.xaxisLabels.length,s=t.globals.padHorizontal;if(t.globals.timelineLabels.length>0)for(var a=0;a<i;a++)s=this.xaxisLabels[a].position,e.push(s);else for(var r=i,n=0;n<r;n++){var o=r;t.globals.isXNumeric&&"bar"!==t.config.chart.type&&(o-=1),s+=t.globals.gridWidth/o,e.push(s)}return e}},{key:"xAxisLabelCorrections",value:function(){var t=this.w,e=new Graphics(this.ctx),i=t.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g"),s=t.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-texts-g text"),a=t.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-inversed text"),r=t.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-inversed-texts-g text");if(t.globals.rotateXLabels||t.config.xaxis.labels.rotateAlways)for(var n=0;n<s.length;n++){var o=e.rotateAroundCenter(s[n]);o.y=o.y-1,o.x=o.x+1,s[n].setAttribute("transform","rotate(".concat(t.config.xaxis.labels.rotate," ").concat(o.x," ").concat(o.y,")")),s[n].setAttribute("text-anchor","end");i.setAttribute("transform","translate(0, ".concat(-10,")"));var l=s[n].childNodes;t.config.xaxis.labels.trim&&e.placeTextWithEllipsis(l[0],l[0].textContent,t.config.xaxis.labels.maxHeight-40)}else for(var h=t.globals.gridWidth/t.globals.labels.length,c=0;c<s.length;c++){var d=s[c].childNodes;t.config.xaxis.labels.trim&&"datetime"!==t.config.xaxis.type&&e.placeTextWithEllipsis(d[0],d[0].textContent,h)}if(a.length>0){var u=a[a.length-1].getBBox(),g=a[0].getBBox();u.x<-20&&a[a.length-1].parentNode.removeChild(a[a.length-1]),g.x+g.width>t.globals.gridWidth&&a[0].parentNode.removeChild(a[0]);for(var f=0;f<r.length;f++)e.placeTextWithEllipsis(r[f],r[f].textContent,t.config.yaxis[0].labels.maxWidth-2*parseInt(t.config.yaxis[0].title.style.fontSize)-20)}}}]),t}(),Range=function(){function t(e){_classCallCheck(this,t),this.ctx=e,this.w=e.w}return _createClass(t,[{key:"niceScale",value:function(t,e,i){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:10,r=this.w,n=void 0===this.w.config.yaxis[s].max&&void 0===this.w.config.yaxis[s].min||this.w.config.yaxis[s].forceNiceScale;if(t===Number.MIN_VALUE&&0===e||!Utils.isNumber(t)&&!Utils.isNumber(e)||t===Number.MIN_VALUE&&e===-Number.MAX_VALUE)return t=0,e=a,this.linearScale(t,e,a);t>e?(console.warn("yaxis.min cannot be greater than yaxis.max"),e=t+.1):t===e&&(t=0===t?0:t-.5,e=0===e?2:e+.5);var o=[],l=Math.abs(e-t);l<1&&n&&("candlestick"===r.config.chart.type||"candlestick"===r.config.series[s].type||r.globals.isRangeData)&&(e*=1.01);var h=a+1;h<2?h=2:h>2&&(h-=2);var c=l/h,d=Math.floor(Utils.log10(c)),u=Math.pow(10,d),g=Math.round(c/u);g<1&&(g=1);var f=g*u,p=f*Math.floor(t/f),x=f*Math.ceil(e/f),m=p;if(n){for(;o.push(m),!((m+=f)>x););return{result:o,niceMin:o[0],niceMax:o[o.length-1]}}var b=t;(o=[]).push(b);for(var v=Math.abs(e-t)/a,y=0;y<=a;y++)b+=v,o.push(b);return o[o.length-2]>=e&&o.pop(),{result:o,niceMin:o[0],niceMax:o[o.length-1]}}},{key:"linearScale",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,s=Math.abs(e-t)/i;i===Number.MAX_VALUE&&(i=10,s=1);for(var a=[],r=t;i>=0;)a.push(r),r+=s,i-=1;return{result:a,niceMin:a[0],niceMax:a[a.length-1]}}},{key:"logarithmicScale",value:function(t,e,i,s){(e<0||e===Number.MIN_VALUE)&&(e=.01);for(var a=Math.log(e)/Math.log(10),r=Math.log(i)/Math.log(10),n=Math.abs(i-e)/s,o=[],l=e;s>=0;)o.push(l),l+=n,s-=1;var h=o.map(function(t,s){t<=0&&(t=.01);var n=(r-a)/(i-e),o=Math.pow(10,a+n*(t-a));return Math.round(o/Utils.roundToBase(o,10))*Utils.roundToBase(o,10)});return 0===h[0]&&(h[0]=1),{result:h,niceMin:h[0],niceMax:h[h.length-1]}}},{key:"setYScaleForIndex",value:function(t,e,i){var s=this.w.globals,a=this.w.config,r=s.isBarHorizontal?a.xaxis:a.yaxis[t];if(void 0===s.yAxisScale[t]&&(s.yAxisScale[t]=[]),r.logarithmic)s.allSeriesCollapsed=!1,s.yAxisScale[t]=this.logarithmicScale(t,e,i,r.tickAmount?r.tickAmount:Math.floor(Math.log10(i)));else if(i!==-Number.MAX_VALUE&&Utils.isNumber(i))if(s.allSeriesCollapsed=!1,void 0===r.min&&void 0===r.max||r.forceNiceScale){var n=Math.abs(i-e);s.yAxisScale[t]=this.niceScale(e,i,n,t,r.tickAmount?r.tickAmount:n<5&&n>1?n+1:5)}else s.yAxisScale[t]=this.linearScale(e,i,r.tickAmount);else s.yAxisScale[t]=this.linearScale(0,5,5)}},{key:"setMultipleYScales",value:function(){var t=this,e=this.w.globals,i=this.w.config,s=e.minYArr.concat([]),a=e.maxYArr.concat([]),r=[];i.yaxis.forEach(function(n,o){var l=o;i.series.forEach(function(t,i){t.name===n.seriesName&&-1===e.collapsedSeriesIndices.indexOf(i)&&(l=i,o!==i?r.push({index:i,similarIndex:o,alreadyExists:!0}):r.push({index:i}))});var h=s[l],c=a[l];t.setYScaleForIndex(o,h,c)}),this.sameScaleInMultipleAxes(s,a,r)}},{key:"sameScaleInMultipleAxes",value:function(t,e,i){var s=this,a=this.w.config,r=this.w.globals,n=[];i.forEach(function(t){t.alreadyExists&&(void 0===n[t.index]&&(n[t.index]=[]),n[t.index].push(t.index),n[t.index].push(t.similarIndex))}),r.yAxisSameScaleIndices=n,n.forEach(function(t,e){n.forEach(function(i,s){var a,r;e!==s&&(a=t,r=i,a.filter(function(t){return-1!==r.indexOf(t)})).length>0&&(n[e]=n[e].concat(n[s]))})});var o=n.map(function(t){return t.filter(function(e,i){return t.indexOf(e)===i})}).map(function(t){return t.sort()});n=n.filter(function(t){return!!t});var l=o.slice(),h=l.map(function(t){return JSON.stringify(t)});l=l.filter(function(t,e){return h.indexOf(JSON.stringify(t))===e});var c=[],d=[];t.forEach(function(t,i){l.forEach(function(s,a){s.indexOf(i)>-1&&(void 0===c[a]&&(c[a]=[],d[a]=[]),c[a].push({key:i,value:t}),d[a].push({key:i,value:e[i]}))})});var u=Array.apply(null,Array(l.length)).map(Number.prototype.valueOf,Number.MIN_VALUE),g=Array.apply(null,Array(l.length)).map(Number.prototype.valueOf,-Number.MAX_VALUE);c.forEach(function(t,e){t.forEach(function(t,i){u[e]=Math.min(t.value,u[e])})}),d.forEach(function(t,e){t.forEach(function(t,i){g[e]=Math.max(t.value,g[e])})}),t.forEach(function(t,e){d.forEach(function(t,i){var n=u[i],o=g[i];a.chart.stacked&&(o=0,t.forEach(function(t,e){o+=t.value,n!==Number.MIN_VALUE&&(n+=c[i][e].value)})),t.forEach(function(i,l){t[l].key===e&&(void 0!==a.yaxis[e].min&&(n="function"==typeof a.yaxis[e].min?a.yaxis[e].min(r.minY):a.yaxis[e].min),void 0!==a.yaxis[e].max&&(o="function"==typeof a.yaxis[e].max?a.yaxis[e].max(r.maxY):a.yaxis[e].max),s.setYScaleForIndex(e,n,o))})})})}},{key:"autoScaleY",value:function(t,e,i){t||(t=this);var s=t.w;if(s.globals.isMultipleYAxis||s.globals.collapsedSeries.length)return e;var a=s.globals.seriesX[0],r=s.config.chart.stacked;return e.forEach(function(t,n){for(var o=0,l=0;l<a.length;l++)if(a[l]>=i.xaxis.min){o=l;break}var h,c,d=s.globals.minYArr[n],u=s.globals.maxYArr[n],g=s.globals.stackedSeriesTotals;s.globals.series.forEach(function(n,l){var f=n[o];r?(f=g[o],h=c=f,g.forEach(function(t,e){a[e]<=i.xaxis.max&&a[e]>=i.xaxis.min&&(t>c&&null!==t&&(c=t),n[e]<h&&null!==n[e]&&(h=n[e]))})):(h=c=f,n.forEach(function(t,e){if(a[e]<=i.xaxis.max&&a[e]>=i.xaxis.min){var r=t,n=t;s.globals.series.forEach(function(i,s){null!==t&&(r=Math.min(i[e],r),n=Math.max(i[e],n))}),n>c&&null!==n&&(c=n),r<h&&null!==r&&(h=r)}})),void 0===h&&void 0===c&&(h=d,c=u),(c*=c<0?.9:1.1)<0&&c<u&&(c=u),(h*=h<0?1.1:.9)<0&&h>d&&(h=d),e.length>1?(e[l].min=void 0===t.min?h:t.min,e[l].max=void 0===t.max?c:t.max):(e[0].min=void 0===t.min?h:t.min,e[0].max=void 0===t.max?c:t.max)})}),e}}]),t}(),Range$1=function(){function t(e){_classCallCheck(this,t),this.ctx=e,this.w=e.w,this.scales=new Range(e)}return _createClass(t,[{key:"init",value:function(){this.setYRange(),this.setXRange(),this.setZRange()}},{key:"getMinYMaxY",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number.MAX_VALUE,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-Number.MAX_VALUE,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,a=this.w.globals,r=-Number.MAX_VALUE,n=Number.MIN_VALUE;null===s&&(s=t+1);var o=a.series,l=o,h=o;"candlestick"===this.w.config.chart.type?(l=a.seriesCandleL,h=a.seriesCandleH):a.isRangeData&&(l=a.seriesRangeStart,h=a.seriesRangeEnd);for(var c=t;c<s;c++){a.dataPoints=Math.max(a.dataPoints,o[c].length);for(var d=0;d<a.series[c].length;d++){var u=o[c][d];null!==u&&Utils.isNumber(u)?(r=Math.max(r,h[c][d]),e=Math.min(e,l[c][d]),i=Math.max(i,l[c][d]),"candlestick"===this.w.config.chart.type&&(r=Math.max(r,a.seriesCandleO[c][d]),r=Math.max(r,a.seriesCandleH[c][d]),r=Math.max(r,a.seriesCandleL[c][d]),i=r=Math.max(r,a.seriesCandleC[c][d])),Utils.isFloat(u)&&(u=Utils.noExponents(u),a.yValueDecimal=Math.max(a.yValueDecimal,u.toString().split(".")[1].length)),n>l[c][d]&&l[c][d]<0&&(n=l[c][d])):a.hasNullValues=!0}}return{minY:n,maxY:r,lowestY:e,highestY:i}}},{key:"setYRange",value:function(){var t=this.w.globals,e=this.w.config;t.maxY=-Number.MAX_VALUE,t.minY=Number.MIN_VALUE;var i=Number.MAX_VALUE;if(t.isMultipleYAxis)for(var s=0;s<t.series.length;s++){var a=this.getMinYMaxY(s,i,null,s+1);t.minYArr.push(a.minY),t.maxYArr.push(a.maxY),i=a.lowestY}var r=this.getMinYMaxY(0,i,null,t.series.length);if(t.minY=r.minY,t.maxY=r.maxY,i=r.lowestY,e.chart.stacked){var n=[],o=[];if(t.series.length)for(var l=0;l<t.series[t.maxValsInArrayIndex].length;l++)for(var h=0,c=0,d=0;d<t.series.length;d++)null!==t.series[d][l]&&Utils.isNumber(t.series[d][l])&&(t.series[d][l]>0?h=h+parseFloat(t.series[d][l])+1e-4:c+=parseFloat(t.series[d][l])),d===t.series.length-1&&(n.push(h),o.push(c));for(var u=0;u<n.length;u++)t.maxY=Math.max(t.maxY,n[u]),t.minY=Math.min(t.minY,o[u])}if(("line"===e.chart.type||"area"===e.chart.type||"candlestick"===e.chart.type)&&t.minY===Number.MIN_VALUE&&i!==-Number.MAX_VALUE&&i!==t.maxY){var g=t.maxY-i;i>=0&&i<=10&&(g=0),t.minY=i-5*g/100,t.maxY=t.maxY+5*g/100}return e.yaxis.map(function(e,i){void 0!==e.max&&("number"==typeof e.max?t.maxYArr[i]=e.max:"function"==typeof e.max&&(t.maxYArr[i]=e.max(t.maxY)),t.maxY=t.maxYArr[i]),void 0!==e.min&&("number"==typeof e.min?t.minYArr[i]=e.min:"function"==typeof e.min&&(t.minYArr[i]=e.min(t.minY)),t.minY=t.minYArr[i])}),t.isBarHorizontal&&(void 0!==e.xaxis.min&&"number"==typeof e.xaxis.min&&(t.minY=e.xaxis.min),void 0!==e.xaxis.max&&"number"==typeof e.xaxis.max&&(t.maxY=e.xaxis.max)),t.isMultipleYAxis?(this.scales.setMultipleYScales(),t.minY=i,t.yAxisScale.forEach(function(e,i){t.minYArr[i]=e.niceMin,t.maxYArr[i]=e.niceMax})):(this.scales.setYScaleForIndex(0,t.minY,t.maxY),t.minY=t.yAxisScale[0].niceMin,t.maxY=t.yAxisScale[0].niceMax,t.minYArr[0]=t.yAxisScale[0].niceMin,t.maxYArr[0]=t.yAxisScale[0].niceMax),{minY:t.minY,maxY:t.maxY,minYArr:t.minYArr,maxYArr:t.maxYArr}}},{key:"setXRange",value:function(){var t,e=this.w.globals,i=this.w.config,s="numeric"===i.xaxis.type||"datetime"===i.xaxis.type||"category"===i.xaxis.type&&!e.noLabelsProvided||e.noLabelsProvided||e.isXNumeric;if(e.isXNumeric)for(var a=0;a<e.series.length;a++)if(e.labels[a])for(var r=0;r<e.labels[a].length;r++)null!==e.labels[a][r]&&Utils.isNumber(e.labels[a][r])&&(e.maxX=Math.max(e.maxX,e.labels[a][r]),e.initialmaxX=Math.max(e.maxX,e.labels[a][r]),e.minX=Math.min(e.minX,e.labels[a][r]),e.initialminX=Math.min(e.minX,e.labels[a][r]));if(e.noLabelsProvided&&0===i.xaxis.categories.length&&(e.maxX=e.labels[e.labels.length-1],e.initialmaxX=e.labels[e.labels.length-1],e.minX=1,e.initialminX=1),(e.comboChartsHasBars||"candlestick"===i.chart.type||"bar"===i.chart.type&&e.isXNumeric)&&("category"!==i.xaxis.type||e.isXNumeric)){var n=e.svgWidth/e.dataPoints*(Math.abs(e.maxX-e.minX)/e.svgWidth),o=e.minX-n/2;e.minX=o,e.initialminX=o;var l=e.maxX+n/((e.series.length+1)/e.series.length);e.maxX=l,e.initialmaxX=l}!e.isXNumeric&&!e.noLabelsProvided||i.xaxis.convertedCatToNumeric&&!e.dataFormatXNumeric||(void 0===i.xaxis.tickAmount?(t=Math.round(e.svgWidth/150),"numeric"===i.xaxis.type&&e.dataPoints<20&&(t=e.dataPoints-1),t>e.dataPoints&&0!==e.dataPoints&&(t=e.dataPoints-1)):t="dataPoints"===i.xaxis.tickAmount?e.series[e.maxValsInArrayIndex].length-1:i.xaxis.tickAmount,void 0!==i.xaxis.max&&"number"==typeof i.xaxis.max&&(e.maxX=i.xaxis.max),void 0!==i.xaxis.min&&"number"==typeof i.xaxis.min&&(e.minX=i.xaxis.min),void 0!==i.xaxis.range&&(e.minX=e.maxX-i.xaxis.range),e.minX!==Number.MAX_VALUE&&e.maxX!==-Number.MAX_VALUE?e.xAxisScale=this.scales.linearScale(e.minX,e.maxX,t):(e.xAxisScale=this.scales.linearScale(1,t,t),e.noLabelsProvided&&e.labels.length>0&&(e.xAxisScale=this.scales.linearScale(1,e.labels.length,t-1),e.seriesX=e.labels.slice())),s&&(e.labels=e.xAxisScale.result.slice()));if(e.minX===e.maxX)if("datetime"===i.xaxis.type){var h=new Date(e.minX);h.setDate(h.getDate()-2),e.minX=new Date(h).getTime();var c=new Date(e.maxX);c.setDate(c.getDate()+2),e.maxX=new Date(c).getTime()}else("numeric"===i.xaxis.type||"category"===i.xaxis.type&&!e.noLabelsProvided)&&(e.minX=e.minX-2,e.maxX=e.maxX+2);return e.isXNumeric&&(e.seriesX.forEach(function(t,i){t.forEach(function(t,s){if(s>0){var a=t-e.seriesX[i][s-1];e.minXDiff=Math.min(a,e.minXDiff)}})}),this.calcMinXDiffForTinySeries()),{minX:e.minX,maxX:e.maxX}}},{key:"calcMinXDiffForTinySeries",value:function(){var t=this.w,e=t.globals.labels.length;return 1===t.globals.labels.length?t.globals.minXDiff=(t.globals.maxX-t.globals.minX)/e/3:t.globals.minXDiff===Number.MAX_VALUE&&(t.globals.timelineLabels.length>0&&(e=t.globals.timelineLabels.length),e<3&&(e=3),t.globals.minXDiff=(t.globals.maxX-t.globals.minX)/e),t.globals.minXDiff}},{key:"setZRange",value:function(){var t=this.w.globals;if(t.isDataXYZ)for(var e=0;e<t.series.length;e++)if(void 0!==t.seriesZ[e])for(var i=0;i<t.seriesZ[e].length;i++)null!==t.seriesZ[e][i]&&Utils.isNumber(t.seriesZ[e][i])&&(t.maxZ=Math.max(t.maxZ,t.seriesZ[e][i]),t.minZ=Math.min(t.minZ,t.seriesZ[e][i]))}}]),t}(),TimeScale=function(){function t(e){_classCallCheck(this,t),this.ctx=e,this.w=e.w,this.timeScaleArray=[]}return _createClass(t,[{key:"calculateTimeScaleTicks",value:function(t,e){var i=this,s=this.w;if(s.globals.allSeriesCollapsed)return s.globals.labels=[],s.globals.timelineLabels=[],[];var a=new DateTime(this.ctx),r=(e-t)/864e5;this.determineInterval(r),s.globals.disableZoomIn=!1,s.globals.disableZoomOut=!1,r<.005?s.globals.disableZoomIn=!0:r>5e4&&(s.globals.disableZoomOut=!0);var n=a.getTimeUnitsfromTimestamp(t,e),o=s.globals.gridWidth/r,l=o/24,h=l/60,c=Math.floor(24*r),d=Math.floor(24*r*60),u=Math.floor(r),g=Math.floor(r/30),f=Math.floor(r/365),p={minMinute:n.minMinute,minHour:n.minHour,minDate:n.minDate,minMonth:n.minMonth,minYear:n.minYear},x={firstVal:p,currentMinute:p.minMinute,currentHour:p.minHour,currentMonthDate:p.minDate,currentDate:p.minDate,currentMonth:p.minMonth,currentYear:p.minYear,daysWidthOnXAxis:o,hoursWidthOnXAxis:l,minutesWidthOnXAxis:h,numberOfMinutes:d,numberOfHours:c,numberOfDays:u,numberOfMonths:g,numberOfYears:f};switch(this.tickInterval){case"years":this.generateYearScale(x);break;case"months":case"half_year":this.generateMonthScale(x);break;case"months_days":case"months_fortnight":case"days":case"week_days":this.generateDayScale(x);break;case"hours":this.generateHourScale(x);break;case"minutes":this.generateMinuteScale(x)}var m=this.timeScaleArray.map(function(t){var e={position:t.position,unit:t.unit,year:t.year,day:t.day?t.day:1,hour:t.hour?t.hour:0,month:t.month+1};return"month"===t.unit?_objectSpread({},e,{day:1,value:t.value+1}):"day"===t.unit||"hour"===t.unit?_objectSpread({},e,{value:t.value}):"minute"===t.unit?_objectSpread({},e,{value:t.value,minute:t.value}):t});return m.filter(function(t){var e=1,a=Math.ceil(s.globals.gridWidth/120),r=t.value;void 0!==s.config.xaxis.tickAmount&&(a=s.config.xaxis.tickAmount),m.length>a&&(e=Math.floor(m.length/a));var n=!1,o=!1;switch(i.tickInterval){case"half_year":e=7,"year"===t.unit&&(n=!0);break;case"months":e=1,"year"===t.unit&&(n=!0);break;case"months_fortnight":e=15,"year"!==t.unit&&"month"!==t.unit||(n=!0),30===r&&(o=!0);break;case"months_days":e=10,"month"===t.unit&&(n=!0),30===r&&(o=!0);break;case"week_days":e=8,"month"===t.unit&&(n=!0);break;case"days":e=1,"month"===t.unit&&(n=!0);break;case"hours":"day"===t.unit&&(n=!0);break;case"minutes":r%5!=0&&(o=!0)}if("minutes"===i.tickInterval||"hours"===i.tickInterval){if(!o)return!0}else if((r%e==0||n)&&!o)return!0})}},{key:"recalcDimensionsBasedOnFormat",value:function(t,e){var i=this.w,s=this.formatDates(t),a=this.removeOverlappingTS(s);e?i.globals.invertedTimelineLabels=a.slice():i.globals.timelineLabels=a.slice(),new Dimensions(this.ctx).plotCoords()}},{key:"determineInterval",value:function(t){switch(!0){case t>1825:this.tickInterval="years";break;case t>800&&t<=1825:this.tickInterval="half_year";break;case t>180&&t<=800:this.tickInterval="months";break;case t>90&&t<=180:this.tickInterval="months_fortnight";break;case t>60&&t<=90:this.tickInterval="months_days";break;case t>30&&t<=60:this.tickInterval="week_days";break;case t>2&&t<=30:this.tickInterval="days";break;case t>.1&&t<=2:this.tickInterval="hours";break;case t<.1:this.tickInterval="minutes";break;default:this.tickInterval="days"}}},{key:"generateYearScale",value:function(t){var e=t.firstVal,i=t.currentMonth,s=t.currentYear,a=t.daysWidthOnXAxis,r=t.numberOfYears,n=e.minYear,o=0,l=new DateTime(this.ctx);if(e.minDate>1&&e.minMonth>0){var h=l.determineRemainingDaysOfYear(e.minYear,e.minMonth,e.minDate);o=(l.determineDaysOfYear(e.minYear)-h+1)*a,n=e.minYear+1,this.timeScaleArray.push({position:o,value:n,unit:"year",year:n,month:Utils.monthMod(i+1)})}else 1===e.minDate&&0===e.minMonth&&this.timeScaleArray.push({position:o,value:n,unit:"year",year:s,month:Utils.monthMod(i+1)});for(var c=n,d=o,u=0;u<r;u++)c++,d=l.determineDaysOfYear(c-1)*a+d,this.timeScaleArray.push({position:d,value:c,unit:"year",year:c,month:1})}},{key:"generateMonthScale",value:function(t){var e=t.firstVal,i=t.currentMonthDate,s=t.currentMonth,a=t.currentYear,r=t.daysWidthOnXAxis,n=t.numberOfMonths,o=s,l=0,h=new DateTime(this.ctx),c="month",d=0;if(e.minDate>1){l=(h.determineDaysOfMonths(s+1,e.minYear)-i+1)*r,o=Utils.monthMod(s+1);var u=a+d,g=Utils.monthMod(o),f=o;0===o&&(c="year",f=u,g=1,u+=d+=1),this.timeScaleArray.push({position:l,value:f,unit:c,year:u,month:g})}else this.timeScaleArray.push({position:l,value:o,unit:c,year:a,month:Utils.monthMod(s)});for(var p=o+1,x=l,m=0,b=1;m<n;m++,b++){0===(p=Utils.monthMod(p))?(c="year",d+=1):c="month";var v=a+Math.floor(p/12)+d;x=h.determineDaysOfMonths(p,v)*r+x;var y=0===p?v:p;this.timeScaleArray.push({position:x,value:y,unit:c,year:v,month:0===p?1:p}),p++}}},{key:"generateDayScale",value:function(t){var e=t.firstVal,i=t.currentMonth,s=t.currentYear,a=t.hoursWidthOnXAxis,r=t.numberOfDays,n=new DateTime(this.ctx),o="day",l=(24-e.minHour)*a,h=e.minDate+1,c=h,d=function(t,e,i){return t>n.determineDaysOfMonths(e+1,i)?(u=1,o="month",c=e+=1,e):e},u=h,g=d(u,i,s);this.timeScaleArray.push({position:l,value:c,unit:o,year:s,month:Utils.monthMod(g),day:u});for(var f=l,p=0;p<r;p++){o="day",g=d(u+=1,g,s+Math.floor(g/12)+0);var x=s+Math.floor(g/12)+0;f=24*a+f;var m=1===u?Utils.monthMod(g):u;this.timeScaleArray.push({position:f,value:m,unit:o,year:x,month:Utils.monthMod(g),day:m})}}},{key:"generateHourScale",value:function(t){var e=t.firstVal,i=t.currentDate,s=t.currentMonth,a=t.currentYear,r=t.minutesWidthOnXAxis,n=t.numberOfHours,o=new DateTime(this.ctx),l="hour",h=function(t,e){return t>o.determineDaysOfMonths(e+1,a)&&(p=1,e+=1),{month:e,date:p}},c=function(t,e){return t>o.determineDaysOfMonths(e+1,a)?e+=1:e},d=60-e.minMinute,u=d*r,g=e.minHour+1,f=g+1;60===d&&(u=0,f=(g=e.minHour)+1);var p=i,x=c(p,s);this.timeScaleArray.push({position:u,value:g,unit:l,day:p,hour:f,year:a,month:Utils.monthMod(x)});for(var m=u,b=0;b<n;b++){if(l="hour",f>=24)f=0,l="day",x=h(p+=1,x).month,x=c(p,x);var v=a+Math.floor(x/12)+0;m=0===f&&0===b?d*r:60*r+m;var y=0===f?p:f;this.timeScaleArray.push({position:m,value:y,unit:l,hour:f,day:p,year:v,month:Utils.monthMod(x)}),f++}}},{key:"generateMinuteScale",value:function(t){var e=t.firstVal,i=t.currentMinute,s=t.currentHour,a=t.currentDate,r=t.currentMonth,n=t.currentYear,o=t.minutesWidthOnXAxis,l=t.numberOfMinutes,h=o-(i-e.minMinute),c=e.minMinute+1,d=c+1,u=a,g=r,f=n,p=s;this.timeScaleArray.push({position:h,value:c,unit:"minute",day:u,hour:p,minute:d,year:f,month:Utils.monthMod(g)});for(var x=h,m=0;m<l;m++){d>=60&&(d=0,24===(p+=1)&&(p=0));var b=n+Math.floor(g/12)+0;x=o+x;var v=d;this.timeScaleArray.push({position:x,value:v,unit:"minute",hour:p,minute:d,day:u,year:b,month:Utils.monthMod(g)}),d++}}},{key:"createRawDateString",value:function(t,e){var i=t.year;return i+="-"+("0"+t.month.toString()).slice(-2),"day"===t.unit?i+="day"===t.unit?"-"+("0"+e).slice(-2):"-01":i+="-"+("0"+(t.day?t.day:"1")).slice(-2),"hour"===t.unit?i+="hour"===t.unit?"T"+("0"+e).slice(-2):"T00":i+="T"+("0"+(t.hour?t.hour:"0")).slice(-2),i+="minute"===t.unit?":"+("0"+e).slice(-2)+":00.000Z":":00:00.000Z"}},{key:"formatDates",value:function(t){var e=this,i=this.w;return t.map(function(t){var s=t.value.toString(),a=new DateTime(e.ctx),r=e.createRawDateString(t,s),n=new Date(Date.parse(r));if(void 0===i.config.xaxis.labels.format){var o="dd MMM",l=i.config.xaxis.labels.datetimeFormatter;"year"===t.unit&&(o=l.year),"month"===t.unit&&(o=l.month),"day"===t.unit&&(o=l.day),"hour"===t.unit&&(o=l.hour),"minute"===t.unit&&(o=l.minute),s=a.formatDate(n,o,!0,!1)}else s=a.formatDate(n,i.config.xaxis.labels.format);return{dateString:r,position:t.position,value:s,unit:t.unit,year:t.year,month:t.month}})}},{key:"removeOverlappingTS",value:function(t){var e=this,i=new Graphics(this.ctx),s=0,a=t.map(function(a,r){if(r>0&&e.w.config.xaxis.labels.hideOverlappingLabels){var n=i.getTextRects(t[s].value).width,o=t[s].position;return a.position>o+n+10?(s=r,a):null}return a});return a=a.filter(function(t){return null!==t})}}]),t}(),Core=function(){function t(e,i){_classCallCheck(this,t),this.ctx=i,this.w=i.w,this.el=e,this.coreUtils=new CoreUtils(this.ctx),this.twoDSeries=[],this.threeDSeries=[],this.twoDSeriesX=[]}return _createClass(t,[{key:"setupElements",value:function(){var t=this.w.globals,e=this.w.config,i=e.chart.type;t.axisCharts=["line","area","bar","rangeBar","candlestick","radar","scatter","bubble","heatmap"].indexOf(i)>-1,t.xyCharts=["line","area","bar","rangeBar","candlestick","scatter","bubble"].indexOf(i)>-1,t.isBarHorizontal=("bar"===e.chart.type||"rangeBar"===e.chart.type)&&e.plotOptions.bar.horizontal,t.chartClass=".apexcharts"+t.cuid,t.dom.baseEl=this.el,t.dom.elWrap=document.createElement("div"),Graphics.setAttrs(t.dom.elWrap,{id:t.chartClass.substring(1),class:"apexcharts-canvas "+t.chartClass.substring(1)}),this.el.appendChild(t.dom.elWrap),t.dom.Paper=new window.SVG.Doc(t.dom.elWrap),t.dom.Paper.attr({class:"apexcharts-svg","xmlns:data":"ApexChartsNS",transform:"translate(".concat(e.chart.offsetX,", ").concat(e.chart.offsetY,")")}),t.dom.Paper.node.style.background=e.chart.background,this.setSVGDimensions(),t.dom.elGraphical=t.dom.Paper.group().attr({class:"apexcharts-inner apexcharts-graphical"}),t.dom.elDefs=t.dom.Paper.defs(),t.dom.elLegendWrap=document.createElement("div"),t.dom.elLegendWrap.classList.add("apexcharts-legend"),t.dom.elWrap.appendChild(t.dom.elLegendWrap),t.dom.Paper.add(t.dom.elGraphical),t.dom.elGraphical.add(t.dom.elDefs)}},{key:"plotChartType",value:function(t,e){var i=this.w,s=i.config,a=i.globals,r={series:[],i:[]},n={series:[],i:[]},o={series:[],i:[]},l={series:[],i:[]},h={series:[],i:[]};a.series.map(function(e,s){void 0!==t[s].type?("column"===t[s].type||"bar"===t[s].type?(i.config.plotOptions.bar.horizontal=!1,l.series.push(e),l.i.push(s)):"area"===t[s].type?(n.series.push(e),n.i.push(s)):"line"===t[s].type?(r.series.push(e),r.i.push(s)):"scatter"===t[s].type?(o.series.push(e),o.i.push(s)):"bubble"===t[s].type||("candlestick"===t[s].type?(h.series.push(e),h.i.push(s)):console.warn("You have specified an unrecognized chart type. Available types for this propery are line/area/column/bar/scatter/bubble")),a.comboCharts=!0):(r.series.push(e),r.i.push(s))});var c=new Line(this.ctx,e),d=new CandleStick(this.ctx,e),u=new Pie(this.ctx),g=new Radial(this.ctx),f=new RangeBar(this.ctx,e),p=new Radar(this.ctx),x=[];if(a.comboCharts){if(n.series.length>0&&x.push(c.draw(n.series,"area",n.i)),l.series.length>0)if(i.config.chart.stacked){var m=new BarStacked(this.ctx,e);x.push(m.draw(l.series,l.i))}else{var b=new Bar(this.ctx,e);x.push(b.draw(l.series,l.i))}if(r.series.length>0&&x.push(c.draw(r.series,"line",r.i)),h.series.length>0&&x.push(d.draw(h.series,h.i)),o.series.length>0){var v=new Line(this.ctx,e,!0);x.push(v.draw(o.series,"scatter",o.i))}}else switch(s.chart.type){case"line":x=c.draw(a.series,"line");break;case"area":x=c.draw(a.series,"area");break;case"bar":if(s.chart.stacked)x=new BarStacked(this.ctx,e).draw(a.series);else x=new Bar(this.ctx,e).draw(a.series);break;case"candlestick":x=new CandleStick(this.ctx,e).draw(a.series);break;case"rangeBar":x=f.draw(a.series);break;case"heatmap":x=new HeatMap(this.ctx,e).draw(a.series);break;case"pie":case"donut":x=u.draw(a.series);break;case"radialBar":x=g.draw(a.series);break;case"radar":x=p.draw(a.series);break;default:x=c.draw(a.series)}return x}},{key:"setSVGDimensions",value:function(){var t=this.w.globals,e=this.w.config;t.svgWidth=e.chart.width,t.svgHeight=e.chart.height;var i=Utils.getDimensions(this.el),s=e.chart.width.toString().split(/[0-9]+/g).pop();if("%"===s?Utils.isNumber(i[0])&&(0===i[0].width&&(i=Utils.getDimensions(this.el.parentNode)),t.svgWidth=i[0]*parseInt(e.chart.width)/100):"px"!==s&&""!==s||(t.svgWidth=parseInt(e.chart.width)),"auto"!==t.svgHeight&&""!==t.svgHeight)if("%"===e.chart.height.toString().split(/[0-9]+/g).pop()){var a=Utils.getDimensions(this.el.parentNode);t.svgHeight=a[1]*parseInt(e.chart.height)/100}else t.svgHeight=parseInt(e.chart.height);else t.axisCharts?t.svgHeight=t.svgWidth/1.61:t.svgHeight=t.svgWidth;t.svgWidth<0&&(t.svgWidth=0),t.svgHeight<0&&(t.svgHeight=0),Graphics.setAttrs(t.dom.Paper.node,{width:t.svgWidth,height:t.svgHeight});var r=e.chart.sparkline.enabled?0:t.axisCharts?e.chart.parentHeightOffset:0;t.dom.Paper.node.parentNode.parentNode.style.minHeight=t.svgHeight+r+"px",t.dom.elWrap.style.width=t.svgWidth+"px",t.dom.elWrap.style.height=t.svgHeight+"px"}},{key:"shiftGraphPosition",value:function(){var t=this.w.globals,e=t.translateY,i={transform:"translate("+t.translateX+", "+e+")"};Graphics.setAttrs(t.dom.elGraphical.node,i)}},{key:"resizeNonAxisCharts",value:function(){var t=this.w,e=t.globals,i=0;"top"!==t.config.legend.position&&"bottom"!==t.config.legend.position||(i=new Legend(this.ctx).getLegendBBox().clwh+10);var s=t.globals.dom.baseEl.querySelector(".apexcharts-radialbar"),a=2*t.globals.radialSize;s&&-90!==t.config.plotOptions.radialBar.startAngle&&(a=Utils.getBoundingClientRect(s).height);var r=Math.max(a,2*t.globals.radialSize)+e.translateY+i+20;e.dom.elLegendForeign&&e.dom.elLegendForeign.setAttribute("height",r),e.dom.elWrap.style.height=r+"px",Graphics.setAttrs(e.dom.Paper.node,{height:r}),e.dom.Paper.node.parentNode.parentNode.style.minHeight=r+"px"}},{key:"coreCalculations",value:function(){new Range$1(this.ctx).init()}},{key:"resetGlobals",value:function(){var t=this,e=this.w.globals;e.series=[],e.seriesCandleO=[],e.seriesCandleH=[],e.seriesCandleL=[],e.seriesCandleC=[],e.seriesRangeStart=[],e.seriesRangeEnd=[],e.seriesPercent=[],e.seriesX=[],e.seriesZ=[],e.seriesNames=[],e.seriesTotals=[],e.stackedSeriesTotals=[],e.labels=[],e.timelineLabels=[],e.noLabelsProvided=!1,e.timescaleTicks=[],e.resizeTimer=null,e.selectionResizeTimer=null,e.seriesXvalues=t.w.config.series.map(function(t){return[]}),e.seriesYvalues=t.w.config.series.map(function(t){return[]}),e.delayedElements=[],e.pointsArray=[],e.dataLabelsRects=[],e.isXNumeric=!1,e.isDataXYZ=!1,e.maxY=-Number.MAX_VALUE,e.minY=Number.MIN_VALUE,e.minYArr=[],e.maxYArr=[],e.maxX=-Number.MAX_VALUE,e.minX=Number.MAX_VALUE,e.initialmaxX=-Number.MAX_VALUE,e.initialminX=Number.MAX_VALUE,e.maxDate=0,e.minDate=Number.MAX_VALUE,e.minZ=Number.MAX_VALUE,e.maxZ=-Number.MAX_VALUE,e.minXDiff=Number.MAX_VALUE,e.yAxisScale=[],e.xAxisScale=null,e.xAxisTicksPositions=[],e.yLabelsCoords=[],e.yTitleCoords=[],e.xRange=0,e.yRange=[],e.zRange=0,e.dataPoints=0}},{key:"isMultipleY",value:function(){if(this.w.config.yaxis.constructor===Array&&this.w.config.yaxis.length>1)return this.w.globals.isMultipleYAxis=!0,!0}},{key:"excludeCollapsedSeriesInYAxis",value:function(){var t=this,e=this.w;e.globals.ignoreYAxisIndexes=e.globals.collapsedSeries.map(function(e,i){if(t.w.globals.isMultipleYAxis)return e.index})}},{key:"isMultiFormat",value:function(){return this.isFormatXY()||this.isFormat2DArray()}},{key:"isFormatXY",value:function(){var t=this.w.config.series.slice(),e=new Series(this.ctx);if(this.activeSeriesIndex=e.getActiveConfigSeriesIndex(),void 0!==t[this.activeSeriesIndex].data&&t[this.activeSeriesIndex].data.length>0&&null!==t[this.activeSeriesIndex].data[0]&&void 0!==t[this.activeSeriesIndex].data[0].x&&null!==t[this.activeSeriesIndex].data[0])return!0}},{key:"isFormat2DArray",value:function(){var t=this.w.config.series.slice(),e=new Series(this.ctx);if(this.activeSeriesIndex=e.getActiveConfigSeriesIndex(),void 0!==t[this.activeSeriesIndex].data&&t[this.activeSeriesIndex].data.length>0&&void 0!==t[this.activeSeriesIndex].data[0]&&null!==t[this.activeSeriesIndex].data[0]&&t[this.activeSeriesIndex].data[0].constructor===Array)return!0}},{key:"handleFormat2DArray",value:function(t,e){for(var i=this.w.config,s=this.w.globals,a=0;a<t[e].data.length;a++)if(void 0!==t[e].data[a][1]&&(Array.isArray(t[e].data[a][1])&&4===t[e].data[a][1].length?this.twoDSeries.push(Utils.parseNumber(t[e].data[a][1][3])):this.twoDSeries.push(Utils.parseNumber(t[e].data[a][1])),s.dataFormatXNumeric=!0),"datetime"===i.xaxis.type){var r=new Date(t[e].data[a][0]);r=new Date(r).getTime(),this.twoDSeriesX.push(r)}else this.twoDSeriesX.push(t[e].data[a][0]);for(var n=0;n<t[e].data.length;n++)void 0!==t[e].data[n][2]&&(this.threeDSeries.push(t[e].data[n][2]),s.isDataXYZ=!0)}},{key:"handleFormatXY",value:function(t,e){var i=this.w.config,s=this.w.globals,a=new DateTime(this.ctx),r=e;s.collapsedSeriesIndices.indexOf(e)>-1&&(r=this.activeSeriesIndex);for(var n=0;n<t[e].data.length;n++)void 0!==t[e].data[n].y&&(Array.isArray(t[e].data[n].y)?this.twoDSeries.push(Utils.parseNumber(t[e].data[n].y[t[e].data[n].y.length-1])):this.twoDSeries.push(Utils.parseNumber(t[e].data[n].y)));for(var o=0;o<t[r].data.length;o++){var l="string"==typeof t[r].data[o].x,h=!!a.isValidDate(t[r].data[o].x.toString());l||h?l?"datetime"!==i.xaxis.type||s.isRangeData?(this.fallbackToCategory=!0,this.twoDSeriesX.push(t[r].data[o].x)):this.twoDSeriesX.push(a.parseDate(t[r].data[o].x)):"datetime"===i.xaxis.type?this.twoDSeriesX.push(a.parseDate(t[r].data[o].x.toString())):(s.dataFormatXNumeric=!0,s.isXNumeric=!0,this.twoDSeriesX.push(parseFloat(t[r].data[o].x))):(s.isXNumeric=!0,s.dataFormatXNumeric=!0,this.twoDSeriesX.push(t[r].data[o].x))}if(t[e].data[0]&&void 0!==t[e].data[0].z){for(var c=0;c<t[e].data.length;c++)this.threeDSeries.push(t[e].data[c].z);s.isDataXYZ=!0}}},{key:"handleRangeData",value:function(t,e){var i=this.w.globals,s={};return this.isFormat2DArray()?s=this.handleRangeDataFormat("array",t,e):this.isFormatXY()&&(s=this.handleRangeDataFormat("xy",t,e)),i.seriesRangeStart.push(s.start),i.seriesRangeEnd.push(s.end),s}},{key:"handleCandleStickData",value:function(t,e){var i=this.w.globals,s={};return this.isFormat2DArray()?s=this.handleCandleStickDataFormat("array",t,e):this.isFormatXY()&&(s=this.handleCandleStickDataFormat("xy",t,e)),i.seriesCandleO.push(s.o),i.seriesCandleH.push(s.h),i.seriesCandleL.push(s.l),i.seriesCandleC.push(s.c),s}},{key:"handleRangeDataFormat",value:function(t,e,i){var s=[],a=[],r="Please provide [Start, End] values in valid format. Read more https://apexcharts.com/docs/series/#rangecharts",n=new Series(this.ctx).getActiveConfigSeriesIndex();if("array"===t){if(2!==e[n].data[0][1].length)throw new Error(r);for(var o=0;o<e[i].data.length;o++)s.push(e[i].data[o][1][0]),a.push(e[i].data[o][1][1])}else if("xy"===t){if(2!==e[n].data[0].y.length)throw new Error(r);for(var l=0;l<e[i].data.length;l++)s.push(e[i].data[l].y[0]),a.push(e[i].data[l].y[1])}return{start:s,end:a}}},{key:"handleCandleStickDataFormat",value:function(t,e,i){var s=[],a=[],r=[],n=[],o="Please provide [Open, High, Low and Close] values in valid format. Read more https://apexcharts.com/docs/series/#candlestick";if("array"===t){if(4!==e[i].data[0][1].length)throw new Error(o);for(var l=0;l<e[i].data.length;l++)s.push(e[i].data[l][1][0]),a.push(e[i].data[l][1][1]),r.push(e[i].data[l][1][2]),n.push(e[i].data[l][1][3])}else if("xy"===t){if(4!==e[i].data[0].y.length)throw new Error(o);for(var h=0;h<e[i].data.length;h++)s.push(e[i].data[h].y[0]),a.push(e[i].data[h].y[1]),r.push(e[i].data[h].y[2]),n.push(e[i].data[h].y[3])}return{o:s,h:a,l:r,c:n}}},{key:"parseDataAxisCharts",value:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.ctx,i=this.w.config,s=this.w.globals,a=new DateTime(e),r=0;r<t.length;r++){if(this.twoDSeries=[],this.twoDSeriesX=[],this.threeDSeries=[],void 0===t[r].data)return void console.error("It is a possibility that you may have not included 'data' property in series.");if("rangeBar"!==i.chart.type&&"rangeArea"!==i.chart.type&&"rangeBar"!==t[r].type&&"rangeArea"!==t[r].type||(s.isRangeData=!0,this.handleRangeData(t,r)),this.isMultiFormat())this.isFormat2DArray()?this.handleFormat2DArray(t,r):this.isFormatXY()&&this.handleFormatXY(t,r),"candlestick"!==i.chart.type&&"candlestick"!==t[r].type||this.handleCandleStickData(t,r),s.series.push(this.twoDSeries),s.labels.push(this.twoDSeriesX),s.seriesX.push(this.twoDSeriesX),this.fallbackToCategory||(s.isXNumeric=!0);else{if("datetime"===i.xaxis.type){s.isXNumeric=!0;for(var n=i.labels.length>0?i.labels.slice():i.xaxis.categories.slice(),o=0;o<n.length;o++)if("string"==typeof n[o]){if(!a.isValidDate(n[o]))throw new Error("You have provided invalid Date format. Please provide a valid JavaScript Date");this.twoDSeriesX.push(a.parseDate(n[o]))}else{if(13!==String(n[o]).length)throw new Error("Please provide a valid JavaScript timestamp");this.twoDSeriesX.push(n[o])}s.seriesX.push(this.twoDSeriesX)}else if("numeric"===i.xaxis.type){s.isXNumeric=!0;var l=i.labels.length>0?i.labels.slice():i.xaxis.categories.slice();l.length>0&&(this.twoDSeriesX=l,s.seriesX.push(this.twoDSeriesX))}s.labels.push(this.twoDSeriesX);var h=t[r].data.map(function(t){return Utils.parseNumber(t)});s.series.push(h)}s.seriesZ.push(this.threeDSeries),void 0!==t[r].name?s.seriesNames.push(t[r].name):s.seriesNames.push("series-"+parseInt(r+1))}return this.w}},{key:"parseDataNonAxisCharts",value:function(t){var e=this.w.globals,i=this.w.config;e.series=t.slice(),e.seriesNames=i.labels.slice();for(var s=0;s<e.series.length;s++)void 0===e.seriesNames[s]&&e.seriesNames.push("series-"+(s+1));return this.w}},{key:"handleExternalLabelsData",value:function(t){var e=this.w.config,i=this.w.globals;if(e.xaxis.categories.length>0)i.labels=e.xaxis.categories;else if(e.labels.length>0)i.labels=e.labels.slice();else if(this.fallbackToCategory)i.labels=i.labels[0];else{var s=[];if(i.axisCharts){if(i.series.length>0)for(var a=0;a<i.series[i.maxValsInArrayIndex].length;a++)s.push(a+1);for(var r=0;r<t.length;r++)i.seriesX.push(s);i.isXNumeric=!0}if(0===s.length){s=[0,10];for(var n=0;n<t.length;n++)i.seriesX.push(s)}i.labels=s,i.noLabelsProvided=!0}}},{key:"parseData",value:function(t){var e=this.w,i=e.config,s=e.globals;if(this.excludeCollapsedSeriesInYAxis(),this.fallbackToCategory=!1,this.resetGlobals(),this.isMultipleY(),s.axisCharts?this.parseDataAxisCharts(t):this.parseDataNonAxisCharts(t),this.coreUtils.getLargestSeries(),"bar"===i.chart.type&&i.chart.stacked){var a=new Series(this.ctx);s.series=a.setNullSeriesToZeroValues(s.series)}this.coreUtils.getSeriesTotals(),s.axisCharts&&this.coreUtils.getStackedSeriesTotals(),this.coreUtils.getPercentSeries(),s.dataFormatXNumeric||s.isXNumeric&&("numeric"!==i.xaxis.type||0!==i.labels.length||0!==i.xaxis.categories.length)||this.handleExternalLabelsData(t)}},{key:"xySettings",value:function(){var t=null,e=this.w;if(e.globals.axisCharts){if("back"===e.config.xaxis.crosshairs.position)new Crosshairs(this.ctx).drawXCrosshairs();if("back"===e.config.yaxis[0].crosshairs.position)new Crosshairs(this.ctx).drawYCrosshairs();if(t=this.coreUtils.getCalculatedRatios(),"datetime"===e.config.xaxis.type&&void 0===e.config.xaxis.labels.formatter){var i,s=new TimeScale(this.ctx);isFinite(e.globals.minX)&&isFinite(e.globals.maxX)&&!e.globals.isBarHorizontal?(i=s.calculateTimeScaleTicks(e.globals.minX,e.globals.maxX),s.recalcDimensionsBasedOnFormat(i,!1)):e.globals.isBarHorizontal&&(i=s.calculateTimeScaleTicks(e.globals.minY,e.globals.maxY),s.recalcDimensionsBasedOnFormat(i,!0))}}return t}},{key:"drawAxis",value:function(t,e){var i,s,a=this.w.globals,r=this.w.config,n=new XAxis(this.ctx),o=new YAxis(this.ctx);a.axisCharts&&"radar"!==t&&(a.isBarHorizontal?(s=o.drawYaxisInversed(0),i=n.drawXaxisInversed(0),a.dom.elGraphical.add(i),a.dom.elGraphical.add(s)):(i=n.drawXaxis(),a.dom.elGraphical.add(i),r.yaxis.map(function(t,e){-1===a.ignoreYAxisIndexes.indexOf(e)&&(s=o.drawYaxis(e),a.dom.Paper.add(s))})));r.yaxis.map(function(t,e){-1===a.ignoreYAxisIndexes.indexOf(e)&&o.yAxisTitleRotate(e,t.opposite)})}},{key:"setupBrushHandler",value:function(){var t=this,e=this.w;if(e.config.chart.brush.enabled&&"function"!=typeof e.config.chart.events.selection){var i=e.config.chart.brush.targets||[e.config.chart.brush.target];i.forEach(function(e){var i=ApexCharts.getChartByID(e);i.w.globals.brushSource=t.ctx;var s=function(){t.ctx._updateOptions({chart:{selection:{xaxis:{min:i.w.globals.minX,max:i.w.globals.maxX}}}},!1,!1)};"function"!=typeof i.w.config.chart.events.zoomed&&(i.w.config.chart.events.zoomed=function(){s()}),"function"!=typeof i.w.config.chart.events.scrolled&&(i.w.config.chart.events.scrolled=function(){s()})}),e.config.chart.events.selection=function(t,s){i.forEach(function(t){var i=ApexCharts.getChartByID(t),a=Utils.clone(e.config.yaxis);e.config.chart.brush.autoScaleYaxis&&(a=new Range(i).autoScaleY(i,a,s));i._updateOptions({xaxis:{min:s.xaxis.min,max:s.xaxis.max},yaxis:a},!1,!1,!1,!1)})}}}}]),t}();function finallyConstructor(t){var e=this.constructor;return this.then(function(i){return e.resolve(t()).then(function(){return i})},function(i){return e.resolve(t()).then(function(){return e.reject(i)})})}var setTimeoutFunc=setTimeout;function noop(){}function bind(t,e){return function(){t.apply(e,arguments)}}function Promise$1(t){if(!(this instanceof Promise$1))throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],doResolve(t,this)}function handle(t,e){for(;3===t._state;)t=t._value;0!==t._state?(t._handled=!0,Promise$1._immediateFn(function(){var i=1===t._state?e.onFulfilled:e.onRejected;if(null!==i){var s;try{s=i(t._value)}catch(t){return void reject(e.promise,t)}resolve(e.promise,s)}else(1===t._state?resolve:reject)(e.promise,t._value)})):t._deferreds.push(e)}function resolve(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var i=e.then;if(e instanceof Promise$1)return t._state=3,t._value=e,void finale(t);if("function"==typeof i)return void doResolve(bind(i,e),t)}t._state=1,t._value=e,finale(t)}catch(e){reject(t,e)}}function reject(t,e){t._state=2,t._value=e,finale(t)}function finale(t){2===t._state&&0===t._deferreds.length&&Promise$1._immediateFn(function(){t._handled||Promise$1._unhandledRejectionFn(t._value)});for(var e=0,i=t._deferreds.length;e<i;e++)handle(t,t._deferreds[e]);t._deferreds=null}function Handler(t,e,i){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=i}function doResolve(t,e){var i=!1;try{t(function(t){i||(i=!0,resolve(e,t))},function(t){i||(i=!0,reject(e,t))})}catch(t){if(i)return;i=!0,reject(e,t)}}Promise$1.prototype.catch=function(t){return this.then(null,t)},Promise$1.prototype.then=function(t,e){var i=new this.constructor(noop);return handle(this,new Handler(t,e,i)),i},Promise$1.prototype.finally=finallyConstructor,Promise$1.all=function(t){return new Promise$1(function(e,i){if(!t||void 0===t.length)throw new TypeError("Promise.all accepts an array");var s=Array.prototype.slice.call(t);if(0===s.length)return e([]);var a=s.length;function r(t,n){try{if(n&&("object"==typeof n||"function"==typeof n)){var o=n.then;if("function"==typeof o)return void o.call(n,function(e){r(t,e)},i)}s[t]=n,0==--a&&e(s)}catch(t){i(t)}}for(var n=0;n<s.length;n++)r(n,s[n])})},Promise$1.resolve=function(t){return t&&"object"==typeof t&&t.constructor===Promise$1?t:new Promise$1(function(e){e(t)})},Promise$1.reject=function(t){return new Promise$1(function(e,i){i(t)})},Promise$1.race=function(t){return new Promise$1(function(e,i){for(var s=0,a=t.length;s<a;s++)t[s].then(e,i)})},Promise$1._immediateFn="function"==typeof setImmediate&&function(t){setImmediate(t)}||function(t){setTimeoutFunc(t,0)},Promise$1._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)};var Exports=function(){function t(e){_classCallCheck(this,t),this.ctx=e,this.w=e.w}return _createClass(t,[{key:"getSvgString",value:function(){return this.w.globals.dom.Paper.svg()}},{key:"cleanup",value:function(){var t=this.w,e=t.globals.dom.baseEl.querySelector(".apexcharts-xcrosshairs"),i=t.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs");e&&e.setAttribute("x",-500),i&&(i.setAttribute("y1",-100),i.setAttribute("y2",-100))}},{key:"svgUrl",value:function(){this.cleanup();var t=this.getSvgString(),e=new Blob([t],{type:"image/svg+xml;charset=utf-8"});return URL.createObjectURL(e)}},{key:"dataURI",value:function(){var t=this;return new Promise$1(function(e){var i=t.w;t.cleanup();var s=document.createElement("canvas");s.width=i.globals.svgWidth,s.height=i.globals.svgHeight;var a="transparent"===i.config.chart.background?"#fff":i.config.chart.background,r=s.getContext("2d");r.fillStyle=a,r.fillRect(0,0,s.width,s.height);var n=window.URL||window.webkitURL||window,o=new Image;o.crossOrigin="anonymous";var l=t.getSvgString(),h="data:image/svg+xml,"+encodeURIComponent(l);o.onload=function(){r.drawImage(o,0,0),n.revokeObjectURL(h);var t=s.toDataURL("image/png");e(t)},o.src=h})}},{key:"exportToSVG",value:function(){this.triggerDownload(this.svgUrl(),".svg")}},{key:"exportToPng",value:function(){var t=this;this.dataURI().then(function(e){t.triggerDownload(e,".png")})}},{key:"triggerDownload",value:function(t,e){var i=document.createElement("a");i.href=t,i.download=this.w.globals.chartID+e,document.body.appendChild(i),i.click(),document.body.removeChild(i)}}]),t}(),Grid=function(){function t(e){_classCallCheck(this,t),this.ctx=e,this.w=e.w;var i=this.w;this.anim=new Animations(this.ctx),this.xaxisLabels=i.globals.labels.slice(),this.animX=i.config.grid.xaxis.lines.animate&&i.config.chart.animations.enabled,this.animY=i.config.grid.yaxis.lines.animate&&i.config.chart.animations.enabled,i.globals.timelineLabels.length>0&&(this.xaxisLabels=i.globals.timelineLabels.slice())}return _createClass(t,[{key:"drawGridArea",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=this.w,i=new Graphics(this.ctx);null===t&&(t=i.group({class:"apexcharts-grid"}));var s=i.drawLine(e.globals.padHorizontal,1,e.globals.padHorizontal,e.globals.gridHeight,"transparent"),a=i.drawLine(e.globals.padHorizontal,e.globals.gridHeight,e.globals.gridWidth,e.globals.gridHeight,"transparent");return t.add(a),t.add(s),t}},{key:"drawGrid",value:function(){var t=this.w,e=new XAxis(this.ctx),i=new YAxis(this.ctx),s=this.w.globals,a=null;if(s.axisCharts){if(t.config.grid.show)a=this.renderGrid(),s.dom.elGraphical.add(a.el),this.drawGridArea(a.el);else{var r=this.drawGridArea();s.dom.elGraphical.add(r)}null!==a&&e.xAxisLabelCorrections(a.xAxisTickWidth),i.setYAxisTextAlignments()}}},{key:"createGridMask",value:function(){var t=this.w,e=t.globals,i=new Graphics(this.ctx),s=Array.isArray(t.config.stroke.width)?0:t.config.stroke.width;if(Array.isArray(t.config.stroke.width)){var a=0;t.config.stroke.width.forEach(function(t){a=Math.max(a,t)}),s=a}e.dom.elGridRectMask=document.createElementNS(e.SVGNS,"clipPath"),e.dom.elGridRectMask.setAttribute("id","gridRectMask".concat(e.cuid)),e.dom.elGridRectMarkerMask=document.createElementNS(e.SVGNS,"clipPath"),e.dom.elGridRectMarkerMask.setAttribute("id","gridRectMarkerMask".concat(e.cuid)),e.dom.elGridRect=i.drawRect(-s/2,-s/2,e.gridWidth+s,e.gridHeight+s,0,"#fff"),new CoreUtils(this).getLargestMarkerSize();var r=t.globals.markers.largestSize+1;e.dom.elGridRectMarker=i.drawRect(-r,-r,e.gridWidth+2*r,e.gridHeight+2*r,0,"#fff"),e.dom.elGridRectMask.appendChild(e.dom.elGridRect.node),e.dom.elGridRectMarkerMask.appendChild(e.dom.elGridRectMarker.node);var n=e.dom.baseEl.querySelector("defs");n.appendChild(e.dom.elGridRectMask),n.appendChild(e.dom.elGridRectMarkerMask)}},{key:"renderGrid",value:function(){var t=this.w,e=new Graphics(this.ctx),i=t.config.grid.strokeDashArray,s=e.group({class:"apexcharts-grid"}),a=e.group({class:"apexcharts-gridlines-horizontal"}),r=e.group({class:"apexcharts-gridlines-vertical"});s.add(a),s.add(r);for(var n,o=8,l=0;l<t.globals.series.length&&(void 0!==t.globals.yAxisScale[l]&&(o=t.globals.yAxisScale[l].result.length-1),!(o>2));l++);if(t.globals.isBarHorizontal){if(n=o,t.config.grid.xaxis.lines.show||t.config.xaxis.axisTicks.show)for(var h,c=t.globals.padHorizontal,d=t.globals.gridHeight,u=0;u<n+1&&(h=c=c+t.globals.gridWidth/n+.3,u!==n-1);u++){if(t.config.grid.xaxis.lines.show){var g=e.drawLine(c,0,h,d,t.config.grid.borderColor,i);g.node.classList.add("apexcharts-gridline"),r.add(g),this.animX&&this.animateLine(g,{x1:0,x2:0},{x1:c,x2:h})}new XAxis(this.ctx).drawXaxisTicks(c,s)}if(t.config.grid.yaxis.lines.show)for(var f=0,p=0,x=t.globals.gridWidth,m=0;m<t.globals.dataPoints+1;m++){var b=e.drawLine(0,f,x,p,t.config.grid.borderColor,i);a.add(b),b.node.classList.add("apexcharts-gridline"),this.animY&&this.animateLine(b,{y1:f+20,y2:p+20},{y1:f,y2:p}),p=f+=t.globals.gridHeight/t.globals.dataPoints}}else{if(n=this.xaxisLabels.length,t.config.grid.xaxis.lines.show||t.config.xaxis.axisTicks.show){var v,y=t.globals.padHorizontal,w=t.globals.gridHeight;if(t.globals.timelineLabels.length>0)for(var k=0;k<n;k++){if(y=this.xaxisLabels[k].position,v=this.xaxisLabels[k].position,t.config.grid.xaxis.lines.show&&y>0&&y<t.globals.gridWidth){var A=e.drawLine(y,0,v,w,t.config.grid.borderColor,i);A.node.classList.add("apexcharts-gridline"),r.add(A),this.animX&&this.animateLine(A,{x1:0,x2:0},{x1:y,x2:v})}var S=new XAxis(this.ctx);k===n-1&&t.globals.skipLastTimelinelabel||S.drawXaxisTicks(y,s)}else for(var C=n,L=0;L<C;L++){var P=C;if(t.globals.isXNumeric&&"bar"!==t.config.chart.type&&(P-=1),v=y+=t.globals.gridWidth/P,L===P-1)break;if(t.config.grid.xaxis.lines.show){var z=e.drawLine(y,0,v,w,t.config.grid.borderColor,i);z.node.classList.add("apexcharts-gridline"),r.add(z),this.animX&&this.animateLine(z,{x1:0,x2:0},{x1:y,x2:v})}new XAxis(this.ctx).drawXaxisTicks(y,s)}}if(t.config.grid.yaxis.lines.show)for(var T=0,M=0,E=t.globals.gridWidth,X=0;X<o+1;X++){var I=e.drawLine(0,T,E,M,t.config.grid.borderColor,i);a.add(I),I.node.classList.add("apexcharts-gridline"),this.animY&&this.animateLine(I,{y1:T+20,y2:M+20},{y1:T,y2:M}),M=T+=t.globals.gridHeight/o}}return this.drawGridBands(s,n,o),{el:s,xAxisTickWidth:t.globals.gridWidth/n}}},{key:"drawGridBands",value:function(t,e,i){var s=this.w,a=new Graphics(this.ctx);if(void 0!==s.config.grid.row.colors&&s.config.grid.row.colors.length>0)for(var r=0,n=s.globals.gridHeight/i,o=s.globals.gridWidth,l=0,h=0;l<i;l++,h++){h>=s.config.grid.row.colors.length&&(h=0);var c=s.config.grid.row.colors[h],d=a.drawRect(0,r,o,n,0,c,s.config.grid.row.opacity);t.add(d),d.node.classList.add("apexcharts-gridRow"),r+=s.globals.gridHeight/i}if(void 0!==s.config.grid.column.colors&&s.config.grid.column.colors.length>0)for(var u=s.globals.padHorizontal,g=s.globals.padHorizontal+s.globals.gridWidth/e,f=s.globals.gridHeight,p=0,x=0;p<e;p++,x++){x>=s.config.grid.column.colors.length&&(x=0);var m=s.config.grid.column.colors[x],b=a.drawRect(u,0,g,f,0,m,s.config.grid.column.opacity);b.node.classList.add("apexcharts-gridColumn"),t.add(b),u+=s.globals.gridWidth/e}}},{key:"animateLine",value:function(t,e,i){var s=this.w,a=s.config.chart.animations;if(a&&!s.globals.resized&&!s.globals.dataChanged){var r=a.speed;this.anim.animateLine(t,e,i,r)}}}]),t}(),Responsive=function(){function t(e){_classCallCheck(this,t),this.ctx=e,this.w=e.w}return _createClass(t,[{key:"checkResponsiveConfig",value:function(t){var e=this,i=this.w,s=i.config;if(0!==s.responsive.length){var a=s.responsive.slice();a.sort(function(t,e){return t.breakpoint>e.breakpoint?1:e.breakpoint>t.breakpoint?-1:0}).reverse();var r=new Config({}),n=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=a[0].breakpoint,n=window.innerWidth>0?window.innerWidth:screen.width;if(n>s){var o=CoreUtils.extendArrayProps(r,i.globals.initialConfig);t=Utils.extend(o,t),t=Utils.extend(i.config,t),e.overrideResponsiveOptions(t)}else for(var l=0;l<a.length;l++)n<a[l].breakpoint&&(t=CoreUtils.extendArrayProps(r,a[l].options),t=Utils.extend(i.config,t),e.overrideResponsiveOptions(t))};if(t){var o=CoreUtils.extendArrayProps(r,t);o=Utils.extend(i.config,o),n(o=Utils.extend(o,t))}else n({})}}},{key:"overrideResponsiveOptions",value:function(t){var e=new Config(t).init();this.w.config=e}}]),t}(),Theme=function(){function t(e){_classCallCheck(this,t),this.ctx=e,this.w=e.w,this.colors=[]}return _createClass(t,[{key:"init",value:function(){this.setDefaultColors()}},{key:"setDefaultColors",value:function(){var t=this.w,e=new Utils;if(t.globals.dom.elWrap.classList.add(t.config.theme.mode),void 0===t.config.colors?t.globals.colors=this.predefined():t.globals.colors=t.config.colors,t.config.theme.monochrome.enabled){var i=[],s=t.globals.series.length;t.config.plotOptions.bar.distributed&&"bar"===t.config.chart.type&&(s=t.globals.series[0].length*t.globals.series.length);for(var a=t.config.theme.monochrome.color,r=1/(s/t.config.theme.monochrome.shadeIntensity),n=t.config.theme.monochrome.shadeTo,o=0,l=0;l<s;l++){var h=void 0;"dark"===n?(h=e.shadeColor(-1*o,a),o+=r):(h=e.shadeColor(o,a),o+=r),i.push(h)}t.globals.colors=i.slice()}var c=t.globals.colors.slice();this.pushExtraColors(t.globals.colors),void 0===t.config.stroke.colors?t.globals.stroke.colors=c:t.globals.stroke.colors=t.config.stroke.colors,this.pushExtraColors(t.globals.stroke.colors),void 0===t.config.fill.colors?t.globals.fill.colors=c:t.globals.fill.colors=t.config.fill.colors,this.pushExtraColors(t.globals.fill.colors),void 0===t.config.dataLabels.style.colors?t.globals.dataLabels.style.colors=c:t.globals.dataLabels.style.colors=t.config.dataLabels.style.colors,this.pushExtraColors(t.globals.dataLabels.style.colors,50),void 0===t.config.plotOptions.radar.polygons.fill.colors?t.globals.radarPolygons.fill.colors=["dark"===t.config.theme.mode?"#202D48":"#fff"]:t.globals.radarPolygons.fill.colors=t.config.plotOptions.radar.polygons.fill.colors,this.pushExtraColors(t.globals.radarPolygons.fill.colors,20),void 0===t.config.markers.colors?t.globals.markers.colors=c:t.globals.markers.colors=t.config.markers.colors,this.pushExtraColors(t.globals.markers.colors)}},{key:"pushExtraColors",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=this.w,a=e||s.globals.series.length;if(null===i&&(i="bar"===s.config.chart.type&&s.config.plotOptions.bar.distributed||"heatmap"===s.config.chart.type&&s.config.plotOptions.heatmap.colorScale.inverse),i&&(a=s.globals.series[0].length*s.globals.series.length),t.length<a)for(var r=a-t.length,n=0;n<r;n++)t.push(t[n])}},{key:"updateThemeOptions",value:function(t){t.chart=t.chart||{},t.tooltip=t.tooltip||{};var e=t.theme.mode||"light",i=t.theme.palette?t.theme.palette:"dark"===e?"palette4":"palette1",s=t.chart.foreColor?t.chart.foreColor:"dark"===e?"#f6f7f8":"#373d3f";return t.tooltip.theme=e,t.chart.foreColor=s,t.theme.palette=i,t}},{key:"predefined",value:function(){switch(this.w.config.theme.palette){case"palette1":this.colors=["#008FFB","#00E396","#FEB019","#FF4560","#775DD0"];break;case"palette2":this.colors=["#3f51b5","#03a9f4","#4caf50","#f9ce1d","#FF9800"];break;case"palette3":this.colors=["#33b2df","#546E7A","#d4526e","#13d8aa","#A5978B"];break;case"palette4":this.colors=["#4ecdc4","#c7f464","#81D4FA","#fd6a6a","#546E7A"];break;case"palette5":this.colors=["#2b908f","#f9a3a4","#90ee7e","#fa4443","#69d2e7"];break;case"palette6":this.colors=["#449DD1","#F86624","#EA3546","#662E9B","#C5D86D"];break;case"palette7":this.colors=["#D7263D","#1B998B","#2E294E","#F46036","#E2C044"];break;case"palette8":this.colors=["#662E9B","#F86624","#F9C80E","#EA3546","#43BCCD"];break;case"palette9":this.colors=["#5C4742","#A5978B","#8D5B4C","#5A2A27","#C4BBAF"];break;case"palette10":this.colors=["#A300D6","#7D02EB","#5653FE","#2983FF","#00B1F2"];break;default:this.colors=["#008FFB","#00E396","#FEB019","#FF4560","#775DD0"]}return this.colors}}]),t}(),Utils$1=function(){function t(e){_classCallCheck(this,t),this.w=e.w,this.ttCtx=e,this.ctx=e.ctx}return _createClass(t,[{key:"getNearestValues",value:function(t){var e=t.hoverArea,i=t.elGrid,s=t.clientX,a=t.clientY,r=t.hasBars,n=this.w,o=n.globals.gridWidth,l=o/(n.globals.dataPoints-1),h=i.getBoundingClientRect();(r&&n.globals.comboCharts||r)&&(l=o/n.globals.dataPoints);var c=s-h.left,d=a-h.top;c<0||d<0||c>n.globals.gridWidth||d>n.globals.gridHeight?(e.classList.remove("hovering-zoom"),e.classList.remove("hovering-pan")):n.globals.zoomEnabled?(e.classList.remove("hovering-pan"),e.classList.add("hovering-zoom")):n.globals.panEnabled&&(e.classList.remove("hovering-zoom"),e.classList.add("hovering-pan"));var u=Math.round(c/l);r&&(u=Math.ceil(c/l),u-=1);for(var g,f=null,p=null,x=[],m=0;m<n.globals.seriesXvalues.length;m++)x.push([n.globals.seriesXvalues[m][0]-1e-6].concat(n.globals.seriesXvalues[m]));return x=x.map(function(t){return t.filter(function(t){return t})}),g=n.globals.seriesYvalues.map(function(t){return t.filter(function(t){return t})}),n.globals.isXNumeric&&(f=(p=this.closestInMultiArray(c,d,x,g)).index,u=p.j,null!==f&&(x=n.globals.seriesXvalues[f],u=(p=this.closestInArray(c,x)).index)),(!u||u<1)&&(u=0),{capturedSeries:f,j:u,hoverX:c,hoverY:d}}},{key:"closestInMultiArray",value:function(t,e,i,s){var a=this.w,r=0,n=null,o=-1;a.globals.series.length>1?r=this.getFirstActiveXArray(i):n=0;var l=s[r][0],h=i[r][0],c=Math.abs(t-h),d=Math.abs(e-l),u=d+c;return s.map(function(a,r){a.map(function(a,l){var h=Math.abs(e-s[r][l]),g=Math.abs(t-i[r][l]),f=g+h;f<u&&(u=f,c=g,d=h,n=r,o=l)})}),{index:n,j:o}}},{key:"getFirstActiveXArray",value:function(t){for(var e=0,i=new CoreUtils(this.ctx),s=t.map(function(t,e){return t.length>0?e:-1}),a=0;a<s.length;a++){var r=i.getSeriesTotalByIndex(a);if(-1!==s[a]&&0!==r&&!i.seriesHaveSameValues(a)){e=s[a];break}}return e}},{key:"closestInArray",value:function(t,e){for(var i=e[0],s=null,a=Math.abs(t-i),r=0;r<e.length;r++){var n=Math.abs(t-e[r]);n<a&&(a=n,i=e[r],s=r)}return{index:s}}},{key:"isXoverlap",value:function(t){var e=[],i=this.w.globals.seriesX.filter(function(t){return void 0!==t[0]});if(i.length>0)for(var s=0;s<i.length-1;s++)void 0!==i[s][t]&&void 0!==i[s+1][t]&&i[s][t]!==i[s+1][t]&&e.push("unEqual");return 0===e.length}},{key:"isinitialSeriesSameLen",value:function(){for(var t=!0,e=this.w.globals.initialSeries,i=0;i<e.length-1;i++)if(e[i].data.length!==e[i+1].data.length){t=!1;break}return t}},{key:"getBarsHeight",value:function(t){return _toConsumableArray(t).reduce(function(t,e){return t+e.getBBox().height},0)}},{key:"toggleAllTooltipSeriesGroups",value:function(t){var e=this.w,i=this.ttCtx;0===i.allTooltipSeriesGroups.length&&(i.allTooltipSeriesGroups=e.globals.dom.baseEl.querySelectorAll(".apexcharts-tooltip-series-group"));for(var s=i.allTooltipSeriesGroups,a=0;a<s.length;a++)"enable"===t?(s[a].classList.add("active"),s[a].style.display=e.config.tooltip.items.display):(s[a].classList.remove("active"),s[a].style.display="none")}}]),t}(),Labels=function(){function t(e){_classCallCheck(this,t),this.w=e.w,this.ctx=e.ctx,this.ttCtx=e,this.tooltipUtil=new Utils$1(e)}return _createClass(t,[{key:"drawSeriesTexts",value:function(t){var e=t.shared,i=void 0===e||e,s=t.ttItems,a=t.i,r=void 0===a?0:a,n=t.j,o=void 0===n?null:n;void 0!==this.w.config.tooltip.custom?this.handleCustomTooltip({i:r,j:o}):this.toggleActiveInactiveSeries(i);var l=this.getValuesToPrint({i:r,j:o});this.printLabels({i:r,j:o,values:l,ttItems:s,shared:i});var h=this.ttCtx.getElTooltip();this.ttCtx.tooltipRect.ttWidth=h.getBoundingClientRect().width,this.ttCtx.tooltipRect.ttHeight=h.getBoundingClientRect().height}},{key:"printLabels",value:function(t){var e,i=t.i,s=t.j,a=t.values,r=t.ttItems,n=t.shared,o=this.w,l=a.xVal,h=a.zVal,c=a.xAxisTTVal,d="",u=o.globals.colors[i];null!==s&&o.config.plotOptions.bar.distributed&&(u=o.globals.colors[s]);for(var g=0,f=o.globals.series.length-1;g<o.globals.series.length;g++,f--){var p=this.getFormatters(i);if(d=this.getSeriesName({fn:p.yLbTitleFormatter,index:i,seriesIndex:i,j:s}),n){var x=o.config.tooltip.inverseOrder?f:g;p=this.getFormatters(x),d=this.getSeriesName({fn:p.yLbTitleFormatter,index:x,seriesIndex:i,j:s}),u=o.globals.colors[x],e=p.yLbFormatter(o.globals.series[x][s],{series:o.globals.series,seriesIndex:x,dataPointIndex:s,w:o}),(this.ttCtx.hasBars()&&o.config.chart.stacked&&0===o.globals.series[x][s]||void 0===o.globals.series[x][s])&&(e=void 0)}else e=p.yLbFormatter(o.globals.series[i][s],{series:o.globals.series,seriesIndex:i,dataPointIndex:s,w:o});null===s&&(e=p.yLbFormatter(o.globals.series[i],o)),this.DOMHandling({t:g,ttItems:r,values:{val:e,xVal:l,xAxisTTVal:c,zVal:h},seriesName:d,shared:n,pColor:u})}}},{key:"getFormatters",value:function(t){var e,i=this.w,s=i.globals.yLabelFormatters[t];return void 0!==i.globals.ttVal?Array.isArray(i.globals.ttVal)?(s=i.globals.ttVal[t]&&i.globals.ttVal[t].formatter,e=i.globals.ttVal[t]&&i.globals.ttVal[t].title&&i.globals.ttVal[t].title.formatter):(s=i.globals.ttVal.formatter,"function"==typeof i.globals.ttVal.title.formatter&&(e=i.globals.ttVal.title.formatter)):e=i.config.tooltip.y.title.formatter,"function"!=typeof s&&(s=i.globals.yLabelFormatters[0]?i.globals.yLabelFormatters[0]:function(t){return t}),"function"!=typeof e&&(e=function(t){return t}),{yLbFormatter:s,yLbTitleFormatter:e}}},{key:"getSeriesName",value:function(t){var e=t.fn,i=t.index,s=t.seriesIndex,a=t.j,r=this.w;return e(String(r.globals.seriesNames[i]),{series:r.globals.series,seriesIndex:s,dataPointIndex:a,w:r})}},{key:"DOMHandling",value:function(t){var e=t.t,i=t.ttItems,s=t.values,a=t.seriesName,r=t.shared,n=t.pColor,o=this.w,l=this.ttCtx,h=s.val,c=s.xVal,d=s.xAxisTTVal,u=s.zVal,g=null;g=i[e].children,o.config.tooltip.fillSeriesColor&&(i[e].style.backgroundColor=n,g[0].style.display="none"),l.showTooltipTitle&&(null===l.tooltipTitle&&(l.tooltipTitle=o.globals.dom.baseEl.querySelector(".apexcharts-tooltip-title")),l.tooltipTitle.innerHTML=c),l.blxaxisTooltip&&(l.xaxisTooltipText.innerHTML=""!==d?d:c);var f=i[e].querySelector(".apexcharts-tooltip-text-label");f&&(f.innerHTML=a?a+": ":"");var p=i[e].querySelector(".apexcharts-tooltip-text-value");(p&&(p.innerHTML=h),g[0]&&g[0].classList.contains("apexcharts-tooltip-marker")&&(g[0].style.backgroundColor=n),o.config.tooltip.marker.show||(g[0].style.display="none"),null!==u)&&(i[e].querySelector(".apexcharts-tooltip-text-z-label").innerHTML=o.config.tooltip.z.title,i[e].querySelector(".apexcharts-tooltip-text-z-value").innerHTML=u);r&&g[0]&&(null==h||o.globals.collapsedSeriesIndices.indexOf(e)>-1?g[0].parentNode.style.display="none":g[0].parentNode.style.display=o.config.tooltip.items.display)}},{key:"toggleActiveInactiveSeries",value:function(t){var e=this.w;if(t)this.tooltipUtil.toggleAllTooltipSeriesGroups("enable");else{this.tooltipUtil.toggleAllTooltipSeriesGroups("disable");var i=e.globals.dom.baseEl.querySelector(".apexcharts-tooltip-series-group");i&&(i.classList.add("active"),i.style.display=e.config.tooltip.items.display)}}},{key:"getValuesToPrint",value:function(t){var e=t.i,i=t.j,s=this.w,a=this.ctx.series.filteredSeriesX(),r="",n=null,o=null,l={series:s.globals.series,seriesIndex:e,dataPointIndex:i,w:s},h=s.globals.ttZFormatter;null===i?o=s.globals.series[e]:s.globals.isXNumeric?(r=a[e][i],0===a[e].length&&(r=a[this.tooltipUtil.getFirstActiveXArray(a)][i])):r=void 0!==s.globals.labels[i]?s.globals.labels[i]:"";var c=r;s.globals.isXNumeric&&"datetime"===s.config.xaxis.type?r=new Formatters(this.ctx).xLabelFormat(s.globals.ttKeyFormatter,c,c):s.globals.isBarHorizontal||(r=s.globals.xLabelFormatter(c,l));return void 0!==s.config.tooltip.x.formatter&&(r=s.globals.ttKeyFormatter(c,l)),s.globals.seriesZ.length>0&&s.globals.seriesZ[0].length>0&&(n=h(s.globals.seriesZ[e][i],s)),{val:o,xVal:r,xAxisTTVal:"function"==typeof s.config.xaxis.tooltip.formatter?s.globals.xaxisTooltipFormatter(c,l):r,zVal:n}}},{key:"handleCustomTooltip",value:function(t){var e=t.i,i=t.j,s=this.w;this.ttCtx.getElTooltip().innerHTML=s.config.tooltip.custom({ctx:this.ctx,series:s.globals.series,seriesIndex:e,dataPointIndex:i,w:s})}}]),t}(),Position=function(){function t(e){_classCallCheck(this,t),this.ttCtx=e,this.ctx=e.ctx,this.w=e.w}return _createClass(t,[{key:"moveXCrosshairs",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=this.ttCtx,s=this.w,a=i.getElXCrosshairs(),r=t-i.xcrosshairsWidth/2,n=s.globals.labels.slice().length;if(null!==e&&(r=s.globals.gridWidth/n*e),"tickWidth"===s.config.xaxis.crosshairs.width||"barWidth"===s.config.xaxis.crosshairs.width?r+i.xcrosshairsWidth>s.globals.gridWidth&&(r=s.globals.gridWidth-i.xcrosshairsWidth):null!==e&&(r+=s.globals.gridWidth/n/2),r<0&&(r=0),r>s.globals.gridWidth&&(r=s.globals.gridWidth),null!==a&&(a.setAttribute("x",r),a.setAttribute("x1",r),a.setAttribute("x2",r),a.setAttribute("y2",s.globals.gridHeight),a.classList.add("active")),i.blxaxisTooltip){var o=r;"tickWidth"!==s.config.xaxis.crosshairs.width&&"barWidth"!==s.config.xaxis.crosshairs.width||(o=r+i.xcrosshairsWidth/2),this.moveXAxisTooltip(o)}}},{key:"moveYCrosshairs",value:function(t){var e=this.ttCtx;null!==e.ycrosshairs&&(Graphics.setAttrs(e.ycrosshairs,{y1:t,y2:t}),Graphics.setAttrs(e.ycrosshairsHidden,{y1:t,y2:t}))}},{key:"moveXAxisTooltip",value:function(t){var e=this.w,i=this.ttCtx;if(null!==i.xaxisTooltip){i.xaxisTooltip.classList.add("active");var s=i.xaxisOffY+e.config.xaxis.tooltip.offsetY+e.globals.translateY+1+e.config.xaxis.offsetY;if(t-=i.xaxisTooltip.getBoundingClientRect().width/2,!isNaN(t)){t+=e.globals.translateX;var a;a=new Graphics(this.ctx).getTextRects(i.xaxisTooltipText.innerHTML),i.xaxisTooltipText.style.minWidth=a.width+"px",i.xaxisTooltip.style.left=t+"px",i.xaxisTooltip.style.top=s+"px"}}}},{key:"moveYAxisTooltip",value:function(t){var e=this.w,i=this.ttCtx;null===i.yaxisTTEls&&(i.yaxisTTEls=e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));var s=parseInt(i.ycrosshairsHidden.getAttribute("y1")),a=e.globals.translateY+s,r=i.yaxisTTEls[t].getBoundingClientRect().height,n=e.globals.translateYAxisX[t]-2;e.config.yaxis[t].opposite&&(n-=26),a-=r/2,-1===e.globals.ignoreYAxisIndexes.indexOf(t)?(i.yaxisTTEls[t].classList.add("active"),i.yaxisTTEls[t].style.top=a+"px",i.yaxisTTEls[t].style.left=n+e.config.yaxis[t].tooltip.offsetX+"px"):i.yaxisTTEls[t].classList.remove("active")}},{key:"moveTooltip",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=this.w,a=this.ttCtx,r=a.getElTooltip(),n=a.tooltipRect,o=null!==i?parseInt(i):1,l=parseInt(t)+o+5,h=parseInt(e)+o/2;if(l>s.globals.gridWidth/2&&(l=l-n.ttWidth-o-15),l>s.globals.gridWidth-n.ttWidth-10&&(l=s.globals.gridWidth-n.ttWidth),l<-20&&(l=-20),s.config.tooltip.followCursor){var c=a.getElGrid().getBoundingClientRect();h=a.e.clientY+s.globals.translateY-c.top-n.ttHeight/2}var d=this.positionChecks(n,l,h);l=d.x,h=d.y,isNaN(l)||(l+=s.globals.translateX,r.style.left=l+"px",r.style.top=h+"px")}},{key:"positionChecks",value:function(t,e,i){var s=this.w;return t.ttHeight+i>s.globals.gridHeight&&(i=s.globals.gridHeight-t.ttHeight+s.globals.translateY),i<0&&(i=0),{x:e,y:i}}},{key:"moveMarkers",value:function(t,e){var i=this.w,s=this.ttCtx;if(i.globals.markers.size[t]>0)for(var a=i.globals.dom.baseEl.querySelectorAll(" .apexcharts-series[data\\:realIndex='".concat(t,"'] .apexcharts-marker")),r=0;r<a.length;r++)parseInt(a[r].getAttribute("rel"))===e&&(s.marker.resetPointsSize(),s.marker.enlargeCurrentPoint(e,a[r]));else s.marker.resetPointsSize(),this.moveDynamicPointOnHover(e,t)}},{key:"moveDynamicPointOnHover",value:function(t,e){var i,s,a=this.w,r=this.ttCtx,n=a.globals.pointsArray,o=a.config.markers.hover.size;void 0===o&&(o=a.globals.markers.size[e]+a.config.markers.hover.sizeOffset),i=n[e][t][0],s=n[e][t][1]?n[e][t][1]:0;var l=a.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(e,"'] .apexcharts-series-markers circle"));l&&(l.setAttribute("r",o),l.setAttribute("cx",i),l.setAttribute("cy",s)),this.moveXCrosshairs(i),r.fixedTooltip||this.moveTooltip(i,s,o)}},{key:"moveDynamicPointsOnHover",value:function(t){var e,i=this.ttCtx,s=i.w,a=0,r=0,n=s.globals.pointsArray;e=new Series(this.ctx).getActiveSeriesIndex();var o=s.config.markers.hover.size;void 0===o&&(o=s.globals.markers.size[e]+s.config.markers.hover.sizeOffset),n[e]&&(a=n[e][t][0],r=n[e][t][1]);var l=null,h=i.getAllMarkers();if(null!==(l=null!==h?h:s.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers circle")))for(var c=0;c<l.length;c++){var d=n[c];if(d&&d.length){var u=n[c][t][1];l[c].setAttribute("cx",a);var g=parseInt(l[c].parentNode.parentNode.parentNode.getAttribute("data:realIndex"));null!==u?(l[g]&&l[g].setAttribute("r",o),l[g]&&l[g].setAttribute("cy",u)):l[g]&&l[g].setAttribute("r",0)}}if(this.moveXCrosshairs(a),!i.fixedTooltip){var f=r||s.globals.gridHeight;this.moveTooltip(a,f,o)}}},{key:"moveStickyTooltipOverBars",value:function(t){var e,i=this.w,s=this.ttCtx,a=i.globals.dom.baseEl.querySelector(".apexcharts-bar-series .apexcharts-series[rel='1'] path[j='".concat(t,"'], .apexcharts-candlestick-series .apexcharts-series[rel='1'] path[j='").concat(t,"'], .apexcharts-rangebar-series .apexcharts-series[rel='1'] path[j='").concat(t,"']")),r=a?parseFloat(a.getAttribute("cx")):0,n=a?parseFloat(a.getAttribute("barWidth")):0;i.globals.isXNumeric?r-=n/2:(r=s.xAxisTicksPositions[t-1]+s.dataPointsDividedWidth/2,isNaN(r)&&(r=s.xAxisTicksPositions[t]-s.dataPointsDividedWidth/2));var o=s.getElGrid().getBoundingClientRect();if(e=s.e.clientY-o.top-s.tooltipRect.ttHeight/2,this.moveXCrosshairs(r),!s.fixedTooltip){var l=e||i.globals.gridHeight;this.moveTooltip(r,l)}}}]),t}(),Marker=function(){function t(e){_classCallCheck(this,t),this.w=e.w,this.ttCtx=e,this.ctx=e.ctx,this.tooltipPosition=new Position(e)}return _createClass(t,[{key:"drawDynamicPoints",value:function(){for(var t=this.w,e=new Graphics(this.ctx),i=new Markers(this.ctx),s=t.globals.dom.baseEl.querySelectorAll(".apexcharts-series"),a=0;a<s.length;a++){var r=parseInt(s[a].getAttribute("data:realIndex")),n=t.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(r,"'] .apexcharts-series-markers-wrap"));if(null!==n){var o=void 0,l="apexcharts-marker w".concat((Math.random()+1).toString(36).substring(4));"line"!==t.config.chart.type&&"area"!==t.config.chart.type||t.globals.comboCharts||t.config.tooltip.intersect||(l+=" no-pointer-events");var h=i.getMarkerConfig(l,r);(o=e.drawMarker(0,0,h)).node.setAttribute("default-marker-size",0);var c=document.createElementNS(t.globals.SVGNS,"g");c.classList.add("apexcharts-series-markers"),c.appendChild(o.node),n.appendChild(c)}}}},{key:"enlargeCurrentPoint",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,a=this.w;"bubble"!==a.config.chart.type&&this.newPointSize(t,e);var r=e.getAttribute("cx"),n=e.getAttribute("cy");if(null!==i&&null!==s&&(r=i,n=s),this.tooltipPosition.moveXCrosshairs(r),!this.fixedTooltip){if("radar"===a.config.chart.type){var o=this.ttCtx.getElGrid().getBoundingClientRect();r=this.ttCtx.e.clientX-o.left}this.tooltipPosition.moveTooltip(r,n,a.config.markers.hover.size)}}},{key:"enlargePoints",value:function(t){for(var e=this.w,i=this.ttCtx,s=t,a=e.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"),r=e.config.markers.hover.size,n=0;n<a.length;n++){var o=a[n].getAttribute("rel"),l=a[n].getAttribute("index");if(void 0===r&&(r=e.globals.markers.size[l]+e.config.markers.hover.sizeOffset),s===parseInt(o)){this.newPointSize(s,a[n]);var h=a[n].getAttribute("cx"),c=a[n].getAttribute("cy");this.tooltipPosition.moveXCrosshairs(h),i.fixedTooltip||this.tooltipPosition.moveTooltip(h,c,r)}else this.oldPointSize(a[n])}}},{key:"newPointSize",value:function(t,e){var i=this.w,s=i.config.markers.hover.size,a=null;a=0===t?e.parentNode.firstChild:e.parentNode.lastChild;var r=parseInt(a.getAttribute("index"));void 0===s&&(s=i.globals.markers.size[r]+i.config.markers.hover.sizeOffset),a.setAttribute("r",s)}},{key:"oldPointSize",value:function(t){var e=parseInt(t.getAttribute("default-marker-size"));t.setAttribute("r",e)}},{key:"resetPointsSize",value:function(){for(var t=this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"),e=0;e<t.length;e++){var i=parseInt(t[e].getAttribute("default-marker-size"));Utils.isNumber(i)?t[e].setAttribute("r",i):t[e].setAttribute("r",0)}}}]),t}(),Intersect=function(){function t(e){_classCallCheck(this,t),this.w=e.w,this.ttCtx=e}return _createClass(t,[{key:"getAttr",value:function(t,e){return parseFloat(t.target.getAttribute(e))}},{key:"handleHeatTooltip",value:function(t){var e=t.e,i=t.opt,s=t.x,a=t.y,r=this.ttCtx,n=this.w;if(e.target.classList.contains("apexcharts-heatmap-rect")){var o=this.getAttr(e,"i"),l=this.getAttr(e,"j"),h=this.getAttr(e,"cx"),c=this.getAttr(e,"cy"),d=this.getAttr(e,"width"),u=this.getAttr(e,"height");if(r.tooltipLabels.drawSeriesTexts({ttItems:i.ttItems,i:o,j:l,shared:!1}),s=h+r.tooltipRect.ttWidth/2+d,a=c+r.tooltipRect.ttHeight/2-u/2,r.tooltipPosition.moveXCrosshairs(h+d/2),s>n.globals.gridWidth/2&&(s=h-r.tooltipRect.ttWidth/2+d),r.w.config.tooltip.followCursor){var g=r.getElGrid().getBoundingClientRect();a=r.e.clientY-g.top+n.globals.translateY/2-10}}return{x:s,y:a}}},{key:"handleMarkerTooltip",value:function(t){var e,i,s=t.e,a=t.opt,r=t.x,n=t.y,o=this.w,l=this.ttCtx;if(s.target.classList.contains("apexcharts-marker")){var h=parseInt(a.paths.getAttribute("cx")),c=parseInt(a.paths.getAttribute("cy")),d=parseFloat(a.paths.getAttribute("val"));if(i=parseInt(a.paths.getAttribute("rel")),e=parseInt(a.paths.parentNode.parentNode.parentNode.getAttribute("rel"))-1,l.intersect){var u=Utils.findAncestor(a.paths,"apexcharts-series");u&&(e=parseInt(u.getAttribute("data:realIndex")))}if(l.tooltipLabels.drawSeriesTexts({ttItems:a.ttItems,i:e,j:i,shared:!l.showOnIntersect&&o.config.tooltip.shared}),"mouseup"===s.type&&l.markerClick(s,e,i),r=h,n=c+o.globals.translateY-1.4*l.tooltipRect.ttHeight,l.w.config.tooltip.followCursor){var g=l.getElGrid().getBoundingClientRect();n=l.e.clientY+o.globals.translateY-g.top}d<0&&(n=c),l.marker.enlargeCurrentPoint(i,a.paths,r,n)}return{x:r,y:n}}},{key:"handleBarTooltip",value:function(t){var e,i,s=t.e,a=t.opt,r=this.w,n=this.ttCtx,o=n.getElTooltip(),l=0,h=0,c=0,d=this.getBarTooltipXY({e:s,opt:a});e=d.i;var u=d.barHeight,g=d.j;if(r.globals.isBarHorizontal&&n.hasBars()||!r.config.tooltip.shared?(h=d.x,c=d.y,i=Array.isArray(r.config.stroke.width)?r.config.stroke.width[e]:r.config.stroke.width,l=h):r.globals.comboCharts||r.config.tooltip.shared||(l/=2),isNaN(c)&&(c=r.globals.svgHeight-n.tooltipRect.ttHeight),h+n.tooltipRect.ttWidth>r.globals.gridWidth?h-=n.tooltipRect.ttWidth:h<0&&(h+=n.tooltipRect.ttWidth),n.w.config.tooltip.followCursor){var f=n.getElGrid().getBoundingClientRect();c=n.e.clientY-f.top}if(null===n.tooltip&&(n.tooltip=r.globals.dom.baseEl.querySelector(".apexcharts-tooltip")),r.config.tooltip.shared||(r.globals.comboChartsHasBars?n.tooltipPosition.moveXCrosshairs(l+i/2):n.tooltipPosition.moveXCrosshairs(l)),!n.fixedTooltip&&(!r.config.tooltip.shared||r.globals.isBarHorizontal&&n.hasBars())){x&&(h=r.globals.gridWidth-h),o.style.left=h+r.globals.translateX+"px";var p=parseInt(a.paths.parentNode.getAttribute("data:realIndex")),x=r.globals.isMultipleYAxis?r.config.yaxis[p]&&r.config.yaxis[p].reversed:r.config.yaxis[0].reversed;!x||r.globals.isBarHorizontal&&n.hasBars()||(c=c+u-2*(r.globals.series[e][g]<0?u:0)),n.tooltipRect.ttHeight+c>r.globals.gridHeight?(c=r.globals.gridHeight-n.tooltipRect.ttHeight+r.globals.translateY,o.style.top=c+"px"):o.style.top=c+r.globals.translateY-n.tooltipRect.ttHeight/2+"px"}}},{key:"getBarTooltipXY",value:function(t){var e=t.e,i=t.opt,s=this.w,a=null,r=this.ttCtx,n=0,o=0,l=0,h=0,c=0,d=e.target.classList;if(d.contains("apexcharts-bar-area")||d.contains("apexcharts-candlestick-area")||d.contains("apexcharts-rangebar-area")){var u=e.target,g=u.getBoundingClientRect(),f=i.elGrid.getBoundingClientRect(),p=g.height;c=g.height;var x=g.width,m=parseInt(u.getAttribute("cx")),b=parseInt(u.getAttribute("cy"));h=parseFloat(u.getAttribute("barWidth"));var v="touchmove"===e.type?e.touches[0].clientX:e.clientX;a=parseInt(u.getAttribute("j")),n=parseInt(u.parentNode.getAttribute("rel"))-1,s.globals.comboCharts&&(n=parseInt(u.parentNode.getAttribute("data:realIndex"))),r.tooltipLabels.drawSeriesTexts({ttItems:i.ttItems,i:n,j:a,shared:!r.showOnIntersect&&s.config.tooltip.shared}),s.config.tooltip.followCursor?s.globals.isBarHorizontal?(o=v-f.left+15,l=b-r.dataPointsDividedHeight+p/2-r.tooltipRect.ttHeight/2):(o=s.globals.isXNumeric?m-x/2:m-r.dataPointsDividedWidth+x/2,l=e.clientY-f.top-r.tooltipRect.ttHeight/2-15):s.globals.isBarHorizontal?((o=m)<r.xyRatios.baseLineInvertedY&&(o=m-r.tooltipRect.ttWidth),l=b-r.dataPointsDividedHeight+p/2-r.tooltipRect.ttHeight/2):(o=s.globals.isXNumeric?m-x/2:m-r.dataPointsDividedWidth+x/2,l=b)}return{x:o,y:l,barHeight:c,barWidth:h,i:n,j:a}}}]),t}(),AxesTooltip=function(){function t(e){_classCallCheck(this,t),this.w=e.w,this.ttCtx=e}return _createClass(t,[{key:"drawXaxisTooltip",value:function(){var t=this.w,e=this.ttCtx,i="bottom"===t.config.xaxis.position;e.xaxisOffY=i?t.globals.gridHeight+1:1;var s=i?"apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom":"apexcharts-xaxistooltip apexcharts-xaxistooltip-top",a=t.globals.dom.elWrap;e.blxaxisTooltip&&(null===t.globals.dom.baseEl.querySelector(".apexcharts-xaxistooltip")&&(e.xaxisTooltip=document.createElement("div"),e.xaxisTooltip.setAttribute("class",s+" "+t.config.tooltip.theme),a.appendChild(e.xaxisTooltip),e.xaxisTooltipText=document.createElement("div"),e.xaxisTooltipText.classList.add("apexcharts-xaxistooltip-text"),e.xaxisTooltipText.style.fontFamily=t.config.xaxis.tooltip.style.fontFamily||t.config.chart.fontFamily,e.xaxisTooltipText.style.fontSize=t.config.xaxis.tooltip.style.fontSize,e.xaxisTooltip.appendChild(e.xaxisTooltipText)))}},{key:"drawYaxisTooltip",value:function(){for(var t=this.w,e=this.ttCtx,i=function(i){var s=t.config.yaxis[i].opposite||t.config.yaxis[i].crosshairs.opposite;e.yaxisOffX=s?t.globals.gridWidth+1:1;var a="apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(i,s?" apexcharts-yaxistooltip-right":" apexcharts-yaxistooltip-left");t.globals.yAxisSameScaleIndices.map(function(e,s){e.map(function(e,s){s===i&&(a+=t.config.yaxis[s].show?" ":" apexcharts-yaxistooltip-hidden")})});var r=t.globals.dom.elWrap;e.blyaxisTooltip&&(null===t.globals.dom.baseEl.querySelector(".apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(i))&&(e.yaxisTooltip=document.createElement("div"),e.yaxisTooltip.setAttribute("class",a+" "+t.config.tooltip.theme),r.appendChild(e.yaxisTooltip),0===i&&(e.yaxisTooltipText=[]),e.yaxisTooltipText.push(document.createElement("div")),e.yaxisTooltipText[i].classList.add("apexcharts-yaxistooltip-text"),e.yaxisTooltip.appendChild(e.yaxisTooltipText[i])))},s=0;s<t.config.yaxis.length;s++)i(s)}},{key:"setXCrosshairWidth",value:function(){var t=this.w,e=this.ttCtx,i=e.getElXCrosshairs();if(e.xcrosshairsWidth=parseInt(t.config.xaxis.crosshairs.width),t.globals.comboCharts){var s=t.globals.dom.baseEl.querySelector(".apexcharts-bar-area");if(null!==s&&"barWidth"===t.config.xaxis.crosshairs.width){var a=parseFloat(s.getAttribute("barWidth"));e.xcrosshairsWidth=a}else if("tickWidth"===t.config.xaxis.crosshairs.width){var r=t.globals.labels.length;e.xcrosshairsWidth=t.globals.gridWidth/r}}else if("tickWidth"===t.config.xaxis.crosshairs.width){var n=t.globals.labels.length;e.xcrosshairsWidth=t.globals.gridWidth/n}else if("barWidth"===t.config.xaxis.crosshairs.width){var o=t.globals.dom.baseEl.querySelector(".apexcharts-bar-area");if(null!==o){var l=parseFloat(o.getAttribute("barWidth"));e.xcrosshairsWidth=l}else e.xcrosshairsWidth=1}t.globals.isBarHorizontal&&(e.xcrosshairsWidth=0),null!==i&&e.xcrosshairsWidth>0&&i.setAttribute("width",e.xcrosshairsWidth)}},{key:"handleYCrosshair",value:function(){var t=this.w,e=this.ttCtx;e.ycrosshairs=t.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs"),e.ycrosshairsHidden=t.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs-hidden")}},{key:"drawYaxisTooltipText",value:function(t,e,i){var s=this.ttCtx,a=this.w,r=a.globals.yLabelFormatters[t];if(s.blyaxisTooltip){var n=s.getElGrid().getBoundingClientRect(),o=(e-n.top)*i.yRatio[t],l=a.globals.maxYArr[t]-a.globals.minYArr[t],h=a.globals.minYArr[t]+(l-o);s.tooltipPosition.moveYCrosshairs(e-n.top),s.yaxisTooltipText[t].innerHTML=r(h),s.tooltipPosition.moveYAxisTooltip(t)}}}]),t}(),Tooltip=function(){function t(e){_classCallCheck(this,t),this.ctx=e,this.w=e.w;var i=this.w;this.tConfig=i.config.tooltip,this.tooltipUtil=new Utils$1(this),this.tooltipLabels=new Labels(this),this.tooltipPosition=new Position(this),this.marker=new Marker(this),this.intersect=new Intersect(this),this.axesTooltip=new AxesTooltip(this),this.showOnIntersect=this.tConfig.intersect,this.showTooltipTitle=this.tConfig.x.show,this.fixedTooltip=this.tConfig.fixed.enabled,this.xaxisTooltip=null,this.yaxisTTEls=null,this.isBarShared=!i.globals.isBarHorizontal&&this.tConfig.shared}return _createClass(t,[{key:"getElTooltip",value:function(t){return t||(t=this),t.w.globals.dom.baseEl.querySelector(".apexcharts-tooltip")}},{key:"getElXCrosshairs",value:function(){return this.w.globals.dom.baseEl.querySelector(".apexcharts-xcrosshairs")}},{key:"getElGrid",value:function(){return this.w.globals.dom.baseEl.querySelector(".apexcharts-grid")}},{key:"drawTooltip",value:function(t){var e=this.w;this.xyRatios=t,this.blxaxisTooltip=e.config.xaxis.tooltip.enabled&&e.globals.axisCharts,this.blyaxisTooltip=e.config.yaxis[0].tooltip.enabled&&e.globals.axisCharts,this.allTooltipSeriesGroups=[],e.globals.axisCharts||(this.showTooltipTitle=!1);var i=document.createElement("div");if(i.classList.add("apexcharts-tooltip"),i.classList.add(this.tConfig.theme),e.globals.dom.elWrap.appendChild(i),e.globals.axisCharts){this.axesTooltip.drawXaxisTooltip(),this.axesTooltip.drawYaxisTooltip(),this.axesTooltip.setXCrosshairWidth(),this.axesTooltip.handleYCrosshair();var s=new XAxis(this.ctx);this.xAxisTicksPositions=s.getXAxisTicksPositions()}if((e.globals.comboCharts&&!this.tConfig.shared||this.tConfig.intersect&&!this.tConfig.shared||("bar"===e.config.chart.type||"rangeBar"===e.config.chart.type)&&!this.tConfig.shared)&&(this.showOnIntersect=!0),0!==e.config.markers.size&&0!==e.globals.markers.largestSize||this.marker.drawDynamicPoints(this),e.globals.collapsedSeries.length!==e.globals.series.length){this.dataPointsDividedHeight=e.globals.gridHeight/e.globals.dataPoints,this.dataPointsDividedWidth=e.globals.gridWidth/e.globals.dataPoints,this.showTooltipTitle&&(this.tooltipTitle=document.createElement("div"),this.tooltipTitle.classList.add("apexcharts-tooltip-title"),this.tooltipTitle.style.fontFamily=this.tConfig.style.fontFamily||e.config.chart.fontFamily,this.tooltipTitle.style.fontSize=this.tConfig.style.fontSize,i.appendChild(this.tooltipTitle));var a=e.globals.series.length;(e.globals.xyCharts||e.globals.comboCharts)&&this.tConfig.shared&&(a=this.showOnIntersect?1:e.globals.series.length),this.ttItems=this.createTTElements(a),this.addSVGEvents()}}},{key:"createTTElements",value:function(t){for(var e=this.w,i=[],s=this.getElTooltip(),a=0;a<t;a++){var r=document.createElement("div");r.classList.add("apexcharts-tooltip-series-group"),this.tConfig.shared&&this.tConfig.enabledOnSeries&&Array.isArray(this.tConfig.enabledOnSeries)&&this.tConfig.enabledOnSeries.indexOf(a)<0&&r.classList.add("apexcharts-tooltip-series-group-hidden");var n=document.createElement("span");n.classList.add("apexcharts-tooltip-marker"),n.style.backgroundColor=e.globals.colors[a],r.appendChild(n);var o=document.createElement("div");o.classList.add("apexcharts-tooltip-text"),o.style.fontFamily=this.tConfig.style.fontFamily||e.config.chart.fontFamily,o.style.fontSize=this.tConfig.style.fontSize;var l=document.createElement("div");l.classList.add("apexcharts-tooltip-y-group");var h=document.createElement("span");h.classList.add("apexcharts-tooltip-text-label"),l.appendChild(h);var c=document.createElement("span");c.classList.add("apexcharts-tooltip-text-value"),l.appendChild(c);var d=document.createElement("div");d.classList.add("apexcharts-tooltip-z-group");var u=document.createElement("span");u.classList.add("apexcharts-tooltip-text-z-label"),d.appendChild(u);var g=document.createElement("span");g.classList.add("apexcharts-tooltip-text-z-value"),d.appendChild(g),o.appendChild(l),o.appendChild(d),r.appendChild(o),s.appendChild(r),i.push(r)}return i}},{key:"addSVGEvents",value:function(){var t=this.w,e=t.config.chart.type,i=this.getElTooltip(),s=!("bar"!==e&&"candlestick"!==e&&"rangeBar"!==e),a=t.globals.dom.Paper.node,r=this.getElGrid();r&&(this.seriesBound=r.getBoundingClientRect());var n,o=[],l=[],h={hoverArea:a,elGrid:r,tooltipEl:i,tooltipY:o,tooltipX:l,ttItems:this.ttItems};if(t.globals.axisCharts&&("area"===e||"line"===e||"scatter"===e||"bubble"===e?n=t.globals.dom.baseEl.querySelectorAll(".apexcharts-series[data\\:longestSeries='true'] .apexcharts-marker"):s?n=t.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-bar-area, .apexcharts-series .apexcharts-candlestick-area, .apexcharts-series .apexcharts-rangebar-area"):"heatmap"===e?n=t.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-heatmap"):"radar"===e&&(n=t.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-marker")),n&&n.length))for(var c=0;c<n.length;c++)o.push(n[c].getAttribute("cy")),l.push(n[c].getAttribute("cx"));if(t.globals.xyCharts&&!this.showOnIntersect||t.globals.comboCharts&&!this.showOnIntersect||s&&this.hasBars()&&this.tConfig.shared)this.addPathsEventListeners([a],h);else if(s&&!t.globals.comboCharts)this.addBarsEventListeners(h);else if("bubble"===e||"scatter"===e||"radar"===e||this.showOnIntersect&&("area"===e||"line"===e))this.addPointsEventsListeners(h);else if(!t.globals.axisCharts||"heatmap"===e){var d=t.globals.dom.baseEl.querySelectorAll(".apexcharts-series");this.addPathsEventListeners(d,h)}if(this.showOnIntersect){var u=t.globals.dom.baseEl.querySelectorAll(".apexcharts-line-series .apexcharts-marker");u.length>0&&this.addPathsEventListeners(u,h);var g=t.globals.dom.baseEl.querySelectorAll(".apexcharts-area-series .apexcharts-marker");g.length>0&&this.addPathsEventListeners(g,h),this.hasBars()&&!this.tConfig.shared&&this.addBarsEventListeners(h)}}},{key:"drawFixedTooltipRect",value:function(){var t=this.w,e=this.getElTooltip(),i=e.getBoundingClientRect(),s=i.width+10,a=i.height+10,r=this.tConfig.fixed.offsetX,n=this.tConfig.fixed.offsetY;return this.tConfig.fixed.position.toLowerCase().indexOf("right")>-1&&(r=r+t.globals.svgWidth-s+10),this.tConfig.fixed.position.toLowerCase().indexOf("bottom")>-1&&(n=n+t.globals.svgHeight-a-10),e.style.left=r+"px",e.style.top=n+"px",{x:r,y:n,ttWidth:s,ttHeight:a}}},{key:"addPointsEventsListeners",value:function(t){var e=this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers .apexcharts-marker");this.addPathsEventListeners(e,t)}},{key:"addBarsEventListeners",value:function(t){var e=this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-bar-area, .apexcharts-candlestick-area, .apexcharts-rangebar-area");this.addPathsEventListeners(e,t)}},{key:"addPathsEventListeners",value:function(t,e){for(var i=this,s=this,a=function(a){var r={paths:t[a],tooltipEl:e.tooltipEl,tooltipY:e.tooltipY,tooltipX:e.tooltipX,elGrid:e.elGrid,hoverArea:e.hoverArea,ttItems:e.ttItems};i.w.globals.tooltipOpts=r;["mousemove","mouseup","touchmove","mouseout","touchend"].map(function(e){return t[a].addEventListener(e,s.seriesHover.bind(s,r),{capture:!1,passive:!0})})},r=0;r<t.length;r++)a(r)}},{key:"seriesHover",value:function(t,e){var i=this,s=[],a=this.w;a.config.chart.group&&(s=this.ctx.getGroupedCharts()),a.globals.axisCharts&&(a.globals.minX===-1/0&&a.globals.maxX===1/0||0===a.globals.dataPoints)||(s.length?s.forEach(function(s){var a=i.getElTooltip(s),r={paths:t.paths,tooltipEl:a,tooltipY:t.tooltipY,tooltipX:t.tooltipX,elGrid:t.elGrid,hoverArea:t.hoverArea,ttItems:s.w.globals.tooltip.ttItems};s.w.globals.minX===i.w.globals.minX&&s.w.globals.maxX===i.w.globals.maxX&&s.w.globals.tooltip.seriesHoverByContext({chartCtx:s,ttCtx:s.w.globals.tooltip,opt:r,e:e})}):this.seriesHoverByContext({chartCtx:this.ctx,ttCtx:this.w.globals.tooltip,opt:t,e:e}))}},{key:"seriesHoverByContext",value:function(t){var e=t.chartCtx,i=t.ttCtx,s=t.opt,a=t.e,r=e.w,n=this.getElTooltip();(i.tooltipRect={x:0,y:0,ttWidth:n.getBoundingClientRect().width,ttHeight:n.getBoundingClientRect().height},i.e=a,!i.hasBars()||r.globals.comboCharts||i.isBarShared)||this.tConfig.onDatasetHover.highlightDataSeries&&new Series(e).toggleSeriesOnHover(a,a.target.parentNode);i.fixedTooltip&&i.drawFixedTooltipRect(),r.globals.axisCharts?i.axisChartsTooltips({e:a,opt:s,tooltipRect:i.tooltipRect}):i.nonAxisChartsTooltips({e:a,opt:s,tooltipRect:i.tooltipRect})}},{key:"axisChartsTooltips",value:function(t){var e,i,s,a=t.e,r=t.opt,n=this.w,o=null,l=r.elGrid.getBoundingClientRect(),h="touchmove"===a.type?a.touches[0].clientX:a.clientX,c="touchmove"===a.type?a.touches[0].clientY:a.clientY;if(this.clientY=c,this.clientX=h,c<l.top||c>l.top+l.height)this.handleMouseOut(r);else{if(Array.isArray(this.tConfig.enabledOnSeries)&&!n.config.tooltip.shared){var d=parseInt(r.paths.getAttribute("index"));if(this.tConfig.enabledOnSeries.indexOf(d)<0)return void this.handleMouseOut(r)}var u=this.getElTooltip(),g=this.getElXCrosshairs(),f=n.globals.xyCharts||"bar"===n.config.chart.type&&!n.globals.isBarHorizontal&&this.hasBars()&&this.tConfig.shared||n.globals.comboCharts&&this.hasBars;if(n.globals.isBarHorizontal&&this.hasBars()&&(f=!1),"mousemove"===a.type||"touchmove"===a.type||"mouseup"===a.type){if(null!==g&&g.classList.add("active"),null!==this.ycrosshairs&&this.blyaxisTooltip&&this.ycrosshairs.classList.add("active"),f&&!this.showOnIntersect){e=(o=this.tooltipUtil.getNearestValues({context:this,hoverArea:r.hoverArea,elGrid:r.elGrid,clientX:h,clientY:c,hasBars:this.hasBars})).j;var p=o.capturedSeries;if(o.hoverX<0||o.hoverX>n.globals.gridWidth)return void this.handleMouseOut(r);if(null!==p){if(null===n.globals.series[p][e])return void r.tooltipEl.classList.remove("active");void 0!==n.globals.series[p][e]?this.tConfig.shared&&this.tooltipUtil.isXoverlap(e)&&this.tooltipUtil.isinitialSeriesSameLen()?this.create(a,this,p,e,r.ttItems):this.create(a,this,p,e,r.ttItems,!1):this.tooltipUtil.isXoverlap(e)&&this.create(a,this,0,e,r.ttItems)}else this.tooltipUtil.isXoverlap(e)&&this.create(a,this,0,e,r.ttItems)}else if("heatmap"===n.config.chart.type){var x=this.intersect.handleHeatTooltip({e:a,opt:r,x:i,y:s});i=x.x,s=x.y,u.style.left=i+"px",u.style.top=s+"px"}else this.hasBars&&this.intersect.handleBarTooltip({e:a,opt:r}),this.hasMarkers&&this.intersect.handleMarkerTooltip({e:a,opt:r,x:i,y:s});if(this.blyaxisTooltip)for(var m=0;m<n.config.yaxis.length;m++)this.axesTooltip.drawYaxisTooltipText(m,c,this.xyRatios);r.tooltipEl.classList.add("active")}else"mouseout"!==a.type&&"touchend"!==a.type||this.handleMouseOut(r)}}},{key:"nonAxisChartsTooltips",value:function(t){var e=t.e,i=t.opt,s=t.tooltipRect,a=this.w,r=i.paths.getAttribute("rel"),n=this.getElTooltip(),o=a.globals.dom.elWrap.getBoundingClientRect();if("mousemove"===e.type||"touchmove"===e.type){n.classList.add("active"),this.tooltipLabels.drawSeriesTexts({ttItems:i.ttItems,i:parseInt(r)-1,shared:!1});var l=a.globals.clientX-o.left-s.ttWidth/2,h=a.globals.clientY-o.top-s.ttHeight-10;n.style.left=l+"px",n.style.top=h+"px"}else"mouseout"!==e.type&&"touchend"!==e.type||n.classList.remove("active")}},{key:"deactivateHoverFilter",value:function(){for(var t=this.w,e=new Graphics(this.ctx),i=t.globals.dom.Paper.select(".apexcharts-bar-area"),s=0;s<i.length;s++)e.pathMouseLeave(i[s])}},{key:"handleMouseOut",value:function(t){var e=this.w,i=this.getElXCrosshairs();if(t.tooltipEl.classList.remove("active"),this.deactivateHoverFilter(),"bubble"!==e.config.chart.type&&this.marker.resetPointsSize(),null!==i&&i.classList.remove("active"),null!==this.ycrosshairs&&this.ycrosshairs.classList.remove("active"),this.blxaxisTooltip&&this.xaxisTooltip.classList.remove("active"),this.blyaxisTooltip){null===this.yaxisTTEls&&(this.yaxisTTEls=e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));for(var s=0;s<this.yaxisTTEls.length;s++)this.yaxisTTEls[s].classList.remove("active")}}},{key:"getElMarkers",value:function(){return this.w.globals.dom.baseEl.querySelectorAll(" .apexcharts-series-markers")}},{key:"getAllMarkers",value:function(){return this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers .apexcharts-marker")}},{key:"hasMarkers",value:function(){return this.getElMarkers().length>0}},{key:"getElBars",value:function(){return this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-bar-series,  .apexcharts-candlestick-series, .apexcharts-rangebar-series")}},{key:"hasBars",value:function(){return this.getElBars().length>0}},{key:"markerClick",value:function(t,e,i){var s=this.w;"function"==typeof s.config.chart.events.markerClick&&s.config.chart.events.markerClick(t,this.ctx,{seriesIndex:e,dataPointIndex:i,w:s}),this.ctx.fireEvent("markerClick",[t,this.ctx,{seriesIndex:e,dataPointIndex:i,w:s}])}},{key:"create",value:function(t,e,i,s,a){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,n=this.w,o=e;"mouseup"===t.type&&this.markerClick(t,i,s),null===r&&(r=this.tConfig.shared);var l=this.hasMarkers(),h=this.getElBars();if(r){if(o.tooltipLabels.drawSeriesTexts({ttItems:a,i:i,j:s,shared:!this.showOnIntersect&&this.tConfig.shared}),l&&(n.globals.markers.largestSize>0?o.marker.enlargePoints(s):o.tooltipPosition.moveDynamicPointsOnHover(s)),this.hasBars()&&(this.barSeriesHeight=this.tooltipUtil.getBarsHeight(h),this.barSeriesHeight>0)){var c=new Graphics(this.ctx),d=n.globals.dom.Paper.select(".apexcharts-bar-area[j='".concat(s,"']"));this.deactivateHoverFilter(),this.tooltipPosition.moveStickyTooltipOverBars(s);for(var u=0;u<d.length;u++)c.pathMouseEnter(d[u])}}else o.tooltipLabels.drawSeriesTexts({shared:!1,ttItems:a,i:i,j:s}),this.hasBars()&&o.tooltipPosition.moveStickyTooltipOverBars(s),l&&o.tooltipPosition.moveMarkers(i,s)}}]),t}(),icoPan='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="24" viewBox="0 0 24 24" width="24">\n    <defs>\n        <path d="M0 0h24v24H0z" id="a"/>\n    </defs>\n    <clipPath id="b">\n        <use overflow="visible" xlink:href="#a"/>\n    </clipPath>\n    <path clip-path="url(#b)" d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"/>\n</svg>',icoZoom='<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">\n    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>\n    <path d="M0 0h24v24H0V0z" fill="none"/>\n    <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/>\n</svg>',icoReset='<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>\n    <path d="M0 0h24v24H0z" fill="none"/>\n</svg>',icoZoomIn='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>\n</svg>\n',icoZoomOut='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>\n</svg>\n',icoSelect='<svg fill="#6E8192" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2z"/>\n</svg>',icoMenu='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>',Toolbar=function(){function t(e){_classCallCheck(this,t),this.ctx=e,this.w=e.w,this.ev=this.w.config.chart.events,this.localeValues=this.w.globals.locale.toolbar}return _createClass(t,[{key:"createToolbar",value:function(){var t=this.w,e=document.createElement("div");if(e.setAttribute("class","apexcharts-toolbar"),t.globals.dom.elWrap.appendChild(e),this.elZoom=document.createElement("div"),this.elZoomIn=document.createElement("div"),this.elZoomOut=document.createElement("div"),this.elPan=document.createElement("div"),this.elSelection=document.createElement("div"),this.elZoomReset=document.createElement("div"),this.elMenuIcon=document.createElement("div"),this.elMenu=document.createElement("div"),this.elCustomIcons=[],this.t=t.config.chart.toolbar.tools,Array.isArray(this.t.customIcons))for(var i=0;i<this.t.customIcons.length;i++)this.elCustomIcons.push(document.createElement("div"));this.elMenuItems=[];var s=[];this.t.zoomin&&t.config.chart.zoom.enabled&&s.push({el:this.elZoomIn,icon:"string"==typeof this.t.zoomin?this.t.zoomin:icoZoomIn,title:this.localeValues.zoomIn,class:"apexcharts-zoom-in-icon"}),this.t.zoomout&&t.config.chart.zoom.enabled&&s.push({el:this.elZoomOut,icon:"string"==typeof this.t.zoomout?this.t.zoomout:icoZoomOut,title:this.localeValues.zoomOut,class:"apexcharts-zoom-out-icon"}),this.t.zoom&&t.config.chart.zoom.enabled&&s.push({el:this.elZoom,icon:"string"==typeof this.t.zoom?this.t.zoom:icoZoom,title:this.localeValues.selectionZoom,class:t.globals.isTouchDevice?"hidden":"apexcharts-zoom-icon"}),this.t.selection&&t.config.chart.selection.enabled&&s.push({el:this.elSelection,icon:"string"==typeof this.t.selection?this.t.selection:icoSelect,title:this.localeValues.selection,class:t.globals.isTouchDevice?"hidden":"apexcharts-selection-icon"}),this.t.pan&&t.config.chart.zoom.enabled&&s.push({el:this.elPan,icon:"string"==typeof this.t.pan?this.t.pan:icoPan,title:this.localeValues.pan,class:t.globals.isTouchDevice?"hidden":"apexcharts-pan-icon"}),this.t.reset&&t.config.chart.zoom.enabled&&s.push({el:this.elZoomReset,icon:"string"==typeof this.t.reset?this.t.reset:icoReset,title:this.localeValues.reset,class:"apexcharts-reset-zoom-icon"}),this.t.download&&s.push({el:this.elMenuIcon,icon:"string"==typeof this.t.download?this.t.download:icoMenu,title:this.localeValues.menu,class:"apexcharts-menu-icon"});for(var a=0;a<this.elCustomIcons.length;a++)s.push({el:this.elCustomIcons[a],icon:this.t.customIcons[a].icon,title:this.t.customIcons[a].title,index:this.t.customIcons[a].index,class:"apexcharts-toolbar-custom-icon "+this.t.customIcons[a].class});s.forEach(function(t,e){t.index&&Utils.moveIndexInArray(s,e,t.index)});for(var r=0;r<s.length;r++)Graphics.setAttrs(s[r].el,{class:s[r].class,title:s[r].title}),s[r].el.innerHTML=s[r].icon,e.appendChild(s[r].el);e.appendChild(this.elMenu),Graphics.setAttrs(this.elMenu,{class:"apexcharts-menu"});for(var n=[{name:"exportSVG",title:this.localeValues.exportToSVG},{name:"exportPNG",title:this.localeValues.exportToPNG}],o=0;o<n.length;o++)this.elMenuItems.push(document.createElement("div")),this.elMenuItems[o].innerHTML=n[o].title,Graphics.setAttrs(this.elMenuItems[o],{class:"apexcharts-menu-item ".concat(n[o].name),title:n[o].title}),this.elMenu.appendChild(this.elMenuItems[o]);t.globals.zoomEnabled?this.elZoom.classList.add("selected"):t.globals.panEnabled?this.elPan.classList.add("selected"):t.globals.selectionEnabled&&this.elSelection.classList.add("selected"),this.addToolbarEventListeners()}},{key:"addToolbarEventListeners",value:function(){var t=this;this.elZoomReset.addEventListener("click",this.handleZoomReset.bind(this)),this.elSelection.addEventListener("click",this.toggleSelection.bind(this)),this.elZoom.addEventListener("click",this.toggleZooming.bind(this)),this.elZoomIn.addEventListener("click",this.handleZoomIn.bind(this)),this.elZoomOut.addEventListener("click",this.handleZoomOut.bind(this)),this.elPan.addEventListener("click",this.togglePanning.bind(this)),this.elMenuIcon.addEventListener("click",this.toggleMenu.bind(this)),this.elMenuItems.forEach(function(e){e.classList.contains("exportSVG")?e.addEventListener("click",t.downloadSVG.bind(t)):e.classList.contains("exportPNG")&&e.addEventListener("click",t.downloadPNG.bind(t))});for(var e=0;e<this.t.customIcons.length;e++)this.elCustomIcons[e].addEventListener("click",this.t.customIcons[e].click.bind(this,this.ctx,this.ctx.w))}},{key:"toggleSelection",value:function(){this.toggleOtherControls(),this.w.globals.selectionEnabled=!this.w.globals.selectionEnabled,this.elSelection.classList.contains("selected")?this.elSelection.classList.remove("selected"):this.elSelection.classList.add("selected")}},{key:"toggleZooming",value:function(){this.toggleOtherControls(),this.w.globals.zoomEnabled=!this.w.globals.zoomEnabled,this.elZoom.classList.contains("selected")?this.elZoom.classList.remove("selected"):this.elZoom.classList.add("selected")}},{key:"getToolbarIconsReference",value:function(){var t=this.w;this.elZoom||(this.elZoom=t.globals.dom.baseEl.querySelector(".apexcharts-zoom-icon")),this.elPan||(this.elPan=t.globals.dom.baseEl.querySelector(".apexcharts-pan-icon")),this.elSelection||(this.elSelection=t.globals.dom.baseEl.querySelector(".apexcharts-selection-icon"))}},{key:"enableZooming",value:function(){this.toggleOtherControls(),this.w.globals.zoomEnabled=!0,this.elZoom&&this.elZoom.classList.add("selected"),this.elPan&&this.elPan.classList.remove("selected")}},{key:"enablePanning",value:function(){this.toggleOtherControls(),this.w.globals.panEnabled=!0,this.elPan&&this.elPan.classList.add("selected"),this.elZoom&&this.elZoom.classList.remove("selected")}},{key:"togglePanning",value:function(){this.toggleOtherControls(),this.w.globals.panEnabled=!this.w.globals.panEnabled,this.elPan.classList.contains("selected")?this.elPan.classList.remove("selected"):this.elPan.classList.add("selected")}},{key:"toggleOtherControls",value:function(){var t=this.w;t.globals.panEnabled=!1,t.globals.zoomEnabled=!1,t.globals.selectionEnabled=!1,this.getToolbarIconsReference(),this.elPan&&this.elPan.classList.remove("selected"),this.elSelection&&this.elSelection.classList.remove("selected"),this.elZoom&&this.elZoom.classList.remove("selected")}},{key:"handleZoomIn",value:function(){var t=this.w,e=(t.globals.minX+t.globals.maxX)/2,i=(t.globals.minX+e)/2,s=(t.globals.maxX+e)/2;t.globals.disableZoomIn||this.zoomUpdateOptions(i,s)}},{key:"handleZoomOut",value:function(){var t=this.w;if(!("datetime"===t.config.xaxis.type&&new Date(t.globals.minX).getUTCFullYear()<1e3)){var e=(t.globals.minX+t.globals.maxX)/2,i=t.globals.minX-(e-t.globals.minX),s=t.globals.maxX-(e-t.globals.maxX);t.globals.disableZoomOut||this.zoomUpdateOptions(i,s)}}},{key:"zoomUpdateOptions",value:function(t,e){var i={min:t,max:e},s=this.getBeforeZoomRange(i);s&&(i=s.xaxis),this.w.globals.zoomed=!0,this.ctx._updateOptions({xaxis:i},!1,this.w.config.chart.animations.dynamicAnimation.enabled),this.zoomCallback(i)}},{key:"zoomCallback",value:function(t,e){"function"==typeof this.ev.zoomed&&this.ev.zoomed(this.ctx,{xaxis:t,yaxis:e})}},{key:"getBeforeZoomRange",value:function(t,e){var i=null;return"function"==typeof this.ev.beforeZoom&&(i=this.ev.beforeZoom(this,{xaxis:t,yaxis:e})),i}},{key:"toggleMenu",value:function(){this.elMenu.classList.contains("open")?this.elMenu.classList.remove("open"):this.elMenu.classList.add("open")}},{key:"downloadPNG",value:function(){var t=new Exports(this.ctx);t.exportToPng(this.ctx),this.toggleMenu()}},{key:"downloadSVG",value:function(){var t=new Exports(this.ctx);t.exportToSVG(),this.toggleMenu()}},{key:"handleZoomReset",value:function(t){var e=this;this.ctx.getSyncedCharts().forEach(function(t){var i=t.w;i.globals.minX!==i.globals.initialminX&&i.globals.maxX!==i.globals.initialmaxX&&(t.revertDefaultAxisMinMax(),"function"==typeof i.config.chart.events.zoomed&&e.zoomCallback({min:i.config.xaxis.min,max:i.config.xaxis.max}),i.globals.zoomed=!1,t._updateSeries(i.globals.initialSeries,i.config.chart.animations.dynamicAnimation.enabled))})}},{key:"destroy",value:function(){this.elZoom=null,this.elZoomIn=null,this.elZoomOut=null,this.elPan=null,this.elSelection=null,this.elZoomReset=null,this.elMenuIcon=null}}]),t}(),ZoomPanSelection=function(t){function e(t){var i;return _classCallCheck(this,e),(i=_possibleConstructorReturn(this,_getPrototypeOf(e).call(this,t))).ctx=t,i.w=t.w,i.dragged=!1,i.graphics=new Graphics(i.ctx),i.eventList=["mousedown","mouseleave","mousemove","touchstart","touchmove","mouseup","touchend"],i.clientX=0,i.clientY=0,i.startX=0,i.endX=0,i.dragX=0,i.startY=0,i.endY=0,i.dragY=0,i}return _inherits(e,Toolbar),_createClass(e,[{key:"init",value:function(t){var e=this,i=t.xyRatios,s=this.w,a=this;this.xyRatios=i,this.zoomRect=this.graphics.drawRect(0,0,0,0),this.selectionRect=this.graphics.drawRect(0,0,0,0),this.gridRect=s.globals.dom.baseEl.querySelector(".apexcharts-grid"),this.zoomRect.node.classList.add("apexcharts-zoom-rect"),this.selectionRect.node.classList.add("apexcharts-selection-rect"),s.globals.dom.elGraphical.add(this.zoomRect),s.globals.dom.elGraphical.add(this.selectionRect),"x"===s.config.chart.selection.type?this.slDraggableRect=this.selectionRect.draggable({minX:0,minY:0,maxX:s.globals.gridWidth,maxY:s.globals.gridHeight}).on("dragmove",this.selectionDragging.bind(this,"dragging")):"y"===s.config.chart.selection.type?this.slDraggableRect=this.selectionRect.draggable({minX:0,maxX:s.globals.gridWidth}).on("dragmove",this.selectionDragging.bind(this,"dragging")):this.slDraggableRect=this.selectionRect.draggable().on("dragmove",this.selectionDragging.bind(this,"dragging")),this.preselectedSelection(),this.hoverArea=s.globals.dom.baseEl.querySelector(s.globals.chartClass),this.hoverArea.classList.add("zoomable"),this.eventList.forEach(function(t){e.hoverArea.addEventListener(t,a.svgMouseEvents.bind(a,i),{capture:!1,passive:!0})})}},{key:"destroy",value:function(){this.slDraggableRect&&(this.slDraggableRect.draggable(!1),this.slDraggableRect.off(),this.selectionRect.off()),this.selectionRect=null,this.zoomRect=null,this.gridRect=null}},{key:"svgMouseEvents",value:function(t,e){var i=this.w,s=this,a=this.ctx.toolbar,r=i.globals.zoomEnabled?i.config.chart.zoom.type:i.config.chart.selection.type;if(e.shiftKey?(this.shiftWasPressed=!0,a.enablePanning()):this.shiftWasPressed&&(a.enableZooming(),this.shiftWasPressed=!1),!(e.target.classList.contains("apexcharts-selection-rect")||e.target.parentNode.classList.contains("apexcharts-toolbar"))){if(s.clientX="touchmove"===e.type||"touchstart"===e.type?e.touches[0].clientX:"touchend"===e.type?e.changedTouches[0].clientX:e.clientX,s.clientY="touchmove"===e.type||"touchstart"===e.type?e.touches[0].clientY:"touchend"===e.type?e.changedTouches[0].clientY:e.clientY,"mousedown"===e.type&&1===e.which){var n=s.gridRect.getBoundingClientRect();s.startX=s.clientX-n.left,s.startY=s.clientY-n.top,s.dragged=!1,s.w.globals.mousedown=!0}if(("mousemove"===e.type&&1===e.which||"touchmove"===e.type)&&(s.dragged=!0,i.globals.panEnabled?(i.globals.selection=null,s.w.globals.mousedown&&s.panDragging({context:s,zoomtype:r,xyRatios:t})):(s.w.globals.mousedown&&i.globals.zoomEnabled||s.w.globals.mousedown&&i.globals.selectionEnabled)&&(s.selection=s.selectionDrawing({context:s,zoomtype:r}))),"mouseup"===e.type||"touchend"===e.type||"mouseleave"===e.type){var o=s.gridRect.getBoundingClientRect();s.w.globals.mousedown&&(s.endX=s.clientX-o.left,s.endY=s.clientY-o.top,s.dragX=Math.abs(s.endX-s.startX),s.dragY=Math.abs(s.endY-s.startY),(i.globals.zoomEnabled||i.globals.selectionEnabled)&&s.selectionDrawn({context:s,zoomtype:r})),i.globals.zoomEnabled&&s.hideSelectionRect(this.selectionRect),s.dragged=!1,s.w.globals.mousedown=!1}this.makeSelectionRectDraggable()}}},{key:"makeSelectionRectDraggable",value:function(){var t=this.w;if(this.selectionRect){var e=this.selectionRect.node.getBoundingClientRect();e.width>0&&e.height>0&&this.slDraggableRect.selectize().resize({constraint:{minX:0,minY:0,maxX:t.globals.gridWidth,maxY:t.globals.gridHeight}}).on("resizing",this.selectionDragging.bind(this,"resizing"))}}},{key:"preselectedSelection",value:function(){var t=this.w,e=this.xyRatios;if(!t.globals.zoomEnabled)if(void 0!==t.globals.selection&&null!==t.globals.selection)this.drawSelectionRect(t.globals.selection);else if(void 0!==t.config.chart.selection.xaxis.min&&void 0!==t.config.chart.selection.xaxis.max){var i=(t.config.chart.selection.xaxis.min-t.globals.minX)/e.xRatio,s={x:i,y:0,width:t.globals.gridWidth-(t.globals.maxX-t.config.chart.selection.xaxis.max)/e.xRatio-i,height:t.globals.gridHeight,translateX:0,translateY:0,selectionEnabled:!0};this.drawSelectionRect(s),this.makeSelectionRectDraggable(),"function"==typeof t.config.chart.events.selection&&t.config.chart.events.selection(this.ctx,{xaxis:{min:t.config.chart.selection.xaxis.min,max:t.config.chart.selection.xaxis.max},yaxis:{}})}}},{key:"drawSelectionRect",value:function(t){var e=t.x,i=t.y,s=t.width,a=t.height,r=t.translateX,n=t.translateY,o=this.w,l=this.zoomRect,h=this.selectionRect;if(this.dragged||null!==o.globals.selection){var c={transform:"translate("+r+", "+n+")"};o.globals.zoomEnabled&&this.dragged&&(l.attr({x:e,y:i,width:s,height:a,fill:o.config.chart.zoom.zoomedArea.fill.color,"fill-opacity":o.config.chart.zoom.zoomedArea.fill.opacity,stroke:o.config.chart.zoom.zoomedArea.stroke.color,"stroke-width":o.config.chart.zoom.zoomedArea.stroke.width,"stroke-opacity":o.config.chart.zoom.zoomedArea.stroke.opacity}),Graphics.setAttrs(l.node,c)),o.globals.selectionEnabled&&(h.attr({x:e,y:i,width:s>0?s:0,height:a>0?a:0,fill:o.config.chart.selection.fill.color,"fill-opacity":o.config.chart.selection.fill.opacity,stroke:o.config.chart.selection.stroke.color,"stroke-width":o.config.chart.selection.stroke.width,"stroke-dasharray":o.config.chart.selection.stroke.dashArray,"stroke-opacity":o.config.chart.selection.stroke.opacity}),Graphics.setAttrs(h.node,c))}}},{key:"hideSelectionRect",value:function(t){t&&t.attr({x:0,y:0,width:0,height:0})}},{key:"selectionDrawing",value:function(t){var e=t.context,i=t.zoomtype,s=this.w,a=e,r=this.gridRect.getBoundingClientRect(),n=a.startX-1,o=a.startY,l=a.clientX-r.left-n,h=a.clientY-r.top-o,c=0,d=0,u={};return Math.abs(l+n)>s.globals.gridWidth?l=s.globals.gridWidth-n:a.clientX-r.left<0&&(l=n),n>a.clientX-r.left&&(c=-(l=Math.abs(l))),o>a.clientY-r.top&&(d=-(h=Math.abs(h))),u="x"===i?{x:n,y:0,width:l,height:s.globals.gridHeight,translateX:c,translateY:0}:"y"===i?{x:0,y:o,width:s.globals.gridWidth,height:h,translateX:0,translateY:d}:{x:n,y:o,width:l,height:h,translateX:c,translateY:d},a.drawSelectionRect(u),a.selectionDragging("resizing"),u}},{key:"selectionDragging",value:function(t,e){var i=this,s=this.w,a=this.xyRatios,r=this.selectionRect,n=0;"resizing"===t&&(n=30),"function"==typeof s.config.chart.events.selection&&s.globals.selectionEnabled&&(clearTimeout(this.w.globals.selectionResizeTimer),this.w.globals.selectionResizeTimer=window.setTimeout(function(){var t=i.gridRect.getBoundingClientRect(),e=r.node.getBoundingClientRect(),n=s.globals.xAxisScale.niceMin+(e.left-t.left)*a.xRatio,o=s.globals.xAxisScale.niceMin+(e.right-t.left)*a.xRatio,l=s.globals.yAxisScale[0].niceMin+(t.bottom-e.bottom)*a.yRatio[0],h=s.globals.yAxisScale[0].niceMax-(e.top-t.top)*a.yRatio[0];s.config.chart.events.selection(i.ctx,{xaxis:{min:n,max:o},yaxis:{min:l,max:h}})},n))}},{key:"selectionDrawn",value:function(t){var e=t.context,i=t.zoomtype,s=this.w,a=e,r=this.xyRatios,n=this.ctx.toolbar;if(a.startX>a.endX){var o=a.startX;a.startX=a.endX,a.endX=o}if(a.startY>a.endY){var l=a.startY;a.startY=a.endY,a.endY=l}var h=s.globals.xAxisScale.niceMin+a.startX*r.xRatio,c=s.globals.xAxisScale.niceMin+a.endX*r.xRatio,d=[],u=[];if(s.config.yaxis.forEach(function(t,e){d.push(Math.floor(s.globals.yAxisScale[e].niceMax-r.yRatio[e]*a.startY)),u.push(Math.floor(s.globals.yAxisScale[e].niceMax-r.yRatio[e]*a.endY))}),a.dragged&&(a.dragX>10||a.dragY>10)&&h!==c)if(s.globals.zoomEnabled){var g=Utils.clone(s.globals.initialConfig.yaxis);s.globals.zoomed||(s.globals.lastXAxis=Utils.clone(s.config.xaxis),s.globals.lastYAxis=Utils.clone(s.config.yaxis));var f={min:h,max:c};if("xy"!==i&&"y"!==i||g.forEach(function(t,e){g[e].min=u[e],g[e].max=d[e]}),s.config.chart.zoom.autoScaleYaxis){var p=new Range(a.ctx);g=p.autoScaleY(a.ctx,g,{xaxis:f})}if(n){var x=n.getBeforeZoomRange(f,g);x&&(f=x.xaxis?x.xaxis:f,g=x.yaxis?x.yaxe:g)}var m={xaxis:f};s.config.chart.group||(m.yaxis=g),a.ctx._updateOptions(m,!1,a.w.config.chart.animations.dynamicAnimation.enabled),"function"==typeof s.config.chart.events.zoomed&&n.zoomCallback(f,g),s.globals.zoomed=!0}else if(s.globals.selectionEnabled){var b,v=null;b={min:h,max:c},"xy"!==i&&"y"!==i||(v=Utils.clone(s.config.yaxis)).forEach(function(t,e){v[e].min=u[e],v[e].max=d[e]}),s.globals.selection=a.selection,"function"==typeof s.config.chart.events.selection&&s.config.chart.events.selection(a.ctx,{xaxis:b,yaxis:v})}}},{key:"panDragging",value:function(t){var e,i=t.context,s=this.w,a=i;if(void 0!==s.globals.lastClientPosition.x){var r=s.globals.lastClientPosition.x-a.clientX,n=s.globals.lastClientPosition.y-a.clientY;Math.abs(r)>Math.abs(n)&&r>0?e="left":Math.abs(r)>Math.abs(n)&&r<0?e="right":Math.abs(n)>Math.abs(r)&&n>0?e="up":Math.abs(n)>Math.abs(r)&&n<0&&(e="down")}s.globals.lastClientPosition={x:a.clientX,y:a.clientY};var o=s.globals.minX,l=s.globals.maxX;a.panScrolled(e,o,l)}},{key:"panScrolled",value:function(t,e,i){var s=this.w,a=this.xyRatios,r=Utils.clone(s.globals.initialConfig.yaxis);"left"===t?(e=s.globals.minX+s.globals.gridWidth/15*a.xRatio,i=s.globals.maxX+s.globals.gridWidth/15*a.xRatio):"right"===t&&(e=s.globals.minX-s.globals.gridWidth/15*a.xRatio,i=s.globals.maxX-s.globals.gridWidth/15*a.xRatio),(e<s.globals.initialminX||i>s.globals.initialmaxX)&&(e=s.globals.minX,i=s.globals.maxX);var n={min:e,max:i};s.config.chart.zoom.autoScaleYaxis&&(r=new Range(this.ctx).autoScaleY(this.ctx,r,{xaxis:n}));var o={xaxis:{min:e,max:i}};s.config.chart.group||(o.yaxis=r),this.ctx._updateOptions(o,!1,!1),"function"==typeof s.config.chart.events.scrolled&&s.config.chart.events.scrolled(this.ctx,{xaxis:{min:e,max:i}})}}]),e}(),TitleSubtitle=function(){function t(e){_classCallCheck(this,t),this.ctx=e,this.w=e.w}return _createClass(t,[{key:"draw",value:function(){this.drawTitleSubtitle("title"),this.drawTitleSubtitle("subtitle")}},{key:"drawTitleSubtitle",value:function(t){var e=this.w,i="title"===t?e.config.title:e.config.subtitle,s=e.globals.svgWidth/2,a=i.offsetY,r="middle";if("left"===i.align?(s=10,r="start"):"right"===i.align&&(s=e.globals.svgWidth-10,r="end"),s+=i.offsetX,a=a+parseInt(i.style.fontSize)+2,void 0!==i.text){var n=new Graphics(this.ctx).drawText({x:s,y:a,text:i.text,textAnchor:r,fontSize:i.style.fontSize,fontFamily:i.style.fontFamily,foreColor:i.style.color,opacity:1});n.node.setAttribute("class","apexcharts-".concat(t,"-text")),e.globals.dom.Paper.add(n)}}}]),t}();function styleInject(t,e){void 0===e&&(e={});var i=e.insertAt;if(t&&"undefined"!=typeof document){var s=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===i&&s.firstChild?s.insertBefore(a,s.firstChild):s.appendChild(a),a.styleSheet?a.styleSheet.cssText=t:a.appendChild(document.createTextNode(t))}}!function(t,e){"function"==typeof define&&__webpack_require__(12)?define(function(){return e(t,t.document)}):"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=t.document?e(t,t.document):function(t){return e(t,t.document)}:t.SVG=e(t,t.document)}("undefined"!=typeof window?window:void 0,function(t,e){var i=(void 0!==this?this:t).SVG=function(t){if(i.supported)return t=new i.Doc(t),i.parser.draw||i.prepare(),t};if(i.ns="http://www.w3.org/2000/svg",i.xmlns="http://www.w3.org/2000/xmlns/",i.xlink="http://www.w3.org/1999/xlink",i.svgjs="http://svgjs.com/svgjs",i.supported=!0,!i.supported)return!1;i.did=1e3,i.eid=function(t){return"Svgjs"+c(t)+i.did++},i.create=function(t){var i=e.createElementNS(this.ns,t);return i.setAttribute("id",this.eid(t)),i},i.extend=function(){var t,e,s,a;for(e=(t=[].slice.call(arguments)).pop(),a=t.length-1;a>=0;a--)if(t[a])for(s in e)t[a].prototype[s]=e[s];i.Set&&i.Set.inherit&&i.Set.inherit()},i.invent=function(t){var e="function"==typeof t.create?t.create:function(){this.constructor.call(this,i.create(t.create))};return t.inherit&&(e.prototype=new t.inherit),t.extend&&i.extend(e,t.extend),t.construct&&i.extend(t.parent||i.Container,t.construct),e},i.adopt=function(e){return e?e.instance?e.instance:((s="svg"==e.nodeName?e.parentNode instanceof t.SVGElement?new i.Nested:new i.Doc:"linearGradient"==e.nodeName?new i.Gradient("linear"):"radialGradient"==e.nodeName?new i.Gradient("radial"):i[c(e.nodeName)]?new(i[c(e.nodeName)]):new i.Element(e)).type=e.nodeName,s.node=e,e.instance=s,s instanceof i.Doc&&s.namespace().defs(),s.setData(JSON.parse(e.getAttribute("svgjs:data"))||{}),s):null;var s},i.prepare=function(){var t=e.getElementsByTagName("body")[0],s=(t?new i.Doc(t):i.adopt(e.documentElement).nested()).size(2,0);i.parser={body:t||e.documentElement,draw:s.style("opacity:0;position:absolute;left:-100%;top:-100%;overflow:hidden").node,poly:s.polyline().node,path:s.path().node,native:i.create("svg")}},i.parser={native:i.create("svg")},e.addEventListener("DOMContentLoaded",function(){i.parser.draw||i.prepare()},!1),i.regex={numberAndUnit:/^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i,hex:/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,rgb:/rgb\((\d+),(\d+),(\d+)\)/,reference:/#([a-z0-9\-_]+)/i,transforms:/\)\s*,?\s*/,whitespace:/\s/g,isHex:/^#[a-f0-9]{3,6}$/i,isRgb:/^rgb\(/,isCss:/[^:]+:[^;]+;?/,isBlank:/^(\s+)?$/,isNumber:/^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,isPercent:/^-?[\d\.]+%$/,isImage:/\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i,delimiter:/[\s,]+/,hyphen:/([^e])\-/gi,pathLetters:/[MLHVCSQTAZ]/gi,isPathLetter:/[MLHVCSQTAZ]/i,numbersWithDots:/((\d?\.\d+(?:e[+-]?\d+)?)((?:\.\d+(?:e[+-]?\d+)?)+))+/gi,dots:/\./g},i.utils={map:function(t,e){var i,s=t.length,a=[];for(i=0;i<s;i++)a.push(e(t[i]));return a},filter:function(t,e){var i,s=t.length,a=[];for(i=0;i<s;i++)e(t[i])&&a.push(t[i]);return a},radians:function(t){return t%360*Math.PI/180},degrees:function(t){return 180*t/Math.PI%360},filterSVGElements:function(e){return this.filter(e,function(e){return e instanceof t.SVGElement})}},i.defaults={attrs:{"fill-opacity":1,"stroke-opacity":1,"stroke-width":0,"stroke-linejoin":"miter","stroke-linecap":"butt",fill:"#000000",stroke:"#000000",opacity:1,x:0,y:0,cx:0,cy:0,width:0,height:0,r:0,rx:0,ry:0,offset:0,"stop-opacity":1,"stop-color":"#000000","font-size":16,"font-family":"Helvetica, Arial, sans-serif","text-anchor":"start"}},i.Color=function(t){var e,s;(this.r=0,this.g=0,this.b=0,t)&&("string"==typeof t?i.regex.isRgb.test(t)?(e=i.regex.rgb.exec(t.replace(i.regex.whitespace,"")),this.r=parseInt(e[1]),this.g=parseInt(e[2]),this.b=parseInt(e[3])):i.regex.isHex.test(t)&&(e=i.regex.hex.exec(4==(s=t).length?["#",s.substring(1,2),s.substring(1,2),s.substring(2,3),s.substring(2,3),s.substring(3,4),s.substring(3,4)].join(""):s),this.r=parseInt(e[1],16),this.g=parseInt(e[2],16),this.b=parseInt(e[3],16)):"object"===_typeof(t)&&(this.r=t.r,this.g=t.g,this.b=t.b))},i.extend(i.Color,{toString:function(){return this.toHex()},toHex:function(){return"#"+d(this.r)+d(this.g)+d(this.b)},toRgb:function(){return"rgb("+[this.r,this.g,this.b].join()+")"},brightness:function(){return this.r/255*.3+this.g/255*.59+this.b/255*.11},morph:function(t){return this.destination=new i.Color(t),this},at:function(t){return this.destination?(t=t<0?0:t>1?1:t,new i.Color({r:~~(this.r+(this.destination.r-this.r)*t),g:~~(this.g+(this.destination.g-this.g)*t),b:~~(this.b+(this.destination.b-this.b)*t)})):this}}),i.Color.test=function(t){return t+="",i.regex.isHex.test(t)||i.regex.isRgb.test(t)},i.Color.isRgb=function(t){return t&&"number"==typeof t.r&&"number"==typeof t.g&&"number"==typeof t.b},i.Color.isColor=function(t){return i.Color.isRgb(t)||i.Color.test(t)},i.Array=function(t,e){0==(t=(t||[]).valueOf()).length&&e&&(t=e.valueOf()),this.value=this.parse(t)},i.extend(i.Array,{morph:function(t){if(this.destination=this.parse(t),this.value.length!=this.destination.length){for(var e=this.value[this.value.length-1],i=this.destination[this.destination.length-1];this.value.length>this.destination.length;)this.destination.push(i);for(;this.value.length<this.destination.length;)this.value.push(e)}return this},settle:function(){for(var t=0,e=this.value.length,i=[];t<e;t++)-1==i.indexOf(this.value[t])&&i.push(this.value[t]);return this.value=i},at:function(t){if(!this.destination)return this;for(var e=0,s=this.value.length,a=[];e<s;e++)a.push(this.value[e]+(this.destination[e]-this.value[e])*t);return new i.Array(a)},toString:function(){return this.value.join(" ")},valueOf:function(){return this.value},parse:function(t){return t=t.valueOf(),Array.isArray(t)?t:this.split(t)},split:function(t){return t.trim().split(i.regex.delimiter).map(parseFloat)},reverse:function(){return this.value.reverse(),this},clone:function(){var t=new this.constructor;return t.value=function t(e){var i=e.slice(0);for(var s=i.length;s--;)Array.isArray(i[s])&&(i[s]=t(i[s]));return i}(this.value),t}}),i.PointArray=function(t,e){i.Array.call(this,t,e||[[0,0]])},i.PointArray.prototype=new i.Array,i.PointArray.prototype.constructor=i.PointArray,i.extend(i.PointArray,{toString:function(){for(var t=0,e=this.value.length,i=[];t<e;t++)i.push(this.value[t].join(","));return i.join(" ")},toLine:function(){return{x1:this.value[0][0],y1:this.value[0][1],x2:this.value[1][0],y2:this.value[1][1]}},at:function(t){if(!this.destination)return this;for(var e=0,s=this.value.length,a=[];e<s;e++)a.push([this.value[e][0]+(this.destination[e][0]-this.value[e][0])*t,this.value[e][1]+(this.destination[e][1]-this.value[e][1])*t]);return new i.PointArray(a)},parse:function(t){var e=[];if(t=t.valueOf(),Array.isArray(t)){if(Array.isArray(t[0]))return t.map(function(t){return t.slice()});if(null!=t[0].x)return t.map(function(t){return[t.x,t.y]})}else t=t.trim().split(i.regex.delimiter).map(parseFloat);t.length%2!=0&&t.pop();for(var s=0,a=t.length;s<a;s+=2)e.push([t[s],t[s+1]]);return e},move:function(t,e){var i=this.bbox();if(t-=i.x,e-=i.y,!isNaN(t)&&!isNaN(e))for(var s=this.value.length-1;s>=0;s--)this.value[s]=[this.value[s][0]+t,this.value[s][1]+e];return this},size:function(t,e){var i,s=this.bbox();for(i=this.value.length-1;i>=0;i--)s.width&&(this.value[i][0]=(this.value[i][0]-s.x)*t/s.width+s.x),s.height&&(this.value[i][1]=(this.value[i][1]-s.y)*e/s.height+s.y);return this},bbox:function(){return i.parser.draw||i.prepare(),i.parser.poly.setAttribute("points",this.toString()),i.parser.poly.getBBox()}});for(var s={M:function(t,e,i){return e.x=i.x=t[0],e.y=i.y=t[1],["M",e.x,e.y]},L:function(t,e){return e.x=t[0],e.y=t[1],["L",t[0],t[1]]},H:function(t,e){return e.x=t[0],["H",t[0]]},V:function(t,e){return e.y=t[0],["V",t[0]]},C:function(t,e){return e.x=t[4],e.y=t[5],["C",t[0],t[1],t[2],t[3],t[4],t[5]]},S:function(t,e){return e.x=t[2],e.y=t[3],["S",t[0],t[1],t[2],t[3]]},Q:function(t,e){return e.x=t[2],e.y=t[3],["Q",t[0],t[1],t[2],t[3]]},T:function(t,e){return e.x=t[0],e.y=t[1],["T",t[0],t[1]]},Z:function(t,e,i){return e.x=i.x,e.y=i.y,["Z"]},A:function(t,e){return e.x=t[5],e.y=t[6],["A",t[0],t[1],t[2],t[3],t[4],t[5],t[6]]}},a="mlhvqtcsaz".split(""),r=0,n=a.length;r<n;++r)s[a[r]]=function(t){return function(e,i,a){if("H"==t)e[0]=e[0]+i.x;else if("V"==t)e[0]=e[0]+i.y;else if("A"==t)e[5]=e[5]+i.x,e[6]=e[6]+i.y;else for(var r=0,n=e.length;r<n;++r)e[r]=e[r]+(r%2?i.y:i.x);return s[t](e,i,a)}}(a[r].toUpperCase());i.PathArray=function(t,e){i.Array.call(this,t,e||[["M",0,0]])},i.PathArray.prototype=new i.Array,i.PathArray.prototype.constructor=i.PathArray,i.extend(i.PathArray,{toString:function(){return function(t){for(var e=0,i=t.length,s="";e<i;e++)s+=t[e][0],null!=t[e][1]&&(s+=t[e][1],null!=t[e][2]&&(s+=" ",s+=t[e][2],null!=t[e][3]&&(s+=" ",s+=t[e][3],s+=" ",s+=t[e][4],null!=t[e][5]&&(s+=" ",s+=t[e][5],s+=" ",s+=t[e][6],null!=t[e][7]&&(s+=" ",s+=t[e][7])))));return s+" "}(this.value)},move:function(t,e){var i=this.bbox();if(t-=i.x,e-=i.y,!isNaN(t)&&!isNaN(e))for(var s,a=this.value.length-1;a>=0;a--)"M"==(s=this.value[a][0])||"L"==s||"T"==s?(this.value[a][1]+=t,this.value[a][2]+=e):"H"==s?this.value[a][1]+=t:"V"==s?this.value[a][1]+=e:"C"==s||"S"==s||"Q"==s?(this.value[a][1]+=t,this.value[a][2]+=e,this.value[a][3]+=t,this.value[a][4]+=e,"C"==s&&(this.value[a][5]+=t,this.value[a][6]+=e)):"A"==s&&(this.value[a][6]+=t,this.value[a][7]+=e);return this},size:function(t,e){var i,s,a=this.bbox();for(i=this.value.length-1;i>=0;i--)"M"==(s=this.value[i][0])||"L"==s||"T"==s?(this.value[i][1]=(this.value[i][1]-a.x)*t/a.width+a.x,this.value[i][2]=(this.value[i][2]-a.y)*e/a.height+a.y):"H"==s?this.value[i][1]=(this.value[i][1]-a.x)*t/a.width+a.x:"V"==s?this.value[i][1]=(this.value[i][1]-a.y)*e/a.height+a.y:"C"==s||"S"==s||"Q"==s?(this.value[i][1]=(this.value[i][1]-a.x)*t/a.width+a.x,this.value[i][2]=(this.value[i][2]-a.y)*e/a.height+a.y,this.value[i][3]=(this.value[i][3]-a.x)*t/a.width+a.x,this.value[i][4]=(this.value[i][4]-a.y)*e/a.height+a.y,"C"==s&&(this.value[i][5]=(this.value[i][5]-a.x)*t/a.width+a.x,this.value[i][6]=(this.value[i][6]-a.y)*e/a.height+a.y)):"A"==s&&(this.value[i][1]=this.value[i][1]*t/a.width,this.value[i][2]=this.value[i][2]*e/a.height,this.value[i][6]=(this.value[i][6]-a.x)*t/a.width+a.x,this.value[i][7]=(this.value[i][7]-a.y)*e/a.height+a.y);return this},equalCommands:function(t){var e,s,a;for(t=new i.PathArray(t),a=this.value.length===t.value.length,e=0,s=this.value.length;a&&e<s;e++)a=this.value[e][0]===t.value[e][0];return a},morph:function(t){return t=new i.PathArray(t),this.equalCommands(t)?this.destination=t:this.destination=null,this},at:function(t){if(!this.destination)return this;var e,s,a,r,n=this.value,o=this.destination.value,l=[],h=new i.PathArray;for(e=0,s=n.length;e<s;e++){for(l[e]=[n[e][0]],a=1,r=n[e].length;a<r;a++)l[e][a]=n[e][a]+(o[e][a]-n[e][a])*t;"A"===l[e][0]&&(l[e][4]=+(0!=l[e][4]),l[e][5]=+(0!=l[e][5]))}return h.value=l,h},parse:function(t){if(t instanceof i.PathArray)return t.valueOf();var e,a={M:2,L:2,H:1,V:1,C:6,S:4,Q:4,T:2,A:7,Z:0};t="string"==typeof t?t.replace(i.regex.numbersWithDots,l).replace(i.regex.pathLetters," $& ").replace(i.regex.hyphen,"$1 -").trim().split(i.regex.delimiter):t.reduce(function(t,e){return[].concat.call(t,e)},[]);var r=[],n=new i.Point,o=new i.Point,h=0,c=t.length;do{i.regex.isPathLetter.test(t[h])?(e=t[h],++h):"M"==e?e="L":"m"==e&&(e="l"),r.push(s[e].call(null,t.slice(h,h+=a[e.toUpperCase()]).map(parseFloat),n,o))}while(c>h);return r},bbox:function(){return i.parser.draw||i.prepare(),i.parser.path.setAttribute("d",this.toString()),i.parser.path.getBBox()}}),i.Number=i.invent({create:function(t,e){this.value=0,this.unit=e||"","number"==typeof t?this.value=isNaN(t)?0:isFinite(t)?t:t<0?-3.4e38:3.4e38:"string"==typeof t?(e=t.match(i.regex.numberAndUnit))&&(this.value=parseFloat(e[1]),"%"==e[5]?this.value/=100:"s"==e[5]&&(this.value*=1e3),this.unit=e[5]):t instanceof i.Number&&(this.value=t.valueOf(),this.unit=t.unit)},extend:{toString:function(){return("%"==this.unit?~~(1e8*this.value)/1e6:"s"==this.unit?this.value/1e3:this.value)+this.unit},toJSON:function(){return this.toString()},valueOf:function(){return this.value},plus:function(t){return t=new i.Number(t),new i.Number(this+t,this.unit||t.unit)},minus:function(t){return t=new i.Number(t),new i.Number(this-t,this.unit||t.unit)},times:function(t){return t=new i.Number(t),new i.Number(this*t,this.unit||t.unit)},divide:function(t){return t=new i.Number(t),new i.Number(this/t,this.unit||t.unit)},to:function(t){var e=new i.Number(this);return"string"==typeof t&&(e.unit=t),e},morph:function(t){return this.destination=new i.Number(t),t.relative&&(this.destination.value+=this.value),this},at:function(t){return this.destination?new i.Number(this.destination).minus(this).times(t).plus(this):this}}}),i.Element=i.invent({create:function(t){this._stroke=i.defaults.attrs.stroke,this._event=null,this.dom={},(this.node=t)&&(this.type=t.nodeName,this.node.instance=this,this._stroke=t.getAttribute("stroke")||this._stroke)},extend:{x:function(t){return this.attr("x",t)},y:function(t){return this.attr("y",t)},cx:function(t){return null==t?this.x()+this.width()/2:this.x(t-this.width()/2)},cy:function(t){return null==t?this.y()+this.height()/2:this.y(t-this.height()/2)},move:function(t,e){return this.x(t).y(e)},center:function(t,e){return this.cx(t).cy(e)},width:function(t){return this.attr("width",t)},height:function(t){return this.attr("height",t)},size:function(t,e){var s=u(this,t,e);return this.width(new i.Number(s.width)).height(new i.Number(s.height))},clone:function(t){this.writeDataToDom();var e=x(this.node.cloneNode(!0));return t?t.add(e):this.after(e),e},remove:function(){return this.parent()&&this.parent().removeElement(this),this},replace:function(t){return this.after(t).remove(),t},addTo:function(t){return t.put(this)},putIn:function(t){return t.add(this)},id:function(t){return this.attr("id",t)},inside:function(t,e){var i=this.bbox();return t>i.x&&e>i.y&&t<i.x+i.width&&e<i.y+i.height},show:function(){return this.style("display","")},hide:function(){return this.style("display","none")},visible:function(){return"none"!=this.style("display")},toString:function(){return this.attr("id")},classes:function(){var t=this.attr("class");return null==t?[]:t.trim().split(i.regex.delimiter)},hasClass:function(t){return-1!=this.classes().indexOf(t)},addClass:function(t){if(!this.hasClass(t)){var e=this.classes();e.push(t),this.attr("class",e.join(" "))}return this},removeClass:function(t){return this.hasClass(t)&&this.attr("class",this.classes().filter(function(e){return e!=t}).join(" ")),this},toggleClass:function(t){return this.hasClass(t)?this.removeClass(t):this.addClass(t)},reference:function(t){return i.get(this.attr(t))},parent:function(e){var s=this;if(!s.node.parentNode)return null;if(s=i.adopt(s.node.parentNode),!e)return s;for(;s&&s.node instanceof t.SVGElement;){if("string"==typeof e?s.matches(e):s instanceof e)return s;if(!s.node.parentNode||"#document"==s.node.parentNode.nodeName)return null;s=i.adopt(s.node.parentNode)}},doc:function(){return this instanceof i.Doc?this:this.parent(i.Doc)},parents:function(t){var e=[],i=this;do{if(!(i=i.parent(t))||!i.node)break;e.push(i)}while(i.parent);return e},matches:function(t){return function(t,e){return(t.matches||t.matchesSelector||t.msMatchesSelector||t.mozMatchesSelector||t.webkitMatchesSelector||t.oMatchesSelector).call(t,e)}(this.node,t)},native:function(){return this.node},svg:function(t){var s=e.createElement("svg");if(!(t&&this instanceof i.Parent))return s.appendChild(t=e.createElement("svg")),this.writeDataToDom(),t.appendChild(this.node.cloneNode(!0)),s.innerHTML.replace(/^<svg>/,"").replace(/<\/svg>$/,"");s.innerHTML="<svg>"+t.replace(/\n/,"").replace(/<([\w:-]+)([^<]+?)\/>/g,"<$1$2></$1>")+"</svg>";for(var a=0,r=s.firstChild.childNodes.length;a<r;a++)this.node.appendChild(s.firstChild.firstChild);return this},writeDataToDom:function(){(this.each||this.lines)&&(this.each?this:this.lines()).each(function(){this.writeDataToDom()});return this.node.removeAttribute("svgjs:data"),Object.keys(this.dom).length&&this.node.setAttribute("svgjs:data",JSON.stringify(this.dom)),this},setData:function(t){return this.dom=t,this},is:function(t){return function(t,e){return t instanceof e}(this,t)}}}),i.easing={"-":function(t){return t},"<>":function(t){return-Math.cos(t*Math.PI)/2+.5},">":function(t){return Math.sin(t*Math.PI/2)},"<":function(t){return 1-Math.cos(t*Math.PI/2)}},i.morph=function(t){return function(e,s){return new i.MorphObj(e,s).at(t)}},i.Situation=i.invent({create:function(t){this.init=!1,this.reversed=!1,this.reversing=!1,this.duration=new i.Number(t.duration).valueOf(),this.delay=new i.Number(t.delay).valueOf(),this.start=+new Date+this.delay,this.finish=this.start+this.duration,this.ease=t.ease,this.loop=0,this.loops=!1,this.animations={},this.attrs={},this.styles={},this.transforms=[],this.once={}}}),i.FX=i.invent({create:function(t){this._target=t,this.situations=[],this.active=!1,this.situation=null,this.paused=!1,this.lastPos=0,this.pos=0,this.absPos=0,this._speed=1},extend:{animate:function(t,e,s){"object"===_typeof(t)&&(e=t.ease,s=t.delay,t=t.duration);var a=new i.Situation({duration:t||1e3,delay:s||0,ease:i.easing[e||"-"]||e});return this.queue(a),this},delay:function(t){var e=new i.Situation({duration:t,delay:0,ease:i.easing["-"]});return this.queue(e)},target:function(t){return t&&t instanceof i.Element?(this._target=t,this):this._target},timeToAbsPos:function(t){return(t-this.situation.start)/(this.situation.duration/this._speed)},absPosToTime:function(t){return this.situation.duration/this._speed*t+this.situation.start},startAnimFrame:function(){this.stopAnimFrame(),this.animationFrame=t.requestAnimationFrame(function(){this.step()}.bind(this))},stopAnimFrame:function(){t.cancelAnimationFrame(this.animationFrame)},start:function(){return!this.active&&this.situation&&(this.active=!0,this.startCurrent()),this},startCurrent:function(){return this.situation.start=+new Date+this.situation.delay/this._speed,this.situation.finish=this.situation.start+this.situation.duration/this._speed,this.initAnimations().step()},queue:function(t){return("function"==typeof t||t instanceof i.Situation)&&this.situations.push(t),this.situation||(this.situation=this.situations.shift()),this},dequeue:function(){return this.stop(),this.situation=this.situations.shift(),this.situation&&(this.situation instanceof i.Situation?this.start():this.situation.call(this)),this},initAnimations:function(){var t,e,s,a=this.situation;if(a.init)return this;for(t in a.animations)for(s=this.target()[t](),Array.isArray(s)||(s=[s]),Array.isArray(a.animations[t])||(a.animations[t]=[a.animations[t]]),e=s.length;e--;)a.animations[t][e]instanceof i.Number&&(s[e]=new i.Number(s[e])),a.animations[t][e]=s[e].morph(a.animations[t][e]);for(t in a.attrs)a.attrs[t]=new i.MorphObj(this.target().attr(t),a.attrs[t]);for(t in a.styles)a.styles[t]=new i.MorphObj(this.target().style(t),a.styles[t]);return a.initialTransformation=this.target().matrixify(),a.init=!0,this},clearQueue:function(){return this.situations=[],this},clearCurrent:function(){return this.situation=null,this},stop:function(t,e){var i=this.active;return this.active=!1,e&&this.clearQueue(),t&&this.situation&&(!i&&this.startCurrent(),this.atEnd()),this.stopAnimFrame(),this.clearCurrent()},reset:function(){if(this.situation){var t=this.situation;this.stop(),this.situation=t,this.atStart()}return this},finish:function(){for(this.stop(!0,!1);this.dequeue().situation&&this.stop(!0,!1););return this.clearQueue().clearCurrent(),this},atStart:function(){return this.at(0,!0)},atEnd:function(){return!0===this.situation.loops&&(this.situation.loops=this.situation.loop+1),"number"==typeof this.situation.loops?this.at(this.situation.loops,!0):this.at(1,!0)},at:function(t,e){var i=this.situation.duration/this._speed;return this.absPos=t,e||(this.situation.reversed&&(this.absPos=1-this.absPos),this.absPos+=this.situation.loop),this.situation.start=+new Date-this.absPos*i,this.situation.finish=this.situation.start+i,this.step(!0)},speed:function(t){return 0===t?this.pause():t?(this._speed=t,this.at(this.absPos,!0)):this._speed},loop:function(t,e){var i=this.last();return i.loops=null==t||t,i.loop=0,e&&(i.reversing=!0),this},pause:function(){return this.paused=!0,this.stopAnimFrame(),this},play:function(){return this.paused?(this.paused=!1,this.at(this.absPos,!0)):this},reverse:function(t){var e=this.last();return e.reversed=void 0===t?!e.reversed:t,this},progress:function(t){return t?this.situation.ease(this.pos):this.pos},after:function(t){var e=this.last();return this.target().on("finished.fx",function i(s){s.detail.situation==e&&(t.call(this,e),this.off("finished.fx",i))}),this._callStart()},during:function(t){var e=this.last(),s=function(s){s.detail.situation==e&&t.call(this,s.detail.pos,i.morph(s.detail.pos),s.detail.eased,e)};return this.target().off("during.fx",s).on("during.fx",s),this.after(function(){this.off("during.fx",s)}),this._callStart()},afterAll:function(t){var e=function e(i){t.call(this),this.off("allfinished.fx",e)};return this.target().off("allfinished.fx",e).on("allfinished.fx",e),this._callStart()},duringAll:function(t){var e=function(e){t.call(this,e.detail.pos,i.morph(e.detail.pos),e.detail.eased,e.detail.situation)};return this.target().off("during.fx",e).on("during.fx",e),this.afterAll(function(){this.off("during.fx",e)}),this._callStart()},last:function(){return this.situations.length?this.situations[this.situations.length-1]:this.situation},add:function(t,e,i){return this.last()[i||"animations"][t]=e,this._callStart()},step:function(t){var e,i,s;(t||(this.absPos=this.timeToAbsPos(+new Date)),!1!==this.situation.loops)?(e=Math.max(this.absPos,0),i=Math.floor(e),!0===this.situation.loops||i<this.situation.loops?(this.pos=e-i,s=this.situation.loop,this.situation.loop=i):(this.absPos=this.situation.loops,this.pos=1,s=this.situation.loop-1,this.situation.loop=this.situation.loops),this.situation.reversing&&(this.situation.reversed=this.situation.reversed!=Boolean((this.situation.loop-s)%2))):(this.absPos=Math.min(this.absPos,1),this.pos=this.absPos);this.pos<0&&(this.pos=0),this.situation.reversed&&(this.pos=1-this.pos);var a=this.situation.ease(this.pos);for(var r in this.situation.once)r>this.lastPos&&r<=a&&(this.situation.once[r].call(this.target(),this.pos,a),delete this.situation.once[r]);return this.active&&this.target().fire("during",{pos:this.pos,eased:a,fx:this,situation:this.situation}),this.situation?(this.eachAt(),1==this.pos&&!this.situation.reversed||this.situation.reversed&&0==this.pos?(this.stopAnimFrame(),this.target().fire("finished",{fx:this,situation:this.situation}),this.situations.length||(this.target().fire("allfinished"),this.situations.length||(this.target().off(".fx"),this.active=!1)),this.active?this.dequeue():this.clearCurrent()):!this.paused&&this.active&&this.startAnimFrame(),this.lastPos=a,this):this},eachAt:function(){var t,e,s,a=this,r=this.target(),n=this.situation;for(t in n.animations)s=[].concat(n.animations[t]).map(function(t){return"string"!=typeof t&&t.at?t.at(n.ease(a.pos),a.pos):t}),r[t].apply(r,s);for(t in n.attrs)s=[t].concat(n.attrs[t]).map(function(t){return"string"!=typeof t&&t.at?t.at(n.ease(a.pos),a.pos):t}),r.attr.apply(r,s);for(t in n.styles)s=[t].concat(n.styles[t]).map(function(t){return"string"!=typeof t&&t.at?t.at(n.ease(a.pos),a.pos):t}),r.style.apply(r,s);if(n.transforms.length){for(s=n.initialTransformation,t=0,e=n.transforms.length;t<e;t++){var o=n.transforms[t];o instanceof i.Matrix?s=o.relative?s.multiply((new i.Matrix).morph(o).at(n.ease(this.pos))):s.morph(o).at(n.ease(this.pos)):(o.relative||o.undo(s.extract()),s=s.multiply(o.at(n.ease(this.pos))))}r.matrix(s)}return this},once:function(t,e,i){var s=this.last();return i||(t=s.ease(t)),s.once[t]=e,this},_callStart:function(){return setTimeout(function(){this.start()}.bind(this),0),this}},parent:i.Element,construct:{animate:function(t,e,s){return(this.fx||(this.fx=new i.FX(this))).animate(t,e,s)},delay:function(t){return(this.fx||(this.fx=new i.FX(this))).delay(t)},stop:function(t,e){return this.fx&&this.fx.stop(t,e),this},finish:function(){return this.fx&&this.fx.finish(),this},pause:function(){return this.fx&&this.fx.pause(),this},play:function(){return this.fx&&this.fx.play(),this},speed:function(t){if(this.fx){if(null==t)return this.fx.speed();this.fx.speed(t)}return this}}}),i.MorphObj=i.invent({create:function(t,e){return i.Color.isColor(e)?new i.Color(t).morph(e):i.regex.delimiter.test(t)?i.regex.pathLetters.test(t)?new i.PathArray(t).morph(e):new i.Array(t).morph(e):i.regex.numberAndUnit.test(e)?new i.Number(t).morph(e):(this.value=t,void(this.destination=e))},extend:{at:function(t,e){return e<1?this.value:this.destination},valueOf:function(){return this.value}}}),i.extend(i.FX,{attr:function(t,e,i){if("object"===_typeof(t))for(var s in t)this.attr(s,t[s]);else this.add(t,e,"attrs");return this},style:function(t,e){if("object"===_typeof(t))for(var i in t)this.style(i,t[i]);else this.add(t,e,"styles");return this},x:function(t,e){if(this.target()instanceof i.G)return this.transform({x:t},e),this;var s=new i.Number(t);return s.relative=e,this.add("x",s)},y:function(t,e){if(this.target()instanceof i.G)return this.transform({y:t},e),this;var s=new i.Number(t);return s.relative=e,this.add("y",s)},cx:function(t){return this.add("cx",new i.Number(t))},cy:function(t){return this.add("cy",new i.Number(t))},move:function(t,e){return this.x(t).y(e)},center:function(t,e){return this.cx(t).cy(e)},size:function(t,e){var s;this.target()instanceof i.Text?this.attr("font-size",t):(t&&e||(s=this.target().bbox()),t||(t=s.width/s.height*e),e||(e=s.height/s.width*t),this.add("width",new i.Number(t)).add("height",new i.Number(e)));return this},width:function(t){return this.add("width",new i.Number(t))},height:function(t){return this.add("height",new i.Number(t))},plot:function(t,e,i,s){return 4==arguments.length?this.plot([t,e,i,s]):this.add("plot",new(this.target().morphArray)(t))},leading:function(t){return this.target().leading?this.add("leading",new i.Number(t)):this},viewbox:function(t,e,s,a){return this.target()instanceof i.Container&&this.add("viewbox",new i.ViewBox(t,e,s,a)),this},update:function(t){if(this.target()instanceof i.Stop){if("number"==typeof t||t instanceof i.Number)return this.update({offset:arguments[0],color:arguments[1],opacity:arguments[2]});null!=t.opacity&&this.attr("stop-opacity",t.opacity),null!=t.color&&this.attr("stop-color",t.color),null!=t.offset&&this.attr("offset",t.offset)}return this}}),i.Box=i.invent({create:function(t,e,s,a){if(!("object"!==_typeof(t)||t instanceof i.Element))return i.Box.call(this,null!=t.left?t.left:t.x,null!=t.top?t.top:t.y,t.width,t.height);4==arguments.length&&(this.x=t,this.y=e,this.width=s,this.height=a),m(this)},extend:{merge:function(t){var e=new this.constructor;return e.x=Math.min(this.x,t.x),e.y=Math.min(this.y,t.y),e.width=Math.max(this.x+this.width,t.x+t.width)-e.x,e.height=Math.max(this.y+this.height,t.y+t.height)-e.y,m(e)},transform:function(t){var e,s=1/0,a=-1/0,r=1/0,n=-1/0;return[new i.Point(this.x,this.y),new i.Point(this.x2,this.y),new i.Point(this.x,this.y2),new i.Point(this.x2,this.y2)].forEach(function(e){e=e.transform(t),s=Math.min(s,e.x),a=Math.max(a,e.x),r=Math.min(r,e.y),n=Math.max(n,e.y)}),(e=new this.constructor).x=s,e.width=a-s,e.y=r,e.height=n-r,m(e),e}}}),i.BBox=i.invent({create:function(t){if(i.Box.apply(this,[].slice.call(arguments)),t instanceof i.Element){var s;try{if(!e.documentElement.contains){for(var a=t.node;a.parentNode;)a=a.parentNode;if(a!=e)throw new Error("Element not in the dom")}s=t.node.getBBox()}catch(e){if(t instanceof i.Shape){i.parser.draw||i.prepare();var r=t.clone(i.parser.draw.instance).show();s=r.node.getBBox(),r.remove()}else s={x:t.node.clientLeft,y:t.node.clientTop,width:t.node.clientWidth,height:t.node.clientHeight}}i.Box.call(this,s)}},inherit:i.Box,parent:i.Element,construct:{bbox:function(){return new i.BBox(this)}}}),i.BBox.prototype.constructor=i.BBox,i.extend(i.Element,{tbox:function(){return console.warn("Use of TBox is deprecated and mapped to RBox. Use .rbox() instead."),this.rbox(this.doc())}}),i.RBox=i.invent({create:function(t){i.Box.apply(this,[].slice.call(arguments)),t instanceof i.Element&&i.Box.call(this,t.node.getBoundingClientRect())},inherit:i.Box,parent:i.Element,extend:{addOffset:function(){return this.x+=t.pageXOffset,this.y+=t.pageYOffset,this}},construct:{rbox:function(t){return t?new i.RBox(this).transform(t.screenCTM().inverse()):new i.RBox(this).addOffset()}}}),i.RBox.prototype.constructor=i.RBox,i.Matrix=i.invent({create:function(t){var e,s=f([1,0,0,1,0,0]);for(t=t instanceof i.Element?t.matrixify():"string"==typeof t?f(t.split(i.regex.delimiter).map(parseFloat)):6==arguments.length?f([].slice.call(arguments)):Array.isArray(t)?f(t):"object"===_typeof(t)?t:s,e=v.length-1;e>=0;--e)this[v[e]]=null!=t[v[e]]?t[v[e]]:s[v[e]]},extend:{extract:function(){var t=g(this,0,1),e=g(this,1,0),s=180/Math.PI*Math.atan2(t.y,t.x)-90;return{x:this.e,y:this.f,transformedX:(this.e*Math.cos(s*Math.PI/180)+this.f*Math.sin(s*Math.PI/180))/Math.sqrt(this.a*this.a+this.b*this.b),transformedY:(this.f*Math.cos(s*Math.PI/180)+this.e*Math.sin(-s*Math.PI/180))/Math.sqrt(this.c*this.c+this.d*this.d),skewX:-s,skewY:180/Math.PI*Math.atan2(e.y,e.x),scaleX:Math.sqrt(this.a*this.a+this.b*this.b),scaleY:Math.sqrt(this.c*this.c+this.d*this.d),rotation:s,a:this.a,b:this.b,c:this.c,d:this.d,e:this.e,f:this.f,matrix:new i.Matrix(this)}},clone:function(){return new i.Matrix(this)},morph:function(t){return this.destination=new i.Matrix(t),this},at:function(t){return this.destination?new i.Matrix({a:this.a+(this.destination.a-this.a)*t,b:this.b+(this.destination.b-this.b)*t,c:this.c+(this.destination.c-this.c)*t,d:this.d+(this.destination.d-this.d)*t,e:this.e+(this.destination.e-this.e)*t,f:this.f+(this.destination.f-this.f)*t}):this},multiply:function(t){return new i.Matrix(this.native().multiply(function(t){t instanceof i.Matrix||(t=new i.Matrix(t));return t}(t).native()))},inverse:function(){return new i.Matrix(this.native().inverse())},translate:function(t,e){return new i.Matrix(this.native().translate(t||0,e||0))},scale:function(t,e,s,a){return 1==arguments.length?e=t:3==arguments.length&&(a=s,s=e,e=t),this.around(s,a,new i.Matrix(t,0,0,e,0,0))},rotate:function(t,e,s){return t=i.utils.radians(t),this.around(e,s,new i.Matrix(Math.cos(t),Math.sin(t),-Math.sin(t),Math.cos(t),0,0))},flip:function(t,e){return"x"==t?this.scale(-1,1,e,0):"y"==t?this.scale(1,-1,0,e):this.scale(-1,-1,t,null!=e?e:t)},skew:function(t,e,s,a){return 1==arguments.length?e=t:3==arguments.length&&(a=s,s=e,e=t),t=i.utils.radians(t),e=i.utils.radians(e),this.around(s,a,new i.Matrix(1,Math.tan(e),Math.tan(t),1,0,0))},skewX:function(t,e,i){return this.skew(t,0,e,i)},skewY:function(t,e,i){return this.skew(0,t,e,i)},around:function(t,e,s){return this.multiply(new i.Matrix(1,0,0,1,t||0,e||0)).multiply(s).multiply(new i.Matrix(1,0,0,1,-t||0,-e||0))},native:function(){for(var t=i.parser.native.createSVGMatrix(),e=v.length-1;e>=0;e--)t[v[e]]=this[v[e]];return t},toString:function(){return"matrix("+b(this.a)+","+b(this.b)+","+b(this.c)+","+b(this.d)+","+b(this.e)+","+b(this.f)+")"}},parent:i.Element,construct:{ctm:function(){return new i.Matrix(this.node.getCTM())},screenCTM:function(){if(this instanceof i.Nested){var t=this.rect(1,1),e=t.node.getScreenCTM();return t.remove(),new i.Matrix(e)}return new i.Matrix(this.node.getScreenCTM())}}}),i.Point=i.invent({create:function(t,e){var i;i=Array.isArray(t)?{x:t[0],y:t[1]}:"object"===_typeof(t)?{x:t.x,y:t.y}:null!=t?{x:t,y:null!=e?e:t}:{x:0,y:0},this.x=i.x,this.y=i.y},extend:{clone:function(){return new i.Point(this)},morph:function(t,e){return this.destination=new i.Point(t,e),this},at:function(t){return this.destination?new i.Point({x:this.x+(this.destination.x-this.x)*t,y:this.y+(this.destination.y-this.y)*t}):this},native:function(){var t=i.parser.native.createSVGPoint();return t.x=this.x,t.y=this.y,t},transform:function(t){return new i.Point(this.native().matrixTransform(t.native()))}}}),i.extend(i.Element,{point:function(t,e){return new i.Point(t,e).transform(this.screenCTM().inverse())}}),i.extend(i.Element,{attr:function(t,e,s){if(null==t){for(t={},s=(e=this.node.attributes).length-1;s>=0;s--)t[e[s].nodeName]=i.regex.isNumber.test(e[s].nodeValue)?parseFloat(e[s].nodeValue):e[s].nodeValue;return t}if("object"===_typeof(t))for(e in t)this.attr(e,t[e]);else if(null===e)this.node.removeAttribute(t);else{if(null==e)return null==(e=this.node.getAttribute(t))?i.defaults.attrs[t]:i.regex.isNumber.test(e)?parseFloat(e):e;"stroke-width"==t?this.attr("stroke",parseFloat(e)>0?this._stroke:null):"stroke"==t&&(this._stroke=e),"fill"!=t&&"stroke"!=t||(i.regex.isImage.test(e)&&(e=this.doc().defs().image(e,0,0)),e instanceof i.Image&&(e=this.doc().defs().pattern(0,0,function(){this.add(e)}))),"number"==typeof e?e=new i.Number(e):i.Color.isColor(e)?e=new i.Color(e):Array.isArray(e)&&(e=new i.Array(e)),"leading"==t?this.leading&&this.leading(e):"string"==typeof s?this.node.setAttributeNS(s,t,e.toString()):this.node.setAttribute(t,e.toString()),!this.rebuild||"font-size"!=t&&"x"!=t||this.rebuild(t,e)}return this}}),i.extend(i.Element,{transform:function(t,e){var s,a;if("object"!==_typeof(t))return s=new i.Matrix(this).extract(),"string"==typeof t?s[t]:s;if(s=new i.Matrix(this),e=!!e||!!t.relative,null!=t.a)s=e?s.multiply(new i.Matrix(t)):new i.Matrix(t);else if(null!=t.rotation)p(t,this),s=e?s.rotate(t.rotation,t.cx,t.cy):s.rotate(t.rotation-s.extract().rotation,t.cx,t.cy);else if(null!=t.scale||null!=t.scaleX||null!=t.scaleY){if(p(t,this),t.scaleX=null!=t.scale?t.scale:null!=t.scaleX?t.scaleX:1,t.scaleY=null!=t.scale?t.scale:null!=t.scaleY?t.scaleY:1,!e){var r=s.extract();t.scaleX=1*t.scaleX/r.scaleX,t.scaleY=1*t.scaleY/r.scaleY}s=s.scale(t.scaleX,t.scaleY,t.cx,t.cy)}else if(null!=t.skew||null!=t.skewX||null!=t.skewY){if(p(t,this),t.skewX=null!=t.skew?t.skew:null!=t.skewX?t.skewX:0,t.skewY=null!=t.skew?t.skew:null!=t.skewY?t.skewY:0,!e){r=s.extract();s=s.multiply((new i.Matrix).skew(r.skewX,r.skewY,t.cx,t.cy).inverse())}s=s.skew(t.skewX,t.skewY,t.cx,t.cy)}else t.flip?("x"==t.flip||"y"==t.flip?t.offset=null==t.offset?this.bbox()["c"+t.flip]:t.offset:null==t.offset?(a=this.bbox(),t.flip=a.cx,t.offset=a.cy):t.flip=t.offset,s=(new i.Matrix).flip(t.flip,t.offset)):null==t.x&&null==t.y||(e?s=s.translate(t.x,t.y):(null!=t.x&&(s.e=t.x),null!=t.y&&(s.f=t.y)));return this.attr("transform",s)}}),i.extend(i.FX,{transform:function(t,e){var s,a,r=this.target();return"object"!==_typeof(t)?(s=new i.Matrix(r).extract(),"string"==typeof t?s[t]:s):(e=!!e||!!t.relative,null!=t.a?s=new i.Matrix(t):null!=t.rotation?(p(t,r),s=new i.Rotate(t.rotation,t.cx,t.cy)):null!=t.scale||null!=t.scaleX||null!=t.scaleY?(p(t,r),t.scaleX=null!=t.scale?t.scale:null!=t.scaleX?t.scaleX:1,t.scaleY=null!=t.scale?t.scale:null!=t.scaleY?t.scaleY:1,s=new i.Scale(t.scaleX,t.scaleY,t.cx,t.cy)):null!=t.skewX||null!=t.skewY?(p(t,r),t.skewX=null!=t.skewX?t.skewX:0,t.skewY=null!=t.skewY?t.skewY:0,s=new i.Skew(t.skewX,t.skewY,t.cx,t.cy)):t.flip?("x"==t.flip||"y"==t.flip?t.offset=null==t.offset?r.bbox()["c"+t.flip]:t.offset:null==t.offset?(a=r.bbox(),t.flip=a.cx,t.offset=a.cy):t.flip=t.offset,s=(new i.Matrix).flip(t.flip,t.offset)):null==t.x&&null==t.y||(s=new i.Translate(t.x,t.y)),s?(s.relative=e,this.last().transforms.push(s),this._callStart()):this)}}),i.extend(i.Element,{untransform:function(){return this.attr("transform",null)},matrixify:function(){return(this.attr("transform")||"").split(i.regex.transforms).slice(0,-1).map(function(t){var e=t.trim().split("(");return[e[0],e[1].split(i.regex.delimiter).map(function(t){return parseFloat(t)})]}).reduce(function(t,e){return"matrix"==e[0]?t.multiply(f(e[1])):t[e[0]].apply(t,e[1])},new i.Matrix)},toParent:function(t){if(this==t)return this;var e=this.screenCTM(),i=t.screenCTM().inverse();return this.addTo(t).untransform().transform(i.multiply(e)),this},toDoc:function(){return this.toParent(this.doc())}}),i.Transformation=i.invent({create:function(t,e){if(arguments.length>1&&"boolean"!=typeof e)return this.constructor.call(this,[].slice.call(arguments));if(Array.isArray(t))for(var i=0,s=this.arguments.length;i<s;++i)this[this.arguments[i]]=t[i];else if("object"===_typeof(t))for(i=0,s=this.arguments.length;i<s;++i)this[this.arguments[i]]=t[this.arguments[i]];this.inversed=!1,!0===e&&(this.inversed=!0)},extend:{arguments:[],method:"",at:function(t){for(var e=[],s=0,a=this.arguments.length;s<a;++s)e.push(this[this.arguments[s]]);var r=this._undo||new i.Matrix;return r=(new i.Matrix).morph(i.Matrix.prototype[this.method].apply(r,e)).at(t),this.inversed?r.inverse():r},undo:function(t){for(var e=0,s=this.arguments.length;e<s;++e)t[this.arguments[e]]=void 0===this[this.arguments[e]]?0:t[this.arguments[e]];return t.cx=this.cx,t.cy=this.cy,this._undo=new(i[c(this.method)])(t,!0).at(1),this}}}),i.Translate=i.invent({parent:i.Matrix,inherit:i.Transformation,create:function(t,e){this.constructor.apply(this,[].slice.call(arguments))},extend:{arguments:["transformedX","transformedY"],method:"translate"}}),i.Rotate=i.invent({parent:i.Matrix,inherit:i.Transformation,create:function(t,e){this.constructor.apply(this,[].slice.call(arguments))},extend:{arguments:["rotation","cx","cy"],method:"rotate",at:function(t){var e=(new i.Matrix).rotate((new i.Number).morph(this.rotation-(this._undo?this._undo.rotation:0)).at(t),this.cx,this.cy);return this.inversed?e.inverse():e},undo:function(t){return this._undo=t,this}}}),i.Scale=i.invent({parent:i.Matrix,inherit:i.Transformation,create:function(t,e){this.constructor.apply(this,[].slice.call(arguments))},extend:{arguments:["scaleX","scaleY","cx","cy"],method:"scale"}}),i.Skew=i.invent({parent:i.Matrix,inherit:i.Transformation,create:function(t,e){this.constructor.apply(this,[].slice.call(arguments))},extend:{arguments:["skewX","skewY","cx","cy"],method:"skew"}}),i.extend(i.Element,{style:function(t,e){if(0==arguments.length)return this.node.style.cssText||"";if(arguments.length<2)if("object"===_typeof(t))for(e in t)this.style(e,t[e]);else{if(!i.regex.isCss.test(t))return this.node.style[h(t)];for(t=t.split(/\s*;\s*/).filter(function(t){return!!t}).map(function(t){return t.split(/\s*:\s*/)});e=t.pop();)this.style(e[0],e[1])}else this.node.style[h(t)]=null===e||i.regex.isBlank.test(e)?"":e;return this}}),i.Parent=i.invent({create:function(t){this.constructor.call(this,t)},inherit:i.Element,extend:{children:function(){return i.utils.map(i.utils.filterSVGElements(this.node.childNodes),function(t){return i.adopt(t)})},add:function(t,e){return null==e?this.node.appendChild(t.node):t.node!=this.node.childNodes[e]&&this.node.insertBefore(t.node,this.node.childNodes[e]),this},put:function(t,e){return this.add(t,e),t},has:function(t){return this.index(t)>=0},index:function(t){return[].slice.call(this.node.childNodes).indexOf(t.node)},get:function(t){return i.adopt(this.node.childNodes[t])},first:function(){return this.get(0)},last:function(){return this.get(this.node.childNodes.length-1)},each:function(t,e){var s,a,r=this.children();for(s=0,a=r.length;s<a;s++)r[s]instanceof i.Element&&t.apply(r[s],[s,r]),e&&r[s]instanceof i.Container&&r[s].each(t,e);return this},removeElement:function(t){return this.node.removeChild(t.node),this},clear:function(){for(;this.node.hasChildNodes();)this.node.removeChild(this.node.lastChild);return delete this._defs,this},defs:function(){return this.doc().defs()}}}),i.extend(i.Parent,{ungroup:function(t,e){return 0===e||this instanceof i.Defs||this.node==i.parser.draw?this:(t=t||(this instanceof i.Doc?this:this.parent(i.Parent)),e=e||1/0,this.each(function(){return this instanceof i.Defs?this:this instanceof i.Parent?this.ungroup(t,e-1):this.toParent(t)}),this.node.firstChild||this.remove(),this)},flatten:function(t,e){return this.ungroup(t,e)}}),i.Container=i.invent({create:function(t){this.constructor.call(this,t)},inherit:i.Parent}),i.ViewBox=i.invent({create:function(t){var e,s,a,r,n,o,l,h=1,c=1,d=/[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?/gi;if(t instanceof i.Element){for(o=t,l=t,n=(t.attr("viewBox")||"").match(d),t.bbox,a=new i.Number(t.width()),r=new i.Number(t.height());"%"==a.unit;)h*=a.value,a=new i.Number(o instanceof i.Doc?o.parent().offsetWidth:o.parent().width()),o=o.parent();for(;"%"==r.unit;)c*=r.value,r=new i.Number(l instanceof i.Doc?l.parent().offsetHeight:l.parent().height()),l=l.parent();this.x=0,this.y=0,this.width=a*h,this.height=r*c,this.zoom=1,n&&(e=parseFloat(n[0]),s=parseFloat(n[1]),a=parseFloat(n[2]),r=parseFloat(n[3]),this.zoom=this.width/this.height>a/r?this.height/r:this.width/a,this.x=e,this.y=s,this.width=a,this.height=r)}else t="string"==typeof t?t.match(d).map(function(t){return parseFloat(t)}):Array.isArray(t)?t:"object"===_typeof(t)?[t.x,t.y,t.width,t.height]:4==arguments.length?[].slice.call(arguments):[0,0,0,0],this.x=t[0],this.y=t[1],this.width=t[2],this.height=t[3]},extend:{toString:function(){return this.x+" "+this.y+" "+this.width+" "+this.height},morph:function(t,e,s,a){return this.destination=new i.ViewBox(t,e,s,a),this},at:function(t){return this.destination?new i.ViewBox([this.x+(this.destination.x-this.x)*t,this.y+(this.destination.y-this.y)*t,this.width+(this.destination.width-this.width)*t,this.height+(this.destination.height-this.height)*t]):this}},parent:i.Container,construct:{viewbox:function(t,e,s,a){return 0==arguments.length?new i.ViewBox(this):this.attr("viewBox",new i.ViewBox(t,e,s,a))}}}),["click","dblclick","mousedown","mouseup","mouseover","mouseout","mousemove","touchstart","touchmove","touchleave","touchend","touchcancel"].forEach(function(t){i.Element.prototype[t]=function(e){return i.on(this.node,t,e),this}}),i.listeners=[],i.handlerMap=[],i.listenerId=0,i.on=function(t,e,s,a,r){var n=s.bind(a||t.instance||t),o=(i.handlerMap.indexOf(t)+1||i.handlerMap.push(t))-1,l=e.split(".")[0],h=e.split(".")[1]||"*";i.listeners[o]=i.listeners[o]||{},i.listeners[o][l]=i.listeners[o][l]||{},i.listeners[o][l][h]=i.listeners[o][l][h]||{},s._svgjsListenerId||(s._svgjsListenerId=++i.listenerId),i.listeners[o][l][h][s._svgjsListenerId]=n,t.addEventListener(l,n,r||!1)},i.off=function(t,e,s){var a=i.handlerMap.indexOf(t),r=e&&e.split(".")[0],n=e&&e.split(".")[1],o="";if(-1!=a)if(s){if("function"==typeof s&&(s=s._svgjsListenerId),!s)return;i.listeners[a][r]&&i.listeners[a][r][n||"*"]&&(t.removeEventListener(r,i.listeners[a][r][n||"*"][s],!1),delete i.listeners[a][r][n||"*"][s])}else if(n&&r){if(i.listeners[a][r]&&i.listeners[a][r][n]){for(s in i.listeners[a][r][n])i.off(t,[r,n].join("."),s);delete i.listeners[a][r][n]}}else if(n)for(e in i.listeners[a])for(o in i.listeners[a][e])n===o&&i.off(t,[e,n].join("."));else if(r){if(i.listeners[a][r]){for(o in i.listeners[a][r])i.off(t,[r,o].join("."));delete i.listeners[a][r]}}else{for(e in i.listeners[a])i.off(t,e);delete i.listeners[a],delete i.handlerMap[a]}},i.extend(i.Element,{on:function(t,e,s,a){return i.on(this.node,t,e,s,a),this},off:function(t,e){return i.off(this.node,t,e),this},fire:function(e,s){return e instanceof t.Event?this.node.dispatchEvent(e):this.node.dispatchEvent(e=new i.CustomEvent(e,{detail:s,cancelable:!0})),this._event=e,this},event:function(){return this._event}}),i.Defs=i.invent({create:"defs",inherit:i.Container}),i.G=i.invent({create:"g",inherit:i.Container,extend:{x:function(t){return null==t?this.transform("x"):this.transform({x:t-this.x()},!0)},y:function(t){return null==t?this.transform("y"):this.transform({y:t-this.y()},!0)},cx:function(t){return null==t?this.gbox().cx:this.x(t-this.gbox().width/2)},cy:function(t){return null==t?this.gbox().cy:this.y(t-this.gbox().height/2)},gbox:function(){var t=this.bbox(),e=this.transform();return t.x+=e.x,t.x2+=e.x,t.cx+=e.x,t.y+=e.y,t.y2+=e.y,t.cy+=e.y,t}},construct:{group:function(){return this.put(new i.G)}}}),i.Doc=i.invent({create:function(t){t&&("svg"==(t="string"==typeof t?e.getElementById(t):t).nodeName?this.constructor.call(this,t):(this.constructor.call(this,i.create("svg")),t.appendChild(this.node),this.size("100%","100%")),this.namespace().defs())},inherit:i.Container,extend:{namespace:function(){return this.attr({xmlns:i.ns,version:"1.1"}).attr("xmlns:xlink",i.xlink,i.xmlns).attr("xmlns:svgjs",i.svgjs,i.xmlns)},defs:function(){var t;this._defs||((t=this.node.getElementsByTagName("defs")[0])?this._defs=i.adopt(t):this._defs=new i.Defs,this.node.appendChild(this._defs.node));return this._defs},parent:function(){return this.node.parentNode&&"#document"!=this.node.parentNode.nodeName?this.node.parentNode:null},spof:function(){var t=this.node.getScreenCTM();return t&&this.style("left",-t.e%1+"px").style("top",-t.f%1+"px"),this},remove:function(){return this.parent()&&this.parent().removeChild(this.node),this},clear:function(){for(;this.node.hasChildNodes();)this.node.removeChild(this.node.lastChild);return delete this._defs,i.parser.draw&&!i.parser.draw.parentNode&&this.node.appendChild(i.parser.draw),this},clone:function(t){this.writeDataToDom();var e=this.node,i=x(e.cloneNode(!0));return t?(t.node||t).appendChild(i.node):e.parentNode.insertBefore(i.node,e.nextSibling),i}}}),i.extend(i.Element,{siblings:function(){return this.parent().children()},position:function(){return this.parent().index(this)},next:function(){return this.siblings()[this.position()+1]},previous:function(){return this.siblings()[this.position()-1]},forward:function(){var t=this.position()+1,e=this.parent();return e.removeElement(this).add(this,t),e instanceof i.Doc&&e.node.appendChild(e.defs().node),this},backward:function(){var t=this.position();return t>0&&this.parent().removeElement(this).add(this,t-1),this},front:function(){var t=this.parent();return t.node.appendChild(this.node),t instanceof i.Doc&&t.node.appendChild(t.defs().node),this},back:function(){return this.position()>0&&this.parent().removeElement(this).add(this,0),this},before:function(t){t.remove();var e=this.position();return this.parent().add(t,e),this},after:function(t){t.remove();var e=this.position();return this.parent().add(t,e+1),this}}),i.Mask=i.invent({create:function(){this.constructor.call(this,i.create("mask")),this.targets=[]},inherit:i.Container,extend:{remove:function(){for(var t=this.targets.length-1;t>=0;t--)this.targets[t]&&this.targets[t].unmask();return this.targets=[],i.Element.prototype.remove.call(this),this}},construct:{mask:function(){return this.defs().put(new i.Mask)}}}),i.extend(i.Element,{maskWith:function(t){return this.masker=t instanceof i.Mask?t:this.parent().mask().add(t),this.masker.targets.push(this),this.attr("mask",'url("#'+this.masker.attr("id")+'")')},unmask:function(){return delete this.masker,this.attr("mask",null)}}),i.ClipPath=i.invent({create:function(){this.constructor.call(this,i.create("clipPath")),this.targets=[]},inherit:i.Container,extend:{remove:function(){for(var t=this.targets.length-1;t>=0;t--)this.targets[t]&&this.targets[t].unclip();return this.targets=[],this.parent().removeElement(this),this}},construct:{clip:function(){return this.defs().put(new i.ClipPath)}}}),i.extend(i.Element,{clipWith:function(t){return this.clipper=t instanceof i.ClipPath?t:this.parent().clip().add(t),this.clipper.targets.push(this),this.attr("clip-path",'url("#'+this.clipper.attr("id")+'")')},unclip:function(){return delete this.clipper,this.attr("clip-path",null)}}),i.Gradient=i.invent({create:function(t){this.constructor.call(this,i.create(t+"Gradient")),this.type=t},inherit:i.Container,extend:{at:function(t,e,s){return this.put(new i.Stop).update(t,e,s)},update:function(t){return this.clear(),"function"==typeof t&&t.call(this,this),this},fill:function(){return"url(#"+this.id()+")"},toString:function(){return this.fill()},attr:function(t,e,s){return"transform"==t&&(t="gradientTransform"),i.Container.prototype.attr.call(this,t,e,s)}},construct:{gradient:function(t,e){return this.defs().gradient(t,e)}}}),i.extend(i.Gradient,i.FX,{from:function(t,e){return"radial"==(this._target||this).type?this.attr({fx:new i.Number(t),fy:new i.Number(e)}):this.attr({x1:new i.Number(t),y1:new i.Number(e)})},to:function(t,e){return"radial"==(this._target||this).type?this.attr({cx:new i.Number(t),cy:new i.Number(e)}):this.attr({x2:new i.Number(t),y2:new i.Number(e)})}}),i.extend(i.Defs,{gradient:function(t,e){return this.put(new i.Gradient(t)).update(e)}}),i.Stop=i.invent({create:"stop",inherit:i.Element,extend:{update:function(t){return("number"==typeof t||t instanceof i.Number)&&(t={offset:arguments[0],color:arguments[1],opacity:arguments[2]}),null!=t.opacity&&this.attr("stop-opacity",t.opacity),null!=t.color&&this.attr("stop-color",t.color),null!=t.offset&&this.attr("offset",new i.Number(t.offset)),this}}}),i.Pattern=i.invent({create:"pattern",inherit:i.Container,extend:{fill:function(){return"url(#"+this.id()+")"},update:function(t){return this.clear(),"function"==typeof t&&t.call(this,this),this},toString:function(){return this.fill()},attr:function(t,e,s){return"transform"==t&&(t="patternTransform"),i.Container.prototype.attr.call(this,t,e,s)}},construct:{pattern:function(t,e,i){return this.defs().pattern(t,e,i)}}}),i.extend(i.Defs,{pattern:function(t,e,s){return this.put(new i.Pattern).update(s).attr({x:0,y:0,width:t,height:e,patternUnits:"userSpaceOnUse"})}}),i.Shape=i.invent({create:function(t){this.constructor.call(this,t)},inherit:i.Element}),i.Bare=i.invent({create:function(t,e){if(this.constructor.call(this,i.create(t)),e)for(var s in e.prototype)"function"==typeof e.prototype[s]&&(this[s]=e.prototype[s])},inherit:i.Element,extend:{words:function(t){for(;this.node.hasChildNodes();)this.node.removeChild(this.node.lastChild);return this.node.appendChild(e.createTextNode(t)),this}}}),i.extend(i.Parent,{element:function(t,e){return this.put(new i.Bare(t,e))}}),i.Symbol=i.invent({create:"symbol",inherit:i.Container,construct:{symbol:function(){return this.put(new i.Symbol)}}}),i.Use=i.invent({create:"use",inherit:i.Shape,extend:{element:function(t,e){return this.attr("href",(e||"")+"#"+t,i.xlink)}},construct:{use:function(t,e){return this.put(new i.Use).element(t,e)}}}),i.Rect=i.invent({create:"rect",inherit:i.Shape,construct:{rect:function(t,e){return this.put(new i.Rect).size(t,e)}}}),i.Circle=i.invent({create:"circle",inherit:i.Shape,construct:{circle:function(t){return this.put(new i.Circle).rx(new i.Number(t).divide(2)).move(0,0)}}}),i.extend(i.Circle,i.FX,{rx:function(t){return this.attr("r",t)},ry:function(t){return this.rx(t)}}),i.Ellipse=i.invent({create:"ellipse",inherit:i.Shape,construct:{ellipse:function(t,e){return this.put(new i.Ellipse).size(t,e).move(0,0)}}}),i.extend(i.Ellipse,i.Rect,i.FX,{rx:function(t){return this.attr("rx",t)},ry:function(t){return this.attr("ry",t)}}),i.extend(i.Circle,i.Ellipse,{x:function(t){return null==t?this.cx()-this.rx():this.cx(t+this.rx())},y:function(t){return null==t?this.cy()-this.ry():this.cy(t+this.ry())},cx:function(t){return null==t?this.attr("cx"):this.attr("cx",t)},cy:function(t){return null==t?this.attr("cy"):this.attr("cy",t)},width:function(t){return null==t?2*this.rx():this.rx(new i.Number(t).divide(2))},height:function(t){return null==t?2*this.ry():this.ry(new i.Number(t).divide(2))},size:function(t,e){var s=u(this,t,e);return this.rx(new i.Number(s.width).divide(2)).ry(new i.Number(s.height).divide(2))}}),i.Line=i.invent({create:"line",inherit:i.Shape,extend:{array:function(){return new i.PointArray([[this.attr("x1"),this.attr("y1")],[this.attr("x2"),this.attr("y2")]])},plot:function(t,e,s,a){return null==t?this.array():(t=void 0!==e?{x1:t,y1:e,x2:s,y2:a}:new i.PointArray(t).toLine(),this.attr(t))},move:function(t,e){return this.attr(this.array().move(t,e).toLine())},size:function(t,e){var i=u(this,t,e);return this.attr(this.array().size(i.width,i.height).toLine())}},construct:{line:function(t,e,s,a){return i.Line.prototype.plot.apply(this.put(new i.Line),null!=t?[t,e,s,a]:[0,0,0,0])}}}),i.Polyline=i.invent({create:"polyline",inherit:i.Shape,construct:{polyline:function(t){return this.put(new i.Polyline).plot(t||new i.PointArray)}}}),i.Polygon=i.invent({create:"polygon",inherit:i.Shape,construct:{polygon:function(t){return this.put(new i.Polygon).plot(t||new i.PointArray)}}}),i.extend(i.Polyline,i.Polygon,{array:function(){return this._array||(this._array=new i.PointArray(this.attr("points")))},plot:function(t){return null==t?this.array():this.clear().attr("points","string"==typeof t?t:this._array=new i.PointArray(t))},clear:function(){return delete this._array,this},move:function(t,e){return this.attr("points",this.array().move(t,e))},size:function(t,e){var i=u(this,t,e);return this.attr("points",this.array().size(i.width,i.height))}}),i.extend(i.Line,i.Polyline,i.Polygon,{morphArray:i.PointArray,x:function(t){return null==t?this.bbox().x:this.move(t,this.bbox().y)},y:function(t){return null==t?this.bbox().y:this.move(this.bbox().x,t)},width:function(t){var e=this.bbox();return null==t?e.width:this.size(t,e.height)},height:function(t){var e=this.bbox();return null==t?e.height:this.size(e.width,t)}}),i.Path=i.invent({create:"path",inherit:i.Shape,extend:{morphArray:i.PathArray,array:function(){return this._array||(this._array=new i.PathArray(this.attr("d")))},plot:function(t){return null==t?this.array():this.clear().attr("d","string"==typeof t?t:this._array=new i.PathArray(t))},clear:function(){return delete this._array,this},move:function(t,e){return this.attr("d",this.array().move(t,e))},x:function(t){return null==t?this.bbox().x:this.move(t,this.bbox().y)},y:function(t){return null==t?this.bbox().y:this.move(this.bbox().x,t)},size:function(t,e){var i=u(this,t,e);return this.attr("d",this.array().size(i.width,i.height))},width:function(t){return null==t?this.bbox().width:this.size(t,this.bbox().height)},height:function(t){return null==t?this.bbox().height:this.size(this.bbox().width,t)}},construct:{path:function(t){return this.put(new i.Path).plot(t||new i.PathArray)}}}),i.Image=i.invent({create:"image",inherit:i.Shape,extend:{load:function(e){if(!e)return this;var s=this,a=new t.Image;return i.on(a,"load",function(){i.off(a);var t=s.parent(i.Pattern);null!==t&&(0==s.width()&&0==s.height()&&s.size(a.width,a.height),t&&0==t.width()&&0==t.height()&&t.size(s.width(),s.height()),"function"==typeof s._loaded&&s._loaded.call(s,{width:a.width,height:a.height,ratio:a.width/a.height,url:e}))}),i.on(a,"error",function(t){i.off(a),"function"==typeof s._error&&s._error.call(s,t)}),this.attr("href",a.src=this.src=e,i.xlink)},loaded:function(t){return this._loaded=t,this},error:function(t){return this._error=t,this}},construct:{image:function(t,e,s){return this.put(new i.Image).load(t).size(e||0,s||e||0)}}}),i.Text=i.invent({create:function(){this.constructor.call(this,i.create("text")),this.dom.leading=new i.Number(1.3),this._rebuild=!0,this._build=!1,this.attr("font-family",i.defaults.attrs["font-family"])},inherit:i.Shape,extend:{x:function(t){return null==t?this.attr("x"):this.attr("x",t)},y:function(t){var e=this.attr("y"),i="number"==typeof e?e-this.bbox().y:0;return null==t?"number"==typeof e?e-i:e:this.attr("y","number"==typeof t.valueOf()?t+i:t)},cx:function(t){return null==t?this.bbox().cx:this.x(t-this.bbox().width/2)},cy:function(t){return null==t?this.bbox().cy:this.y(t-this.bbox().height/2)},text:function(t){if(void 0===t){t="";for(var e=this.node.childNodes,s=0,a=e.length;s<a;++s)0!=s&&3!=e[s].nodeType&&1==i.adopt(e[s]).dom.newLined&&(t+="\n"),t+=e[s].textContent;return t}if(this.clear().build(!0),"function"==typeof t)t.call(this,this);else{s=0;for(var r=(t=t.split("\n")).length;s<r;s++)this.tspan(t[s]).newLine()}return this.build(!1).rebuild()},size:function(t){return this.attr("font-size",t).rebuild()},leading:function(t){return null==t?this.dom.leading:(this.dom.leading=new i.Number(t),this.rebuild())},lines:function(){var t=(this.textPath&&this.textPath()||this).node,e=i.utils.map(i.utils.filterSVGElements(t.childNodes),function(t){return i.adopt(t)});return new i.Set(e)},rebuild:function(t){if("boolean"==typeof t&&(this._rebuild=t),this._rebuild){var e=this,s=0,a=this.dom.leading*new i.Number(this.attr("font-size"));this.lines().each(function(){this.dom.newLined&&(e.textPath()||this.attr("x",e.attr("x")),"\n"==this.text()?s+=a:(this.attr("dy",a+s),s=0))}),this.fire("rebuild")}return this},build:function(t){return this._build=!!t,this},setData:function(t){return this.dom=t,this.dom.leading=new i.Number(t.leading||1.3),this}},construct:{text:function(t){return this.put(new i.Text).text(t)},plain:function(t){return this.put(new i.Text).plain(t)}}}),i.Tspan=i.invent({create:"tspan",inherit:i.Shape,extend:{text:function(t){return null==t?this.node.textContent+(this.dom.newLined?"\n":""):("function"==typeof t?t.call(this,this):this.plain(t),this)},dx:function(t){return this.attr("dx",t)},dy:function(t){return this.attr("dy",t)},newLine:function(){var t=this.parent(i.Text);return this.dom.newLined=!0,this.dy(t.dom.leading*t.attr("font-size")).attr("x",t.x())}}}),i.extend(i.Text,i.Tspan,{plain:function(t){return!1===this._build&&this.clear(),this.node.appendChild(e.createTextNode(t)),this},tspan:function(t){var e=(this.textPath&&this.textPath()||this).node,s=new i.Tspan;return!1===this._build&&this.clear(),e.appendChild(s.node),s.text(t)},clear:function(){for(var t=(this.textPath&&this.textPath()||this).node;t.hasChildNodes();)t.removeChild(t.lastChild);return this},length:function(){return this.node.getComputedTextLength()}}),i.TextPath=i.invent({create:"textPath",inherit:i.Parent,parent:i.Text,construct:{morphArray:i.PathArray,path:function(t){for(var e=new i.TextPath,s=this.doc().defs().path(t);this.node.hasChildNodes();)e.node.appendChild(this.node.firstChild);return this.node.appendChild(e.node),e.attr("href","#"+s,i.xlink),this},array:function(){var t=this.track();return t?t.array():null},plot:function(t){var e=this.track(),i=null;return e&&(i=e.plot(t)),null==t?i:this},track:function(){var t=this.textPath();if(t)return t.reference("href")},textPath:function(){if(this.node.firstChild&&"textPath"==this.node.firstChild.nodeName)return i.adopt(this.node.firstChild)}}}),i.Nested=i.invent({create:function(){this.constructor.call(this,i.create("svg")),this.style("overflow","visible")},inherit:i.Container,construct:{nested:function(){return this.put(new i.Nested)}}}),i.A=i.invent({create:"a",inherit:i.Container,extend:{to:function(t){return this.attr("href",t,i.xlink)},show:function(t){return this.attr("show",t,i.xlink)},target:function(t){return this.attr("target",t)}},construct:{link:function(t){return this.put(new i.A).to(t)}}}),i.extend(i.Element,{linkTo:function(t){var e=new i.A;return"function"==typeof t?t.call(e,e):e.to(t),this.parent().put(e).put(this)}}),i.Marker=i.invent({create:"marker",inherit:i.Container,extend:{width:function(t){return this.attr("markerWidth",t)},height:function(t){return this.attr("markerHeight",t)},ref:function(t,e){return this.attr("refX",t).attr("refY",e)},update:function(t){return this.clear(),"function"==typeof t&&t.call(this,this),this},toString:function(){return"url(#"+this.id()+")"}},construct:{marker:function(t,e,i){return this.defs().marker(t,e,i)}}}),i.extend(i.Defs,{marker:function(t,e,s){return this.put(new i.Marker).size(t,e).ref(t/2,e/2).viewbox(0,0,t,e).attr("orient","auto").update(s)}}),i.extend(i.Line,i.Polyline,i.Polygon,i.Path,{marker:function(t,e,s,a){var r=["marker"];return"all"!=t&&r.push(t),r=r.join("-"),t=arguments[1]instanceof i.Marker?arguments[1]:this.doc().marker(e,s,a),this.attr(r,t)}});var o={stroke:["color","width","opacity","linecap","linejoin","miterlimit","dasharray","dashoffset"],fill:["color","opacity","rule"],prefix:function(t,e){return"color"==e?t:t+"-"+e}};function l(t,e,s,a){return s+a.replace(i.regex.dots," .")}function h(t){return t.toLowerCase().replace(/-(.)/g,function(t,e){return e.toUpperCase()})}function c(t){return t.charAt(0).toUpperCase()+t.slice(1)}function d(t){var e=t.toString(16);return 1==e.length?"0"+e:e}function u(t,e,i){if(null==e||null==i){var s=t.bbox();null==e?e=s.width/s.height*i:null==i&&(i=s.height/s.width*e)}return{width:e,height:i}}function g(t,e,i){return{x:e*t.a+i*t.c+0,y:e*t.b+i*t.d+0}}function f(t){return{a:t[0],b:t[1],c:t[2],d:t[3],e:t[4],f:t[5]}}function p(t,e){t.cx=null==t.cx?e.bbox().cx:t.cx,t.cy=null==t.cy?e.bbox().cy:t.cy}function x(e){for(var s=e.childNodes.length-1;s>=0;s--)e.childNodes[s]instanceof t.SVGElement&&x(e.childNodes[s]);return i.adopt(e).id(i.eid(e.nodeName))}function m(t){return null==t.x&&(t.x=0,t.y=0,t.width=0,t.height=0),t.w=t.width,t.h=t.height,t.x2=t.x+t.width,t.y2=t.y+t.height,t.cx=t.x+t.width/2,t.cy=t.y+t.height/2,t}function b(t){return Math.abs(t)>1e-37?t:0}["fill","stroke"].forEach(function(t){var e,s={};s[t]=function(s){if(void 0===s)return this;if("string"==typeof s||i.Color.isRgb(s)||s&&"function"==typeof s.fill)this.attr(t,s);else for(e=o[t].length-1;e>=0;e--)null!=s[o[t][e]]&&this.attr(o.prefix(t,o[t][e]),s[o[t][e]]);return this},i.extend(i.Element,i.FX,s)}),i.extend(i.Element,i.FX,{rotate:function(t,e,i){return this.transform({rotation:t,cx:e,cy:i})},skew:function(t,e,i,s){return 1==arguments.length||3==arguments.length?this.transform({skew:t,cx:e,cy:i}):this.transform({skewX:t,skewY:e,cx:i,cy:s})},scale:function(t,e,i,s){return 1==arguments.length||3==arguments.length?this.transform({scale:t,cx:e,cy:i}):this.transform({scaleX:t,scaleY:e,cx:i,cy:s})},translate:function(t,e){return this.transform({x:t,y:e})},flip:function(t,e){return e="number"==typeof t?t:e,this.transform({flip:t||"both",offset:e})},matrix:function(t){return this.attr("transform",new i.Matrix(6==arguments.length?[].slice.call(arguments):t))},opacity:function(t){return this.attr("opacity",t)},dx:function(t){return this.x(new i.Number(t).plus(this instanceof i.FX?0:this.x()),!0)},dy:function(t){return this.y(new i.Number(t).plus(this instanceof i.FX?0:this.y()),!0)},dmove:function(t,e){return this.dx(t).dy(e)}}),i.extend(i.Rect,i.Ellipse,i.Circle,i.Gradient,i.FX,{radius:function(t,e){var s=(this._target||this).type;return"radial"==s||"circle"==s?this.attr("r",new i.Number(t)):this.rx(t).ry(null==e?t:e)}}),i.extend(i.Path,{length:function(){return this.node.getTotalLength()},pointAt:function(t){return this.node.getPointAtLength(t)}}),i.extend(i.Parent,i.Text,i.Tspan,i.FX,{font:function(t,e){if("object"===_typeof(t))for(e in t)this.font(e,t[e]);return"leading"==t?this.leading(e):"anchor"==t?this.attr("text-anchor",e):"size"==t||"family"==t||"weight"==t||"stretch"==t||"variant"==t||"style"==t?this.attr("font-"+t,e):this.attr(t,e)}}),i.Set=i.invent({create:function(t){Array.isArray(t)?this.members=t:this.clear()},extend:{add:function(){var t,e,i=[].slice.call(arguments);for(t=0,e=i.length;t<e;t++)this.members.push(i[t]);return this},remove:function(t){var e=this.index(t);return e>-1&&this.members.splice(e,1),this},each:function(t){for(var e=0,i=this.members.length;e<i;e++)t.apply(this.members[e],[e,this.members]);return this},clear:function(){return this.members=[],this},length:function(){return this.members.length},has:function(t){return this.index(t)>=0},index:function(t){return this.members.indexOf(t)},get:function(t){return this.members[t]},first:function(){return this.get(0)},last:function(){return this.get(this.members.length-1)},valueOf:function(){return this.members},bbox:function(){if(0==this.members.length)return new i.RBox;var t=this.members[0].rbox(this.members[0].doc());return this.each(function(){t=t.merge(this.rbox(this.doc()))}),t}},construct:{set:function(t){return new i.Set(t)}}}),i.FX.Set=i.invent({create:function(t){this.set=t}}),i.Set.inherit=function(){var t=[];for(var e in i.Shape.prototype)"function"==typeof i.Shape.prototype[e]&&"function"!=typeof i.Set.prototype[e]&&t.push(e);for(var e in t.forEach(function(t){i.Set.prototype[t]=function(){for(var e=0,s=this.members.length;e<s;e++)this.members[e]&&"function"==typeof this.members[e][t]&&this.members[e][t].apply(this.members[e],arguments);return"animate"==t?this.fx||(this.fx=new i.FX.Set(this)):this}}),t=[],i.FX.prototype)"function"==typeof i.FX.prototype[e]&&"function"!=typeof i.FX.Set.prototype[e]&&t.push(e);t.forEach(function(t){i.FX.Set.prototype[t]=function(){for(var e=0,i=this.set.members.length;e<i;e++)this.set.members[e].fx[t].apply(this.set.members[e].fx,arguments);return this}})},i.extend(i.Element,{data:function(t,e,i){if("object"===_typeof(t))for(e in t)this.data(e,t[e]);else if(arguments.length<2)try{return JSON.parse(this.attr("data-"+t))}catch(e){return this.attr("data-"+t)}else this.attr("data-"+t,null===e?null:!0===i||"string"==typeof e||"number"==typeof e?e:JSON.stringify(e));return this}}),i.extend(i.Element,{remember:function(t,e){if("object"===_typeof(arguments[0]))for(var e in t)this.remember(e,t[e]);else{if(1==arguments.length)return this.memory()[t];this.memory()[t]=e}return this},forget:function(){if(0==arguments.length)this._memory={};else for(var t=arguments.length-1;t>=0;t--)delete this.memory()[arguments[t]];return this},memory:function(){return this._memory||(this._memory={})}}),i.get=function(t){var s=e.getElementById(function(t){var e=(t||"").toString().match(i.regex.reference);if(e)return e[1]}(t)||t);return i.adopt(s)},i.select=function(t,s){return new i.Set(i.utils.map((s||e).querySelectorAll(t),function(t){return i.adopt(t)}))},i.extend(i.Parent,{select:function(t){return i.select(t,this.node)}});var v="abcdef".split("");if("function"!=typeof t.CustomEvent){var y=function(t,i){i=i||{bubbles:!1,cancelable:!1,detail:void 0};var s=e.createEvent("CustomEvent");return s.initCustomEvent(t,i.bubbles,i.cancelable,i.detail),s};y.prototype=t.Event.prototype,i.CustomEvent=y}else i.CustomEvent=t.CustomEvent;return function(e){for(var i=0,s=["moz","webkit"],a=0;a<s.length&&!t.requestAnimationFrame;++a)e.requestAnimationFrame=e[s[a]+"RequestAnimationFrame"],e.cancelAnimationFrame=e[s[a]+"CancelAnimationFrame"]||e[s[a]+"CancelRequestAnimationFrame"];e.requestAnimationFrame=e.requestAnimationFrame||function(t){var s=(new Date).getTime(),a=Math.max(0,16-(s-i)),r=e.setTimeout(function(){t(s+a)},a);return i=s+a,r},e.cancelAnimationFrame=e.cancelAnimationFrame||e.clearTimeout}(t),i}),function(){SVG.Filter=SVG.invent({create:"filter",inherit:SVG.Parent,extend:{source:"SourceGraphic",sourceAlpha:"SourceAlpha",background:"BackgroundImage",backgroundAlpha:"BackgroundAlpha",fill:"FillPaint",stroke:"StrokePaint",autoSetIn:!0,put:function(t,e){return this.add(t,e),!t.attr("in")&&this.autoSetIn&&t.attr("in",this.source),t.attr("result")||t.attr("result",t),t},blend:function(t,e,i){return this.put(new SVG.BlendEffect(t,e,i))},colorMatrix:function(t,e){return this.put(new SVG.ColorMatrixEffect(t,e))},convolveMatrix:function(t){return this.put(new SVG.ConvolveMatrixEffect(t))},componentTransfer:function(t){return this.put(new SVG.ComponentTransferEffect(t))},composite:function(t,e,i){return this.put(new SVG.CompositeEffect(t,e,i))},flood:function(t,e){return this.put(new SVG.FloodEffect(t,e))},offset:function(t,e){return this.put(new SVG.OffsetEffect(t,e))},image:function(t){return this.put(new SVG.ImageEffect(t))},merge:function(){var t=[void 0];for(var e in arguments)t.push(arguments[e]);return this.put(new(SVG.MergeEffect.bind.apply(SVG.MergeEffect,t)))},gaussianBlur:function(t,e){return this.put(new SVG.GaussianBlurEffect(t,e))},morphology:function(t,e){return this.put(new SVG.MorphologyEffect(t,e))},diffuseLighting:function(t,e,i){return this.put(new SVG.DiffuseLightingEffect(t,e,i))},displacementMap:function(t,e,i,s,a){return this.put(new SVG.DisplacementMapEffect(t,e,i,s,a))},specularLighting:function(t,e,i,s){return this.put(new SVG.SpecularLightingEffect(t,e,i,s))},tile:function(){return this.put(new SVG.TileEffect)},turbulence:function(t,e,i,s,a){return this.put(new SVG.TurbulenceEffect(t,e,i,s,a))},toString:function(){return"url(#"+this.attr("id")+")"}}}),SVG.extend(SVG.Defs,{filter:function(t){var e=this.put(new SVG.Filter);return"function"==typeof t&&t.call(e,e),e}}),SVG.extend(SVG.Container,{filter:function(t){return this.defs().filter(t)}}),SVG.extend(SVG.Element,SVG.G,SVG.Nested,{filter:function(t){return this.filterer=t instanceof SVG.Element?t:this.doc().filter(t),this.doc()&&this.filterer.doc()!==this.doc()&&this.doc().defs().add(this.filterer),this.attr("filter",this.filterer),this.filterer},unfilter:function(t){return this.filterer&&!0===t&&this.filterer.remove(),delete this.filterer,this.attr("filter",null)}}),SVG.Effect=SVG.invent({create:function(){this.constructor.call(this)},inherit:SVG.Element,extend:{in:function(t){return null==t?this.parent()&&this.parent().select('[result="'+this.attr("in")+'"]').get(0)||this.attr("in"):this.attr("in",t)},result:function(t){return null==t?this.attr("result"):this.attr("result",t)},toString:function(){return this.result()}}}),SVG.ParentEffect=SVG.invent({create:function(){this.constructor.call(this)},inherit:SVG.Parent,extend:{in:function(t){return null==t?this.parent()&&this.parent().select('[result="'+this.attr("in")+'"]').get(0)||this.attr("in"):this.attr("in",t)},result:function(t){return null==t?this.attr("result"):this.attr("result",t)},toString:function(){return this.result()}}});var t={blend:function(t,e){return this.parent()&&this.parent().blend(this,t,e)},colorMatrix:function(t,e){return this.parent()&&this.parent().colorMatrix(t,e).in(this)},convolveMatrix:function(t){return this.parent()&&this.parent().convolveMatrix(t).in(this)},componentTransfer:function(t){return this.parent()&&this.parent().componentTransfer(t).in(this)},composite:function(t,e){return this.parent()&&this.parent().composite(this,t,e)},flood:function(t,e){return this.parent()&&this.parent().flood(t,e)},offset:function(t,e){return this.parent()&&this.parent().offset(t,e).in(this)},image:function(t){return this.parent()&&this.parent().image(t)},merge:function(){return this.parent()&&this.parent().merge.apply(this.parent(),[this].concat(arguments))},gaussianBlur:function(t,e){return this.parent()&&this.parent().gaussianBlur(t,e).in(this)},morphology:function(t,e){return this.parent()&&this.parent().morphology(t,e).in(this)},diffuseLighting:function(t,e,i){return this.parent()&&this.parent().diffuseLighting(t,e,i).in(this)},displacementMap:function(t,e,i,s){return this.parent()&&this.parent().displacementMap(this,t,e,i,s)},specularLighting:function(t,e,i,s){return this.parent()&&this.parent().specularLighting(t,e,i,s).in(this)},tile:function(){return this.parent()&&this.parent().tile().in(this)},turbulence:function(t,e,i,s,a){return this.parent()&&this.parent().turbulence(t,e,i,s,a).in(this)}};SVG.extend(SVG.Effect,t),SVG.extend(SVG.ParentEffect,t),SVG.ChildEffect=SVG.invent({create:function(){this.constructor.call(this)},inherit:SVG.Element,extend:{in:function(t){this.attr("in",t)}}});var e={blend:function(t,e,i){this.attr({in:t,in2:e,mode:i||"normal"})},colorMatrix:function(t,e){"matrix"==t&&(e=a(e)),this.attr({type:t,values:void 0===e?null:e})},convolveMatrix:function(t){t=a(t),this.attr({order:Math.sqrt(t.split(" ").length),kernelMatrix:t})},composite:function(t,e,i){this.attr({in:t,in2:e,operator:i})},flood:function(t,e){this.attr("flood-color",t),null!=e&&this.attr("flood-opacity",e)},offset:function(t,e){this.attr({dx:t,dy:e})},image:function(t){this.attr("href",t,SVG.xlink)},displacementMap:function(t,e,i,s,a){this.attr({in:t,in2:e,scale:i,xChannelSelector:s,yChannelSelector:a})},gaussianBlur:function(t,e){null!=t||null!=e?this.attr("stdDeviation",function(t){if(!Array.isArray(t))return t;for(var e=0,i=t.length,s=[];e<i;e++)s.push(t[e]);return s.join(" ")}(Array.prototype.slice.call(arguments))):this.attr("stdDeviation","0 0")},morphology:function(t,e){this.attr({operator:t,radius:e})},tile:function(){},turbulence:function(t,e,i,s,a){this.attr({numOctaves:e,seed:i,stitchTiles:s,baseFrequency:t,type:a})}},i={merge:function(){var t;if(arguments[0]instanceof SVG.Set){var e=this;arguments[0].each(function(t){this instanceof SVG.MergeNode?e.put(this):(this instanceof SVG.Effect||this instanceof SVG.ParentEffect)&&e.put(new SVG.MergeNode(this))})}else{t=Array.isArray(arguments[0])?arguments[0]:arguments;for(var i=0;i<t.length;i++)t[i]instanceof SVG.MergeNode?this.put(t[i]):this.put(new SVG.MergeNode(t[i]))}},componentTransfer:function(t){if(this.rgb=new SVG.Set,["r","g","b","a"].forEach(function(t){this[t]=new(SVG["Func"+t.toUpperCase()])("identity"),this.rgb.add(this[t]),this.node.appendChild(this[t].node)}.bind(this)),t)for(var e in t.rgb&&(["r","g","b"].forEach(function(e){this[e].attr(t.rgb)}.bind(this)),delete t.rgb),t)this[e].attr(t[e])},diffuseLighting:function(t,e,i){this.attr({surfaceScale:t,diffuseConstant:e,kernelUnitLength:i})},specularLighting:function(t,e,i,s){this.attr({surfaceScale:t,diffuseConstant:e,specularExponent:i,kernelUnitLength:s})}},s={distantLight:function(t,e){this.attr({azimuth:t,elevation:e})},pointLight:function(t,e,i){this.attr({x:t,y:e,z:i})},spotLight:function(t,e,i,s,a,r){this.attr({x:t,y:e,z:i,pointsAtX:s,pointsAtY:a,pointsAtZ:r})},mergeNode:function(t){this.attr("in",t)}};function a(t){return Array.isArray(t)&&(t=new SVG.Array(t)),t.toString().replace(/^\s+/,"").replace(/\s+$/,"").replace(/\s+/g," ")}function r(){var t=function(){};for(var e in"function"==typeof arguments[arguments.length-1]&&(t=arguments[arguments.length-1],Array.prototype.splice.call(arguments,arguments.length-1,1)),arguments)for(var i in arguments[e])t(arguments[e][i],i,arguments[e])}["r","g","b","a"].forEach(function(t){s["Func"+t.toUpperCase()]=function(t){switch(this.attr("type",t),t){case"table":this.attr("tableValues",arguments[1]);break;case"linear":this.attr("slope",arguments[1]),this.attr("intercept",arguments[2]);break;case"gamma":this.attr("amplitude",arguments[1]),this.attr("exponent",arguments[2]),this.attr("offset",arguments[2])}}}),r(e,function(t,e){var i=e.charAt(0).toUpperCase()+e.slice(1);SVG[i+"Effect"]=SVG.invent({create:function(){this.constructor.call(this,SVG.create("fe"+i)),t.apply(this,arguments),this.result(this.attr("id")+"Out")},inherit:SVG.Effect,extend:{}})}),r(i,function(t,e){var i=e.charAt(0).toUpperCase()+e.slice(1);SVG[i+"Effect"]=SVG.invent({create:function(){this.constructor.call(this,SVG.create("fe"+i)),t.apply(this,arguments),this.result(this.attr("id")+"Out")},inherit:SVG.ParentEffect,extend:{}})}),r(s,function(t,e){var i=e.charAt(0).toUpperCase()+e.slice(1);SVG[i]=SVG.invent({create:function(){this.constructor.call(this,SVG.create("fe"+i)),t.apply(this,arguments)},inherit:SVG.ChildEffect,extend:{}})}),SVG.extend(SVG.MergeEffect,{in:function(t){return t instanceof SVG.MergeNode?this.add(t,0):this.add(new SVG.MergeNode(t),0),this}}),SVG.extend(SVG.CompositeEffect,SVG.BlendEffect,SVG.DisplacementMapEffect,{in2:function(t){return null==t?this.parent()&&this.parent().select('[result="'+this.attr("in2")+'"]').get(0)||this.attr("in2"):this.attr("in2",t)}}),SVG.filter={sepiatone:[.343,.669,.119,0,0,.249,.626,.13,0,0,.172,.334,.111,0,0,0,0,0,1,0]}}.call(void 0),function(){function t(t,a,r,n,o,l,h){for(var c=t.slice(a,r||h),d=n.slice(o,l||h),u=0,g={pos:[0,0],start:[0,0]},f={pos:[0,0],start:[0,0]};;){if(c[u]=e.call(g,c[u]),d[u]=e.call(f,d[u]),c[u][0]!=d[u][0]||"M"==c[u][0]||"A"==c[u][0]&&(c[u][4]!=d[u][4]||c[u][5]!=d[u][5])?(Array.prototype.splice.apply(c,[u,1].concat(s.call(g,c[u]))),Array.prototype.splice.apply(d,[u,1].concat(s.call(f,d[u])))):(c[u]=i.call(g,c[u]),d[u]=i.call(f,d[u])),++u==c.length&&u==d.length)break;u==c.length&&c.push(["C",g.pos[0],g.pos[1],g.pos[0],g.pos[1],g.pos[0],g.pos[1]]),u==d.length&&d.push(["C",f.pos[0],f.pos[1],f.pos[0],f.pos[1],f.pos[0],f.pos[1]])}return{start:c,dest:d}}function e(t){switch(t[0]){case"z":case"Z":t[0]="L",t[1]=this.start[0],t[2]=this.start[1];break;case"H":t[0]="L",t[2]=this.pos[1];break;case"V":t[0]="L",t[2]=t[1],t[1]=this.pos[0];break;case"T":t[0]="Q",t[3]=t[1],t[4]=t[2],t[1]=this.reflection[1],t[2]=this.reflection[0];break;case"S":t[0]="C",t[6]=t[4],t[5]=t[3],t[4]=t[2],t[3]=t[1],t[2]=this.reflection[1],t[1]=this.reflection[0]}return t}function i(t){var e=t.length;return this.pos=[t[e-2],t[e-1]],-1!="SCQT".indexOf(t[0])&&(this.reflection=[2*this.pos[0]-t[e-4],2*this.pos[1]-t[e-3]]),t}function s(t){var e=[t];switch(t[0]){case"M":return this.pos=this.start=[t[1],t[2]],e;case"L":t[5]=t[3]=t[1],t[6]=t[4]=t[2],t[1]=this.pos[0],t[2]=this.pos[1];break;case"Q":t[6]=t[4],t[5]=t[3],t[4]=1*t[4]/3+2*t[2]/3,t[3]=1*t[3]/3+2*t[1]/3,t[2]=1*this.pos[1]/3+2*t[2]/3,t[1]=1*this.pos[0]/3+2*t[1]/3;break;case"A":t=(e=function(t,e){var i,s,a,r,n,o,l,h,c,d,u,g,f,p,x,m,b,v,y,w,k,A,S,C,L,P,z=Math.abs(e[1]),T=Math.abs(e[2]),M=e[3]%360,E=e[4],X=e[5],I=e[6],Y=e[7],F=new SVG.Point(t),R=new SVG.Point(I,Y),D=[];if(0===z||0===T||F.x===R.x&&F.y===R.y)return[["C",F.x,F.y,R.x,R.y,R.x,R.y]];i=new SVG.Point((F.x-R.x)/2,(F.y-R.y)/2).transform((new SVG.Matrix).rotate(M)),(s=i.x*i.x/(z*z)+i.y*i.y/(T*T))>1&&(s=Math.sqrt(s),z*=s,T*=s);a=(new SVG.Matrix).rotate(M).scale(1/z,1/T).rotate(-M),F=F.transform(a),R=R.transform(a),r=[R.x-F.x,R.y-F.y],o=r[0]*r[0]+r[1]*r[1],n=Math.sqrt(o),r[0]/=n,r[1]/=n,l=o<4?Math.sqrt(1-o/4):0,E===X&&(l*=-1);h=new SVG.Point((R.x+F.x)/2+l*-r[1],(R.y+F.y)/2+l*r[0]),c=new SVG.Point(F.x-h.x,F.y-h.y),d=new SVG.Point(R.x-h.x,R.y-h.y),u=Math.acos(c.x/Math.sqrt(c.x*c.x+c.y*c.y)),c.y<0&&(u*=-1);g=Math.acos(d.x/Math.sqrt(d.x*d.x+d.y*d.y)),d.y<0&&(g*=-1);X&&u>g&&(g+=2*Math.PI);!X&&u<g&&(g-=2*Math.PI);for(p=Math.ceil(2*Math.abs(u-g)/Math.PI),m=[],b=u,f=(g-u)/p,x=4*Math.tan(f/4)/3,k=0;k<=p;k++)y=Math.cos(b),v=Math.sin(b),w=new SVG.Point(h.x+y,h.y+v),m[k]=[new SVG.Point(w.x+x*v,w.y-x*y),w,new SVG.Point(w.x-x*v,w.y+x*y)],b+=f;for(m[0][0]=m[0][1].clone(),m[m.length-1][2]=m[m.length-1][1].clone(),a=(new SVG.Matrix).rotate(M).scale(z,T).rotate(-M),k=0,A=m.length;k<A;k++)m[k][0]=m[k][0].transform(a),m[k][1]=m[k][1].transform(a),m[k][2]=m[k][2].transform(a);for(k=1,A=m.length;k<A;k++)w=m[k-1][2],S=w.x,C=w.y,w=m[k][0],L=w.x,P=w.y,w=m[k][1],I=w.x,Y=w.y,D.push(["C",S,C,L,P,I,Y]);return D}(this.pos,t))[0]}return t[0]="C",this.pos=[t[5],t[6]],this.reflection=[2*t[5]-t[3],2*t[6]-t[4]],e}function a(t,e){if(!1===e)return!1;for(var i=e,s=t.length;i<s;++i)if("M"==t[i][0])return i;return!1}SVG.extend(SVG.PathArray,{morph:function(e){for(var i=this.value,s=this.parse(e),r=0,n=0,o=!1,l=!1;!1!==r||!1!==n;){var h;o=a(i,!1!==r&&r+1),l=a(s,!1!==n&&n+1),!1===r&&(r=0==(h=new SVG.PathArray(c.start).bbox()).height||0==h.width?i.push(i[0])-1:i.push(["M",h.x+h.width/2,h.y+h.height/2])-1),!1===n&&(n=0==(h=new SVG.PathArray(c.dest).bbox()).height||0==h.width?s.push(s[0])-1:s.push(["M",h.x+h.width/2,h.y+h.height/2])-1);var c=t(i,r,o,s,n,l);i=i.slice(0,r).concat(c.start,!1===o?[]:i.slice(o)),s=s.slice(0,n).concat(c.dest,!1===l?[]:s.slice(l)),r=!1!==o&&r+c.start.length,n=!1!==l&&n+c.dest.length}return this.value=i,this.destination=new SVG.PathArray,this.destination.value=s,this}})}(),function(){function t(t){t.remember("_draggable",this),this.el=t}t.prototype.init=function(t,e){var i=this;this.constraint=t,this.value=e,this.el.on("mousedown.drag",function(t){i.start(t)}),this.el.on("touchstart.drag",function(t){i.start(t)})},t.prototype.transformPoint=function(t,e){var i=(t=t||window.event).changedTouches&&t.changedTouches[0]||t;return this.p.x=i.clientX-(e||0),this.p.y=i.clientY,this.p.matrixTransform(this.m)},t.prototype.getBBox=function(){var t=this.el.bbox();return this.el instanceof SVG.Nested&&(t=this.el.rbox()),(this.el instanceof SVG.G||this.el instanceof SVG.Use||this.el instanceof SVG.Nested)&&(t.x=this.el.x(),t.y=this.el.y()),t},t.prototype.start=function(t){if("click"!=t.type&&"mousedown"!=t.type&&"mousemove"!=t.type||1==(t.which||t.buttons)){var e=this;if(this.el.fire("beforedrag",{event:t,handler:this}),!this.el.event().defaultPrevented){t.preventDefault(),t.stopPropagation(),this.parent=this.parent||this.el.parent(SVG.Nested)||this.el.parent(SVG.Doc),this.p=this.parent.node.createSVGPoint(),this.m=this.el.node.getScreenCTM().inverse();var i,s=this.getBBox();if(this.el instanceof SVG.Text)switch(i=this.el.node.getComputedTextLength(),this.el.attr("text-anchor")){case"middle":i/=2;break;case"start":i=0}this.startPoints={point:this.transformPoint(t,i),box:s,transform:this.el.transform()},SVG.on(window,"mousemove.drag",function(t){e.drag(t)}),SVG.on(window,"touchmove.drag",function(t){e.drag(t)}),SVG.on(window,"mouseup.drag",function(t){e.end(t)}),SVG.on(window,"touchend.drag",function(t){e.end(t)}),this.el.fire("dragstart",{event:t,p:this.startPoints.point,m:this.m,handler:this})}}},t.prototype.drag=function(t){var e=this.getBBox(),i=this.transformPoint(t),s=this.startPoints.box.x+i.x-this.startPoints.point.x,a=this.startPoints.box.y+i.y-this.startPoints.point.y,r=this.constraint,n=i.x-this.startPoints.point.x,o=i.y-this.startPoints.point.y;if(this.el.fire("dragmove",{event:t,p:i,m:this.m,handler:this}),this.el.event().defaultPrevented)return i;if("function"==typeof r){var l=r.call(this.el,s,a,this.m);"boolean"==typeof l&&(l={x:l,y:l}),!0===l.x?this.el.x(s):!1!==l.x&&this.el.x(l.x),!0===l.y?this.el.y(a):!1!==l.y&&this.el.y(l.y)}else"object"==typeof r&&(null!=r.minX&&s<r.minX?n=(s=r.minX)-this.startPoints.box.x:null!=r.maxX&&s>r.maxX-e.width&&(n=(s=r.maxX-e.width)-this.startPoints.box.x),null!=r.minY&&a<r.minY?o=(a=r.minY)-this.startPoints.box.y:null!=r.maxY&&a>r.maxY-e.height&&(o=(a=r.maxY-e.height)-this.startPoints.box.y),null!=r.snapToGrid&&(s-=s%r.snapToGrid,a-=a%r.snapToGrid,n-=n%r.snapToGrid,o-=o%r.snapToGrid),this.el instanceof SVG.G?this.el.matrix(this.startPoints.transform).transform({x:n,y:o},!0):this.el.move(s,a));return i},t.prototype.end=function(t){var e=this.drag(t);this.el.fire("dragend",{event:t,p:e,m:this.m,handler:this}),SVG.off(window,"mousemove.drag"),SVG.off(window,"touchmove.drag"),SVG.off(window,"mouseup.drag"),SVG.off(window,"touchend.drag")},SVG.extend(SVG.Element,{draggable:function(e,i){"function"!=typeof e&&"object"!=typeof e||(i=e,e=!0);var s=this.remember("_draggable")||new t(this);return(e=void 0===e||e)?s.init(i||{},e):(this.off("mousedown.drag"),this.off("touchstart.drag")),this}})}.call(void 0),function(){function t(t){this.el=t,t.remember("_selectHandler",this),this.pointSelection={isSelected:!1},this.rectSelection={isSelected:!1}}t.prototype.init=function(t,e){var i=this.el.bbox();for(var s in this.options={},this.el.selectize.defaults)this.options[s]=this.el.selectize.defaults[s],void 0!==e[s]&&(this.options[s]=e[s]);this.parent=this.el.parent(),this.nested=this.nested||this.parent.group(),this.nested.matrix(new SVG.Matrix(this.el).translate(i.x,i.y)),this.options.deepSelect&&-1!==["line","polyline","polygon"].indexOf(this.el.type)?this.selectPoints(t):this.selectRect(t),this.observe(),this.cleanup()},t.prototype.selectPoints=function(t){return this.pointSelection.isSelected=t,this.pointSelection.set?this:(this.pointSelection.set=this.parent.set(),this.drawCircles(),this)},t.prototype.getPointArray=function(){var t=this.el.bbox();return this.el.array().valueOf().map(function(e){return[e[0]-t.x,e[1]-t.y]})},t.prototype.drawCircles=function(){for(var t=this,e=this.getPointArray(),i=0,s=e.length;i<s;++i){var a=function(e){return function(i){(i=i||window.event).preventDefault?i.preventDefault():i.returnValue=!1,i.stopPropagation();var s=i.pageX||i.touches[0].pageX,a=i.pageY||i.touches[0].pageY;t.el.fire("point",{x:s,y:a,i:e,event:i})}}(i);this.pointSelection.set.add(this.nested.circle(this.options.radius).center(e[i][0],e[i][1]).addClass(this.options.classPoints).addClass(this.options.classPoints+"_point").on("touchstart",a).on("mousedown",a))}},t.prototype.updatePointSelection=function(){var t=this.getPointArray();this.pointSelection.set.each(function(e){this.cx()===t[e][0]&&this.cy()===t[e][1]||this.center(t[e][0],t[e][1])})},t.prototype.updateRectSelection=function(){var t=this.el.bbox();this.rectSelection.set.get(0).attr({width:t.width,height:t.height}),this.options.points&&(this.rectSelection.set.get(2).center(t.width,0),this.rectSelection.set.get(3).center(t.width,t.height),this.rectSelection.set.get(4).center(0,t.height),this.rectSelection.set.get(5).center(t.width/2,0),this.rectSelection.set.get(6).center(t.width,t.height/2),this.rectSelection.set.get(7).center(t.width/2,t.height),this.rectSelection.set.get(8).center(0,t.height/2)),this.options.rotationPoint&&(this.options.points?this.rectSelection.set.get(9).center(t.width/2,20):this.rectSelection.set.get(1).center(t.width/2,20))},t.prototype.selectRect=function(t){var e=this,i=this.el.bbox();function s(t){return function(i){(i=i||window.event).preventDefault?i.preventDefault():i.returnValue=!1,i.stopPropagation();var s=i.pageX||i.touches[0].pageX,a=i.pageY||i.touches[0].pageY;e.el.fire(t,{x:s,y:a,event:i})}}if(this.rectSelection.isSelected=t,this.rectSelection.set=this.rectSelection.set||this.parent.set(),this.rectSelection.set.get(0)||this.rectSelection.set.add(this.nested.rect(i.width,i.height).addClass(this.options.classRect)),this.options.points&&!this.rectSelection.set.get(1)){var a="touchstart",r="mousedown";this.rectSelection.set.add(this.nested.circle(this.options.radius).center(0,0).attr("class",this.options.classPoints+"_lt").on(r,s("lt")).on(a,s("lt"))),this.rectSelection.set.add(this.nested.circle(this.options.radius).center(i.width,0).attr("class",this.options.classPoints+"_rt").on(r,s("rt")).on(a,s("rt"))),this.rectSelection.set.add(this.nested.circle(this.options.radius).center(i.width,i.height).attr("class",this.options.classPoints+"_rb").on(r,s("rb")).on(a,s("rb"))),this.rectSelection.set.add(this.nested.circle(this.options.radius).center(0,i.height).attr("class",this.options.classPoints+"_lb").on(r,s("lb")).on(a,s("lb"))),this.rectSelection.set.add(this.nested.circle(this.options.radius).center(i.width/2,0).attr("class",this.options.classPoints+"_t").on(r,s("t")).on(a,s("t"))),this.rectSelection.set.add(this.nested.circle(this.options.radius).center(i.width,i.height/2).attr("class",this.options.classPoints+"_r").on(r,s("r")).on(a,s("r"))),this.rectSelection.set.add(this.nested.circle(this.options.radius).center(i.width/2,i.height).attr("class",this.options.classPoints+"_b").on(r,s("b")).on(a,s("b"))),this.rectSelection.set.add(this.nested.circle(this.options.radius).center(0,i.height/2).attr("class",this.options.classPoints+"_l").on(r,s("l")).on(a,s("l"))),this.rectSelection.set.each(function(){this.addClass(e.options.classPoints)})}if(this.options.rotationPoint&&(this.options.points&&!this.rectSelection.set.get(9)||!this.options.points&&!this.rectSelection.set.get(1))){var n=function(t){(t=t||window.event).preventDefault?t.preventDefault():t.returnValue=!1,t.stopPropagation();var i=t.pageX||t.touches[0].pageX,s=t.pageY||t.touches[0].pageY;e.el.fire("rot",{x:i,y:s,event:t})};this.rectSelection.set.add(this.nested.circle(this.options.radius).center(i.width/2,20).attr("class",this.options.classPoints+"_rot").on("touchstart",n).on("mousedown",n))}},t.prototype.handler=function(){var t=this.el.bbox();this.nested.matrix(new SVG.Matrix(this.el).translate(t.x,t.y)),this.rectSelection.isSelected&&this.updateRectSelection(),this.pointSelection.isSelected&&this.updatePointSelection()},t.prototype.observe=function(){var t=this;if(MutationObserver)if(this.rectSelection.isSelected||this.pointSelection.isSelected)this.observerInst=this.observerInst||new MutationObserver(function(){t.handler()}),this.observerInst.observe(this.el.node,{attributes:!0});else try{this.observerInst.disconnect(),delete this.observerInst}catch(t){}else this.el.off("DOMAttrModified.select"),(this.rectSelection.isSelected||this.pointSelection.isSelected)&&this.el.on("DOMAttrModified.select",function(){t.handler()})},t.prototype.cleanup=function(){!this.rectSelection.isSelected&&this.rectSelection.set&&(this.rectSelection.set.each(function(){this.remove()}),this.rectSelection.set.clear(),delete this.rectSelection.set),!this.pointSelection.isSelected&&this.pointSelection.set&&(this.pointSelection.set.each(function(){this.remove()}),this.pointSelection.set.clear(),delete this.pointSelection.set),this.pointSelection.isSelected||this.rectSelection.isSelected||(this.nested.remove(),delete this.nested)},SVG.extend(SVG.Element,{selectize:function(e,i){return"object"==typeof e&&(i=e,e=!0),(this.remember("_selectHandler")||new t(this)).init(void 0===e||e,i||{}),this}}),SVG.Element.prototype.selectize.defaults={points:!0,classRect:"svg_select_boundingRect",classPoints:"svg_select_points",radius:7,rotationPoint:!0,deepSelect:!1}}(),function(){(function(){function t(t){t.remember("_resizeHandler",this),this.el=t,this.parameters={},this.lastUpdateCall=null,this.p=t.doc().node.createSVGPoint()}t.prototype.transformPoint=function(t,e,i){return this.p.x=t-(this.offset.x-window.pageXOffset),this.p.y=e-(this.offset.y-window.pageYOffset),this.p.matrixTransform(i||this.m)},t.prototype._extractPosition=function(t){return{x:null!=t.clientX?t.clientX:t.touches[0].clientX,y:null!=t.clientY?t.clientY:t.touches[0].clientY}},t.prototype.init=function(t){var e=this;if(this.stop(),"stop"!==t){for(var i in this.options={},this.el.resize.defaults)this.options[i]=this.el.resize.defaults[i],void 0!==t[i]&&(this.options[i]=t[i]);this.el.on("lt.resize",function(t){e.resize(t||window.event)}),this.el.on("rt.resize",function(t){e.resize(t||window.event)}),this.el.on("rb.resize",function(t){e.resize(t||window.event)}),this.el.on("lb.resize",function(t){e.resize(t||window.event)}),this.el.on("t.resize",function(t){e.resize(t||window.event)}),this.el.on("r.resize",function(t){e.resize(t||window.event)}),this.el.on("b.resize",function(t){e.resize(t||window.event)}),this.el.on("l.resize",function(t){e.resize(t||window.event)}),this.el.on("rot.resize",function(t){e.resize(t||window.event)}),this.el.on("point.resize",function(t){e.resize(t||window.event)}),this.update()}},t.prototype.stop=function(){return this.el.off("lt.resize"),this.el.off("rt.resize"),this.el.off("rb.resize"),this.el.off("lb.resize"),this.el.off("t.resize"),this.el.off("r.resize"),this.el.off("b.resize"),this.el.off("l.resize"),this.el.off("rot.resize"),this.el.off("point.resize"),this},t.prototype.resize=function(t){var e=this;this.m=this.el.node.getScreenCTM().inverse(),this.offset={x:window.pageXOffset,y:window.pageYOffset};var i=this._extractPosition(t.detail.event);if(this.parameters={type:this.el.type,p:this.transformPoint(i.x,i.y),x:t.detail.x,y:t.detail.y,box:this.el.bbox(),rotation:this.el.transform().rotation},"text"===this.el.type&&(this.parameters.fontSize=this.el.attr()["font-size"]),void 0!==t.detail.i){var s=this.el.array().valueOf();this.parameters.i=t.detail.i,this.parameters.pointCoords=[s[t.detail.i][0],s[t.detail.i][1]]}switch(t.type){case"lt":this.calc=function(t,e){var i=this.snapToGrid(t,e);if(this.parameters.box.width-i[0]>0&&this.parameters.box.height-i[1]>0){if("text"===this.parameters.type)return this.el.move(this.parameters.box.x+i[0],this.parameters.box.y),void this.el.attr("font-size",this.parameters.fontSize-i[0]);i=this.checkAspectRatio(i),this.el.move(this.parameters.box.x+i[0],this.parameters.box.y+i[1]).size(this.parameters.box.width-i[0],this.parameters.box.height-i[1])}};break;case"rt":this.calc=function(t,e){var i=this.snapToGrid(t,e,2);if(this.parameters.box.width+i[0]>0&&this.parameters.box.height-i[1]>0){if("text"===this.parameters.type)return this.el.move(this.parameters.box.x-i[0],this.parameters.box.y),void this.el.attr("font-size",this.parameters.fontSize+i[0]);i=this.checkAspectRatio(i,!0),this.el.move(this.parameters.box.x,this.parameters.box.y+i[1]).size(this.parameters.box.width+i[0],this.parameters.box.height-i[1])}};break;case"rb":this.calc=function(t,e){var i=this.snapToGrid(t,e,0);if(this.parameters.box.width+i[0]>0&&this.parameters.box.height+i[1]>0){if("text"===this.parameters.type)return this.el.move(this.parameters.box.x-i[0],this.parameters.box.y),void this.el.attr("font-size",this.parameters.fontSize+i[0]);i=this.checkAspectRatio(i),this.el.move(this.parameters.box.x,this.parameters.box.y).size(this.parameters.box.width+i[0],this.parameters.box.height+i[1])}};break;case"lb":this.calc=function(t,e){var i=this.snapToGrid(t,e,1);if(this.parameters.box.width-i[0]>0&&this.parameters.box.height+i[1]>0){if("text"===this.parameters.type)return this.el.move(this.parameters.box.x+i[0],this.parameters.box.y),void this.el.attr("font-size",this.parameters.fontSize-i[0]);i=this.checkAspectRatio(i,!0),this.el.move(this.parameters.box.x+i[0],this.parameters.box.y).size(this.parameters.box.width-i[0],this.parameters.box.height+i[1])}};break;case"t":this.calc=function(t,e){var i=this.snapToGrid(t,e,2);if(this.parameters.box.height-i[1]>0){if("text"===this.parameters.type)return;this.el.move(this.parameters.box.x,this.parameters.box.y+i[1]).height(this.parameters.box.height-i[1])}};break;case"r":this.calc=function(t,e){var i=this.snapToGrid(t,e,0);if(this.parameters.box.width+i[0]>0){if("text"===this.parameters.type)return;this.el.move(this.parameters.box.x,this.parameters.box.y).width(this.parameters.box.width+i[0])}};break;case"b":this.calc=function(t,e){var i=this.snapToGrid(t,e,0);if(this.parameters.box.height+i[1]>0){if("text"===this.parameters.type)return;this.el.move(this.parameters.box.x,this.parameters.box.y).height(this.parameters.box.height+i[1])}};break;case"l":this.calc=function(t,e){var i=this.snapToGrid(t,e,1);if(this.parameters.box.width-i[0]>0){if("text"===this.parameters.type)return;this.el.move(this.parameters.box.x+i[0],this.parameters.box.y).width(this.parameters.box.width-i[0])}};break;case"rot":this.calc=function(t,e){var i=t+this.parameters.p.x,s=e+this.parameters.p.y,a=Math.atan2(this.parameters.p.y-this.parameters.box.y-this.parameters.box.height/2,this.parameters.p.x-this.parameters.box.x-this.parameters.box.width/2),r=Math.atan2(s-this.parameters.box.y-this.parameters.box.height/2,i-this.parameters.box.x-this.parameters.box.width/2),n=this.parameters.rotation+180*(r-a)/Math.PI+this.options.snapToAngle/2;this.el.center(this.parameters.box.cx,this.parameters.box.cy).rotate(n-n%this.options.snapToAngle,this.parameters.box.cx,this.parameters.box.cy)};break;case"point":this.calc=function(t,e){var i=this.snapToGrid(t,e,this.parameters.pointCoords[0],this.parameters.pointCoords[1]),s=this.el.array().valueOf();s[this.parameters.i][0]=this.parameters.pointCoords[0]+i[0],s[this.parameters.i][1]=this.parameters.pointCoords[1]+i[1],this.el.plot(s)}}this.el.fire("resizestart",{dx:this.parameters.x,dy:this.parameters.y,event:t}),SVG.on(window,"touchmove.resize",function(t){e.update(t||window.event)}),SVG.on(window,"touchend.resize",function(){e.done()}),SVG.on(window,"mousemove.resize",function(t){e.update(t||window.event)}),SVG.on(window,"mouseup.resize",function(){e.done()})},t.prototype.update=function(t){if(t){var e=this._extractPosition(t),i=this.transformPoint(e.x,e.y),s=i.x-this.parameters.p.x,a=i.y-this.parameters.p.y;this.lastUpdateCall=[s,a],this.calc(s,a),this.el.fire("resizing",{dx:s,dy:a,event:t})}else this.lastUpdateCall&&this.calc(this.lastUpdateCall[0],this.lastUpdateCall[1])},t.prototype.done=function(){this.lastUpdateCall=null,SVG.off(window,"mousemove.resize"),SVG.off(window,"mouseup.resize"),SVG.off(window,"touchmove.resize"),SVG.off(window,"touchend.resize"),this.el.fire("resizedone")},t.prototype.snapToGrid=function(t,e,i,s){var a;return void 0!==s?a=[(i+t)%this.options.snapToGrid,(s+e)%this.options.snapToGrid]:(i=null==i?3:i,a=[(this.parameters.box.x+t+(1&i?0:this.parameters.box.width))%this.options.snapToGrid,(this.parameters.box.y+e+(2&i?0:this.parameters.box.height))%this.options.snapToGrid]),t<0&&(a[0]-=this.options.snapToGrid),e<0&&(a[1]-=this.options.snapToGrid),t-=Math.abs(a[0])<this.options.snapToGrid/2?a[0]:a[0]-(t<0?-this.options.snapToGrid:this.options.snapToGrid),e-=Math.abs(a[1])<this.options.snapToGrid/2?a[1]:a[1]-(e<0?-this.options.snapToGrid:this.options.snapToGrid),this.constraintToBox(t,e,i,s)},t.prototype.constraintToBox=function(t,e,i,s){var a,r,n=this.options.constraint||{};return void 0!==s?(a=i,r=s):(a=this.parameters.box.x+(1&i?0:this.parameters.box.width),r=this.parameters.box.y+(2&i?0:this.parameters.box.height)),void 0!==n.minX&&a+t<n.minX&&(t=n.minX-a),void 0!==n.maxX&&a+t>n.maxX&&(t=n.maxX-a),void 0!==n.minY&&r+e<n.minY&&(e=n.minY-r),void 0!==n.maxY&&r+e>n.maxY&&(e=n.maxY-r),[t,e]},t.prototype.checkAspectRatio=function(t,e){if(!this.options.saveAspectRatio)return t;var i=t.slice(),s=this.parameters.box.width/this.parameters.box.height,a=this.parameters.box.width+t[0],r=this.parameters.box.height-t[1],n=a/r;return n<s?(i[1]=a/s-this.parameters.box.height,e&&(i[1]=-i[1])):n>s&&(i[0]=this.parameters.box.width-r*s,e&&(i[0]=-i[0])),i},SVG.extend(SVG.Element,{resize:function(e){return(this.remember("_resizeHandler")||new t(this)).init(e||{}),this}}),SVG.Element.prototype.resize.defaults={snapToAngle:.1,snapToGrid:1,constraint:{},saveAspectRatio:!1}}).call(this)}();var css='.apexcharts-canvas {\n  position: relative;\n  user-select: none;\n  /* cannot give overflow: hidden as it will crop tooltips which overflow outside chart area */\n}\n\n/* scrollbar is not visible by default for legend, hence forcing the visibility */\n.apexcharts-canvas ::-webkit-scrollbar {\n  -webkit-appearance: none;\n  width: 6px;\n}\n.apexcharts-canvas ::-webkit-scrollbar-thumb {\n  border-radius: 4px;\n  background-color: rgba(0,0,0,.5);\n  box-shadow: 0 0 1px rgba(255,255,255,.5);\n  -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5);\n}\n.apexcharts-canvas.dark {\n  background: #343F57;\n}\n\n.apexcharts-inner {\n  position: relative;\n}\n\n.legend-mouseover-inactive {\n  transition: 0.15s ease all;\n  opacity: 0.20;\n}\n\n.apexcharts-series-collapsed {\n  opacity: 0;\n}\n\n.apexcharts-gridline, .apexcharts-text {\n  pointer-events: none;\n}\n\n.apexcharts-tooltip {\n  border-radius: 5px;\n  box-shadow: 2px 2px 6px -4px #999;\n  cursor: default;\n  font-size: 14px;\n  left: 62px;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  top: 20px;\n  overflow: hidden;\n  white-space: nowrap;\n  z-index: 12;\n  transition: 0.15s ease all;\n}\n.apexcharts-tooltip.light {\n  border: 1px solid #e3e3e3;\n  background: rgba(255, 255, 255, 0.96);\n}\n.apexcharts-tooltip.dark {\n  color: #fff;\n  background: rgba(30,30,30, 0.8);\n}\n.apexcharts-tooltip * {\n  font-family: inherit;\n}\n\n.apexcharts-tooltip .apexcharts-marker,\n.apexcharts-area-series .apexcharts-area,\n.apexcharts-line {\n  pointer-events: none;\n}\n\n.apexcharts-tooltip.active {\n  opacity: 1;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-tooltip-title {\n  padding: 6px;\n  font-size: 15px;\n  margin-bottom: 4px;\n}\n.apexcharts-tooltip.light .apexcharts-tooltip-title {\n  background: #ECEFF1;\n  border-bottom: 1px solid #ddd;\n}\n.apexcharts-tooltip.dark .apexcharts-tooltip-title {\n  background: rgba(0, 0, 0, 0.7);\n  border-bottom: 1px solid #333;\n}\n\n.apexcharts-tooltip-text-value,\n.apexcharts-tooltip-text-z-value {\n  display: inline-block;\n  font-weight: 600;\n  margin-left: 5px;\n}\n\n.apexcharts-tooltip-text-z-label:empty,\n.apexcharts-tooltip-text-z-value:empty {\n  display: none;\n}\n\n.apexcharts-tooltip-text-value, \n.apexcharts-tooltip-text-z-value {\n  font-weight: 600;\n}\n\n.apexcharts-tooltip-marker {\n  width: 12px;\n  height: 12px;\n  position: relative;\n  top: 0px;\n  margin-right: 10px;\n  border-radius: 50%;\n}\n\n.apexcharts-tooltip-series-group {\n  padding: 0 10px;\n  display: none;\n  text-align: left;\n  justify-content: left;\n  align-items: center;\n}\n\n.apexcharts-tooltip-series-group.active .apexcharts-tooltip-marker {\n  opacity: 1;\n}\n.apexcharts-tooltip-series-group.active, .apexcharts-tooltip-series-group:last-child {\n  padding-bottom: 4px;\n}\n.apexcharts-tooltip-series-group-hidden {\n  opacity: 0;\n  height: 0;\n  line-height: 0;\n  padding: 0 !important;\n}\n.apexcharts-tooltip-y-group {\n  padding: 6px 0 5px;\n}\n.apexcharts-tooltip-candlestick {\n  padding: 4px 8px;\n}\n.apexcharts-tooltip-candlestick > div {\n  margin: 4px 0;\n}\n.apexcharts-tooltip-candlestick span.value {\n  font-weight: bold;\n}\n\n.apexcharts-tooltip-rangebar {\n  padding: 5px 8px;\n}\n\n.apexcharts-tooltip-rangebar .category {\n  font-weight: 600;\n  color: #777;\n}\n\n.apexcharts-tooltip-rangebar .series-name {\n  font-weight: bold;\n  display: block;\n  margin-bottom: 5px;\n}\n\n.apexcharts-xaxistooltip {\n  opacity: 0;\n  padding: 9px 10px;\n  pointer-events: none;\n  color: #373d3f;\n  font-size: 13px;\n  text-align: center;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n\tbackground: #ECEFF1;\n  border: 1px solid #90A4AE;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-xaxistooltip.dark {\n  background: rgba(0, 0, 0, 0.7);\n  border: 1px solid rgba(0, 0, 0, 0.5);\n  color: #fff;\n}\n\n.apexcharts-xaxistooltip:after, .apexcharts-xaxistooltip:before {\n\tleft: 50%;\n\tborder: solid transparent;\n\tcontent: " ";\n\theight: 0;\n\twidth: 0;\n\tposition: absolute;\n\tpointer-events: none;\n}\n\n.apexcharts-xaxistooltip:after {\n\tborder-color: rgba(236, 239, 241, 0);\n\tborder-width: 6px;\n\tmargin-left: -6px;\n}\n.apexcharts-xaxistooltip:before {\n\tborder-color: rgba(144, 164, 174, 0);\n\tborder-width: 7px;\n\tmargin-left: -7px;\n}\n\n.apexcharts-xaxistooltip-bottom:after, .apexcharts-xaxistooltip-bottom:before {\n  bottom: 100%;\n}\n\n.apexcharts-xaxistooltip-top:after, .apexcharts-xaxistooltip-top:before {\n  top: 100%;\n}\n\n.apexcharts-xaxistooltip-bottom:after {\n  border-bottom-color: #ECEFF1;\n}\n.apexcharts-xaxistooltip-bottom:before {\n  border-bottom-color: #90A4AE;\n}\n\n.apexcharts-xaxistooltip-bottom.dark:after {\n  border-bottom-color: rgba(0, 0, 0, 0.5);\n}\n.apexcharts-xaxistooltip-bottom.dark:before {\n  border-bottom-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-xaxistooltip-top:after {\n  border-top-color:#ECEFF1\n}\n.apexcharts-xaxistooltip-top:before {\n  border-top-color: #90A4AE;\n}\n.apexcharts-xaxistooltip-top.dark:after {\n  border-top-color:rgba(0, 0, 0, 0.5);\n}\n.apexcharts-xaxistooltip-top.dark:before {\n  border-top-color: rgba(0, 0, 0, 0.5);\n}\n\n\n.apexcharts-xaxistooltip.active {\n  opacity: 1;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-yaxistooltip {\n  opacity: 0;\n  padding: 4px 10px;\n  pointer-events: none;\n  color: #373d3f;\n  font-size: 13px;\n  text-align: center;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n\tbackground: #ECEFF1;\n  border: 1px solid #90A4AE;\n}\n\n.apexcharts-yaxistooltip.dark {\n  background: rgba(0, 0, 0, 0.7);\n  border: 1px solid rgba(0, 0, 0, 0.5);\n  color: #fff;\n}\n\n.apexcharts-yaxistooltip:after, .apexcharts-yaxistooltip:before {\n\ttop: 50%;\n\tborder: solid transparent;\n\tcontent: " ";\n\theight: 0;\n\twidth: 0;\n\tposition: absolute;\n\tpointer-events: none;\n}\n.apexcharts-yaxistooltip:after {\n\tborder-color: rgba(236, 239, 241, 0);\n\tborder-width: 6px;\n\tmargin-top: -6px;\n}\n.apexcharts-yaxistooltip:before {\n\tborder-color: rgba(144, 164, 174, 0);\n\tborder-width: 7px;\n\tmargin-top: -7px;\n}\n\n.apexcharts-yaxistooltip-left:after, .apexcharts-yaxistooltip-left:before {\n  left: 100%;\n}\n\n.apexcharts-yaxistooltip-right:after, .apexcharts-yaxistooltip-right:before {\n  right: 100%;\n}\n\n.apexcharts-yaxistooltip-left:after {\n  border-left-color: #ECEFF1;\n}\n.apexcharts-yaxistooltip-left:before {\n  border-left-color: #90A4AE;\n}\n.apexcharts-yaxistooltip-left.dark:after {\n  border-left-color: rgba(0, 0, 0, 0.5);\n}\n.apexcharts-yaxistooltip-left.dark:before {\n  border-left-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-yaxistooltip-right:after {\n  border-right-color: #ECEFF1;\n}\n.apexcharts-yaxistooltip-right:before {\n  border-right-color: #90A4AE;\n}\n.apexcharts-yaxistooltip-right.dark:after {\n  border-right-color: rgba(0, 0, 0, 0.5);\n}\n.apexcharts-yaxistooltip-right.dark:before {\n  border-right-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-yaxistooltip.active {\n  opacity: 1;\n}\n.apexcharts-yaxistooltip-hidden {\n  display: none;\n}\n\n.apexcharts-xcrosshairs, .apexcharts-ycrosshairs {\n  pointer-events: none;\n  opacity: 0;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-xcrosshairs.active, .apexcharts-ycrosshairs.active {\n  opacity: 1;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-ycrosshairs-hidden {\n  opacity: 0;\n}\n\n.apexcharts-zoom-rect {\n  pointer-events: none;\n}\n.apexcharts-selection-rect {\n  cursor: move;\n}\n\n.svg_select_points, .svg_select_points_rot {\n  opacity: 0;\n  visibility: hidden;\n}\n.svg_select_points_l, .svg_select_points_r {\n  cursor: ew-resize;\n  opacity: 1;\n  visibility: visible;\n  fill: #888;\n}\n.apexcharts-canvas.zoomable .hovering-zoom {\n  cursor: crosshair\n}\n.apexcharts-canvas.zoomable .hovering-pan {\n  cursor: move\n}\n\n.apexcharts-xaxis,\n.apexcharts-yaxis {\n  pointer-events: none;\n}\n\n.apexcharts-zoom-icon, \n.apexcharts-zoom-in-icon,\n.apexcharts-zoom-out-icon,\n.apexcharts-reset-zoom-icon, \n.apexcharts-pan-icon, \n.apexcharts-selection-icon,\n.apexcharts-menu-icon, \n.apexcharts-toolbar-custom-icon {\n  cursor: pointer;\n  width: 20px;\n  height: 20px;\n  line-height: 24px;\n  color: #6E8192;\n  text-align: center;\n}\n\n\n.apexcharts-zoom-icon svg, \n.apexcharts-zoom-in-icon svg,\n.apexcharts-zoom-out-icon svg,\n.apexcharts-reset-zoom-icon svg,\n.apexcharts-menu-icon svg {\n  fill: #6E8192;\n}\n.apexcharts-selection-icon svg {\n  fill: #444;\n  transform: scale(0.76)\n}\n\n.dark .apexcharts-zoom-icon svg, \n.dark .apexcharts-zoom-in-icon svg,\n.dark .apexcharts-zoom-out-icon svg,\n.dark .apexcharts-reset-zoom-icon svg, \n.dark .apexcharts-pan-icon svg, \n.dark .apexcharts-selection-icon svg,\n.dark .apexcharts-menu-icon svg, \n.dark .apexcharts-toolbar-custom-icon svg{\n  fill: #f3f4f5;\n}\n\n.apexcharts-canvas .apexcharts-zoom-icon.selected svg, \n.apexcharts-canvas .apexcharts-selection-icon.selected svg, \n.apexcharts-canvas .apexcharts-reset-zoom-icon.selected svg {\n  fill: #008FFB;\n}\n.light .apexcharts-selection-icon:not(.selected):hover svg,\n.light .apexcharts-zoom-icon:not(.selected):hover svg, \n.light .apexcharts-zoom-in-icon:hover svg, \n.light .apexcharts-zoom-out-icon:hover svg, \n.light .apexcharts-reset-zoom-icon:hover svg, \n.light .apexcharts-menu-icon:hover svg {\n  fill: #333;\n}\n\n.apexcharts-selection-icon, .apexcharts-menu-icon {\n  position: relative;\n}\n.apexcharts-reset-zoom-icon {\n  margin-left: 5px;\n}\n.apexcharts-zoom-icon, .apexcharts-reset-zoom-icon, .apexcharts-menu-icon {\n  transform: scale(0.85);\n}\n\n.apexcharts-zoom-in-icon, .apexcharts-zoom-out-icon {\n  transform: scale(0.7)\n}\n\n.apexcharts-zoom-out-icon {\n  margin-right: 3px;\n}\n\n.apexcharts-pan-icon {\n  transform: scale(0.62);\n  position: relative;\n  left: 1px;\n  top: 0px;\n}\n.apexcharts-pan-icon svg {\n  fill: #fff;\n  stroke: #6E8192;\n  stroke-width: 2;\n}\n.apexcharts-pan-icon.selected svg {\n  stroke: #008FFB;\n}\n.apexcharts-pan-icon:not(.selected):hover svg {\n  stroke: #333;\n}\n\n.apexcharts-toolbar {\n  position: absolute;\n  z-index: 11;\n  top: 0px;\n  right: 3px;\n  max-width: 176px;\n  text-align: right;\n  border-radius: 3px;\n  padding: 0px 6px 2px 6px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center; \n}\n\n.apexcharts-toolbar svg {\n  pointer-events: none;\n}\n\n.apexcharts-menu {\n  background: #fff;\n  position: absolute;\n  top: 100%;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  padding: 3px;\n  right: 10px;\n  opacity: 0;\n  min-width: 110px;\n  transition: 0.15s ease all;\n  pointer-events: none;\n}\n\n.apexcharts-menu.open {\n  opacity: 1;\n  pointer-events: all;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-menu-item {\n  padding: 6px 7px;\n  font-size: 12px;\n  cursor: pointer;\n}\n.light .apexcharts-menu-item:hover {\n  background: #eee;\n}\n.dark .apexcharts-menu {\n  background: rgba(0, 0, 0, 0.7);\n  color: #fff;\n}\n\n@media screen and (min-width: 768px) {\n  .apexcharts-toolbar {\n    /*opacity: 0;*/\n  }\n\n  .apexcharts-canvas:hover .apexcharts-toolbar {\n    opacity: 1;\n  } \n}\n\n.apexcharts-datalabel.hidden {\n  opacity: 0;\n}\n\n.apexcharts-pie-label,\n.apexcharts-datalabel, .apexcharts-datalabel-label, .apexcharts-datalabel-value {\n  cursor: default;\n  pointer-events: none;\n}\n\n.apexcharts-pie-label-delay {\n  opacity: 0;\n  animation-name: opaque;\n  animation-duration: 0.3s;\n  animation-fill-mode: forwards;\n  animation-timing-function: ease;\n}\n\n.apexcharts-canvas .hidden {\n  opacity: 0;\n}\n\n.apexcharts-hide .apexcharts-series-points {\n  opacity: 0;\n}\n\n.apexcharts-area-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,\n.apexcharts-line-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events, .apexcharts-radar-series path, .apexcharts-radar-series polygon {\n  pointer-events: none;\n}\n\n/* markers */\n\n.apexcharts-marker {\n  transition: 0.15s ease all;\n}\n\n@keyframes opaque {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}';styleInject(css),"document"in self&&("classList"in document.createElement("_")&&(!document.createElementNS||"classList"in document.createElementNS("http://www.w3.org/2000/svg","g"))||function(t){if("Element"in t){var e=t.Element.prototype,i=Object,s=String.prototype.trim||function(){return this.replace(/^\s+|\s+$/g,"")},a=Array.prototype.indexOf||function(t){for(var e=0,i=this.length;e<i;e++)if(e in this&&this[e]===t)return e;return-1},r=function(t,e){this.name=t,this.code=DOMException[t],this.message=e},n=function(t,e){if(""===e)throw new r("SYNTAX_ERR","The token must not be empty.");if(/\s/.test(e))throw new r("INVALID_CHARACTER_ERR","The token must not contain space characters.");return a.call(t,e)},o=function(t){for(var e=s.call(t.getAttribute("class")||""),i=e?e.split(/\s+/):[],a=0,r=i.length;a<r;a++)this.push(i[a]);this._updateClassName=function(){t.setAttribute("class",this.toString())}},l=o.prototype=[],h=function(){return new o(this)};if(r.prototype=Error.prototype,l.item=function(t){return this[t]||null},l.contains=function(t){return~n(this,t+"")},l.add=function(){var t,e=arguments,i=0,s=e.length,a=!1;do{t=e[i]+"",~n(this,t)||(this.push(t),a=!0)}while(++i<s);a&&this._updateClassName()},l.remove=function(){var t,e,i=arguments,s=0,a=i.length,r=!1;do{for(t=i[s]+"",e=n(this,t);~e;)this.splice(e,1),r=!0,e=n(this,t)}while(++s<a);r&&this._updateClassName()},l.toggle=function(t,e){var i=this.contains(t),s=i?!0!==e&&"remove":!1!==e&&"add";return s&&this[s](t),!0===e||!1===e?e:!i},l.replace=function(t,e){var i=n(t+"");~i&&(this.splice(i,1,e),this._updateClassName())},l.toString=function(){return this.join(" ")},i.defineProperty){var c={get:h,enumerable:!0,configurable:!0};try{i.defineProperty(e,"classList",c)}catch(t){void 0!==t.number&&-2146823252!==t.number||(c.enumerable=!1,i.defineProperty(e,"classList",c))}}else i.prototype.__defineGetter__&&e.__defineGetter__("classList",h)}}(self),function(){var t=document.createElement("_");if(t.classList.add("c1","c2"),!t.classList.contains("c2")){var e=function(t){var e=DOMTokenList.prototype[t];DOMTokenList.prototype[t]=function(t){var i,s=arguments.length;for(i=0;i<s;i++)t=arguments[i],e.call(this,t)}};e("add"),e("remove")}if(t.classList.toggle("c3",!1),t.classList.contains("c3")){var i=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(t,e){return 1 in arguments&&!this.contains(t)==!e?e:i.call(this,t)}}"replace"in document.createElement("_").classList||(DOMTokenList.prototype.replace=function(t,e){var i=this.toString().split(" "),s=i.indexOf(t+"");~s&&(i=i.slice(s),this.remove.apply(this,i),this.add(e),this.add.apply(this,i.slice(1)))}),t=null}()),function(){var t=!1;function e(t){var e=t.__resizeTriggers__,i=e.firstElementChild,s=e.lastElementChild,a=i.firstElementChild;s.scrollLeft=s.scrollWidth,s.scrollTop=s.scrollHeight,a.style.width=i.offsetWidth+1+"px",a.style.height=i.offsetHeight+1+"px",i.scrollLeft=i.scrollWidth,i.scrollTop=i.scrollHeight}function i(t){var i=this;e(this),this.__resizeRAF__&&n(this.__resizeRAF__),this.__resizeRAF__=r(function(){(function(t){return t.offsetWidth!=t.__resizeLast__.width||t.offsetHeight!=t.__resizeLast__.height})(i)&&(i.__resizeLast__.width=i.offsetWidth,i.__resizeLast__.height=i.offsetHeight,i.__resizeListeners__.forEach(function(e){e.call(t)}))})}var s,a,r=(s=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(t){return window.setTimeout(t,20)},function(t){return s(t)}),n=(a=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.clearTimeout,function(t){return a(t)}),o=!1,l="",h="animationstart",c="Webkit Moz O ms".split(" "),d="webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),u=document.createElement("fakeelement");if(void 0!==u.style.animationName&&(o=!0),!1===o)for(var g=0;g<c.length;g++)if(void 0!==u.style[c[g]+"AnimationName"]){l="-"+c[g].toLowerCase()+"-",h=d[g];break}var f="@"+l+"keyframes resizeanim { from { opacity: 0; } to { opacity: 0; } } ",p=l+"animation: 1ms resizeanim; ";window.addResizeListener=function(s,a){s.__resizeTriggers__||("static"==getComputedStyle(s).position&&(s.style.position="relative"),function(){if(!t){var e=(f||"")+".resize-triggers { "+(p||"")+'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e)),i.appendChild(s),t=!0}}(),s.__resizeLast__={},s.__resizeListeners__=[],(s.__resizeTriggers__=document.createElement("div")).className="resize-triggers",s.__resizeTriggers__.innerHTML='<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>',s.appendChild(s.__resizeTriggers__),e(s),s.addEventListener("scroll",i,!0),h&&s.__resizeTriggers__.addEventListener(h,function(t){"resizeanim"==t.animationName&&e(s)})),s.__resizeListeners__.push(a)},window.removeResizeListener=function(t,e){t&&(t.__resizeListeners__.splice(t.__resizeListeners__.indexOf(e),1),t.__resizeListeners__.length||(t.removeEventListener("scroll",i),t.__resizeTriggers__=!t.removeChild(t.__resizeTriggers__)))}}(),window.Apex={};var ApexCharts$1=function(){function t(e,i){_classCallCheck(this,t),this.opts=i,this.ctx=this,this.w=new Base(i).init(),this.el=e,this.w.globals.cuid=(Math.random()+1).toString(36).substring(4),this.w.globals.chartID=this.w.config.chart.id?this.w.config.chart.id:this.w.globals.cuid,this.eventList=["mousedown","mousemove","touchstart","touchmove","mouseup","touchend"],this.initModules(),this.create=Utils.bind(this.create,this),this.documentEvent=Utils.bind(this.documentEvent,this),this.windowResizeHandler=this.windowResize.bind(this)}return _createClass(t,[{key:"render",value:function(){var t=this;return new Promise$1(function(e,i){if(null!==t.el){void 0===Apex._chartInstances&&(Apex._chartInstances=[]),t.w.config.chart.id&&Apex._chartInstances.push({id:t.w.globals.chartID,group:t.w.config.chart.group,chart:t}),t.setLocale(t.w.config.chart.defaultLocale);var s=t.w.config.chart.events.beforeMount;"function"==typeof s&&s(t,t.w),t.fireEvent("beforeMount",[t,t.w]),window.addEventListener("resize",t.windowResizeHandler),window.addResizeListener(t.el.parentNode,t.parentResizeCallback.bind(t));var a=t.create(t.w.config.series,{});if(!a)return e(t);t.mount(a).then(function(){e(a),"function"==typeof t.w.config.chart.events.mounted&&t.w.config.chart.events.mounted(t,t.w),t.fireEvent("mounted",[t,t.w])}).catch(function(t){i(t)})}else i(new Error("Element not found"))})}},{key:"initModules",value:function(){this.animations=new Animations(this),this.core=new Core(this.el,this),this.grid=new Grid(this),this.coreUtils=new CoreUtils(this),this.config=new Config({}),this.crosshairs=new Crosshairs(this),this.options=new Options,this.responsive=new Responsive(this),this.series=new Series(this),this.theme=new Theme(this),this.formatters=new Formatters(this),this.titleSubtitle=new TitleSubtitle(this),this.legend=new Legend(this),this.toolbar=new Toolbar(this),this.dimensions=new Dimensions(this),this.zoomPanSelection=new ZoomPanSelection(this),this.w.globals.tooltip=new Tooltip(this)}},{key:"addEventListener",value:function(t,e){var i=this.w;i.globals.events.hasOwnProperty(t)?i.globals.events[t].push(e):i.globals.events[t]=[e]}},{key:"removeEventListener",value:function(t,e){var i=this.w;if(i.globals.events.hasOwnProperty(t)){var s=i.globals.events[t].indexOf(e);-1!==s&&i.globals.events[t].splice(s,1)}}},{key:"fireEvent",value:function(t,e){var i=this.w;if(i.globals.events.hasOwnProperty(t)){e&&e.length||(e=[]);for(var s=i.globals.events[t],a=s.length,r=0;r<a;r++)s[r].apply(null,e)}}},{key:"create",value:function(t,e){var i=this.w;this.initModules();var s=this.w.globals;if(s.noData=!1,s.animationEnded=!1,this.responsive.checkResponsiveConfig(e),null===this.el)return s.animationEnded=!0,null;if(this.core.setupElements(),0===s.svgWidth)return s.animationEnded=!0,null;var a=CoreUtils.checkComboSeries(t);s.comboCharts=a.comboCharts,s.comboChartsHasBars=a.comboChartsHasBars,(0===t.length||1===t.length&&t[0].data&&0===t[0].data.length)&&this.series.handleNoData(),this.setupEventHandlers(),this.core.parseData(t),this.theme.init(),new Markers(this).setGlobalMarkerSize(),this.formatters.setLabelFormatters(),this.titleSubtitle.draw(),i.globals.noData||this.legend.init(),this.series.hasAllSeriesEqualX(),s.axisCharts&&(this.core.coreCalculations(),"category"!==i.config.xaxis.type&&this.formatters.setLabelFormatters()),this.formatters.heatmapLabelFormatters(),this.dimensions.plotCoords();var r=this.core.xySettings();this.grid.createGridMask();var n=this.core.plotChartType(t,r);this.core.shiftGraphPosition();var o={plot:{left:i.globals.translateX,top:i.globals.translateY,width:i.globals.gridWidth,height:i.globals.gridHeight}};return{elGraph:n,xyRatios:r,elInner:i.globals.dom.elGraphical,dimensions:o}}},{key:"mount",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=this,i=e.w;return new Promise$1(function(s,a){if(null===e.el)return a(new Error("Not enough data to display or target element not found"));if((null===t||i.globals.allSeriesCollapsed)&&e.series.handleNoData(),e.annotations=new Annotations(e),e.core.drawAxis(i.config.chart.type,t.xyRatios),e.grid=new Grid(e),"back"===i.config.grid.position&&e.grid.drawGrid(),"back"===i.config.annotations.position&&e.annotations.drawAnnotations(),t.elGraph instanceof Array)for(var r=0;r<t.elGraph.length;r++)i.globals.dom.elGraphical.add(t.elGraph[r]);else i.globals.dom.elGraphical.add(t.elGraph);if("front"===i.config.grid.position&&e.grid.drawGrid(),"front"===i.config.xaxis.crosshairs.position&&e.crosshairs.drawXCrosshairs(),"front"===i.config.yaxis[0].crosshairs.position&&e.crosshairs.drawYCrosshairs(),"front"===i.config.annotations.position&&e.annotations.drawAnnotations(),!i.globals.noData){if(i.config.tooltip.enabled&&!i.globals.noData&&e.w.globals.tooltip.drawTooltip(t.xyRatios),i.globals.axisCharts&&i.globals.isXNumeric)(i.config.chart.zoom.enabled||i.config.chart.selection&&i.config.chart.selection.enabled||i.config.chart.pan&&i.config.chart.pan.enabled)&&e.zoomPanSelection.init({xyRatios:t.xyRatios});else{var n=i.config.chart.toolbar.tools;n.zoom=!1,n.zoomin=!1,n.zoomout=!1,n.selection=!1,n.pan=!1,n.reset=!1}i.config.chart.toolbar.show&&!i.globals.allSeriesCollapsed&&e.toolbar.createToolbar()}i.globals.memory.methodsToExec.length>0&&i.globals.memory.methodsToExec.forEach(function(t){t.method(t.params,!1,t.context)}),i.globals.axisCharts||i.globals.noData||e.core.resizeNonAxisCharts(),s(e)})}},{key:"clearPreviousPaths",value:function(){var t=this.w;t.globals.previousPaths=[],t.globals.allSeriesCollapsed=!1,t.globals.collapsedSeries=[],t.globals.collapsedSeriesIndices=[]}},{key:"updateOptions",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],s=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],r=this.w;return t.series&&(this.resetSeries(!1),t.series.length&&t.series[0].data&&(t.series=t.series.map(function(t,e){return _objectSpread({},r.config.series[e],{name:t.name?t.name:r.config.series[e]&&r.config.series[e].name,type:t.type?t.type:r.config.series[e]&&r.config.series[e].type,data:t.data?t.data:r.config.series[e]&&r.config.series[e].data})})),this.revertDefaultAxisMinMax()),t.xaxis&&((t.xaxis.min||t.xaxis.max)&&this.forceXAxisUpdate(t),t.xaxis.categories&&t.xaxis.categories.length&&r.config.xaxis.convertedCatToNumeric&&(t=Defaults.convertCatToNumeric(t))),r.globals.collapsedSeriesIndices.length>0&&this.clearPreviousPaths(),t.theme&&(t=this.theme.updateThemeOptions(t)),this._updateOptions(t,e,i,s,a)}},{key:"_updateOptions",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],s=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],r=[this];s&&(r=this.getSyncedCharts()),this.w.globals.isExecCalled&&(r=[this],this.w.globals.isExecCalled=!1),r.forEach(function(s){var r=s.w;return r.globals.shouldAnimate=i,e||(r.globals.resized=!0,r.globals.dataChanged=!0,i&&s.series.getPreviousPaths()),t&&"object"===_typeof(t)&&(s.config=new Config(t),t=CoreUtils.extendArrayProps(s.config,t),r.config=Utils.extend(r.config,t),a&&(r.globals.lastXAxis=[],r.globals.lastYAxis=[],r.globals.initialConfig=Utils.extend({},r.config),r.globals.initialSeries=JSON.parse(JSON.stringify(r.config.series)))),s.update(t)})}},{key:"updateSeries",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return this.resetSeries(!1),this.revertDefaultAxisMinMax(),this._updateSeries(t,e,i)}},{key:"appendSeries",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],s=this.w.config.series.slice();return s.push(t),this.resetSeries(!1),this.revertDefaultAxisMinMax(),this._updateSeries(s,e,i)}},{key:"_updateSeries",value:function(t,e){var i,s=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=this.w;return this.w.globals.shouldAnimate=e,a.globals.dataChanged=!0,a.globals.allSeriesCollapsed&&(a.globals.allSeriesCollapsed=!1),e&&this.series.getPreviousPaths(),a.globals.axisCharts?(0===(i=t.map(function(t,e){return _objectSpread({},a.config.series[e],{name:t.name?t.name:a.config.series[e]&&a.config.series[e].name,type:t.type?t.type:a.config.series[e]&&a.config.series[e].type,data:t.data?t.data:a.config.series[e]&&a.config.series[e].data})})).length&&(i=[{data:[]}]),a.config.series=i):a.config.series=t.slice(),s&&(a.globals.initialConfig.series=JSON.parse(JSON.stringify(a.config.series)),a.globals.initialSeries=JSON.parse(JSON.stringify(a.config.series))),this.update()}},{key:"getSyncedCharts",value:function(){var t=this.getGroupedCharts(),e=[this];return t.length&&(e=[],t.forEach(function(t){e.push(t)})),e}},{key:"getGroupedCharts",value:function(){var t=this;return Apex._chartInstances.filter(function(t){if(t.group)return!0}).map(function(e){return t.w.config.chart.group===e.group?e.chart:t})}},{key:"appendData",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=this;i.w.globals.dataChanged=!0,i.series.getPreviousPaths();for(var s=i.w.config.series.slice(),a=0;a<s.length;a++)if(void 0!==t[a])for(var r=0;r<t[a].data.length;r++)s[a].data.push(t[a].data[r]);return i.w.config.series=s,e&&(i.w.globals.initialSeries=JSON.parse(JSON.stringify(i.w.config.series))),this.update()}},{key:"update",value:function(t){var e=this;return new Promise$1(function(i,s){e.clear();var a=e.create(e.w.config.series,t);if(!a)return i(e);e.mount(a).then(function(){"function"==typeof e.w.config.chart.events.updated&&e.w.config.chart.events.updated(e,e.w),e.fireEvent("updated",[e,e.w]),e.w.globals.isDirty=!0,i(e)}).catch(function(t){s(t)})})}},{key:"forceXAxisUpdate",value:function(t){var e=this.w;void 0!==t.xaxis.min&&(e.config.xaxis.min=t.xaxis.min,e.globals.lastXAxis.min=t.xaxis.min),void 0!==t.xaxis.max&&(e.config.xaxis.max=t.xaxis.max,e.globals.lastXAxis.max=t.xaxis.max)}},{key:"revertDefaultAxisMinMax",value:function(){var t=this.w;t.config.xaxis.min=t.globals.lastXAxis.min,t.config.xaxis.max=t.globals.lastXAxis.max,t.config.yaxis.map(function(e,i){t.globals.zoomed&&void 0!==t.globals.lastYAxis[i]&&(e.min=t.globals.lastYAxis[i].min,e.max=t.globals.lastYAxis[i].max)})}},{key:"clear",value:function(){this.zoomPanSelection&&this.zoomPanSelection.destroy(),this.toolbar&&this.toolbar.destroy(),this.animations=null,this.annotations=null,this.core=null,this.grid=null,this.series=null,this.responsive=null,this.theme=null,this.formatters=null,this.titleSubtitle=null,this.legend=null,this.dimensions=null,this.options=null,this.crosshairs=null,this.zoomPanSelection=null,this.toolbar=null,this.w.globals.tooltip=null,this.clearDomElements()}},{key:"killSVG",value:function(t){return new Promise$1(function(e,i){t.each(function(t,e){this.removeClass("*"),this.off(),this.stop()},!0),t.ungroup(),t.clear(),e("done")})}},{key:"clearDomElements",value:function(){var t=this;this.eventList.forEach(function(e){document.removeEventListener(e,t.documentEvent)});var e=this.w.globals.dom;if(null!==this.el)for(;this.el.firstChild;)this.el.removeChild(this.el.firstChild);this.killSVG(e.Paper),e.Paper.remove(),e.elWrap=null,e.elGraphical=null,e.elLegendWrap=null,e.baseEl=null,e.elGridRect=null,e.elGridRectMask=null,e.elGridRectMarkerMask=null,e.elDefs=null}},{key:"destroy",value:function(){this.clear();var t=this.w.config.chart.id;t&&Apex._chartInstances.forEach(function(e,i){e.id===t&&Apex._chartInstances.splice(i,1)}),window.removeEventListener("resize",this.windowResizeHandler),window.removeResizeListener(this.el.parentNode,this.parentResizeCallback.bind(this))}},{key:"toggleSeries",value:function(t){var e=this.series.getSeriesByName(t),i=parseInt(e.getAttribute("data:realIndex")),s=e.classList.contains("apexcharts-series-collapsed");this.legend.toggleDataSeries(i,s)}},{key:"resetSeries",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.series.resetSeries(t)}},{key:"setupEventHandlers",value:function(){var t=this,e=this.w,i=this,s=e.globals.dom.baseEl.querySelector(e.globals.chartClass);this.eventListHandlers=[],this.eventList.forEach(function(t){s.addEventListener(t,function(t){"mousedown"===t.type&&1===t.which||("mouseup"===t.type&&1===t.which||"touchend"===t.type)&&("function"==typeof e.config.chart.events.click&&e.config.chart.events.click(t,i,e),i.fireEvent("click",[t,i,e]))},{capture:!1,passive:!0})}),this.eventList.forEach(function(e){document.addEventListener(e,t.documentEvent)}),this.core.setupBrushHandler()}},{key:"documentEvent",value:function(t){var e=this.w;e.globals.clientX="touchmove"===t.type?t.touches[0].clientX:t.clientX,e.globals.clientY="touchmove"===t.type?t.touches[0].clientY:t.clientY}},{key:"addXaxisAnnotation",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,s=this;i&&(s=i),s.annotations.addXaxisAnnotationExternal(t,e,s)}},{key:"addYaxisAnnotation",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,s=this;i&&(s=i),s.annotations.addYaxisAnnotationExternal(t,e,s)}},{key:"addPointAnnotation",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,s=this;i&&(s=i),s.annotations.addPointAnnotationExternal(t,e,s)}},{key:"clearAnnotations",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,e=this;t&&(e=t),e.annotations.clearAnnotations(e)}},{key:"addText",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,s=this;i&&(s=i),s.annotations.addText(t,e,s)}},{key:"getChartArea",value:function(){return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner")}},{key:"getSeriesTotalXRange",value:function(t,e){return this.coreUtils.getSeriesTotalsXRange(t,e)}},{key:"getHighestValueInSeries",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new Range$1(this.ctx).getMinYMaxY(t).highestY}},{key:"getLowestValueInSeries",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new Range$1(this.ctx).getMinYMaxY(t).lowestY}},{key:"getSeriesTotal",value:function(){return this.w.globals.seriesTotals}},{key:"setLocale",value:function(t){this.setCurrentLocaleValues(t)}},{key:"toggleDataPointSelection",value:function(t,e){var i=this.w,s=null;(s=i.globals.axisCharts?i.globals.dom.Paper.select(".apexcharts-series[data\\:realIndex='".concat(t,"'] path[j='").concat(e,"'], .apexcharts-series[data\\:realIndex='").concat(t,"'] circle[j='").concat(e,"'], .apexcharts-series[data\\:realIndex='").concat(t,"'] rect[j='").concat(e,"']")).members[0]:i.globals.dom.Paper.select(".apexcharts-series[data\\:realIndex='".concat(t,"']")).members[0])?new Graphics(this.ctx).pathMouseDown(s,null):console.warn("toggleDataPointSelection: Element not found");return s.node?s.node:null}},{key:"setCurrentLocaleValues",value:function(t){var e=this.w.config.chart.locales;window.Apex.chart&&window.Apex.chart.locales&&window.Apex.chart.locales.length>0&&(e=this.w.config.chart.locales.concat(window.Apex.chart.locales));var i=e.filter(function(e){return e.name===t})[0];if(!i)throw new Error("Wrong locale name provided. Please make sure you set the correct locale name in options");var s=Utils.extend(en,i);this.w.globals.locale=s.options}},{key:"dataURI",value:function(){return new Exports(this.ctx).dataURI()}},{key:"paper",value:function(){return this.w.globals.dom.Paper}},{key:"parentResizeCallback",value:function(){this.w.globals.animationEnded&&this.windowResize()}},{key:"windowResize",value:function(){var t=this;clearTimeout(this.w.globals.resizeTimer),this.w.globals.resizeTimer=window.setTimeout(function(){t.w.globals.resized=!0,t.w.globals.dataChanged=!1,t.update()},150)}}],[{key:"initOnLoad",value:function(){for(var e=document.querySelectorAll("[data-apexcharts]"),i=0;i<e.length;i++){new t(e[i],JSON.parse(e[i].getAttribute("data-options"))).render()}}},{key:"exec",value:function(t,e){var i=this.getChartByID(t);if(i){i.w.globals.isExecCalled=!0;for(var s=arguments.length,a=new Array(s>2?s-2:0),r=2;r<s;r++)a[r-2]=arguments[r];switch(e){case"updateOptions":return i.updateOptions.apply(i,a);case"updateSeries":return i.updateSeries.apply(i,a);case"appendData":return i.appendData.apply(i,a);case"appendSeries":return i.appendSeries.apply(i,a);case"toggleSeries":return i.toggleSeries.apply(i,a);case"resetSeries":return i.resetSeries.apply(i,a);case"toggleDataPointSelection":return i.toggleDataPointSelection.apply(i,a);case"dataURI":return i.dataURI.apply(i,a);case"addXaxisAnnotation":return i.addXaxisAnnotation.apply(i,a);case"addYaxisAnnotation":return i.addYaxisAnnotation.apply(i,a);case"addPointAnnotation":return i.addPointAnnotation.apply(i,a);case"addText":return i.addText.apply(i,a);case"clearAnnotations":return i.clearAnnotations.apply(i,a);case"paper":return i.paper.apply(i,a);case"destroy":return i.destroy()}}}},{key:"merge",value:function(t,e){return Utils.extend(t,e)}},{key:"getChartByID",value:function(t){return Apex._chartInstances.filter(function(e){return e.id===t})[0].chart}}]),t}();/* harmony default export */ __webpack_exports__["default"] = (ApexCharts$1);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2).setImmediate, __webpack_require__(11)(module)))

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(14)
/* script */
var __vue_script__ = __webpack_require__(15)
/* template */
var __vue_template__ = __webpack_require__(16)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/ListaProveedores.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3678cb80", Component.options)
  } else {
    hotAPI.reload("data-v-3678cb80", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 14 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            loading: false,
            data: [],
            sortField: 'fechaFuente',
            sortOrder: 'desc',
            defaultSortOrder: 'desc',
            filtered: '',
            searchKeyword: '',
            perPage: 5,
            modalForm: false,
            addProveedor: {
                id: '',
                nombre: '',
                representante: '',
                telefono: '',
                email: '',
                direccion: ''
            },
            loadingModal: false,
            errores: []
        };
    },

    methods: {
        nuevoClick: function nuevoClick() {
            this.modalForm = true;
            this.addProveedor.nombre = '';
            this.addProveedor.representante = '';
            this.addProveedor.telefono = '';
            this.addProveedor.email = '';
            this.addProveedor.direccion = '';
            this.addProveedor.id = '';
            this.errores = [];
        },
        editClick: function editClick(row) {
            this.errores = [];
            this.modalForm = true;
            this.addProveedor = Object.assign({}, row);
        },
        onSubmitControll: function onSubmitControll() {
            if (this.addProveedor.id == '') this.onSubmit();else this.onSubmitUpdate();
        },
        onSubmitUpdate: function onSubmitUpdate() {
            var _this = this;

            this.loadingModal = true;
            this.$http.put('http://local.store.nicosli.com/api/proveedores', this.addProveedor, { emulateJSON: true }).then(function (_ref) {
                var data = _ref.data;

                _this.loadingModal = false;
                if (data.error == false) {
                    _this.loadTabla();
                    _this.modalForm = false;
                    _this.searchKeyword = _this.addProveedor.nombre;
                    _this.$toast.open({
                        message: 'El Proveedor se insertó correctamente',
                        type: 'is-success'
                    });
                } else {
                    _this.errores = data.message;
                }
            }).catch(function (error) {
                _this.loading = false;
                throw error;
            });
        },
        onSubmit: function onSubmit() {
            var _this2 = this;

            this.loadingModal = true;
            this.$http.post('http://local.store.nicosli.com/api/proveedores', this.addProveedor, { emulateJSON: true }).then(function (_ref2) {
                var data = _ref2.data;

                _this2.loadingModal = false;
                if (data.error == false) {
                    _this2.loadTabla();
                    _this2.modalForm = false;
                    _this2.searchKeyword = _this2.addProveedor.nombre;
                    _this2.$toast.open({
                        message: 'El Proveedor se insertó correctamente',
                        type: 'is-success'
                    });
                } else {
                    _this2.errores = data.message;
                }
            }).catch(function (error) {
                _this2.loading = false;
                throw error;
            });
        },
        loadTabla: function loadTabla() {
            var _this3 = this;

            this.loading = true;
            this.$http.get('http://local.store.nicosli.com/api/proveedores').then(function (_ref3) {
                var data = _ref3.data;

                _this3.loading = false;
                _this3.data = [];
                data.results.forEach(function (item) {
                    _this3.data.push(item);
                });
            }).catch(function (error) {
                _this3.loading = false;
                throw error;
            });
        },
        closeModal: function closeModal() {}
    },
    computed: {
        filteredData: function filteredData() {
            var _this4 = this;

            return this.data.filter(function (item) {
                _this4.filtered = item.nombre.toLowerCase().includes(_this4.searchKeyword.toLowerCase());

                return _this4.filtered;
            });
        }
    },
    filters: {
        formatNumber: function formatNumber(value) {
            var val = (value / 1).toFixed(2).replace(',', '');
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    },
    mounted: function mounted() {
        this.loadTabla();
    }
});

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "card" }, [
        _c(
          "div",
          { staticClass: "card-content" },
          [
            _vm._m(1),
            _vm._v(" "),
            _c("div", { staticClass: "columns" }, [
              _vm._m(2),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "column is-3-widescreen" },
                [
                  _c("b-input", {
                    attrs: {
                      "icon-pack": "fas",
                      icon: "search",
                      placeholder: "búsqueda..."
                    },
                    model: {
                      value: _vm.searchKeyword,
                      callback: function($$v) {
                        _vm.searchKeyword = $$v
                      },
                      expression: "searchKeyword"
                    }
                  })
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.loading,
                    expression: "loading"
                  }
                ]
              },
              [_vm._v("\n                cargando...\n            ")]
            ),
            _vm._v(" "),
            _c(
              "b-button",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !_vm.loading,
                    expression: "!loading"
                  }
                ],
                attrs: { type: "is-primary" },
                on: {
                  click: function($event) {
                    return _vm.nuevoClick()
                  }
                }
              },
              [_vm._v("\n                Agregar\n            ")]
            ),
            _vm._v(" "),
            _c("b-table", {
              attrs: {
                data: _vm.filteredData,
                loading: _vm.loading,
                paginated: "",
                "per-page": _vm.perPage,
                striped: true,
                hoverable: true,
                "default-sort-direction": _vm.defaultSortOrder,
                focusable: true
              },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(props) {
                    return [
                      _c(
                        "b-table-column",
                        {
                          attrs: {
                            field: "nombre",
                            label: "Nombre",
                            sortable: ""
                          }
                        },
                        [
                          _vm._v(
                            "\n                            " +
                              _vm._s(props.row.nombre) +
                              "\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-table-column",
                        {
                          attrs: {
                            field: "telefono",
                            label: "Telefono",
                            sortable: ""
                          }
                        },
                        [
                          _vm._v(
                            "\n                            " +
                              _vm._s(props.row.telefono) +
                              "\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-table-column",
                        {
                          attrs: {
                            field: "email",
                            label: "Email",
                            sortable: ""
                          }
                        },
                        [
                          _vm._v(
                            "\n                            " +
                              _vm._s(props.row.email) +
                              "\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-table-column",
                        {
                          attrs: {
                            field: "direccion",
                            label: "Dirección",
                            sortable: ""
                          }
                        },
                        [
                          _vm._v(
                            "\n                            " +
                              _vm._s(props.row.direccion) +
                              "\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-table-column",
                        { attrs: { field: "direccion", label: "Dirección" } },
                        [
                          _c(
                            "b-button",
                            {
                              attrs: {
                                type: "is-info",
                                "icon-pack": "far",
                                "icon-left": "edit"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.editClick(props.row)
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                            Editar\n                        "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ]
                  }
                }
              ])
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: { active: _vm.modalForm },
          on: {
            "update:active": function($event) {
              _vm.modalForm = $event
            },
            close: function($event) {
              return _vm.closeModal()
            }
          }
        },
        [
          _c(
            "div",
            { staticClass: "modal-card", staticStyle: { width: "auto" } },
            [
              _c("header", { staticClass: "modal-card-head" }, [
                _c("p", { staticClass: "modal-card-title" }, [
                  _vm._v("Guardar nuevo Proveedor")
                ])
              ]),
              _vm._v(" "),
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.onSubmitControll($event)
                    }
                  }
                },
                [
                  _c(
                    "section",
                    { staticClass: "modal-card-body" },
                    [
                      _c(
                        "b-message",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errores.length > 0,
                              expression: "errores.length > 0"
                            }
                          ],
                          attrs: { type: "is-danger" }
                        },
                        _vm._l(_vm.errores, function(error) {
                          return _c("label", [_vm._v(_vm._s(error))])
                        }),
                        0
                      ),
                      _vm._v(" "),
                      _c(
                        "b-field",
                        { attrs: { label: "Nombre" } },
                        [
                          _c("b-input", {
                            attrs: {
                              required: "",
                              minlength: "5",
                              icon: "shipping-fast",
                              "icon-pack": "fas",
                              placeholder: "Nombre del proveedor"
                            },
                            model: {
                              value: _vm.addProveedor.nombre,
                              callback: function($$v) {
                                _vm.$set(_vm.addProveedor, "nombre", $$v)
                              },
                              expression: "addProveedor.nombre"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-field",
                        { attrs: { label: "Representante" } },
                        [
                          _c("b-input", {
                            attrs: {
                              required: "",
                              minlength: "5",
                              icon: "id-card-alt",
                              "icon-pack": "fas",
                              placeholder: "Nombre del contacto (proveedor)"
                            },
                            model: {
                              value: _vm.addProveedor.representante,
                              callback: function($$v) {
                                _vm.$set(_vm.addProveedor, "representante", $$v)
                              },
                              expression: "addProveedor.representante"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-field",
                        { attrs: { label: "Teléfono" } },
                        [
                          _c("b-input", {
                            attrs: {
                              required: "",
                              type: "number",
                              icon: "phone",
                              "icon-pack": "fas",
                              placeholder: "Teléfono"
                            },
                            model: {
                              value: _vm.addProveedor.telefono,
                              callback: function($$v) {
                                _vm.$set(_vm.addProveedor, "telefono", $$v)
                              },
                              expression: "addProveedor.telefono"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-field",
                        { attrs: { label: "Email" } },
                        [
                          _c("b-input", {
                            attrs: {
                              required: "",
                              type: "email",
                              icon: "envelope",
                              "icon-pack": "fas",
                              placeholder: "Email"
                            },
                            model: {
                              value: _vm.addProveedor.email,
                              callback: function($$v) {
                                _vm.$set(_vm.addProveedor, "email", $$v)
                              },
                              expression: "addProveedor.email"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-field",
                        { attrs: { label: "Dirección" } },
                        [
                          _c("b-input", {
                            attrs: {
                              required: "",
                              type: "textarea",
                              minlength: "10",
                              maxlength: "150"
                            },
                            model: {
                              value: _vm.addProveedor.direccion,
                              callback: function($$v) {
                                _vm.$set(_vm.addProveedor, "direccion", $$v)
                              },
                              expression: "addProveedor.direccion"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("footer", { staticClass: "modal-card-foot" }, [
                    _c(
                      "button",
                      {
                        staticClass: "button",
                        on: {
                          click: function($event) {
                            return _vm.closeModal()
                          }
                        }
                      },
                      [_vm._v("Cerrar")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "button is-primary",
                        attrs: { type: "submit", disabled: _vm.loadingModal }
                      },
                      [
                        _vm._v(
                          "\n                    Guardar\n                "
                        )
                      ]
                    )
                  ])
                ]
              )
            ]
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "nav",
      { staticClass: "breadcrumb", attrs: { "aria-label": "breadcrumbs" } },
      [
        _c("ul", [
          _c("li", [_c("a", { attrs: { href: "/home" } }, [_vm._v("Home")])]),
          _vm._v(" "),
          _c("li", { staticClass: "is-active" }, [
            _c("a", { attrs: { href: "#", "aria-current": "page" } }, [
              _vm._v("Lista Proveedores")
            ])
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("article", { staticClass: "message is-info" }, [
      _c("div", { staticClass: "message-body" }, [
        _vm._v("Tabla de "),
        _c("strong", [_vm._v("Proveedores")]),
        _vm._v(
          ".\n                    Este módulo muestra una lista completa de todas los proveedores\n                    que están dados de alta en el sistema\n                "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "column is-9-widescreen" }, [
      _c("h3", { staticClass: "subtitle m-t-sm" }, [
        _vm._v("Lista de Proveedores")
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3678cb80", module.exports)
  }
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Url", function() { return Url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Http", function() { return Http; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resource", function() { return Resource; });
/*!
 * vue-resource v1.5.1
 * https://github.com/pagekit/vue-resource
 * Released under the MIT License.
 */

/**
 * Promises/A+ polyfill v1.1.4 (https://github.com/bramstein/promis)
 */

var RESOLVED = 0;
var REJECTED = 1;
var PENDING = 2;

function Promise$1(executor) {

    this.state = PENDING;
    this.value = undefined;
    this.deferred = [];

    var promise = this;

    try {
        executor(function (x) {
            promise.resolve(x);
        }, function (r) {
            promise.reject(r);
        });
    } catch (e) {
        promise.reject(e);
    }
}

Promise$1.reject = function (r) {
    return new Promise$1(function (resolve, reject) {
        reject(r);
    });
};

Promise$1.resolve = function (x) {
    return new Promise$1(function (resolve, reject) {
        resolve(x);
    });
};

Promise$1.all = function all(iterable) {
    return new Promise$1(function (resolve, reject) {
        var count = 0, result = [];

        if (iterable.length === 0) {
            resolve(result);
        }

        function resolver(i) {
            return function (x) {
                result[i] = x;
                count += 1;

                if (count === iterable.length) {
                    resolve(result);
                }
            };
        }

        for (var i = 0; i < iterable.length; i += 1) {
            Promise$1.resolve(iterable[i]).then(resolver(i), reject);
        }
    });
};

Promise$1.race = function race(iterable) {
    return new Promise$1(function (resolve, reject) {
        for (var i = 0; i < iterable.length; i += 1) {
            Promise$1.resolve(iterable[i]).then(resolve, reject);
        }
    });
};

var p = Promise$1.prototype;

p.resolve = function resolve(x) {
    var promise = this;

    if (promise.state === PENDING) {
        if (x === promise) {
            throw new TypeError('Promise settled with itself.');
        }

        var called = false;

        try {
            var then = x && x['then'];

            if (x !== null && typeof x === 'object' && typeof then === 'function') {
                then.call(x, function (x) {
                    if (!called) {
                        promise.resolve(x);
                    }
                    called = true;

                }, function (r) {
                    if (!called) {
                        promise.reject(r);
                    }
                    called = true;
                });
                return;
            }
        } catch (e) {
            if (!called) {
                promise.reject(e);
            }
            return;
        }

        promise.state = RESOLVED;
        promise.value = x;
        promise.notify();
    }
};

p.reject = function reject(reason) {
    var promise = this;

    if (promise.state === PENDING) {
        if (reason === promise) {
            throw new TypeError('Promise settled with itself.');
        }

        promise.state = REJECTED;
        promise.value = reason;
        promise.notify();
    }
};

p.notify = function notify() {
    var promise = this;

    nextTick(function () {
        if (promise.state !== PENDING) {
            while (promise.deferred.length) {
                var deferred = promise.deferred.shift(),
                    onResolved = deferred[0],
                    onRejected = deferred[1],
                    resolve = deferred[2],
                    reject = deferred[3];

                try {
                    if (promise.state === RESOLVED) {
                        if (typeof onResolved === 'function') {
                            resolve(onResolved.call(undefined, promise.value));
                        } else {
                            resolve(promise.value);
                        }
                    } else if (promise.state === REJECTED) {
                        if (typeof onRejected === 'function') {
                            resolve(onRejected.call(undefined, promise.value));
                        } else {
                            reject(promise.value);
                        }
                    }
                } catch (e) {
                    reject(e);
                }
            }
        }
    });
};

p.then = function then(onResolved, onRejected) {
    var promise = this;

    return new Promise$1(function (resolve, reject) {
        promise.deferred.push([onResolved, onRejected, resolve, reject]);
        promise.notify();
    });
};

p.catch = function (onRejected) {
    return this.then(undefined, onRejected);
};

/**
 * Promise adapter.
 */

if (typeof Promise === 'undefined') {
    window.Promise = Promise$1;
}

function PromiseObj(executor, context) {

    if (executor instanceof Promise) {
        this.promise = executor;
    } else {
        this.promise = new Promise(executor.bind(context));
    }

    this.context = context;
}

PromiseObj.all = function (iterable, context) {
    return new PromiseObj(Promise.all(iterable), context);
};

PromiseObj.resolve = function (value, context) {
    return new PromiseObj(Promise.resolve(value), context);
};

PromiseObj.reject = function (reason, context) {
    return new PromiseObj(Promise.reject(reason), context);
};

PromiseObj.race = function (iterable, context) {
    return new PromiseObj(Promise.race(iterable), context);
};

var p$1 = PromiseObj.prototype;

p$1.bind = function (context) {
    this.context = context;
    return this;
};

p$1.then = function (fulfilled, rejected) {

    if (fulfilled && fulfilled.bind && this.context) {
        fulfilled = fulfilled.bind(this.context);
    }

    if (rejected && rejected.bind && this.context) {
        rejected = rejected.bind(this.context);
    }

    return new PromiseObj(this.promise.then(fulfilled, rejected), this.context);
};

p$1.catch = function (rejected) {

    if (rejected && rejected.bind && this.context) {
        rejected = rejected.bind(this.context);
    }

    return new PromiseObj(this.promise.catch(rejected), this.context);
};

p$1.finally = function (callback) {

    return this.then(function (value) {
        callback.call(this);
        return value;
    }, function (reason) {
        callback.call(this);
        return Promise.reject(reason);
    }
    );
};

/**
 * Utility functions.
 */

var ref = {};
var hasOwnProperty = ref.hasOwnProperty;
var ref$1 = [];
var slice = ref$1.slice;
var debug = false, ntick;

var inBrowser = typeof window !== 'undefined';

function Util (ref) {
    var config = ref.config;
    var nextTick = ref.nextTick;

    ntick = nextTick;
    debug = config.debug || !config.silent;
}

function warn(msg) {
    if (typeof console !== 'undefined' && debug) {
        console.warn('[VueResource warn]: ' + msg);
    }
}

function error(msg) {
    if (typeof console !== 'undefined') {
        console.error(msg);
    }
}

function nextTick(cb, ctx) {
    return ntick(cb, ctx);
}

function trim(str) {
    return str ? str.replace(/^\s*|\s*$/g, '') : '';
}

function trimEnd(str, chars) {

    if (str && chars === undefined) {
        return str.replace(/\s+$/, '');
    }

    if (!str || !chars) {
        return str;
    }

    return str.replace(new RegExp(("[" + chars + "]+$")), '');
}

function toLower(str) {
    return str ? str.toLowerCase() : '';
}

function toUpper(str) {
    return str ? str.toUpperCase() : '';
}

var isArray = Array.isArray;

function isString(val) {
    return typeof val === 'string';
}

function isFunction(val) {
    return typeof val === 'function';
}

function isObject(obj) {
    return obj !== null && typeof obj === 'object';
}

function isPlainObject(obj) {
    return isObject(obj) && Object.getPrototypeOf(obj) == Object.prototype;
}

function isBlob(obj) {
    return typeof Blob !== 'undefined' && obj instanceof Blob;
}

function isFormData(obj) {
    return typeof FormData !== 'undefined' && obj instanceof FormData;
}

function when(value, fulfilled, rejected) {

    var promise = PromiseObj.resolve(value);

    if (arguments.length < 2) {
        return promise;
    }

    return promise.then(fulfilled, rejected);
}

function options(fn, obj, opts) {

    opts = opts || {};

    if (isFunction(opts)) {
        opts = opts.call(obj);
    }

    return merge(fn.bind({$vm: obj, $options: opts}), fn, {$options: opts});
}

function each(obj, iterator) {

    var i, key;

    if (isArray(obj)) {
        for (i = 0; i < obj.length; i++) {
            iterator.call(obj[i], obj[i], i);
        }
    } else if (isObject(obj)) {
        for (key in obj) {
            if (hasOwnProperty.call(obj, key)) {
                iterator.call(obj[key], obj[key], key);
            }
        }
    }

    return obj;
}

var assign = Object.assign || _assign;

function merge(target) {

    var args = slice.call(arguments, 1);

    args.forEach(function (source) {
        _merge(target, source, true);
    });

    return target;
}

function defaults(target) {

    var args = slice.call(arguments, 1);

    args.forEach(function (source) {

        for (var key in source) {
            if (target[key] === undefined) {
                target[key] = source[key];
            }
        }

    });

    return target;
}

function _assign(target) {

    var args = slice.call(arguments, 1);

    args.forEach(function (source) {
        _merge(target, source);
    });

    return target;
}

function _merge(target, source, deep) {
    for (var key in source) {
        if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
            if (isPlainObject(source[key]) && !isPlainObject(target[key])) {
                target[key] = {};
            }
            if (isArray(source[key]) && !isArray(target[key])) {
                target[key] = [];
            }
            _merge(target[key], source[key], deep);
        } else if (source[key] !== undefined) {
            target[key] = source[key];
        }
    }
}

/**
 * Root Prefix Transform.
 */

function root (options$$1, next) {

    var url = next(options$$1);

    if (isString(options$$1.root) && !/^(https?:)?\//.test(url)) {
        url = trimEnd(options$$1.root, '/') + '/' + url;
    }

    return url;
}

/**
 * Query Parameter Transform.
 */

function query (options$$1, next) {

    var urlParams = Object.keys(Url.options.params), query = {}, url = next(options$$1);

    each(options$$1.params, function (value, key) {
        if (urlParams.indexOf(key) === -1) {
            query[key] = value;
        }
    });

    query = Url.params(query);

    if (query) {
        url += (url.indexOf('?') == -1 ? '?' : '&') + query;
    }

    return url;
}

/**
 * URL Template v2.0.6 (https://github.com/bramstein/url-template)
 */

function expand(url, params, variables) {

    var tmpl = parse(url), expanded = tmpl.expand(params);

    if (variables) {
        variables.push.apply(variables, tmpl.vars);
    }

    return expanded;
}

function parse(template) {

    var operators = ['+', '#', '.', '/', ';', '?', '&'], variables = [];

    return {
        vars: variables,
        expand: function expand(context) {
            return template.replace(/\{([^{}]+)\}|([^{}]+)/g, function (_, expression, literal) {
                if (expression) {

                    var operator = null, values = [];

                    if (operators.indexOf(expression.charAt(0)) !== -1) {
                        operator = expression.charAt(0);
                        expression = expression.substr(1);
                    }

                    expression.split(/,/g).forEach(function (variable) {
                        var tmp = /([^:*]*)(?::(\d+)|(\*))?/.exec(variable);
                        values.push.apply(values, getValues(context, operator, tmp[1], tmp[2] || tmp[3]));
                        variables.push(tmp[1]);
                    });

                    if (operator && operator !== '+') {

                        var separator = ',';

                        if (operator === '?') {
                            separator = '&';
                        } else if (operator !== '#') {
                            separator = operator;
                        }

                        return (values.length !== 0 ? operator : '') + values.join(separator);
                    } else {
                        return values.join(',');
                    }

                } else {
                    return encodeReserved(literal);
                }
            });
        }
    };
}

function getValues(context, operator, key, modifier) {

    var value = context[key], result = [];

    if (isDefined(value) && value !== '') {
        if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
            value = value.toString();

            if (modifier && modifier !== '*') {
                value = value.substring(0, parseInt(modifier, 10));
            }

            result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : null));
        } else {
            if (modifier === '*') {
                if (Array.isArray(value)) {
                    value.filter(isDefined).forEach(function (value) {
                        result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : null));
                    });
                } else {
                    Object.keys(value).forEach(function (k) {
                        if (isDefined(value[k])) {
                            result.push(encodeValue(operator, value[k], k));
                        }
                    });
                }
            } else {
                var tmp = [];

                if (Array.isArray(value)) {
                    value.filter(isDefined).forEach(function (value) {
                        tmp.push(encodeValue(operator, value));
                    });
                } else {
                    Object.keys(value).forEach(function (k) {
                        if (isDefined(value[k])) {
                            tmp.push(encodeURIComponent(k));
                            tmp.push(encodeValue(operator, value[k].toString()));
                        }
                    });
                }

                if (isKeyOperator(operator)) {
                    result.push(encodeURIComponent(key) + '=' + tmp.join(','));
                } else if (tmp.length !== 0) {
                    result.push(tmp.join(','));
                }
            }
        }
    } else {
        if (operator === ';') {
            result.push(encodeURIComponent(key));
        } else if (value === '' && (operator === '&' || operator === '?')) {
            result.push(encodeURIComponent(key) + '=');
        } else if (value === '') {
            result.push('');
        }
    }

    return result;
}

function isDefined(value) {
    return value !== undefined && value !== null;
}

function isKeyOperator(operator) {
    return operator === ';' || operator === '&' || operator === '?';
}

function encodeValue(operator, value, key) {

    value = (operator === '+' || operator === '#') ? encodeReserved(value) : encodeURIComponent(value);

    if (key) {
        return encodeURIComponent(key) + '=' + value;
    } else {
        return value;
    }
}

function encodeReserved(str) {
    return str.split(/(%[0-9A-Fa-f]{2})/g).map(function (part) {
        if (!/%[0-9A-Fa-f]/.test(part)) {
            part = encodeURI(part);
        }
        return part;
    }).join('');
}

/**
 * URL Template (RFC 6570) Transform.
 */

function template (options) {

    var variables = [], url = expand(options.url, options.params, variables);

    variables.forEach(function (key) {
        delete options.params[key];
    });

    return url;
}

/**
 * Service for URL templating.
 */

function Url(url, params) {

    var self = this || {}, options$$1 = url, transform;

    if (isString(url)) {
        options$$1 = {url: url, params: params};
    }

    options$$1 = merge({}, Url.options, self.$options, options$$1);

    Url.transforms.forEach(function (handler) {

        if (isString(handler)) {
            handler = Url.transform[handler];
        }

        if (isFunction(handler)) {
            transform = factory(handler, transform, self.$vm);
        }

    });

    return transform(options$$1);
}

/**
 * Url options.
 */

Url.options = {
    url: '',
    root: null,
    params: {}
};

/**
 * Url transforms.
 */

Url.transform = {template: template, query: query, root: root};
Url.transforms = ['template', 'query', 'root'];

/**
 * Encodes a Url parameter string.
 *
 * @param {Object} obj
 */

Url.params = function (obj) {

    var params = [], escape = encodeURIComponent;

    params.add = function (key, value) {

        if (isFunction(value)) {
            value = value();
        }

        if (value === null) {
            value = '';
        }

        this.push(escape(key) + '=' + escape(value));
    };

    serialize(params, obj);

    return params.join('&').replace(/%20/g, '+');
};

/**
 * Parse a URL and return its components.
 *
 * @param {String} url
 */

Url.parse = function (url) {

    var el = document.createElement('a');

    if (document.documentMode) {
        el.href = url;
        url = el.href;
    }

    el.href = url;

    return {
        href: el.href,
        protocol: el.protocol ? el.protocol.replace(/:$/, '') : '',
        port: el.port,
        host: el.host,
        hostname: el.hostname,
        pathname: el.pathname.charAt(0) === '/' ? el.pathname : '/' + el.pathname,
        search: el.search ? el.search.replace(/^\?/, '') : '',
        hash: el.hash ? el.hash.replace(/^#/, '') : ''
    };
};

function factory(handler, next, vm) {
    return function (options$$1) {
        return handler.call(vm, options$$1, next);
    };
}

function serialize(params, obj, scope) {

    var array = isArray(obj), plain = isPlainObject(obj), hash;

    each(obj, function (value, key) {

        hash = isObject(value) || isArray(value);

        if (scope) {
            key = scope + '[' + (plain || hash ? key : '') + ']';
        }

        if (!scope && array) {
            params.add(value.name, value.value);
        } else if (hash) {
            serialize(params, value, key);
        } else {
            params.add(key, value);
        }
    });
}

/**
 * XDomain client (Internet Explorer).
 */

function xdrClient (request) {
    return new PromiseObj(function (resolve) {

        var xdr = new XDomainRequest(), handler = function (ref) {
                var type = ref.type;


                var status = 0;

                if (type === 'load') {
                    status = 200;
                } else if (type === 'error') {
                    status = 500;
                }

                resolve(request.respondWith(xdr.responseText, {status: status}));
            };

        request.abort = function () { return xdr.abort(); };

        xdr.open(request.method, request.getUrl());

        if (request.timeout) {
            xdr.timeout = request.timeout;
        }

        xdr.onload = handler;
        xdr.onabort = handler;
        xdr.onerror = handler;
        xdr.ontimeout = handler;
        xdr.onprogress = function () {};
        xdr.send(request.getBody());
    });
}

/**
 * CORS Interceptor.
 */

var SUPPORTS_CORS = inBrowser && 'withCredentials' in new XMLHttpRequest();

function cors (request) {

    if (inBrowser) {

        var orgUrl = Url.parse(location.href);
        var reqUrl = Url.parse(request.getUrl());

        if (reqUrl.protocol !== orgUrl.protocol || reqUrl.host !== orgUrl.host) {

            request.crossOrigin = true;
            request.emulateHTTP = false;

            if (!SUPPORTS_CORS) {
                request.client = xdrClient;
            }
        }
    }

}

/**
 * Form data Interceptor.
 */

function form (request) {

    if (isFormData(request.body)) {
        request.headers.delete('Content-Type');
    } else if (isObject(request.body) && request.emulateJSON) {
        request.body = Url.params(request.body);
        request.headers.set('Content-Type', 'application/x-www-form-urlencoded');
    }

}

/**
 * JSON Interceptor.
 */

function json (request) {

    var type = request.headers.get('Content-Type') || '';

    if (isObject(request.body) && type.indexOf('application/json') === 0) {
        request.body = JSON.stringify(request.body);
    }

    return function (response) {

        return response.bodyText ? when(response.text(), function (text) {

            var type = response.headers.get('Content-Type') || '';

            if (type.indexOf('application/json') === 0 || isJson(text)) {

                try {
                    response.body = JSON.parse(text);
                } catch (e) {
                    response.body = null;
                }

            } else {
                response.body = text;
            }

            return response;

        }) : response;

    };
}

function isJson(str) {

    var start = str.match(/^\s*(\[|\{)/);
    var end = {'[': /]\s*$/, '{': /}\s*$/};

    return start && end[start[1]].test(str);
}

/**
 * JSONP client (Browser).
 */

function jsonpClient (request) {
    return new PromiseObj(function (resolve) {

        var name = request.jsonp || 'callback', callback = request.jsonpCallback || '_jsonp' + Math.random().toString(36).substr(2), body = null, handler, script;

        handler = function (ref) {
            var type = ref.type;


            var status = 0;

            if (type === 'load' && body !== null) {
                status = 200;
            } else if (type === 'error') {
                status = 500;
            }

            if (status && window[callback]) {
                delete window[callback];
                document.body.removeChild(script);
            }

            resolve(request.respondWith(body, {status: status}));
        };

        window[callback] = function (result) {
            body = JSON.stringify(result);
        };

        request.abort = function () {
            handler({type: 'abort'});
        };

        request.params[name] = callback;

        if (request.timeout) {
            setTimeout(request.abort, request.timeout);
        }

        script = document.createElement('script');
        script.src = request.getUrl();
        script.type = 'text/javascript';
        script.async = true;
        script.onload = handler;
        script.onerror = handler;

        document.body.appendChild(script);
    });
}

/**
 * JSONP Interceptor.
 */

function jsonp (request) {

    if (request.method == 'JSONP') {
        request.client = jsonpClient;
    }

}

/**
 * Before Interceptor.
 */

function before (request) {

    if (isFunction(request.before)) {
        request.before.call(this, request);
    }

}

/**
 * HTTP method override Interceptor.
 */

function method (request) {

    if (request.emulateHTTP && /^(PUT|PATCH|DELETE)$/i.test(request.method)) {
        request.headers.set('X-HTTP-Method-Override', request.method);
        request.method = 'POST';
    }

}

/**
 * Header Interceptor.
 */

function header (request) {

    var headers = assign({}, Http.headers.common,
        !request.crossOrigin ? Http.headers.custom : {},
        Http.headers[toLower(request.method)]
    );

    each(headers, function (value, name) {
        if (!request.headers.has(name)) {
            request.headers.set(name, value);
        }
    });

}

/**
 * XMLHttp client (Browser).
 */

function xhrClient (request) {
    return new PromiseObj(function (resolve) {

        var xhr = new XMLHttpRequest(), handler = function (event) {

                var response = request.respondWith(
                'response' in xhr ? xhr.response : xhr.responseText, {
                    status: xhr.status === 1223 ? 204 : xhr.status, // IE9 status bug
                    statusText: xhr.status === 1223 ? 'No Content' : trim(xhr.statusText)
                });

                each(trim(xhr.getAllResponseHeaders()).split('\n'), function (row) {
                    response.headers.append(row.slice(0, row.indexOf(':')), row.slice(row.indexOf(':') + 1));
                });

                resolve(response);
            };

        request.abort = function () { return xhr.abort(); };

        xhr.open(request.method, request.getUrl(), true);

        if (request.timeout) {
            xhr.timeout = request.timeout;
        }

        if (request.responseType && 'responseType' in xhr) {
            xhr.responseType = request.responseType;
        }

        if (request.withCredentials || request.credentials) {
            xhr.withCredentials = true;
        }

        if (!request.crossOrigin) {
            request.headers.set('X-Requested-With', 'XMLHttpRequest');
        }

        // deprecated use downloadProgress
        if (isFunction(request.progress) && request.method === 'GET') {
            xhr.addEventListener('progress', request.progress);
        }

        if (isFunction(request.downloadProgress)) {
            xhr.addEventListener('progress', request.downloadProgress);
        }

        // deprecated use uploadProgress
        if (isFunction(request.progress) && /^(POST|PUT)$/i.test(request.method)) {
            xhr.upload.addEventListener('progress', request.progress);
        }

        if (isFunction(request.uploadProgress) && xhr.upload) {
            xhr.upload.addEventListener('progress', request.uploadProgress);
        }

        request.headers.forEach(function (value, name) {
            xhr.setRequestHeader(name, value);
        });

        xhr.onload = handler;
        xhr.onabort = handler;
        xhr.onerror = handler;
        xhr.ontimeout = handler;
        xhr.send(request.getBody());
    });
}

/**
 * Http client (Node).
 */

function nodeClient (request) {

    var client = __webpack_require__(18);

    return new PromiseObj(function (resolve) {

        var url = request.getUrl();
        var body = request.getBody();
        var method = request.method;
        var headers = {}, handler;

        request.headers.forEach(function (value, name) {
            headers[name] = value;
        });

        client(url, {body: body, method: method, headers: headers}).then(handler = function (resp) {

            var response = request.respondWith(resp.body, {
                status: resp.statusCode,
                statusText: trim(resp.statusMessage)
            });

            each(resp.headers, function (value, name) {
                response.headers.set(name, value);
            });

            resolve(response);

        }, function (error$$1) { return handler(error$$1.response); });
    });
}

/**
 * Base client.
 */

function Client (context) {

    var reqHandlers = [sendRequest], resHandlers = [];

    if (!isObject(context)) {
        context = null;
    }

    function Client(request) {
        while (reqHandlers.length) {

            var handler = reqHandlers.pop();

            if (isFunction(handler)) {

                var response = (void 0), next = (void 0);

                response = handler.call(context, request, function (val) { return next = val; }) || next;

                if (isObject(response)) {
                    return new PromiseObj(function (resolve, reject) {

                        resHandlers.forEach(function (handler) {
                            response = when(response, function (response) {
                                return handler.call(context, response) || response;
                            }, reject);
                        });

                        when(response, resolve, reject);

                    }, context);
                }

                if (isFunction(response)) {
                    resHandlers.unshift(response);
                }

            } else {
                warn(("Invalid interceptor of type " + (typeof handler) + ", must be a function"));
            }
        }
    }

    Client.use = function (handler) {
        reqHandlers.push(handler);
    };

    return Client;
}

function sendRequest(request) {

    var client = request.client || (inBrowser ? xhrClient : nodeClient);

    return client(request);
}

/**
 * HTTP Headers.
 */

var Headers = function Headers(headers) {
    var this$1 = this;


    this.map = {};

    each(headers, function (value, name) { return this$1.append(name, value); });
};

Headers.prototype.has = function has (name) {
    return getName(this.map, name) !== null;
};

Headers.prototype.get = function get (name) {

    var list = this.map[getName(this.map, name)];

    return list ? list.join() : null;
};

Headers.prototype.getAll = function getAll (name) {
    return this.map[getName(this.map, name)] || [];
};

Headers.prototype.set = function set (name, value) {
    this.map[normalizeName(getName(this.map, name) || name)] = [trim(value)];
};

Headers.prototype.append = function append (name, value) {

    var list = this.map[getName(this.map, name)];

    if (list) {
        list.push(trim(value));
    } else {
        this.set(name, value);
    }
};

Headers.prototype.delete = function delete$1 (name) {
    delete this.map[getName(this.map, name)];
};

Headers.prototype.deleteAll = function deleteAll () {
    this.map = {};
};

Headers.prototype.forEach = function forEach (callback, thisArg) {
        var this$1 = this;

    each(this.map, function (list, name) {
        each(list, function (value) { return callback.call(thisArg, value, name, this$1); });
    });
};

function getName(map, name) {
    return Object.keys(map).reduce(function (prev, curr) {
        return toLower(name) === toLower(curr) ? curr : prev;
    }, null);
}

function normalizeName(name) {

    if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
        throw new TypeError('Invalid character in header field name');
    }

    return trim(name);
}

/**
 * HTTP Response.
 */

var Response = function Response(body, ref) {
    var url = ref.url;
    var headers = ref.headers;
    var status = ref.status;
    var statusText = ref.statusText;


    this.url = url;
    this.ok = status >= 200 && status < 300;
    this.status = status || 0;
    this.statusText = statusText || '';
    this.headers = new Headers(headers);
    this.body = body;

    if (isString(body)) {

        this.bodyText = body;

    } else if (isBlob(body)) {

        this.bodyBlob = body;

        if (isBlobText(body)) {
            this.bodyText = blobText(body);
        }
    }
};

Response.prototype.blob = function blob () {
    return when(this.bodyBlob);
};

Response.prototype.text = function text () {
    return when(this.bodyText);
};

Response.prototype.json = function json () {
    return when(this.text(), function (text) { return JSON.parse(text); });
};

Object.defineProperty(Response.prototype, 'data', {

    get: function get() {
        return this.body;
    },

    set: function set(body) {
        this.body = body;
    }

});

function blobText(body) {
    return new PromiseObj(function (resolve) {

        var reader = new FileReader();

        reader.readAsText(body);
        reader.onload = function () {
            resolve(reader.result);
        };

    });
}

function isBlobText(body) {
    return body.type.indexOf('text') === 0 || body.type.indexOf('json') !== -1;
}

/**
 * HTTP Request.
 */

var Request = function Request(options$$1) {

    this.body = null;
    this.params = {};

    assign(this, options$$1, {
        method: toUpper(options$$1.method || 'GET')
    });

    if (!(this.headers instanceof Headers)) {
        this.headers = new Headers(this.headers);
    }
};

Request.prototype.getUrl = function getUrl () {
    return Url(this);
};

Request.prototype.getBody = function getBody () {
    return this.body;
};

Request.prototype.respondWith = function respondWith (body, options$$1) {
    return new Response(body, assign(options$$1 || {}, {url: this.getUrl()}));
};

/**
 * Service for sending network requests.
 */

var COMMON_HEADERS = {'Accept': 'application/json, text/plain, */*'};
var JSON_CONTENT_TYPE = {'Content-Type': 'application/json;charset=utf-8'};

function Http(options$$1) {

    var self = this || {}, client = Client(self.$vm);

    defaults(options$$1 || {}, self.$options, Http.options);

    Http.interceptors.forEach(function (handler) {

        if (isString(handler)) {
            handler = Http.interceptor[handler];
        }

        if (isFunction(handler)) {
            client.use(handler);
        }

    });

    return client(new Request(options$$1)).then(function (response) {

        return response.ok ? response : PromiseObj.reject(response);

    }, function (response) {

        if (response instanceof Error) {
            error(response);
        }

        return PromiseObj.reject(response);
    });
}

Http.options = {};

Http.headers = {
    put: JSON_CONTENT_TYPE,
    post: JSON_CONTENT_TYPE,
    patch: JSON_CONTENT_TYPE,
    delete: JSON_CONTENT_TYPE,
    common: COMMON_HEADERS,
    custom: {}
};

Http.interceptor = {before: before, method: method, jsonp: jsonp, json: json, form: form, header: header, cors: cors};
Http.interceptors = ['before', 'method', 'jsonp', 'json', 'form', 'header', 'cors'];

['get', 'delete', 'head', 'jsonp'].forEach(function (method$$1) {

    Http[method$$1] = function (url, options$$1) {
        return this(assign(options$$1 || {}, {url: url, method: method$$1}));
    };

});

['post', 'put', 'patch'].forEach(function (method$$1) {

    Http[method$$1] = function (url, body, options$$1) {
        return this(assign(options$$1 || {}, {url: url, method: method$$1, body: body}));
    };

});

/**
 * Service for interacting with RESTful services.
 */

function Resource(url, params, actions, options$$1) {

    var self = this || {}, resource = {};

    actions = assign({},
        Resource.actions,
        actions
    );

    each(actions, function (action, name) {

        action = merge({url: url, params: assign({}, params)}, options$$1, action);

        resource[name] = function () {
            return (self.$http || Http)(opts(action, arguments));
        };
    });

    return resource;
}

function opts(action, args) {

    var options$$1 = assign({}, action), params = {}, body;

    switch (args.length) {

        case 2:

            params = args[0];
            body = args[1];

            break;

        case 1:

            if (/^(POST|PUT|PATCH)$/i.test(options$$1.method)) {
                body = args[0];
            } else {
                params = args[0];
            }

            break;

        case 0:

            break;

        default:

            throw 'Expected up to 2 arguments [params, body], got ' + args.length + ' arguments';
    }

    options$$1.body = body;
    options$$1.params = assign({}, options$$1.params, params);

    return options$$1;
}

Resource.actions = {

    get: {method: 'GET'},
    save: {method: 'POST'},
    query: {method: 'GET'},
    update: {method: 'PUT'},
    remove: {method: 'DELETE'},
    delete: {method: 'DELETE'}

};

/**
 * Install plugin.
 */

function plugin(Vue) {

    if (plugin.installed) {
        return;
    }

    Util(Vue);

    Vue.url = Url;
    Vue.http = Http;
    Vue.resource = Resource;
    Vue.Promise = PromiseObj;

    Object.defineProperties(Vue.prototype, {

        $url: {
            get: function get() {
                return options(Vue.url, this, this.$options.url);
            }
        },

        $http: {
            get: function get() {
                return options(Vue.http, this, this.$options.http);
            }
        },

        $resource: {
            get: function get() {
                return Vue.resource.bind(this);
            }
        },

        $promise: {
            get: function get() {
                var this$1 = this;

                return function (executor) { return new Vue.Promise(executor, this$1); };
            }
        }

    });
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin);
}

/* harmony default export */ __webpack_exports__["default"] = (plugin);



/***/ }),
/* 18 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 19 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[4]);