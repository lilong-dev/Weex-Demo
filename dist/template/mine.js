/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(115)
	var __weex_style__ = __webpack_require__(116)
	var __weex_script__ = __webpack_require__(117)

	__weex_define__('@weex-component/32393b70d9c5f9b14901640eab29d344', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/32393b70d9c5f9b14901640eab29d344',undefined,undefined)

/***/ },

/***/ 4:
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "wraper"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "wraper-left"
	      ],
	      "children": [
	        {
	          "type": "image",
	          "attr": {
	            "src": function () {return this.leftImage},
	            "resize": "contain"
	          },
	          "style": {
	            "width": function () {return this.iconWidth},
	            "height": function () {return this.iconHeight}
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "item-text"
	          ],
	          "attr": {
	            "value": function () {return this.itemText}
	          }
	        }
	      ]
	    },
	    {
	      "type": "image",
	      "attr": {
	        "src": "/images/ic_indicator_right.png"
	      },
	      "classList": [
	        "item-right-icon"
	      ]
	    }
	  ]
	}

/***/ },

/***/ 5:
/***/ function(module, exports) {

	module.exports = {
	  "wraper": {
	    "width": 750,
	    "height": 97,
	    "flexDirection": "row",
	    "alignItems": "center",
	    "justifyContent": "space-between",
	    "paddingRight": 24
	  },
	  "wraper-left": {
	    "flexDirection": "row",
	    "alignItems": "center"
	  },
	  "item-right-icon": {
	    "width": 15,
	    "height": 28,
	    "marginRight": 28
	  },
	  "item-text": {
	    "color": "#333333",
	    "fontSize": 29,
	    "marginLeft": 24
	  }
	}

/***/ },

/***/ 6:
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	    data: function () {return {
	        leftImage: '',
	        itemText: '',
	        isShowArrow: true,
	        iconWidth: 38,
	        iconHeight: 30
	    }}
	};}
	/* generated by weex-loader */


/***/ },

/***/ 115:
/***/ function(module, exports) {

	module.exports = {
	  "type": "scroller",
	  "attr": {
	    "showScrollbar": "false"
	  },
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "wrapper"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "header"
	          ],
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": "/images/bg_member_center.png"
	              },
	              "classList": [
	                "header-bg"
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "setting_container"
	              ],
	              "children": [
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": "/images/ic_member_setting.png"
	                  },
	                  "classList": [
	                    "setting_icon"
	                  ]
	                },
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": "/images/ic_member_no_news.png"
	                  },
	                  "classList": [
	                    "news_icon"
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "image",
	              "classList": [
	                "portrait"
	              ],
	              "attr": {
	                "src": "/images/ic_default_head.png"
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "register-login",
	                "head-text"
	              ],
	              "shown": function () {return !this.isLoagin},
	              "attr": {
	                "value": "注册/登录"
	              }
	            },
	            {
	              "type": "div",
	              "classList": [
	                "nickname-signature"
	              ],
	              "shown": function () {return this.isLoagin},
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "head-text"
	                  ],
	                  "attr": {
	                    "value": "自由健"
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "head-text",
	                    "signature"
	                  ],
	                  "attr": {
	                    "value": "我的未来"
	                  }
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "item-group"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "divider"
	              ],
	              "events": {
	                "click": "goMyPublish"
	              },
	              "children": [
	                {
	                  "type": "mine-item",
	                  "attr": {
	                    "leftImage": "/images/ic_member_publish.png",
	                    "itemText": "我的发布",
	                    "iconWidth": "38px",
	                    "iconHeight": "30px"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "mine-item",
	              "attr": {
	                "leftImage": "/images/ic_member_order.png",
	                "itemText": "我的订单",
	                "iconWidth": "28px",
	                "iconHeight": "30px"
	              },
	              "events": {
	                "click": "goMyOrder"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "item-group"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "divider"
	              ],
	              "children": [
	                {
	                  "type": "mine-item",
	                  "attr": {
	                    "leftImage": "/images/ic_member_discount.png",
	                    "itemText": "我的优惠券",
	                    "iconWidth": "33px",
	                    "iconHeight": "28px"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "mine-item",
	              "attr": {
	                "leftImage": "/images/ic_order_balance.png",
	                "itemText": "我的钱包",
	                "iconWidth": "33px",
	                "iconHeight": "28px"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "item-group"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "divider"
	              ],
	              "children": [
	                {
	                  "type": "mine-item",
	                  "attr": {
	                    "leftImage": "/images/ic_member_pro.png",
	                    "itemText": "评测档案",
	                    "iconWidth": "35px",
	                    "iconHeight": "32px"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "divider"
	              ],
	              "children": [
	                {
	                  "type": "mine-item",
	                  "attr": {
	                    "leftImage": "/images/ic_member_share.png",
	                    "itemText": "分享e健炼",
	                    "iconWidth": "35px",
	                    "iconHeight": "32px"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "mine-item",
	              "attr": {
	                "leftImage": "/images/ic_member_feedback.png",
	                "itemText": "意见反馈",
	                "iconWidth": "35px",
	                "iconHeight": "32px"
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },

/***/ 116:
/***/ function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "backgroundColor": "#f2f2f2"
	  },
	  "header": {
	    "height": 438,
	    "width": 750,
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "header-bg": {
	    "height": 438,
	    "width": 750,
	    "position": "absolute",
	    "left": 0,
	    "top": 0
	  },
	  "portrait": {
	    "width": 160,
	    "height": 160
	  },
	  "register-login": {
	    "marginTop": 28
	  },
	  "nickname-signature": {
	    "alignItems": "center",
	    "justifyContent": "center",
	    "marginTop": 25
	  },
	  "head-text": {
	    "fontSize": 29,
	    "color": "#ffffff"
	  },
	  "signature": {
	    "marginTop": 24
	  },
	  "item-group": {
	    "paddingLeft": 28,
	    "marginTop": 21,
	    "backgroundColor": "#ffffff"
	  },
	  "setting_container": {
	    "flexDirection": "row",
	    "position": "absolute",
	    "right": 35,
	    "top": 35
	  },
	  "setting_icon": {
	    "width": 38,
	    "height": 38
	  },
	  "news_icon": {
	    "width": 46,
	    "height": 38,
	    "marginLeft": 35
	  },
	  "divider": {
	    "borderBottomStyle": "solid",
	    "borderBottomWidth": 1,
	    "borderBottomColor": "#c0bebe"
	  }
	}

/***/ },

/***/ 117:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var navigator = __weex_require__('@weex-module/navigator');
	__webpack_require__(118);
	module.exports = {
	    data: function () {return {
	        isLoagin: false
	    }},
	    methods: {
	        goMyPublish: function goMyPublish() {
	            var params = {
	                'url': 'http://192.168.1.44:8081/dist/template/mytopic.js',
	                'animated': 'true'
	            };
	            navigator.push(params, function (e) {});
	        },
	        goMyOrder: function goMyOrder() {
	            var params = {
	                'url': 'http://192.168.1.44:8081/dist/template/myorder.js',
	                'animated': 'true'
	            };
	            navigator.push(params, function (e) {});
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ },

/***/ 118:
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(4)
	var __weex_style__ = __webpack_require__(5)
	var __weex_script__ = __webpack_require__(6)

	__weex_define__('@weex-component/mine-item', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ }

/******/ });