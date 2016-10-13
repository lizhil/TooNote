/******/ (function(modules) { // webpackBootstrap
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

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _vue = __webpack_require__(2);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _vuex = __webpack_require__(3);
	
	var _vuex2 = _interopRequireDefault(_vuex);
	
	var _sidebar = __webpack_require__(4);
	
	var _sidebar2 = _interopRequireDefault(_sidebar);
	
	var _editor = __webpack_require__(20);
	
	var _editor2 = _interopRequireDefault(_editor);
	
	var _preview = __webpack_require__(32);
	
	var _preview2 = _interopRequireDefault(_preview);
	
	var _menubar = __webpack_require__(39);
	
	var _menubar2 = _interopRequireDefault(_menubar);
	
	var _menu = __webpack_require__(44);
	
	var _menu2 = _interopRequireDefault(_menu);
	
	var _meta = __webpack_require__(50);
	
	var _meta2 = _interopRequireDefault(_meta);
	
	var _note = __webpack_require__(45);
	
	var _note2 = _interopRequireDefault(_note);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	_vue2.default.use(_vuex2.default);
	let store = __webpack_require__(53);
	
	// Vue.config.debug = true;
	
	
	// import config from './modules/config';
	
	
	// window.eventHub = new Vue();
	
	let app = new _vue2.default({
		el: '#wrapper',
		store,
		methods: {
			_getTitle(content) {
				return content.split('\n', 2)[0].replace(/^[# \xa0]*/g, '');
			},
			newNote() {
				store.dispatch('newNote');
			},
			switchCurrentNote(note) {
				store.commit('switchCurrentNote', note);
			},
			openContextMenuNote() {
				store.dispatch('openContextMenuNote');
			},
			deleteContextMenuNote() {
				store.dispatch('deleteContextMenuNote');
			},
			switchCurrentNotebook(notebook) {
				store.commit('switchCurrentNotebook', notebook);
			},
			updateMeta(metaData) {
				store.commit('updateNotebooks', metaData.notebook);
			},
			importBackup() {
				store.dispatch('importBackup');
			}
		},
		data: {
			currentNote: {},
			currentNotebook: {},
			withMenubar: false
		},
		components: {
			menubar: _menubar2.default,
			sidebar: _sidebar2.default,
			editor: _editor2.default,
			preview: _preview2.default
		}
	});
	
	_asyncToGenerator(function* () {
		try {
			// eventHub.$emit('metaWillChange');
			app.metaData = yield _meta2.default.data;
	
			app.updateMeta(app.metaData);
			// eventHub.$emit('metaDidChange', app.metaData);
	
			// 初始化欢迎笔记
			if (!app.metaData.init) {
				yield _note2.default.init(app.metaData.notebook[0].notes[0].id);
				yield _meta2.default.init();
			}
	
			app.currentNotebook = app.metaData.notebook[0];
			app.switchCurrentNotebook(app.currentNotebook);
	
			var noteMeta = Object.assign({}, app.currentNotebook.notes[0]);
			noteMeta.content = yield _note2.default.getNote(noteMeta.id);
			app.currentNote = noteMeta;
	
			// vuex:new
			app.switchCurrentNote(app.currentNote);
		} catch (e) {
			console.log(e);
			throw e;
		}
	
		_menu2.default.on('click', function (eventType, command) {
			switch (command) {
				case 'newNote':
					app.newNote();
					break;
				case 'devReload':
					location.reload(true);
					break;
				case 'noteOpen':
					app.openContextMenuNote();
					break;
				case 'noteDelete':
					if (confirm('确定要删除该笔记吗？删除后将无法找回该笔记内容')) {
						app.deleteContextMenuNote();
					}
					break;
				case 'importBackup':
					app.importBackup();
					break;
			}
		});
	})();

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("vue/dist/vue.js");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("vuex");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(5)
	
	/* script */
	__vue_exports__ = __webpack_require__(11)
	
	/* template */
	var __vue_template__ = __webpack_require__(19)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.name = __vue_options__.name || "sidebar"
	__vue_options__.__file = "/Users/TooBug/work/github/TooNote/src/component/sidebar.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-114b24d1"
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-114b24d1", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-114b24d1", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] sidebar.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/.0.23.1@css-loader/index.js?sourceMap!./../node_modules/.9.5.3@vue-loader/lib/style-rewriter.js?id=data-v-114b24d1&scoped=true!./../node_modules/.9.5.3@vue-loader/lib/selector.js?type=styles&index=0!./sidebar.vue", function() {
				var newContent = require("!!./../node_modules/.0.23.1@css-loader/index.js?sourceMap!./../node_modules/.9.5.3@vue-loader/lib/style-rewriter.js?id=data-v-114b24d1&scoped=true!./../node_modules/.9.5.3@vue-loader/lib/selector.js?type=styles&index=0!./sidebar.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.sidebar[data-v-114b24d1]{\n\t-webkit-user-select: none;\n\tuser-select:none;\n\tbackground:#F6F6F6;\n\tborder-right:1px solid #E0E0E0;\n\tcolor:#585858;\n\tfont-family: \"PingFang SC\";\n\tmin-height:100%;\n\twidth:250px;\n}\n.wrapper[data-v-114b24d1]{\n\tline-height: 24px;\n\tpadding-top: 10px;\n}\n.wrapper h2[data-v-114b24d1]{\n\tfont-size:12px;\n\tpadding-left:15px;\n\tfont-weight: normal;\n}\n.wrapper ul[data-v-114b24d1]{\n\tlist-style: none;\n}\n.wrapper li[data-v-114b24d1]{\n\tfont-size:13px;\n\ttext-indent: 25px;\n\t/*padding-left:25px;*/\n\tcursor:default;\n}\n.wrapper li li[data-v-114b24d1]{\n\ttext-indent: 44px;\n}\n.wrapper li.active[data-v-114b24d1]{\n\tbackground: #CECECE;\n}\n.wrapper li.note[data-v-114b24d1]::before{\n\tpadding-right:3px;\n\tbackground-image:url(" + __webpack_require__(8) + ");\n}\n.wrapper li.folder[data-v-114b24d1]::before{\n\tpadding-right:3px;\n\tbackground-image:url(" + __webpack_require__(9) + ");\n}\n", "", {"version":3,"sources":["/./component/sidebar.vue?371959eb"],"names":[],"mappings":";AACA;CACA,0BAAA;CACA,iBAAA;CACA,mBAAA;CACA,+BAAA;CACA,cAAA;CACA,2BAAA;CACA,gBAAA;CACA,YAAA;CACA;AACA;CACA,kBAAA;CACA,kBAAA;CACA;AACA;CACA,eAAA;CACA,kBAAA;CACA,oBAAA;CACA;AACA;CACA,iBAAA;CACA;AACA;CACA,eAAA;CACA,kBAAA;CACA,sBAAA;CACA,eAAA;CACA;AACA;CACA,kBAAA;CACA;AACA;CACA,oBAAA;CACA;AACA;CACA,kBAAA;CACA,+CAAA;CACA;AACA;CACA,kBAAA;CACA,+CAAA;CACA","file":"sidebar.vue","sourcesContent":["<style scoped>\n.sidebar{\n\t-webkit-user-select: none;\n\tuser-select:none;\n\tbackground:#F6F6F6;\n\tborder-right:1px solid #E0E0E0;\n\tcolor:#585858;\n\tfont-family: \"PingFang SC\";\n\tmin-height:100%;\n\twidth:250px;\n}\n.wrapper{\n\tline-height: 24px;\n\tpadding-top: 10px;\n}\n.wrapper h2{\n\tfont-size:12px;\n\tpadding-left:15px;\n\tfont-weight: normal;\n}\n.wrapper ul{\n\tlist-style: none;\n}\n.wrapper li{\n\tfont-size:13px;\n\ttext-indent: 25px;\n\t/*padding-left:25px;*/\n\tcursor:default;\n}\n.wrapper li li{\n\ttext-indent: 44px;\n}\n.wrapper li.active{\n\tbackground: #CECECE;\n}\n.wrapper li.note::before{\n\tpadding-right:3px;\n\tbackground-image:url(../images/icon-file.png);\n}\n.wrapper li.folder::before{\n\tpadding-right:3px;\n\tbackground-image:url(../images/icon-folder.png);\n}\n</style>\n\n<template>\n<section class=\"sidebar\">\n\t<section class=\"wrapper\" v-for=\"notebook in notebooksWithCategories\">\n\t\t<h2>{{notebook.title}}</h2>\n\t\t<ul>\n\t\t\t<li\n\t\t\t\tclass=\"icon folder\"\n\t\t\t\tv-for=\"(notes,category) in notebook.categories\"\n\t\t\t>{{category}}\n\t\t\t\t<ul>\n\t\t\t\t\t<li\n\t\t\t\t\t\tclass=\"icon note\"\n\t\t\t\t\t\tv-bind:class=\"{active:(currentNote && note.id === currentNote.id) || note.id === contextMenuNoteId}\"\n\t\t\t\t\t\tv-for=\"note in notes\"\n\t\t\t\t\t\tv-on:click=\"switchCurrentNote(note.id)\"\n\t\t\t\t\t\tv-on:contextmenu=\"showContextMenu(note.id)\"\n\t\t\t\t\t>{{note.title}}</li>\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t</ul>\n\t</section>\n</section>\n</template>\n\n\n<script>\nimport {mapGetters} from 'vuex';\nimport Menu from '../api/menu/index';\nimport util from '../modules/util';\n\nlet menu = new Menu(util.platform);\nexport default {\n\tcomputed: {\n\t\t...mapGetters(['notebooks', 'currentNote', 'contextMenuNoteId', 'notebooksWithCategories'])\n\t},\n\tmethods: {\n\t\tisActive(noteId){\n\t\t\tlet ret = false;\n\t\t\t// 当前笔记\n\t\t\tif(this.currentNote && noteId === this.currentNote.id){\n\t\t\t\tret = true;\n\t\t\t}\n\t\t\t// 当前右键笔记\n\t\t\tif(this.contextMenuNoteId === noteId){\n\t\t\t\tret = true;\n\t\t\t}\n\t\t\treturn ret;\n\t\t},\n\t\tswitchCurrentNote(noteId){\n\t\t\tthis.$store.dispatch('switchCurrentNoteById', noteId);\n\t\t\t// eventHub.$emit('currentNoteChange', noteId);\n\t\t},\n\t\tshowContextMenu(noteId){\n\t\t\tconsole.log('contextmenu');\n\t\t\tthis.$store.commit('switchContextMenuNote', noteId);\n\t\t\t// this.$nextTick(() => {\n\t\t\tsetTimeout(() => {\n\t\t\t\tmenu.showContextMenu([{\n\t\t\t\t\ttitle:'打开',\n\t\t\t\t\tevent:'noteOpen'\n\t\t\t\t},{\n\t\t\t\t\ttitle:'删除',\n\t\t\t\t\tevent:'noteDelete'\n\t\t\t\t}]);\n\t\t\t\tsetTimeout(()=>{\n\t\t\t\t\tthis.$store.commit('switchContextMenuNote', 0);\n\t\t\t\t},30);\n\t\t\t},30);\n\t\t},\n\t\t/*hideContextMenu(){\n\t\t\t// 会自动关闭，这里主要是将当前右键笔记置空\n\t\t\tthis.$store.commit('switchContextMenuNote', 0);\n\t\t}*/\n\t},\n\tdata(){\n\t\tvar data = {};\n\t\treturn data;\n\t}\n};\n</script>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 7 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAABTUlEQVR4Ae3OA6yQARRA4ZNt15BtDtk25jiGudlryrZtc862bbtn3XeHZ8T/v22758z8yD48T37pdxxjDAWMAKk/oHcwgLq5XJ/+7EVSX0LhYAHZvwzRdxODcJ6q4QMa8ARhBd14jfCcxiED9GkItylBHS4ifKZT2ID+CDGU0CuyGyGGUeECmiJ6CXRKMoMkfWqIAD0NoDOBGISF5DMC6D35iLCXYkYAvSmPEc5RwQig1+Yawj1qGAH0apxAeENzI4BegYMI3+hqBNDLsh0hil5GAL00axFi6GoE0EuyDOErda0ASmAxwkXyBwfI/gQ+cJ8jzGEsuxEmhQfI/tcUDAaQ/c1oTQcGMYVNfEfQGR48IPvbcBLRVxoB9Ba8QrhrBtDnIERZAkYhiCWgnTWgvi1Ad4ADHOAABzjAAQ5wgAMc4AAH/AEggP9HgOclA5TtqCXOMjYzAAAAAElFTkSuQmCC"

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAABIUlEQVR4Ae3RJfAVARTG0bPvPdzd6YO7eyXSkAoFL1iPeMEhoZ1Exd1paMLd2aXg8Md3F7nn6zO/uRdCCAH6OSyV1bHHjlqiodwM9kj2zW2XgwQcMtgu86W+rJFhVmtlot35BLxS0d0rXzPLQlcMcsNvVQEVvPJ1q+3R3UFTtP/9F8jQxbe0s8wEv8Mr+0x34UcDYJoxhmrj1903zPlvB+SjZplJ9hlZVgBVV6Sq1Ly1RT9tVOQvdcsJVHh3AeVIqHnrrLVueiSTt6bamqEnUPHWJpc8lMnfQ5ds5NOAa4p05fOAJ4r0HKCiZBEQAREQAREQAREQAREQAREQARFQ81an//oFaeEX6IDUOztkJWybdxpZ64mswD21UWOEEEL5XgNUN8mIjYWolQAAAABJRU5ErkJggg=="

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
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
	
	var _vuex = __webpack_require__(3);
	
	var _index = __webpack_require__(12);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _util = __webpack_require__(18);
	
	var _util2 = _interopRequireDefault(_util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	let menu = new _index2.default(_util2.default.platform);
	exports.default = {
		computed: _extends({}, (0, _vuex.mapGetters)(['notebooks', 'currentNote', 'contextMenuNoteId', 'notebooksWithCategories'])),
		methods: {
			isActive(noteId) {
				let ret = false;
				// 当前笔记
				if (this.currentNote && noteId === this.currentNote.id) {
					ret = true;
				}
				// 当前右键笔记
				if (this.contextMenuNoteId === noteId) {
					ret = true;
				}
				return ret;
			},
			switchCurrentNote(noteId) {
				this.$store.dispatch('switchCurrentNoteById', noteId);
				// eventHub.$emit('currentNoteChange', noteId);
			},
			showContextMenu(noteId) {
				console.log('contextmenu');
				this.$store.commit('switchContextMenuNote', noteId);
				// this.$nextTick(() => {
				setTimeout(() => {
					menu.showContextMenu([{
						title: '打开',
						event: 'noteOpen'
					}, {
						title: '删除',
						event: 'noteDelete'
					}]);
					setTimeout(() => {
						this.$store.commit('switchContextMenuNote', 0);
					}, 30);
				}, 30);
			}
		},
		data() {
			var data = {};
			return data;
		}
	};
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _web = __webpack_require__(13);
	
	var _web2 = _interopRequireDefault(_web);
	
	var _macgap = __webpack_require__(15);
	
	var _macgap2 = _interopRequireDefault(_macgap);
	
	var _electron = __webpack_require__(16);
	
	var _electron2 = _interopRequireDefault(_electron);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	class Menu {
		constructor(platform) {
			this._platform = platform;
			if (platform === 'web') {
				return new _web2.default();
			} else if (platform === 'macgap') {
				return new _macgap2.default();
			} else if (platform === 'electron') {
				return new _electron2.default();
			}
		}
	}
	
	exports.default = Menu;
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _base = __webpack_require__(14);
	
	var _base2 = _interopRequireDefault(_base);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	class WebMenu extends _base2.default {
		constructor() {
			console.log('web menu init');
			super();
			if (WebMenu._instance) {
				console.log('cache');
				return WebMenu._instance;
			}
			console.log('no cache');
			WebMenu._instance = this;
		}
	
		get isVue() {
			return true;
		}
	}
	
	exports.default = WebMenu;
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	class Menu {
		constructor() {
			console.log('Menu init.');
		}
		on(eventType, callback) {
			console.log('menu on');
			if (!this._eventList) {
				this._eventList = {};
			}
			if (!this._eventList[eventType]) {
				this._eventList[eventType] = [];
			}
			this._eventList[eventType].push(callback);
		}
		off(eventType, callback) {
			if (!this._eventList || !this._eventList[eventType]) return;
			if (!callback) {
				this._eventList[eventType] = [];
			} else {
				let index = this._eventList[eventType].indexOf(callback);
				if (index === -1) return;
				this._eventList[eventType].splice(index, 1);
			}
		}
		trigger(eventType, data) {
			console.log('menu trigger', this._eventList, this);
			if (!this._eventList || !this._eventList[eventType]) return;
			this._eventList[eventType].forEach(callback => {
				callback(eventType, data);
			});
		}
		onClick(command) {
			this.trigger('click', command);
		}
		buildMenu(menuList) {}
	}
	
	exports.default = Menu;
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _base = __webpack_require__(14);
	
	var _base2 = _interopRequireDefault(_base);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	class MacgapMenu extends _base2.default {
		constructor() {
			console.log('macgap menu init');
			super();
			if (MacgapMenu._instance) {
				console.log('cache');
				return MacgapMenu._instance;
			}
			console.log('no cache');
			MacgapMenu._instance = this;
		}
		buildMenu(menuList) {
			menuList.forEach(menu => {
				var macgapMenu = MacGap.Menu.getItem(menu.title);
				if (!macgapMenu) {
					MacGap.Menu.addItem({
						label: menu.title
					});
					macgapMenu = MacGap.Menu.getItem(menu.title);
				}
				if (menu.title === 'TooNote') {
					menu.subMenu.push({
						title: 'Reload',
						event: 'devReload',
						hotKey: 'cmd+r'
					});
				}
				menu.subMenu.forEach(menu => {
					var macgapSubMenu = macgapMenu.submenu.getItem(menu.title);
					if (!macgapSubMenu) {
						macgapMenu.submenu.addItem({ label: menu.title, keys: menu.hotKey });
						macgapSubMenu = macgapMenu.submenu.getItem(menu.title);
					}
	
					macgapSubMenu.callback = () => {
						this.trigger('click', menu.event);
					};
					// macgapSubMenu.enabled = true;
				});
			});
		}
	
		get isVue() {
			return false;
		}
	}
	
	exports.default = MacgapMenu;
	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _base = __webpack_require__(14);
	
	var _base2 = _interopRequireDefault(_base);
	
	var _electron = __webpack_require__(17);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	class ElectronMenu extends _base2.default {
		constructor() {
			// console.log('electron menu init');
			super();
			if (ElectronMenu._instance) {
				// console.log('cache');
				return ElectronMenu._instance;
			}
			// console.log('no cache');
			ElectronMenu._instance = this;
		}
		_getMenu(menuList) {
			let buildMenu = menuItem => {
				let subMenu;
	
				if (menuItem.subMenu) {
					subMenu = menuItem.subMenu.map(menuItem => {
						return buildMenu(menuItem);
					});
				}
				if (menuItem.title === 'TooNote') {
					subMenu.unshift({
						label: '关于TooNote',
						role: 'about'
					});
					subMenu = subMenu.concat([{
						label: 'Reload',
						accelerator: 'cmd+r',
						click: (item, focusWindow) => {
							this.trigger('click', 'devReload');
						}
					}, {
						label: '退出',
						accelerator: 'cmd+q',
						role: 'close'
					}]);
				} else if (menuItem.title === 'Edit') {
					subMenu = [/*{
	               label: '撤销',
	               role: 'undo'
	               },{
	               label: '重做'
	               role: 'redo'
	               },*/ /*{
	                    type: 'separator'
	                    },*/{
						label: '剪切',
						role: 'cut'
					}, {
						label: '复制',
						role: 'copy'
					}, {
						label: '粘贴',
						role: 'paste'
					}, {
						label: '删除',
						role: 'delete'
					}, {
						label: '全选',
						role: 'selectall'
					}].concat(subMenu);
				}
				let thisMenu = {
					label: menuItem.title,
					accelerator: menuItem.hotKey,
					click: menuItem.event ? (event => {
						console.log('[menu electron] bind click', event);
						return (item, focusWindow) => {
							console.log('[menu electron] click', event);
							this.trigger('click', event);
						};
					})(menuItem.event) : undefined,
					submenu: subMenu
				};
				return thisMenu;
			};
			let template = menuList.map(menuItem => {
				return buildMenu(menuItem);
			});
			let menu = _electron.remote.Menu.buildFromTemplate(template);
			return menu;
		}
		buildMenu(menuList) {
			let menu = this._getMenu(menuList);
			_electron.remote.Menu.setApplicationMenu(menu);
		}
		showContextMenu(menuList) {
			let contextMenu = this._getMenu(menuList);
			contextMenu.popup(_electron.remote.getCurrentWindow());
		}
		get isVue() {
			return true;
		}
	}
	
	exports.default = ElectronMenu;
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = require("electron");

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	let util = {};
	
	if (typeof MacGap !== 'undefined') {
		util.platform = 'macgap';
	} else if (typeof process !== 'undefined') {
		// if(process.browser){
		util.platform = 'electron';
		// }else{
		// util.platform = 'electron';
		// }
	} else {
		util.platform = 'web';
	}
	console.log(util.platform);
	exports.default = util;
	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('section', {
	    staticClass: "sidebar"
	  }, [_l((notebooksWithCategories), function(notebook) {
	    return _h('section', {
	      staticClass: "wrapper"
	    }, [_h('h2', [_s(notebook.title)]), " ", _h('ul', [_l((notebook.categories), function(notes, category) {
	      return _h('li', {
	        staticClass: "icon folder"
	      }, [_s(category) + "\n\t\t\t\t", _h('ul', [_l((notes), function(note) {
	        return _h('li', {
	          staticClass: "icon note",
	          class: {
	            active: (currentNote && note.id === currentNote.id) || note.id === contextMenuNoteId
	          },
	          on: {
	            "click": function($event) {
	              switchCurrentNote(note.id)
	            },
	            "contextmenu": function($event) {
	              showContextMenu(note.id)
	            }
	          }
	        }, [_s(note.title)])
	      })])])
	    })])])
	  })])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-114b24d1", module.exports)
	  }
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(21)
	
	/* script */
	__vue_exports__ = __webpack_require__(23)
	
	/* template */
	var __vue_template__ = __webpack_require__(31)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.name = __vue_options__.name || "editor"
	__vue_options__.__file = "/Users/TooBug/work/github/TooNote/src/component/editor.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-435b5df0"
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-435b5df0", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-435b5df0", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] editor.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(22);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/.0.23.1@css-loader/index.js?sourceMap!./../node_modules/.9.5.3@vue-loader/lib/style-rewriter.js?id=data-v-435b5df0&scoped=true!./../node_modules/.9.5.3@vue-loader/lib/selector.js?type=styles&index=0!./editor.vue", function() {
				var newContent = require("!!./../node_modules/.0.23.1@css-loader/index.js?sourceMap!./../node_modules/.9.5.3@vue-loader/lib/style-rewriter.js?id=data-v-435b5df0&scoped=true!./../node_modules/.9.5.3@vue-loader/lib/selector.js?type=styles&index=0!./editor.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.editor[data-v-435b5df0]{\n\tborder-right:1px solid #E0E0E0;\n\tfont-family: \"PingFang SC\";\n\theight:100%;\n\tflex:1;\n}\n#ace_container[data-v-435b5df0]{\n\theight:100%;\n\tfont-size: 14px;\n    line-height: 28px;\n}\n", "", {"version":3,"sources":["/./component/editor.vue?0619abae"],"names":[],"mappings":";AACA;CACA,+BAAA;CACA,2BAAA;CACA,YAAA;CACA,OAAA;CACA;AACA;CACA,YAAA;CACA,gBAAA;IACA,kBAAA;CACA","file":"editor.vue","sourcesContent":["<style scoped>\n.editor{\n\tborder-right:1px solid #E0E0E0;\n\tfont-family: \"PingFang SC\";\n\theight:100%;\n\tflex:1;\n}\n#ace_container{\n\theight:100%;\n\tfont-size: 14px;\n    line-height: 28px;\n}\n</style>\n\n<template>\n<section class=\"editor\">\n\t<div id=\"ace_container\"></div>\n</section>\n</template>\n\n\n<script>\nimport ace from 'brace';\nimport 'brace/theme/tomorrow';\nimport 'brace/mode/markdown';\nimport {mapGetters} from 'vuex'\nlet _aceEditor;\nlet _id,_content;\nexport default {\n\tcomputed:{\n\t\t...mapGetters(['currentNote'])\n\t},\n\twatch:{\n\t\tcurrentNote(note){\n\t\t\tif(!note || (!note.content && note.content !== '')) return\n\t\t\tif(_content !== note.content){\n\t\t\t\t_aceEditor.setValue(note.content, -1);\n\t\t\t}\n\t\t\tif(_id !== note.id){\n\t\t\t\t_content = '';\n\t\t\t\t_id = note.id;\n\t\t\t}\n\t\t}\n\t},\n\tdata(){\n\t\tvar data = {\n\t\t\t// content:''\n\t\t};\n\t\treturn data;\n\t},\n\tmounted(){\n\t\tvar aceEditor = ace.edit('ace_container');\n\t\tvar session = aceEditor.getSession();\n\t\t_aceEditor = aceEditor;\n\t\taceEditor.setTheme('ace/theme/tomorrow');\n\t\tsession.setMode('ace/mode/markdown');\n\t\tsession.setUseWrapMode(true);\n\t\taceEditor.renderer.setHScrollBarAlwaysVisible(false);\n\t\taceEditor.renderer.setShowGutter(false);\n\t\taceEditor.renderer.setPadding(20);\n\t\taceEditor.setShowPrintMargin(false);\n\t\taceEditor.$blockScrolling = Infinity;\n\t\taceEditor.on('input', () => {\n\t\t\t_content = aceEditor.getValue();\n\t\t\tthis.$store.dispatch('changeCurrentNoteContent', _content);\n\t\t\t// eventHub.$emit('currentNoteContentChange', content);\n\t\t});\n\n\t\t// 同步滚动\n\t\tsession.on('changeScrollTop', (scroll) => {\n\t\t\tlet targetRow = aceEditor.getFirstVisibleRow();\n\t\t\tthis.$store.dispatch('syncScroll', targetRow);\n\t\t});\n\t\t// if(timing && Date.now() - waitStart < 100) clearTimeout(timing);\n\t\t// timing = setTimeout(function(){\n\t\t\t// console.log(targetRow,scrollMap[targetRow]);\n\t\t\t/*animatedScroll($preview, scrollMap[targetRow], 500);\n\t\t\twaitStart = Date.now();\n\t\t\ttiming = 0;*/\n\t\t\t// },100);\n\t\t\t// console.log('scroll',scroll);\n\n\t\t// 重新计算大小\n\t\tsetTimeout(function(){\n\t\t\taceEditor.resize();\n\t\t},0);\n\t}\n};\n</script>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
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
	
	var _brace = __webpack_require__(24);
	
	var _brace2 = _interopRequireDefault(_brace);
	
	__webpack_require__(25);
	
	__webpack_require__(26);
	
	var _vuex = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	let _aceEditor;
	let _id, _content;
	exports.default = {
		computed: _extends({}, (0, _vuex.mapGetters)(['currentNote'])),
		watch: {
			currentNote(note) {
				if (!note || !note.content && note.content !== '') return;
				if (_content !== note.content) {
					_aceEditor.setValue(note.content, -1);
				}
				if (_id !== note.id) {
					_content = '';
					_id = note.id;
				}
			}
		},
		data() {
			var data = {
				// content:''
			};
			return data;
		},
		mounted() {
			var aceEditor = _brace2.default.edit('ace_container');
			var session = aceEditor.getSession();
			_aceEditor = aceEditor;
			aceEditor.setTheme('ace/theme/tomorrow');
			session.setMode('ace/mode/markdown');
			session.setUseWrapMode(true);
			aceEditor.renderer.setHScrollBarAlwaysVisible(false);
			aceEditor.renderer.setShowGutter(false);
			aceEditor.renderer.setPadding(20);
			aceEditor.setShowPrintMargin(false);
			aceEditor.$blockScrolling = Infinity;
			aceEditor.on('input', () => {
				_content = aceEditor.getValue();
				this.$store.dispatch('changeCurrentNoteContent', _content);
				// eventHub.$emit('currentNoteContentChange', content);
			});
	
			// 同步滚动
			session.on('changeScrollTop', scroll => {
				let targetRow = aceEditor.getFirstVisibleRow();
				this.$store.dispatch('syncScroll', targetRow);
			});
			// if(timing && Date.now() - waitStart < 100) clearTimeout(timing);
			// timing = setTimeout(function(){
			// console.log(targetRow,scrollMap[targetRow]);
			/*animatedScroll($preview, scrollMap[targetRow], 500);
	  waitStart = Date.now();
	  timing = 0;*/
			// },100);
			// console.log('scroll',scroll);
	
			// 重新计算大小
			setTimeout(function () {
				aceEditor.resize();
			}, 0);
		}
	};
	module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = require("brace");

/***/ },
/* 25 */
/***/ function(module, exports) {

	ace.define("ace/theme/tomorrow",["require","exports","module","ace/lib/dom"], function(acequire, exports, module) {
	
	exports.isDark = false;
	exports.cssClass = "ace-tomorrow";
	exports.cssText = ".ace-tomorrow .ace_gutter {\
	background: #f6f6f6;\
	color: #4D4D4C\
	}\
	.ace-tomorrow .ace_print-margin {\
	width: 1px;\
	background: #f6f6f6\
	}\
	.ace-tomorrow {\
	background-color: #FFFFFF;\
	color: #4D4D4C\
	}\
	.ace-tomorrow .ace_cursor {\
	color: #AEAFAD\
	}\
	.ace-tomorrow .ace_marker-layer .ace_selection {\
	background: #D6D6D6\
	}\
	.ace-tomorrow.ace_multiselect .ace_selection.ace_start {\
	box-shadow: 0 0 3px 0px #FFFFFF;\
	}\
	.ace-tomorrow .ace_marker-layer .ace_step {\
	background: rgb(255, 255, 0)\
	}\
	.ace-tomorrow .ace_marker-layer .ace_bracket {\
	margin: -1px 0 0 -1px;\
	border: 1px solid #D1D1D1\
	}\
	.ace-tomorrow .ace_marker-layer .ace_active-line {\
	background: #EFEFEF\
	}\
	.ace-tomorrow .ace_gutter-active-line {\
	background-color : #dcdcdc\
	}\
	.ace-tomorrow .ace_marker-layer .ace_selected-word {\
	border: 1px solid #D6D6D6\
	}\
	.ace-tomorrow .ace_invisible {\
	color: #D1D1D1\
	}\
	.ace-tomorrow .ace_keyword,\
	.ace-tomorrow .ace_meta,\
	.ace-tomorrow .ace_storage,\
	.ace-tomorrow .ace_storage.ace_type,\
	.ace-tomorrow .ace_support.ace_type {\
	color: #8959A8\
	}\
	.ace-tomorrow .ace_keyword.ace_operator {\
	color: #3E999F\
	}\
	.ace-tomorrow .ace_constant.ace_character,\
	.ace-tomorrow .ace_constant.ace_language,\
	.ace-tomorrow .ace_constant.ace_numeric,\
	.ace-tomorrow .ace_keyword.ace_other.ace_unit,\
	.ace-tomorrow .ace_support.ace_constant,\
	.ace-tomorrow .ace_variable.ace_parameter {\
	color: #F5871F\
	}\
	.ace-tomorrow .ace_constant.ace_other {\
	color: #666969\
	}\
	.ace-tomorrow .ace_invalid {\
	color: #FFFFFF;\
	background-color: #C82829\
	}\
	.ace-tomorrow .ace_invalid.ace_deprecated {\
	color: #FFFFFF;\
	background-color: #8959A8\
	}\
	.ace-tomorrow .ace_fold {\
	background-color: #4271AE;\
	border-color: #4D4D4C\
	}\
	.ace-tomorrow .ace_entity.ace_name.ace_function,\
	.ace-tomorrow .ace_support.ace_function,\
	.ace-tomorrow .ace_variable {\
	color: #4271AE\
	}\
	.ace-tomorrow .ace_support.ace_class,\
	.ace-tomorrow .ace_support.ace_type {\
	color: #C99E00\
	}\
	.ace-tomorrow .ace_heading,\
	.ace-tomorrow .ace_markup.ace_heading,\
	.ace-tomorrow .ace_string {\
	color: #718C00\
	}\
	.ace-tomorrow .ace_entity.ace_name.ace_tag,\
	.ace-tomorrow .ace_entity.ace_other.ace_attribute-name,\
	.ace-tomorrow .ace_meta.ace_tag,\
	.ace-tomorrow .ace_string.ace_regexp,\
	.ace-tomorrow .ace_variable {\
	color: #C82829\
	}\
	.ace-tomorrow .ace_comment {\
	color: #8E908C\
	}\
	.ace-tomorrow .ace_indent-guide {\
	background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bdu3f/BwAlfgctduB85QAAAABJRU5ErkJggg==) right repeat-y\
	}";
	
	var dom = acequire("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass);
	});


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	ace.define("ace/mode/doc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"], function(acequire, exports, module) {
	"use strict";
	
	var oop = acequire("../lib/oop");
	var TextHighlightRules = acequire("./text_highlight_rules").TextHighlightRules;
	
	var DocCommentHighlightRules = function() {
	    this.$rules = {
	        "start" : [ {
	            token : "comment.doc.tag",
	            regex : "@[\\w\\d_]+" // TODO: fix email addresses
	        }, 
	        DocCommentHighlightRules.getTagRule(),
	        {
	            defaultToken : "comment.doc",
	            caseInsensitive: true
	        }]
	    };
	};
	
	oop.inherits(DocCommentHighlightRules, TextHighlightRules);
	
	DocCommentHighlightRules.getTagRule = function(start) {
	    return {
	        token : "comment.doc.tag.storage.type",
	        regex : "\\b(?:TODO|FIXME|XXX|HACK)\\b"
	    };
	}
	
	DocCommentHighlightRules.getStartRule = function(start) {
	    return {
	        token : "comment.doc", // doc comment
	        regex : "\\/\\*(?=\\*)",
	        next  : start
	    };
	};
	
	DocCommentHighlightRules.getEndRule = function (start) {
	    return {
	        token : "comment.doc", // closing comment
	        regex : "\\*\\/",
	        next  : start
	    };
	};
	
	
	exports.DocCommentHighlightRules = DocCommentHighlightRules;
	
	});
	
	ace.define("ace/mode/javascript_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"], function(acequire, exports, module) {
	"use strict";
	
	var oop = acequire("../lib/oop");
	var DocCommentHighlightRules = acequire("./doc_comment_highlight_rules").DocCommentHighlightRules;
	var TextHighlightRules = acequire("./text_highlight_rules").TextHighlightRules;
	var identifierRe = "[a-zA-Z\\$_\u00a1-\uffff][a-zA-Z\\d\\$_\u00a1-\uffff]*\\b";
	
	var JavaScriptHighlightRules = function(options) {
	    var keywordMapper = this.createKeywordMapper({
	        "variable.language":
	            "Array|Boolean|Date|Function|Iterator|Number|Object|RegExp|String|Proxy|"  + // Constructors
	            "Namespace|QName|XML|XMLList|"                                             + // E4X
	            "ArrayBuffer|Float32Array|Float64Array|Int16Array|Int32Array|Int8Array|"   +
	            "Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray|"                    +
	            "Error|EvalError|InternalError|RangeError|ReferenceError|StopIteration|"   + // Errors
	            "SyntaxError|TypeError|URIError|"                                          +
	            "decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|eval|isFinite|" + // Non-constructor functions
	            "isNaN|parseFloat|parseInt|"                                               +
	            "JSON|Math|"                                                               + // Other
	            "this|arguments|prototype|window|document"                                 , // Pseudo
	        "keyword":
	            "const|yield|import|get|set|" +
	            "break|case|catch|continue|default|delete|do|else|finally|for|function|" +
	            "if|in|instanceof|new|return|switch|throw|try|typeof|let|var|while|with|debugger|" +
	            "__parent__|__count__|escape|unescape|with|__proto__|" +
	            "class|enum|extends|super|export|implements|private|public|interface|package|protected|static",
	        "storage.type":
	            "const|let|var|function",
	        "constant.language":
	            "null|Infinity|NaN|undefined",
	        "support.function":
	            "alert",
	        "constant.language.boolean": "true|false"
	    }, "identifier");
	    var kwBeforeRe = "case|do|else|finally|in|instanceof|return|throw|try|typeof|yield|void";
	
	    var escapedRe = "\\\\(?:x[0-9a-fA-F]{2}|" + // hex
	        "u[0-9a-fA-F]{4}|" + // unicode
	        "[0-2][0-7]{0,2}|" + // oct
	        "3[0-6][0-7]?|" + // oct
	        "37[0-7]?|" + // oct
	        "[4-7][0-7]?|" + //oct
	        ".)";
	
	    this.$rules = {
	        "no_regex" : [
	            {
	                token : "comment",
	                regex : "\\/\\/",
	                next : "line_comment"
	            },
	            DocCommentHighlightRules.getStartRule("doc-start"),
	            {
	                token : "comment", // multi line comment
	                regex : /\/\*/,
	                next : "comment"
	            }, {
	                token : "string",
	                regex : "'(?=.)",
	                next  : "qstring"
	            }, {
	                token : "string",
	                regex : '"(?=.)',
	                next  : "qqstring"
	            }, {
	                token : "constant.numeric", // hex
	                regex : /0[xX][0-9a-fA-F]+\b/
	            }, {
	                token : "constant.numeric", // float
	                regex : /[+-]?\d+(?:(?:\.\d*)?(?:[eE][+-]?\d+)?)?\b/
	            }, {
	                token : [
	                    "storage.type", "punctuation.operator", "support.function",
	                    "punctuation.operator", "entity.name.function", "text","keyword.operator"
	                ],
	                regex : "(" + identifierRe + ")(\\.)(prototype)(\\.)(" + identifierRe +")(\\s*)(=)",
	                next: "function_arguments"
	            }, {
	                token : [
	                    "storage.type", "punctuation.operator", "entity.name.function", "text",
	                    "keyword.operator", "text", "storage.type", "text", "paren.lparen"
	                ],
	                regex : "(" + identifierRe + ")(\\.)(" + identifierRe +")(\\s*)(=)(\\s*)(function)(\\s*)(\\()",
	                next: "function_arguments"
	            }, {
	                token : [
	                    "entity.name.function", "text", "keyword.operator", "text", "storage.type",
	                    "text", "paren.lparen"
	                ],
	                regex : "(" + identifierRe +")(\\s*)(=)(\\s*)(function)(\\s*)(\\()",
	                next: "function_arguments"
	            }, {
	                token : [
	                    "storage.type", "punctuation.operator", "entity.name.function", "text",
	                    "keyword.operator", "text",
	                    "storage.type", "text", "entity.name.function", "text", "paren.lparen"
	                ],
	                regex : "(" + identifierRe + ")(\\.)(" + identifierRe +")(\\s*)(=)(\\s*)(function)(\\s+)(\\w+)(\\s*)(\\()",
	                next: "function_arguments"
	            }, {
	                token : [
	                    "storage.type", "text", "entity.name.function", "text", "paren.lparen"
	                ],
	                regex : "(function)(\\s+)(" + identifierRe + ")(\\s*)(\\()",
	                next: "function_arguments"
	            }, {
	                token : [
	                    "entity.name.function", "text", "punctuation.operator",
	                    "text", "storage.type", "text", "paren.lparen"
	                ],
	                regex : "(" + identifierRe + ")(\\s*)(:)(\\s*)(function)(\\s*)(\\()",
	                next: "function_arguments"
	            }, {
	                token : [
	                    "text", "text", "storage.type", "text", "paren.lparen"
	                ],
	                regex : "(:)(\\s*)(function)(\\s*)(\\()",
	                next: "function_arguments"
	            }, {
	                token : "keyword",
	                regex : "(?:" + kwBeforeRe + ")\\b",
	                next : "start"
	            }, {
	                token : ["support.constant"],
	                regex : /that\b/
	            }, {
	                token : ["storage.type", "punctuation.operator", "support.function.firebug"],
	                regex : /(console)(\.)(warn|info|log|error|time|trace|timeEnd|assert)\b/
	            }, {
	                token : keywordMapper,
	                regex : identifierRe
	            }, {
	                token : "punctuation.operator",
	                regex : /[.](?![.])/,
	                next  : "property"
	            }, {
	                token : "keyword.operator",
	                regex : /--|\+\+|\.{3}|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\|\||\?\:|[!$%&*+\-~\/^]=?/,
	                next  : "start"
	            }, {
	                token : "punctuation.operator",
	                regex : /[?:,;.]/,
	                next  : "start"
	            }, {
	                token : "paren.lparen",
	                regex : /[\[({]/,
	                next  : "start"
	            }, {
	                token : "paren.rparen",
	                regex : /[\])}]/
	            }, {
	                token: "comment",
	                regex: /^#!.*$/
	            }
	        ],
	        property: [{
	                token : "text",
	                regex : "\\s+"
	            }, {
	                token : [
	                    "storage.type", "punctuation.operator", "entity.name.function", "text",
	                    "keyword.operator", "text",
	                    "storage.type", "text", "entity.name.function", "text", "paren.lparen"
	                ],
	                regex : "(" + identifierRe + ")(\\.)(" + identifierRe +")(\\s*)(=)(\\s*)(function)(?:(\\s+)(\\w+))?(\\s*)(\\()",
	                next: "function_arguments"
	            }, {
	                token : "punctuation.operator",
	                regex : /[.](?![.])/
	            }, {
	                token : "support.function",
	                regex : /(s(?:h(?:ift|ow(?:Mod(?:elessDialog|alDialog)|Help))|croll(?:X|By(?:Pages|Lines)?|Y|To)?|t(?:op|rike)|i(?:n|zeToContent|debar|gnText)|ort|u(?:p|b(?:str(?:ing)?)?)|pli(?:ce|t)|e(?:nd|t(?:Re(?:sizable|questHeader)|M(?:i(?:nutes|lliseconds)|onth)|Seconds|Ho(?:tKeys|urs)|Year|Cursor|Time(?:out)?|Interval|ZOptions|Date|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Date|FullYear)|FullYear|Active)|arch)|qrt|lice|avePreferences|mall)|h(?:ome|andleEvent)|navigate|c(?:har(?:CodeAt|At)|o(?:s|n(?:cat|textual|firm)|mpile)|eil|lear(?:Timeout|Interval)?|a(?:ptureEvents|ll)|reate(?:StyleSheet|Popup|EventObject))|t(?:o(?:GMTString|S(?:tring|ource)|U(?:TCString|pperCase)|Lo(?:caleString|werCase))|est|a(?:n|int(?:Enabled)?))|i(?:s(?:NaN|Finite)|ndexOf|talics)|d(?:isableExternalCapture|ump|etachEvent)|u(?:n(?:shift|taint|escape|watch)|pdateCommands)|j(?:oin|avaEnabled)|p(?:o(?:p|w)|ush|lugins.refresh|a(?:ddings|rse(?:Int|Float)?)|r(?:int|ompt|eference))|e(?:scape|nableExternalCapture|val|lementFromPoint|x(?:p|ec(?:Script|Command)?))|valueOf|UTC|queryCommand(?:State|Indeterm|Enabled|Value)|f(?:i(?:nd|le(?:ModifiedDate|Size|CreatedDate|UpdatedDate)|xed)|o(?:nt(?:size|color)|rward)|loor|romCharCode)|watch|l(?:ink|o(?:ad|g)|astIndexOf)|a(?:sin|nchor|cos|t(?:tachEvent|ob|an(?:2)?)|pply|lert|b(?:s|ort))|r(?:ou(?:nd|teEvents)|e(?:size(?:By|To)|calc|turnValue|place|verse|l(?:oad|ease(?:Capture|Events)))|andom)|g(?:o|et(?:ResponseHeader|M(?:i(?:nutes|lliseconds)|onth)|Se(?:conds|lection)|Hours|Year|Time(?:zoneOffset)?|Da(?:y|te)|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Da(?:y|te)|FullYear)|FullYear|A(?:ttention|llResponseHeaders)))|m(?:in|ove(?:B(?:y|elow)|To(?:Absolute)?|Above)|ergeAttributes|a(?:tch|rgins|x))|b(?:toa|ig|o(?:ld|rderWidths)|link|ack))\b(?=\()/
	            }, {
	                token : "support.function.dom",
	                regex : /(s(?:ub(?:stringData|mit)|plitText|e(?:t(?:NamedItem|Attribute(?:Node)?)|lect))|has(?:ChildNodes|Feature)|namedItem|c(?:l(?:ick|o(?:se|neNode))|reate(?:C(?:omment|DATASection|aption)|T(?:Head|extNode|Foot)|DocumentFragment|ProcessingInstruction|E(?:ntityReference|lement)|Attribute))|tabIndex|i(?:nsert(?:Row|Before|Cell|Data)|tem)|open|delete(?:Row|C(?:ell|aption)|T(?:Head|Foot)|Data)|focus|write(?:ln)?|a(?:dd|ppend(?:Child|Data))|re(?:set|place(?:Child|Data)|move(?:NamedItem|Child|Attribute(?:Node)?)?)|get(?:NamedItem|Element(?:sBy(?:Name|TagName|ClassName)|ById)|Attribute(?:Node)?)|blur)\b(?=\()/
	            }, {
	                token :  "support.constant",
	                regex : /(s(?:ystemLanguage|cr(?:ipts|ollbars|een(?:X|Y|Top|Left))|t(?:yle(?:Sheets)?|atus(?:Text|bar)?)|ibling(?:Below|Above)|ource|uffixes|e(?:curity(?:Policy)?|l(?:ection|f)))|h(?:istory|ost(?:name)?|as(?:h|Focus))|y|X(?:MLDocument|SLDocument)|n(?:ext|ame(?:space(?:s|URI)|Prop))|M(?:IN_VALUE|AX_VALUE)|c(?:haracterSet|o(?:n(?:structor|trollers)|okieEnabled|lorDepth|mp(?:onents|lete))|urrent|puClass|l(?:i(?:p(?:boardData)?|entInformation)|osed|asses)|alle(?:e|r)|rypto)|t(?:o(?:olbar|p)|ext(?:Transform|Indent|Decoration|Align)|ags)|SQRT(?:1_2|2)|i(?:n(?:ner(?:Height|Width)|put)|ds|gnoreCase)|zIndex|o(?:scpu|n(?:readystatechange|Line)|uter(?:Height|Width)|p(?:sProfile|ener)|ffscreenBuffering)|NEGATIVE_INFINITY|d(?:i(?:splay|alog(?:Height|Top|Width|Left|Arguments)|rectories)|e(?:scription|fault(?:Status|Ch(?:ecked|arset)|View)))|u(?:ser(?:Profile|Language|Agent)|n(?:iqueID|defined)|pdateInterval)|_content|p(?:ixelDepth|ort|ersonalbar|kcs11|l(?:ugins|atform)|a(?:thname|dding(?:Right|Bottom|Top|Left)|rent(?:Window|Layer)?|ge(?:X(?:Offset)?|Y(?:Offset)?))|r(?:o(?:to(?:col|type)|duct(?:Sub)?|mpter)|e(?:vious|fix)))|e(?:n(?:coding|abledPlugin)|x(?:ternal|pando)|mbeds)|v(?:isibility|endor(?:Sub)?|Linkcolor)|URLUnencoded|P(?:I|OSITIVE_INFINITY)|f(?:ilename|o(?:nt(?:Size|Family|Weight)|rmName)|rame(?:s|Element)|gColor)|E|whiteSpace|l(?:i(?:stStyleType|n(?:eHeight|kColor))|o(?:ca(?:tion(?:bar)?|lName)|wsrc)|e(?:ngth|ft(?:Context)?)|a(?:st(?:M(?:odified|atch)|Index|Paren)|yer(?:s|X)|nguage))|a(?:pp(?:MinorVersion|Name|Co(?:deName|re)|Version)|vail(?:Height|Top|Width|Left)|ll|r(?:ity|guments)|Linkcolor|bove)|r(?:ight(?:Context)?|e(?:sponse(?:XML|Text)|adyState))|global|x|m(?:imeTypes|ultiline|enubar|argin(?:Right|Bottom|Top|Left))|L(?:N(?:10|2)|OG(?:10E|2E))|b(?:o(?:ttom|rder(?:Width|RightWidth|BottomWidth|Style|Color|TopWidth|LeftWidth))|ufferDepth|elow|ackground(?:Color|Image)))\b/
	            }, {
	                token : "identifier",
	                regex : identifierRe
	            }, {
	                regex: "",
	                token: "empty",
	                next: "no_regex"
	            }
	        ],
	        "start": [
	            DocCommentHighlightRules.getStartRule("doc-start"),
	            {
	                token : "comment", // multi line comment
	                regex : "\\/\\*",
	                next : "comment_regex_allowed"
	            }, {
	                token : "comment",
	                regex : "\\/\\/",
	                next : "line_comment_regex_allowed"
	            }, {
	                token: "string.regexp",
	                regex: "\\/",
	                next: "regex"
	            }, {
	                token : "text",
	                regex : "\\s+|^$",
	                next : "start"
	            }, {
	                token: "empty",
	                regex: "",
	                next: "no_regex"
	            }
	        ],
	        "regex": [
	            {
	                token: "regexp.keyword.operator",
	                regex: "\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"
	            }, {
	                token: "string.regexp",
	                regex: "/[sxngimy]*",
	                next: "no_regex"
	            }, {
	                token : "invalid",
	                regex: /\{\d+\b,?\d*\}[+*]|[+*$^?][+*]|[$^][?]|\?{3,}/
	            }, {
	                token : "constant.language.escape",
	                regex: /\(\?[:=!]|\)|\{\d+\b,?\d*\}|[+*]\?|[()$^+*?.]/
	            }, {
	                token : "constant.language.delimiter",
	                regex: /\|/
	            }, {
	                token: "constant.language.escape",
	                regex: /\[\^?/,
	                next: "regex_character_class"
	            }, {
	                token: "empty",
	                regex: "$",
	                next: "no_regex"
	            }, {
	                defaultToken: "string.regexp"
	            }
	        ],
	        "regex_character_class": [
	            {
	                token: "regexp.charclass.keyword.operator",
	                regex: "\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"
	            }, {
	                token: "constant.language.escape",
	                regex: "]",
	                next: "regex"
	            }, {
	                token: "constant.language.escape",
	                regex: "-"
	            }, {
	                token: "empty",
	                regex: "$",
	                next: "no_regex"
	            }, {
	                defaultToken: "string.regexp.charachterclass"
	            }
	        ],
	        "function_arguments": [
	            {
	                token: "variable.parameter",
	                regex: identifierRe
	            }, {
	                token: "punctuation.operator",
	                regex: "[, ]+"
	            }, {
	                token: "punctuation.operator",
	                regex: "$"
	            }, {
	                token: "empty",
	                regex: "",
	                next: "no_regex"
	            }
	        ],
	        "comment_regex_allowed" : [
	            DocCommentHighlightRules.getTagRule(),
	            {token : "comment", regex : "\\*\\/", next : "start"},
	            {defaultToken : "comment", caseInsensitive: true}
	        ],
	        "comment" : [
	            DocCommentHighlightRules.getTagRule(),
	            {token : "comment", regex : "\\*\\/", next : "no_regex"},
	            {defaultToken : "comment", caseInsensitive: true}
	        ],
	        "line_comment_regex_allowed" : [
	            DocCommentHighlightRules.getTagRule(),
	            {token : "comment", regex : "$|^", next : "start"},
	            {defaultToken : "comment", caseInsensitive: true}
	        ],
	        "line_comment" : [
	            DocCommentHighlightRules.getTagRule(),
	            {token : "comment", regex : "$|^", next : "no_regex"},
	            {defaultToken : "comment", caseInsensitive: true}
	        ],
	        "qqstring" : [
	            {
	                token : "constant.language.escape",
	                regex : escapedRe
	            }, {
	                token : "string",
	                regex : "\\\\$",
	                next  : "qqstring"
	            }, {
	                token : "string",
	                regex : '"|$',
	                next  : "no_regex"
	            }, {
	                defaultToken: "string"
	            }
	        ],
	        "qstring" : [
	            {
	                token : "constant.language.escape",
	                regex : escapedRe
	            }, {
	                token : "string",
	                regex : "\\\\$",
	                next  : "qstring"
	            }, {
	                token : "string",
	                regex : "'|$",
	                next  : "no_regex"
	            }, {
	                defaultToken: "string"
	            }
	        ]
	    };
	    
	    
	    if (!options || !options.noES6) {
	        this.$rules.no_regex.unshift({
	            regex: "[{}]", onMatch: function(val, state, stack) {
	                this.next = val == "{" ? this.nextState : "";
	                if (val == "{" && stack.length) {
	                    stack.unshift("start", state);
	                    return "paren";
	                }
	                if (val == "}" && stack.length) {
	                    stack.shift();
	                    this.next = stack.shift();
	                    if (this.next.indexOf("string") != -1 || this.next.indexOf("jsx") != -1)
	                        return "paren.quasi.end";
	                }
	                return val == "{" ? "paren.lparen" : "paren.rparen";
	            },
	            nextState: "start"
	        }, {
	            token : "string.quasi.start",
	            regex : /`/,
	            push  : [{
	                token : "constant.language.escape",
	                regex : escapedRe
	            }, {
	                token : "paren.quasi.start",
	                regex : /\${/,
	                push  : "start"
	            }, {
	                token : "string.quasi.end",
	                regex : /`/,
	                next  : "pop"
	            }, {
	                defaultToken: "string.quasi"
	            }]
	        });
	        
	        if (!options || !options.noJSX)
	            JSX.call(this);
	    }
	    
	    this.embedRules(DocCommentHighlightRules, "doc-",
	        [ DocCommentHighlightRules.getEndRule("no_regex") ]);
	    
	    this.normalizeRules();
	};
	
	oop.inherits(JavaScriptHighlightRules, TextHighlightRules);
	
	function JSX() {
	    var tagRegex = identifierRe.replace("\\d", "\\d\\-");
	    var jsxTag = {
	        onMatch : function(val, state, stack) {
	            var offset = val.charAt(1) == "/" ? 2 : 1;
	            if (offset == 1) {
	                if (state != this.nextState)
	                    stack.unshift(this.next, this.nextState, 0);
	                else
	                    stack.unshift(this.next);
	                stack[2]++;
	            } else if (offset == 2) {
	                if (state == this.nextState) {
	                    stack[1]--;
	                    if (!stack[1] || stack[1] < 0) {
	                        stack.shift();
	                        stack.shift();
	                    }
	                }
	            }
	            return [{
	                type: "meta.tag.punctuation." + (offset == 1 ? "" : "end-") + "tag-open.xml",
	                value: val.slice(0, offset)
	            }, {
	                type: "meta.tag.tag-name.xml",
	                value: val.substr(offset)
	            }];
	        },
	        regex : "</?" + tagRegex + "",
	        next: "jsxAttributes",
	        nextState: "jsx"
	    };
	    this.$rules.start.unshift(jsxTag);
	    var jsxJsRule = {
	        regex: "{",
	        token: "paren.quasi.start",
	        push: "start"
	    };
	    this.$rules.jsx = [
	        jsxJsRule,
	        jsxTag,
	        {include : "reference"},
	        {defaultToken: "string"}
	    ];
	    this.$rules.jsxAttributes = [{
	        token : "meta.tag.punctuation.tag-close.xml", 
	        regex : "/?>", 
	        onMatch : function(value, currentState, stack) {
	            if (currentState == stack[0])
	                stack.shift();
	            if (value.length == 2) {
	                if (stack[0] == this.nextState)
	                    stack[1]--;
	                if (!stack[1] || stack[1] < 0) {
	                    stack.splice(0, 2);
	                }
	            }
	            this.next = stack[0] || "start";
	            return [{type: this.token, value: value}];
	        },
	        nextState: "jsx"
	    }, 
	    jsxJsRule,
	    {
	        token : "entity.other.attribute-name.xml",
	        regex : tagRegex
	    }, {
	        token : "keyword.operator.attribute-equals.xml",
	        regex : "="
	    }, {
	        token : "text.tag-whitespace.xml",
	        regex : "\\s+"
	    }, {
	        token : "string.attribute-value.xml",
	        regex : "'",
	        stateName : "jsx_attr_q",
	        push : [
	            {token : "string.attribute-value.xml", regex: "'", next: "pop"},
	            jsxJsRule,
	            {include : "reference"},
	            {defaultToken : "string.attribute-value.xml"}
	        ]
	    }, {
	        token : "string.attribute-value.xml",
	        regex : '"',
	        stateName : "jsx_attr_qq",
	        push : [
	            jsxJsRule,
	            {token : "string.attribute-value.xml", regex: '"', next: "pop"},
	            {include : "reference"},
	            {defaultToken : "string.attribute-value.xml"}
	        ]
	    }];
	    this.$rules.reference = [{
	        token : "constant.language.escape.reference.xml",
	        regex : "(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"
	    }];
	}
	
	exports.JavaScriptHighlightRules = JavaScriptHighlightRules;
	});
	
	ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"], function(acequire, exports, module) {
	"use strict";
	
	var Range = acequire("../range").Range;
	
	var MatchingBraceOutdent = function() {};
	
	(function() {
	
	    this.checkOutdent = function(line, input) {
	        if (! /^\s+$/.test(line))
	            return false;
	
	        return /^\s*\}/.test(input);
	    };
	
	    this.autoOutdent = function(doc, row) {
	        var line = doc.getLine(row);
	        var match = line.match(/^(\s*\})/);
	
	        if (!match) return 0;
	
	        var column = match[1].length;
	        var openBracePos = doc.findMatchingBracket({row: row, column: column});
	
	        if (!openBracePos || openBracePos.row == row) return 0;
	
	        var indent = this.$getIndent(doc.getLine(openBracePos.row));
	        doc.replace(new Range(row, 0, row, column-1), indent);
	    };
	
	    this.$getIndent = function(line) {
	        return line.match(/^\s*/)[0];
	    };
	
	}).call(MatchingBraceOutdent.prototype);
	
	exports.MatchingBraceOutdent = MatchingBraceOutdent;
	});
	
	ace.define("ace/mode/behaviour/cstyle",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/token_iterator","ace/lib/lang"], function(acequire, exports, module) {
	"use strict";
	
	var oop = acequire("../../lib/oop");
	var Behaviour = acequire("../behaviour").Behaviour;
	var TokenIterator = acequire("../../token_iterator").TokenIterator;
	var lang = acequire("../../lib/lang");
	
	var SAFE_INSERT_IN_TOKENS =
	    ["text", "paren.rparen", "punctuation.operator"];
	var SAFE_INSERT_BEFORE_TOKENS =
	    ["text", "paren.rparen", "punctuation.operator", "comment"];
	
	var context;
	var contextCache = {};
	var initContext = function(editor) {
	    var id = -1;
	    if (editor.multiSelect) {
	        id = editor.selection.index;
	        if (contextCache.rangeCount != editor.multiSelect.rangeCount)
	            contextCache = {rangeCount: editor.multiSelect.rangeCount};
	    }
	    if (contextCache[id])
	        return context = contextCache[id];
	    context = contextCache[id] = {
	        autoInsertedBrackets: 0,
	        autoInsertedRow: -1,
	        autoInsertedLineEnd: "",
	        maybeInsertedBrackets: 0,
	        maybeInsertedRow: -1,
	        maybeInsertedLineStart: "",
	        maybeInsertedLineEnd: ""
	    };
	};
	
	var getWrapped = function(selection, selected, opening, closing) {
	    var rowDiff = selection.end.row - selection.start.row;
	    return {
	        text: opening + selected + closing,
	        selection: [
	                0,
	                selection.start.column + 1,
	                rowDiff,
	                selection.end.column + (rowDiff ? 0 : 1)
	            ]
	    };
	};
	
	var CstyleBehaviour = function() {
	    this.add("braces", "insertion", function(state, action, editor, session, text) {
	        var cursor = editor.getCursorPosition();
	        var line = session.doc.getLine(cursor.row);
	        if (text == '{') {
	            initContext(editor);
	            var selection = editor.getSelectionRange();
	            var selected = session.doc.getTextRange(selection);
	            if (selected !== "" && selected !== "{" && editor.getWrapBehavioursEnabled()) {
	                return getWrapped(selection, selected, '{', '}');
	            } else if (CstyleBehaviour.isSaneInsertion(editor, session)) {
	                if (/[\]\}\)]/.test(line[cursor.column]) || editor.inMultiSelectMode) {
	                    CstyleBehaviour.recordAutoInsert(editor, session, "}");
	                    return {
	                        text: '{}',
	                        selection: [1, 1]
	                    };
	                } else {
	                    CstyleBehaviour.recordMaybeInsert(editor, session, "{");
	                    return {
	                        text: '{',
	                        selection: [1, 1]
	                    };
	                }
	            }
	        } else if (text == '}') {
	            initContext(editor);
	            var rightChar = line.substring(cursor.column, cursor.column + 1);
	            if (rightChar == '}') {
	                var matching = session.$findOpeningBracket('}', {column: cursor.column + 1, row: cursor.row});
	                if (matching !== null && CstyleBehaviour.isAutoInsertedClosing(cursor, line, text)) {
	                    CstyleBehaviour.popAutoInsertedClosing();
	                    return {
	                        text: '',
	                        selection: [1, 1]
	                    };
	                }
	            }
	        } else if (text == "\n" || text == "\r\n") {
	            initContext(editor);
	            var closing = "";
	            if (CstyleBehaviour.isMaybeInsertedClosing(cursor, line)) {
	                closing = lang.stringRepeat("}", context.maybeInsertedBrackets);
	                CstyleBehaviour.clearMaybeInsertedClosing();
	            }
	            var rightChar = line.substring(cursor.column, cursor.column + 1);
	            if (rightChar === '}') {
	                var openBracePos = session.findMatchingBracket({row: cursor.row, column: cursor.column+1}, '}');
	                if (!openBracePos)
	                     return null;
	                var next_indent = this.$getIndent(session.getLine(openBracePos.row));
	            } else if (closing) {
	                var next_indent = this.$getIndent(line);
	            } else {
	                CstyleBehaviour.clearMaybeInsertedClosing();
	                return;
	            }
	            var indent = next_indent + session.getTabString();
	
	            return {
	                text: '\n' + indent + '\n' + next_indent + closing,
	                selection: [1, indent.length, 1, indent.length]
	            };
	        } else {
	            CstyleBehaviour.clearMaybeInsertedClosing();
	        }
	    });
	
	    this.add("braces", "deletion", function(state, action, editor, session, range) {
	        var selected = session.doc.getTextRange(range);
	        if (!range.isMultiLine() && selected == '{') {
	            initContext(editor);
	            var line = session.doc.getLine(range.start.row);
	            var rightChar = line.substring(range.end.column, range.end.column + 1);
	            if (rightChar == '}') {
	                range.end.column++;
	                return range;
	            } else {
	                context.maybeInsertedBrackets--;
	            }
	        }
	    });
	
	    this.add("parens", "insertion", function(state, action, editor, session, text) {
	        if (text == '(') {
	            initContext(editor);
	            var selection = editor.getSelectionRange();
	            var selected = session.doc.getTextRange(selection);
	            if (selected !== "" && editor.getWrapBehavioursEnabled()) {
	                return getWrapped(selection, selected, '(', ')');
	            } else if (CstyleBehaviour.isSaneInsertion(editor, session)) {
	                CstyleBehaviour.recordAutoInsert(editor, session, ")");
	                return {
	                    text: '()',
	                    selection: [1, 1]
	                };
	            }
	        } else if (text == ')') {
	            initContext(editor);
	            var cursor = editor.getCursorPosition();
	            var line = session.doc.getLine(cursor.row);
	            var rightChar = line.substring(cursor.column, cursor.column + 1);
	            if (rightChar == ')') {
	                var matching = session.$findOpeningBracket(')', {column: cursor.column + 1, row: cursor.row});
	                if (matching !== null && CstyleBehaviour.isAutoInsertedClosing(cursor, line, text)) {
	                    CstyleBehaviour.popAutoInsertedClosing();
	                    return {
	                        text: '',
	                        selection: [1, 1]
	                    };
	                }
	            }
	        }
	    });
	
	    this.add("parens", "deletion", function(state, action, editor, session, range) {
	        var selected = session.doc.getTextRange(range);
	        if (!range.isMultiLine() && selected == '(') {
	            initContext(editor);
	            var line = session.doc.getLine(range.start.row);
	            var rightChar = line.substring(range.start.column + 1, range.start.column + 2);
	            if (rightChar == ')') {
	                range.end.column++;
	                return range;
	            }
	        }
	    });
	
	    this.add("brackets", "insertion", function(state, action, editor, session, text) {
	        if (text == '[') {
	            initContext(editor);
	            var selection = editor.getSelectionRange();
	            var selected = session.doc.getTextRange(selection);
	            if (selected !== "" && editor.getWrapBehavioursEnabled()) {
	                return getWrapped(selection, selected, '[', ']');
	            } else if (CstyleBehaviour.isSaneInsertion(editor, session)) {
	                CstyleBehaviour.recordAutoInsert(editor, session, "]");
	                return {
	                    text: '[]',
	                    selection: [1, 1]
	                };
	            }
	        } else if (text == ']') {
	            initContext(editor);
	            var cursor = editor.getCursorPosition();
	            var line = session.doc.getLine(cursor.row);
	            var rightChar = line.substring(cursor.column, cursor.column + 1);
	            if (rightChar == ']') {
	                var matching = session.$findOpeningBracket(']', {column: cursor.column + 1, row: cursor.row});
	                if (matching !== null && CstyleBehaviour.isAutoInsertedClosing(cursor, line, text)) {
	                    CstyleBehaviour.popAutoInsertedClosing();
	                    return {
	                        text: '',
	                        selection: [1, 1]
	                    };
	                }
	            }
	        }
	    });
	
	    this.add("brackets", "deletion", function(state, action, editor, session, range) {
	        var selected = session.doc.getTextRange(range);
	        if (!range.isMultiLine() && selected == '[') {
	            initContext(editor);
	            var line = session.doc.getLine(range.start.row);
	            var rightChar = line.substring(range.start.column + 1, range.start.column + 2);
	            if (rightChar == ']') {
	                range.end.column++;
	                return range;
	            }
	        }
	    });
	
	    this.add("string_dquotes", "insertion", function(state, action, editor, session, text) {
	        if (text == '"' || text == "'") {
	            initContext(editor);
	            var quote = text;
	            var selection = editor.getSelectionRange();
	            var selected = session.doc.getTextRange(selection);
	            if (selected !== "" && selected !== "'" && selected != '"' && editor.getWrapBehavioursEnabled()) {
	                return getWrapped(selection, selected, quote, quote);
	            } else if (!selected) {
	                var cursor = editor.getCursorPosition();
	                var line = session.doc.getLine(cursor.row);
	                var leftChar = line.substring(cursor.column-1, cursor.column);
	                var rightChar = line.substring(cursor.column, cursor.column + 1);
	                
	                var token = session.getTokenAt(cursor.row, cursor.column);
	                var rightToken = session.getTokenAt(cursor.row, cursor.column + 1);
	                if (leftChar == "\\" && token && /escape/.test(token.type))
	                    return null;
	                
	                var stringBefore = token && /string|escape/.test(token.type);
	                var stringAfter = !rightToken || /string|escape/.test(rightToken.type);
	                
	                var pair;
	                if (rightChar == quote) {
	                    pair = stringBefore !== stringAfter;
	                } else {
	                    if (stringBefore && !stringAfter)
	                        return null; // wrap string with different quote
	                    if (stringBefore && stringAfter)
	                        return null; // do not pair quotes inside strings
	                    var wordRe = session.$mode.tokenRe;
	                    wordRe.lastIndex = 0;
	                    var isWordBefore = wordRe.test(leftChar);
	                    wordRe.lastIndex = 0;
	                    var isWordAfter = wordRe.test(leftChar);
	                    if (isWordBefore || isWordAfter)
	                        return null; // before or after alphanumeric
	                    if (rightChar && !/[\s;,.})\]\\]/.test(rightChar))
	                        return null; // there is rightChar and it isn't closing
	                    pair = true;
	                }
	                return {
	                    text: pair ? quote + quote : "",
	                    selection: [1,1]
	                };
	            }
	        }
	    });
	
	    this.add("string_dquotes", "deletion", function(state, action, editor, session, range) {
	        var selected = session.doc.getTextRange(range);
	        if (!range.isMultiLine() && (selected == '"' || selected == "'")) {
	            initContext(editor);
	            var line = session.doc.getLine(range.start.row);
	            var rightChar = line.substring(range.start.column + 1, range.start.column + 2);
	            if (rightChar == selected) {
	                range.end.column++;
	                return range;
	            }
	        }
	    });
	
	};
	
	    
	CstyleBehaviour.isSaneInsertion = function(editor, session) {
	    var cursor = editor.getCursorPosition();
	    var iterator = new TokenIterator(session, cursor.row, cursor.column);
	    if (!this.$matchTokenType(iterator.getCurrentToken() || "text", SAFE_INSERT_IN_TOKENS)) {
	        var iterator2 = new TokenIterator(session, cursor.row, cursor.column + 1);
	        if (!this.$matchTokenType(iterator2.getCurrentToken() || "text", SAFE_INSERT_IN_TOKENS))
	            return false;
	    }
	    iterator.stepForward();
	    return iterator.getCurrentTokenRow() !== cursor.row ||
	        this.$matchTokenType(iterator.getCurrentToken() || "text", SAFE_INSERT_BEFORE_TOKENS);
	};
	
	CstyleBehaviour.$matchTokenType = function(token, types) {
	    return types.indexOf(token.type || token) > -1;
	};
	
	CstyleBehaviour.recordAutoInsert = function(editor, session, bracket) {
	    var cursor = editor.getCursorPosition();
	    var line = session.doc.getLine(cursor.row);
	    if (!this.isAutoInsertedClosing(cursor, line, context.autoInsertedLineEnd[0]))
	        context.autoInsertedBrackets = 0;
	    context.autoInsertedRow = cursor.row;
	    context.autoInsertedLineEnd = bracket + line.substr(cursor.column);
	    context.autoInsertedBrackets++;
	};
	
	CstyleBehaviour.recordMaybeInsert = function(editor, session, bracket) {
	    var cursor = editor.getCursorPosition();
	    var line = session.doc.getLine(cursor.row);
	    if (!this.isMaybeInsertedClosing(cursor, line))
	        context.maybeInsertedBrackets = 0;
	    context.maybeInsertedRow = cursor.row;
	    context.maybeInsertedLineStart = line.substr(0, cursor.column) + bracket;
	    context.maybeInsertedLineEnd = line.substr(cursor.column);
	    context.maybeInsertedBrackets++;
	};
	
	CstyleBehaviour.isAutoInsertedClosing = function(cursor, line, bracket) {
	    return context.autoInsertedBrackets > 0 &&
	        cursor.row === context.autoInsertedRow &&
	        bracket === context.autoInsertedLineEnd[0] &&
	        line.substr(cursor.column) === context.autoInsertedLineEnd;
	};
	
	CstyleBehaviour.isMaybeInsertedClosing = function(cursor, line) {
	    return context.maybeInsertedBrackets > 0 &&
	        cursor.row === context.maybeInsertedRow &&
	        line.substr(cursor.column) === context.maybeInsertedLineEnd &&
	        line.substr(0, cursor.column) == context.maybeInsertedLineStart;
	};
	
	CstyleBehaviour.popAutoInsertedClosing = function() {
	    context.autoInsertedLineEnd = context.autoInsertedLineEnd.substr(1);
	    context.autoInsertedBrackets--;
	};
	
	CstyleBehaviour.clearMaybeInsertedClosing = function() {
	    if (context) {
	        context.maybeInsertedBrackets = 0;
	        context.maybeInsertedRow = -1;
	    }
	};
	
	
	
	oop.inherits(CstyleBehaviour, Behaviour);
	
	exports.CstyleBehaviour = CstyleBehaviour;
	});
	
	ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"], function(acequire, exports, module) {
	"use strict";
	
	var oop = acequire("../../lib/oop");
	var Range = acequire("../../range").Range;
	var BaseFoldMode = acequire("./fold_mode").FoldMode;
	
	var FoldMode = exports.FoldMode = function(commentRegex) {
	    if (commentRegex) {
	        this.foldingStartMarker = new RegExp(
	            this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.start)
	        );
	        this.foldingStopMarker = new RegExp(
	            this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.end)
	        );
	    }
	};
	oop.inherits(FoldMode, BaseFoldMode);
	
	(function() {
	    
	    this.foldingStartMarker = /(\{|\[)[^\}\]]*$|^\s*(\/\*)/;
	    this.foldingStopMarker = /^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/;
	    this.singleLineBlockCommentRe= /^\s*(\/\*).*\*\/\s*$/;
	    this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/;
	    this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/;
	    this._getFoldWidgetBase = this.getFoldWidget;
	    this.getFoldWidget = function(session, foldStyle, row) {
	        var line = session.getLine(row);
	    
	        if (this.singleLineBlockCommentRe.test(line)) {
	            if (!this.startRegionRe.test(line) && !this.tripleStarBlockCommentRe.test(line))
	                return "";
	        }
	    
	        var fw = this._getFoldWidgetBase(session, foldStyle, row);
	    
	        if (!fw && this.startRegionRe.test(line))
	            return "start"; // lineCommentRegionStart
	    
	        return fw;
	    };
	
	    this.getFoldWidgetRange = function(session, foldStyle, row, forceMultiline) {
	        var line = session.getLine(row);
	        
	        if (this.startRegionRe.test(line))
	            return this.getCommentRegionBlock(session, line, row);
	        
	        var match = line.match(this.foldingStartMarker);
	        if (match) {
	            var i = match.index;
	
	            if (match[1])
	                return this.openingBracketBlock(session, match[1], row, i);
	                
	            var range = session.getCommentFoldRange(row, i + match[0].length, 1);
	            
	            if (range && !range.isMultiLine()) {
	                if (forceMultiline) {
	                    range = this.getSectionRange(session, row);
	                } else if (foldStyle != "all")
	                    range = null;
	            }
	            
	            return range;
	        }
	
	        if (foldStyle === "markbegin")
	            return;
	
	        var match = line.match(this.foldingStopMarker);
	        if (match) {
	            var i = match.index + match[0].length;
	
	            if (match[1])
	                return this.closingBracketBlock(session, match[1], row, i);
	
	            return session.getCommentFoldRange(row, i, -1);
	        }
	    };
	    
	    this.getSectionRange = function(session, row) {
	        var line = session.getLine(row);
	        var startIndent = line.search(/\S/);
	        var startRow = row;
	        var startColumn = line.length;
	        row = row + 1;
	        var endRow = row;
	        var maxRow = session.getLength();
	        while (++row < maxRow) {
	            line = session.getLine(row);
	            var indent = line.search(/\S/);
	            if (indent === -1)
	                continue;
	            if  (startIndent > indent)
	                break;
	            var subRange = this.getFoldWidgetRange(session, "all", row);
	            
	            if (subRange) {
	                if (subRange.start.row <= startRow) {
	                    break;
	                } else if (subRange.isMultiLine()) {
	                    row = subRange.end.row;
	                } else if (startIndent == indent) {
	                    break;
	                }
	            }
	            endRow = row;
	        }
	        
	        return new Range(startRow, startColumn, endRow, session.getLine(endRow).length);
	    };
	    this.getCommentRegionBlock = function(session, line, row) {
	        var startColumn = line.search(/\s*$/);
	        var maxRow = session.getLength();
	        var startRow = row;
	        
	        var re = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/;
	        var depth = 1;
	        while (++row < maxRow) {
	            line = session.getLine(row);
	            var m = re.exec(line);
	            if (!m) continue;
	            if (m[1]) depth--;
	            else depth++;
	
	            if (!depth) break;
	        }
	
	        var endRow = row;
	        if (endRow > startRow) {
	            return new Range(startRow, startColumn, endRow, line.length);
	        }
	    };
	
	}).call(FoldMode.prototype);
	
	});
	
	ace.define("ace/mode/javascript",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/javascript_highlight_rules","ace/mode/matching_brace_outdent","ace/range","ace/worker/worker_client","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle"], function(acequire, exports, module) {
	"use strict";
	
	var oop = acequire("../lib/oop");
	var TextMode = acequire("./text").Mode;
	var JavaScriptHighlightRules = acequire("./javascript_highlight_rules").JavaScriptHighlightRules;
	var MatchingBraceOutdent = acequire("./matching_brace_outdent").MatchingBraceOutdent;
	var Range = acequire("../range").Range;
	var WorkerClient = acequire("../worker/worker_client").WorkerClient;
	var CstyleBehaviour = acequire("./behaviour/cstyle").CstyleBehaviour;
	var CStyleFoldMode = acequire("./folding/cstyle").FoldMode;
	
	var Mode = function() {
	    this.HighlightRules = JavaScriptHighlightRules;
	    
	    this.$outdent = new MatchingBraceOutdent();
	    this.$behaviour = new CstyleBehaviour();
	    this.foldingRules = new CStyleFoldMode();
	};
	oop.inherits(Mode, TextMode);
	
	(function() {
	
	    this.lineCommentStart = "//";
	    this.blockComment = {start: "/*", end: "*/"};
	
	    this.getNextLineIndent = function(state, line, tab) {
	        var indent = this.$getIndent(line);
	
	        var tokenizedLine = this.getTokenizer().getLineTokens(line, state);
	        var tokens = tokenizedLine.tokens;
	        var endState = tokenizedLine.state;
	
	        if (tokens.length && tokens[tokens.length-1].type == "comment") {
	            return indent;
	        }
	
	        if (state == "start" || state == "no_regex") {
	            var match = line.match(/^.*(?:\bcase\b.*\:|[\{\(\[])\s*$/);
	            if (match) {
	                indent += tab;
	            }
	        } else if (state == "doc-start") {
	            if (endState == "start" || endState == "no_regex") {
	                return "";
	            }
	            var match = line.match(/^\s*(\/?)\*/);
	            if (match) {
	                if (match[1]) {
	                    indent += " ";
	                }
	                indent += "* ";
	            }
	        }
	
	        return indent;
	    };
	
	    this.checkOutdent = function(state, line, input) {
	        return this.$outdent.checkOutdent(line, input);
	    };
	
	    this.autoOutdent = function(state, doc, row) {
	        this.$outdent.autoOutdent(doc, row);
	    };
	
	    this.createWorker = function(session) {
	        var worker = new WorkerClient(["ace"], __webpack_require__(27), "JavaScriptWorker");
	        worker.attachToDocument(session.getDocument());
	
	        worker.on("annotate", function(results) {
	            session.setAnnotations(results.data);
	        });
	
	        worker.on("terminate", function() {
	            session.clearAnnotations();
	        });
	
	        return worker;
	    };
	
	    this.$id = "ace/mode/javascript";
	}).call(Mode.prototype);
	
	exports.Mode = Mode;
	});
	
	ace.define("ace/mode/xml_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"], function(acequire, exports, module) {
	"use strict";
	
	var oop = acequire("../lib/oop");
	var TextHighlightRules = acequire("./text_highlight_rules").TextHighlightRules;
	
	var XmlHighlightRules = function(normalize) {
	    var tagRegex = "[_:a-zA-Z\xc0-\uffff][-_:.a-zA-Z0-9\xc0-\uffff]*";
	
	    this.$rules = {
	        start : [
	            {token : "string.cdata.xml", regex : "<\\!\\[CDATA\\[", next : "cdata"},
	            {
	                token : ["punctuation.xml-decl.xml", "keyword.xml-decl.xml"],
	                regex : "(<\\?)(xml)(?=[\\s])", next : "xml_decl", caseInsensitive: true
	            },
	            {
	                token : ["punctuation.instruction.xml", "keyword.instruction.xml"],
	                regex : "(<\\?)(" + tagRegex + ")", next : "processing_instruction",
	            },
	            {token : "comment.xml", regex : "<\\!--", next : "comment"},
	            {
	                token : ["xml-pe.doctype.xml", "xml-pe.doctype.xml"],
	                regex : "(<\\!)(DOCTYPE)(?=[\\s])", next : "doctype", caseInsensitive: true
	            },
	            {include : "tag"},
	            {token : "text.end-tag-open.xml", regex: "</"},
	            {token : "text.tag-open.xml", regex: "<"},
	            {include : "reference"},
	            {defaultToken : "text.xml"}
	        ],
	
	        xml_decl : [{
	            token : "entity.other.attribute-name.decl-attribute-name.xml",
	            regex : "(?:" + tagRegex + ":)?" + tagRegex + ""
	        }, {
	            token : "keyword.operator.decl-attribute-equals.xml",
	            regex : "="
	        }, {
	            include: "whitespace"
	        }, {
	            include: "string"
	        }, {
	            token : "punctuation.xml-decl.xml",
	            regex : "\\?>",
	            next : "start"
	        }],
	
	        processing_instruction : [
	            {token : "punctuation.instruction.xml", regex : "\\?>", next : "start"},
	            {defaultToken : "instruction.xml"}
	        ],
	
	        doctype : [
	            {include : "whitespace"},
	            {include : "string"},
	            {token : "xml-pe.doctype.xml", regex : ">", next : "start"},
	            {token : "xml-pe.xml", regex : "[-_a-zA-Z0-9:]+"},
	            {token : "punctuation.int-subset", regex : "\\[", push : "int_subset"}
	        ],
	
	        int_subset : [{
	            token : "text.xml",
	            regex : "\\s+"
	        }, {
	            token: "punctuation.int-subset.xml",
	            regex: "]",
	            next: "pop"
	        }, {
	            token : ["punctuation.markup-decl.xml", "keyword.markup-decl.xml"],
	            regex : "(<\\!)(" + tagRegex + ")",
	            push : [{
	                token : "text",
	                regex : "\\s+"
	            },
	            {
	                token : "punctuation.markup-decl.xml",
	                regex : ">",
	                next : "pop"
	            },
	            {include : "string"}]
	        }],
	
	        cdata : [
	            {token : "string.cdata.xml", regex : "\\]\\]>", next : "start"},
	            {token : "text.xml", regex : "\\s+"},
	            {token : "text.xml", regex : "(?:[^\\]]|\\](?!\\]>))+"}
	        ],
	
	        comment : [
	            {token : "comment.xml", regex : "-->", next : "start"},
	            {defaultToken : "comment.xml"}
	        ],
	
	        reference : [{
	            token : "constant.language.escape.reference.xml",
	            regex : "(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"
	        }],
	
	        attr_reference : [{
	            token : "constant.language.escape.reference.attribute-value.xml",
	            regex : "(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"
	        }],
	
	        tag : [{
	            token : ["meta.tag.punctuation.tag-open.xml", "meta.tag.punctuation.end-tag-open.xml", "meta.tag.tag-name.xml"],
	            regex : "(?:(<)|(</))((?:" + tagRegex + ":)?" + tagRegex + ")",
	            next: [
	                {include : "attributes"},
	                {token : "meta.tag.punctuation.tag-close.xml", regex : "/?>", next : "start"}
	            ]
	        }],
	
	        tag_whitespace : [
	            {token : "text.tag-whitespace.xml", regex : "\\s+"}
	        ],
	        whitespace : [
	            {token : "text.whitespace.xml", regex : "\\s+"}
	        ],
	        string: [{
	            token : "string.xml",
	            regex : "'",
	            push : [
	                {token : "string.xml", regex: "'", next: "pop"},
	                {defaultToken : "string.xml"}
	            ]
	        }, {
	            token : "string.xml",
	            regex : '"',
	            push : [
	                {token : "string.xml", regex: '"', next: "pop"},
	                {defaultToken : "string.xml"}
	            ]
	        }],
	
	        attributes: [{
	            token : "entity.other.attribute-name.xml",
	            regex : "(?:" + tagRegex + ":)?" + tagRegex + ""
	        }, {
	            token : "keyword.operator.attribute-equals.xml",
	            regex : "="
	        }, {
	            include: "tag_whitespace"
	        }, {
	            include: "attribute_value"
	        }],
	
	        attribute_value: [{
	            token : "string.attribute-value.xml",
	            regex : "'",
	            push : [
	                {token : "string.attribute-value.xml", regex: "'", next: "pop"},
	                {include : "attr_reference"},
	                {defaultToken : "string.attribute-value.xml"}
	            ]
	        }, {
	            token : "string.attribute-value.xml",
	            regex : '"',
	            push : [
	                {token : "string.attribute-value.xml", regex: '"', next: "pop"},
	                {include : "attr_reference"},
	                {defaultToken : "string.attribute-value.xml"}
	            ]
	        }]
	    };
	
	    if (this.constructor === XmlHighlightRules)
	        this.normalizeRules();
	};
	
	
	(function() {
	
	    this.embedTagRules = function(HighlightRules, prefix, tag){
	        this.$rules.tag.unshift({
	            token : ["meta.tag.punctuation.tag-open.xml", "meta.tag." + tag + ".tag-name.xml"],
	            regex : "(<)(" + tag + "(?=\\s|>|$))",
	            next: [
	                {include : "attributes"},
	                {token : "meta.tag.punctuation.tag-close.xml", regex : "/?>", next : prefix + "start"}
	            ]
	        });
	
	        this.$rules[tag + "-end"] = [
	            {include : "attributes"},
	            {token : "meta.tag.punctuation.tag-close.xml", regex : "/?>",  next: "start",
	                onMatch : function(value, currentState, stack) {
	                    stack.splice(0);
	                    return this.token;
	            }}
	        ]
	
	        this.embedRules(HighlightRules, prefix, [{
	            token: ["meta.tag.punctuation.end-tag-open.xml", "meta.tag." + tag + ".tag-name.xml"],
	            regex : "(</)(" + tag + "(?=\\s|>|$))",
	            next: tag + "-end"
	        }, {
	            token: "string.cdata.xml",
	            regex : "<\\!\\[CDATA\\["
	        }, {
	            token: "string.cdata.xml",
	            regex : "\\]\\]>"
	        }]);
	    };
	
	}).call(TextHighlightRules.prototype);
	
	oop.inherits(XmlHighlightRules, TextHighlightRules);
	
	exports.XmlHighlightRules = XmlHighlightRules;
	});
	
	ace.define("ace/mode/behaviour/xml",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/token_iterator","ace/lib/lang"], function(acequire, exports, module) {
	"use strict";
	
	var oop = acequire("../../lib/oop");
	var Behaviour = acequire("../behaviour").Behaviour;
	var TokenIterator = acequire("../../token_iterator").TokenIterator;
	var lang = acequire("../../lib/lang");
	
	function is(token, type) {
	    return token.type.lastIndexOf(type + ".xml") > -1;
	}
	
	var XmlBehaviour = function () {
	
	    this.add("string_dquotes", "insertion", function (state, action, editor, session, text) {
	        if (text == '"' || text == "'") {
	            var quote = text;
	            var selected = session.doc.getTextRange(editor.getSelectionRange());
	            if (selected !== "" && selected !== "'" && selected != '"' && editor.getWrapBehavioursEnabled()) {
	                return {
	                    text: quote + selected + quote,
	                    selection: false
	                };
	            }
	
	            var cursor = editor.getCursorPosition();
	            var line = session.doc.getLine(cursor.row);
	            var rightChar = line.substring(cursor.column, cursor.column + 1);
	            var iterator = new TokenIterator(session, cursor.row, cursor.column);
	            var token = iterator.getCurrentToken();
	
	            if (rightChar == quote && (is(token, "attribute-value") || is(token, "string"))) {
	                return {
	                    text: "",
	                    selection: [1, 1]
	                };
	            }
	
	            if (!token)
	                token = iterator.stepBackward();
	
	            if (!token)
	                return;
	
	            while (is(token, "tag-whitespace") || is(token, "whitespace")) {
	                token = iterator.stepBackward();
	            }
	            var rightSpace = !rightChar || rightChar.match(/\s/);
	            if (is(token, "attribute-equals") && (rightSpace || rightChar == '>') || (is(token, "decl-attribute-equals") && (rightSpace || rightChar == '?'))) {
	                return {
	                    text: quote + quote,
	                    selection: [1, 1]
	                };
	            }
	        }
	    });
	
	    this.add("string_dquotes", "deletion", function(state, action, editor, session, range) {
	        var selected = session.doc.getTextRange(range);
	        if (!range.isMultiLine() && (selected == '"' || selected == "'")) {
	            var line = session.doc.getLine(range.start.row);
	            var rightChar = line.substring(range.start.column + 1, range.start.column + 2);
	            if (rightChar == selected) {
	                range.end.column++;
	                return range;
	            }
	        }
	    });
	
	    this.add("autoclosing", "insertion", function (state, action, editor, session, text) {
	        if (text == '>') {
	            var position = editor.getCursorPosition();
	            var iterator = new TokenIterator(session, position.row, position.column);
	            var token = iterator.getCurrentToken() || iterator.stepBackward();
	            if (!token || !(is(token, "tag-name") || is(token, "tag-whitespace") || is(token, "attribute-name") || is(token, "attribute-equals") || is(token, "attribute-value")))
	                return;
	            if (is(token, "reference.attribute-value"))
	                return;
	            if (is(token, "attribute-value")) {
	                var firstChar = token.value.charAt(0);
	                if (firstChar == '"' || firstChar == "'") {
	                    var lastChar = token.value.charAt(token.value.length - 1);
	                    var tokenEnd = iterator.getCurrentTokenColumn() + token.value.length;
	                    if (tokenEnd > position.column || tokenEnd == position.column && firstChar != lastChar)
	                        return;
	                }
	            }
	            while (!is(token, "tag-name")) {
	                token = iterator.stepBackward();
	            }
	
	            var tokenRow = iterator.getCurrentTokenRow();
	            var tokenColumn = iterator.getCurrentTokenColumn();
	            if (is(iterator.stepBackward(), "end-tag-open"))
	                return;
	
	            var element = token.value;
	            if (tokenRow == position.row)
	                element = element.substring(0, position.column - tokenColumn);
	
	            if (this.voidElements.hasOwnProperty(element.toLowerCase()))
	                 return;
	
	            return {
	               text: ">" + "</" + element + ">",
	               selection: [1, 1]
	            };
	        }
	    });
	
	    this.add("autoindent", "insertion", function (state, action, editor, session, text) {
	        if (text == "\n") {
	            var cursor = editor.getCursorPosition();
	            var line = session.getLine(cursor.row);
	            var iterator = new TokenIterator(session, cursor.row, cursor.column);
	            var token = iterator.getCurrentToken();
	
	            if (token && token.type.indexOf("tag-close") !== -1) {
	                if (token.value == "/>")
	                    return;
	                while (token && token.type.indexOf("tag-name") === -1) {
	                    token = iterator.stepBackward();
	                }
	
	                if (!token) {
	                    return;
	                }
	
	                var tag = token.value;
	                var row = iterator.getCurrentTokenRow();
	                token = iterator.stepBackward();
	                if (!token || token.type.indexOf("end-tag") !== -1) {
	                    return;
	                }
	
	                if (this.voidElements && !this.voidElements[tag]) {
	                    var nextToken = session.getTokenAt(cursor.row, cursor.column+1);
	                    var line = session.getLine(row);
	                    var nextIndent = this.$getIndent(line);
	                    var indent = nextIndent + session.getTabString();
	
	                    if (nextToken && nextToken.value === "</") {
	                        return {
	                            text: "\n" + indent + "\n" + nextIndent,
	                            selection: [1, indent.length, 1, indent.length]
	                        };
	                    } else {
	                        return {
	                            text: "\n" + indent
	                        };
	                    }
	                }
	            }
	        }
	    });
	
	};
	
	oop.inherits(XmlBehaviour, Behaviour);
	
	exports.XmlBehaviour = XmlBehaviour;
	});
	
	ace.define("ace/mode/folding/xml",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/range","ace/mode/folding/fold_mode","ace/token_iterator"], function(acequire, exports, module) {
	"use strict";
	
	var oop = acequire("../../lib/oop");
	var lang = acequire("../../lib/lang");
	var Range = acequire("../../range").Range;
	var BaseFoldMode = acequire("./fold_mode").FoldMode;
	var TokenIterator = acequire("../../token_iterator").TokenIterator;
	
	var FoldMode = exports.FoldMode = function(voidElements, optionalEndTags) {
	    BaseFoldMode.call(this);
	    this.voidElements = voidElements || {};
	    this.optionalEndTags = oop.mixin({}, this.voidElements);
	    if (optionalEndTags)
	        oop.mixin(this.optionalEndTags, optionalEndTags);
	    
	};
	oop.inherits(FoldMode, BaseFoldMode);
	
	var Tag = function() {
	    this.tagName = "";
	    this.closing = false;
	    this.selfClosing = false;
	    this.start = {row: 0, column: 0};
	    this.end = {row: 0, column: 0};
	};
	
	function is(token, type) {
	    return token.type.lastIndexOf(type + ".xml") > -1;
	}
	
	(function() {
	
	    this.getFoldWidget = function(session, foldStyle, row) {
	        var tag = this._getFirstTagInLine(session, row);
	
	        if (!tag)
	            return "";
	
	        if (tag.closing || (!tag.tagName && tag.selfClosing))
	            return foldStyle == "markbeginend" ? "end" : "";
	
	        if (!tag.tagName || tag.selfClosing || this.voidElements.hasOwnProperty(tag.tagName.toLowerCase()))
	            return "";
	
	        if (this._findEndTagInLine(session, row, tag.tagName, tag.end.column))
	            return "";
	
	        return "start";
	    };
	    this._getFirstTagInLine = function(session, row) {
	        var tokens = session.getTokens(row);
	        var tag = new Tag();
	
	        for (var i = 0; i < tokens.length; i++) {
	            var token = tokens[i];
	            if (is(token, "tag-open")) {
	                tag.end.column = tag.start.column + token.value.length;
	                tag.closing = is(token, "end-tag-open");
	                token = tokens[++i];
	                if (!token)
	                    return null;
	                tag.tagName = token.value;
	                tag.end.column += token.value.length;
	                for (i++; i < tokens.length; i++) {
	                    token = tokens[i];
	                    tag.end.column += token.value.length;
	                    if (is(token, "tag-close")) {
	                        tag.selfClosing = token.value == '/>';
	                        break;
	                    }
	                }
	                return tag;
	            } else if (is(token, "tag-close")) {
	                tag.selfClosing = token.value == '/>';
	                return tag;
	            }
	            tag.start.column += token.value.length;
	        }
	
	        return null;
	    };
	
	    this._findEndTagInLine = function(session, row, tagName, startColumn) {
	        var tokens = session.getTokens(row);
	        var column = 0;
	        for (var i = 0; i < tokens.length; i++) {
	            var token = tokens[i];
	            column += token.value.length;
	            if (column < startColumn)
	                continue;
	            if (is(token, "end-tag-open")) {
	                token = tokens[i + 1];
	                if (token && token.value == tagName)
	                    return true;
	            }
	        }
	        return false;
	    };
	    this._readTagForward = function(iterator) {
	        var token = iterator.getCurrentToken();
	        if (!token)
	            return null;
	
	        var tag = new Tag();
	        do {
	            if (is(token, "tag-open")) {
	                tag.closing = is(token, "end-tag-open");
	                tag.start.row = iterator.getCurrentTokenRow();
	                tag.start.column = iterator.getCurrentTokenColumn();
	            } else if (is(token, "tag-name")) {
	                tag.tagName = token.value;
	            } else if (is(token, "tag-close")) {
	                tag.selfClosing = token.value == "/>";
	                tag.end.row = iterator.getCurrentTokenRow();
	                tag.end.column = iterator.getCurrentTokenColumn() + token.value.length;
	                iterator.stepForward();
	                return tag;
	            }
	        } while(token = iterator.stepForward());
	
	        return null;
	    };
	    
	    this._readTagBackward = function(iterator) {
	        var token = iterator.getCurrentToken();
	        if (!token)
	            return null;
	
	        var tag = new Tag();
	        do {
	            if (is(token, "tag-open")) {
	                tag.closing = is(token, "end-tag-open");
	                tag.start.row = iterator.getCurrentTokenRow();
	                tag.start.column = iterator.getCurrentTokenColumn();
	                iterator.stepBackward();
	                return tag;
	            } else if (is(token, "tag-name")) {
	                tag.tagName = token.value;
	            } else if (is(token, "tag-close")) {
	                tag.selfClosing = token.value == "/>";
	                tag.end.row = iterator.getCurrentTokenRow();
	                tag.end.column = iterator.getCurrentTokenColumn() + token.value.length;
	            }
	        } while(token = iterator.stepBackward());
	
	        return null;
	    };
	    
	    this._pop = function(stack, tag) {
	        while (stack.length) {
	            
	            var top = stack[stack.length-1];
	            if (!tag || top.tagName == tag.tagName) {
	                return stack.pop();
	            }
	            else if (this.optionalEndTags.hasOwnProperty(top.tagName)) {
	                stack.pop();
	                continue;
	            } else {
	                return null;
	            }
	        }
	    };
	    
	    this.getFoldWidgetRange = function(session, foldStyle, row) {
	        var firstTag = this._getFirstTagInLine(session, row);
	        
	        if (!firstTag)
	            return null;
	        
	        var isBackward = firstTag.closing || firstTag.selfClosing;
	        var stack = [];
	        var tag;
	        
	        if (!isBackward) {
	            var iterator = new TokenIterator(session, row, firstTag.start.column);
	            var start = {
	                row: row,
	                column: firstTag.start.column + firstTag.tagName.length + 2
	            };
	            if (firstTag.start.row == firstTag.end.row)
	                start.column = firstTag.end.column;
	            while (tag = this._readTagForward(iterator)) {
	                if (tag.selfClosing) {
	                    if (!stack.length) {
	                        tag.start.column += tag.tagName.length + 2;
	                        tag.end.column -= 2;
	                        return Range.fromPoints(tag.start, tag.end);
	                    } else
	                        continue;
	                }
	                
	                if (tag.closing) {
	                    this._pop(stack, tag);
	                    if (stack.length == 0)
	                        return Range.fromPoints(start, tag.start);
	                }
	                else {
	                    stack.push(tag);
	                }
	            }
	        }
	        else {
	            var iterator = new TokenIterator(session, row, firstTag.end.column);
	            var end = {
	                row: row,
	                column: firstTag.start.column
	            };
	            
	            while (tag = this._readTagBackward(iterator)) {
	                if (tag.selfClosing) {
	                    if (!stack.length) {
	                        tag.start.column += tag.tagName.length + 2;
	                        tag.end.column -= 2;
	                        return Range.fromPoints(tag.start, tag.end);
	                    } else
	                        continue;
	                }
	                
	                if (!tag.closing) {
	                    this._pop(stack, tag);
	                    if (stack.length == 0) {
	                        tag.start.column += tag.tagName.length + 2;
	                        if (tag.start.row == tag.end.row && tag.start.column < tag.end.column)
	                            tag.start.column = tag.end.column;
	                        return Range.fromPoints(tag.start, end);
	                    }
	                }
	                else {
	                    stack.push(tag);
	                }
	            }
	        }
	        
	    };
	
	}).call(FoldMode.prototype);
	
	});
	
	ace.define("ace/mode/xml",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/text","ace/mode/xml_highlight_rules","ace/mode/behaviour/xml","ace/mode/folding/xml","ace/worker/worker_client"], function(acequire, exports, module) {
	"use strict";
	
	var oop = acequire("../lib/oop");
	var lang = acequire("../lib/lang");
	var TextMode = acequire("./text").Mode;
	var XmlHighlightRules = acequire("./xml_highlight_rules").XmlHighlightRules;
	var XmlBehaviour = acequire("./behaviour/xml").XmlBehaviour;
	var XmlFoldMode = acequire("./folding/xml").FoldMode;
	var WorkerClient = acequire("../worker/worker_client").WorkerClient;
	
	var Mode = function() {
	   this.HighlightRules = XmlHighlightRules;
	   this.$behaviour = new XmlBehaviour();
	   this.foldingRules = new XmlFoldMode();
	};
	
	oop.inherits(Mode, TextMode);
	
	(function() {
	
	    this.voidElements = lang.arrayToMap([]);
	
	    this.blockComment = {start: "<!--", end: "-->"};
	
	    this.createWorker = function(session) {
	        var worker = new WorkerClient(["ace"], __webpack_require__(28), "Worker");
	        worker.attachToDocument(session.getDocument());
	
	        worker.on("error", function(e) {
	            session.setAnnotations(e.data);
	        });
	
	        worker.on("terminate", function() {
	            session.clearAnnotations();
	        });
	
	        return worker;
	    };
	    
	    this.$id = "ace/mode/xml";
	}).call(Mode.prototype);
	
	exports.Mode = Mode;
	});
	
	ace.define("ace/mode/css_highlight_rules",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/text_highlight_rules"], function(acequire, exports, module) {
	"use strict";
	
	var oop = acequire("../lib/oop");
	var lang = acequire("../lib/lang");
	var TextHighlightRules = acequire("./text_highlight_rules").TextHighlightRules;
	var supportType = exports.supportType = "animation-fill-mode|alignment-adjust|alignment-baseline|animation-delay|animation-direction|animation-duration|animation-iteration-count|animation-name|animation-play-state|animation-timing-function|animation|appearance|azimuth|backface-visibility|background-attachment|background-break|background-clip|background-color|background-image|background-origin|background-position|background-repeat|background-size|background|baseline-shift|binding|bleed|bookmark-label|bookmark-level|bookmark-state|bookmark-target|border-bottom|border-bottom-color|border-bottom-left-radius|border-bottom-right-radius|border-bottom-style|border-bottom-width|border-collapse|border-color|border-image|border-image-outset|border-image-repeat|border-image-slice|border-image-source|border-image-width|border-left|border-left-color|border-left-style|border-left-width|border-radius|border-right|border-right-color|border-right-style|border-right-width|border-spacing|border-style|border-top|border-top-color|border-top-left-radius|border-top-right-radius|border-top-style|border-top-width|border-width|border|bottom|box-align|box-decoration-break|box-direction|box-flex-group|box-flex|box-lines|box-ordinal-group|box-orient|box-pack|box-shadow|box-sizing|break-after|break-before|break-inside|caption-side|clear|clip|color-profile|color|column-count|column-fill|column-gap|column-rule|column-rule-color|column-rule-style|column-rule-width|column-span|column-width|columns|content|counter-increment|counter-reset|crop|cue-after|cue-before|cue|cursor|direction|display|dominant-baseline|drop-initial-after-adjust|drop-initial-after-align|drop-initial-before-adjust|drop-initial-before-align|drop-initial-size|drop-initial-value|elevation|empty-cells|fit|fit-position|float-offset|float|font-family|font-size|font-size-adjust|font-stretch|font-style|font-variant|font-weight|font|grid-columns|grid-rows|hanging-punctuation|height|hyphenate-after|hyphenate-before|hyphenate-character|hyphenate-lines|hyphenate-resource|hyphens|icon|image-orientation|image-rendering|image-resolution|inline-box-align|left|letter-spacing|line-height|line-stacking-ruby|line-stacking-shift|line-stacking-strategy|line-stacking|list-style-image|list-style-position|list-style-type|list-style|margin-bottom|margin-left|margin-right|margin-top|margin|mark-after|mark-before|mark|marks|marquee-direction|marquee-play-count|marquee-speed|marquee-style|max-height|max-width|min-height|min-width|move-to|nav-down|nav-index|nav-left|nav-right|nav-up|opacity|orphans|outline-color|outline-offset|outline-style|outline-width|outline|overflow-style|overflow-x|overflow-y|overflow|padding-bottom|padding-left|padding-right|padding-top|padding|page-break-after|page-break-before|page-break-inside|page-policy|page|pause-after|pause-before|pause|perspective-origin|perspective|phonemes|pitch-range|pitch|play-during|pointer-events|position|presentation-level|punctuation-trim|quotes|rendering-intent|resize|rest-after|rest-before|rest|richness|right|rotation-point|rotation|ruby-align|ruby-overhang|ruby-position|ruby-span|size|speak-header|speak-numeral|speak-punctuation|speak|speech-rate|stress|string-set|table-layout|target-name|target-new|target-position|target|text-align-last|text-align|text-decoration|text-emphasis|text-height|text-indent|text-justify|text-outline|text-shadow|text-transform|text-wrap|top|transform-origin|transform-style|transform|transition-delay|transition-duration|transition-property|transition-timing-function|transition|unicode-bidi|vertical-align|visibility|voice-balance|voice-duration|voice-family|voice-pitch-range|voice-pitch|voice-rate|voice-stress|voice-volume|volume|white-space-collapse|white-space|widows|width|word-break|word-spacing|word-wrap|z-index";
	var supportFunction = exports.supportFunction = "rgb|rgba|url|attr|counter|counters";
	var supportConstant = exports.supportConstant = "absolute|after-edge|after|all-scroll|all|alphabetic|always|antialiased|armenian|auto|avoid-column|avoid-page|avoid|balance|baseline|before-edge|before|below|bidi-override|block-line-height|block|bold|bolder|border-box|both|bottom|box|break-all|break-word|capitalize|caps-height|caption|center|central|char|circle|cjk-ideographic|clone|close-quote|col-resize|collapse|column|consider-shifts|contain|content-box|cover|crosshair|cubic-bezier|dashed|decimal-leading-zero|decimal|default|disabled|disc|disregard-shifts|distribute-all-lines|distribute-letter|distribute-space|distribute|dotted|double|e-resize|ease-in|ease-in-out|ease-out|ease|ellipsis|end|exclude-ruby|fill|fixed|georgian|glyphs|grid-height|groove|hand|hanging|hebrew|help|hidden|hiragana-iroha|hiragana|horizontal|icon|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space|ideographic|inactive|include-ruby|inherit|initial|inline-block|inline-box|inline-line-height|inline-table|inline|inset|inside|inter-ideograph|inter-word|invert|italic|justify|katakana-iroha|katakana|keep-all|last|left|lighter|line-edge|line-through|line|linear|list-item|local|loose|lower-alpha|lower-greek|lower-latin|lower-roman|lowercase|lr-tb|ltr|mathematical|max-height|max-size|medium|menu|message-box|middle|move|n-resize|ne-resize|newspaper|no-change|no-close-quote|no-drop|no-open-quote|no-repeat|none|normal|not-allowed|nowrap|nw-resize|oblique|open-quote|outset|outside|overline|padding-box|page|pointer|pre-line|pre-wrap|pre|preserve-3d|progress|relative|repeat-x|repeat-y|repeat|replaced|reset-size|ridge|right|round|row-resize|rtl|s-resize|scroll|se-resize|separate|slice|small-caps|small-caption|solid|space|square|start|static|status-bar|step-end|step-start|steps|stretch|strict|sub|super|sw-resize|table-caption|table-cell|table-column-group|table-column|table-footer-group|table-header-group|table-row-group|table-row|table|tb-rl|text-after-edge|text-before-edge|text-bottom|text-size|text-top|text|thick|thin|transparent|underline|upper-alpha|upper-latin|upper-roman|uppercase|use-script|vertical-ideographic|vertical-text|visible|w-resize|wait|whitespace|z-index|zero";
	var supportConstantColor = exports.supportConstantColor = "aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow";
	var supportConstantFonts = exports.supportConstantFonts = "arial|century|comic|courier|cursive|fantasy|garamond|georgia|helvetica|impact|lucida|symbol|system|tahoma|times|trebuchet|utopia|verdana|webdings|sans-serif|serif|monospace";
	
	var numRe = exports.numRe = "\\-?(?:(?:[0-9]+)|(?:[0-9]*\\.[0-9]+))";
	var pseudoElements = exports.pseudoElements = "(\\:+)\\b(after|before|first-letter|first-line|moz-selection|selection)\\b";
	var pseudoClasses  = exports.pseudoClasses =  "(:)\\b(active|checked|disabled|empty|enabled|first-child|first-of-type|focus|hover|indeterminate|invalid|last-child|last-of-type|link|not|nth-child|nth-last-child|nth-last-of-type|nth-of-type|only-child|only-of-type|acequired|root|target|valid|visited)\\b";
	
	var CssHighlightRules = function() {
	
	    var keywordMapper = this.createKeywordMapper({
	        "support.function": supportFunction,
	        "support.constant": supportConstant,
	        "support.type": supportType,
	        "support.constant.color": supportConstantColor,
	        "support.constant.fonts": supportConstantFonts
	    }, "text", true);
	
	    this.$rules = {
	        "start" : [{
	            token : "comment", // multi line comment
	            regex : "\\/\\*",
	            push : "comment"
	        }, {
	            token: "paren.lparen",
	            regex: "\\{",
	            push:  "ruleset"
	        }, {
	            token: "string",
	            regex: "@.*?{",
	            push:  "media"
	        }, {
	            token: "keyword",
	            regex: "#[a-z0-9-_]+"
	        }, {
	            token: "variable",
	            regex: "\\.[a-z0-9-_]+"
	        }, {
	            token: "string",
	            regex: ":[a-z0-9-_]+"
	        }, {
	            token: "constant",
	            regex: "[a-z0-9-_]+"
	        }, {
	            caseInsensitive: true
	        }],
	
	        "media" : [{
	            token : "comment", // multi line comment
	            regex : "\\/\\*",
	            push : "comment"
	        }, {
	            token: "paren.lparen",
	            regex: "\\{",
	            push:  "ruleset"
	        }, {
	            token: "string",
	            regex: "\\}",
	            next:  "pop"
	        }, {
	            token: "keyword",
	            regex: "#[a-z0-9-_]+"
	        }, {
	            token: "variable",
	            regex: "\\.[a-z0-9-_]+"
	        }, {
	            token: "string",
	            regex: ":[a-z0-9-_]+"
	        }, {
	            token: "constant",
	            regex: "[a-z0-9-_]+"
	        }, {
	            caseInsensitive: true
	        }],
	
	        "comment" : [{
	            token : "comment",
	            regex : "\\*\\/",
	            next : "pop"
	        }, {
	            defaultToken : "comment"
	        }],
	
	        "ruleset" : [
	        {
	            token : "paren.rparen",
	            regex : "\\}",
	            next:   "pop"
	        }, {
	            token : "comment", // multi line comment
	            regex : "\\/\\*",
	            push : "comment"
	        }, {
	            token : "string", // single line
	            regex : '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'
	        }, {
	            token : "string", // single line
	            regex : "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"
	        }, {
	            token : ["constant.numeric", "keyword"],
	            regex : "(" + numRe + ")(ch|cm|deg|em|ex|fr|gd|grad|Hz|in|kHz|mm|ms|pc|pt|px|rad|rem|s|turn|vh|vm|vw|%)"
	        }, {
	            token : "constant.numeric",
	            regex : numRe
	        }, {
	            token : "constant.numeric",  // hex6 color
	            regex : "#[a-f0-9]{6}"
	        }, {
	            token : "constant.numeric", // hex3 color
	            regex : "#[a-f0-9]{3}"
	        }, {
	            token : ["punctuation", "entity.other.attribute-name.pseudo-element.css"],
	            regex : pseudoElements
	        }, {
	            token : ["punctuation", "entity.other.attribute-name.pseudo-class.css"],
	            regex : pseudoClasses
	        }, {
	            token : ["support.function", "string", "support.function"],
	            regex : "(url\\()(.*)(\\))"
	        }, {
	            token : keywordMapper,
	            regex : "\\-?[a-zA-Z_][a-zA-Z0-9_\\-]*"
	        }, {
	            caseInsensitive: true
	        }]
	    };
	
	    this.normalizeRules();
	};
	
	oop.inherits(CssHighlightRules, TextHighlightRules);
	
	exports.CssHighlightRules = CssHighlightRules;
	
	});
	
	ace.define("ace/mode/css_completions",["require","exports","module"], function(acequire, exports, module) {
	"use strict";
	
	var propertyMap = {
	    "background": {"#$0": 1},
	    "background-color": {"#$0": 1, "transparent": 1, "fixed": 1},
	    "background-image": {"url('/$0')": 1},
	    "background-repeat": {"repeat": 1, "repeat-x": 1, "repeat-y": 1, "no-repeat": 1, "inherit": 1},
	    "background-position": {"bottom":2, "center":2, "left":2, "right":2, "top":2, "inherit":2,},
	    "background-attachment": {"scroll": 1, "fixed": 1},
	    "background-size": {"cover": 1, "contain": 1},
	    "background-clip": {"border-box": 1, "padding-box": 1, "content-box": 1},
	    "background-origin": {"border-box": 1, "padding-box": 1, "content-box": 1},
	    "border": {"solid $0": 1, "dashed $0": 1, "dotted $0": 1, "#$0": 1},
	    "border-color": {"#$0": 1},
	    "border-style": {"solid":2, "dashed":2, "dotted":2, "double":2, "groove":2, "hidden":2, "inherit":2, "inset":2, "none":2, "outset":2, "ridged":2,},
	    "border-collapse": {"collapse": 1, "separate": 1},
	    "bottom": {"px": 1, "em": 1, "%": 1},
	    "clear": {"left": 1, "right": 1, "both": 1, "none": 1},
	    "color": {"#$0": 1, "rgb(#$00,0,0)": 1},
	    "cursor": {"default": 1, "pointer": 1, "move": 1, "text": 1, "wait": 1, "help": 1, "progress": 1, "n-resize": 1, "ne-resize": 1, "e-resize": 1, "se-resize": 1, "s-resize": 1, "sw-resize": 1, "w-resize": 1, "nw-resize": 1},
	    "display": {"none": 1, "block": 1, "inline": 1, "inline-block": 1, "table-cell": 1},
	    "empty-cells": {"show": 1, "hide": 1},
	    "float": {"left": 1, "right": 1, "none": 1},
	    "font-family": {"Arial":2,"Comic Sans MS":2,"Consolas":2,"Courier New":2,"Courier":2,"Georgia":2,"Monospace":2,"Sans-Serif":2, "Segoe UI":2,"Tahoma":2,"Times New Roman":2,"Trebuchet MS":2,"Verdana": 1},
	    "font-size": {"px": 1, "em": 1, "%": 1},
	    "font-weight": {"bold": 1, "normal": 1},
	    "font-style": {"italic": 1, "normal": 1},
	    "font-variant": {"normal": 1, "small-caps": 1},
	    "height": {"px": 1, "em": 1, "%": 1},
	    "left": {"px": 1, "em": 1, "%": 1},
	    "letter-spacing": {"normal": 1},
	    "line-height": {"normal": 1},
	    "list-style-type": {"none": 1, "disc": 1, "circle": 1, "square": 1, "decimal": 1, "decimal-leading-zero": 1, "lower-roman": 1, "upper-roman": 1, "lower-greek": 1, "lower-latin": 1, "upper-latin": 1, "georgian": 1, "lower-alpha": 1, "upper-alpha": 1},
	    "margin": {"px": 1, "em": 1, "%": 1},
	    "margin-right": {"px": 1, "em": 1, "%": 1},
	    "margin-left": {"px": 1, "em": 1, "%": 1},
	    "margin-top": {"px": 1, "em": 1, "%": 1},
	    "margin-bottom": {"px": 1, "em": 1, "%": 1},
	    "max-height": {"px": 1, "em": 1, "%": 1},
	    "max-width": {"px": 1, "em": 1, "%": 1},
	    "min-height": {"px": 1, "em": 1, "%": 1},
	    "min-width": {"px": 1, "em": 1, "%": 1},
	    "overflow": {"hidden": 1, "visible": 1, "auto": 1, "scroll": 1},
	    "overflow-x": {"hidden": 1, "visible": 1, "auto": 1, "scroll": 1},
	    "overflow-y": {"hidden": 1, "visible": 1, "auto": 1, "scroll": 1},
	    "padding": {"px": 1, "em": 1, "%": 1},
	    "padding-top": {"px": 1, "em": 1, "%": 1},
	    "padding-right": {"px": 1, "em": 1, "%": 1},
	    "padding-bottom": {"px": 1, "em": 1, "%": 1},
	    "padding-left": {"px": 1, "em": 1, "%": 1},
	    "page-break-after": {"auto": 1, "always": 1, "avoid": 1, "left": 1, "right": 1},
	    "page-break-before": {"auto": 1, "always": 1, "avoid": 1, "left": 1, "right": 1},
	    "position": {"absolute": 1, "relative": 1, "fixed": 1, "static": 1},
	    "right": {"px": 1, "em": 1, "%": 1},
	    "table-layout": {"fixed": 1, "auto": 1},
	    "text-decoration": {"none": 1, "underline": 1, "line-through": 1, "blink": 1},
	    "text-align": {"left": 1, "right": 1, "center": 1, "justify": 1},
	    "text-transform": {"capitalize": 1, "uppercase": 1, "lowercase": 1, "none": 1},
	    "top": {"px": 1, "em": 1, "%": 1},
	    "vertical-align": {"top": 1, "bottom": 1},
	    "visibility": {"hidden": 1, "visible": 1},
	    "white-space": {"nowrap": 1, "normal": 1, "pre": 1, "pre-line": 1, "pre-wrap": 1},
	    "width": {"px": 1, "em": 1, "%": 1},
	    "word-spacing": {"normal": 1},
	    "filter": {"alpha(opacity=$0100)": 1},
	
	    "text-shadow": {"$02px 2px 2px #777": 1},
	    "text-overflow": {"ellipsis-word": 1, "clip": 1, "ellipsis": 1},
	    "-moz-border-radius": 1,
	    "-moz-border-radius-topright": 1,
	    "-moz-border-radius-bottomright": 1,
	    "-moz-border-radius-topleft": 1,
	    "-moz-border-radius-bottomleft": 1,
	    "-webkit-border-radius": 1,
	    "-webkit-border-top-right-radius": 1,
	    "-webkit-border-top-left-radius": 1,
	    "-webkit-border-bottom-right-radius": 1,
	    "-webkit-border-bottom-left-radius": 1,
	    "-moz-box-shadow": 1,
	    "-webkit-box-shadow": 1,
	    "transform": {"rotate($00deg)": 1, "skew($00deg)": 1},
	    "-moz-transform": {"rotate($00deg)": 1, "skew($00deg)": 1},
	    "-webkit-transform": {"rotate($00deg)": 1, "skew($00deg)": 1 }
	};
	
	var CssCompletions = function() {
	
	};
	
	(function() {
	
	    this.completionsDefined = false;
	
	    this.defineCompletions = function() {
	        if (document) {
	            var style = document.createElement('c').style;
	
	            for (var i in style) {
	                if (typeof style[i] !== 'string')
	                    continue;
	
	                var name = i.replace(/[A-Z]/g, function(x) {
	                    return '-' + x.toLowerCase();
	                });
	
	                if (!propertyMap.hasOwnProperty(name))
	                    propertyMap[name] = 1;
	            }
	        }
	
	        this.completionsDefined = true;
	    }
	
	    this.getCompletions = function(state, session, pos, prefix) {
	        if (!this.completionsDefined) {
	            this.defineCompletions();
	        }
	
	        var token = session.getTokenAt(pos.row, pos.column);
	
	        if (!token)
	            return [];
	        if (state==='ruleset'){
	            var line = session.getLine(pos.row).substr(0, pos.column);
	            if (/:[^;]+$/.test(line)) {
	                /([\w\-]+):[^:]*$/.test(line);
	
	                return this.getPropertyValueCompletions(state, session, pos, prefix);
	            } else {
	                return this.getPropertyCompletions(state, session, pos, prefix);
	            }
	        }
	
	        return [];
	    };
	
	    this.getPropertyCompletions = function(state, session, pos, prefix) {
	        var properties = Object.keys(propertyMap);
	        return properties.map(function(property){
	            return {
	                caption: property,
	                snippet: property + ': $0',
	                meta: "property",
	                score: Number.MAX_VALUE
	            };
	        });
	    };
	
	    this.getPropertyValueCompletions = function(state, session, pos, prefix) {
	        var line = session.getLine(pos.row).substr(0, pos.column);
	        var property = (/([\w\-]+):[^:]*$/.exec(line) || {})[1];
	
	        if (!property)
	            return [];
	        var values = [];
	        if (property in propertyMap && typeof propertyMap[property] === "object") {
	            values = Object.keys(propertyMap[property]);
	        }
	        return values.map(function(value){
	            return {
	                caption: value,
	                snippet: value,
	                meta: "property value",
	                score: Number.MAX_VALUE
	            };
	        });
	    };
	
	}).call(CssCompletions.prototype);
	
	exports.CssCompletions = CssCompletions;
	});
	
	ace.define("ace/mode/behaviour/css",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/mode/behaviour/cstyle","ace/token_iterator"], function(acequire, exports, module) {
	"use strict";
	
	var oop = acequire("../../lib/oop");
	var Behaviour = acequire("../behaviour").Behaviour;
	var CstyleBehaviour = acequire("./cstyle").CstyleBehaviour;
	var TokenIterator = acequire("../../token_iterator").TokenIterator;
	
	var CssBehaviour = function () {
	
	    this.inherit(CstyleBehaviour);
	
	    this.add("colon", "insertion", function (state, action, editor, session, text) {
	        if (text === ':') {
	            var cursor = editor.getCursorPosition();
	            var iterator = new TokenIterator(session, cursor.row, cursor.column);
	            var token = iterator.getCurrentToken();
	            if (token && token.value.match(/\s+/)) {
	                token = iterator.stepBackward();
	            }
	            if (token && token.type === 'support.type') {
	                var line = session.doc.getLine(cursor.row);
	                var rightChar = line.substring(cursor.column, cursor.column + 1);
	                if (rightChar === ':') {
	                    return {
	                       text: '',
	                       selection: [1, 1]
	                    }
	                }
	                if (!line.substring(cursor.column).match(/^\s*;/)) {
	                    return {
	                       text: ':;',
	                       selection: [1, 1]
	                    }
	                }
	            }
	        }
	    });
	
	    this.add("colon", "deletion", function (state, action, editor, session, range) {
	        var selected = session.doc.getTextRange(range);
	        if (!range.isMultiLine() && selected === ':') {
	            var cursor = editor.getCursorPosition();
	            var iterator = new TokenIterator(session, cursor.row, cursor.column);
	            var token = iterator.getCurrentToken();
	            if (token && token.value.match(/\s+/)) {
	                token = iterator.stepBackward();
	            }
	            if (token && token.type === 'support.type') {
	                var line = session.doc.getLine(range.start.row);
	                var rightChar = line.substring(range.end.column, range.end.column + 1);
	                if (rightChar === ';') {
	                    range.end.column ++;
	                    return range;
	                }
	            }
	        }
	    });
	
	    this.add("semicolon", "insertion", function (state, action, editor, session, text) {
	        if (text === ';') {
	            var cursor = editor.getCursorPosition();
	            var line = session.doc.getLine(cursor.row);
	            var rightChar = line.substring(cursor.column, cursor.column + 1);
	            if (rightChar === ';') {
	                return {
	                   text: '',
	                   selection: [1, 1]
	                }
	            }
	        }
	    });
	
	}
	oop.inherits(CssBehaviour, CstyleBehaviour);
	
	exports.CssBehaviour = CssBehaviour;
	});
	
	ace.define("ace/mode/css",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/css_highlight_rules","ace/mode/matching_brace_outdent","ace/worker/worker_client","ace/mode/css_completions","ace/mode/behaviour/css","ace/mode/folding/cstyle"], function(acequire, exports, module) {
	"use strict";
	
	var oop = acequire("../lib/oop");
	var TextMode = acequire("./text").Mode;
	var CssHighlightRules = acequire("./css_highlight_rules").CssHighlightRules;
	var MatchingBraceOutdent = acequire("./matching_brace_outdent").MatchingBraceOutdent;
	var WorkerClient = acequire("../worker/worker_client").WorkerClient;
	var CssCompletions = acequire("./css_completions").CssCompletions;
	var CssBehaviour = acequire("./behaviour/css").CssBehaviour;
	var CStyleFoldMode = acequire("./folding/cstyle").FoldMode;
	
	var Mode = function() {
	    this.HighlightRules = CssHighlightRules;
	    this.$outdent = new MatchingBraceOutdent();
	    this.$behaviour = new CssBehaviour();
	    this.$completer = new CssCompletions();
	    this.foldingRules = new CStyleFoldMode();
	};
	oop.inherits(Mode, TextMode);
	
	(function() {
	
	    this.foldingRules = "cStyle";
	    this.blockComment = {start: "/*", end: "*/"};
	
	    this.getNextLineIndent = function(state, line, tab) {
	        var indent = this.$getIndent(line);
	        var tokens = this.getTokenizer().getLineTokens(line, state).tokens;
	        if (tokens.length && tokens[tokens.length-1].type == "comment") {
	            return indent;
	        }
	
	        var match = line.match(/^.*\{\s*$/);
	        if (match) {
	            indent += tab;
	        }
	
	        return indent;
	    };
	
	    this.checkOutdent = function(state, line, input) {
	        return this.$outdent.checkOutdent(line, input);
	    };
	
	    this.autoOutdent = function(state, doc, row) {
	        this.$outdent.autoOutdent(doc, row);
	    };
	
	    this.getCompletions = function(state, session, pos, prefix) {
	        return this.$completer.getCompletions(state, session, pos, prefix);
	    };
	
	    this.createWorker = function(session) {
	        var worker = new WorkerClient(["ace"], __webpack_require__(29), "Worker");
	        worker.attachToDocument(session.getDocument());
	
	        worker.on("annotate", function(e) {
	            session.setAnnotations(e.data);
	        });
	
	        worker.on("terminate", function() {
	            session.clearAnnotations();
	        });
	
	        return worker;
	    };
	
	    this.$id = "ace/mode/css";
	}).call(Mode.prototype);
	
	exports.Mode = Mode;
	
	});
	
	ace.define("ace/mode/html_highlight_rules",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/css_highlight_rules","ace/mode/javascript_highlight_rules","ace/mode/xml_highlight_rules"], function(acequire, exports, module) {
	"use strict";
	
	var oop = acequire("../lib/oop");
	var lang = acequire("../lib/lang");
	var CssHighlightRules = acequire("./css_highlight_rules").CssHighlightRules;
	var JavaScriptHighlightRules = acequire("./javascript_highlight_rules").JavaScriptHighlightRules;
	var XmlHighlightRules = acequire("./xml_highlight_rules").XmlHighlightRules;
	
	var tagMap = lang.createMap({
	    a           : 'anchor',
	    button 	    : 'form',
	    form        : 'form',
	    img         : 'image',
	    input       : 'form',
	    label       : 'form',
	    option      : 'form',
	    script      : 'script',
	    select      : 'form',
	    textarea    : 'form',
	    style       : 'style',
	    table       : 'table',
	    tbody       : 'table',
	    td          : 'table',
	    tfoot       : 'table',
	    th          : 'table',
	    tr          : 'table'
	});
	
	var HtmlHighlightRules = function() {
	    XmlHighlightRules.call(this);
	
	    this.addRules({
	        attributes: [{
	            include : "tag_whitespace"
	        }, {
	            token : "entity.other.attribute-name.xml",
	            regex : "[-_a-zA-Z0-9:.]+"
	        }, {
	            token : "keyword.operator.attribute-equals.xml",
	            regex : "=",
	            push : [{
	                include: "tag_whitespace"
	            }, {
	                token : "string.unquoted.attribute-value.html",
	                regex : "[^<>='\"`\\s]+",
	                next : "pop"
	            }, {
	                token : "empty",
	                regex : "",
	                next : "pop"
	            }]
	        }, {
	            include : "attribute_value"
	        }],
	        tag: [{
	            token : function(start, tag) {
	                var group = tagMap[tag];
	                return ["meta.tag.punctuation." + (start == "<" ? "" : "end-") + "tag-open.xml",
	                    "meta.tag" + (group ? "." + group : "") + ".tag-name.xml"];
	            },
	            regex : "(</?)([-_a-zA-Z0-9:.]+)",
	            next: "tag_stuff"
	        }],
	        tag_stuff: [
	            {include : "attributes"},
	            {token : "meta.tag.punctuation.tag-close.xml", regex : "/?>", next : "start"}
	        ],
	    });
	
	    this.embedTagRules(CssHighlightRules, "css-", "style");
	    this.embedTagRules(new JavaScriptHighlightRules({noJSX: true}).getRules(), "js-", "script");
	
	    if (this.constructor === HtmlHighlightRules)
	        this.normalizeRules();
	};
	
	oop.inherits(HtmlHighlightRules, XmlHighlightRules);
	
	exports.HtmlHighlightRules = HtmlHighlightRules;
	});
	
	ace.define("ace/mode/folding/mixed",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode"], function(acequire, exports, module) {
	"use strict";
	
	var oop = acequire("../../lib/oop");
	var BaseFoldMode = acequire("./fold_mode").FoldMode;
	
	var FoldMode = exports.FoldMode = function(defaultMode, subModes) {
	    this.defaultMode = defaultMode;
	    this.subModes = subModes;
	};
	oop.inherits(FoldMode, BaseFoldMode);
	
	(function() {
	
	
	    this.$getMode = function(state) {
	        if (typeof state != "string") 
	            state = state[0];
	        for (var key in this.subModes) {
	            if (state.indexOf(key) === 0)
	                return this.subModes[key];
	        }
	        return null;
	    };
	    
	    this.$tryMode = function(state, session, foldStyle, row) {
	        var mode = this.$getMode(state);
	        return (mode ? mode.getFoldWidget(session, foldStyle, row) : "");
	    };
	
	    this.getFoldWidget = function(session, foldStyle, row) {
	        return (
	            this.$tryMode(session.getState(row-1), session, foldStyle, row) ||
	            this.$tryMode(session.getState(row), session, foldStyle, row) ||
	            this.defaultMode.getFoldWidget(session, foldStyle, row)
	        );
	    };
	
	    this.getFoldWidgetRange = function(session, foldStyle, row) {
	        var mode = this.$getMode(session.getState(row-1));
	        
	        if (!mode || !mode.getFoldWidget(session, foldStyle, row))
	            mode = this.$getMode(session.getState(row));
	        
	        if (!mode || !mode.getFoldWidget(session, foldStyle, row))
	            mode = this.defaultMode;
	        
	        return mode.getFoldWidgetRange(session, foldStyle, row);
	    };
	
	}).call(FoldMode.prototype);
	
	});
	
	ace.define("ace/mode/folding/html",["require","exports","module","ace/lib/oop","ace/mode/folding/mixed","ace/mode/folding/xml","ace/mode/folding/cstyle"], function(acequire, exports, module) {
	"use strict";
	
	var oop = acequire("../../lib/oop");
	var MixedFoldMode = acequire("./mixed").FoldMode;
	var XmlFoldMode = acequire("./xml").FoldMode;
	var CStyleFoldMode = acequire("./cstyle").FoldMode;
	
	var FoldMode = exports.FoldMode = function(voidElements, optionalTags) {
	    MixedFoldMode.call(this, new XmlFoldMode(voidElements, optionalTags), {
	        "js-": new CStyleFoldMode(),
	        "css-": new CStyleFoldMode()
	    });
	};
	
	oop.inherits(FoldMode, MixedFoldMode);
	
	});
	
	ace.define("ace/mode/html_completions",["require","exports","module","ace/token_iterator"], function(acequire, exports, module) {
	"use strict";
	
	var TokenIterator = acequire("../token_iterator").TokenIterator;
	
	var commonAttributes = [
	    "accesskey",
	    "class",
	    "contenteditable",
	    "contextmenu",
	    "dir",
	    "draggable",
	    "dropzone",
	    "hidden",
	    "id",
	    "inert",
	    "itemid",
	    "itemprop",
	    "itemref",
	    "itemscope",
	    "itemtype",
	    "lang",
	    "spellcheck",
	    "style",
	    "tabindex",
	    "title",
	    "translate"
	];
	
	var eventAttributes = [
	    "onabort",
	    "onblur",
	    "oncancel",
	    "oncanplay",
	    "oncanplaythrough",
	    "onchange",
	    "onclick",
	    "onclose",
	    "oncontextmenu",
	    "oncuechange",
	    "ondblclick",
	    "ondrag",
	    "ondragend",
	    "ondragenter",
	    "ondragleave",
	    "ondragover",
	    "ondragstart",
	    "ondrop",
	    "ondurationchange",
	    "onemptied",
	    "onended",
	    "onerror",
	    "onfocus",
	    "oninput",
	    "oninvalid",
	    "onkeydown",
	    "onkeypress",
	    "onkeyup",
	    "onload",
	    "onloadeddata",
	    "onloadedmetadata",
	    "onloadstart",
	    "onmousedown",
	    "onmousemove",
	    "onmouseout",
	    "onmouseover",
	    "onmouseup",
	    "onmousewheel",
	    "onpause",
	    "onplay",
	    "onplaying",
	    "onprogress",
	    "onratechange",
	    "onreset",
	    "onscroll",
	    "onseeked",
	    "onseeking",
	    "onselect",
	    "onshow",
	    "onstalled",
	    "onsubmit",
	    "onsuspend",
	    "ontimeupdate",
	    "onvolumechange",
	    "onwaiting"
	];
	
	var globalAttributes = commonAttributes.concat(eventAttributes);
	
	var attributeMap = {
	    "html": {"manifest": 1},
	    "head": {},
	    "title": {},
	    "base": {"href": 1, "target": 1},
	    "link": {"href": 1, "hreflang": 1, "rel": {"stylesheet": 1, "icon": 1}, "media": {"all": 1, "screen": 1, "print": 1}, "type": {"text/css": 1, "image/png": 1, "image/jpeg": 1, "image/gif": 1}, "sizes": 1},
	    "meta": {"http-equiv": {"content-type": 1}, "name": {"description": 1, "keywords": 1}, "content": {"text/html; charset=UTF-8": 1}, "charset": 1},
	    "style": {"type": 1, "media": {"all": 1, "screen": 1, "print": 1}, "scoped": 1},
	    "script": {"charset": 1, "type": {"text/javascript": 1}, "src": 1, "defer": 1, "async": 1},
	    "noscript": {"href": 1},
	    "body": {"onafterprint": 1, "onbeforeprint": 1, "onbeforeunload": 1, "onhashchange": 1, "onmessage": 1, "onoffline": 1, "onpopstate": 1, "onredo": 1, "onresize": 1, "onstorage": 1, "onundo": 1, "onunload": 1},
	    "section": {},
	    "nav": {},
	    "article": {"pubdate": 1},
	    "aside": {},
	    "h1": {},
	    "h2": {},
	    "h3": {},
	    "h4": {},
	    "h5": {},
	    "h6": {},
	    "header": {},
	    "footer": {},
	    "address": {},
	    "main": {},
	    "p": {},
	    "hr": {},
	    "pre": {},
	    "blockquote": {"cite": 1},
	    "ol": {"start": 1, "reversed": 1},
	    "ul": {},
	    "li": {"value": 1},
	    "dl": {},
	    "dt": {},
	    "dd": {},
	    "figure": {},
	    "figcaption": {},
	    "div": {},
	    "a": {"href": 1, "target": {"_blank": 1, "top": 1}, "ping": 1, "rel": {"nofollow": 1, "alternate": 1, "author": 1, "bookmark": 1, "help": 1, "license": 1, "next": 1, "noreferrer": 1, "prefetch": 1, "prev": 1, "search": 1, "tag": 1}, "media": 1, "hreflang": 1, "type": 1},
	    "em": {},
	    "strong": {},
	    "small": {},
	    "s": {},
	    "cite": {},
	    "q": {"cite": 1},
	    "dfn": {},
	    "abbr": {},
	    "data": {},
	    "time": {"datetime": 1},
	    "code": {},
	    "var": {},
	    "samp": {},
	    "kbd": {},
	    "sub": {},
	    "sup": {},
	    "i": {},
	    "b": {},
	    "u": {},
	    "mark": {},
	    "ruby": {},
	    "rt": {},
	    "rp": {},
	    "bdi": {},
	    "bdo": {},
	    "span": {},
	    "br": {},
	    "wbr": {},
	    "ins": {"cite": 1, "datetime": 1},
	    "del": {"cite": 1, "datetime": 1},
	    "img": {"alt": 1, "src": 1, "height": 1, "width": 1, "usemap": 1, "ismap": 1},
	    "iframe": {"name": 1, "src": 1, "height": 1, "width": 1, "sandbox": {"allow-same-origin": 1, "allow-top-navigation": 1, "allow-forms": 1, "allow-scripts": 1}, "seamless": {"seamless": 1}},
	    "embed": {"src": 1, "height": 1, "width": 1, "type": 1},
	    "object": {"param": 1, "data": 1, "type": 1, "height" : 1, "width": 1, "usemap": 1, "name": 1, "form": 1, "classid": 1},
	    "param": {"name": 1, "value": 1},
	    "video": {"src": 1, "autobuffer": 1, "autoplay": {"autoplay": 1}, "loop": {"loop": 1}, "controls": {"controls": 1}, "width": 1, "height": 1, "poster": 1, "muted": {"muted": 1}, "preload": {"auto": 1, "metadata": 1, "none": 1}},
	    "audio": {"src": 1, "autobuffer": 1, "autoplay": {"autoplay": 1}, "loop": {"loop": 1}, "controls": {"controls": 1}, "muted": {"muted": 1}, "preload": {"auto": 1, "metadata": 1, "none": 1 }},
	    "source": {"src": 1, "type": 1, "media": 1},
	    "track": {"kind": 1, "src": 1, "srclang": 1, "label": 1, "default": 1},
	    "canvas": {"width": 1, "height": 1},
	    "map": {"name": 1},
	    "area": {"shape": 1, "coords": 1, "href": 1, "hreflang": 1, "alt": 1, "target": 1, "media": 1, "rel": 1, "ping": 1, "type": 1},
	    "svg": {},
	    "math": {},
	    "table": {"summary": 1},
	    "caption": {},
	    "colgroup": {"span": 1},
	    "col": {"span": 1},
	    "tbody": {},
	    "thead": {},
	    "tfoot": {},
	    "tr": {},
	    "td": {"headers": 1, "rowspan": 1, "colspan": 1},
	    "th": {"headers": 1, "rowspan": 1, "colspan": 1, "scope": 1},
	    "form": {"accept-charset": 1, "action": 1, "autocomplete": 1, "enctype": {"multipart/form-data": 1, "application/x-www-form-urlencoded": 1}, "method": {"get": 1, "post": 1}, "name": 1, "novalidate": 1, "target": {"_blank": 1, "top": 1}},
	    "fieldset": {"disabled": 1, "form": 1, "name": 1},
	    "legend": {},
	    "label": {"form": 1, "for": 1},
	    "input": {
	        "type": {"text": 1, "password": 1, "hidden": 1, "checkbox": 1, "submit": 1, "radio": 1, "file": 1, "button": 1, "reset": 1, "image": 31, "color": 1, "date": 1, "datetime": 1, "datetime-local": 1, "email": 1, "month": 1, "number": 1, "range": 1, "search": 1, "tel": 1, "time": 1, "url": 1, "week": 1},
	        "accept": 1, "alt": 1, "autocomplete": {"on": 1, "off": 1}, "autofocus": {"autofocus": 1}, "checked": {"checked": 1}, "disabled": {"disabled": 1}, "form": 1, "formaction": 1, "formenctype": {"application/x-www-form-urlencoded": 1, "multipart/form-data": 1, "text/plain": 1}, "formmethod": {"get": 1, "post": 1}, "formnovalidate": {"formnovalidate": 1}, "formtarget": {"_blank": 1, "_self": 1, "_parent": 1, "_top": 1}, "height": 1, "list": 1, "max": 1, "maxlength": 1, "min": 1, "multiple": {"multiple": 1}, "pattern": 1, "placeholder": 1, "readonly": {"readonly": 1}, "acequired": {"acequired": 1}, "size": 1, "src": 1, "step": 1, "width": 1, "files": 1, "value": 1},
	    "button": {"autofocus": 1, "disabled": {"disabled": 1}, "form": 1, "formaction": 1, "formenctype": 1, "formmethod": 1, "formnovalidate": 1, "formtarget": 1, "name": 1, "value": 1, "type": {"button": 1, "submit": 1}},
	    "select": {"autofocus": 1, "disabled": 1, "form": 1, "multiple": {"multiple": 1}, "name": 1, "size": 1, "readonly":{"readonly": 1}},
	    "datalist": {},
	    "optgroup": {"disabled": 1, "label": 1},
	    "option": {"disabled": 1, "selected": 1, "label": 1, "value": 1},
	    "textarea": {"autofocus": {"autofocus": 1}, "disabled": {"disabled": 1}, "form": 1, "maxlength": 1, "name": 1, "placeholder": 1, "readonly": {"readonly": 1}, "acequired": {"acequired": 1}, "rows": 1, "cols": 1, "wrap": {"on": 1, "off": 1, "hard": 1, "soft": 1}},
	    "keygen": {"autofocus": 1, "challenge": {"challenge": 1}, "disabled": {"disabled": 1}, "form": 1, "keytype": {"rsa": 1, "dsa": 1, "ec": 1}, "name": 1},
	    "output": {"for": 1, "form": 1, "name": 1},
	    "progress": {"value": 1, "max": 1},
	    "meter": {"value": 1, "min": 1, "max": 1, "low": 1, "high": 1, "optimum": 1},
	    "details": {"open": 1},
	    "summary": {},
	    "command": {"type": 1, "label": 1, "icon": 1, "disabled": 1, "checked": 1, "radiogroup": 1, "command": 1},
	    "menu": {"type": 1, "label": 1},
	    "dialog": {"open": 1}
	};
	
	var elements = Object.keys(attributeMap);
	
	function is(token, type) {
	    return token.type.lastIndexOf(type + ".xml") > -1;
	}
	
	function findTagName(session, pos) {
	    var iterator = new TokenIterator(session, pos.row, pos.column);
	    var token = iterator.getCurrentToken();
	    while (token && !is(token, "tag-name")){
	        token = iterator.stepBackward();
	    }
	    if (token)
	        return token.value;
	}
	
	function findAttributeName(session, pos) {
	    var iterator = new TokenIterator(session, pos.row, pos.column);
	    var token = iterator.getCurrentToken();
	    while (token && !is(token, "attribute-name")){
	        token = iterator.stepBackward();
	    }
	    if (token)
	        return token.value;
	}
	
	var HtmlCompletions = function() {
	
	};
	
	(function() {
	
	    this.getCompletions = function(state, session, pos, prefix) {
	        var token = session.getTokenAt(pos.row, pos.column);
	
	        if (!token)
	            return [];
	        if (is(token, "tag-name") || is(token, "tag-open") || is(token, "end-tag-open"))
	            return this.getTagCompletions(state, session, pos, prefix);
	        if (is(token, "tag-whitespace") || is(token, "attribute-name"))
	            return this.getAttributeCompletions(state, session, pos, prefix);
	        if (is(token, "attribute-value"))
	            return this.getAttributeValueCompletions(state, session, pos, prefix);
	        var line = session.getLine(pos.row).substr(0, pos.column);
	        if (/&[A-z]*$/i.test(line))
	            return this.getHTMLEntityCompletions(state, session, pos, prefix);
	
	        return [];
	    };
	
	    this.getTagCompletions = function(state, session, pos, prefix) {
	        return elements.map(function(element){
	            return {
	                value: element,
	                meta: "tag",
	                score: Number.MAX_VALUE
	            };
	        });
	    };
	
	    this.getAttributeCompletions = function(state, session, pos, prefix) {
	        var tagName = findTagName(session, pos);
	        if (!tagName)
	            return [];
	        var attributes = globalAttributes;
	        if (tagName in attributeMap) {
	            attributes = attributes.concat(Object.keys(attributeMap[tagName]));
	        }
	        return attributes.map(function(attribute){
	            return {
	                caption: attribute,
	                snippet: attribute + '="$0"',
	                meta: "attribute",
	                score: Number.MAX_VALUE
	            };
	        });
	    };
	
	    this.getAttributeValueCompletions = function(state, session, pos, prefix) {
	        var tagName = findTagName(session, pos);
	        var attributeName = findAttributeName(session, pos);
	        
	        if (!tagName)
	            return [];
	        var values = [];
	        if (tagName in attributeMap && attributeName in attributeMap[tagName] && typeof attributeMap[tagName][attributeName] === "object") {
	            values = Object.keys(attributeMap[tagName][attributeName]);
	        }
	        return values.map(function(value){
	            return {
	                caption: value,
	                snippet: value,
	                meta: "attribute value",
	                score: Number.MAX_VALUE
	            };
	        });
	    };
	
	    this.getHTMLEntityCompletions = function(state, session, pos, prefix) {
	        var values = ['&Aacute;', '&aacute;', '&Acirc;', '&acirc;', '&acute;', '&AElig;', '&aelig;', '&Agrave;', '&agrave;', '&alefsym;', '&Alpha;', '&alpha;', '&amp;', '&and;', '&ang;', '&Aring;', '&aring;', '&asymp;', '&Atilde;', '&atilde;', '&Auml;', '&auml;', '&bdquo;', '&Beta;', '&beta;', '&brvbar;', '&bull;', '&cap;', '&Ccedil;', '&ccedil;', '&cedil;', '&cent;', '&Chi;', '&chi;', '&circ;', '&clubs;', '&cong;', '&copy;', '&crarr;', '&cup;', '&curren;', '&Dagger;', '&dagger;', '&dArr;', '&darr;', '&deg;', '&Delta;', '&delta;', '&diams;', '&divide;', '&Eacute;', '&eacute;', '&Ecirc;', '&ecirc;', '&Egrave;', '&egrave;', '&empty;', '&emsp;', '&ensp;', '&Epsilon;', '&epsilon;', '&equiv;', '&Eta;', '&eta;', '&ETH;', '&eth;', '&Euml;', '&euml;', '&euro;', '&exist;', '&fnof;', '&forall;', '&frac12;', '&frac14;', '&frac34;', '&frasl;', '&Gamma;', '&gamma;', '&ge;', '&gt;', '&hArr;', '&harr;', '&hearts;', '&hellip;', '&Iacute;', '&iacute;', '&Icirc;', '&icirc;', '&iexcl;', '&Igrave;', '&igrave;', '&image;', '&infin;', '&int;', '&Iota;', '&iota;', '&iquest;', '&isin;', '&Iuml;', '&iuml;', '&Kappa;', '&kappa;', '&Lambda;', '&lambda;', '&lang;', '&laquo;', '&lArr;', '&larr;', '&lceil;', '&ldquo;', '&le;', '&lfloor;', '&lowast;', '&loz;', '&lrm;', '&lsaquo;', '&lsquo;', '&lt;', '&macr;', '&mdash;', '&micro;', '&middot;', '&minus;', '&Mu;', '&mu;', '&nabla;', '&nbsp;', '&ndash;', '&ne;', '&ni;', '&not;', '&notin;', '&nsub;', '&Ntilde;', '&ntilde;', '&Nu;', '&nu;', '&Oacute;', '&oacute;', '&Ocirc;', '&ocirc;', '&OElig;', '&oelig;', '&Ograve;', '&ograve;', '&oline;', '&Omega;', '&omega;', '&Omicron;', '&omicron;', '&oplus;', '&or;', '&ordf;', '&ordm;', '&Oslash;', '&oslash;', '&Otilde;', '&otilde;', '&otimes;', '&Ouml;', '&ouml;', '&para;', '&part;', '&permil;', '&perp;', '&Phi;', '&phi;', '&Pi;', '&pi;', '&piv;', '&plusmn;', '&pound;', '&Prime;', '&prime;', '&prod;', '&prop;', '&Psi;', '&psi;', '&quot;', '&radic;', '&rang;', '&raquo;', '&rArr;', '&rarr;', '&rceil;', '&rdquo;', '&real;', '&reg;', '&rfloor;', '&Rho;', '&rho;', '&rlm;', '&rsaquo;', '&rsquo;', '&sbquo;', '&Scaron;', '&scaron;', '&sdot;', '&sect;', '&shy;', '&Sigma;', '&sigma;', '&sigmaf;', '&sim;', '&spades;', '&sub;', '&sube;', '&sum;', '&sup;', '&sup1;', '&sup2;', '&sup3;', '&supe;', '&szlig;', '&Tau;', '&tau;', '&there4;', '&Theta;', '&theta;', '&thetasym;', '&thinsp;', '&THORN;', '&thorn;', '&tilde;', '&times;', '&trade;', '&Uacute;', '&uacute;', '&uArr;', '&uarr;', '&Ucirc;', '&ucirc;', '&Ugrave;', '&ugrave;', '&uml;', '&upsih;', '&Upsilon;', '&upsilon;', '&Uuml;', '&uuml;', '&weierp;', '&Xi;', '&xi;', '&Yacute;', '&yacute;', '&yen;', '&Yuml;', '&yuml;', '&Zeta;', '&zeta;', '&zwj;', '&zwnj;'];
	
	        return values.map(function(value){
	            return {
	                caption: value,
	                snippet: value.substr(1),
	                meta: "html entity",
	                score: Number.MAX_VALUE
	            };
	        });
	    };
	
	}).call(HtmlCompletions.prototype);
	
	exports.HtmlCompletions = HtmlCompletions;
	});
	
	ace.define("ace/mode/html",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/text","ace/mode/javascript","ace/mode/css","ace/mode/html_highlight_rules","ace/mode/behaviour/xml","ace/mode/folding/html","ace/mode/html_completions","ace/worker/worker_client"], function(acequire, exports, module) {
	"use strict";
	
	var oop = acequire("../lib/oop");
	var lang = acequire("../lib/lang");
	var TextMode = acequire("./text").Mode;
	var JavaScriptMode = acequire("./javascript").Mode;
	var CssMode = acequire("./css").Mode;
	var HtmlHighlightRules = acequire("./html_highlight_rules").HtmlHighlightRules;
	var XmlBehaviour = acequire("./behaviour/xml").XmlBehaviour;
	var HtmlFoldMode = acequire("./folding/html").FoldMode;
	var HtmlCompletions = acequire("./html_completions").HtmlCompletions;
	var WorkerClient = acequire("../worker/worker_client").WorkerClient;
	var voidElements = ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "meta", "menuitem", "param", "source", "track", "wbr"];
	var optionalEndTags = ["li", "dt", "dd", "p", "rt", "rp", "optgroup", "option", "colgroup", "td", "th"];
	
	var Mode = function(options) {
	    this.fragmentContext = options && options.fragmentContext;
	    this.HighlightRules = HtmlHighlightRules;
	    this.$behaviour = new XmlBehaviour();
	    this.$completer = new HtmlCompletions();
	    
	    this.createModeDelegates({
	        "js-": JavaScriptMode,
	        "css-": CssMode
	    });
	    
	    this.foldingRules = new HtmlFoldMode(this.voidElements, lang.arrayToMap(optionalEndTags));
	};
	oop.inherits(Mode, TextMode);
	
	(function() {
	
	    this.blockComment = {start: "<!--", end: "-->"};
	
	    this.voidElements = lang.arrayToMap(voidElements);
	
	    this.getNextLineIndent = function(state, line, tab) {
	        return this.$getIndent(line);
	    };
	
	    this.checkOutdent = function(state, line, input) {
	        return false;
	    };
	
	    this.getCompletions = function(state, session, pos, prefix) {
	        return this.$completer.getCompletions(state, session, pos, prefix);
	    };
	
	    this.createWorker = function(session) {
	        if (this.constructor != Mode)
	            return;
	        var worker = new WorkerClient(["ace"], __webpack_require__(30), "Worker");
	        worker.attachToDocument(session.getDocument());
	
	        if (this.fragmentContext)
	            worker.call("setOptions", [{context: this.fragmentContext}]);
	
	        worker.on("error", function(e) {
	            session.setAnnotations(e.data);
	        });
	
	        worker.on("terminate", function() {
	            session.clearAnnotations();
	        });
	
	        return worker;
	    };
	
	    this.$id = "ace/mode/html";
	}).call(Mode.prototype);
	
	exports.Mode = Mode;
	});
	
	ace.define("ace/mode/markdown_highlight_rules",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/text_highlight_rules","ace/mode/javascript_highlight_rules","ace/mode/xml_highlight_rules","ace/mode/html_highlight_rules","ace/mode/css_highlight_rules"], function(acequire, exports, module) {
	"use strict";
	
	var oop = acequire("../lib/oop");
	var lang = acequire("../lib/lang");
	var TextHighlightRules = acequire("./text_highlight_rules").TextHighlightRules;
	var JavaScriptHighlightRules = acequire("./javascript_highlight_rules").JavaScriptHighlightRules;
	var XmlHighlightRules = acequire("./xml_highlight_rules").XmlHighlightRules;
	var HtmlHighlightRules = acequire("./html_highlight_rules").HtmlHighlightRules;
	var CssHighlightRules = acequire("./css_highlight_rules").CssHighlightRules;
	
	var escaped = function(ch) {
	    return "(?:[^" + lang.escapeRegExp(ch) + "\\\\]|\\\\.)*";
	}
	
	function github_embed(tag, prefix) {
	    return { // Github style block
	        token : "support.function",
	        regex : "^\\s*```" + tag + "\\s*$",
	        push  : prefix + "start"
	    };
	}
	
	var MarkdownHighlightRules = function() {
	    HtmlHighlightRules.call(this);
	
	    this.$rules["start"].unshift({
	        token : "empty_line",
	        regex : '^$',
	        next: "allowBlock"
	    }, { // h1
	        token: "markup.heading.1",
	        regex: "^=+(?=\\s*$)"
	    }, { // h2
	        token: "markup.heading.2",
	        regex: "^\\-+(?=\\s*$)"
	    }, {
	        token : function(value) {
	            return "markup.heading." + value.length;
	        },
	        regex : /^#{1,6}(?=\s*[^ #]|\s+#.)/,
	        next : "header"
	    },
	       github_embed("(?:javascript|js)", "jscode-"),
	       github_embed("xml", "xmlcode-"),
	       github_embed("html", "htmlcode-"),
	       github_embed("css", "csscode-"),
	    { // Github style block
	        token : "support.function",
	        regex : "^\\s*```\\s*\\S*(?:{.*?\\})?\\s*$",
	        next  : "githubblock"
	    }, { // block quote
	        token : "string.blockquote",
	        regex : "^\\s*>\\s*(?:[*+-]|\\d+\\.)?\\s+",
	        next  : "blockquote"
	    }, { // HR * - _
	        token : "constant",
	        regex : "^ {0,2}(?:(?: ?\\* ?){3,}|(?: ?\\- ?){3,}|(?: ?\\_ ?){3,})\\s*$",
	        next: "allowBlock"
	    }, { // list
	        token : "markup.list",
	        regex : "^\\s{0,3}(?:[*+-]|\\d+\\.)\\s+",
	        next  : "listblock-start"
	    }, {
	        include : "basic"
	    });
	
	    this.addRules({
	        "basic" : [{
	            token : "constant.language.escape",
	            regex : /\\[\\`*_{}\[\]()#+\-.!]/
	        }, { // code span `
	            token : "support.function",
	            regex : "(`+)(.*?[^`])(\\1)"
	        }, { // reference
	            token : ["text", "constant", "text", "url", "string", "text"],
	            regex : "^([ ]{0,3}\\[)([^\\]]+)(\\]:\\s*)([^ ]+)(\\s*(?:[\"][^\"]+[\"])?(\\s*))$"
	        }, { // link by reference
	            token : ["text", "string", "text", "constant", "text"],
	            regex : "(\\[)(" + escaped("]") + ")(\\]\s*\\[)("+ escaped("]") + ")(\\])"
	        }, { // link by url
	            token : ["text", "string", "text", "markup.underline", "string", "text"],
	            regex : "(\\[)(" +                                        // [
	                    escaped("]") +                                    // link text
	                    ")(\\]\\()"+                                      // ](
	                    '((?:[^\\)\\s\\\\]|\\\\.|\\s(?=[^"]))*)' +        // href
	                    '(\\s*"' +  escaped('"') + '"\\s*)?' +            // "title"
	                    "(\\))"                                           // )
	        }, { // strong ** __
	            token : "string.strong",
	            regex : "([*]{2}|[_]{2}(?=\\S))(.*?\\S[*_]*)(\\1)"
	        }, { // emphasis * _
	            token : "string.emphasis",
	            regex : "([*]|[_](?=\\S))(.*?\\S[*_]*)(\\1)"
	        }, { //
	            token : ["text", "url", "text"],
	            regex : "(<)("+
	                      "(?:https?|ftp|dict):[^'\">\\s]+"+
	                      "|"+
	                      "(?:mailto:)?[-.\\w]+\\@[-a-z0-9]+(?:\\.[-a-z0-9]+)*\\.[a-z]+"+
	                    ")(>)"
	        }],
	        "allowBlock": [
	            {token : "support.function", regex : "^ {4}.+", next : "allowBlock"},
	            {token : "empty_line", regex : '^$', next: "allowBlock"},
	            {token : "empty", regex : "", next : "start"}
	        ],
	
	        "header" : [{
	            regex: "$",
	            next : "start"
	        }, {
	            include: "basic"
	        }, {
	            defaultToken : "heading"
	        } ],
	
	        "listblock-start" : [{
	            token : "support.variable",
	            regex : /(?:\[[ x]\])?/,
	            next  : "listblock"
	        }],
	
	        "listblock" : [ { // Lists only escape on completely blank lines.
	            token : "empty_line",
	            regex : "^$",
	            next  : "start"
	        }, { // list
	            token : "markup.list",
	            regex : "^\\s{0,3}(?:[*+-]|\\d+\\.)\\s+",
	            next  : "listblock-start"
	        }, {
	            include : "basic", noEscape: true
	        }, { // Github style block
	            token : "support.function",
	            regex : "^\\s*```\\s*[a-zA-Z]*(?:{.*?\\})?\\s*$",
	            next  : "githubblock"
	        }, {
	            defaultToken : "list" //do not use markup.list to allow stling leading `*` differntly
	        } ],
	
	        "blockquote" : [ { // Blockquotes only escape on blank lines.
	            token : "empty_line",
	            regex : "^\\s*$",
	            next  : "start"
	        }, { // block quote
	            token : "string.blockquote",
	            regex : "^\\s*>\\s*(?:[*+-]|\\d+\\.)?\\s+",
	            next  : "blockquote"
	        }, {
	            include : "basic", noEscape: true
	        }, {
	            defaultToken : "string.blockquote"
	        } ],
	
	        "githubblock" : [ {
	            token : "support.function",
	            regex : "^\\s*```",
	            next  : "start"
	        }, {
	            token : "support.function",
	            regex : ".+"
	        } ]
	    });
	
	    this.embedRules(JavaScriptHighlightRules, "jscode-", [{
	       token : "support.function",
	       regex : "^\\s*```",
	       next  : "pop"
	    }]);
	
	    this.embedRules(HtmlHighlightRules, "htmlcode-", [{
	       token : "support.function",
	       regex : "^\\s*```",
	       next  : "pop"
	    }]);
	
	    this.embedRules(CssHighlightRules, "csscode-", [{
	       token : "support.function",
	       regex : "^\\s*```",
	       next  : "pop"
	    }]);
	
	    this.embedRules(XmlHighlightRules, "xmlcode-", [{
	       token : "support.function",
	       regex : "^\\s*```",
	       next  : "pop"
	    }]);
	
	    this.normalizeRules();
	};
	oop.inherits(MarkdownHighlightRules, TextHighlightRules);
	
	exports.MarkdownHighlightRules = MarkdownHighlightRules;
	});
	
	ace.define("ace/mode/folding/markdown",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode","ace/range"], function(acequire, exports, module) {
	"use strict";
	
	var oop = acequire("../../lib/oop");
	var BaseFoldMode = acequire("./fold_mode").FoldMode;
	var Range = acequire("../../range").Range;
	
	var FoldMode = exports.FoldMode = function() {};
	oop.inherits(FoldMode, BaseFoldMode);
	
	(function() {
	    this.foldingStartMarker = /^(?:[=-]+\s*$|#{1,6} |`{3})/;
	
	    this.getFoldWidget = function(session, foldStyle, row) {
	        var line = session.getLine(row);
	        if (!this.foldingStartMarker.test(line))
	            return "";
	
	        if (line[0] == "`") {
	            if (session.bgTokenizer.getState(row) == "start")
	                return "end";
	            return "start";
	        }
	
	        return "start";
	    };
	
	    this.getFoldWidgetRange = function(session, foldStyle, row) {
	        var line = session.getLine(row);
	        var startColumn = line.length;
	        var maxRow = session.getLength();
	        var startRow = row;
	        var endRow = row;
	        if (!line.match(this.foldingStartMarker))
	            return;
	
	        if (line[0] == "`") {
	            if (session.bgTokenizer.getState(row) !== "start") {
	                while (++row < maxRow) {
	                    line = session.getLine(row);
	                    if (line[0] == "`" & line.substring(0, 3) == "```")
	                        break;
	                }
	                return new Range(startRow, startColumn, row, 0);
	            } else {
	                while (row -- > 0) {
	                    line = session.getLine(row);
	                    if (line[0] == "`" & line.substring(0, 3) == "```")
	                        break;
	                }
	                return new Range(row, line.length, startRow, 0);
	            }
	        }
	
	        var token;
	        function isHeading(row) {
	            token = session.getTokens(row)[0];
	            return token && token.type.lastIndexOf(heading, 0) === 0;
	        }
	
	        var heading = "markup.heading";
	        function getLevel() {
	            var ch = token.value[0];
	            if (ch == "=") return 6;
	            if (ch == "-") return 5;
	            return 7 - token.value.search(/[^#]/);
	        }
	
	        if (isHeading(row)) {
	            var startHeadingLevel = getLevel();
	            while (++row < maxRow) {
	                if (!isHeading(row))
	                    continue;
	                var level = getLevel();
	                if (level >= startHeadingLevel)
	                    break;
	            }
	
	            endRow = row - (!token || ["=", "-"].indexOf(token.value[0]) == -1 ? 1 : 2);
	
	            if (endRow > startRow) {
	                while (endRow > startRow && /^\s*$/.test(session.getLine(endRow)))
	                    endRow--;
	            }
	
	            if (endRow > startRow) {
	                var endColumn = session.getLine(endRow).length;
	                return new Range(startRow, startColumn, endRow, endColumn);
	            }
	        }
	    };
	
	}).call(FoldMode.prototype);
	
	});
	
	ace.define("ace/mode/markdown",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/javascript","ace/mode/xml","ace/mode/html","ace/mode/markdown_highlight_rules","ace/mode/folding/markdown"], function(acequire, exports, module) {
	"use strict";
	
	var oop = acequire("../lib/oop");
	var TextMode = acequire("./text").Mode;
	var JavaScriptMode = acequire("./javascript").Mode;
	var XmlMode = acequire("./xml").Mode;
	var HtmlMode = acequire("./html").Mode;
	var MarkdownHighlightRules = acequire("./markdown_highlight_rules").MarkdownHighlightRules;
	var MarkdownFoldMode = acequire("./folding/markdown").FoldMode;
	
	var Mode = function() {
	    this.HighlightRules = MarkdownHighlightRules;
	
	    this.createModeDelegates({
	        "js-": JavaScriptMode,
	        "xml-": XmlMode,
	        "html-": HtmlMode
	    });
	
	    this.foldingRules = new MarkdownFoldMode();
	};
	oop.inherits(Mode, TextMode);
	
	(function() {
	    this.type = "text";
	    this.blockComment = {start: "<!--", end: "-->"};
	
	    this.getNextLineIndent = function(state, line, tab) {
	        if (state == "listblock") {
	            var match = /^(\s*)(?:([-+*])|(\d+)\.)(\s+)/.exec(line);
	            if (!match)
	                return "";
	            var marker = match[2];
	            if (!marker)
	                marker = parseInt(match[3], 10) + 1 + ".";
	            return match[1] + marker + match[4];
	        } else {
	            return this.$getIndent(line);
	        }
	    };
	    this.$id = "ace/mode/markdown";
	}).call(Mode.prototype);
	
	exports.Mode = Mode;
	});


/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports.id = 'ace/mode/javascript_worker';
	module.exports.src = "\"no use strict\";(function(window){function resolveModuleId(id,paths){for(var testPath=id,tail=\"\";testPath;){var alias=paths[testPath];if(\"string\"==typeof alias)return alias+tail;if(alias)return alias.location.replace(/\\/*$/,\"/\")+(tail||alias.main||alias.name);if(alias===!1)return\"\";var i=testPath.lastIndexOf(\"/\");if(-1===i)break;tail=testPath.substr(i)+tail,testPath=testPath.slice(0,i)}return id}if(!(void 0!==window.window&&window.document||window.acequire&&window.define)){window.console||(window.console=function(){var msgs=Array.prototype.slice.call(arguments,0);postMessage({type:\"log\",data:msgs})},window.console.error=window.console.warn=window.console.log=window.console.trace=window.console),window.window=window,window.ace=window,window.onerror=function(message,file,line,col,err){postMessage({type:\"error\",data:{message:message,data:err.data,file:file,line:line,col:col,stack:err.stack}})},window.normalizeModule=function(parentId,moduleName){if(-1!==moduleName.indexOf(\"!\")){var chunks=moduleName.split(\"!\");return window.normalizeModule(parentId,chunks[0])+\"!\"+window.normalizeModule(parentId,chunks[1])}if(\".\"==moduleName.charAt(0)){var base=parentId.split(\"/\").slice(0,-1).join(\"/\");for(moduleName=(base?base+\"/\":\"\")+moduleName;-1!==moduleName.indexOf(\".\")&&previous!=moduleName;){var previous=moduleName;moduleName=moduleName.replace(/^\\.\\//,\"\").replace(/\\/\\.\\//,\"/\").replace(/[^\\/]+\\/\\.\\.\\//,\"\")}}return moduleName},window.acequire=function acequire(parentId,id){if(id||(id=parentId,parentId=null),!id.charAt)throw Error(\"worker.js acequire() accepts only (parentId, id) as arguments\");id=window.normalizeModule(parentId,id);var module=window.acequire.modules[id];if(module)return module.initialized||(module.initialized=!0,module.exports=module.factory().exports),module.exports;if(!window.acequire.tlns)return console.log(\"unable to load \"+id);var path=resolveModuleId(id,window.acequire.tlns);return\".js\"!=path.slice(-3)&&(path+=\".js\"),window.acequire.id=id,window.acequire.modules[id]={},importScripts(path),window.acequire(parentId,id)},window.acequire.modules={},window.acequire.tlns={},window.define=function(id,deps,factory){if(2==arguments.length?(factory=deps,\"string\"!=typeof id&&(deps=id,id=window.acequire.id)):1==arguments.length&&(factory=id,deps=[],id=window.acequire.id),\"function\"!=typeof factory)return window.acequire.modules[id]={exports:factory,initialized:!0},void 0;deps.length||(deps=[\"require\",\"exports\",\"module\"]);var req=function(childId){return window.acequire(id,childId)};window.acequire.modules[id]={exports:{},factory:function(){var module=this,returnExports=factory.apply(this,deps.map(function(dep){switch(dep){case\"require\":return req;case\"exports\":return module.exports;case\"module\":return module;default:return req(dep)}}));return returnExports&&(module.exports=returnExports),module}}},window.define.amd={},acequire.tlns={},window.initBaseUrls=function(topLevelNamespaces){for(var i in topLevelNamespaces)acequire.tlns[i]=topLevelNamespaces[i]},window.initSender=function(){var EventEmitter=window.acequire(\"ace/lib/event_emitter\").EventEmitter,oop=window.acequire(\"ace/lib/oop\"),Sender=function(){};return function(){oop.implement(this,EventEmitter),this.callback=function(data,callbackId){postMessage({type:\"call\",id:callbackId,data:data})},this.emit=function(name,data){postMessage({type:\"event\",name:name,data:data})}}.call(Sender.prototype),new Sender};var main=window.main=null,sender=window.sender=null;window.onmessage=function(e){var msg=e.data;if(msg.event&&sender)sender._signal(msg.event,msg.data);else if(msg.command)if(main[msg.command])main[msg.command].apply(main,msg.args);else{if(!window[msg.command])throw Error(\"Unknown command:\"+msg.command);window[msg.command].apply(window,msg.args)}else if(msg.init){window.initBaseUrls(msg.tlns),acequire(\"ace/lib/es5-shim\"),sender=window.sender=window.initSender();var clazz=acequire(msg.module)[msg.classname];main=window.main=new clazz(sender)}}}})(this),ace.define(\"ace/lib/oop\",[\"require\",\"exports\",\"module\"],function(acequire,exports){\"use strict\";exports.inherits=function(ctor,superCtor){ctor.super_=superCtor,ctor.prototype=Object.create(superCtor.prototype,{constructor:{value:ctor,enumerable:!1,writable:!0,configurable:!0}})},exports.mixin=function(obj,mixin){for(var key in mixin)obj[key]=mixin[key];return obj},exports.implement=function(proto,mixin){exports.mixin(proto,mixin)}}),ace.define(\"ace/range\",[\"require\",\"exports\",\"module\"],function(acequire,exports){\"use strict\";var comparePoints=function(p1,p2){return p1.row-p2.row||p1.column-p2.column},Range=function(startRow,startColumn,endRow,endColumn){this.start={row:startRow,column:startColumn},this.end={row:endRow,column:endColumn}};(function(){this.isEqual=function(range){return this.start.row===range.start.row&&this.end.row===range.end.row&&this.start.column===range.start.column&&this.end.column===range.end.column},this.toString=function(){return\"Range: [\"+this.start.row+\"/\"+this.start.column+\"] -> [\"+this.end.row+\"/\"+this.end.column+\"]\"},this.contains=function(row,column){return 0==this.compare(row,column)},this.compareRange=function(range){var cmp,end=range.end,start=range.start;return cmp=this.compare(end.row,end.column),1==cmp?(cmp=this.compare(start.row,start.column),1==cmp?2:0==cmp?1:0):-1==cmp?-2:(cmp=this.compare(start.row,start.column),-1==cmp?-1:1==cmp?42:0)},this.comparePoint=function(p){return this.compare(p.row,p.column)},this.containsRange=function(range){return 0==this.comparePoint(range.start)&&0==this.comparePoint(range.end)},this.intersects=function(range){var cmp=this.compareRange(range);return-1==cmp||0==cmp||1==cmp},this.isEnd=function(row,column){return this.end.row==row&&this.end.column==column},this.isStart=function(row,column){return this.start.row==row&&this.start.column==column},this.setStart=function(row,column){\"object\"==typeof row?(this.start.column=row.column,this.start.row=row.row):(this.start.row=row,this.start.column=column)},this.setEnd=function(row,column){\"object\"==typeof row?(this.end.column=row.column,this.end.row=row.row):(this.end.row=row,this.end.column=column)},this.inside=function(row,column){return 0==this.compare(row,column)?this.isEnd(row,column)||this.isStart(row,column)?!1:!0:!1},this.insideStart=function(row,column){return 0==this.compare(row,column)?this.isEnd(row,column)?!1:!0:!1},this.insideEnd=function(row,column){return 0==this.compare(row,column)?this.isStart(row,column)?!1:!0:!1},this.compare=function(row,column){return this.isMultiLine()||row!==this.start.row?this.start.row>row?-1:row>this.end.row?1:this.start.row===row?column>=this.start.column?0:-1:this.end.row===row?this.end.column>=column?0:1:0:this.start.column>column?-1:column>this.end.column?1:0},this.compareStart=function(row,column){return this.start.row==row&&this.start.column==column?-1:this.compare(row,column)},this.compareEnd=function(row,column){return this.end.row==row&&this.end.column==column?1:this.compare(row,column)},this.compareInside=function(row,column){return this.end.row==row&&this.end.column==column?1:this.start.row==row&&this.start.column==column?-1:this.compare(row,column)},this.clipRows=function(firstRow,lastRow){if(this.end.row>lastRow)var end={row:lastRow+1,column:0};else if(firstRow>this.end.row)var end={row:firstRow,column:0};if(this.start.row>lastRow)var start={row:lastRow+1,column:0};else if(firstRow>this.start.row)var start={row:firstRow,column:0};return Range.fromPoints(start||this.start,end||this.end)},this.extend=function(row,column){var cmp=this.compare(row,column);if(0==cmp)return this;if(-1==cmp)var start={row:row,column:column};else var end={row:row,column:column};return Range.fromPoints(start||this.start,end||this.end)},this.isEmpty=function(){return this.start.row===this.end.row&&this.start.column===this.end.column},this.isMultiLine=function(){return this.start.row!==this.end.row},this.clone=function(){return Range.fromPoints(this.start,this.end)},this.collapseRows=function(){return 0==this.end.column?new Range(this.start.row,0,Math.max(this.start.row,this.end.row-1),0):new Range(this.start.row,0,this.end.row,0)},this.toScreenRange=function(session){var screenPosStart=session.documentToScreenPosition(this.start),screenPosEnd=session.documentToScreenPosition(this.end);return new Range(screenPosStart.row,screenPosStart.column,screenPosEnd.row,screenPosEnd.column)},this.moveBy=function(row,column){this.start.row+=row,this.start.column+=column,this.end.row+=row,this.end.column+=column}}).call(Range.prototype),Range.fromPoints=function(start,end){return new Range(start.row,start.column,end.row,end.column)},Range.comparePoints=comparePoints,Range.comparePoints=function(p1,p2){return p1.row-p2.row||p1.column-p2.column},exports.Range=Range}),ace.define(\"ace/apply_delta\",[\"require\",\"exports\",\"module\"],function(acequire,exports){\"use strict\";exports.applyDelta=function(docLines,delta){var row=delta.start.row,startColumn=delta.start.column,line=docLines[row]||\"\";switch(delta.action){case\"insert\":var lines=delta.lines;if(1===lines.length)docLines[row]=line.substring(0,startColumn)+delta.lines[0]+line.substring(startColumn);else{var args=[row,1].concat(delta.lines);docLines.splice.apply(docLines,args),docLines[row]=line.substring(0,startColumn)+docLines[row],docLines[row+delta.lines.length-1]+=line.substring(startColumn)}break;case\"remove\":var endColumn=delta.end.column,endRow=delta.end.row;row===endRow?docLines[row]=line.substring(0,startColumn)+line.substring(endColumn):docLines.splice(row,endRow-row+1,line.substring(0,startColumn)+docLines[endRow].substring(endColumn))}}}),ace.define(\"ace/lib/event_emitter\",[\"require\",\"exports\",\"module\"],function(acequire,exports){\"use strict\";var EventEmitter={},stopPropagation=function(){this.propagationStopped=!0},preventDefault=function(){this.defaultPrevented=!0};EventEmitter._emit=EventEmitter._dispatchEvent=function(eventName,e){this._eventRegistry||(this._eventRegistry={}),this._defaultHandlers||(this._defaultHandlers={});var listeners=this._eventRegistry[eventName]||[],defaultHandler=this._defaultHandlers[eventName];if(listeners.length||defaultHandler){\"object\"==typeof e&&e||(e={}),e.type||(e.type=eventName),e.stopPropagation||(e.stopPropagation=stopPropagation),e.preventDefault||(e.preventDefault=preventDefault),listeners=listeners.slice();for(var i=0;listeners.length>i&&(listeners[i](e,this),!e.propagationStopped);i++);return defaultHandler&&!e.defaultPrevented?defaultHandler(e,this):void 0}},EventEmitter._signal=function(eventName,e){var listeners=(this._eventRegistry||{})[eventName];if(listeners){listeners=listeners.slice();for(var i=0;listeners.length>i;i++)listeners[i](e,this)}},EventEmitter.once=function(eventName,callback){var _self=this;callback&&this.addEventListener(eventName,function newCallback(){_self.removeEventListener(eventName,newCallback),callback.apply(null,arguments)})},EventEmitter.setDefaultHandler=function(eventName,callback){var handlers=this._defaultHandlers;if(handlers||(handlers=this._defaultHandlers={_disabled_:{}}),handlers[eventName]){var old=handlers[eventName],disabled=handlers._disabled_[eventName];disabled||(handlers._disabled_[eventName]=disabled=[]),disabled.push(old);var i=disabled.indexOf(callback);-1!=i&&disabled.splice(i,1)}handlers[eventName]=callback},EventEmitter.removeDefaultHandler=function(eventName,callback){var handlers=this._defaultHandlers;if(handlers){var disabled=handlers._disabled_[eventName];if(handlers[eventName]==callback)handlers[eventName],disabled&&this.setDefaultHandler(eventName,disabled.pop());else if(disabled){var i=disabled.indexOf(callback);-1!=i&&disabled.splice(i,1)}}},EventEmitter.on=EventEmitter.addEventListener=function(eventName,callback,capturing){this._eventRegistry=this._eventRegistry||{};var listeners=this._eventRegistry[eventName];return listeners||(listeners=this._eventRegistry[eventName]=[]),-1==listeners.indexOf(callback)&&listeners[capturing?\"unshift\":\"push\"](callback),callback},EventEmitter.off=EventEmitter.removeListener=EventEmitter.removeEventListener=function(eventName,callback){this._eventRegistry=this._eventRegistry||{};var listeners=this._eventRegistry[eventName];if(listeners){var index=listeners.indexOf(callback);-1!==index&&listeners.splice(index,1)}},EventEmitter.removeAllListeners=function(eventName){this._eventRegistry&&(this._eventRegistry[eventName]=[])},exports.EventEmitter=EventEmitter}),ace.define(\"ace/anchor\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/lib/event_emitter\"],function(acequire,exports){\"use strict\";var oop=acequire(\"./lib/oop\"),EventEmitter=acequire(\"./lib/event_emitter\").EventEmitter,Anchor=exports.Anchor=function(doc,row,column){this.$onChange=this.onChange.bind(this),this.attach(doc),column===void 0?this.setPosition(row.row,row.column):this.setPosition(row,column)};(function(){function $pointsInOrder(point1,point2,equalPointsInOrder){var bColIsAfter=equalPointsInOrder?point1.column<=point2.column:point1.column<point2.column;return point1.row<point2.row||point1.row==point2.row&&bColIsAfter}function $getTransformedPoint(delta,point,moveIfEqual){var deltaIsInsert=\"insert\"==delta.action,deltaRowShift=(deltaIsInsert?1:-1)*(delta.end.row-delta.start.row),deltaColShift=(deltaIsInsert?1:-1)*(delta.end.column-delta.start.column),deltaStart=delta.start,deltaEnd=deltaIsInsert?deltaStart:delta.end;return $pointsInOrder(point,deltaStart,moveIfEqual)?{row:point.row,column:point.column}:$pointsInOrder(deltaEnd,point,!moveIfEqual)?{row:point.row+deltaRowShift,column:point.column+(point.row==deltaEnd.row?deltaColShift:0)}:{row:deltaStart.row,column:deltaStart.column}}oop.implement(this,EventEmitter),this.getPosition=function(){return this.$clipPositionToDocument(this.row,this.column)},this.getDocument=function(){return this.document},this.$insertRight=!1,this.onChange=function(delta){if(!(delta.start.row==delta.end.row&&delta.start.row!=this.row||delta.start.row>this.row)){var point=$getTransformedPoint(delta,{row:this.row,column:this.column},this.$insertRight);this.setPosition(point.row,point.column,!0)}},this.setPosition=function(row,column,noClip){var pos;if(pos=noClip?{row:row,column:column}:this.$clipPositionToDocument(row,column),this.row!=pos.row||this.column!=pos.column){var old={row:this.row,column:this.column};this.row=pos.row,this.column=pos.column,this._signal(\"change\",{old:old,value:pos})}},this.detach=function(){this.document.removeEventListener(\"change\",this.$onChange)},this.attach=function(doc){this.document=doc||this.document,this.document.on(\"change\",this.$onChange)},this.$clipPositionToDocument=function(row,column){var pos={};return row>=this.document.getLength()?(pos.row=Math.max(0,this.document.getLength()-1),pos.column=this.document.getLine(pos.row).length):0>row?(pos.row=0,pos.column=0):(pos.row=row,pos.column=Math.min(this.document.getLine(pos.row).length,Math.max(0,column))),0>column&&(pos.column=0),pos}}).call(Anchor.prototype)}),ace.define(\"ace/document\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/apply_delta\",\"ace/lib/event_emitter\",\"ace/range\",\"ace/anchor\"],function(acequire,exports){\"use strict\";var oop=acequire(\"./lib/oop\"),applyDelta=acequire(\"./apply_delta\").applyDelta,EventEmitter=acequire(\"./lib/event_emitter\").EventEmitter,Range=acequire(\"./range\").Range,Anchor=acequire(\"./anchor\").Anchor,Document=function(textOrLines){this.$lines=[\"\"],0===textOrLines.length?this.$lines=[\"\"]:Array.isArray(textOrLines)?this.insertMergedLines({row:0,column:0},textOrLines):this.insert({row:0,column:0},textOrLines)};(function(){oop.implement(this,EventEmitter),this.setValue=function(text){var len=this.getLength()-1;this.remove(new Range(0,0,len,this.getLine(len).length)),this.insert({row:0,column:0},text)},this.getValue=function(){return this.getAllLines().join(this.getNewLineCharacter())},this.createAnchor=function(row,column){return new Anchor(this,row,column)},this.$split=0===\"aaa\".split(/a/).length?function(text){return text.replace(/\\r\\n|\\r/g,\"\\n\").split(\"\\n\")}:function(text){return text.split(/\\r\\n|\\r|\\n/)},this.$detectNewLine=function(text){var match=text.match(/^.*?(\\r\\n|\\r|\\n)/m);this.$autoNewLine=match?match[1]:\"\\n\",this._signal(\"changeNewLineMode\")},this.getNewLineCharacter=function(){switch(this.$newLineMode){case\"windows\":return\"\\r\\n\";case\"unix\":return\"\\n\";default:return this.$autoNewLine||\"\\n\"}},this.$autoNewLine=\"\",this.$newLineMode=\"auto\",this.setNewLineMode=function(newLineMode){this.$newLineMode!==newLineMode&&(this.$newLineMode=newLineMode,this._signal(\"changeNewLineMode\"))},this.getNewLineMode=function(){return this.$newLineMode},this.isNewLine=function(text){return\"\\r\\n\"==text||\"\\r\"==text||\"\\n\"==text},this.getLine=function(row){return this.$lines[row]||\"\"},this.getLines=function(firstRow,lastRow){return this.$lines.slice(firstRow,lastRow+1)},this.getAllLines=function(){return this.getLines(0,this.getLength())},this.getLength=function(){return this.$lines.length},this.getTextRange=function(range){return this.getLinesForRange(range).join(this.getNewLineCharacter())},this.getLinesForRange=function(range){var lines;if(range.start.row===range.end.row)lines=[this.getLine(range.start.row).substring(range.start.column,range.end.column)];else{lines=this.getLines(range.start.row,range.end.row),lines[0]=(lines[0]||\"\").substring(range.start.column);var l=lines.length-1;range.end.row-range.start.row==l&&(lines[l]=lines[l].substring(0,range.end.column))}return lines},this.insertLines=function(row,lines){return console.warn(\"Use of document.insertLines is deprecated. Use the insertFullLines method instead.\"),this.insertFullLines(row,lines)},this.removeLines=function(firstRow,lastRow){return console.warn(\"Use of document.removeLines is deprecated. Use the removeFullLines method instead.\"),this.removeFullLines(firstRow,lastRow)},this.insertNewLine=function(position){return console.warn(\"Use of document.insertNewLine is deprecated. Use insertMergedLines(position, ['', '']) instead.\"),this.insertMergedLines(position,[\"\",\"\"])},this.insert=function(position,text){return 1>=this.getLength()&&this.$detectNewLine(text),this.insertMergedLines(position,this.$split(text))},this.insertInLine=function(position,text){var start=this.clippedPos(position.row,position.column),end=this.pos(position.row,position.column+text.length);return this.applyDelta({start:start,end:end,action:\"insert\",lines:[text]},!0),this.clonePos(end)},this.clippedPos=function(row,column){var length=this.getLength();void 0===row?row=length:0>row?row=0:row>=length&&(row=length-1,column=void 0);var line=this.getLine(row);return void 0==column&&(column=line.length),column=Math.min(Math.max(column,0),line.length),{row:row,column:column}},this.clonePos=function(pos){return{row:pos.row,column:pos.column}},this.pos=function(row,column){return{row:row,column:column}},this.$clipPosition=function(position){var length=this.getLength();return position.row>=length?(position.row=Math.max(0,length-1),position.column=this.getLine(length-1).length):(position.row=Math.max(0,position.row),position.column=Math.min(Math.max(position.column,0),this.getLine(position.row).length)),position},this.insertFullLines=function(row,lines){row=Math.min(Math.max(row,0),this.getLength());var column=0;this.getLength()>row?(lines=lines.concat([\"\"]),column=0):(lines=[\"\"].concat(lines),row--,column=this.$lines[row].length),this.insertMergedLines({row:row,column:column},lines)},this.insertMergedLines=function(position,lines){var start=this.clippedPos(position.row,position.column),end={row:start.row+lines.length-1,column:(1==lines.length?start.column:0)+lines[lines.length-1].length};return this.applyDelta({start:start,end:end,action:\"insert\",lines:lines}),this.clonePos(end)},this.remove=function(range){var start=this.clippedPos(range.start.row,range.start.column),end=this.clippedPos(range.end.row,range.end.column);return this.applyDelta({start:start,end:end,action:\"remove\",lines:this.getLinesForRange({start:start,end:end})}),this.clonePos(start)},this.removeInLine=function(row,startColumn,endColumn){var start=this.clippedPos(row,startColumn),end=this.clippedPos(row,endColumn);return this.applyDelta({start:start,end:end,action:\"remove\",lines:this.getLinesForRange({start:start,end:end})},!0),this.clonePos(start)},this.removeFullLines=function(firstRow,lastRow){firstRow=Math.min(Math.max(0,firstRow),this.getLength()-1),lastRow=Math.min(Math.max(0,lastRow),this.getLength()-1);var deleteFirstNewLine=lastRow==this.getLength()-1&&firstRow>0,deleteLastNewLine=this.getLength()-1>lastRow,startRow=deleteFirstNewLine?firstRow-1:firstRow,startCol=deleteFirstNewLine?this.getLine(startRow).length:0,endRow=deleteLastNewLine?lastRow+1:lastRow,endCol=deleteLastNewLine?0:this.getLine(endRow).length,range=new Range(startRow,startCol,endRow,endCol),deletedLines=this.$lines.slice(firstRow,lastRow+1);return this.applyDelta({start:range.start,end:range.end,action:\"remove\",lines:this.getLinesForRange(range)}),deletedLines},this.removeNewLine=function(row){this.getLength()-1>row&&row>=0&&this.applyDelta({start:this.pos(row,this.getLine(row).length),end:this.pos(row+1,0),action:\"remove\",lines:[\"\",\"\"]})},this.replace=function(range,text){if(range instanceof Range||(range=Range.fromPoints(range.start,range.end)),0===text.length&&range.isEmpty())return range.start;if(text==this.getTextRange(range))return range.end;this.remove(range);var end;return end=text?this.insert(range.start,text):range.start},this.applyDeltas=function(deltas){for(var i=0;deltas.length>i;i++)this.applyDelta(deltas[i])},this.revertDeltas=function(deltas){for(var i=deltas.length-1;i>=0;i--)this.revertDelta(deltas[i])},this.applyDelta=function(delta,doNotValidate){var isInsert=\"insert\"==delta.action;(isInsert?1>=delta.lines.length&&!delta.lines[0]:!Range.comparePoints(delta.start,delta.end))||(isInsert&&delta.lines.length>2e4&&this.$splitAndapplyLargeDelta(delta,2e4),applyDelta(this.$lines,delta,doNotValidate),this._signal(\"change\",delta))},this.$splitAndapplyLargeDelta=function(delta,MAX){for(var lines=delta.lines,l=lines.length,row=delta.start.row,column=delta.start.column,from=0,to=0;;){from=to,to+=MAX-1;var chunk=lines.slice(from,to);if(to>l){delta.lines=chunk,delta.start.row=row+from,delta.start.column=column;break}chunk.push(\"\"),this.applyDelta({start:this.pos(row+from,column),end:this.pos(row+to,column=0),action:delta.action,lines:chunk},!0)}},this.revertDelta=function(delta){this.applyDelta({start:this.clonePos(delta.start),end:this.clonePos(delta.end),action:\"insert\"==delta.action?\"remove\":\"insert\",lines:delta.lines.slice()})},this.indexToPosition=function(index,startRow){for(var lines=this.$lines||this.getAllLines(),newlineLength=this.getNewLineCharacter().length,i=startRow||0,l=lines.length;l>i;i++)if(index-=lines[i].length+newlineLength,0>index)return{row:i,column:index+lines[i].length+newlineLength};return{row:l-1,column:lines[l-1].length}},this.positionToIndex=function(pos,startRow){for(var lines=this.$lines||this.getAllLines(),newlineLength=this.getNewLineCharacter().length,index=0,row=Math.min(pos.row,lines.length),i=startRow||0;row>i;++i)index+=lines[i].length+newlineLength;return index+pos.column}}).call(Document.prototype),exports.Document=Document}),ace.define(\"ace/lib/lang\",[\"require\",\"exports\",\"module\"],function(acequire,exports){\"use strict\";exports.last=function(a){return a[a.length-1]},exports.stringReverse=function(string){return string.split(\"\").reverse().join(\"\")},exports.stringRepeat=function(string,count){for(var result=\"\";count>0;)1&count&&(result+=string),(count>>=1)&&(string+=string);return result};var trimBeginRegexp=/^\\s\\s*/,trimEndRegexp=/\\s\\s*$/;exports.stringTrimLeft=function(string){return string.replace(trimBeginRegexp,\"\")},exports.stringTrimRight=function(string){return string.replace(trimEndRegexp,\"\")},exports.copyObject=function(obj){var copy={};for(var key in obj)copy[key]=obj[key];return copy},exports.copyArray=function(array){for(var copy=[],i=0,l=array.length;l>i;i++)copy[i]=array[i]&&\"object\"==typeof array[i]?this.copyObject(array[i]):array[i];return copy},exports.deepCopy=function deepCopy(obj){if(\"object\"!=typeof obj||!obj)return obj;var copy;if(Array.isArray(obj)){copy=[];for(var key=0;obj.length>key;key++)copy[key]=deepCopy(obj[key]);return copy}var cons=obj.constructor;if(cons===RegExp)return obj;copy=cons();for(var key in obj)copy[key]=deepCopy(obj[key]);return copy},exports.arrayToMap=function(arr){for(var map={},i=0;arr.length>i;i++)map[arr[i]]=1;return map},exports.createMap=function(props){var map=Object.create(null);for(var i in props)map[i]=props[i];return map},exports.arrayRemove=function(array,value){for(var i=0;array.length>=i;i++)value===array[i]&&array.splice(i,1)},exports.escapeRegExp=function(str){return str.replace(/([.*+?^${}()|[\\]\\/\\\\])/g,\"\\\\$1\")},exports.escapeHTML=function(str){return str.replace(/&/g,\"&#38;\").replace(/\"/g,\"&#34;\").replace(/'/g,\"&#39;\").replace(/</g,\"&#60;\")},exports.getMatchOffsets=function(string,regExp){var matches=[];return string.replace(regExp,function(str){matches.push({offset:arguments[arguments.length-2],length:str.length})}),matches},exports.deferredCall=function(fcn){var timer=null,callback=function(){timer=null,fcn()},deferred=function(timeout){return deferred.cancel(),timer=setTimeout(callback,timeout||0),deferred};return deferred.schedule=deferred,deferred.call=function(){return this.cancel(),fcn(),deferred},deferred.cancel=function(){return clearTimeout(timer),timer=null,deferred},deferred.isPending=function(){return timer},deferred},exports.delayedCall=function(fcn,defaultTimeout){var timer=null,callback=function(){timer=null,fcn()},_self=function(timeout){null==timer&&(timer=setTimeout(callback,timeout||defaultTimeout))};return _self.delay=function(timeout){timer&&clearTimeout(timer),timer=setTimeout(callback,timeout||defaultTimeout)},_self.schedule=_self,_self.call=function(){this.cancel(),fcn()},_self.cancel=function(){timer&&clearTimeout(timer),timer=null},_self.isPending=function(){return timer},_self}}),ace.define(\"ace/worker/mirror\",[\"require\",\"exports\",\"module\",\"ace/range\",\"ace/document\",\"ace/lib/lang\"],function(acequire,exports){\"use strict\";acequire(\"../range\").Range;var Document=acequire(\"../document\").Document,lang=acequire(\"../lib/lang\"),Mirror=exports.Mirror=function(sender){this.sender=sender;var doc=this.doc=new Document(\"\"),deferredUpdate=this.deferredUpdate=lang.delayedCall(this.onUpdate.bind(this)),_self=this;sender.on(\"change\",function(e){var data=e.data;if(data[0].start)doc.applyDeltas(data);else for(var i=0;data.length>i;i+=2){if(Array.isArray(data[i+1]))var d={action:\"insert\",start:data[i],lines:data[i+1]};else var d={action:\"remove\",start:data[i],end:data[i+1]};doc.applyDelta(d,!0)}return _self.$timeout?deferredUpdate.schedule(_self.$timeout):(_self.onUpdate(),void 0)})};(function(){this.$timeout=500,this.setTimeout=function(timeout){this.$timeout=timeout},this.setValue=function(value){this.doc.setValue(value),this.deferredUpdate.schedule(this.$timeout)},this.getValue=function(callbackId){this.sender.callback(this.doc.getValue(),callbackId)},this.onUpdate=function(){},this.isPending=function(){return this.deferredUpdate.isPending()}}).call(Mirror.prototype)}),ace.define(\"ace/mode/javascript/jshint\",[\"require\",\"exports\",\"module\"],function(acequire,exports,module){module.exports=function outer(modules,cache,entry){function newRequire(name,jumped){if(!cache[name]){if(!modules[name]){var currentRequire=\"function\"==typeof acequire&&acequire;if(!jumped&&currentRequire)return currentRequire(name,!0);if(previousRequire)return previousRequire(name,!0);var err=Error(\"Cannot find module '\"+name+\"'\");throw err.code=\"MODULE_NOT_FOUND\",err}var m=cache[name]={exports:{}};modules[name][0].call(m.exports,function(x){var id=modules[name][1][x];return newRequire(id?id:x)},m,m.exports,outer,modules,cache,entry)}return cache[name].exports}for(var previousRequire=\"function\"==typeof acequire&&acequire,i=0;entry.length>i;i++)newRequire(entry[i]);return newRequire(entry[0])}({\"/node_modules/browserify/node_modules/events/events.js\":[function(_dereq_,module){function EventEmitter(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function isFunction(arg){return\"function\"==typeof arg}function isNumber(arg){return\"number\"==typeof arg}function isObject(arg){return\"object\"==typeof arg&&null!==arg}function isUndefined(arg){return void 0===arg}module.exports=EventEmitter,EventEmitter.EventEmitter=EventEmitter,EventEmitter.prototype._events=void 0,EventEmitter.prototype._maxListeners=void 0,EventEmitter.defaultMaxListeners=10,EventEmitter.prototype.setMaxListeners=function(n){if(!isNumber(n)||0>n||isNaN(n))throw TypeError(\"n must be a positive number\");return this._maxListeners=n,this},EventEmitter.prototype.emit=function(type){var er,handler,len,args,i,listeners;if(this._events||(this._events={}),\"error\"===type&&(!this._events.error||isObject(this._events.error)&&!this._events.error.length)){if(er=arguments[1],er instanceof Error)throw er;throw TypeError('Uncaught, unspecified \"error\" event.')}if(handler=this._events[type],isUndefined(handler))return!1;if(isFunction(handler))switch(arguments.length){case 1:handler.call(this);break;case 2:handler.call(this,arguments[1]);break;case 3:handler.call(this,arguments[1],arguments[2]);break;default:for(len=arguments.length,args=Array(len-1),i=1;len>i;i++)args[i-1]=arguments[i];handler.apply(this,args)}else if(isObject(handler)){for(len=arguments.length,args=Array(len-1),i=1;len>i;i++)args[i-1]=arguments[i];for(listeners=handler.slice(),len=listeners.length,i=0;len>i;i++)listeners[i].apply(this,args)}return!0},EventEmitter.prototype.addListener=function(type,listener){var m;if(!isFunction(listener))throw TypeError(\"listener must be a function\");if(this._events||(this._events={}),this._events.newListener&&this.emit(\"newListener\",type,isFunction(listener.listener)?listener.listener:listener),this._events[type]?isObject(this._events[type])?this._events[type].push(listener):this._events[type]=[this._events[type],listener]:this._events[type]=listener,isObject(this._events[type])&&!this._events[type].warned){var m;m=isUndefined(this._maxListeners)?EventEmitter.defaultMaxListeners:this._maxListeners,m&&m>0&&this._events[type].length>m&&(this._events[type].warned=!0,console.error(\"(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.\",this._events[type].length),\"function\"==typeof console.trace&&console.trace())}return this},EventEmitter.prototype.on=EventEmitter.prototype.addListener,EventEmitter.prototype.once=function(type,listener){function g(){this.removeListener(type,g),fired||(fired=!0,listener.apply(this,arguments))}if(!isFunction(listener))throw TypeError(\"listener must be a function\");var fired=!1;return g.listener=listener,this.on(type,g),this},EventEmitter.prototype.removeListener=function(type,listener){var list,position,length,i;if(!isFunction(listener))throw TypeError(\"listener must be a function\");if(!this._events||!this._events[type])return this;if(list=this._events[type],length=list.length,position=-1,list===listener||isFunction(list.listener)&&list.listener===listener)delete this._events[type],this._events.removeListener&&this.emit(\"removeListener\",type,listener);else if(isObject(list)){for(i=length;i-->0;)if(list[i]===listener||list[i].listener&&list[i].listener===listener){position=i;break}if(0>position)return this;1===list.length?(list.length=0,delete this._events[type]):list.splice(position,1),this._events.removeListener&&this.emit(\"removeListener\",type,listener)}return this},EventEmitter.prototype.removeAllListeners=function(type){var key,listeners;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[type]&&delete this._events[type],this;if(0===arguments.length){for(key in this._events)\"removeListener\"!==key&&this.removeAllListeners(key);return this.removeAllListeners(\"removeListener\"),this._events={},this\n}if(listeners=this._events[type],isFunction(listeners))this.removeListener(type,listeners);else for(;listeners.length;)this.removeListener(type,listeners[listeners.length-1]);return delete this._events[type],this},EventEmitter.prototype.listeners=function(type){var ret;return ret=this._events&&this._events[type]?isFunction(this._events[type])?[this._events[type]]:this._events[type].slice():[]},EventEmitter.listenerCount=function(emitter,type){var ret;return ret=emitter._events&&emitter._events[type]?isFunction(emitter._events[type])?1:emitter._events[type].length:0}},{}],\"/node_modules/jshint/data/ascii-identifier-data.js\":[function(_dereq_,module){for(var identifierStartTable=[],i=0;128>i;i++)identifierStartTable[i]=36===i||i>=65&&90>=i||95===i||i>=97&&122>=i;for(var identifierPartTable=[],i=0;128>i;i++)identifierPartTable[i]=identifierStartTable[i]||i>=48&&57>=i;module.exports={asciiIdentifierStartTable:identifierStartTable,asciiIdentifierPartTable:identifierPartTable}},{}],\"/node_modules/jshint/lodash.js\":[function(_dereq_,module,exports){(function(global){(function(){function baseFindIndex(array,predicate,fromRight){for(var length=array.length,index=fromRight?length:-1;fromRight?index--:length>++index;)if(predicate(array[index],index,array))return index;return-1}function baseIndexOf(array,value,fromIndex){if(value!==value)return indexOfNaN(array,fromIndex);for(var index=fromIndex-1,length=array.length;length>++index;)if(array[index]===value)return index;return-1}function baseIsFunction(value){return\"function\"==typeof value||!1}function baseToString(value){return\"string\"==typeof value?value:null==value?\"\":value+\"\"}function indexOfNaN(array,fromIndex,fromRight){for(var length=array.length,index=fromIndex+(fromRight?0:-1);fromRight?index--:length>++index;){var other=array[index];if(other!==other)return index}return-1}function isObjectLike(value){return!!value&&\"object\"==typeof value}function lodash(){}function arrayCopy(source,array){var index=-1,length=source.length;for(array||(array=Array(length));length>++index;)array[index]=source[index];return array}function arrayEach(array,iteratee){for(var index=-1,length=array.length;length>++index&&iteratee(array[index],index,array)!==!1;);return array}function arrayFilter(array,predicate){for(var index=-1,length=array.length,resIndex=-1,result=[];length>++index;){var value=array[index];predicate(value,index,array)&&(result[++resIndex]=value)}return result}function arrayMap(array,iteratee){for(var index=-1,length=array.length,result=Array(length);length>++index;)result[index]=iteratee(array[index],index,array);return result}function arrayMax(array){for(var index=-1,length=array.length,result=NEGATIVE_INFINITY;length>++index;){var value=array[index];value>result&&(result=value)}return result}function arraySome(array,predicate){for(var index=-1,length=array.length;length>++index;)if(predicate(array[index],index,array))return!0;return!1}function assignWith(object,source,customizer){var props=keys(source);push.apply(props,getSymbols(source));for(var index=-1,length=props.length;length>++index;){var key=props[index],value=object[key],result=customizer(value,source[key],key,object,source);(result===result?result===value:value!==value)&&(value!==undefined||key in object)||(object[key]=result)}return object}function baseCopy(source,props,object){object||(object={});for(var index=-1,length=props.length;length>++index;){var key=props[index];object[key]=source[key]}return object}function baseCallback(func,thisArg,argCount){var type=typeof func;return\"function\"==type?thisArg===undefined?func:bindCallback(func,thisArg,argCount):null==func?identity:\"object\"==type?baseMatches(func):thisArg===undefined?property(func):baseMatchesProperty(func,thisArg)}function baseClone(value,isDeep,customizer,key,object,stackA,stackB){var result;if(customizer&&(result=object?customizer(value,key,object):customizer(value)),result!==undefined)return result;if(!isObject(value))return value;var isArr=isArray(value);if(isArr){if(result=initCloneArray(value),!isDeep)return arrayCopy(value,result)}else{var tag=objToString.call(value),isFunc=tag==funcTag;if(tag!=objectTag&&tag!=argsTag&&(!isFunc||object))return cloneableTags[tag]?initCloneByTag(value,tag,isDeep):object?value:{};if(result=initCloneObject(isFunc?{}:value),!isDeep)return baseAssign(result,value)}stackA||(stackA=[]),stackB||(stackB=[]);for(var length=stackA.length;length--;)if(stackA[length]==value)return stackB[length];return stackA.push(value),stackB.push(result),(isArr?arrayEach:baseForOwn)(value,function(subValue,key){result[key]=baseClone(subValue,isDeep,customizer,key,value,stackA,stackB)}),result}function baseFilter(collection,predicate){var result=[];return baseEach(collection,function(value,index,collection){predicate(value,index,collection)&&result.push(value)}),result}function baseForIn(object,iteratee){return baseFor(object,iteratee,keysIn)}function baseForOwn(object,iteratee){return baseFor(object,iteratee,keys)}function baseGet(object,path,pathKey){if(null!=object){pathKey!==undefined&&pathKey in toObject(object)&&(path=[pathKey]);for(var index=-1,length=path.length;null!=object&&length>++index;)var result=object=object[path[index]];return result}}function baseIsEqual(value,other,customizer,isLoose,stackA,stackB){if(value===other)return 0!==value||1/value==1/other;var valType=typeof value,othType=typeof other;return\"function\"!=valType&&\"object\"!=valType&&\"function\"!=othType&&\"object\"!=othType||null==value||null==other?value!==value&&other!==other:baseIsEqualDeep(value,other,baseIsEqual,customizer,isLoose,stackA,stackB)}function baseIsEqualDeep(object,other,equalFunc,customizer,isLoose,stackA,stackB){var objIsArr=isArray(object),othIsArr=isArray(other),objTag=arrayTag,othTag=arrayTag;objIsArr||(objTag=objToString.call(object),objTag==argsTag?objTag=objectTag:objTag!=objectTag&&(objIsArr=isTypedArray(object))),othIsArr||(othTag=objToString.call(other),othTag==argsTag?othTag=objectTag:othTag!=objectTag&&(othIsArr=isTypedArray(other)));var objIsObj=objTag==objectTag,othIsObj=othTag==objectTag,isSameTag=objTag==othTag;if(isSameTag&&!objIsArr&&!objIsObj)return equalByTag(object,other,objTag);if(!isLoose){var valWrapped=objIsObj&&hasOwnProperty.call(object,\"__wrapped__\"),othWrapped=othIsObj&&hasOwnProperty.call(other,\"__wrapped__\");if(valWrapped||othWrapped)return equalFunc(valWrapped?object.value():object,othWrapped?other.value():other,customizer,isLoose,stackA,stackB)}if(!isSameTag)return!1;stackA||(stackA=[]),stackB||(stackB=[]);for(var length=stackA.length;length--;)if(stackA[length]==object)return stackB[length]==other;stackA.push(object),stackB.push(other);var result=(objIsArr?equalArrays:equalObjects)(object,other,equalFunc,customizer,isLoose,stackA,stackB);return stackA.pop(),stackB.pop(),result}function baseIsMatch(object,props,values,strictCompareFlags,customizer){for(var index=-1,length=props.length,noCustomizer=!customizer;length>++index;)if(noCustomizer&&strictCompareFlags[index]?values[index]!==object[props[index]]:!(props[index]in object))return!1;for(index=-1;length>++index;){var key=props[index],objValue=object[key],srcValue=values[index];if(noCustomizer&&strictCompareFlags[index])var result=objValue!==undefined||key in object;else result=customizer?customizer(objValue,srcValue,key):undefined,result===undefined&&(result=baseIsEqual(srcValue,objValue,customizer,!0));if(!result)return!1}return!0}function baseMatches(source){var props=keys(source),length=props.length;if(!length)return constant(!0);if(1==length){var key=props[0],value=source[key];if(isStrictComparable(value))return function(object){return null==object?!1:object[key]===value&&(value!==undefined||key in toObject(object))}}for(var values=Array(length),strictCompareFlags=Array(length);length--;)value=source[props[length]],values[length]=value,strictCompareFlags[length]=isStrictComparable(value);return function(object){return null!=object&&baseIsMatch(toObject(object),props,values,strictCompareFlags)}}function baseMatchesProperty(path,value){var isArr=isArray(path),isCommon=isKey(path)&&isStrictComparable(value),pathKey=path+\"\";return path=toPath(path),function(object){if(null==object)return!1;var key=pathKey;if(object=toObject(object),!(!isArr&&isCommon||key in object)){if(object=1==path.length?object:baseGet(object,baseSlice(path,0,-1)),null==object)return!1;key=last(path),object=toObject(object)}return object[key]===value?value!==undefined||key in object:baseIsEqual(value,object[key],null,!0)}}function baseMerge(object,source,customizer,stackA,stackB){if(!isObject(object))return object;var isSrcArr=isLength(source.length)&&(isArray(source)||isTypedArray(source));if(!isSrcArr){var props=keys(source);push.apply(props,getSymbols(source))}return arrayEach(props||source,function(srcValue,key){if(props&&(key=srcValue,srcValue=source[key]),isObjectLike(srcValue))stackA||(stackA=[]),stackB||(stackB=[]),baseMergeDeep(object,source,key,baseMerge,customizer,stackA,stackB);else{var value=object[key],result=customizer?customizer(value,srcValue,key,object,source):undefined,isCommon=result===undefined;isCommon&&(result=srcValue),!isSrcArr&&result===undefined||!isCommon&&(result===result?result===value:value!==value)||(object[key]=result)}}),object}function baseMergeDeep(object,source,key,mergeFunc,customizer,stackA,stackB){for(var length=stackA.length,srcValue=source[key];length--;)if(stackA[length]==srcValue)return object[key]=stackB[length],undefined;var value=object[key],result=customizer?customizer(value,srcValue,key,object,source):undefined,isCommon=result===undefined;isCommon&&(result=srcValue,isLength(srcValue.length)&&(isArray(srcValue)||isTypedArray(srcValue))?result=isArray(value)?value:getLength(value)?arrayCopy(value):[]:isPlainObject(srcValue)||isArguments(srcValue)?result=isArguments(value)?toPlainObject(value):isPlainObject(value)?value:{}:isCommon=!1),stackA.push(srcValue),stackB.push(result),isCommon?object[key]=mergeFunc(result,srcValue,customizer,stackA,stackB):(result===result?result!==value:value===value)&&(object[key]=result)}function baseProperty(key){return function(object){return null==object?undefined:object[key]}}function basePropertyDeep(path){var pathKey=path+\"\";return path=toPath(path),function(object){return baseGet(object,path,pathKey)}}function baseSlice(array,start,end){var index=-1,length=array.length;start=null==start?0:+start||0,0>start&&(start=-start>length?0:length+start),end=end===undefined||end>length?length:+end||0,0>end&&(end+=length),length=start>end?0:end-start>>>0,start>>>=0;for(var result=Array(length);length>++index;)result[index]=array[index+start];return result}function baseSome(collection,predicate){var result;return baseEach(collection,function(value,index,collection){return result=predicate(value,index,collection),!result}),!!result}function baseValues(object,props){for(var index=-1,length=props.length,result=Array(length);length>++index;)result[index]=object[props[index]];return result}function binaryIndex(array,value,retHighest){var low=0,high=array?array.length:low;if(\"number\"==typeof value&&value===value&&HALF_MAX_ARRAY_LENGTH>=high){for(;high>low;){var mid=low+high>>>1,computed=array[mid];(retHighest?value>=computed:value>computed)?low=mid+1:high=mid}return high}return binaryIndexBy(array,value,identity,retHighest)}function binaryIndexBy(array,value,iteratee,retHighest){value=iteratee(value);for(var low=0,high=array?array.length:0,valIsNaN=value!==value,valIsUndef=value===undefined;high>low;){var mid=floor((low+high)/2),computed=iteratee(array[mid]),isReflexive=computed===computed;if(valIsNaN)var setLow=isReflexive||retHighest;else setLow=valIsUndef?isReflexive&&(retHighest||computed!==undefined):retHighest?value>=computed:value>computed;setLow?low=mid+1:high=mid}return nativeMin(high,MAX_ARRAY_INDEX)}function bindCallback(func,thisArg,argCount){if(\"function\"!=typeof func)return identity;if(thisArg===undefined)return func;switch(argCount){case 1:return function(value){return func.call(thisArg,value)};case 3:return function(value,index,collection){return func.call(thisArg,value,index,collection)};case 4:return function(accumulator,value,index,collection){return func.call(thisArg,accumulator,value,index,collection)};case 5:return function(value,other,key,object,source){return func.call(thisArg,value,other,key,object,source)}}return function(){return func.apply(thisArg,arguments)}}function bufferClone(buffer){return bufferSlice.call(buffer,0)}function createAssigner(assigner){return restParam(function(object,sources){var index=-1,length=null==object?0:sources.length,customizer=length>2&&sources[length-2],guard=length>2&&sources[2],thisArg=length>1&&sources[length-1];for(\"function\"==typeof customizer?(customizer=bindCallback(customizer,thisArg,5),length-=2):(customizer=\"function\"==typeof thisArg?thisArg:null,length-=customizer?1:0),guard&&isIterateeCall(sources[0],sources[1],guard)&&(customizer=3>length?null:customizer,length=1);length>++index;){var source=sources[index];source&&assigner(object,source,customizer)}return object})}function createBaseEach(eachFunc,fromRight){return function(collection,iteratee){var length=collection?getLength(collection):0;if(!isLength(length))return eachFunc(collection,iteratee);for(var index=fromRight?length:-1,iterable=toObject(collection);(fromRight?index--:length>++index)&&iteratee(iterable[index],index,iterable)!==!1;);return collection}}function createBaseFor(fromRight){return function(object,iteratee,keysFunc){for(var iterable=toObject(object),props=keysFunc(object),length=props.length,index=fromRight?length:-1;fromRight?index--:length>++index;){var key=props[index];if(iteratee(iterable[key],key,iterable)===!1)break}return object}}function createFindIndex(fromRight){return function(array,predicate,thisArg){return array&&array.length?(predicate=getCallback(predicate,thisArg,3),baseFindIndex(array,predicate,fromRight)):-1}}function createForEach(arrayFunc,eachFunc){return function(collection,iteratee,thisArg){return\"function\"==typeof iteratee&&thisArg===undefined&&isArray(collection)?arrayFunc(collection,iteratee):eachFunc(collection,bindCallback(iteratee,thisArg,3))}}function equalArrays(array,other,equalFunc,customizer,isLoose,stackA,stackB){var index=-1,arrLength=array.length,othLength=other.length,result=!0;if(arrLength!=othLength&&!(isLoose&&othLength>arrLength))return!1;for(;result&&arrLength>++index;){var arrValue=array[index],othValue=other[index];if(result=undefined,customizer&&(result=isLoose?customizer(othValue,arrValue,index):customizer(arrValue,othValue,index)),result===undefined)if(isLoose)for(var othIndex=othLength;othIndex--&&(othValue=other[othIndex],!(result=arrValue&&arrValue===othValue||equalFunc(arrValue,othValue,customizer,isLoose,stackA,stackB))););else result=arrValue&&arrValue===othValue||equalFunc(arrValue,othValue,customizer,isLoose,stackA,stackB)}return!!result}function equalByTag(object,other,tag){switch(tag){case boolTag:case dateTag:return+object==+other;case errorTag:return object.name==other.name&&object.message==other.message;case numberTag:return object!=+object?other!=+other:0==object?1/object==1/other:object==+other;case regexpTag:case stringTag:return object==other+\"\"}return!1}function equalObjects(object,other,equalFunc,customizer,isLoose,stackA,stackB){var objProps=keys(object),objLength=objProps.length,othProps=keys(other),othLength=othProps.length;if(objLength!=othLength&&!isLoose)return!1;for(var skipCtor=isLoose,index=-1;objLength>++index;){var key=objProps[index],result=isLoose?key in other:hasOwnProperty.call(other,key);if(result){var objValue=object[key],othValue=other[key];result=undefined,customizer&&(result=isLoose?customizer(othValue,objValue,key):customizer(objValue,othValue,key)),result===undefined&&(result=objValue&&objValue===othValue||equalFunc(objValue,othValue,customizer,isLoose,stackA,stackB))}if(!result)return!1;skipCtor||(skipCtor=\"constructor\"==key)}if(!skipCtor){var objCtor=object.constructor,othCtor=other.constructor;if(objCtor!=othCtor&&\"constructor\"in object&&\"constructor\"in other&&!(\"function\"==typeof objCtor&&objCtor instanceof objCtor&&\"function\"==typeof othCtor&&othCtor instanceof othCtor))return!1}return!0}function getCallback(func,thisArg,argCount){var result=lodash.callback||callback;return result=result===callback?baseCallback:result,argCount?result(func,thisArg,argCount):result}function getIndexOf(collection,target,fromIndex){var result=lodash.indexOf||indexOf;return result=result===indexOf?baseIndexOf:result,collection?result(collection,target,fromIndex):result}function initCloneArray(array){var length=array.length,result=new array.constructor(length);return length&&\"string\"==typeof array[0]&&hasOwnProperty.call(array,\"index\")&&(result.index=array.index,result.input=array.input),result}function initCloneObject(object){var Ctor=object.constructor;return\"function\"==typeof Ctor&&Ctor instanceof Ctor||(Ctor=Object),new Ctor}function initCloneByTag(object,tag,isDeep){var Ctor=object.constructor;switch(tag){case arrayBufferTag:return bufferClone(object);case boolTag:case dateTag:return new Ctor(+object);case float32Tag:case float64Tag:case int8Tag:case int16Tag:case int32Tag:case uint8Tag:case uint8ClampedTag:case uint16Tag:case uint32Tag:var buffer=object.buffer;return new Ctor(isDeep?bufferClone(buffer):buffer,object.byteOffset,object.length);case numberTag:case stringTag:return new Ctor(object);case regexpTag:var result=new Ctor(object.source,reFlags.exec(object));result.lastIndex=object.lastIndex}return result}function isIndex(value,length){return value=+value,length=null==length?MAX_SAFE_INTEGER:length,value>-1&&0==value%1&&length>value}function isIterateeCall(value,index,object){if(!isObject(object))return!1;var type=typeof index;if(\"number\"==type)var length=getLength(object),prereq=isLength(length)&&isIndex(index,length);else prereq=\"string\"==type&&index in object;if(prereq){var other=object[index];return value===value?value===other:other!==other}return!1}function isKey(value,object){var type=typeof value;if(\"string\"==type&&reIsPlainProp.test(value)||\"number\"==type)return!0;if(isArray(value))return!1;var result=!reIsDeepProp.test(value);return result||null!=object&&value in toObject(object)}function isLength(value){return\"number\"==typeof value&&value>-1&&0==value%1&&MAX_SAFE_INTEGER>=value}function isStrictComparable(value){return value===value&&(0===value?1/value>0:!isObject(value))}function shimIsPlainObject(value){var Ctor;if(lodash.support,!isObjectLike(value)||objToString.call(value)!=objectTag||!hasOwnProperty.call(value,\"constructor\")&&(Ctor=value.constructor,\"function\"==typeof Ctor&&!(Ctor instanceof Ctor)))return!1;var result;return baseForIn(value,function(subValue,key){result=key}),result===undefined||hasOwnProperty.call(value,result)}function shimKeys(object){for(var props=keysIn(object),propsLength=props.length,length=propsLength&&object.length,support=lodash.support,allowIndexes=length&&isLength(length)&&(isArray(object)||support.nonEnumArgs&&isArguments(object)),index=-1,result=[];propsLength>++index;){var key=props[index];(allowIndexes&&isIndex(key,length)||hasOwnProperty.call(object,key))&&result.push(key)}return result}function toObject(value){return isObject(value)?value:Object(value)}function toPath(value){if(isArray(value))return value;var result=[];return baseToString(value).replace(rePropName,function(match,number,quote,string){result.push(quote?string.replace(reEscapeChar,\"$1\"):number||match)}),result}function indexOf(array,value,fromIndex){var length=array?array.length:0;if(!length)return-1;if(\"number\"==typeof fromIndex)fromIndex=0>fromIndex?nativeMax(length+fromIndex,0):fromIndex;else if(fromIndex){var index=binaryIndex(array,value),other=array[index];return(value===value?value===other:other!==other)?index:-1}return baseIndexOf(array,value,fromIndex||0)}function last(array){var length=array?array.length:0;return length?array[length-1]:undefined}function slice(array,start,end){var length=array?array.length:0;return length?(end&&\"number\"!=typeof end&&isIterateeCall(array,start,end)&&(start=0,end=length),baseSlice(array,start,end)):[]}function unzip(array){for(var index=-1,length=(array&&array.length&&arrayMax(arrayMap(array,getLength)))>>>0,result=Array(length);length>++index;)result[index]=arrayMap(array,baseProperty(index));return result}function includes(collection,target,fromIndex,guard){var length=collection?getLength(collection):0;return isLength(length)||(collection=values(collection),length=collection.length),length?(fromIndex=\"number\"!=typeof fromIndex||guard&&isIterateeCall(target,fromIndex,guard)?0:0>fromIndex?nativeMax(length+fromIndex,0):fromIndex||0,\"string\"==typeof collection||!isArray(collection)&&isString(collection)?length>fromIndex&&collection.indexOf(target,fromIndex)>-1:getIndexOf(collection,target,fromIndex)>-1):!1}function reject(collection,predicate,thisArg){var func=isArray(collection)?arrayFilter:baseFilter;return predicate=getCallback(predicate,thisArg,3),func(collection,function(value,index,collection){return!predicate(value,index,collection)})}function some(collection,predicate,thisArg){var func=isArray(collection)?arraySome:baseSome;return thisArg&&isIterateeCall(collection,predicate,thisArg)&&(predicate=null),(\"function\"!=typeof predicate||thisArg!==undefined)&&(predicate=getCallback(predicate,thisArg,3)),func(collection,predicate)}function restParam(func,start){if(\"function\"!=typeof func)throw new TypeError(FUNC_ERROR_TEXT);return start=nativeMax(start===undefined?func.length-1:+start||0,0),function(){for(var args=arguments,index=-1,length=nativeMax(args.length-start,0),rest=Array(length);length>++index;)rest[index]=args[start+index];switch(start){case 0:return func.call(this,rest);case 1:return func.call(this,args[0],rest);case 2:return func.call(this,args[0],args[1],rest)}var otherArgs=Array(start+1);for(index=-1;start>++index;)otherArgs[index]=args[index];return otherArgs[start]=rest,func.apply(this,otherArgs)}}function clone(value,isDeep,customizer,thisArg){return isDeep&&\"boolean\"!=typeof isDeep&&isIterateeCall(value,isDeep,customizer)?isDeep=!1:\"function\"==typeof isDeep&&(thisArg=customizer,customizer=isDeep,isDeep=!1),customizer=\"function\"==typeof customizer&&bindCallback(customizer,thisArg,1),baseClone(value,isDeep,customizer)}function isArguments(value){var length=isObjectLike(value)?value.length:undefined;return isLength(length)&&objToString.call(value)==argsTag}function isEmpty(value){if(null==value)return!0;var length=getLength(value);return isLength(length)&&(isArray(value)||isString(value)||isArguments(value)||isObjectLike(value)&&isFunction(value.splice))?!length:!keys(value).length}function isObject(value){var type=typeof value;return\"function\"==type||!!value&&\"object\"==type}function isNative(value){return null==value?!1:objToString.call(value)==funcTag?reIsNative.test(fnToString.call(value)):isObjectLike(value)&&reIsHostCtor.test(value)}function isNumber(value){return\"number\"==typeof value||isObjectLike(value)&&objToString.call(value)==numberTag}function isString(value){return\"string\"==typeof value||isObjectLike(value)&&objToString.call(value)==stringTag}function isTypedArray(value){return isObjectLike(value)&&isLength(value.length)&&!!typedArrayTags[objToString.call(value)]}function toPlainObject(value){return baseCopy(value,keysIn(value))}function has(object,path){if(null==object)return!1;var result=hasOwnProperty.call(object,path);return result||isKey(path)||(path=toPath(path),object=1==path.length?object:baseGet(object,baseSlice(path,0,-1)),path=last(path),result=null!=object&&hasOwnProperty.call(object,path)),result}function keysIn(object){if(null==object)return[];isObject(object)||(object=Object(object));var length=object.length;length=length&&isLength(length)&&(isArray(object)||support.nonEnumArgs&&isArguments(object))&&length||0;for(var Ctor=object.constructor,index=-1,isProto=\"function\"==typeof Ctor&&Ctor.prototype===object,result=Array(length),skipIndexes=length>0;length>++index;)result[index]=index+\"\";for(var key in object)skipIndexes&&isIndex(key,length)||\"constructor\"==key&&(isProto||!hasOwnProperty.call(object,key))||result.push(key);return result}function values(object){return baseValues(object,keys(object))}function escapeRegExp(string){return string=baseToString(string),string&&reHasRegExpChars.test(string)?string.replace(reRegExpChars,\"\\\\$&\"):string}function callback(func,thisArg,guard){return guard&&isIterateeCall(func,thisArg,guard)&&(thisArg=null),baseCallback(func,thisArg)}function constant(value){return function(){return value}}function identity(value){return value}function property(path){return isKey(path)?baseProperty(path):basePropertyDeep(path)}var undefined,VERSION=\"3.7.0\",FUNC_ERROR_TEXT=\"Expected a function\",argsTag=\"[object Arguments]\",arrayTag=\"[object Array]\",boolTag=\"[object Boolean]\",dateTag=\"[object Date]\",errorTag=\"[object Error]\",funcTag=\"[object Function]\",mapTag=\"[object Map]\",numberTag=\"[object Number]\",objectTag=\"[object Object]\",regexpTag=\"[object RegExp]\",setTag=\"[object Set]\",stringTag=\"[object String]\",weakMapTag=\"[object WeakMap]\",arrayBufferTag=\"[object ArrayBuffer]\",float32Tag=\"[object Float32Array]\",float64Tag=\"[object Float64Array]\",int8Tag=\"[object Int8Array]\",int16Tag=\"[object Int16Array]\",int32Tag=\"[object Int32Array]\",uint8Tag=\"[object Uint8Array]\",uint8ClampedTag=\"[object Uint8ClampedArray]\",uint16Tag=\"[object Uint16Array]\",uint32Tag=\"[object Uint32Array]\",reIsDeepProp=/\\.|\\[(?:[^[\\]]+|([\"'])(?:(?!\\1)[^\\n\\\\]|\\\\.)*?)\\1\\]/,reIsPlainProp=/^\\w*$/,rePropName=/[^.[\\]]+|\\[(?:(-?\\d+(?:\\.\\d+)?)|([\"'])((?:(?!\\2)[^\\n\\\\]|\\\\.)*?)\\2)\\]/g,reRegExpChars=/[.*+?^${}()|[\\]\\/\\\\]/g,reHasRegExpChars=RegExp(reRegExpChars.source),reEscapeChar=/\\\\(\\\\)?/g,reFlags=/\\w*$/,reIsHostCtor=/^\\[object .+?Constructor\\]$/,typedArrayTags={};typedArrayTags[float32Tag]=typedArrayTags[float64Tag]=typedArrayTags[int8Tag]=typedArrayTags[int16Tag]=typedArrayTags[int32Tag]=typedArrayTags[uint8Tag]=typedArrayTags[uint8ClampedTag]=typedArrayTags[uint16Tag]=typedArrayTags[uint32Tag]=!0,typedArrayTags[argsTag]=typedArrayTags[arrayTag]=typedArrayTags[arrayBufferTag]=typedArrayTags[boolTag]=typedArrayTags[dateTag]=typedArrayTags[errorTag]=typedArrayTags[funcTag]=typedArrayTags[mapTag]=typedArrayTags[numberTag]=typedArrayTags[objectTag]=typedArrayTags[regexpTag]=typedArrayTags[setTag]=typedArrayTags[stringTag]=typedArrayTags[weakMapTag]=!1;var cloneableTags={};cloneableTags[argsTag]=cloneableTags[arrayTag]=cloneableTags[arrayBufferTag]=cloneableTags[boolTag]=cloneableTags[dateTag]=cloneableTags[float32Tag]=cloneableTags[float64Tag]=cloneableTags[int8Tag]=cloneableTags[int16Tag]=cloneableTags[int32Tag]=cloneableTags[numberTag]=cloneableTags[objectTag]=cloneableTags[regexpTag]=cloneableTags[stringTag]=cloneableTags[uint8Tag]=cloneableTags[uint8ClampedTag]=cloneableTags[uint16Tag]=cloneableTags[uint32Tag]=!0,cloneableTags[errorTag]=cloneableTags[funcTag]=cloneableTags[mapTag]=cloneableTags[setTag]=cloneableTags[weakMapTag]=!1;var objectTypes={\"function\":!0,object:!0},freeExports=objectTypes[typeof exports]&&exports&&!exports.nodeType&&exports,freeModule=objectTypes[typeof module]&&module&&!module.nodeType&&module,freeGlobal=freeExports&&freeModule&&\"object\"==typeof global&&global&&global.Object&&global,freeSelf=objectTypes[typeof self]&&self&&self.Object&&self,freeWindow=objectTypes[typeof window]&&window&&window.Object&&window,moduleExports=freeModule&&freeModule.exports===freeExports&&freeExports,root=freeGlobal||freeWindow!==(this&&this.window)&&freeWindow||freeSelf||this,arrayProto=Array.prototype,objectProto=Object.prototype,fnToString=Function.prototype.toString,hasOwnProperty=objectProto.hasOwnProperty,objToString=objectProto.toString,reIsNative=RegExp(\"^\"+escapeRegExp(objToString).replace(/toString|(function).*?(?=\\\\\\()| for .+?(?=\\\\\\])/g,\"$1.*?\")+\"$\"),ArrayBuffer=isNative(ArrayBuffer=root.ArrayBuffer)&&ArrayBuffer,bufferSlice=isNative(bufferSlice=ArrayBuffer&&new ArrayBuffer(0).slice)&&bufferSlice,floor=Math.floor,getOwnPropertySymbols=isNative(getOwnPropertySymbols=Object.getOwnPropertySymbols)&&getOwnPropertySymbols,getPrototypeOf=isNative(getPrototypeOf=Object.getPrototypeOf)&&getPrototypeOf,push=arrayProto.push,preventExtensions=isNative(Object.preventExtensions=Object.preventExtensions)&&preventExtensions,propertyIsEnumerable=objectProto.propertyIsEnumerable,Uint8Array=isNative(Uint8Array=root.Uint8Array)&&Uint8Array,Float64Array=function(){try{var func=isNative(func=root.Float64Array)&&func,result=new func(new ArrayBuffer(10),0,1)&&func}catch(e){}return result}(),nativeAssign=function(){var object={1:0},func=preventExtensions&&isNative(func=Object.assign)&&func;try{func(preventExtensions(object),\"xo\")}catch(e){}return!object[1]&&func}(),nativeIsArray=isNative(nativeIsArray=Array.isArray)&&nativeIsArray,nativeKeys=isNative(nativeKeys=Object.keys)&&nativeKeys,nativeMax=Math.max,nativeMin=Math.min,NEGATIVE_INFINITY=Number.NEGATIVE_INFINITY,MAX_ARRAY_LENGTH=Math.pow(2,32)-1,MAX_ARRAY_INDEX=MAX_ARRAY_LENGTH-1,HALF_MAX_ARRAY_LENGTH=MAX_ARRAY_LENGTH>>>1,FLOAT64_BYTES_PER_ELEMENT=Float64Array?Float64Array.BYTES_PER_ELEMENT:0,MAX_SAFE_INTEGER=Math.pow(2,53)-1,support=lodash.support={};(function(x){var Ctor=function(){this.x=x},props=[];Ctor.prototype={valueOf:x,y:x};for(var key in new Ctor)props.push(key);support.funcDecomp=/\\bthis\\b/.test(function(){return this}),support.funcNames=\"string\"==typeof Function.name;try{support.nonEnumArgs=!propertyIsEnumerable.call(arguments,1)}catch(e){support.nonEnumArgs=!0}})(1,0);var baseAssign=nativeAssign||function(object,source){return null==source?object:baseCopy(source,getSymbols(source),baseCopy(source,keys(source),object))},baseEach=createBaseEach(baseForOwn),baseFor=createBaseFor();bufferSlice||(bufferClone=ArrayBuffer&&Uint8Array?function(buffer){var byteLength=buffer.byteLength,floatLength=Float64Array?floor(byteLength/FLOAT64_BYTES_PER_ELEMENT):0,offset=floatLength*FLOAT64_BYTES_PER_ELEMENT,result=new ArrayBuffer(byteLength);if(floatLength){var view=new Float64Array(result,0,floatLength);view.set(new Float64Array(buffer,0,floatLength))}return byteLength!=offset&&(view=new Uint8Array(result,offset),view.set(new Uint8Array(buffer,offset))),result}:constant(null));var getLength=baseProperty(\"length\"),getSymbols=getOwnPropertySymbols?function(object){return getOwnPropertySymbols(toObject(object))}:constant([]),findLastIndex=createFindIndex(!0),zip=restParam(unzip),forEach=createForEach(arrayEach,baseEach),isArray=nativeIsArray||function(value){return isObjectLike(value)&&isLength(value.length)&&objToString.call(value)==arrayTag},isFunction=baseIsFunction(/x/)||Uint8Array&&!baseIsFunction(Uint8Array)?function(value){return objToString.call(value)==funcTag}:baseIsFunction,isPlainObject=getPrototypeOf?function(value){if(!value||objToString.call(value)!=objectTag)return!1;var valueOf=value.valueOf,objProto=isNative(valueOf)&&(objProto=getPrototypeOf(valueOf))&&getPrototypeOf(objProto);return objProto?value==objProto||getPrototypeOf(value)==objProto:shimIsPlainObject(value)}:shimIsPlainObject,assign=createAssigner(function(object,source,customizer){return customizer?assignWith(object,source,customizer):baseAssign(object,source)}),keys=nativeKeys?function(object){if(object)var Ctor=object.constructor,length=object.length;return\"function\"==typeof Ctor&&Ctor.prototype===object||\"function\"!=typeof object&&isLength(length)?shimKeys(object):isObject(object)?nativeKeys(object):[]}:shimKeys,merge=createAssigner(baseMerge);lodash.assign=assign,lodash.callback=callback,lodash.constant=constant,lodash.forEach=forEach,lodash.keys=keys,lodash.keysIn=keysIn,lodash.merge=merge,lodash.property=property,lodash.reject=reject,lodash.restParam=restParam,lodash.slice=slice,lodash.toPlainObject=toPlainObject,lodash.unzip=unzip,lodash.values=values,lodash.zip=zip,lodash.each=forEach,lodash.extend=assign,lodash.iteratee=callback,lodash.clone=clone,lodash.escapeRegExp=escapeRegExp,lodash.findLastIndex=findLastIndex,lodash.has=has,lodash.identity=identity,lodash.includes=includes,lodash.indexOf=indexOf,lodash.isArguments=isArguments,lodash.isArray=isArray,lodash.isEmpty=isEmpty,lodash.isFunction=isFunction,lodash.isNative=isNative,lodash.isNumber=isNumber,lodash.isObject=isObject,lodash.isPlainObject=isPlainObject,lodash.isString=isString,lodash.isTypedArray=isTypedArray,lodash.last=last,lodash.some=some,lodash.any=some,lodash.contains=includes,lodash.include=includes,lodash.VERSION=VERSION,freeExports&&freeModule?moduleExports?(freeModule.exports=lodash)._=lodash:freeExports._=lodash:root._=lodash\n}).call(this)}).call(this,\"undefined\"!=typeof global?global:\"undefined\"!=typeof self?self:\"undefined\"!=typeof window?window:{})},{}],\"/node_modules/jshint/src/jshint.js\":[function(_dereq_,module,exports){var _=_dereq_(\"../lodash\"),events=_dereq_(\"events\"),vars=_dereq_(\"./vars.js\"),messages=_dereq_(\"./messages.js\"),Lexer=_dereq_(\"./lex.js\").Lexer,reg=_dereq_(\"./reg.js\"),state=_dereq_(\"./state.js\").state,style=_dereq_(\"./style.js\"),options=_dereq_(\"./options.js\"),scopeManager=_dereq_(\"./scope-manager.js\"),JSHINT=function(){\"use strict\";function checkOption(name,t){return name=name.trim(),/^[+-]W\\d{3}$/g.test(name)?!0:-1!==options.validNames.indexOf(name)||\"jslint\"===t.type||_.has(options.removed,name)?!0:(error(\"E001\",t,name),!1)}function isString(obj){return\"[object String]\"===Object.prototype.toString.call(obj)}function isIdentifier(tkn,value){return tkn?tkn.identifier&&tkn.value===value?!0:!1:!1}function isReserved(token){if(!token.reserved)return!1;var meta=token.meta;if(meta&&meta.isFutureReservedWord&&state.inES5()){if(!meta.es5)return!1;if(meta.strictOnly&&!state.option.strict&&!state.isStrict())return!1;if(token.isProperty)return!1}return!0}function supplant(str,data){return str.replace(/\\{([^{}]*)\\}/g,function(a,b){var r=data[b];return\"string\"==typeof r||\"number\"==typeof r?r:a})}function combine(dest,src){Object.keys(src).forEach(function(name){_.has(JSHINT.blacklist,name)||(dest[name]=src[name])})}function processenforceall(){if(state.option.enforceall){for(var enforceopt in options.bool.enforcing)void 0!==state.option[enforceopt]||options.noenforceall[enforceopt]||(state.option[enforceopt]=!0);for(var relaxopt in options.bool.relaxing)void 0===state.option[relaxopt]&&(state.option[relaxopt]=!1)}}function assume(){processenforceall(),state.option.esversion||state.option.moz||(state.option.esversion=state.option.es3?3:state.option.esnext?6:5),state.inES5()&&combine(predefined,vars.ecmaIdentifiers[5]),state.inES6()&&combine(predefined,vars.ecmaIdentifiers[6]),state.option.module&&(state.option.strict===!0&&(state.option.strict=\"global\"),state.inES6()||warning(\"W134\",state.tokens.next,\"module\",6)),state.option.couch&&combine(predefined,vars.couch),state.option.qunit&&combine(predefined,vars.qunit),state.option.rhino&&combine(predefined,vars.rhino),state.option.shelljs&&(combine(predefined,vars.shelljs),combine(predefined,vars.node)),state.option.typed&&combine(predefined,vars.typed),state.option.phantom&&(combine(predefined,vars.phantom),state.option.strict===!0&&(state.option.strict=\"global\")),state.option.prototypejs&&combine(predefined,vars.prototypejs),state.option.node&&(combine(predefined,vars.node),combine(predefined,vars.typed),state.option.strict===!0&&(state.option.strict=\"global\")),state.option.devel&&combine(predefined,vars.devel),state.option.dojo&&combine(predefined,vars.dojo),state.option.browser&&(combine(predefined,vars.browser),combine(predefined,vars.typed)),state.option.browserify&&(combine(predefined,vars.browser),combine(predefined,vars.typed),combine(predefined,vars.browserify),state.option.strict===!0&&(state.option.strict=\"global\")),state.option.nonstandard&&combine(predefined,vars.nonstandard),state.option.jasmine&&combine(predefined,vars.jasmine),state.option.jquery&&combine(predefined,vars.jquery),state.option.mootools&&combine(predefined,vars.mootools),state.option.worker&&combine(predefined,vars.worker),state.option.wsh&&combine(predefined,vars.wsh),state.option.globalstrict&&state.option.strict!==!1&&(state.option.strict=\"global\"),state.option.yui&&combine(predefined,vars.yui),state.option.mocha&&combine(predefined,vars.mocha)}function quit(code,line,chr){var percentage=Math.floor(100*(line/state.lines.length)),message=messages.errors[code].desc;throw{name:\"JSHintError\",line:line,character:chr,message:message+\" (\"+percentage+\"% scanned).\",raw:message,code:code}}function removeIgnoredMessages(){var ignored=state.ignoredLines;_.isEmpty(ignored)||(JSHINT.errors=_.reject(JSHINT.errors,function(err){return ignored[err.line]}))}function warning(code,t,a,b,c,d){var ch,l,w,msg;if(/^W\\d{3}$/.test(code)){if(state.ignored[code])return;msg=messages.warnings[code]}else/E\\d{3}/.test(code)?msg=messages.errors[code]:/I\\d{3}/.test(code)&&(msg=messages.info[code]);return t=t||state.tokens.next||{},\"(end)\"===t.id&&(t=state.tokens.curr),l=t.line||0,ch=t.from||0,w={id:\"(error)\",raw:msg.desc,code:msg.code,evidence:state.lines[l-1]||\"\",line:l,character:ch,scope:JSHINT.scope,a:a,b:b,c:c,d:d},w.reason=supplant(msg.desc,w),JSHINT.errors.push(w),removeIgnoredMessages(),JSHINT.errors.length>=state.option.maxerr&&quit(\"E043\",l,ch),w}function warningAt(m,l,ch,a,b,c,d){return warning(m,{line:l,from:ch},a,b,c,d)}function error(m,t,a,b,c,d){warning(m,t,a,b,c,d)}function errorAt(m,l,ch,a,b,c,d){return error(m,{line:l,from:ch},a,b,c,d)}function addInternalSrc(elem,src){var i;return i={id:\"(internal)\",elem:elem,value:src},JSHINT.internals.push(i),i}function doOption(){var nt=state.tokens.next,body=nt.body.match(/(-\\s+)?[^\\s,:]+(?:\\s*:\\s*(-\\s+)?[^\\s,]+)?/g)||[],predef={};if(\"globals\"===nt.type){body.forEach(function(g,idx){g=g.split(\":\");var key=(g[0]||\"\").trim(),val=(g[1]||\"\").trim();if(\"-\"===key||!key.length){if(idx>0&&idx===body.length-1)return;return error(\"E002\",nt),void 0}\"-\"===key.charAt(0)?(key=key.slice(1),val=!1,JSHINT.blacklist[key]=key,delete predefined[key]):predef[key]=\"true\"===val}),combine(predefined,predef);for(var key in predef)_.has(predef,key)&&(declared[key]=nt)}\"exported\"===nt.type&&body.forEach(function(e,idx){if(!e.length){if(idx>0&&idx===body.length-1)return;return error(\"E002\",nt),void 0}state.funct[\"(scope)\"].addExported(e)}),\"members\"===nt.type&&(membersOnly=membersOnly||{},body.forEach(function(m){var ch1=m.charAt(0),ch2=m.charAt(m.length-1);ch1!==ch2||'\"'!==ch1&&\"'\"!==ch1||(m=m.substr(1,m.length-2).replace('\\\\\"','\"')),membersOnly[m]=!1}));var numvals=[\"maxstatements\",\"maxparams\",\"maxdepth\",\"maxcomplexity\",\"maxerr\",\"maxlen\",\"indent\"];(\"jshint\"===nt.type||\"jslint\"===nt.type)&&(body.forEach(function(g){g=g.split(\":\");var key=(g[0]||\"\").trim(),val=(g[1]||\"\").trim();if(checkOption(key,nt))if(numvals.indexOf(key)>=0)if(\"false\"!==val){if(val=+val,\"number\"!=typeof val||!isFinite(val)||0>=val||Math.floor(val)!==val)return error(\"E032\",nt,g[1].trim()),void 0;state.option[key]=val}else state.option[key]=\"indent\"===key?4:!1;else{if(\"validthis\"===key)return state.funct[\"(global)\"]?void error(\"E009\"):\"true\"!==val&&\"false\"!==val?void error(\"E002\",nt):(state.option.validthis=\"true\"===val,void 0);if(\"quotmark\"!==key)if(\"shadow\"!==key)if(\"unused\"!==key)if(\"latedef\"!==key)if(\"ignore\"!==key)if(\"strict\"!==key){\"module\"===key&&(hasParsedCode(state.funct)||error(\"E055\",state.tokens.next,\"module\"));var esversions={es3:3,es5:5,esnext:6};if(!_.has(esversions,key)){if(\"esversion\"===key){switch(val){case\"5\":state.inES5(!0)&&warning(\"I003\");case\"3\":case\"6\":state.option.moz=!1,state.option.esversion=+val;break;case\"2015\":state.option.moz=!1,state.option.esversion=6;break;default:error(\"E002\",nt)}return hasParsedCode(state.funct)||error(\"E055\",state.tokens.next,\"esversion\"),void 0}var match=/^([+-])(W\\d{3})$/g.exec(key);if(match)return state.ignored[match[2]]=\"-\"===match[1],void 0;var tn;return\"true\"===val||\"false\"===val?(\"jslint\"===nt.type?(tn=options.renamed[key]||key,state.option[tn]=\"true\"===val,void 0!==options.inverted[tn]&&(state.option[tn]=!state.option[tn])):state.option[key]=\"true\"===val,\"newcap\"===key&&(state.option[\"(explicitNewcap)\"]=!0),void 0):(error(\"E002\",nt),void 0)}switch(val){case\"true\":state.option.moz=!1,state.option.esversion=esversions[key];break;case\"false\":state.option.moz||(state.option.esversion=5);break;default:error(\"E002\",nt)}}else switch(val){case\"true\":state.option.strict=!0;break;case\"false\":state.option.strict=!1;break;case\"func\":case\"global\":case\"implied\":state.option.strict=val;break;default:error(\"E002\",nt)}else switch(val){case\"line\":state.ignoredLines[nt.line]=!0,removeIgnoredMessages();break;default:error(\"E002\",nt)}else switch(val){case\"true\":state.option.latedef=!0;break;case\"false\":state.option.latedef=!1;break;case\"nofunc\":state.option.latedef=\"nofunc\";break;default:error(\"E002\",nt)}else switch(val){case\"true\":state.option.unused=!0;break;case\"false\":state.option.unused=!1;break;case\"vars\":case\"strict\":state.option.unused=val;break;default:error(\"E002\",nt)}else switch(val){case\"true\":state.option.shadow=!0;break;case\"outer\":state.option.shadow=\"outer\";break;case\"false\":case\"inner\":state.option.shadow=\"inner\";break;default:error(\"E002\",nt)}else switch(val){case\"true\":case\"false\":state.option.quotmark=\"true\"===val;break;case\"double\":case\"single\":state.option.quotmark=val;break;default:error(\"E002\",nt)}}}),assume())}function peek(p){var t,i=p||0,j=lookahead.length;if(j>i)return lookahead[i];for(;i>=j;)t=lookahead[j],t||(t=lookahead[j]=lex.token()),j+=1;return t||\"(end)\"!==state.tokens.next.id?t:state.tokens.next}function peekIgnoreEOL(){var t,i=0;do t=peek(i++);while(\"(endline)\"===t.id);return t}function advance(id,t){switch(state.tokens.curr.id){case\"(number)\":\".\"===state.tokens.next.id&&warning(\"W005\",state.tokens.curr);break;case\"-\":(\"-\"===state.tokens.next.id||\"--\"===state.tokens.next.id)&&warning(\"W006\");break;case\"+\":(\"+\"===state.tokens.next.id||\"++\"===state.tokens.next.id)&&warning(\"W007\")}for(id&&state.tokens.next.id!==id&&(t?\"(end)\"===state.tokens.next.id?error(\"E019\",t,t.id):error(\"E020\",state.tokens.next,id,t.id,t.line,state.tokens.next.value):(\"(identifier)\"!==state.tokens.next.type||state.tokens.next.value!==id)&&warning(\"W116\",state.tokens.next,id,state.tokens.next.value)),state.tokens.prev=state.tokens.curr,state.tokens.curr=state.tokens.next;;){if(state.tokens.next=lookahead.shift()||lex.token(),state.tokens.next||quit(\"E041\",state.tokens.curr.line),\"(end)\"===state.tokens.next.id||\"(error)\"===state.tokens.next.id)return;if(state.tokens.next.check&&state.tokens.next.check(),state.tokens.next.isSpecial)\"falls through\"===state.tokens.next.type?state.tokens.curr.caseFallsThrough=!0:doOption();else if(\"(endline)\"!==state.tokens.next.id)break}}function isInfix(token){return token.infix||!token.identifier&&!token.template&&!!token.led}function isEndOfExpr(){var curr=state.tokens.curr,next=state.tokens.next;return\";\"===next.id||\"}\"===next.id||\":\"===next.id?!0:isInfix(next)===isInfix(curr)||\"yield\"===curr.id&&state.inMoz()?curr.line!==startLine(next):!1}function isBeginOfExpr(prev){return!prev.left&&\"unary\"!==prev.arity}function expression(rbp,initial){var left,isArray=!1,isObject=!1,isLetExpr=!1;state.nameStack.push(),initial||\"let\"!==state.tokens.next.value||\"(\"!==peek(0).value||(state.inMoz()||warning(\"W118\",state.tokens.next,\"let expressions\"),isLetExpr=!0,state.funct[\"(scope)\"].stack(),advance(\"let\"),advance(\"(\"),state.tokens.prev.fud(),advance(\")\")),\"(end)\"===state.tokens.next.id&&error(\"E006\",state.tokens.curr);var isDangerous=state.option.asi&&state.tokens.prev.line!==startLine(state.tokens.curr)&&_.contains([\"]\",\")\"],state.tokens.prev.id)&&_.contains([\"[\",\"(\"],state.tokens.curr.id);if(isDangerous&&warning(\"W014\",state.tokens.curr,state.tokens.curr.id),advance(),initial&&(state.funct[\"(verb)\"]=state.tokens.curr.value,state.tokens.curr.beginsStmt=!0),initial===!0&&state.tokens.curr.fud)left=state.tokens.curr.fud();else for(state.tokens.curr.nud?left=state.tokens.curr.nud():error(\"E030\",state.tokens.curr,state.tokens.curr.id);(state.tokens.next.lbp>rbp||\"(template)\"===state.tokens.next.type)&&!isEndOfExpr();)isArray=\"Array\"===state.tokens.curr.value,isObject=\"Object\"===state.tokens.curr.value,left&&(left.value||left.first&&left.first.value)&&(\"new\"!==left.value||left.first&&left.first.value&&\".\"===left.first.value)&&(isArray=!1,left.value!==state.tokens.curr.value&&(isObject=!1)),advance(),isArray&&\"(\"===state.tokens.curr.id&&\")\"===state.tokens.next.id&&warning(\"W009\",state.tokens.curr),isObject&&\"(\"===state.tokens.curr.id&&\")\"===state.tokens.next.id&&warning(\"W010\",state.tokens.curr),left&&state.tokens.curr.led?left=state.tokens.curr.led(left):error(\"E033\",state.tokens.curr,state.tokens.curr.id);return isLetExpr&&state.funct[\"(scope)\"].unstack(),state.nameStack.pop(),left}function startLine(token){return token.startLine||token.line}function nobreaknonadjacent(left,right){left=left||state.tokens.curr,right=right||state.tokens.next,state.option.laxbreak||left.line===startLine(right)||warning(\"W014\",right,right.value)}function nolinebreak(t){t=t||state.tokens.curr,t.line!==startLine(state.tokens.next)&&warning(\"E022\",t,t.value)}function nobreakcomma(left,right){left.line!==startLine(right)&&(state.option.laxcomma||(comma.first&&(warning(\"I001\"),comma.first=!1),warning(\"W014\",left,right.value)))}function comma(opts){if(opts=opts||{},opts.peek?nobreakcomma(state.tokens.prev,state.tokens.curr):(nobreakcomma(state.tokens.curr,state.tokens.next),advance(\",\")),state.tokens.next.identifier&&(!opts.property||!state.inES5()))switch(state.tokens.next.value){case\"break\":case\"case\":case\"catch\":case\"continue\":case\"default\":case\"do\":case\"else\":case\"finally\":case\"for\":case\"if\":case\"in\":case\"instanceof\":case\"return\":case\"switch\":case\"throw\":case\"try\":case\"var\":case\"let\":case\"while\":case\"with\":return error(\"E024\",state.tokens.next,state.tokens.next.value),!1}if(\"(punctuator)\"===state.tokens.next.type)switch(state.tokens.next.value){case\"}\":case\"]\":case\",\":if(opts.allowTrailing)return!0;case\")\":return error(\"E024\",state.tokens.next,state.tokens.next.value),!1}return!0}function symbol(s,p){var x=state.syntax[s];return x&&\"object\"==typeof x||(state.syntax[s]=x={id:s,lbp:p,value:s}),x}function delim(s){var x=symbol(s,0);return x.delim=!0,x}function stmt(s,f){var x=delim(s);return x.identifier=x.reserved=!0,x.fud=f,x}function blockstmt(s,f){var x=stmt(s,f);return x.block=!0,x}function reserveName(x){var c=x.id.charAt(0);return(c>=\"a\"&&\"z\">=c||c>=\"A\"&&\"Z\">=c)&&(x.identifier=x.reserved=!0),x}function prefix(s,f){var x=symbol(s,150);return reserveName(x),x.nud=\"function\"==typeof f?f:function(){return this.arity=\"unary\",this.right=expression(150),(\"++\"===this.id||\"--\"===this.id)&&(state.option.plusplus?warning(\"W016\",this,this.id):!this.right||this.right.identifier&&!isReserved(this.right)||\".\"===this.right.id||\"[\"===this.right.id||warning(\"W017\",this),this.right&&this.right.isMetaProperty?error(\"E031\",this):this.right&&this.right.identifier&&state.funct[\"(scope)\"].block.modify(this.right.value,this)),this},x}function type(s,f){var x=delim(s);return x.type=s,x.nud=f,x}function reserve(name,func){var x=type(name,func);return x.identifier=!0,x.reserved=!0,x}function FutureReservedWord(name,meta){var x=type(name,meta&&meta.nud||function(){return this});return meta=meta||{},meta.isFutureReservedWord=!0,x.value=name,x.identifier=!0,x.reserved=!0,x.meta=meta,x}function reservevar(s,v){return reserve(s,function(){return\"function\"==typeof v&&v(this),this})}function infix(s,f,p,w){var x=symbol(s,p);return reserveName(x),x.infix=!0,x.led=function(left){return w||nobreaknonadjacent(state.tokens.prev,state.tokens.curr),\"in\"!==s&&\"instanceof\"!==s||\"!\"!==left.id||warning(\"W018\",left,\"!\"),\"function\"==typeof f?f(left,this):(this.left=left,this.right=expression(p),this)},x}function application(s){var x=symbol(s,42);return x.led=function(left){return nobreaknonadjacent(state.tokens.prev,state.tokens.curr),this.left=left,this.right=doFunction({type:\"arrow\",loneArg:left}),this},x}function relation(s,f){var x=symbol(s,100);return x.led=function(left){nobreaknonadjacent(state.tokens.prev,state.tokens.curr),this.left=left;var right=this.right=expression(100);return isIdentifier(left,\"NaN\")||isIdentifier(right,\"NaN\")?warning(\"W019\",this):f&&f.apply(this,[left,right]),left&&right||quit(\"E041\",state.tokens.curr.line),\"!\"===left.id&&warning(\"W018\",left,\"!\"),\"!\"===right.id&&warning(\"W018\",right,\"!\"),this},x}function isPoorRelation(node){return node&&(\"(number)\"===node.type&&0===+node.value||\"(string)\"===node.type&&\"\"===node.value||\"null\"===node.type&&!state.option.eqnull||\"true\"===node.type||\"false\"===node.type||\"undefined\"===node.type)}function isTypoTypeof(left,right,state){var values;return state.option.notypeof?!1:left&&right?(values=state.inES6()?typeofValues.es6:typeofValues.es3,\"(identifier)\"===right.type&&\"typeof\"===right.value&&\"(string)\"===left.type?!_.contains(values,left.value):!1):!1}function isGlobalEval(left,state){var isGlobal=!1;return\"this\"===left.type&&null===state.funct[\"(context)\"]?isGlobal=!0:\"(identifier)\"===left.type&&(state.option.node&&\"global\"===left.value?isGlobal=!0:!state.option.browser||\"window\"!==left.value&&\"document\"!==left.value||(isGlobal=!0)),isGlobal}function findNativePrototype(left){function walkPrototype(obj){return\"object\"==typeof obj?\"prototype\"===obj.right?obj:walkPrototype(obj.left):void 0}function walkNative(obj){for(;!obj.identifier&&\"object\"==typeof obj.left;)obj=obj.left;return obj.identifier&&natives.indexOf(obj.value)>=0?obj.value:void 0}var natives=[\"Array\",\"ArrayBuffer\",\"Boolean\",\"Collator\",\"DataView\",\"Date\",\"DateTimeFormat\",\"Error\",\"EvalError\",\"Float32Array\",\"Float64Array\",\"Function\",\"Infinity\",\"Intl\",\"Int16Array\",\"Int32Array\",\"Int8Array\",\"Iterator\",\"Number\",\"NumberFormat\",\"Object\",\"RangeError\",\"ReferenceError\",\"RegExp\",\"StopIteration\",\"String\",\"SyntaxError\",\"TypeError\",\"Uint16Array\",\"Uint32Array\",\"Uint8Array\",\"Uint8ClampedArray\",\"URIError\"],prototype=walkPrototype(left);return prototype?walkNative(prototype):void 0}function checkLeftSideAssign(left,assignToken,options){var allowDestructuring=options&&options.allowDestructuring;if(assignToken=assignToken||left,state.option.freeze){var nativeObject=findNativePrototype(left);nativeObject&&warning(\"W121\",left,nativeObject)}return left.identifier&&!left.isMetaProperty&&state.funct[\"(scope)\"].block.reassign(left.value,left),\".\"===left.id?((!left.left||\"arguments\"===left.left.value&&!state.isStrict())&&warning(\"E031\",assignToken),state.nameStack.set(state.tokens.prev),!0):\"{\"===left.id||\"[\"===left.id?(allowDestructuring&&state.tokens.curr.left.destructAssign?state.tokens.curr.left.destructAssign.forEach(function(t){t.id&&state.funct[\"(scope)\"].block.modify(t.id,t.token)}):\"{\"!==left.id&&left.left?\"arguments\"!==left.left.value||state.isStrict()||warning(\"E031\",assignToken):warning(\"E031\",assignToken),\"[\"===left.id&&state.nameStack.set(left.right),!0):left.isMetaProperty?(error(\"E031\",assignToken),!0):left.identifier&&!isReserved(left)?(\"exception\"===state.funct[\"(scope)\"].labeltype(left.value)&&warning(\"W022\",left),state.nameStack.set(left),!0):(left===state.syntax[\"function\"]&&warning(\"W023\",state.tokens.curr),!1)}function assignop(s,f,p){var x=infix(s,\"function\"==typeof f?f:function(left,that){return that.left=left,left&&checkLeftSideAssign(left,that,{allowDestructuring:!0})?(that.right=expression(10),that):(error(\"E031\",that),void 0)},p);return x.exps=!0,x.assign=!0,x}function bitwise(s,f,p){var x=symbol(s,p);return reserveName(x),x.led=\"function\"==typeof f?f:function(left){return state.option.bitwise&&warning(\"W016\",this,this.id),this.left=left,this.right=expression(p),this},x}function bitwiseassignop(s){return assignop(s,function(left,that){return state.option.bitwise&&warning(\"W016\",that,that.id),left&&checkLeftSideAssign(left,that)?(that.right=expression(10),that):(error(\"E031\",that),void 0)},20)}function suffix(s){var x=symbol(s,150);return x.led=function(left){return state.option.plusplus?warning(\"W016\",this,this.id):left.identifier&&!isReserved(left)||\".\"===left.id||\"[\"===left.id||warning(\"W017\",this),left.isMetaProperty?error(\"E031\",this):left&&left.identifier&&state.funct[\"(scope)\"].block.modify(left.value,left),this.left=left,this},x}function optionalidentifier(fnparam,prop,preserve){if(state.tokens.next.identifier){preserve||advance();var curr=state.tokens.curr,val=state.tokens.curr.value;return isReserved(curr)?prop&&state.inES5()?val:fnparam&&\"undefined\"===val?val:(warning(\"W024\",state.tokens.curr,state.tokens.curr.id),val):val}}function identifier(fnparam,prop){var i=optionalidentifier(fnparam,prop,!1);if(i)return i;if(\"...\"===state.tokens.next.value){if(state.inES6(!0)||warning(\"W119\",state.tokens.next,\"spread/rest operator\",\"6\"),advance(),checkPunctuator(state.tokens.next,\"...\"))for(warning(\"E024\",state.tokens.next,\"...\");checkPunctuator(state.tokens.next,\"...\");)advance();return state.tokens.next.identifier?identifier(fnparam,prop):(warning(\"E024\",state.tokens.curr,\"...\"),void 0)}error(\"E030\",state.tokens.next,state.tokens.next.value),\";\"!==state.tokens.next.id&&advance()}function reachable(controlToken){var t,i=0;if(\";\"===state.tokens.next.id&&!controlToken.inBracelessBlock)for(;;){do t=peek(i),i+=1;while(\"(end)\"!==t.id&&\"(comment)\"===t.id);if(t.reach)return;if(\"(endline)\"!==t.id){if(\"function\"===t.id){state.option.latedef===!0&&warning(\"W026\",t);break}warning(\"W027\",t,t.value,controlToken.value);break}}}function parseFinalSemicolon(){if(\";\"!==state.tokens.next.id){if(state.tokens.next.isUnclosed)return advance();var sameLine=startLine(state.tokens.next)===state.tokens.curr.line&&\"(end)\"!==state.tokens.next.id,blockEnd=checkPunctuator(state.tokens.next,\"}\");sameLine&&!blockEnd?errorAt(\"E058\",state.tokens.curr.line,state.tokens.curr.character):state.option.asi||(blockEnd&&!state.option.lastsemic||!sameLine)&&warningAt(\"W033\",state.tokens.curr.line,state.tokens.curr.character)}else advance(\";\")}function statement(){var r,i=indent,t=state.tokens.next,hasOwnScope=!1;if(\";\"===t.id)return advance(\";\"),void 0;var res=isReserved(t);if(res&&t.meta&&t.meta.isFutureReservedWord&&\":\"===peek().id&&(warning(\"W024\",t,t.id),res=!1),t.identifier&&!res&&\":\"===peek().id&&(advance(),advance(\":\"),hasOwnScope=!0,state.funct[\"(scope)\"].stack(),state.funct[\"(scope)\"].block.addBreakLabel(t.value,{token:state.tokens.curr}),state.tokens.next.labelled||\"{\"===state.tokens.next.value||warning(\"W028\",state.tokens.next,t.value,state.tokens.next.value),state.tokens.next.label=t.value,t=state.tokens.next),\"{\"===t.id){var iscase=\"case\"===state.funct[\"(verb)\"]&&\":\"===state.tokens.curr.value;return block(!0,!0,!1,!1,iscase),void 0}return r=expression(0,!0),!r||r.identifier&&\"function\"===r.value||\"(punctuator)\"===r.type&&r.left&&r.left.identifier&&\"function\"===r.left.value||state.isStrict()||\"global\"!==state.option.strict||warning(\"E007\"),t.block||(state.option.expr||r&&r.exps?state.option.nonew&&r&&r.left&&\"(\"===r.id&&\"new\"===r.left.id&&warning(\"W031\",t):warning(\"W030\",state.tokens.curr),parseFinalSemicolon()),indent=i,hasOwnScope&&state.funct[\"(scope)\"].unstack(),r}function statements(){for(var p,a=[];!state.tokens.next.reach&&\"(end)\"!==state.tokens.next.id;)\";\"===state.tokens.next.id?(p=peek(),(!p||\"(\"!==p.id&&\"[\"!==p.id)&&warning(\"W032\"),advance(\";\")):a.push(statement());return a}function directives(){for(var i,p,pn;\"(string)\"===state.tokens.next.id;){if(p=peek(0),\"(endline)\"===p.id){i=1;do pn=peek(i++);while(\"(endline)\"===pn.id);if(\";\"===pn.id)p=pn;else{if(\"[\"===pn.value||\".\"===pn.value)break;state.option.asi&&\"(\"!==pn.value||warning(\"W033\",state.tokens.next)}}else{if(\".\"===p.id||\"[\"===p.id)break;\";\"!==p.id&&warning(\"W033\",p)}advance();var directive=state.tokens.curr.value;(state.directive[directive]||\"use strict\"===directive&&\"implied\"===state.option.strict)&&warning(\"W034\",state.tokens.curr,directive),state.directive[directive]=!0,\";\"===p.id&&advance(\";\")}state.isStrict()&&(state.option[\"(explicitNewcap)\"]||(state.option.newcap=!0),state.option.undef=!0)}function block(ordinary,stmt,isfunc,isfatarrow,iscase){var a,m,t,line,d,b=inblock,old_indent=indent;inblock=ordinary,t=state.tokens.next;var metrics=state.funct[\"(metrics)\"];if(metrics.nestedBlockDepth+=1,metrics.verifyMaxNestedBlockDepthPerFunction(),\"{\"===state.tokens.next.id){if(advance(\"{\"),state.funct[\"(scope)\"].stack(),line=state.tokens.curr.line,\"}\"!==state.tokens.next.id){for(indent+=state.option.indent;!ordinary&&state.tokens.next.from>indent;)indent+=state.option.indent;if(isfunc){m={};for(d in state.directive)_.has(state.directive,d)&&(m[d]=state.directive[d]);directives(),state.option.strict&&state.funct[\"(context)\"][\"(global)\"]&&(m[\"use strict\"]||state.isStrict()||warning(\"E007\"))}a=statements(),metrics.statementCount+=a.length,indent-=state.option.indent}advance(\"}\",t),isfunc&&(state.funct[\"(scope)\"].validateParams(),m&&(state.directive=m)),state.funct[\"(scope)\"].unstack(),indent=old_indent}else if(ordinary)state.funct[\"(noblockscopedvar)\"]=\"for\"!==state.tokens.next.id,state.funct[\"(scope)\"].stack(),(!stmt||state.option.curly)&&warning(\"W116\",state.tokens.next,\"{\",state.tokens.next.value),state.tokens.next.inBracelessBlock=!0,indent+=state.option.indent,a=[statement()],indent-=state.option.indent,state.funct[\"(scope)\"].unstack(),delete state.funct[\"(noblockscopedvar)\"];else if(isfunc){if(state.funct[\"(scope)\"].stack(),m={},!stmt||isfatarrow||state.inMoz()||error(\"W118\",state.tokens.curr,\"function closure expressions\"),!stmt)for(d in state.directive)_.has(state.directive,d)&&(m[d]=state.directive[d]);expression(10),state.option.strict&&state.funct[\"(context)\"][\"(global)\"]&&(m[\"use strict\"]||state.isStrict()||warning(\"E007\")),state.funct[\"(scope)\"].unstack()}else error(\"E021\",state.tokens.next,\"{\",state.tokens.next.value);switch(state.funct[\"(verb)\"]){case\"break\":case\"continue\":case\"return\":case\"throw\":if(iscase)break;default:state.funct[\"(verb)\"]=null}return inblock=b,!ordinary||!state.option.noempty||a&&0!==a.length||warning(\"W035\",state.tokens.prev),metrics.nestedBlockDepth-=1,a}function countMember(m){membersOnly&&\"boolean\"!=typeof membersOnly[m]&&warning(\"W036\",state.tokens.curr,m),\"number\"==typeof member[m]?member[m]+=1:member[m]=1}function comprehensiveArrayExpression(){var res={};res.exps=!0,state.funct[\"(comparray)\"].stack();var reversed=!1;return\"for\"!==state.tokens.next.value&&(reversed=!0,state.inMoz()||warning(\"W116\",state.tokens.next,\"for\",state.tokens.next.value),state.funct[\"(comparray)\"].setState(\"use\"),res.right=expression(10)),advance(\"for\"),\"each\"===state.tokens.next.value&&(advance(\"each\"),state.inMoz()||warning(\"W118\",state.tokens.curr,\"for each\")),advance(\"(\"),state.funct[\"(comparray)\"].setState(\"define\"),res.left=expression(130),_.contains([\"in\",\"of\"],state.tokens.next.value)?advance():error(\"E045\",state.tokens.curr),state.funct[\"(comparray)\"].setState(\"generate\"),expression(10),advance(\")\"),\"if\"===state.tokens.next.value&&(advance(\"if\"),advance(\"(\"),state.funct[\"(comparray)\"].setState(\"filter\"),res.filter=expression(10),advance(\")\")),reversed||(state.funct[\"(comparray)\"].setState(\"use\"),res.right=expression(10)),advance(\"]\"),state.funct[\"(comparray)\"].unstack(),res}function isMethod(){return state.funct[\"(statement)\"]&&\"class\"===state.funct[\"(statement)\"].type||state.funct[\"(context)\"]&&\"class\"===state.funct[\"(context)\"][\"(verb)\"]}function isPropertyName(token){return token.identifier||\"(string)\"===token.id||\"(number)\"===token.id}function propertyName(preserveOrToken){var id,preserve=!0;return\"object\"==typeof preserveOrToken?id=preserveOrToken:(preserve=preserveOrToken,id=optionalidentifier(!1,!0,preserve)),id?\"object\"==typeof id&&(\"(string)\"===id.id||\"(identifier)\"===id.id?id=id.value:\"(number)\"===id.id&&(id=\"\"+id.value)):\"(string)\"===state.tokens.next.id?(id=state.tokens.next.value,preserve||advance()):\"(number)\"===state.tokens.next.id&&(id=\"\"+state.tokens.next.value,preserve||advance()),\"hasOwnProperty\"===id&&warning(\"W001\"),id}function functionparams(options){function addParam(addParamArgs){state.funct[\"(scope)\"].addParam.apply(state.funct[\"(scope)\"],addParamArgs)}var next,ident,t,paramsIds=[],tokens=[],pastDefault=!1,pastRest=!1,arity=0,loneArg=options&&options.loneArg;if(loneArg&&loneArg.identifier===!0)return state.funct[\"(scope)\"].addParam(loneArg.value,loneArg),{arity:1,params:[loneArg.value]};if(next=state.tokens.next,options&&options.parsedOpening||advance(\"(\"),\")\"===state.tokens.next.id)return advance(\")\"),void 0;for(;;){arity++;var currentParams=[];if(_.contains([\"{\",\"[\"],state.tokens.next.id)){tokens=destructuringPattern();for(t in tokens)t=tokens[t],t.id&&(paramsIds.push(t.id),currentParams.push([t.id,t.token]))}else if(checkPunctuator(state.tokens.next,\"...\")&&(pastRest=!0),ident=identifier(!0))paramsIds.push(ident),currentParams.push([ident,state.tokens.curr]);else for(;!checkPunctuators(state.tokens.next,[\",\",\")\"]);)advance();if(pastDefault&&\"=\"!==state.tokens.next.id&&error(\"W138\",state.tokens.current),\"=\"===state.tokens.next.id&&(state.inES6()||warning(\"W119\",state.tokens.next,\"default parameters\",\"6\"),advance(\"=\"),pastDefault=!0,expression(10)),currentParams.forEach(addParam),\",\"!==state.tokens.next.id)return advance(\")\",next),{arity:arity,params:paramsIds};pastRest&&warning(\"W131\",state.tokens.next),comma()}}function functor(name,token,overwrites){var funct={\"(name)\":name,\"(breakage)\":0,\"(loopage)\":0,\"(tokens)\":{},\"(properties)\":{},\"(catch)\":!1,\"(global)\":!1,\"(line)\":null,\"(character)\":null,\"(metrics)\":null,\"(statement)\":null,\"(context)\":null,\"(scope)\":null,\"(comparray)\":null,\"(generator)\":null,\"(arrow)\":null,\"(params)\":null};return token&&_.extend(funct,{\"(line)\":token.line,\"(character)\":token.character,\"(metrics)\":createMetrics(token)}),_.extend(funct,overwrites),funct[\"(context)\"]&&(funct[\"(scope)\"]=funct[\"(context)\"][\"(scope)\"],funct[\"(comparray)\"]=funct[\"(context)\"][\"(comparray)\"]),funct}function isFunctor(token){return\"(scope)\"in token}function hasParsedCode(funct){return funct[\"(global)\"]&&!funct[\"(verb)\"]}function doTemplateLiteral(left){function end(){if(state.tokens.curr.template&&state.tokens.curr.tail&&state.tokens.curr.context===ctx)return!0;var complete=state.tokens.next.template&&state.tokens.next.tail&&state.tokens.next.context===ctx;return complete&&advance(),complete||state.tokens.next.isUnclosed}var ctx=this.context,noSubst=this.noSubst,depth=this.depth;if(!noSubst)for(;!end();)!state.tokens.next.template||state.tokens.next.depth>depth?expression(0):advance();return{id:\"(template)\",type:\"(template)\",tag:left}}function doFunction(options){var f,token,name,statement,classExprBinding,isGenerator,isArrow,ignoreLoopFunc,oldOption=state.option,oldIgnored=state.ignored;options&&(name=options.name,statement=options.statement,classExprBinding=options.classExprBinding,isGenerator=\"generator\"===options.type,isArrow=\"arrow\"===options.type,ignoreLoopFunc=options.ignoreLoopFunc),state.option=Object.create(state.option),state.ignored=Object.create(state.ignored),state.funct=functor(name||state.nameStack.infer(),state.tokens.next,{\"(statement)\":statement,\"(context)\":state.funct,\"(arrow)\":isArrow,\"(generator)\":isGenerator}),f=state.funct,token=state.tokens.curr,token.funct=state.funct,functions.push(state.funct),state.funct[\"(scope)\"].stack(\"functionouter\");var internallyAccessibleName=name||classExprBinding;internallyAccessibleName&&state.funct[\"(scope)\"].block.add(internallyAccessibleName,classExprBinding?\"class\":\"function\",state.tokens.curr,!1),state.funct[\"(scope)\"].stack(\"functionparams\");var paramsInfo=functionparams(options);return paramsInfo?(state.funct[\"(params)\"]=paramsInfo.params,state.funct[\"(metrics)\"].arity=paramsInfo.arity,state.funct[\"(metrics)\"].verifyMaxParametersPerFunction()):state.funct[\"(metrics)\"].arity=0,isArrow&&(state.inES6(!0)||warning(\"W119\",state.tokens.curr,\"arrow function syntax (=>)\",\"6\"),options.loneArg||advance(\"=>\")),block(!1,!0,!0,isArrow),!state.option.noyield&&isGenerator&&\"yielded\"!==state.funct[\"(generator)\"]&&warning(\"W124\",state.tokens.curr),state.funct[\"(metrics)\"].verifyMaxStatementsPerFunction(),state.funct[\"(metrics)\"].verifyMaxComplexityPerFunction(),state.funct[\"(unusedOption)\"]=state.option.unused,state.option=oldOption,state.ignored=oldIgnored,state.funct[\"(last)\"]=state.tokens.curr.line,state.funct[\"(lastcharacter)\"]=state.tokens.curr.character,state.funct[\"(scope)\"].unstack(),state.funct[\"(scope)\"].unstack(),state.funct=state.funct[\"(context)\"],ignoreLoopFunc||state.option.loopfunc||!state.funct[\"(loopage)\"]||f[\"(isCapturing)\"]&&warning(\"W083\",token),f}function createMetrics(functionStartToken){return{statementCount:0,nestedBlockDepth:-1,ComplexityCount:1,arity:0,verifyMaxStatementsPerFunction:function(){state.option.maxstatements&&this.statementCount>state.option.maxstatements&&warning(\"W071\",functionStartToken,this.statementCount)\n},verifyMaxParametersPerFunction:function(){_.isNumber(state.option.maxparams)&&this.arity>state.option.maxparams&&warning(\"W072\",functionStartToken,this.arity)},verifyMaxNestedBlockDepthPerFunction:function(){state.option.maxdepth&&this.nestedBlockDepth>0&&this.nestedBlockDepth===state.option.maxdepth+1&&warning(\"W073\",null,this.nestedBlockDepth)},verifyMaxComplexityPerFunction:function(){var max=state.option.maxcomplexity,cc=this.ComplexityCount;max&&cc>max&&warning(\"W074\",functionStartToken,cc)}}}function increaseComplexityCount(){state.funct[\"(metrics)\"].ComplexityCount+=1}function checkCondAssignment(expr){var id,paren;switch(expr&&(id=expr.id,paren=expr.paren,\",\"===id&&(expr=expr.exprs[expr.exprs.length-1])&&(id=expr.id,paren=paren||expr.paren)),id){case\"=\":case\"+=\":case\"-=\":case\"*=\":case\"%=\":case\"&=\":case\"|=\":case\"^=\":case\"/=\":paren||state.option.boss||warning(\"W084\")}}function checkProperties(props){if(state.inES5())for(var name in props)props[name]&&props[name].setterToken&&!props[name].getterToken&&warning(\"W078\",props[name].setterToken)}function metaProperty(name,c){if(checkPunctuator(state.tokens.next,\".\")){var left=state.tokens.curr.id;advance(\".\");var id=identifier();return state.tokens.curr.isMetaProperty=!0,name!==id?error(\"E057\",state.tokens.prev,left,id):c(),state.tokens.curr}}function destructuringPattern(options){var isAssignment=options&&options.assignment;return state.inES6()||warning(\"W104\",state.tokens.curr,isAssignment?\"destructuring assignment\":\"destructuring binding\",\"6\"),destructuringPatternRecursive(options)}function destructuringPatternRecursive(options){var ids,identifiers=[],openingParsed=options&&options.openingParsed,isAssignment=options&&options.assignment,recursiveOptions=isAssignment?{assignment:isAssignment}:null,firstToken=openingParsed?state.tokens.curr:state.tokens.next,nextInnerDE=function(){var ident;if(checkPunctuators(state.tokens.next,[\"[\",\"{\"])){ids=destructuringPatternRecursive(recursiveOptions);for(var id in ids)id=ids[id],identifiers.push({id:id.id,token:id.token})}else if(checkPunctuator(state.tokens.next,\",\"))identifiers.push({id:null,token:state.tokens.curr});else{if(!checkPunctuator(state.tokens.next,\"(\")){var is_rest=checkPunctuator(state.tokens.next,\"...\");if(isAssignment){var identifierToken=is_rest?peek(0):state.tokens.next;identifierToken.identifier||warning(\"E030\",identifierToken,identifierToken.value);var assignTarget=expression(155);assignTarget&&(checkLeftSideAssign(assignTarget),assignTarget.identifier&&(ident=assignTarget.value))}else ident=identifier();return ident&&identifiers.push({id:ident,token:state.tokens.curr}),is_rest}advance(\"(\"),nextInnerDE(),advance(\")\")}return!1},assignmentProperty=function(){var id;checkPunctuator(state.tokens.next,\"[\")?(advance(\"[\"),expression(10),advance(\"]\"),advance(\":\"),nextInnerDE()):\"(string)\"===state.tokens.next.id||\"(number)\"===state.tokens.next.id?(advance(),advance(\":\"),nextInnerDE()):(id=identifier(),checkPunctuator(state.tokens.next,\":\")?(advance(\":\"),nextInnerDE()):id&&(isAssignment&&checkLeftSideAssign(state.tokens.curr),identifiers.push({id:id,token:state.tokens.curr})))};if(checkPunctuator(firstToken,\"[\")){openingParsed||advance(\"[\"),checkPunctuator(state.tokens.next,\"]\")&&warning(\"W137\",state.tokens.curr);for(var element_after_rest=!1;!checkPunctuator(state.tokens.next,\"]\");)nextInnerDE()&&!element_after_rest&&checkPunctuator(state.tokens.next,\",\")&&(warning(\"W130\",state.tokens.next),element_after_rest=!0),checkPunctuator(state.tokens.next,\"=\")&&(checkPunctuator(state.tokens.prev,\"...\")?advance(\"]\"):advance(\"=\"),\"undefined\"===state.tokens.next.id&&warning(\"W080\",state.tokens.prev,state.tokens.prev.value),expression(10)),checkPunctuator(state.tokens.next,\"]\")||advance(\",\");advance(\"]\")}else if(checkPunctuator(firstToken,\"{\")){for(openingParsed||advance(\"{\"),checkPunctuator(state.tokens.next,\"}\")&&warning(\"W137\",state.tokens.curr);!checkPunctuator(state.tokens.next,\"}\")&&(assignmentProperty(),checkPunctuator(state.tokens.next,\"=\")&&(advance(\"=\"),\"undefined\"===state.tokens.next.id&&warning(\"W080\",state.tokens.prev,state.tokens.prev.value),expression(10)),checkPunctuator(state.tokens.next,\"}\")||(advance(\",\"),!checkPunctuator(state.tokens.next,\"}\"))););advance(\"}\")}return identifiers}function destructuringPatternMatch(tokens,value){var first=value.first;first&&_.zip(tokens,Array.isArray(first)?first:[first]).forEach(function(val){var token=val[0],value=val[1];token&&value?token.first=value:token&&token.first&&!value&&warning(\"W080\",token.first,token.first.value)})}function blockVariableStatement(type,statement,context){var tokens,lone,value,letblock,prefix=context&&context.prefix,inexport=context&&context.inexport,isLet=\"let\"===type,isConst=\"const\"===type;for(state.inES6()||warning(\"W104\",state.tokens.curr,type,\"6\"),isLet&&\"(\"===state.tokens.next.value?(state.inMoz()||warning(\"W118\",state.tokens.next,\"let block\"),advance(\"(\"),state.funct[\"(scope)\"].stack(),letblock=!0):state.funct[\"(noblockscopedvar)\"]&&error(\"E048\",state.tokens.curr,isConst?\"Const\":\"Let\"),statement.first=[];;){var names=[];_.contains([\"{\",\"[\"],state.tokens.next.value)?(tokens=destructuringPattern(),lone=!1):(tokens=[{id:identifier(),token:state.tokens.curr}],lone=!0),!prefix&&isConst&&\"=\"!==state.tokens.next.id&&warning(\"E012\",state.tokens.curr,state.tokens.curr.value);for(var t in tokens)tokens.hasOwnProperty(t)&&(t=tokens[t],state.funct[\"(scope)\"].block.isGlobal()&&predefined[t.id]===!1&&warning(\"W079\",t.token,t.id),t.id&&!state.funct[\"(noblockscopedvar)\"]&&(state.funct[\"(scope)\"].addlabel(t.id,{type:type,token:t.token}),names.push(t.token),lone&&inexport&&state.funct[\"(scope)\"].setExported(t.token.value,t.token)));if(\"=\"===state.tokens.next.id&&(advance(\"=\"),prefix||\"undefined\"!==state.tokens.next.id||warning(\"W080\",state.tokens.prev,state.tokens.prev.value),!prefix&&\"=\"===peek(0).id&&state.tokens.next.identifier&&warning(\"W120\",state.tokens.next,state.tokens.next.value),value=expression(prefix?120:10),lone?tokens[0].first=value:destructuringPatternMatch(names,value)),statement.first=statement.first.concat(names),\",\"!==state.tokens.next.id)break;comma()}return letblock&&(advance(\")\"),block(!0,!0),statement.block=!0,state.funct[\"(scope)\"].unstack()),statement}function classdef(isStatement){return state.inES6()||warning(\"W104\",state.tokens.curr,\"class\",\"6\"),isStatement?(this.name=identifier(),state.funct[\"(scope)\"].addlabel(this.name,{type:\"class\",token:state.tokens.curr})):state.tokens.next.identifier&&\"extends\"!==state.tokens.next.value?(this.name=identifier(),this.namedExpr=!0):this.name=state.nameStack.infer(),classtail(this),this}function classtail(c){var wasInClassBody=state.inClassBody;\"extends\"===state.tokens.next.value&&(advance(\"extends\"),c.heritage=expression(10)),state.inClassBody=!0,advance(\"{\"),c.body=classbody(c),advance(\"}\"),state.inClassBody=wasInClassBody}function classbody(c){for(var name,isStatic,isGenerator,getset,computed,props=Object.create(null),staticProps=Object.create(null),i=0;\"}\"!==state.tokens.next.id;++i)if(name=state.tokens.next,isStatic=!1,isGenerator=!1,getset=null,\";\"!==name.id){if(\"*\"===name.id&&(isGenerator=!0,advance(\"*\"),name=state.tokens.next),\"[\"===name.id)name=computedPropertyName(),computed=!0;else{if(!isPropertyName(name)){warning(\"W052\",state.tokens.next,state.tokens.next.value||state.tokens.next.type),advance();continue}advance(),computed=!1,name.identifier&&\"static\"===name.value&&(checkPunctuator(state.tokens.next,\"*\")&&(isGenerator=!0,advance(\"*\")),(isPropertyName(state.tokens.next)||\"[\"===state.tokens.next.id)&&(computed=\"[\"===state.tokens.next.id,isStatic=!0,name=state.tokens.next,\"[\"===state.tokens.next.id?name=computedPropertyName():advance())),!name.identifier||\"get\"!==name.value&&\"set\"!==name.value||(isPropertyName(state.tokens.next)||\"[\"===state.tokens.next.id)&&(computed=\"[\"===state.tokens.next.id,getset=name,name=state.tokens.next,\"[\"===state.tokens.next.id?name=computedPropertyName():advance())}if(!checkPunctuator(state.tokens.next,\"(\")){for(error(\"E054\",state.tokens.next,state.tokens.next.value);\"}\"!==state.tokens.next.id&&!checkPunctuator(state.tokens.next,\"(\");)advance();\"(\"!==state.tokens.next.value&&doFunction({statement:c})}if(computed||(getset?saveAccessor(getset.value,isStatic?staticProps:props,name.value,name,!0,isStatic):(\"constructor\"===name.value?state.nameStack.set(c):state.nameStack.set(name),saveProperty(isStatic?staticProps:props,name.value,name,!0,isStatic))),getset&&\"constructor\"===name.value){var propDesc=\"get\"===getset.value?\"class getter method\":\"class setter method\";error(\"E049\",name,propDesc,\"constructor\")}else\"prototype\"===name.value&&error(\"E049\",name,\"class method\",\"prototype\");propertyName(name),doFunction({statement:c,type:isGenerator?\"generator\":null,classExprBinding:c.namedExpr?c.name:null})}else warning(\"W032\"),advance(\";\");checkProperties(props)}function saveProperty(props,name,tkn,isClass,isStatic){var msg=[\"key\",\"class method\",\"static class method\"];msg=msg[(isClass||!1)+(isStatic||!1)],tkn.identifier&&(name=tkn.value),props[name]&&\"__proto__\"!==name?warning(\"W075\",state.tokens.next,msg,name):props[name]=Object.create(null),props[name].basic=!0,props[name].basictkn=tkn}function saveAccessor(accessorType,props,name,tkn,isClass,isStatic){var flagName=\"get\"===accessorType?\"getterToken\":\"setterToken\",msg=\"\";isClass?(isStatic&&(msg+=\"static \"),msg+=accessorType+\"ter method\"):msg=\"key\",state.tokens.curr.accessorType=accessorType,state.nameStack.set(tkn),props[name]?(props[name].basic||props[name][flagName])&&\"__proto__\"!==name&&warning(\"W075\",state.tokens.next,msg,name):props[name]=Object.create(null),props[name][flagName]=tkn}function computedPropertyName(){advance(\"[\"),state.inES6()||warning(\"W119\",state.tokens.curr,\"computed property names\",\"6\");var value=expression(10);return advance(\"]\"),value}function checkPunctuators(token,values){return\"(punctuator)\"===token.type?_.contains(values,token.value):!1}function checkPunctuator(token,value){return\"(punctuator)\"===token.type&&token.value===value}function destructuringAssignOrJsonValue(){var block=lookupBlockType();block.notJson?(!state.inES6()&&block.isDestAssign&&warning(\"W104\",state.tokens.curr,\"destructuring assignment\",\"6\"),statements()):(state.option.laxbreak=!0,state.jsonMode=!0,jsonValue())}function jsonValue(){function jsonObject(){var o={},t=state.tokens.next;if(advance(\"{\"),\"}\"!==state.tokens.next.id)for(;;){if(\"(end)\"===state.tokens.next.id)error(\"E026\",state.tokens.next,t.line);else{if(\"}\"===state.tokens.next.id){warning(\"W094\",state.tokens.curr);break}\",\"===state.tokens.next.id?error(\"E028\",state.tokens.next):\"(string)\"!==state.tokens.next.id&&warning(\"W095\",state.tokens.next,state.tokens.next.value)}if(o[state.tokens.next.value]===!0?warning(\"W075\",state.tokens.next,\"key\",state.tokens.next.value):\"__proto__\"===state.tokens.next.value&&!state.option.proto||\"__iterator__\"===state.tokens.next.value&&!state.option.iterator?warning(\"W096\",state.tokens.next,state.tokens.next.value):o[state.tokens.next.value]=!0,advance(),advance(\":\"),jsonValue(),\",\"!==state.tokens.next.id)break;advance(\",\")}advance(\"}\")}function jsonArray(){var t=state.tokens.next;if(advance(\"[\"),\"]\"!==state.tokens.next.id)for(;;){if(\"(end)\"===state.tokens.next.id)error(\"E027\",state.tokens.next,t.line);else{if(\"]\"===state.tokens.next.id){warning(\"W094\",state.tokens.curr);break}\",\"===state.tokens.next.id&&error(\"E028\",state.tokens.next)}if(jsonValue(),\",\"!==state.tokens.next.id)break;advance(\",\")}advance(\"]\")}switch(state.tokens.next.id){case\"{\":jsonObject();break;case\"[\":jsonArray();break;case\"true\":case\"false\":case\"null\":case\"(number)\":case\"(string)\":advance();break;case\"-\":advance(\"-\"),advance(\"(number)\");break;default:error(\"E003\",state.tokens.next)}}var api,declared,functions,inblock,indent,lookahead,lex,member,membersOnly,predefined,stack,urls,bang={\"<\":!0,\"<=\":!0,\"==\":!0,\"===\":!0,\"!==\":!0,\"!=\":!0,\">\":!0,\">=\":!0,\"+\":!0,\"-\":!0,\"*\":!0,\"/\":!0,\"%\":!0},functionicity=[\"closure\",\"exception\",\"global\",\"label\",\"outer\",\"unused\",\"var\"],extraModules=[],emitter=new events.EventEmitter,typeofValues={};typeofValues.legacy=[\"xml\",\"unknown\"],typeofValues.es3=[\"undefined\",\"boolean\",\"number\",\"string\",\"function\",\"object\"],typeofValues.es3=typeofValues.es3.concat(typeofValues.legacy),typeofValues.es6=typeofValues.es3.concat(\"symbol\"),type(\"(number)\",function(){return this}),type(\"(string)\",function(){return this}),state.syntax[\"(identifier)\"]={type:\"(identifier)\",lbp:0,identifier:!0,nud:function(){var v=this.value;return\"=>\"===state.tokens.next.id?this:(state.funct[\"(comparray)\"].check(v)||state.funct[\"(scope)\"].block.use(v,state.tokens.curr),this)},led:function(){error(\"E033\",state.tokens.next,state.tokens.next.value)}};var baseTemplateSyntax={lbp:0,identifier:!1,template:!0};state.syntax[\"(template)\"]=_.extend({type:\"(template)\",nud:doTemplateLiteral,led:doTemplateLiteral,noSubst:!1},baseTemplateSyntax),state.syntax[\"(template middle)\"]=_.extend({type:\"(template middle)\",middle:!0,noSubst:!1},baseTemplateSyntax),state.syntax[\"(template tail)\"]=_.extend({type:\"(template tail)\",tail:!0,noSubst:!1},baseTemplateSyntax),state.syntax[\"(no subst template)\"]=_.extend({type:\"(template)\",nud:doTemplateLiteral,led:doTemplateLiteral,noSubst:!0,tail:!0},baseTemplateSyntax),type(\"(regexp)\",function(){return this}),delim(\"(endline)\"),delim(\"(begin)\"),delim(\"(end)\").reach=!0,delim(\"(error)\").reach=!0,delim(\"}\").reach=!0,delim(\")\"),delim(\"]\"),delim('\"').reach=!0,delim(\"'\").reach=!0,delim(\";\"),delim(\":\").reach=!0,delim(\"#\"),reserve(\"else\"),reserve(\"case\").reach=!0,reserve(\"catch\"),reserve(\"default\").reach=!0,reserve(\"finally\"),reservevar(\"arguments\",function(x){state.isStrict()&&state.funct[\"(global)\"]&&warning(\"E008\",x)}),reservevar(\"eval\"),reservevar(\"false\"),reservevar(\"Infinity\"),reservevar(\"null\"),reservevar(\"this\",function(x){state.isStrict()&&!isMethod()&&!state.option.validthis&&(state.funct[\"(statement)\"]&&state.funct[\"(name)\"].charAt(0)>\"Z\"||state.funct[\"(global)\"])&&warning(\"W040\",x)}),reservevar(\"true\"),reservevar(\"undefined\"),assignop(\"=\",\"assign\",20),assignop(\"+=\",\"assignadd\",20),assignop(\"-=\",\"assignsub\",20),assignop(\"*=\",\"assignmult\",20),assignop(\"/=\",\"assigndiv\",20).nud=function(){error(\"E014\")},assignop(\"%=\",\"assignmod\",20),bitwiseassignop(\"&=\"),bitwiseassignop(\"|=\"),bitwiseassignop(\"^=\"),bitwiseassignop(\"<<=\"),bitwiseassignop(\">>=\"),bitwiseassignop(\">>>=\"),infix(\",\",function(left,that){var expr;if(that.exprs=[left],state.option.nocomma&&warning(\"W127\"),!comma({peek:!0}))return that;for(;;){if(!(expr=expression(10)))break;if(that.exprs.push(expr),\",\"!==state.tokens.next.value||!comma())break}return that},10,!0),infix(\"?\",function(left,that){return increaseComplexityCount(),that.left=left,that.right=expression(10),advance(\":\"),that[\"else\"]=expression(10),that},30);var orPrecendence=40;infix(\"||\",function(left,that){return increaseComplexityCount(),that.left=left,that.right=expression(orPrecendence),that},orPrecendence),infix(\"&&\",\"and\",50),bitwise(\"|\",\"bitor\",70),bitwise(\"^\",\"bitxor\",80),bitwise(\"&\",\"bitand\",90),relation(\"==\",function(left,right){var eqnull=state.option.eqnull&&(\"null\"===(left&&left.value)||\"null\"===(right&&right.value));switch(!0){case!eqnull&&state.option.eqeqeq:this.from=this.character,warning(\"W116\",this,\"===\",\"==\");break;case isPoorRelation(left):warning(\"W041\",this,\"===\",left.value);break;case isPoorRelation(right):warning(\"W041\",this,\"===\",right.value);break;case isTypoTypeof(right,left,state):warning(\"W122\",this,right.value);break;case isTypoTypeof(left,right,state):warning(\"W122\",this,left.value)}return this}),relation(\"===\",function(left,right){return isTypoTypeof(right,left,state)?warning(\"W122\",this,right.value):isTypoTypeof(left,right,state)&&warning(\"W122\",this,left.value),this}),relation(\"!=\",function(left,right){var eqnull=state.option.eqnull&&(\"null\"===(left&&left.value)||\"null\"===(right&&right.value));return!eqnull&&state.option.eqeqeq?(this.from=this.character,warning(\"W116\",this,\"!==\",\"!=\")):isPoorRelation(left)?warning(\"W041\",this,\"!==\",left.value):isPoorRelation(right)?warning(\"W041\",this,\"!==\",right.value):isTypoTypeof(right,left,state)?warning(\"W122\",this,right.value):isTypoTypeof(left,right,state)&&warning(\"W122\",this,left.value),this}),relation(\"!==\",function(left,right){return isTypoTypeof(right,left,state)?warning(\"W122\",this,right.value):isTypoTypeof(left,right,state)&&warning(\"W122\",this,left.value),this}),relation(\"<\"),relation(\">\"),relation(\"<=\"),relation(\">=\"),bitwise(\"<<\",\"shiftleft\",120),bitwise(\">>\",\"shiftright\",120),bitwise(\">>>\",\"shiftrightunsigned\",120),infix(\"in\",\"in\",120),infix(\"instanceof\",\"instanceof\",120),infix(\"+\",function(left,that){var right;return that.left=left,that.right=right=expression(130),left&&right&&\"(string)\"===left.id&&\"(string)\"===right.id?(left.value+=right.value,left.character=right.character,!state.option.scripturl&&reg.javascriptURL.test(left.value)&&warning(\"W050\",left),left):that},130),prefix(\"+\",\"num\"),prefix(\"+++\",function(){return warning(\"W007\"),this.arity=\"unary\",this.right=expression(150),this}),infix(\"+++\",function(left){return warning(\"W007\"),this.left=left,this.right=expression(130),this},130),infix(\"-\",\"sub\",130),prefix(\"-\",\"neg\"),prefix(\"---\",function(){return warning(\"W006\"),this.arity=\"unary\",this.right=expression(150),this}),infix(\"---\",function(left){return warning(\"W006\"),this.left=left,this.right=expression(130),this},130),infix(\"*\",\"mult\",140),infix(\"/\",\"div\",140),infix(\"%\",\"mod\",140),suffix(\"++\"),prefix(\"++\",\"preinc\"),state.syntax[\"++\"].exps=!0,suffix(\"--\"),prefix(\"--\",\"predec\"),state.syntax[\"--\"].exps=!0,prefix(\"delete\",function(){var p=expression(10);return p?(\".\"!==p.id&&\"[\"!==p.id&&warning(\"W051\"),this.first=p,p.identifier&&!state.isStrict()&&(p.forgiveUndef=!0),this):this}).exps=!0,prefix(\"~\",function(){return state.option.bitwise&&warning(\"W016\",this,\"~\"),this.arity=\"unary\",this.right=expression(150),this}),prefix(\"...\",function(){return state.inES6(!0)||warning(\"W119\",this,\"spread/rest operator\",\"6\"),state.tokens.next.identifier||\"(string)\"===state.tokens.next.type||checkPunctuators(state.tokens.next,[\"[\",\"(\"])||error(\"E030\",state.tokens.next,state.tokens.next.value),expression(150),this}),prefix(\"!\",function(){return this.arity=\"unary\",this.right=expression(150),this.right||quit(\"E041\",this.line||0),bang[this.right.id]===!0&&warning(\"W018\",this,\"!\"),this}),prefix(\"typeof\",function(){var p=expression(150);return this.first=this.right=p,p||quit(\"E041\",this.line||0,this.character||0),p.identifier&&(p.forgiveUndef=!0),this}),prefix(\"new\",function(){var mp=metaProperty(\"target\",function(){state.inES6(!0)||warning(\"W119\",state.tokens.prev,\"new.target\",\"6\");for(var inFunction,c=state.funct;c&&(inFunction=!c[\"(global)\"],c[\"(arrow)\"]);)c=c[\"(context)\"];inFunction||warning(\"W136\",state.tokens.prev,\"new.target\")});if(mp)return mp;var i,c=expression(155);if(c&&\"function\"!==c.id)if(c.identifier)switch(c[\"new\"]=!0,c.value){case\"Number\":case\"String\":case\"Boolean\":case\"Math\":case\"JSON\":warning(\"W053\",state.tokens.prev,c.value);break;case\"Symbol\":state.inES6()&&warning(\"W053\",state.tokens.prev,c.value);break;case\"Function\":state.option.evil||warning(\"W054\");break;case\"Date\":case\"RegExp\":case\"this\":break;default:\"function\"!==c.id&&(i=c.value.substr(0,1),state.option.newcap&&(\"A\">i||i>\"Z\")&&!state.funct[\"(scope)\"].isPredefined(c.value)&&warning(\"W055\",state.tokens.curr))}else\".\"!==c.id&&\"[\"!==c.id&&\"(\"!==c.id&&warning(\"W056\",state.tokens.curr);else state.option.supernew||warning(\"W057\",this);return\"(\"===state.tokens.next.id||state.option.supernew||warning(\"W058\",state.tokens.curr,state.tokens.curr.value),this.first=this.right=c,this}),state.syntax[\"new\"].exps=!0,prefix(\"void\").exps=!0,infix(\".\",function(left,that){var m=identifier(!1,!0);return\"string\"==typeof m&&countMember(m),that.left=left,that.right=m,m&&\"hasOwnProperty\"===m&&\"=\"===state.tokens.next.value&&warning(\"W001\"),!left||\"arguments\"!==left.value||\"callee\"!==m&&\"caller\"!==m?state.option.evil||!left||\"document\"!==left.value||\"write\"!==m&&\"writeln\"!==m||warning(\"W060\",left):state.option.noarg?warning(\"W059\",left,m):state.isStrict()&&error(\"E008\"),state.option.evil||\"eval\"!==m&&\"execScript\"!==m||isGlobalEval(left,state)&&warning(\"W061\"),that},160,!0),infix(\"(\",function(left,that){state.option.immed&&left&&!left.immed&&\"function\"===left.id&&warning(\"W062\");var n=0,p=[];if(left&&\"(identifier)\"===left.type&&left.value.match(/^[A-Z]([A-Z0-9_$]*[a-z][A-Za-z0-9_$]*)?$/)&&-1===\"Array Number String Boolean Date Object Error Symbol\".indexOf(left.value)&&(\"Math\"===left.value?warning(\"W063\",left):state.option.newcap&&warning(\"W064\",left)),\")\"!==state.tokens.next.id)for(;p[p.length]=expression(10),n+=1,\",\"===state.tokens.next.id;)comma();return advance(\")\"),\"object\"==typeof left&&(state.inES5()||\"parseInt\"!==left.value||1!==n||warning(\"W065\",state.tokens.curr),state.option.evil||(\"eval\"===left.value||\"Function\"===left.value||\"execScript\"===left.value?(warning(\"W061\",left),p[0]&&\"(string)\"===[0].id&&addInternalSrc(left,p[0].value)):!p[0]||\"(string)\"!==p[0].id||\"setTimeout\"!==left.value&&\"setInterval\"!==left.value?!p[0]||\"(string)\"!==p[0].id||\".\"!==left.value||\"window\"!==left.left.value||\"setTimeout\"!==left.right&&\"setInterval\"!==left.right||(warning(\"W066\",left),addInternalSrc(left,p[0].value)):(warning(\"W066\",left),addInternalSrc(left,p[0].value))),left.identifier||\".\"===left.id||\"[\"===left.id||\"=>\"===left.id||\"(\"===left.id||\"&&\"===left.id||\"||\"===left.id||\"?\"===left.id||state.inES6()&&left[\"(name)\"]||warning(\"W067\",that)),that.left=left,that},155,!0).exps=!0,prefix(\"(\",function(){var pn1,ret,triggerFnExpr,first,last,pn=state.tokens.next,i=-1,parens=1,opening=state.tokens.curr,preceeding=state.tokens.prev,isNecessary=!state.option.singleGroups;do\"(\"===pn.value?parens+=1:\")\"===pn.value&&(parens-=1),i+=1,pn1=pn,pn=peek(i);while((0!==parens||\")\"!==pn1.value)&&\";\"!==pn.value&&\"(end)\"!==pn.type);if(\"function\"===state.tokens.next.id&&(triggerFnExpr=state.tokens.next.immed=!0),\"=>\"===pn.value)return doFunction({type:\"arrow\",parsedOpening:!0});var exprs=[];if(\")\"!==state.tokens.next.id)for(;exprs.push(expression(10)),\",\"===state.tokens.next.id;)state.option.nocomma&&warning(\"W127\"),comma();return advance(\")\",this),state.option.immed&&exprs[0]&&\"function\"===exprs[0].id&&\"(\"!==state.tokens.next.id&&\".\"!==state.tokens.next.id&&\"[\"!==state.tokens.next.id&&warning(\"W068\",this),exprs.length?(exprs.length>1?(ret=Object.create(state.syntax[\",\"]),ret.exprs=exprs,first=exprs[0],last=exprs[exprs.length-1],isNecessary||(isNecessary=preceeding.assign||preceeding.delim)):(ret=first=last=exprs[0],isNecessary||(isNecessary=opening.beginsStmt&&(\"{\"===ret.id||triggerFnExpr||isFunctor(ret))||triggerFnExpr&&(!isEndOfExpr()||\"}\"!==state.tokens.prev.id)||isFunctor(ret)&&!isEndOfExpr()||\"{\"===ret.id&&\"=>\"===preceeding.id||\"(number)\"===ret.type&&checkPunctuator(pn,\".\")&&/^\\d+$/.test(ret.value))),ret&&(!isNecessary&&(first.left||first.right||ret.exprs)&&(isNecessary=!isBeginOfExpr(preceeding)&&first.lbp<=preceeding.lbp||!isEndOfExpr()&&last.lbp<state.tokens.next.lbp),isNecessary||warning(\"W126\",opening),ret.paren=!0),ret):void 0}),application(\"=>\"),infix(\"[\",function(left,that){var s,e=expression(10);return e&&\"(string)\"===e.type&&(state.option.evil||\"eval\"!==e.value&&\"execScript\"!==e.value||isGlobalEval(left,state)&&warning(\"W061\"),countMember(e.value),!state.option.sub&&reg.identifier.test(e.value)&&(s=state.syntax[e.value],s&&isReserved(s)||warning(\"W069\",state.tokens.prev,e.value))),advance(\"]\",that),e&&\"hasOwnProperty\"===e.value&&\"=\"===state.tokens.next.value&&warning(\"W001\"),that.left=left,that.right=e,that},160,!0),prefix(\"[\",function(){var blocktype=lookupBlockType();if(blocktype.isCompArray)return state.option.esnext||state.inMoz()||warning(\"W118\",state.tokens.curr,\"array comprehension\"),comprehensiveArrayExpression();if(blocktype.isDestAssign)return this.destructAssign=destructuringPattern({openingParsed:!0,assignment:!0}),this;var b=state.tokens.curr.line!==startLine(state.tokens.next);for(this.first=[],b&&(indent+=state.option.indent,state.tokens.next.from===indent+state.option.indent&&(indent+=state.option.indent));\"(end)\"!==state.tokens.next.id;){for(;\",\"===state.tokens.next.id;){if(!state.option.elision){if(state.inES5()){warning(\"W128\");do advance(\",\");while(\",\"===state.tokens.next.id);continue}warning(\"W070\")}advance(\",\")}if(\"]\"===state.tokens.next.id)break;if(this.first.push(expression(10)),\",\"!==state.tokens.next.id)break;if(comma({allowTrailing:!0}),\"]\"===state.tokens.next.id&&!state.inES5()){warning(\"W070\",state.tokens.curr);break}}return b&&(indent-=state.option.indent),advance(\"]\",this),this}),function(x){x.nud=function(){var b,f,i,p,t,nextVal,isGeneratorMethod=!1,props=Object.create(null);b=state.tokens.curr.line!==startLine(state.tokens.next),b&&(indent+=state.option.indent,state.tokens.next.from===indent+state.option.indent&&(indent+=state.option.indent));var blocktype=lookupBlockType();if(blocktype.isDestAssign)return this.destructAssign=destructuringPattern({openingParsed:!0,assignment:!0}),this;for(;\"}\"!==state.tokens.next.id;){if(nextVal=state.tokens.next.value,!state.tokens.next.identifier||\",\"!==peekIgnoreEOL().id&&\"}\"!==peekIgnoreEOL().id)if(\":\"===peek().id||\"get\"!==nextVal&&\"set\"!==nextVal){if(\"*\"===state.tokens.next.value&&\"(punctuator)\"===state.tokens.next.type?(state.inES6()||warning(\"W104\",state.tokens.next,\"generator functions\",\"6\"),advance(\"*\"),isGeneratorMethod=!0):isGeneratorMethod=!1,\"[\"===state.tokens.next.id)i=computedPropertyName(),state.nameStack.set(i);else if(state.nameStack.set(state.tokens.next),i=propertyName(),saveProperty(props,i,state.tokens.next),\"string\"!=typeof i)break;\"(\"===state.tokens.next.value?(state.inES6()||warning(\"W104\",state.tokens.curr,\"concise methods\",\"6\"),doFunction({type:isGeneratorMethod?\"generator\":null})):(advance(\":\"),expression(10))}else advance(nextVal),state.inES5()||error(\"E034\"),i=propertyName(),i||state.inES6()||error(\"E035\"),i&&saveAccessor(nextVal,props,i,state.tokens.curr),t=state.tokens.next,f=doFunction(),p=f[\"(params)\"],\"get\"===nextVal&&i&&p?warning(\"W076\",t,p[0],i):\"set\"!==nextVal||!i||p&&1===p.length||warning(\"W077\",t,i);else state.inES6()||warning(\"W104\",state.tokens.next,\"object short notation\",\"6\"),i=propertyName(!0),saveProperty(props,i,state.tokens.next),expression(10);if(countMember(i),\",\"!==state.tokens.next.id)break;comma({allowTrailing:!0,property:!0}),\",\"===state.tokens.next.id?warning(\"W070\",state.tokens.curr):\"}\"!==state.tokens.next.id||state.inES5()||warning(\"W070\",state.tokens.curr)}return b&&(indent-=state.option.indent),advance(\"}\",this),checkProperties(props),this},x.fud=function(){error(\"E036\",state.tokens.curr)}}(delim(\"{\"));var conststatement=stmt(\"const\",function(context){return blockVariableStatement(\"const\",this,context)});conststatement.exps=!0;var letstatement=stmt(\"let\",function(context){return blockVariableStatement(\"let\",this,context)});letstatement.exps=!0;var varstatement=stmt(\"var\",function(context){var tokens,lone,value,prefix=context&&context.prefix,inexport=context&&context.inexport,implied=context&&context.implied,report=!(context&&context.ignore);for(this.first=[];;){var names=[];_.contains([\"{\",\"[\"],state.tokens.next.value)?(tokens=destructuringPattern(),lone=!1):(tokens=[{id:identifier(),token:state.tokens.curr}],lone=!0),prefix&&implied||!report||!state.option.varstmt||warning(\"W132\",this),this.first=this.first.concat(names);for(var t in tokens)tokens.hasOwnProperty(t)&&(t=tokens[t],!implied&&state.funct[\"(global)\"]&&(predefined[t.id]===!1?warning(\"W079\",t.token,t.id):state.option.futurehostile===!1&&(!state.inES5()&&vars.ecmaIdentifiers[5][t.id]===!1||!state.inES6()&&vars.ecmaIdentifiers[6][t.id]===!1)&&warning(\"W129\",t.token,t.id)),t.id&&(\"for\"===implied?(state.funct[\"(scope)\"].has(t.id)||report&&warning(\"W088\",t.token,t.id),state.funct[\"(scope)\"].block.use(t.id,t.token)):(state.funct[\"(scope)\"].addlabel(t.id,{type:\"var\",token:t.token}),lone&&inexport&&state.funct[\"(scope)\"].setExported(t.id,t.token)),names.push(t.token)));if(\"=\"===state.tokens.next.id&&(state.nameStack.set(state.tokens.curr),advance(\"=\"),prefix||!report||state.funct[\"(loopage)\"]||\"undefined\"!==state.tokens.next.id||warning(\"W080\",state.tokens.prev,state.tokens.prev.value),\"=\"===peek(0).id&&state.tokens.next.identifier&&(!prefix&&report&&!state.funct[\"(params)\"]||-1===state.funct[\"(params)\"].indexOf(state.tokens.next.value))&&warning(\"W120\",state.tokens.next,state.tokens.next.value),value=expression(prefix?120:10),lone?tokens[0].first=value:destructuringPatternMatch(names,value)),\",\"!==state.tokens.next.id)break;comma()}return this});varstatement.exps=!0,blockstmt(\"class\",function(){return classdef.call(this,!0)}),blockstmt(\"function\",function(context){var inexport=context&&context.inexport,generator=!1;\"*\"===state.tokens.next.value&&(advance(\"*\"),state.inES6({strict:!0})?generator=!0:warning(\"W119\",state.tokens.curr,\"function*\",\"6\")),inblock&&warning(\"W082\",state.tokens.curr);var i=optionalidentifier();return state.funct[\"(scope)\"].addlabel(i,{type:\"function\",token:state.tokens.curr}),void 0===i?warning(\"W025\"):inexport&&state.funct[\"(scope)\"].setExported(i,state.tokens.prev),doFunction({name:i,statement:this,type:generator?\"generator\":null,ignoreLoopFunc:inblock}),\"(\"===state.tokens.next.id&&state.tokens.next.line===state.tokens.curr.line&&error(\"E039\"),this}),prefix(\"function\",function(){var generator=!1;\"*\"===state.tokens.next.value&&(state.inES6()||warning(\"W119\",state.tokens.curr,\"function*\",\"6\"),advance(\"*\"),generator=!0);var i=optionalidentifier();return doFunction({name:i,type:generator?\"generator\":null}),this}),blockstmt(\"if\",function(){var t=state.tokens.next;increaseComplexityCount(),state.condition=!0,advance(\"(\");var expr=expression(0);checkCondAssignment(expr);var forinifcheck=null;state.option.forin&&state.forinifcheckneeded&&(state.forinifcheckneeded=!1,forinifcheck=state.forinifchecks[state.forinifchecks.length-1],forinifcheck.type=\"(punctuator)\"===expr.type&&\"!\"===expr.value?\"(negative)\":\"(positive)\"),advance(\")\",t),state.condition=!1;var s=block(!0,!0);return forinifcheck&&\"(negative)\"===forinifcheck.type&&s&&s[0]&&\"(identifier)\"===s[0].type&&\"continue\"===s[0].value&&(forinifcheck.type=\"(negative-with-continue)\"),\"else\"===state.tokens.next.id&&(advance(\"else\"),\"if\"===state.tokens.next.id||\"switch\"===state.tokens.next.id?statement():block(!0,!0)),this}),blockstmt(\"try\",function(){function doCatch(){if(advance(\"catch\"),advance(\"(\"),state.funct[\"(scope)\"].stack(\"catchparams\"),checkPunctuators(state.tokens.next,[\"[\",\"{\"])){var tokens=destructuringPattern();_.each(tokens,function(token){token.id&&state.funct[\"(scope)\"].addParam(token.id,token,\"exception\")})}else\"(identifier)\"!==state.tokens.next.type?warning(\"E030\",state.tokens.next,state.tokens.next.value):state.funct[\"(scope)\"].addParam(identifier(),state.tokens.curr,\"exception\");\"if\"===state.tokens.next.value&&(state.inMoz()||warning(\"W118\",state.tokens.curr,\"catch filter\"),advance(\"if\"),expression(0)),advance(\")\"),block(!1),state.funct[\"(scope)\"].unstack()}var b;for(block(!0);\"catch\"===state.tokens.next.id;)increaseComplexityCount(),b&&!state.inMoz()&&warning(\"W118\",state.tokens.next,\"multiple catch blocks\"),doCatch(),b=!0;return\"finally\"===state.tokens.next.id?(advance(\"finally\"),block(!0),void 0):(b||error(\"E021\",state.tokens.next,\"catch\",state.tokens.next.value),this)}),blockstmt(\"while\",function(){var t=state.tokens.next;return state.funct[\"(breakage)\"]+=1,state.funct[\"(loopage)\"]+=1,increaseComplexityCount(),advance(\"(\"),checkCondAssignment(expression(0)),advance(\")\",t),block(!0,!0),state.funct[\"(breakage)\"]-=1,state.funct[\"(loopage)\"]-=1,this}).labelled=!0,blockstmt(\"with\",function(){var t=state.tokens.next;return state.isStrict()?error(\"E010\",state.tokens.curr):state.option.withstmt||warning(\"W085\",state.tokens.curr),advance(\"(\"),expression(0),advance(\")\",t),block(!0,!0),this}),blockstmt(\"switch\",function(){var t=state.tokens.next,g=!1,noindent=!1;\nfor(state.funct[\"(breakage)\"]+=1,advance(\"(\"),checkCondAssignment(expression(0)),advance(\")\",t),t=state.tokens.next,advance(\"{\"),state.tokens.next.from===indent&&(noindent=!0),noindent||(indent+=state.option.indent),this.cases=[];;)switch(state.tokens.next.id){case\"case\":switch(state.funct[\"(verb)\"]){case\"yield\":case\"break\":case\"case\":case\"continue\":case\"return\":case\"switch\":case\"throw\":break;default:state.tokens.curr.caseFallsThrough||warning(\"W086\",state.tokens.curr,\"case\")}advance(\"case\"),this.cases.push(expression(0)),increaseComplexityCount(),g=!0,advance(\":\"),state.funct[\"(verb)\"]=\"case\";break;case\"default\":switch(state.funct[\"(verb)\"]){case\"yield\":case\"break\":case\"continue\":case\"return\":case\"throw\":break;default:this.cases.length&&(state.tokens.curr.caseFallsThrough||warning(\"W086\",state.tokens.curr,\"default\"))}advance(\"default\"),g=!0,advance(\":\");break;case\"}\":return noindent||(indent-=state.option.indent),advance(\"}\",t),state.funct[\"(breakage)\"]-=1,state.funct[\"(verb)\"]=void 0,void 0;case\"(end)\":return error(\"E023\",state.tokens.next,\"}\"),void 0;default:if(indent+=state.option.indent,g)switch(state.tokens.curr.id){case\",\":return error(\"E040\"),void 0;case\":\":g=!1,statements();break;default:return error(\"E025\",state.tokens.curr),void 0}else{if(\":\"!==state.tokens.curr.id)return error(\"E021\",state.tokens.next,\"case\",state.tokens.next.value),void 0;advance(\":\"),error(\"E024\",state.tokens.curr,\":\"),statements()}indent-=state.option.indent}return this}).labelled=!0,stmt(\"debugger\",function(){return state.option.debug||warning(\"W087\",this),this}).exps=!0,function(){var x=stmt(\"do\",function(){state.funct[\"(breakage)\"]+=1,state.funct[\"(loopage)\"]+=1,increaseComplexityCount(),this.first=block(!0,!0),advance(\"while\");var t=state.tokens.next;return advance(\"(\"),checkCondAssignment(expression(0)),advance(\")\",t),state.funct[\"(breakage)\"]-=1,state.funct[\"(loopage)\"]-=1,this});x.labelled=!0,x.exps=!0}(),blockstmt(\"for\",function(){var s,t=state.tokens.next,letscope=!1,foreachtok=null;\"each\"===t.value&&(foreachtok=t,advance(\"each\"),state.inMoz()||warning(\"W118\",state.tokens.curr,\"for each\")),increaseComplexityCount(),advance(\"(\");var nextop,comma,initializer,i=0,inof=[\"in\",\"of\"],level=0;checkPunctuators(state.tokens.next,[\"{\",\"[\"])&&++level;do{if(nextop=peek(i),++i,checkPunctuators(nextop,[\"{\",\"[\"])?++level:checkPunctuators(nextop,[\"}\",\"]\"])&&--level,0>level)break;0===level&&(!comma&&checkPunctuator(nextop,\",\")?comma=nextop:!initializer&&checkPunctuator(nextop,\"=\")&&(initializer=nextop))}while(level>0||!_.contains(inof,nextop.value)&&\";\"!==nextop.value&&\"(end)\"!==nextop.type);if(_.contains(inof,nextop.value)){state.inES6()||\"of\"!==nextop.value||warning(\"W104\",nextop,\"for of\",\"6\");var ok=!(initializer||comma);if(initializer&&error(\"W133\",comma,nextop.value,\"initializer is forbidden\"),comma&&error(\"W133\",comma,nextop.value,\"more than one ForBinding\"),\"var\"===state.tokens.next.id?(advance(\"var\"),state.tokens.curr.fud({prefix:!0})):\"let\"===state.tokens.next.id||\"const\"===state.tokens.next.id?(advance(state.tokens.next.id),letscope=!0,state.funct[\"(scope)\"].stack(),state.tokens.curr.fud({prefix:!0})):Object.create(varstatement).fud({prefix:!0,implied:\"for\",ignore:!ok}),advance(nextop.value),expression(20),advance(\")\",t),\"in\"===nextop.value&&state.option.forin&&(state.forinifcheckneeded=!0,void 0===state.forinifchecks&&(state.forinifchecks=[]),state.forinifchecks.push({type:\"(none)\"})),state.funct[\"(breakage)\"]+=1,state.funct[\"(loopage)\"]+=1,s=block(!0,!0),\"in\"===nextop.value&&state.option.forin){if(state.forinifchecks&&state.forinifchecks.length>0){var check=state.forinifchecks.pop();(s&&s.length>0&&(\"object\"!=typeof s[0]||\"if\"!==s[0].value)||\"(positive)\"===check.type&&s.length>1||\"(negative)\"===check.type)&&warning(\"W089\",this)}state.forinifcheckneeded=!1}state.funct[\"(breakage)\"]-=1,state.funct[\"(loopage)\"]-=1}else{if(foreachtok&&error(\"E045\",foreachtok),\";\"!==state.tokens.next.id)if(\"var\"===state.tokens.next.id)advance(\"var\"),state.tokens.curr.fud();else if(\"let\"===state.tokens.next.id)advance(\"let\"),letscope=!0,state.funct[\"(scope)\"].stack(),state.tokens.curr.fud();else for(;expression(0,\"for\"),\",\"===state.tokens.next.id;)comma();if(nolinebreak(state.tokens.curr),advance(\";\"),state.funct[\"(loopage)\"]+=1,\";\"!==state.tokens.next.id&&checkCondAssignment(expression(0)),nolinebreak(state.tokens.curr),advance(\";\"),\";\"===state.tokens.next.id&&error(\"E021\",state.tokens.next,\")\",\";\"),\")\"!==state.tokens.next.id)for(;expression(0,\"for\"),\",\"===state.tokens.next.id;)comma();advance(\")\",t),state.funct[\"(breakage)\"]+=1,block(!0,!0),state.funct[\"(breakage)\"]-=1,state.funct[\"(loopage)\"]-=1}return letscope&&state.funct[\"(scope)\"].unstack(),this}).labelled=!0,stmt(\"break\",function(){var v=state.tokens.next.value;return state.option.asi||nolinebreak(this),\";\"===state.tokens.next.id||state.tokens.next.reach||state.tokens.curr.line!==startLine(state.tokens.next)?0===state.funct[\"(breakage)\"]&&warning(\"W052\",state.tokens.next,this.value):(state.funct[\"(scope)\"].funct.hasBreakLabel(v)||warning(\"W090\",state.tokens.next,v),this.first=state.tokens.next,advance()),reachable(this),this}).exps=!0,stmt(\"continue\",function(){var v=state.tokens.next.value;return 0===state.funct[\"(breakage)\"]&&warning(\"W052\",state.tokens.next,this.value),state.funct[\"(loopage)\"]||warning(\"W052\",state.tokens.next,this.value),state.option.asi||nolinebreak(this),\";\"===state.tokens.next.id||state.tokens.next.reach||state.tokens.curr.line===startLine(state.tokens.next)&&(state.funct[\"(scope)\"].funct.hasBreakLabel(v)||warning(\"W090\",state.tokens.next,v),this.first=state.tokens.next,advance()),reachable(this),this}).exps=!0,stmt(\"return\",function(){return this.line===startLine(state.tokens.next)?\";\"===state.tokens.next.id||state.tokens.next.reach||(this.first=expression(0),!this.first||\"(punctuator)\"!==this.first.type||\"=\"!==this.first.value||this.first.paren||state.option.boss||warningAt(\"W093\",this.first.line,this.first.character)):\"(punctuator)\"===state.tokens.next.type&&[\"[\",\"{\",\"+\",\"-\"].indexOf(state.tokens.next.value)>-1&&nolinebreak(this),reachable(this),this}).exps=!0,function(x){x.exps=!0,x.lbp=25}(prefix(\"yield\",function(){var prev=state.tokens.prev;state.inES6(!0)&&!state.funct[\"(generator)\"]?\"(catch)\"===state.funct[\"(name)\"]&&state.funct[\"(context)\"][\"(generator)\"]||error(\"E046\",state.tokens.curr,\"yield\"):state.inES6()||warning(\"W104\",state.tokens.curr,\"yield\",\"6\"),state.funct[\"(generator)\"]=\"yielded\";var delegatingYield=!1;return\"*\"===state.tokens.next.value&&(delegatingYield=!0,advance(\"*\")),this.line!==startLine(state.tokens.next)&&state.inMoz()?state.option.asi||nolinebreak(this):((delegatingYield||\";\"!==state.tokens.next.id&&!state.option.asi&&!state.tokens.next.reach&&state.tokens.next.nud)&&(nobreaknonadjacent(state.tokens.curr,state.tokens.next),this.first=expression(10),\"(punctuator)\"!==this.first.type||\"=\"!==this.first.value||this.first.paren||state.option.boss||warningAt(\"W093\",this.first.line,this.first.character)),state.inMoz()&&\")\"!==state.tokens.next.id&&(prev.lbp>30||!prev.assign&&!isEndOfExpr()||\"yield\"===prev.id)&&error(\"E050\",this)),this})),stmt(\"throw\",function(){return nolinebreak(this),this.first=expression(20),reachable(this),this}).exps=!0,stmt(\"import\",function(){if(state.inES6()||warning(\"W119\",state.tokens.curr,\"import\",\"6\"),\"(string)\"===state.tokens.next.type)return advance(\"(string)\"),this;if(state.tokens.next.identifier){if(this.name=identifier(),state.funct[\"(scope)\"].addlabel(this.name,{type:\"const\",token:state.tokens.curr}),\",\"!==state.tokens.next.value)return advance(\"from\"),advance(\"(string)\"),this;advance(\",\")}if(\"*\"===state.tokens.next.id)advance(\"*\"),advance(\"as\"),state.tokens.next.identifier&&(this.name=identifier(),state.funct[\"(scope)\"].addlabel(this.name,{type:\"const\",token:state.tokens.curr}));else for(advance(\"{\");;){if(\"}\"===state.tokens.next.value){advance(\"}\");break}var importName;if(\"default\"===state.tokens.next.type?(importName=\"default\",advance(\"default\")):importName=identifier(),\"as\"===state.tokens.next.value&&(advance(\"as\"),importName=identifier()),state.funct[\"(scope)\"].addlabel(importName,{type:\"const\",token:state.tokens.curr}),\",\"!==state.tokens.next.value){if(\"}\"===state.tokens.next.value){advance(\"}\");break}error(\"E024\",state.tokens.next,state.tokens.next.value);break}advance(\",\")}return advance(\"from\"),advance(\"(string)\"),this}).exps=!0,stmt(\"export\",function(){var token,identifier,ok=!0;if(state.inES6()||(warning(\"W119\",state.tokens.curr,\"export\",\"6\"),ok=!1),state.funct[\"(scope)\"].block.isGlobal()||(error(\"E053\",state.tokens.curr),ok=!1),\"*\"===state.tokens.next.value)return advance(\"*\"),advance(\"from\"),advance(\"(string)\"),this;if(\"default\"===state.tokens.next.type){state.nameStack.set(state.tokens.next),advance(\"default\");var exportType=state.tokens.next.id;return(\"function\"===exportType||\"class\"===exportType)&&(this.block=!0),token=peek(),expression(10),identifier=token.value,this.block&&(state.funct[\"(scope)\"].addlabel(identifier,{type:exportType,token:token}),state.funct[\"(scope)\"].setExported(identifier,token)),this}if(\"{\"===state.tokens.next.value){advance(\"{\");for(var exportedTokens=[];;){if(state.tokens.next.identifier||error(\"E030\",state.tokens.next,state.tokens.next.value),advance(),exportedTokens.push(state.tokens.curr),\"as\"===state.tokens.next.value&&(advance(\"as\"),state.tokens.next.identifier||error(\"E030\",state.tokens.next,state.tokens.next.value),advance()),\",\"!==state.tokens.next.value){if(\"}\"===state.tokens.next.value){advance(\"}\");break}error(\"E024\",state.tokens.next,state.tokens.next.value);break}advance(\",\")}return\"from\"===state.tokens.next.value?(advance(\"from\"),advance(\"(string)\")):ok&&exportedTokens.forEach(function(token){state.funct[\"(scope)\"].setExported(token.value,token)}),this}if(\"var\"===state.tokens.next.id)advance(\"var\"),state.tokens.curr.fud({inexport:!0});else if(\"let\"===state.tokens.next.id)advance(\"let\"),state.tokens.curr.fud({inexport:!0});else if(\"const\"===state.tokens.next.id)advance(\"const\"),state.tokens.curr.fud({inexport:!0});else if(\"function\"===state.tokens.next.id)this.block=!0,advance(\"function\"),state.syntax[\"function\"].fud({inexport:!0});else if(\"class\"===state.tokens.next.id){this.block=!0,advance(\"class\");var classNameToken=state.tokens.next;state.syntax[\"class\"].fud(),state.funct[\"(scope)\"].setExported(classNameToken.value,classNameToken)}else error(\"E024\",state.tokens.next,state.tokens.next.value);return this}).exps=!0,FutureReservedWord(\"abstract\"),FutureReservedWord(\"boolean\"),FutureReservedWord(\"byte\"),FutureReservedWord(\"char\"),FutureReservedWord(\"class\",{es5:!0,nud:classdef}),FutureReservedWord(\"double\"),FutureReservedWord(\"enum\",{es5:!0}),FutureReservedWord(\"export\",{es5:!0}),FutureReservedWord(\"extends\",{es5:!0}),FutureReservedWord(\"final\"),FutureReservedWord(\"float\"),FutureReservedWord(\"goto\"),FutureReservedWord(\"implements\",{es5:!0,strictOnly:!0}),FutureReservedWord(\"import\",{es5:!0}),FutureReservedWord(\"int\"),FutureReservedWord(\"interface\",{es5:!0,strictOnly:!0}),FutureReservedWord(\"long\"),FutureReservedWord(\"native\"),FutureReservedWord(\"package\",{es5:!0,strictOnly:!0}),FutureReservedWord(\"private\",{es5:!0,strictOnly:!0}),FutureReservedWord(\"protected\",{es5:!0,strictOnly:!0}),FutureReservedWord(\"public\",{es5:!0,strictOnly:!0}),FutureReservedWord(\"short\"),FutureReservedWord(\"static\",{es5:!0,strictOnly:!0}),FutureReservedWord(\"super\",{es5:!0}),FutureReservedWord(\"synchronized\"),FutureReservedWord(\"transient\"),FutureReservedWord(\"volatile\");var lookupBlockType=function(){var pn,pn1,prev,i=-1,bracketStack=0,ret={};checkPunctuators(state.tokens.curr,[\"[\",\"{\"])&&(bracketStack+=1);do{if(prev=-1===i?state.tokens.curr:pn,pn=-1===i?state.tokens.next:peek(i),pn1=peek(i+1),i+=1,checkPunctuators(pn,[\"[\",\"{\"])?bracketStack+=1:checkPunctuators(pn,[\"]\",\"}\"])&&(bracketStack-=1),1===bracketStack&&pn.identifier&&\"for\"===pn.value&&!checkPunctuator(prev,\".\")){ret.isCompArray=!0,ret.notJson=!0;break}if(0===bracketStack&&checkPunctuators(pn,[\"}\",\"]\"])){if(\"=\"===pn1.value){ret.isDestAssign=!0,ret.notJson=!0;break}if(\".\"===pn1.value){ret.notJson=!0;break}}checkPunctuator(pn,\";\")&&(ret.isBlock=!0,ret.notJson=!0)}while(bracketStack>0&&\"(end)\"!==pn.id);return ret},arrayComprehension=function(){function declare(v){var l=_current.variables.filter(function(elt){return elt.value===v?(elt.undef=!1,v):void 0}).length;return 0!==l}function use(v){var l=_current.variables.filter(function(elt){return elt.value!==v||elt.undef?void 0:(elt.unused===!0&&(elt.unused=!1),v)}).length;return 0===l}var _current,CompArray=function(){this.mode=\"use\",this.variables=[]},_carrays=[];return{stack:function(){_current=new CompArray,_carrays.push(_current)},unstack:function(){_current.variables.filter(function(v){v.unused&&warning(\"W098\",v.token,v.raw_text||v.value),v.undef&&state.funct[\"(scope)\"].block.use(v.value,v.token)}),_carrays.splice(-1,1),_current=_carrays[_carrays.length-1]},setState:function(s){_.contains([\"use\",\"define\",\"generate\",\"filter\"],s)&&(_current.mode=s)},check:function(v){return _current?_current&&\"use\"===_current.mode?(use(v)&&_current.variables.push({funct:state.funct,token:state.tokens.curr,value:v,undef:!0,unused:!1}),!0):_current&&\"define\"===_current.mode?(declare(v)||_current.variables.push({funct:state.funct,token:state.tokens.curr,value:v,undef:!1,unused:!0}),!0):_current&&\"generate\"===_current.mode?(state.funct[\"(scope)\"].block.use(v,state.tokens.curr),!0):_current&&\"filter\"===_current.mode?(use(v)&&state.funct[\"(scope)\"].block.use(v,state.tokens.curr),!0):!1:void 0}}},escapeRegex=function(str){return str.replace(/[-\\/\\\\^$*+?.()|[\\]{}]/g,\"\\\\$&\")},itself=function(s,o,g){function each(obj,cb){obj&&(Array.isArray(obj)||\"object\"!=typeof obj||(obj=Object.keys(obj)),obj.forEach(cb))}var i,k,x,reIgnoreStr,reIgnore,optionKeys,newOptionObj={},newIgnoredObj={};o=_.clone(o),state.reset(),o&&o.scope?JSHINT.scope=o.scope:(JSHINT.errors=[],JSHINT.undefs=[],JSHINT.internals=[],JSHINT.blacklist={},JSHINT.scope=\"(main)\"),predefined=Object.create(null),combine(predefined,vars.ecmaIdentifiers[3]),combine(predefined,vars.reservedVars),combine(predefined,g||{}),declared=Object.create(null);var exported=Object.create(null);if(o)for(each(o.predef||null,function(item){var slice,prop;\"-\"===item[0]?(slice=item.slice(1),JSHINT.blacklist[slice]=slice,delete predefined[slice]):(prop=Object.getOwnPropertyDescriptor(o.predef,item),predefined[item]=prop?prop.value:!1)}),each(o.exported||null,function(item){exported[item]=!0}),delete o.predef,delete o.exported,optionKeys=Object.keys(o),x=0;optionKeys.length>x;x++)if(/^-W\\d{3}$/g.test(optionKeys[x]))newIgnoredObj[optionKeys[x].slice(1)]=!0;else{var optionKey=optionKeys[x];newOptionObj[optionKey]=o[optionKey],(\"esversion\"===optionKey&&5===o[optionKey]||\"es5\"===optionKey&&o[optionKey])&&warning(\"I003\"),\"newcap\"===optionKeys[x]&&o[optionKey]===!1&&(newOptionObj[\"(explicitNewcap)\"]=!0)}state.option=newOptionObj,state.ignored=newIgnoredObj,state.option.indent=state.option.indent||4,state.option.maxerr=state.option.maxerr||50,indent=1;var scopeManagerInst=scopeManager(state,predefined,exported,declared);if(scopeManagerInst.on(\"warning\",function(ev){warning.apply(null,[ev.code,ev.token].concat(ev.data))}),scopeManagerInst.on(\"error\",function(ev){error.apply(null,[ev.code,ev.token].concat(ev.data))}),state.funct=functor(\"(global)\",null,{\"(global)\":!0,\"(scope)\":scopeManagerInst,\"(comparray)\":arrayComprehension(),\"(metrics)\":createMetrics(state.tokens.next)}),functions=[state.funct],urls=[],stack=null,member={},membersOnly=null,inblock=!1,lookahead=[],!isString(s)&&!Array.isArray(s))return errorAt(\"E004\",0),!1;api={get isJSON(){return state.jsonMode},getOption:function(name){return state.option[name]||null},getCache:function(name){return state.cache[name]},setCache:function(name,value){state.cache[name]=value},warn:function(code,data){warningAt.apply(null,[code,data.line,data.char].concat(data.data))},on:function(names,listener){names.split(\" \").forEach(function(name){emitter.on(name,listener)}.bind(this))}},emitter.removeAllListeners(),(extraModules||[]).forEach(function(func){func(api)}),state.tokens.prev=state.tokens.curr=state.tokens.next=state.syntax[\"(begin)\"],o&&o.ignoreDelimiters&&(Array.isArray(o.ignoreDelimiters)||(o.ignoreDelimiters=[o.ignoreDelimiters]),o.ignoreDelimiters.forEach(function(delimiterPair){delimiterPair.start&&delimiterPair.end&&(reIgnoreStr=escapeRegex(delimiterPair.start)+\"[\\\\s\\\\S]*?\"+escapeRegex(delimiterPair.end),reIgnore=RegExp(reIgnoreStr,\"ig\"),s=s.replace(reIgnore,function(match){return match.replace(/./g,\" \")}))})),lex=new Lexer(s),lex.on(\"warning\",function(ev){warningAt.apply(null,[ev.code,ev.line,ev.character].concat(ev.data))}),lex.on(\"error\",function(ev){errorAt.apply(null,[ev.code,ev.line,ev.character].concat(ev.data))}),lex.on(\"fatal\",function(ev){quit(\"E041\",ev.line,ev.from)}),lex.on(\"Identifier\",function(ev){emitter.emit(\"Identifier\",ev)}),lex.on(\"String\",function(ev){emitter.emit(\"String\",ev)}),lex.on(\"Number\",function(ev){emitter.emit(\"Number\",ev)}),lex.start();for(var name in o)_.has(o,name)&&checkOption(name,state.tokens.curr);assume(),combine(predefined,g||{}),comma.first=!0;try{switch(advance(),state.tokens.next.id){case\"{\":case\"[\":destructuringAssignOrJsonValue();break;default:directives(),state.directive[\"use strict\"]&&\"global\"!==state.option.strict&&warning(\"W097\",state.tokens.prev),statements()}\"(end)\"!==state.tokens.next.id&&quit(\"E041\",state.tokens.curr.line),state.funct[\"(scope)\"].unstack()}catch(err){if(!err||\"JSHintError\"!==err.name)throw err;var nt=state.tokens.next||{};JSHINT.errors.push({scope:\"(main)\",raw:err.raw,code:err.code,reason:err.message,line:err.line||nt.line,character:err.character||nt.from},null)}if(\"(main)\"===JSHINT.scope)for(o=o||{},i=0;JSHINT.internals.length>i;i+=1)k=JSHINT.internals[i],o.scope=k.elem,itself(k.value,o,g);return 0===JSHINT.errors.length};return itself.addModule=function(func){extraModules.push(func)},itself.addModule(style.register),itself.data=function(){var fu,f,i,j,n,globals,data={functions:[],options:state.option};itself.errors.length&&(data.errors=itself.errors),state.jsonMode&&(data.json=!0);var impliedGlobals=state.funct[\"(scope)\"].getImpliedGlobals();for(impliedGlobals.length>0&&(data.implieds=impliedGlobals),urls.length>0&&(data.urls=urls),globals=state.funct[\"(scope)\"].getUsedOrDefinedGlobals(),globals.length>0&&(data.globals=globals),i=1;functions.length>i;i+=1){for(f=functions[i],fu={},j=0;functionicity.length>j;j+=1)fu[functionicity[j]]=[];for(j=0;functionicity.length>j;j+=1)0===fu[functionicity[j]].length&&delete fu[functionicity[j]];fu.name=f[\"(name)\"],fu.param=f[\"(params)\"],fu.line=f[\"(line)\"],fu.character=f[\"(character)\"],fu.last=f[\"(last)\"],fu.lastcharacter=f[\"(lastcharacter)\"],fu.metrics={complexity:f[\"(metrics)\"].ComplexityCount,parameters:f[\"(metrics)\"].arity,statements:f[\"(metrics)\"].statementCount},data.functions.push(fu)}var unuseds=state.funct[\"(scope)\"].getUnuseds();unuseds.length>0&&(data.unused=unuseds);for(n in member)if(\"number\"==typeof member[n]){data.member=member;break}return data},itself.jshint=itself,itself}();\"object\"==typeof exports&&exports&&(exports.JSHINT=JSHINT)},{\"../lodash\":\"/node_modules/jshint/lodash.js\",\"./lex.js\":\"/node_modules/jshint/src/lex.js\",\"./messages.js\":\"/node_modules/jshint/src/messages.js\",\"./options.js\":\"/node_modules/jshint/src/options.js\",\"./reg.js\":\"/node_modules/jshint/src/reg.js\",\"./scope-manager.js\":\"/node_modules/jshint/src/scope-manager.js\",\"./state.js\":\"/node_modules/jshint/src/state.js\",\"./style.js\":\"/node_modules/jshint/src/style.js\",\"./vars.js\":\"/node_modules/jshint/src/vars.js\",events:\"/node_modules/browserify/node_modules/events/events.js\"}],\"/node_modules/jshint/src/lex.js\":[function(_dereq_,module,exports){\"use strict\";function asyncTrigger(){var _checks=[];return{push:function(fn){_checks.push(fn)},check:function(){for(var check=0;_checks.length>check;++check)_checks[check]();_checks.splice(0,_checks.length)}}}function Lexer(source){var lines=source;\"string\"==typeof lines&&(lines=lines.replace(/\\r\\n/g,\"\\n\").replace(/\\r/g,\"\\n\").split(\"\\n\")),lines[0]&&\"#!\"===lines[0].substr(0,2)&&(-1!==lines[0].indexOf(\"node\")&&(state.option.node=!0),lines[0]=\"\"),this.emitter=new events.EventEmitter,this.source=source,this.setLines(lines),this.prereg=!0,this.line=0,this.char=1,this.from=1,this.input=\"\",this.inComment=!1,this.context=[],this.templateStarts=[];for(var i=0;state.option.indent>i;i+=1)state.tab+=\" \";this.ignoreLinterErrors=!1}var _=_dereq_(\"../lodash\"),events=_dereq_(\"events\"),reg=_dereq_(\"./reg.js\"),state=_dereq_(\"./state.js\").state,unicodeData=_dereq_(\"../data/ascii-identifier-data.js\"),asciiIdentifierStartTable=unicodeData.asciiIdentifierStartTable,asciiIdentifierPartTable=unicodeData.asciiIdentifierPartTable,Token={Identifier:1,Punctuator:2,NumericLiteral:3,StringLiteral:4,Comment:5,Keyword:6,NullLiteral:7,BooleanLiteral:8,RegExp:9,TemplateHead:10,TemplateMiddle:11,TemplateTail:12,NoSubstTemplate:13},Context={Block:1,Template:2};Lexer.prototype={_lines:[],inContext:function(ctxType){return this.context.length>0&&this.context[this.context.length-1].type===ctxType},pushContext:function(ctxType){this.context.push({type:ctxType})},popContext:function(){return this.context.pop()},isContext:function(context){return this.context.length>0&&this.context[this.context.length-1]===context},currentContext:function(){return this.context.length>0&&this.context[this.context.length-1]},getLines:function(){return this._lines=state.lines,this._lines},setLines:function(val){this._lines=val,state.lines=this._lines},peek:function(i){return this.input.charAt(i||0)},skip:function(i){i=i||1,this.char+=i,this.input=this.input.slice(i)},on:function(names,listener){names.split(\" \").forEach(function(name){this.emitter.on(name,listener)}.bind(this))},trigger:function(){this.emitter.emit.apply(this.emitter,Array.prototype.slice.call(arguments))},triggerAsync:function(type,args,checks,fn){checks.push(function(){fn()&&this.trigger(type,args)}.bind(this))},scanPunctuator:function(){var ch2,ch3,ch4,ch1=this.peek();switch(ch1){case\".\":if(/^[0-9]$/.test(this.peek(1)))return null;if(\".\"===this.peek(1)&&\".\"===this.peek(2))return{type:Token.Punctuator,value:\"...\"};case\"(\":case\")\":case\";\":case\",\":case\"[\":case\"]\":case\":\":case\"~\":case\"?\":return{type:Token.Punctuator,value:ch1};case\"{\":return this.pushContext(Context.Block),{type:Token.Punctuator,value:ch1};case\"}\":return this.inContext(Context.Block)&&this.popContext(),{type:Token.Punctuator,value:ch1};case\"#\":return{type:Token.Punctuator,value:ch1};case\"\":return null}return ch2=this.peek(1),ch3=this.peek(2),ch4=this.peek(3),\">\"===ch1&&\">\"===ch2&&\">\"===ch3&&\"=\"===ch4?{type:Token.Punctuator,value:\">>>=\"}:\"=\"===ch1&&\"=\"===ch2&&\"=\"===ch3?{type:Token.Punctuator,value:\"===\"}:\"!\"===ch1&&\"=\"===ch2&&\"=\"===ch3?{type:Token.Punctuator,value:\"!==\"}:\">\"===ch1&&\">\"===ch2&&\">\"===ch3?{type:Token.Punctuator,value:\">>>\"}:\"<\"===ch1&&\"<\"===ch2&&\"=\"===ch3?{type:Token.Punctuator,value:\"<<=\"}:\">\"===ch1&&\">\"===ch2&&\"=\"===ch3?{type:Token.Punctuator,value:\">>=\"}:\"=\"===ch1&&\">\"===ch2?{type:Token.Punctuator,value:ch1+ch2}:ch1===ch2&&\"+-<>&|\".indexOf(ch1)>=0?{type:Token.Punctuator,value:ch1+ch2}:\"<>=!+-*%&|^\".indexOf(ch1)>=0?\"=\"===ch2?{type:Token.Punctuator,value:ch1+ch2}:{type:Token.Punctuator,value:ch1}:\"/\"===ch1?\"=\"===ch2?{type:Token.Punctuator,value:\"/=\"}:{type:Token.Punctuator,value:\"/\"}:null},scanComments:function(){function commentToken(label,body,opt){var special=[\"jshint\",\"jslint\",\"members\",\"member\",\"globals\",\"global\",\"exported\"],isSpecial=!1,value=label+body,commentType=\"plain\";return opt=opt||{},opt.isMultiline&&(value+=\"*/\"),body=body.replace(/\\n/g,\" \"),\"/*\"===label&&reg.fallsThrough.test(body)&&(isSpecial=!0,commentType=\"falls through\"),special.forEach(function(str){if(!isSpecial&&(\"//\"!==label||\"jshint\"===str)&&(\" \"===body.charAt(str.length)&&body.substr(0,str.length)===str&&(isSpecial=!0,label+=str,body=body.substr(str.length)),isSpecial||\" \"!==body.charAt(0)||\" \"!==body.charAt(str.length+1)||body.substr(1,str.length)!==str||(isSpecial=!0,label=label+\" \"+str,body=body.substr(str.length+1)),isSpecial))switch(str){case\"member\":commentType=\"members\";break;case\"global\":commentType=\"globals\";break;default:var options=body.split(\":\").map(function(v){return v.replace(/^\\s+/,\"\").replace(/\\s+$/,\"\")});if(2===options.length)switch(options[0]){case\"ignore\":switch(options[1]){case\"start\":self.ignoringLinterErrors=!0,isSpecial=!1;break;case\"end\":self.ignoringLinterErrors=!1,isSpecial=!1}}commentType=str}}),{type:Token.Comment,commentType:commentType,value:value,body:body,isSpecial:isSpecial,isMultiline:opt.isMultiline||!1,isMalformed:opt.isMalformed||!1}}var ch1=this.peek(),ch2=this.peek(1),rest=this.input.substr(2),startLine=this.line,startChar=this.char,self=this;if(\"*\"===ch1&&\"/\"===ch2)return this.trigger(\"error\",{code:\"E018\",line:startLine,character:startChar}),this.skip(2),null;if(\"/\"!==ch1||\"*\"!==ch2&&\"/\"!==ch2)return null;if(\"/\"===ch2)return this.skip(this.input.length),commentToken(\"//\",rest);var body=\"\";if(\"*\"===ch2){for(this.inComment=!0,this.skip(2);\"*\"!==this.peek()||\"/\"!==this.peek(1);)if(\"\"===this.peek()){if(body+=\"\\n\",!this.nextLine())return this.trigger(\"error\",{code:\"E017\",line:startLine,character:startChar}),this.inComment=!1,commentToken(\"/*\",body,{isMultiline:!0,isMalformed:!0})}else body+=this.peek(),this.skip();return this.skip(2),this.inComment=!1,commentToken(\"/*\",body,{isMultiline:!0})}},scanKeyword:function(){var result=/^[a-zA-Z_$][a-zA-Z0-9_$]*/.exec(this.input),keywords=[\"if\",\"in\",\"do\",\"var\",\"for\",\"new\",\"try\",\"let\",\"this\",\"else\",\"case\",\"void\",\"with\",\"enum\",\"while\",\"break\",\"catch\",\"throw\",\"const\",\"yield\",\"class\",\"super\",\"return\",\"typeof\",\"delete\",\"switch\",\"export\",\"import\",\"default\",\"finally\",\"extends\",\"function\",\"continue\",\"debugger\",\"instanceof\"];return result&&keywords.indexOf(result[0])>=0?{type:Token.Keyword,value:result[0]}:null},scanIdentifier:function(){function isNonAsciiIdentifierStart(code){return code>256}function isNonAsciiIdentifierPart(code){return code>256}function isHexDigit(str){return/^[0-9a-fA-F]$/.test(str)}function removeEscapeSequences(id){return id.replace(/\\\\u([0-9a-fA-F]{4})/g,function(m0,codepoint){return String.fromCharCode(parseInt(codepoint,16))})}var type,char,id=\"\",index=0,readUnicodeEscapeSequence=function(){if(index+=1,\"u\"!==this.peek(index))return null;var code,ch1=this.peek(index+1),ch2=this.peek(index+2),ch3=this.peek(index+3),ch4=this.peek(index+4);return isHexDigit(ch1)&&isHexDigit(ch2)&&isHexDigit(ch3)&&isHexDigit(ch4)?(code=parseInt(ch1+ch2+ch3+ch4,16),asciiIdentifierPartTable[code]||isNonAsciiIdentifierPart(code)?(index+=5,\"\\\\u\"+ch1+ch2+ch3+ch4):null):null}.bind(this),getIdentifierStart=function(){var chr=this.peek(index),code=chr.charCodeAt(0);return 92===code?readUnicodeEscapeSequence():128>code?asciiIdentifierStartTable[code]?(index+=1,chr):null:isNonAsciiIdentifierStart(code)?(index+=1,chr):null}.bind(this),getIdentifierPart=function(){var chr=this.peek(index),code=chr.charCodeAt(0);return 92===code?readUnicodeEscapeSequence():128>code?asciiIdentifierPartTable[code]?(index+=1,chr):null:isNonAsciiIdentifierPart(code)?(index+=1,chr):null}.bind(this);if(char=getIdentifierStart(),null===char)return null;for(id=char;char=getIdentifierPart(),null!==char;)id+=char;switch(id){case\"true\":case\"false\":type=Token.BooleanLiteral;break;case\"null\":type=Token.NullLiteral;break;default:type=Token.Identifier}return{type:type,value:removeEscapeSequences(id),text:id,tokenLength:id.length}},scanNumericLiteral:function(){function isDecimalDigit(str){return/^[0-9]$/.test(str)}function isOctalDigit(str){return/^[0-7]$/.test(str)}function isBinaryDigit(str){return/^[01]$/.test(str)}function isHexDigit(str){return/^[0-9a-fA-F]$/.test(str)}function isIdentifierStart(ch){return\"$\"===ch||\"_\"===ch||\"\\\\\"===ch||ch>=\"a\"&&\"z\">=ch||ch>=\"A\"&&\"Z\">=ch}var bad,index=0,value=\"\",length=this.input.length,char=this.peek(index),isAllowedDigit=isDecimalDigit,base=10,isLegacy=!1;if(\".\"!==char&&!isDecimalDigit(char))return null;if(\".\"!==char){for(value=this.peek(index),index+=1,char=this.peek(index),\"0\"===value&&((\"x\"===char||\"X\"===char)&&(isAllowedDigit=isHexDigit,base=16,index+=1,value+=char),(\"o\"===char||\"O\"===char)&&(isAllowedDigit=isOctalDigit,base=8,state.inES6(!0)||this.trigger(\"warning\",{code:\"W119\",line:this.line,character:this.char,data:[\"Octal integer literal\",\"6\"]}),index+=1,value+=char),(\"b\"===char||\"B\"===char)&&(isAllowedDigit=isBinaryDigit,base=2,state.inES6(!0)||this.trigger(\"warning\",{code:\"W119\",line:this.line,character:this.char,data:[\"Binary integer literal\",\"6\"]}),index+=1,value+=char),isOctalDigit(char)&&(isAllowedDigit=isOctalDigit,base=8,isLegacy=!0,bad=!1,index+=1,value+=char),!isOctalDigit(char)&&isDecimalDigit(char)&&(index+=1,value+=char));length>index;){if(char=this.peek(index),isLegacy&&isDecimalDigit(char))bad=!0;else if(!isAllowedDigit(char))break;value+=char,index+=1}if(isAllowedDigit!==isDecimalDigit)return!isLegacy&&2>=value.length?{type:Token.NumericLiteral,value:value,isMalformed:!0}:length>index&&(char=this.peek(index),isIdentifierStart(char))?null:{type:Token.NumericLiteral,value:value,base:base,isLegacy:isLegacy,isMalformed:!1}}if(\".\"===char)for(value+=char,index+=1;length>index&&(char=this.peek(index),isDecimalDigit(char));)value+=char,index+=1;if(\"e\"===char||\"E\"===char){if(value+=char,index+=1,char=this.peek(index),(\"+\"===char||\"-\"===char)&&(value+=this.peek(index),index+=1),char=this.peek(index),!isDecimalDigit(char))return null;for(value+=char,index+=1;length>index&&(char=this.peek(index),isDecimalDigit(char));)value+=char,index+=1}return length>index&&(char=this.peek(index),isIdentifierStart(char))?null:{type:Token.NumericLiteral,value:value,base:base,isMalformed:!isFinite(value)}},scanEscapeSequence:function(checks){var allowNewLine=!1,jump=1;this.skip();var char=this.peek();switch(char){case\"'\":this.triggerAsync(\"warning\",{code:\"W114\",line:this.line,character:this.char,data:[\"\\\\'\"]},checks,function(){return state.jsonMode});break;case\"b\":char=\"\\\\b\";break;case\"f\":char=\"\\\\f\";break;case\"n\":char=\"\\\\n\";break;case\"r\":char=\"\\\\r\";break;case\"t\":char=\"\\\\t\";break;case\"0\":char=\"\\\\0\";var n=parseInt(this.peek(1),10);this.triggerAsync(\"warning\",{code:\"W115\",line:this.line,character:this.char},checks,function(){return n>=0&&7>=n&&state.isStrict()});break;case\"u\":var hexCode=this.input.substr(1,4),code=parseInt(hexCode,16);isNaN(code)&&this.trigger(\"warning\",{code:\"W052\",line:this.line,character:this.char,data:[\"u\"+hexCode]}),char=String.fromCharCode(code),jump=5;break;case\"v\":this.triggerAsync(\"warning\",{code:\"W114\",line:this.line,character:this.char,data:[\"\\\\v\"]},checks,function(){return state.jsonMode}),char=\"\u000b\";break;case\"x\":var x=parseInt(this.input.substr(1,2),16);this.triggerAsync(\"warning\",{code:\"W114\",line:this.line,character:this.char,data:[\"\\\\x-\"]},checks,function(){return state.jsonMode}),char=String.fromCharCode(x),jump=3;break;case\"\\\\\":char=\"\\\\\\\\\";break;case'\"':char='\\\\\"';break;case\"/\":break;case\"\":allowNewLine=!0,char=\"\"}return{\"char\":char,jump:jump,allowNewLine:allowNewLine}},scanTemplateLiteral:function(checks){var tokenType,ch,value=\"\",startLine=this.line,startChar=this.char,depth=this.templateStarts.length;if(!state.inES6(!0))return null;if(\"`\"===this.peek())tokenType=Token.TemplateHead,this.templateStarts.push({line:this.line,\"char\":this.char}),depth=this.templateStarts.length,this.skip(1),this.pushContext(Context.Template);else{if(!this.inContext(Context.Template)||\"}\"!==this.peek())return null;tokenType=Token.TemplateMiddle}for(;\"`\"!==this.peek();){for(;\"\"===(ch=this.peek());)if(value+=\"\\n\",!this.nextLine()){var startPos=this.templateStarts.pop();return this.trigger(\"error\",{code:\"E052\",line:startPos.line,character:startPos.char}),{type:tokenType,value:value,startLine:startLine,startChar:startChar,isUnclosed:!0,depth:depth,context:this.popContext()}}if(\"$\"===ch&&\"{\"===this.peek(1))return value+=\"${\",this.skip(2),{type:tokenType,value:value,startLine:startLine,startChar:startChar,isUnclosed:!1,depth:depth,context:this.currentContext()};\nif(\"\\\\\"===ch){var escape=this.scanEscapeSequence(checks);value+=escape.char,this.skip(escape.jump)}else\"`\"!==ch&&(value+=ch,this.skip(1))}return tokenType=tokenType===Token.TemplateHead?Token.NoSubstTemplate:Token.TemplateTail,this.skip(1),this.templateStarts.pop(),{type:tokenType,value:value,startLine:startLine,startChar:startChar,isUnclosed:!1,depth:depth,context:this.popContext()}},scanStringLiteral:function(checks){var quote=this.peek();if('\"'!==quote&&\"'\"!==quote)return null;this.triggerAsync(\"warning\",{code:\"W108\",line:this.line,character:this.char},checks,function(){return state.jsonMode&&'\"'!==quote});var value=\"\",startLine=this.line,startChar=this.char,allowNewLine=!1;for(this.skip();this.peek()!==quote;)if(\"\"===this.peek()){if(allowNewLine?(allowNewLine=!1,this.triggerAsync(\"warning\",{code:\"W043\",line:this.line,character:this.char},checks,function(){return!state.option.multistr}),this.triggerAsync(\"warning\",{code:\"W042\",line:this.line,character:this.char},checks,function(){return state.jsonMode&&state.option.multistr})):this.trigger(\"warning\",{code:\"W112\",line:this.line,character:this.char}),!this.nextLine())return this.trigger(\"error\",{code:\"E029\",line:startLine,character:startChar}),{type:Token.StringLiteral,value:value,startLine:startLine,startChar:startChar,isUnclosed:!0,quote:quote}}else{allowNewLine=!1;var char=this.peek(),jump=1;if(\" \">char&&this.trigger(\"warning\",{code:\"W113\",line:this.line,character:this.char,data:[\"<non-printable>\"]}),\"\\\\\"===char){var parsed=this.scanEscapeSequence(checks);char=parsed.char,jump=parsed.jump,allowNewLine=parsed.allowNewLine}value+=char,this.skip(jump)}return this.skip(),{type:Token.StringLiteral,value:value,startLine:startLine,startChar:startChar,isUnclosed:!1,quote:quote}},scanRegExp:function(){var terminated,index=0,length=this.input.length,char=this.peek(),value=char,body=\"\",flags=[],malformed=!1,isCharSet=!1,scanUnexpectedChars=function(){\" \">char&&(malformed=!0,this.trigger(\"warning\",{code:\"W048\",line:this.line,character:this.char})),\"<\"===char&&(malformed=!0,this.trigger(\"warning\",{code:\"W049\",line:this.line,character:this.char,data:[char]}))}.bind(this);if(!this.prereg||\"/\"!==char)return null;for(index+=1,terminated=!1;length>index;)if(char=this.peek(index),value+=char,body+=char,isCharSet)\"]\"===char&&(\"\\\\\"!==this.peek(index-1)||\"\\\\\"===this.peek(index-2))&&(isCharSet=!1),\"\\\\\"===char&&(index+=1,char=this.peek(index),body+=char,value+=char,scanUnexpectedChars()),index+=1;else{if(\"\\\\\"===char){if(index+=1,char=this.peek(index),body+=char,value+=char,scanUnexpectedChars(),\"/\"===char){index+=1;continue}if(\"[\"===char){index+=1;continue}}if(\"[\"!==char){if(\"/\"===char){body=body.substr(0,body.length-1),terminated=!0,index+=1;break}index+=1}else isCharSet=!0,index+=1}if(!terminated)return this.trigger(\"error\",{code:\"E015\",line:this.line,character:this.from}),void this.trigger(\"fatal\",{line:this.line,from:this.from});for(;length>index&&(char=this.peek(index),/[gim]/.test(char));)flags.push(char),value+=char,index+=1;try{RegExp(body,flags.join(\"\"))}catch(err){malformed=!0,this.trigger(\"error\",{code:\"E016\",line:this.line,character:this.char,data:[err.message]})}return{type:Token.RegExp,value:value,flags:flags,isMalformed:malformed}},scanNonBreakingSpaces:function(){return state.option.nonbsp?this.input.search(/(\\u00A0)/):-1},scanUnsafeChars:function(){return this.input.search(reg.unsafeChars)},next:function(checks){this.from=this.char;var start;if(/\\s/.test(this.peek()))for(start=this.char;/\\s/.test(this.peek());)this.from+=1,this.skip();var match=this.scanComments()||this.scanStringLiteral(checks)||this.scanTemplateLiteral(checks);return match?match:(match=this.scanRegExp()||this.scanPunctuator()||this.scanKeyword()||this.scanIdentifier()||this.scanNumericLiteral(),match?(this.skip(match.tokenLength||match.value.length),match):null)},nextLine:function(){var char;if(this.line>=this.getLines().length)return!1;this.input=this.getLines()[this.line],this.line+=1,this.char=1,this.from=1;var inputTrimmed=this.input.trim(),startsWith=function(){return _.some(arguments,function(prefix){return 0===inputTrimmed.indexOf(prefix)})},endsWith=function(){return _.some(arguments,function(suffix){return-1!==inputTrimmed.indexOf(suffix,inputTrimmed.length-suffix.length)})};if(this.ignoringLinterErrors===!0&&(startsWith(\"/*\",\"//\")||this.inComment&&endsWith(\"*/\")||(this.input=\"\")),char=this.scanNonBreakingSpaces(),char>=0&&this.trigger(\"warning\",{code:\"W125\",line:this.line,character:char+1}),this.input=this.input.replace(/\\t/g,state.tab),char=this.scanUnsafeChars(),char>=0&&this.trigger(\"warning\",{code:\"W100\",line:this.line,character:char}),!this.ignoringLinterErrors&&state.option.maxlen&&state.option.maxlen<this.input.length){var inComment=this.inComment||startsWith.call(inputTrimmed,\"//\")||startsWith.call(inputTrimmed,\"/*\"),shouldTriggerError=!inComment||!reg.maxlenException.test(inputTrimmed);shouldTriggerError&&this.trigger(\"warning\",{code:\"W101\",line:this.line,character:this.input.length})}return!0},start:function(){this.nextLine()},token:function(){function isReserved(token,isProperty){if(!token.reserved)return!1;var meta=token.meta;if(meta&&meta.isFutureReservedWord&&state.inES5()){if(!meta.es5)return!1;if(meta.strictOnly&&!state.option.strict&&!state.isStrict())return!1;if(isProperty)return!1}return!0}for(var token,checks=asyncTrigger(),create=function(type,value,isProperty,token){var obj;if(\"(endline)\"!==type&&\"(end)\"!==type&&(this.prereg=!1),\"(punctuator)\"===type){switch(value){case\".\":case\")\":case\"~\":case\"#\":case\"]\":case\"++\":case\"--\":this.prereg=!1;break;default:this.prereg=!0}obj=Object.create(state.syntax[value]||state.syntax[\"(error)\"])}return\"(identifier)\"===type&&((\"return\"===value||\"case\"===value||\"typeof\"===value)&&(this.prereg=!0),_.has(state.syntax,value)&&(obj=Object.create(state.syntax[value]||state.syntax[\"(error)\"]),isReserved(obj,isProperty&&\"(identifier)\"===type)||(obj=null))),obj||(obj=Object.create(state.syntax[type])),obj.identifier=\"(identifier)\"===type,obj.type=obj.type||type,obj.value=value,obj.line=this.line,obj.character=this.char,obj.from=this.from,obj.identifier&&token&&(obj.raw_text=token.text||token.value),token&&token.startLine&&token.startLine!==this.line&&(obj.startLine=token.startLine),token&&token.context&&(obj.context=token.context),token&&token.depth&&(obj.depth=token.depth),token&&token.isUnclosed&&(obj.isUnclosed=token.isUnclosed),isProperty&&obj.identifier&&(obj.isProperty=isProperty),obj.check=checks.check,obj}.bind(this);;){if(!this.input.length)return this.nextLine()?create(\"(endline)\",\"\"):this.exhausted?null:(this.exhausted=!0,create(\"(end)\",\"\"));if(token=this.next(checks))switch(token.type){case Token.StringLiteral:return this.triggerAsync(\"String\",{line:this.line,\"char\":this.char,from:this.from,startLine:token.startLine,startChar:token.startChar,value:token.value,quote:token.quote},checks,function(){return!0}),create(\"(string)\",token.value,null,token);case Token.TemplateHead:return this.trigger(\"TemplateHead\",{line:this.line,\"char\":this.char,from:this.from,startLine:token.startLine,startChar:token.startChar,value:token.value}),create(\"(template)\",token.value,null,token);case Token.TemplateMiddle:return this.trigger(\"TemplateMiddle\",{line:this.line,\"char\":this.char,from:this.from,startLine:token.startLine,startChar:token.startChar,value:token.value}),create(\"(template middle)\",token.value,null,token);case Token.TemplateTail:return this.trigger(\"TemplateTail\",{line:this.line,\"char\":this.char,from:this.from,startLine:token.startLine,startChar:token.startChar,value:token.value}),create(\"(template tail)\",token.value,null,token);case Token.NoSubstTemplate:return this.trigger(\"NoSubstTemplate\",{line:this.line,\"char\":this.char,from:this.from,startLine:token.startLine,startChar:token.startChar,value:token.value}),create(\"(no subst template)\",token.value,null,token);case Token.Identifier:this.triggerAsync(\"Identifier\",{line:this.line,\"char\":this.char,from:this.form,name:token.value,raw_name:token.text,isProperty:\".\"===state.tokens.curr.id},checks,function(){return!0});case Token.Keyword:case Token.NullLiteral:case Token.BooleanLiteral:return create(\"(identifier)\",token.value,\".\"===state.tokens.curr.id,token);case Token.NumericLiteral:return token.isMalformed&&this.trigger(\"warning\",{code:\"W045\",line:this.line,character:this.char,data:[token.value]}),this.triggerAsync(\"warning\",{code:\"W114\",line:this.line,character:this.char,data:[\"0x-\"]},checks,function(){return 16===token.base&&state.jsonMode}),this.triggerAsync(\"warning\",{code:\"W115\",line:this.line,character:this.char},checks,function(){return state.isStrict()&&8===token.base&&token.isLegacy}),this.trigger(\"Number\",{line:this.line,\"char\":this.char,from:this.from,value:token.value,base:token.base,isMalformed:token.malformed}),create(\"(number)\",token.value);case Token.RegExp:return create(\"(regexp)\",token.value);case Token.Comment:if(state.tokens.curr.comment=!0,token.isSpecial)return{id:\"(comment)\",value:token.value,body:token.body,type:token.commentType,isSpecial:token.isSpecial,line:this.line,character:this.char,from:this.from};break;case\"\":break;default:return create(\"(punctuator)\",token.value)}else this.input.length&&(this.trigger(\"error\",{code:\"E024\",line:this.line,character:this.char,data:[this.peek()]}),this.input=\"\")}}},exports.Lexer=Lexer,exports.Context=Context},{\"../data/ascii-identifier-data.js\":\"/node_modules/jshint/data/ascii-identifier-data.js\",\"../lodash\":\"/node_modules/jshint/lodash.js\",\"./reg.js\":\"/node_modules/jshint/src/reg.js\",\"./state.js\":\"/node_modules/jshint/src/state.js\",events:\"/node_modules/browserify/node_modules/events/events.js\"}],\"/node_modules/jshint/src/messages.js\":[function(_dereq_,module,exports){\"use strict\";var _=_dereq_(\"../lodash\"),errors={E001:\"Bad option: '{a}'.\",E002:\"Bad option value.\",E003:\"Expected a JSON value.\",E004:\"Input is neither a string nor an array of strings.\",E005:\"Input is empty.\",E006:\"Unexpected early end of program.\",E007:'Missing \"use strict\" statement.',E008:\"Strict violation.\",E009:\"Option 'validthis' can't be used in a global scope.\",E010:\"'with' is not allowed in strict mode.\",E011:\"'{a}' has already been declared.\",E012:\"const '{a}' is initialized to 'undefined'.\",E013:\"Attempting to override '{a}' which is a constant.\",E014:\"A regular expression literal can be confused with '/='.\",E015:\"Unclosed regular expression.\",E016:\"Invalid regular expression.\",E017:\"Unclosed comment.\",E018:\"Unbegun comment.\",E019:\"Unmatched '{a}'.\",E020:\"Expected '{a}' to match '{b}' from line {c} and instead saw '{d}'.\",E021:\"Expected '{a}' and instead saw '{b}'.\",E022:\"Line breaking error '{a}'.\",E023:\"Missing '{a}'.\",E024:\"Unexpected '{a}'.\",E025:\"Missing ':' on a case clause.\",E026:\"Missing '}' to match '{' from line {a}.\",E027:\"Missing ']' to match '[' from line {a}.\",E028:\"Illegal comma.\",E029:\"Unclosed string.\",E030:\"Expected an identifier and instead saw '{a}'.\",E031:\"Bad assignment.\",E032:\"Expected a small integer or 'false' and instead saw '{a}'.\",E033:\"Expected an operator and instead saw '{a}'.\",E034:\"get/set are ES5 features.\",E035:\"Missing property name.\",E036:\"Expected to see a statement and instead saw a block.\",E037:null,E038:null,E039:\"Function declarations are not invocable. Wrap the whole function invocation in parens.\",E040:\"Each value should have its own case label.\",E041:\"Unrecoverable syntax error.\",E042:\"Stopping.\",E043:\"Too many errors.\",E044:null,E045:\"Invalid for each loop.\",E046:\"A yield statement shall be within a generator function (with syntax: `function*`)\",E047:null,E048:\"{a} declaration not directly within block.\",E049:\"A {a} cannot be named '{b}'.\",E050:\"Mozilla acequires the yield expression to be parenthesized here.\",E051:null,E052:\"Unclosed template literal.\",E053:\"Export declaration must be in global scope.\",E054:\"Class properties must be methods. Expected '(' but instead saw '{a}'.\",E055:\"The '{a}' option cannot be set after any executable code.\",E056:\"'{a}' was used before it was declared, which is illegal for '{b}' variables.\",E057:\"Invalid meta property: '{a}.{b}'.\",E058:\"Missing semicolon.\"},warnings={W001:\"'hasOwnProperty' is a really bad name.\",W002:\"Value of '{a}' may be overwritten in IE 8 and earlier.\",W003:\"'{a}' was used before it was defined.\",W004:\"'{a}' is already defined.\",W005:\"A dot following a number can be confused with a decimal point.\",W006:\"Confusing minuses.\",W007:\"Confusing plusses.\",W008:\"A leading decimal point can be confused with a dot: '{a}'.\",W009:\"The array literal notation [] is preferable.\",W010:\"The object literal notation {} is preferable.\",W011:null,W012:null,W013:null,W014:\"Bad line breaking before '{a}'.\",W015:null,W016:\"Unexpected use of '{a}'.\",W017:\"Bad operand.\",W018:\"Confusing use of '{a}'.\",W019:\"Use the isNaN function to compare with NaN.\",W020:\"Read only.\",W021:\"Reassignment of '{a}', which is is a {b}. Use 'var' or 'let' to declare bindings that may change.\",W022:\"Do not assign to the exception parameter.\",W023:\"Expected an identifier in an assignment and instead saw a function invocation.\",W024:\"Expected an identifier and instead saw '{a}' (a reserved word).\",W025:\"Missing name in function declaration.\",W026:\"Inner functions should be listed at the top of the outer function.\",W027:\"Unreachable '{a}' after '{b}'.\",W028:\"Label '{a}' on {b} statement.\",W030:\"Expected an assignment or function call and instead saw an expression.\",W031:\"Do not use 'new' for side effects.\",W032:\"Unnecessary semicolon.\",W033:\"Missing semicolon.\",W034:'Unnecessary directive \"{a}\".',W035:\"Empty block.\",W036:\"Unexpected /*member '{a}'.\",W037:\"'{a}' is a statement label.\",W038:\"'{a}' used out of scope.\",W039:\"'{a}' is not allowed.\",W040:\"Possible strict violation.\",W041:\"Use '{a}' to compare with '{b}'.\",W042:\"Avoid EOL escaping.\",W043:\"Bad escaping of EOL. Use option multistr if needed.\",W044:\"Bad or unnecessary escaping.\",W045:\"Bad number '{a}'.\",W046:\"Don't use extra leading zeros '{a}'.\",W047:\"A trailing decimal point can be confused with a dot: '{a}'.\",W048:\"Unexpected control character in regular expression.\",W049:\"Unexpected escaped character '{a}' in regular expression.\",W050:\"JavaScript URL.\",W051:\"Variables should not be deleted.\",W052:\"Unexpected '{a}'.\",W053:\"Do not use {a} as a constructor.\",W054:\"The Function constructor is a form of eval.\",W055:\"A constructor name should start with an uppercase letter.\",W056:\"Bad constructor.\",W057:\"Weird construction. Is 'new' necessary?\",W058:\"Missing '()' invoking a constructor.\",W059:\"Avoid arguments.{a}.\",W060:\"document.write can be a form of eval.\",W061:\"eval can be harmful.\",W062:\"Wrap an immediate function invocation in parens to assist the reader in understanding that the expression is the result of a function, and not the function itself.\",W063:\"Math is not a function.\",W064:\"Missing 'new' prefix when invoking a constructor.\",W065:\"Missing radix parameter.\",W066:\"Implied eval. Consider passing a function instead of a string.\",W067:\"Bad invocation.\",W068:\"Wrapping non-IIFE function literals in parens is unnecessary.\",W069:\"['{a}'] is better written in dot notation.\",W070:\"Extra comma. (it breaks older versions of IE)\",W071:\"This function has too many statements. ({a})\",W072:\"This function has too many parameters. ({a})\",W073:\"Blocks are nested too deeply. ({a})\",W074:\"This function's cyclomatic complexity is too high. ({a})\",W075:\"Duplicate {a} '{b}'.\",W076:\"Unexpected parameter '{a}' in get {b} function.\",W077:\"Expected a single parameter in set {a} function.\",W078:\"Setter is defined without getter.\",W079:\"Redefinition of '{a}'.\",W080:\"It's not necessary to initialize '{a}' to 'undefined'.\",W081:null,W082:\"Function declarations should not be placed in blocks. Use a function expression or move the statement to the top of the outer function.\",W083:\"Don't make functions within a loop.\",W084:\"Assignment in conditional expression\",W085:\"Don't use 'with'.\",W086:\"Expected a 'break' statement before '{a}'.\",W087:\"Forgotten 'debugger' statement?\",W088:\"Creating global 'for' variable. Should be 'for (var {a} ...'.\",W089:\"The body of a for in should be wrapped in an if statement to filter unwanted properties from the prototype.\",W090:\"'{a}' is not a statement label.\",W091:null,W093:\"Did you mean to return a conditional instead of an assignment?\",W094:\"Unexpected comma.\",W095:\"Expected a string and instead saw {a}.\",W096:\"The '{a}' key may produce unexpected results.\",W097:'Use the function form of \"use strict\".',W098:\"'{a}' is defined but never used.\",W099:null,W100:\"This character may get silently deleted by one or more browsers.\",W101:\"Line is too long.\",W102:null,W103:\"The '{a}' property is deprecated.\",W104:\"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz).\",W105:\"Unexpected {a} in '{b}'.\",W106:\"Identifier '{a}' is not in camel case.\",W107:\"Script URL.\",W108:\"Strings must use doublequote.\",W109:\"Strings must use singlequote.\",W110:\"Mixed double and single quotes.\",W112:\"Unclosed string.\",W113:\"Control character in string: {a}.\",W114:\"Avoid {a}.\",W115:\"Octal literals are not allowed in strict mode.\",W116:\"Expected '{a}' and instead saw '{b}'.\",W117:\"'{a}' is not defined.\",W118:\"'{a}' is only available in Mozilla JavaScript extensions (use moz option).\",W119:\"'{a}' is only available in ES{b} (use 'esversion: {b}').\",W120:\"You might be leaking a variable ({a}) here.\",W121:\"Extending prototype of native object: '{a}'.\",W122:\"Invalid typeof value '{a}'\",W123:\"'{a}' is already defined in outer scope.\",W124:\"A generator function shall contain a yield statement.\",W125:\"This line contains non-breaking spaces: http://jshint.com/doc/options/#nonbsp\",W126:\"Unnecessary grouping operator.\",W127:\"Unexpected use of a comma operator.\",W128:\"Empty array elements acequire elision=true.\",W129:\"'{a}' is defined in a future version of JavaScript. Use a different variable name to avoid migration issues.\",W130:\"Invalid element after rest element.\",W131:\"Invalid parameter after rest parameter.\",W132:\"`var` declarations are forbidden. Use `let` or `const` instead.\",W133:\"Invalid for-{a} loop left-hand-side: {b}.\",W134:\"The '{a}' option is only available when linting ECMAScript {b} code.\",W135:\"{a} may not be supported by non-browser environments.\",W136:\"'{a}' must be in function scope.\",W137:\"Empty destructuring.\",W138:\"Regular parameters should not come after default parameters.\"},info={I001:\"Comma warnings can be turned off with 'laxcomma'.\",I002:null,I003:\"ES5 option is now set per default\"};exports.errors={},exports.warnings={},exports.info={},_.each(errors,function(desc,code){exports.errors[code]={code:code,desc:desc}}),_.each(warnings,function(desc,code){exports.warnings[code]={code:code,desc:desc}}),_.each(info,function(desc,code){exports.info[code]={code:code,desc:desc}})},{\"../lodash\":\"/node_modules/jshint/lodash.js\"}],\"/node_modules/jshint/src/name-stack.js\":[function(_dereq_,module){\"use strict\";function NameStack(){this._stack=[]}Object.defineProperty(NameStack.prototype,\"length\",{get:function(){return this._stack.length}}),NameStack.prototype.push=function(){this._stack.push(null)},NameStack.prototype.pop=function(){this._stack.pop()},NameStack.prototype.set=function(token){this._stack[this.length-1]=token},NameStack.prototype.infer=function(){var type,nameToken=this._stack[this.length-1],prefix=\"\";return nameToken&&\"class\"!==nameToken.type||(nameToken=this._stack[this.length-2]),nameToken?(type=nameToken.type,\"(string)\"!==type&&\"(number)\"!==type&&\"(identifier)\"!==type&&\"default\"!==type?\"(expression)\":(nameToken.accessorType&&(prefix=nameToken.accessorType+\" \"),prefix+nameToken.value)):\"(empty)\"},module.exports=NameStack},{}],\"/node_modules/jshint/src/options.js\":[function(_dereq_,module,exports){\"use strict\";exports.bool={enforcing:{bitwise:!0,freeze:!0,camelcase:!0,curly:!0,eqeqeq:!0,futurehostile:!0,notypeof:!0,es3:!0,es5:!0,forin:!0,funcscope:!0,immed:!0,iterator:!0,newcap:!0,noarg:!0,nocomma:!0,noempty:!0,nonbsp:!0,nonew:!0,undef:!0,singleGroups:!1,varstmt:!1,enforceall:!1},relaxing:{asi:!0,multistr:!0,debug:!0,boss:!0,evil:!0,globalstrict:!0,plusplus:!0,proto:!0,scripturl:!0,sub:!0,supernew:!0,laxbreak:!0,laxcomma:!0,validthis:!0,withstmt:!0,moz:!0,noyield:!0,eqnull:!0,lastsemic:!0,loopfunc:!0,expr:!0,esnext:!0,elision:!0},environments:{mootools:!0,couch:!0,jasmine:!0,jquery:!0,node:!0,qunit:!0,rhino:!0,shelljs:!0,prototypejs:!0,yui:!0,mocha:!0,module:!0,wsh:!0,worker:!0,nonstandard:!0,browser:!0,browserify:!0,devel:!0,dojo:!0,typed:!0,phantom:!0},obsolete:{onecase:!0,regexp:!0,regexdash:!0}},exports.val={maxlen:!1,indent:!1,maxerr:!1,predef:!1,globals:!1,quotmark:!1,scope:!1,maxstatements:!1,maxdepth:!1,maxparams:!1,maxcomplexity:!1,shadow:!1,strict:!0,unused:!0,latedef:!1,ignore:!1,ignoreDelimiters:!1,esversion:5},exports.inverted={bitwise:!0,forin:!0,newcap:!0,plusplus:!0,regexp:!0,undef:!0,eqeqeq:!0,strict:!0},exports.validNames=Object.keys(exports.val).concat(Object.keys(exports.bool.relaxing)).concat(Object.keys(exports.bool.enforcing)).concat(Object.keys(exports.bool.obsolete)).concat(Object.keys(exports.bool.environments)),exports.renamed={eqeq:\"eqeqeq\",windows:\"wsh\",sloppy:\"strict\"},exports.removed={nomen:!0,onevar:!0,passfail:!0,white:!0,gcl:!0,smarttabs:!0,trailing:!0},exports.noenforceall={varstmt:!0,strict:!0}},{}],\"/node_modules/jshint/src/reg.js\":[function(_dereq_,module,exports){\"use strict\";exports.unsafeString=/@cc|<\\/?|script|\\]\\s*\\]|<\\s*!|&lt/i,exports.unsafeChars=/[\\u0000-\\u001f\\u007f-\\u009f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]/,exports.needEsc=/[\\u0000-\\u001f&<\"\\/\\\\\\u007f-\\u009f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]/,exports.needEscGlobal=/[\\u0000-\\u001f&<\"\\/\\\\\\u007f-\\u009f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]/g,exports.starSlash=/\\*\\//,exports.identifier=/^([a-zA-Z_$][a-zA-Z0-9_$]*)$/,exports.javascriptURL=/^(?:javascript|jscript|ecmascript|vbscript|livescript)\\s*:/i,exports.fallsThrough=/^\\s*falls?\\sthrough\\s*$/,exports.maxlenException=/^(?:(?:\\/\\/|\\/\\*|\\*) ?)?[^ ]+$/},{}],\"/node_modules/jshint/src/scope-manager.js\":[function(_dereq_,module){\"use strict\";var _=_dereq_(\"../lodash\"),events=_dereq_(\"events\"),marker={},scopeManager=function(state,predefined,exported,declared){function _newScope(type){_current={\"(labels)\":Object.create(null),\"(usages)\":Object.create(null),\"(breakLabels)\":Object.create(null),\"(parent)\":_current,\"(type)\":type,\"(params)\":\"functionparams\"===type||\"catchparams\"===type?[]:null},_scopeStack.push(_current)}function warning(code,token){emitter.emit(\"warning\",{code:code,token:token,data:_.slice(arguments,2)})}function error(code,token){emitter.emit(\"warning\",{code:code,token:token,data:_.slice(arguments,2)})}function _setupUsages(labelName){_current[\"(usages)\"][labelName]||(_current[\"(usages)\"][labelName]={\"(modified)\":[],\"(reassigned)\":[],\"(tokens)\":[]})}function _checkForUnused(){if(\"functionparams\"===_current[\"(type)\"])return _checkParams(),void 0;var curentLabels=_current[\"(labels)\"];for(var labelName in curentLabels)curentLabels[labelName]&&\"exception\"!==curentLabels[labelName][\"(type)\"]&&curentLabels[labelName][\"(unused)\"]&&_warnUnused(labelName,curentLabels[labelName][\"(token)\"],\"var\")}function _checkParams(){var params=_current[\"(params)\"];if(params)for(var unused_opt,param=params.pop();param;){var label=_current[\"(labels)\"][param];if(unused_opt=_getUnusedOption(state.funct[\"(unusedOption)\"]),\"undefined\"===param)return;if(label[\"(unused)\"])_warnUnused(param,label[\"(token)\"],\"param\",state.funct[\"(unusedOption)\"]);else if(\"last-param\"===unused_opt)return;param=params.pop()}}function _getLabel(labelName){for(var i=_scopeStack.length-1;i>=0;--i){var scopeLabels=_scopeStack[i][\"(labels)\"];if(scopeLabels[labelName])return scopeLabels}}function usedSoFarInCurrentFunction(labelName){for(var i=_scopeStack.length-1;i>=0;i--){var current=_scopeStack[i];if(current[\"(usages)\"][labelName])return current[\"(usages)\"][labelName];if(current===_currentFunctBody)break}return!1}function _checkOuterShadow(labelName,token){if(\"outer\"===state.option.shadow)for(var isGlobal=\"global\"===_currentFunctBody[\"(type)\"],isNewFunction=\"functionparams\"===_current[\"(type)\"],outsideCurrentFunction=!isGlobal,i=0;_scopeStack.length>i;i++){var stackItem=_scopeStack[i];isNewFunction||_scopeStack[i+1]!==_currentFunctBody||(outsideCurrentFunction=!1),outsideCurrentFunction&&stackItem[\"(labels)\"][labelName]&&warning(\"W123\",token,labelName),stackItem[\"(breakLabels)\"][labelName]&&warning(\"W123\",token,labelName)}}function _latedefWarning(type,labelName,token){state.option.latedef&&(state.option.latedef===!0&&\"function\"===type||\"function\"!==type)&&warning(\"W003\",token,labelName)}var _current,_scopeStack=[];_newScope(\"global\"),_current[\"(predefined)\"]=predefined;var _currentFunctBody=_current,usedPredefinedAndGlobals=Object.create(null),impliedGlobals=Object.create(null),unuseds=[],emitter=new events.EventEmitter,_getUnusedOption=function(unused_opt){return void 0===unused_opt&&(unused_opt=state.option.unused),unused_opt===!0&&(unused_opt=\"last-param\"),unused_opt},_warnUnused=function(name,tkn,type,unused_opt){var line=tkn.line,chr=tkn.from,raw_name=tkn.raw_text||name;unused_opt=_getUnusedOption(unused_opt);var warnable_types={vars:[\"var\"],\"last-param\":[\"var\",\"param\"],strict:[\"var\",\"param\",\"last-param\"]};unused_opt&&warnable_types[unused_opt]&&-1!==warnable_types[unused_opt].indexOf(type)&&warning(\"W098\",{line:line,from:chr},raw_name),(unused_opt||\"var\"===type)&&unuseds.push({name:name,line:line,character:chr})},scopeManagerInst={on:function(names,listener){names.split(\" \").forEach(function(name){emitter.on(name,listener)})},isPredefined:function(labelName){return!this.has(labelName)&&_.has(_scopeStack[0][\"(predefined)\"],labelName)},stack:function(type){var previousScope=_current;_newScope(type),type||\"functionparams\"!==previousScope[\"(type)\"]||(_current[\"(isFuncBody)\"]=!0,_current[\"(context)\"]=_currentFunctBody,_currentFunctBody=_current)},unstack:function(){var i,j,subScope=_scopeStack.length>1?_scopeStack[_scopeStack.length-2]:null,isUnstackingFunctionBody=_current===_currentFunctBody,isUnstackingFunctionParams=\"functionparams\"===_current[\"(type)\"],isUnstackingFunctionOuter=\"functionouter\"===_current[\"(type)\"],currentUsages=_current[\"(usages)\"],currentLabels=_current[\"(labels)\"],usedLabelNameList=Object.keys(currentUsages);for(currentUsages.__proto__&&-1===usedLabelNameList.indexOf(\"__proto__\")&&usedLabelNameList.push(\"__proto__\"),i=0;usedLabelNameList.length>i;i++){var usedLabelName=usedLabelNameList[i],usage=currentUsages[usedLabelName],usedLabel=currentLabels[usedLabelName];if(usedLabel){var usedLabelType=usedLabel[\"(type)\"];if(usedLabel[\"(useOutsideOfScope)\"]&&!state.option.funcscope){var usedTokens=usage[\"(tokens)\"];if(usedTokens)for(j=0;usedTokens.length>j;j++)usedLabel[\"(function)\"]===usedTokens[j][\"(function)\"]&&error(\"W038\",usedTokens[j],usedLabelName)}if(_current[\"(labels)\"][usedLabelName][\"(unused)\"]=!1,\"const\"===usedLabelType&&usage[\"(modified)\"])for(j=0;usage[\"(modified)\"].length>j;j++)error(\"E013\",usage[\"(modified)\"][j],usedLabelName);if((\"function\"===usedLabelType||\"class\"===usedLabelType)&&usage[\"(reassigned)\"])for(j=0;usage[\"(reassigned)\"].length>j;j++)error(\"W021\",usage[\"(reassigned)\"][j],usedLabelName,usedLabelType)}else if(isUnstackingFunctionOuter&&(state.funct[\"(isCapturing)\"]=!0),subScope)if(subScope[\"(usages)\"][usedLabelName]){var subScopeUsage=subScope[\"(usages)\"][usedLabelName];subScopeUsage[\"(modified)\"]=subScopeUsage[\"(modified)\"].concat(usage[\"(modified)\"]),subScopeUsage[\"(tokens)\"]=subScopeUsage[\"(tokens)\"].concat(usage[\"(tokens)\"]),subScopeUsage[\"(reassigned)\"]=subScopeUsage[\"(reassigned)\"].concat(usage[\"(reassigned)\"]),subScopeUsage[\"(onlyUsedSubFunction)\"]=!1}else subScope[\"(usages)\"][usedLabelName]=usage,isUnstackingFunctionBody&&(subScope[\"(usages)\"][usedLabelName][\"(onlyUsedSubFunction)\"]=!0);else if(\"boolean\"==typeof _current[\"(predefined)\"][usedLabelName]){if(delete declared[usedLabelName],usedPredefinedAndGlobals[usedLabelName]=marker,_current[\"(predefined)\"][usedLabelName]===!1&&usage[\"(reassigned)\"])for(j=0;usage[\"(reassigned)\"].length>j;j++)warning(\"W020\",usage[\"(reassigned)\"][j])}else if(usage[\"(tokens)\"])for(j=0;usage[\"(tokens)\"].length>j;j++){var undefinedToken=usage[\"(tokens)\"][j];undefinedToken.forgiveUndef||(state.option.undef&&!undefinedToken.ignoreUndef&&warning(\"W117\",undefinedToken,usedLabelName),impliedGlobals[usedLabelName]?impliedGlobals[usedLabelName].line.push(undefinedToken.line):impliedGlobals[usedLabelName]={name:usedLabelName,line:[undefinedToken.line]})}}if(subScope||Object.keys(declared).forEach(function(labelNotUsed){_warnUnused(labelNotUsed,declared[labelNotUsed],\"var\")}),subScope&&!isUnstackingFunctionBody&&!isUnstackingFunctionParams&&!isUnstackingFunctionOuter){var labelNames=Object.keys(currentLabels);for(i=0;labelNames.length>i;i++){var defLabelName=labelNames[i];currentLabels[defLabelName][\"(blockscoped)\"]||\"exception\"===currentLabels[defLabelName][\"(type)\"]||this.funct.has(defLabelName,{excludeCurrent:!0})||(subScope[\"(labels)\"][defLabelName]=currentLabels[defLabelName],\"global\"!==_currentFunctBody[\"(type)\"]&&(subScope[\"(labels)\"][defLabelName][\"(useOutsideOfScope)\"]=!0),delete currentLabels[defLabelName])}}_checkForUnused(),_scopeStack.pop(),isUnstackingFunctionBody&&(_currentFunctBody=_scopeStack[_.findLastIndex(_scopeStack,function(scope){return scope[\"(isFuncBody)\"]||\"global\"===scope[\"(type)\"]})]),_current=subScope},addParam:function(labelName,token,type){if(type=type||\"param\",\"exception\"===type){var previouslyDefinedLabelType=this.funct.labeltype(labelName);previouslyDefinedLabelType&&\"exception\"!==previouslyDefinedLabelType&&(state.option.node||warning(\"W002\",state.tokens.next,labelName))}if(_.has(_current[\"(labels)\"],labelName)?_current[\"(labels)\"][labelName].duplicated=!0:(_checkOuterShadow(labelName,token,type),_current[\"(labels)\"][labelName]={\"(type)\":type,\"(token)\":token,\"(unused)\":!0},_current[\"(params)\"].push(labelName)),_.has(_current[\"(usages)\"],labelName)){var usage=_current[\"(usages)\"][labelName];usage[\"(onlyUsedSubFunction)\"]?_latedefWarning(type,labelName,token):warning(\"E056\",token,labelName,type)}},validateParams:function(){if(\"global\"!==_currentFunctBody[\"(type)\"]){var isStrict=state.isStrict(),currentFunctParamScope=_currentFunctBody[\"(parent)\"];currentFunctParamScope[\"(params)\"]&&currentFunctParamScope[\"(params)\"].forEach(function(labelName){var label=currentFunctParamScope[\"(labels)\"][labelName];label&&label.duplicated&&(isStrict?warning(\"E011\",label[\"(token)\"],labelName):state.option.shadow!==!0&&warning(\"W004\",label[\"(token)\"],labelName))})}},getUsedOrDefinedGlobals:function(){var list=Object.keys(usedPredefinedAndGlobals);return usedPredefinedAndGlobals.__proto__===marker&&-1===list.indexOf(\"__proto__\")&&list.push(\"__proto__\"),list},getImpliedGlobals:function(){var values=_.values(impliedGlobals),hasProto=!1;return impliedGlobals.__proto__&&(hasProto=values.some(function(value){return\"__proto__\"===value.name}),hasProto||values.push(impliedGlobals.__proto__)),values},getUnuseds:function(){return unuseds},has:function(labelName){return Boolean(_getLabel(labelName))},labeltype:function(labelName){var scopeLabels=_getLabel(labelName);return scopeLabels?scopeLabels[labelName][\"(type)\"]:null},addExported:function(labelName){var globalLabels=_scopeStack[0][\"(labels)\"];if(_.has(declared,labelName))delete declared[labelName];else if(_.has(globalLabels,labelName))globalLabels[labelName][\"(unused)\"]=!1;else{for(var i=1;_scopeStack.length>i;i++){var scope=_scopeStack[i];if(scope[\"(type)\"])break;if(_.has(scope[\"(labels)\"],labelName)&&!scope[\"(labels)\"][labelName][\"(blockscoped)\"])return scope[\"(labels)\"][labelName][\"(unused)\"]=!1,void 0}exported[labelName]=!0}},setExported:function(labelName,token){this.block.use(labelName,token)\n},addlabel:function(labelName,opts){var type=opts.type,token=opts.token,isblockscoped=\"let\"===type||\"const\"===type||\"class\"===type,isexported=\"global\"===(isblockscoped?_current:_currentFunctBody)[\"(type)\"]&&_.has(exported,labelName);if(_checkOuterShadow(labelName,token,type),isblockscoped){var declaredInCurrentScope=_current[\"(labels)\"][labelName];if(declaredInCurrentScope||_current!==_currentFunctBody||\"global\"===_current[\"(type)\"]||(declaredInCurrentScope=!!_currentFunctBody[\"(parent)\"][\"(labels)\"][labelName]),!declaredInCurrentScope&&_current[\"(usages)\"][labelName]){var usage=_current[\"(usages)\"][labelName];usage[\"(onlyUsedSubFunction)\"]?_latedefWarning(type,labelName,token):warning(\"E056\",token,labelName,type)}declaredInCurrentScope?warning(\"E011\",token,labelName):\"outer\"===state.option.shadow&&scopeManagerInst.funct.has(labelName)&&warning(\"W004\",token,labelName),scopeManagerInst.block.add(labelName,type,token,!isexported)}else{var declaredInCurrentFunctionScope=scopeManagerInst.funct.has(labelName);!declaredInCurrentFunctionScope&&usedSoFarInCurrentFunction(labelName)&&_latedefWarning(type,labelName,token),scopeManagerInst.funct.has(labelName,{onlyBlockscoped:!0})?warning(\"E011\",token,labelName):state.option.shadow!==!0&&declaredInCurrentFunctionScope&&\"__proto__\"!==labelName&&\"global\"!==_currentFunctBody[\"(type)\"]&&warning(\"W004\",token,labelName),scopeManagerInst.funct.add(labelName,type,token,!isexported),\"global\"===_currentFunctBody[\"(type)\"]&&(usedPredefinedAndGlobals[labelName]=marker)}},funct:{labeltype:function(labelName,options){for(var onlyBlockscoped=options&&options.onlyBlockscoped,excludeParams=options&&options.excludeParams,currentScopeIndex=_scopeStack.length-(options&&options.excludeCurrent?2:1),i=currentScopeIndex;i>=0;i--){var current=_scopeStack[i];if(current[\"(labels)\"][labelName]&&(!onlyBlockscoped||current[\"(labels)\"][labelName][\"(blockscoped)\"]))return current[\"(labels)\"][labelName][\"(type)\"];var scopeCheck=excludeParams?_scopeStack[i-1]:current;if(scopeCheck&&\"functionparams\"===scopeCheck[\"(type)\"])return null}return null},hasBreakLabel:function(labelName){for(var i=_scopeStack.length-1;i>=0;i--){var current=_scopeStack[i];if(current[\"(breakLabels)\"][labelName])return!0;if(\"functionparams\"===current[\"(type)\"])return!1}return!1},has:function(labelName,options){return Boolean(this.labeltype(labelName,options))},add:function(labelName,type,tok,unused){_current[\"(labels)\"][labelName]={\"(type)\":type,\"(token)\":tok,\"(blockscoped)\":!1,\"(function)\":_currentFunctBody,\"(unused)\":unused}}},block:{isGlobal:function(){return\"global\"===_current[\"(type)\"]},use:function(labelName,token){var paramScope=_currentFunctBody[\"(parent)\"];paramScope&&paramScope[\"(labels)\"][labelName]&&\"param\"===paramScope[\"(labels)\"][labelName][\"(type)\"]&&(scopeManagerInst.funct.has(labelName,{excludeParams:!0,onlyBlockscoped:!0})||(paramScope[\"(labels)\"][labelName][\"(unused)\"]=!1)),token&&(state.ignored.W117||state.option.undef===!1)&&(token.ignoreUndef=!0),_setupUsages(labelName),token&&(token[\"(function)\"]=_currentFunctBody,_current[\"(usages)\"][labelName][\"(tokens)\"].push(token))},reassign:function(labelName,token){this.modify(labelName,token),_current[\"(usages)\"][labelName][\"(reassigned)\"].push(token)},modify:function(labelName,token){_setupUsages(labelName),_current[\"(usages)\"][labelName][\"(modified)\"].push(token)},add:function(labelName,type,tok,unused){_current[\"(labels)\"][labelName]={\"(type)\":type,\"(token)\":tok,\"(blockscoped)\":!0,\"(unused)\":unused}},addBreakLabel:function(labelName,opts){var token=opts.token;scopeManagerInst.funct.hasBreakLabel(labelName)?warning(\"E011\",token,labelName):\"outer\"===state.option.shadow&&(scopeManagerInst.funct.has(labelName)?warning(\"W004\",token,labelName):_checkOuterShadow(labelName,token)),_current[\"(breakLabels)\"][labelName]=token}}};return scopeManagerInst};module.exports=scopeManager},{\"../lodash\":\"/node_modules/jshint/lodash.js\",events:\"/node_modules/browserify/node_modules/events/events.js\"}],\"/node_modules/jshint/src/state.js\":[function(_dereq_,module,exports){\"use strict\";var NameStack=_dereq_(\"./name-stack.js\"),state={syntax:{},isStrict:function(){return this.directive[\"use strict\"]||this.inClassBody||this.option.module||\"implied\"===this.option.strict},inMoz:function(){return this.option.moz},inES6:function(){return this.option.moz||this.option.esversion>=6},inES5:function(strict){return strict?!(this.option.esversion&&5!==this.option.esversion||this.option.moz):!this.option.esversion||this.option.esversion>=5||this.option.moz},reset:function(){this.tokens={prev:null,next:null,curr:null},this.option={},this.funct=null,this.ignored={},this.directive={},this.jsonMode=!1,this.jsonWarnings=[],this.lines=[],this.tab=\"\",this.cache={},this.ignoredLines={},this.forinifcheckneeded=!1,this.nameStack=new NameStack,this.inClassBody=!1}};exports.state=state},{\"./name-stack.js\":\"/node_modules/jshint/src/name-stack.js\"}],\"/node_modules/jshint/src/style.js\":[function(_dereq_,module,exports){\"use strict\";exports.register=function(linter){linter.on(\"Identifier\",function(data){linter.getOption(\"proto\")||\"__proto__\"===data.name&&linter.warn(\"W103\",{line:data.line,\"char\":data.char,data:[data.name,\"6\"]})}),linter.on(\"Identifier\",function(data){linter.getOption(\"iterator\")||\"__iterator__\"===data.name&&linter.warn(\"W103\",{line:data.line,\"char\":data.char,data:[data.name]})}),linter.on(\"Identifier\",function(data){linter.getOption(\"camelcase\")&&data.name.replace(/^_+|_+$/g,\"\").indexOf(\"_\")>-1&&!data.name.match(/^[A-Z0-9_]*$/)&&linter.warn(\"W106\",{line:data.line,\"char\":data.from,data:[data.name]})}),linter.on(\"String\",function(data){var code,quotmark=linter.getOption(\"quotmark\");quotmark&&(\"single\"===quotmark&&\"'\"!==data.quote&&(code=\"W109\"),\"double\"===quotmark&&'\"'!==data.quote&&(code=\"W108\"),quotmark===!0&&(linter.getCache(\"quotmark\")||linter.setCache(\"quotmark\",data.quote),linter.getCache(\"quotmark\")!==data.quote&&(code=\"W110\")),code&&linter.warn(code,{line:data.line,\"char\":data.char}))}),linter.on(\"Number\",function(data){\".\"===data.value.charAt(0)&&linter.warn(\"W008\",{line:data.line,\"char\":data.char,data:[data.value]}),\".\"===data.value.substr(data.value.length-1)&&linter.warn(\"W047\",{line:data.line,\"char\":data.char,data:[data.value]}),/^00+/.test(data.value)&&linter.warn(\"W046\",{line:data.line,\"char\":data.char,data:[data.value]})}),linter.on(\"String\",function(data){var re=/^(?:javascript|jscript|ecmascript|vbscript|livescript)\\s*:/i;linter.getOption(\"scripturl\")||re.test(data.value)&&linter.warn(\"W107\",{line:data.line,\"char\":data.char})})}},{}],\"/node_modules/jshint/src/vars.js\":[function(_dereq_,module,exports){\"use strict\";exports.reservedVars={arguments:!1,NaN:!1},exports.ecmaIdentifiers={3:{Array:!1,Boolean:!1,Date:!1,decodeURI:!1,decodeURIComponent:!1,encodeURI:!1,encodeURIComponent:!1,Error:!1,eval:!1,EvalError:!1,Function:!1,hasOwnProperty:!1,isFinite:!1,isNaN:!1,Math:!1,Number:!1,Object:!1,parseInt:!1,parseFloat:!1,RangeError:!1,ReferenceError:!1,RegExp:!1,String:!1,SyntaxError:!1,TypeError:!1,URIError:!1},5:{JSON:!1},6:{Map:!1,Promise:!1,Proxy:!1,Reflect:!1,Set:!1,Symbol:!1,WeakMap:!1,WeakSet:!1}},exports.browser={Audio:!1,Blob:!1,addEventListener:!1,applicationCache:!1,atob:!1,blur:!1,btoa:!1,cancelAnimationFrame:!1,CanvasGradient:!1,CanvasPattern:!1,CanvasRenderingContext2D:!1,CSS:!1,clearInterval:!1,clearTimeout:!1,close:!1,closed:!1,Comment:!1,CustomEvent:!1,DOMParser:!1,defaultStatus:!1,Document:!1,document:!1,DocumentFragment:!1,Element:!1,ElementTimeControl:!1,Event:!1,event:!1,fetch:!1,FileReader:!1,FormData:!1,focus:!1,frames:!1,getComputedStyle:!1,HTMLElement:!1,HTMLAnchorElement:!1,HTMLBaseElement:!1,HTMLBlockquoteElement:!1,HTMLBodyElement:!1,HTMLBRElement:!1,HTMLButtonElement:!1,HTMLCanvasElement:!1,HTMLCollection:!1,HTMLDirectoryElement:!1,HTMLDivElement:!1,HTMLDListElement:!1,HTMLFieldSetElement:!1,HTMLFontElement:!1,HTMLFormElement:!1,HTMLFrameElement:!1,HTMLFrameSetElement:!1,HTMLHeadElement:!1,HTMLHeadingElement:!1,HTMLHRElement:!1,HTMLHtmlElement:!1,HTMLIFrameElement:!1,HTMLImageElement:!1,HTMLInputElement:!1,HTMLIsIndexElement:!1,HTMLLabelElement:!1,HTMLLayerElement:!1,HTMLLegendElement:!1,HTMLLIElement:!1,HTMLLinkElement:!1,HTMLMapElement:!1,HTMLMenuElement:!1,HTMLMetaElement:!1,HTMLModElement:!1,HTMLObjectElement:!1,HTMLOListElement:!1,HTMLOptGroupElement:!1,HTMLOptionElement:!1,HTMLParagraphElement:!1,HTMLParamElement:!1,HTMLPreElement:!1,HTMLQuoteElement:!1,HTMLScriptElement:!1,HTMLSelectElement:!1,HTMLStyleElement:!1,HTMLTableCaptionElement:!1,HTMLTableCellElement:!1,HTMLTableColElement:!1,HTMLTableElement:!1,HTMLTableRowElement:!1,HTMLTableSectionElement:!1,HTMLTemplateElement:!1,HTMLTextAreaElement:!1,HTMLTitleElement:!1,HTMLUListElement:!1,HTMLVideoElement:!1,history:!1,Image:!1,Intl:!1,length:!1,localStorage:!1,location:!1,matchMedia:!1,MessageChannel:!1,MessageEvent:!1,MessagePort:!1,MouseEvent:!1,moveBy:!1,moveTo:!1,MutationObserver:!1,name:!1,Node:!1,NodeFilter:!1,NodeList:!1,Notification:!1,navigator:!1,onbeforeunload:!0,onblur:!0,onerror:!0,onfocus:!0,onload:!0,onresize:!0,onunload:!0,open:!1,openDatabase:!1,opener:!1,Option:!1,parent:!1,performance:!1,print:!1,Range:!1,requestAnimationFrame:!1,removeEventListener:!1,resizeBy:!1,resizeTo:!1,screen:!1,scroll:!1,scrollBy:!1,scrollTo:!1,sessionStorage:!1,setInterval:!1,setTimeout:!1,SharedWorker:!1,status:!1,SVGAElement:!1,SVGAltGlyphDefElement:!1,SVGAltGlyphElement:!1,SVGAltGlyphItemElement:!1,SVGAngle:!1,SVGAnimateColorElement:!1,SVGAnimateElement:!1,SVGAnimateMotionElement:!1,SVGAnimateTransformElement:!1,SVGAnimatedAngle:!1,SVGAnimatedBoolean:!1,SVGAnimatedEnumeration:!1,SVGAnimatedInteger:!1,SVGAnimatedLength:!1,SVGAnimatedLengthList:!1,SVGAnimatedNumber:!1,SVGAnimatedNumberList:!1,SVGAnimatedPathData:!1,SVGAnimatedPoints:!1,SVGAnimatedPreserveAspectRatio:!1,SVGAnimatedRect:!1,SVGAnimatedString:!1,SVGAnimatedTransformList:!1,SVGAnimationElement:!1,SVGCSSRule:!1,SVGCircleElement:!1,SVGClipPathElement:!1,SVGColor:!1,SVGColorProfileElement:!1,SVGColorProfileRule:!1,SVGComponentTransferFunctionElement:!1,SVGCursorElement:!1,SVGDefsElement:!1,SVGDescElement:!1,SVGDocument:!1,SVGElement:!1,SVGElementInstance:!1,SVGElementInstanceList:!1,SVGEllipseElement:!1,SVGExternalResourcesRequired:!1,SVGFEBlendElement:!1,SVGFEColorMatrixElement:!1,SVGFEComponentTransferElement:!1,SVGFECompositeElement:!1,SVGFEConvolveMatrixElement:!1,SVGFEDiffuseLightingElement:!1,SVGFEDisplacementMapElement:!1,SVGFEDistantLightElement:!1,SVGFEFloodElement:!1,SVGFEFuncAElement:!1,SVGFEFuncBElement:!1,SVGFEFuncGElement:!1,SVGFEFuncRElement:!1,SVGFEGaussianBlurElement:!1,SVGFEImageElement:!1,SVGFEMergeElement:!1,SVGFEMergeNodeElement:!1,SVGFEMorphologyElement:!1,SVGFEOffsetElement:!1,SVGFEPointLightElement:!1,SVGFESpecularLightingElement:!1,SVGFESpotLightElement:!1,SVGFETileElement:!1,SVGFETurbulenceElement:!1,SVGFilterElement:!1,SVGFilterPrimitiveStandardAttributes:!1,SVGFitToViewBox:!1,SVGFontElement:!1,SVGFontFaceElement:!1,SVGFontFaceFormatElement:!1,SVGFontFaceNameElement:!1,SVGFontFaceSrcElement:!1,SVGFontFaceUriElement:!1,SVGForeignObjectElement:!1,SVGGElement:!1,SVGGlyphElement:!1,SVGGlyphRefElement:!1,SVGGradientElement:!1,SVGHKernElement:!1,SVGICCColor:!1,SVGImageElement:!1,SVGLangSpace:!1,SVGLength:!1,SVGLengthList:!1,SVGLineElement:!1,SVGLinearGradientElement:!1,SVGLocatable:!1,SVGMPathElement:!1,SVGMarkerElement:!1,SVGMaskElement:!1,SVGMatrix:!1,SVGMetadataElement:!1,SVGMissingGlyphElement:!1,SVGNumber:!1,SVGNumberList:!1,SVGPaint:!1,SVGPathElement:!1,SVGPathSeg:!1,SVGPathSegArcAbs:!1,SVGPathSegArcRel:!1,SVGPathSegClosePath:!1,SVGPathSegCurvetoCubicAbs:!1,SVGPathSegCurvetoCubicRel:!1,SVGPathSegCurvetoCubicSmoothAbs:!1,SVGPathSegCurvetoCubicSmoothRel:!1,SVGPathSegCurvetoQuadraticAbs:!1,SVGPathSegCurvetoQuadraticRel:!1,SVGPathSegCurvetoQuadraticSmoothAbs:!1,SVGPathSegCurvetoQuadraticSmoothRel:!1,SVGPathSegLinetoAbs:!1,SVGPathSegLinetoHorizontalAbs:!1,SVGPathSegLinetoHorizontalRel:!1,SVGPathSegLinetoRel:!1,SVGPathSegLinetoVerticalAbs:!1,SVGPathSegLinetoVerticalRel:!1,SVGPathSegList:!1,SVGPathSegMovetoAbs:!1,SVGPathSegMovetoRel:!1,SVGPatternElement:!1,SVGPoint:!1,SVGPointList:!1,SVGPolygonElement:!1,SVGPolylineElement:!1,SVGPreserveAspectRatio:!1,SVGRadialGradientElement:!1,SVGRect:!1,SVGRectElement:!1,SVGRenderingIntent:!1,SVGSVGElement:!1,SVGScriptElement:!1,SVGSetElement:!1,SVGStopElement:!1,SVGStringList:!1,SVGStylable:!1,SVGStyleElement:!1,SVGSwitchElement:!1,SVGSymbolElement:!1,SVGTRefElement:!1,SVGTSpanElement:!1,SVGTests:!1,SVGTextContentElement:!1,SVGTextElement:!1,SVGTextPathElement:!1,SVGTextPositioningElement:!1,SVGTitleElement:!1,SVGTransform:!1,SVGTransformList:!1,SVGTransformable:!1,SVGURIReference:!1,SVGUnitTypes:!1,SVGUseElement:!1,SVGVKernElement:!1,SVGViewElement:!1,SVGViewSpec:!1,SVGZoomAndPan:!1,Text:!1,TextDecoder:!1,TextEncoder:!1,TimeEvent:!1,top:!1,URL:!1,WebGLActiveInfo:!1,WebGLBuffer:!1,WebGLContextEvent:!1,WebGLFramebuffer:!1,WebGLProgram:!1,WebGLRenderbuffer:!1,WebGLRenderingContext:!1,WebGLShader:!1,WebGLShaderPrecisionFormat:!1,WebGLTexture:!1,WebGLUniformLocation:!1,WebSocket:!1,window:!1,Window:!1,Worker:!1,XDomainRequest:!1,XMLHttpRequest:!1,XMLSerializer:!1,XPathEvaluator:!1,XPathException:!1,XPathExpression:!1,XPathNamespace:!1,XPathNSResolver:!1,XPathResult:!1},exports.devel={alert:!1,confirm:!1,console:!1,Debug:!1,opera:!1,prompt:!1},exports.worker={importScripts:!0,postMessage:!0,self:!0,FileReaderSync:!0},exports.nonstandard={escape:!1,unescape:!1},exports.couch={require:!1,respond:!1,getRow:!1,emit:!1,send:!1,start:!1,sum:!1,log:!1,exports:!1,module:!1,provides:!1},exports.node={__filename:!1,__dirname:!1,GLOBAL:!1,global:!1,module:!1,acequire:!1,Buffer:!0,console:!0,exports:!0,process:!0,setTimeout:!0,clearTimeout:!0,setInterval:!0,clearInterval:!0,setImmediate:!0,clearImmediate:!0},exports.browserify={__filename:!1,__dirname:!1,global:!1,module:!1,acequire:!1,Buffer:!0,exports:!0,process:!0},exports.phantom={phantom:!0,acequire:!0,WebPage:!0,console:!0,exports:!0},exports.qunit={asyncTest:!1,deepEqual:!1,equal:!1,expect:!1,module:!1,notDeepEqual:!1,notEqual:!1,notPropEqual:!1,notStrictEqual:!1,ok:!1,propEqual:!1,QUnit:!1,raises:!1,start:!1,stop:!1,strictEqual:!1,test:!1,\"throws\":!1},exports.rhino={defineClass:!1,deserialize:!1,gc:!1,help:!1,importClass:!1,importPackage:!1,java:!1,load:!1,loadClass:!1,Packages:!1,print:!1,quit:!1,readFile:!1,readUrl:!1,runCommand:!1,seal:!1,serialize:!1,spawn:!1,sync:!1,toint32:!1,version:!1},exports.shelljs={target:!1,echo:!1,exit:!1,cd:!1,pwd:!1,ls:!1,find:!1,cp:!1,rm:!1,mv:!1,mkdir:!1,test:!1,cat:!1,sed:!1,grep:!1,which:!1,dirs:!1,pushd:!1,popd:!1,env:!1,exec:!1,chmod:!1,config:!1,error:!1,tempdir:!1},exports.typed={ArrayBuffer:!1,ArrayBufferView:!1,DataView:!1,Float32Array:!1,Float64Array:!1,Int16Array:!1,Int32Array:!1,Int8Array:!1,Uint16Array:!1,Uint32Array:!1,Uint8Array:!1,Uint8ClampedArray:!1},exports.wsh={ActiveXObject:!0,Enumerator:!0,GetObject:!0,ScriptEngine:!0,ScriptEngineBuildVersion:!0,ScriptEngineMajorVersion:!0,ScriptEngineMinorVersion:!0,VBArray:!0,WSH:!0,WScript:!0,XDomainRequest:!0},exports.dojo={dojo:!1,dijit:!1,dojox:!1,define:!1,require:!1},exports.jquery={$:!1,jQuery:!1},exports.mootools={$:!1,$$:!1,Asset:!1,Browser:!1,Chain:!1,Class:!1,Color:!1,Cookie:!1,Core:!1,Document:!1,DomReady:!1,DOMEvent:!1,DOMReady:!1,Drag:!1,Element:!1,Elements:!1,Event:!1,Events:!1,Fx:!1,Group:!1,Hash:!1,HtmlTable:!1,IFrame:!1,IframeShim:!1,InputValidator:!1,instanceOf:!1,Keyboard:!1,Locale:!1,Mask:!1,MooTools:!1,Native:!1,Options:!1,OverText:!1,Request:!1,Scroller:!1,Slick:!1,Slider:!1,Sortables:!1,Spinner:!1,Swiff:!1,Tips:!1,Type:!1,typeOf:!1,URI:!1,Window:!1},exports.prototypejs={$:!1,$$:!1,$A:!1,$F:!1,$H:!1,$R:!1,$break:!1,$continue:!1,$w:!1,Abstract:!1,Ajax:!1,Class:!1,Enumerable:!1,Element:!1,Event:!1,Field:!1,Form:!1,Hash:!1,Insertion:!1,ObjectRange:!1,PeriodicalExecuter:!1,Position:!1,Prototype:!1,Selector:!1,Template:!1,Toggle:!1,Try:!1,Autocompleter:!1,Builder:!1,Control:!1,Draggable:!1,Draggables:!1,Droppables:!1,Effect:!1,Sortable:!1,SortableObserver:!1,Sound:!1,Scriptaculous:!1},exports.yui={YUI:!1,Y:!1,YUI_config:!1},exports.mocha={mocha:!1,describe:!1,xdescribe:!1,it:!1,xit:!1,context:!1,xcontext:!1,before:!1,after:!1,beforeEach:!1,afterEach:!1,suite:!1,test:!1,setup:!1,teardown:!1,suiteSetup:!1,suiteTeardown:!1},exports.jasmine={jasmine:!1,describe:!1,xdescribe:!1,it:!1,xit:!1,beforeEach:!1,afterEach:!1,setFixtures:!1,loadFixtures:!1,spyOn:!1,expect:!1,runs:!1,waitsFor:!1,waits:!1,beforeAll:!1,afterAll:!1,fail:!1,fdescribe:!1,fit:!1,pending:!1}},{}]},{},[\"/node_modules/jshint/src/jshint.js\"])}),ace.define(\"ace/mode/javascript_worker\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/worker/mirror\",\"ace/mode/javascript/jshint\"],function(acequire,exports,module){\"use strict\";function startRegex(arr){return RegExp(\"^(\"+arr.join(\"|\")+\")\")}var oop=acequire(\"../lib/oop\"),Mirror=acequire(\"../worker/mirror\").Mirror,lint=acequire(\"./javascript/jshint\").JSHINT,disabledWarningsRe=startRegex([\"Bad for in variable '(.+)'.\",'Missing \"use strict\"']),errorsRe=startRegex([\"Unexpected\",\"Expected \",\"Confusing (plus|minus)\",\"\\\\{a\\\\} unterminated regular expression\",\"Unclosed \",\"Unmatched \",\"Unbegun comment\",\"Bad invocation\",\"Missing space after\",\"Missing operator at\"]),infoRe=startRegex([\"Expected an assignment\",\"Bad escapement of EOL\",\"Unexpected comma\",\"Unexpected space\",\"Missing radix parameter.\",\"A leading decimal point can\",\"\\\\['{a}'\\\\] is better written in dot notation.\",\"'{a}' used out of scope\"]),JavaScriptWorker=exports.JavaScriptWorker=function(sender){Mirror.call(this,sender),this.setTimeout(500),this.setOptions()};oop.inherits(JavaScriptWorker,Mirror),function(){this.setOptions=function(options){this.options=options||{esnext:!0,moz:!0,devel:!0,browser:!0,node:!0,laxcomma:!0,laxbreak:!0,lastsemic:!0,onevar:!1,passfail:!1,maxerr:100,expr:!0,multistr:!0,globalstrict:!0},this.doc.getValue()&&this.deferredUpdate.schedule(100)},this.changeOptions=function(newOptions){oop.mixin(this.options,newOptions),this.doc.getValue()&&this.deferredUpdate.schedule(100)},this.isValidJS=function(str){try{eval(\"throw 0;\"+str)}catch(e){if(0===e)return!0}return!1},this.onUpdate=function(){var value=this.doc.getValue();if(value=value.replace(/^#!.*\\n/,\"\\n\"),!value)return this.sender.emit(\"annotate\",[]);var errors=[],maxErrorLevel=this.isValidJS(value)?\"warning\":\"error\";lint(value,this.options);for(var results=lint.errors,errorAdded=!1,i=0;results.length>i;i++){var error=results[i];if(error){var raw=error.raw,type=\"warning\";if(\"Missing semicolon.\"==raw){var str=error.evidence.substr(error.character);str=str.charAt(str.search(/\\S/)),\"error\"==maxErrorLevel&&str&&/[\\w\\d{(['\"]/.test(str)?(error.reason='Missing \";\" before statement',type=\"error\"):type=\"info\"}else{if(disabledWarningsRe.test(raw))continue;infoRe.test(raw)?type=\"info\":errorsRe.test(raw)?(errorAdded=!0,type=maxErrorLevel):\"'{a}' is not defined.\"==raw?type=\"warning\":\"'{a}' is defined but never used.\"==raw&&(type=\"info\")}errors.push({row:error.line-1,column:error.character-1,text:error.reason,type:type,raw:raw})}}this.sender.emit(\"annotate\",errors)}}.call(JavaScriptWorker.prototype)}),ace.define(\"ace/lib/es5-shim\",[\"require\",\"exports\",\"module\"],function(){function Empty(){}function doesDefinePropertyWork(object){try{return Object.defineProperty(object,\"sentinel\",{}),\"sentinel\"in object}catch(exception){}}function toInteger(n){return n=+n,n!==n?n=0:0!==n&&n!==1/0&&n!==-(1/0)&&(n=(n>0||-1)*Math.floor(Math.abs(n))),n}Function.prototype.bind||(Function.prototype.bind=function(that){var target=this;if(\"function\"!=typeof target)throw new TypeError(\"Function.prototype.bind called on incompatible \"+target);var args=slice.call(arguments,1),bound=function(){if(this instanceof bound){var result=target.apply(this,args.concat(slice.call(arguments)));return Object(result)===result?result:this}return target.apply(that,args.concat(slice.call(arguments)))};return target.prototype&&(Empty.prototype=target.prototype,bound.prototype=new Empty,Empty.prototype=null),bound});var defineGetter,defineSetter,lookupGetter,lookupSetter,supportsAccessors,call=Function.prototype.call,prototypeOfArray=Array.prototype,prototypeOfObject=Object.prototype,slice=prototypeOfArray.slice,_toString=call.bind(prototypeOfObject.toString),owns=call.bind(prototypeOfObject.hasOwnProperty);if((supportsAccessors=owns(prototypeOfObject,\"__defineGetter__\"))&&(defineGetter=call.bind(prototypeOfObject.__defineGetter__),defineSetter=call.bind(prototypeOfObject.__defineSetter__),lookupGetter=call.bind(prototypeOfObject.__lookupGetter__),lookupSetter=call.bind(prototypeOfObject.__lookupSetter__)),2!=[1,2].splice(0).length)if(function(){function makeArray(l){var a=Array(l+2);return a[0]=a[1]=0,a}var lengthBefore,array=[];return array.splice.apply(array,makeArray(20)),array.splice.apply(array,makeArray(26)),lengthBefore=array.length,array.splice(5,0,\"XXX\"),lengthBefore+1==array.length,lengthBefore+1==array.length?!0:void 0}()){var array_splice=Array.prototype.splice;Array.prototype.splice=function(start,deleteCount){return arguments.length?array_splice.apply(this,[void 0===start?0:start,void 0===deleteCount?this.length-start:deleteCount].concat(slice.call(arguments,2))):[]}}else Array.prototype.splice=function(pos,removeCount){var length=this.length;pos>0?pos>length&&(pos=length):void 0==pos?pos=0:0>pos&&(pos=Math.max(length+pos,0)),length>pos+removeCount||(removeCount=length-pos);var removed=this.slice(pos,pos+removeCount),insert=slice.call(arguments,2),add=insert.length;if(pos===length)add&&this.push.apply(this,insert);else{var remove=Math.min(removeCount,length-pos),tailOldPos=pos+remove,tailNewPos=tailOldPos+add-remove,tailCount=length-tailOldPos,lengthAfterRemove=length-remove;if(tailOldPos>tailNewPos)for(var i=0;tailCount>i;++i)this[tailNewPos+i]=this[tailOldPos+i];else if(tailNewPos>tailOldPos)for(i=tailCount;i--;)this[tailNewPos+i]=this[tailOldPos+i];if(add&&pos===lengthAfterRemove)this.length=lengthAfterRemove,this.push.apply(this,insert);else for(this.length=lengthAfterRemove+add,i=0;add>i;++i)this[pos+i]=insert[i]}return removed};Array.isArray||(Array.isArray=function(obj){return\"[object Array]\"==_toString(obj)});var boxedString=Object(\"a\"),splitString=\"a\"!=boxedString[0]||!(0 in boxedString);if(Array.prototype.forEach||(Array.prototype.forEach=function(fun){var object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,thisp=arguments[1],i=-1,length=self.length>>>0;if(\"[object Function]\"!=_toString(fun))throw new TypeError;for(;length>++i;)i in self&&fun.call(thisp,self[i],i,object)}),Array.prototype.map||(Array.prototype.map=function(fun){var object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,length=self.length>>>0,result=Array(length),thisp=arguments[1];if(\"[object Function]\"!=_toString(fun))throw new TypeError(fun+\" is not a function\");for(var i=0;length>i;i++)i in self&&(result[i]=fun.call(thisp,self[i],i,object));return result}),Array.prototype.filter||(Array.prototype.filter=function(fun){var value,object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,length=self.length>>>0,result=[],thisp=arguments[1];if(\"[object Function]\"!=_toString(fun))throw new TypeError(fun+\" is not a function\");for(var i=0;length>i;i++)i in self&&(value=self[i],fun.call(thisp,value,i,object)&&result.push(value));return result}),Array.prototype.every||(Array.prototype.every=function(fun){var object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,length=self.length>>>0,thisp=arguments[1];if(\"[object Function]\"!=_toString(fun))throw new TypeError(fun+\" is not a function\");for(var i=0;length>i;i++)if(i in self&&!fun.call(thisp,self[i],i,object))return!1;return!0}),Array.prototype.some||(Array.prototype.some=function(fun){var object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,length=self.length>>>0,thisp=arguments[1];if(\"[object Function]\"!=_toString(fun))throw new TypeError(fun+\" is not a function\");for(var i=0;length>i;i++)if(i in self&&fun.call(thisp,self[i],i,object))return!0;return!1}),Array.prototype.reduce||(Array.prototype.reduce=function(fun){var object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,length=self.length>>>0;if(\"[object Function]\"!=_toString(fun))throw new TypeError(fun+\" is not a function\");if(!length&&1==arguments.length)throw new TypeError(\"reduce of empty array with no initial value\");var result,i=0;if(arguments.length>=2)result=arguments[1];else for(;;){if(i in self){result=self[i++];break}if(++i>=length)throw new TypeError(\"reduce of empty array with no initial value\")}for(;length>i;i++)i in self&&(result=fun.call(void 0,result,self[i],i,object));return result}),Array.prototype.reduceRight||(Array.prototype.reduceRight=function(fun){var object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,length=self.length>>>0;if(\"[object Function]\"!=_toString(fun))throw new TypeError(fun+\" is not a function\");if(!length&&1==arguments.length)throw new TypeError(\"reduceRight of empty array with no initial value\");var result,i=length-1;if(arguments.length>=2)result=arguments[1];else for(;;){if(i in self){result=self[i--];break}if(0>--i)throw new TypeError(\"reduceRight of empty array with no initial value\")}do i in this&&(result=fun.call(void 0,result,self[i],i,object));while(i--);return result}),Array.prototype.indexOf&&-1==[0,1].indexOf(1,2)||(Array.prototype.indexOf=function(sought){var self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):toObject(this),length=self.length>>>0;if(!length)return-1;var i=0;for(arguments.length>1&&(i=toInteger(arguments[1])),i=i>=0?i:Math.max(0,length+i);length>i;i++)if(i in self&&self[i]===sought)return i;return-1}),Array.prototype.lastIndexOf&&-1==[0,1].lastIndexOf(0,-3)||(Array.prototype.lastIndexOf=function(sought){var self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):toObject(this),length=self.length>>>0;if(!length)return-1;var i=length-1;for(arguments.length>1&&(i=Math.min(i,toInteger(arguments[1]))),i=i>=0?i:length-Math.abs(i);i>=0;i--)if(i in self&&sought===self[i])return i;return-1}),Object.getPrototypeOf||(Object.getPrototypeOf=function(object){return object.__proto__||(object.constructor?object.constructor.prototype:prototypeOfObject)}),!Object.getOwnPropertyDescriptor){var ERR_NON_OBJECT=\"Object.getOwnPropertyDescriptor called on a non-object: \";Object.getOwnPropertyDescriptor=function(object,property){if(\"object\"!=typeof object&&\"function\"!=typeof object||null===object)throw new TypeError(ERR_NON_OBJECT+object);if(owns(object,property)){var descriptor,getter,setter;if(descriptor={enumerable:!0,configurable:!0},supportsAccessors){var prototype=object.__proto__;object.__proto__=prototypeOfObject;var getter=lookupGetter(object,property),setter=lookupSetter(object,property);if(object.__proto__=prototype,getter||setter)return getter&&(descriptor.get=getter),setter&&(descriptor.set=setter),descriptor}return descriptor.value=object[property],descriptor}}}if(Object.getOwnPropertyNames||(Object.getOwnPropertyNames=function(object){return Object.keys(object)}),!Object.create){var createEmpty;createEmpty=null===Object.prototype.__proto__?function(){return{__proto__:null}}:function(){var empty={};for(var i in empty)empty[i]=null;return empty.constructor=empty.hasOwnProperty=empty.propertyIsEnumerable=empty.isPrototypeOf=empty.toLocaleString=empty.toString=empty.valueOf=empty.__proto__=null,empty},Object.create=function(prototype,properties){var object;if(null===prototype)object=createEmpty();else{if(\"object\"!=typeof prototype)throw new TypeError(\"typeof prototype[\"+typeof prototype+\"] != 'object'\");var Type=function(){};Type.prototype=prototype,object=new Type,object.__proto__=prototype}return void 0!==properties&&Object.defineProperties(object,properties),object}}if(Object.defineProperty){var definePropertyWorksOnObject=doesDefinePropertyWork({}),definePropertyWorksOnDom=\"undefined\"==typeof document||doesDefinePropertyWork(document.createElement(\"div\"));if(!definePropertyWorksOnObject||!definePropertyWorksOnDom)var definePropertyFallback=Object.defineProperty}if(!Object.defineProperty||definePropertyFallback){var ERR_NON_OBJECT_DESCRIPTOR=\"Property description must be an object: \",ERR_NON_OBJECT_TARGET=\"Object.defineProperty called on non-object: \",ERR_ACCESSORS_NOT_SUPPORTED=\"getters & setters can not be defined on this javascript engine\";Object.defineProperty=function(object,property,descriptor){if(\"object\"!=typeof object&&\"function\"!=typeof object||null===object)throw new TypeError(ERR_NON_OBJECT_TARGET+object);if(\"object\"!=typeof descriptor&&\"function\"!=typeof descriptor||null===descriptor)throw new TypeError(ERR_NON_OBJECT_DESCRIPTOR+descriptor);if(definePropertyFallback)try{return definePropertyFallback.call(Object,object,property,descriptor)}catch(exception){}if(owns(descriptor,\"value\"))if(supportsAccessors&&(lookupGetter(object,property)||lookupSetter(object,property))){var prototype=object.__proto__;object.__proto__=prototypeOfObject,delete object[property],object[property]=descriptor.value,object.__proto__=prototype}else object[property]=descriptor.value;else{if(!supportsAccessors)throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);owns(descriptor,\"get\")&&defineGetter(object,property,descriptor.get),owns(descriptor,\"set\")&&defineSetter(object,property,descriptor.set)}return object}}Object.defineProperties||(Object.defineProperties=function(object,properties){for(var property in properties)owns(properties,property)&&Object.defineProperty(object,property,properties[property]);return object}),Object.seal||(Object.seal=function(object){return object}),Object.freeze||(Object.freeze=function(object){return object});try{Object.freeze(function(){})}catch(exception){Object.freeze=function(freezeObject){return function(object){return\"function\"==typeof object?object:freezeObject(object)}}(Object.freeze)}if(Object.preventExtensions||(Object.preventExtensions=function(object){return object}),Object.isSealed||(Object.isSealed=function(){return!1}),Object.isFrozen||(Object.isFrozen=function(){return!1}),Object.isExtensible||(Object.isExtensible=function(object){if(Object(object)===object)throw new TypeError;for(var name=\"\";owns(object,name);)name+=\"?\";object[name]=!0;var returnValue=owns(object,name);return delete object[name],returnValue}),!Object.keys){var hasDontEnumBug=!0,dontEnums=[\"toString\",\"toLocaleString\",\"valueOf\",\"hasOwnProperty\",\"isPrototypeOf\",\"propertyIsEnumerable\",\"constructor\"],dontEnumsLength=dontEnums.length;for(var key in{toString:null})hasDontEnumBug=!1;Object.keys=function(object){if(\"object\"!=typeof object&&\"function\"!=typeof object||null===object)throw new TypeError(\"Object.keys called on a non-object\");var keys=[];for(var name in object)owns(object,name)&&keys.push(name);if(hasDontEnumBug)for(var i=0,ii=dontEnumsLength;ii>i;i++){var dontEnum=dontEnums[i];owns(object,dontEnum)&&keys.push(dontEnum)}return keys}}Date.now||(Date.now=function(){return(new Date).getTime()});var ws=\"\t\\n\u000b\\f\\r   ᠎             　\\u2028\\u2029﻿\";if(!String.prototype.trim||ws.trim()){ws=\"[\"+ws+\"]\";var trimBeginRegexp=RegExp(\"^\"+ws+ws+\"*\"),trimEndRegexp=RegExp(ws+ws+\"*$\");String.prototype.trim=function(){return(this+\"\").replace(trimBeginRegexp,\"\").replace(trimEndRegexp,\"\")}}var toObject=function(o){if(null==o)throw new TypeError(\"can't convert \"+o+\" to object\");return Object(o)}});";

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports.id = 'ace/mode/xml_worker';
	module.exports.src = "\"no use strict\";(function(window){function resolveModuleId(id,paths){for(var testPath=id,tail=\"\";testPath;){var alias=paths[testPath];if(\"string\"==typeof alias)return alias+tail;if(alias)return alias.location.replace(/\\/*$/,\"/\")+(tail||alias.main||alias.name);if(alias===!1)return\"\";var i=testPath.lastIndexOf(\"/\");if(-1===i)break;tail=testPath.substr(i)+tail,testPath=testPath.slice(0,i)}return id}if(!(void 0!==window.window&&window.document||window.acequire&&window.define)){window.console||(window.console=function(){var msgs=Array.prototype.slice.call(arguments,0);postMessage({type:\"log\",data:msgs})},window.console.error=window.console.warn=window.console.log=window.console.trace=window.console),window.window=window,window.ace=window,window.onerror=function(message,file,line,col,err){postMessage({type:\"error\",data:{message:message,data:err.data,file:file,line:line,col:col,stack:err.stack}})},window.normalizeModule=function(parentId,moduleName){if(-1!==moduleName.indexOf(\"!\")){var chunks=moduleName.split(\"!\");return window.normalizeModule(parentId,chunks[0])+\"!\"+window.normalizeModule(parentId,chunks[1])}if(\".\"==moduleName.charAt(0)){var base=parentId.split(\"/\").slice(0,-1).join(\"/\");for(moduleName=(base?base+\"/\":\"\")+moduleName;-1!==moduleName.indexOf(\".\")&&previous!=moduleName;){var previous=moduleName;moduleName=moduleName.replace(/^\\.\\//,\"\").replace(/\\/\\.\\//,\"/\").replace(/[^\\/]+\\/\\.\\.\\//,\"\")}}return moduleName},window.acequire=function acequire(parentId,id){if(id||(id=parentId,parentId=null),!id.charAt)throw Error(\"worker.js acequire() accepts only (parentId, id) as arguments\");id=window.normalizeModule(parentId,id);var module=window.acequire.modules[id];if(module)return module.initialized||(module.initialized=!0,module.exports=module.factory().exports),module.exports;if(!window.acequire.tlns)return console.log(\"unable to load \"+id);var path=resolveModuleId(id,window.acequire.tlns);return\".js\"!=path.slice(-3)&&(path+=\".js\"),window.acequire.id=id,window.acequire.modules[id]={},importScripts(path),window.acequire(parentId,id)},window.acequire.modules={},window.acequire.tlns={},window.define=function(id,deps,factory){if(2==arguments.length?(factory=deps,\"string\"!=typeof id&&(deps=id,id=window.acequire.id)):1==arguments.length&&(factory=id,deps=[],id=window.acequire.id),\"function\"!=typeof factory)return window.acequire.modules[id]={exports:factory,initialized:!0},void 0;deps.length||(deps=[\"require\",\"exports\",\"module\"]);var req=function(childId){return window.acequire(id,childId)};window.acequire.modules[id]={exports:{},factory:function(){var module=this,returnExports=factory.apply(this,deps.map(function(dep){switch(dep){case\"require\":return req;case\"exports\":return module.exports;case\"module\":return module;default:return req(dep)}}));return returnExports&&(module.exports=returnExports),module}}},window.define.amd={},acequire.tlns={},window.initBaseUrls=function(topLevelNamespaces){for(var i in topLevelNamespaces)acequire.tlns[i]=topLevelNamespaces[i]},window.initSender=function(){var EventEmitter=window.acequire(\"ace/lib/event_emitter\").EventEmitter,oop=window.acequire(\"ace/lib/oop\"),Sender=function(){};return function(){oop.implement(this,EventEmitter),this.callback=function(data,callbackId){postMessage({type:\"call\",id:callbackId,data:data})},this.emit=function(name,data){postMessage({type:\"event\",name:name,data:data})}}.call(Sender.prototype),new Sender};var main=window.main=null,sender=window.sender=null;window.onmessage=function(e){var msg=e.data;if(msg.event&&sender)sender._signal(msg.event,msg.data);else if(msg.command)if(main[msg.command])main[msg.command].apply(main,msg.args);else{if(!window[msg.command])throw Error(\"Unknown command:\"+msg.command);window[msg.command].apply(window,msg.args)}else if(msg.init){window.initBaseUrls(msg.tlns),acequire(\"ace/lib/es5-shim\"),sender=window.sender=window.initSender();var clazz=acequire(msg.module)[msg.classname];main=window.main=new clazz(sender)}}}})(this),ace.define(\"ace/lib/oop\",[\"require\",\"exports\",\"module\"],function(acequire,exports){\"use strict\";exports.inherits=function(ctor,superCtor){ctor.super_=superCtor,ctor.prototype=Object.create(superCtor.prototype,{constructor:{value:ctor,enumerable:!1,writable:!0,configurable:!0}})},exports.mixin=function(obj,mixin){for(var key in mixin)obj[key]=mixin[key];return obj},exports.implement=function(proto,mixin){exports.mixin(proto,mixin)}}),ace.define(\"ace/lib/lang\",[\"require\",\"exports\",\"module\"],function(acequire,exports){\"use strict\";exports.last=function(a){return a[a.length-1]},exports.stringReverse=function(string){return string.split(\"\").reverse().join(\"\")},exports.stringRepeat=function(string,count){for(var result=\"\";count>0;)1&count&&(result+=string),(count>>=1)&&(string+=string);return result};var trimBeginRegexp=/^\\s\\s*/,trimEndRegexp=/\\s\\s*$/;exports.stringTrimLeft=function(string){return string.replace(trimBeginRegexp,\"\")},exports.stringTrimRight=function(string){return string.replace(trimEndRegexp,\"\")},exports.copyObject=function(obj){var copy={};for(var key in obj)copy[key]=obj[key];return copy},exports.copyArray=function(array){for(var copy=[],i=0,l=array.length;l>i;i++)copy[i]=array[i]&&\"object\"==typeof array[i]?this.copyObject(array[i]):array[i];return copy},exports.deepCopy=function deepCopy(obj){if(\"object\"!=typeof obj||!obj)return obj;var copy;if(Array.isArray(obj)){copy=[];for(var key=0;obj.length>key;key++)copy[key]=deepCopy(obj[key]);return copy}var cons=obj.constructor;if(cons===RegExp)return obj;copy=cons();for(var key in obj)copy[key]=deepCopy(obj[key]);return copy},exports.arrayToMap=function(arr){for(var map={},i=0;arr.length>i;i++)map[arr[i]]=1;return map},exports.createMap=function(props){var map=Object.create(null);for(var i in props)map[i]=props[i];return map},exports.arrayRemove=function(array,value){for(var i=0;array.length>=i;i++)value===array[i]&&array.splice(i,1)},exports.escapeRegExp=function(str){return str.replace(/([.*+?^${}()|[\\]\\/\\\\])/g,\"\\\\$1\")},exports.escapeHTML=function(str){return str.replace(/&/g,\"&#38;\").replace(/\"/g,\"&#34;\").replace(/'/g,\"&#39;\").replace(/</g,\"&#60;\")},exports.getMatchOffsets=function(string,regExp){var matches=[];return string.replace(regExp,function(str){matches.push({offset:arguments[arguments.length-2],length:str.length})}),matches},exports.deferredCall=function(fcn){var timer=null,callback=function(){timer=null,fcn()},deferred=function(timeout){return deferred.cancel(),timer=setTimeout(callback,timeout||0),deferred};return deferred.schedule=deferred,deferred.call=function(){return this.cancel(),fcn(),deferred},deferred.cancel=function(){return clearTimeout(timer),timer=null,deferred},deferred.isPending=function(){return timer},deferred},exports.delayedCall=function(fcn,defaultTimeout){var timer=null,callback=function(){timer=null,fcn()},_self=function(timeout){null==timer&&(timer=setTimeout(callback,timeout||defaultTimeout))};return _self.delay=function(timeout){timer&&clearTimeout(timer),timer=setTimeout(callback,timeout||defaultTimeout)},_self.schedule=_self,_self.call=function(){this.cancel(),fcn()},_self.cancel=function(){timer&&clearTimeout(timer),timer=null},_self.isPending=function(){return timer},_self}}),ace.define(\"ace/range\",[\"require\",\"exports\",\"module\"],function(acequire,exports){\"use strict\";var comparePoints=function(p1,p2){return p1.row-p2.row||p1.column-p2.column},Range=function(startRow,startColumn,endRow,endColumn){this.start={row:startRow,column:startColumn},this.end={row:endRow,column:endColumn}};(function(){this.isEqual=function(range){return this.start.row===range.start.row&&this.end.row===range.end.row&&this.start.column===range.start.column&&this.end.column===range.end.column},this.toString=function(){return\"Range: [\"+this.start.row+\"/\"+this.start.column+\"] -> [\"+this.end.row+\"/\"+this.end.column+\"]\"},this.contains=function(row,column){return 0==this.compare(row,column)},this.compareRange=function(range){var cmp,end=range.end,start=range.start;return cmp=this.compare(end.row,end.column),1==cmp?(cmp=this.compare(start.row,start.column),1==cmp?2:0==cmp?1:0):-1==cmp?-2:(cmp=this.compare(start.row,start.column),-1==cmp?-1:1==cmp?42:0)},this.comparePoint=function(p){return this.compare(p.row,p.column)},this.containsRange=function(range){return 0==this.comparePoint(range.start)&&0==this.comparePoint(range.end)},this.intersects=function(range){var cmp=this.compareRange(range);return-1==cmp||0==cmp||1==cmp},this.isEnd=function(row,column){return this.end.row==row&&this.end.column==column},this.isStart=function(row,column){return this.start.row==row&&this.start.column==column},this.setStart=function(row,column){\"object\"==typeof row?(this.start.column=row.column,this.start.row=row.row):(this.start.row=row,this.start.column=column)},this.setEnd=function(row,column){\"object\"==typeof row?(this.end.column=row.column,this.end.row=row.row):(this.end.row=row,this.end.column=column)},this.inside=function(row,column){return 0==this.compare(row,column)?this.isEnd(row,column)||this.isStart(row,column)?!1:!0:!1},this.insideStart=function(row,column){return 0==this.compare(row,column)?this.isEnd(row,column)?!1:!0:!1},this.insideEnd=function(row,column){return 0==this.compare(row,column)?this.isStart(row,column)?!1:!0:!1},this.compare=function(row,column){return this.isMultiLine()||row!==this.start.row?this.start.row>row?-1:row>this.end.row?1:this.start.row===row?column>=this.start.column?0:-1:this.end.row===row?this.end.column>=column?0:1:0:this.start.column>column?-1:column>this.end.column?1:0},this.compareStart=function(row,column){return this.start.row==row&&this.start.column==column?-1:this.compare(row,column)},this.compareEnd=function(row,column){return this.end.row==row&&this.end.column==column?1:this.compare(row,column)},this.compareInside=function(row,column){return this.end.row==row&&this.end.column==column?1:this.start.row==row&&this.start.column==column?-1:this.compare(row,column)},this.clipRows=function(firstRow,lastRow){if(this.end.row>lastRow)var end={row:lastRow+1,column:0};else if(firstRow>this.end.row)var end={row:firstRow,column:0};if(this.start.row>lastRow)var start={row:lastRow+1,column:0};else if(firstRow>this.start.row)var start={row:firstRow,column:0};return Range.fromPoints(start||this.start,end||this.end)},this.extend=function(row,column){var cmp=this.compare(row,column);if(0==cmp)return this;if(-1==cmp)var start={row:row,column:column};else var end={row:row,column:column};return Range.fromPoints(start||this.start,end||this.end)},this.isEmpty=function(){return this.start.row===this.end.row&&this.start.column===this.end.column},this.isMultiLine=function(){return this.start.row!==this.end.row},this.clone=function(){return Range.fromPoints(this.start,this.end)},this.collapseRows=function(){return 0==this.end.column?new Range(this.start.row,0,Math.max(this.start.row,this.end.row-1),0):new Range(this.start.row,0,this.end.row,0)},this.toScreenRange=function(session){var screenPosStart=session.documentToScreenPosition(this.start),screenPosEnd=session.documentToScreenPosition(this.end);return new Range(screenPosStart.row,screenPosStart.column,screenPosEnd.row,screenPosEnd.column)},this.moveBy=function(row,column){this.start.row+=row,this.start.column+=column,this.end.row+=row,this.end.column+=column}}).call(Range.prototype),Range.fromPoints=function(start,end){return new Range(start.row,start.column,end.row,end.column)},Range.comparePoints=comparePoints,Range.comparePoints=function(p1,p2){return p1.row-p2.row||p1.column-p2.column},exports.Range=Range}),ace.define(\"ace/apply_delta\",[\"require\",\"exports\",\"module\"],function(acequire,exports){\"use strict\";exports.applyDelta=function(docLines,delta){var row=delta.start.row,startColumn=delta.start.column,line=docLines[row]||\"\";switch(delta.action){case\"insert\":var lines=delta.lines;if(1===lines.length)docLines[row]=line.substring(0,startColumn)+delta.lines[0]+line.substring(startColumn);else{var args=[row,1].concat(delta.lines);docLines.splice.apply(docLines,args),docLines[row]=line.substring(0,startColumn)+docLines[row],docLines[row+delta.lines.length-1]+=line.substring(startColumn)}break;case\"remove\":var endColumn=delta.end.column,endRow=delta.end.row;row===endRow?docLines[row]=line.substring(0,startColumn)+line.substring(endColumn):docLines.splice(row,endRow-row+1,line.substring(0,startColumn)+docLines[endRow].substring(endColumn))}}}),ace.define(\"ace/lib/event_emitter\",[\"require\",\"exports\",\"module\"],function(acequire,exports){\"use strict\";var EventEmitter={},stopPropagation=function(){this.propagationStopped=!0},preventDefault=function(){this.defaultPrevented=!0};EventEmitter._emit=EventEmitter._dispatchEvent=function(eventName,e){this._eventRegistry||(this._eventRegistry={}),this._defaultHandlers||(this._defaultHandlers={});var listeners=this._eventRegistry[eventName]||[],defaultHandler=this._defaultHandlers[eventName];if(listeners.length||defaultHandler){\"object\"==typeof e&&e||(e={}),e.type||(e.type=eventName),e.stopPropagation||(e.stopPropagation=stopPropagation),e.preventDefault||(e.preventDefault=preventDefault),listeners=listeners.slice();for(var i=0;listeners.length>i&&(listeners[i](e,this),!e.propagationStopped);i++);return defaultHandler&&!e.defaultPrevented?defaultHandler(e,this):void 0}},EventEmitter._signal=function(eventName,e){var listeners=(this._eventRegistry||{})[eventName];if(listeners){listeners=listeners.slice();for(var i=0;listeners.length>i;i++)listeners[i](e,this)}},EventEmitter.once=function(eventName,callback){var _self=this;callback&&this.addEventListener(eventName,function newCallback(){_self.removeEventListener(eventName,newCallback),callback.apply(null,arguments)})},EventEmitter.setDefaultHandler=function(eventName,callback){var handlers=this._defaultHandlers;if(handlers||(handlers=this._defaultHandlers={_disabled_:{}}),handlers[eventName]){var old=handlers[eventName],disabled=handlers._disabled_[eventName];disabled||(handlers._disabled_[eventName]=disabled=[]),disabled.push(old);var i=disabled.indexOf(callback);-1!=i&&disabled.splice(i,1)}handlers[eventName]=callback},EventEmitter.removeDefaultHandler=function(eventName,callback){var handlers=this._defaultHandlers;if(handlers){var disabled=handlers._disabled_[eventName];if(handlers[eventName]==callback)handlers[eventName],disabled&&this.setDefaultHandler(eventName,disabled.pop());else if(disabled){var i=disabled.indexOf(callback);-1!=i&&disabled.splice(i,1)}}},EventEmitter.on=EventEmitter.addEventListener=function(eventName,callback,capturing){this._eventRegistry=this._eventRegistry||{};var listeners=this._eventRegistry[eventName];return listeners||(listeners=this._eventRegistry[eventName]=[]),-1==listeners.indexOf(callback)&&listeners[capturing?\"unshift\":\"push\"](callback),callback},EventEmitter.off=EventEmitter.removeListener=EventEmitter.removeEventListener=function(eventName,callback){this._eventRegistry=this._eventRegistry||{};var listeners=this._eventRegistry[eventName];if(listeners){var index=listeners.indexOf(callback);-1!==index&&listeners.splice(index,1)}},EventEmitter.removeAllListeners=function(eventName){this._eventRegistry&&(this._eventRegistry[eventName]=[])},exports.EventEmitter=EventEmitter}),ace.define(\"ace/anchor\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/lib/event_emitter\"],function(acequire,exports){\"use strict\";var oop=acequire(\"./lib/oop\"),EventEmitter=acequire(\"./lib/event_emitter\").EventEmitter,Anchor=exports.Anchor=function(doc,row,column){this.$onChange=this.onChange.bind(this),this.attach(doc),column===void 0?this.setPosition(row.row,row.column):this.setPosition(row,column)};(function(){function $pointsInOrder(point1,point2,equalPointsInOrder){var bColIsAfter=equalPointsInOrder?point1.column<=point2.column:point1.column<point2.column;return point1.row<point2.row||point1.row==point2.row&&bColIsAfter}function $getTransformedPoint(delta,point,moveIfEqual){var deltaIsInsert=\"insert\"==delta.action,deltaRowShift=(deltaIsInsert?1:-1)*(delta.end.row-delta.start.row),deltaColShift=(deltaIsInsert?1:-1)*(delta.end.column-delta.start.column),deltaStart=delta.start,deltaEnd=deltaIsInsert?deltaStart:delta.end;return $pointsInOrder(point,deltaStart,moveIfEqual)?{row:point.row,column:point.column}:$pointsInOrder(deltaEnd,point,!moveIfEqual)?{row:point.row+deltaRowShift,column:point.column+(point.row==deltaEnd.row?deltaColShift:0)}:{row:deltaStart.row,column:deltaStart.column}}oop.implement(this,EventEmitter),this.getPosition=function(){return this.$clipPositionToDocument(this.row,this.column)},this.getDocument=function(){return this.document},this.$insertRight=!1,this.onChange=function(delta){if(!(delta.start.row==delta.end.row&&delta.start.row!=this.row||delta.start.row>this.row)){var point=$getTransformedPoint(delta,{row:this.row,column:this.column},this.$insertRight);this.setPosition(point.row,point.column,!0)}},this.setPosition=function(row,column,noClip){var pos;if(pos=noClip?{row:row,column:column}:this.$clipPositionToDocument(row,column),this.row!=pos.row||this.column!=pos.column){var old={row:this.row,column:this.column};this.row=pos.row,this.column=pos.column,this._signal(\"change\",{old:old,value:pos})}},this.detach=function(){this.document.removeEventListener(\"change\",this.$onChange)},this.attach=function(doc){this.document=doc||this.document,this.document.on(\"change\",this.$onChange)},this.$clipPositionToDocument=function(row,column){var pos={};return row>=this.document.getLength()?(pos.row=Math.max(0,this.document.getLength()-1),pos.column=this.document.getLine(pos.row).length):0>row?(pos.row=0,pos.column=0):(pos.row=row,pos.column=Math.min(this.document.getLine(pos.row).length,Math.max(0,column))),0>column&&(pos.column=0),pos}}).call(Anchor.prototype)}),ace.define(\"ace/document\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/apply_delta\",\"ace/lib/event_emitter\",\"ace/range\",\"ace/anchor\"],function(acequire,exports){\"use strict\";var oop=acequire(\"./lib/oop\"),applyDelta=acequire(\"./apply_delta\").applyDelta,EventEmitter=acequire(\"./lib/event_emitter\").EventEmitter,Range=acequire(\"./range\").Range,Anchor=acequire(\"./anchor\").Anchor,Document=function(textOrLines){this.$lines=[\"\"],0===textOrLines.length?this.$lines=[\"\"]:Array.isArray(textOrLines)?this.insertMergedLines({row:0,column:0},textOrLines):this.insert({row:0,column:0},textOrLines)};(function(){oop.implement(this,EventEmitter),this.setValue=function(text){var len=this.getLength()-1;this.remove(new Range(0,0,len,this.getLine(len).length)),this.insert({row:0,column:0},text)},this.getValue=function(){return this.getAllLines().join(this.getNewLineCharacter())},this.createAnchor=function(row,column){return new Anchor(this,row,column)},this.$split=0===\"aaa\".split(/a/).length?function(text){return text.replace(/\\r\\n|\\r/g,\"\\n\").split(\"\\n\")}:function(text){return text.split(/\\r\\n|\\r|\\n/)},this.$detectNewLine=function(text){var match=text.match(/^.*?(\\r\\n|\\r|\\n)/m);this.$autoNewLine=match?match[1]:\"\\n\",this._signal(\"changeNewLineMode\")},this.getNewLineCharacter=function(){switch(this.$newLineMode){case\"windows\":return\"\\r\\n\";case\"unix\":return\"\\n\";default:return this.$autoNewLine||\"\\n\"}},this.$autoNewLine=\"\",this.$newLineMode=\"auto\",this.setNewLineMode=function(newLineMode){this.$newLineMode!==newLineMode&&(this.$newLineMode=newLineMode,this._signal(\"changeNewLineMode\"))},this.getNewLineMode=function(){return this.$newLineMode},this.isNewLine=function(text){return\"\\r\\n\"==text||\"\\r\"==text||\"\\n\"==text},this.getLine=function(row){return this.$lines[row]||\"\"},this.getLines=function(firstRow,lastRow){return this.$lines.slice(firstRow,lastRow+1)},this.getAllLines=function(){return this.getLines(0,this.getLength())},this.getLength=function(){return this.$lines.length},this.getTextRange=function(range){return this.getLinesForRange(range).join(this.getNewLineCharacter())},this.getLinesForRange=function(range){var lines;if(range.start.row===range.end.row)lines=[this.getLine(range.start.row).substring(range.start.column,range.end.column)];else{lines=this.getLines(range.start.row,range.end.row),lines[0]=(lines[0]||\"\").substring(range.start.column);var l=lines.length-1;range.end.row-range.start.row==l&&(lines[l]=lines[l].substring(0,range.end.column))}return lines},this.insertLines=function(row,lines){return console.warn(\"Use of document.insertLines is deprecated. Use the insertFullLines method instead.\"),this.insertFullLines(row,lines)},this.removeLines=function(firstRow,lastRow){return console.warn(\"Use of document.removeLines is deprecated. Use the removeFullLines method instead.\"),this.removeFullLines(firstRow,lastRow)},this.insertNewLine=function(position){return console.warn(\"Use of document.insertNewLine is deprecated. Use insertMergedLines(position, ['', '']) instead.\"),this.insertMergedLines(position,[\"\",\"\"])},this.insert=function(position,text){return 1>=this.getLength()&&this.$detectNewLine(text),this.insertMergedLines(position,this.$split(text))},this.insertInLine=function(position,text){var start=this.clippedPos(position.row,position.column),end=this.pos(position.row,position.column+text.length);return this.applyDelta({start:start,end:end,action:\"insert\",lines:[text]},!0),this.clonePos(end)},this.clippedPos=function(row,column){var length=this.getLength();void 0===row?row=length:0>row?row=0:row>=length&&(row=length-1,column=void 0);var line=this.getLine(row);return void 0==column&&(column=line.length),column=Math.min(Math.max(column,0),line.length),{row:row,column:column}},this.clonePos=function(pos){return{row:pos.row,column:pos.column}},this.pos=function(row,column){return{row:row,column:column}},this.$clipPosition=function(position){var length=this.getLength();return position.row>=length?(position.row=Math.max(0,length-1),position.column=this.getLine(length-1).length):(position.row=Math.max(0,position.row),position.column=Math.min(Math.max(position.column,0),this.getLine(position.row).length)),position},this.insertFullLines=function(row,lines){row=Math.min(Math.max(row,0),this.getLength());var column=0;this.getLength()>row?(lines=lines.concat([\"\"]),column=0):(lines=[\"\"].concat(lines),row--,column=this.$lines[row].length),this.insertMergedLines({row:row,column:column},lines)},this.insertMergedLines=function(position,lines){var start=this.clippedPos(position.row,position.column),end={row:start.row+lines.length-1,column:(1==lines.length?start.column:0)+lines[lines.length-1].length};return this.applyDelta({start:start,end:end,action:\"insert\",lines:lines}),this.clonePos(end)},this.remove=function(range){var start=this.clippedPos(range.start.row,range.start.column),end=this.clippedPos(range.end.row,range.end.column);return this.applyDelta({start:start,end:end,action:\"remove\",lines:this.getLinesForRange({start:start,end:end})}),this.clonePos(start)},this.removeInLine=function(row,startColumn,endColumn){var start=this.clippedPos(row,startColumn),end=this.clippedPos(row,endColumn);return this.applyDelta({start:start,end:end,action:\"remove\",lines:this.getLinesForRange({start:start,end:end})},!0),this.clonePos(start)},this.removeFullLines=function(firstRow,lastRow){firstRow=Math.min(Math.max(0,firstRow),this.getLength()-1),lastRow=Math.min(Math.max(0,lastRow),this.getLength()-1);var deleteFirstNewLine=lastRow==this.getLength()-1&&firstRow>0,deleteLastNewLine=this.getLength()-1>lastRow,startRow=deleteFirstNewLine?firstRow-1:firstRow,startCol=deleteFirstNewLine?this.getLine(startRow).length:0,endRow=deleteLastNewLine?lastRow+1:lastRow,endCol=deleteLastNewLine?0:this.getLine(endRow).length,range=new Range(startRow,startCol,endRow,endCol),deletedLines=this.$lines.slice(firstRow,lastRow+1);return this.applyDelta({start:range.start,end:range.end,action:\"remove\",lines:this.getLinesForRange(range)}),deletedLines},this.removeNewLine=function(row){this.getLength()-1>row&&row>=0&&this.applyDelta({start:this.pos(row,this.getLine(row).length),end:this.pos(row+1,0),action:\"remove\",lines:[\"\",\"\"]})},this.replace=function(range,text){if(range instanceof Range||(range=Range.fromPoints(range.start,range.end)),0===text.length&&range.isEmpty())return range.start;if(text==this.getTextRange(range))return range.end;this.remove(range);var end;return end=text?this.insert(range.start,text):range.start},this.applyDeltas=function(deltas){for(var i=0;deltas.length>i;i++)this.applyDelta(deltas[i])},this.revertDeltas=function(deltas){for(var i=deltas.length-1;i>=0;i--)this.revertDelta(deltas[i])},this.applyDelta=function(delta,doNotValidate){var isInsert=\"insert\"==delta.action;(isInsert?1>=delta.lines.length&&!delta.lines[0]:!Range.comparePoints(delta.start,delta.end))||(isInsert&&delta.lines.length>2e4&&this.$splitAndapplyLargeDelta(delta,2e4),applyDelta(this.$lines,delta,doNotValidate),this._signal(\"change\",delta))},this.$splitAndapplyLargeDelta=function(delta,MAX){for(var lines=delta.lines,l=lines.length,row=delta.start.row,column=delta.start.column,from=0,to=0;;){from=to,to+=MAX-1;var chunk=lines.slice(from,to);if(to>l){delta.lines=chunk,delta.start.row=row+from,delta.start.column=column;break}chunk.push(\"\"),this.applyDelta({start:this.pos(row+from,column),end:this.pos(row+to,column=0),action:delta.action,lines:chunk},!0)}},this.revertDelta=function(delta){this.applyDelta({start:this.clonePos(delta.start),end:this.clonePos(delta.end),action:\"insert\"==delta.action?\"remove\":\"insert\",lines:delta.lines.slice()})},this.indexToPosition=function(index,startRow){for(var lines=this.$lines||this.getAllLines(),newlineLength=this.getNewLineCharacter().length,i=startRow||0,l=lines.length;l>i;i++)if(index-=lines[i].length+newlineLength,0>index)return{row:i,column:index+lines[i].length+newlineLength};return{row:l-1,column:lines[l-1].length}},this.positionToIndex=function(pos,startRow){for(var lines=this.$lines||this.getAllLines(),newlineLength=this.getNewLineCharacter().length,index=0,row=Math.min(pos.row,lines.length),i=startRow||0;row>i;++i)index+=lines[i].length+newlineLength;return index+pos.column}}).call(Document.prototype),exports.Document=Document}),ace.define(\"ace/worker/mirror\",[\"require\",\"exports\",\"module\",\"ace/range\",\"ace/document\",\"ace/lib/lang\"],function(acequire,exports){\"use strict\";acequire(\"../range\").Range;var Document=acequire(\"../document\").Document,lang=acequire(\"../lib/lang\"),Mirror=exports.Mirror=function(sender){this.sender=sender;var doc=this.doc=new Document(\"\"),deferredUpdate=this.deferredUpdate=lang.delayedCall(this.onUpdate.bind(this)),_self=this;sender.on(\"change\",function(e){var data=e.data;if(data[0].start)doc.applyDeltas(data);else for(var i=0;data.length>i;i+=2){if(Array.isArray(data[i+1]))var d={action:\"insert\",start:data[i],lines:data[i+1]};else var d={action:\"remove\",start:data[i],end:data[i+1]};doc.applyDelta(d,!0)}return _self.$timeout?deferredUpdate.schedule(_self.$timeout):(_self.onUpdate(),void 0)})};(function(){this.$timeout=500,this.setTimeout=function(timeout){this.$timeout=timeout},this.setValue=function(value){this.doc.setValue(value),this.deferredUpdate.schedule(this.$timeout)},this.getValue=function(callbackId){this.sender.callback(this.doc.getValue(),callbackId)},this.onUpdate=function(){},this.isPending=function(){return this.deferredUpdate.isPending()}}).call(Mirror.prototype)}),ace.define(\"ace/mode/xml/sax\",[\"require\",\"exports\",\"module\"],function(){function XMLReader(){}function parse(source,defaultNSMapCopy,entityMap,domBuilder,errorHandler){function fixedFromCharCode(code){if(code>65535){code-=65536;var surrogate1=55296+(code>>10),surrogate2=56320+(1023&code);return String.fromCharCode(surrogate1,surrogate2)}return String.fromCharCode(code)}function entityReplacer(a){var k=a.slice(1,-1);return k in entityMap?entityMap[k]:\"#\"===k.charAt(0)?fixedFromCharCode(parseInt(k.substr(1).replace(\"x\",\"0x\"))):(errorHandler.error(\"entity not found:\"+a),a)}function appendText(end){var xt=source.substring(start,end).replace(/&#?\\w+;/g,entityReplacer);locator&&position(start),domBuilder.characters(xt,0,end-start),start=end}function position(start,m){for(;start>=endPos&&(m=linePattern.exec(source));)startPos=m.index,endPos=startPos+m[0].length,locator.lineNumber++;locator.columnNumber=start-startPos+1}for(var startPos=0,endPos=0,linePattern=/.+(?:\\r\\n?|\\n)|.*$/g,locator=domBuilder.locator,parseStack=[{currentNSMap:defaultNSMapCopy}],closeMap={},start=0;;){var i=source.indexOf(\"<\",start);if(0>i){if(!source.substr(start).match(/^\\s*$/)){var doc=domBuilder.document,text=doc.createTextNode(source.substr(start));doc.appendChild(text),domBuilder.currentElement=text}return}switch(i>start&&appendText(i),source.charAt(i+1)){case\"/\":var config,end=source.indexOf(\">\",i+3),tagName=source.substring(i+2,end);if(!(parseStack.length>1)){errorHandler.fatalError(\"end tag name not found for: \"+tagName);break}config=parseStack.pop();var localNSMap=config.localNSMap;if(config.tagName!=tagName&&errorHandler.fatalError(\"end tag name: \"+tagName+\" does not match the current start tagName: \"+config.tagName),domBuilder.endElement(config.uri,config.localName,tagName),localNSMap)for(var prefix in localNSMap)domBuilder.endPrefixMapping(prefix);end++;break;case\"?\":locator&&position(i),end=parseInstruction(source,i,domBuilder);break;case\"!\":locator&&position(i),end=parseDCC(source,i,domBuilder,errorHandler);break;default:try{locator&&position(i);var el=new ElementAttributes,end=parseElementStartPart(source,i,el,entityReplacer,errorHandler),len=el.length;if(len&&locator){for(var backup=copyLocator(locator,{}),i=0;len>i;i++){var a=el[i];position(a.offset),a.offset=copyLocator(locator,{})}copyLocator(backup,locator)}!el.closed&&fixSelfClosed(source,end,el.tagName,closeMap)&&(el.closed=!0,entityMap.nbsp||errorHandler.warning(\"unclosed xml attribute\")),appendElement(el,domBuilder,parseStack),\"http://www.w3.org/1999/xhtml\"!==el.uri||el.closed?end++:end=parseHtmlSpecialContent(source,end,el.tagName,entityReplacer,domBuilder)}catch(e){errorHandler.error(\"element parse error: \"+e),end=-1}}0>end?appendText(i+1):start=end}}function copyLocator(f,t){return t.lineNumber=f.lineNumber,t.columnNumber=f.columnNumber,t}function parseElementStartPart(source,start,el,entityReplacer,errorHandler){for(var attrName,value,p=++start,s=S_TAG;;){var c=source.charAt(p);switch(c){case\"=\":if(s===S_ATTR)attrName=source.slice(start,p),s=S_EQ;else{if(s!==S_ATTR_S)throw Error(\"attribute equal must after attrName\");s=S_EQ}break;case\"'\":case'\"':if(s===S_EQ){if(start=p+1,p=source.indexOf(c,start),!(p>0))throw Error(\"attribute value no end '\"+c+\"' match\");value=source.slice(start,p).replace(/&#?\\w+;/g,entityReplacer),el.add(attrName,value,start-1),s=S_E}else{if(s!=S_V)throw Error('attribute value must after \"=\"');value=source.slice(start,p).replace(/&#?\\w+;/g,entityReplacer),el.add(attrName,value,start),errorHandler.warning('attribute \"'+attrName+'\" missed start quot('+c+\")!!\"),start=p+1,s=S_E}break;case\"/\":switch(s){case S_TAG:el.setTagName(source.slice(start,p));case S_E:case S_S:case S_C:s=S_C,el.closed=!0;case S_V:case S_ATTR:case S_ATTR_S:break;default:throw Error(\"attribute invalid close char('/')\")}break;case\"\":errorHandler.error(\"unexpected end of input\");case\">\":switch(s){case S_TAG:el.setTagName(source.slice(start,p));case S_E:case S_S:case S_C:break;case S_V:case S_ATTR:value=source.slice(start,p),\"/\"===value.slice(-1)&&(el.closed=!0,value=value.slice(0,-1));case S_ATTR_S:s===S_ATTR_S&&(value=attrName),s==S_V?(errorHandler.warning('attribute \"'+value+'\" missed quot(\")!!'),el.add(attrName,value.replace(/&#?\\w+;/g,entityReplacer),start)):(errorHandler.warning('attribute \"'+value+'\" missed value!! \"'+value+'\" instead!!'),el.add(value,value,start));break;case S_EQ:throw Error(\"attribute value missed!!\")}return p;case\"\":c=\" \";default:if(\" \">=c)switch(s){case S_TAG:el.setTagName(source.slice(start,p)),s=S_S;break;case S_ATTR:attrName=source.slice(start,p),s=S_ATTR_S;break;case S_V:var value=source.slice(start,p).replace(/&#?\\w+;/g,entityReplacer);errorHandler.warning('attribute \"'+value+'\" missed quot(\")!!'),el.add(attrName,value,start);case S_E:s=S_S}else switch(s){case S_ATTR_S:errorHandler.warning('attribute \"'+attrName+'\" missed value!! \"'+attrName+'\" instead!!'),el.add(attrName,attrName,start),start=p,s=S_ATTR;\nbreak;case S_E:errorHandler.warning('attribute space is acequired\"'+attrName+'\"!!');case S_S:s=S_ATTR,start=p;break;case S_EQ:s=S_V,start=p;break;case S_C:throw Error(\"elements closed character '/' and '>' must be connected to\")}}p++}}function appendElement(el,domBuilder,parseStack){for(var tagName=el.tagName,localNSMap=null,currentNSMap=parseStack[parseStack.length-1].currentNSMap,i=el.length;i--;){var a=el[i],qName=a.qName,value=a.value,nsp=qName.indexOf(\":\");if(nsp>0)var prefix=a.prefix=qName.slice(0,nsp),localName=qName.slice(nsp+1),nsPrefix=\"xmlns\"===prefix&&localName;else localName=qName,prefix=null,nsPrefix=\"xmlns\"===qName&&\"\";a.localName=localName,nsPrefix!==!1&&(null==localNSMap&&(localNSMap={},_copy(currentNSMap,currentNSMap={})),currentNSMap[nsPrefix]=localNSMap[nsPrefix]=value,a.uri=\"http://www.w3.org/2000/xmlns/\",domBuilder.startPrefixMapping(nsPrefix,value))}for(var i=el.length;i--;){a=el[i];var prefix=a.prefix;prefix&&(\"xml\"===prefix&&(a.uri=\"http://www.w3.org/XML/1998/namespace\"),\"xmlns\"!==prefix&&(a.uri=currentNSMap[prefix]))}var nsp=tagName.indexOf(\":\");nsp>0?(prefix=el.prefix=tagName.slice(0,nsp),localName=el.localName=tagName.slice(nsp+1)):(prefix=null,localName=el.localName=tagName);var ns=el.uri=currentNSMap[prefix||\"\"];if(domBuilder.startElement(ns,localName,tagName,el),el.closed){if(domBuilder.endElement(ns,localName,tagName),localNSMap)for(prefix in localNSMap)domBuilder.endPrefixMapping(prefix)}else el.currentNSMap=currentNSMap,el.localNSMap=localNSMap,parseStack.push(el)}function parseHtmlSpecialContent(source,elStartEnd,tagName,entityReplacer,domBuilder){if(/^(?:script|textarea)$/i.test(tagName)){var elEndStart=source.indexOf(\"</\"+tagName+\">\",elStartEnd),text=source.substring(elStartEnd+1,elEndStart);if(/[&<]/.test(text))return/^script$/i.test(tagName)?(domBuilder.characters(text,0,text.length),elEndStart):(text=text.replace(/&#?\\w+;/g,entityReplacer),domBuilder.characters(text,0,text.length),elEndStart)}return elStartEnd+1}function fixSelfClosed(source,elStartEnd,tagName,closeMap){var pos=closeMap[tagName];return null==pos&&(pos=closeMap[tagName]=source.lastIndexOf(\"</\"+tagName+\">\")),elStartEnd>pos}function _copy(source,target){for(var n in source)target[n]=source[n]}function parseDCC(source,start,domBuilder,errorHandler){var next=source.charAt(start+2);switch(next){case\"-\":if(\"-\"===source.charAt(start+3)){var end=source.indexOf(\"-->\",start+4);return end>start?(domBuilder.comment(source,start+4,end-start-4),end+3):(errorHandler.error(\"Unclosed comment\"),-1)}return-1;default:if(\"CDATA[\"==source.substr(start+3,6)){var end=source.indexOf(\"]]>\",start+9);return domBuilder.startCDATA(),domBuilder.characters(source,start+9,end-start-9),domBuilder.endCDATA(),end+3}var matchs=split(source,start),len=matchs.length;if(len>1&&/!doctype/i.test(matchs[0][0])){var name=matchs[1][0],pubid=len>3&&/^public$/i.test(matchs[2][0])&&matchs[3][0],sysid=len>4&&matchs[4][0],lastMatch=matchs[len-1];return domBuilder.startDTD(name,pubid&&pubid.replace(/^(['\"])(.*?)\\1$/,\"$2\"),sysid&&sysid.replace(/^(['\"])(.*?)\\1$/,\"$2\")),domBuilder.endDTD(),lastMatch.index+lastMatch[0].length}}return-1}function parseInstruction(source,start,domBuilder){var end=source.indexOf(\"?>\",start);if(end){var match=source.substring(start,end).match(/^<\\?(\\S*)\\s*([\\s\\S]*?)\\s*$/);return match?(match[0].length,domBuilder.processingInstruction(match[1],match[2]),end+2):-1}return-1}function ElementAttributes(){}function _set_proto_(thiz,parent){return thiz.__proto__=parent,thiz}function split(source,start){var match,buf=[],reg=/'[^']+'|\"[^\"]+\"|[^\\s<>\\/=]+=?|(\\/?\\s*>|<)/g;for(reg.lastIndex=start,reg.exec(source);match=reg.exec(source);)if(buf.push(match),match[1])return buf}var nameStartChar=/[A-Z_a-z\\xC0-\\xD6\\xD8-\\xF6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD]/,nameChar=RegExp(\"[\\\\-\\\\.0-9\"+nameStartChar.source.slice(1,-1)+\"·̀-ͯ\\\\ux203F-⁀]\"),tagNamePattern=RegExp(\"^\"+nameStartChar.source+nameChar.source+\"*(?::\"+nameStartChar.source+nameChar.source+\"*)?$\"),S_TAG=0,S_ATTR=1,S_ATTR_S=2,S_EQ=3,S_V=4,S_E=5,S_S=6,S_C=7;return XMLReader.prototype={parse:function(source,defaultNSMap,entityMap){var domBuilder=this.domBuilder;domBuilder.startDocument(),_copy(defaultNSMap,defaultNSMap={}),parse(source,defaultNSMap,entityMap,domBuilder,this.errorHandler),domBuilder.endDocument()}},ElementAttributes.prototype={setTagName:function(tagName){if(!tagNamePattern.test(tagName))throw Error(\"invalid tagName:\"+tagName);this.tagName=tagName},add:function(qName,value,offset){if(!tagNamePattern.test(qName))throw Error(\"invalid attribute:\"+qName);this[this.length++]={qName:qName,value:value,offset:offset}},length:0,getLocalName:function(i){return this[i].localName},getOffset:function(i){return this[i].offset},getQName:function(i){return this[i].qName},getURI:function(i){return this[i].uri},getValue:function(i){return this[i].value}},_set_proto_({},_set_proto_.prototype)instanceof _set_proto_||(_set_proto_=function(thiz,parent){function p(){}p.prototype=parent,p=new p;for(parent in thiz)p[parent]=thiz[parent];return p}),XMLReader}),ace.define(\"ace/mode/xml/dom\",[\"require\",\"exports\",\"module\"],function(){function copy(src,dest){for(var p in src)dest[p]=src[p]}function _extends(Class,Super){function t(){}var pt=Class.prototype;if(Object.create){var ppt=Object.create(Super.prototype);pt.__proto__=ppt}pt instanceof Super||(t.prototype=Super.prototype,t=new t,copy(pt,t),Class.prototype=pt=t),pt.constructor!=Class&&(\"function\"!=typeof Class&&console.error(\"unknow Class:\"+Class),pt.constructor=Class)}function DOMException(code,message){if(message instanceof Error)var error=message;else error=this,Error.call(this,ExceptionMessage[code]),this.message=ExceptionMessage[code],Error.captureStackTrace&&Error.captureStackTrace(this,DOMException);return error.code=code,message&&(this.message=this.message+\": \"+message),error}function NodeList(){}function LiveNodeList(node,refresh){this._node=node,this._refresh=refresh,_updateLiveList(this)}function _updateLiveList(list){var inc=list._node._inc||list._node.ownerDocument._inc;if(list._inc!=inc){var ls=list._refresh(list._node);__set__(list,\"length\",ls.length),copy(ls,list),list._inc=inc}}function NamedNodeMap(){}function _findNodeIndex(list,node){for(var i=list.length;i--;)if(list[i]===node)return i}function _addNamedNode(el,list,newAttr,oldAttr){if(oldAttr?list[_findNodeIndex(list,oldAttr)]=newAttr:list[list.length++]=newAttr,el){newAttr.ownerElement=el;var doc=el.ownerDocument;doc&&(oldAttr&&_onRemoveAttribute(doc,el,oldAttr),_onAddAttribute(doc,el,newAttr))}}function _removeNamedNode(el,list,attr){var i=_findNodeIndex(list,attr);if(!(i>=0))throw DOMException(NOT_FOUND_ERR,Error());for(var lastIndex=list.length-1;lastIndex>i;)list[i]=list[++i];if(list.length=lastIndex,el){var doc=el.ownerDocument;doc&&(_onRemoveAttribute(doc,el,attr),attr.ownerElement=null)}}function DOMImplementation(features){if(this._features={},features)for(var feature in features)this._features=features[feature]}function Node(){}function _xmlEncoder(c){return\"<\"==c&&\"&lt;\"||\">\"==c&&\"&gt;\"||\"&\"==c&&\"&amp;\"||'\"'==c&&\"&quot;\"||\"&#\"+c.charCodeAt()+\";\"}function _visitNode(node,callback){if(callback(node))return!0;if(node=node.firstChild)do if(_visitNode(node,callback))return!0;while(node=node.nextSibling)}function Document(){}function _onAddAttribute(doc,el,newAttr){doc&&doc._inc++;var ns=newAttr.namespaceURI;\"http://www.w3.org/2000/xmlns/\"==ns&&(el._nsMap[newAttr.prefix?newAttr.localName:\"\"]=newAttr.value)}function _onRemoveAttribute(doc,el,newAttr){doc&&doc._inc++;var ns=newAttr.namespaceURI;\"http://www.w3.org/2000/xmlns/\"==ns&&delete el._nsMap[newAttr.prefix?newAttr.localName:\"\"]}function _onUpdateChild(doc,el,newChild){if(doc&&doc._inc){doc._inc++;var cs=el.childNodes;if(newChild)cs[cs.length++]=newChild;else{for(var child=el.firstChild,i=0;child;)cs[i++]=child,child=child.nextSibling;cs.length=i}}}function _removeChild(parentNode,child){var previous=child.previousSibling,next=child.nextSibling;return previous?previous.nextSibling=next:parentNode.firstChild=next,next?next.previousSibling=previous:parentNode.lastChild=previous,_onUpdateChild(parentNode.ownerDocument,parentNode),child}function _insertBefore(parentNode,newChild,nextChild){var cp=newChild.parentNode;if(cp&&cp.removeChild(newChild),newChild.nodeType===DOCUMENT_FRAGMENT_NODE){var newFirst=newChild.firstChild;if(null==newFirst)return newChild;var newLast=newChild.lastChild}else newFirst=newLast=newChild;var pre=nextChild?nextChild.previousSibling:parentNode.lastChild;newFirst.previousSibling=pre,newLast.nextSibling=nextChild,pre?pre.nextSibling=newFirst:parentNode.firstChild=newFirst,null==nextChild?parentNode.lastChild=newLast:nextChild.previousSibling=newLast;do newFirst.parentNode=parentNode;while(newFirst!==newLast&&(newFirst=newFirst.nextSibling));return _onUpdateChild(parentNode.ownerDocument||parentNode,parentNode),newChild.nodeType==DOCUMENT_FRAGMENT_NODE&&(newChild.firstChild=newChild.lastChild=null),newChild}function _appendSingleChild(parentNode,newChild){var cp=newChild.parentNode;if(cp){var pre=parentNode.lastChild;cp.removeChild(newChild);var pre=parentNode.lastChild}var pre=parentNode.lastChild;return newChild.parentNode=parentNode,newChild.previousSibling=pre,newChild.nextSibling=null,pre?pre.nextSibling=newChild:parentNode.firstChild=newChild,parentNode.lastChild=newChild,_onUpdateChild(parentNode.ownerDocument,parentNode,newChild),newChild}function Element(){this._nsMap={}}function Attr(){}function CharacterData(){}function Text(){}function Comment(){}function CDATASection(){}function DocumentType(){}function Notation(){}function Entity(){}function EntityReference(){}function DocumentFragment(){}function ProcessingInstruction(){}function XMLSerializer(){}function serializeToString(node,buf){switch(node.nodeType){case ELEMENT_NODE:var attrs=node.attributes,len=attrs.length,child=node.firstChild,nodeName=node.tagName,isHTML=htmlns===node.namespaceURI;buf.push(\"<\",nodeName);for(var i=0;len>i;i++)serializeToString(attrs.item(i),buf,isHTML);if(child||isHTML&&!/^(?:meta|link|img|br|hr|input|button)$/i.test(nodeName)){if(buf.push(\">\"),isHTML&&/^script$/i.test(nodeName))child&&buf.push(child.data);else for(;child;)serializeToString(child,buf),child=child.nextSibling;buf.push(\"</\",nodeName,\">\")}else buf.push(\"/>\");return;case DOCUMENT_NODE:case DOCUMENT_FRAGMENT_NODE:for(var child=node.firstChild;child;)serializeToString(child,buf),child=child.nextSibling;return;case ATTRIBUTE_NODE:return buf.push(\" \",node.name,'=\"',node.value.replace(/[<&\"]/g,_xmlEncoder),'\"');case TEXT_NODE:return buf.push(node.data.replace(/[<&]/g,_xmlEncoder));case CDATA_SECTION_NODE:return buf.push(\"<![CDATA[\",node.data,\"]]>\");case COMMENT_NODE:return buf.push(\"<!--\",node.data,\"-->\");case DOCUMENT_TYPE_NODE:var pubid=node.publicId,sysid=node.systemId;if(buf.push(\"<!DOCTYPE \",node.name),pubid)buf.push(' PUBLIC \"',pubid),sysid&&\".\"!=sysid&&buf.push('\" \"',sysid),buf.push('\">');else if(sysid&&\".\"!=sysid)buf.push(' SYSTEM \"',sysid,'\">');else{var sub=node.internalSubset;sub&&buf.push(\" [\",sub,\"]\"),buf.push(\">\")}return;case PROCESSING_INSTRUCTION_NODE:return buf.push(\"<?\",node.target,\" \",node.data,\"?>\");case ENTITY_REFERENCE_NODE:return buf.push(\"&\",node.nodeName,\";\");default:buf.push(\"??\",node.nodeName)}}function importNode(doc,node,deep){var node2;switch(node.nodeType){case ELEMENT_NODE:node2=node.cloneNode(!1),node2.ownerDocument=doc;case DOCUMENT_FRAGMENT_NODE:break;case ATTRIBUTE_NODE:deep=!0}if(node2||(node2=node.cloneNode(!1)),node2.ownerDocument=doc,node2.parentNode=null,deep)for(var child=node.firstChild;child;)node2.appendChild(importNode(doc,child,deep)),child=child.nextSibling;return node2}function cloneNode(doc,node,deep){var node2=new node.constructor;for(var n in node){var v=node[n];\"object\"!=typeof v&&v!=node2[n]&&(node2[n]=v)}switch(node.childNodes&&(node2.childNodes=new NodeList),node2.ownerDocument=doc,node2.nodeType){case ELEMENT_NODE:var attrs=node.attributes,attrs2=node2.attributes=new NamedNodeMap,len=attrs.length;attrs2._ownerElement=node2;for(var i=0;len>i;i++)node2.setAttributeNode(cloneNode(doc,attrs.item(i),!0));break;case ATTRIBUTE_NODE:deep=!0}if(deep)for(var child=node.firstChild;child;)node2.appendChild(cloneNode(doc,child,deep)),child=child.nextSibling;return node2}function __set__(object,key,value){object[key]=value}function getTextContent(node){switch(node.nodeType){case 1:case 11:var buf=[];for(node=node.firstChild;node;)7!==node.nodeType&&8!==node.nodeType&&buf.push(getTextContent(node)),node=node.nextSibling;return buf.join(\"\");default:return node.nodeValue}}var htmlns=\"http://www.w3.org/1999/xhtml\",NodeType={},ELEMENT_NODE=NodeType.ELEMENT_NODE=1,ATTRIBUTE_NODE=NodeType.ATTRIBUTE_NODE=2,TEXT_NODE=NodeType.TEXT_NODE=3,CDATA_SECTION_NODE=NodeType.CDATA_SECTION_NODE=4,ENTITY_REFERENCE_NODE=NodeType.ENTITY_REFERENCE_NODE=5,ENTITY_NODE=NodeType.ENTITY_NODE=6,PROCESSING_INSTRUCTION_NODE=NodeType.PROCESSING_INSTRUCTION_NODE=7,COMMENT_NODE=NodeType.COMMENT_NODE=8,DOCUMENT_NODE=NodeType.DOCUMENT_NODE=9,DOCUMENT_TYPE_NODE=NodeType.DOCUMENT_TYPE_NODE=10,DOCUMENT_FRAGMENT_NODE=NodeType.DOCUMENT_FRAGMENT_NODE=11,NOTATION_NODE=NodeType.NOTATION_NODE=12,ExceptionCode={},ExceptionMessage={};ExceptionCode.INDEX_SIZE_ERR=(ExceptionMessage[1]=\"Index size error\",1),ExceptionCode.DOMSTRING_SIZE_ERR=(ExceptionMessage[2]=\"DOMString size error\",2),ExceptionCode.HIERARCHY_REQUEST_ERR=(ExceptionMessage[3]=\"Hierarchy request error\",3),ExceptionCode.WRONG_DOCUMENT_ERR=(ExceptionMessage[4]=\"Wrong document\",4),ExceptionCode.INVALID_CHARACTER_ERR=(ExceptionMessage[5]=\"Invalid character\",5),ExceptionCode.NO_DATA_ALLOWED_ERR=(ExceptionMessage[6]=\"No data allowed\",6),ExceptionCode.NO_MODIFICATION_ALLOWED_ERR=(ExceptionMessage[7]=\"No modification allowed\",7);var NOT_FOUND_ERR=ExceptionCode.NOT_FOUND_ERR=(ExceptionMessage[8]=\"Not found\",8);ExceptionCode.NOT_SUPPORTED_ERR=(ExceptionMessage[9]=\"Not supported\",9);var INUSE_ATTRIBUTE_ERR=ExceptionCode.INUSE_ATTRIBUTE_ERR=(ExceptionMessage[10]=\"Attribute in use\",10);ExceptionCode.INVALID_STATE_ERR=(ExceptionMessage[11]=\"Invalid state\",11),ExceptionCode.SYNTAX_ERR=(ExceptionMessage[12]=\"Syntax error\",12),ExceptionCode.INVALID_MODIFICATION_ERR=(ExceptionMessage[13]=\"Invalid modification\",13),ExceptionCode.NAMESPACE_ERR=(ExceptionMessage[14]=\"Invalid namespace\",14),ExceptionCode.INVALID_ACCESS_ERR=(ExceptionMessage[15]=\"Invalid access\",15),DOMException.prototype=Error.prototype,copy(ExceptionCode,DOMException),NodeList.prototype={length:0,item:function(index){return this[index]||null}},LiveNodeList.prototype.item=function(i){return _updateLiveList(this),this[i]},_extends(LiveNodeList,NodeList),NamedNodeMap.prototype={length:0,item:NodeList.prototype.item,getNamedItem:function(key){for(var i=this.length;i--;){var attr=this[i];if(attr.nodeName==key)return attr}},setNamedItem:function(attr){var el=attr.ownerElement;if(el&&el!=this._ownerElement)throw new DOMException(INUSE_ATTRIBUTE_ERR);var oldAttr=this.getNamedItem(attr.nodeName);return _addNamedNode(this._ownerElement,this,attr,oldAttr),oldAttr},setNamedItemNS:function(attr){var oldAttr,el=attr.ownerElement;if(el&&el!=this._ownerElement)throw new DOMException(INUSE_ATTRIBUTE_ERR);return oldAttr=this.getNamedItemNS(attr.namespaceURI,attr.localName),_addNamedNode(this._ownerElement,this,attr,oldAttr),oldAttr},removeNamedItem:function(key){var attr=this.getNamedItem(key);return _removeNamedNode(this._ownerElement,this,attr),attr},removeNamedItemNS:function(namespaceURI,localName){var attr=this.getNamedItemNS(namespaceURI,localName);return _removeNamedNode(this._ownerElement,this,attr),attr},getNamedItemNS:function(namespaceURI,localName){for(var i=this.length;i--;){var node=this[i];if(node.localName==localName&&node.namespaceURI==namespaceURI)return node}return null}},DOMImplementation.prototype={hasFeature:function(feature,version){var versions=this._features[feature.toLowerCase()];return versions&&(!version||version in versions)?!0:!1},createDocument:function(namespaceURI,qualifiedName,doctype){var doc=new Document;if(doc.implementation=this,doc.childNodes=new NodeList,doc.doctype=doctype,doctype&&doc.appendChild(doctype),qualifiedName){var root=doc.createElementNS(namespaceURI,qualifiedName);doc.appendChild(root)}return doc},createDocumentType:function(qualifiedName,publicId,systemId){var node=new DocumentType;return node.name=qualifiedName,node.nodeName=qualifiedName,node.publicId=publicId,node.systemId=systemId,node}},Node.prototype={firstChild:null,lastChild:null,previousSibling:null,nextSibling:null,attributes:null,parentNode:null,childNodes:null,ownerDocument:null,nodeValue:null,namespaceURI:null,prefix:null,localName:null,insertBefore:function(newChild,refChild){return _insertBefore(this,newChild,refChild)},replaceChild:function(newChild,oldChild){this.insertBefore(newChild,oldChild),oldChild&&this.removeChild(oldChild)},removeChild:function(oldChild){return _removeChild(this,oldChild)},appendChild:function(newChild){return this.insertBefore(newChild,null)},hasChildNodes:function(){return null!=this.firstChild},cloneNode:function(deep){return cloneNode(this.ownerDocument||this,this,deep)},normalize:function(){for(var child=this.firstChild;child;){var next=child.nextSibling;next&&next.nodeType==TEXT_NODE&&child.nodeType==TEXT_NODE?(this.removeChild(next),child.appendData(next.data)):(child.normalize(),child=next)}},isSupported:function(feature,version){return this.ownerDocument.implementation.hasFeature(feature,version)},hasAttributes:function(){return this.attributes.length>0},lookupPrefix:function(namespaceURI){for(var el=this;el;){var map=el._nsMap;if(map)for(var n in map)if(map[n]==namespaceURI)return n;el=2==el.nodeType?el.ownerDocument:el.parentNode}return null},lookupNamespaceURI:function(prefix){for(var el=this;el;){var map=el._nsMap;if(map&&prefix in map)return map[prefix];el=2==el.nodeType?el.ownerDocument:el.parentNode}return null},isDefaultNamespace:function(namespaceURI){var prefix=this.lookupPrefix(namespaceURI);return null==prefix}},copy(NodeType,Node),copy(NodeType,Node.prototype),Document.prototype={nodeName:\"#document\",nodeType:DOCUMENT_NODE,doctype:null,documentElement:null,_inc:1,insertBefore:function(newChild,refChild){if(newChild.nodeType==DOCUMENT_FRAGMENT_NODE){for(var child=newChild.firstChild;child;){var next=child.nextSibling;this.insertBefore(child,refChild),child=next}return newChild}return null==this.documentElement&&1==newChild.nodeType&&(this.documentElement=newChild),_insertBefore(this,newChild,refChild),newChild.ownerDocument=this,newChild},removeChild:function(oldChild){return this.documentElement==oldChild&&(this.documentElement=null),_removeChild(this,oldChild)},importNode:function(importedNode,deep){return importNode(this,importedNode,deep)},getElementById:function(id){var rtv=null;return _visitNode(this.documentElement,function(node){return 1==node.nodeType&&node.getAttribute(\"id\")==id?(rtv=node,!0):void 0}),rtv},createElement:function(tagName){var node=new Element;node.ownerDocument=this,node.nodeName=tagName,node.tagName=tagName,node.childNodes=new NodeList;var attrs=node.attributes=new NamedNodeMap;return attrs._ownerElement=node,node},createDocumentFragment:function(){var node=new DocumentFragment;return node.ownerDocument=this,node.childNodes=new NodeList,node},createTextNode:function(data){var node=new Text;return node.ownerDocument=this,node.appendData(data),node},createComment:function(data){var node=new Comment;return node.ownerDocument=this,node.appendData(data),node},createCDATASection:function(data){var node=new CDATASection;return node.ownerDocument=this,node.appendData(data),node},createProcessingInstruction:function(target,data){var node=new ProcessingInstruction;return node.ownerDocument=this,node.tagName=node.target=target,node.nodeValue=node.data=data,node},createAttribute:function(name){var node=new Attr;return node.ownerDocument=this,node.name=name,node.nodeName=name,node.localName=name,node.specified=!0,node},createEntityReference:function(name){var node=new EntityReference;return node.ownerDocument=this,node.nodeName=name,node},createElementNS:function(namespaceURI,qualifiedName){var node=new Element,pl=qualifiedName.split(\":\"),attrs=node.attributes=new NamedNodeMap;return node.childNodes=new NodeList,node.ownerDocument=this,node.nodeName=qualifiedName,node.tagName=qualifiedName,node.namespaceURI=namespaceURI,2==pl.length?(node.prefix=pl[0],node.localName=pl[1]):node.localName=qualifiedName,attrs._ownerElement=node,node},createAttributeNS:function(namespaceURI,qualifiedName){var node=new Attr,pl=qualifiedName.split(\":\");return node.ownerDocument=this,node.nodeName=qualifiedName,node.name=qualifiedName,node.namespaceURI=namespaceURI,node.specified=!0,2==pl.length?(node.prefix=pl[0],node.localName=pl[1]):node.localName=qualifiedName,node}},_extends(Document,Node),Element.prototype={nodeType:ELEMENT_NODE,hasAttribute:function(name){return null!=this.getAttributeNode(name)},getAttribute:function(name){var attr=this.getAttributeNode(name);return attr&&attr.value||\"\"},getAttributeNode:function(name){return this.attributes.getNamedItem(name)},setAttribute:function(name,value){var attr=this.ownerDocument.createAttribute(name);attr.value=attr.nodeValue=\"\"+value,this.setAttributeNode(attr)},removeAttribute:function(name){var attr=this.getAttributeNode(name);attr&&this.removeAttributeNode(attr)},appendChild:function(newChild){return newChild.nodeType===DOCUMENT_FRAGMENT_NODE?this.insertBefore(newChild,null):_appendSingleChild(this,newChild)},setAttributeNode:function(newAttr){return this.attributes.setNamedItem(newAttr)},setAttributeNodeNS:function(newAttr){return this.attributes.setNamedItemNS(newAttr)},removeAttributeNode:function(oldAttr){return this.attributes.removeNamedItem(oldAttr.nodeName)},removeAttributeNS:function(namespaceURI,localName){var old=this.getAttributeNodeNS(namespaceURI,localName);old&&this.removeAttributeNode(old)},hasAttributeNS:function(namespaceURI,localName){return null!=this.getAttributeNodeNS(namespaceURI,localName)},getAttributeNS:function(namespaceURI,localName){var attr=this.getAttributeNodeNS(namespaceURI,localName);return attr&&attr.value||\"\"},setAttributeNS:function(namespaceURI,qualifiedName,value){var attr=this.ownerDocument.createAttributeNS(namespaceURI,qualifiedName);attr.value=attr.nodeValue=\"\"+value,this.setAttributeNode(attr)},getAttributeNodeNS:function(namespaceURI,localName){return this.attributes.getNamedItemNS(namespaceURI,localName)},getElementsByTagName:function(tagName){return new LiveNodeList(this,function(base){var ls=[];return _visitNode(base,function(node){node===base||node.nodeType!=ELEMENT_NODE||\"*\"!==tagName&&node.tagName!=tagName||ls.push(node)}),ls})},getElementsByTagNameNS:function(namespaceURI,localName){return new LiveNodeList(this,function(base){var ls=[];return _visitNode(base,function(node){node===base||node.nodeType!==ELEMENT_NODE||\"*\"!==namespaceURI&&node.namespaceURI!==namespaceURI||\"*\"!==localName&&node.localName!=localName||ls.push(node)}),ls})}},Document.prototype.getElementsByTagName=Element.prototype.getElementsByTagName,Document.prototype.getElementsByTagNameNS=Element.prototype.getElementsByTagNameNS,_extends(Element,Node),Attr.prototype.nodeType=ATTRIBUTE_NODE,_extends(Attr,Node),CharacterData.prototype={data:\"\",substringData:function(offset,count){return this.data.substring(offset,offset+count)},appendData:function(text){text=this.data+text,this.nodeValue=this.data=text,this.length=text.length},insertData:function(offset,text){this.replaceData(offset,0,text)},appendChild:function(){throw Error(ExceptionMessage[3])},deleteData:function(offset,count){this.replaceData(offset,count,\"\")},replaceData:function(offset,count,text){var start=this.data.substring(0,offset),end=this.data.substring(offset+count);text=start+text+end,this.nodeValue=this.data=text,this.length=text.length}},_extends(CharacterData,Node),Text.prototype={nodeName:\"#text\",nodeType:TEXT_NODE,splitText:function(offset){var text=this.data,newText=text.substring(offset);text=text.substring(0,offset),this.data=this.nodeValue=text,this.length=text.length;var newNode=this.ownerDocument.createTextNode(newText);return this.parentNode&&this.parentNode.insertBefore(newNode,this.nextSibling),newNode}},_extends(Text,CharacterData),Comment.prototype={nodeName:\"#comment\",nodeType:COMMENT_NODE},_extends(Comment,CharacterData),CDATASection.prototype={nodeName:\"#cdata-section\",nodeType:CDATA_SECTION_NODE},_extends(CDATASection,CharacterData),DocumentType.prototype.nodeType=DOCUMENT_TYPE_NODE,_extends(DocumentType,Node),Notation.prototype.nodeType=NOTATION_NODE,_extends(Notation,Node),Entity.prototype.nodeType=ENTITY_NODE,_extends(Entity,Node),EntityReference.prototype.nodeType=ENTITY_REFERENCE_NODE,_extends(EntityReference,Node),DocumentFragment.prototype.nodeName=\"#document-fragment\",DocumentFragment.prototype.nodeType=DOCUMENT_FRAGMENT_NODE,_extends(DocumentFragment,Node),ProcessingInstruction.prototype.nodeType=PROCESSING_INSTRUCTION_NODE,_extends(ProcessingInstruction,Node),XMLSerializer.prototype.serializeToString=function(node){var buf=[];return serializeToString(node,buf),buf.join(\"\")},Node.prototype.toString=function(){return XMLSerializer.prototype.serializeToString(this)};try{Object.defineProperty&&(Object.defineProperty(LiveNodeList.prototype,\"length\",{get:function(){return _updateLiveList(this),this.$$length}}),Object.defineProperty(Node.prototype,\"textContent\",{get:function(){return getTextContent(this)},set:function(data){switch(this.nodeType){case 1:case 11:for(;this.firstChild;)this.removeChild(this.firstChild);(data||data+\"\")&&this.appendChild(this.ownerDocument.createTextNode(data));break;default:this.data=data,this.value=value,this.nodeValue=data}}}),__set__=function(object,key,value){object[\"$$\"+key]=value})}catch(e){}return DOMImplementation}),ace.define(\"ace/mode/xml/dom-parser\",[\"require\",\"exports\",\"module\",\"ace/mode/xml/sax\",\"ace/mode/xml/dom\"],function(acequire){\"use strict\";function DOMParser(options){this.options=options||{locator:{}}}function buildErrorHandler(errorImpl,domBuilder,locator){function build(key){var fn=errorImpl[key];if(!fn)if(isCallback)fn=2==errorImpl.length?function(msg){errorImpl(key,msg)}:errorImpl;else for(var i=arguments.length;--i&&!(fn=errorImpl[arguments[i]]););errorHandler[key]=fn&&function(msg){fn(msg+_locator(locator),msg,locator)}||function(){}}if(!errorImpl){if(domBuilder instanceof DOMHandler)return domBuilder;errorImpl=domBuilder}var errorHandler={},isCallback=errorImpl instanceof Function;return locator=locator||{},build(\"warning\",\"warn\"),build(\"error\",\"warn\",\"warning\"),build(\"fatalError\",\"warn\",\"warning\",\"error\"),errorHandler}function DOMHandler(){this.cdata=!1}function position(locator,node){node.lineNumber=locator.lineNumber,node.columnNumber=locator.columnNumber}function _locator(l){return l?\"\\n@\"+(l.systemId||\"\")+\"#[line:\"+l.lineNumber+\",col:\"+l.columnNumber+\"]\":void 0}function _toString(chars,start,length){return\"string\"==typeof chars?chars.substr(start,length):chars.length>=start+length||start?new java.lang.String(chars,start,length)+\"\":chars}function appendElement(hander,node){hander.currentElement?hander.currentElement.appendChild(node):hander.document.appendChild(node)}var XMLReader=acequire(\"./sax\"),DOMImplementation=acequire(\"./dom\");return DOMParser.prototype.parseFromString=function(source,mimeType){var options=this.options,sax=new XMLReader,domBuilder=options.domBuilder||new DOMHandler,errorHandler=options.errorHandler,locator=options.locator,defaultNSMap=options.xmlns||{},entityMap={lt:\"<\",gt:\">\",amp:\"&\",quot:'\"',apos:\"'\"};return locator&&domBuilder.setDocumentLocator(locator),sax.errorHandler=buildErrorHandler(errorHandler,domBuilder,locator),sax.domBuilder=options.domBuilder||domBuilder,/\\/x?html?$/.test(mimeType)&&(entityMap.nbsp=\" \",entityMap.copy=\"©\",defaultNSMap[\"\"]=\"http://www.w3.org/1999/xhtml\"),source?sax.parse(source,defaultNSMap,entityMap):sax.errorHandler.error(\"invalid document source\"),domBuilder.document},DOMHandler.prototype={startDocument:function(){this.document=(new DOMImplementation).createDocument(null,null,null),this.locator&&(this.document.documentURI=this.locator.systemId)},startElement:function(namespaceURI,localName,qName,attrs){var doc=this.document,el=doc.createElementNS(namespaceURI,qName||localName),len=attrs.length;appendElement(this,el),this.currentElement=el,this.locator&&position(this.locator,el);for(var i=0;len>i;i++){var namespaceURI=attrs.getURI(i),value=attrs.getValue(i),qName=attrs.getQName(i),attr=doc.createAttributeNS(namespaceURI,qName);attr.getOffset&&position(attr.getOffset(1),attr),attr.value=attr.nodeValue=value,el.setAttributeNode(attr)}},endElement:function(){var current=this.currentElement;current.tagName,this.currentElement=current.parentNode},startPrefixMapping:function(){},endPrefixMapping:function(){},processingInstruction:function(target,data){var ins=this.document.createProcessingInstruction(target,data);this.locator&&position(this.locator,ins),appendElement(this,ins)},ignorableWhitespace:function(){},characters:function(chars){if(chars=_toString.apply(this,arguments),this.currentElement&&chars){if(this.cdata){var charNode=this.document.createCDATASection(chars);this.currentElement.appendChild(charNode)}else{var charNode=this.document.createTextNode(chars);this.currentElement.appendChild(charNode)}this.locator&&position(this.locator,charNode)}},skippedEntity:function(){},endDocument:function(){this.document.normalize()},setDocumentLocator:function(locator){(this.locator=locator)&&(locator.lineNumber=0)},comment:function(chars){chars=_toString.apply(this,arguments);var comm=this.document.createComment(chars);this.locator&&position(this.locator,comm),appendElement(this,comm)},startCDATA:function(){this.cdata=!0},endCDATA:function(){this.cdata=!1},startDTD:function(name,publicId,systemId){var impl=this.document.implementation;if(impl&&impl.createDocumentType){var dt=impl.createDocumentType(name,publicId,systemId);this.locator&&position(this.locator,dt),appendElement(this,dt)}},warning:function(error){console.warn(error,_locator(this.locator))},error:function(error){console.error(error,_locator(this.locator))},fatalError:function(error){throw console.error(error,_locator(this.locator)),error}},\"endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl\".replace(/\\w+/g,function(key){DOMHandler.prototype[key]=function(){return null}}),{DOMParser:DOMParser}}),ace.define(\"ace/mode/xml_worker\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/lib/lang\",\"ace/worker/mirror\",\"ace/mode/xml/dom-parser\"],function(acequire,exports){\"use strict\";var oop=acequire(\"../lib/oop\");acequire(\"../lib/lang\");var Mirror=acequire(\"../worker/mirror\").Mirror,DOMParser=acequire(\"./xml/dom-parser\").DOMParser,Worker=exports.Worker=function(sender){Mirror.call(this,sender),this.setTimeout(400),this.context=null};oop.inherits(Worker,Mirror),function(){this.setOptions=function(options){this.context=options.context},this.onUpdate=function(){var value=this.doc.getValue();if(value){var parser=new DOMParser,errors=[];parser.options.errorHandler={fatalError:function(fullMsg,errorMsg,locator){errors.push({row:locator.lineNumber,column:locator.columnNumber,text:errorMsg,type:\"error\"})},error:function(fullMsg,errorMsg,locator){errors.push({row:locator.lineNumber,column:locator.columnNumber,text:errorMsg,type:\"error\"})},warning:function(fullMsg,errorMsg,locator){errors.push({row:locator.lineNumber,column:locator.columnNumber,text:errorMsg,type:\"warning\"})}},parser.parseFromString(value),this.sender.emit(\"error\",errors)}}}.call(Worker.prototype)}),ace.define(\"ace/lib/es5-shim\",[\"require\",\"exports\",\"module\"],function(){function Empty(){}function doesDefinePropertyWork(object){try{return Object.defineProperty(object,\"sentinel\",{}),\"sentinel\"in object\n}catch(exception){}}function toInteger(n){return n=+n,n!==n?n=0:0!==n&&n!==1/0&&n!==-(1/0)&&(n=(n>0||-1)*Math.floor(Math.abs(n))),n}Function.prototype.bind||(Function.prototype.bind=function(that){var target=this;if(\"function\"!=typeof target)throw new TypeError(\"Function.prototype.bind called on incompatible \"+target);var args=slice.call(arguments,1),bound=function(){if(this instanceof bound){var result=target.apply(this,args.concat(slice.call(arguments)));return Object(result)===result?result:this}return target.apply(that,args.concat(slice.call(arguments)))};return target.prototype&&(Empty.prototype=target.prototype,bound.prototype=new Empty,Empty.prototype=null),bound});var defineGetter,defineSetter,lookupGetter,lookupSetter,supportsAccessors,call=Function.prototype.call,prototypeOfArray=Array.prototype,prototypeOfObject=Object.prototype,slice=prototypeOfArray.slice,_toString=call.bind(prototypeOfObject.toString),owns=call.bind(prototypeOfObject.hasOwnProperty);if((supportsAccessors=owns(prototypeOfObject,\"__defineGetter__\"))&&(defineGetter=call.bind(prototypeOfObject.__defineGetter__),defineSetter=call.bind(prototypeOfObject.__defineSetter__),lookupGetter=call.bind(prototypeOfObject.__lookupGetter__),lookupSetter=call.bind(prototypeOfObject.__lookupSetter__)),2!=[1,2].splice(0).length)if(function(){function makeArray(l){var a=Array(l+2);return a[0]=a[1]=0,a}var lengthBefore,array=[];return array.splice.apply(array,makeArray(20)),array.splice.apply(array,makeArray(26)),lengthBefore=array.length,array.splice(5,0,\"XXX\"),lengthBefore+1==array.length,lengthBefore+1==array.length?!0:void 0}()){var array_splice=Array.prototype.splice;Array.prototype.splice=function(start,deleteCount){return arguments.length?array_splice.apply(this,[void 0===start?0:start,void 0===deleteCount?this.length-start:deleteCount].concat(slice.call(arguments,2))):[]}}else Array.prototype.splice=function(pos,removeCount){var length=this.length;pos>0?pos>length&&(pos=length):void 0==pos?pos=0:0>pos&&(pos=Math.max(length+pos,0)),length>pos+removeCount||(removeCount=length-pos);var removed=this.slice(pos,pos+removeCount),insert=slice.call(arguments,2),add=insert.length;if(pos===length)add&&this.push.apply(this,insert);else{var remove=Math.min(removeCount,length-pos),tailOldPos=pos+remove,tailNewPos=tailOldPos+add-remove,tailCount=length-tailOldPos,lengthAfterRemove=length-remove;if(tailOldPos>tailNewPos)for(var i=0;tailCount>i;++i)this[tailNewPos+i]=this[tailOldPos+i];else if(tailNewPos>tailOldPos)for(i=tailCount;i--;)this[tailNewPos+i]=this[tailOldPos+i];if(add&&pos===lengthAfterRemove)this.length=lengthAfterRemove,this.push.apply(this,insert);else for(this.length=lengthAfterRemove+add,i=0;add>i;++i)this[pos+i]=insert[i]}return removed};Array.isArray||(Array.isArray=function(obj){return\"[object Array]\"==_toString(obj)});var boxedString=Object(\"a\"),splitString=\"a\"!=boxedString[0]||!(0 in boxedString);if(Array.prototype.forEach||(Array.prototype.forEach=function(fun){var object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,thisp=arguments[1],i=-1,length=self.length>>>0;if(\"[object Function]\"!=_toString(fun))throw new TypeError;for(;length>++i;)i in self&&fun.call(thisp,self[i],i,object)}),Array.prototype.map||(Array.prototype.map=function(fun){var object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,length=self.length>>>0,result=Array(length),thisp=arguments[1];if(\"[object Function]\"!=_toString(fun))throw new TypeError(fun+\" is not a function\");for(var i=0;length>i;i++)i in self&&(result[i]=fun.call(thisp,self[i],i,object));return result}),Array.prototype.filter||(Array.prototype.filter=function(fun){var value,object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,length=self.length>>>0,result=[],thisp=arguments[1];if(\"[object Function]\"!=_toString(fun))throw new TypeError(fun+\" is not a function\");for(var i=0;length>i;i++)i in self&&(value=self[i],fun.call(thisp,value,i,object)&&result.push(value));return result}),Array.prototype.every||(Array.prototype.every=function(fun){var object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,length=self.length>>>0,thisp=arguments[1];if(\"[object Function]\"!=_toString(fun))throw new TypeError(fun+\" is not a function\");for(var i=0;length>i;i++)if(i in self&&!fun.call(thisp,self[i],i,object))return!1;return!0}),Array.prototype.some||(Array.prototype.some=function(fun){var object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,length=self.length>>>0,thisp=arguments[1];if(\"[object Function]\"!=_toString(fun))throw new TypeError(fun+\" is not a function\");for(var i=0;length>i;i++)if(i in self&&fun.call(thisp,self[i],i,object))return!0;return!1}),Array.prototype.reduce||(Array.prototype.reduce=function(fun){var object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,length=self.length>>>0;if(\"[object Function]\"!=_toString(fun))throw new TypeError(fun+\" is not a function\");if(!length&&1==arguments.length)throw new TypeError(\"reduce of empty array with no initial value\");var result,i=0;if(arguments.length>=2)result=arguments[1];else for(;;){if(i in self){result=self[i++];break}if(++i>=length)throw new TypeError(\"reduce of empty array with no initial value\")}for(;length>i;i++)i in self&&(result=fun.call(void 0,result,self[i],i,object));return result}),Array.prototype.reduceRight||(Array.prototype.reduceRight=function(fun){var object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,length=self.length>>>0;if(\"[object Function]\"!=_toString(fun))throw new TypeError(fun+\" is not a function\");if(!length&&1==arguments.length)throw new TypeError(\"reduceRight of empty array with no initial value\");var result,i=length-1;if(arguments.length>=2)result=arguments[1];else for(;;){if(i in self){result=self[i--];break}if(0>--i)throw new TypeError(\"reduceRight of empty array with no initial value\")}do i in this&&(result=fun.call(void 0,result,self[i],i,object));while(i--);return result}),Array.prototype.indexOf&&-1==[0,1].indexOf(1,2)||(Array.prototype.indexOf=function(sought){var self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):toObject(this),length=self.length>>>0;if(!length)return-1;var i=0;for(arguments.length>1&&(i=toInteger(arguments[1])),i=i>=0?i:Math.max(0,length+i);length>i;i++)if(i in self&&self[i]===sought)return i;return-1}),Array.prototype.lastIndexOf&&-1==[0,1].lastIndexOf(0,-3)||(Array.prototype.lastIndexOf=function(sought){var self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):toObject(this),length=self.length>>>0;if(!length)return-1;var i=length-1;for(arguments.length>1&&(i=Math.min(i,toInteger(arguments[1]))),i=i>=0?i:length-Math.abs(i);i>=0;i--)if(i in self&&sought===self[i])return i;return-1}),Object.getPrototypeOf||(Object.getPrototypeOf=function(object){return object.__proto__||(object.constructor?object.constructor.prototype:prototypeOfObject)}),!Object.getOwnPropertyDescriptor){var ERR_NON_OBJECT=\"Object.getOwnPropertyDescriptor called on a non-object: \";Object.getOwnPropertyDescriptor=function(object,property){if(\"object\"!=typeof object&&\"function\"!=typeof object||null===object)throw new TypeError(ERR_NON_OBJECT+object);if(owns(object,property)){var descriptor,getter,setter;if(descriptor={enumerable:!0,configurable:!0},supportsAccessors){var prototype=object.__proto__;object.__proto__=prototypeOfObject;var getter=lookupGetter(object,property),setter=lookupSetter(object,property);if(object.__proto__=prototype,getter||setter)return getter&&(descriptor.get=getter),setter&&(descriptor.set=setter),descriptor}return descriptor.value=object[property],descriptor}}}if(Object.getOwnPropertyNames||(Object.getOwnPropertyNames=function(object){return Object.keys(object)}),!Object.create){var createEmpty;createEmpty=null===Object.prototype.__proto__?function(){return{__proto__:null}}:function(){var empty={};for(var i in empty)empty[i]=null;return empty.constructor=empty.hasOwnProperty=empty.propertyIsEnumerable=empty.isPrototypeOf=empty.toLocaleString=empty.toString=empty.valueOf=empty.__proto__=null,empty},Object.create=function(prototype,properties){var object;if(null===prototype)object=createEmpty();else{if(\"object\"!=typeof prototype)throw new TypeError(\"typeof prototype[\"+typeof prototype+\"] != 'object'\");var Type=function(){};Type.prototype=prototype,object=new Type,object.__proto__=prototype}return void 0!==properties&&Object.defineProperties(object,properties),object}}if(Object.defineProperty){var definePropertyWorksOnObject=doesDefinePropertyWork({}),definePropertyWorksOnDom=\"undefined\"==typeof document||doesDefinePropertyWork(document.createElement(\"div\"));if(!definePropertyWorksOnObject||!definePropertyWorksOnDom)var definePropertyFallback=Object.defineProperty}if(!Object.defineProperty||definePropertyFallback){var ERR_NON_OBJECT_DESCRIPTOR=\"Property description must be an object: \",ERR_NON_OBJECT_TARGET=\"Object.defineProperty called on non-object: \",ERR_ACCESSORS_NOT_SUPPORTED=\"getters & setters can not be defined on this javascript engine\";Object.defineProperty=function(object,property,descriptor){if(\"object\"!=typeof object&&\"function\"!=typeof object||null===object)throw new TypeError(ERR_NON_OBJECT_TARGET+object);if(\"object\"!=typeof descriptor&&\"function\"!=typeof descriptor||null===descriptor)throw new TypeError(ERR_NON_OBJECT_DESCRIPTOR+descriptor);if(definePropertyFallback)try{return definePropertyFallback.call(Object,object,property,descriptor)}catch(exception){}if(owns(descriptor,\"value\"))if(supportsAccessors&&(lookupGetter(object,property)||lookupSetter(object,property))){var prototype=object.__proto__;object.__proto__=prototypeOfObject,delete object[property],object[property]=descriptor.value,object.__proto__=prototype}else object[property]=descriptor.value;else{if(!supportsAccessors)throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);owns(descriptor,\"get\")&&defineGetter(object,property,descriptor.get),owns(descriptor,\"set\")&&defineSetter(object,property,descriptor.set)}return object}}Object.defineProperties||(Object.defineProperties=function(object,properties){for(var property in properties)owns(properties,property)&&Object.defineProperty(object,property,properties[property]);return object}),Object.seal||(Object.seal=function(object){return object}),Object.freeze||(Object.freeze=function(object){return object});try{Object.freeze(function(){})}catch(exception){Object.freeze=function(freezeObject){return function(object){return\"function\"==typeof object?object:freezeObject(object)}}(Object.freeze)}if(Object.preventExtensions||(Object.preventExtensions=function(object){return object}),Object.isSealed||(Object.isSealed=function(){return!1}),Object.isFrozen||(Object.isFrozen=function(){return!1}),Object.isExtensible||(Object.isExtensible=function(object){if(Object(object)===object)throw new TypeError;for(var name=\"\";owns(object,name);)name+=\"?\";object[name]=!0;var returnValue=owns(object,name);return delete object[name],returnValue}),!Object.keys){var hasDontEnumBug=!0,dontEnums=[\"toString\",\"toLocaleString\",\"valueOf\",\"hasOwnProperty\",\"isPrototypeOf\",\"propertyIsEnumerable\",\"constructor\"],dontEnumsLength=dontEnums.length;for(var key in{toString:null})hasDontEnumBug=!1;Object.keys=function(object){if(\"object\"!=typeof object&&\"function\"!=typeof object||null===object)throw new TypeError(\"Object.keys called on a non-object\");var keys=[];for(var name in object)owns(object,name)&&keys.push(name);if(hasDontEnumBug)for(var i=0,ii=dontEnumsLength;ii>i;i++){var dontEnum=dontEnums[i];owns(object,dontEnum)&&keys.push(dontEnum)}return keys}}Date.now||(Date.now=function(){return(new Date).getTime()});var ws=\"\t\\n\u000b\\f\\r   ᠎             　\\u2028\\u2029﻿\";if(!String.prototype.trim||ws.trim()){ws=\"[\"+ws+\"]\";var trimBeginRegexp=RegExp(\"^\"+ws+ws+\"*\"),trimEndRegexp=RegExp(ws+ws+\"*$\");String.prototype.trim=function(){return(this+\"\").replace(trimBeginRegexp,\"\").replace(trimEndRegexp,\"\")}}var toObject=function(o){if(null==o)throw new TypeError(\"can't convert \"+o+\" to object\");return Object(o)}});";

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports.id = 'ace/mode/css_worker';
	module.exports.src = "\"no use strict\";(function(window){function resolveModuleId(id,paths){for(var testPath=id,tail=\"\";testPath;){var alias=paths[testPath];if(\"string\"==typeof alias)return alias+tail;if(alias)return alias.location.replace(/\\/*$/,\"/\")+(tail||alias.main||alias.name);if(alias===!1)return\"\";var i=testPath.lastIndexOf(\"/\");if(-1===i)break;tail=testPath.substr(i)+tail,testPath=testPath.slice(0,i)}return id}if(!(void 0!==window.window&&window.document||window.acequire&&window.define)){window.console||(window.console=function(){var msgs=Array.prototype.slice.call(arguments,0);postMessage({type:\"log\",data:msgs})},window.console.error=window.console.warn=window.console.log=window.console.trace=window.console),window.window=window,window.ace=window,window.onerror=function(message,file,line,col,err){postMessage({type:\"error\",data:{message:message,data:err.data,file:file,line:line,col:col,stack:err.stack}})},window.normalizeModule=function(parentId,moduleName){if(-1!==moduleName.indexOf(\"!\")){var chunks=moduleName.split(\"!\");return window.normalizeModule(parentId,chunks[0])+\"!\"+window.normalizeModule(parentId,chunks[1])}if(\".\"==moduleName.charAt(0)){var base=parentId.split(\"/\").slice(0,-1).join(\"/\");for(moduleName=(base?base+\"/\":\"\")+moduleName;-1!==moduleName.indexOf(\".\")&&previous!=moduleName;){var previous=moduleName;moduleName=moduleName.replace(/^\\.\\//,\"\").replace(/\\/\\.\\//,\"/\").replace(/[^\\/]+\\/\\.\\.\\//,\"\")}}return moduleName},window.acequire=function acequire(parentId,id){if(id||(id=parentId,parentId=null),!id.charAt)throw Error(\"worker.js acequire() accepts only (parentId, id) as arguments\");id=window.normalizeModule(parentId,id);var module=window.acequire.modules[id];if(module)return module.initialized||(module.initialized=!0,module.exports=module.factory().exports),module.exports;if(!window.acequire.tlns)return console.log(\"unable to load \"+id);var path=resolveModuleId(id,window.acequire.tlns);return\".js\"!=path.slice(-3)&&(path+=\".js\"),window.acequire.id=id,window.acequire.modules[id]={},importScripts(path),window.acequire(parentId,id)},window.acequire.modules={},window.acequire.tlns={},window.define=function(id,deps,factory){if(2==arguments.length?(factory=deps,\"string\"!=typeof id&&(deps=id,id=window.acequire.id)):1==arguments.length&&(factory=id,deps=[],id=window.acequire.id),\"function\"!=typeof factory)return window.acequire.modules[id]={exports:factory,initialized:!0},void 0;deps.length||(deps=[\"require\",\"exports\",\"module\"]);var req=function(childId){return window.acequire(id,childId)};window.acequire.modules[id]={exports:{},factory:function(){var module=this,returnExports=factory.apply(this,deps.map(function(dep){switch(dep){case\"require\":return req;case\"exports\":return module.exports;case\"module\":return module;default:return req(dep)}}));return returnExports&&(module.exports=returnExports),module}}},window.define.amd={},acequire.tlns={},window.initBaseUrls=function(topLevelNamespaces){for(var i in topLevelNamespaces)acequire.tlns[i]=topLevelNamespaces[i]},window.initSender=function(){var EventEmitter=window.acequire(\"ace/lib/event_emitter\").EventEmitter,oop=window.acequire(\"ace/lib/oop\"),Sender=function(){};return function(){oop.implement(this,EventEmitter),this.callback=function(data,callbackId){postMessage({type:\"call\",id:callbackId,data:data})},this.emit=function(name,data){postMessage({type:\"event\",name:name,data:data})}}.call(Sender.prototype),new Sender};var main=window.main=null,sender=window.sender=null;window.onmessage=function(e){var msg=e.data;if(msg.event&&sender)sender._signal(msg.event,msg.data);else if(msg.command)if(main[msg.command])main[msg.command].apply(main,msg.args);else{if(!window[msg.command])throw Error(\"Unknown command:\"+msg.command);window[msg.command].apply(window,msg.args)}else if(msg.init){window.initBaseUrls(msg.tlns),acequire(\"ace/lib/es5-shim\"),sender=window.sender=window.initSender();var clazz=acequire(msg.module)[msg.classname];main=window.main=new clazz(sender)}}}})(this),ace.define(\"ace/lib/oop\",[\"require\",\"exports\",\"module\"],function(acequire,exports){\"use strict\";exports.inherits=function(ctor,superCtor){ctor.super_=superCtor,ctor.prototype=Object.create(superCtor.prototype,{constructor:{value:ctor,enumerable:!1,writable:!0,configurable:!0}})},exports.mixin=function(obj,mixin){for(var key in mixin)obj[key]=mixin[key];return obj},exports.implement=function(proto,mixin){exports.mixin(proto,mixin)}}),ace.define(\"ace/lib/lang\",[\"require\",\"exports\",\"module\"],function(acequire,exports){\"use strict\";exports.last=function(a){return a[a.length-1]},exports.stringReverse=function(string){return string.split(\"\").reverse().join(\"\")},exports.stringRepeat=function(string,count){for(var result=\"\";count>0;)1&count&&(result+=string),(count>>=1)&&(string+=string);return result};var trimBeginRegexp=/^\\s\\s*/,trimEndRegexp=/\\s\\s*$/;exports.stringTrimLeft=function(string){return string.replace(trimBeginRegexp,\"\")},exports.stringTrimRight=function(string){return string.replace(trimEndRegexp,\"\")},exports.copyObject=function(obj){var copy={};for(var key in obj)copy[key]=obj[key];return copy},exports.copyArray=function(array){for(var copy=[],i=0,l=array.length;l>i;i++)copy[i]=array[i]&&\"object\"==typeof array[i]?this.copyObject(array[i]):array[i];return copy},exports.deepCopy=function deepCopy(obj){if(\"object\"!=typeof obj||!obj)return obj;var copy;if(Array.isArray(obj)){copy=[];for(var key=0;obj.length>key;key++)copy[key]=deepCopy(obj[key]);return copy}var cons=obj.constructor;if(cons===RegExp)return obj;copy=cons();for(var key in obj)copy[key]=deepCopy(obj[key]);return copy},exports.arrayToMap=function(arr){for(var map={},i=0;arr.length>i;i++)map[arr[i]]=1;return map},exports.createMap=function(props){var map=Object.create(null);for(var i in props)map[i]=props[i];return map},exports.arrayRemove=function(array,value){for(var i=0;array.length>=i;i++)value===array[i]&&array.splice(i,1)},exports.escapeRegExp=function(str){return str.replace(/([.*+?^${}()|[\\]\\/\\\\])/g,\"\\\\$1\")},exports.escapeHTML=function(str){return str.replace(/&/g,\"&#38;\").replace(/\"/g,\"&#34;\").replace(/'/g,\"&#39;\").replace(/</g,\"&#60;\")},exports.getMatchOffsets=function(string,regExp){var matches=[];return string.replace(regExp,function(str){matches.push({offset:arguments[arguments.length-2],length:str.length})}),matches},exports.deferredCall=function(fcn){var timer=null,callback=function(){timer=null,fcn()},deferred=function(timeout){return deferred.cancel(),timer=setTimeout(callback,timeout||0),deferred};return deferred.schedule=deferred,deferred.call=function(){return this.cancel(),fcn(),deferred},deferred.cancel=function(){return clearTimeout(timer),timer=null,deferred},deferred.isPending=function(){return timer},deferred},exports.delayedCall=function(fcn,defaultTimeout){var timer=null,callback=function(){timer=null,fcn()},_self=function(timeout){null==timer&&(timer=setTimeout(callback,timeout||defaultTimeout))};return _self.delay=function(timeout){timer&&clearTimeout(timer),timer=setTimeout(callback,timeout||defaultTimeout)},_self.schedule=_self,_self.call=function(){this.cancel(),fcn()},_self.cancel=function(){timer&&clearTimeout(timer),timer=null},_self.isPending=function(){return timer},_self}}),ace.define(\"ace/range\",[\"require\",\"exports\",\"module\"],function(acequire,exports){\"use strict\";var comparePoints=function(p1,p2){return p1.row-p2.row||p1.column-p2.column},Range=function(startRow,startColumn,endRow,endColumn){this.start={row:startRow,column:startColumn},this.end={row:endRow,column:endColumn}};(function(){this.isEqual=function(range){return this.start.row===range.start.row&&this.end.row===range.end.row&&this.start.column===range.start.column&&this.end.column===range.end.column},this.toString=function(){return\"Range: [\"+this.start.row+\"/\"+this.start.column+\"] -> [\"+this.end.row+\"/\"+this.end.column+\"]\"},this.contains=function(row,column){return 0==this.compare(row,column)},this.compareRange=function(range){var cmp,end=range.end,start=range.start;return cmp=this.compare(end.row,end.column),1==cmp?(cmp=this.compare(start.row,start.column),1==cmp?2:0==cmp?1:0):-1==cmp?-2:(cmp=this.compare(start.row,start.column),-1==cmp?-1:1==cmp?42:0)},this.comparePoint=function(p){return this.compare(p.row,p.column)},this.containsRange=function(range){return 0==this.comparePoint(range.start)&&0==this.comparePoint(range.end)},this.intersects=function(range){var cmp=this.compareRange(range);return-1==cmp||0==cmp||1==cmp},this.isEnd=function(row,column){return this.end.row==row&&this.end.column==column},this.isStart=function(row,column){return this.start.row==row&&this.start.column==column},this.setStart=function(row,column){\"object\"==typeof row?(this.start.column=row.column,this.start.row=row.row):(this.start.row=row,this.start.column=column)},this.setEnd=function(row,column){\"object\"==typeof row?(this.end.column=row.column,this.end.row=row.row):(this.end.row=row,this.end.column=column)},this.inside=function(row,column){return 0==this.compare(row,column)?this.isEnd(row,column)||this.isStart(row,column)?!1:!0:!1},this.insideStart=function(row,column){return 0==this.compare(row,column)?this.isEnd(row,column)?!1:!0:!1},this.insideEnd=function(row,column){return 0==this.compare(row,column)?this.isStart(row,column)?!1:!0:!1},this.compare=function(row,column){return this.isMultiLine()||row!==this.start.row?this.start.row>row?-1:row>this.end.row?1:this.start.row===row?column>=this.start.column?0:-1:this.end.row===row?this.end.column>=column?0:1:0:this.start.column>column?-1:column>this.end.column?1:0},this.compareStart=function(row,column){return this.start.row==row&&this.start.column==column?-1:this.compare(row,column)},this.compareEnd=function(row,column){return this.end.row==row&&this.end.column==column?1:this.compare(row,column)},this.compareInside=function(row,column){return this.end.row==row&&this.end.column==column?1:this.start.row==row&&this.start.column==column?-1:this.compare(row,column)},this.clipRows=function(firstRow,lastRow){if(this.end.row>lastRow)var end={row:lastRow+1,column:0};else if(firstRow>this.end.row)var end={row:firstRow,column:0};if(this.start.row>lastRow)var start={row:lastRow+1,column:0};else if(firstRow>this.start.row)var start={row:firstRow,column:0};return Range.fromPoints(start||this.start,end||this.end)},this.extend=function(row,column){var cmp=this.compare(row,column);if(0==cmp)return this;if(-1==cmp)var start={row:row,column:column};else var end={row:row,column:column};return Range.fromPoints(start||this.start,end||this.end)},this.isEmpty=function(){return this.start.row===this.end.row&&this.start.column===this.end.column},this.isMultiLine=function(){return this.start.row!==this.end.row},this.clone=function(){return Range.fromPoints(this.start,this.end)},this.collapseRows=function(){return 0==this.end.column?new Range(this.start.row,0,Math.max(this.start.row,this.end.row-1),0):new Range(this.start.row,0,this.end.row,0)},this.toScreenRange=function(session){var screenPosStart=session.documentToScreenPosition(this.start),screenPosEnd=session.documentToScreenPosition(this.end);return new Range(screenPosStart.row,screenPosStart.column,screenPosEnd.row,screenPosEnd.column)},this.moveBy=function(row,column){this.start.row+=row,this.start.column+=column,this.end.row+=row,this.end.column+=column}}).call(Range.prototype),Range.fromPoints=function(start,end){return new Range(start.row,start.column,end.row,end.column)},Range.comparePoints=comparePoints,Range.comparePoints=function(p1,p2){return p1.row-p2.row||p1.column-p2.column},exports.Range=Range}),ace.define(\"ace/apply_delta\",[\"require\",\"exports\",\"module\"],function(acequire,exports){\"use strict\";exports.applyDelta=function(docLines,delta){var row=delta.start.row,startColumn=delta.start.column,line=docLines[row]||\"\";switch(delta.action){case\"insert\":var lines=delta.lines;if(1===lines.length)docLines[row]=line.substring(0,startColumn)+delta.lines[0]+line.substring(startColumn);else{var args=[row,1].concat(delta.lines);docLines.splice.apply(docLines,args),docLines[row]=line.substring(0,startColumn)+docLines[row],docLines[row+delta.lines.length-1]+=line.substring(startColumn)}break;case\"remove\":var endColumn=delta.end.column,endRow=delta.end.row;row===endRow?docLines[row]=line.substring(0,startColumn)+line.substring(endColumn):docLines.splice(row,endRow-row+1,line.substring(0,startColumn)+docLines[endRow].substring(endColumn))}}}),ace.define(\"ace/lib/event_emitter\",[\"require\",\"exports\",\"module\"],function(acequire,exports){\"use strict\";var EventEmitter={},stopPropagation=function(){this.propagationStopped=!0},preventDefault=function(){this.defaultPrevented=!0};EventEmitter._emit=EventEmitter._dispatchEvent=function(eventName,e){this._eventRegistry||(this._eventRegistry={}),this._defaultHandlers||(this._defaultHandlers={});var listeners=this._eventRegistry[eventName]||[],defaultHandler=this._defaultHandlers[eventName];if(listeners.length||defaultHandler){\"object\"==typeof e&&e||(e={}),e.type||(e.type=eventName),e.stopPropagation||(e.stopPropagation=stopPropagation),e.preventDefault||(e.preventDefault=preventDefault),listeners=listeners.slice();for(var i=0;listeners.length>i&&(listeners[i](e,this),!e.propagationStopped);i++);return defaultHandler&&!e.defaultPrevented?defaultHandler(e,this):void 0}},EventEmitter._signal=function(eventName,e){var listeners=(this._eventRegistry||{})[eventName];if(listeners){listeners=listeners.slice();for(var i=0;listeners.length>i;i++)listeners[i](e,this)}},EventEmitter.once=function(eventName,callback){var _self=this;callback&&this.addEventListener(eventName,function newCallback(){_self.removeEventListener(eventName,newCallback),callback.apply(null,arguments)})},EventEmitter.setDefaultHandler=function(eventName,callback){var handlers=this._defaultHandlers;if(handlers||(handlers=this._defaultHandlers={_disabled_:{}}),handlers[eventName]){var old=handlers[eventName],disabled=handlers._disabled_[eventName];disabled||(handlers._disabled_[eventName]=disabled=[]),disabled.push(old);var i=disabled.indexOf(callback);-1!=i&&disabled.splice(i,1)}handlers[eventName]=callback},EventEmitter.removeDefaultHandler=function(eventName,callback){var handlers=this._defaultHandlers;if(handlers){var disabled=handlers._disabled_[eventName];if(handlers[eventName]==callback)handlers[eventName],disabled&&this.setDefaultHandler(eventName,disabled.pop());else if(disabled){var i=disabled.indexOf(callback);-1!=i&&disabled.splice(i,1)}}},EventEmitter.on=EventEmitter.addEventListener=function(eventName,callback,capturing){this._eventRegistry=this._eventRegistry||{};var listeners=this._eventRegistry[eventName];return listeners||(listeners=this._eventRegistry[eventName]=[]),-1==listeners.indexOf(callback)&&listeners[capturing?\"unshift\":\"push\"](callback),callback},EventEmitter.off=EventEmitter.removeListener=EventEmitter.removeEventListener=function(eventName,callback){this._eventRegistry=this._eventRegistry||{};var listeners=this._eventRegistry[eventName];if(listeners){var index=listeners.indexOf(callback);-1!==index&&listeners.splice(index,1)}},EventEmitter.removeAllListeners=function(eventName){this._eventRegistry&&(this._eventRegistry[eventName]=[])},exports.EventEmitter=EventEmitter}),ace.define(\"ace/anchor\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/lib/event_emitter\"],function(acequire,exports){\"use strict\";var oop=acequire(\"./lib/oop\"),EventEmitter=acequire(\"./lib/event_emitter\").EventEmitter,Anchor=exports.Anchor=function(doc,row,column){this.$onChange=this.onChange.bind(this),this.attach(doc),column===void 0?this.setPosition(row.row,row.column):this.setPosition(row,column)};(function(){function $pointsInOrder(point1,point2,equalPointsInOrder){var bColIsAfter=equalPointsInOrder?point1.column<=point2.column:point1.column<point2.column;return point1.row<point2.row||point1.row==point2.row&&bColIsAfter}function $getTransformedPoint(delta,point,moveIfEqual){var deltaIsInsert=\"insert\"==delta.action,deltaRowShift=(deltaIsInsert?1:-1)*(delta.end.row-delta.start.row),deltaColShift=(deltaIsInsert?1:-1)*(delta.end.column-delta.start.column),deltaStart=delta.start,deltaEnd=deltaIsInsert?deltaStart:delta.end;return $pointsInOrder(point,deltaStart,moveIfEqual)?{row:point.row,column:point.column}:$pointsInOrder(deltaEnd,point,!moveIfEqual)?{row:point.row+deltaRowShift,column:point.column+(point.row==deltaEnd.row?deltaColShift:0)}:{row:deltaStart.row,column:deltaStart.column}}oop.implement(this,EventEmitter),this.getPosition=function(){return this.$clipPositionToDocument(this.row,this.column)},this.getDocument=function(){return this.document},this.$insertRight=!1,this.onChange=function(delta){if(!(delta.start.row==delta.end.row&&delta.start.row!=this.row||delta.start.row>this.row)){var point=$getTransformedPoint(delta,{row:this.row,column:this.column},this.$insertRight);this.setPosition(point.row,point.column,!0)}},this.setPosition=function(row,column,noClip){var pos;if(pos=noClip?{row:row,column:column}:this.$clipPositionToDocument(row,column),this.row!=pos.row||this.column!=pos.column){var old={row:this.row,column:this.column};this.row=pos.row,this.column=pos.column,this._signal(\"change\",{old:old,value:pos})}},this.detach=function(){this.document.removeEventListener(\"change\",this.$onChange)},this.attach=function(doc){this.document=doc||this.document,this.document.on(\"change\",this.$onChange)},this.$clipPositionToDocument=function(row,column){var pos={};return row>=this.document.getLength()?(pos.row=Math.max(0,this.document.getLength()-1),pos.column=this.document.getLine(pos.row).length):0>row?(pos.row=0,pos.column=0):(pos.row=row,pos.column=Math.min(this.document.getLine(pos.row).length,Math.max(0,column))),0>column&&(pos.column=0),pos}}).call(Anchor.prototype)}),ace.define(\"ace/document\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/apply_delta\",\"ace/lib/event_emitter\",\"ace/range\",\"ace/anchor\"],function(acequire,exports){\"use strict\";var oop=acequire(\"./lib/oop\"),applyDelta=acequire(\"./apply_delta\").applyDelta,EventEmitter=acequire(\"./lib/event_emitter\").EventEmitter,Range=acequire(\"./range\").Range,Anchor=acequire(\"./anchor\").Anchor,Document=function(textOrLines){this.$lines=[\"\"],0===textOrLines.length?this.$lines=[\"\"]:Array.isArray(textOrLines)?this.insertMergedLines({row:0,column:0},textOrLines):this.insert({row:0,column:0},textOrLines)};(function(){oop.implement(this,EventEmitter),this.setValue=function(text){var len=this.getLength()-1;this.remove(new Range(0,0,len,this.getLine(len).length)),this.insert({row:0,column:0},text)},this.getValue=function(){return this.getAllLines().join(this.getNewLineCharacter())},this.createAnchor=function(row,column){return new Anchor(this,row,column)},this.$split=0===\"aaa\".split(/a/).length?function(text){return text.replace(/\\r\\n|\\r/g,\"\\n\").split(\"\\n\")}:function(text){return text.split(/\\r\\n|\\r|\\n/)},this.$detectNewLine=function(text){var match=text.match(/^.*?(\\r\\n|\\r|\\n)/m);this.$autoNewLine=match?match[1]:\"\\n\",this._signal(\"changeNewLineMode\")},this.getNewLineCharacter=function(){switch(this.$newLineMode){case\"windows\":return\"\\r\\n\";case\"unix\":return\"\\n\";default:return this.$autoNewLine||\"\\n\"}},this.$autoNewLine=\"\",this.$newLineMode=\"auto\",this.setNewLineMode=function(newLineMode){this.$newLineMode!==newLineMode&&(this.$newLineMode=newLineMode,this._signal(\"changeNewLineMode\"))},this.getNewLineMode=function(){return this.$newLineMode},this.isNewLine=function(text){return\"\\r\\n\"==text||\"\\r\"==text||\"\\n\"==text},this.getLine=function(row){return this.$lines[row]||\"\"},this.getLines=function(firstRow,lastRow){return this.$lines.slice(firstRow,lastRow+1)},this.getAllLines=function(){return this.getLines(0,this.getLength())},this.getLength=function(){return this.$lines.length},this.getTextRange=function(range){return this.getLinesForRange(range).join(this.getNewLineCharacter())},this.getLinesForRange=function(range){var lines;if(range.start.row===range.end.row)lines=[this.getLine(range.start.row).substring(range.start.column,range.end.column)];else{lines=this.getLines(range.start.row,range.end.row),lines[0]=(lines[0]||\"\").substring(range.start.column);var l=lines.length-1;range.end.row-range.start.row==l&&(lines[l]=lines[l].substring(0,range.end.column))}return lines},this.insertLines=function(row,lines){return console.warn(\"Use of document.insertLines is deprecated. Use the insertFullLines method instead.\"),this.insertFullLines(row,lines)},this.removeLines=function(firstRow,lastRow){return console.warn(\"Use of document.removeLines is deprecated. Use the removeFullLines method instead.\"),this.removeFullLines(firstRow,lastRow)},this.insertNewLine=function(position){return console.warn(\"Use of document.insertNewLine is deprecated. Use insertMergedLines(position, ['', '']) instead.\"),this.insertMergedLines(position,[\"\",\"\"])},this.insert=function(position,text){return 1>=this.getLength()&&this.$detectNewLine(text),this.insertMergedLines(position,this.$split(text))},this.insertInLine=function(position,text){var start=this.clippedPos(position.row,position.column),end=this.pos(position.row,position.column+text.length);return this.applyDelta({start:start,end:end,action:\"insert\",lines:[text]},!0),this.clonePos(end)},this.clippedPos=function(row,column){var length=this.getLength();void 0===row?row=length:0>row?row=0:row>=length&&(row=length-1,column=void 0);var line=this.getLine(row);return void 0==column&&(column=line.length),column=Math.min(Math.max(column,0),line.length),{row:row,column:column}},this.clonePos=function(pos){return{row:pos.row,column:pos.column}},this.pos=function(row,column){return{row:row,column:column}},this.$clipPosition=function(position){var length=this.getLength();return position.row>=length?(position.row=Math.max(0,length-1),position.column=this.getLine(length-1).length):(position.row=Math.max(0,position.row),position.column=Math.min(Math.max(position.column,0),this.getLine(position.row).length)),position},this.insertFullLines=function(row,lines){row=Math.min(Math.max(row,0),this.getLength());var column=0;this.getLength()>row?(lines=lines.concat([\"\"]),column=0):(lines=[\"\"].concat(lines),row--,column=this.$lines[row].length),this.insertMergedLines({row:row,column:column},lines)},this.insertMergedLines=function(position,lines){var start=this.clippedPos(position.row,position.column),end={row:start.row+lines.length-1,column:(1==lines.length?start.column:0)+lines[lines.length-1].length};return this.applyDelta({start:start,end:end,action:\"insert\",lines:lines}),this.clonePos(end)},this.remove=function(range){var start=this.clippedPos(range.start.row,range.start.column),end=this.clippedPos(range.end.row,range.end.column);return this.applyDelta({start:start,end:end,action:\"remove\",lines:this.getLinesForRange({start:start,end:end})}),this.clonePos(start)},this.removeInLine=function(row,startColumn,endColumn){var start=this.clippedPos(row,startColumn),end=this.clippedPos(row,endColumn);return this.applyDelta({start:start,end:end,action:\"remove\",lines:this.getLinesForRange({start:start,end:end})},!0),this.clonePos(start)},this.removeFullLines=function(firstRow,lastRow){firstRow=Math.min(Math.max(0,firstRow),this.getLength()-1),lastRow=Math.min(Math.max(0,lastRow),this.getLength()-1);var deleteFirstNewLine=lastRow==this.getLength()-1&&firstRow>0,deleteLastNewLine=this.getLength()-1>lastRow,startRow=deleteFirstNewLine?firstRow-1:firstRow,startCol=deleteFirstNewLine?this.getLine(startRow).length:0,endRow=deleteLastNewLine?lastRow+1:lastRow,endCol=deleteLastNewLine?0:this.getLine(endRow).length,range=new Range(startRow,startCol,endRow,endCol),deletedLines=this.$lines.slice(firstRow,lastRow+1);return this.applyDelta({start:range.start,end:range.end,action:\"remove\",lines:this.getLinesForRange(range)}),deletedLines},this.removeNewLine=function(row){this.getLength()-1>row&&row>=0&&this.applyDelta({start:this.pos(row,this.getLine(row).length),end:this.pos(row+1,0),action:\"remove\",lines:[\"\",\"\"]})},this.replace=function(range,text){if(range instanceof Range||(range=Range.fromPoints(range.start,range.end)),0===text.length&&range.isEmpty())return range.start;if(text==this.getTextRange(range))return range.end;this.remove(range);var end;return end=text?this.insert(range.start,text):range.start},this.applyDeltas=function(deltas){for(var i=0;deltas.length>i;i++)this.applyDelta(deltas[i])},this.revertDeltas=function(deltas){for(var i=deltas.length-1;i>=0;i--)this.revertDelta(deltas[i])},this.applyDelta=function(delta,doNotValidate){var isInsert=\"insert\"==delta.action;(isInsert?1>=delta.lines.length&&!delta.lines[0]:!Range.comparePoints(delta.start,delta.end))||(isInsert&&delta.lines.length>2e4&&this.$splitAndapplyLargeDelta(delta,2e4),applyDelta(this.$lines,delta,doNotValidate),this._signal(\"change\",delta))},this.$splitAndapplyLargeDelta=function(delta,MAX){for(var lines=delta.lines,l=lines.length,row=delta.start.row,column=delta.start.column,from=0,to=0;;){from=to,to+=MAX-1;var chunk=lines.slice(from,to);if(to>l){delta.lines=chunk,delta.start.row=row+from,delta.start.column=column;break}chunk.push(\"\"),this.applyDelta({start:this.pos(row+from,column),end:this.pos(row+to,column=0),action:delta.action,lines:chunk},!0)}},this.revertDelta=function(delta){this.applyDelta({start:this.clonePos(delta.start),end:this.clonePos(delta.end),action:\"insert\"==delta.action?\"remove\":\"insert\",lines:delta.lines.slice()})},this.indexToPosition=function(index,startRow){for(var lines=this.$lines||this.getAllLines(),newlineLength=this.getNewLineCharacter().length,i=startRow||0,l=lines.length;l>i;i++)if(index-=lines[i].length+newlineLength,0>index)return{row:i,column:index+lines[i].length+newlineLength};return{row:l-1,column:lines[l-1].length}},this.positionToIndex=function(pos,startRow){for(var lines=this.$lines||this.getAllLines(),newlineLength=this.getNewLineCharacter().length,index=0,row=Math.min(pos.row,lines.length),i=startRow||0;row>i;++i)index+=lines[i].length+newlineLength;return index+pos.column}}).call(Document.prototype),exports.Document=Document}),ace.define(\"ace/worker/mirror\",[\"require\",\"exports\",\"module\",\"ace/range\",\"ace/document\",\"ace/lib/lang\"],function(acequire,exports){\"use strict\";acequire(\"../range\").Range;var Document=acequire(\"../document\").Document,lang=acequire(\"../lib/lang\"),Mirror=exports.Mirror=function(sender){this.sender=sender;var doc=this.doc=new Document(\"\"),deferredUpdate=this.deferredUpdate=lang.delayedCall(this.onUpdate.bind(this)),_self=this;sender.on(\"change\",function(e){var data=e.data;if(data[0].start)doc.applyDeltas(data);else for(var i=0;data.length>i;i+=2){if(Array.isArray(data[i+1]))var d={action:\"insert\",start:data[i],lines:data[i+1]};else var d={action:\"remove\",start:data[i],end:data[i+1]};doc.applyDelta(d,!0)}return _self.$timeout?deferredUpdate.schedule(_self.$timeout):(_self.onUpdate(),void 0)})};(function(){this.$timeout=500,this.setTimeout=function(timeout){this.$timeout=timeout},this.setValue=function(value){this.doc.setValue(value),this.deferredUpdate.schedule(this.$timeout)},this.getValue=function(callbackId){this.sender.callback(this.doc.getValue(),callbackId)},this.onUpdate=function(){},this.isPending=function(){return this.deferredUpdate.isPending()}}).call(Mirror.prototype)}),ace.define(\"ace/mode/css/csslint\",[\"require\",\"exports\",\"module\"],function(acequire,exports,module){function objectToString(o){return Object.prototype.toString.call(o)}function clone(parent,circular,depth,prototype){function _clone(parent,depth){if(null===parent)return null;if(0==depth)return parent;var child;if(\"object\"!=typeof parent)return parent;if(util.isArray(parent))child=[];else if(util.isRegExp(parent))child=RegExp(parent.source,util.getRegExpFlags(parent)),parent.lastIndex&&(child.lastIndex=parent.lastIndex);else if(util.isDate(parent))child=new Date(parent.getTime());else{if(useBuffer&&Buffer.isBuffer(parent))return child=new Buffer(parent.length),parent.copy(child),child;child=prototype===void 0?Object.create(Object.getPrototypeOf(parent)):Object.create(prototype)}if(circular){var index=allParents.indexOf(parent);if(-1!=index)return allChildren[index];allParents.push(parent),allChildren.push(child)}for(var i in parent)child[i]=_clone(parent[i],depth-1);return child}var allParents=[],allChildren=[],useBuffer=\"undefined\"!=typeof Buffer;return circular===void 0&&(circular=!0),depth===void 0&&(depth=1/0),_clone(parent,depth)}function Reporter(lines,ruleset){this.messages=[],this.stats=[],this.lines=lines,this.ruleset=ruleset}var parserlib={};(function(){function EventTarget(){this._listeners={}}function StringReader(text){this._input=text.replace(/\\n\\r?/g,\"\\n\"),this._line=1,this._col=1,this._cursor=0}function SyntaxError(message,line,col){this.col=col,this.line=line,this.message=message}function SyntaxUnit(text,line,col,type){this.col=col,this.line=line,this.text=text,this.type=type}function TokenStreamBase(input,tokenData){this._reader=input?new StringReader(\"\"+input):null,this._token=null,this._tokenData=tokenData,this._lt=[],this._ltIndex=0,this._ltIndexCache=[]}EventTarget.prototype={constructor:EventTarget,addListener:function(type,listener){this._listeners[type]||(this._listeners[type]=[]),this._listeners[type].push(listener)},fire:function(event){if(\"string\"==typeof event&&(event={type:event}),event.target!==void 0&&(event.target=this),event.type===void 0)throw Error(\"Event object missing 'type' property.\");if(this._listeners[event.type])for(var listeners=this._listeners[event.type].concat(),i=0,len=listeners.length;len>i;i++)listeners[i].call(this,event)},removeListener:function(type,listener){if(this._listeners[type])for(var listeners=this._listeners[type],i=0,len=listeners.length;len>i;i++)if(listeners[i]===listener){listeners.splice(i,1);break}}},StringReader.prototype={constructor:StringReader,getCol:function(){return this._col},getLine:function(){return this._line},eof:function(){return this._cursor==this._input.length},peek:function(count){var c=null;return count=count===void 0?1:count,this._cursor<this._input.length&&(c=this._input.charAt(this._cursor+count-1)),c},read:function(){var c=null;return this._cursor<this._input.length&&(\"\\n\"==this._input.charAt(this._cursor)?(this._line++,this._col=1):this._col++,c=this._input.charAt(this._cursor++)),c},mark:function(){this._bookmark={cursor:this._cursor,line:this._line,col:this._col}},reset:function(){this._bookmark&&(this._cursor=this._bookmark.cursor,this._line=this._bookmark.line,this._col=this._bookmark.col,delete this._bookmark)},readTo:function(pattern){for(var c,buffer=\"\";buffer.length<pattern.length||buffer.lastIndexOf(pattern)!=buffer.length-pattern.length;){if(c=this.read(),!c)throw Error('Expected \"'+pattern+'\" at line '+this._line+\", col \"+this._col+\".\");buffer+=c}return buffer},readWhile:function(filter){for(var buffer=\"\",c=this.read();null!==c&&filter(c);)buffer+=c,c=this.read();return buffer},readMatch:function(matcher){var source=this._input.substring(this._cursor),value=null;return\"string\"==typeof matcher?0===source.indexOf(matcher)&&(value=this.readCount(matcher.length)):matcher instanceof RegExp&&matcher.test(source)&&(value=this.readCount(RegExp.lastMatch.length)),value},readCount:function(count){for(var buffer=\"\";count--;)buffer+=this.read();return buffer}},SyntaxError.prototype=Error(),SyntaxUnit.fromToken=function(token){return new SyntaxUnit(token.value,token.startLine,token.startCol)},SyntaxUnit.prototype={constructor:SyntaxUnit,valueOf:function(){return this.text},toString:function(){return this.text}},TokenStreamBase.createTokenData=function(tokens){var nameMap=[],typeMap={},tokenData=tokens.concat([]),i=0,len=tokenData.length+1;for(tokenData.UNKNOWN=-1,tokenData.unshift({name:\"EOF\"});len>i;i++)nameMap.push(tokenData[i].name),tokenData[tokenData[i].name]=i,tokenData[i].text&&(typeMap[tokenData[i].text]=i);return tokenData.name=function(tt){return nameMap[tt]},tokenData.type=function(c){return typeMap[c]},tokenData},TokenStreamBase.prototype={constructor:TokenStreamBase,match:function(tokenTypes,channel){tokenTypes instanceof Array||(tokenTypes=[tokenTypes]);\nfor(var tt=this.get(channel),i=0,len=tokenTypes.length;len>i;)if(tt==tokenTypes[i++])return!0;return this.unget(),!1},mustMatch:function(tokenTypes){var token;if(tokenTypes instanceof Array||(tokenTypes=[tokenTypes]),!this.match.apply(this,arguments))throw token=this.LT(1),new SyntaxError(\"Expected \"+this._tokenData[tokenTypes[0]].name+\" at line \"+token.startLine+\", col \"+token.startCol+\".\",token.startLine,token.startCol)},advance:function(tokenTypes,channel){for(;0!==this.LA(0)&&!this.match(tokenTypes,channel);)this.get();return this.LA(0)},get:function(channel){var token,info,tokenInfo=this._tokenData,i=(this._reader,0);if(tokenInfo.length,this._lt.length&&this._ltIndex>=0&&this._ltIndex<this._lt.length){for(i++,this._token=this._lt[this._ltIndex++],info=tokenInfo[this._token.type];void 0!==info.channel&&channel!==info.channel&&this._ltIndex<this._lt.length;)this._token=this._lt[this._ltIndex++],info=tokenInfo[this._token.type],i++;if((void 0===info.channel||channel===info.channel)&&this._ltIndex<=this._lt.length)return this._ltIndexCache.push(i),this._token.type}return token=this._getToken(),token.type>-1&&!tokenInfo[token.type].hide&&(token.channel=tokenInfo[token.type].channel,this._token=token,this._lt.push(token),this._ltIndexCache.push(this._lt.length-this._ltIndex+i),this._lt.length>5&&this._lt.shift(),this._ltIndexCache.length>5&&this._ltIndexCache.shift(),this._ltIndex=this._lt.length),info=tokenInfo[token.type],info&&(info.hide||void 0!==info.channel&&channel!==info.channel)?this.get(channel):token.type},LA:function(index){var tt,total=index;if(index>0){if(index>5)throw Error(\"Too much lookahead.\");for(;total;)tt=this.get(),total--;for(;index>total;)this.unget(),total++}else if(0>index){if(!this._lt[this._ltIndex+index])throw Error(\"Too much lookbehind.\");tt=this._lt[this._ltIndex+index].type}else tt=this._token.type;return tt},LT:function(index){return this.LA(index),this._lt[this._ltIndex+index-1]},peek:function(){return this.LA(1)},token:function(){return this._token},tokenName:function(tokenType){return 0>tokenType||tokenType>this._tokenData.length?\"UNKNOWN_TOKEN\":this._tokenData[tokenType].name},tokenType:function(tokenName){return this._tokenData[tokenName]||-1},unget:function(){if(!this._ltIndexCache.length)throw Error(\"Too much lookahead.\");this._ltIndex-=this._ltIndexCache.pop(),this._token=this._lt[this._ltIndex-1]}},parserlib.util={StringReader:StringReader,SyntaxError:SyntaxError,SyntaxUnit:SyntaxUnit,EventTarget:EventTarget,TokenStreamBase:TokenStreamBase}})(),function(){function Combinator(text,line,col){SyntaxUnit.call(this,text,line,col,Parser.COMBINATOR_TYPE),this.type=\"unknown\",/^\\s+$/.test(text)?this.type=\"descendant\":\">\"==text?this.type=\"child\":\"+\"==text?this.type=\"adjacent-sibling\":\"~\"==text&&(this.type=\"sibling\")}function MediaFeature(name,value){SyntaxUnit.call(this,\"(\"+name+(null!==value?\":\"+value:\"\")+\")\",name.startLine,name.startCol,Parser.MEDIA_FEATURE_TYPE),this.name=name,this.value=value}function MediaQuery(modifier,mediaType,features,line,col){SyntaxUnit.call(this,(modifier?modifier+\" \":\"\")+(mediaType?mediaType:\"\")+(mediaType&&features.length>0?\" and \":\"\")+features.join(\" and \"),line,col,Parser.MEDIA_QUERY_TYPE),this.modifier=modifier,this.mediaType=mediaType,this.features=features}function Parser(options){EventTarget.call(this),this.options=options||{},this._tokenStream=null}function PropertyName(text,hack,line,col){SyntaxUnit.call(this,text,line,col,Parser.PROPERTY_NAME_TYPE),this.hack=hack}function PropertyValue(parts,line,col){SyntaxUnit.call(this,parts.join(\" \"),line,col,Parser.PROPERTY_VALUE_TYPE),this.parts=parts}function PropertyValueIterator(value){this._i=0,this._parts=value.parts,this._marks=[],this.value=value}function PropertyValuePart(text,line,col){SyntaxUnit.call(this,text,line,col,Parser.PROPERTY_VALUE_PART_TYPE),this.type=\"unknown\";var temp;if(/^([+\\-]?[\\d\\.]+)([a-z]+)$/i.test(text))switch(this.type=\"dimension\",this.value=+RegExp.$1,this.units=RegExp.$2,this.units.toLowerCase()){case\"em\":case\"rem\":case\"ex\":case\"px\":case\"cm\":case\"mm\":case\"in\":case\"pt\":case\"pc\":case\"ch\":case\"vh\":case\"vw\":case\"vmax\":case\"vmin\":this.type=\"length\";break;case\"deg\":case\"rad\":case\"grad\":this.type=\"angle\";break;case\"ms\":case\"s\":this.type=\"time\";break;case\"hz\":case\"khz\":this.type=\"frequency\";break;case\"dpi\":case\"dpcm\":this.type=\"resolution\"}else/^([+\\-]?[\\d\\.]+)%$/i.test(text)?(this.type=\"percentage\",this.value=+RegExp.$1):/^([+\\-]?\\d+)$/i.test(text)?(this.type=\"integer\",this.value=+RegExp.$1):/^([+\\-]?[\\d\\.]+)$/i.test(text)?(this.type=\"number\",this.value=+RegExp.$1):/^#([a-f0-9]{3,6})/i.test(text)?(this.type=\"color\",temp=RegExp.$1,3==temp.length?(this.red=parseInt(temp.charAt(0)+temp.charAt(0),16),this.green=parseInt(temp.charAt(1)+temp.charAt(1),16),this.blue=parseInt(temp.charAt(2)+temp.charAt(2),16)):(this.red=parseInt(temp.substring(0,2),16),this.green=parseInt(temp.substring(2,4),16),this.blue=parseInt(temp.substring(4,6),16))):/^rgb\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)\\s*\\)/i.test(text)?(this.type=\"color\",this.red=+RegExp.$1,this.green=+RegExp.$2,this.blue=+RegExp.$3):/^rgb\\(\\s*(\\d+)%\\s*,\\s*(\\d+)%\\s*,\\s*(\\d+)%\\s*\\)/i.test(text)?(this.type=\"color\",this.red=255*+RegExp.$1/100,this.green=255*+RegExp.$2/100,this.blue=255*+RegExp.$3/100):/^rgba\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*([\\d\\.]+)\\s*\\)/i.test(text)?(this.type=\"color\",this.red=+RegExp.$1,this.green=+RegExp.$2,this.blue=+RegExp.$3,this.alpha=+RegExp.$4):/^rgba\\(\\s*(\\d+)%\\s*,\\s*(\\d+)%\\s*,\\s*(\\d+)%\\s*,\\s*([\\d\\.]+)\\s*\\)/i.test(text)?(this.type=\"color\",this.red=255*+RegExp.$1/100,this.green=255*+RegExp.$2/100,this.blue=255*+RegExp.$3/100,this.alpha=+RegExp.$4):/^hsl\\(\\s*(\\d+)\\s*,\\s*(\\d+)%\\s*,\\s*(\\d+)%\\s*\\)/i.test(text)?(this.type=\"color\",this.hue=+RegExp.$1,this.saturation=+RegExp.$2/100,this.lightness=+RegExp.$3/100):/^hsla\\(\\s*(\\d+)\\s*,\\s*(\\d+)%\\s*,\\s*(\\d+)%\\s*,\\s*([\\d\\.]+)\\s*\\)/i.test(text)?(this.type=\"color\",this.hue=+RegExp.$1,this.saturation=+RegExp.$2/100,this.lightness=+RegExp.$3/100,this.alpha=+RegExp.$4):/^url\\([\"']?([^\\)\"']+)[\"']?\\)/i.test(text)?(this.type=\"uri\",this.uri=RegExp.$1):/^([^\\(]+)\\(/i.test(text)?(this.type=\"function\",this.name=RegExp.$1,this.value=text):/^[\"'][^\"']*[\"']/.test(text)?(this.type=\"string\",this.value=eval(text)):Colors[text.toLowerCase()]?(this.type=\"color\",temp=Colors[text.toLowerCase()].substring(1),this.red=parseInt(temp.substring(0,2),16),this.green=parseInt(temp.substring(2,4),16),this.blue=parseInt(temp.substring(4,6),16)):/^[\\,\\/]$/.test(text)?(this.type=\"operator\",this.value=text):/^[a-z\\-_\\u0080-\\uFFFF][a-z0-9\\-_\\u0080-\\uFFFF]*$/i.test(text)&&(this.type=\"identifier\",this.value=text)}function Selector(parts,line,col){SyntaxUnit.call(this,parts.join(\" \"),line,col,Parser.SELECTOR_TYPE),this.parts=parts,this.specificity=Specificity.calculate(this)}function SelectorPart(elementName,modifiers,text,line,col){SyntaxUnit.call(this,text,line,col,Parser.SELECTOR_PART_TYPE),this.elementName=elementName,this.modifiers=modifiers}function SelectorSubPart(text,type,line,col){SyntaxUnit.call(this,text,line,col,Parser.SELECTOR_SUB_PART_TYPE),this.type=type,this.args=[]}function Specificity(a,b,c,d){this.a=a,this.b=b,this.c=c,this.d=d}function isHexDigit(c){return null!==c&&h.test(c)}function isDigit(c){return null!==c&&/\\d/.test(c)}function isWhitespace(c){return null!==c&&/\\s/.test(c)}function isNewLine(c){return null!==c&&nl.test(c)}function isNameStart(c){return null!==c&&/[a-z_\\u0080-\\uFFFF\\\\]/i.test(c)}function isNameChar(c){return null!==c&&(isNameStart(c)||/[0-9\\-\\\\]/.test(c))}function isIdentStart(c){return null!==c&&(isNameStart(c)||/\\-\\\\/.test(c))}function mix(receiver,supplier){for(var prop in supplier)supplier.hasOwnProperty(prop)&&(receiver[prop]=supplier[prop]);return receiver}function TokenStream(input){TokenStreamBase.call(this,input,Tokens)}function ValidationError(message,line,col){this.col=col,this.line=line,this.message=message}var EventTarget=parserlib.util.EventTarget,TokenStreamBase=parserlib.util.TokenStreamBase,StringReader=parserlib.util.StringReader,SyntaxError=parserlib.util.SyntaxError,SyntaxUnit=parserlib.util.SyntaxUnit,Colors={aliceblue:\"#f0f8ff\",antiquewhite:\"#faebd7\",aqua:\"#00ffff\",aquamarine:\"#7fffd4\",azure:\"#f0ffff\",beige:\"#f5f5dc\",bisque:\"#ffe4c4\",black:\"#000000\",blanchedalmond:\"#ffebcd\",blue:\"#0000ff\",blueviolet:\"#8a2be2\",brown:\"#a52a2a\",burlywood:\"#deb887\",cadetblue:\"#5f9ea0\",chartreuse:\"#7fff00\",chocolate:\"#d2691e\",coral:\"#ff7f50\",cornflowerblue:\"#6495ed\",cornsilk:\"#fff8dc\",crimson:\"#dc143c\",cyan:\"#00ffff\",darkblue:\"#00008b\",darkcyan:\"#008b8b\",darkgoldenrod:\"#b8860b\",darkgray:\"#a9a9a9\",darkgrey:\"#a9a9a9\",darkgreen:\"#006400\",darkkhaki:\"#bdb76b\",darkmagenta:\"#8b008b\",darkolivegreen:\"#556b2f\",darkorange:\"#ff8c00\",darkorchid:\"#9932cc\",darkred:\"#8b0000\",darksalmon:\"#e9967a\",darkseagreen:\"#8fbc8f\",darkslateblue:\"#483d8b\",darkslategray:\"#2f4f4f\",darkslategrey:\"#2f4f4f\",darkturquoise:\"#00ced1\",darkviolet:\"#9400d3\",deeppink:\"#ff1493\",deepskyblue:\"#00bfff\",dimgray:\"#696969\",dimgrey:\"#696969\",dodgerblue:\"#1e90ff\",firebrick:\"#b22222\",floralwhite:\"#fffaf0\",forestgreen:\"#228b22\",fuchsia:\"#ff00ff\",gainsboro:\"#dcdcdc\",ghostwhite:\"#f8f8ff\",gold:\"#ffd700\",goldenrod:\"#daa520\",gray:\"#808080\",grey:\"#808080\",green:\"#008000\",greenyellow:\"#adff2f\",honeydew:\"#f0fff0\",hotpink:\"#ff69b4\",indianred:\"#cd5c5c\",indigo:\"#4b0082\",ivory:\"#fffff0\",khaki:\"#f0e68c\",lavender:\"#e6e6fa\",lavenderblush:\"#fff0f5\",lawngreen:\"#7cfc00\",lemonchiffon:\"#fffacd\",lightblue:\"#add8e6\",lightcoral:\"#f08080\",lightcyan:\"#e0ffff\",lightgoldenrodyellow:\"#fafad2\",lightgray:\"#d3d3d3\",lightgrey:\"#d3d3d3\",lightgreen:\"#90ee90\",lightpink:\"#ffb6c1\",lightsalmon:\"#ffa07a\",lightseagreen:\"#20b2aa\",lightskyblue:\"#87cefa\",lightslategray:\"#778899\",lightslategrey:\"#778899\",lightsteelblue:\"#b0c4de\",lightyellow:\"#ffffe0\",lime:\"#00ff00\",limegreen:\"#32cd32\",linen:\"#faf0e6\",magenta:\"#ff00ff\",maroon:\"#800000\",mediumaquamarine:\"#66cdaa\",mediumblue:\"#0000cd\",mediumorchid:\"#ba55d3\",mediumpurple:\"#9370d8\",mediumseagreen:\"#3cb371\",mediumslateblue:\"#7b68ee\",mediumspringgreen:\"#00fa9a\",mediumturquoise:\"#48d1cc\",mediumvioletred:\"#c71585\",midnightblue:\"#191970\",mintcream:\"#f5fffa\",mistyrose:\"#ffe4e1\",moccasin:\"#ffe4b5\",navajowhite:\"#ffdead\",navy:\"#000080\",oldlace:\"#fdf5e6\",olive:\"#808000\",olivedrab:\"#6b8e23\",orange:\"#ffa500\",orangered:\"#ff4500\",orchid:\"#da70d6\",palegoldenrod:\"#eee8aa\",palegreen:\"#98fb98\",paleturquoise:\"#afeeee\",palevioletred:\"#d87093\",papayawhip:\"#ffefd5\",peachpuff:\"#ffdab9\",peru:\"#cd853f\",pink:\"#ffc0cb\",plum:\"#dda0dd\",powderblue:\"#b0e0e6\",purple:\"#800080\",red:\"#ff0000\",rosybrown:\"#bc8f8f\",royalblue:\"#4169e1\",saddlebrown:\"#8b4513\",salmon:\"#fa8072\",sandybrown:\"#f4a460\",seagreen:\"#2e8b57\",seashell:\"#fff5ee\",sienna:\"#a0522d\",silver:\"#c0c0c0\",skyblue:\"#87ceeb\",slateblue:\"#6a5acd\",slategray:\"#708090\",slategrey:\"#708090\",snow:\"#fffafa\",springgreen:\"#00ff7f\",steelblue:\"#4682b4\",tan:\"#d2b48c\",teal:\"#008080\",thistle:\"#d8bfd8\",tomato:\"#ff6347\",turquoise:\"#40e0d0\",violet:\"#ee82ee\",wheat:\"#f5deb3\",white:\"#ffffff\",whitesmoke:\"#f5f5f5\",yellow:\"#ffff00\",yellowgreen:\"#9acd32\",activeBorder:\"Active window border.\",activecaption:\"Active window caption.\",appworkspace:\"Background color of multiple document interface.\",background:\"Desktop background.\",buttonface:\"The face background color for 3-D elements that appear 3-D due to one layer of surrounding border.\",buttonhighlight:\"The color of the border facing the light source for 3-D elements that appear 3-D due to one layer of surrounding border.\",buttonshadow:\"The color of the border away from the light source for 3-D elements that appear 3-D due to one layer of surrounding border.\",buttontext:\"Text on push buttons.\",captiontext:\"Text in caption, size box, and scrollbar arrow box.\",graytext:\"Grayed (disabled) text. This color is set to #000 if the current display driver does not support a solid gray color.\",greytext:\"Greyed (disabled) text. This color is set to #000 if the current display driver does not support a solid grey color.\",highlight:\"Item(s) selected in a control.\",highlighttext:\"Text of item(s) selected in a control.\",inactiveborder:\"Inactive window border.\",inactivecaption:\"Inactive window caption.\",inactivecaptiontext:\"Color of text in an inactive caption.\",infobackground:\"Background color for tooltip controls.\",infotext:\"Text color for tooltip controls.\",menu:\"Menu background.\",menutext:\"Text in menus.\",scrollbar:\"Scroll bar gray area.\",threeddarkshadow:\"The color of the darker (generally outer) of the two borders away from the light source for 3-D elements that appear 3-D due to two concentric layers of surrounding border.\",threedface:\"The face background color for 3-D elements that appear 3-D due to two concentric layers of surrounding border.\",threedhighlight:\"The color of the lighter (generally outer) of the two borders facing the light source for 3-D elements that appear 3-D due to two concentric layers of surrounding border.\",threedlightshadow:\"The color of the darker (generally inner) of the two borders facing the light source for 3-D elements that appear 3-D due to two concentric layers of surrounding border.\",threedshadow:\"The color of the lighter (generally inner) of the two borders away from the light source for 3-D elements that appear 3-D due to two concentric layers of surrounding border.\",window:\"Window background.\",windowframe:\"Window frame.\",windowtext:\"Text in windows.\"};Combinator.prototype=new SyntaxUnit,Combinator.prototype.constructor=Combinator,MediaFeature.prototype=new SyntaxUnit,MediaFeature.prototype.constructor=MediaFeature,MediaQuery.prototype=new SyntaxUnit,MediaQuery.prototype.constructor=MediaQuery,Parser.DEFAULT_TYPE=0,Parser.COMBINATOR_TYPE=1,Parser.MEDIA_FEATURE_TYPE=2,Parser.MEDIA_QUERY_TYPE=3,Parser.PROPERTY_NAME_TYPE=4,Parser.PROPERTY_VALUE_TYPE=5,Parser.PROPERTY_VALUE_PART_TYPE=6,Parser.SELECTOR_TYPE=7,Parser.SELECTOR_PART_TYPE=8,Parser.SELECTOR_SUB_PART_TYPE=9,Parser.prototype=function(){var prop,proto=new EventTarget,additions={constructor:Parser,DEFAULT_TYPE:0,COMBINATOR_TYPE:1,MEDIA_FEATURE_TYPE:2,MEDIA_QUERY_TYPE:3,PROPERTY_NAME_TYPE:4,PROPERTY_VALUE_TYPE:5,PROPERTY_VALUE_PART_TYPE:6,SELECTOR_TYPE:7,SELECTOR_PART_TYPE:8,SELECTOR_SUB_PART_TYPE:9,_stylesheet:function(){var count,token,tt,tokenStream=this._tokenStream;for(this.fire(\"startstylesheet\"),this._charset(),this._skipCruft();tokenStream.peek()==Tokens.IMPORT_SYM;)this._import(),this._skipCruft();for(;tokenStream.peek()==Tokens.NAMESPACE_SYM;)this._namespace(),this._skipCruft();for(tt=tokenStream.peek();tt>Tokens.EOF;){try{switch(tt){case Tokens.MEDIA_SYM:this._media(),this._skipCruft();break;case Tokens.PAGE_SYM:this._page(),this._skipCruft();break;case Tokens.FONT_FACE_SYM:this._font_face(),this._skipCruft();break;case Tokens.KEYFRAMES_SYM:this._keyframes(),this._skipCruft();break;case Tokens.VIEWPORT_SYM:this._viewport(),this._skipCruft();break;case Tokens.UNKNOWN_SYM:if(tokenStream.get(),this.options.strict)throw new SyntaxError(\"Unknown @ rule.\",tokenStream.LT(0).startLine,tokenStream.LT(0).startCol);for(this.fire({type:\"error\",error:null,message:\"Unknown @ rule: \"+tokenStream.LT(0).value+\".\",line:tokenStream.LT(0).startLine,col:tokenStream.LT(0).startCol}),count=0;tokenStream.advance([Tokens.LBRACE,Tokens.RBRACE])==Tokens.LBRACE;)count++;for(;count;)tokenStream.advance([Tokens.RBRACE]),count--;break;case Tokens.S:this._readWhitespace();break;default:if(!this._ruleset())switch(tt){case Tokens.CHARSET_SYM:throw token=tokenStream.LT(1),this._charset(!1),new SyntaxError(\"@charset not allowed here.\",token.startLine,token.startCol);case Tokens.IMPORT_SYM:throw token=tokenStream.LT(1),this._import(!1),new SyntaxError(\"@import not allowed here.\",token.startLine,token.startCol);case Tokens.NAMESPACE_SYM:throw token=tokenStream.LT(1),this._namespace(!1),new SyntaxError(\"@namespace not allowed here.\",token.startLine,token.startCol);default:tokenStream.get(),this._unexpectedToken(tokenStream.token())}}}catch(ex){if(!(ex instanceof SyntaxError)||this.options.strict)throw ex;this.fire({type:\"error\",error:ex,message:ex.message,line:ex.line,col:ex.col})}tt=tokenStream.peek()}tt!=Tokens.EOF&&this._unexpectedToken(tokenStream.token()),this.fire(\"endstylesheet\")},_charset:function(emit){var charset,token,line,col,tokenStream=this._tokenStream;tokenStream.match(Tokens.CHARSET_SYM)&&(line=tokenStream.token().startLine,col=tokenStream.token().startCol,this._readWhitespace(),tokenStream.mustMatch(Tokens.STRING),token=tokenStream.token(),charset=token.value,this._readWhitespace(),tokenStream.mustMatch(Tokens.SEMICOLON),emit!==!1&&this.fire({type:\"charset\",charset:charset,line:line,col:col}))},_import:function(emit){var uri,importToken,tokenStream=this._tokenStream,mediaList=[];tokenStream.mustMatch(Tokens.IMPORT_SYM),importToken=tokenStream.token(),this._readWhitespace(),tokenStream.mustMatch([Tokens.STRING,Tokens.URI]),uri=tokenStream.token().value.replace(/^(?:url\\()?[\"']?([^\"']+?)[\"']?\\)?$/,\"$1\"),this._readWhitespace(),mediaList=this._media_query_list(),tokenStream.mustMatch(Tokens.SEMICOLON),this._readWhitespace(),emit!==!1&&this.fire({type:\"import\",uri:uri,media:mediaList,line:importToken.startLine,col:importToken.startCol})},_namespace:function(emit){var line,col,prefix,uri,tokenStream=this._tokenStream;tokenStream.mustMatch(Tokens.NAMESPACE_SYM),line=tokenStream.token().startLine,col=tokenStream.token().startCol,this._readWhitespace(),tokenStream.match(Tokens.IDENT)&&(prefix=tokenStream.token().value,this._readWhitespace()),tokenStream.mustMatch([Tokens.STRING,Tokens.URI]),uri=tokenStream.token().value.replace(/(?:url\\()?[\"']([^\"']+)[\"']\\)?/,\"$1\"),this._readWhitespace(),tokenStream.mustMatch(Tokens.SEMICOLON),this._readWhitespace(),emit!==!1&&this.fire({type:\"namespace\",prefix:prefix,uri:uri,line:line,col:col})},_media:function(){var line,col,mediaList,tokenStream=this._tokenStream;for(tokenStream.mustMatch(Tokens.MEDIA_SYM),line=tokenStream.token().startLine,col=tokenStream.token().startCol,this._readWhitespace(),mediaList=this._media_query_list(),tokenStream.mustMatch(Tokens.LBRACE),this._readWhitespace(),this.fire({type:\"startmedia\",media:mediaList,line:line,col:col});;)if(tokenStream.peek()==Tokens.PAGE_SYM)this._page();else if(tokenStream.peek()==Tokens.FONT_FACE_SYM)this._font_face();else if(tokenStream.peek()==Tokens.VIEWPORT_SYM)this._viewport();else if(!this._ruleset())break;tokenStream.mustMatch(Tokens.RBRACE),this._readWhitespace(),this.fire({type:\"endmedia\",media:mediaList,line:line,col:col})},_media_query_list:function(){var tokenStream=this._tokenStream,mediaList=[];for(this._readWhitespace(),(tokenStream.peek()==Tokens.IDENT||tokenStream.peek()==Tokens.LPAREN)&&mediaList.push(this._media_query());tokenStream.match(Tokens.COMMA);)this._readWhitespace(),mediaList.push(this._media_query());return mediaList},_media_query:function(){var tokenStream=this._tokenStream,type=null,ident=null,token=null,expressions=[];if(tokenStream.match(Tokens.IDENT)&&(ident=tokenStream.token().value.toLowerCase(),\"only\"!=ident&&\"not\"!=ident?(tokenStream.unget(),ident=null):token=tokenStream.token()),this._readWhitespace(),tokenStream.peek()==Tokens.IDENT?(type=this._media_type(),null===token&&(token=tokenStream.token())):tokenStream.peek()==Tokens.LPAREN&&(null===token&&(token=tokenStream.LT(1)),expressions.push(this._media_expression())),null===type&&0===expressions.length)return null;for(this._readWhitespace();tokenStream.match(Tokens.IDENT);)\"and\"!=tokenStream.token().value.toLowerCase()&&this._unexpectedToken(tokenStream.token()),this._readWhitespace(),expressions.push(this._media_expression());return new MediaQuery(ident,type,expressions,token.startLine,token.startCol)},_media_type:function(){return this._media_feature()},_media_expression:function(){var token,tokenStream=this._tokenStream,feature=null,expression=null;return tokenStream.mustMatch(Tokens.LPAREN),feature=this._media_feature(),this._readWhitespace(),tokenStream.match(Tokens.COLON)&&(this._readWhitespace(),token=tokenStream.LT(1),expression=this._expression()),tokenStream.mustMatch(Tokens.RPAREN),this._readWhitespace(),new MediaFeature(feature,expression?new SyntaxUnit(expression,token.startLine,token.startCol):null)},_media_feature:function(){var tokenStream=this._tokenStream;return tokenStream.mustMatch(Tokens.IDENT),SyntaxUnit.fromToken(tokenStream.token())},_page:function(){var line,col,tokenStream=this._tokenStream,identifier=null,pseudoPage=null;tokenStream.mustMatch(Tokens.PAGE_SYM),line=tokenStream.token().startLine,col=tokenStream.token().startCol,this._readWhitespace(),tokenStream.match(Tokens.IDENT)&&(identifier=tokenStream.token().value,\"auto\"===identifier.toLowerCase()&&this._unexpectedToken(tokenStream.token())),tokenStream.peek()==Tokens.COLON&&(pseudoPage=this._pseudo_page()),this._readWhitespace(),this.fire({type:\"startpage\",id:identifier,pseudo:pseudoPage,line:line,col:col}),this._readDeclarations(!0,!0),this.fire({type:\"endpage\",id:identifier,pseudo:pseudoPage,line:line,col:col})},_margin:function(){var line,col,tokenStream=this._tokenStream,marginSym=this._margin_sym();return marginSym?(line=tokenStream.token().startLine,col=tokenStream.token().startCol,this.fire({type:\"startpagemargin\",margin:marginSym,line:line,col:col}),this._readDeclarations(!0),this.fire({type:\"endpagemargin\",margin:marginSym,line:line,col:col}),!0):!1},_margin_sym:function(){var tokenStream=this._tokenStream;return tokenStream.match([Tokens.TOPLEFTCORNER_SYM,Tokens.TOPLEFT_SYM,Tokens.TOPCENTER_SYM,Tokens.TOPRIGHT_SYM,Tokens.TOPRIGHTCORNER_SYM,Tokens.BOTTOMLEFTCORNER_SYM,Tokens.BOTTOMLEFT_SYM,Tokens.BOTTOMCENTER_SYM,Tokens.BOTTOMRIGHT_SYM,Tokens.BOTTOMRIGHTCORNER_SYM,Tokens.LEFTTOP_SYM,Tokens.LEFTMIDDLE_SYM,Tokens.LEFTBOTTOM_SYM,Tokens.RIGHTTOP_SYM,Tokens.RIGHTMIDDLE_SYM,Tokens.RIGHTBOTTOM_SYM])?SyntaxUnit.fromToken(tokenStream.token()):null},_pseudo_page:function(){var tokenStream=this._tokenStream;return tokenStream.mustMatch(Tokens.COLON),tokenStream.mustMatch(Tokens.IDENT),tokenStream.token().value},_font_face:function(){var line,col,tokenStream=this._tokenStream;tokenStream.mustMatch(Tokens.FONT_FACE_SYM),line=tokenStream.token().startLine,col=tokenStream.token().startCol,this._readWhitespace(),this.fire({type:\"startfontface\",line:line,col:col}),this._readDeclarations(!0),this.fire({type:\"endfontface\",line:line,col:col})},_viewport:function(){var line,col,tokenStream=this._tokenStream;tokenStream.mustMatch(Tokens.VIEWPORT_SYM),line=tokenStream.token().startLine,col=tokenStream.token().startCol,this._readWhitespace(),this.fire({type:\"startviewport\",line:line,col:col}),this._readDeclarations(!0),this.fire({type:\"endviewport\",line:line,col:col})},_operator:function(inFunction){var tokenStream=this._tokenStream,token=null;return(tokenStream.match([Tokens.SLASH,Tokens.COMMA])||inFunction&&tokenStream.match([Tokens.PLUS,Tokens.STAR,Tokens.MINUS]))&&(token=tokenStream.token(),this._readWhitespace()),token?PropertyValuePart.fromToken(token):null},_combinator:function(){var token,tokenStream=this._tokenStream,value=null;return tokenStream.match([Tokens.PLUS,Tokens.GREATER,Tokens.TILDE])&&(token=tokenStream.token(),value=new Combinator(token.value,token.startLine,token.startCol),this._readWhitespace()),value},_unary_operator:function(){var tokenStream=this._tokenStream;return tokenStream.match([Tokens.MINUS,Tokens.PLUS])?tokenStream.token().value:null},_property:function(){var tokenValue,token,line,col,tokenStream=this._tokenStream,value=null,hack=null;return tokenStream.peek()==Tokens.STAR&&this.options.starHack&&(tokenStream.get(),token=tokenStream.token(),hack=token.value,line=token.startLine,col=token.startCol),tokenStream.match(Tokens.IDENT)&&(token=tokenStream.token(),tokenValue=token.value,\"_\"==tokenValue.charAt(0)&&this.options.underscoreHack&&(hack=\"_\",tokenValue=tokenValue.substring(1)),value=new PropertyName(tokenValue,hack,line||token.startLine,col||token.startCol),this._readWhitespace()),value},_ruleset:function(){var tt,selectors,tokenStream=this._tokenStream;try{selectors=this._selectors_group()}catch(ex){if(!(ex instanceof SyntaxError)||this.options.strict)throw ex;if(this.fire({type:\"error\",error:ex,message:ex.message,line:ex.line,col:ex.col}),tt=tokenStream.advance([Tokens.RBRACE]),tt!=Tokens.RBRACE)throw ex;return!0}return selectors&&(this.fire({type:\"startrule\",selectors:selectors,line:selectors[0].line,col:selectors[0].col}),this._readDeclarations(!0),this.fire({type:\"endrule\",selectors:selectors,line:selectors[0].line,col:selectors[0].col})),selectors},_selectors_group:function(){var selector,tokenStream=this._tokenStream,selectors=[];if(selector=this._selector(),null!==selector)for(selectors.push(selector);tokenStream.match(Tokens.COMMA);)this._readWhitespace(),selector=this._selector(),null!==selector?selectors.push(selector):this._unexpectedToken(tokenStream.LT(1));return selectors.length?selectors:null},_selector:function(){var tokenStream=this._tokenStream,selector=[],nextSelector=null,combinator=null,ws=null;if(nextSelector=this._simple_selector_sequence(),null===nextSelector)return null;for(selector.push(nextSelector);;)if(combinator=this._combinator(),null!==combinator)selector.push(combinator),nextSelector=this._simple_selector_sequence(),null===nextSelector?this._unexpectedToken(tokenStream.LT(1)):selector.push(nextSelector);else{if(!this._readWhitespace())break;ws=new Combinator(tokenStream.token().value,tokenStream.token().startLine,tokenStream.token().startCol),combinator=this._combinator(),nextSelector=this._simple_selector_sequence(),null===nextSelector?null!==combinator&&this._unexpectedToken(tokenStream.LT(1)):(null!==combinator?selector.push(combinator):selector.push(ws),selector.push(nextSelector))}return new Selector(selector,selector[0].line,selector[0].col)},_simple_selector_sequence:function(){var line,col,tokenStream=this._tokenStream,elementName=null,modifiers=[],selectorText=\"\",components=[function(){return tokenStream.match(Tokens.HASH)?new SelectorSubPart(tokenStream.token().value,\"id\",tokenStream.token().startLine,tokenStream.token().startCol):null},this._class,this._attrib,this._pseudo,this._negation],i=0,len=components.length,component=null;for(line=tokenStream.LT(1).startLine,col=tokenStream.LT(1).startCol,elementName=this._type_selector(),elementName||(elementName=this._universal()),null!==elementName&&(selectorText+=elementName);;){if(tokenStream.peek()===Tokens.S)break;for(;len>i&&null===component;)component=components[i++].call(this);if(null===component){if(\"\"===selectorText)return null;break}i=0,modifiers.push(component),selectorText+=\"\"+component,component=null}return\"\"!==selectorText?new SelectorPart(elementName,modifiers,selectorText,line,col):null},_type_selector:function(){var tokenStream=this._tokenStream,ns=this._namespace_prefix(),elementName=this._element_name();return elementName?(ns&&(elementName.text=ns+elementName.text,elementName.col-=ns.length),elementName):(ns&&(tokenStream.unget(),ns.length>1&&tokenStream.unget()),null)},_class:function(){var token,tokenStream=this._tokenStream;return tokenStream.match(Tokens.DOT)?(tokenStream.mustMatch(Tokens.IDENT),token=tokenStream.token(),new SelectorSubPart(\".\"+token.value,\"class\",token.startLine,token.startCol-1)):null},_element_name:function(){var token,tokenStream=this._tokenStream;return tokenStream.match(Tokens.IDENT)?(token=tokenStream.token(),new SelectorSubPart(token.value,\"elementName\",token.startLine,token.startCol)):null},_namespace_prefix:function(){var tokenStream=this._tokenStream,value=\"\";return(tokenStream.LA(1)===Tokens.PIPE||tokenStream.LA(2)===Tokens.PIPE)&&(tokenStream.match([Tokens.IDENT,Tokens.STAR])&&(value+=tokenStream.token().value),tokenStream.mustMatch(Tokens.PIPE),value+=\"|\"),value.length?value:null},_universal:function(){var ns,tokenStream=this._tokenStream,value=\"\";return ns=this._namespace_prefix(),ns&&(value+=ns),tokenStream.match(Tokens.STAR)&&(value+=\"*\"),value.length?value:null},_attrib:function(){var ns,token,tokenStream=this._tokenStream,value=null;return tokenStream.match(Tokens.LBRACKET)?(token=tokenStream.token(),value=token.value,value+=this._readWhitespace(),ns=this._namespace_prefix(),ns&&(value+=ns),tokenStream.mustMatch(Tokens.IDENT),value+=tokenStream.token().value,value+=this._readWhitespace(),tokenStream.match([Tokens.PREFIXMATCH,Tokens.SUFFIXMATCH,Tokens.SUBSTRINGMATCH,Tokens.EQUALS,Tokens.INCLUDES,Tokens.DASHMATCH])&&(value+=tokenStream.token().value,value+=this._readWhitespace(),tokenStream.mustMatch([Tokens.IDENT,Tokens.STRING]),value+=tokenStream.token().value,value+=this._readWhitespace()),tokenStream.mustMatch(Tokens.RBRACKET),new SelectorSubPart(value+\"]\",\"attribute\",token.startLine,token.startCol)):null},_pseudo:function(){var line,col,tokenStream=this._tokenStream,pseudo=null,colons=\":\";return tokenStream.match(Tokens.COLON)&&(tokenStream.match(Tokens.COLON)&&(colons+=\":\"),tokenStream.match(Tokens.IDENT)?(pseudo=tokenStream.token().value,line=tokenStream.token().startLine,col=tokenStream.token().startCol-colons.length):tokenStream.peek()==Tokens.FUNCTION&&(line=tokenStream.LT(1).startLine,col=tokenStream.LT(1).startCol-colons.length,pseudo=this._functional_pseudo()),pseudo&&(pseudo=new SelectorSubPart(colons+pseudo,\"pseudo\",line,col))),pseudo},_functional_pseudo:function(){var tokenStream=this._tokenStream,value=null;return tokenStream.match(Tokens.FUNCTION)&&(value=tokenStream.token().value,value+=this._readWhitespace(),value+=this._expression(),tokenStream.mustMatch(Tokens.RPAREN),value+=\")\"),value},_expression:function(){for(var tokenStream=this._tokenStream,value=\"\";tokenStream.match([Tokens.PLUS,Tokens.MINUS,Tokens.DIMENSION,Tokens.NUMBER,Tokens.STRING,Tokens.IDENT,Tokens.LENGTH,Tokens.FREQ,Tokens.ANGLE,Tokens.TIME,Tokens.RESOLUTION,Tokens.SLASH]);)value+=tokenStream.token().value,value+=this._readWhitespace();return value.length?value:null},_negation:function(){var line,col,arg,tokenStream=this._tokenStream,value=\"\",subpart=null;return tokenStream.match(Tokens.NOT)&&(value=tokenStream.token().value,line=tokenStream.token().startLine,col=tokenStream.token().startCol,value+=this._readWhitespace(),arg=this._negation_arg(),value+=arg,value+=this._readWhitespace(),tokenStream.match(Tokens.RPAREN),value+=tokenStream.token().value,subpart=new SelectorSubPart(value,\"not\",line,col),subpart.args.push(arg)),subpart},_negation_arg:function(){var line,col,part,tokenStream=this._tokenStream,args=[this._type_selector,this._universal,function(){return tokenStream.match(Tokens.HASH)?new SelectorSubPart(tokenStream.token().value,\"id\",tokenStream.token().startLine,tokenStream.token().startCol):null},this._class,this._attrib,this._pseudo],arg=null,i=0,len=args.length;for(line=tokenStream.LT(1).startLine,col=tokenStream.LT(1).startCol;len>i&&null===arg;)arg=args[i].call(this),i++;return null===arg&&this._unexpectedToken(tokenStream.LT(1)),part=\"elementName\"==arg.type?new SelectorPart(arg,[],\"\"+arg,line,col):new SelectorPart(null,[arg],\"\"+arg,line,col)},_declaration:function(){var tokenStream=this._tokenStream,property=null,expr=null,prio=null,invalid=null,propertyName=\"\";if(property=this._property(),null!==property){tokenStream.mustMatch(Tokens.COLON),this._readWhitespace(),expr=this._expr(),expr&&0!==expr.length||this._unexpectedToken(tokenStream.LT(1)),prio=this._prio(),propertyName=\"\"+property,(this.options.starHack&&\"*\"==property.hack||this.options.underscoreHack&&\"_\"==property.hack)&&(propertyName=property.text);try{this._validateProperty(propertyName,expr)}catch(ex){invalid=ex}return this.fire({type:\"property\",property:property,value:expr,important:prio,line:property.line,col:property.col,invalid:invalid}),!0}return!1},_prio:function(){var tokenStream=this._tokenStream,result=tokenStream.match(Tokens.IMPORTANT_SYM);return this._readWhitespace(),result},_expr:function(inFunction){var values=(this._tokenStream,[]),value=null,operator=null;if(value=this._term(inFunction),null!==value)for(values.push(value);;){if(operator=this._operator(inFunction),operator&&values.push(operator),value=this._term(inFunction),null===value)break;\nvalues.push(value)}return values.length>0?new PropertyValue(values,values[0].line,values[0].col):null},_term:function(inFunction){var token,line,col,tokenStream=this._tokenStream,unary=null,value=null,endChar=null;return unary=this._unary_operator(),null!==unary&&(line=tokenStream.token().startLine,col=tokenStream.token().startCol),tokenStream.peek()==Tokens.IE_FUNCTION&&this.options.ieFilters?(value=this._ie_function(),null===unary&&(line=tokenStream.token().startLine,col=tokenStream.token().startCol)):inFunction&&tokenStream.match([Tokens.LPAREN,Tokens.LBRACE,Tokens.LBRACKET])?(token=tokenStream.token(),endChar=token.endChar,value=token.value+this._expr(inFunction).text,null===unary&&(line=tokenStream.token().startLine,col=tokenStream.token().startCol),tokenStream.mustMatch(Tokens.type(endChar)),value+=endChar,this._readWhitespace()):tokenStream.match([Tokens.NUMBER,Tokens.PERCENTAGE,Tokens.LENGTH,Tokens.ANGLE,Tokens.TIME,Tokens.FREQ,Tokens.STRING,Tokens.IDENT,Tokens.URI,Tokens.UNICODE_RANGE])?(value=tokenStream.token().value,null===unary&&(line=tokenStream.token().startLine,col=tokenStream.token().startCol),this._readWhitespace()):(token=this._hexcolor(),null===token?(null===unary&&(line=tokenStream.LT(1).startLine,col=tokenStream.LT(1).startCol),null===value&&(value=tokenStream.LA(3)==Tokens.EQUALS&&this.options.ieFilters?this._ie_function():this._function())):(value=token.value,null===unary&&(line=token.startLine,col=token.startCol))),null!==value?new PropertyValuePart(null!==unary?unary+value:value,line,col):null},_function:function(){var lt,tokenStream=this._tokenStream,functionText=null,expr=null;if(tokenStream.match(Tokens.FUNCTION)){if(functionText=tokenStream.token().value,this._readWhitespace(),expr=this._expr(!0),functionText+=expr,this.options.ieFilters&&tokenStream.peek()==Tokens.EQUALS)do for(this._readWhitespace()&&(functionText+=tokenStream.token().value),tokenStream.LA(0)==Tokens.COMMA&&(functionText+=tokenStream.token().value),tokenStream.match(Tokens.IDENT),functionText+=tokenStream.token().value,tokenStream.match(Tokens.EQUALS),functionText+=tokenStream.token().value,lt=tokenStream.peek();lt!=Tokens.COMMA&&lt!=Tokens.S&&lt!=Tokens.RPAREN;)tokenStream.get(),functionText+=tokenStream.token().value,lt=tokenStream.peek();while(tokenStream.match([Tokens.COMMA,Tokens.S]));tokenStream.match(Tokens.RPAREN),functionText+=\")\",this._readWhitespace()}return functionText},_ie_function:function(){var lt,tokenStream=this._tokenStream,functionText=null;if(tokenStream.match([Tokens.IE_FUNCTION,Tokens.FUNCTION])){functionText=tokenStream.token().value;do for(this._readWhitespace()&&(functionText+=tokenStream.token().value),tokenStream.LA(0)==Tokens.COMMA&&(functionText+=tokenStream.token().value),tokenStream.match(Tokens.IDENT),functionText+=tokenStream.token().value,tokenStream.match(Tokens.EQUALS),functionText+=tokenStream.token().value,lt=tokenStream.peek();lt!=Tokens.COMMA&&lt!=Tokens.S&&lt!=Tokens.RPAREN;)tokenStream.get(),functionText+=tokenStream.token().value,lt=tokenStream.peek();while(tokenStream.match([Tokens.COMMA,Tokens.S]));tokenStream.match(Tokens.RPAREN),functionText+=\")\",this._readWhitespace()}return functionText},_hexcolor:function(){var color,tokenStream=this._tokenStream,token=null;if(tokenStream.match(Tokens.HASH)){if(token=tokenStream.token(),color=token.value,!/#[a-f0-9]{3,6}/i.test(color))throw new SyntaxError(\"Expected a hex color but found '\"+color+\"' at line \"+token.startLine+\", col \"+token.startCol+\".\",token.startLine,token.startCol);this._readWhitespace()}return token},_keyframes:function(){var token,tt,name,tokenStream=this._tokenStream,prefix=\"\";for(tokenStream.mustMatch(Tokens.KEYFRAMES_SYM),token=tokenStream.token(),/^@\\-([^\\-]+)\\-/.test(token.value)&&(prefix=RegExp.$1),this._readWhitespace(),name=this._keyframe_name(),this._readWhitespace(),tokenStream.mustMatch(Tokens.LBRACE),this.fire({type:\"startkeyframes\",name:name,prefix:prefix,line:token.startLine,col:token.startCol}),this._readWhitespace(),tt=tokenStream.peek();tt==Tokens.IDENT||tt==Tokens.PERCENTAGE;)this._keyframe_rule(),this._readWhitespace(),tt=tokenStream.peek();this.fire({type:\"endkeyframes\",name:name,prefix:prefix,line:token.startLine,col:token.startCol}),this._readWhitespace(),tokenStream.mustMatch(Tokens.RBRACE)},_keyframe_name:function(){var tokenStream=this._tokenStream;return tokenStream.mustMatch([Tokens.IDENT,Tokens.STRING]),SyntaxUnit.fromToken(tokenStream.token())},_keyframe_rule:function(){var keyList=(this._tokenStream,this._key_list());this.fire({type:\"startkeyframerule\",keys:keyList,line:keyList[0].line,col:keyList[0].col}),this._readDeclarations(!0),this.fire({type:\"endkeyframerule\",keys:keyList,line:keyList[0].line,col:keyList[0].col})},_key_list:function(){var tokenStream=this._tokenStream,keyList=[];for(keyList.push(this._key()),this._readWhitespace();tokenStream.match(Tokens.COMMA);)this._readWhitespace(),keyList.push(this._key()),this._readWhitespace();return keyList},_key:function(){var token,tokenStream=this._tokenStream;if(tokenStream.match(Tokens.PERCENTAGE))return SyntaxUnit.fromToken(tokenStream.token());if(tokenStream.match(Tokens.IDENT)){if(token=tokenStream.token(),/from|to/i.test(token.value))return SyntaxUnit.fromToken(token);tokenStream.unget()}this._unexpectedToken(tokenStream.LT(1))},_skipCruft:function(){for(;this._tokenStream.match([Tokens.S,Tokens.CDO,Tokens.CDC]););},_readDeclarations:function(checkStart,readMargins){var tt,tokenStream=this._tokenStream;this._readWhitespace(),checkStart&&tokenStream.mustMatch(Tokens.LBRACE),this._readWhitespace();try{for(;;){if(tokenStream.match(Tokens.SEMICOLON)||readMargins&&this._margin());else{if(!this._declaration())break;if(!tokenStream.match(Tokens.SEMICOLON))break}this._readWhitespace()}tokenStream.mustMatch(Tokens.RBRACE),this._readWhitespace()}catch(ex){if(!(ex instanceof SyntaxError)||this.options.strict)throw ex;if(this.fire({type:\"error\",error:ex,message:ex.message,line:ex.line,col:ex.col}),tt=tokenStream.advance([Tokens.SEMICOLON,Tokens.RBRACE]),tt==Tokens.SEMICOLON)this._readDeclarations(!1,readMargins);else if(tt!=Tokens.RBRACE)throw ex}},_readWhitespace:function(){for(var tokenStream=this._tokenStream,ws=\"\";tokenStream.match(Tokens.S);)ws+=tokenStream.token().value;return ws},_unexpectedToken:function(token){throw new SyntaxError(\"Unexpected token '\"+token.value+\"' at line \"+token.startLine+\", col \"+token.startCol+\".\",token.startLine,token.startCol)},_verifyEnd:function(){this._tokenStream.LA(1)!=Tokens.EOF&&this._unexpectedToken(this._tokenStream.LT(1))},_validateProperty:function(property,value){Validation.validate(property,value)},parse:function(input){this._tokenStream=new TokenStream(input,Tokens),this._stylesheet()},parseStyleSheet:function(input){return this.parse(input)},parseMediaQuery:function(input){this._tokenStream=new TokenStream(input,Tokens);var result=this._media_query();return this._verifyEnd(),result},parsePropertyValue:function(input){this._tokenStream=new TokenStream(input,Tokens),this._readWhitespace();var result=this._expr();return this._readWhitespace(),this._verifyEnd(),result},parseRule:function(input){this._tokenStream=new TokenStream(input,Tokens),this._readWhitespace();var result=this._ruleset();return this._readWhitespace(),this._verifyEnd(),result},parseSelector:function(input){this._tokenStream=new TokenStream(input,Tokens),this._readWhitespace();var result=this._selector();return this._readWhitespace(),this._verifyEnd(),result},parseStyleAttribute:function(input){input+=\"}\",this._tokenStream=new TokenStream(input,Tokens),this._readDeclarations()}};for(prop in additions)additions.hasOwnProperty(prop)&&(proto[prop]=additions[prop]);return proto}();var Properties={\"align-items\":\"flex-start | flex-end | center | baseline | stretch\",\"align-content\":\"flex-start | flex-end | center | space-between | space-around | stretch\",\"align-self\":\"auto | flex-start | flex-end | center | baseline | stretch\",\"-webkit-align-items\":\"flex-start | flex-end | center | baseline | stretch\",\"-webkit-align-content\":\"flex-start | flex-end | center | space-between | space-around | stretch\",\"-webkit-align-self\":\"auto | flex-start | flex-end | center | baseline | stretch\",\"alignment-adjust\":\"auto | baseline | before-edge | text-before-edge | middle | central | after-edge | text-after-edge | ideographic | alphabetic | hanging | mathematical | <percentage> | <length>\",\"alignment-baseline\":\"baseline | use-script | before-edge | text-before-edge | after-edge | text-after-edge | central | middle | ideographic | alphabetic | hanging | mathematical\",animation:1,\"animation-delay\":{multi:\"<time>\",comma:!0},\"animation-direction\":{multi:\"normal | alternate\",comma:!0},\"animation-duration\":{multi:\"<time>\",comma:!0},\"animation-fill-mode\":{multi:\"none | forwards | backwards | both\",comma:!0},\"animation-iteration-count\":{multi:\"<number> | infinite\",comma:!0},\"animation-name\":{multi:\"none | <ident>\",comma:!0},\"animation-play-state\":{multi:\"running | paused\",comma:!0},\"animation-timing-function\":1,\"-moz-animation-delay\":{multi:\"<time>\",comma:!0},\"-moz-animation-direction\":{multi:\"normal | alternate\",comma:!0},\"-moz-animation-duration\":{multi:\"<time>\",comma:!0},\"-moz-animation-iteration-count\":{multi:\"<number> | infinite\",comma:!0},\"-moz-animation-name\":{multi:\"none | <ident>\",comma:!0},\"-moz-animation-play-state\":{multi:\"running | paused\",comma:!0},\"-ms-animation-delay\":{multi:\"<time>\",comma:!0},\"-ms-animation-direction\":{multi:\"normal | alternate\",comma:!0},\"-ms-animation-duration\":{multi:\"<time>\",comma:!0},\"-ms-animation-iteration-count\":{multi:\"<number> | infinite\",comma:!0},\"-ms-animation-name\":{multi:\"none | <ident>\",comma:!0},\"-ms-animation-play-state\":{multi:\"running | paused\",comma:!0},\"-webkit-animation-delay\":{multi:\"<time>\",comma:!0},\"-webkit-animation-direction\":{multi:\"normal | alternate\",comma:!0},\"-webkit-animation-duration\":{multi:\"<time>\",comma:!0},\"-webkit-animation-fill-mode\":{multi:\"none | forwards | backwards | both\",comma:!0},\"-webkit-animation-iteration-count\":{multi:\"<number> | infinite\",comma:!0},\"-webkit-animation-name\":{multi:\"none | <ident>\",comma:!0},\"-webkit-animation-play-state\":{multi:\"running | paused\",comma:!0},\"-o-animation-delay\":{multi:\"<time>\",comma:!0},\"-o-animation-direction\":{multi:\"normal | alternate\",comma:!0},\"-o-animation-duration\":{multi:\"<time>\",comma:!0},\"-o-animation-iteration-count\":{multi:\"<number> | infinite\",comma:!0},\"-o-animation-name\":{multi:\"none | <ident>\",comma:!0},\"-o-animation-play-state\":{multi:\"running | paused\",comma:!0},appearance:\"icon | window | desktop | workspace | document | tooltip | dialog | button | push-button | hyperlink | radio-button | checkbox | menu-item | tab | menu | menubar | pull-down-menu | pop-up-menu | list-menu | radio-group | checkbox-group | outline-tree | range | field | combo-box | signature | password | normal | none | inherit\",azimuth:function(expression){var part,simple=\"<angle> | leftwards | rightwards | inherit\",direction=\"left-side | far-left | left | center-left | center | center-right | right | far-right | right-side\",behind=!1,valid=!1;if(ValidationTypes.isAny(expression,simple)||(ValidationTypes.isAny(expression,\"behind\")&&(behind=!0,valid=!0),ValidationTypes.isAny(expression,direction)&&(valid=!0,behind||ValidationTypes.isAny(expression,\"behind\"))),expression.hasNext())throw part=expression.next(),valid?new ValidationError(\"Expected end of value but found '\"+part+\"'.\",part.line,part.col):new ValidationError(\"Expected (<'azimuth'>) but found '\"+part+\"'.\",part.line,part.col)},\"backface-visibility\":\"visible | hidden\",background:1,\"background-attachment\":{multi:\"<attachment>\",comma:!0},\"background-clip\":{multi:\"<box>\",comma:!0},\"background-color\":\"<color> | inherit\",\"background-image\":{multi:\"<bg-image>\",comma:!0},\"background-origin\":{multi:\"<box>\",comma:!0},\"background-position\":{multi:\"<bg-position>\",comma:!0},\"background-repeat\":{multi:\"<repeat-style>\"},\"background-size\":{multi:\"<bg-size>\",comma:!0},\"baseline-shift\":\"baseline | sub | super | <percentage> | <length>\",behavior:1,binding:1,bleed:\"<length>\",\"bookmark-label\":\"<content> | <attr> | <string>\",\"bookmark-level\":\"none | <integer>\",\"bookmark-state\":\"open | closed\",\"bookmark-target\":\"none | <uri> | <attr>\",border:\"<border-width> || <border-style> || <color>\",\"border-bottom\":\"<border-width> || <border-style> || <color>\",\"border-bottom-color\":\"<color> | inherit\",\"border-bottom-left-radius\":\"<x-one-radius>\",\"border-bottom-right-radius\":\"<x-one-radius>\",\"border-bottom-style\":\"<border-style>\",\"border-bottom-width\":\"<border-width>\",\"border-collapse\":\"collapse | separate | inherit\",\"border-color\":{multi:\"<color> | inherit\",max:4},\"border-image\":1,\"border-image-outset\":{multi:\"<length> | <number>\",max:4},\"border-image-repeat\":{multi:\"stretch | repeat | round\",max:2},\"border-image-slice\":function(expression){var part,valid=!1,numeric=\"<number> | <percentage>\",fill=!1,count=0,max=4;for(ValidationTypes.isAny(expression,\"fill\")&&(fill=!0,valid=!0);expression.hasNext()&&max>count&&(valid=ValidationTypes.isAny(expression,numeric));)count++;if(fill?valid=!0:ValidationTypes.isAny(expression,\"fill\"),expression.hasNext())throw part=expression.next(),valid?new ValidationError(\"Expected end of value but found '\"+part+\"'.\",part.line,part.col):new ValidationError(\"Expected ([<number> | <percentage>]{1,4} && fill?) but found '\"+part+\"'.\",part.line,part.col)},\"border-image-source\":\"<image> | none\",\"border-image-width\":{multi:\"<length> | <percentage> | <number> | auto\",max:4},\"border-left\":\"<border-width> || <border-style> || <color>\",\"border-left-color\":\"<color> | inherit\",\"border-left-style\":\"<border-style>\",\"border-left-width\":\"<border-width>\",\"border-radius\":function(expression){for(var part,valid=!1,simple=\"<length> | <percentage> | inherit\",slash=!1,count=0,max=8;expression.hasNext()&&max>count;){if(valid=ValidationTypes.isAny(expression,simple),!valid){if(!(\"/\"==expression.peek()&&count>0)||slash)break;slash=!0,max=count+5,expression.next()}count++}if(expression.hasNext())throw part=expression.next(),valid?new ValidationError(\"Expected end of value but found '\"+part+\"'.\",part.line,part.col):new ValidationError(\"Expected (<'border-radius'>) but found '\"+part+\"'.\",part.line,part.col)},\"border-right\":\"<border-width> || <border-style> || <color>\",\"border-right-color\":\"<color> | inherit\",\"border-right-style\":\"<border-style>\",\"border-right-width\":\"<border-width>\",\"border-spacing\":{multi:\"<length> | inherit\",max:2},\"border-style\":{multi:\"<border-style>\",max:4},\"border-top\":\"<border-width> || <border-style> || <color>\",\"border-top-color\":\"<color> | inherit\",\"border-top-left-radius\":\"<x-one-radius>\",\"border-top-right-radius\":\"<x-one-radius>\",\"border-top-style\":\"<border-style>\",\"border-top-width\":\"<border-width>\",\"border-width\":{multi:\"<border-width>\",max:4},bottom:\"<margin-width> | inherit\",\"-moz-box-align\":\"start | end | center | baseline | stretch\",\"-moz-box-decoration-break\":\"slice |clone\",\"-moz-box-direction\":\"normal | reverse | inherit\",\"-moz-box-flex\":\"<number>\",\"-moz-box-flex-group\":\"<integer>\",\"-moz-box-lines\":\"single | multiple\",\"-moz-box-ordinal-group\":\"<integer>\",\"-moz-box-orient\":\"horizontal | vertical | inline-axis | block-axis | inherit\",\"-moz-box-pack\":\"start | end | center | justify\",\"-webkit-box-align\":\"start | end | center | baseline | stretch\",\"-webkit-box-decoration-break\":\"slice |clone\",\"-webkit-box-direction\":\"normal | reverse | inherit\",\"-webkit-box-flex\":\"<number>\",\"-webkit-box-flex-group\":\"<integer>\",\"-webkit-box-lines\":\"single | multiple\",\"-webkit-box-ordinal-group\":\"<integer>\",\"-webkit-box-orient\":\"horizontal | vertical | inline-axis | block-axis | inherit\",\"-webkit-box-pack\":\"start | end | center | justify\",\"box-shadow\":function(expression){var part;if(ValidationTypes.isAny(expression,\"none\")){if(expression.hasNext())throw part=expression.next(),new ValidationError(\"Expected end of value but found '\"+part+\"'.\",part.line,part.col)}else Validation.multiProperty(\"<shadow>\",expression,!0,1/0)},\"box-sizing\":\"content-box | border-box | inherit\",\"break-after\":\"auto | always | avoid | left | right | page | column | avoid-page | avoid-column\",\"break-before\":\"auto | always | avoid | left | right | page | column | avoid-page | avoid-column\",\"break-inside\":\"auto | avoid | avoid-page | avoid-column\",\"caption-side\":\"top | bottom | inherit\",clear:\"none | right | left | both | inherit\",clip:1,color:\"<color> | inherit\",\"color-profile\":1,\"column-count\":\"<integer> | auto\",\"column-fill\":\"auto | balance\",\"column-gap\":\"<length> | normal\",\"column-rule\":\"<border-width> || <border-style> || <color>\",\"column-rule-color\":\"<color>\",\"column-rule-style\":\"<border-style>\",\"column-rule-width\":\"<border-width>\",\"column-span\":\"none | all\",\"column-width\":\"<length> | auto\",columns:1,content:1,\"counter-increment\":1,\"counter-reset\":1,crop:\"<shape> | auto\",cue:\"cue-after | cue-before | inherit\",\"cue-after\":1,\"cue-before\":1,cursor:1,direction:\"ltr | rtl | inherit\",display:\"inline | block | list-item | inline-block | table | inline-table | table-row-group | table-header-group | table-footer-group | table-row | table-column-group | table-column | table-cell | table-caption | grid | inline-grid | none | inherit | -moz-box | -moz-inline-block | -moz-inline-box | -moz-inline-grid | -moz-inline-stack | -moz-inline-table | -moz-grid | -moz-grid-group | -moz-grid-line | -moz-groupbox | -moz-deck | -moz-popup | -moz-stack | -moz-marker | -webkit-box | -webkit-inline-box | -ms-flexbox | -ms-inline-flexbox | flex | -webkit-flex | inline-flex | -webkit-inline-flex\",\"dominant-baseline\":1,\"drop-initial-after-adjust\":\"central | middle | after-edge | text-after-edge | ideographic | alphabetic | mathematical | <percentage> | <length>\",\"drop-initial-after-align\":\"baseline | use-script | before-edge | text-before-edge | after-edge | text-after-edge | central | middle | ideographic | alphabetic | hanging | mathematical\",\"drop-initial-before-adjust\":\"before-edge | text-before-edge | central | middle | hanging | mathematical | <percentage> | <length>\",\"drop-initial-before-align\":\"caps-height | baseline | use-script | before-edge | text-before-edge | after-edge | text-after-edge | central | middle | ideographic | alphabetic | hanging | mathematical\",\"drop-initial-size\":\"auto | line | <length> | <percentage>\",\"drop-initial-value\":\"initial | <integer>\",elevation:\"<angle> | below | level | above | higher | lower | inherit\",\"empty-cells\":\"show | hide | inherit\",filter:1,fit:\"fill | hidden | meet | slice\",\"fit-position\":1,flex:\"<flex>\",\"flex-basis\":\"<width>\",\"flex-direction\":\"row | row-reverse | column | column-reverse\",\"flex-flow\":\"<flex-direction> || <flex-wrap>\",\"flex-grow\":\"<number>\",\"flex-shrink\":\"<number>\",\"flex-wrap\":\"nowrap | wrap | wrap-reverse\",\"-webkit-flex\":\"<flex>\",\"-webkit-flex-basis\":\"<width>\",\"-webkit-flex-direction\":\"row | row-reverse | column | column-reverse\",\"-webkit-flex-flow\":\"<flex-direction> || <flex-wrap>\",\"-webkit-flex-grow\":\"<number>\",\"-webkit-flex-shrink\":\"<number>\",\"-webkit-flex-wrap\":\"nowrap | wrap | wrap-reverse\",\"-ms-flex\":\"<flex>\",\"-ms-flex-align\":\"start | end | center | stretch | baseline\",\"-ms-flex-direction\":\"row | row-reverse | column | column-reverse | inherit\",\"-ms-flex-order\":\"<number>\",\"-ms-flex-pack\":\"start | end | center | justify\",\"-ms-flex-wrap\":\"nowrap | wrap | wrap-reverse\",\"float\":\"left | right | none | inherit\",\"float-offset\":1,font:1,\"font-family\":1,\"font-size\":\"<absolute-size> | <relative-size> | <length> | <percentage> | inherit\",\"font-size-adjust\":\"<number> | none | inherit\",\"font-stretch\":\"normal | ultra-condensed | extra-condensed | condensed | semi-condensed | semi-expanded | expanded | extra-expanded | ultra-expanded | inherit\",\"font-style\":\"normal | italic | oblique | inherit\",\"font-variant\":\"normal | small-caps | inherit\",\"font-weight\":\"normal | bold | bolder | lighter | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | inherit\",\"grid-cell-stacking\":\"columns | rows | layer\",\"grid-column\":1,\"grid-columns\":1,\"grid-column-align\":\"start | end | center | stretch\",\"grid-column-sizing\":1,\"grid-column-span\":\"<integer>\",\"grid-flow\":\"none | rows | columns\",\"grid-layer\":\"<integer>\",\"grid-row\":1,\"grid-rows\":1,\"grid-row-align\":\"start | end | center | stretch\",\"grid-row-span\":\"<integer>\",\"grid-row-sizing\":1,\"hanging-punctuation\":1,height:\"<margin-width> | <content-sizing> | inherit\",\"hyphenate-after\":\"<integer> | auto\",\"hyphenate-before\":\"<integer> | auto\",\"hyphenate-character\":\"<string> | auto\",\"hyphenate-lines\":\"no-limit | <integer>\",\"hyphenate-resource\":1,hyphens:\"none | manual | auto\",icon:1,\"image-orientation\":\"angle | auto\",\"image-rendering\":1,\"image-resolution\":1,\"inline-box-align\":\"initial | last | <integer>\",\"justify-content\":\"flex-start | flex-end | center | space-between | space-around\",\"-webkit-justify-content\":\"flex-start | flex-end | center | space-between | space-around\",left:\"<margin-width> | inherit\",\"letter-spacing\":\"<length> | normal | inherit\",\"line-height\":\"<number> | <length> | <percentage> | normal | inherit\",\"line-break\":\"auto | loose | normal | strict\",\"line-stacking\":1,\"line-stacking-ruby\":\"exclude-ruby | include-ruby\",\"line-stacking-shift\":\"consider-shifts | disregard-shifts\",\"line-stacking-strategy\":\"inline-line-height | block-line-height | max-height | grid-height\",\"list-style\":1,\"list-style-image\":\"<uri> | none | inherit\",\"list-style-position\":\"inside | outside | inherit\",\"list-style-type\":\"disc | circle | square | decimal | decimal-leading-zero | lower-roman | upper-roman | lower-greek | lower-latin | upper-latin | armenian | georgian | lower-alpha | upper-alpha | none | inherit\",margin:{multi:\"<margin-width> | inherit\",max:4},\"margin-bottom\":\"<margin-width> | inherit\",\"margin-left\":\"<margin-width> | inherit\",\"margin-right\":\"<margin-width> | inherit\",\"margin-top\":\"<margin-width> | inherit\",mark:1,\"mark-after\":1,\"mark-before\":1,marks:1,\"marquee-direction\":1,\"marquee-play-count\":1,\"marquee-speed\":1,\"marquee-style\":1,\"max-height\":\"<length> | <percentage> | <content-sizing> | none | inherit\",\"max-width\":\"<length> | <percentage> | <content-sizing> | none | inherit\",\"min-height\":\"<length> | <percentage> | <content-sizing> | contain-floats | -moz-contain-floats | -webkit-contain-floats | inherit\",\"min-width\":\"<length> | <percentage> | <content-sizing> | contain-floats | -moz-contain-floats | -webkit-contain-floats | inherit\",\"move-to\":1,\"nav-down\":1,\"nav-index\":1,\"nav-left\":1,\"nav-right\":1,\"nav-up\":1,opacity:\"<number> | inherit\",order:\"<integer>\",\"-webkit-order\":\"<integer>\",orphans:\"<integer> | inherit\",outline:1,\"outline-color\":\"<color> | invert | inherit\",\"outline-offset\":1,\"outline-style\":\"<border-style> | inherit\",\"outline-width\":\"<border-width> | inherit\",overflow:\"visible | hidden | scroll | auto | inherit\",\"overflow-style\":1,\"overflow-wrap\":\"normal | break-word\",\"overflow-x\":1,\"overflow-y\":1,padding:{multi:\"<padding-width> | inherit\",max:4},\"padding-bottom\":\"<padding-width> | inherit\",\"padding-left\":\"<padding-width> | inherit\",\"padding-right\":\"<padding-width> | inherit\",\"padding-top\":\"<padding-width> | inherit\",page:1,\"page-break-after\":\"auto | always | avoid | left | right | inherit\",\"page-break-before\":\"auto | always | avoid | left | right | inherit\",\"page-break-inside\":\"auto | avoid | inherit\",\"page-policy\":1,pause:1,\"pause-after\":1,\"pause-before\":1,perspective:1,\"perspective-origin\":1,phonemes:1,pitch:1,\"pitch-range\":1,\"play-during\":1,\"pointer-events\":\"auto | none | visiblePainted | visibleFill | visibleStroke | visible | painted | fill | stroke | all | inherit\",position:\"static | relative | absolute | fixed | inherit\",\"presentation-level\":1,\"punctuation-trim\":1,quotes:1,\"rendering-intent\":1,resize:1,rest:1,\"rest-after\":1,\"rest-before\":1,richness:1,right:\"<margin-width> | inherit\",rotation:1,\"rotation-point\":1,\"ruby-align\":1,\"ruby-overhang\":1,\"ruby-position\":1,\"ruby-span\":1,size:1,speak:\"normal | none | spell-out | inherit\",\"speak-header\":\"once | always | inherit\",\"speak-numeral\":\"digits | continuous | inherit\",\"speak-punctuation\":\"code | none | inherit\",\"speech-rate\":1,src:1,stress:1,\"string-set\":1,\"table-layout\":\"auto | fixed | inherit\",\"tab-size\":\"<integer> | <length>\",target:1,\"target-name\":1,\"target-new\":1,\"target-position\":1,\"text-align\":\"left | right | center | justify | inherit\",\"text-align-last\":1,\"text-decoration\":1,\"text-emphasis\":1,\"text-height\":1,\"text-indent\":\"<length> | <percentage> | inherit\",\"text-justify\":\"auto | none | inter-word | inter-ideograph | inter-cluster | distribute | kashida\",\"text-outline\":1,\"text-overflow\":1,\"text-rendering\":\"auto | optimizeSpeed | optimizeLegibility | geometricPrecision | inherit\",\"text-shadow\":1,\"text-transform\":\"capitalize | uppercase | lowercase | none | inherit\",\"text-wrap\":\"normal | none | avoid\",top:\"<margin-width> | inherit\",\"-ms-touch-action\":\"auto | none | pan-x | pan-y\",\"touch-action\":\"auto | none | pan-x | pan-y\",transform:1,\"transform-origin\":1,\"transform-style\":1,transition:1,\"transition-delay\":1,\"transition-duration\":1,\"transition-property\":1,\"transition-timing-function\":1,\"unicode-bidi\":\"normal | embed | isolate | bidi-override | isolate-override | plaintext | inherit\",\"user-modify\":\"read-only | read-write | write-only | inherit\",\"user-select\":\"none | text | toggle | element | elements | all | inherit\",\"vertical-align\":\"auto | use-script | baseline | sub | super | top | text-top | central | middle | bottom | text-bottom | <percentage> | <length>\",visibility:\"visible | hidden | collapse | inherit\",\"voice-balance\":1,\"voice-duration\":1,\"voice-family\":1,\"voice-pitch\":1,\"voice-pitch-range\":1,\"voice-rate\":1,\"voice-stress\":1,\"voice-volume\":1,volume:1,\"white-space\":\"normal | pre | nowrap | pre-wrap | pre-line | inherit | -pre-wrap | -o-pre-wrap | -moz-pre-wrap | -hp-pre-wrap\",\"white-space-collapse\":1,widows:\"<integer> | inherit\",width:\"<length> | <percentage> | <content-sizing> | auto | inherit\",\"word-break\":\"normal | keep-all | break-all\",\"word-spacing\":\"<length> | normal | inherit\",\"word-wrap\":\"normal | break-word\",\"writing-mode\":\"horizontal-tb | vertical-rl | vertical-lr | lr-tb | rl-tb | tb-rl | bt-rl | tb-lr | bt-lr | lr-bt | rl-bt | lr | rl | tb | inherit\",\"z-index\":\"<integer> | auto | inherit\",zoom:\"<number> | <percentage> | normal\"};PropertyName.prototype=new SyntaxUnit,PropertyName.prototype.constructor=PropertyName,PropertyName.prototype.toString=function(){return(this.hack?this.hack:\"\")+this.text},PropertyValue.prototype=new SyntaxUnit,PropertyValue.prototype.constructor=PropertyValue,PropertyValueIterator.prototype.count=function(){return this._parts.length},PropertyValueIterator.prototype.isFirst=function(){return 0===this._i},PropertyValueIterator.prototype.hasNext=function(){return this._i<this._parts.length},PropertyValueIterator.prototype.mark=function(){this._marks.push(this._i)},PropertyValueIterator.prototype.peek=function(count){return this.hasNext()?this._parts[this._i+(count||0)]:null},PropertyValueIterator.prototype.next=function(){return this.hasNext()?this._parts[this._i++]:null},PropertyValueIterator.prototype.previous=function(){return this._i>0?this._parts[--this._i]:null},PropertyValueIterator.prototype.restore=function(){this._marks.length&&(this._i=this._marks.pop())},PropertyValuePart.prototype=new SyntaxUnit,PropertyValuePart.prototype.constructor=PropertyValuePart,PropertyValuePart.fromToken=function(token){return new PropertyValuePart(token.value,token.startLine,token.startCol)};var Pseudos={\":first-letter\":1,\":first-line\":1,\":before\":1,\":after\":1};Pseudos.ELEMENT=1,Pseudos.CLASS=2,Pseudos.isElement=function(pseudo){return 0===pseudo.indexOf(\"::\")||Pseudos[pseudo.toLowerCase()]==Pseudos.ELEMENT},Selector.prototype=new SyntaxUnit,Selector.prototype.constructor=Selector,SelectorPart.prototype=new SyntaxUnit,SelectorPart.prototype.constructor=SelectorPart,SelectorSubPart.prototype=new SyntaxUnit,SelectorSubPart.prototype.constructor=SelectorSubPart,Specificity.prototype={constructor:Specificity,compare:function(other){var i,len,comps=[\"a\",\"b\",\"c\",\"d\"];for(i=0,len=comps.length;len>i;i++){if(this[comps[i]]<other[comps[i]])return-1;if(this[comps[i]]>other[comps[i]])return 1}return 0},valueOf:function(){return 1e3*this.a+100*this.b+10*this.c+this.d},toString:function(){return this.a+\",\"+this.b+\",\"+this.c+\",\"+this.d}},Specificity.calculate=function(selector){function updateValues(part){var i,j,len,num,modifier,elementName=part.elementName?part.elementName.text:\"\";for(elementName&&\"*\"!=elementName.charAt(elementName.length-1)&&d++,i=0,len=part.modifiers.length;len>i;i++)switch(modifier=part.modifiers[i],modifier.type){case\"class\":case\"attribute\":c++;break;case\"id\":b++;break;case\"pseudo\":Pseudos.isElement(modifier.text)?d++:c++;break;case\"not\":for(j=0,num=modifier.args.length;num>j;j++)updateValues(modifier.args[j])}}var i,len,part,b=0,c=0,d=0;for(i=0,len=selector.parts.length;len>i;i++)part=selector.parts[i],part instanceof SelectorPart&&updateValues(part);return new Specificity(0,b,c,d)};var h=/^[0-9a-fA-F]$/,nonascii=/^[\\u0080-\\uFFFF]$/,nl=/\\n|\\r\\n|\\r|\\f/;TokenStream.prototype=mix(new TokenStreamBase,{_getToken:function(){var c,reader=this._reader,token=null,startLine=reader.getLine(),startCol=reader.getCol();for(c=reader.read();c;){switch(c){case\"/\":token=\"*\"==reader.peek()?this.commentToken(c,startLine,startCol):this.charToken(c,startLine,startCol);break;case\"|\":case\"~\":case\"^\":case\"$\":case\"*\":token=\"=\"==reader.peek()?this.comparisonToken(c,startLine,startCol):this.charToken(c,startLine,startCol);break;case'\"':case\"'\":token=this.stringToken(c,startLine,startCol);break;case\"#\":token=isNameChar(reader.peek())?this.hashToken(c,startLine,startCol):this.charToken(c,startLine,startCol);break;case\".\":token=isDigit(reader.peek())?this.numberToken(c,startLine,startCol):this.charToken(c,startLine,startCol);break;case\"-\":token=\"-\"==reader.peek()?this.htmlCommentEndToken(c,startLine,startCol):isNameStart(reader.peek())?this.identOrFunctionToken(c,startLine,startCol):this.charToken(c,startLine,startCol);break;case\"!\":token=this.importantToken(c,startLine,startCol);break;case\"@\":token=this.atRuleToken(c,startLine,startCol);break;case\":\":token=this.notToken(c,startLine,startCol);break;case\"<\":token=this.htmlCommentStartToken(c,startLine,startCol);break;case\"U\":case\"u\":if(\"+\"==reader.peek()){token=this.unicodeRangeToken(c,startLine,startCol);break}default:token=isDigit(c)?this.numberToken(c,startLine,startCol):isWhitespace(c)?this.whitespaceToken(c,startLine,startCol):isIdentStart(c)?this.identOrFunctionToken(c,startLine,startCol):this.charToken(c,startLine,startCol)}break}return token||null!==c||(token=this.createToken(Tokens.EOF,null,startLine,startCol)),token},createToken:function(tt,value,startLine,startCol,options){var reader=this._reader;return options=options||{},{value:value,type:tt,channel:options.channel,endChar:options.endChar,hide:options.hide||!1,startLine:startLine,startCol:startCol,endLine:reader.getLine(),endCol:reader.getCol()}},atRuleToken:function(first,startLine,startCol){var ident,rule=first,reader=this._reader,tt=Tokens.CHAR;return reader.mark(),ident=this.readName(),rule=first+ident,tt=Tokens.type(rule.toLowerCase()),(tt==Tokens.CHAR||tt==Tokens.UNKNOWN)&&(rule.length>1?tt=Tokens.UNKNOWN_SYM:(tt=Tokens.CHAR,rule=first,reader.reset())),this.createToken(tt,rule,startLine,startCol)},charToken:function(c,startLine,startCol){var tt=Tokens.type(c),opts={};return-1==tt?tt=Tokens.CHAR:opts.endChar=Tokens[tt].endChar,this.createToken(tt,c,startLine,startCol,opts)},commentToken:function(first,startLine,startCol){var comment=(this._reader,this.readComment(first));return this.createToken(Tokens.COMMENT,comment,startLine,startCol)},comparisonToken:function(c,startLine,startCol){var reader=this._reader,comparison=c+reader.read(),tt=Tokens.type(comparison)||Tokens.CHAR;return this.createToken(tt,comparison,startLine,startCol)},hashToken:function(first,startLine,startCol){var name=(this._reader,this.readName(first));return this.createToken(Tokens.HASH,name,startLine,startCol)\n},htmlCommentStartToken:function(first,startLine,startCol){var reader=this._reader,text=first;return reader.mark(),text+=reader.readCount(3),\"<!--\"==text?this.createToken(Tokens.CDO,text,startLine,startCol):(reader.reset(),this.charToken(first,startLine,startCol))},htmlCommentEndToken:function(first,startLine,startCol){var reader=this._reader,text=first;return reader.mark(),text+=reader.readCount(2),\"-->\"==text?this.createToken(Tokens.CDC,text,startLine,startCol):(reader.reset(),this.charToken(first,startLine,startCol))},identOrFunctionToken:function(first,startLine,startCol){var reader=this._reader,ident=this.readName(first),tt=Tokens.IDENT;return\"(\"==reader.peek()?(ident+=reader.read(),\"url(\"==ident.toLowerCase()?(tt=Tokens.URI,ident=this.readURI(ident),\"url(\"==ident.toLowerCase()&&(tt=Tokens.FUNCTION)):tt=Tokens.FUNCTION):\":\"==reader.peek()&&\"progid\"==ident.toLowerCase()&&(ident+=reader.readTo(\"(\"),tt=Tokens.IE_FUNCTION),this.createToken(tt,ident,startLine,startCol)},importantToken:function(first,startLine,startCol){var temp,c,reader=this._reader,important=first,tt=Tokens.CHAR;for(reader.mark(),c=reader.read();c;){if(\"/\"==c){if(\"*\"!=reader.peek())break;if(temp=this.readComment(c),\"\"===temp)break}else{if(!isWhitespace(c)){if(/i/i.test(c)){temp=reader.readCount(8),/mportant/i.test(temp)&&(important+=c+temp,tt=Tokens.IMPORTANT_SYM);break}break}important+=c+this.readWhitespace()}c=reader.read()}return tt==Tokens.CHAR?(reader.reset(),this.charToken(first,startLine,startCol)):this.createToken(tt,important,startLine,startCol)},notToken:function(first,startLine,startCol){var reader=this._reader,text=first;return reader.mark(),text+=reader.readCount(4),\":not(\"==text.toLowerCase()?this.createToken(Tokens.NOT,text,startLine,startCol):(reader.reset(),this.charToken(first,startLine,startCol))},numberToken:function(first,startLine,startCol){var ident,reader=this._reader,value=this.readNumber(first),tt=Tokens.NUMBER,c=reader.peek();return isIdentStart(c)?(ident=this.readName(reader.read()),value+=ident,tt=/^em$|^ex$|^px$|^gd$|^rem$|^vw$|^vh$|^vmax$|^vmin$|^ch$|^cm$|^mm$|^in$|^pt$|^pc$/i.test(ident)?Tokens.LENGTH:/^deg|^rad$|^grad$/i.test(ident)?Tokens.ANGLE:/^ms$|^s$/i.test(ident)?Tokens.TIME:/^hz$|^khz$/i.test(ident)?Tokens.FREQ:/^dpi$|^dpcm$/i.test(ident)?Tokens.RESOLUTION:Tokens.DIMENSION):\"%\"==c&&(value+=reader.read(),tt=Tokens.PERCENTAGE),this.createToken(tt,value,startLine,startCol)},stringToken:function(first,startLine,startCol){for(var delim=first,string=first,reader=this._reader,prev=first,tt=Tokens.STRING,c=reader.read();c&&(string+=c,c!=delim||\"\\\\\"==prev);){if(isNewLine(reader.peek())&&\"\\\\\"!=c){tt=Tokens.INVALID;break}prev=c,c=reader.read()}return null===c&&(tt=Tokens.INVALID),this.createToken(tt,string,startLine,startCol)},unicodeRangeToken:function(first,startLine,startCol){var temp,reader=this._reader,value=first,tt=Tokens.CHAR;return\"+\"==reader.peek()&&(reader.mark(),value+=reader.read(),value+=this.readUnicodeRangePart(!0),2==value.length?reader.reset():(tt=Tokens.UNICODE_RANGE,-1==value.indexOf(\"?\")&&\"-\"==reader.peek()&&(reader.mark(),temp=reader.read(),temp+=this.readUnicodeRangePart(!1),1==temp.length?reader.reset():value+=temp))),this.createToken(tt,value,startLine,startCol)},whitespaceToken:function(first,startLine,startCol){var value=(this._reader,first+this.readWhitespace());return this.createToken(Tokens.S,value,startLine,startCol)},readUnicodeRangePart:function(allowQuestionMark){for(var reader=this._reader,part=\"\",c=reader.peek();isHexDigit(c)&&6>part.length;)reader.read(),part+=c,c=reader.peek();if(allowQuestionMark)for(;\"?\"==c&&6>part.length;)reader.read(),part+=c,c=reader.peek();return part},readWhitespace:function(){for(var reader=this._reader,whitespace=\"\",c=reader.peek();isWhitespace(c);)reader.read(),whitespace+=c,c=reader.peek();return whitespace},readNumber:function(first){for(var reader=this._reader,number=first,hasDot=\".\"==first,c=reader.peek();c;){if(isDigit(c))number+=reader.read();else{if(\".\"!=c)break;if(hasDot)break;hasDot=!0,number+=reader.read()}c=reader.peek()}return number},readString:function(){for(var reader=this._reader,delim=reader.read(),string=delim,prev=delim,c=reader.peek();c&&(c=reader.read(),string+=c,c!=delim||\"\\\\\"==prev);){if(isNewLine(reader.peek())&&\"\\\\\"!=c){string=\"\";break}prev=c,c=reader.peek()}return null===c&&(string=\"\"),string},readURI:function(first){var reader=this._reader,uri=first,inner=\"\",c=reader.peek();for(reader.mark();c&&isWhitespace(c);)reader.read(),c=reader.peek();for(inner=\"'\"==c||'\"'==c?this.readString():this.readURL(),c=reader.peek();c&&isWhitespace(c);)reader.read(),c=reader.peek();return\"\"===inner||\")\"!=c?(uri=first,reader.reset()):uri+=inner+reader.read(),uri},readURL:function(){for(var reader=this._reader,url=\"\",c=reader.peek();/^[!#$%&\\\\*-~]$/.test(c);)url+=reader.read(),c=reader.peek();return url},readName:function(first){for(var reader=this._reader,ident=first||\"\",c=reader.peek();;)if(\"\\\\\"==c)ident+=this.readEscape(reader.read()),c=reader.peek();else{if(!c||!isNameChar(c))break;ident+=reader.read(),c=reader.peek()}return ident},readEscape:function(first){var reader=this._reader,cssEscape=first||\"\",i=0,c=reader.peek();if(isHexDigit(c))do cssEscape+=reader.read(),c=reader.peek();while(c&&isHexDigit(c)&&6>++i);return 3==cssEscape.length&&/\\s/.test(c)||7==cssEscape.length||1==cssEscape.length?reader.read():c=\"\",cssEscape+c},readComment:function(first){var reader=this._reader,comment=first||\"\",c=reader.read();if(\"*\"==c){for(;c;){if(comment+=c,comment.length>2&&\"*\"==c&&\"/\"==reader.peek()){comment+=reader.read();break}c=reader.read()}return comment}return\"\"}});var Tokens=[{name:\"CDO\"},{name:\"CDC\"},{name:\"S\",whitespace:!0},{name:\"COMMENT\",comment:!0,hide:!0,channel:\"comment\"},{name:\"INCLUDES\",text:\"~=\"},{name:\"DASHMATCH\",text:\"|=\"},{name:\"PREFIXMATCH\",text:\"^=\"},{name:\"SUFFIXMATCH\",text:\"$=\"},{name:\"SUBSTRINGMATCH\",text:\"*=\"},{name:\"STRING\"},{name:\"IDENT\"},{name:\"HASH\"},{name:\"IMPORT_SYM\",text:\"@import\"},{name:\"PAGE_SYM\",text:\"@page\"},{name:\"MEDIA_SYM\",text:\"@media\"},{name:\"FONT_FACE_SYM\",text:\"@font-face\"},{name:\"CHARSET_SYM\",text:\"@charset\"},{name:\"NAMESPACE_SYM\",text:\"@namespace\"},{name:\"VIEWPORT_SYM\",text:[\"@viewport\",\"@-ms-viewport\"]},{name:\"UNKNOWN_SYM\"},{name:\"KEYFRAMES_SYM\",text:[\"@keyframes\",\"@-webkit-keyframes\",\"@-moz-keyframes\",\"@-o-keyframes\"]},{name:\"IMPORTANT_SYM\"},{name:\"LENGTH\"},{name:\"ANGLE\"},{name:\"TIME\"},{name:\"FREQ\"},{name:\"DIMENSION\"},{name:\"PERCENTAGE\"},{name:\"NUMBER\"},{name:\"URI\"},{name:\"FUNCTION\"},{name:\"UNICODE_RANGE\"},{name:\"INVALID\"},{name:\"PLUS\",text:\"+\"},{name:\"GREATER\",text:\">\"},{name:\"COMMA\",text:\",\"},{name:\"TILDE\",text:\"~\"},{name:\"NOT\"},{name:\"TOPLEFTCORNER_SYM\",text:\"@top-left-corner\"},{name:\"TOPLEFT_SYM\",text:\"@top-left\"},{name:\"TOPCENTER_SYM\",text:\"@top-center\"},{name:\"TOPRIGHT_SYM\",text:\"@top-right\"},{name:\"TOPRIGHTCORNER_SYM\",text:\"@top-right-corner\"},{name:\"BOTTOMLEFTCORNER_SYM\",text:\"@bottom-left-corner\"},{name:\"BOTTOMLEFT_SYM\",text:\"@bottom-left\"},{name:\"BOTTOMCENTER_SYM\",text:\"@bottom-center\"},{name:\"BOTTOMRIGHT_SYM\",text:\"@bottom-right\"},{name:\"BOTTOMRIGHTCORNER_SYM\",text:\"@bottom-right-corner\"},{name:\"LEFTTOP_SYM\",text:\"@left-top\"},{name:\"LEFTMIDDLE_SYM\",text:\"@left-middle\"},{name:\"LEFTBOTTOM_SYM\",text:\"@left-bottom\"},{name:\"RIGHTTOP_SYM\",text:\"@right-top\"},{name:\"RIGHTMIDDLE_SYM\",text:\"@right-middle\"},{name:\"RIGHTBOTTOM_SYM\",text:\"@right-bottom\"},{name:\"RESOLUTION\",state:\"media\"},{name:\"IE_FUNCTION\"},{name:\"CHAR\"},{name:\"PIPE\",text:\"|\"},{name:\"SLASH\",text:\"/\"},{name:\"MINUS\",text:\"-\"},{name:\"STAR\",text:\"*\"},{name:\"LBRACE\",endChar:\"}\",text:\"{\"},{name:\"RBRACE\",text:\"}\"},{name:\"LBRACKET\",endChar:\"]\",text:\"[\"},{name:\"RBRACKET\",text:\"]\"},{name:\"EQUALS\",text:\"=\"},{name:\"COLON\",text:\":\"},{name:\"SEMICOLON\",text:\";\"},{name:\"LPAREN\",endChar:\")\",text:\"(\"},{name:\"RPAREN\",text:\")\"},{name:\"DOT\",text:\".\"}];(function(){var nameMap=[],typeMap={};Tokens.UNKNOWN=-1,Tokens.unshift({name:\"EOF\"});for(var i=0,len=Tokens.length;len>i;i++)if(nameMap.push(Tokens[i].name),Tokens[Tokens[i].name]=i,Tokens[i].text)if(Tokens[i].text instanceof Array)for(var j=0;Tokens[i].text.length>j;j++)typeMap[Tokens[i].text[j]]=i;else typeMap[Tokens[i].text]=i;Tokens.name=function(tt){return nameMap[tt]},Tokens.type=function(c){return typeMap[c]||-1}})();var Validation={validate:function(property,value){var name=(\"\"+property).toLowerCase(),expression=(value.parts,new PropertyValueIterator(value)),spec=Properties[name];if(spec)\"number\"!=typeof spec&&(\"string\"==typeof spec?spec.indexOf(\"||\")>-1?this.groupProperty(spec,expression):this.singleProperty(spec,expression,1):spec.multi?this.multiProperty(spec.multi,expression,spec.comma,spec.max||1/0):\"function\"==typeof spec&&spec(expression));else if(0!==name.indexOf(\"-\"))throw new ValidationError(\"Unknown property '\"+property+\"'.\",property.line,property.col)},singleProperty:function(types,expression,max){for(var part,result=!1,value=expression.value,count=0;expression.hasNext()&&max>count&&(result=ValidationTypes.isAny(expression,types));)count++;if(!result)throw expression.hasNext()&&!expression.isFirst()?(part=expression.peek(),new ValidationError(\"Expected end of value but found '\"+part+\"'.\",part.line,part.col)):new ValidationError(\"Expected (\"+types+\") but found '\"+value+\"'.\",value.line,value.col);if(expression.hasNext())throw part=expression.next(),new ValidationError(\"Expected end of value but found '\"+part+\"'.\",part.line,part.col)},multiProperty:function(types,expression,comma,max){for(var part,result=!1,value=expression.value,count=0;expression.hasNext()&&!result&&max>count&&ValidationTypes.isAny(expression,types);)if(count++,expression.hasNext()){if(comma){if(\",\"!=expression.peek())break;part=expression.next()}}else result=!0;if(!result)throw expression.hasNext()&&!expression.isFirst()?(part=expression.peek(),new ValidationError(\"Expected end of value but found '\"+part+\"'.\",part.line,part.col)):(part=expression.previous(),comma&&\",\"==part?new ValidationError(\"Expected end of value but found '\"+part+\"'.\",part.line,part.col):new ValidationError(\"Expected (\"+types+\") but found '\"+value+\"'.\",value.line,value.col));if(expression.hasNext())throw part=expression.next(),new ValidationError(\"Expected end of value but found '\"+part+\"'.\",part.line,part.col)},groupProperty:function(types,expression){for(var name,part,result=!1,value=expression.value,typeCount=types.split(\"||\").length,groups={count:0},partial=!1;expression.hasNext()&&!result&&(name=ValidationTypes.isAnyOfGroup(expression,types))&&!groups[name];)groups[name]=1,groups.count++,partial=!0,groups.count!=typeCount&&expression.hasNext()||(result=!0);if(!result)throw partial&&expression.hasNext()?(part=expression.peek(),new ValidationError(\"Expected end of value but found '\"+part+\"'.\",part.line,part.col)):new ValidationError(\"Expected (\"+types+\") but found '\"+value+\"'.\",value.line,value.col);if(expression.hasNext())throw part=expression.next(),new ValidationError(\"Expected end of value but found '\"+part+\"'.\",part.line,part.col)}};ValidationError.prototype=Error();var ValidationTypes={isLiteral:function(part,literals){var i,len,text=(\"\"+part.text).toLowerCase(),args=literals.split(\" | \"),found=!1;for(i=0,len=args.length;len>i&&!found;i++)text==args[i].toLowerCase()&&(found=!0);return found},isSimple:function(type){return!!this.simple[type]},isComplex:function(type){return!!this.complex[type]},isAny:function(expression,types){var i,len,args=types.split(\" | \"),found=!1;for(i=0,len=args.length;len>i&&!found&&expression.hasNext();i++)found=this.isType(expression,args[i]);return found},isAnyOfGroup:function(expression,types){var i,len,args=types.split(\" || \"),found=!1;for(i=0,len=args.length;len>i&&!found;i++)found=this.isType(expression,args[i]);return found?args[i-1]:!1},isType:function(expression,type){var part=expression.peek(),result=!1;return\"<\"!=type.charAt(0)?(result=this.isLiteral(part,type),result&&expression.next()):this.simple[type]?(result=this.simple[type](part),result&&expression.next()):result=this.complex[type](expression),result},simple:{\"<absolute-size>\":function(part){return ValidationTypes.isLiteral(part,\"xx-small | x-small | small | medium | large | x-large | xx-large\")},\"<attachment>\":function(part){return ValidationTypes.isLiteral(part,\"scroll | fixed | local\")},\"<attr>\":function(part){return\"function\"==part.type&&\"attr\"==part.name},\"<bg-image>\":function(part){return this[\"<image>\"](part)||this[\"<gradient>\"](part)||\"none\"==part},\"<gradient>\":function(part){return\"function\"==part.type&&/^(?:\\-(?:ms|moz|o|webkit)\\-)?(?:repeating\\-)?(?:radial\\-|linear\\-)?gradient/i.test(part)},\"<box>\":function(part){return ValidationTypes.isLiteral(part,\"padding-box | border-box | content-box\")},\"<content>\":function(part){return\"function\"==part.type&&\"content\"==part.name},\"<relative-size>\":function(part){return ValidationTypes.isLiteral(part,\"smaller | larger\")},\"<ident>\":function(part){return\"identifier\"==part.type},\"<length>\":function(part){return\"function\"==part.type&&/^(?:\\-(?:ms|moz|o|webkit)\\-)?calc/i.test(part)?!0:\"length\"==part.type||\"number\"==part.type||\"integer\"==part.type||\"0\"==part},\"<color>\":function(part){return\"color\"==part.type||\"transparent\"==part},\"<number>\":function(part){return\"number\"==part.type||this[\"<integer>\"](part)},\"<integer>\":function(part){return\"integer\"==part.type},\"<line>\":function(part){return\"integer\"==part.type},\"<angle>\":function(part){return\"angle\"==part.type},\"<uri>\":function(part){return\"uri\"==part.type},\"<image>\":function(part){return this[\"<uri>\"](part)},\"<percentage>\":function(part){return\"percentage\"==part.type||\"0\"==part},\"<border-width>\":function(part){return this[\"<length>\"](part)||ValidationTypes.isLiteral(part,\"thin | medium | thick\")},\"<border-style>\":function(part){return ValidationTypes.isLiteral(part,\"none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset\")},\"<content-sizing>\":function(part){return ValidationTypes.isLiteral(part,\"fill-available | -moz-available | -webkit-fill-available | max-content | -moz-max-content | -webkit-max-content | min-content | -moz-min-content | -webkit-min-content | fit-content | -moz-fit-content | -webkit-fit-content\")},\"<margin-width>\":function(part){return this[\"<length>\"](part)||this[\"<percentage>\"](part)||ValidationTypes.isLiteral(part,\"auto\")},\"<padding-width>\":function(part){return this[\"<length>\"](part)||this[\"<percentage>\"](part)},\"<shape>\":function(part){return\"function\"==part.type&&(\"rect\"==part.name||\"inset-rect\"==part.name)},\"<time>\":function(part){return\"time\"==part.type},\"<flex-grow>\":function(part){return this[\"<number>\"](part)},\"<flex-shrink>\":function(part){return this[\"<number>\"](part)},\"<width>\":function(part){return this[\"<margin-width>\"](part)},\"<flex-basis>\":function(part){return this[\"<width>\"](part)},\"<flex-direction>\":function(part){return ValidationTypes.isLiteral(part,\"row | row-reverse | column | column-reverse\")},\"<flex-wrap>\":function(part){return ValidationTypes.isLiteral(part,\"nowrap | wrap | wrap-reverse\")}},complex:{\"<bg-position>\":function(expression){for(var result=!1,numeric=\"<percentage> | <length>\",xDir=\"left | right\",yDir=\"top | bottom\",count=0;expression.peek(count)&&\",\"!=expression.peek(count);)count++;return 3>count?ValidationTypes.isAny(expression,xDir+\" | center | \"+numeric)?(result=!0,ValidationTypes.isAny(expression,yDir+\" | center | \"+numeric)):ValidationTypes.isAny(expression,yDir)&&(result=!0,ValidationTypes.isAny(expression,xDir+\" | center\")):ValidationTypes.isAny(expression,xDir)?ValidationTypes.isAny(expression,yDir)?(result=!0,ValidationTypes.isAny(expression,numeric)):ValidationTypes.isAny(expression,numeric)&&(ValidationTypes.isAny(expression,yDir)?(result=!0,ValidationTypes.isAny(expression,numeric)):ValidationTypes.isAny(expression,\"center\")&&(result=!0)):ValidationTypes.isAny(expression,yDir)?ValidationTypes.isAny(expression,xDir)?(result=!0,ValidationTypes.isAny(expression,numeric)):ValidationTypes.isAny(expression,numeric)&&(ValidationTypes.isAny(expression,xDir)?(result=!0,ValidationTypes.isAny(expression,numeric)):ValidationTypes.isAny(expression,\"center\")&&(result=!0)):ValidationTypes.isAny(expression,\"center\")&&ValidationTypes.isAny(expression,xDir+\" | \"+yDir)&&(result=!0,ValidationTypes.isAny(expression,numeric)),result},\"<bg-size>\":function(expression){var result=!1,numeric=\"<percentage> | <length> | auto\";return ValidationTypes.isAny(expression,\"cover | contain\")?result=!0:ValidationTypes.isAny(expression,numeric)&&(result=!0,ValidationTypes.isAny(expression,numeric)),result},\"<repeat-style>\":function(expression){var part,result=!1,values=\"repeat | space | round | no-repeat\";return expression.hasNext()&&(part=expression.next(),ValidationTypes.isLiteral(part,\"repeat-x | repeat-y\")?result=!0:ValidationTypes.isLiteral(part,values)&&(result=!0,expression.hasNext()&&ValidationTypes.isLiteral(expression.peek(),values)&&expression.next())),result},\"<shadow>\":function(expression){var result=!1,count=0,inset=!1,color=!1;if(expression.hasNext()){for(ValidationTypes.isAny(expression,\"inset\")&&(inset=!0),ValidationTypes.isAny(expression,\"<color>\")&&(color=!0);ValidationTypes.isAny(expression,\"<length>\")&&4>count;)count++;expression.hasNext()&&(color||ValidationTypes.isAny(expression,\"<color>\"),inset||ValidationTypes.isAny(expression,\"inset\")),result=count>=2&&4>=count}return result},\"<x-one-radius>\":function(expression){var result=!1,simple=\"<length> | <percentage> | inherit\";return ValidationTypes.isAny(expression,simple)&&(result=!0,ValidationTypes.isAny(expression,simple)),result},\"<flex>\":function(expression){var part,result=!1;if(ValidationTypes.isAny(expression,\"none | inherit\")?result=!0:ValidationTypes.isType(expression,\"<flex-grow>\")?expression.peek()?ValidationTypes.isType(expression,\"<flex-shrink>\")?result=expression.peek()?ValidationTypes.isType(expression,\"<flex-basis>\"):!0:ValidationTypes.isType(expression,\"<flex-basis>\")&&(result=null===expression.peek()):result=!0:ValidationTypes.isType(expression,\"<flex-basis>\")&&(result=!0),!result)throw part=expression.peek(),new ValidationError(\"Expected (none | [ <flex-grow> <flex-shrink>? || <flex-basis> ]) but found '\"+expression.value.text+\"'.\",part.line,part.col);return result}}};parserlib.css={Colors:Colors,Combinator:Combinator,Parser:Parser,PropertyName:PropertyName,PropertyValue:PropertyValue,PropertyValuePart:PropertyValuePart,MediaFeature:MediaFeature,MediaQuery:MediaQuery,Selector:Selector,SelectorPart:SelectorPart,SelectorSubPart:SelectorSubPart,Specificity:Specificity,TokenStream:TokenStream,Tokens:Tokens,ValidationError:ValidationError}}(),function(){for(var prop in parserlib)exports[prop]=parserlib[prop]}();var util={isArray:function(ar){return Array.isArray(ar)||\"object\"==typeof ar&&\"[object Array]\"===objectToString(ar)},isDate:function(d){return\"object\"==typeof d&&\"[object Date]\"===objectToString(d)},isRegExp:function(re){return\"object\"==typeof re&&\"[object RegExp]\"===objectToString(re)},getRegExpFlags:function(re){var flags=\"\";return re.global&&(flags+=\"g\"),re.ignoreCase&&(flags+=\"i\"),re.multiline&&(flags+=\"m\"),flags}};\"object\"==typeof module&&(module.exports=clone),clone.clonePrototype=function(parent){if(null===parent)return null;var c=function(){};return c.prototype=parent,new c};var CSSLint=function(){function applyEmbeddedRuleset(text,ruleset){var valueMap,embedded=text&&text.match(embeddedRuleset),rules=embedded&&embedded[1];return rules&&(valueMap={\"true\":2,\"\":1,\"false\":0,2:2,1:1,0:0},rules.toLowerCase().split(\",\").forEach(function(rule){var pair=rule.split(\":\"),property=pair[0]||\"\",value=pair[1]||\"\";ruleset[property.trim()]=valueMap[value.trim()]})),ruleset}var rules=[],formatters=[],embeddedRuleset=/\\/\\*csslint([^\\*]*)\\*\\//,api=new parserlib.util.EventTarget;return api.version=\"@VERSION@\",api.addRule=function(rule){rules.push(rule),rules[rule.id]=rule},api.clearRules=function(){rules=[]},api.getRules=function(){return[].concat(rules).sort(function(a,b){return a.id>b.id?1:0})},api.getRuleset=function(){for(var ruleset={},i=0,len=rules.length;len>i;)ruleset[rules[i++].id]=1;return ruleset},api.addFormatter=function(formatter){formatters[formatter.id]=formatter},api.getFormatter=function(formatId){return formatters[formatId]},api.format=function(results,filename,formatId,options){var formatter=this.getFormatter(formatId),result=null;return formatter&&(result=formatter.startFormat(),result+=formatter.formatResults(results,filename,options||{}),result+=formatter.endFormat()),result},api.hasFormat=function(formatId){return formatters.hasOwnProperty(formatId)},api.verify=function(text,ruleset){var reporter,lines,report,i=0,parser=new parserlib.css.Parser({starHack:!0,ieFilters:!0,underscoreHack:!0,strict:!1});lines=text.replace(/\\n\\r?/g,\"$split$\").split(\"$split$\"),ruleset||(ruleset=this.getRuleset()),embeddedRuleset.test(text)&&(ruleset=clone(ruleset),ruleset=applyEmbeddedRuleset(text,ruleset)),reporter=new Reporter(lines,ruleset),ruleset.errors=2;for(i in ruleset)ruleset.hasOwnProperty(i)&&ruleset[i]&&rules[i]&&rules[i].init(parser,reporter);try{parser.parse(text)}catch(ex){reporter.error(\"Fatal error, cannot continue: \"+ex.message,ex.line,ex.col,{})}return report={messages:reporter.messages,stats:reporter.stats,ruleset:reporter.ruleset},report.messages.sort(function(a,b){return a.rollup&&!b.rollup?1:!a.rollup&&b.rollup?-1:a.line-b.line}),report},api}();Reporter.prototype={constructor:Reporter,error:function(message,line,col,rule){this.messages.push({type:\"error\",line:line,col:col,message:message,evidence:this.lines[line-1],rule:rule||{}})},warn:function(message,line,col,rule){this.report(message,line,col,rule)},report:function(message,line,col,rule){this.messages.push({type:2===this.ruleset[rule.id]?\"error\":\"warning\",line:line,col:col,message:message,evidence:this.lines[line-1],rule:rule})},info:function(message,line,col,rule){this.messages.push({type:\"info\",line:line,col:col,message:message,evidence:this.lines[line-1],rule:rule})},rollupError:function(message,rule){this.messages.push({type:\"error\",rollup:!0,message:message,rule:rule})},rollupWarn:function(message,rule){this.messages.push({type:\"warning\",rollup:!0,message:message,rule:rule})},stat:function(name,value){this.stats[name]=value}},CSSLint._Reporter=Reporter,CSSLint.Util={mix:function(receiver,supplier){var prop;for(prop in supplier)supplier.hasOwnProperty(prop)&&(receiver[prop]=supplier[prop]);return prop},indexOf:function(values,value){if(values.indexOf)return values.indexOf(value);for(var i=0,len=values.length;len>i;i++)if(values[i]===value)return i;return-1},forEach:function(values,func){if(values.forEach)return values.forEach(func);for(var i=0,len=values.length;len>i;i++)func(values[i],i,values)}},CSSLint.addRule({id:\"adjoining-classes\",name:\"Disallow adjoining classes\",desc:\"Don't use adjoining classes.\",browsers:\"IE6\",init:function(parser,reporter){var rule=this;parser.addListener(\"startrule\",function(event){var selector,part,modifier,classCount,i,j,k,selectors=event.selectors;for(i=0;selectors.length>i;i++)for(selector=selectors[i],j=0;selector.parts.length>j;j++)if(part=selector.parts[j],part.type===parser.SELECTOR_PART_TYPE)for(classCount=0,k=0;part.modifiers.length>k;k++)modifier=part.modifiers[k],\"class\"===modifier.type&&classCount++,classCount>1&&reporter.report(\"Don't use adjoining classes.\",part.line,part.col,rule)})}}),CSSLint.addRule({id:\"box-model\",name:\"Beware of broken box size\",desc:\"Don't use width or height when using padding or border.\",browsers:\"All\",init:function(parser,reporter){function startRule(){properties={},boxSizing=!1}function endRule(){var prop,value;if(!boxSizing){if(properties.height)for(prop in heightProperties)heightProperties.hasOwnProperty(prop)&&properties[prop]&&(value=properties[prop].value,(\"padding\"!==prop||2!==value.parts.length||0!==value.parts[0].value)&&reporter.report(\"Using height with \"+prop+\" can sometimes make elements larger than you expect.\",properties[prop].line,properties[prop].col,rule));if(properties.width)for(prop in widthProperties)widthProperties.hasOwnProperty(prop)&&properties[prop]&&(value=properties[prop].value,(\"padding\"!==prop||2!==value.parts.length||0!==value.parts[1].value)&&reporter.report(\"Using width with \"+prop+\" can sometimes make elements larger than you expect.\",properties[prop].line,properties[prop].col,rule))}}var properties,rule=this,widthProperties={border:1,\"border-left\":1,\"border-right\":1,padding:1,\"padding-left\":1,\"padding-right\":1},heightProperties={border:1,\"border-bottom\":1,\"border-top\":1,padding:1,\"padding-bottom\":1,\"padding-top\":1},boxSizing=!1;parser.addListener(\"startrule\",startRule),parser.addListener(\"startfontface\",startRule),parser.addListener(\"startpage\",startRule),parser.addListener(\"startpagemargin\",startRule),parser.addListener(\"startkeyframerule\",startRule),parser.addListener(\"property\",function(event){var name=event.property.text.toLowerCase();heightProperties[name]||widthProperties[name]?/^0\\S*$/.test(event.value)||\"border\"===name&&\"none\"==\"\"+event.value||(properties[name]={line:event.property.line,col:event.property.col,value:event.value}):/^(width|height)/i.test(name)&&/^(length|percentage)/.test(event.value.parts[0].type)?properties[name]=1:\"box-sizing\"===name&&(boxSizing=!0)}),parser.addListener(\"endrule\",endRule),parser.addListener(\"endfontface\",endRule),parser.addListener(\"endpage\",endRule),parser.addListener(\"endpagemargin\",endRule),parser.addListener(\"endkeyframerule\",endRule)}}),CSSLint.addRule({id:\"box-sizing\",name:\"Disallow use of box-sizing\",desc:\"The box-sizing properties isn't supported in IE6 and IE7.\",browsers:\"IE6, IE7\",tags:[\"Compatibility\"],init:function(parser,reporter){var rule=this;parser.addListener(\"property\",function(event){var name=event.property.text.toLowerCase();\"box-sizing\"===name&&reporter.report(\"The box-sizing property isn't supported in IE6 and IE7.\",event.line,event.col,rule)})}}),CSSLint.addRule({id:\"bulletproof-font-face\",name:\"Use the bulletproof @font-face syntax\",desc:\"Use the bulletproof @font-face syntax to avoid 404's in old IE (http://www.fontspring.com/blog/the-new-bulletproof-font-face-syntax).\",browsers:\"All\",init:function(parser,reporter){var line,col,rule=this,fontFaceRule=!1,firstSrc=!0,ruleFailed=!1;parser.addListener(\"startfontface\",function(){fontFaceRule=!0}),parser.addListener(\"property\",function(event){if(fontFaceRule){var propertyName=(\"\"+event.property).toLowerCase(),value=\"\"+event.value;if(line=event.line,col=event.col,\"src\"===propertyName){var regex=/^\\s?url\\(['\"].+\\.eot\\?.*['\"]\\)\\s*format\\(['\"]embedded-opentype['\"]\\).*$/i;!value.match(regex)&&firstSrc?(ruleFailed=!0,firstSrc=!1):value.match(regex)&&!firstSrc&&(ruleFailed=!1)}}}),parser.addListener(\"endfontface\",function(){fontFaceRule=!1,ruleFailed&&reporter.report(\"@font-face declaration doesn't follow the fontspring bulletproof syntax.\",line,col,rule)})}}),CSSLint.addRule({id:\"compatible-vendor-prefixes\",name:\"Require compatible vendor prefixes\",desc:\"Include all compatible vendor prefixes to reach a wider range of users.\",browsers:\"All\",init:function(parser,reporter){var compatiblePrefixes,properties,prop,variations,prefixed,i,len,rule=this,inKeyFrame=!1,arrayPush=Array.prototype.push,applyTo=[];compatiblePrefixes={animation:\"webkit moz\",\"animation-delay\":\"webkit moz\",\"animation-direction\":\"webkit moz\",\"animation-duration\":\"webkit moz\",\"animation-fill-mode\":\"webkit moz\",\"animation-iteration-count\":\"webkit moz\",\"animation-name\":\"webkit moz\",\"animation-play-state\":\"webkit moz\",\"animation-timing-function\":\"webkit moz\",appearance:\"webkit moz\",\"border-end\":\"webkit moz\",\"border-end-color\":\"webkit moz\",\"border-end-style\":\"webkit moz\",\"border-end-width\":\"webkit moz\",\"border-image\":\"webkit moz o\",\"border-radius\":\"webkit\",\"border-start\":\"webkit moz\",\"border-start-color\":\"webkit moz\",\"border-start-style\":\"webkit moz\",\"border-start-width\":\"webkit moz\",\"box-align\":\"webkit moz ms\",\"box-direction\":\"webkit moz ms\",\"box-flex\":\"webkit moz ms\",\"box-lines\":\"webkit ms\",\"box-ordinal-group\":\"webkit moz ms\",\"box-orient\":\"webkit moz ms\",\"box-pack\":\"webkit moz ms\",\"box-sizing\":\"webkit moz\",\"box-shadow\":\"webkit moz\",\"column-count\":\"webkit moz ms\",\"column-gap\":\"webkit moz ms\",\"column-rule\":\"webkit moz ms\",\"column-rule-color\":\"webkit moz ms\",\"column-rule-style\":\"webkit moz ms\",\"column-rule-width\":\"webkit moz ms\",\"column-width\":\"webkit moz ms\",hyphens:\"epub moz\",\"line-break\":\"webkit ms\",\"margin-end\":\"webkit moz\",\"margin-start\":\"webkit moz\",\"marquee-speed\":\"webkit wap\",\"marquee-style\":\"webkit wap\",\"padding-end\":\"webkit moz\",\"padding-start\":\"webkit moz\",\"tab-size\":\"moz o\",\"text-size-adjust\":\"webkit ms\",transform:\"webkit moz ms o\",\"transform-origin\":\"webkit moz ms o\",transition:\"webkit moz o\",\"transition-delay\":\"webkit moz o\",\"transition-duration\":\"webkit moz o\",\"transition-property\":\"webkit moz o\",\"transition-timing-function\":\"webkit moz o\",\"user-modify\":\"webkit moz\",\"user-select\":\"webkit moz ms\",\"word-break\":\"epub ms\",\"writing-mode\":\"epub ms\"};for(prop in compatiblePrefixes)if(compatiblePrefixes.hasOwnProperty(prop)){for(variations=[],prefixed=compatiblePrefixes[prop].split(\" \"),i=0,len=prefixed.length;len>i;i++)variations.push(\"-\"+prefixed[i]+\"-\"+prop);compatiblePrefixes[prop]=variations,arrayPush.apply(applyTo,variations)}parser.addListener(\"startrule\",function(){properties=[]}),parser.addListener(\"startkeyframes\",function(event){inKeyFrame=event.prefix||!0}),parser.addListener(\"endkeyframes\",function(){inKeyFrame=!1}),parser.addListener(\"property\",function(event){var name=event.property;CSSLint.Util.indexOf(applyTo,name.text)>-1&&(inKeyFrame&&\"string\"==typeof inKeyFrame&&0===name.text.indexOf(\"-\"+inKeyFrame+\"-\")||properties.push(name))}),parser.addListener(\"endrule\",function(){if(properties.length){var i,len,name,prop,variations,value,full,actual,item,propertiesSpecified,propertyGroups={};for(i=0,len=properties.length;len>i;i++){name=properties[i];for(prop in compatiblePrefixes)compatiblePrefixes.hasOwnProperty(prop)&&(variations=compatiblePrefixes[prop],CSSLint.Util.indexOf(variations,name.text)>-1&&(propertyGroups[prop]||(propertyGroups[prop]={full:variations.slice(0),actual:[],actualNodes:[]}),-1===CSSLint.Util.indexOf(propertyGroups[prop].actual,name.text)&&(propertyGroups[prop].actual.push(name.text),propertyGroups[prop].actualNodes.push(name))))}for(prop in propertyGroups)if(propertyGroups.hasOwnProperty(prop)&&(value=propertyGroups[prop],full=value.full,actual=value.actual,full.length>actual.length))for(i=0,len=full.length;len>i;i++)item=full[i],-1===CSSLint.Util.indexOf(actual,item)&&(propertiesSpecified=1===actual.length?actual[0]:2===actual.length?actual.join(\" and \"):actual.join(\", \"),reporter.report(\"The property \"+item+\" is compatible with \"+propertiesSpecified+\" and should be included as well.\",value.actualNodes[0].line,value.actualNodes[0].col,rule))}})}}),CSSLint.addRule({id:\"display-property-grouping\",name:\"Require properties appropriate for display\",desc:\"Certain properties shouldn't be used with certain display property values.\",browsers:\"All\",init:function(parser,reporter){function reportProperty(name,display,msg){properties[name]&&(\"string\"!=typeof propertiesToCheck[name]||properties[name].value.toLowerCase()!==propertiesToCheck[name])&&reporter.report(msg||name+\" can't be used with display: \"+display+\".\",properties[name].line,properties[name].col,rule)}function startRule(){properties={}}function endRule(){var display=properties.display?properties.display.value:null;if(display)switch(display){case\"inline\":reportProperty(\"height\",display),reportProperty(\"width\",display),reportProperty(\"margin\",display),reportProperty(\"margin-top\",display),reportProperty(\"margin-bottom\",display),reportProperty(\"float\",display,\"display:inline has no effect on floated elements (but may be used to fix the IE6 double-margin bug).\");break;case\"block\":reportProperty(\"vertical-align\",display);break;case\"inline-block\":reportProperty(\"float\",display);break;default:0===display.indexOf(\"table-\")&&(reportProperty(\"margin\",display),reportProperty(\"margin-left\",display),reportProperty(\"margin-right\",display),reportProperty(\"margin-top\",display),reportProperty(\"margin-bottom\",display),reportProperty(\"float\",display))\n}}var properties,rule=this,propertiesToCheck={display:1,\"float\":\"none\",height:1,width:1,margin:1,\"margin-left\":1,\"margin-right\":1,\"margin-bottom\":1,\"margin-top\":1,padding:1,\"padding-left\":1,\"padding-right\":1,\"padding-bottom\":1,\"padding-top\":1,\"vertical-align\":1};parser.addListener(\"startrule\",startRule),parser.addListener(\"startfontface\",startRule),parser.addListener(\"startkeyframerule\",startRule),parser.addListener(\"startpagemargin\",startRule),parser.addListener(\"startpage\",startRule),parser.addListener(\"property\",function(event){var name=event.property.text.toLowerCase();propertiesToCheck[name]&&(properties[name]={value:event.value.text,line:event.property.line,col:event.property.col})}),parser.addListener(\"endrule\",endRule),parser.addListener(\"endfontface\",endRule),parser.addListener(\"endkeyframerule\",endRule),parser.addListener(\"endpagemargin\",endRule),parser.addListener(\"endpage\",endRule)}}),CSSLint.addRule({id:\"duplicate-background-images\",name:\"Disallow duplicate background images\",desc:\"Every background-image should be unique. Use a common class for e.g. sprites.\",browsers:\"All\",init:function(parser,reporter){var rule=this,stack={};parser.addListener(\"property\",function(event){var i,len,name=event.property.text,value=event.value;if(name.match(/background/i))for(i=0,len=value.parts.length;len>i;i++)\"uri\"===value.parts[i].type&&(stack[value.parts[i].uri]===void 0?stack[value.parts[i].uri]=event:reporter.report(\"Background image '\"+value.parts[i].uri+\"' was used multiple times, first declared at line \"+stack[value.parts[i].uri].line+\", col \"+stack[value.parts[i].uri].col+\".\",event.line,event.col,rule))})}}),CSSLint.addRule({id:\"duplicate-properties\",name:\"Disallow duplicate properties\",desc:\"Duplicate properties must appear one after the other.\",browsers:\"All\",init:function(parser,reporter){function startRule(){properties={}}var properties,lastProperty,rule=this;parser.addListener(\"startrule\",startRule),parser.addListener(\"startfontface\",startRule),parser.addListener(\"startpage\",startRule),parser.addListener(\"startpagemargin\",startRule),parser.addListener(\"startkeyframerule\",startRule),parser.addListener(\"property\",function(event){var property=event.property,name=property.text.toLowerCase();!properties[name]||lastProperty===name&&properties[name]!==event.value.text||reporter.report(\"Duplicate property '\"+event.property+\"' found.\",event.line,event.col,rule),properties[name]=event.value.text,lastProperty=name})}}),CSSLint.addRule({id:\"empty-rules\",name:\"Disallow empty rules\",desc:\"Rules without any properties specified should be removed.\",browsers:\"All\",init:function(parser,reporter){var rule=this,count=0;parser.addListener(\"startrule\",function(){count=0}),parser.addListener(\"property\",function(){count++}),parser.addListener(\"endrule\",function(event){var selectors=event.selectors;0===count&&reporter.report(\"Rule is empty.\",selectors[0].line,selectors[0].col,rule)})}}),CSSLint.addRule({id:\"errors\",name:\"Parsing Errors\",desc:\"This rule looks for recoverable syntax errors.\",browsers:\"All\",init:function(parser,reporter){var rule=this;parser.addListener(\"error\",function(event){reporter.error(event.message,event.line,event.col,rule)})}}),CSSLint.addRule({id:\"fallback-colors\",name:\"Require fallback colors\",desc:\"For older browsers that don't support RGBA, HSL, or HSLA, provide a fallback color.\",browsers:\"IE6,IE7,IE8\",init:function(parser,reporter){function startRule(){properties={},lastProperty=null}var lastProperty,properties,rule=this,propertiesToCheck={color:1,background:1,\"border-color\":1,\"border-top-color\":1,\"border-right-color\":1,\"border-bottom-color\":1,\"border-left-color\":1,border:1,\"border-top\":1,\"border-right\":1,\"border-bottom\":1,\"border-left\":1,\"background-color\":1};parser.addListener(\"startrule\",startRule),parser.addListener(\"startfontface\",startRule),parser.addListener(\"startpage\",startRule),parser.addListener(\"startpagemargin\",startRule),parser.addListener(\"startkeyframerule\",startRule),parser.addListener(\"property\",function(event){var property=event.property,name=property.text.toLowerCase(),parts=event.value.parts,i=0,colorType=\"\",len=parts.length;if(propertiesToCheck[name])for(;len>i;)\"color\"===parts[i].type&&(\"alpha\"in parts[i]||\"hue\"in parts[i]?(/([^\\)]+)\\(/.test(parts[i])&&(colorType=RegExp.$1.toUpperCase()),lastProperty&&lastProperty.property.text.toLowerCase()===name&&\"compat\"===lastProperty.colorType||reporter.report(\"Fallback \"+name+\" (hex or RGB) should precede \"+colorType+\" \"+name+\".\",event.line,event.col,rule)):event.colorType=\"compat\"),i++;lastProperty=event})}}),CSSLint.addRule({id:\"floats\",name:\"Disallow too many floats\",desc:\"This rule tests if the float property is used too many times\",browsers:\"All\",init:function(parser,reporter){var rule=this,count=0;parser.addListener(\"property\",function(event){\"float\"===event.property.text.toLowerCase()&&\"none\"!==event.value.text.toLowerCase()&&count++}),parser.addListener(\"endstylesheet\",function(){reporter.stat(\"floats\",count),count>=10&&reporter.rollupWarn(\"Too many floats (\"+count+\"), you're probably using them for layout. Consider using a grid system instead.\",rule)})}}),CSSLint.addRule({id:\"font-faces\",name:\"Don't use too many web fonts\",desc:\"Too many different web fonts in the same stylesheet.\",browsers:\"All\",init:function(parser,reporter){var rule=this,count=0;parser.addListener(\"startfontface\",function(){count++}),parser.addListener(\"endstylesheet\",function(){count>5&&reporter.rollupWarn(\"Too many @font-face declarations (\"+count+\").\",rule)})}}),CSSLint.addRule({id:\"font-sizes\",name:\"Disallow too many font sizes\",desc:\"Checks the number of font-size declarations.\",browsers:\"All\",init:function(parser,reporter){var rule=this,count=0;parser.addListener(\"property\",function(event){\"font-size\"==\"\"+event.property&&count++}),parser.addListener(\"endstylesheet\",function(){reporter.stat(\"font-sizes\",count),count>=10&&reporter.rollupWarn(\"Too many font-size declarations (\"+count+\"), abstraction needed.\",rule)})}}),CSSLint.addRule({id:\"gradients\",name:\"Require all gradient definitions\",desc:\"When using a vendor-prefixed gradient, make sure to use them all.\",browsers:\"All\",init:function(parser,reporter){var gradients,rule=this;parser.addListener(\"startrule\",function(){gradients={moz:0,webkit:0,oldWebkit:0,o:0}}),parser.addListener(\"property\",function(event){/\\-(moz|o|webkit)(?:\\-(?:linear|radial))\\-gradient/i.test(event.value)?gradients[RegExp.$1]=1:/\\-webkit\\-gradient/i.test(event.value)&&(gradients.oldWebkit=1)}),parser.addListener(\"endrule\",function(event){var missing=[];gradients.moz||missing.push(\"Firefox 3.6+\"),gradients.webkit||missing.push(\"Webkit (Safari 5+, Chrome)\"),gradients.oldWebkit||missing.push(\"Old Webkit (Safari 4+, Chrome)\"),gradients.o||missing.push(\"Opera 11.1+\"),missing.length&&4>missing.length&&reporter.report(\"Missing vendor-prefixed CSS gradients for \"+missing.join(\", \")+\".\",event.selectors[0].line,event.selectors[0].col,rule)})}}),CSSLint.addRule({id:\"ids\",name:\"Disallow IDs in selectors\",desc:\"Selectors should not contain IDs.\",browsers:\"All\",init:function(parser,reporter){var rule=this;parser.addListener(\"startrule\",function(event){var selector,part,modifier,idCount,i,j,k,selectors=event.selectors;for(i=0;selectors.length>i;i++){for(selector=selectors[i],idCount=0,j=0;selector.parts.length>j;j++)if(part=selector.parts[j],part.type===parser.SELECTOR_PART_TYPE)for(k=0;part.modifiers.length>k;k++)modifier=part.modifiers[k],\"id\"===modifier.type&&idCount++;1===idCount?reporter.report(\"Don't use IDs in selectors.\",selector.line,selector.col,rule):idCount>1&&reporter.report(idCount+\" IDs in the selector, really?\",selector.line,selector.col,rule)}})}}),CSSLint.addRule({id:\"import\",name:\"Disallow @import\",desc:\"Don't use @import, use <link> instead.\",browsers:\"All\",init:function(parser,reporter){var rule=this;parser.addListener(\"import\",function(event){reporter.report(\"@import prevents parallel downloads, use <link> instead.\",event.line,event.col,rule)})}}),CSSLint.addRule({id:\"important\",name:\"Disallow !important\",desc:\"Be careful when using !important declaration\",browsers:\"All\",init:function(parser,reporter){var rule=this,count=0;parser.addListener(\"property\",function(event){event.important===!0&&(count++,reporter.report(\"Use of !important\",event.line,event.col,rule))}),parser.addListener(\"endstylesheet\",function(){reporter.stat(\"important\",count),count>=10&&reporter.rollupWarn(\"Too many !important declarations (\"+count+\"), try to use less than 10 to avoid specificity issues.\",rule)})}}),CSSLint.addRule({id:\"known-properties\",name:\"Require use of known properties\",desc:\"Properties should be known (listed in CSS3 specification) or be a vendor-prefixed property.\",browsers:\"All\",init:function(parser,reporter){var rule=this;parser.addListener(\"property\",function(event){event.invalid&&reporter.report(event.invalid.message,event.line,event.col,rule)})}}),CSSLint.addRule({id:\"order-alphabetical\",name:\"Alphabetical order\",desc:\"Assure properties are in alphabetical order\",browsers:\"All\",init:function(parser,reporter){var properties,rule=this,startRule=function(){properties=[]};parser.addListener(\"startrule\",startRule),parser.addListener(\"startfontface\",startRule),parser.addListener(\"startpage\",startRule),parser.addListener(\"startpagemargin\",startRule),parser.addListener(\"startkeyframerule\",startRule),parser.addListener(\"property\",function(event){var name=event.property.text,lowerCasePrefixLessName=name.toLowerCase().replace(/^-.*?-/,\"\");properties.push(lowerCasePrefixLessName)}),parser.addListener(\"endrule\",function(event){var currentProperties=properties.join(\",\"),expectedProperties=properties.sort().join(\",\");currentProperties!==expectedProperties&&reporter.report(\"Rule doesn't have all its properties in alphabetical ordered.\",event.line,event.col,rule)})}}),CSSLint.addRule({id:\"outline-none\",name:\"Disallow outline: none\",desc:\"Use of outline: none or outline: 0 should be limited to :focus rules.\",browsers:\"All\",tags:[\"Accessibility\"],init:function(parser,reporter){function startRule(event){lastRule=event.selectors?{line:event.line,col:event.col,selectors:event.selectors,propCount:0,outline:!1}:null}function endRule(){lastRule&&lastRule.outline&&(-1===(\"\"+lastRule.selectors).toLowerCase().indexOf(\":focus\")?reporter.report(\"Outlines should only be modified using :focus.\",lastRule.line,lastRule.col,rule):1===lastRule.propCount&&reporter.report(\"Outlines shouldn't be hidden unless other visual changes are made.\",lastRule.line,lastRule.col,rule))}var lastRule,rule=this;parser.addListener(\"startrule\",startRule),parser.addListener(\"startfontface\",startRule),parser.addListener(\"startpage\",startRule),parser.addListener(\"startpagemargin\",startRule),parser.addListener(\"startkeyframerule\",startRule),parser.addListener(\"property\",function(event){var name=event.property.text.toLowerCase(),value=event.value;lastRule&&(lastRule.propCount++,\"outline\"!==name||\"none\"!=\"\"+value&&\"0\"!=\"\"+value||(lastRule.outline=!0))}),parser.addListener(\"endrule\",endRule),parser.addListener(\"endfontface\",endRule),parser.addListener(\"endpage\",endRule),parser.addListener(\"endpagemargin\",endRule),parser.addListener(\"endkeyframerule\",endRule)}}),CSSLint.addRule({id:\"overqualified-elements\",name:\"Disallow overqualified elements\",desc:\"Don't use classes or IDs with elements (a.foo or a#foo).\",browsers:\"All\",init:function(parser,reporter){var rule=this,classes={};parser.addListener(\"startrule\",function(event){var selector,part,modifier,i,j,k,selectors=event.selectors;for(i=0;selectors.length>i;i++)for(selector=selectors[i],j=0;selector.parts.length>j;j++)if(part=selector.parts[j],part.type===parser.SELECTOR_PART_TYPE)for(k=0;part.modifiers.length>k;k++)modifier=part.modifiers[k],part.elementName&&\"id\"===modifier.type?reporter.report(\"Element (\"+part+\") is overqualified, just use \"+modifier+\" without element name.\",part.line,part.col,rule):\"class\"===modifier.type&&(classes[modifier]||(classes[modifier]=[]),classes[modifier].push({modifier:modifier,part:part}))}),parser.addListener(\"endstylesheet\",function(){var prop;for(prop in classes)classes.hasOwnProperty(prop)&&1===classes[prop].length&&classes[prop][0].part.elementName&&reporter.report(\"Element (\"+classes[prop][0].part+\") is overqualified, just use \"+classes[prop][0].modifier+\" without element name.\",classes[prop][0].part.line,classes[prop][0].part.col,rule)})}}),CSSLint.addRule({id:\"qualified-headings\",name:\"Disallow qualified headings\",desc:\"Headings should not be qualified (namespaced).\",browsers:\"All\",init:function(parser,reporter){var rule=this;parser.addListener(\"startrule\",function(event){var selector,part,i,j,selectors=event.selectors;for(i=0;selectors.length>i;i++)for(selector=selectors[i],j=0;selector.parts.length>j;j++)part=selector.parts[j],part.type===parser.SELECTOR_PART_TYPE&&part.elementName&&/h[1-6]/.test(\"\"+part.elementName)&&j>0&&reporter.report(\"Heading (\"+part.elementName+\") should not be qualified.\",part.line,part.col,rule)})}}),CSSLint.addRule({id:\"regex-selectors\",name:\"Disallow selectors that look like regexs\",desc:\"Selectors that look like regular expressions are slow and should be avoided.\",browsers:\"All\",init:function(parser,reporter){var rule=this;parser.addListener(\"startrule\",function(event){var selector,part,modifier,i,j,k,selectors=event.selectors;for(i=0;selectors.length>i;i++)for(selector=selectors[i],j=0;selector.parts.length>j;j++)if(part=selector.parts[j],part.type===parser.SELECTOR_PART_TYPE)for(k=0;part.modifiers.length>k;k++)modifier=part.modifiers[k],\"attribute\"===modifier.type&&/([\\~\\|\\^\\$\\*]=)/.test(modifier)&&reporter.report(\"Attribute selectors with \"+RegExp.$1+\" are slow!\",modifier.line,modifier.col,rule)})}}),CSSLint.addRule({id:\"rules-count\",name:\"Rules Count\",desc:\"Track how many rules there are.\",browsers:\"All\",init:function(parser,reporter){var count=0;parser.addListener(\"startrule\",function(){count++}),parser.addListener(\"endstylesheet\",function(){reporter.stat(\"rule-count\",count)})}}),CSSLint.addRule({id:\"selector-max-approaching\",name:\"Warn when approaching the 4095 selector limit for IE\",desc:\"Will warn when selector count is >= 3800 selectors.\",browsers:\"IE\",init:function(parser,reporter){var rule=this,count=0;parser.addListener(\"startrule\",function(event){count+=event.selectors.length}),parser.addListener(\"endstylesheet\",function(){count>=3800&&reporter.report(\"You have \"+count+\" selectors. Internet Explorer supports a maximum of 4095 selectors per stylesheet. Consider refactoring.\",0,0,rule)})}}),CSSLint.addRule({id:\"selector-max\",name:\"Error when past the 4095 selector limit for IE\",desc:\"Will error when selector count is > 4095.\",browsers:\"IE\",init:function(parser,reporter){var rule=this,count=0;parser.addListener(\"startrule\",function(event){count+=event.selectors.length}),parser.addListener(\"endstylesheet\",function(){count>4095&&reporter.report(\"You have \"+count+\" selectors. Internet Explorer supports a maximum of 4095 selectors per stylesheet. Consider refactoring.\",0,0,rule)})}}),CSSLint.addRule({id:\"selector-newline\",name:\"Disallow new-line characters in selectors\",desc:\"New-line characters in selectors are usually a forgotten comma and not a descendant combinator.\",browsers:\"All\",init:function(parser,reporter){function startRule(event){var i,len,selector,p,n,pLen,part,part2,type,currentLine,nextLine,selectors=event.selectors;for(i=0,len=selectors.length;len>i;i++)for(selector=selectors[i],p=0,pLen=selector.parts.length;pLen>p;p++)for(n=p+1;pLen>n;n++)part=selector.parts[p],part2=selector.parts[n],type=part.type,currentLine=part.line,nextLine=part2.line,\"descendant\"===type&&nextLine>currentLine&&reporter.report(\"newline character found in selector (forgot a comma?)\",currentLine,selectors[i].parts[0].col,rule)}var rule=this;parser.addListener(\"startrule\",startRule)}}),CSSLint.addRule({id:\"shorthand\",name:\"Require shorthand properties\",desc:\"Use shorthand properties where possible.\",browsers:\"All\",init:function(parser,reporter){function startRule(){properties={}}function endRule(event){var prop,i,len,total;for(prop in mapping)if(mapping.hasOwnProperty(prop)){for(total=0,i=0,len=mapping[prop].length;len>i;i++)total+=properties[mapping[prop][i]]?1:0;total===mapping[prop].length&&reporter.report(\"The properties \"+mapping[prop].join(\", \")+\" can be replaced by \"+prop+\".\",event.line,event.col,rule)}}var prop,i,len,properties,rule=this,propertiesToCheck={},mapping={margin:[\"margin-top\",\"margin-bottom\",\"margin-left\",\"margin-right\"],padding:[\"padding-top\",\"padding-bottom\",\"padding-left\",\"padding-right\"]};for(prop in mapping)if(mapping.hasOwnProperty(prop))for(i=0,len=mapping[prop].length;len>i;i++)propertiesToCheck[mapping[prop][i]]=prop;parser.addListener(\"startrule\",startRule),parser.addListener(\"startfontface\",startRule),parser.addListener(\"property\",function(event){var name=(\"\"+event.property).toLowerCase();propertiesToCheck[name]&&(properties[name]=1)}),parser.addListener(\"endrule\",endRule),parser.addListener(\"endfontface\",endRule)}}),CSSLint.addRule({id:\"star-property-hack\",name:\"Disallow properties with a star prefix\",desc:\"Checks for the star property hack (targets IE6/7)\",browsers:\"All\",init:function(parser,reporter){var rule=this;parser.addListener(\"property\",function(event){var property=event.property;\"*\"===property.hack&&reporter.report(\"Property with star prefix found.\",event.property.line,event.property.col,rule)})}}),CSSLint.addRule({id:\"text-indent\",name:\"Disallow negative text-indent\",desc:\"Checks for text indent less than -99px\",browsers:\"All\",init:function(parser,reporter){function startRule(){textIndent=!1,direction=\"inherit\"}function endRule(){textIndent&&\"ltr\"!==direction&&reporter.report(\"Negative text-indent doesn't work well with RTL. If you use text-indent for image replacement explicitly set direction for that item to ltr.\",textIndent.line,textIndent.col,rule)}var textIndent,direction,rule=this;parser.addListener(\"startrule\",startRule),parser.addListener(\"startfontface\",startRule),parser.addListener(\"property\",function(event){var name=(\"\"+event.property).toLowerCase(),value=event.value;\"text-indent\"===name&&-99>value.parts[0].value?textIndent=event.property:\"direction\"===name&&\"ltr\"==\"\"+value&&(direction=\"ltr\")}),parser.addListener(\"endrule\",endRule),parser.addListener(\"endfontface\",endRule)}}),CSSLint.addRule({id:\"underscore-property-hack\",name:\"Disallow properties with an underscore prefix\",desc:\"Checks for the underscore property hack (targets IE6)\",browsers:\"All\",init:function(parser,reporter){var rule=this;parser.addListener(\"property\",function(event){var property=event.property;\"_\"===property.hack&&reporter.report(\"Property with underscore prefix found.\",event.property.line,event.property.col,rule)})}}),CSSLint.addRule({id:\"unique-headings\",name:\"Headings should only be defined once\",desc:\"Headings should be defined only once.\",browsers:\"All\",init:function(parser,reporter){var rule=this,headings={h1:0,h2:0,h3:0,h4:0,h5:0,h6:0};parser.addListener(\"startrule\",function(event){var selector,part,pseudo,i,j,selectors=event.selectors;for(i=0;selectors.length>i;i++)if(selector=selectors[i],part=selector.parts[selector.parts.length-1],part.elementName&&/(h[1-6])/i.test(\"\"+part.elementName)){for(j=0;part.modifiers.length>j;j++)if(\"pseudo\"===part.modifiers[j].type){pseudo=!0;break}pseudo||(headings[RegExp.$1]++,headings[RegExp.$1]>1&&reporter.report(\"Heading (\"+part.elementName+\") has already been defined.\",part.line,part.col,rule))}}),parser.addListener(\"endstylesheet\",function(){var prop,messages=[];for(prop in headings)headings.hasOwnProperty(prop)&&headings[prop]>1&&messages.push(headings[prop]+\" \"+prop+\"s\");messages.length&&reporter.rollupWarn(\"You have \"+messages.join(\", \")+\" defined in this stylesheet.\",rule)})}}),CSSLint.addRule({id:\"universal-selector\",name:\"Disallow universal selector\",desc:\"The universal selector (*) is known to be slow.\",browsers:\"All\",init:function(parser,reporter){var rule=this;parser.addListener(\"startrule\",function(event){var selector,part,i,selectors=event.selectors;for(i=0;selectors.length>i;i++)selector=selectors[i],part=selector.parts[selector.parts.length-1],\"*\"===part.elementName&&reporter.report(rule.desc,part.line,part.col,rule)})}}),CSSLint.addRule({id:\"unqualified-attributes\",name:\"Disallow unqualified attribute selectors\",desc:\"Unqualified attribute selectors are known to be slow.\",browsers:\"All\",init:function(parser,reporter){var rule=this;parser.addListener(\"startrule\",function(event){var selector,part,modifier,i,k,selectors=event.selectors;for(i=0;selectors.length>i;i++)if(selector=selectors[i],part=selector.parts[selector.parts.length-1],part.type===parser.SELECTOR_PART_TYPE)for(k=0;part.modifiers.length>k;k++)modifier=part.modifiers[k],\"attribute\"!==modifier.type||part.elementName&&\"*\"!==part.elementName||reporter.report(rule.desc,part.line,part.col,rule)})}}),CSSLint.addRule({id:\"vendor-prefix\",name:\"Require standard property with vendor prefix\",desc:\"When using a vendor-prefixed property, make sure to include the standard one.\",browsers:\"All\",init:function(parser,reporter){function startRule(){properties={},num=1}function endRule(){var prop,i,len,needed,actual,needsStandard=[];for(prop in properties)propertiesToCheck[prop]&&needsStandard.push({actual:prop,needed:propertiesToCheck[prop]});for(i=0,len=needsStandard.length;len>i;i++)needed=needsStandard[i].needed,actual=needsStandard[i].actual,properties[needed]?properties[needed][0].pos<properties[actual][0].pos&&reporter.report(\"Standard property '\"+needed+\"' should come after vendor-prefixed property '\"+actual+\"'.\",properties[actual][0].name.line,properties[actual][0].name.col,rule):reporter.report(\"Missing standard property '\"+needed+\"' to go along with '\"+actual+\"'.\",properties[actual][0].name.line,properties[actual][0].name.col,rule)}var properties,num,rule=this,propertiesToCheck={\"-webkit-border-radius\":\"border-radius\",\"-webkit-border-top-left-radius\":\"border-top-left-radius\",\"-webkit-border-top-right-radius\":\"border-top-right-radius\",\"-webkit-border-bottom-left-radius\":\"border-bottom-left-radius\",\"-webkit-border-bottom-right-radius\":\"border-bottom-right-radius\",\"-o-border-radius\":\"border-radius\",\"-o-border-top-left-radius\":\"border-top-left-radius\",\"-o-border-top-right-radius\":\"border-top-right-radius\",\"-o-border-bottom-left-radius\":\"border-bottom-left-radius\",\"-o-border-bottom-right-radius\":\"border-bottom-right-radius\",\"-moz-border-radius\":\"border-radius\",\"-moz-border-radius-topleft\":\"border-top-left-radius\",\"-moz-border-radius-topright\":\"border-top-right-radius\",\"-moz-border-radius-bottomleft\":\"border-bottom-left-radius\",\"-moz-border-radius-bottomright\":\"border-bottom-right-radius\",\"-moz-column-count\":\"column-count\",\"-webkit-column-count\":\"column-count\",\"-moz-column-gap\":\"column-gap\",\"-webkit-column-gap\":\"column-gap\",\"-moz-column-rule\":\"column-rule\",\"-webkit-column-rule\":\"column-rule\",\"-moz-column-rule-style\":\"column-rule-style\",\"-webkit-column-rule-style\":\"column-rule-style\",\"-moz-column-rule-color\":\"column-rule-color\",\"-webkit-column-rule-color\":\"column-rule-color\",\"-moz-column-rule-width\":\"column-rule-width\",\"-webkit-column-rule-width\":\"column-rule-width\",\"-moz-column-width\":\"column-width\",\"-webkit-column-width\":\"column-width\",\"-webkit-column-span\":\"column-span\",\"-webkit-columns\":\"columns\",\"-moz-box-shadow\":\"box-shadow\",\"-webkit-box-shadow\":\"box-shadow\",\"-moz-transform\":\"transform\",\"-webkit-transform\":\"transform\",\"-o-transform\":\"transform\",\"-ms-transform\":\"transform\",\"-moz-transform-origin\":\"transform-origin\",\"-webkit-transform-origin\":\"transform-origin\",\"-o-transform-origin\":\"transform-origin\",\"-ms-transform-origin\":\"transform-origin\",\"-moz-box-sizing\":\"box-sizing\",\"-webkit-box-sizing\":\"box-sizing\"};parser.addListener(\"startrule\",startRule),parser.addListener(\"startfontface\",startRule),parser.addListener(\"startpage\",startRule),parser.addListener(\"startpagemargin\",startRule),parser.addListener(\"startkeyframerule\",startRule),parser.addListener(\"property\",function(event){var name=event.property.text.toLowerCase();properties[name]||(properties[name]=[]),properties[name].push({name:event.property,value:event.value,pos:num++})}),parser.addListener(\"endrule\",endRule),parser.addListener(\"endfontface\",endRule),parser.addListener(\"endpage\",endRule),parser.addListener(\"endpagemargin\",endRule),parser.addListener(\"endkeyframerule\",endRule)}}),CSSLint.addRule({id:\"zero-units\",name:\"Disallow units for 0 values\",desc:\"You don't need to specify units when a value is 0.\",browsers:\"All\",init:function(parser,reporter){var rule=this;parser.addListener(\"property\",function(event){for(var parts=event.value.parts,i=0,len=parts.length;len>i;)!parts[i].units&&\"percentage\"!==parts[i].type||0!==parts[i].value||\"time\"===parts[i].type||reporter.report(\"Values of 0 shouldn't have units specified.\",parts[i].line,parts[i].col,rule),i++})}}),function(){var xmlEscape=function(str){return str&&str.constructor===String?str.replace(/[\\\"&><]/g,function(match){switch(match){case'\"':return\"&quot;\";case\"&\":return\"&amp;\";case\"<\":return\"&lt;\";case\">\":return\"&gt;\"}}):\"\"};CSSLint.addFormatter({id:\"checkstyle-xml\",name:\"Checkstyle XML format\",startFormat:function(){return'<?xml version=\"1.0\" encoding=\"utf-8\"?><checkstyle>'},endFormat:function(){return\"</checkstyle>\"},readError:function(filename,message){return'<file name=\"'+xmlEscape(filename)+'\"><error line=\"0\" column=\"0\" severty=\"error\" message=\"'+xmlEscape(message)+'\"></error></file>'},formatResults:function(results,filename){var messages=results.messages,output=[],generateSource=function(rule){return rule&&\"name\"in rule?\"net.csslint.\"+rule.name.replace(/\\s/g,\"\"):\"\"};return messages.length>0&&(output.push('<file name=\"'+filename+'\">'),CSSLint.Util.forEach(messages,function(message){message.rollup||output.push('<error line=\"'+message.line+'\" column=\"'+message.col+'\" severity=\"'+message.type+'\"'+' message=\"'+xmlEscape(message.message)+'\" source=\"'+generateSource(message.rule)+'\"/>')}),output.push(\"</file>\")),output.join(\"\")}})}(),CSSLint.addFormatter({id:\"compact\",name:\"Compact, 'porcelain' format\",startFormat:function(){return\"\"},endFormat:function(){return\"\"},formatResults:function(results,filename,options){var messages=results.messages,output=\"\";options=options||{};var capitalize=function(str){return str.charAt(0).toUpperCase()+str.slice(1)};return 0===messages.length?options.quiet?\"\":filename+\": Lint Free!\":(CSSLint.Util.forEach(messages,function(message){output+=message.rollup?filename+\": \"+capitalize(message.type)+\" - \"+message.message+\"\\n\":filename+\": \"+\"line \"+message.line+\", col \"+message.col+\", \"+capitalize(message.type)+\" - \"+message.message+\" (\"+message.rule.id+\")\\n\"}),output)}}),CSSLint.addFormatter({id:\"csslint-xml\",name:\"CSSLint XML format\",startFormat:function(){return'<?xml version=\"1.0\" encoding=\"utf-8\"?><csslint>'},endFormat:function(){return\"</csslint>\"},formatResults:function(results,filename){var messages=results.messages,output=[],escapeSpecialCharacters=function(str){return str&&str.constructor===String?str.replace(/\\\"/g,\"'\").replace(/&/g,\"&amp;\").replace(/</g,\"&lt;\").replace(/>/g,\"&gt;\"):\"\"};return messages.length>0&&(output.push('<file name=\"'+filename+'\">'),CSSLint.Util.forEach(messages,function(message){message.rollup?output.push('<issue severity=\"'+message.type+'\" reason=\"'+escapeSpecialCharacters(message.message)+'\" evidence=\"'+escapeSpecialCharacters(message.evidence)+'\"/>'):output.push('<issue line=\"'+message.line+'\" char=\"'+message.col+'\" severity=\"'+message.type+'\"'+' reason=\"'+escapeSpecialCharacters(message.message)+'\" evidence=\"'+escapeSpecialCharacters(message.evidence)+'\"/>')}),output.push(\"</file>\")),output.join(\"\")}}),CSSLint.addFormatter({id:\"junit-xml\",name:\"JUNIT XML format\",startFormat:function(){return'<?xml version=\"1.0\" encoding=\"utf-8\"?><testsuites>'},endFormat:function(){return\"</testsuites>\"},formatResults:function(results,filename){var messages=results.messages,output=[],tests={error:0,failure:0},generateSource=function(rule){return rule&&\"name\"in rule?\"net.csslint.\"+rule.name.replace(/\\s/g,\"\"):\"\"},escapeSpecialCharacters=function(str){return str&&str.constructor===String?str.replace(/\\\"/g,\"'\").replace(/</g,\"&lt;\").replace(/>/g,\"&gt;\"):\"\"};return messages.length>0&&(messages.forEach(function(message){var type=\"warning\"===message.type?\"error\":message.type;message.rollup||(output.push('<testcase time=\"0\" name=\"'+generateSource(message.rule)+'\">'),output.push(\"<\"+type+' message=\"'+escapeSpecialCharacters(message.message)+'\"><![CDATA['+message.line+\":\"+message.col+\":\"+escapeSpecialCharacters(message.evidence)+\"]]></\"+type+\">\"),output.push(\"</testcase>\"),tests[type]+=1)}),output.unshift('<testsuite time=\"0\" tests=\"'+messages.length+'\" skipped=\"0\" errors=\"'+tests.error+'\" failures=\"'+tests.failure+'\" package=\"net.csslint\" name=\"'+filename+'\">'),output.push(\"</testsuite>\")),output.join(\"\")}}),CSSLint.addFormatter({id:\"lint-xml\",name:\"Lint XML format\",startFormat:function(){return'<?xml version=\"1.0\" encoding=\"utf-8\"?><lint>'},endFormat:function(){return\"</lint>\"},formatResults:function(results,filename){var messages=results.messages,output=[],escapeSpecialCharacters=function(str){return str&&str.constructor===String?str.replace(/\\\"/g,\"'\").replace(/&/g,\"&amp;\").replace(/</g,\"&lt;\").replace(/>/g,\"&gt;\"):\"\"};return messages.length>0&&(output.push('<file name=\"'+filename+'\">'),CSSLint.Util.forEach(messages,function(message){message.rollup?output.push('<issue severity=\"'+message.type+'\" reason=\"'+escapeSpecialCharacters(message.message)+'\" evidence=\"'+escapeSpecialCharacters(message.evidence)+'\"/>'):output.push('<issue line=\"'+message.line+'\" char=\"'+message.col+'\" severity=\"'+message.type+'\"'+' reason=\"'+escapeSpecialCharacters(message.message)+'\" evidence=\"'+escapeSpecialCharacters(message.evidence)+'\"/>')}),output.push(\"</file>\")),output.join(\"\")}}),CSSLint.addFormatter({id:\"text\",name:\"Plain Text\",startFormat:function(){return\"\"},endFormat:function(){return\"\"},formatResults:function(results,filename,options){var messages=results.messages,output=\"\";if(options=options||{},0===messages.length)return options.quiet?\"\":\"\\n\\ncsslint: No errors in \"+filename+\".\";output=\"\\n\\ncsslint: There \",output+=1===messages.length?\"is 1 problem\":\"are \"+messages.length+\" problems\",output+=\" in \"+filename+\".\";var pos=filename.lastIndexOf(\"/\"),shortFilename=filename;return-1===pos&&(pos=filename.lastIndexOf(\"\\\\\")),pos>-1&&(shortFilename=filename.substring(pos+1)),CSSLint.Util.forEach(messages,function(message,i){output=output+\"\\n\\n\"+shortFilename,message.rollup?(output+=\"\\n\"+(i+1)+\": \"+message.type,output+=\"\\n\"+message.message):(output+=\"\\n\"+(i+1)+\": \"+message.type+\" at line \"+message.line+\", col \"+message.col,output+=\"\\n\"+message.message,output+=\"\\n\"+message.evidence)}),output}}),module.exports.CSSLint=CSSLint}),ace.define(\"ace/mode/css_worker\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/lib/lang\",\"ace/worker/mirror\",\"ace/mode/css/csslint\"],function(acequire,exports){\"use strict\";var oop=acequire(\"../lib/oop\"),lang=acequire(\"../lib/lang\"),Mirror=acequire(\"../worker/mirror\").Mirror,CSSLint=acequire(\"./css/csslint\").CSSLint,Worker=exports.Worker=function(sender){Mirror.call(this,sender),this.setTimeout(400),this.ruleset=null,this.setDisabledRules(\"ids|order-alphabetical\"),this.setInfoRules(\"adjoining-classes|qualified-headings|zero-units|gradients|import|outline-none|vendor-prefix\")};oop.inherits(Worker,Mirror),function(){this.setInfoRules=function(ruleNames){\"string\"==typeof ruleNames&&(ruleNames=ruleNames.split(\"|\")),this.infoRules=lang.arrayToMap(ruleNames),this.doc.getValue()&&this.deferredUpdate.schedule(100)},this.setDisabledRules=function(ruleNames){if(ruleNames){\"string\"==typeof ruleNames&&(ruleNames=ruleNames.split(\"|\"));var all={};CSSLint.getRules().forEach(function(x){all[x.id]=!0}),ruleNames.forEach(function(x){delete all[x]}),this.ruleset=all}else this.ruleset=null;this.doc.getValue()&&this.deferredUpdate.schedule(100)},this.onUpdate=function(){var value=this.doc.getValue();\nif(!value)return this.sender.emit(\"annotate\",[]);var infoRules=this.infoRules,result=CSSLint.verify(value,this.ruleset);this.sender.emit(\"annotate\",result.messages.map(function(msg){return{row:msg.line-1,column:msg.col-1,text:msg.message,type:infoRules[msg.rule.id]?\"info\":msg.type,rule:msg.rule.name}}))}}.call(Worker.prototype)}),ace.define(\"ace/lib/es5-shim\",[\"require\",\"exports\",\"module\"],function(){function Empty(){}function doesDefinePropertyWork(object){try{return Object.defineProperty(object,\"sentinel\",{}),\"sentinel\"in object}catch(exception){}}function toInteger(n){return n=+n,n!==n?n=0:0!==n&&n!==1/0&&n!==-(1/0)&&(n=(n>0||-1)*Math.floor(Math.abs(n))),n}Function.prototype.bind||(Function.prototype.bind=function(that){var target=this;if(\"function\"!=typeof target)throw new TypeError(\"Function.prototype.bind called on incompatible \"+target);var args=slice.call(arguments,1),bound=function(){if(this instanceof bound){var result=target.apply(this,args.concat(slice.call(arguments)));return Object(result)===result?result:this}return target.apply(that,args.concat(slice.call(arguments)))};return target.prototype&&(Empty.prototype=target.prototype,bound.prototype=new Empty,Empty.prototype=null),bound});var defineGetter,defineSetter,lookupGetter,lookupSetter,supportsAccessors,call=Function.prototype.call,prototypeOfArray=Array.prototype,prototypeOfObject=Object.prototype,slice=prototypeOfArray.slice,_toString=call.bind(prototypeOfObject.toString),owns=call.bind(prototypeOfObject.hasOwnProperty);if((supportsAccessors=owns(prototypeOfObject,\"__defineGetter__\"))&&(defineGetter=call.bind(prototypeOfObject.__defineGetter__),defineSetter=call.bind(prototypeOfObject.__defineSetter__),lookupGetter=call.bind(prototypeOfObject.__lookupGetter__),lookupSetter=call.bind(prototypeOfObject.__lookupSetter__)),2!=[1,2].splice(0).length)if(function(){function makeArray(l){var a=Array(l+2);return a[0]=a[1]=0,a}var lengthBefore,array=[];return array.splice.apply(array,makeArray(20)),array.splice.apply(array,makeArray(26)),lengthBefore=array.length,array.splice(5,0,\"XXX\"),lengthBefore+1==array.length,lengthBefore+1==array.length?!0:void 0}()){var array_splice=Array.prototype.splice;Array.prototype.splice=function(start,deleteCount){return arguments.length?array_splice.apply(this,[void 0===start?0:start,void 0===deleteCount?this.length-start:deleteCount].concat(slice.call(arguments,2))):[]}}else Array.prototype.splice=function(pos,removeCount){var length=this.length;pos>0?pos>length&&(pos=length):void 0==pos?pos=0:0>pos&&(pos=Math.max(length+pos,0)),length>pos+removeCount||(removeCount=length-pos);var removed=this.slice(pos,pos+removeCount),insert=slice.call(arguments,2),add=insert.length;if(pos===length)add&&this.push.apply(this,insert);else{var remove=Math.min(removeCount,length-pos),tailOldPos=pos+remove,tailNewPos=tailOldPos+add-remove,tailCount=length-tailOldPos,lengthAfterRemove=length-remove;if(tailOldPos>tailNewPos)for(var i=0;tailCount>i;++i)this[tailNewPos+i]=this[tailOldPos+i];else if(tailNewPos>tailOldPos)for(i=tailCount;i--;)this[tailNewPos+i]=this[tailOldPos+i];if(add&&pos===lengthAfterRemove)this.length=lengthAfterRemove,this.push.apply(this,insert);else for(this.length=lengthAfterRemove+add,i=0;add>i;++i)this[pos+i]=insert[i]}return removed};Array.isArray||(Array.isArray=function(obj){return\"[object Array]\"==_toString(obj)});var boxedString=Object(\"a\"),splitString=\"a\"!=boxedString[0]||!(0 in boxedString);if(Array.prototype.forEach||(Array.prototype.forEach=function(fun){var object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,thisp=arguments[1],i=-1,length=self.length>>>0;if(\"[object Function]\"!=_toString(fun))throw new TypeError;for(;length>++i;)i in self&&fun.call(thisp,self[i],i,object)}),Array.prototype.map||(Array.prototype.map=function(fun){var object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,length=self.length>>>0,result=Array(length),thisp=arguments[1];if(\"[object Function]\"!=_toString(fun))throw new TypeError(fun+\" is not a function\");for(var i=0;length>i;i++)i in self&&(result[i]=fun.call(thisp,self[i],i,object));return result}),Array.prototype.filter||(Array.prototype.filter=function(fun){var value,object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,length=self.length>>>0,result=[],thisp=arguments[1];if(\"[object Function]\"!=_toString(fun))throw new TypeError(fun+\" is not a function\");for(var i=0;length>i;i++)i in self&&(value=self[i],fun.call(thisp,value,i,object)&&result.push(value));return result}),Array.prototype.every||(Array.prototype.every=function(fun){var object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,length=self.length>>>0,thisp=arguments[1];if(\"[object Function]\"!=_toString(fun))throw new TypeError(fun+\" is not a function\");for(var i=0;length>i;i++)if(i in self&&!fun.call(thisp,self[i],i,object))return!1;return!0}),Array.prototype.some||(Array.prototype.some=function(fun){var object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,length=self.length>>>0,thisp=arguments[1];if(\"[object Function]\"!=_toString(fun))throw new TypeError(fun+\" is not a function\");for(var i=0;length>i;i++)if(i in self&&fun.call(thisp,self[i],i,object))return!0;return!1}),Array.prototype.reduce||(Array.prototype.reduce=function(fun){var object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,length=self.length>>>0;if(\"[object Function]\"!=_toString(fun))throw new TypeError(fun+\" is not a function\");if(!length&&1==arguments.length)throw new TypeError(\"reduce of empty array with no initial value\");var result,i=0;if(arguments.length>=2)result=arguments[1];else for(;;){if(i in self){result=self[i++];break}if(++i>=length)throw new TypeError(\"reduce of empty array with no initial value\")}for(;length>i;i++)i in self&&(result=fun.call(void 0,result,self[i],i,object));return result}),Array.prototype.reduceRight||(Array.prototype.reduceRight=function(fun){var object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,length=self.length>>>0;if(\"[object Function]\"!=_toString(fun))throw new TypeError(fun+\" is not a function\");if(!length&&1==arguments.length)throw new TypeError(\"reduceRight of empty array with no initial value\");var result,i=length-1;if(arguments.length>=2)result=arguments[1];else for(;;){if(i in self){result=self[i--];break}if(0>--i)throw new TypeError(\"reduceRight of empty array with no initial value\")}do i in this&&(result=fun.call(void 0,result,self[i],i,object));while(i--);return result}),Array.prototype.indexOf&&-1==[0,1].indexOf(1,2)||(Array.prototype.indexOf=function(sought){var self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):toObject(this),length=self.length>>>0;if(!length)return-1;var i=0;for(arguments.length>1&&(i=toInteger(arguments[1])),i=i>=0?i:Math.max(0,length+i);length>i;i++)if(i in self&&self[i]===sought)return i;return-1}),Array.prototype.lastIndexOf&&-1==[0,1].lastIndexOf(0,-3)||(Array.prototype.lastIndexOf=function(sought){var self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):toObject(this),length=self.length>>>0;if(!length)return-1;var i=length-1;for(arguments.length>1&&(i=Math.min(i,toInteger(arguments[1]))),i=i>=0?i:length-Math.abs(i);i>=0;i--)if(i in self&&sought===self[i])return i;return-1}),Object.getPrototypeOf||(Object.getPrototypeOf=function(object){return object.__proto__||(object.constructor?object.constructor.prototype:prototypeOfObject)}),!Object.getOwnPropertyDescriptor){var ERR_NON_OBJECT=\"Object.getOwnPropertyDescriptor called on a non-object: \";Object.getOwnPropertyDescriptor=function(object,property){if(\"object\"!=typeof object&&\"function\"!=typeof object||null===object)throw new TypeError(ERR_NON_OBJECT+object);if(owns(object,property)){var descriptor,getter,setter;if(descriptor={enumerable:!0,configurable:!0},supportsAccessors){var prototype=object.__proto__;object.__proto__=prototypeOfObject;var getter=lookupGetter(object,property),setter=lookupSetter(object,property);if(object.__proto__=prototype,getter||setter)return getter&&(descriptor.get=getter),setter&&(descriptor.set=setter),descriptor}return descriptor.value=object[property],descriptor}}}if(Object.getOwnPropertyNames||(Object.getOwnPropertyNames=function(object){return Object.keys(object)}),!Object.create){var createEmpty;createEmpty=null===Object.prototype.__proto__?function(){return{__proto__:null}}:function(){var empty={};for(var i in empty)empty[i]=null;return empty.constructor=empty.hasOwnProperty=empty.propertyIsEnumerable=empty.isPrototypeOf=empty.toLocaleString=empty.toString=empty.valueOf=empty.__proto__=null,empty},Object.create=function(prototype,properties){var object;if(null===prototype)object=createEmpty();else{if(\"object\"!=typeof prototype)throw new TypeError(\"typeof prototype[\"+typeof prototype+\"] != 'object'\");var Type=function(){};Type.prototype=prototype,object=new Type,object.__proto__=prototype}return void 0!==properties&&Object.defineProperties(object,properties),object}}if(Object.defineProperty){var definePropertyWorksOnObject=doesDefinePropertyWork({}),definePropertyWorksOnDom=\"undefined\"==typeof document||doesDefinePropertyWork(document.createElement(\"div\"));if(!definePropertyWorksOnObject||!definePropertyWorksOnDom)var definePropertyFallback=Object.defineProperty}if(!Object.defineProperty||definePropertyFallback){var ERR_NON_OBJECT_DESCRIPTOR=\"Property description must be an object: \",ERR_NON_OBJECT_TARGET=\"Object.defineProperty called on non-object: \",ERR_ACCESSORS_NOT_SUPPORTED=\"getters & setters can not be defined on this javascript engine\";Object.defineProperty=function(object,property,descriptor){if(\"object\"!=typeof object&&\"function\"!=typeof object||null===object)throw new TypeError(ERR_NON_OBJECT_TARGET+object);if(\"object\"!=typeof descriptor&&\"function\"!=typeof descriptor||null===descriptor)throw new TypeError(ERR_NON_OBJECT_DESCRIPTOR+descriptor);if(definePropertyFallback)try{return definePropertyFallback.call(Object,object,property,descriptor)}catch(exception){}if(owns(descriptor,\"value\"))if(supportsAccessors&&(lookupGetter(object,property)||lookupSetter(object,property))){var prototype=object.__proto__;object.__proto__=prototypeOfObject,delete object[property],object[property]=descriptor.value,object.__proto__=prototype}else object[property]=descriptor.value;else{if(!supportsAccessors)throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);owns(descriptor,\"get\")&&defineGetter(object,property,descriptor.get),owns(descriptor,\"set\")&&defineSetter(object,property,descriptor.set)}return object}}Object.defineProperties||(Object.defineProperties=function(object,properties){for(var property in properties)owns(properties,property)&&Object.defineProperty(object,property,properties[property]);return object}),Object.seal||(Object.seal=function(object){return object}),Object.freeze||(Object.freeze=function(object){return object});try{Object.freeze(function(){})}catch(exception){Object.freeze=function(freezeObject){return function(object){return\"function\"==typeof object?object:freezeObject(object)}}(Object.freeze)}if(Object.preventExtensions||(Object.preventExtensions=function(object){return object}),Object.isSealed||(Object.isSealed=function(){return!1}),Object.isFrozen||(Object.isFrozen=function(){return!1}),Object.isExtensible||(Object.isExtensible=function(object){if(Object(object)===object)throw new TypeError;for(var name=\"\";owns(object,name);)name+=\"?\";object[name]=!0;var returnValue=owns(object,name);return delete object[name],returnValue}),!Object.keys){var hasDontEnumBug=!0,dontEnums=[\"toString\",\"toLocaleString\",\"valueOf\",\"hasOwnProperty\",\"isPrototypeOf\",\"propertyIsEnumerable\",\"constructor\"],dontEnumsLength=dontEnums.length;for(var key in{toString:null})hasDontEnumBug=!1;Object.keys=function(object){if(\"object\"!=typeof object&&\"function\"!=typeof object||null===object)throw new TypeError(\"Object.keys called on a non-object\");var keys=[];for(var name in object)owns(object,name)&&keys.push(name);if(hasDontEnumBug)for(var i=0,ii=dontEnumsLength;ii>i;i++){var dontEnum=dontEnums[i];owns(object,dontEnum)&&keys.push(dontEnum)}return keys}}Date.now||(Date.now=function(){return(new Date).getTime()});var ws=\"\t\\n\u000b\\f\\r   ᠎             　\\u2028\\u2029﻿\";if(!String.prototype.trim||ws.trim()){ws=\"[\"+ws+\"]\";var trimBeginRegexp=RegExp(\"^\"+ws+ws+\"*\"),trimEndRegexp=RegExp(ws+ws+\"*$\");String.prototype.trim=function(){return(this+\"\").replace(trimBeginRegexp,\"\").replace(trimEndRegexp,\"\")}}var toObject=function(o){if(null==o)throw new TypeError(\"can't convert \"+o+\" to object\");return Object(o)}});";

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports.id = 'ace/mode/html_worker';
	module.exports.src = "\"no use strict\";(function(window){function resolveModuleId(id,paths){for(var testPath=id,tail=\"\";testPath;){var alias=paths[testPath];if(\"string\"==typeof alias)return alias+tail;if(alias)return alias.location.replace(/\\/*$/,\"/\")+(tail||alias.main||alias.name);if(alias===!1)return\"\";var i=testPath.lastIndexOf(\"/\");if(-1===i)break;tail=testPath.substr(i)+tail,testPath=testPath.slice(0,i)}return id}if(!(void 0!==window.window&&window.document||window.acequire&&window.define)){window.console||(window.console=function(){var msgs=Array.prototype.slice.call(arguments,0);postMessage({type:\"log\",data:msgs})},window.console.error=window.console.warn=window.console.log=window.console.trace=window.console),window.window=window,window.ace=window,window.onerror=function(message,file,line,col,err){postMessage({type:\"error\",data:{message:message,data:err.data,file:file,line:line,col:col,stack:err.stack}})},window.normalizeModule=function(parentId,moduleName){if(-1!==moduleName.indexOf(\"!\")){var chunks=moduleName.split(\"!\");return window.normalizeModule(parentId,chunks[0])+\"!\"+window.normalizeModule(parentId,chunks[1])}if(\".\"==moduleName.charAt(0)){var base=parentId.split(\"/\").slice(0,-1).join(\"/\");for(moduleName=(base?base+\"/\":\"\")+moduleName;-1!==moduleName.indexOf(\".\")&&previous!=moduleName;){var previous=moduleName;moduleName=moduleName.replace(/^\\.\\//,\"\").replace(/\\/\\.\\//,\"/\").replace(/[^\\/]+\\/\\.\\.\\//,\"\")}}return moduleName},window.acequire=function acequire(parentId,id){if(id||(id=parentId,parentId=null),!id.charAt)throw Error(\"worker.js acequire() accepts only (parentId, id) as arguments\");id=window.normalizeModule(parentId,id);var module=window.acequire.modules[id];if(module)return module.initialized||(module.initialized=!0,module.exports=module.factory().exports),module.exports;if(!window.acequire.tlns)return console.log(\"unable to load \"+id);var path=resolveModuleId(id,window.acequire.tlns);return\".js\"!=path.slice(-3)&&(path+=\".js\"),window.acequire.id=id,window.acequire.modules[id]={},importScripts(path),window.acequire(parentId,id)},window.acequire.modules={},window.acequire.tlns={},window.define=function(id,deps,factory){if(2==arguments.length?(factory=deps,\"string\"!=typeof id&&(deps=id,id=window.acequire.id)):1==arguments.length&&(factory=id,deps=[],id=window.acequire.id),\"function\"!=typeof factory)return window.acequire.modules[id]={exports:factory,initialized:!0},void 0;deps.length||(deps=[\"require\",\"exports\",\"module\"]);var req=function(childId){return window.acequire(id,childId)};window.acequire.modules[id]={exports:{},factory:function(){var module=this,returnExports=factory.apply(this,deps.map(function(dep){switch(dep){case\"require\":return req;case\"exports\":return module.exports;case\"module\":return module;default:return req(dep)}}));return returnExports&&(module.exports=returnExports),module}}},window.define.amd={},acequire.tlns={},window.initBaseUrls=function(topLevelNamespaces){for(var i in topLevelNamespaces)acequire.tlns[i]=topLevelNamespaces[i]},window.initSender=function(){var EventEmitter=window.acequire(\"ace/lib/event_emitter\").EventEmitter,oop=window.acequire(\"ace/lib/oop\"),Sender=function(){};return function(){oop.implement(this,EventEmitter),this.callback=function(data,callbackId){postMessage({type:\"call\",id:callbackId,data:data})},this.emit=function(name,data){postMessage({type:\"event\",name:name,data:data})}}.call(Sender.prototype),new Sender};var main=window.main=null,sender=window.sender=null;window.onmessage=function(e){var msg=e.data;if(msg.event&&sender)sender._signal(msg.event,msg.data);else if(msg.command)if(main[msg.command])main[msg.command].apply(main,msg.args);else{if(!window[msg.command])throw Error(\"Unknown command:\"+msg.command);window[msg.command].apply(window,msg.args)}else if(msg.init){window.initBaseUrls(msg.tlns),acequire(\"ace/lib/es5-shim\"),sender=window.sender=window.initSender();var clazz=acequire(msg.module)[msg.classname];main=window.main=new clazz(sender)}}}})(this),ace.define(\"ace/lib/oop\",[\"require\",\"exports\",\"module\"],function(acequire,exports){\"use strict\";exports.inherits=function(ctor,superCtor){ctor.super_=superCtor,ctor.prototype=Object.create(superCtor.prototype,{constructor:{value:ctor,enumerable:!1,writable:!0,configurable:!0}})},exports.mixin=function(obj,mixin){for(var key in mixin)obj[key]=mixin[key];return obj},exports.implement=function(proto,mixin){exports.mixin(proto,mixin)}}),ace.define(\"ace/lib/lang\",[\"require\",\"exports\",\"module\"],function(acequire,exports){\"use strict\";exports.last=function(a){return a[a.length-1]},exports.stringReverse=function(string){return string.split(\"\").reverse().join(\"\")},exports.stringRepeat=function(string,count){for(var result=\"\";count>0;)1&count&&(result+=string),(count>>=1)&&(string+=string);return result};var trimBeginRegexp=/^\\s\\s*/,trimEndRegexp=/\\s\\s*$/;exports.stringTrimLeft=function(string){return string.replace(trimBeginRegexp,\"\")},exports.stringTrimRight=function(string){return string.replace(trimEndRegexp,\"\")},exports.copyObject=function(obj){var copy={};for(var key in obj)copy[key]=obj[key];return copy},exports.copyArray=function(array){for(var copy=[],i=0,l=array.length;l>i;i++)copy[i]=array[i]&&\"object\"==typeof array[i]?this.copyObject(array[i]):array[i];return copy},exports.deepCopy=function deepCopy(obj){if(\"object\"!=typeof obj||!obj)return obj;var copy;if(Array.isArray(obj)){copy=[];for(var key=0;obj.length>key;key++)copy[key]=deepCopy(obj[key]);return copy}var cons=obj.constructor;if(cons===RegExp)return obj;copy=cons();for(var key in obj)copy[key]=deepCopy(obj[key]);return copy},exports.arrayToMap=function(arr){for(var map={},i=0;arr.length>i;i++)map[arr[i]]=1;return map},exports.createMap=function(props){var map=Object.create(null);for(var i in props)map[i]=props[i];return map},exports.arrayRemove=function(array,value){for(var i=0;array.length>=i;i++)value===array[i]&&array.splice(i,1)},exports.escapeRegExp=function(str){return str.replace(/([.*+?^${}()|[\\]\\/\\\\])/g,\"\\\\$1\")},exports.escapeHTML=function(str){return str.replace(/&/g,\"&#38;\").replace(/\"/g,\"&#34;\").replace(/'/g,\"&#39;\").replace(/</g,\"&#60;\")},exports.getMatchOffsets=function(string,regExp){var matches=[];return string.replace(regExp,function(str){matches.push({offset:arguments[arguments.length-2],length:str.length})}),matches},exports.deferredCall=function(fcn){var timer=null,callback=function(){timer=null,fcn()},deferred=function(timeout){return deferred.cancel(),timer=setTimeout(callback,timeout||0),deferred};return deferred.schedule=deferred,deferred.call=function(){return this.cancel(),fcn(),deferred},deferred.cancel=function(){return clearTimeout(timer),timer=null,deferred},deferred.isPending=function(){return timer},deferred},exports.delayedCall=function(fcn,defaultTimeout){var timer=null,callback=function(){timer=null,fcn()},_self=function(timeout){null==timer&&(timer=setTimeout(callback,timeout||defaultTimeout))};return _self.delay=function(timeout){timer&&clearTimeout(timer),timer=setTimeout(callback,timeout||defaultTimeout)},_self.schedule=_self,_self.call=function(){this.cancel(),fcn()},_self.cancel=function(){timer&&clearTimeout(timer),timer=null},_self.isPending=function(){return timer},_self}}),ace.define(\"ace/range\",[\"require\",\"exports\",\"module\"],function(acequire,exports){\"use strict\";var comparePoints=function(p1,p2){return p1.row-p2.row||p1.column-p2.column},Range=function(startRow,startColumn,endRow,endColumn){this.start={row:startRow,column:startColumn},this.end={row:endRow,column:endColumn}};(function(){this.isEqual=function(range){return this.start.row===range.start.row&&this.end.row===range.end.row&&this.start.column===range.start.column&&this.end.column===range.end.column},this.toString=function(){return\"Range: [\"+this.start.row+\"/\"+this.start.column+\"] -> [\"+this.end.row+\"/\"+this.end.column+\"]\"},this.contains=function(row,column){return 0==this.compare(row,column)},this.compareRange=function(range){var cmp,end=range.end,start=range.start;return cmp=this.compare(end.row,end.column),1==cmp?(cmp=this.compare(start.row,start.column),1==cmp?2:0==cmp?1:0):-1==cmp?-2:(cmp=this.compare(start.row,start.column),-1==cmp?-1:1==cmp?42:0)},this.comparePoint=function(p){return this.compare(p.row,p.column)},this.containsRange=function(range){return 0==this.comparePoint(range.start)&&0==this.comparePoint(range.end)},this.intersects=function(range){var cmp=this.compareRange(range);return-1==cmp||0==cmp||1==cmp},this.isEnd=function(row,column){return this.end.row==row&&this.end.column==column},this.isStart=function(row,column){return this.start.row==row&&this.start.column==column},this.setStart=function(row,column){\"object\"==typeof row?(this.start.column=row.column,this.start.row=row.row):(this.start.row=row,this.start.column=column)},this.setEnd=function(row,column){\"object\"==typeof row?(this.end.column=row.column,this.end.row=row.row):(this.end.row=row,this.end.column=column)},this.inside=function(row,column){return 0==this.compare(row,column)?this.isEnd(row,column)||this.isStart(row,column)?!1:!0:!1},this.insideStart=function(row,column){return 0==this.compare(row,column)?this.isEnd(row,column)?!1:!0:!1},this.insideEnd=function(row,column){return 0==this.compare(row,column)?this.isStart(row,column)?!1:!0:!1},this.compare=function(row,column){return this.isMultiLine()||row!==this.start.row?this.start.row>row?-1:row>this.end.row?1:this.start.row===row?column>=this.start.column?0:-1:this.end.row===row?this.end.column>=column?0:1:0:this.start.column>column?-1:column>this.end.column?1:0},this.compareStart=function(row,column){return this.start.row==row&&this.start.column==column?-1:this.compare(row,column)},this.compareEnd=function(row,column){return this.end.row==row&&this.end.column==column?1:this.compare(row,column)},this.compareInside=function(row,column){return this.end.row==row&&this.end.column==column?1:this.start.row==row&&this.start.column==column?-1:this.compare(row,column)},this.clipRows=function(firstRow,lastRow){if(this.end.row>lastRow)var end={row:lastRow+1,column:0};else if(firstRow>this.end.row)var end={row:firstRow,column:0};if(this.start.row>lastRow)var start={row:lastRow+1,column:0};else if(firstRow>this.start.row)var start={row:firstRow,column:0};return Range.fromPoints(start||this.start,end||this.end)},this.extend=function(row,column){var cmp=this.compare(row,column);if(0==cmp)return this;if(-1==cmp)var start={row:row,column:column};else var end={row:row,column:column};return Range.fromPoints(start||this.start,end||this.end)},this.isEmpty=function(){return this.start.row===this.end.row&&this.start.column===this.end.column},this.isMultiLine=function(){return this.start.row!==this.end.row},this.clone=function(){return Range.fromPoints(this.start,this.end)},this.collapseRows=function(){return 0==this.end.column?new Range(this.start.row,0,Math.max(this.start.row,this.end.row-1),0):new Range(this.start.row,0,this.end.row,0)},this.toScreenRange=function(session){var screenPosStart=session.documentToScreenPosition(this.start),screenPosEnd=session.documentToScreenPosition(this.end);return new Range(screenPosStart.row,screenPosStart.column,screenPosEnd.row,screenPosEnd.column)},this.moveBy=function(row,column){this.start.row+=row,this.start.column+=column,this.end.row+=row,this.end.column+=column}}).call(Range.prototype),Range.fromPoints=function(start,end){return new Range(start.row,start.column,end.row,end.column)},Range.comparePoints=comparePoints,Range.comparePoints=function(p1,p2){return p1.row-p2.row||p1.column-p2.column},exports.Range=Range}),ace.define(\"ace/apply_delta\",[\"require\",\"exports\",\"module\"],function(acequire,exports){\"use strict\";exports.applyDelta=function(docLines,delta){var row=delta.start.row,startColumn=delta.start.column,line=docLines[row]||\"\";switch(delta.action){case\"insert\":var lines=delta.lines;if(1===lines.length)docLines[row]=line.substring(0,startColumn)+delta.lines[0]+line.substring(startColumn);else{var args=[row,1].concat(delta.lines);docLines.splice.apply(docLines,args),docLines[row]=line.substring(0,startColumn)+docLines[row],docLines[row+delta.lines.length-1]+=line.substring(startColumn)}break;case\"remove\":var endColumn=delta.end.column,endRow=delta.end.row;row===endRow?docLines[row]=line.substring(0,startColumn)+line.substring(endColumn):docLines.splice(row,endRow-row+1,line.substring(0,startColumn)+docLines[endRow].substring(endColumn))}}}),ace.define(\"ace/lib/event_emitter\",[\"require\",\"exports\",\"module\"],function(acequire,exports){\"use strict\";var EventEmitter={},stopPropagation=function(){this.propagationStopped=!0},preventDefault=function(){this.defaultPrevented=!0};EventEmitter._emit=EventEmitter._dispatchEvent=function(eventName,e){this._eventRegistry||(this._eventRegistry={}),this._defaultHandlers||(this._defaultHandlers={});var listeners=this._eventRegistry[eventName]||[],defaultHandler=this._defaultHandlers[eventName];if(listeners.length||defaultHandler){\"object\"==typeof e&&e||(e={}),e.type||(e.type=eventName),e.stopPropagation||(e.stopPropagation=stopPropagation),e.preventDefault||(e.preventDefault=preventDefault),listeners=listeners.slice();for(var i=0;listeners.length>i&&(listeners[i](e,this),!e.propagationStopped);i++);return defaultHandler&&!e.defaultPrevented?defaultHandler(e,this):void 0}},EventEmitter._signal=function(eventName,e){var listeners=(this._eventRegistry||{})[eventName];if(listeners){listeners=listeners.slice();for(var i=0;listeners.length>i;i++)listeners[i](e,this)}},EventEmitter.once=function(eventName,callback){var _self=this;callback&&this.addEventListener(eventName,function newCallback(){_self.removeEventListener(eventName,newCallback),callback.apply(null,arguments)})},EventEmitter.setDefaultHandler=function(eventName,callback){var handlers=this._defaultHandlers;if(handlers||(handlers=this._defaultHandlers={_disabled_:{}}),handlers[eventName]){var old=handlers[eventName],disabled=handlers._disabled_[eventName];disabled||(handlers._disabled_[eventName]=disabled=[]),disabled.push(old);var i=disabled.indexOf(callback);-1!=i&&disabled.splice(i,1)}handlers[eventName]=callback},EventEmitter.removeDefaultHandler=function(eventName,callback){var handlers=this._defaultHandlers;if(handlers){var disabled=handlers._disabled_[eventName];if(handlers[eventName]==callback)handlers[eventName],disabled&&this.setDefaultHandler(eventName,disabled.pop());else if(disabled){var i=disabled.indexOf(callback);-1!=i&&disabled.splice(i,1)}}},EventEmitter.on=EventEmitter.addEventListener=function(eventName,callback,capturing){this._eventRegistry=this._eventRegistry||{};var listeners=this._eventRegistry[eventName];return listeners||(listeners=this._eventRegistry[eventName]=[]),-1==listeners.indexOf(callback)&&listeners[capturing?\"unshift\":\"push\"](callback),callback},EventEmitter.off=EventEmitter.removeListener=EventEmitter.removeEventListener=function(eventName,callback){this._eventRegistry=this._eventRegistry||{};var listeners=this._eventRegistry[eventName];if(listeners){var index=listeners.indexOf(callback);-1!==index&&listeners.splice(index,1)}},EventEmitter.removeAllListeners=function(eventName){this._eventRegistry&&(this._eventRegistry[eventName]=[])},exports.EventEmitter=EventEmitter}),ace.define(\"ace/anchor\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/lib/event_emitter\"],function(acequire,exports){\"use strict\";var oop=acequire(\"./lib/oop\"),EventEmitter=acequire(\"./lib/event_emitter\").EventEmitter,Anchor=exports.Anchor=function(doc,row,column){this.$onChange=this.onChange.bind(this),this.attach(doc),column===void 0?this.setPosition(row.row,row.column):this.setPosition(row,column)};(function(){function $pointsInOrder(point1,point2,equalPointsInOrder){var bColIsAfter=equalPointsInOrder?point1.column<=point2.column:point1.column<point2.column;return point1.row<point2.row||point1.row==point2.row&&bColIsAfter}function $getTransformedPoint(delta,point,moveIfEqual){var deltaIsInsert=\"insert\"==delta.action,deltaRowShift=(deltaIsInsert?1:-1)*(delta.end.row-delta.start.row),deltaColShift=(deltaIsInsert?1:-1)*(delta.end.column-delta.start.column),deltaStart=delta.start,deltaEnd=deltaIsInsert?deltaStart:delta.end;return $pointsInOrder(point,deltaStart,moveIfEqual)?{row:point.row,column:point.column}:$pointsInOrder(deltaEnd,point,!moveIfEqual)?{row:point.row+deltaRowShift,column:point.column+(point.row==deltaEnd.row?deltaColShift:0)}:{row:deltaStart.row,column:deltaStart.column}}oop.implement(this,EventEmitter),this.getPosition=function(){return this.$clipPositionToDocument(this.row,this.column)},this.getDocument=function(){return this.document},this.$insertRight=!1,this.onChange=function(delta){if(!(delta.start.row==delta.end.row&&delta.start.row!=this.row||delta.start.row>this.row)){var point=$getTransformedPoint(delta,{row:this.row,column:this.column},this.$insertRight);this.setPosition(point.row,point.column,!0)}},this.setPosition=function(row,column,noClip){var pos;if(pos=noClip?{row:row,column:column}:this.$clipPositionToDocument(row,column),this.row!=pos.row||this.column!=pos.column){var old={row:this.row,column:this.column};this.row=pos.row,this.column=pos.column,this._signal(\"change\",{old:old,value:pos})}},this.detach=function(){this.document.removeEventListener(\"change\",this.$onChange)},this.attach=function(doc){this.document=doc||this.document,this.document.on(\"change\",this.$onChange)},this.$clipPositionToDocument=function(row,column){var pos={};return row>=this.document.getLength()?(pos.row=Math.max(0,this.document.getLength()-1),pos.column=this.document.getLine(pos.row).length):0>row?(pos.row=0,pos.column=0):(pos.row=row,pos.column=Math.min(this.document.getLine(pos.row).length,Math.max(0,column))),0>column&&(pos.column=0),pos}}).call(Anchor.prototype)}),ace.define(\"ace/document\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/apply_delta\",\"ace/lib/event_emitter\",\"ace/range\",\"ace/anchor\"],function(acequire,exports){\"use strict\";var oop=acequire(\"./lib/oop\"),applyDelta=acequire(\"./apply_delta\").applyDelta,EventEmitter=acequire(\"./lib/event_emitter\").EventEmitter,Range=acequire(\"./range\").Range,Anchor=acequire(\"./anchor\").Anchor,Document=function(textOrLines){this.$lines=[\"\"],0===textOrLines.length?this.$lines=[\"\"]:Array.isArray(textOrLines)?this.insertMergedLines({row:0,column:0},textOrLines):this.insert({row:0,column:0},textOrLines)};(function(){oop.implement(this,EventEmitter),this.setValue=function(text){var len=this.getLength()-1;this.remove(new Range(0,0,len,this.getLine(len).length)),this.insert({row:0,column:0},text)},this.getValue=function(){return this.getAllLines().join(this.getNewLineCharacter())},this.createAnchor=function(row,column){return new Anchor(this,row,column)},this.$split=0===\"aaa\".split(/a/).length?function(text){return text.replace(/\\r\\n|\\r/g,\"\\n\").split(\"\\n\")}:function(text){return text.split(/\\r\\n|\\r|\\n/)},this.$detectNewLine=function(text){var match=text.match(/^.*?(\\r\\n|\\r|\\n)/m);this.$autoNewLine=match?match[1]:\"\\n\",this._signal(\"changeNewLineMode\")},this.getNewLineCharacter=function(){switch(this.$newLineMode){case\"windows\":return\"\\r\\n\";case\"unix\":return\"\\n\";default:return this.$autoNewLine||\"\\n\"}},this.$autoNewLine=\"\",this.$newLineMode=\"auto\",this.setNewLineMode=function(newLineMode){this.$newLineMode!==newLineMode&&(this.$newLineMode=newLineMode,this._signal(\"changeNewLineMode\"))},this.getNewLineMode=function(){return this.$newLineMode},this.isNewLine=function(text){return\"\\r\\n\"==text||\"\\r\"==text||\"\\n\"==text},this.getLine=function(row){return this.$lines[row]||\"\"},this.getLines=function(firstRow,lastRow){return this.$lines.slice(firstRow,lastRow+1)},this.getAllLines=function(){return this.getLines(0,this.getLength())},this.getLength=function(){return this.$lines.length},this.getTextRange=function(range){return this.getLinesForRange(range).join(this.getNewLineCharacter())},this.getLinesForRange=function(range){var lines;if(range.start.row===range.end.row)lines=[this.getLine(range.start.row).substring(range.start.column,range.end.column)];else{lines=this.getLines(range.start.row,range.end.row),lines[0]=(lines[0]||\"\").substring(range.start.column);var l=lines.length-1;range.end.row-range.start.row==l&&(lines[l]=lines[l].substring(0,range.end.column))}return lines},this.insertLines=function(row,lines){return console.warn(\"Use of document.insertLines is deprecated. Use the insertFullLines method instead.\"),this.insertFullLines(row,lines)},this.removeLines=function(firstRow,lastRow){return console.warn(\"Use of document.removeLines is deprecated. Use the removeFullLines method instead.\"),this.removeFullLines(firstRow,lastRow)},this.insertNewLine=function(position){return console.warn(\"Use of document.insertNewLine is deprecated. Use insertMergedLines(position, ['', '']) instead.\"),this.insertMergedLines(position,[\"\",\"\"])},this.insert=function(position,text){return 1>=this.getLength()&&this.$detectNewLine(text),this.insertMergedLines(position,this.$split(text))},this.insertInLine=function(position,text){var start=this.clippedPos(position.row,position.column),end=this.pos(position.row,position.column+text.length);return this.applyDelta({start:start,end:end,action:\"insert\",lines:[text]},!0),this.clonePos(end)},this.clippedPos=function(row,column){var length=this.getLength();void 0===row?row=length:0>row?row=0:row>=length&&(row=length-1,column=void 0);var line=this.getLine(row);return void 0==column&&(column=line.length),column=Math.min(Math.max(column,0),line.length),{row:row,column:column}},this.clonePos=function(pos){return{row:pos.row,column:pos.column}},this.pos=function(row,column){return{row:row,column:column}},this.$clipPosition=function(position){var length=this.getLength();return position.row>=length?(position.row=Math.max(0,length-1),position.column=this.getLine(length-1).length):(position.row=Math.max(0,position.row),position.column=Math.min(Math.max(position.column,0),this.getLine(position.row).length)),position},this.insertFullLines=function(row,lines){row=Math.min(Math.max(row,0),this.getLength());var column=0;this.getLength()>row?(lines=lines.concat([\"\"]),column=0):(lines=[\"\"].concat(lines),row--,column=this.$lines[row].length),this.insertMergedLines({row:row,column:column},lines)},this.insertMergedLines=function(position,lines){var start=this.clippedPos(position.row,position.column),end={row:start.row+lines.length-1,column:(1==lines.length?start.column:0)+lines[lines.length-1].length};return this.applyDelta({start:start,end:end,action:\"insert\",lines:lines}),this.clonePos(end)},this.remove=function(range){var start=this.clippedPos(range.start.row,range.start.column),end=this.clippedPos(range.end.row,range.end.column);return this.applyDelta({start:start,end:end,action:\"remove\",lines:this.getLinesForRange({start:start,end:end})}),this.clonePos(start)},this.removeInLine=function(row,startColumn,endColumn){var start=this.clippedPos(row,startColumn),end=this.clippedPos(row,endColumn);return this.applyDelta({start:start,end:end,action:\"remove\",lines:this.getLinesForRange({start:start,end:end})},!0),this.clonePos(start)},this.removeFullLines=function(firstRow,lastRow){firstRow=Math.min(Math.max(0,firstRow),this.getLength()-1),lastRow=Math.min(Math.max(0,lastRow),this.getLength()-1);var deleteFirstNewLine=lastRow==this.getLength()-1&&firstRow>0,deleteLastNewLine=this.getLength()-1>lastRow,startRow=deleteFirstNewLine?firstRow-1:firstRow,startCol=deleteFirstNewLine?this.getLine(startRow).length:0,endRow=deleteLastNewLine?lastRow+1:lastRow,endCol=deleteLastNewLine?0:this.getLine(endRow).length,range=new Range(startRow,startCol,endRow,endCol),deletedLines=this.$lines.slice(firstRow,lastRow+1);return this.applyDelta({start:range.start,end:range.end,action:\"remove\",lines:this.getLinesForRange(range)}),deletedLines},this.removeNewLine=function(row){this.getLength()-1>row&&row>=0&&this.applyDelta({start:this.pos(row,this.getLine(row).length),end:this.pos(row+1,0),action:\"remove\",lines:[\"\",\"\"]})},this.replace=function(range,text){if(range instanceof Range||(range=Range.fromPoints(range.start,range.end)),0===text.length&&range.isEmpty())return range.start;if(text==this.getTextRange(range))return range.end;this.remove(range);var end;return end=text?this.insert(range.start,text):range.start},this.applyDeltas=function(deltas){for(var i=0;deltas.length>i;i++)this.applyDelta(deltas[i])},this.revertDeltas=function(deltas){for(var i=deltas.length-1;i>=0;i--)this.revertDelta(deltas[i])},this.applyDelta=function(delta,doNotValidate){var isInsert=\"insert\"==delta.action;(isInsert?1>=delta.lines.length&&!delta.lines[0]:!Range.comparePoints(delta.start,delta.end))||(isInsert&&delta.lines.length>2e4&&this.$splitAndapplyLargeDelta(delta,2e4),applyDelta(this.$lines,delta,doNotValidate),this._signal(\"change\",delta))},this.$splitAndapplyLargeDelta=function(delta,MAX){for(var lines=delta.lines,l=lines.length,row=delta.start.row,column=delta.start.column,from=0,to=0;;){from=to,to+=MAX-1;var chunk=lines.slice(from,to);if(to>l){delta.lines=chunk,delta.start.row=row+from,delta.start.column=column;break}chunk.push(\"\"),this.applyDelta({start:this.pos(row+from,column),end:this.pos(row+to,column=0),action:delta.action,lines:chunk},!0)}},this.revertDelta=function(delta){this.applyDelta({start:this.clonePos(delta.start),end:this.clonePos(delta.end),action:\"insert\"==delta.action?\"remove\":\"insert\",lines:delta.lines.slice()})},this.indexToPosition=function(index,startRow){for(var lines=this.$lines||this.getAllLines(),newlineLength=this.getNewLineCharacter().length,i=startRow||0,l=lines.length;l>i;i++)if(index-=lines[i].length+newlineLength,0>index)return{row:i,column:index+lines[i].length+newlineLength};return{row:l-1,column:lines[l-1].length}},this.positionToIndex=function(pos,startRow){for(var lines=this.$lines||this.getAllLines(),newlineLength=this.getNewLineCharacter().length,index=0,row=Math.min(pos.row,lines.length),i=startRow||0;row>i;++i)index+=lines[i].length+newlineLength;return index+pos.column}}).call(Document.prototype),exports.Document=Document}),ace.define(\"ace/worker/mirror\",[\"require\",\"exports\",\"module\",\"ace/range\",\"ace/document\",\"ace/lib/lang\"],function(acequire,exports){\"use strict\";acequire(\"../range\").Range;var Document=acequire(\"../document\").Document,lang=acequire(\"../lib/lang\"),Mirror=exports.Mirror=function(sender){this.sender=sender;var doc=this.doc=new Document(\"\"),deferredUpdate=this.deferredUpdate=lang.delayedCall(this.onUpdate.bind(this)),_self=this;sender.on(\"change\",function(e){var data=e.data;if(data[0].start)doc.applyDeltas(data);else for(var i=0;data.length>i;i+=2){if(Array.isArray(data[i+1]))var d={action:\"insert\",start:data[i],lines:data[i+1]};else var d={action:\"remove\",start:data[i],end:data[i+1]};doc.applyDelta(d,!0)}return _self.$timeout?deferredUpdate.schedule(_self.$timeout):(_self.onUpdate(),void 0)})};(function(){this.$timeout=500,this.setTimeout=function(timeout){this.$timeout=timeout},this.setValue=function(value){this.doc.setValue(value),this.deferredUpdate.schedule(this.$timeout)},this.getValue=function(callbackId){this.sender.callback(this.doc.getValue(),callbackId)},this.onUpdate=function(){},this.isPending=function(){return this.deferredUpdate.isPending()}}).call(Mirror.prototype)}),ace.define(\"ace/mode/html/saxparser\",[\"require\",\"exports\",\"module\"],function(acequire,exports,module){module.exports=function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=\"function\"==typeof acequire&&acequire;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw Error(\"Cannot find module '\"+o+\"'\")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}for(var i=\"function\"==typeof acequire&&acequire,o=0;r.length>o;o++)s(r[o]);return s}({1:[function(_dereq_,module,exports){function isScopeMarker(node){return\"http://www.w3.org/1999/xhtml\"===node.namespaceURI?\"applet\"===node.localName||\"caption\"===node.localName||\"marquee\"===node.localName||\"object\"===node.localName||\"table\"===node.localName||\"td\"===node.localName||\"th\"===node.localName:\"http://www.w3.org/1998/Math/MathML\"===node.namespaceURI?\"mi\"===node.localName||\"mo\"===node.localName||\"mn\"===node.localName||\"ms\"===node.localName||\"mtext\"===node.localName||\"annotation-xml\"===node.localName:\"http://www.w3.org/2000/svg\"===node.namespaceURI?\"foreignObject\"===node.localName||\"desc\"===node.localName||\"title\"===node.localName:void 0}function isListItemScopeMarker(node){return isScopeMarker(node)||\"http://www.w3.org/1999/xhtml\"===node.namespaceURI&&\"ol\"===node.localName||\"http://www.w3.org/1999/xhtml\"===node.namespaceURI&&\"ul\"===node.localName}function isTableScopeMarker(node){return\"http://www.w3.org/1999/xhtml\"===node.namespaceURI&&\"table\"===node.localName||\"http://www.w3.org/1999/xhtml\"===node.namespaceURI&&\"html\"===node.localName}function isTableBodyScopeMarker(node){return\"http://www.w3.org/1999/xhtml\"===node.namespaceURI&&\"tbody\"===node.localName||\"http://www.w3.org/1999/xhtml\"===node.namespaceURI&&\"tfoot\"===node.localName||\"http://www.w3.org/1999/xhtml\"===node.namespaceURI&&\"thead\"===node.localName||\"http://www.w3.org/1999/xhtml\"===node.namespaceURI&&\"html\"===node.localName}function isTableRowScopeMarker(node){return\"http://www.w3.org/1999/xhtml\"===node.namespaceURI&&\"tr\"===node.localName||\"http://www.w3.org/1999/xhtml\"===node.namespaceURI&&\"html\"===node.localName}function isButtonScopeMarker(node){return isScopeMarker(node)||\"http://www.w3.org/1999/xhtml\"===node.namespaceURI&&\"button\"===node.localName}function isSelectScopeMarker(node){return!(\"http://www.w3.org/1999/xhtml\"===node.namespaceURI&&\"optgroup\"===node.localName||\"http://www.w3.org/1999/xhtml\"===node.namespaceURI&&\"option\"===node.localName)}function ElementStack(){this.elements=[],this.rootNode=null,this.headElement=null,this.bodyElement=null}ElementStack.prototype._inScope=function(localName,isMarker){for(var i=this.elements.length-1;i>=0;i--){var node=this.elements[i];if(node.localName===localName)return!0;if(isMarker(node))return!1}},ElementStack.prototype.push=function(item){this.elements.push(item)},ElementStack.prototype.pushHtmlElement=function(item){this.rootNode=item.node,this.push(item)},ElementStack.prototype.pushHeadElement=function(item){this.headElement=item.node,this.push(item)},ElementStack.prototype.pushBodyElement=function(item){this.bodyElement=item.node,this.push(item)},ElementStack.prototype.pop=function(){return this.elements.pop()},ElementStack.prototype.remove=function(item){this.elements.splice(this.elements.indexOf(item),1)},ElementStack.prototype.popUntilPopped=function(localName){var element;do element=this.pop();while(element.localName!=localName)},ElementStack.prototype.popUntilTableScopeMarker=function(){for(;!isTableScopeMarker(this.top);)this.pop()},ElementStack.prototype.popUntilTableBodyScopeMarker=function(){for(;!isTableBodyScopeMarker(this.top);)this.pop()},ElementStack.prototype.popUntilTableRowScopeMarker=function(){for(;!isTableRowScopeMarker(this.top);)this.pop()},ElementStack.prototype.item=function(index){return this.elements[index]},ElementStack.prototype.contains=function(element){return-1!==this.elements.indexOf(element)},ElementStack.prototype.inScope=function(localName){return this._inScope(localName,isScopeMarker)},ElementStack.prototype.inListItemScope=function(localName){return this._inScope(localName,isListItemScopeMarker)},ElementStack.prototype.inTableScope=function(localName){return this._inScope(localName,isTableScopeMarker)},ElementStack.prototype.inButtonScope=function(localName){return this._inScope(localName,isButtonScopeMarker)},ElementStack.prototype.inSelectScope=function(localName){return this._inScope(localName,isSelectScopeMarker)},ElementStack.prototype.hasNumberedHeaderElementInScope=function(){for(var i=this.elements.length-1;i>=0;i--){var node=this.elements[i];if(node.isNumberedHeader())return!0;if(isScopeMarker(node))return!1}},ElementStack.prototype.furthestBlockForFormattingElement=function(element){for(var furthestBlock=null,i=this.elements.length-1;i>=0;i--){var node=this.elements[i];\nif(node.node===element)break;node.isSpecial()&&(furthestBlock=node)}return furthestBlock},ElementStack.prototype.findIndex=function(localName){for(var i=this.elements.length-1;i>=0;i--)if(this.elements[i].localName==localName)return i;return-1},ElementStack.prototype.remove_openElements_until=function(callback){for(var element,finished=!1;!finished;)element=this.elements.pop(),finished=callback(element);return element},Object.defineProperty(ElementStack.prototype,\"top\",{get:function(){return this.elements[this.elements.length-1]}}),Object.defineProperty(ElementStack.prototype,\"length\",{get:function(){return this.elements.length}}),exports.ElementStack=ElementStack},{}],2:[function(_dereq_,module,exports){function isAlphaNumeric(c){return c>=\"0\"&&\"9\">=c||c>=\"a\"&&\"z\">=c||c>=\"A\"&&\"Z\">=c}function isHexDigit(c){return c>=\"0\"&&\"9\">=c||c>=\"a\"&&\"f\">=c||c>=\"A\"&&\"F\">=c}function isDecimalDigit(c){return c>=\"0\"&&\"9\">=c}var entities=_dereq_(\"html5-entities\"),InputStream=_dereq_(\"./InputStream\").InputStream,namedEntityPrefixes={};Object.keys(entities).forEach(function(entityKey){for(var i=0;entityKey.length>i;i++)namedEntityPrefixes[entityKey.substring(0,i+1)]=!0});var EntityParser={};EntityParser.consumeEntity=function(buffer,tokenizer,additionalAllowedCharacter){var decodedCharacter=\"\",consumedCharacters=\"\",ch=buffer.char();if(ch===InputStream.EOF)return!1;if(consumedCharacters+=ch,\"\t\"==ch||\"\\n\"==ch||\"\u000b\"==ch||\" \"==ch||\"<\"==ch||\"&\"==ch)return buffer.unget(consumedCharacters),!1;if(additionalAllowedCharacter===ch)return buffer.unget(consumedCharacters),!1;if(\"#\"==ch){if(ch=buffer.shift(1),ch===InputStream.EOF)return tokenizer._parseError(\"expected-numeric-entity-but-got-eof\"),buffer.unget(consumedCharacters),!1;consumedCharacters+=ch;var radix=10,isDigit=isDecimalDigit;if(\"x\"==ch||\"X\"==ch){if(radix=16,isDigit=isHexDigit,ch=buffer.shift(1),ch===InputStream.EOF)return tokenizer._parseError(\"expected-numeric-entity-but-got-eof\"),buffer.unget(consumedCharacters),!1;consumedCharacters+=ch}if(isDigit(ch)){for(var code=\"\";ch!==InputStream.EOF&&isDigit(ch);)code+=ch,ch=buffer.char();code=parseInt(code,radix);var replacement=this.replaceEntityNumbers(code);if(replacement&&(tokenizer._parseError(\"invalid-numeric-entity-replaced\"),code=replacement),code>65535&&1114111>=code){code-=65536;var first=((1047552&code)>>10)+55296,second=(1023&code)+56320;decodedCharacter=String.fromCharCode(first,second)}else decodedCharacter=String.fromCharCode(code);return\";\"!==ch&&(tokenizer._parseError(\"numeric-entity-without-semicolon\"),buffer.unget(ch)),decodedCharacter}return buffer.unget(consumedCharacters),tokenizer._parseError(\"expected-numeric-entity\"),!1}if(ch>=\"a\"&&\"z\">=ch||ch>=\"A\"&&\"Z\">=ch){for(var mostRecentMatch=\"\";namedEntityPrefixes[consumedCharacters]&&(entities[consumedCharacters]&&(mostRecentMatch=consumedCharacters),\";\"!=ch)&&(ch=buffer.char(),ch!==InputStream.EOF);)consumedCharacters+=ch;return mostRecentMatch?(decodedCharacter=entities[mostRecentMatch],\";\"===ch||!additionalAllowedCharacter||!isAlphaNumeric(ch)&&\"=\"!==ch?(consumedCharacters.length>mostRecentMatch.length&&buffer.unget(consumedCharacters.substring(mostRecentMatch.length)),\";\"!==ch&&tokenizer._parseError(\"named-entity-without-semicolon\"),decodedCharacter):(buffer.unget(consumedCharacters),!1)):(tokenizer._parseError(\"expected-named-entity\"),buffer.unget(consumedCharacters),!1)}},EntityParser.replaceEntityNumbers=function(c){switch(c){case 0:return 65533;case 19:return 16;case 128:return 8364;case 129:return 129;case 130:return 8218;case 131:return 402;case 132:return 8222;case 133:return 8230;case 134:return 8224;case 135:return 8225;case 136:return 710;case 137:return 8240;case 138:return 352;case 139:return 8249;case 140:return 338;case 141:return 141;case 142:return 381;case 143:return 143;case 144:return 144;case 145:return 8216;case 146:return 8217;case 147:return 8220;case 148:return 8221;case 149:return 8226;case 150:return 8211;case 151:return 8212;case 152:return 732;case 153:return 8482;case 154:return 353;case 155:return 8250;case 156:return 339;case 157:return 157;case 158:return 382;case 159:return 376;default:if(c>=55296&&57343>=c||c>1114111)return 65533;if(c>=1&&8>=c||c>=14&&31>=c||c>=127&&159>=c||c>=64976&&65007>=c||11==c||65534==c||131070==c||3145726==c||196607==c||262142==c||262143==c||327678==c||327679==c||393214==c||393215==c||458750==c||458751==c||524286==c||524287==c||589822==c||589823==c||655358==c||655359==c||720894==c||720895==c||786430==c||786431==c||851966==c||851967==c||917502==c||917503==c||983038==c||983039==c||1048574==c||1048575==c||1114110==c||1114111==c)return c}},exports.EntityParser=EntityParser},{\"./InputStream\":3,\"html5-entities\":12}],3:[function(_dereq_,module,exports){function InputStream(){this.data=\"\",this.start=0,this.committed=0,this.eof=!1,this.lastLocation={line:0,column:0}}InputStream.EOF=-1,InputStream.DRAIN=-2,InputStream.prototype={slice:function(){if(this.start>=this.data.length){if(!this.eof)throw InputStream.DRAIN;return InputStream.EOF}return this.data.slice(this.start,this.data.length)},\"char\":function(){if(!this.eof&&this.start>=this.data.length-1)throw InputStream.DRAIN;if(this.start>=this.data.length)return InputStream.EOF;var ch=this.data[this.start++];return\"\\r\"===ch&&(ch=\"\\n\"),ch},advance:function(amount){if(this.start+=amount,this.start>=this.data.length){if(!this.eof)throw InputStream.DRAIN;return InputStream.EOF}this.committed>this.data.length/2&&(this.lastLocation=this.location(),this.data=this.data.slice(this.committed),this.start=this.start-this.committed,this.committed=0)},matchWhile:function(re){if(this.eof&&this.start>=this.data.length)return\"\";var r=RegExp(\"^\"+re+\"+\"),m=r.exec(this.slice());if(m){if(!this.eof&&m[0].length==this.data.length-this.start)throw InputStream.DRAIN;return this.advance(m[0].length),m[0]}return\"\"},matchUntil:function(re){var m,s;if(s=this.slice(),s===InputStream.EOF)return\"\";if(m=RegExp(re+(this.eof?\"|$\":\"\")).exec(s)){var t=this.data.slice(this.start,this.start+m.index);return this.advance(m.index),t.replace(/\\r/g,\"\\n\").replace(/\\n{2,}/g,\"\\n\")}throw InputStream.DRAIN},append:function(data){this.data+=data},shift:function(n){if(!this.eof&&this.start+n>=this.data.length)throw InputStream.DRAIN;if(this.eof&&this.start>=this.data.length)return InputStream.EOF;var d=\"\"+this.data.slice(this.start,this.start+n);return this.advance(Math.min(n,this.data.length-this.start)),d},peek:function(n){if(!this.eof&&this.start+n>=this.data.length)throw InputStream.DRAIN;return this.eof&&this.start>=this.data.length?InputStream.EOF:\"\"+this.data.slice(this.start,Math.min(this.start+n,this.data.length))},length:function(){return this.data.length-this.start-1},unget:function(d){d!==InputStream.EOF&&(this.start-=d.length)},undo:function(){this.start=this.committed},commit:function(){this.committed=this.start},location:function(){var lastLine=this.lastLocation.line,lastColumn=this.lastLocation.column,read=this.data.slice(0,this.committed),newlines=read.match(/\\n/g),line=newlines?lastLine+newlines.length:lastLine,column=newlines?read.length-read.lastIndexOf(\"\\n\")-1:lastColumn+read.length;return{line:line,column:column}}},exports.InputStream=InputStream},{}],4:[function(_dereq_,module,exports){function StackItem(namespaceURI,localName,attributes,node){this.localName=localName,this.namespaceURI=namespaceURI,this.attributes=attributes,this.node=node}function getAttribute(item,name){for(var i=0;item.attributes.length>i;i++)if(item.attributes[i].nodeName==name)return item.attributes[i].nodeValue;return null}var SpecialElements={\"http://www.w3.org/1999/xhtml\":[\"address\",\"applet\",\"area\",\"article\",\"aside\",\"base\",\"basefont\",\"bgsound\",\"blockquote\",\"body\",\"br\",\"button\",\"caption\",\"center\",\"col\",\"colgroup\",\"dd\",\"details\",\"dir\",\"div\",\"dl\",\"dt\",\"embed\",\"fieldset\",\"figcaption\",\"figure\",\"footer\",\"form\",\"frame\",\"frameset\",\"h1\",\"h2\",\"h3\",\"h4\",\"h5\",\"h6\",\"head\",\"header\",\"hgroup\",\"hr\",\"html\",\"iframe\",\"img\",\"input\",\"isindex\",\"li\",\"link\",\"listing\",\"main\",\"marquee\",\"menu\",\"menuitem\",\"meta\",\"nav\",\"noembed\",\"noframes\",\"noscript\",\"object\",\"ol\",\"p\",\"param\",\"plaintext\",\"pre\",\"script\",\"section\",\"select\",\"source\",\"style\",\"summary\",\"table\",\"tbody\",\"td\",\"textarea\",\"tfoot\",\"th\",\"thead\",\"title\",\"tr\",\"track\",\"ul\",\"wbr\",\"xmp\"],\"http://www.w3.org/1998/Math/MathML\":[\"mi\",\"mo\",\"mn\",\"ms\",\"mtext\",\"annotation-xml\"],\"http://www.w3.org/2000/svg\":[\"foreignObject\",\"desc\",\"title\"]};StackItem.prototype.isSpecial=function(){return this.namespaceURI in SpecialElements&&SpecialElements[this.namespaceURI].indexOf(this.localName)>-1},StackItem.prototype.isFosterParenting=function(){return\"http://www.w3.org/1999/xhtml\"===this.namespaceURI?\"table\"===this.localName||\"tbody\"===this.localName||\"tfoot\"===this.localName||\"thead\"===this.localName||\"tr\"===this.localName:!1},StackItem.prototype.isNumberedHeader=function(){return\"http://www.w3.org/1999/xhtml\"===this.namespaceURI?\"h1\"===this.localName||\"h2\"===this.localName||\"h3\"===this.localName||\"h4\"===this.localName||\"h5\"===this.localName||\"h6\"===this.localName:!1},StackItem.prototype.isForeign=function(){return\"http://www.w3.org/1999/xhtml\"!=this.namespaceURI},StackItem.prototype.isHtmlIntegrationPoint=function(){if(\"http://www.w3.org/1998/Math/MathML\"===this.namespaceURI){if(\"annotation-xml\"!==this.localName)return!1;var encoding=getAttribute(this,\"encoding\");return encoding?(encoding=encoding.toLowerCase(),\"text/html\"===encoding||\"application/xhtml+xml\"===encoding):!1}return\"http://www.w3.org/2000/svg\"===this.namespaceURI?\"foreignObject\"===this.localName||\"desc\"===this.localName||\"title\"===this.localName:!1},StackItem.prototype.isMathMLTextIntegrationPoint=function(){return\"http://www.w3.org/1998/Math/MathML\"===this.namespaceURI?\"mi\"===this.localName||\"mo\"===this.localName||\"mn\"===this.localName||\"ms\"===this.localName||\"mtext\"===this.localName:!1},exports.StackItem=StackItem},{}],5:[function(_dereq_,module,exports){function isWhitespace(c){return\" \"===c||\"\\n\"===c||\"\t\"===c||\"\\r\"===c||\"\\f\"===c}function isAlpha(c){return c>=\"A\"&&\"Z\">=c||c>=\"a\"&&\"z\">=c}function Tokenizer(tokenHandler){this._tokenHandler=tokenHandler,this._state=Tokenizer.DATA,this._inputStream=new InputStream,this._currentToken=null,this._temporaryBuffer=\"\",this._additionalAllowedCharacter=\"\"}var InputStream=_dereq_(\"./InputStream\").InputStream,EntityParser=_dereq_(\"./EntityParser\").EntityParser;Tokenizer.prototype._parseError=function(code,args){this._tokenHandler.parseError(code,args)},Tokenizer.prototype._emitToken=function(token){if(\"StartTag\"===token.type)for(var i=1;token.data.length>i;i++)token.data[i].nodeName||token.data.splice(i--,1);else\"EndTag\"===token.type&&(token.selfClosing&&this._parseError(\"self-closing-flag-on-end-tag\"),0!==token.data.length&&this._parseError(\"attributes-in-end-tag\"));this._tokenHandler.processToken(token),\"StartTag\"===token.type&&token.selfClosing&&!this._tokenHandler.isSelfClosingFlagAcknowledged()&&this._parseError(\"non-void-element-with-trailing-solidus\",{name:token.name})},Tokenizer.prototype._emitCurrentToken=function(){this._state=Tokenizer.DATA,this._emitToken(this._currentToken)},Tokenizer.prototype._currentAttribute=function(){return this._currentToken.data[this._currentToken.data.length-1]},Tokenizer.prototype.setState=function(state){this._state=state},Tokenizer.prototype.tokenize=function(source){function data_state(buffer){var data=buffer.char();if(data===InputStream.EOF)return tokenizer._emitToken({type:\"EOF\",data:null}),!1;if(\"&\"===data)tokenizer.setState(character_reference_in_data_state);else if(\"<\"===data)tokenizer.setState(tag_open_state);else if(\"\\0\"===data)tokenizer._emitToken({type:\"Characters\",data:data}),buffer.commit();else{var chars=buffer.matchUntil(\"&|<|\\0\");tokenizer._emitToken({type:\"Characters\",data:data+chars}),buffer.commit()}return!0}function character_reference_in_data_state(buffer){var character=EntityParser.consumeEntity(buffer,tokenizer);return tokenizer.setState(data_state),tokenizer._emitToken({type:\"Characters\",data:character||\"&\"}),!0}function rcdata_state(buffer){var data=buffer.char();if(data===InputStream.EOF)return tokenizer._emitToken({type:\"EOF\",data:null}),!1;if(\"&\"===data)tokenizer.setState(character_reference_in_rcdata_state);else if(\"<\"===data)tokenizer.setState(rcdata_less_than_sign_state);else if(\"\\0\"===data)tokenizer._parseError(\"invalid-codepoint\"),tokenizer._emitToken({type:\"Characters\",data:\"�\"}),buffer.commit();else{var chars=buffer.matchUntil(\"&|<|\\0\");tokenizer._emitToken({type:\"Characters\",data:data+chars}),buffer.commit()}return!0}function character_reference_in_rcdata_state(buffer){var character=EntityParser.consumeEntity(buffer,tokenizer);return tokenizer.setState(rcdata_state),tokenizer._emitToken({type:\"Characters\",data:character||\"&\"}),!0}function rawtext_state(buffer){var data=buffer.char();if(data===InputStream.EOF)return tokenizer._emitToken({type:\"EOF\",data:null}),!1;if(\"<\"===data)tokenizer.setState(rawtext_less_than_sign_state);else if(\"\\0\"===data)tokenizer._parseError(\"invalid-codepoint\"),tokenizer._emitToken({type:\"Characters\",data:\"�\"}),buffer.commit();else{var chars=buffer.matchUntil(\"<|\\0\");tokenizer._emitToken({type:\"Characters\",data:data+chars})}return!0}function plaintext_state(buffer){var data=buffer.char();if(data===InputStream.EOF)return tokenizer._emitToken({type:\"EOF\",data:null}),!1;if(\"\\0\"===data)tokenizer._parseError(\"invalid-codepoint\"),tokenizer._emitToken({type:\"Characters\",data:\"�\"}),buffer.commit();else{var chars=buffer.matchUntil(\"\\0\");tokenizer._emitToken({type:\"Characters\",data:data+chars})}return!0}function script_data_state(buffer){var data=buffer.char();if(data===InputStream.EOF)return tokenizer._emitToken({type:\"EOF\",data:null}),!1;if(\"<\"===data)tokenizer.setState(script_data_less_than_sign_state);else if(\"\\0\"===data)tokenizer._parseError(\"invalid-codepoint\"),tokenizer._emitToken({type:\"Characters\",data:\"�\"}),buffer.commit();else{var chars=buffer.matchUntil(\"<|\\0\");tokenizer._emitToken({type:\"Characters\",data:data+chars})}return!0}function rcdata_less_than_sign_state(buffer){var data=buffer.char();return\"/\"===data?(this._temporaryBuffer=\"\",tokenizer.setState(rcdata_end_tag_open_state)):(tokenizer._emitToken({type:\"Characters\",data:\"<\"}),buffer.unget(data),tokenizer.setState(rcdata_state)),!0}function rcdata_end_tag_open_state(buffer){var data=buffer.char();return isAlpha(data)?(this._temporaryBuffer+=data,tokenizer.setState(rcdata_end_tag_name_state)):(tokenizer._emitToken({type:\"Characters\",data:\"</\"}),buffer.unget(data),tokenizer.setState(rcdata_state)),!0}function rcdata_end_tag_name_state(buffer){var appropriate=tokenizer._currentToken&&tokenizer._currentToken.name===this._temporaryBuffer.toLowerCase(),data=buffer.char();return isWhitespace(data)&&appropriate?(tokenizer._currentToken={type:\"EndTag\",name:this._temporaryBuffer,data:[],selfClosing:!1},tokenizer.setState(before_attribute_name_state)):\"/\"===data&&appropriate?(tokenizer._currentToken={type:\"EndTag\",name:this._temporaryBuffer,data:[],selfClosing:!1},tokenizer.setState(self_closing_tag_state)):\">\"===data&&appropriate?(tokenizer._currentToken={type:\"EndTag\",name:this._temporaryBuffer,data:[],selfClosing:!1},tokenizer._emitCurrentToken(),tokenizer.setState(data_state)):isAlpha(data)?(this._temporaryBuffer+=data,buffer.commit()):(tokenizer._emitToken({type:\"Characters\",data:\"</\"+this._temporaryBuffer}),buffer.unget(data),tokenizer.setState(rcdata_state)),!0}function rawtext_less_than_sign_state(buffer){var data=buffer.char();return\"/\"===data?(this._temporaryBuffer=\"\",tokenizer.setState(rawtext_end_tag_open_state)):(tokenizer._emitToken({type:\"Characters\",data:\"<\"}),buffer.unget(data),tokenizer.setState(rawtext_state)),!0}function rawtext_end_tag_open_state(buffer){var data=buffer.char();return isAlpha(data)?(this._temporaryBuffer+=data,tokenizer.setState(rawtext_end_tag_name_state)):(tokenizer._emitToken({type:\"Characters\",data:\"</\"}),buffer.unget(data),tokenizer.setState(rawtext_state)),!0}function rawtext_end_tag_name_state(buffer){var appropriate=tokenizer._currentToken&&tokenizer._currentToken.name===this._temporaryBuffer.toLowerCase(),data=buffer.char();return isWhitespace(data)&&appropriate?(tokenizer._currentToken={type:\"EndTag\",name:this._temporaryBuffer,data:[],selfClosing:!1},tokenizer.setState(before_attribute_name_state)):\"/\"===data&&appropriate?(tokenizer._currentToken={type:\"EndTag\",name:this._temporaryBuffer,data:[],selfClosing:!1},tokenizer.setState(self_closing_tag_state)):\">\"===data&&appropriate?(tokenizer._currentToken={type:\"EndTag\",name:this._temporaryBuffer,data:[],selfClosing:!1},tokenizer._emitCurrentToken(),tokenizer.setState(data_state)):isAlpha(data)?(this._temporaryBuffer+=data,buffer.commit()):(tokenizer._emitToken({type:\"Characters\",data:\"</\"+this._temporaryBuffer}),buffer.unget(data),tokenizer.setState(rawtext_state)),!0}function script_data_less_than_sign_state(buffer){var data=buffer.char();return\"/\"===data?(this._temporaryBuffer=\"\",tokenizer.setState(script_data_end_tag_open_state)):\"!\"===data?(tokenizer._emitToken({type:\"Characters\",data:\"<!\"}),tokenizer.setState(script_data_escape_start_state)):(tokenizer._emitToken({type:\"Characters\",data:\"<\"}),buffer.unget(data),tokenizer.setState(script_data_state)),!0}function script_data_end_tag_open_state(buffer){var data=buffer.char();return isAlpha(data)?(this._temporaryBuffer+=data,tokenizer.setState(script_data_end_tag_name_state)):(tokenizer._emitToken({type:\"Characters\",data:\"</\"}),buffer.unget(data),tokenizer.setState(script_data_state)),!0}function script_data_end_tag_name_state(buffer){var appropriate=tokenizer._currentToken&&tokenizer._currentToken.name===this._temporaryBuffer.toLowerCase(),data=buffer.char();return isWhitespace(data)&&appropriate?(tokenizer._currentToken={type:\"EndTag\",name:\"script\",data:[],selfClosing:!1},tokenizer.setState(before_attribute_name_state)):\"/\"===data&&appropriate?(tokenizer._currentToken={type:\"EndTag\",name:\"script\",data:[],selfClosing:!1},tokenizer.setState(self_closing_tag_state)):\">\"===data&&appropriate?(tokenizer._currentToken={type:\"EndTag\",name:\"script\",data:[],selfClosing:!1},tokenizer._emitCurrentToken()):isAlpha(data)?(this._temporaryBuffer+=data,buffer.commit()):(tokenizer._emitToken({type:\"Characters\",data:\"</\"+this._temporaryBuffer}),buffer.unget(data),tokenizer.setState(script_data_state)),!0}function script_data_escape_start_state(buffer){var data=buffer.char();return\"-\"===data?(tokenizer._emitToken({type:\"Characters\",data:\"-\"}),tokenizer.setState(script_data_escape_start_dash_state)):(buffer.unget(data),tokenizer.setState(script_data_state)),!0}function script_data_escape_start_dash_state(buffer){var data=buffer.char();return\"-\"===data?(tokenizer._emitToken({type:\"Characters\",data:\"-\"}),tokenizer.setState(script_data_escaped_dash_dash_state)):(buffer.unget(data),tokenizer.setState(script_data_state)),!0}function script_data_escaped_state(buffer){var data=buffer.char();if(data===InputStream.EOF)buffer.unget(data),tokenizer.setState(data_state);else if(\"-\"===data)tokenizer._emitToken({type:\"Characters\",data:\"-\"}),tokenizer.setState(script_data_escaped_dash_state);else if(\"<\"===data)tokenizer.setState(script_data_escaped_less_then_sign_state);else if(\"\\0\"===data)tokenizer._parseError(\"invalid-codepoint\"),tokenizer._emitToken({type:\"Characters\",data:\"�\"}),buffer.commit();else{var chars=buffer.matchUntil(\"<|-|\\0\");tokenizer._emitToken({type:\"Characters\",data:data+chars})}return!0}function script_data_escaped_dash_state(buffer){var data=buffer.char();return data===InputStream.EOF?(buffer.unget(data),tokenizer.setState(data_state)):\"-\"===data?(tokenizer._emitToken({type:\"Characters\",data:\"-\"}),tokenizer.setState(script_data_escaped_dash_dash_state)):\"<\"===data?tokenizer.setState(script_data_escaped_less_then_sign_state):\"\\0\"===data?(tokenizer._parseError(\"invalid-codepoint\"),tokenizer._emitToken({type:\"Characters\",data:\"�\"}),tokenizer.setState(script_data_escaped_state)):(tokenizer._emitToken({type:\"Characters\",data:data}),tokenizer.setState(script_data_escaped_state)),!0}function script_data_escaped_dash_dash_state(buffer){var data=buffer.char();return data===InputStream.EOF?(tokenizer._parseError(\"eof-in-script\"),buffer.unget(data),tokenizer.setState(data_state)):\"<\"===data?tokenizer.setState(script_data_escaped_less_then_sign_state):\">\"===data?(tokenizer._emitToken({type:\"Characters\",data:\">\"}),tokenizer.setState(script_data_state)):\"\\0\"===data?(tokenizer._parseError(\"invalid-codepoint\"),tokenizer._emitToken({type:\"Characters\",data:\"�\"}),tokenizer.setState(script_data_escaped_state)):(tokenizer._emitToken({type:\"Characters\",data:data}),tokenizer.setState(script_data_escaped_state)),!0}function script_data_escaped_less_then_sign_state(buffer){var data=buffer.char();return\"/\"===data?(this._temporaryBuffer=\"\",tokenizer.setState(script_data_escaped_end_tag_open_state)):isAlpha(data)?(tokenizer._emitToken({type:\"Characters\",data:\"<\"+data}),this._temporaryBuffer=data,tokenizer.setState(script_data_double_escape_start_state)):(tokenizer._emitToken({type:\"Characters\",data:\"<\"}),buffer.unget(data),tokenizer.setState(script_data_escaped_state)),!0}function script_data_escaped_end_tag_open_state(buffer){var data=buffer.char();return isAlpha(data)?(this._temporaryBuffer=data,tokenizer.setState(script_data_escaped_end_tag_name_state)):(tokenizer._emitToken({type:\"Characters\",data:\"</\"}),buffer.unget(data),tokenizer.setState(script_data_escaped_state)),!0}function script_data_escaped_end_tag_name_state(buffer){var appropriate=tokenizer._currentToken&&tokenizer._currentToken.name===this._temporaryBuffer.toLowerCase(),data=buffer.char();return isWhitespace(data)&&appropriate?(tokenizer._currentToken={type:\"EndTag\",name:\"script\",data:[],selfClosing:!1},tokenizer.setState(before_attribute_name_state)):\"/\"===data&&appropriate?(tokenizer._currentToken={type:\"EndTag\",name:\"script\",data:[],selfClosing:!1},tokenizer.setState(self_closing_tag_state)):\">\"===data&&appropriate?(tokenizer._currentToken={type:\"EndTag\",name:\"script\",data:[],selfClosing:!1},tokenizer.setState(data_state),tokenizer._emitCurrentToken()):isAlpha(data)?(this._temporaryBuffer+=data,buffer.commit()):(tokenizer._emitToken({type:\"Characters\",data:\"</\"+this._temporaryBuffer}),buffer.unget(data),tokenizer.setState(script_data_escaped_state)),!0}function script_data_double_escape_start_state(buffer){var data=buffer.char();return isWhitespace(data)||\"/\"===data||\">\"===data?(tokenizer._emitToken({type:\"Characters\",data:data}),\"script\"===this._temporaryBuffer.toLowerCase()?tokenizer.setState(script_data_double_escaped_state):tokenizer.setState(script_data_escaped_state)):isAlpha(data)?(tokenizer._emitToken({type:\"Characters\",data:data}),this._temporaryBuffer+=data,buffer.commit()):(buffer.unget(data),tokenizer.setState(script_data_escaped_state)),!0}function script_data_double_escaped_state(buffer){var data=buffer.char();return data===InputStream.EOF?(tokenizer._parseError(\"eof-in-script\"),buffer.unget(data),tokenizer.setState(data_state)):\"-\"===data?(tokenizer._emitToken({type:\"Characters\",data:\"-\"}),tokenizer.setState(script_data_double_escaped_dash_state)):\"<\"===data?(tokenizer._emitToken({type:\"Characters\",data:\"<\"}),tokenizer.setState(script_data_double_escaped_less_than_sign_state)):\"\\0\"===data?(tokenizer._parseError(\"invalid-codepoint\"),tokenizer._emitToken({type:\"Characters\",data:\"�\"}),buffer.commit()):(tokenizer._emitToken({type:\"Characters\",data:data}),buffer.commit()),!0}function script_data_double_escaped_dash_state(buffer){var data=buffer.char();return data===InputStream.EOF?(tokenizer._parseError(\"eof-in-script\"),buffer.unget(data),tokenizer.setState(data_state)):\"-\"===data?(tokenizer._emitToken({type:\"Characters\",data:\"-\"}),tokenizer.setState(script_data_double_escaped_dash_dash_state)):\"<\"===data?(tokenizer._emitToken({type:\"Characters\",data:\"<\"}),tokenizer.setState(script_data_double_escaped_less_than_sign_state)):\"\\0\"===data?(tokenizer._parseError(\"invalid-codepoint\"),tokenizer._emitToken({type:\"Characters\",data:\"�\"}),tokenizer.setState(script_data_double_escaped_state)):(tokenizer._emitToken({type:\"Characters\",data:data}),tokenizer.setState(script_data_double_escaped_state)),!0}function script_data_double_escaped_dash_dash_state(buffer){var data=buffer.char();return data===InputStream.EOF?(tokenizer._parseError(\"eof-in-script\"),buffer.unget(data),tokenizer.setState(data_state)):\"-\"===data?(tokenizer._emitToken({type:\"Characters\",data:\"-\"}),buffer.commit()):\"<\"===data?(tokenizer._emitToken({type:\"Characters\",data:\"<\"}),tokenizer.setState(script_data_double_escaped_less_than_sign_state)):\">\"===data?(tokenizer._emitToken({type:\"Characters\",data:\">\"}),tokenizer.setState(script_data_state)):\"\\0\"===data?(tokenizer._parseError(\"invalid-codepoint\"),tokenizer._emitToken({type:\"Characters\",data:\"�\"}),tokenizer.setState(script_data_double_escaped_state)):(tokenizer._emitToken({type:\"Characters\",data:data}),tokenizer.setState(script_data_double_escaped_state)),!0}function script_data_double_escaped_less_than_sign_state(buffer){var data=buffer.char();return\"/\"===data?(tokenizer._emitToken({type:\"Characters\",data:\"/\"}),this._temporaryBuffer=\"\",tokenizer.setState(script_data_double_escape_end_state)):(buffer.unget(data),tokenizer.setState(script_data_double_escaped_state)),!0}function script_data_double_escape_end_state(buffer){var data=buffer.char();return isWhitespace(data)||\"/\"===data||\">\"===data?(tokenizer._emitToken({type:\"Characters\",data:data}),\"script\"===this._temporaryBuffer.toLowerCase()?tokenizer.setState(script_data_escaped_state):tokenizer.setState(script_data_double_escaped_state)):isAlpha(data)?(tokenizer._emitToken({type:\"Characters\",data:data}),this._temporaryBuffer+=data,buffer.commit()):(buffer.unget(data),tokenizer.setState(script_data_double_escaped_state)),!0}function tag_open_state(buffer){var data=buffer.char();return data===InputStream.EOF?(tokenizer._parseError(\"bare-less-than-sign-at-eof\"),tokenizer._emitToken({type:\"Characters\",data:\"<\"}),buffer.unget(data),tokenizer.setState(data_state)):isAlpha(data)?(tokenizer._currentToken={type:\"StartTag\",name:data.toLowerCase(),data:[]},tokenizer.setState(tag_name_state)):\"!\"===data?tokenizer.setState(markup_declaration_open_state):\"/\"===data?tokenizer.setState(close_tag_open_state):\">\"===data?(tokenizer._parseError(\"expected-tag-name-but-got-right-bracket\"),tokenizer._emitToken({type:\"Characters\",data:\"<>\"}),tokenizer.setState(data_state)):\"?\"===data?(tokenizer._parseError(\"expected-tag-name-but-got-question-mark\"),buffer.unget(data),tokenizer.setState(bogus_comment_state)):(tokenizer._parseError(\"expected-tag-name\"),tokenizer._emitToken({type:\"Characters\",data:\"<\"}),buffer.unget(data),tokenizer.setState(data_state)),!0}function close_tag_open_state(buffer){var data=buffer.char();return data===InputStream.EOF?(tokenizer._parseError(\"expected-closing-tag-but-got-eof\"),tokenizer._emitToken({type:\"Characters\",data:\"</\"}),buffer.unget(data),tokenizer.setState(data_state)):isAlpha(data)?(tokenizer._currentToken={type:\"EndTag\",name:data.toLowerCase(),data:[]},tokenizer.setState(tag_name_state)):\">\"===data?(tokenizer._parseError(\"expected-closing-tag-but-got-right-bracket\"),tokenizer.setState(data_state)):(tokenizer._parseError(\"expected-closing-tag-but-got-char\",{data:data}),buffer.unget(data),tokenizer.setState(bogus_comment_state)),!0}function tag_name_state(buffer){var data=buffer.char();return data===InputStream.EOF?(tokenizer._parseError(\"eof-in-tag-name\"),buffer.unget(data),tokenizer.setState(data_state)):isWhitespace(data)?tokenizer.setState(before_attribute_name_state):isAlpha(data)?tokenizer._currentToken.name+=data.toLowerCase():\">\"===data?tokenizer._emitCurrentToken():\"/\"===data?tokenizer.setState(self_closing_tag_state):\"\\0\"===data?(tokenizer._parseError(\"invalid-codepoint\"),tokenizer._currentToken.name+=\"�\"):tokenizer._currentToken.name+=data,buffer.commit(),!0}function before_attribute_name_state(buffer){var data=buffer.char();if(data===InputStream.EOF)tokenizer._parseError(\"expected-attribute-name-but-got-eof\"),buffer.unget(data),tokenizer.setState(data_state);else{if(isWhitespace(data))return!0;isAlpha(data)?(tokenizer._currentToken.data.push({nodeName:data.toLowerCase(),nodeValue:\"\"}),tokenizer.setState(attribute_name_state)):\">\"===data?tokenizer._emitCurrentToken():\"/\"===data?tokenizer.setState(self_closing_tag_state):\"'\"===data||'\"'===data||\"=\"===data||\"<\"===data?(tokenizer._parseError(\"invalid-character-in-attribute-name\"),tokenizer._currentToken.data.push({nodeName:data,nodeValue:\"\"}),tokenizer.setState(attribute_name_state)):\"\\0\"===data?(tokenizer._parseError(\"invalid-codepoint\"),tokenizer._currentToken.data.push({nodeName:\"�\",nodeValue:\"\"})):(tokenizer._currentToken.data.push({nodeName:data,nodeValue:\"\"}),tokenizer.setState(attribute_name_state))}return!0}function attribute_name_state(buffer){var data=buffer.char(),leavingThisState=!0,shouldEmit=!1;if(data===InputStream.EOF?(tokenizer._parseError(\"eof-in-attribute-name\"),buffer.unget(data),tokenizer.setState(data_state),shouldEmit=!0):\"=\"===data?tokenizer.setState(before_attribute_value_state):isAlpha(data)?(tokenizer._currentAttribute().nodeName+=data.toLowerCase(),leavingThisState=!1):\">\"===data?shouldEmit=!0:isWhitespace(data)?tokenizer.setState(after_attribute_name_state):\"/\"===data?tokenizer.setState(self_closing_tag_state):\"'\"===data||'\"'===data?(tokenizer._parseError(\"invalid-character-in-attribute-name\"),tokenizer._currentAttribute().nodeName+=data,leavingThisState=!1):\"\\0\"===data?(tokenizer._parseError(\"invalid-codepoint\"),tokenizer._currentAttribute().nodeName+=\"�\"):(tokenizer._currentAttribute().nodeName+=data,leavingThisState=!1),leavingThisState){for(var attributes=tokenizer._currentToken.data,currentAttribute=attributes[attributes.length-1],i=attributes.length-2;i>=0;i--)if(currentAttribute.nodeName===attributes[i].nodeName){tokenizer._parseError(\"duplicate-attribute\",{name:currentAttribute.nodeName}),currentAttribute.nodeName=null;break}shouldEmit&&tokenizer._emitCurrentToken()}else buffer.commit();return!0}function after_attribute_name_state(buffer){var data=buffer.char();if(data===InputStream.EOF)tokenizer._parseError(\"expected-end-of-tag-but-got-eof\"),buffer.unget(data),tokenizer.setState(data_state);else{if(isWhitespace(data))return!0;\"=\"===data?tokenizer.setState(before_attribute_value_state):\">\"===data?tokenizer._emitCurrentToken():isAlpha(data)?(tokenizer._currentToken.data.push({nodeName:data,nodeValue:\"\"}),tokenizer.setState(attribute_name_state)):\"/\"===data?tokenizer.setState(self_closing_tag_state):\"'\"===data||'\"'===data||\"<\"===data?(tokenizer._parseError(\"invalid-character-after-attribute-name\"),tokenizer._currentToken.data.push({nodeName:data,nodeValue:\"\"}),tokenizer.setState(attribute_name_state)):\"\\0\"===data?(tokenizer._parseError(\"invalid-codepoint\"),tokenizer._currentToken.data.push({nodeName:\"�\",nodeValue:\"\"})):(tokenizer._currentToken.data.push({nodeName:data,nodeValue:\"\"}),tokenizer.setState(attribute_name_state))}return!0}function before_attribute_value_state(buffer){var data=buffer.char();if(data===InputStream.EOF)tokenizer._parseError(\"expected-attribute-value-but-got-eof\"),buffer.unget(data),tokenizer.setState(data_state);else{if(isWhitespace(data))return!0;'\"'===data?tokenizer.setState(attribute_value_double_quoted_state):\"&\"===data?(tokenizer.setState(attribute_value_unquoted_state),buffer.unget(data)):\"'\"===data?tokenizer.setState(attribute_value_single_quoted_state):\">\"===data?(tokenizer._parseError(\"expected-attribute-value-but-got-right-bracket\"),tokenizer._emitCurrentToken()):\"=\"===data||\"<\"===data||\"`\"===data?(tokenizer._parseError(\"unexpected-character-in-unquoted-attribute-value\"),tokenizer._currentAttribute().nodeValue+=data,tokenizer.setState(attribute_value_unquoted_state)):\"\\0\"===data?(tokenizer._parseError(\"invalid-codepoint\"),tokenizer._currentAttribute().nodeValue+=\"�\"):(tokenizer._currentAttribute().nodeValue+=data,tokenizer.setState(attribute_value_unquoted_state))}return!0\n}function attribute_value_double_quoted_state(buffer){var data=buffer.char();if(data===InputStream.EOF)tokenizer._parseError(\"eof-in-attribute-value-double-quote\"),buffer.unget(data),tokenizer.setState(data_state);else if('\"'===data)tokenizer.setState(after_attribute_value_state);else if(\"&\"===data)this._additionalAllowedCharacter='\"',tokenizer.setState(character_reference_in_attribute_value_state);else if(\"\\0\"===data)tokenizer._parseError(\"invalid-codepoint\"),tokenizer._currentAttribute().nodeValue+=\"�\";else{var s=buffer.matchUntil('[\\0\"&]');data+=s,tokenizer._currentAttribute().nodeValue+=data}return!0}function attribute_value_single_quoted_state(buffer){var data=buffer.char();return data===InputStream.EOF?(tokenizer._parseError(\"eof-in-attribute-value-single-quote\"),buffer.unget(data),tokenizer.setState(data_state)):\"'\"===data?tokenizer.setState(after_attribute_value_state):\"&\"===data?(this._additionalAllowedCharacter=\"'\",tokenizer.setState(character_reference_in_attribute_value_state)):\"\\0\"===data?(tokenizer._parseError(\"invalid-codepoint\"),tokenizer._currentAttribute().nodeValue+=\"�\"):tokenizer._currentAttribute().nodeValue+=data+buffer.matchUntil(\"\\0|['&]\"),!0}function attribute_value_unquoted_state(buffer){var data=buffer.char();if(data===InputStream.EOF)tokenizer._parseError(\"eof-after-attribute-value\"),buffer.unget(data),tokenizer.setState(data_state);else if(isWhitespace(data))tokenizer.setState(before_attribute_name_state);else if(\"&\"===data)this._additionalAllowedCharacter=\">\",tokenizer.setState(character_reference_in_attribute_value_state);else if(\">\"===data)tokenizer._emitCurrentToken();else if('\"'===data||\"'\"===data||\"=\"===data||\"`\"===data||\"<\"===data)tokenizer._parseError(\"unexpected-character-in-unquoted-attribute-value\"),tokenizer._currentAttribute().nodeValue+=data,buffer.commit();else if(\"\\0\"===data)tokenizer._parseError(\"invalid-codepoint\"),tokenizer._currentAttribute().nodeValue+=\"�\";else{var o=buffer.matchUntil(\"\\0|[\t\\n\u000b\\f \\r&<>\\\"'=`]\");o===InputStream.EOF&&(tokenizer._parseError(\"eof-in-attribute-value-no-quotes\"),tokenizer._emitCurrentToken()),buffer.commit(),tokenizer._currentAttribute().nodeValue+=data+o}return!0}function character_reference_in_attribute_value_state(buffer){var character=EntityParser.consumeEntity(buffer,tokenizer,this._additionalAllowedCharacter);return this._currentAttribute().nodeValue+=character||\"&\",'\"'===this._additionalAllowedCharacter?tokenizer.setState(attribute_value_double_quoted_state):\"'\"===this._additionalAllowedCharacter?tokenizer.setState(attribute_value_single_quoted_state):\">\"===this._additionalAllowedCharacter&&tokenizer.setState(attribute_value_unquoted_state),!0}function after_attribute_value_state(buffer){var data=buffer.char();return data===InputStream.EOF?(tokenizer._parseError(\"eof-after-attribute-value\"),buffer.unget(data),tokenizer.setState(data_state)):isWhitespace(data)?tokenizer.setState(before_attribute_name_state):\">\"===data?(tokenizer.setState(data_state),tokenizer._emitCurrentToken()):\"/\"===data?tokenizer.setState(self_closing_tag_state):(tokenizer._parseError(\"unexpected-character-after-attribute-value\"),buffer.unget(data),tokenizer.setState(before_attribute_name_state)),!0}function self_closing_tag_state(buffer){var c=buffer.char();return c===InputStream.EOF?(tokenizer._parseError(\"unexpected-eof-after-solidus-in-tag\"),buffer.unget(c),tokenizer.setState(data_state)):\">\"===c?(tokenizer._currentToken.selfClosing=!0,tokenizer.setState(data_state),tokenizer._emitCurrentToken()):(tokenizer._parseError(\"unexpected-character-after-solidus-in-tag\"),buffer.unget(c),tokenizer.setState(before_attribute_name_state)),!0}function bogus_comment_state(buffer){var data=buffer.matchUntil(\">\");return data=data.replace(/\\u0000/g,\"�\"),buffer.char(),tokenizer._emitToken({type:\"Comment\",data:data}),tokenizer.setState(data_state),!0}function markup_declaration_open_state(buffer){var chars=buffer.shift(2);if(\"--\"===chars)tokenizer._currentToken={type:\"Comment\",data:\"\"},tokenizer.setState(comment_start_state);else{var newchars=buffer.shift(5);if(newchars===InputStream.EOF||chars===InputStream.EOF)return tokenizer._parseError(\"expected-dashes-or-doctype\"),tokenizer.setState(bogus_comment_state),buffer.unget(chars),!0;chars+=newchars,\"DOCTYPE\"===chars.toUpperCase()?(tokenizer._currentToken={type:\"Doctype\",name:\"\",publicId:null,systemId:null,forceQuirks:!1},tokenizer.setState(doctype_state)):tokenizer._tokenHandler.isCdataSectionAllowed()&&\"[CDATA[\"===chars?tokenizer.setState(cdata_section_state):(tokenizer._parseError(\"expected-dashes-or-doctype\"),buffer.unget(chars),tokenizer.setState(bogus_comment_state))}return!0}function cdata_section_state(buffer){var data=buffer.matchUntil(\"]]>\");return buffer.shift(3),data&&tokenizer._emitToken({type:\"Characters\",data:data}),tokenizer.setState(data_state),!0}function comment_start_state(buffer){var data=buffer.char();return data===InputStream.EOF?(tokenizer._parseError(\"eof-in-comment\"),tokenizer._emitToken(tokenizer._currentToken),buffer.unget(data),tokenizer.setState(data_state)):\"-\"===data?tokenizer.setState(comment_start_dash_state):\">\"===data?(tokenizer._parseError(\"incorrect-comment\"),tokenizer._emitToken(tokenizer._currentToken),tokenizer.setState(data_state)):\"\\0\"===data?(tokenizer._parseError(\"invalid-codepoint\"),tokenizer._currentToken.data+=\"�\"):(tokenizer._currentToken.data+=data,tokenizer.setState(comment_state)),!0}function comment_start_dash_state(buffer){var data=buffer.char();return data===InputStream.EOF?(tokenizer._parseError(\"eof-in-comment\"),tokenizer._emitToken(tokenizer._currentToken),buffer.unget(data),tokenizer.setState(data_state)):\"-\"===data?tokenizer.setState(comment_end_state):\">\"===data?(tokenizer._parseError(\"incorrect-comment\"),tokenizer._emitToken(tokenizer._currentToken),tokenizer.setState(data_state)):\"\\0\"===data?(tokenizer._parseError(\"invalid-codepoint\"),tokenizer._currentToken.data+=\"�\"):(tokenizer._currentToken.data+=\"-\"+data,tokenizer.setState(comment_state)),!0}function comment_state(buffer){var data=buffer.char();return data===InputStream.EOF?(tokenizer._parseError(\"eof-in-comment\"),tokenizer._emitToken(tokenizer._currentToken),buffer.unget(data),tokenizer.setState(data_state)):\"-\"===data?tokenizer.setState(comment_end_dash_state):\"\\0\"===data?(tokenizer._parseError(\"invalid-codepoint\"),tokenizer._currentToken.data+=\"�\"):(tokenizer._currentToken.data+=data,buffer.commit()),!0}function comment_end_dash_state(buffer){var data=buffer.char();return data===InputStream.EOF?(tokenizer._parseError(\"eof-in-comment-end-dash\"),tokenizer._emitToken(tokenizer._currentToken),buffer.unget(data),tokenizer.setState(data_state)):\"-\"===data?tokenizer.setState(comment_end_state):\"\\0\"===data?(tokenizer._parseError(\"invalid-codepoint\"),tokenizer._currentToken.data+=\"-�\",tokenizer.setState(comment_state)):(tokenizer._currentToken.data+=\"-\"+data+buffer.matchUntil(\"\\0|-\"),buffer.char()),!0}function comment_end_state(buffer){var data=buffer.char();return data===InputStream.EOF?(tokenizer._parseError(\"eof-in-comment-double-dash\"),tokenizer._emitToken(tokenizer._currentToken),buffer.unget(data),tokenizer.setState(data_state)):\">\"===data?(tokenizer._emitToken(tokenizer._currentToken),tokenizer.setState(data_state)):\"!\"===data?(tokenizer._parseError(\"unexpected-bang-after-double-dash-in-comment\"),tokenizer.setState(comment_end_bang_state)):\"-\"===data?(tokenizer._parseError(\"unexpected-dash-after-double-dash-in-comment\"),tokenizer._currentToken.data+=data):\"\\0\"===data?(tokenizer._parseError(\"invalid-codepoint\"),tokenizer._currentToken.data+=\"--�\",tokenizer.setState(comment_state)):(tokenizer._parseError(\"unexpected-char-in-comment\"),tokenizer._currentToken.data+=\"--\"+data,tokenizer.setState(comment_state)),!0}function comment_end_bang_state(buffer){var data=buffer.char();return data===InputStream.EOF?(tokenizer._parseError(\"eof-in-comment-end-bang-state\"),tokenizer._emitToken(tokenizer._currentToken),buffer.unget(data),tokenizer.setState(data_state)):\">\"===data?(tokenizer._emitToken(tokenizer._currentToken),tokenizer.setState(data_state)):\"-\"===data?(tokenizer._currentToken.data+=\"--!\",tokenizer.setState(comment_end_dash_state)):(tokenizer._currentToken.data+=\"--!\"+data,tokenizer.setState(comment_state)),!0}function doctype_state(buffer){var data=buffer.char();return data===InputStream.EOF?(tokenizer._parseError(\"expected-doctype-name-but-got-eof\"),tokenizer._currentToken.forceQuirks=!0,buffer.unget(data),tokenizer.setState(data_state),tokenizer._emitCurrentToken()):isWhitespace(data)?tokenizer.setState(before_doctype_name_state):(tokenizer._parseError(\"need-space-after-doctype\"),buffer.unget(data),tokenizer.setState(before_doctype_name_state)),!0}function before_doctype_name_state(buffer){var data=buffer.char();return data===InputStream.EOF?(tokenizer._parseError(\"expected-doctype-name-but-got-eof\"),tokenizer._currentToken.forceQuirks=!0,buffer.unget(data),tokenizer.setState(data_state),tokenizer._emitCurrentToken()):isWhitespace(data)||(\">\"===data?(tokenizer._parseError(\"expected-doctype-name-but-got-right-bracket\"),tokenizer._currentToken.forceQuirks=!0,tokenizer.setState(data_state),tokenizer._emitCurrentToken()):(isAlpha(data)&&(data=data.toLowerCase()),tokenizer._currentToken.name=data,tokenizer.setState(doctype_name_state))),!0}function doctype_name_state(buffer){var data=buffer.char();return data===InputStream.EOF?(tokenizer._currentToken.forceQuirks=!0,buffer.unget(data),tokenizer._parseError(\"eof-in-doctype-name\"),tokenizer.setState(data_state),tokenizer._emitCurrentToken()):isWhitespace(data)?tokenizer.setState(after_doctype_name_state):\">\"===data?(tokenizer.setState(data_state),tokenizer._emitCurrentToken()):(isAlpha(data)&&(data=data.toLowerCase()),tokenizer._currentToken.name+=data,buffer.commit()),!0}function after_doctype_name_state(buffer){var data=buffer.char();if(data===InputStream.EOF)tokenizer._currentToken.forceQuirks=!0,buffer.unget(data),tokenizer._parseError(\"eof-in-doctype\"),tokenizer.setState(data_state),tokenizer._emitCurrentToken();else if(isWhitespace(data));else if(\">\"===data)tokenizer.setState(data_state),tokenizer._emitCurrentToken();else{if([\"p\",\"P\"].indexOf(data)>-1){var expected=[[\"u\",\"U\"],[\"b\",\"B\"],[\"l\",\"L\"],[\"i\",\"I\"],[\"c\",\"C\"]],matched=expected.every(function(expected){return data=buffer.char(),expected.indexOf(data)>-1});if(matched)return tokenizer.setState(after_doctype_public_keyword_state),!0}else if([\"s\",\"S\"].indexOf(data)>-1){var expected=[[\"y\",\"Y\"],[\"s\",\"S\"],[\"t\",\"T\"],[\"e\",\"E\"],[\"m\",\"M\"]],matched=expected.every(function(expected){return data=buffer.char(),expected.indexOf(data)>-1});if(matched)return tokenizer.setState(after_doctype_system_keyword_state),!0}buffer.unget(data),tokenizer._currentToken.forceQuirks=!0,data===InputStream.EOF?(tokenizer._parseError(\"eof-in-doctype\"),buffer.unget(data),tokenizer.setState(data_state),tokenizer._emitCurrentToken()):(tokenizer._parseError(\"expected-space-or-right-bracket-in-doctype\",{data:data}),tokenizer.setState(bogus_doctype_state))}return!0}function after_doctype_public_keyword_state(buffer){var data=buffer.char();return data===InputStream.EOF?(tokenizer._parseError(\"eof-in-doctype\"),tokenizer._currentToken.forceQuirks=!0,buffer.unget(data),tokenizer.setState(data_state),tokenizer._emitCurrentToken()):isWhitespace(data)?tokenizer.setState(before_doctype_public_identifier_state):\"'\"===data||'\"'===data?(tokenizer._parseError(\"unexpected-char-in-doctype\"),buffer.unget(data),tokenizer.setState(before_doctype_public_identifier_state)):(buffer.unget(data),tokenizer.setState(before_doctype_public_identifier_state)),!0}function before_doctype_public_identifier_state(buffer){var data=buffer.char();return data===InputStream.EOF?(tokenizer._parseError(\"eof-in-doctype\"),tokenizer._currentToken.forceQuirks=!0,buffer.unget(data),tokenizer.setState(data_state),tokenizer._emitCurrentToken()):isWhitespace(data)||('\"'===data?(tokenizer._currentToken.publicId=\"\",tokenizer.setState(doctype_public_identifier_double_quoted_state)):\"'\"===data?(tokenizer._currentToken.publicId=\"\",tokenizer.setState(doctype_public_identifier_single_quoted_state)):\">\"===data?(tokenizer._parseError(\"unexpected-end-of-doctype\"),tokenizer._currentToken.forceQuirks=!0,tokenizer.setState(data_state),tokenizer._emitCurrentToken()):(tokenizer._parseError(\"unexpected-char-in-doctype\"),tokenizer._currentToken.forceQuirks=!0,tokenizer.setState(bogus_doctype_state))),!0}function doctype_public_identifier_double_quoted_state(buffer){var data=buffer.char();return data===InputStream.EOF?(tokenizer._parseError(\"eof-in-doctype\"),tokenizer._currentToken.forceQuirks=!0,buffer.unget(data),tokenizer.setState(data_state),tokenizer._emitCurrentToken()):'\"'===data?tokenizer.setState(after_doctype_public_identifier_state):\">\"===data?(tokenizer._parseError(\"unexpected-end-of-doctype\"),tokenizer._currentToken.forceQuirks=!0,tokenizer.setState(data_state),tokenizer._emitCurrentToken()):tokenizer._currentToken.publicId+=data,!0}function doctype_public_identifier_single_quoted_state(buffer){var data=buffer.char();return data===InputStream.EOF?(tokenizer._parseError(\"eof-in-doctype\"),tokenizer._currentToken.forceQuirks=!0,buffer.unget(data),tokenizer.setState(data_state),tokenizer._emitCurrentToken()):\"'\"===data?tokenizer.setState(after_doctype_public_identifier_state):\">\"===data?(tokenizer._parseError(\"unexpected-end-of-doctype\"),tokenizer._currentToken.forceQuirks=!0,tokenizer.setState(data_state),tokenizer._emitCurrentToken()):tokenizer._currentToken.publicId+=data,!0}function after_doctype_public_identifier_state(buffer){var data=buffer.char();return data===InputStream.EOF?(tokenizer._parseError(\"eof-in-doctype\"),tokenizer._currentToken.forceQuirks=!0,tokenizer._emitCurrentToken(),buffer.unget(data),tokenizer.setState(data_state)):isWhitespace(data)?tokenizer.setState(between_doctype_public_and_system_identifiers_state):\">\"===data?(tokenizer.setState(data_state),tokenizer._emitCurrentToken()):'\"'===data?(tokenizer._parseError(\"unexpected-char-in-doctype\"),tokenizer._currentToken.systemId=\"\",tokenizer.setState(doctype_system_identifier_double_quoted_state)):\"'\"===data?(tokenizer._parseError(\"unexpected-char-in-doctype\"),tokenizer._currentToken.systemId=\"\",tokenizer.setState(doctype_system_identifier_single_quoted_state)):(tokenizer._parseError(\"unexpected-char-in-doctype\"),tokenizer._currentToken.forceQuirks=!0,tokenizer.setState(bogus_doctype_state)),!0}function between_doctype_public_and_system_identifiers_state(buffer){var data=buffer.char();return data===InputStream.EOF?(tokenizer._parseError(\"eof-in-doctype\"),tokenizer._currentToken.forceQuirks=!0,tokenizer._emitCurrentToken(),buffer.unget(data),tokenizer.setState(data_state)):isWhitespace(data)||(\">\"===data?(tokenizer._emitCurrentToken(),tokenizer.setState(data_state)):'\"'===data?(tokenizer._currentToken.systemId=\"\",tokenizer.setState(doctype_system_identifier_double_quoted_state)):\"'\"===data?(tokenizer._currentToken.systemId=\"\",tokenizer.setState(doctype_system_identifier_single_quoted_state)):(tokenizer._parseError(\"unexpected-char-in-doctype\"),tokenizer._currentToken.forceQuirks=!0,tokenizer.setState(bogus_doctype_state))),!0}function after_doctype_system_keyword_state(buffer){var data=buffer.char();return data===InputStream.EOF?(tokenizer._parseError(\"eof-in-doctype\"),tokenizer._currentToken.forceQuirks=!0,tokenizer._emitCurrentToken(),buffer.unget(data),tokenizer.setState(data_state)):isWhitespace(data)?tokenizer.setState(before_doctype_system_identifier_state):\"'\"===data||'\"'===data?(tokenizer._parseError(\"unexpected-char-in-doctype\"),buffer.unget(data),tokenizer.setState(before_doctype_system_identifier_state)):(buffer.unget(data),tokenizer.setState(before_doctype_system_identifier_state)),!0}function before_doctype_system_identifier_state(buffer){var data=buffer.char();return data===InputStream.EOF?(tokenizer._parseError(\"eof-in-doctype\"),tokenizer._currentToken.forceQuirks=!0,tokenizer._emitCurrentToken(),buffer.unget(data),tokenizer.setState(data_state)):isWhitespace(data)||('\"'===data?(tokenizer._currentToken.systemId=\"\",tokenizer.setState(doctype_system_identifier_double_quoted_state)):\"'\"===data?(tokenizer._currentToken.systemId=\"\",tokenizer.setState(doctype_system_identifier_single_quoted_state)):\">\"===data?(tokenizer._parseError(\"unexpected-end-of-doctype\"),tokenizer._currentToken.forceQuirks=!0,tokenizer._emitCurrentToken(),tokenizer.setState(data_state)):(tokenizer._parseError(\"unexpected-char-in-doctype\"),tokenizer._currentToken.forceQuirks=!0,tokenizer.setState(bogus_doctype_state))),!0}function doctype_system_identifier_double_quoted_state(buffer){var data=buffer.char();return data===InputStream.EOF?(tokenizer._parseError(\"eof-in-doctype\"),tokenizer._currentToken.forceQuirks=!0,tokenizer._emitCurrentToken(),buffer.unget(data),tokenizer.setState(data_state)):'\"'===data?tokenizer.setState(after_doctype_system_identifier_state):\">\"===data?(tokenizer._parseError(\"unexpected-end-of-doctype\"),tokenizer._currentToken.forceQuirks=!0,tokenizer._emitCurrentToken(),tokenizer.setState(data_state)):tokenizer._currentToken.systemId+=data,!0}function doctype_system_identifier_single_quoted_state(buffer){var data=buffer.char();return data===InputStream.EOF?(tokenizer._parseError(\"eof-in-doctype\"),tokenizer._currentToken.forceQuirks=!0,tokenizer._emitCurrentToken(),buffer.unget(data),tokenizer.setState(data_state)):\"'\"===data?tokenizer.setState(after_doctype_system_identifier_state):\">\"===data?(tokenizer._parseError(\"unexpected-end-of-doctype\"),tokenizer._currentToken.forceQuirks=!0,tokenizer._emitCurrentToken(),tokenizer.setState(data_state)):tokenizer._currentToken.systemId+=data,!0}function after_doctype_system_identifier_state(buffer){var data=buffer.char();return data===InputStream.EOF?(tokenizer._parseError(\"eof-in-doctype\"),tokenizer._currentToken.forceQuirks=!0,tokenizer._emitCurrentToken(),buffer.unget(data),tokenizer.setState(data_state)):isWhitespace(data)||(\">\"===data?(tokenizer._emitCurrentToken(),tokenizer.setState(data_state)):(tokenizer._parseError(\"unexpected-char-in-doctype\"),tokenizer.setState(bogus_doctype_state))),!0}function bogus_doctype_state(buffer){var data=buffer.char();return data===InputStream.EOF?(buffer.unget(data),tokenizer._emitCurrentToken(),tokenizer.setState(data_state)):\">\"===data&&(tokenizer._emitCurrentToken(),tokenizer.setState(data_state)),!0}Tokenizer.DATA=data_state,Tokenizer.RCDATA=rcdata_state,Tokenizer.RAWTEXT=rawtext_state,Tokenizer.SCRIPT_DATA=script_data_state,Tokenizer.PLAINTEXT=plaintext_state,this._state=Tokenizer.DATA,this._inputStream.append(source),this._tokenHandler.startTokenization(this),this._inputStream.eof=!0;for(var tokenizer=this;this._state.call(this,this._inputStream););},Object.defineProperty(Tokenizer.prototype,\"lineNumber\",{get:function(){return this._inputStream.location().line}}),Object.defineProperty(Tokenizer.prototype,\"columnNumber\",{get:function(){return this._inputStream.location().column}}),exports.Tokenizer=Tokenizer},{\"./EntityParser\":2,\"./InputStream\":3}],6:[function(_dereq_,module,exports){function isWhitespace(ch){return\" \"===ch||\"\\n\"===ch||\"\t\"===ch||\"\\r\"===ch||\"\\f\"===ch}function isWhitespaceOrReplacementCharacter(ch){return isWhitespace(ch)||\"�\"===ch}function isAllWhitespace(characters){for(var i=0;characters.length>i;i++){var ch=characters[i];if(!isWhitespace(ch))return!1}return!0}function isAllWhitespaceOrReplacementCharacters(characters){for(var i=0;characters.length>i;i++){var ch=characters[i];if(!isWhitespaceOrReplacementCharacter(ch))return!1}return!0}function getAttribute(node,name){for(var i=0;node.attributes.length>i;i++){var attribute=node.attributes[i];if(attribute.nodeName===name)return attribute}return null}function CharacterBuffer(characters){this.characters=characters,this.current=0,this.end=this.characters.length}function TreeBuilder(){this.tokenizer=null,this.errorHandler=null,this.scriptingEnabled=!1,this.document=null,this.head=null,this.form=null,this.openElements=new ElementStack,this.activeFormattingElements=[],this.insertionMode=null,this.insertionModeName=\"\",this.originalInsertionMode=\"\",this.inQuirksMode=!1,this.compatMode=\"no quirks\",this.framesetOk=!0,this.redirectAttachToFosterParent=!1,this.selfClosingFlagAcknowledged=!1,this.context=\"\",this.pendingTableCharacters=[],this.shouldSkipLeadingNewline=!1;var tree=this,modes=this.insertionModes={};modes.base={end_tag_handlers:{\"-default\":\"endTagOther\"},start_tag_handlers:{\"-default\":\"startTagOther\"},processEOF:function(){tree.generateImpliedEndTags(),tree.openElements.length>2?tree.parseError(\"expected-closing-tag-but-got-eof\"):2==tree.openElements.length&&\"body\"!=tree.openElements.item(1).localName?tree.parseError(\"expected-closing-tag-but-got-eof\"):tree.context&&tree.openElements.length>1},processComment:function(data){tree.insertComment(data,tree.currentStackItem().node)},processDoctype:function(){tree.parseError(\"unexpected-doctype\")},processStartTag:function(name,attributes,selfClosing){if(this[this.start_tag_handlers[name]])this[this.start_tag_handlers[name]](name,attributes,selfClosing);else{if(!this[this.start_tag_handlers[\"-default\"]])throw Error(\"No handler found for \"+name);this[this.start_tag_handlers[\"-default\"]](name,attributes,selfClosing)}},processEndTag:function(name){if(this[this.end_tag_handlers[name]])this[this.end_tag_handlers[name]](name);else{if(!this[this.end_tag_handlers[\"-default\"]])throw Error(\"No handler found for \"+name);this[this.end_tag_handlers[\"-default\"]](name)}},startTagHtml:function(name,attributes){modes.inBody.startTagHtml(name,attributes)}},modes.initial=Object.create(modes.base),modes.initial.processEOF=function(){tree.parseError(\"expected-doctype-but-got-eof\"),this.anythingElse(),tree.insertionMode.processEOF()},modes.initial.processComment=function(data){tree.insertComment(data,tree.document)},modes.initial.processDoctype=function(name,publicId,systemId,forceQuirks){function publicIdStartsWith(string){return 0===publicId.toLowerCase().indexOf(string)}tree.insertDoctype(name||\"\",publicId||\"\",systemId||\"\"),forceQuirks||\"html\"!=name||null!=publicId&&([\"+//silmaril//dtd html pro v0r11 19970101//\",\"-//advasoft ltd//dtd html 3.0 aswedit + extensions//\",\"-//as//dtd html 3.0 aswedit + extensions//\",\"-//ietf//dtd html 2.0 level 1//\",\"-//ietf//dtd html 2.0 level 2//\",\"-//ietf//dtd html 2.0 strict level 1//\",\"-//ietf//dtd html 2.0 strict level 2//\",\"-//ietf//dtd html 2.0 strict//\",\"-//ietf//dtd html 2.0//\",\"-//ietf//dtd html 2.1e//\",\"-//ietf//dtd html 3.0//\",\"-//ietf//dtd html 3.0//\",\"-//ietf//dtd html 3.2 final//\",\"-//ietf//dtd html 3.2//\",\"-//ietf//dtd html 3//\",\"-//ietf//dtd html level 0//\",\"-//ietf//dtd html level 0//\",\"-//ietf//dtd html level 1//\",\"-//ietf//dtd html level 1//\",\"-//ietf//dtd html level 2//\",\"-//ietf//dtd html level 2//\",\"-//ietf//dtd html level 3//\",\"-//ietf//dtd html level 3//\",\"-//ietf//dtd html strict level 0//\",\"-//ietf//dtd html strict level 0//\",\"-//ietf//dtd html strict level 1//\",\"-//ietf//dtd html strict level 1//\",\"-//ietf//dtd html strict level 2//\",\"-//ietf//dtd html strict level 2//\",\"-//ietf//dtd html strict level 3//\",\"-//ietf//dtd html strict level 3//\",\"-//ietf//dtd html strict//\",\"-//ietf//dtd html strict//\",\"-//ietf//dtd html strict//\",\"-//ietf//dtd html//\",\"-//ietf//dtd html//\",\"-//ietf//dtd html//\",\"-//metrius//dtd metrius presentational//\",\"-//microsoft//dtd internet explorer 2.0 html strict//\",\"-//microsoft//dtd internet explorer 2.0 html//\",\"-//microsoft//dtd internet explorer 2.0 tables//\",\"-//microsoft//dtd internet explorer 3.0 html strict//\",\"-//microsoft//dtd internet explorer 3.0 html//\",\"-//microsoft//dtd internet explorer 3.0 tables//\",\"-//netscape comm. corp.//dtd html//\",\"-//netscape comm. corp.//dtd strict html//\",\"-//o'reilly and associates//dtd html 2.0//\",\"-//o'reilly and associates//dtd html extended 1.0//\",\"-//spyglass//dtd html 2.0 extended//\",\"-//sq//dtd html 2.0 hotmetal + extensions//\",\"-//sun microsystems corp.//dtd hotjava html//\",\"-//sun microsystems corp.//dtd hotjava strict html//\",\"-//w3c//dtd html 3 1995-03-24//\",\"-//w3c//dtd html 3.2 draft//\",\"-//w3c//dtd html 3.2 final//\",\"-//w3c//dtd html 3.2//\",\"-//w3c//dtd html 3.2s draft//\",\"-//w3c//dtd html 4.0 frameset//\",\"-//w3c//dtd html 4.0 transitional//\",\"-//w3c//dtd html experimental 19960712//\",\"-//w3c//dtd html experimental 970421//\",\"-//w3c//dtd w3 html//\",\"-//w3o//dtd w3 html 3.0//\",\"-//webtechs//dtd mozilla html 2.0//\",\"-//webtechs//dtd mozilla html//\",\"html\"].some(publicIdStartsWith)||[\"-//w3o//dtd w3 html strict 3.0//en//\",\"-/w3c/dtd html 4.0 transitional/en\",\"html\"].indexOf(publicId.toLowerCase())>-1||null==systemId&&[\"-//w3c//dtd html 4.01 transitional//\",\"-//w3c//dtd html 4.01 frameset//\"].some(publicIdStartsWith))||null!=systemId&&\"http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd\"==systemId.toLowerCase()?(tree.compatMode=\"quirks\",tree.parseError(\"quirky-doctype\")):null!=publicId&&([\"-//w3c//dtd xhtml 1.0 transitional//\",\"-//w3c//dtd xhtml 1.0 frameset//\"].some(publicIdStartsWith)||null!=systemId&&[\"-//w3c//dtd html 4.01 transitional//\",\"-//w3c//dtd html 4.01 frameset//\"].indexOf(publicId.toLowerCase())>-1)?(tree.compatMode=\"limited quirks\",tree.parseError(\"almost-standards-doctype\")):\"-//W3C//DTD HTML 4.0//EN\"==publicId&&(null==systemId||\"http://www.w3.org/TR/REC-html40/strict.dtd\"==systemId)||\"-//W3C//DTD HTML 4.01//EN\"==publicId&&(null==systemId||\"http://www.w3.org/TR/html4/strict.dtd\"==systemId)||\"-//W3C//DTD XHTML 1.0 Strict//EN\"==publicId&&\"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\"==systemId||\"-//W3C//DTD XHTML 1.1//EN\"==publicId&&\"http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd\"==systemId||(null!=systemId&&\"about:legacy-compat\"!=systemId||null!=publicId)&&tree.parseError(\"unknown-doctype\"),tree.setInsertionMode(\"beforeHTML\")},modes.initial.processCharacters=function(buffer){buffer.skipLeadingWhitespace(),buffer.length&&(tree.parseError(\"expected-doctype-but-got-chars\"),this.anythingElse(),tree.insertionMode.processCharacters(buffer))},modes.initial.processStartTag=function(name,attributes,selfClosing){tree.parseError(\"expected-doctype-but-got-start-tag\",{name:name}),this.anythingElse(),tree.insertionMode.processStartTag(name,attributes,selfClosing)},modes.initial.processEndTag=function(name){tree.parseError(\"expected-doctype-but-got-end-tag\",{name:name}),this.anythingElse(),tree.insertionMode.processEndTag(name)},modes.initial.anythingElse=function(){tree.compatMode=\"quirks\",tree.setInsertionMode(\"beforeHTML\")},modes.beforeHTML=Object.create(modes.base),modes.beforeHTML.start_tag_handlers={html:\"startTagHtml\",\"-default\":\"startTagOther\"},modes.beforeHTML.processEOF=function(){this.anythingElse(),tree.insertionMode.processEOF()},modes.beforeHTML.processComment=function(data){tree.insertComment(data,tree.document)},modes.beforeHTML.processCharacters=function(buffer){buffer.skipLeadingWhitespace(),buffer.length&&(this.anythingElse(),tree.insertionMode.processCharacters(buffer))},modes.beforeHTML.startTagHtml=function(name,attributes){tree.insertHtmlElement(attributes),tree.setInsertionMode(\"beforeHead\")},modes.beforeHTML.startTagOther=function(name,attributes,selfClosing){this.anythingElse(),tree.insertionMode.processStartTag(name,attributes,selfClosing)},modes.beforeHTML.processEndTag=function(name){this.anythingElse(),tree.insertionMode.processEndTag(name)},modes.beforeHTML.anythingElse=function(){tree.insertHtmlElement(),tree.setInsertionMode(\"beforeHead\")},modes.afterAfterBody=Object.create(modes.base),modes.afterAfterBody.start_tag_handlers={html:\"startTagHtml\",\"-default\":\"startTagOther\"},modes.afterAfterBody.processComment=function(data){tree.insertComment(data,tree.document)},modes.afterAfterBody.processDoctype=function(data){modes.inBody.processDoctype(data)},modes.afterAfterBody.startTagHtml=function(data,attributes){modes.inBody.startTagHtml(data,attributes)},modes.afterAfterBody.startTagOther=function(name,attributes,selfClosing){tree.parseError(\"unexpected-start-tag\",{name:name}),tree.setInsertionMode(\"inBody\"),tree.insertionMode.processStartTag(name,attributes,selfClosing)},modes.afterAfterBody.endTagOther=function(name){tree.parseError(\"unexpected-end-tag\",{name:name}),tree.setInsertionMode(\"inBody\"),tree.insertionMode.processEndTag(name)},modes.afterAfterBody.processCharacters=function(data){return isAllWhitespace(data.characters)?(modes.inBody.processCharacters(data),void 0):(tree.parseError(\"unexpected-char-after-body\"),tree.setInsertionMode(\"inBody\"),tree.insertionMode.processCharacters(data))},modes.afterBody=Object.create(modes.base),modes.afterBody.end_tag_handlers={html:\"endTagHtml\",\"-default\":\"endTagOther\"},modes.afterBody.processComment=function(data){tree.insertComment(data,tree.openElements.rootNode)},modes.afterBody.processCharacters=function(data){return isAllWhitespace(data.characters)?(modes.inBody.processCharacters(data),void 0):(tree.parseError(\"unexpected-char-after-body\"),tree.setInsertionMode(\"inBody\"),tree.insertionMode.processCharacters(data))},modes.afterBody.processStartTag=function(name,attributes,selfClosing){tree.parseError(\"unexpected-start-tag-after-body\",{name:name}),tree.setInsertionMode(\"inBody\"),tree.insertionMode.processStartTag(name,attributes,selfClosing)},modes.afterBody.endTagHtml=function(){tree.context?tree.parseError(\"end-html-in-innerhtml\"):tree.setInsertionMode(\"afterAfterBody\")},modes.afterBody.endTagOther=function(name){tree.parseError(\"unexpected-end-tag-after-body\",{name:name}),tree.setInsertionMode(\"inBody\"),tree.insertionMode.processEndTag(name)},modes.afterFrameset=Object.create(modes.base),modes.afterFrameset.start_tag_handlers={html:\"startTagHtml\",noframes:\"startTagNoframes\",\"-default\":\"startTagOther\"},modes.afterFrameset.end_tag_handlers={html:\"endTagHtml\",\"-default\":\"endTagOther\"},modes.afterFrameset.processCharacters=function(buffer){for(var characters=buffer.takeRemaining(),whitespace=\"\",i=0;characters.length>i;i++){var ch=characters[i];isWhitespace(ch)&&(whitespace+=ch)}whitespace&&tree.insertText(whitespace),whitespace.length<characters.length&&tree.parseError(\"expected-eof-but-got-char\")},modes.afterFrameset.startTagNoframes=function(name,attributes){modes.inHead.processStartTag(name,attributes)},modes.afterFrameset.startTagOther=function(name){tree.parseError(\"unexpected-start-tag-after-frameset\",{name:name})},modes.afterFrameset.endTagHtml=function(){tree.setInsertionMode(\"afterAfterFrameset\")},modes.afterFrameset.endTagOther=function(name){tree.parseError(\"unexpected-end-tag-after-frameset\",{name:name})},modes.beforeHead=Object.create(modes.base),modes.beforeHead.start_tag_handlers={html:\"startTagHtml\",head:\"startTagHead\",\"-default\":\"startTagOther\"},modes.beforeHead.end_tag_handlers={html:\"endTagImplyHead\",head:\"endTagImplyHead\",body:\"endTagImplyHead\",br:\"endTagImplyHead\",\"-default\":\"endTagOther\"},modes.beforeHead.processEOF=function(){this.startTagHead(\"head\",[]),tree.insertionMode.processEOF()},modes.beforeHead.processCharacters=function(buffer){buffer.skipLeadingWhitespace(),buffer.length&&(this.startTagHead(\"head\",[]),tree.insertionMode.processCharacters(buffer))},modes.beforeHead.startTagHead=function(name,attributes){tree.insertHeadElement(attributes),tree.setInsertionMode(\"inHead\")},modes.beforeHead.startTagOther=function(name,attributes,selfClosing){this.startTagHead(\"head\",[]),tree.insertionMode.processStartTag(name,attributes,selfClosing)},modes.beforeHead.endTagImplyHead=function(name){this.startTagHead(\"head\",[]),tree.insertionMode.processEndTag(name)},modes.beforeHead.endTagOther=function(name){tree.parseError(\"end-tag-after-implied-root\",{name:name})},modes.inHead=Object.create(modes.base),modes.inHead.start_tag_handlers={html:\"startTagHtml\",head:\"startTagHead\",title:\"startTagTitle\",script:\"startTagScript\",style:\"startTagNoFramesStyle\",noscript:\"startTagNoScript\",noframes:\"startTagNoFramesStyle\",base:\"startTagBaseBasefontBgsoundLink\",basefont:\"startTagBaseBasefontBgsoundLink\",bgsound:\"startTagBaseBasefontBgsoundLink\",link:\"startTagBaseBasefontBgsoundLink\",meta:\"startTagMeta\",\"-default\":\"startTagOther\"},modes.inHead.end_tag_handlers={head:\"endTagHead\",html:\"endTagHtmlBodyBr\",body:\"endTagHtmlBodyBr\",br:\"endTagHtmlBodyBr\",\"-default\":\"endTagOther\"},modes.inHead.processEOF=function(){var name=tree.currentStackItem().localName;\n-1!=[\"title\",\"style\",\"script\"].indexOf(name)&&(tree.parseError(\"expected-named-closing-tag-but-got-eof\",{name:name}),tree.popElement()),this.anythingElse(),tree.insertionMode.processEOF()},modes.inHead.processCharacters=function(buffer){var leadingWhitespace=buffer.takeLeadingWhitespace();leadingWhitespace&&tree.insertText(leadingWhitespace),buffer.length&&(this.anythingElse(),tree.insertionMode.processCharacters(buffer))},modes.inHead.startTagHtml=function(name,attributes){modes.inBody.processStartTag(name,attributes)},modes.inHead.startTagHead=function(){tree.parseError(\"two-heads-are-not-better-than-one\")},modes.inHead.startTagTitle=function(name,attributes){tree.processGenericRCDATAStartTag(name,attributes)},modes.inHead.startTagNoScript=function(name,attributes){return tree.scriptingEnabled?tree.processGenericRawTextStartTag(name,attributes):(tree.insertElement(name,attributes),tree.setInsertionMode(\"inHeadNoscript\"),void 0)},modes.inHead.startTagNoFramesStyle=function(name,attributes){tree.processGenericRawTextStartTag(name,attributes)},modes.inHead.startTagScript=function(name,attributes){tree.insertElement(name,attributes),tree.tokenizer.setState(Tokenizer.SCRIPT_DATA),tree.originalInsertionMode=tree.insertionModeName,tree.setInsertionMode(\"text\")},modes.inHead.startTagBaseBasefontBgsoundLink=function(name,attributes){tree.insertSelfClosingElement(name,attributes)},modes.inHead.startTagMeta=function(name,attributes){tree.insertSelfClosingElement(name,attributes)},modes.inHead.startTagOther=function(name,attributes,selfClosing){this.anythingElse(),tree.insertionMode.processStartTag(name,attributes,selfClosing)},modes.inHead.endTagHead=function(){\"head\"==tree.openElements.item(tree.openElements.length-1).localName?tree.openElements.pop():tree.parseError(\"unexpected-end-tag\",{name:\"head\"}),tree.setInsertionMode(\"afterHead\")},modes.inHead.endTagHtmlBodyBr=function(name){this.anythingElse(),tree.insertionMode.processEndTag(name)},modes.inHead.endTagOther=function(name){tree.parseError(\"unexpected-end-tag\",{name:name})},modes.inHead.anythingElse=function(){this.endTagHead(\"head\")},modes.afterHead=Object.create(modes.base),modes.afterHead.start_tag_handlers={html:\"startTagHtml\",head:\"startTagHead\",body:\"startTagBody\",frameset:\"startTagFrameset\",base:\"startTagFromHead\",link:\"startTagFromHead\",meta:\"startTagFromHead\",script:\"startTagFromHead\",style:\"startTagFromHead\",title:\"startTagFromHead\",\"-default\":\"startTagOther\"},modes.afterHead.end_tag_handlers={body:\"endTagBodyHtmlBr\",html:\"endTagBodyHtmlBr\",br:\"endTagBodyHtmlBr\",\"-default\":\"endTagOther\"},modes.afterHead.processEOF=function(){this.anythingElse(),tree.insertionMode.processEOF()},modes.afterHead.processCharacters=function(buffer){var leadingWhitespace=buffer.takeLeadingWhitespace();leadingWhitespace&&tree.insertText(leadingWhitespace),buffer.length&&(this.anythingElse(),tree.insertionMode.processCharacters(buffer))},modes.afterHead.startTagHtml=function(name,attributes){modes.inBody.processStartTag(name,attributes)},modes.afterHead.startTagBody=function(name,attributes){tree.framesetOk=!1,tree.insertBodyElement(attributes),tree.setInsertionMode(\"inBody\")},modes.afterHead.startTagFrameset=function(name,attributes){tree.insertElement(name,attributes),tree.setInsertionMode(\"inFrameset\")},modes.afterHead.startTagFromHead=function(name,attributes,selfClosing){tree.parseError(\"unexpected-start-tag-out-of-my-head\",{name:name}),tree.openElements.push(tree.head),modes.inHead.processStartTag(name,attributes,selfClosing),tree.openElements.remove(tree.head)},modes.afterHead.startTagHead=function(name){tree.parseError(\"unexpected-start-tag\",{name:name})},modes.afterHead.startTagOther=function(name,attributes,selfClosing){this.anythingElse(),tree.insertionMode.processStartTag(name,attributes,selfClosing)},modes.afterHead.endTagBodyHtmlBr=function(name){this.anythingElse(),tree.insertionMode.processEndTag(name)},modes.afterHead.endTagOther=function(name){tree.parseError(\"unexpected-end-tag\",{name:name})},modes.afterHead.anythingElse=function(){tree.insertBodyElement([]),tree.setInsertionMode(\"inBody\"),tree.framesetOk=!0},modes.inBody=Object.create(modes.base),modes.inBody.start_tag_handlers={html:\"startTagHtml\",head:\"startTagMisplaced\",base:\"startTagProcessInHead\",basefont:\"startTagProcessInHead\",bgsound:\"startTagProcessInHead\",link:\"startTagProcessInHead\",meta:\"startTagProcessInHead\",noframes:\"startTagProcessInHead\",script:\"startTagProcessInHead\",style:\"startTagProcessInHead\",title:\"startTagProcessInHead\",body:\"startTagBody\",form:\"startTagForm\",plaintext:\"startTagPlaintext\",a:\"startTagA\",button:\"startTagButton\",xmp:\"startTagXmp\",table:\"startTagTable\",hr:\"startTagHr\",image:\"startTagImage\",input:\"startTagInput\",textarea:\"startTagTextarea\",select:\"startTagSelect\",isindex:\"startTagIsindex\",applet:\"startTagAppletMarqueeObject\",marquee:\"startTagAppletMarqueeObject\",object:\"startTagAppletMarqueeObject\",li:\"startTagListItem\",dd:\"startTagListItem\",dt:\"startTagListItem\",address:\"startTagCloseP\",article:\"startTagCloseP\",aside:\"startTagCloseP\",blockquote:\"startTagCloseP\",center:\"startTagCloseP\",details:\"startTagCloseP\",dir:\"startTagCloseP\",div:\"startTagCloseP\",dl:\"startTagCloseP\",fieldset:\"startTagCloseP\",figcaption:\"startTagCloseP\",figure:\"startTagCloseP\",footer:\"startTagCloseP\",header:\"startTagCloseP\",hgroup:\"startTagCloseP\",main:\"startTagCloseP\",menu:\"startTagCloseP\",nav:\"startTagCloseP\",ol:\"startTagCloseP\",p:\"startTagCloseP\",section:\"startTagCloseP\",summary:\"startTagCloseP\",ul:\"startTagCloseP\",listing:\"startTagPreListing\",pre:\"startTagPreListing\",b:\"startTagFormatting\",big:\"startTagFormatting\",code:\"startTagFormatting\",em:\"startTagFormatting\",font:\"startTagFormatting\",i:\"startTagFormatting\",s:\"startTagFormatting\",small:\"startTagFormatting\",strike:\"startTagFormatting\",strong:\"startTagFormatting\",tt:\"startTagFormatting\",u:\"startTagFormatting\",nobr:\"startTagNobr\",area:\"startTagVoidFormatting\",br:\"startTagVoidFormatting\",embed:\"startTagVoidFormatting\",img:\"startTagVoidFormatting\",keygen:\"startTagVoidFormatting\",wbr:\"startTagVoidFormatting\",param:\"startTagParamSourceTrack\",source:\"startTagParamSourceTrack\",track:\"startTagParamSourceTrack\",iframe:\"startTagIFrame\",noembed:\"startTagRawText\",noscript:\"startTagRawText\",h1:\"startTagHeading\",h2:\"startTagHeading\",h3:\"startTagHeading\",h4:\"startTagHeading\",h5:\"startTagHeading\",h6:\"startTagHeading\",caption:\"startTagMisplaced\",col:\"startTagMisplaced\",colgroup:\"startTagMisplaced\",frame:\"startTagMisplaced\",frameset:\"startTagFrameset\",tbody:\"startTagMisplaced\",td:\"startTagMisplaced\",tfoot:\"startTagMisplaced\",th:\"startTagMisplaced\",thead:\"startTagMisplaced\",tr:\"startTagMisplaced\",option:\"startTagOptionOptgroup\",optgroup:\"startTagOptionOptgroup\",math:\"startTagMath\",svg:\"startTagSVG\",rt:\"startTagRpRt\",rp:\"startTagRpRt\",\"-default\":\"startTagOther\"},modes.inBody.end_tag_handlers={p:\"endTagP\",body:\"endTagBody\",html:\"endTagHtml\",address:\"endTagBlock\",article:\"endTagBlock\",aside:\"endTagBlock\",blockquote:\"endTagBlock\",button:\"endTagBlock\",center:\"endTagBlock\",details:\"endTagBlock\",dir:\"endTagBlock\",div:\"endTagBlock\",dl:\"endTagBlock\",fieldset:\"endTagBlock\",figcaption:\"endTagBlock\",figure:\"endTagBlock\",footer:\"endTagBlock\",header:\"endTagBlock\",hgroup:\"endTagBlock\",listing:\"endTagBlock\",main:\"endTagBlock\",menu:\"endTagBlock\",nav:\"endTagBlock\",ol:\"endTagBlock\",pre:\"endTagBlock\",section:\"endTagBlock\",summary:\"endTagBlock\",ul:\"endTagBlock\",form:\"endTagForm\",applet:\"endTagAppletMarqueeObject\",marquee:\"endTagAppletMarqueeObject\",object:\"endTagAppletMarqueeObject\",dd:\"endTagListItem\",dt:\"endTagListItem\",li:\"endTagListItem\",h1:\"endTagHeading\",h2:\"endTagHeading\",h3:\"endTagHeading\",h4:\"endTagHeading\",h5:\"endTagHeading\",h6:\"endTagHeading\",a:\"endTagFormatting\",b:\"endTagFormatting\",big:\"endTagFormatting\",code:\"endTagFormatting\",em:\"endTagFormatting\",font:\"endTagFormatting\",i:\"endTagFormatting\",nobr:\"endTagFormatting\",s:\"endTagFormatting\",small:\"endTagFormatting\",strike:\"endTagFormatting\",strong:\"endTagFormatting\",tt:\"endTagFormatting\",u:\"endTagFormatting\",br:\"endTagBr\",\"-default\":\"endTagOther\"},modes.inBody.processCharacters=function(buffer){tree.shouldSkipLeadingNewline&&(tree.shouldSkipLeadingNewline=!1,buffer.skipAtMostOneLeadingNewline()),tree.reconstructActiveFormattingElements();var characters=buffer.takeRemaining();characters=characters.replace(/\\u0000/g,function(){return tree.parseError(\"invalid-codepoint\"),\"\"}),characters&&(tree.insertText(characters),tree.framesetOk&&!isAllWhitespaceOrReplacementCharacters(characters)&&(tree.framesetOk=!1))},modes.inBody.startTagHtml=function(name,attributes){tree.parseError(\"non-html-root\"),tree.addAttributesToElement(tree.openElements.rootNode,attributes)},modes.inBody.startTagProcessInHead=function(name,attributes){modes.inHead.processStartTag(name,attributes)},modes.inBody.startTagBody=function(name,attributes){tree.parseError(\"unexpected-start-tag\",{name:\"body\"}),1==tree.openElements.length||\"body\"!=tree.openElements.item(1).localName?assert.ok(tree.context):(tree.framesetOk=!1,tree.addAttributesToElement(tree.openElements.bodyElement,attributes))},modes.inBody.startTagFrameset=function(name,attributes){if(tree.parseError(\"unexpected-start-tag\",{name:\"frameset\"}),1==tree.openElements.length||\"body\"!=tree.openElements.item(1).localName)assert.ok(tree.context);else if(tree.framesetOk){for(tree.detachFromParent(tree.openElements.bodyElement);tree.openElements.length>1;)tree.openElements.pop();tree.insertElement(name,attributes),tree.setInsertionMode(\"inFrameset\")}},modes.inBody.startTagCloseP=function(name,attributes){tree.openElements.inButtonScope(\"p\")&&this.endTagP(\"p\"),tree.insertElement(name,attributes)},modes.inBody.startTagPreListing=function(name,attributes){tree.openElements.inButtonScope(\"p\")&&this.endTagP(\"p\"),tree.insertElement(name,attributes),tree.framesetOk=!1,tree.shouldSkipLeadingNewline=!0},modes.inBody.startTagForm=function(name,attributes){tree.form?tree.parseError(\"unexpected-start-tag\",{name:name}):(tree.openElements.inButtonScope(\"p\")&&this.endTagP(\"p\"),tree.insertElement(name,attributes),tree.form=tree.currentStackItem())},modes.inBody.startTagRpRt=function(name,attributes){tree.openElements.inScope(\"ruby\")&&(tree.generateImpliedEndTags(),\"ruby\"!=tree.currentStackItem().localName&&tree.parseError(\"unexpected-start-tag\",{name:name})),tree.insertElement(name,attributes)},modes.inBody.startTagListItem=function(name,attributes){for(var stopNames={li:[\"li\"],dd:[\"dd\",\"dt\"],dt:[\"dd\",\"dt\"]},stopName=stopNames[name],els=tree.openElements,i=els.length-1;i>=0;i--){var node=els.item(i);if(-1!=stopName.indexOf(node.localName)){tree.insertionMode.processEndTag(node.localName);break}if(node.isSpecial()&&\"p\"!==node.localName&&\"address\"!==node.localName&&\"div\"!==node.localName)break}tree.openElements.inButtonScope(\"p\")&&this.endTagP(\"p\"),tree.insertElement(name,attributes),tree.framesetOk=!1},modes.inBody.startTagPlaintext=function(name,attributes){tree.openElements.inButtonScope(\"p\")&&this.endTagP(\"p\"),tree.insertElement(name,attributes),tree.tokenizer.setState(Tokenizer.PLAINTEXT)},modes.inBody.startTagHeading=function(name,attributes){tree.openElements.inButtonScope(\"p\")&&this.endTagP(\"p\"),tree.currentStackItem().isNumberedHeader()&&(tree.parseError(\"unexpected-start-tag\",{name:name}),tree.popElement()),tree.insertElement(name,attributes)},modes.inBody.startTagA=function(name,attributes){var activeA=tree.elementInActiveFormattingElements(\"a\");activeA&&(tree.parseError(\"unexpected-start-tag-implies-end-tag\",{startName:\"a\",endName:\"a\"}),tree.adoptionAgencyEndTag(\"a\"),tree.openElements.contains(activeA)&&tree.openElements.remove(activeA),tree.removeElementFromActiveFormattingElements(activeA)),tree.reconstructActiveFormattingElements(),tree.insertFormattingElement(name,attributes)},modes.inBody.startTagFormatting=function(name,attributes){tree.reconstructActiveFormattingElements(),tree.insertFormattingElement(name,attributes)},modes.inBody.startTagNobr=function(name,attributes){tree.reconstructActiveFormattingElements(),tree.openElements.inScope(\"nobr\")&&(tree.parseError(\"unexpected-start-tag-implies-end-tag\",{startName:\"nobr\",endName:\"nobr\"}),this.processEndTag(\"nobr\"),tree.reconstructActiveFormattingElements()),tree.insertFormattingElement(name,attributes)},modes.inBody.startTagButton=function(name,attributes){tree.openElements.inScope(\"button\")?(tree.parseError(\"unexpected-start-tag-implies-end-tag\",{startName:\"button\",endName:\"button\"}),this.processEndTag(\"button\"),tree.insertionMode.processStartTag(name,attributes)):(tree.framesetOk=!1,tree.reconstructActiveFormattingElements(),tree.insertElement(name,attributes))},modes.inBody.startTagAppletMarqueeObject=function(name,attributes){tree.reconstructActiveFormattingElements(),tree.insertElement(name,attributes),tree.activeFormattingElements.push(Marker),tree.framesetOk=!1},modes.inBody.endTagAppletMarqueeObject=function(name){tree.openElements.inScope(name)?(tree.generateImpliedEndTags(),tree.currentStackItem().localName!=name&&tree.parseError(\"end-tag-too-early\",{name:name}),tree.openElements.popUntilPopped(name),tree.clearActiveFormattingElements()):tree.parseError(\"unexpected-end-tag\",{name:name})},modes.inBody.startTagXmp=function(name,attributes){tree.openElements.inButtonScope(\"p\")&&this.processEndTag(\"p\"),tree.reconstructActiveFormattingElements(),tree.processGenericRawTextStartTag(name,attributes),tree.framesetOk=!1},modes.inBody.startTagTable=function(name,attributes){\"quirks\"!==tree.compatMode&&tree.openElements.inButtonScope(\"p\")&&this.processEndTag(\"p\"),tree.insertElement(name,attributes),tree.setInsertionMode(\"inTable\"),tree.framesetOk=!1},modes.inBody.startTagVoidFormatting=function(name,attributes){tree.reconstructActiveFormattingElements(),tree.insertSelfClosingElement(name,attributes),tree.framesetOk=!1},modes.inBody.startTagParamSourceTrack=function(name,attributes){tree.insertSelfClosingElement(name,attributes)},modes.inBody.startTagHr=function(name,attributes){tree.openElements.inButtonScope(\"p\")&&this.endTagP(\"p\"),tree.insertSelfClosingElement(name,attributes),tree.framesetOk=!1},modes.inBody.startTagImage=function(name,attributes){tree.parseError(\"unexpected-start-tag-treated-as\",{originalName:\"image\",newName:\"img\"}),this.processStartTag(\"img\",attributes)},modes.inBody.startTagInput=function(name,attributes){var currentFramesetOk=tree.framesetOk;this.startTagVoidFormatting(name,attributes);for(var key in attributes)if(\"type\"==attributes[key].nodeName){\"hidden\"==attributes[key].nodeValue.toLowerCase()&&(tree.framesetOk=currentFramesetOk);break}},modes.inBody.startTagIsindex=function(name,attributes){if(tree.parseError(\"deprecated-tag\",{name:\"isindex\"}),tree.selfClosingFlagAcknowledged=!0,!tree.form){var formAttributes=[],inputAttributes=[],prompt=\"This is a searchable index. Enter search keywords: \";for(var key in attributes)switch(attributes[key].nodeName){case\"action\":formAttributes.push({nodeName:\"action\",nodeValue:attributes[key].nodeValue});break;case\"prompt\":prompt=attributes[key].nodeValue;break;case\"name\":break;default:inputAttributes.push({nodeName:attributes[key].nodeName,nodeValue:attributes[key].nodeValue})}inputAttributes.push({nodeName:\"name\",nodeValue:\"isindex\"}),this.processStartTag(\"form\",formAttributes),this.processStartTag(\"hr\"),this.processStartTag(\"label\"),this.processCharacters(new CharacterBuffer(prompt)),this.processStartTag(\"input\",inputAttributes),this.processEndTag(\"label\"),this.processStartTag(\"hr\"),this.processEndTag(\"form\")}},modes.inBody.startTagTextarea=function(name,attributes){tree.insertElement(name,attributes),tree.tokenizer.setState(Tokenizer.RCDATA),tree.originalInsertionMode=tree.insertionModeName,tree.shouldSkipLeadingNewline=!0,tree.framesetOk=!1,tree.setInsertionMode(\"text\")},modes.inBody.startTagIFrame=function(name,attributes){tree.framesetOk=!1,this.startTagRawText(name,attributes)},modes.inBody.startTagRawText=function(name,attributes){tree.processGenericRawTextStartTag(name,attributes)},modes.inBody.startTagSelect=function(name,attributes){tree.reconstructActiveFormattingElements(),tree.insertElement(name,attributes),tree.framesetOk=!1;var insertionModeName=tree.insertionModeName;\"inTable\"==insertionModeName||\"inCaption\"==insertionModeName||\"inColumnGroup\"==insertionModeName||\"inTableBody\"==insertionModeName||\"inRow\"==insertionModeName||\"inCell\"==insertionModeName?tree.setInsertionMode(\"inSelectInTable\"):tree.setInsertionMode(\"inSelect\")},modes.inBody.startTagMisplaced=function(name){tree.parseError(\"unexpected-start-tag-ignored\",{name:name})},modes.inBody.endTagMisplaced=function(name){tree.parseError(\"unexpected-end-tag\",{name:name})},modes.inBody.endTagBr=function(name){tree.parseError(\"unexpected-end-tag-treated-as\",{originalName:\"br\",newName:\"br element\"}),tree.reconstructActiveFormattingElements(),tree.insertElement(name,[]),tree.popElement()},modes.inBody.startTagOptionOptgroup=function(name,attributes){\"option\"==tree.currentStackItem().localName&&tree.popElement(),tree.reconstructActiveFormattingElements(),tree.insertElement(name,attributes)},modes.inBody.startTagOther=function(name,attributes){tree.reconstructActiveFormattingElements(),tree.insertElement(name,attributes)},modes.inBody.endTagOther=function(name){for(var node,i=tree.openElements.length-1;i>0;i--){if(node=tree.openElements.item(i),node.localName==name){tree.generateImpliedEndTags(name),tree.currentStackItem().localName!=name&&tree.parseError(\"unexpected-end-tag\",{name:name}),tree.openElements.remove_openElements_until(function(x){return x===node});break}if(node.isSpecial()){tree.parseError(\"unexpected-end-tag\",{name:name});break}}},modes.inBody.startTagMath=function(name,attributes,selfClosing){tree.reconstructActiveFormattingElements(),attributes=tree.adjustMathMLAttributes(attributes),attributes=tree.adjustForeignAttributes(attributes),tree.insertForeignElement(name,attributes,\"http://www.w3.org/1998/Math/MathML\",selfClosing)},modes.inBody.startTagSVG=function(name,attributes,selfClosing){tree.reconstructActiveFormattingElements(),attributes=tree.adjustSVGAttributes(attributes),attributes=tree.adjustForeignAttributes(attributes),tree.insertForeignElement(name,attributes,\"http://www.w3.org/2000/svg\",selfClosing)},modes.inBody.endTagP=function(name){tree.openElements.inButtonScope(\"p\")?(tree.generateImpliedEndTags(\"p\"),\"p\"!=tree.currentStackItem().localName&&tree.parseError(\"unexpected-implied-end-tag\",{name:\"p\"}),tree.openElements.popUntilPopped(name)):(tree.parseError(\"unexpected-end-tag\",{name:\"p\"}),this.startTagCloseP(\"p\",[]),this.endTagP(\"p\"))},modes.inBody.endTagBody=function(name){return tree.openElements.inScope(\"body\")?(\"body\"!=tree.currentStackItem().localName&&tree.parseError(\"expected-one-end-tag-but-got-another\",{expectedName:tree.currentStackItem().localName,gotName:name}),tree.setInsertionMode(\"afterBody\"),void 0):(tree.parseError(\"unexpected-end-tag\",{name:name}),void 0)},modes.inBody.endTagHtml=function(name){return tree.openElements.inScope(\"body\")?(\"body\"!=tree.currentStackItem().localName&&tree.parseError(\"expected-one-end-tag-but-got-another\",{expectedName:tree.currentStackItem().localName,gotName:name}),tree.setInsertionMode(\"afterBody\"),tree.insertionMode.processEndTag(name),void 0):(tree.parseError(\"unexpected-end-tag\",{name:name}),void 0)},modes.inBody.endTagBlock=function(name){tree.openElements.inScope(name)?(tree.generateImpliedEndTags(),tree.currentStackItem().localName!=name&&tree.parseError(\"end-tag-too-early\",{name:name}),tree.openElements.popUntilPopped(name)):tree.parseError(\"unexpected-end-tag\",{name:name})},modes.inBody.endTagForm=function(name){var node=tree.form;tree.form=null,node&&tree.openElements.inScope(name)?(tree.generateImpliedEndTags(),tree.currentStackItem()!=node&&tree.parseError(\"end-tag-too-early-ignored\",{name:\"form\"}),tree.openElements.remove(node)):tree.parseError(\"unexpected-end-tag\",{name:name})},modes.inBody.endTagListItem=function(name){tree.openElements.inListItemScope(name)?(tree.generateImpliedEndTags(name),tree.currentStackItem().localName!=name&&tree.parseError(\"end-tag-too-early\",{name:name}),tree.openElements.popUntilPopped(name)):tree.parseError(\"unexpected-end-tag\",{name:name})},modes.inBody.endTagHeading=function(name){return tree.openElements.hasNumberedHeaderElementInScope()?(tree.generateImpliedEndTags(),tree.currentStackItem().localName!=name&&tree.parseError(\"end-tag-too-early\",{name:name}),tree.openElements.remove_openElements_until(function(e){return e.isNumberedHeader()}),void 0):(tree.parseError(\"unexpected-end-tag\",{name:name}),void 0)},modes.inBody.endTagFormatting=function(name,attributes){tree.adoptionAgencyEndTag(name)||this.endTagOther(name,attributes)},modes.inCaption=Object.create(modes.base),modes.inCaption.start_tag_handlers={html:\"startTagHtml\",caption:\"startTagTableElement\",col:\"startTagTableElement\",colgroup:\"startTagTableElement\",tbody:\"startTagTableElement\",td:\"startTagTableElement\",tfoot:\"startTagTableElement\",thead:\"startTagTableElement\",tr:\"startTagTableElement\",\"-default\":\"startTagOther\"},modes.inCaption.end_tag_handlers={caption:\"endTagCaption\",table:\"endTagTable\",body:\"endTagIgnore\",col:\"endTagIgnore\",colgroup:\"endTagIgnore\",html:\"endTagIgnore\",tbody:\"endTagIgnore\",td:\"endTagIgnore\",tfood:\"endTagIgnore\",thead:\"endTagIgnore\",tr:\"endTagIgnore\",\"-default\":\"endTagOther\"},modes.inCaption.processCharacters=function(data){modes.inBody.processCharacters(data)},modes.inCaption.startTagTableElement=function(name,attributes){tree.parseError(\"unexpected-end-tag\",{name:name});var ignoreEndTag=!tree.openElements.inTableScope(\"caption\");tree.insertionMode.processEndTag(\"caption\"),ignoreEndTag||tree.insertionMode.processStartTag(name,attributes)},modes.inCaption.startTagOther=function(name,attributes,selfClosing){modes.inBody.processStartTag(name,attributes,selfClosing)},modes.inCaption.endTagCaption=function(name){tree.openElements.inTableScope(\"caption\")?(tree.generateImpliedEndTags(),\"caption\"!=tree.currentStackItem().localName&&tree.parseError(\"expected-one-end-tag-but-got-another\",{gotName:\"caption\",expectedName:tree.currentStackItem().localName}),tree.openElements.popUntilPopped(\"caption\"),tree.clearActiveFormattingElements(),tree.setInsertionMode(\"inTable\")):(assert.ok(tree.context),tree.parseError(\"unexpected-end-tag\",{name:name}))},modes.inCaption.endTagTable=function(name){tree.parseError(\"unexpected-end-table-in-caption\");var ignoreEndTag=!tree.openElements.inTableScope(\"caption\");tree.insertionMode.processEndTag(\"caption\"),ignoreEndTag||tree.insertionMode.processEndTag(name)},modes.inCaption.endTagIgnore=function(name){tree.parseError(\"unexpected-end-tag\",{name:name})},modes.inCaption.endTagOther=function(name){modes.inBody.processEndTag(name)},modes.inCell=Object.create(modes.base),modes.inCell.start_tag_handlers={html:\"startTagHtml\",caption:\"startTagTableOther\",col:\"startTagTableOther\",colgroup:\"startTagTableOther\",tbody:\"startTagTableOther\",td:\"startTagTableOther\",tfoot:\"startTagTableOther\",th:\"startTagTableOther\",thead:\"startTagTableOther\",tr:\"startTagTableOther\",\"-default\":\"startTagOther\"},modes.inCell.end_tag_handlers={td:\"endTagTableCell\",th:\"endTagTableCell\",body:\"endTagIgnore\",caption:\"endTagIgnore\",col:\"endTagIgnore\",colgroup:\"endTagIgnore\",html:\"endTagIgnore\",table:\"endTagImply\",tbody:\"endTagImply\",tfoot:\"endTagImply\",thead:\"endTagImply\",tr:\"endTagImply\",\"-default\":\"endTagOther\"},modes.inCell.processCharacters=function(data){modes.inBody.processCharacters(data)},modes.inCell.startTagTableOther=function(name,attributes,selfClosing){tree.openElements.inTableScope(\"td\")||tree.openElements.inTableScope(\"th\")?(this.closeCell(),tree.insertionMode.processStartTag(name,attributes,selfClosing)):tree.parseError(\"unexpected-start-tag\",{name:name})},modes.inCell.startTagOther=function(name,attributes,selfClosing){modes.inBody.processStartTag(name,attributes,selfClosing)},modes.inCell.endTagTableCell=function(name){tree.openElements.inTableScope(name)?(tree.generateImpliedEndTags(name),tree.currentStackItem().localName!=name.toLowerCase()?(tree.parseError(\"unexpected-cell-end-tag\",{name:name}),tree.openElements.popUntilPopped(name)):tree.popElement(),tree.clearActiveFormattingElements(),tree.setInsertionMode(\"inRow\")):tree.parseError(\"unexpected-end-tag\",{name:name})},modes.inCell.endTagIgnore=function(name){tree.parseError(\"unexpected-end-tag\",{name:name})},modes.inCell.endTagImply=function(name){tree.openElements.inTableScope(name)?(this.closeCell(),tree.insertionMode.processEndTag(name)):tree.parseError(\"unexpected-end-tag\",{name:name})},modes.inCell.endTagOther=function(name){modes.inBody.processEndTag(name)},modes.inCell.closeCell=function(){tree.openElements.inTableScope(\"td\")?this.endTagTableCell(\"td\"):tree.openElements.inTableScope(\"th\")&&this.endTagTableCell(\"th\")},modes.inColumnGroup=Object.create(modes.base),modes.inColumnGroup.start_tag_handlers={html:\"startTagHtml\",col:\"startTagCol\",\"-default\":\"startTagOther\"},modes.inColumnGroup.end_tag_handlers={colgroup:\"endTagColgroup\",col:\"endTagCol\",\"-default\":\"endTagOther\"},modes.inColumnGroup.ignoreEndTagColgroup=function(){return\"html\"==tree.currentStackItem().localName},modes.inColumnGroup.processCharacters=function(buffer){var leadingWhitespace=buffer.takeLeadingWhitespace();if(leadingWhitespace&&tree.insertText(leadingWhitespace),buffer.length){var ignoreEndTag=this.ignoreEndTagColgroup();this.endTagColgroup(\"colgroup\"),ignoreEndTag||tree.insertionMode.processCharacters(buffer)}},modes.inColumnGroup.startTagCol=function(name,attributes){tree.insertSelfClosingElement(name,attributes)},modes.inColumnGroup.startTagOther=function(name,attributes,selfClosing){var ignoreEndTag=this.ignoreEndTagColgroup();this.endTagColgroup(\"colgroup\"),ignoreEndTag||tree.insertionMode.processStartTag(name,attributes,selfClosing)},modes.inColumnGroup.endTagColgroup=function(name){this.ignoreEndTagColgroup()?(assert.ok(tree.context),tree.parseError(\"unexpected-end-tag\",{name:name})):(tree.popElement(),tree.setInsertionMode(\"inTable\"))},modes.inColumnGroup.endTagCol=function(){tree.parseError(\"no-end-tag\",{name:\"col\"})},modes.inColumnGroup.endTagOther=function(name){var ignoreEndTag=this.ignoreEndTagColgroup();this.endTagColgroup(\"colgroup\"),ignoreEndTag||tree.insertionMode.processEndTag(name)},modes.inForeignContent=Object.create(modes.base),modes.inForeignContent.processStartTag=function(name,attributes,selfClosing){if(-1!=[\"b\",\"big\",\"blockquote\",\"body\",\"br\",\"center\",\"code\",\"dd\",\"div\",\"dl\",\"dt\",\"em\",\"embed\",\"h1\",\"h2\",\"h3\",\"h4\",\"h5\",\"h6\",\"head\",\"hr\",\"i\",\"img\",\"li\",\"listing\",\"menu\",\"meta\",\"nobr\",\"ol\",\"p\",\"pre\",\"ruby\",\"s\",\"small\",\"span\",\"strong\",\"strike\",\"sub\",\"sup\",\"table\",\"tt\",\"u\",\"ul\",\"var\"].indexOf(name)||\"font\"==name&&attributes.some(function(attr){return[\"color\",\"face\",\"size\"].indexOf(attr.nodeName)>=0})){for(tree.parseError(\"unexpected-html-element-in-foreign-content\",{name:name});tree.currentStackItem().isForeign()&&!tree.currentStackItem().isHtmlIntegrationPoint()&&!tree.currentStackItem().isMathMLTextIntegrationPoint();)tree.openElements.pop();return tree.insertionMode.processStartTag(name,attributes,selfClosing),void 0}\"http://www.w3.org/1998/Math/MathML\"==tree.currentStackItem().namespaceURI&&(attributes=tree.adjustMathMLAttributes(attributes)),\"http://www.w3.org/2000/svg\"==tree.currentStackItem().namespaceURI&&(name=tree.adjustSVGTagNameCase(name),attributes=tree.adjustSVGAttributes(attributes)),attributes=tree.adjustForeignAttributes(attributes),tree.insertForeignElement(name,attributes,tree.currentStackItem().namespaceURI,selfClosing)},modes.inForeignContent.processEndTag=function(name){var node=tree.currentStackItem(),index=tree.openElements.length-1;for(node.localName.toLowerCase()!=name&&tree.parseError(\"unexpected-end-tag\",{name:name});;){if(0===index)break;if(node.localName.toLowerCase()==name){for(;tree.openElements.pop()!=node;);break}if(index-=1,node=tree.openElements.item(index),!node.isForeign()){tree.insertionMode.processEndTag(name);break}}},modes.inForeignContent.processCharacters=function(buffer){var characters=buffer.takeRemaining();characters=characters.replace(/\\u0000/g,function(){return tree.parseError(\"invalid-codepoint\"),\"�\"}),tree.framesetOk&&!isAllWhitespaceOrReplacementCharacters(characters)&&(tree.framesetOk=!1),tree.insertText(characters)},modes.inHeadNoscript=Object.create(modes.base),modes.inHeadNoscript.start_tag_handlers={html:\"startTagHtml\",basefont:\"startTagBasefontBgsoundLinkMetaNoframesStyle\",bgsound:\"startTagBasefontBgsoundLinkMetaNoframesStyle\",link:\"startTagBasefontBgsoundLinkMetaNoframesStyle\",meta:\"startTagBasefontBgsoundLinkMetaNoframesStyle\",noframes:\"startTagBasefontBgsoundLinkMetaNoframesStyle\",style:\"startTagBasefontBgsoundLinkMetaNoframesStyle\",head:\"startTagHeadNoscript\",noscript:\"startTagHeadNoscript\",\"-default\":\"startTagOther\"},modes.inHeadNoscript.end_tag_handlers={noscript:\"endTagNoscript\",br:\"endTagBr\",\"-default\":\"endTagOther\"},modes.inHeadNoscript.processCharacters=function(buffer){var leadingWhitespace=buffer.takeLeadingWhitespace();leadingWhitespace&&tree.insertText(leadingWhitespace),buffer.length&&(tree.parseError(\"unexpected-char-in-frameset\"),this.anythingElse(),tree.insertionMode.processCharacters(buffer))},modes.inHeadNoscript.processComment=function(data){modes.inHead.processComment(data)},modes.inHeadNoscript.startTagBasefontBgsoundLinkMetaNoframesStyle=function(name,attributes){modes.inHead.processStartTag(name,attributes)},modes.inHeadNoscript.startTagHeadNoscript=function(name){tree.parseError(\"unexpected-start-tag-in-frameset\",{name:name})},modes.inHeadNoscript.startTagOther=function(name,attributes){tree.parseError(\"unexpected-start-tag-in-frameset\",{name:name}),this.anythingElse(),tree.insertionMode.processStartTag(name,attributes)},modes.inHeadNoscript.endTagBr=function(name,attributes){tree.parseError(\"unexpected-end-tag-in-frameset\",{name:name}),this.anythingElse(),tree.insertionMode.processEndTag(name,attributes)},modes.inHeadNoscript.endTagNoscript=function(){tree.popElement(),tree.setInsertionMode(\"inHead\")},modes.inHeadNoscript.endTagOther=function(name){tree.parseError(\"unexpected-end-tag-in-frameset\",{name:name})},modes.inHeadNoscript.anythingElse=function(){tree.popElement(),tree.setInsertionMode(\"inHead\")},modes.inFrameset=Object.create(modes.base),modes.inFrameset.start_tag_handlers={html:\"startTagHtml\",frameset:\"startTagFrameset\",frame:\"startTagFrame\",noframes:\"startTagNoframes\",\"-default\":\"startTagOther\"},modes.inFrameset.end_tag_handlers={frameset:\"endTagFrameset\",noframes:\"endTagNoframes\",\"-default\":\"endTagOther\"},modes.inFrameset.processCharacters=function(){tree.parseError(\"unexpected-char-in-frameset\")},modes.inFrameset.startTagFrameset=function(name,attributes){tree.insertElement(name,attributes)},modes.inFrameset.startTagFrame=function(name,attributes){tree.insertSelfClosingElement(name,attributes)},modes.inFrameset.startTagNoframes=function(name,attributes){modes.inBody.processStartTag(name,attributes)},modes.inFrameset.startTagOther=function(name){tree.parseError(\"unexpected-start-tag-in-frameset\",{name:name})},modes.inFrameset.endTagFrameset=function(){\"html\"==tree.currentStackItem().localName?tree.parseError(\"unexpected-frameset-in-frameset-innerhtml\"):tree.popElement(),tree.context||\"frameset\"==tree.currentStackItem().localName||tree.setInsertionMode(\"afterFrameset\")},modes.inFrameset.endTagNoframes=function(name){modes.inBody.processEndTag(name)},modes.inFrameset.endTagOther=function(name){tree.parseError(\"unexpected-end-tag-in-frameset\",{name:name})},modes.inTable=Object.create(modes.base),modes.inTable.start_tag_handlers={html:\"startTagHtml\",caption:\"startTagCaption\",colgroup:\"startTagColgroup\",col:\"startTagCol\",table:\"startTagTable\",tbody:\"startTagRowGroup\",tfoot:\"startTagRowGroup\",thead:\"startTagRowGroup\",td:\"startTagImplyTbody\",th:\"startTagImplyTbody\",tr:\"startTagImplyTbody\",style:\"startTagStyleScript\",script:\"startTagStyleScript\",input:\"startTagInput\",form:\"startTagForm\",\"-default\":\"startTagOther\"},modes.inTable.end_tag_handlers={table:\"endTagTable\",body:\"endTagIgnore\",caption:\"endTagIgnore\",col:\"endTagIgnore\",colgroup:\"endTagIgnore\",html:\"endTagIgnore\",tbody:\"endTagIgnore\",td:\"endTagIgnore\",tfoot:\"endTagIgnore\",th:\"endTagIgnore\",thead:\"endTagIgnore\",tr:\"endTagIgnore\",\"-default\":\"endTagOther\"},modes.inTable.processCharacters=function(data){if(tree.currentStackItem().isFosterParenting()){var originalInsertionMode=tree.insertionModeName;\ntree.setInsertionMode(\"inTableText\"),tree.originalInsertionMode=originalInsertionMode,tree.insertionMode.processCharacters(data)}else tree.redirectAttachToFosterParent=!0,modes.inBody.processCharacters(data),tree.redirectAttachToFosterParent=!1},modes.inTable.startTagCaption=function(name,attributes){tree.openElements.popUntilTableScopeMarker(),tree.activeFormattingElements.push(Marker),tree.insertElement(name,attributes),tree.setInsertionMode(\"inCaption\")},modes.inTable.startTagColgroup=function(name,attributes){tree.openElements.popUntilTableScopeMarker(),tree.insertElement(name,attributes),tree.setInsertionMode(\"inColumnGroup\")},modes.inTable.startTagCol=function(name,attributes){this.startTagColgroup(\"colgroup\",[]),tree.insertionMode.processStartTag(name,attributes)},modes.inTable.startTagRowGroup=function(name,attributes){tree.openElements.popUntilTableScopeMarker(),tree.insertElement(name,attributes),tree.setInsertionMode(\"inTableBody\")},modes.inTable.startTagImplyTbody=function(name,attributes){this.startTagRowGroup(\"tbody\",[]),tree.insertionMode.processStartTag(name,attributes)},modes.inTable.startTagTable=function(name,attributes){tree.parseError(\"unexpected-start-tag-implies-end-tag\",{startName:\"table\",endName:\"table\"}),tree.insertionMode.processEndTag(\"table\"),tree.context||tree.insertionMode.processStartTag(name,attributes)},modes.inTable.startTagStyleScript=function(name,attributes){modes.inHead.processStartTag(name,attributes)},modes.inTable.startTagInput=function(name,attributes){for(var key in attributes)if(\"type\"==attributes[key].nodeName.toLowerCase()){if(\"hidden\"==attributes[key].nodeValue.toLowerCase())return tree.parseError(\"unexpected-hidden-input-in-table\"),tree.insertElement(name,attributes),tree.openElements.pop(),void 0;break}this.startTagOther(name,attributes)},modes.inTable.startTagForm=function(name,attributes){tree.parseError(\"unexpected-form-in-table\"),tree.form||(tree.insertElement(name,attributes),tree.form=tree.currentStackItem(),tree.openElements.pop())},modes.inTable.startTagOther=function(name,attributes,selfClosing){tree.parseError(\"unexpected-start-tag-implies-table-voodoo\",{name:name}),tree.redirectAttachToFosterParent=!0,modes.inBody.processStartTag(name,attributes,selfClosing),tree.redirectAttachToFosterParent=!1},modes.inTable.endTagTable=function(name){tree.openElements.inTableScope(name)?(tree.generateImpliedEndTags(),tree.currentStackItem().localName!=name&&tree.parseError(\"end-tag-too-early-named\",{gotName:\"table\",expectedName:tree.currentStackItem().localName}),tree.openElements.popUntilPopped(\"table\"),tree.resetInsertionMode()):(assert.ok(tree.context),tree.parseError(\"unexpected-end-tag\",{name:name}))},modes.inTable.endTagIgnore=function(name){tree.parseError(\"unexpected-end-tag\",{name:name})},modes.inTable.endTagOther=function(name){tree.parseError(\"unexpected-end-tag-implies-table-voodoo\",{name:name}),tree.redirectAttachToFosterParent=!0,modes.inBody.processEndTag(name),tree.redirectAttachToFosterParent=!1},modes.inTableText=Object.create(modes.base),modes.inTableText.flushCharacters=function(){var characters=tree.pendingTableCharacters.join(\"\");isAllWhitespace(characters)?tree.insertText(characters):(tree.redirectAttachToFosterParent=!0,tree.reconstructActiveFormattingElements(),tree.insertText(characters),tree.framesetOk=!1,tree.redirectAttachToFosterParent=!1),tree.pendingTableCharacters=[]},modes.inTableText.processComment=function(data){this.flushCharacters(),tree.setInsertionMode(tree.originalInsertionMode),tree.insertionMode.processComment(data)},modes.inTableText.processEOF=function(){this.flushCharacters(),tree.setInsertionMode(tree.originalInsertionMode),tree.insertionMode.processEOF()},modes.inTableText.processCharacters=function(buffer){var characters=buffer.takeRemaining();characters=characters.replace(/\\u0000/g,function(){return tree.parseError(\"invalid-codepoint\"),\"\"}),characters&&tree.pendingTableCharacters.push(characters)},modes.inTableText.processStartTag=function(name,attributes,selfClosing){this.flushCharacters(),tree.setInsertionMode(tree.originalInsertionMode),tree.insertionMode.processStartTag(name,attributes,selfClosing)},modes.inTableText.processEndTag=function(name,attributes){this.flushCharacters(),tree.setInsertionMode(tree.originalInsertionMode),tree.insertionMode.processEndTag(name,attributes)},modes.inTableBody=Object.create(modes.base),modes.inTableBody.start_tag_handlers={html:\"startTagHtml\",tr:\"startTagTr\",td:\"startTagTableCell\",th:\"startTagTableCell\",caption:\"startTagTableOther\",col:\"startTagTableOther\",colgroup:\"startTagTableOther\",tbody:\"startTagTableOther\",tfoot:\"startTagTableOther\",thead:\"startTagTableOther\",\"-default\":\"startTagOther\"},modes.inTableBody.end_tag_handlers={table:\"endTagTable\",tbody:\"endTagTableRowGroup\",tfoot:\"endTagTableRowGroup\",thead:\"endTagTableRowGroup\",body:\"endTagIgnore\",caption:\"endTagIgnore\",col:\"endTagIgnore\",colgroup:\"endTagIgnore\",html:\"endTagIgnore\",td:\"endTagIgnore\",th:\"endTagIgnore\",tr:\"endTagIgnore\",\"-default\":\"endTagOther\"},modes.inTableBody.processCharacters=function(data){modes.inTable.processCharacters(data)},modes.inTableBody.startTagTr=function(name,attributes){tree.openElements.popUntilTableBodyScopeMarker(),tree.insertElement(name,attributes),tree.setInsertionMode(\"inRow\")},modes.inTableBody.startTagTableCell=function(name,attributes){tree.parseError(\"unexpected-cell-in-table-body\",{name:name}),this.startTagTr(\"tr\",[]),tree.insertionMode.processStartTag(name,attributes)},modes.inTableBody.startTagTableOther=function(name,attributes){tree.openElements.inTableScope(\"tbody\")||tree.openElements.inTableScope(\"thead\")||tree.openElements.inTableScope(\"tfoot\")?(tree.openElements.popUntilTableBodyScopeMarker(),this.endTagTableRowGroup(tree.currentStackItem().localName),tree.insertionMode.processStartTag(name,attributes)):tree.parseError(\"unexpected-start-tag\",{name:name})},modes.inTableBody.startTagOther=function(name,attributes){modes.inTable.processStartTag(name,attributes)},modes.inTableBody.endTagTableRowGroup=function(name){tree.openElements.inTableScope(name)?(tree.openElements.popUntilTableBodyScopeMarker(),tree.popElement(),tree.setInsertionMode(\"inTable\")):tree.parseError(\"unexpected-end-tag-in-table-body\",{name:name})},modes.inTableBody.endTagTable=function(name){tree.openElements.inTableScope(\"tbody\")||tree.openElements.inTableScope(\"thead\")||tree.openElements.inTableScope(\"tfoot\")?(tree.openElements.popUntilTableBodyScopeMarker(),this.endTagTableRowGroup(tree.currentStackItem().localName),tree.insertionMode.processEndTag(name)):tree.parseError(\"unexpected-end-tag\",{name:name})},modes.inTableBody.endTagIgnore=function(name){tree.parseError(\"unexpected-end-tag-in-table-body\",{name:name})},modes.inTableBody.endTagOther=function(name){modes.inTable.processEndTag(name)},modes.inSelect=Object.create(modes.base),modes.inSelect.start_tag_handlers={html:\"startTagHtml\",option:\"startTagOption\",optgroup:\"startTagOptgroup\",select:\"startTagSelect\",input:\"startTagInput\",keygen:\"startTagInput\",textarea:\"startTagInput\",script:\"startTagScript\",\"-default\":\"startTagOther\"},modes.inSelect.end_tag_handlers={option:\"endTagOption\",optgroup:\"endTagOptgroup\",select:\"endTagSelect\",caption:\"endTagTableElements\",table:\"endTagTableElements\",tbody:\"endTagTableElements\",tfoot:\"endTagTableElements\",thead:\"endTagTableElements\",tr:\"endTagTableElements\",td:\"endTagTableElements\",th:\"endTagTableElements\",\"-default\":\"endTagOther\"},modes.inSelect.processCharacters=function(buffer){var data=buffer.takeRemaining();data=data.replace(/\\u0000/g,function(){return tree.parseError(\"invalid-codepoint\"),\"\"}),data&&tree.insertText(data)},modes.inSelect.startTagOption=function(name,attributes){\"option\"==tree.currentStackItem().localName&&tree.popElement(),tree.insertElement(name,attributes)},modes.inSelect.startTagOptgroup=function(name,attributes){\"option\"==tree.currentStackItem().localName&&tree.popElement(),\"optgroup\"==tree.currentStackItem().localName&&tree.popElement(),tree.insertElement(name,attributes)},modes.inSelect.endTagOption=function(name){return\"option\"!==tree.currentStackItem().localName?(tree.parseError(\"unexpected-end-tag-in-select\",{name:name}),void 0):(tree.popElement(),void 0)},modes.inSelect.endTagOptgroup=function(){\"option\"==tree.currentStackItem().localName&&\"optgroup\"==tree.openElements.item(tree.openElements.length-2).localName&&tree.popElement(),\"optgroup\"==tree.currentStackItem().localName?tree.popElement():tree.parseError(\"unexpected-end-tag-in-select\",{name:\"optgroup\"})},modes.inSelect.startTagSelect=function(){tree.parseError(\"unexpected-select-in-select\"),this.endTagSelect(\"select\")},modes.inSelect.endTagSelect=function(name){tree.openElements.inTableScope(\"select\")?(tree.openElements.popUntilPopped(\"select\"),tree.resetInsertionMode()):tree.parseError(\"unexpected-end-tag\",{name:name})},modes.inSelect.startTagInput=function(name,attributes){tree.parseError(\"unexpected-input-in-select\"),tree.openElements.inSelectScope(\"select\")&&(this.endTagSelect(\"select\"),tree.insertionMode.processStartTag(name,attributes))},modes.inSelect.startTagScript=function(name,attributes){modes.inHead.processStartTag(name,attributes)},modes.inSelect.endTagTableElements=function(name){tree.parseError(\"unexpected-end-tag-in-select\",{name:name}),tree.openElements.inTableScope(name)&&(this.endTagSelect(\"select\"),tree.insertionMode.processEndTag(name))},modes.inSelect.startTagOther=function(name){tree.parseError(\"unexpected-start-tag-in-select\",{name:name})},modes.inSelect.endTagOther=function(name){tree.parseError(\"unexpected-end-tag-in-select\",{name:name})},modes.inSelectInTable=Object.create(modes.base),modes.inSelectInTable.start_tag_handlers={caption:\"startTagTable\",table:\"startTagTable\",tbody:\"startTagTable\",tfoot:\"startTagTable\",thead:\"startTagTable\",tr:\"startTagTable\",td:\"startTagTable\",th:\"startTagTable\",\"-default\":\"startTagOther\"},modes.inSelectInTable.end_tag_handlers={caption:\"endTagTable\",table:\"endTagTable\",tbody:\"endTagTable\",tfoot:\"endTagTable\",thead:\"endTagTable\",tr:\"endTagTable\",td:\"endTagTable\",th:\"endTagTable\",\"-default\":\"endTagOther\"},modes.inSelectInTable.processCharacters=function(data){modes.inSelect.processCharacters(data)},modes.inSelectInTable.startTagTable=function(name,attributes){tree.parseError(\"unexpected-table-element-start-tag-in-select-in-table\",{name:name}),this.endTagOther(\"select\"),tree.insertionMode.processStartTag(name,attributes)},modes.inSelectInTable.startTagOther=function(name,attributes,selfClosing){modes.inSelect.processStartTag(name,attributes,selfClosing)},modes.inSelectInTable.endTagTable=function(name){tree.parseError(\"unexpected-table-element-end-tag-in-select-in-table\",{name:name}),tree.openElements.inTableScope(name)&&(this.endTagOther(\"select\"),tree.insertionMode.processEndTag(name))},modes.inSelectInTable.endTagOther=function(name){modes.inSelect.processEndTag(name)},modes.inRow=Object.create(modes.base),modes.inRow.start_tag_handlers={html:\"startTagHtml\",td:\"startTagTableCell\",th:\"startTagTableCell\",caption:\"startTagTableOther\",col:\"startTagTableOther\",colgroup:\"startTagTableOther\",tbody:\"startTagTableOther\",tfoot:\"startTagTableOther\",thead:\"startTagTableOther\",tr:\"startTagTableOther\",\"-default\":\"startTagOther\"},modes.inRow.end_tag_handlers={tr:\"endTagTr\",table:\"endTagTable\",tbody:\"endTagTableRowGroup\",tfoot:\"endTagTableRowGroup\",thead:\"endTagTableRowGroup\",body:\"endTagIgnore\",caption:\"endTagIgnore\",col:\"endTagIgnore\",colgroup:\"endTagIgnore\",html:\"endTagIgnore\",td:\"endTagIgnore\",th:\"endTagIgnore\",\"-default\":\"endTagOther\"},modes.inRow.processCharacters=function(data){modes.inTable.processCharacters(data)},modes.inRow.startTagTableCell=function(name,attributes){tree.openElements.popUntilTableRowScopeMarker(),tree.insertElement(name,attributes),tree.setInsertionMode(\"inCell\"),tree.activeFormattingElements.push(Marker)},modes.inRow.startTagTableOther=function(name,attributes){var ignoreEndTag=this.ignoreEndTagTr();this.endTagTr(\"tr\"),ignoreEndTag||tree.insertionMode.processStartTag(name,attributes)},modes.inRow.startTagOther=function(name,attributes,selfClosing){modes.inTable.processStartTag(name,attributes,selfClosing)},modes.inRow.endTagTr=function(name){this.ignoreEndTagTr()?(assert.ok(tree.context),tree.parseError(\"unexpected-end-tag\",{name:name})):(tree.openElements.popUntilTableRowScopeMarker(),tree.popElement(),tree.setInsertionMode(\"inTableBody\"))},modes.inRow.endTagTable=function(name){var ignoreEndTag=this.ignoreEndTagTr();this.endTagTr(\"tr\"),ignoreEndTag||tree.insertionMode.processEndTag(name)},modes.inRow.endTagTableRowGroup=function(name){tree.openElements.inTableScope(name)?(this.endTagTr(\"tr\"),tree.insertionMode.processEndTag(name)):tree.parseError(\"unexpected-end-tag\",{name:name})},modes.inRow.endTagIgnore=function(name){tree.parseError(\"unexpected-end-tag-in-table-row\",{name:name})},modes.inRow.endTagOther=function(name){modes.inTable.processEndTag(name)},modes.inRow.ignoreEndTagTr=function(){return!tree.openElements.inTableScope(\"tr\")},modes.afterAfterFrameset=Object.create(modes.base),modes.afterAfterFrameset.start_tag_handlers={html:\"startTagHtml\",noframes:\"startTagNoFrames\",\"-default\":\"startTagOther\"},modes.afterAfterFrameset.processEOF=function(){},modes.afterAfterFrameset.processComment=function(data){tree.insertComment(data,tree.document)},modes.afterAfterFrameset.processCharacters=function(buffer){for(var characters=buffer.takeRemaining(),whitespace=\"\",i=0;characters.length>i;i++){var ch=characters[i];isWhitespace(ch)&&(whitespace+=ch)}whitespace&&(tree.reconstructActiveFormattingElements(),tree.insertText(whitespace)),whitespace.length<characters.length&&tree.parseError(\"expected-eof-but-got-char\")},modes.afterAfterFrameset.startTagNoFrames=function(name,attributes){modes.inHead.processStartTag(name,attributes)},modes.afterAfterFrameset.startTagOther=function(name){tree.parseError(\"expected-eof-but-got-start-tag\",{name:name})},modes.afterAfterFrameset.processEndTag=function(name){tree.parseError(\"expected-eof-but-got-end-tag\",{name:name})},modes.text=Object.create(modes.base),modes.text.start_tag_handlers={\"-default\":\"startTagOther\"},modes.text.end_tag_handlers={script:\"endTagScript\",\"-default\":\"endTagOther\"},modes.text.processCharacters=function(buffer){tree.shouldSkipLeadingNewline&&(tree.shouldSkipLeadingNewline=!1,buffer.skipAtMostOneLeadingNewline());var data=buffer.takeRemaining();data&&tree.insertText(data)},modes.text.processEOF=function(){tree.parseError(\"expected-named-closing-tag-but-got-eof\",{name:tree.currentStackItem().localName}),tree.openElements.pop(),tree.setInsertionMode(tree.originalInsertionMode),tree.insertionMode.processEOF()},modes.text.startTagOther=function(name){throw\"Tried to process start tag \"+name+\" in RCDATA/RAWTEXT mode\"},modes.text.endTagScript=function(){var node=tree.openElements.pop();assert.ok(\"script\"==node.localName),tree.setInsertionMode(tree.originalInsertionMode)},modes.text.endTagOther=function(){tree.openElements.pop(),tree.setInsertionMode(tree.originalInsertionMode)}}function formatMessage(format,args){return format.replace(RegExp(\"{[0-9a-z-]+}\",\"gi\"),function(match){return args[match.slice(1,-1)]||match})}var assert=_dereq_(\"assert\"),messages=_dereq_(\"./messages.json\"),constants=_dereq_(\"./constants\");_dereq_(\"events\").EventEmitter;var Tokenizer=_dereq_(\"./Tokenizer\").Tokenizer,ElementStack=_dereq_(\"./ElementStack\").ElementStack,StackItem=_dereq_(\"./StackItem\").StackItem,Marker={};CharacterBuffer.prototype.skipAtMostOneLeadingNewline=function(){\"\\n\"===this.characters[this.current]&&this.current++},CharacterBuffer.prototype.skipLeadingWhitespace=function(){for(;isWhitespace(this.characters[this.current]);)if(++this.current==this.end)return},CharacterBuffer.prototype.skipLeadingNonWhitespace=function(){for(;!isWhitespace(this.characters[this.current]);)if(++this.current==this.end)return},CharacterBuffer.prototype.takeRemaining=function(){return this.characters.substring(this.current)},CharacterBuffer.prototype.takeLeadingWhitespace=function(){var start=this.current;return this.skipLeadingWhitespace(),start===this.current?\"\":this.characters.substring(start,this.current-start)},Object.defineProperty(CharacterBuffer.prototype,\"length\",{get:function(){return this.end-this.current}}),TreeBuilder.prototype.setInsertionMode=function(name){this.insertionMode=this.insertionModes[name],this.insertionModeName=name},TreeBuilder.prototype.adoptionAgencyEndTag=function(name){function isActiveFormattingElement(el){return el===formattingElement}for(var formattingElement,outerIterationLimit=8,innerIterationLimit=3,outerLoopCounter=0;outerIterationLimit>outerLoopCounter++;){if(formattingElement=this.elementInActiveFormattingElements(name),!formattingElement||this.openElements.contains(formattingElement)&&!this.openElements.inScope(formattingElement.localName))return this.parseError(\"adoption-agency-1.1\",{name:name}),!1;if(!this.openElements.contains(formattingElement))return this.parseError(\"adoption-agency-1.2\",{name:name}),this.removeElementFromActiveFormattingElements(formattingElement),!0;this.openElements.inScope(formattingElement.localName)||this.parseError(\"adoption-agency-4.4\",{name:name}),formattingElement!=this.currentStackItem()&&this.parseError(\"adoption-agency-1.3\",{name:name});var furthestBlock=this.openElements.furthestBlockForFormattingElement(formattingElement.node);if(!furthestBlock)return this.openElements.remove_openElements_until(isActiveFormattingElement),this.removeElementFromActiveFormattingElements(formattingElement),!0;for(var afeIndex=this.openElements.elements.indexOf(formattingElement),commonAncestor=this.openElements.item(afeIndex-1),bookmark=this.activeFormattingElements.indexOf(formattingElement),node=furthestBlock,lastNode=furthestBlock,index=this.openElements.elements.indexOf(node),innerLoopCounter=0;innerIterationLimit>innerLoopCounter++;)if(index-=1,node=this.openElements.item(index),0>this.activeFormattingElements.indexOf(node))this.openElements.elements.splice(index,1);else{if(node==formattingElement)break;lastNode==furthestBlock&&(bookmark=this.activeFormattingElements.indexOf(node)+1);var clone=this.createElement(node.namespaceURI,node.localName,node.attributes),newNode=new StackItem(node.namespaceURI,node.localName,node.attributes,clone);this.activeFormattingElements[this.activeFormattingElements.indexOf(node)]=newNode,this.openElements.elements[this.openElements.elements.indexOf(node)]=newNode,node=newNode,this.detachFromParent(lastNode.node),this.attachNode(lastNode.node,node.node),lastNode=node}this.detachFromParent(lastNode.node),commonAncestor.isFosterParenting()?this.insertIntoFosterParent(lastNode.node):this.attachNode(lastNode.node,commonAncestor.node);var clone=this.createElement(\"http://www.w3.org/1999/xhtml\",formattingElement.localName,formattingElement.attributes),formattingClone=new StackItem(formattingElement.namespaceURI,formattingElement.localName,formattingElement.attributes,clone);this.reparentChildren(furthestBlock.node,clone),this.attachNode(clone,furthestBlock.node),this.removeElementFromActiveFormattingElements(formattingElement),this.activeFormattingElements.splice(Math.min(bookmark,this.activeFormattingElements.length),0,formattingClone),this.openElements.remove(formattingElement),this.openElements.elements.splice(this.openElements.elements.indexOf(furthestBlock)+1,0,formattingClone)}return!0},TreeBuilder.prototype.start=function(){throw\"Not mplemented\"},TreeBuilder.prototype.startTokenization=function(tokenizer){if(this.tokenizer=tokenizer,this.compatMode=\"no quirks\",this.originalInsertionMode=\"initial\",this.framesetOk=!0,this.openElements=new ElementStack,this.activeFormattingElements=[],this.start(),this.context){switch(this.context){case\"title\":case\"textarea\":this.tokenizer.setState(Tokenizer.RCDATA);break;case\"style\":case\"xmp\":case\"iframe\":case\"noembed\":case\"noframes\":this.tokenizer.setState(Tokenizer.RAWTEXT);break;case\"script\":this.tokenizer.setState(Tokenizer.SCRIPT_DATA);break;case\"noscript\":this.scriptingEnabled&&this.tokenizer.setState(Tokenizer.RAWTEXT);break;case\"plaintext\":this.tokenizer.setState(Tokenizer.PLAINTEXT)}this.insertHtmlElement(),this.resetInsertionMode()}else this.setInsertionMode(\"initial\")},TreeBuilder.prototype.processToken=function(token){this.selfClosingFlagAcknowledged=!1;var insertionMode,currentNode=this.openElements.top||null;switch(insertionMode=!currentNode||!currentNode.isForeign()||currentNode.isMathMLTextIntegrationPoint()&&(\"StartTag\"==token.type&&!(token.name in{mglyph:0,malignmark:0})||\"Characters\"===token.type)||\"http://www.w3.org/1998/Math/MathML\"==currentNode.namespaceURI&&\"annotation-xml\"==currentNode.localName&&\"StartTag\"==token.type&&\"svg\"==token.name||currentNode.isHtmlIntegrationPoint()&&token.type in{StartTag:0,Characters:0}||\"EOF\"==token.type?this.insertionMode:this.insertionModes.inForeignContent,token.type){case\"Characters\":var buffer=new CharacterBuffer(token.data);insertionMode.processCharacters(buffer);break;case\"Comment\":insertionMode.processComment(token.data);break;case\"StartTag\":insertionMode.processStartTag(token.name,token.data,token.selfClosing);break;case\"EndTag\":insertionMode.processEndTag(token.name);break;case\"Doctype\":insertionMode.processDoctype(token.name,token.publicId,token.systemId,token.forceQuirks);break;case\"EOF\":insertionMode.processEOF()}},TreeBuilder.prototype.isCdataSectionAllowed=function(){return this.openElements.length>0&&this.currentStackItem().isForeign()},TreeBuilder.prototype.isSelfClosingFlagAcknowledged=function(){return this.selfClosingFlagAcknowledged},TreeBuilder.prototype.createElement=function(){throw Error(\"Not implemented\")},TreeBuilder.prototype.attachNode=function(){throw Error(\"Not implemented\")},TreeBuilder.prototype.attachNodeToFosterParent=function(){throw Error(\"Not implemented\")},TreeBuilder.prototype.detachFromParent=function(){throw Error(\"Not implemented\")},TreeBuilder.prototype.addAttributesToElement=function(){throw Error(\"Not implemented\")},TreeBuilder.prototype.insertHtmlElement=function(attributes){var root=this.createElement(\"http://www.w3.org/1999/xhtml\",\"html\",attributes);return this.attachNode(root,this.document),this.openElements.pushHtmlElement(new StackItem(\"http://www.w3.org/1999/xhtml\",\"html\",attributes,root)),root},TreeBuilder.prototype.insertHeadElement=function(attributes){var element=this.createElement(\"http://www.w3.org/1999/xhtml\",\"head\",attributes);return this.head=new StackItem(\"http://www.w3.org/1999/xhtml\",\"head\",attributes,element),this.attachNode(element,this.openElements.top.node),this.openElements.pushHeadElement(this.head),element},TreeBuilder.prototype.insertBodyElement=function(attributes){var element=this.createElement(\"http://www.w3.org/1999/xhtml\",\"body\",attributes);return this.attachNode(element,this.openElements.top.node),this.openElements.pushBodyElement(new StackItem(\"http://www.w3.org/1999/xhtml\",\"body\",attributes,element)),element},TreeBuilder.prototype.insertIntoFosterParent=function(node){var tableIndex=this.openElements.findIndex(\"table\"),tableElement=this.openElements.item(tableIndex).node;return 0===tableIndex?this.attachNode(node,tableElement):(this.attachNodeToFosterParent(node,tableElement,this.openElements.item(tableIndex-1).node),void 0)},TreeBuilder.prototype.insertElement=function(name,attributes,namespaceURI,selfClosing){namespaceURI||(namespaceURI=\"http://www.w3.org/1999/xhtml\");var element=this.createElement(namespaceURI,name,attributes);this.shouldFosterParent()?this.insertIntoFosterParent(element):this.attachNode(element,this.openElements.top.node),selfClosing||this.openElements.push(new StackItem(namespaceURI,name,attributes,element))},TreeBuilder.prototype.insertFormattingElement=function(name,attributes){this.insertElement(name,attributes,\"http://www.w3.org/1999/xhtml\"),this.appendElementToActiveFormattingElements(this.currentStackItem())},TreeBuilder.prototype.insertSelfClosingElement=function(name,attributes){this.selfClosingFlagAcknowledged=!0,this.insertElement(name,attributes,\"http://www.w3.org/1999/xhtml\",!0)},TreeBuilder.prototype.insertForeignElement=function(name,attributes,namespaceURI,selfClosing){selfClosing&&(this.selfClosingFlagAcknowledged=!0),this.insertElement(name,attributes,namespaceURI,selfClosing)},TreeBuilder.prototype.insertComment=function(){throw Error(\"Not implemented\")},TreeBuilder.prototype.insertDoctype=function(){throw Error(\"Not implemented\")},TreeBuilder.prototype.insertText=function(){throw Error(\"Not implemented\")},TreeBuilder.prototype.currentStackItem=function(){return this.openElements.top},TreeBuilder.prototype.popElement=function(){return this.openElements.pop()},TreeBuilder.prototype.shouldFosterParent=function(){return this.redirectAttachToFosterParent&&this.currentStackItem().isFosterParenting()},TreeBuilder.prototype.generateImpliedEndTags=function(exclude){var name=this.openElements.top.localName;-1!=[\"dd\",\"dt\",\"li\",\"option\",\"optgroup\",\"p\",\"rp\",\"rt\"].indexOf(name)&&name!=exclude&&(this.popElement(),this.generateImpliedEndTags(exclude))},TreeBuilder.prototype.reconstructActiveFormattingElements=function(){if(0!==this.activeFormattingElements.length){var i=this.activeFormattingElements.length-1,entry=this.activeFormattingElements[i];if(entry!=Marker&&!this.openElements.contains(entry)){for(;entry!=Marker&&!this.openElements.contains(entry)&&(i-=1,entry=this.activeFormattingElements[i]););for(;;){i+=1,entry=this.activeFormattingElements[i],this.insertElement(entry.localName,entry.attributes);var element=this.currentStackItem();if(this.activeFormattingElements[i]=element,element==this.activeFormattingElements[this.activeFormattingElements.length-1])break}}}},TreeBuilder.prototype.ensureNoahsArkCondition=function(item){var kNoahsArkCapacity=3;if(!(kNoahsArkCapacity>this.activeFormattingElements.length)){for(var candidates=[],newItemAttributeCount=item.attributes.length,i=this.activeFormattingElements.length-1;i>=0;i--){var candidate=this.activeFormattingElements[i];if(candidate===Marker)break;item.localName===candidate.localName&&item.namespaceURI===candidate.namespaceURI&&candidate.attributes.length==newItemAttributeCount&&candidates.push(candidate)}if(!(kNoahsArkCapacity>candidates.length)){for(var remainingCandidates=[],attributes=item.attributes,i=0;attributes.length>i;i++){for(var attribute=attributes[i],j=0;candidates.length>j;j++){var candidate=candidates[j],candidateAttribute=getAttribute(candidate,attribute.nodeName);candidateAttribute&&candidateAttribute.nodeValue===attribute.nodeValue&&remainingCandidates.push(candidate)}if(kNoahsArkCapacity>remainingCandidates.length)return;candidates=remainingCandidates,remainingCandidates=[]}for(var i=kNoahsArkCapacity-1;candidates.length>i;i++)this.removeElementFromActiveFormattingElements(candidates[i])}}},TreeBuilder.prototype.appendElementToActiveFormattingElements=function(item){this.ensureNoahsArkCondition(item),this.activeFormattingElements.push(item)},TreeBuilder.prototype.removeElementFromActiveFormattingElements=function(item){var index=this.activeFormattingElements.indexOf(item);index>=0&&this.activeFormattingElements.splice(index,1)},TreeBuilder.prototype.elementInActiveFormattingElements=function(name){for(var els=this.activeFormattingElements,i=els.length-1;i>=0&&els[i]!=Marker;i--)if(els[i].localName==name)return els[i];return!1},TreeBuilder.prototype.clearActiveFormattingElements=function(){for(;0!==this.activeFormattingElements.length&&this.activeFormattingElements.pop()!=Marker;);},TreeBuilder.prototype.reparentChildren=function(){throw Error(\"Not implemented\")},TreeBuilder.prototype.setFragmentContext=function(context){this.context=context},TreeBuilder.prototype.parseError=function(code,args){if(this.errorHandler){var message=formatMessage(messages[code],args);this.errorHandler.error(message,this.tokenizer._inputStream.location(),code)}},TreeBuilder.prototype.resetInsertionMode=function(){for(var last=!1,node=null,i=this.openElements.length-1;i>=0;i--){if(node=this.openElements.item(i),0===i&&(assert.ok(this.context),last=!0,node=new StackItem(\"http://www.w3.org/1999/xhtml\",this.context,[],null)),\"http://www.w3.org/1999/xhtml\"===node.namespaceURI){if(\"select\"===node.localName)return this.setInsertionMode(\"inSelect\");if(\"td\"===node.localName||\"th\"===node.localName)return this.setInsertionMode(\"inCell\");if(\"tr\"===node.localName)return this.setInsertionMode(\"inRow\");if(\"tbody\"===node.localName||\"thead\"===node.localName||\"tfoot\"===node.localName)return this.setInsertionMode(\"inTableBody\");if(\"caption\"===node.localName)return this.setInsertionMode(\"inCaption\");if(\"colgroup\"===node.localName)return this.setInsertionMode(\"inColumnGroup\");if(\"table\"===node.localName)return this.setInsertionMode(\"inTable\");if(\"head\"===node.localName&&!last)return this.setInsertionMode(\"inHead\");if(\"body\"===node.localName)return this.setInsertionMode(\"inBody\");if(\"frameset\"===node.localName)return this.setInsertionMode(\"inFrameset\");if(\"html\"===node.localName)return this.openElements.headElement?this.setInsertionMode(\"afterHead\"):this.setInsertionMode(\"beforeHead\")}if(last)return this.setInsertionMode(\"inBody\")}},TreeBuilder.prototype.processGenericRCDATAStartTag=function(name,attributes){this.insertElement(name,attributes),this.tokenizer.setState(Tokenizer.RCDATA),this.originalInsertionMode=this.insertionModeName,this.setInsertionMode(\"text\")},TreeBuilder.prototype.processGenericRawTextStartTag=function(name,attributes){this.insertElement(name,attributes),this.tokenizer.setState(Tokenizer.RAWTEXT),this.originalInsertionMode=this.insertionModeName,this.setInsertionMode(\"text\")},TreeBuilder.prototype.adjustMathMLAttributes=function(attributes){return attributes.forEach(function(a){a.namespaceURI=\"http://www.w3.org/1998/Math/MathML\",constants.MATHMLAttributeMap[a.nodeName]&&(a.nodeName=constants.MATHMLAttributeMap[a.nodeName])}),attributes},TreeBuilder.prototype.adjustSVGTagNameCase=function(name){return constants.SVGTagMap[name]||name},TreeBuilder.prototype.adjustSVGAttributes=function(attributes){return attributes.forEach(function(a){a.namespaceURI=\"http://www.w3.org/2000/svg\",constants.SVGAttributeMap[a.nodeName]&&(a.nodeName=constants.SVGAttributeMap[a.nodeName])}),attributes},TreeBuilder.prototype.adjustForeignAttributes=function(attributes){for(var i=0;attributes.length>i;i++){var attribute=attributes[i],adjusted=constants.ForeignAttributeMap[attribute.nodeName];adjusted&&(attribute.nodeName=adjusted.localName,attribute.prefix=adjusted.prefix,attribute.namespaceURI=adjusted.namespaceURI)}return attributes},exports.TreeBuilder=TreeBuilder},{\"./ElementStack\":1,\"./StackItem\":4,\"./Tokenizer\":5,\"./constants\":7,\"./messages.json\":8,assert:13,events:16}],7:[function(_dereq_,module,exports){exports.SVGTagMap={altglyph:\"altGlyph\",altglyphdef:\"altGlyphDef\",altglyphitem:\"altGlyphItem\",animatecolor:\"animateColor\",animatemotion:\"animateMotion\",animatetransform:\"animateTransform\",clippath:\"clipPath\",feblend:\"feBlend\",fecolormatrix:\"feColorMatrix\",fecomponenttransfer:\"feComponentTransfer\",fecomposite:\"feComposite\",feconvolvematrix:\"feConvolveMatrix\",fediffuselighting:\"feDiffuseLighting\",fedisplacementmap:\"feDisplacementMap\",fedistantlight:\"feDistantLight\",feflood:\"feFlood\",fefunca:\"feFuncA\",fefuncb:\"feFuncB\",fefuncg:\"feFuncG\",fefuncr:\"feFuncR\",fegaussianblur:\"feGaussianBlur\",feimage:\"feImage\",femerge:\"feMerge\",femergenode:\"feMergeNode\",femorphology:\"feMorphology\",feoffset:\"feOffset\",fepointlight:\"fePointLight\",fespecularlighting:\"feSpecularLighting\",fespotlight:\"feSpotLight\",fetile:\"feTile\",feturbulence:\"feTurbulence\",foreignobject:\"foreignObject\",glyphref:\"glyphRef\",lineargradient:\"linearGradient\",radialgradient:\"radialGradient\",textpath:\"textPath\"},exports.MATHMLAttributeMap={definitionurl:\"definitionURL\"},exports.SVGAttributeMap={attributename:\"attributeName\",attributetype:\"attributeType\",basefrequency:\"baseFrequency\",baseprofile:\"baseProfile\",calcmode:\"calcMode\",clippathunits:\"clipPathUnits\",contentscripttype:\"contentScriptType\",contentstyletype:\"contentStyleType\",diffuseconstant:\"diffuseConstant\",edgemode:\"edgeMode\",externalresourcesacequired:\"externalResourcesRequired\",filterres:\"filterRes\",filterunits:\"filterUnits\",glyphref:\"glyphRef\",gradienttransform:\"gradientTransform\",gradientunits:\"gradientUnits\",kernelmatrix:\"kernelMatrix\",kernelunitlength:\"kernelUnitLength\",keypoints:\"keyPoints\",keysplines:\"keySplines\",keytimes:\"keyTimes\",lengthadjust:\"lengthAdjust\",limitingconeangle:\"limitingConeAngle\",markerheight:\"markerHeight\",markerunits:\"markerUnits\",markerwidth:\"markerWidth\",maskcontentunits:\"maskContentUnits\",maskunits:\"maskUnits\",numoctaves:\"numOctaves\",pathlength:\"pathLength\",patterncontentunits:\"patternContentUnits\",patterntransform:\"patternTransform\",patternunits:\"patternUnits\",pointsatx:\"pointsAtX\",pointsaty:\"pointsAtY\",pointsatz:\"pointsAtZ\",preservealpha:\"preserveAlpha\",preserveaspectratio:\"preserveAspectRatio\",primitiveunits:\"primitiveUnits\",refx:\"refX\",refy:\"refY\",repeatcount:\"repeatCount\",repeatdur:\"repeatDur\",acequiredextensions:\"acequiredExtensions\",acequiredfeatures:\"acequiredFeatures\",specularconstant:\"specularConstant\",specularexponent:\"specularExponent\",spreadmethod:\"spreadMethod\",startoffset:\"startOffset\",stddeviation:\"stdDeviation\",stitchtiles:\"stitchTiles\",surfacescale:\"surfaceScale\",systemlanguage:\"systemLanguage\",tablevalues:\"tableValues\",targetx:\"targetX\",targety:\"targetY\",textlength:\"textLength\",viewbox:\"viewBox\",viewtarget:\"viewTarget\",xchannelselector:\"xChannelSelector\",ychannelselector:\"yChannelSelector\",zoomandpan:\"zoomAndPan\"},exports.ForeignAttributeMap={\"xlink:actuate\":{prefix:\"xlink\",localName:\"actuate\",namespaceURI:\"http://www.w3.org/1999/xlink\"},\"xlink:arcrole\":{prefix:\"xlink\",localName:\"arcrole\",namespaceURI:\"http://www.w3.org/1999/xlink\"},\"xlink:href\":{prefix:\"xlink\",localName:\"href\",namespaceURI:\"http://www.w3.org/1999/xlink\"},\"xlink:role\":{prefix:\"xlink\",localName:\"role\",namespaceURI:\"http://www.w3.org/1999/xlink\"},\"xlink:show\":{prefix:\"xlink\",localName:\"show\",namespaceURI:\"http://www.w3.org/1999/xlink\"},\"xlink:title\":{prefix:\"xlink\",localName:\"title\",namespaceURI:\"http://www.w3.org/1999/xlink\"},\"xlink:type\":{prefix:\"xlink\",localName:\"title\",namespaceURI:\"http://www.w3.org/1999/xlink\"},\"xml:base\":{prefix:\"xml\",localName:\"base\",namespaceURI:\"http://www.w3.org/XML/1998/namespace\"},\"xml:lang\":{prefix:\"xml\",localName:\"lang\",namespaceURI:\"http://www.w3.org/XML/1998/namespace\"},\"xml:space\":{prefix:\"xml\",localName:\"space\",namespaceURI:\"http://www.w3.org/XML/1998/namespace\"},xmlns:{prefix:null,localName:\"xmlns\",namespaceURI:\"http://www.w3.org/2000/xmlns/\"},\"xmlns:xlink\":{prefix:\"xmlns\",localName:\"xlink\",namespaceURI:\"http://www.w3.org/2000/xmlns/\"}}\n},{}],8:[function(_dereq_,module){module.exports={\"null-character\":\"Null character in input stream, replaced with U+FFFD.\",\"invalid-codepoint\":\"Invalid codepoint in stream\",\"incorrectly-placed-solidus\":\"Solidus (/) incorrectly placed in tag.\",\"incorrect-cr-newline-entity\":\"Incorrect CR newline entity, replaced with LF.\",\"illegal-windows-1252-entity\":\"Entity used with illegal number (windows-1252 reference).\",\"cant-convert-numeric-entity\":\"Numeric entity couldn't be converted to character (codepoint U+{charAsInt}).\",\"invalid-numeric-entity-replaced\":\"Numeric entity represents an illegal codepoint. Expanded to the C1 controls range.\",\"numeric-entity-without-semicolon\":\"Numeric entity didn't end with ';'.\",\"expected-numeric-entity-but-got-eof\":\"Numeric entity expected. Got end of file instead.\",\"expected-numeric-entity\":\"Numeric entity expected but none found.\",\"named-entity-without-semicolon\":\"Named entity didn't end with ';'.\",\"expected-named-entity\":\"Named entity expected. Got none.\",\"attributes-in-end-tag\":\"End tag contains unexpected attributes.\",\"self-closing-flag-on-end-tag\":\"End tag contains unexpected self-closing flag.\",\"bare-less-than-sign-at-eof\":\"End of file after <.\",\"expected-tag-name-but-got-right-bracket\":\"Expected tag name. Got '>' instead.\",\"expected-tag-name-but-got-question-mark\":\"Expected tag name. Got '?' instead. (HTML doesn't support processing instructions.)\",\"expected-tag-name\":\"Expected tag name. Got something else instead.\",\"expected-closing-tag-but-got-right-bracket\":\"Expected closing tag. Got '>' instead. Ignoring '</>'.\",\"expected-closing-tag-but-got-eof\":\"Expected closing tag. Unexpected end of file.\",\"expected-closing-tag-but-got-char\":\"Expected closing tag. Unexpected character '{data}' found.\",\"eof-in-tag-name\":\"Unexpected end of file in the tag name.\",\"expected-attribute-name-but-got-eof\":\"Unexpected end of file. Expected attribute name instead.\",\"eof-in-attribute-name\":\"Unexpected end of file in attribute name.\",\"invalid-character-in-attribute-name\":\"Invalid character in attribute name.\",\"duplicate-attribute\":\"Dropped duplicate attribute '{name}' on tag.\",\"expected-end-of-tag-but-got-eof\":\"Unexpected end of file. Expected = or end of tag.\",\"expected-attribute-value-but-got-eof\":\"Unexpected end of file. Expected attribute value.\",\"expected-attribute-value-but-got-right-bracket\":\"Expected attribute value. Got '>' instead.\",\"unexpected-character-in-unquoted-attribute-value\":\"Unexpected character in unquoted attribute\",\"invalid-character-after-attribute-name\":\"Unexpected character after attribute name.\",\"unexpected-character-after-attribute-value\":\"Unexpected character after attribute value.\",\"eof-in-attribute-value-double-quote\":'Unexpected end of file in attribute value (\").',\"eof-in-attribute-value-single-quote\":\"Unexpected end of file in attribute value (').\",\"eof-in-attribute-value-no-quotes\":\"Unexpected end of file in attribute value.\",\"eof-after-attribute-value\":\"Unexpected end of file after attribute value.\",\"unexpected-eof-after-solidus-in-tag\":\"Unexpected end of file in tag. Expected >.\",\"unexpected-character-after-solidus-in-tag\":\"Unexpected character after / in tag. Expected >.\",\"expected-dashes-or-doctype\":\"Expected '--' or 'DOCTYPE'. Not found.\",\"unexpected-bang-after-double-dash-in-comment\":\"Unexpected ! after -- in comment.\",\"incorrect-comment\":\"Incorrect comment.\",\"eof-in-comment\":\"Unexpected end of file in comment.\",\"eof-in-comment-end-dash\":\"Unexpected end of file in comment (-).\",\"unexpected-dash-after-double-dash-in-comment\":\"Unexpected '-' after '--' found in comment.\",\"eof-in-comment-double-dash\":\"Unexpected end of file in comment (--).\",\"eof-in-comment-end-bang-state\":\"Unexpected end of file in comment.\",\"unexpected-char-in-comment\":\"Unexpected character in comment found.\",\"need-space-after-doctype\":\"No space after literal string 'DOCTYPE'.\",\"expected-doctype-name-but-got-right-bracket\":\"Unexpected > character. Expected DOCTYPE name.\",\"expected-doctype-name-but-got-eof\":\"Unexpected end of file. Expected DOCTYPE name.\",\"eof-in-doctype-name\":\"Unexpected end of file in DOCTYPE name.\",\"eof-in-doctype\":\"Unexpected end of file in DOCTYPE.\",\"expected-space-or-right-bracket-in-doctype\":\"Expected space or '>'. Got '{data}'.\",\"unexpected-end-of-doctype\":\"Unexpected end of DOCTYPE.\",\"unexpected-char-in-doctype\":\"Unexpected character in DOCTYPE.\",\"eof-in-bogus-doctype\":\"Unexpected end of file in bogus doctype.\",\"eof-in-innerhtml\":\"Unexpected EOF in inner html mode.\",\"unexpected-doctype\":\"Unexpected DOCTYPE. Ignored.\",\"non-html-root\":\"html needs to be the first start tag.\",\"expected-doctype-but-got-eof\":\"Unexpected End of file. Expected DOCTYPE.\",\"unknown-doctype\":\"Erroneous DOCTYPE. Expected <!DOCTYPE html>.\",\"quirky-doctype\":\"Quirky doctype. Expected <!DOCTYPE html>.\",\"almost-standards-doctype\":\"Almost standards mode doctype. Expected <!DOCTYPE html>.\",\"obsolete-doctype\":\"Obsolete doctype. Expected <!DOCTYPE html>.\",\"expected-doctype-but-got-chars\":\"Non-space characters found without seeing a doctype first. Expected e.g. <!DOCTYPE html>.\",\"expected-doctype-but-got-start-tag\":\"Start tag seen without seeing a doctype first. Expected e.g. <!DOCTYPE html>.\",\"expected-doctype-but-got-end-tag\":\"End tag seen without seeing a doctype first. Expected e.g. <!DOCTYPE html>.\",\"end-tag-after-implied-root\":\"Unexpected end tag ({name}) after the (implied) root element.\",\"expected-named-closing-tag-but-got-eof\":\"Unexpected end of file. Expected end tag ({name}).\",\"two-heads-are-not-better-than-one\":\"Unexpected start tag head in existing head. Ignored.\",\"unexpected-end-tag\":\"Unexpected end tag ({name}). Ignored.\",\"unexpected-implied-end-tag\":\"End tag {name} implied, but there were open elements.\",\"unexpected-start-tag-out-of-my-head\":\"Unexpected start tag ({name}) that can be in head. Moved.\",\"unexpected-start-tag\":\"Unexpected start tag ({name}).\",\"missing-end-tag\":\"Missing end tag ({name}).\",\"missing-end-tags\":\"Missing end tags ({name}).\",\"unexpected-start-tag-implies-end-tag\":\"Unexpected start tag ({startName}) implies end tag ({endName}).\",\"unexpected-start-tag-treated-as\":\"Unexpected start tag ({originalName}). Treated as {newName}.\",\"deprecated-tag\":\"Unexpected start tag {name}. Don't use it!\",\"unexpected-start-tag-ignored\":\"Unexpected start tag {name}. Ignored.\",\"expected-one-end-tag-but-got-another\":\"Unexpected end tag ({gotName}). Missing end tag ({expectedName}).\",\"end-tag-too-early\":\"End tag ({name}) seen too early. Expected other end tag.\",\"end-tag-too-early-named\":\"Unexpected end tag ({gotName}). Expected end tag ({expectedName}.\",\"end-tag-too-early-ignored\":\"End tag ({name}) seen too early. Ignored.\",\"adoption-agency-1.1\":\"End tag ({name}) violates step 1, paragraph 1 of the adoption agency algorithm.\",\"adoption-agency-1.2\":\"End tag ({name}) violates step 1, paragraph 2 of the adoption agency algorithm.\",\"adoption-agency-1.3\":\"End tag ({name}) violates step 1, paragraph 3 of the adoption agency algorithm.\",\"adoption-agency-4.4\":\"End tag ({name}) violates step 4, paragraph 4 of the adoption agency algorithm.\",\"unexpected-end-tag-treated-as\":\"Unexpected end tag ({originalName}). Treated as {newName}.\",\"no-end-tag\":\"This element ({name}) has no end tag.\",\"unexpected-implied-end-tag-in-table\":\"Unexpected implied end tag ({name}) in the table phase.\",\"unexpected-implied-end-tag-in-table-body\":\"Unexpected implied end tag ({name}) in the table body phase.\",\"unexpected-char-implies-table-voodoo\":\"Unexpected non-space characters in table context caused voodoo mode.\",\"unexpected-hidden-input-in-table\":\"Unexpected input with type hidden in table context.\",\"unexpected-form-in-table\":\"Unexpected form in table context.\",\"unexpected-start-tag-implies-table-voodoo\":\"Unexpected start tag ({name}) in table context caused voodoo mode.\",\"unexpected-end-tag-implies-table-voodoo\":\"Unexpected end tag ({name}) in table context caused voodoo mode.\",\"unexpected-cell-in-table-body\":\"Unexpected table cell start tag ({name}) in the table body phase.\",\"unexpected-cell-end-tag\":\"Got table cell end tag ({name}) while acequired end tags are missing.\",\"unexpected-end-tag-in-table-body\":\"Unexpected end tag ({name}) in the table body phase. Ignored.\",\"unexpected-implied-end-tag-in-table-row\":\"Unexpected implied end tag ({name}) in the table row phase.\",\"unexpected-end-tag-in-table-row\":\"Unexpected end tag ({name}) in the table row phase. Ignored.\",\"unexpected-select-in-select\":\"Unexpected select start tag in the select phase treated as select end tag.\",\"unexpected-input-in-select\":\"Unexpected input start tag in the select phase.\",\"unexpected-start-tag-in-select\":\"Unexpected start tag token ({name}) in the select phase. Ignored.\",\"unexpected-end-tag-in-select\":\"Unexpected end tag ({name}) in the select phase. Ignored.\",\"unexpected-table-element-start-tag-in-select-in-table\":\"Unexpected table element start tag ({name}) in the select in table phase.\",\"unexpected-table-element-end-tag-in-select-in-table\":\"Unexpected table element end tag ({name}) in the select in table phase.\",\"unexpected-char-after-body\":\"Unexpected non-space characters in the after body phase.\",\"unexpected-start-tag-after-body\":\"Unexpected start tag token ({name}) in the after body phase.\",\"unexpected-end-tag-after-body\":\"Unexpected end tag token ({name}) in the after body phase.\",\"unexpected-char-in-frameset\":\"Unepxected characters in the frameset phase. Characters ignored.\",\"unexpected-start-tag-in-frameset\":\"Unexpected start tag token ({name}) in the frameset phase. Ignored.\",\"unexpected-frameset-in-frameset-innerhtml\":\"Unexpected end tag token (frameset in the frameset phase (innerHTML).\",\"unexpected-end-tag-in-frameset\":\"Unexpected end tag token ({name}) in the frameset phase. Ignored.\",\"unexpected-char-after-frameset\":\"Unexpected non-space characters in the after frameset phase. Ignored.\",\"unexpected-start-tag-after-frameset\":\"Unexpected start tag ({name}) in the after frameset phase. Ignored.\",\"unexpected-end-tag-after-frameset\":\"Unexpected end tag ({name}) in the after frameset phase. Ignored.\",\"expected-eof-but-got-char\":\"Unexpected non-space characters. Expected end of file.\",\"expected-eof-but-got-start-tag\":\"Unexpected start tag ({name}). Expected end of file.\",\"expected-eof-but-got-end-tag\":\"Unexpected end tag ({name}). Expected end of file.\",\"unexpected-end-table-in-caption\":\"Unexpected end table tag in caption. Generates implied end caption.\",\"end-html-in-innerhtml\":\"Unexpected html end tag in inner html mode.\",\"eof-in-table\":\"Unexpected end of file. Expected table content.\",\"eof-in-script\":\"Unexpected end of file. Expected script content.\",\"non-void-element-with-trailing-solidus\":\"Trailing solidus not allowed on element {name}.\",\"unexpected-html-element-in-foreign-content\":'HTML start tag \"{name}\" in a foreign namespace context.',\"unexpected-start-tag-in-table\":\"Unexpected {name}. Expected table content.\"}},{}],9:[function(_dereq_,module,exports){function SAXParser(){this.contentHandler=null,this._errorHandler=null,this._treeBuilder=new SAXTreeBuilder,this._tokenizer=new Tokenizer(this._treeBuilder),this._scriptingEnabled=!1}var SAXTreeBuilder=_dereq_(\"./SAXTreeBuilder\").SAXTreeBuilder,Tokenizer=_dereq_(\"../Tokenizer\").Tokenizer,TreeParser=_dereq_(\"./TreeParser\").TreeParser;SAXParser.prototype.parse=function(source){this._tokenizer.tokenize(source);var document=this._treeBuilder.document;document&&new TreeParser(this.contentHandler).parse(document)},SAXParser.prototype.parseFragment=function(source,context){this._treeBuilder.setFragmentContext(context),this._tokenizer.tokenize(source);var fragment=this._treeBuilder.getFragment();fragment&&new TreeParser(this.contentHandler).parse(fragment)},Object.defineProperty(SAXParser.prototype,\"scriptingEnabled\",{get:function(){return this._scriptingEnabled},set:function(value){this._scriptingEnabled=value,this._treeBuilder.scriptingEnabled=value}}),Object.defineProperty(SAXParser.prototype,\"errorHandler\",{get:function(){return this._errorHandler},set:function(value){this._errorHandler=value,this._treeBuilder.errorHandler=value}}),exports.SAXParser=SAXParser},{\"../Tokenizer\":5,\"./SAXTreeBuilder\":10,\"./TreeParser\":11}],10:[function(_dereq_,module,exports){function SAXTreeBuilder(){TreeBuilder.call(this)}function getAttribute(node,name){for(var i=0;node.attributes.length>i;i++){var attribute=node.attributes[i];if(attribute.nodeName===name)return attribute.nodeValue}}function Node(locator){locator?(this.columnNumber=locator.columnNumber,this.lineNumber=locator.lineNumber):(this.columnNumber=-1,this.lineNumber=-1),this.parentNode=null,this.nextSibling=null,this.firstChild=null}function ParentNode(locator){Node.call(this,locator),this.lastChild=null,this._endLocator=null}function Document(locator){ParentNode.call(this,locator),this.nodeType=NodeType.DOCUMENT}function DocumentFragment(){ParentNode.call(this,new Locator),this.nodeType=NodeType.DOCUMENT_FRAGMENT}function Element(locator,uri,localName,qName,atts,prefixMappings){ParentNode.call(this,locator),this.uri=uri,this.localName=localName,this.qName=qName,this.attributes=atts,this.prefixMappings=prefixMappings,this.nodeType=NodeType.ELEMENT}function Characters(locator,data){Node.call(this,locator),this.data=data,this.nodeType=NodeType.CHARACTERS}function IgnorableWhitespace(locator,data){Node.call(this,locator),this.data=data,this.nodeType=NodeType.IGNORABLE_WHITESPACE}function Comment(locator,data){Node.call(this,locator),this.data=data,this.nodeType=NodeType.COMMENT}function CDATA(locator){ParentNode.call(this,locator),this.nodeType=NodeType.CDATA}function Entity(name){ParentNode.call(this),this.name=name,this.nodeType=NodeType.ENTITY}function SkippedEntity(name){Node.call(this),this.name=name,this.nodeType=NodeType.SKIPPED_ENTITY}function ProcessingInstruction(target,data){Node.call(this),this.target=target,this.data=data}function DTD(name,publicIdentifier,systemIdentifier){ParentNode.call(this),this.name=name,this.publicIdentifier=publicIdentifier,this.systemIdentifier=systemIdentifier,this.nodeType=NodeType.DTD}var util=_dereq_(\"util\"),TreeBuilder=_dereq_(\"../TreeBuilder\").TreeBuilder;util.inherits(SAXTreeBuilder,TreeBuilder),SAXTreeBuilder.prototype.start=function(){this.document=new Document(this.tokenizer)},SAXTreeBuilder.prototype.end=function(){this.document.endLocator=this.tokenizer},SAXTreeBuilder.prototype.insertDoctype=function(name,publicId,systemId){var doctype=new DTD(this.tokenizer,name,publicId,systemId);doctype.endLocator=this.tokenizer,this.document.appendChild(doctype)},SAXTreeBuilder.prototype.createElement=function(namespaceURI,localName,attributes){var element=new Element(this.tokenizer,namespaceURI,localName,localName,attributes||[]);return element},SAXTreeBuilder.prototype.insertComment=function(data,parent){parent||(parent=this.currentStackItem());var comment=new Comment(this.tokenizer,data);parent.appendChild(comment)},SAXTreeBuilder.prototype.appendCharacters=function(parent,data){var text=new Characters(this.tokenizer,data);parent.appendChild(text)},SAXTreeBuilder.prototype.insertText=function(data){if(this.redirectAttachToFosterParent&&this.openElements.top.isFosterParenting()){var tableIndex=this.openElements.findIndex(\"table\"),tableItem=this.openElements.item(tableIndex),table=tableItem.node;if(0===tableIndex)return this.appendCharacters(table,data);var text=new Characters(this.tokenizer,data),parent=table.parentNode;if(parent)return parent.insertBetween(text,table.previousSibling,table),void 0;var stackParent=this.openElements.item(tableIndex-1).node;return stackParent.appendChild(text),void 0}this.appendCharacters(this.currentStackItem().node,data)},SAXTreeBuilder.prototype.attachNode=function(node,parent){parent.appendChild(node)},SAXTreeBuilder.prototype.attachNodeToFosterParent=function(child,table,stackParent){var parent=table.parentNode;parent?parent.insertBetween(child,table.previousSibling,table):stackParent.appendChild(child)},SAXTreeBuilder.prototype.detachFromParent=function(element){element.detach()},SAXTreeBuilder.prototype.reparentChildren=function(oldParent,newParent){newParent.appendChildren(oldParent.firstChild)},SAXTreeBuilder.prototype.getFragment=function(){var fragment=new DocumentFragment;return this.reparentChildren(this.openElements.rootNode,fragment),fragment},SAXTreeBuilder.prototype.addAttributesToElement=function(element,attributes){for(var i=0;attributes.length>i;i++){var attribute=attributes[i];getAttribute(element,attribute.nodeName)||element.attributes.push(attribute)}};var NodeType={CDATA:1,CHARACTERS:2,COMMENT:3,DOCUMENT:4,DOCUMENT_FRAGMENT:5,DTD:6,ELEMENT:7,ENTITY:8,IGNORABLE_WHITESPACE:9,PROCESSING_INSTRUCTION:10,SKIPPED_ENTITY:11};Node.prototype.visit=function(){throw Error(\"Not Implemented\")},Node.prototype.revisit=function(){},Node.prototype.detach=function(){null!==this.parentNode&&(this.parentNode.removeChild(this),this.parentNode=null)},Object.defineProperty(Node.prototype,\"previousSibling\",{get:function(){for(var prev=null,next=this.parentNode.firstChild;;){if(this==next)return prev;prev=next,next=next.nextSibling}}}),ParentNode.prototype=Object.create(Node.prototype),ParentNode.prototype.insertBefore=function(child,sibling){if(!sibling)return this.appendChild(child);if(child.detach(),child.parentNode=this,this.firstChild==sibling)child.nextSibling=sibling,this.firstChild=child;else{for(var prev=this.firstChild,next=this.firstChild.nextSibling;next!=sibling;)prev=next,next=next.nextSibling;prev.nextSibling=child,child.nextSibling=next}return child},ParentNode.prototype.insertBetween=function(child,prev,next){return next?(child.detach(),child.parentNode=this,child.nextSibling=next,prev?prev.nextSibling=child:firstChild=child,child):this.appendChild(child)},ParentNode.prototype.appendChild=function(child){return child.detach(),child.parentNode=this,this.firstChild?this.lastChild.nextSibling=child:this.firstChild=child,this.lastChild=child,child},ParentNode.prototype.appendChildren=function(parent){var child=parent.firstChild;if(child){var another=parent;this.firstChild?this.lastChild.nextSibling=child:this.firstChild=child,this.lastChild=another.lastChild;do child.parentNode=this;while(child=child.nextSibling);another.firstChild=null,another.lastChild=null}},ParentNode.prototype.removeChild=function(node){if(this.firstChild==node)this.firstChild=node.nextSibling,this.lastChild==node&&(this.lastChild=null);else{for(var prev=this.firstChild,next=this.firstChild.nextSibling;next!=node;)prev=next,next=next.nextSibling;prev.nextSibling=node.nextSibling,this.lastChild==node&&(this.lastChild=prev)}return node.parentNode=null,node},Object.defineProperty(ParentNode.prototype,\"endLocator\",{get:function(){return this._endLocator},set:function(endLocator){this._endLocator={lineNumber:endLocator.lineNumber,columnNumber:endLocator.columnNumber}}}),Document.prototype=Object.create(ParentNode.prototype),Document.prototype.visit=function(treeParser){treeParser.startDocument(this)},Document.prototype.revisit=function(treeParser){treeParser.endDocument(this.endLocator)},DocumentFragment.prototype=Object.create(ParentNode.prototype),DocumentFragment.prototype.visit=function(){},Element.prototype=Object.create(ParentNode.prototype),Element.prototype.visit=function(treeParser){if(this.prefixMappings)for(var key in prefixMappings){var mapping=prefixMappings[key];treeParser.startPrefixMapping(mapping.getPrefix(),mapping.getUri(),this)}treeParser.startElement(this.uri,this.localName,this.qName,this.attributes,this)},Element.prototype.revisit=function(treeParser){if(treeParser.endElement(this.uri,this.localName,this.qName,this.endLocator),this.prefixMappings)for(var key in prefixMappings){var mapping=prefixMappings[key];treeParser.endPrefixMapping(mapping.getPrefix(),this.endLocator)}},Characters.prototype=Object.create(Node.prototype),Characters.prototype.visit=function(treeParser){treeParser.characters(this.data,0,this.data.length,this)},IgnorableWhitespace.prototype=Object.create(Node.prototype),IgnorableWhitespace.prototype.visit=function(treeParser){treeParser.ignorableWhitespace(this.data,0,this.data.length,this)},Comment.prototype=Object.create(Node.prototype),Comment.prototype.visit=function(treeParser){treeParser.comment(this.data,0,this.data.length,this)},CDATA.prototype=Object.create(ParentNode.prototype),CDATA.prototype.visit=function(treeParser){treeParser.startCDATA(this)},CDATA.prototype.revisit=function(treeParser){treeParser.endCDATA(this.endLocator)},Entity.prototype=Object.create(ParentNode.prototype),Entity.prototype.visit=function(treeParser){treeParser.startEntity(this.name,this)},Entity.prototype.revisit=function(treeParser){treeParser.endEntity(this.name)},SkippedEntity.prototype=Object.create(Node.prototype),SkippedEntity.prototype.visit=function(treeParser){treeParser.skippedEntity(this.name,this)},ProcessingInstruction.prototype=Object.create(Node.prototype),ProcessingInstruction.prototype.visit=function(treeParser){treeParser.processingInstruction(this.target,this.data,this)},ProcessingInstruction.prototype.getNodeType=function(){return NodeType.PROCESSING_INSTRUCTION},DTD.prototype=Object.create(ParentNode.prototype),DTD.prototype.visit=function(treeParser){treeParser.startDTD(this.name,this.publicIdentifier,this.systemIdentifier,this)},DTD.prototype.revisit=function(treeParser){treeParser.endDTD()},exports.SAXTreeBuilder=SAXTreeBuilder},{\"../TreeBuilder\":6,util:20}],11:[function(_dereq_,module,exports){function TreeParser(contentHandler,lexicalHandler){if(this.contentHandler,this.lexicalHandler,this.locatorDelegate,!contentHandler)throw new IllegalArgumentException(\"contentHandler was null.\");this.contentHandler=contentHandler,this.lexicalHandler=lexicalHandler?lexicalHandler:new NullLexicalHandler}function NullLexicalHandler(){}TreeParser.prototype.parse=function(node){this.contentHandler.documentLocator=this;for(var next,current=node;;)if(current.visit(this),next=current.firstChild)current=next;else for(;;){if(current.revisit(this),current==node)return;if(next=current.nextSibling){current=next;break}current=current.parentNode}},TreeParser.prototype.characters=function(ch,start,length,locator){this.locatorDelegate=locator,this.contentHandler.characters(ch,start,length)},TreeParser.prototype.endDocument=function(locator){this.locatorDelegate=locator,this.contentHandler.endDocument()},TreeParser.prototype.endElement=function(uri,localName,qName,locator){this.locatorDelegate=locator,this.contentHandler.endElement(uri,localName,qName)},TreeParser.prototype.endPrefixMapping=function(prefix,locator){this.locatorDelegate=locator,this.contentHandler.endPrefixMapping(prefix)},TreeParser.prototype.ignorableWhitespace=function(ch,start,length,locator){this.locatorDelegate=locator,this.contentHandler.ignorableWhitespace(ch,start,length)},TreeParser.prototype.processingInstruction=function(target,data,locator){this.locatorDelegate=locator,this.contentHandler.processingInstruction(target,data)},TreeParser.prototype.skippedEntity=function(name,locator){this.locatorDelegate=locator,this.contentHandler.skippedEntity(name)},TreeParser.prototype.startDocument=function(locator){this.locatorDelegate=locator,this.contentHandler.startDocument()},TreeParser.prototype.startElement=function(uri,localName,qName,atts,locator){this.locatorDelegate=locator,this.contentHandler.startElement(uri,localName,qName,atts)},TreeParser.prototype.startPrefixMapping=function(prefix,uri,locator){this.locatorDelegate=locator,this.contentHandler.startPrefixMapping(prefix,uri)},TreeParser.prototype.comment=function(ch,start,length,locator){this.locatorDelegate=locator,this.lexicalHandler.comment(ch,start,length)},TreeParser.prototype.endCDATA=function(locator){this.locatorDelegate=locator,this.lexicalHandler.endCDATA()},TreeParser.prototype.endDTD=function(locator){this.locatorDelegate=locator,this.lexicalHandler.endDTD()},TreeParser.prototype.endEntity=function(name,locator){this.locatorDelegate=locator,this.lexicalHandler.endEntity(name)},TreeParser.prototype.startCDATA=function(locator){this.locatorDelegate=locator,this.lexicalHandler.startCDATA()},TreeParser.prototype.startDTD=function(name,publicId,systemId,locator){this.locatorDelegate=locator,this.lexicalHandler.startDTD(name,publicId,systemId)},TreeParser.prototype.startEntity=function(name,locator){this.locatorDelegate=locator,this.lexicalHandler.startEntity(name)},Object.defineProperty(TreeParser.prototype,\"columnNumber\",{get:function(){return this.locatorDelegate?this.locatorDelegate.columnNumber:-1}}),Object.defineProperty(TreeParser.prototype,\"lineNumber\",{get:function(){return this.locatorDelegate?this.locatorDelegate.lineNumber:-1}}),NullLexicalHandler.prototype.comment=function(){},NullLexicalHandler.prototype.endCDATA=function(){},NullLexicalHandler.prototype.endDTD=function(){},NullLexicalHandler.prototype.endEntity=function(){},NullLexicalHandler.prototype.startCDATA=function(){},NullLexicalHandler.prototype.startDTD=function(){},NullLexicalHandler.prototype.startEntity=function(){},exports.TreeParser=TreeParser},{}],12:[function(_dereq_,module){module.exports={\"Aacute;\":\"Á\",Aacute:\"Á\",\"aacute;\":\"á\",aacute:\"á\",\"Abreve;\":\"Ă\",\"abreve;\":\"ă\",\"ac;\":\"∾\",\"acd;\":\"∿\",\"acE;\":\"∾̳\",\"Acirc;\":\"Â\",Acirc:\"Â\",\"acirc;\":\"â\",acirc:\"â\",\"acute;\":\"´\",acute:\"´\",\"Acy;\":\"А\",\"acy;\":\"а\",\"AElig;\":\"Æ\",AElig:\"Æ\",\"aelig;\":\"æ\",aelig:\"æ\",\"af;\":\"⁡\",\"Afr;\":\"𝔄\",\"afr;\":\"𝔞\",\"Agrave;\":\"À\",Agrave:\"À\",\"agrave;\":\"à\",agrave:\"à\",\"alefsym;\":\"ℵ\",\"aleph;\":\"ℵ\",\"Alpha;\":\"Α\",\"alpha;\":\"α\",\"Amacr;\":\"Ā\",\"amacr;\":\"ā\",\"amalg;\":\"⨿\",\"amp;\":\"&\",amp:\"&\",\"AMP;\":\"&\",AMP:\"&\",\"andand;\":\"⩕\",\"And;\":\"⩓\",\"and;\":\"∧\",\"andd;\":\"⩜\",\"andslope;\":\"⩘\",\"andv;\":\"⩚\",\"ang;\":\"∠\",\"ange;\":\"⦤\",\"angle;\":\"∠\",\"angmsdaa;\":\"⦨\",\"angmsdab;\":\"⦩\",\"angmsdac;\":\"⦪\",\"angmsdad;\":\"⦫\",\"angmsdae;\":\"⦬\",\"angmsdaf;\":\"⦭\",\"angmsdag;\":\"⦮\",\"angmsdah;\":\"⦯\",\"angmsd;\":\"∡\",\"angrt;\":\"∟\",\"angrtvb;\":\"⊾\",\"angrtvbd;\":\"⦝\",\"angsph;\":\"∢\",\"angst;\":\"Å\",\"angzarr;\":\"⍼\",\"Aogon;\":\"Ą\",\"aogon;\":\"ą\",\"Aopf;\":\"𝔸\",\"aopf;\":\"𝕒\",\"apacir;\":\"⩯\",\"ap;\":\"≈\",\"apE;\":\"⩰\",\"ape;\":\"≊\",\"apid;\":\"≋\",\"apos;\":\"'\",\"ApplyFunction;\":\"⁡\",\"approx;\":\"≈\",\"approxeq;\":\"≊\",\"Aring;\":\"Å\",Aring:\"Å\",\"aring;\":\"å\",aring:\"å\",\"Ascr;\":\"𝒜\",\"ascr;\":\"𝒶\",\"Assign;\":\"≔\",\"ast;\":\"*\",\"asymp;\":\"≈\",\"asympeq;\":\"≍\",\"Atilde;\":\"Ã\",Atilde:\"Ã\",\"atilde;\":\"ã\",atilde:\"ã\",\"Auml;\":\"Ä\",Auml:\"Ä\",\"auml;\":\"ä\",auml:\"ä\",\"awconint;\":\"∳\",\"awint;\":\"⨑\",\"backcong;\":\"≌\",\"backepsilon;\":\"϶\",\"backprime;\":\"‵\",\"backsim;\":\"∽\",\"backsimeq;\":\"⋍\",\"Backslash;\":\"∖\",\"Barv;\":\"⫧\",\"barvee;\":\"⊽\",\"barwed;\":\"⌅\",\"Barwed;\":\"⌆\",\"barwedge;\":\"⌅\",\"bbrk;\":\"⎵\",\"bbrktbrk;\":\"⎶\",\"bcong;\":\"≌\",\"Bcy;\":\"Б\",\"bcy;\":\"б\",\"bdquo;\":\"„\",\"becaus;\":\"∵\",\"because;\":\"∵\",\"Because;\":\"∵\",\"bemptyv;\":\"⦰\",\"bepsi;\":\"϶\",\"bernou;\":\"ℬ\",\"Bernoullis;\":\"ℬ\",\"Beta;\":\"Β\",\"beta;\":\"β\",\"beth;\":\"ℶ\",\"between;\":\"≬\",\"Bfr;\":\"𝔅\",\"bfr;\":\"𝔟\",\"bigcap;\":\"⋂\",\"bigcirc;\":\"◯\",\"bigcup;\":\"⋃\",\"bigodot;\":\"⨀\",\"bigoplus;\":\"⨁\",\"bigotimes;\":\"⨂\",\"bigsqcup;\":\"⨆\",\"bigstar;\":\"★\",\"bigtriangledown;\":\"▽\",\"bigtriangleup;\":\"△\",\"biguplus;\":\"⨄\",\"bigvee;\":\"⋁\",\"bigwedge;\":\"⋀\",\"bkarow;\":\"⤍\",\"blacklozenge;\":\"⧫\",\"blacksquare;\":\"▪\",\"blacktriangle;\":\"▴\",\"blacktriangledown;\":\"▾\",\"blacktriangleleft;\":\"◂\",\"blacktriangleright;\":\"▸\",\"blank;\":\"␣\",\"blk12;\":\"▒\",\"blk14;\":\"░\",\"blk34;\":\"▓\",\"block;\":\"█\",\"bne;\":\"=⃥\",\"bnequiv;\":\"≡⃥\",\"bNot;\":\"⫭\",\"bnot;\":\"⌐\",\"Bopf;\":\"𝔹\",\"bopf;\":\"𝕓\",\"bot;\":\"⊥\",\"bottom;\":\"⊥\",\"bowtie;\":\"⋈\",\"boxbox;\":\"⧉\",\"boxdl;\":\"┐\",\"boxdL;\":\"╕\",\"boxDl;\":\"╖\",\"boxDL;\":\"╗\",\"boxdr;\":\"┌\",\"boxdR;\":\"╒\",\"boxDr;\":\"╓\",\"boxDR;\":\"╔\",\"boxh;\":\"─\",\"boxH;\":\"═\",\"boxhd;\":\"┬\",\"boxHd;\":\"╤\",\"boxhD;\":\"╥\",\"boxHD;\":\"╦\",\"boxhu;\":\"┴\",\"boxHu;\":\"╧\",\"boxhU;\":\"╨\",\"boxHU;\":\"╩\",\"boxminus;\":\"⊟\",\"boxplus;\":\"⊞\",\"boxtimes;\":\"⊠\",\"boxul;\":\"┘\",\"boxuL;\":\"╛\",\"boxUl;\":\"╜\",\"boxUL;\":\"╝\",\"boxur;\":\"└\",\"boxuR;\":\"╘\",\"boxUr;\":\"╙\",\"boxUR;\":\"╚\",\"boxv;\":\"│\",\"boxV;\":\"║\",\"boxvh;\":\"┼\",\"boxvH;\":\"╪\",\"boxVh;\":\"╫\",\"boxVH;\":\"╬\",\"boxvl;\":\"┤\",\"boxvL;\":\"╡\",\"boxVl;\":\"╢\",\"boxVL;\":\"╣\",\"boxvr;\":\"├\",\"boxvR;\":\"╞\",\"boxVr;\":\"╟\",\"boxVR;\":\"╠\",\"bprime;\":\"‵\",\"breve;\":\"˘\",\"Breve;\":\"˘\",\"brvbar;\":\"¦\",brvbar:\"¦\",\"bscr;\":\"𝒷\",\"Bscr;\":\"ℬ\",\"bsemi;\":\"⁏\",\"bsim;\":\"∽\",\"bsime;\":\"⋍\",\"bsolb;\":\"⧅\",\"bsol;\":\"\\\\\",\"bsolhsub;\":\"⟈\",\"bull;\":\"•\",\"bullet;\":\"•\",\"bump;\":\"≎\",\"bumpE;\":\"⪮\",\"bumpe;\":\"≏\",\"Bumpeq;\":\"≎\",\"bumpeq;\":\"≏\",\"Cacute;\":\"Ć\",\"cacute;\":\"ć\",\"capand;\":\"⩄\",\"capbrcup;\":\"⩉\",\"capcap;\":\"⩋\",\"cap;\":\"∩\",\"Cap;\":\"⋒\",\"capcup;\":\"⩇\",\"capdot;\":\"⩀\",\"CapitalDifferentialD;\":\"ⅅ\",\"caps;\":\"∩︀\",\"caret;\":\"⁁\",\"caron;\":\"ˇ\",\"Cayleys;\":\"ℭ\",\"ccaps;\":\"⩍\",\"Ccaron;\":\"Č\",\"ccaron;\":\"č\",\"Ccedil;\":\"Ç\",Ccedil:\"Ç\",\"ccedil;\":\"ç\",ccedil:\"ç\",\"Ccirc;\":\"Ĉ\",\"ccirc;\":\"ĉ\",\"Cconint;\":\"∰\",\"ccups;\":\"⩌\",\"ccupssm;\":\"⩐\",\"Cdot;\":\"Ċ\",\"cdot;\":\"ċ\",\"cedil;\":\"¸\",cedil:\"¸\",\"Cedilla;\":\"¸\",\"cemptyv;\":\"⦲\",\"cent;\":\"¢\",cent:\"¢\",\"centerdot;\":\"·\",\"CenterDot;\":\"·\",\"cfr;\":\"𝔠\",\"Cfr;\":\"ℭ\",\"CHcy;\":\"Ч\",\"chcy;\":\"ч\",\"check;\":\"✓\",\"checkmark;\":\"✓\",\"Chi;\":\"Χ\",\"chi;\":\"χ\",\"circ;\":\"ˆ\",\"circeq;\":\"≗\",\"circlearrowleft;\":\"↺\",\"circlearrowright;\":\"↻\",\"circledast;\":\"⊛\",\"circledcirc;\":\"⊚\",\"circleddash;\":\"⊝\",\"CircleDot;\":\"⊙\",\"circledR;\":\"®\",\"circledS;\":\"Ⓢ\",\"CircleMinus;\":\"⊖\",\"CirclePlus;\":\"⊕\",\"CircleTimes;\":\"⊗\",\"cir;\":\"○\",\"cirE;\":\"⧃\",\"cire;\":\"≗\",\"cirfnint;\":\"⨐\",\"cirmid;\":\"⫯\",\"cirscir;\":\"⧂\",\"ClockwiseContourIntegral;\":\"∲\",\"CloseCurlyDoubleQuote;\":\"”\",\"CloseCurlyQuote;\":\"’\",\"clubs;\":\"♣\",\"clubsuit;\":\"♣\",\"colon;\":\":\",\"Colon;\":\"∷\",\"Colone;\":\"⩴\",\"colone;\":\"≔\",\"coloneq;\":\"≔\",\"comma;\":\",\",\"commat;\":\"@\",\"comp;\":\"∁\",\"compfn;\":\"∘\",\"complement;\":\"∁\",\"complexes;\":\"ℂ\",\"cong;\":\"≅\",\"congdot;\":\"⩭\",\"Congruent;\":\"≡\",\"conint;\":\"∮\",\"Conint;\":\"∯\",\"ContourIntegral;\":\"∮\",\"copf;\":\"𝕔\",\"Copf;\":\"ℂ\",\"coprod;\":\"∐\",\"Coproduct;\":\"∐\",\"copy;\":\"©\",copy:\"©\",\"COPY;\":\"©\",COPY:\"©\",\"copysr;\":\"℗\",\"CounterClockwiseContourIntegral;\":\"∳\",\"crarr;\":\"↵\",\"cross;\":\"✗\",\"Cross;\":\"⨯\",\"Cscr;\":\"𝒞\",\"cscr;\":\"𝒸\",\"csub;\":\"⫏\",\"csube;\":\"⫑\",\"csup;\":\"⫐\",\"csupe;\":\"⫒\",\"ctdot;\":\"⋯\",\"cudarrl;\":\"⤸\",\"cudarrr;\":\"⤵\",\"cuepr;\":\"⋞\",\"cuesc;\":\"⋟\",\"cularr;\":\"↶\",\"cularrp;\":\"⤽\",\"cupbrcap;\":\"⩈\",\"cupcap;\":\"⩆\",\"CupCap;\":\"≍\",\"cup;\":\"∪\",\"Cup;\":\"⋓\",\"cupcup;\":\"⩊\",\"cupdot;\":\"⊍\",\"cupor;\":\"⩅\",\"cups;\":\"∪︀\",\"curarr;\":\"↷\",\"curarrm;\":\"⤼\",\"curlyeqprec;\":\"⋞\",\"curlyeqsucc;\":\"⋟\",\"curlyvee;\":\"⋎\",\"curlywedge;\":\"⋏\",\"curren;\":\"¤\",curren:\"¤\",\"curvearrowleft;\":\"↶\",\"curvearrowright;\":\"↷\",\"cuvee;\":\"⋎\",\"cuwed;\":\"⋏\",\"cwconint;\":\"∲\",\"cwint;\":\"∱\",\"cylcty;\":\"⌭\",\"dagger;\":\"†\",\"Dagger;\":\"‡\",\"daleth;\":\"ℸ\",\"darr;\":\"↓\",\"Darr;\":\"↡\",\"dArr;\":\"⇓\",\"dash;\":\"‐\",\"Dashv;\":\"⫤\",\"dashv;\":\"⊣\",\"dbkarow;\":\"⤏\",\"dblac;\":\"˝\",\"Dcaron;\":\"Ď\",\"dcaron;\":\"ď\",\"Dcy;\":\"Д\",\"dcy;\":\"д\",\"ddagger;\":\"‡\",\"ddarr;\":\"⇊\",\"DD;\":\"ⅅ\",\"dd;\":\"ⅆ\",\"DDotrahd;\":\"⤑\",\"ddotseq;\":\"⩷\",\"deg;\":\"°\",deg:\"°\",\"Del;\":\"∇\",\"Delta;\":\"Δ\",\"delta;\":\"δ\",\"demptyv;\":\"⦱\",\"dfisht;\":\"⥿\",\"Dfr;\":\"𝔇\",\"dfr;\":\"𝔡\",\"dHar;\":\"⥥\",\"dharl;\":\"⇃\",\"dharr;\":\"⇂\",\"DiacriticalAcute;\":\"´\",\"DiacriticalDot;\":\"˙\",\"DiacriticalDoubleAcute;\":\"˝\",\"DiacriticalGrave;\":\"`\",\"DiacriticalTilde;\":\"˜\",\"diam;\":\"⋄\",\"diamond;\":\"⋄\",\"Diamond;\":\"⋄\",\"diamondsuit;\":\"♦\",\"diams;\":\"♦\",\"die;\":\"¨\",\"DifferentialD;\":\"ⅆ\",\"digamma;\":\"ϝ\",\"disin;\":\"⋲\",\"div;\":\"÷\",\"divide;\":\"÷\",divide:\"÷\",\"divideontimes;\":\"⋇\",\"divonx;\":\"⋇\",\"DJcy;\":\"Ђ\",\"djcy;\":\"ђ\",\"dlcorn;\":\"⌞\",\"dlcrop;\":\"⌍\",\"dollar;\":\"$\",\"Dopf;\":\"𝔻\",\"dopf;\":\"𝕕\",\"Dot;\":\"¨\",\"dot;\":\"˙\",\"DotDot;\":\"⃜\",\"doteq;\":\"≐\",\"doteqdot;\":\"≑\",\"DotEqual;\":\"≐\",\"dotminus;\":\"∸\",\"dotplus;\":\"∔\",\"dotsquare;\":\"⊡\",\"doublebarwedge;\":\"⌆\",\"DoubleContourIntegral;\":\"∯\",\"DoubleDot;\":\"¨\",\"DoubleDownArrow;\":\"⇓\",\"DoubleLeftArrow;\":\"⇐\",\"DoubleLeftRightArrow;\":\"⇔\",\"DoubleLeftTee;\":\"⫤\",\"DoubleLongLeftArrow;\":\"⟸\",\"DoubleLongLeftRightArrow;\":\"⟺\",\"DoubleLongRightArrow;\":\"⟹\",\"DoubleRightArrow;\":\"⇒\",\"DoubleRightTee;\":\"⊨\",\"DoubleUpArrow;\":\"⇑\",\"DoubleUpDownArrow;\":\"⇕\",\"DoubleVerticalBar;\":\"∥\",\"DownArrowBar;\":\"⤓\",\"downarrow;\":\"↓\",\"DownArrow;\":\"↓\",\"Downarrow;\":\"⇓\",\"DownArrowUpArrow;\":\"⇵\",\"DownBreve;\":\"̑\",\"downdownarrows;\":\"⇊\",\"downharpoonleft;\":\"⇃\",\"downharpoonright;\":\"⇂\",\"DownLeftRightVector;\":\"⥐\",\"DownLeftTeeVector;\":\"⥞\",\"DownLeftVectorBar;\":\"⥖\",\"DownLeftVector;\":\"↽\",\"DownRightTeeVector;\":\"⥟\",\"DownRightVectorBar;\":\"⥗\",\"DownRightVector;\":\"⇁\",\"DownTeeArrow;\":\"↧\",\"DownTee;\":\"⊤\",\"drbkarow;\":\"⤐\",\"drcorn;\":\"⌟\",\"drcrop;\":\"⌌\",\"Dscr;\":\"𝒟\",\"dscr;\":\"𝒹\",\"DScy;\":\"Ѕ\",\"dscy;\":\"ѕ\",\"dsol;\":\"⧶\",\"Dstrok;\":\"Đ\",\"dstrok;\":\"đ\",\"dtdot;\":\"⋱\",\"dtri;\":\"▿\",\"dtrif;\":\"▾\",\"duarr;\":\"⇵\",\"duhar;\":\"⥯\",\"dwangle;\":\"⦦\",\"DZcy;\":\"Џ\",\"dzcy;\":\"џ\",\"dzigrarr;\":\"⟿\",\"Eacute;\":\"É\",Eacute:\"É\",\"eacute;\":\"é\",eacute:\"é\",\"easter;\":\"⩮\",\"Ecaron;\":\"Ě\",\"ecaron;\":\"ě\",\"Ecirc;\":\"Ê\",Ecirc:\"Ê\",\"ecirc;\":\"ê\",ecirc:\"ê\",\"ecir;\":\"≖\",\"ecolon;\":\"≕\",\"Ecy;\":\"Э\",\"ecy;\":\"э\",\"eDDot;\":\"⩷\",\"Edot;\":\"Ė\",\"edot;\":\"ė\",\"eDot;\":\"≑\",\"ee;\":\"ⅇ\",\"efDot;\":\"≒\",\"Efr;\":\"𝔈\",\"efr;\":\"𝔢\",\"eg;\":\"⪚\",\"Egrave;\":\"È\",Egrave:\"È\",\"egrave;\":\"è\",egrave:\"è\",\"egs;\":\"⪖\",\"egsdot;\":\"⪘\",\"el;\":\"⪙\",\"Element;\":\"∈\",\"elinters;\":\"⏧\",\"ell;\":\"ℓ\",\"els;\":\"⪕\",\"elsdot;\":\"⪗\",\"Emacr;\":\"Ē\",\"emacr;\":\"ē\",\"empty;\":\"∅\",\"emptyset;\":\"∅\",\"EmptySmallSquare;\":\"◻\",\"emptyv;\":\"∅\",\"EmptyVerySmallSquare;\":\"▫\",\"emsp13;\":\" \",\"emsp14;\":\" \",\"emsp;\":\" \",\"ENG;\":\"Ŋ\",\"eng;\":\"ŋ\",\"ensp;\":\" \",\"Eogon;\":\"Ę\",\"eogon;\":\"ę\",\"Eopf;\":\"𝔼\",\"eopf;\":\"𝕖\",\"epar;\":\"⋕\",\"eparsl;\":\"⧣\",\"eplus;\":\"⩱\",\"epsi;\":\"ε\",\"Epsilon;\":\"Ε\",\"epsilon;\":\"ε\",\"epsiv;\":\"ϵ\",\"eqcirc;\":\"≖\",\"eqcolon;\":\"≕\",\"eqsim;\":\"≂\",\"eqslantgtr;\":\"⪖\",\"eqslantless;\":\"⪕\",\"Equal;\":\"⩵\",\"equals;\":\"=\",\"EqualTilde;\":\"≂\",\"equest;\":\"≟\",\"Equilibrium;\":\"⇌\",\"equiv;\":\"≡\",\"equivDD;\":\"⩸\",\"eqvparsl;\":\"⧥\",\"erarr;\":\"⥱\",\"erDot;\":\"≓\",\"escr;\":\"ℯ\",\"Escr;\":\"ℰ\",\"esdot;\":\"≐\",\"Esim;\":\"⩳\",\"esim;\":\"≂\",\"Eta;\":\"Η\",\"eta;\":\"η\",\"ETH;\":\"Ð\",ETH:\"Ð\",\"eth;\":\"ð\",eth:\"ð\",\"Euml;\":\"Ë\",Euml:\"Ë\",\"euml;\":\"ë\",euml:\"ë\",\"euro;\":\"€\",\"excl;\":\"!\",\"exist;\":\"∃\",\"Exists;\":\"∃\",\"expectation;\":\"ℰ\",\"exponentiale;\":\"ⅇ\",\"ExponentialE;\":\"ⅇ\",\"fallingdotseq;\":\"≒\",\"Fcy;\":\"Ф\",\"fcy;\":\"ф\",\"female;\":\"♀\",\"ffilig;\":\"ﬃ\",\"fflig;\":\"ﬀ\",\"ffllig;\":\"ﬄ\",\"Ffr;\":\"𝔉\",\"ffr;\":\"𝔣\",\"filig;\":\"ﬁ\",\"FilledSmallSquare;\":\"◼\",\"FilledVerySmallSquare;\":\"▪\",\"fjlig;\":\"fj\",\"flat;\":\"♭\",\"fllig;\":\"ﬂ\",\"fltns;\":\"▱\",\"fnof;\":\"ƒ\",\"Fopf;\":\"𝔽\",\"fopf;\":\"𝕗\",\"forall;\":\"∀\",\"ForAll;\":\"∀\",\"fork;\":\"⋔\",\"forkv;\":\"⫙\",\"Fouriertrf;\":\"ℱ\",\"fpartint;\":\"⨍\",\"frac12;\":\"½\",frac12:\"½\",\"frac13;\":\"⅓\",\"frac14;\":\"¼\",frac14:\"¼\",\"frac15;\":\"⅕\",\"frac16;\":\"⅙\",\"frac18;\":\"⅛\",\"frac23;\":\"⅔\",\"frac25;\":\"⅖\",\"frac34;\":\"¾\",frac34:\"¾\",\"frac35;\":\"⅗\",\"frac38;\":\"⅜\",\"frac45;\":\"⅘\",\"frac56;\":\"⅚\",\"frac58;\":\"⅝\",\"frac78;\":\"⅞\",\"frasl;\":\"⁄\",\"frown;\":\"⌢\",\"fscr;\":\"𝒻\",\"Fscr;\":\"ℱ\",\"gacute;\":\"ǵ\",\"Gamma;\":\"Γ\",\"gamma;\":\"γ\",\"Gammad;\":\"Ϝ\",\"gammad;\":\"ϝ\",\"gap;\":\"⪆\",\"Gbreve;\":\"Ğ\",\"gbreve;\":\"ğ\",\"Gcedil;\":\"Ģ\",\"Gcirc;\":\"Ĝ\",\"gcirc;\":\"ĝ\",\"Gcy;\":\"Г\",\"gcy;\":\"г\",\"Gdot;\":\"Ġ\",\"gdot;\":\"ġ\",\"ge;\":\"≥\",\"gE;\":\"≧\",\"gEl;\":\"⪌\",\"gel;\":\"⋛\",\"geq;\":\"≥\",\"geqq;\":\"≧\",\"geqslant;\":\"⩾\",\"gescc;\":\"⪩\",\"ges;\":\"⩾\",\"gesdot;\":\"⪀\",\"gesdoto;\":\"⪂\",\"gesdotol;\":\"⪄\",\"gesl;\":\"⋛︀\",\"gesles;\":\"⪔\",\"Gfr;\":\"𝔊\",\"gfr;\":\"𝔤\",\"gg;\":\"≫\",\"Gg;\":\"⋙\",\"ggg;\":\"⋙\",\"gimel;\":\"ℷ\",\"GJcy;\":\"Ѓ\",\"gjcy;\":\"ѓ\",\"gla;\":\"⪥\",\"gl;\":\"≷\",\"glE;\":\"⪒\",\"glj;\":\"⪤\",\"gnap;\":\"⪊\",\"gnapprox;\":\"⪊\",\"gne;\":\"⪈\",\"gnE;\":\"≩\",\"gneq;\":\"⪈\",\"gneqq;\":\"≩\",\"gnsim;\":\"⋧\",\"Gopf;\":\"𝔾\",\"gopf;\":\"𝕘\",\"grave;\":\"`\",\"GreaterEqual;\":\"≥\",\"GreaterEqualLess;\":\"⋛\",\"GreaterFullEqual;\":\"≧\",\"GreaterGreater;\":\"⪢\",\"GreaterLess;\":\"≷\",\"GreaterSlantEqual;\":\"⩾\",\"GreaterTilde;\":\"≳\",\"Gscr;\":\"𝒢\",\"gscr;\":\"ℊ\",\"gsim;\":\"≳\",\"gsime;\":\"⪎\",\"gsiml;\":\"⪐\",\"gtcc;\":\"⪧\",\"gtcir;\":\"⩺\",\"gt;\":\">\",gt:\">\",\"GT;\":\">\",GT:\">\",\"Gt;\":\"≫\",\"gtdot;\":\"⋗\",\"gtlPar;\":\"⦕\",\"gtquest;\":\"⩼\",\"gtrapprox;\":\"⪆\",\"gtrarr;\":\"⥸\",\"gtrdot;\":\"⋗\",\"gtreqless;\":\"⋛\",\"gtreqqless;\":\"⪌\",\"gtrless;\":\"≷\",\"gtrsim;\":\"≳\",\"gvertneqq;\":\"≩︀\",\"gvnE;\":\"≩︀\",\"Hacek;\":\"ˇ\",\"hairsp;\":\" \",\"half;\":\"½\",\"hamilt;\":\"ℋ\",\"HARDcy;\":\"Ъ\",\"hardcy;\":\"ъ\",\"harrcir;\":\"⥈\",\"harr;\":\"↔\",\"hArr;\":\"⇔\",\"harrw;\":\"↭\",\"Hat;\":\"^\",\"hbar;\":\"ℏ\",\"Hcirc;\":\"Ĥ\",\"hcirc;\":\"ĥ\",\"hearts;\":\"♥\",\"heartsuit;\":\"♥\",\"hellip;\":\"…\",\"hercon;\":\"⊹\",\"hfr;\":\"𝔥\",\"Hfr;\":\"ℌ\",\"HilbertSpace;\":\"ℋ\",\"hksearow;\":\"⤥\",\"hkswarow;\":\"⤦\",\"hoarr;\":\"⇿\",\"homtht;\":\"∻\",\"hookleftarrow;\":\"↩\",\"hookrightarrow;\":\"↪\",\"hopf;\":\"𝕙\",\"Hopf;\":\"ℍ\",\"horbar;\":\"―\",\"HorizontalLine;\":\"─\",\"hscr;\":\"𝒽\",\"Hscr;\":\"ℋ\",\"hslash;\":\"ℏ\",\"Hstrok;\":\"Ħ\",\"hstrok;\":\"ħ\",\"HumpDownHump;\":\"≎\",\"HumpEqual;\":\"≏\",\"hybull;\":\"⁃\",\"hyphen;\":\"‐\",\"Iacute;\":\"Í\",Iacute:\"Í\",\"iacute;\":\"í\",iacute:\"í\",\"ic;\":\"⁣\",\"Icirc;\":\"Î\",Icirc:\"Î\",\"icirc;\":\"î\",icirc:\"î\",\"Icy;\":\"И\",\"icy;\":\"и\",\"Idot;\":\"İ\",\"IEcy;\":\"Е\",\"iecy;\":\"е\",\"iexcl;\":\"¡\",iexcl:\"¡\",\"iff;\":\"⇔\",\"ifr;\":\"𝔦\",\"Ifr;\":\"ℑ\",\"Igrave;\":\"Ì\",Igrave:\"Ì\",\"igrave;\":\"ì\",igrave:\"ì\",\"ii;\":\"ⅈ\",\"iiiint;\":\"⨌\",\"iiint;\":\"∭\",\"iinfin;\":\"⧜\",\"iiota;\":\"℩\",\"IJlig;\":\"Ĳ\",\"ijlig;\":\"ĳ\",\"Imacr;\":\"Ī\",\"imacr;\":\"ī\",\"image;\":\"ℑ\",\"ImaginaryI;\":\"ⅈ\",\"imagline;\":\"ℐ\",\"imagpart;\":\"ℑ\",\"imath;\":\"ı\",\"Im;\":\"ℑ\",\"imof;\":\"⊷\",\"imped;\":\"Ƶ\",\"Implies;\":\"⇒\",\"incare;\":\"℅\",\"in;\":\"∈\",\"infin;\":\"∞\",\"infintie;\":\"⧝\",\"inodot;\":\"ı\",\"intcal;\":\"⊺\",\"int;\":\"∫\",\"Int;\":\"∬\",\"integers;\":\"ℤ\",\"Integral;\":\"∫\",\"intercal;\":\"⊺\",\"Intersection;\":\"⋂\",\"intlarhk;\":\"⨗\",\"intprod;\":\"⨼\",\"InvisibleComma;\":\"⁣\",\"InvisibleTimes;\":\"⁢\",\"IOcy;\":\"Ё\",\"iocy;\":\"ё\",\"Iogon;\":\"Į\",\"iogon;\":\"į\",\"Iopf;\":\"𝕀\",\"iopf;\":\"𝕚\",\"Iota;\":\"Ι\",\"iota;\":\"ι\",\"iprod;\":\"⨼\",\"iquest;\":\"¿\",iquest:\"¿\",\"iscr;\":\"𝒾\",\"Iscr;\":\"ℐ\",\"isin;\":\"∈\",\"isindot;\":\"⋵\",\"isinE;\":\"⋹\",\"isins;\":\"⋴\",\"isinsv;\":\"⋳\",\"isinv;\":\"∈\",\"it;\":\"⁢\",\"Itilde;\":\"Ĩ\",\"itilde;\":\"ĩ\",\"Iukcy;\":\"І\",\"iukcy;\":\"і\",\"Iuml;\":\"Ï\",Iuml:\"Ï\",\"iuml;\":\"ï\",iuml:\"ï\",\"Jcirc;\":\"Ĵ\",\"jcirc;\":\"ĵ\",\"Jcy;\":\"Й\",\"jcy;\":\"й\",\"Jfr;\":\"𝔍\",\"jfr;\":\"𝔧\",\"jmath;\":\"ȷ\",\"Jopf;\":\"𝕁\",\"jopf;\":\"𝕛\",\"Jscr;\":\"𝒥\",\"jscr;\":\"𝒿\",\"Jsercy;\":\"Ј\",\"jsercy;\":\"ј\",\"Jukcy;\":\"Є\",\"jukcy;\":\"є\",\"Kappa;\":\"Κ\",\"kappa;\":\"κ\",\"kappav;\":\"ϰ\",\"Kcedil;\":\"Ķ\",\"kcedil;\":\"ķ\",\"Kcy;\":\"К\",\"kcy;\":\"к\",\"Kfr;\":\"𝔎\",\"kfr;\":\"𝔨\",\"kgreen;\":\"ĸ\",\"KHcy;\":\"Х\",\"khcy;\":\"х\",\"KJcy;\":\"Ќ\",\"kjcy;\":\"ќ\",\"Kopf;\":\"𝕂\",\"kopf;\":\"𝕜\",\"Kscr;\":\"𝒦\",\"kscr;\":\"𝓀\",\"lAarr;\":\"⇚\",\"Lacute;\":\"Ĺ\",\"lacute;\":\"ĺ\",\"laemptyv;\":\"⦴\",\"lagran;\":\"ℒ\",\"Lambda;\":\"Λ\",\"lambda;\":\"λ\",\"lang;\":\"⟨\",\"Lang;\":\"⟪\",\"langd;\":\"⦑\",\"langle;\":\"⟨\",\"lap;\":\"⪅\",\"Laplacetrf;\":\"ℒ\",\"laquo;\":\"«\",laquo:\"«\",\"larrb;\":\"⇤\",\"larrbfs;\":\"⤟\",\"larr;\":\"←\",\"Larr;\":\"↞\",\"lArr;\":\"⇐\",\"larrfs;\":\"⤝\",\"larrhk;\":\"↩\",\"larrlp;\":\"↫\",\"larrpl;\":\"⤹\",\"larrsim;\":\"⥳\",\"larrtl;\":\"↢\",\"latail;\":\"⤙\",\"lAtail;\":\"⤛\",\"lat;\":\"⪫\",\"late;\":\"⪭\",\"lates;\":\"⪭︀\",\"lbarr;\":\"⤌\",\"lBarr;\":\"⤎\",\"lbbrk;\":\"❲\",\"lbrace;\":\"{\",\"lbrack;\":\"[\",\"lbrke;\":\"⦋\",\"lbrksld;\":\"⦏\",\"lbrkslu;\":\"⦍\",\"Lcaron;\":\"Ľ\",\"lcaron;\":\"ľ\",\"Lcedil;\":\"Ļ\",\"lcedil;\":\"ļ\",\"lceil;\":\"⌈\",\"lcub;\":\"{\",\"Lcy;\":\"Л\",\"lcy;\":\"л\",\"ldca;\":\"⤶\",\"ldquo;\":\"“\",\"ldquor;\":\"„\",\"ldrdhar;\":\"⥧\",\"ldrushar;\":\"⥋\",\"ldsh;\":\"↲\",\"le;\":\"≤\",\"lE;\":\"≦\",\"LeftAngleBracket;\":\"⟨\",\"LeftArrowBar;\":\"⇤\",\"leftarrow;\":\"←\",\"LeftArrow;\":\"←\",\"Leftarrow;\":\"⇐\",\"LeftArrowRightArrow;\":\"⇆\",\"leftarrowtail;\":\"↢\",\"LeftCeiling;\":\"⌈\",\"LeftDoubleBracket;\":\"⟦\",\"LeftDownTeeVector;\":\"⥡\",\"LeftDownVectorBar;\":\"⥙\",\"LeftDownVector;\":\"⇃\",\"LeftFloor;\":\"⌊\",\"leftharpoondown;\":\"↽\",\"leftharpoonup;\":\"↼\",\"leftleftarrows;\":\"⇇\",\"leftrightarrow;\":\"↔\",\"LeftRightArrow;\":\"↔\",\"Leftrightarrow;\":\"⇔\",\"leftrightarrows;\":\"⇆\",\"leftrightharpoons;\":\"⇋\",\"leftrightsquigarrow;\":\"↭\",\"LeftRightVector;\":\"⥎\",\"LeftTeeArrow;\":\"↤\",\"LeftTee;\":\"⊣\",\"LeftTeeVector;\":\"⥚\",\"leftthreetimes;\":\"⋋\",\"LeftTriangleBar;\":\"⧏\",\"LeftTriangle;\":\"⊲\",\"LeftTriangleEqual;\":\"⊴\",\"LeftUpDownVector;\":\"⥑\",\"LeftUpTeeVector;\":\"⥠\",\"LeftUpVectorBar;\":\"⥘\",\"LeftUpVector;\":\"↿\",\"LeftVectorBar;\":\"⥒\",\"LeftVector;\":\"↼\",\"lEg;\":\"⪋\",\"leg;\":\"⋚\",\"leq;\":\"≤\",\"leqq;\":\"≦\",\"leqslant;\":\"⩽\",\"lescc;\":\"⪨\",\"les;\":\"⩽\",\"lesdot;\":\"⩿\",\"lesdoto;\":\"⪁\",\"lesdotor;\":\"⪃\",\"lesg;\":\"⋚︀\",\"lesges;\":\"⪓\",\"lessapprox;\":\"⪅\",\"lessdot;\":\"⋖\",\"lesseqgtr;\":\"⋚\",\"lesseqqgtr;\":\"⪋\",\"LessEqualGreater;\":\"⋚\",\"LessFullEqual;\":\"≦\",\"LessGreater;\":\"≶\",\"lessgtr;\":\"≶\",\"LessLess;\":\"⪡\",\"lesssim;\":\"≲\",\"LessSlantEqual;\":\"⩽\",\"LessTilde;\":\"≲\",\"lfisht;\":\"⥼\",\"lfloor;\":\"⌊\",\"Lfr;\":\"𝔏\",\"lfr;\":\"𝔩\",\"lg;\":\"≶\",\"lgE;\":\"⪑\",\"lHar;\":\"⥢\",\"lhard;\":\"↽\",\"lharu;\":\"↼\",\"lharul;\":\"⥪\",\"lhblk;\":\"▄\",\"LJcy;\":\"Љ\",\"ljcy;\":\"љ\",\"llarr;\":\"⇇\",\"ll;\":\"≪\",\"Ll;\":\"⋘\",\"llcorner;\":\"⌞\",\"Lleftarrow;\":\"⇚\",\"llhard;\":\"⥫\",\"lltri;\":\"◺\",\"Lmidot;\":\"Ŀ\",\"lmidot;\":\"ŀ\",\"lmoustache;\":\"⎰\",\"lmoust;\":\"⎰\",\"lnap;\":\"⪉\",\"lnapprox;\":\"⪉\",\"lne;\":\"⪇\",\"lnE;\":\"≨\",\"lneq;\":\"⪇\",\"lneqq;\":\"≨\",\"lnsim;\":\"⋦\",\"loang;\":\"⟬\",\"loarr;\":\"⇽\",\"lobrk;\":\"⟦\",\"longleftarrow;\":\"⟵\",\"LongLeftArrow;\":\"⟵\",\"Longleftarrow;\":\"⟸\",\"longleftrightarrow;\":\"⟷\",\"LongLeftRightArrow;\":\"⟷\",\"Longleftrightarrow;\":\"⟺\",\"longmapsto;\":\"⟼\",\"longrightarrow;\":\"⟶\",\"LongRightArrow;\":\"⟶\",\"Longrightarrow;\":\"⟹\",\"looparrowleft;\":\"↫\",\"looparrowright;\":\"↬\",\"lopar;\":\"⦅\",\"Lopf;\":\"𝕃\",\"lopf;\":\"𝕝\",\"loplus;\":\"⨭\",\"lotimes;\":\"⨴\",\"lowast;\":\"∗\",\"lowbar;\":\"_\",\"LowerLeftArrow;\":\"↙\",\"LowerRightArrow;\":\"↘\",\"loz;\":\"◊\",\"lozenge;\":\"◊\",\"lozf;\":\"⧫\",\"lpar;\":\"(\",\"lparlt;\":\"⦓\",\"lrarr;\":\"⇆\",\"lrcorner;\":\"⌟\",\"lrhar;\":\"⇋\",\"lrhard;\":\"⥭\",\"lrm;\":\"‎\",\"lrtri;\":\"⊿\",\"lsaquo;\":\"‹\",\"lscr;\":\"𝓁\",\"Lscr;\":\"ℒ\",\"lsh;\":\"↰\",\"Lsh;\":\"↰\",\"lsim;\":\"≲\",\"lsime;\":\"⪍\",\"lsimg;\":\"⪏\",\"lsqb;\":\"[\",\"lsquo;\":\"‘\",\"lsquor;\":\"‚\",\"Lstrok;\":\"Ł\",\"lstrok;\":\"ł\",\"ltcc;\":\"⪦\",\"ltcir;\":\"⩹\",\"lt;\":\"<\",lt:\"<\",\"LT;\":\"<\",LT:\"<\",\"Lt;\":\"≪\",\"ltdot;\":\"⋖\",\"lthree;\":\"⋋\",\"ltimes;\":\"⋉\",\"ltlarr;\":\"⥶\",\"ltquest;\":\"⩻\",\"ltri;\":\"◃\",\"ltrie;\":\"⊴\",\"ltrif;\":\"◂\",\"ltrPar;\":\"⦖\",\"lurdshar;\":\"⥊\",\"luruhar;\":\"⥦\",\"lvertneqq;\":\"≨︀\",\"lvnE;\":\"≨︀\",\"macr;\":\"¯\",macr:\"¯\",\"male;\":\"♂\",\"malt;\":\"✠\",\"maltese;\":\"✠\",\"Map;\":\"⤅\",\"map;\":\"↦\",\"mapsto;\":\"↦\",\"mapstodown;\":\"↧\",\"mapstoleft;\":\"↤\",\"mapstoup;\":\"↥\",\"marker;\":\"▮\",\"mcomma;\":\"⨩\",\"Mcy;\":\"М\",\"mcy;\":\"м\",\"mdash;\":\"—\",\"mDDot;\":\"∺\",\"measuredangle;\":\"∡\",\"MediumSpace;\":\" \",\"Mellintrf;\":\"ℳ\",\"Mfr;\":\"𝔐\",\"mfr;\":\"𝔪\",\"mho;\":\"℧\",\"micro;\":\"µ\",micro:\"µ\",\"midast;\":\"*\",\"midcir;\":\"⫰\",\"mid;\":\"∣\",\"middot;\":\"·\",middot:\"·\",\"minusb;\":\"⊟\",\"minus;\":\"−\",\"minusd;\":\"∸\",\"minusdu;\":\"⨪\",\"MinusPlus;\":\"∓\",\"mlcp;\":\"⫛\",\"mldr;\":\"…\",\"mnplus;\":\"∓\",\"models;\":\"⊧\",\"Mopf;\":\"𝕄\",\"mopf;\":\"𝕞\",\"mp;\":\"∓\",\"mscr;\":\"𝓂\",\"Mscr;\":\"ℳ\",\"mstpos;\":\"∾\",\"Mu;\":\"Μ\",\"mu;\":\"μ\",\"multimap;\":\"⊸\",\"mumap;\":\"⊸\",\"nabla;\":\"∇\",\"Nacute;\":\"Ń\",\"nacute;\":\"ń\",\"nang;\":\"∠⃒\",\"nap;\":\"≉\",\"napE;\":\"⩰̸\",\"napid;\":\"≋̸\",\"napos;\":\"ŉ\",\"napprox;\":\"≉\",\"natural;\":\"♮\",\"naturals;\":\"ℕ\",\"natur;\":\"♮\",\"nbsp;\":\" \",nbsp:\" \",\"nbump;\":\"≎̸\",\"nbumpe;\":\"≏̸\",\"ncap;\":\"⩃\",\"Ncaron;\":\"Ň\",\"ncaron;\":\"ň\",\"Ncedil;\":\"Ņ\",\"ncedil;\":\"ņ\",\"ncong;\":\"≇\",\"ncongdot;\":\"⩭̸\",\"ncup;\":\"⩂\",\"Ncy;\":\"Н\",\"ncy;\":\"н\",\"ndash;\":\"–\",\"nearhk;\":\"⤤\",\"nearr;\":\"↗\",\"neArr;\":\"⇗\",\"nearrow;\":\"↗\",\"ne;\":\"≠\",\"nedot;\":\"≐̸\",\"NegativeMediumSpace;\":\"​\",\"NegativeThickSpace;\":\"​\",\"NegativeThinSpace;\":\"​\",\"NegativeVeryThinSpace;\":\"​\",\"nequiv;\":\"≢\",\"nesear;\":\"⤨\",\"nesim;\":\"≂̸\",\"NestedGreaterGreater;\":\"≫\",\"NestedLessLess;\":\"≪\",\"NewLine;\":\"\\n\",\"nexist;\":\"∄\",\"nexists;\":\"∄\",\"Nfr;\":\"𝔑\",\"nfr;\":\"𝔫\",\"ngE;\":\"≧̸\",\"nge;\":\"≱\",\"ngeq;\":\"≱\",\"ngeqq;\":\"≧̸\",\"ngeqslant;\":\"⩾̸\",\"nges;\":\"⩾̸\",\"nGg;\":\"⋙̸\",\"ngsim;\":\"≵\",\"nGt;\":\"≫⃒\",\"ngt;\":\"≯\",\"ngtr;\":\"≯\",\"nGtv;\":\"≫̸\",\"nharr;\":\"↮\",\"nhArr;\":\"⇎\",\"nhpar;\":\"⫲\",\"ni;\":\"∋\",\"nis;\":\"⋼\",\"nisd;\":\"⋺\",\"niv;\":\"∋\",\"NJcy;\":\"Њ\",\"njcy;\":\"њ\",\"nlarr;\":\"↚\",\"nlArr;\":\"⇍\",\"nldr;\":\"‥\",\"nlE;\":\"≦̸\",\"nle;\":\"≰\",\"nleftarrow;\":\"↚\",\"nLeftarrow;\":\"⇍\",\"nleftrightarrow;\":\"↮\",\"nLeftrightarrow;\":\"⇎\",\"nleq;\":\"≰\",\"nleqq;\":\"≦̸\",\"nleqslant;\":\"⩽̸\",\"nles;\":\"⩽̸\",\"nless;\":\"≮\",\"nLl;\":\"⋘̸\",\"nlsim;\":\"≴\",\"nLt;\":\"≪⃒\",\"nlt;\":\"≮\",\"nltri;\":\"⋪\",\"nltrie;\":\"⋬\",\"nLtv;\":\"≪̸\",\"nmid;\":\"∤\",\"NoBreak;\":\"⁠\",\"NonBreakingSpace;\":\" \",\"nopf;\":\"𝕟\",\"Nopf;\":\"ℕ\",\"Not;\":\"⫬\",\"not;\":\"¬\",not:\"¬\",\"NotCongruent;\":\"≢\",\"NotCupCap;\":\"≭\",\"NotDoubleVerticalBar;\":\"∦\",\"NotElement;\":\"∉\",\"NotEqual;\":\"≠\",\"NotEqualTilde;\":\"≂̸\",\"NotExists;\":\"∄\",\"NotGreater;\":\"≯\",\"NotGreaterEqual;\":\"≱\",\"NotGreaterFullEqual;\":\"≧̸\",\"NotGreaterGreater;\":\"≫̸\",\"NotGreaterLess;\":\"≹\",\"NotGreaterSlantEqual;\":\"⩾̸\",\"NotGreaterTilde;\":\"≵\",\"NotHumpDownHump;\":\"≎̸\",\"NotHumpEqual;\":\"≏̸\",\"notin;\":\"∉\",\"notindot;\":\"⋵̸\",\"notinE;\":\"⋹̸\",\"notinva;\":\"∉\",\"notinvb;\":\"⋷\",\"notinvc;\":\"⋶\",\"NotLeftTriangleBar;\":\"⧏̸\",\"NotLeftTriangle;\":\"⋪\",\"NotLeftTriangleEqual;\":\"⋬\",\"NotLess;\":\"≮\",\"NotLessEqual;\":\"≰\",\"NotLessGreater;\":\"≸\",\"NotLessLess;\":\"≪̸\",\"NotLessSlantEqual;\":\"⩽̸\",\"NotLessTilde;\":\"≴\",\"NotNestedGreaterGreater;\":\"⪢̸\",\"NotNestedLessLess;\":\"⪡̸\",\"notni;\":\"∌\",\"notniva;\":\"∌\",\"notnivb;\":\"⋾\",\"notnivc;\":\"⋽\",\"NotPrecedes;\":\"⊀\",\"NotPrecedesEqual;\":\"⪯̸\",\"NotPrecedesSlantEqual;\":\"⋠\",\"NotReverseElement;\":\"∌\",\"NotRightTriangleBar;\":\"⧐̸\",\"NotRightTriangle;\":\"⋫\",\"NotRightTriangleEqual;\":\"⋭\",\"NotSquareSubset;\":\"⊏̸\",\"NotSquareSubsetEqual;\":\"⋢\",\"NotSquareSuperset;\":\"⊐̸\",\"NotSquareSupersetEqual;\":\"⋣\",\"NotSubset;\":\"⊂⃒\",\"NotSubsetEqual;\":\"⊈\",\"NotSucceeds;\":\"⊁\",\"NotSucceedsEqual;\":\"⪰̸\",\"NotSucceedsSlantEqual;\":\"⋡\",\"NotSucceedsTilde;\":\"≿̸\",\"NotSuperset;\":\"⊃⃒\",\"NotSupersetEqual;\":\"⊉\",\"NotTilde;\":\"≁\",\"NotTildeEqual;\":\"≄\",\"NotTildeFullEqual;\":\"≇\",\"NotTildeTilde;\":\"≉\",\"NotVerticalBar;\":\"∤\",\"nparallel;\":\"∦\",\"npar;\":\"∦\",\"nparsl;\":\"⫽⃥\",\"npart;\":\"∂̸\",\"npolint;\":\"⨔\",\"npr;\":\"⊀\",\"nprcue;\":\"⋠\",\"nprec;\":\"⊀\",\"npreceq;\":\"⪯̸\",\"npre;\":\"⪯̸\",\"nrarrc;\":\"⤳̸\",\"nrarr;\":\"↛\",\"nrArr;\":\"⇏\",\"nrarrw;\":\"↝̸\",\"nrightarrow;\":\"↛\",\"nRightarrow;\":\"⇏\",\"nrtri;\":\"⋫\",\"nrtrie;\":\"⋭\",\"nsc;\":\"⊁\",\"nsccue;\":\"⋡\",\"nsce;\":\"⪰̸\",\"Nscr;\":\"𝒩\",\"nscr;\":\"𝓃\",\"nshortmid;\":\"∤\",\"nshortparallel;\":\"∦\",\"nsim;\":\"≁\",\"nsime;\":\"≄\",\"nsimeq;\":\"≄\",\"nsmid;\":\"∤\",\"nspar;\":\"∦\",\"nsqsube;\":\"⋢\",\"nsqsupe;\":\"⋣\",\"nsub;\":\"⊄\",\"nsubE;\":\"⫅̸\",\"nsube;\":\"⊈\",\"nsubset;\":\"⊂⃒\",\"nsubseteq;\":\"⊈\",\"nsubseteqq;\":\"⫅̸\",\"nsucc;\":\"⊁\",\"nsucceq;\":\"⪰̸\",\"nsup;\":\"⊅\",\"nsupE;\":\"⫆̸\",\"nsupe;\":\"⊉\",\"nsupset;\":\"⊃⃒\",\"nsupseteq;\":\"⊉\",\"nsupseteqq;\":\"⫆̸\",\"ntgl;\":\"≹\",\"Ntilde;\":\"Ñ\",Ntilde:\"Ñ\",\"ntilde;\":\"ñ\",ntilde:\"ñ\",\"ntlg;\":\"≸\",\"ntriangleleft;\":\"⋪\",\"ntrianglelefteq;\":\"⋬\",\"ntriangleright;\":\"⋫\",\"ntrianglerighteq;\":\"⋭\",\"Nu;\":\"Ν\",\"nu;\":\"ν\",\"num;\":\"#\",\"numero;\":\"№\",\"numsp;\":\" \",\"nvap;\":\"≍⃒\",\"nvdash;\":\"⊬\",\"nvDash;\":\"⊭\",\"nVdash;\":\"⊮\",\"nVDash;\":\"⊯\",\"nvge;\":\"≥⃒\",\"nvgt;\":\">⃒\",\"nvHarr;\":\"⤄\",\"nvinfin;\":\"⧞\",\"nvlArr;\":\"⤂\",\"nvle;\":\"≤⃒\",\"nvlt;\":\"<⃒\",\"nvltrie;\":\"⊴⃒\",\"nvrArr;\":\"⤃\",\"nvrtrie;\":\"⊵⃒\",\"nvsim;\":\"∼⃒\",\"nwarhk;\":\"⤣\",\"nwarr;\":\"↖\",\"nwArr;\":\"⇖\",\"nwarrow;\":\"↖\",\"nwnear;\":\"⤧\",\"Oacute;\":\"Ó\",Oacute:\"Ó\",\"oacute;\":\"ó\",oacute:\"ó\",\"oast;\":\"⊛\",\"Ocirc;\":\"Ô\",Ocirc:\"Ô\",\"ocirc;\":\"ô\",ocirc:\"ô\",\"ocir;\":\"⊚\",\"Ocy;\":\"О\",\"ocy;\":\"о\",\"odash;\":\"⊝\",\"Odblac;\":\"Ő\",\"odblac;\":\"ő\",\"odiv;\":\"⨸\",\"odot;\":\"⊙\",\"odsold;\":\"⦼\",\"OElig;\":\"Œ\",\"oelig;\":\"œ\",\"ofcir;\":\"⦿\",\"Ofr;\":\"𝔒\",\"ofr;\":\"𝔬\",\"ogon;\":\"˛\",\"Ograve;\":\"Ò\",Ograve:\"Ò\",\"ograve;\":\"ò\",ograve:\"ò\",\"ogt;\":\"⧁\",\"ohbar;\":\"⦵\",\"ohm;\":\"Ω\",\"oint;\":\"∮\",\"olarr;\":\"↺\",\"olcir;\":\"⦾\",\"olcross;\":\"⦻\",\"oline;\":\"‾\",\"olt;\":\"⧀\",\"Omacr;\":\"Ō\",\"omacr;\":\"ō\",\"Omega;\":\"Ω\",\"omega;\":\"ω\",\"Omicron;\":\"Ο\",\"omicron;\":\"ο\",\"omid;\":\"⦶\",\"ominus;\":\"⊖\",\"Oopf;\":\"𝕆\",\"oopf;\":\"𝕠\",\"opar;\":\"⦷\",\"OpenCurlyDoubleQuote;\":\"“\",\"OpenCurlyQuote;\":\"‘\",\"operp;\":\"⦹\",\"oplus;\":\"⊕\",\"orarr;\":\"↻\",\"Or;\":\"⩔\",\"or;\":\"∨\",\"ord;\":\"⩝\",\"order;\":\"ℴ\",\"orderof;\":\"ℴ\",\"ordf;\":\"ª\",ordf:\"ª\",\"ordm;\":\"º\",ordm:\"º\",\"origof;\":\"⊶\",\"oror;\":\"⩖\",\"orslope;\":\"⩗\",\"orv;\":\"⩛\",\"oS;\":\"Ⓢ\",\"Oscr;\":\"𝒪\",\"oscr;\":\"ℴ\",\"Oslash;\":\"Ø\",Oslash:\"Ø\",\"oslash;\":\"ø\",oslash:\"ø\",\"osol;\":\"⊘\",\"Otilde;\":\"Õ\",Otilde:\"Õ\",\"otilde;\":\"õ\",otilde:\"õ\",\"otimesas;\":\"⨶\",\"Otimes;\":\"⨷\",\"otimes;\":\"⊗\",\"Ouml;\":\"Ö\",Ouml:\"Ö\",\"ouml;\":\"ö\",ouml:\"ö\",\"ovbar;\":\"⌽\",\"OverBar;\":\"‾\",\"OverBrace;\":\"⏞\",\"OverBracket;\":\"⎴\",\"OverParenthesis;\":\"⏜\",\"para;\":\"¶\",para:\"¶\",\"parallel;\":\"∥\",\"par;\":\"∥\",\"parsim;\":\"⫳\",\"parsl;\":\"⫽\",\"part;\":\"∂\",\"PartialD;\":\"∂\",\"Pcy;\":\"П\",\"pcy;\":\"п\",\"percnt;\":\"%\",\"period;\":\".\",\"permil;\":\"‰\",\"perp;\":\"⊥\",\"pertenk;\":\"‱\",\"Pfr;\":\"𝔓\",\"pfr;\":\"𝔭\",\"Phi;\":\"Φ\",\"phi;\":\"φ\",\"phiv;\":\"ϕ\",\"phmmat;\":\"ℳ\",\"phone;\":\"☎\",\"Pi;\":\"Π\",\"pi;\":\"π\",\"pitchfork;\":\"⋔\",\"piv;\":\"ϖ\",\"planck;\":\"ℏ\",\"planckh;\":\"ℎ\",\"plankv;\":\"ℏ\",\"plusacir;\":\"⨣\",\"plusb;\":\"⊞\",\"pluscir;\":\"⨢\",\"plus;\":\"+\",\"plusdo;\":\"∔\",\"plusdu;\":\"⨥\",\"pluse;\":\"⩲\",\"PlusMinus;\":\"±\",\"plusmn;\":\"±\",plusmn:\"±\",\"plussim;\":\"⨦\",\"plustwo;\":\"⨧\",\"pm;\":\"±\",\"Poincareplane;\":\"ℌ\",\"pointint;\":\"⨕\",\"popf;\":\"𝕡\",\"Popf;\":\"ℙ\",\"pound;\":\"£\",pound:\"£\",\"prap;\":\"⪷\",\"Pr;\":\"⪻\",\"pr;\":\"≺\",\"prcue;\":\"≼\",\"precapprox;\":\"⪷\",\"prec;\":\"≺\",\"preccurlyeq;\":\"≼\",\"Precedes;\":\"≺\",\"PrecedesEqual;\":\"⪯\",\"PrecedesSlantEqual;\":\"≼\",\"PrecedesTilde;\":\"≾\",\"preceq;\":\"⪯\",\"precnapprox;\":\"⪹\",\"precneqq;\":\"⪵\",\"precnsim;\":\"⋨\",\"pre;\":\"⪯\",\"prE;\":\"⪳\",\"precsim;\":\"≾\",\"prime;\":\"′\",\"Prime;\":\"″\",\"primes;\":\"ℙ\",\"prnap;\":\"⪹\",\"prnE;\":\"⪵\",\"prnsim;\":\"⋨\",\"prod;\":\"∏\",\"Product;\":\"∏\",\"profalar;\":\"⌮\",\"profline;\":\"⌒\",\"profsurf;\":\"⌓\",\"prop;\":\"∝\",\"Proportional;\":\"∝\",\"Proportion;\":\"∷\",\"propto;\":\"∝\",\"prsim;\":\"≾\",\"prurel;\":\"⊰\",\"Pscr;\":\"𝒫\",\"pscr;\":\"𝓅\",\"Psi;\":\"Ψ\",\"psi;\":\"ψ\",\"puncsp;\":\" \",\"Qfr;\":\"𝔔\",\"qfr;\":\"𝔮\",\"qint;\":\"⨌\",\"qopf;\":\"𝕢\",\"Qopf;\":\"ℚ\",\"qprime;\":\"⁗\",\"Qscr;\":\"𝒬\",\"qscr;\":\"𝓆\",\"quaternions;\":\"ℍ\",\"quatint;\":\"⨖\",\"quest;\":\"?\",\"questeq;\":\"≟\",\"quot;\":'\"',quot:'\"',\"QUOT;\":'\"',QUOT:'\"',\"rAarr;\":\"⇛\",\"race;\":\"∽̱\",\"Racute;\":\"Ŕ\",\"racute;\":\"ŕ\",\"radic;\":\"√\",\"raemptyv;\":\"⦳\",\"rang;\":\"⟩\",\"Rang;\":\"⟫\",\"rangd;\":\"⦒\",\"range;\":\"⦥\",\"rangle;\":\"⟩\",\"raquo;\":\"»\",raquo:\"»\",\"rarrap;\":\"⥵\",\"rarrb;\":\"⇥\",\"rarrbfs;\":\"⤠\",\"rarrc;\":\"⤳\",\"rarr;\":\"→\",\"Rarr;\":\"↠\",\"rArr;\":\"⇒\",\"rarrfs;\":\"⤞\",\"rarrhk;\":\"↪\",\"rarrlp;\":\"↬\",\"rarrpl;\":\"⥅\",\"rarrsim;\":\"⥴\",\"Rarrtl;\":\"⤖\",\"rarrtl;\":\"↣\",\"rarrw;\":\"↝\",\"ratail;\":\"⤚\",\"rAtail;\":\"⤜\",\"ratio;\":\"∶\",\"rationals;\":\"ℚ\",\"rbarr;\":\"⤍\",\"rBarr;\":\"⤏\",\"RBarr;\":\"⤐\",\"rbbrk;\":\"❳\",\"rbrace;\":\"}\",\"rbrack;\":\"]\",\"rbrke;\":\"⦌\",\"rbrksld;\":\"⦎\",\"rbrkslu;\":\"⦐\",\"Rcaron;\":\"Ř\",\"rcaron;\":\"ř\",\"Rcedil;\":\"Ŗ\",\"rcedil;\":\"ŗ\",\"rceil;\":\"⌉\",\"rcub;\":\"}\",\"Rcy;\":\"Р\",\"rcy;\":\"р\",\"rdca;\":\"⤷\",\"rdldhar;\":\"⥩\",\"rdquo;\":\"”\",\"rdquor;\":\"”\",\"rdsh;\":\"↳\",\"real;\":\"ℜ\",\"realine;\":\"ℛ\",\"realpart;\":\"ℜ\",\"reals;\":\"ℝ\",\"Re;\":\"ℜ\",\"rect;\":\"▭\",\"reg;\":\"®\",reg:\"®\",\"REG;\":\"®\",REG:\"®\",\"ReverseElement;\":\"∋\",\"ReverseEquilibrium;\":\"⇋\",\"ReverseUpEquilibrium;\":\"⥯\",\"rfisht;\":\"⥽\",\"rfloor;\":\"⌋\",\"rfr;\":\"𝔯\",\"Rfr;\":\"ℜ\",\"rHar;\":\"⥤\",\"rhard;\":\"⇁\",\"rharu;\":\"⇀\",\"rharul;\":\"⥬\",\"Rho;\":\"Ρ\",\"rho;\":\"ρ\",\"rhov;\":\"ϱ\",\"RightAngleBracket;\":\"⟩\",\"RightArrowBar;\":\"⇥\",\"rightarrow;\":\"→\",\"RightArrow;\":\"→\",\"Rightarrow;\":\"⇒\",\"RightArrowLeftArrow;\":\"⇄\",\"rightarrowtail;\":\"↣\",\"RightCeiling;\":\"⌉\",\"RightDoubleBracket;\":\"⟧\",\"RightDownTeeVector;\":\"⥝\",\"RightDownVectorBar;\":\"⥕\",\"RightDownVector;\":\"⇂\",\"RightFloor;\":\"⌋\",\"rightharpoondown;\":\"⇁\",\"rightharpoonup;\":\"⇀\",\"rightleftarrows;\":\"⇄\",\"rightleftharpoons;\":\"⇌\",\"rightrightarrows;\":\"⇉\",\"rightsquigarrow;\":\"↝\",\"RightTeeArrow;\":\"↦\",\"RightTee;\":\"⊢\",\"RightTeeVector;\":\"⥛\",\"rightthreetimes;\":\"⋌\",\"RightTriangleBar;\":\"⧐\",\"RightTriangle;\":\"⊳\",\"RightTriangleEqual;\":\"⊵\",\"RightUpDownVector;\":\"⥏\",\"RightUpTeeVector;\":\"⥜\",\"RightUpVectorBar;\":\"⥔\",\"RightUpVector;\":\"↾\",\"RightVectorBar;\":\"⥓\",\"RightVector;\":\"⇀\",\"ring;\":\"˚\",\"risingdotseq;\":\"≓\",\"rlarr;\":\"⇄\",\"rlhar;\":\"⇌\",\"rlm;\":\"‏\",\"rmoustache;\":\"⎱\",\"rmoust;\":\"⎱\",\"rnmid;\":\"⫮\",\"roang;\":\"⟭\",\"roarr;\":\"⇾\",\"robrk;\":\"⟧\",\"ropar;\":\"⦆\",\"ropf;\":\"𝕣\",\"Ropf;\":\"ℝ\",\"roplus;\":\"⨮\",\"rotimes;\":\"⨵\",\"RoundImplies;\":\"⥰\",\"rpar;\":\")\",\"rpargt;\":\"⦔\",\"rppolint;\":\"⨒\",\"rrarr;\":\"⇉\",\"Rrightarrow;\":\"⇛\",\"rsaquo;\":\"›\",\"rscr;\":\"𝓇\",\"Rscr;\":\"ℛ\",\"rsh;\":\"↱\",\"Rsh;\":\"↱\",\"rsqb;\":\"]\",\"rsquo;\":\"’\",\"rsquor;\":\"’\",\"rthree;\":\"⋌\",\"rtimes;\":\"⋊\",\"rtri;\":\"▹\",\"rtrie;\":\"⊵\",\"rtrif;\":\"▸\",\"rtriltri;\":\"⧎\",\"RuleDelayed;\":\"⧴\",\"ruluhar;\":\"⥨\",\"rx;\":\"℞\",\"Sacute;\":\"Ś\",\"sacute;\":\"ś\",\"sbquo;\":\"‚\",\"scap;\":\"⪸\",\"Scaron;\":\"Š\",\"scaron;\":\"š\",\"Sc;\":\"⪼\",\"sc;\":\"≻\",\"sccue;\":\"≽\",\"sce;\":\"⪰\",\"scE;\":\"⪴\",\"Scedil;\":\"Ş\",\"scedil;\":\"ş\",\"Scirc;\":\"Ŝ\",\"scirc;\":\"ŝ\",\"scnap;\":\"⪺\",\"scnE;\":\"⪶\",\"scnsim;\":\"⋩\",\"scpolint;\":\"⨓\",\"scsim;\":\"≿\",\"Scy;\":\"С\",\"scy;\":\"с\",\"sdotb;\":\"⊡\",\"sdot;\":\"⋅\",\"sdote;\":\"⩦\",\"searhk;\":\"⤥\",\"searr;\":\"↘\",\"seArr;\":\"⇘\",\"searrow;\":\"↘\",\"sect;\":\"§\",sect:\"§\",\"semi;\":\";\",\"seswar;\":\"⤩\",\"setminus;\":\"∖\",\"setmn;\":\"∖\",\"sext;\":\"✶\",\"Sfr;\":\"𝔖\",\"sfr;\":\"𝔰\",\"sfrown;\":\"⌢\",\"sharp;\":\"♯\",\"SHCHcy;\":\"Щ\",\"shchcy;\":\"щ\",\"SHcy;\":\"Ш\",\"shcy;\":\"ш\",\"ShortDownArrow;\":\"↓\",\"ShortLeftArrow;\":\"←\",\"shortmid;\":\"∣\",\"shortparallel;\":\"∥\",\"ShortRightArrow;\":\"→\",\"ShortUpArrow;\":\"↑\",\"shy;\":\"­\",shy:\"­\",\"Sigma;\":\"Σ\",\"sigma;\":\"σ\",\"sigmaf;\":\"ς\",\"sigmav;\":\"ς\",\"sim;\":\"∼\",\"simdot;\":\"⩪\",\"sime;\":\"≃\",\"simeq;\":\"≃\",\"simg;\":\"⪞\",\"simgE;\":\"⪠\",\"siml;\":\"⪝\",\"simlE;\":\"⪟\",\"simne;\":\"≆\",\"simplus;\":\"⨤\",\"simrarr;\":\"⥲\",\"slarr;\":\"←\",\"SmallCircle;\":\"∘\",\"smallsetminus;\":\"∖\",\"smashp;\":\"⨳\",\"smeparsl;\":\"⧤\",\"smid;\":\"∣\",\"smile;\":\"⌣\",\"smt;\":\"⪪\",\"smte;\":\"⪬\",\"smtes;\":\"⪬︀\",\"SOFTcy;\":\"Ь\",\"softcy;\":\"ь\",\"solbar;\":\"⌿\",\"solb;\":\"⧄\",\"sol;\":\"/\",\"Sopf;\":\"𝕊\",\"sopf;\":\"𝕤\",\"spades;\":\"♠\",\"spadesuit;\":\"♠\",\"spar;\":\"∥\",\"sqcap;\":\"⊓\",\"sqcaps;\":\"⊓︀\",\"sqcup;\":\"⊔\",\"sqcups;\":\"⊔︀\",\"Sqrt;\":\"√\",\"sqsub;\":\"⊏\",\"sqsube;\":\"⊑\",\"sqsubset;\":\"⊏\",\"sqsubseteq;\":\"⊑\",\"sqsup;\":\"⊐\",\"sqsupe;\":\"⊒\",\"sqsupset;\":\"⊐\",\"sqsupseteq;\":\"⊒\",\"square;\":\"□\",\"Square;\":\"□\",\"SquareIntersection;\":\"⊓\",\"SquareSubset;\":\"⊏\",\"SquareSubsetEqual;\":\"⊑\",\"SquareSuperset;\":\"⊐\",\"SquareSupersetEqual;\":\"⊒\",\"SquareUnion;\":\"⊔\",\"squarf;\":\"▪\",\"squ;\":\"□\",\"squf;\":\"▪\",\"srarr;\":\"→\",\"Sscr;\":\"𝒮\",\"sscr;\":\"𝓈\",\"ssetmn;\":\"∖\",\"ssmile;\":\"⌣\",\"sstarf;\":\"⋆\",\"Star;\":\"⋆\",\"star;\":\"☆\",\"starf;\":\"★\",\"straightepsilon;\":\"ϵ\",\"straightphi;\":\"ϕ\",\"strns;\":\"¯\",\"sub;\":\"⊂\",\"Sub;\":\"⋐\",\"subdot;\":\"⪽\",\"subE;\":\"⫅\",\"sube;\":\"⊆\",\"subedot;\":\"⫃\",\"submult;\":\"⫁\",\"subnE;\":\"⫋\",\"subne;\":\"⊊\",\"subplus;\":\"⪿\",\"subrarr;\":\"⥹\",\"subset;\":\"⊂\",\"Subset;\":\"⋐\",\"subseteq;\":\"⊆\",\"subseteqq;\":\"⫅\",\"SubsetEqual;\":\"⊆\",\"subsetneq;\":\"⊊\",\"subsetneqq;\":\"⫋\",\"subsim;\":\"⫇\",\"subsub;\":\"⫕\",\"subsup;\":\"⫓\",\"succapprox;\":\"⪸\",\"succ;\":\"≻\",\"succcurlyeq;\":\"≽\",\"Succeeds;\":\"≻\",\"SucceedsEqual;\":\"⪰\",\"SucceedsSlantEqual;\":\"≽\",\"SucceedsTilde;\":\"≿\",\"succeq;\":\"⪰\",\"succnapprox;\":\"⪺\",\"succneqq;\":\"⪶\",\"succnsim;\":\"⋩\",\"succsim;\":\"≿\",\"SuchThat;\":\"∋\",\"sum;\":\"∑\",\"Sum;\":\"∑\",\"sung;\":\"♪\",\"sup1;\":\"¹\",sup1:\"¹\",\"sup2;\":\"²\",sup2:\"²\",\"sup3;\":\"³\",sup3:\"³\",\"sup;\":\"⊃\",\"Sup;\":\"⋑\",\"supdot;\":\"⪾\",\"supdsub;\":\"⫘\",\"supE;\":\"⫆\",\"supe;\":\"⊇\",\"supedot;\":\"⫄\",\"Superset;\":\"⊃\",\"SupersetEqual;\":\"⊇\",\"suphsol;\":\"⟉\",\"suphsub;\":\"⫗\",\"suplarr;\":\"⥻\",\"supmult;\":\"⫂\",\"supnE;\":\"⫌\",\"supne;\":\"⊋\",\"supplus;\":\"⫀\",\"supset;\":\"⊃\",\"Supset;\":\"⋑\",\"supseteq;\":\"⊇\",\"supseteqq;\":\"⫆\",\"supsetneq;\":\"⊋\",\"supsetneqq;\":\"⫌\",\"supsim;\":\"⫈\",\"supsub;\":\"⫔\",\"supsup;\":\"⫖\",\"swarhk;\":\"⤦\",\"swarr;\":\"↙\",\"swArr;\":\"⇙\",\"swarrow;\":\"↙\",\"swnwar;\":\"⤪\",\"szlig;\":\"ß\",szlig:\"ß\",\"Tab;\":\"\t\",\"target;\":\"⌖\",\"Tau;\":\"Τ\",\"tau;\":\"τ\",\"tbrk;\":\"⎴\",\"Tcaron;\":\"Ť\",\"tcaron;\":\"ť\",\"Tcedil;\":\"Ţ\",\"tcedil;\":\"ţ\",\"Tcy;\":\"Т\",\"tcy;\":\"т\",\"tdot;\":\"⃛\",\"telrec;\":\"⌕\",\"Tfr;\":\"𝔗\",\"tfr;\":\"𝔱\",\"there4;\":\"∴\",\"therefore;\":\"∴\",\"Therefore;\":\"∴\",\"Theta;\":\"Θ\",\"theta;\":\"θ\",\"thetasym;\":\"ϑ\",\"thetav;\":\"ϑ\",\"thickapprox;\":\"≈\",\"thicksim;\":\"∼\",\"ThickSpace;\":\"  \",\"ThinSpace;\":\" \",\"thinsp;\":\" \",\"thkap;\":\"≈\",\"thksim;\":\"∼\",\"THORN;\":\"Þ\",THORN:\"Þ\",\"thorn;\":\"þ\",thorn:\"þ\",\"tilde;\":\"˜\",\"Tilde;\":\"∼\",\"TildeEqual;\":\"≃\",\"TildeFullEqual;\":\"≅\",\"TildeTilde;\":\"≈\",\"timesbar;\":\"⨱\",\"timesb;\":\"⊠\",\"times;\":\"×\",times:\"×\",\"timesd;\":\"⨰\",\"tint;\":\"∭\",\"toea;\":\"⤨\",\"topbot;\":\"⌶\",\"topcir;\":\"⫱\",\"top;\":\"⊤\",\"Topf;\":\"𝕋\",\"topf;\":\"𝕥\",\"topfork;\":\"⫚\",\"tosa;\":\"⤩\",\"tprime;\":\"‴\",\"trade;\":\"™\",\"TRADE;\":\"™\",\"triangle;\":\"▵\",\"triangledown;\":\"▿\",\"triangleleft;\":\"◃\",\"trianglelefteq;\":\"⊴\",\"triangleq;\":\"≜\",\"triangleright;\":\"▹\",\"trianglerighteq;\":\"⊵\",\"tridot;\":\"◬\",\"trie;\":\"≜\",\"triminus;\":\"⨺\",\"TripleDot;\":\"⃛\",\"triplus;\":\"⨹\",\"trisb;\":\"⧍\",\"tritime;\":\"⨻\",\"trpezium;\":\"⏢\",\"Tscr;\":\"𝒯\",\"tscr;\":\"𝓉\",\"TScy;\":\"Ц\",\"tscy;\":\"ц\",\"TSHcy;\":\"Ћ\",\"tshcy;\":\"ћ\",\"Tstrok;\":\"Ŧ\",\"tstrok;\":\"ŧ\",\"twixt;\":\"≬\",\"twoheadleftarrow;\":\"↞\",\"twoheadrightarrow;\":\"↠\",\"Uacute;\":\"Ú\",Uacute:\"Ú\",\"uacute;\":\"ú\",uacute:\"ú\",\"uarr;\":\"↑\",\"Uarr;\":\"↟\",\"uArr;\":\"⇑\",\"Uarrocir;\":\"⥉\",\"Ubrcy;\":\"Ў\",\"ubrcy;\":\"ў\",\"Ubreve;\":\"Ŭ\",\"ubreve;\":\"ŭ\",\"Ucirc;\":\"Û\",Ucirc:\"Û\",\"ucirc;\":\"û\",ucirc:\"û\",\"Ucy;\":\"У\",\"ucy;\":\"у\",\"udarr;\":\"⇅\",\"Udblac;\":\"Ű\",\"udblac;\":\"ű\",\"udhar;\":\"⥮\",\"ufisht;\":\"⥾\",\"Ufr;\":\"𝔘\",\"ufr;\":\"𝔲\",\"Ugrave;\":\"Ù\",Ugrave:\"Ù\",\"ugrave;\":\"ù\",ugrave:\"ù\",\"uHar;\":\"⥣\",\"uharl;\":\"↿\",\"uharr;\":\"↾\",\"uhblk;\":\"▀\",\"ulcorn;\":\"⌜\",\"ulcorner;\":\"⌜\",\"ulcrop;\":\"⌏\",\"ultri;\":\"◸\",\"Umacr;\":\"Ū\",\"umacr;\":\"ū\",\"uml;\":\"¨\",uml:\"¨\",\"UnderBar;\":\"_\",\"UnderBrace;\":\"⏟\",\"UnderBracket;\":\"⎵\",\"UnderParenthesis;\":\"⏝\",\"Union;\":\"⋃\",\"UnionPlus;\":\"⊎\",\"Uogon;\":\"Ų\",\"uogon;\":\"ų\",\"Uopf;\":\"𝕌\",\"uopf;\":\"𝕦\",\"UpArrowBar;\":\"⤒\",\"uparrow;\":\"↑\",\"UpArrow;\":\"↑\",\"Uparrow;\":\"⇑\",\"UpArrowDownArrow;\":\"⇅\",\"updownarrow;\":\"↕\",\"UpDownArrow;\":\"↕\",\"Updownarrow;\":\"⇕\",\"UpEquilibrium;\":\"⥮\",\"upharpoonleft;\":\"↿\",\"upharpoonright;\":\"↾\",\"uplus;\":\"⊎\",\"UpperLeftArrow;\":\"↖\",\"UpperRightArrow;\":\"↗\",\"upsi;\":\"υ\",\"Upsi;\":\"ϒ\",\"upsih;\":\"ϒ\",\"Upsilon;\":\"Υ\",\"upsilon;\":\"υ\",\"UpTeeArrow;\":\"↥\",\"UpTee;\":\"⊥\",\"upuparrows;\":\"⇈\",\"urcorn;\":\"⌝\",\"urcorner;\":\"⌝\",\"urcrop;\":\"⌎\",\"Uring;\":\"Ů\",\"uring;\":\"ů\",\"urtri;\":\"◹\",\"Uscr;\":\"𝒰\",\"uscr;\":\"𝓊\",\"utdot;\":\"⋰\",\"Utilde;\":\"Ũ\",\"utilde;\":\"ũ\",\"utri;\":\"▵\",\"utrif;\":\"▴\",\"uuarr;\":\"⇈\",\"Uuml;\":\"Ü\",Uuml:\"Ü\",\"uuml;\":\"ü\",uuml:\"ü\",\"uwangle;\":\"⦧\",\"vangrt;\":\"⦜\",\"varepsilon;\":\"ϵ\",\"varkappa;\":\"ϰ\",\"varnothing;\":\"∅\",\"varphi;\":\"ϕ\",\"varpi;\":\"ϖ\",\"varpropto;\":\"∝\",\"varr;\":\"↕\",\"vArr;\":\"⇕\",\"varrho;\":\"ϱ\",\"varsigma;\":\"ς\",\"varsubsetneq;\":\"⊊︀\",\"varsubsetneqq;\":\"⫋︀\",\"varsupsetneq;\":\"⊋︀\",\"varsupsetneqq;\":\"⫌︀\",\"vartheta;\":\"ϑ\",\"vartriangleleft;\":\"⊲\",\"vartriangleright;\":\"⊳\",\"vBar;\":\"⫨\",\"Vbar;\":\"⫫\",\"vBarv;\":\"⫩\",\"Vcy;\":\"В\",\"vcy;\":\"в\",\"vdash;\":\"⊢\",\"vDash;\":\"⊨\",\"Vdash;\":\"⊩\",\"VDash;\":\"⊫\",\"Vdashl;\":\"⫦\",\"veebar;\":\"⊻\",\"vee;\":\"∨\",\"Vee;\":\"⋁\",\"veeeq;\":\"≚\",\"vellip;\":\"⋮\",\"verbar;\":\"|\",\"Verbar;\":\"‖\",\"vert;\":\"|\",\"Vert;\":\"‖\",\"VerticalBar;\":\"∣\",\"VerticalLine;\":\"|\",\"VerticalSeparator;\":\"❘\",\"VerticalTilde;\":\"≀\",\"VeryThinSpace;\":\" \",\"Vfr;\":\"𝔙\",\"vfr;\":\"𝔳\",\"vltri;\":\"⊲\",\"vnsub;\":\"⊂⃒\",\"vnsup;\":\"⊃⃒\",\"Vopf;\":\"𝕍\",\"vopf;\":\"𝕧\",\"vprop;\":\"∝\",\"vrtri;\":\"⊳\",\"Vscr;\":\"𝒱\",\"vscr;\":\"𝓋\",\"vsubnE;\":\"⫋︀\",\"vsubne;\":\"⊊︀\",\"vsupnE;\":\"⫌︀\",\"vsupne;\":\"⊋︀\",\"Vvdash;\":\"⊪\",\"vzigzag;\":\"⦚\",\"Wcirc;\":\"Ŵ\",\"wcirc;\":\"ŵ\",\"wedbar;\":\"⩟\",\"wedge;\":\"∧\",\"Wedge;\":\"⋀\",\"wedgeq;\":\"≙\",\"weierp;\":\"℘\",\"Wfr;\":\"𝔚\",\"wfr;\":\"𝔴\",\"Wopf;\":\"𝕎\",\"wopf;\":\"𝕨\",\"wp;\":\"℘\",\"wr;\":\"≀\",\"wreath;\":\"≀\",\"Wscr;\":\"𝒲\",\"wscr;\":\"𝓌\",\"xcap;\":\"⋂\",\"xcirc;\":\"◯\",\"xcup;\":\"⋃\",\"xdtri;\":\"▽\",\"Xfr;\":\"𝔛\",\"xfr;\":\"𝔵\",\"xharr;\":\"⟷\",\"xhArr;\":\"⟺\",\"Xi;\":\"Ξ\",\"xi;\":\"ξ\",\"xlarr;\":\"⟵\",\"xlArr;\":\"⟸\",\"xmap;\":\"⟼\",\"xnis;\":\"⋻\",\"xodot;\":\"⨀\",\"Xopf;\":\"𝕏\",\"xopf;\":\"𝕩\",\"xoplus;\":\"⨁\",\"xotime;\":\"⨂\",\"xrarr;\":\"⟶\",\"xrArr;\":\"⟹\",\"Xscr;\":\"𝒳\",\"xscr;\":\"𝓍\",\"xsqcup;\":\"⨆\",\"xuplus;\":\"⨄\",\"xutri;\":\"△\",\"xvee;\":\"⋁\",\"xwedge;\":\"⋀\",\"Yacute;\":\"Ý\",Yacute:\"Ý\",\"yacute;\":\"ý\",yacute:\"ý\",\"YAcy;\":\"Я\",\"yacy;\":\"я\",\"Ycirc;\":\"Ŷ\",\"ycirc;\":\"ŷ\",\"Ycy;\":\"Ы\",\"ycy;\":\"ы\",\"yen;\":\"¥\",yen:\"¥\",\"Yfr;\":\"𝔜\",\"yfr;\":\"𝔶\",\"YIcy;\":\"Ї\",\"yicy;\":\"ї\",\"Yopf;\":\"𝕐\",\"yopf;\":\"𝕪\",\"Yscr;\":\"𝒴\",\"yscr;\":\"𝓎\",\"YUcy;\":\"Ю\",\"yucy;\":\"ю\",\"yuml;\":\"ÿ\",yuml:\"ÿ\",\"Yuml;\":\"Ÿ\",\"Zacute;\":\"Ź\",\"zacute;\":\"ź\",\"Zcaron;\":\"Ž\",\"zcaron;\":\"ž\",\"Zcy;\":\"З\",\"zcy;\":\"з\",\"Zdot;\":\"Ż\",\"zdot;\":\"ż\",\"zeetrf;\":\"ℨ\",\"ZeroWidthSpace;\":\"​\",\"Zeta;\":\"Ζ\",\"zeta;\":\"ζ\",\"zfr;\":\"𝔷\",\"Zfr;\":\"ℨ\",\"ZHcy;\":\"Ж\",\"zhcy;\":\"ж\",\"zigrarr;\":\"⇝\",\"zopf;\":\"𝕫\",\"Zopf;\":\"ℤ\",\"Zscr;\":\"𝒵\",\"zscr;\":\"𝓏\",\"zwj;\":\"‍\",\"zwnj;\":\"‌\"}\n},{}],13:[function(_dereq_,module){function replacer(key,value){return util.isUndefined(value)?\"\"+value:!util.isNumber(value)||!isNaN(value)&&isFinite(value)?util.isFunction(value)||util.isRegExp(value)?\"\"+value:value:\"\"+value}function truncate(s,n){return util.isString(s)?n>s.length?s:s.slice(0,n):s}function getMessage(self){return truncate(JSON.stringify(self.actual,replacer),128)+\" \"+self.operator+\" \"+truncate(JSON.stringify(self.expected,replacer),128)}function fail(actual,expected,message,operator,stackStartFunction){throw new assert.AssertionError({message:message,actual:actual,expected:expected,operator:operator,stackStartFunction:stackStartFunction})}function ok(value,message){value||fail(value,!0,message,\"==\",assert.ok)}function _deepEqual(actual,expected){if(actual===expected)return!0;if(util.isBuffer(actual)&&util.isBuffer(expected)){if(actual.length!=expected.length)return!1;for(var i=0;actual.length>i;i++)if(actual[i]!==expected[i])return!1;return!0}return util.isDate(actual)&&util.isDate(expected)?actual.getTime()===expected.getTime():util.isRegExp(actual)&&util.isRegExp(expected)?actual.source===expected.source&&actual.global===expected.global&&actual.multiline===expected.multiline&&actual.lastIndex===expected.lastIndex&&actual.ignoreCase===expected.ignoreCase:util.isObject(actual)||util.isObject(expected)?objEquiv(actual,expected):actual==expected}function isArguments(object){return\"[object Arguments]\"==Object.prototype.toString.call(object)}function objEquiv(a,b){if(util.isNullOrUndefined(a)||util.isNullOrUndefined(b))return!1;if(a.prototype!==b.prototype)return!1;if(isArguments(a))return isArguments(b)?(a=pSlice.call(a),b=pSlice.call(b),_deepEqual(a,b)):!1;try{var key,i,ka=objectKeys(a),kb=objectKeys(b)}catch(e){return!1}if(ka.length!=kb.length)return!1;for(ka.sort(),kb.sort(),i=ka.length-1;i>=0;i--)if(ka[i]!=kb[i])return!1;for(i=ka.length-1;i>=0;i--)if(key=ka[i],!_deepEqual(a[key],b[key]))return!1;return!0}function expectedException(actual,expected){return actual&&expected?\"[object RegExp]\"==Object.prototype.toString.call(expected)?expected.test(actual):actual instanceof expected?!0:expected.call({},actual)===!0?!0:!1:!1}function _throws(shouldThrow,block,expected,message){var actual;util.isString(expected)&&(message=expected,expected=null);try{block()}catch(e){actual=e}if(message=(expected&&expected.name?\" (\"+expected.name+\").\":\".\")+(message?\" \"+message:\".\"),shouldThrow&&!actual&&fail(actual,expected,\"Missing expected exception\"+message),!shouldThrow&&expectedException(actual,expected)&&fail(actual,expected,\"Got unwanted exception\"+message),shouldThrow&&actual&&expected&&!expectedException(actual,expected)||!shouldThrow&&actual)throw actual}var util=_dereq_(\"util/\"),pSlice=Array.prototype.slice,hasOwn=Object.prototype.hasOwnProperty,assert=module.exports=ok;assert.AssertionError=function(options){this.name=\"AssertionError\",this.actual=options.actual,this.expected=options.expected,this.operator=options.operator,options.message?(this.message=options.message,this.generatedMessage=!1):(this.message=getMessage(this),this.generatedMessage=!0);var stackStartFunction=options.stackStartFunction||fail;if(Error.captureStackTrace)Error.captureStackTrace(this,stackStartFunction);else{var err=Error();if(err.stack){var out=err.stack,fn_name=stackStartFunction.name,idx=out.indexOf(\"\\n\"+fn_name);if(idx>=0){var next_line=out.indexOf(\"\\n\",idx+1);out=out.substring(next_line+1)}this.stack=out}}},util.inherits(assert.AssertionError,Error),assert.fail=fail,assert.ok=ok,assert.equal=function(actual,expected,message){actual!=expected&&fail(actual,expected,message,\"==\",assert.equal)},assert.notEqual=function(actual,expected,message){actual==expected&&fail(actual,expected,message,\"!=\",assert.notEqual)},assert.deepEqual=function(actual,expected,message){_deepEqual(actual,expected)||fail(actual,expected,message,\"deepEqual\",assert.deepEqual)},assert.notDeepEqual=function(actual,expected,message){_deepEqual(actual,expected)&&fail(actual,expected,message,\"notDeepEqual\",assert.notDeepEqual)},assert.strictEqual=function(actual,expected,message){actual!==expected&&fail(actual,expected,message,\"===\",assert.strictEqual)},assert.notStrictEqual=function(actual,expected,message){actual===expected&&fail(actual,expected,message,\"!==\",assert.notStrictEqual)},assert.throws=function(){_throws.apply(this,[!0].concat(pSlice.call(arguments)))},assert.doesNotThrow=function(){_throws.apply(this,[!1].concat(pSlice.call(arguments)))},assert.ifError=function(err){if(err)throw err};var objectKeys=Object.keys||function(obj){var keys=[];for(var key in obj)hasOwn.call(obj,key)&&keys.push(key);return keys}},{\"util/\":15}],14:[function(_dereq_,module){module.exports=function(arg){return arg&&\"object\"==typeof arg&&\"function\"==typeof arg.copy&&\"function\"==typeof arg.fill&&\"function\"==typeof arg.readUInt8}},{}],15:[function(_dereq_,module,exports){(function(process,global){function inspect(obj,opts){var ctx={seen:[],stylize:stylizeNoColor};return arguments.length>=3&&(ctx.depth=arguments[2]),arguments.length>=4&&(ctx.colors=arguments[3]),isBoolean(opts)?ctx.showHidden=opts:opts&&exports._extend(ctx,opts),isUndefined(ctx.showHidden)&&(ctx.showHidden=!1),isUndefined(ctx.depth)&&(ctx.depth=2),isUndefined(ctx.colors)&&(ctx.colors=!1),isUndefined(ctx.customInspect)&&(ctx.customInspect=!0),ctx.colors&&(ctx.stylize=stylizeWithColor),formatValue(ctx,obj,ctx.depth)}function stylizeWithColor(str,styleType){var style=inspect.styles[styleType];return style?\"\u001b[\"+inspect.colors[style][0]+\"m\"+str+\"\u001b[\"+inspect.colors[style][1]+\"m\":str}function stylizeNoColor(str){return str}function arrayToHash(array){var hash={};return array.forEach(function(val){hash[val]=!0}),hash}function formatValue(ctx,value,recurseTimes){if(ctx.customInspect&&value&&isFunction(value.inspect)&&value.inspect!==exports.inspect&&(!value.constructor||value.constructor.prototype!==value)){var ret=value.inspect(recurseTimes,ctx);return isString(ret)||(ret=formatValue(ctx,ret,recurseTimes)),ret}var primitive=formatPrimitive(ctx,value);if(primitive)return primitive;var keys=Object.keys(value),visibleKeys=arrayToHash(keys);if(ctx.showHidden&&(keys=Object.getOwnPropertyNames(value)),isError(value)&&(keys.indexOf(\"message\")>=0||keys.indexOf(\"description\")>=0))return formatError(value);if(0===keys.length){if(isFunction(value)){var name=value.name?\": \"+value.name:\"\";return ctx.stylize(\"[Function\"+name+\"]\",\"special\")}if(isRegExp(value))return ctx.stylize(RegExp.prototype.toString.call(value),\"regexp\");if(isDate(value))return ctx.stylize(Date.prototype.toString.call(value),\"date\");if(isError(value))return formatError(value)}var base=\"\",array=!1,braces=[\"{\",\"}\"];if(isArray(value)&&(array=!0,braces=[\"[\",\"]\"]),isFunction(value)){var n=value.name?\": \"+value.name:\"\";base=\" [Function\"+n+\"]\"}if(isRegExp(value)&&(base=\" \"+RegExp.prototype.toString.call(value)),isDate(value)&&(base=\" \"+Date.prototype.toUTCString.call(value)),isError(value)&&(base=\" \"+formatError(value)),0===keys.length&&(!array||0==value.length))return braces[0]+base+braces[1];if(0>recurseTimes)return isRegExp(value)?ctx.stylize(RegExp.prototype.toString.call(value),\"regexp\"):ctx.stylize(\"[Object]\",\"special\");ctx.seen.push(value);var output;return output=array?formatArray(ctx,value,recurseTimes,visibleKeys,keys):keys.map(function(key){return formatProperty(ctx,value,recurseTimes,visibleKeys,key,array)}),ctx.seen.pop(),reduceToSingleString(output,base,braces)}function formatPrimitive(ctx,value){if(isUndefined(value))return ctx.stylize(\"undefined\",\"undefined\");if(isString(value)){var simple=\"'\"+JSON.stringify(value).replace(/^\"|\"$/g,\"\").replace(/'/g,\"\\\\'\").replace(/\\\\\"/g,'\"')+\"'\";return ctx.stylize(simple,\"string\")}return isNumber(value)?ctx.stylize(\"\"+value,\"number\"):isBoolean(value)?ctx.stylize(\"\"+value,\"boolean\"):isNull(value)?ctx.stylize(\"null\",\"null\"):void 0}function formatError(value){return\"[\"+Error.prototype.toString.call(value)+\"]\"}function formatArray(ctx,value,recurseTimes,visibleKeys,keys){for(var output=[],i=0,l=value.length;l>i;++i)hasOwnProperty(value,i+\"\")?output.push(formatProperty(ctx,value,recurseTimes,visibleKeys,i+\"\",!0)):output.push(\"\");return keys.forEach(function(key){key.match(/^\\d+$/)||output.push(formatProperty(ctx,value,recurseTimes,visibleKeys,key,!0))}),output}function formatProperty(ctx,value,recurseTimes,visibleKeys,key,array){var name,str,desc;if(desc=Object.getOwnPropertyDescriptor(value,key)||{value:value[key]},desc.get?str=desc.set?ctx.stylize(\"[Getter/Setter]\",\"special\"):ctx.stylize(\"[Getter]\",\"special\"):desc.set&&(str=ctx.stylize(\"[Setter]\",\"special\")),hasOwnProperty(visibleKeys,key)||(name=\"[\"+key+\"]\"),str||(0>ctx.seen.indexOf(desc.value)?(str=isNull(recurseTimes)?formatValue(ctx,desc.value,null):formatValue(ctx,desc.value,recurseTimes-1),str.indexOf(\"\\n\")>-1&&(str=array?str.split(\"\\n\").map(function(line){return\"  \"+line}).join(\"\\n\").substr(2):\"\\n\"+str.split(\"\\n\").map(function(line){return\"   \"+line}).join(\"\\n\"))):str=ctx.stylize(\"[Circular]\",\"special\")),isUndefined(name)){if(array&&key.match(/^\\d+$/))return str;name=JSON.stringify(\"\"+key),name.match(/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?(name=name.substr(1,name.length-2),name=ctx.stylize(name,\"name\")):(name=name.replace(/'/g,\"\\\\'\").replace(/\\\\\"/g,'\"').replace(/(^\"|\"$)/g,\"'\"),name=ctx.stylize(name,\"string\"))}return name+\": \"+str}function reduceToSingleString(output,base,braces){var numLinesEst=0,length=output.reduce(function(prev,cur){return numLinesEst++,cur.indexOf(\"\\n\")>=0&&numLinesEst++,prev+cur.replace(/\\u001b\\[\\d\\d?m/g,\"\").length+1},0);return length>60?braces[0]+(\"\"===base?\"\":base+\"\\n \")+\" \"+output.join(\",\\n  \")+\" \"+braces[1]:braces[0]+base+\" \"+output.join(\", \")+\" \"+braces[1]}function isArray(ar){return Array.isArray(ar)}function isBoolean(arg){return\"boolean\"==typeof arg}function isNull(arg){return null===arg}function isNullOrUndefined(arg){return null==arg}function isNumber(arg){return\"number\"==typeof arg}function isString(arg){return\"string\"==typeof arg}function isSymbol(arg){return\"symbol\"==typeof arg}function isUndefined(arg){return void 0===arg}function isRegExp(re){return isObject(re)&&\"[object RegExp]\"===objectToString(re)}function isObject(arg){return\"object\"==typeof arg&&null!==arg}function isDate(d){return isObject(d)&&\"[object Date]\"===objectToString(d)}function isError(e){return isObject(e)&&(\"[object Error]\"===objectToString(e)||e instanceof Error)}function isFunction(arg){return\"function\"==typeof arg}function isPrimitive(arg){return null===arg||\"boolean\"==typeof arg||\"number\"==typeof arg||\"string\"==typeof arg||\"symbol\"==typeof arg||arg===void 0}function objectToString(o){return Object.prototype.toString.call(o)}function pad(n){return 10>n?\"0\"+n.toString(10):n.toString(10)}function timestamp(){var d=new Date,time=[pad(d.getHours()),pad(d.getMinutes()),pad(d.getSeconds())].join(\":\");return[d.getDate(),months[d.getMonth()],time].join(\" \")}function hasOwnProperty(obj,prop){return Object.prototype.hasOwnProperty.call(obj,prop)}var formatRegExp=/%[sdj%]/g;exports.format=function(f){if(!isString(f)){for(var objects=[],i=0;arguments.length>i;i++)objects.push(inspect(arguments[i]));return objects.join(\" \")}for(var i=1,args=arguments,len=args.length,str=(f+\"\").replace(formatRegExp,function(x){if(\"%%\"===x)return\"%\";if(i>=len)return x;switch(x){case\"%s\":return args[i++]+\"\";case\"%d\":return Number(args[i++]);case\"%j\":try{return JSON.stringify(args[i++])}catch(_){return\"[Circular]\"}default:return x}}),x=args[i];len>i;x=args[++i])str+=isNull(x)||!isObject(x)?\" \"+x:\" \"+inspect(x);return str},exports.deprecate=function(fn,msg){function deprecated(){if(!warned){if(process.throwDeprecation)throw Error(msg);process.traceDeprecation?console.trace(msg):console.error(msg),warned=!0}return fn.apply(this,arguments)}if(isUndefined(global.process))return function(){return exports.deprecate(fn,msg).apply(this,arguments)};if(process.noDeprecation===!0)return fn;var warned=!1;return deprecated};var debugEnviron,debugs={};exports.debuglog=function(set){if(isUndefined(debugEnviron)&&(debugEnviron=process.env.NODE_DEBUG||\"\"),set=set.toUpperCase(),!debugs[set])if(RegExp(\"\\\\b\"+set+\"\\\\b\",\"i\").test(debugEnviron)){var pid=process.pid;debugs[set]=function(){var msg=exports.format.apply(exports,arguments);console.error(\"%s %d: %s\",set,pid,msg)}}else debugs[set]=function(){};return debugs[set]},exports.inspect=inspect,inspect.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},inspect.styles={special:\"cyan\",number:\"yellow\",\"boolean\":\"yellow\",undefined:\"grey\",\"null\":\"bold\",string:\"green\",date:\"magenta\",regexp:\"red\"},exports.isArray=isArray,exports.isBoolean=isBoolean,exports.isNull=isNull,exports.isNullOrUndefined=isNullOrUndefined,exports.isNumber=isNumber,exports.isString=isString,exports.isSymbol=isSymbol,exports.isUndefined=isUndefined,exports.isRegExp=isRegExp,exports.isObject=isObject,exports.isDate=isDate,exports.isError=isError,exports.isFunction=isFunction,exports.isPrimitive=isPrimitive,exports.isBuffer=_dereq_(\"./support/isBuffer\");var months=[\"Jan\",\"Feb\",\"Mar\",\"Apr\",\"May\",\"Jun\",\"Jul\",\"Aug\",\"Sep\",\"Oct\",\"Nov\",\"Dec\"];exports.log=function(){console.log(\"%s - %s\",timestamp(),exports.format.apply(exports,arguments))},exports.inherits=_dereq_(\"inherits\"),exports._extend=function(origin,add){if(!add||!isObject(add))return origin;for(var keys=Object.keys(add),i=keys.length;i--;)origin[keys[i]]=add[keys[i]];return origin}}).call(this,_dereq_(\"/usr/local/lib/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js\"),\"undefined\"!=typeof self?self:\"undefined\"!=typeof window?window:{})},{\"./support/isBuffer\":14,\"/usr/local/lib/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js\":18,inherits:17}],16:[function(_dereq_,module){function EventEmitter(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function isFunction(arg){return\"function\"==typeof arg}function isNumber(arg){return\"number\"==typeof arg}function isObject(arg){return\"object\"==typeof arg&&null!==arg}function isUndefined(arg){return void 0===arg}module.exports=EventEmitter,EventEmitter.EventEmitter=EventEmitter,EventEmitter.prototype._events=void 0,EventEmitter.prototype._maxListeners=void 0,EventEmitter.defaultMaxListeners=10,EventEmitter.prototype.setMaxListeners=function(n){if(!isNumber(n)||0>n||isNaN(n))throw TypeError(\"n must be a positive number\");return this._maxListeners=n,this},EventEmitter.prototype.emit=function(type){var er,handler,len,args,i,listeners;if(this._events||(this._events={}),\"error\"===type&&(!this._events.error||isObject(this._events.error)&&!this._events.error.length))throw er=arguments[1],er instanceof Error?er:TypeError('Uncaught, unspecified \"error\" event.');if(handler=this._events[type],isUndefined(handler))return!1;if(isFunction(handler))switch(arguments.length){case 1:handler.call(this);break;case 2:handler.call(this,arguments[1]);break;case 3:handler.call(this,arguments[1],arguments[2]);break;default:for(len=arguments.length,args=Array(len-1),i=1;len>i;i++)args[i-1]=arguments[i];handler.apply(this,args)}else if(isObject(handler)){for(len=arguments.length,args=Array(len-1),i=1;len>i;i++)args[i-1]=arguments[i];for(listeners=handler.slice(),len=listeners.length,i=0;len>i;i++)listeners[i].apply(this,args)}return!0},EventEmitter.prototype.addListener=function(type,listener){var m;if(!isFunction(listener))throw TypeError(\"listener must be a function\");if(this._events||(this._events={}),this._events.newListener&&this.emit(\"newListener\",type,isFunction(listener.listener)?listener.listener:listener),this._events[type]?isObject(this._events[type])?this._events[type].push(listener):this._events[type]=[this._events[type],listener]:this._events[type]=listener,isObject(this._events[type])&&!this._events[type].warned){var m;m=isUndefined(this._maxListeners)?EventEmitter.defaultMaxListeners:this._maxListeners,m&&m>0&&this._events[type].length>m&&(this._events[type].warned=!0,console.error(\"(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.\",this._events[type].length),console.trace())}return this},EventEmitter.prototype.on=EventEmitter.prototype.addListener,EventEmitter.prototype.once=function(type,listener){function g(){this.removeListener(type,g),fired||(fired=!0,listener.apply(this,arguments))}if(!isFunction(listener))throw TypeError(\"listener must be a function\");var fired=!1;return g.listener=listener,this.on(type,g),this},EventEmitter.prototype.removeListener=function(type,listener){var list,position,length,i;if(!isFunction(listener))throw TypeError(\"listener must be a function\");if(!this._events||!this._events[type])return this;if(list=this._events[type],length=list.length,position=-1,list===listener||isFunction(list.listener)&&list.listener===listener)delete this._events[type],this._events.removeListener&&this.emit(\"removeListener\",type,listener);else if(isObject(list)){for(i=length;i-->0;)if(list[i]===listener||list[i].listener&&list[i].listener===listener){position=i;break}if(0>position)return this;1===list.length?(list.length=0,delete this._events[type]):list.splice(position,1),this._events.removeListener&&this.emit(\"removeListener\",type,listener)}return this},EventEmitter.prototype.removeAllListeners=function(type){var key,listeners;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[type]&&delete this._events[type],this;if(0===arguments.length){for(key in this._events)\"removeListener\"!==key&&this.removeAllListeners(key);return this.removeAllListeners(\"removeListener\"),this._events={},this}if(listeners=this._events[type],isFunction(listeners))this.removeListener(type,listeners);else for(;listeners.length;)this.removeListener(type,listeners[listeners.length-1]);return delete this._events[type],this},EventEmitter.prototype.listeners=function(type){var ret;return ret=this._events&&this._events[type]?isFunction(this._events[type])?[this._events[type]]:this._events[type].slice():[]},EventEmitter.listenerCount=function(emitter,type){var ret;return ret=emitter._events&&emitter._events[type]?isFunction(emitter._events[type])?1:emitter._events[type].length:0}},{}],17:[function(_dereq_,module){module.exports=\"function\"==typeof Object.create?function(ctor,superCtor){ctor.super_=superCtor,ctor.prototype=Object.create(superCtor.prototype,{constructor:{value:ctor,enumerable:!1,writable:!0,configurable:!0}})}:function(ctor,superCtor){ctor.super_=superCtor;var TempCtor=function(){};TempCtor.prototype=superCtor.prototype,ctor.prototype=new TempCtor,ctor.prototype.constructor=ctor}},{}],18:[function(_dereq_,module){function noop(){}var process=module.exports={};process.nextTick=function(){var canSetImmediate=\"undefined\"!=typeof window&&window.setImmediate,canPost=\"undefined\"!=typeof window&&window.postMessage&&window.addEventListener;if(canSetImmediate)return function(f){return window.setImmediate(f)};if(canPost){var queue=[];return window.addEventListener(\"message\",function(ev){var source=ev.source;if((source===window||null===source)&&\"process-tick\"===ev.data&&(ev.stopPropagation(),queue.length>0)){var fn=queue.shift();fn()}},!0),function(fn){queue.push(fn),window.postMessage(\"process-tick\",\"*\")}}return function(fn){setTimeout(fn,0)}}(),process.title=\"browser\",process.browser=!0,process.env={},process.argv=[],process.on=noop,process.once=noop,process.off=noop,process.emit=noop,process.binding=function(){throw Error(\"process.binding is not supported\")},process.cwd=function(){return\"/\"},process.chdir=function(){throw Error(\"process.chdir is not supported\")}},{}],19:[function(_dereq_,module){module.exports=_dereq_(14)},{}],20:[function(_dereq_,module){module.exports=_dereq_(15)},{\"./support/isBuffer\":19,\"/usr/local/lib/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js\":18,inherits:17}]},{},[9])(9)}),ace.define(\"ace/mode/html_worker\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/lib/lang\",\"ace/worker/mirror\",\"ace/mode/html/saxparser\"],function(acequire,exports){\"use strict\";var oop=acequire(\"../lib/oop\");acequire(\"../lib/lang\");var Mirror=acequire(\"../worker/mirror\").Mirror,SAXParser=acequire(\"./html/saxparser\").SAXParser,errorTypes={\"expected-doctype-but-got-start-tag\":\"info\",\"expected-doctype-but-got-chars\":\"info\",\"non-html-root\":\"info\"},Worker=exports.Worker=function(sender){Mirror.call(this,sender),this.setTimeout(400),this.context=null};oop.inherits(Worker,Mirror),function(){this.setOptions=function(options){this.context=options.context},this.onUpdate=function(){var value=this.doc.getValue();if(value){var parser=new SAXParser,errors=[],noop=function(){};parser.contentHandler={startDocument:noop,endDocument:noop,startElement:noop,endElement:noop,characters:noop},parser.errorHandler={error:function(message,location,code){errors.push({row:location.line,column:location.column,text:message,type:errorTypes[code]||\"error\"})}},this.context?parser.parseFragment(value,this.context):parser.parse(value),this.sender.emit(\"error\",errors)}}}.call(Worker.prototype)}),ace.define(\"ace/lib/es5-shim\",[\"require\",\"exports\",\"module\"],function(){function Empty(){}function doesDefinePropertyWork(object){try{return Object.defineProperty(object,\"sentinel\",{}),\"sentinel\"in object}catch(exception){}}function toInteger(n){return n=+n,n!==n?n=0:0!==n&&n!==1/0&&n!==-(1/0)&&(n=(n>0||-1)*Math.floor(Math.abs(n))),n}Function.prototype.bind||(Function.prototype.bind=function(that){var target=this;if(\"function\"!=typeof target)throw new TypeError(\"Function.prototype.bind called on incompatible \"+target);var args=slice.call(arguments,1),bound=function(){if(this instanceof bound){var result=target.apply(this,args.concat(slice.call(arguments)));return Object(result)===result?result:this}return target.apply(that,args.concat(slice.call(arguments)))};return target.prototype&&(Empty.prototype=target.prototype,bound.prototype=new Empty,Empty.prototype=null),bound});var defineGetter,defineSetter,lookupGetter,lookupSetter,supportsAccessors,call=Function.prototype.call,prototypeOfArray=Array.prototype,prototypeOfObject=Object.prototype,slice=prototypeOfArray.slice,_toString=call.bind(prototypeOfObject.toString),owns=call.bind(prototypeOfObject.hasOwnProperty);if((supportsAccessors=owns(prototypeOfObject,\"__defineGetter__\"))&&(defineGetter=call.bind(prototypeOfObject.__defineGetter__),defineSetter=call.bind(prototypeOfObject.__defineSetter__),lookupGetter=call.bind(prototypeOfObject.__lookupGetter__),lookupSetter=call.bind(prototypeOfObject.__lookupSetter__)),2!=[1,2].splice(0).length)if(function(){function makeArray(l){var a=Array(l+2);return a[0]=a[1]=0,a}var lengthBefore,array=[];return array.splice.apply(array,makeArray(20)),array.splice.apply(array,makeArray(26)),lengthBefore=array.length,array.splice(5,0,\"XXX\"),lengthBefore+1==array.length,lengthBefore+1==array.length?!0:void 0}()){var array_splice=Array.prototype.splice;Array.prototype.splice=function(start,deleteCount){return arguments.length?array_splice.apply(this,[void 0===start?0:start,void 0===deleteCount?this.length-start:deleteCount].concat(slice.call(arguments,2))):[]}}else Array.prototype.splice=function(pos,removeCount){var length=this.length;pos>0?pos>length&&(pos=length):void 0==pos?pos=0:0>pos&&(pos=Math.max(length+pos,0)),length>pos+removeCount||(removeCount=length-pos);var removed=this.slice(pos,pos+removeCount),insert=slice.call(arguments,2),add=insert.length;if(pos===length)add&&this.push.apply(this,insert);else{var remove=Math.min(removeCount,length-pos),tailOldPos=pos+remove,tailNewPos=tailOldPos+add-remove,tailCount=length-tailOldPos,lengthAfterRemove=length-remove;if(tailOldPos>tailNewPos)for(var i=0;tailCount>i;++i)this[tailNewPos+i]=this[tailOldPos+i];else if(tailNewPos>tailOldPos)for(i=tailCount;i--;)this[tailNewPos+i]=this[tailOldPos+i];if(add&&pos===lengthAfterRemove)this.length=lengthAfterRemove,this.push.apply(this,insert);else for(this.length=lengthAfterRemove+add,i=0;add>i;++i)this[pos+i]=insert[i]}return removed};Array.isArray||(Array.isArray=function(obj){return\"[object Array]\"==_toString(obj)});var boxedString=Object(\"a\"),splitString=\"a\"!=boxedString[0]||!(0 in boxedString);if(Array.prototype.forEach||(Array.prototype.forEach=function(fun){var object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,thisp=arguments[1],i=-1,length=self.length>>>0;if(\"[object Function]\"!=_toString(fun))throw new TypeError;for(;length>++i;)i in self&&fun.call(thisp,self[i],i,object)}),Array.prototype.map||(Array.prototype.map=function(fun){var object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,length=self.length>>>0,result=Array(length),thisp=arguments[1];if(\"[object Function]\"!=_toString(fun))throw new TypeError(fun+\" is not a function\");for(var i=0;length>i;i++)i in self&&(result[i]=fun.call(thisp,self[i],i,object));return result}),Array.prototype.filter||(Array.prototype.filter=function(fun){var value,object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,length=self.length>>>0,result=[],thisp=arguments[1];if(\"[object Function]\"!=_toString(fun))throw new TypeError(fun+\" is not a function\");for(var i=0;length>i;i++)i in self&&(value=self[i],fun.call(thisp,value,i,object)&&result.push(value));return result}),Array.prototype.every||(Array.prototype.every=function(fun){var object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,length=self.length>>>0,thisp=arguments[1];if(\"[object Function]\"!=_toString(fun))throw new TypeError(fun+\" is not a function\");for(var i=0;length>i;i++)if(i in self&&!fun.call(thisp,self[i],i,object))return!1;return!0}),Array.prototype.some||(Array.prototype.some=function(fun){var object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,length=self.length>>>0,thisp=arguments[1];if(\"[object Function]\"!=_toString(fun))throw new TypeError(fun+\" is not a function\");for(var i=0;length>i;i++)if(i in self&&fun.call(thisp,self[i],i,object))return!0;return!1}),Array.prototype.reduce||(Array.prototype.reduce=function(fun){var object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,length=self.length>>>0;if(\"[object Function]\"!=_toString(fun))throw new TypeError(fun+\" is not a function\");if(!length&&1==arguments.length)throw new TypeError(\"reduce of empty array with no initial value\");var result,i=0;if(arguments.length>=2)result=arguments[1];else for(;;){if(i in self){result=self[i++];break}if(++i>=length)throw new TypeError(\"reduce of empty array with no initial value\")}for(;length>i;i++)i in self&&(result=fun.call(void 0,result,self[i],i,object));return result}),Array.prototype.reduceRight||(Array.prototype.reduceRight=function(fun){var object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,length=self.length>>>0;if(\"[object Function]\"!=_toString(fun))throw new TypeError(fun+\" is not a function\");if(!length&&1==arguments.length)throw new TypeError(\"reduceRight of empty array with no initial value\");var result,i=length-1;if(arguments.length>=2)result=arguments[1];else for(;;){if(i in self){result=self[i--];break}if(0>--i)throw new TypeError(\"reduceRight of empty array with no initial value\")}do i in this&&(result=fun.call(void 0,result,self[i],i,object));while(i--);return result}),Array.prototype.indexOf&&-1==[0,1].indexOf(1,2)||(Array.prototype.indexOf=function(sought){var self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):toObject(this),length=self.length>>>0;if(!length)return-1;var i=0;for(arguments.length>1&&(i=toInteger(arguments[1])),i=i>=0?i:Math.max(0,length+i);length>i;i++)if(i in self&&self[i]===sought)return i;return-1}),Array.prototype.lastIndexOf&&-1==[0,1].lastIndexOf(0,-3)||(Array.prototype.lastIndexOf=function(sought){var self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):toObject(this),length=self.length>>>0;if(!length)return-1;var i=length-1;for(arguments.length>1&&(i=Math.min(i,toInteger(arguments[1]))),i=i>=0?i:length-Math.abs(i);i>=0;i--)if(i in self&&sought===self[i])return i;return-1}),Object.getPrototypeOf||(Object.getPrototypeOf=function(object){return object.__proto__||(object.constructor?object.constructor.prototype:prototypeOfObject)}),!Object.getOwnPropertyDescriptor){var ERR_NON_OBJECT=\"Object.getOwnPropertyDescriptor called on a non-object: \";Object.getOwnPropertyDescriptor=function(object,property){if(\"object\"!=typeof object&&\"function\"!=typeof object||null===object)throw new TypeError(ERR_NON_OBJECT+object);if(owns(object,property)){var descriptor,getter,setter;if(descriptor={enumerable:!0,configurable:!0},supportsAccessors){var prototype=object.__proto__;object.__proto__=prototypeOfObject;var getter=lookupGetter(object,property),setter=lookupSetter(object,property);if(object.__proto__=prototype,getter||setter)return getter&&(descriptor.get=getter),setter&&(descriptor.set=setter),descriptor}return descriptor.value=object[property],descriptor}}}if(Object.getOwnPropertyNames||(Object.getOwnPropertyNames=function(object){return Object.keys(object)}),!Object.create){var createEmpty;createEmpty=null===Object.prototype.__proto__?function(){return{__proto__:null}}:function(){var empty={};for(var i in empty)empty[i]=null;return empty.constructor=empty.hasOwnProperty=empty.propertyIsEnumerable=empty.isPrototypeOf=empty.toLocaleString=empty.toString=empty.valueOf=empty.__proto__=null,empty},Object.create=function(prototype,properties){var object;if(null===prototype)object=createEmpty();else{if(\"object\"!=typeof prototype)throw new TypeError(\"typeof prototype[\"+typeof prototype+\"] != 'object'\");var Type=function(){};Type.prototype=prototype,object=new Type,object.__proto__=prototype}return void 0!==properties&&Object.defineProperties(object,properties),object}}if(Object.defineProperty){var definePropertyWorksOnObject=doesDefinePropertyWork({}),definePropertyWorksOnDom=\"undefined\"==typeof document||doesDefinePropertyWork(document.createElement(\"div\"));if(!definePropertyWorksOnObject||!definePropertyWorksOnDom)var definePropertyFallback=Object.defineProperty}if(!Object.defineProperty||definePropertyFallback){var ERR_NON_OBJECT_DESCRIPTOR=\"Property description must be an object: \",ERR_NON_OBJECT_TARGET=\"Object.defineProperty called on non-object: \",ERR_ACCESSORS_NOT_SUPPORTED=\"getters & setters can not be defined on this javascript engine\";Object.defineProperty=function(object,property,descriptor){if(\"object\"!=typeof object&&\"function\"!=typeof object||null===object)throw new TypeError(ERR_NON_OBJECT_TARGET+object);if(\"object\"!=typeof descriptor&&\"function\"!=typeof descriptor||null===descriptor)throw new TypeError(ERR_NON_OBJECT_DESCRIPTOR+descriptor);if(definePropertyFallback)try{return definePropertyFallback.call(Object,object,property,descriptor)}catch(exception){}if(owns(descriptor,\"value\"))if(supportsAccessors&&(lookupGetter(object,property)||lookupSetter(object,property))){var prototype=object.__proto__;object.__proto__=prototypeOfObject,delete object[property],object[property]=descriptor.value,object.__proto__=prototype}else object[property]=descriptor.value;else{if(!supportsAccessors)throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);owns(descriptor,\"get\")&&defineGetter(object,property,descriptor.get),owns(descriptor,\"set\")&&defineSetter(object,property,descriptor.set)}return object}}Object.defineProperties||(Object.defineProperties=function(object,properties){for(var property in properties)owns(properties,property)&&Object.defineProperty(object,property,properties[property]);return object}),Object.seal||(Object.seal=function(object){return object}),Object.freeze||(Object.freeze=function(object){return object\n});try{Object.freeze(function(){})}catch(exception){Object.freeze=function(freezeObject){return function(object){return\"function\"==typeof object?object:freezeObject(object)}}(Object.freeze)}if(Object.preventExtensions||(Object.preventExtensions=function(object){return object}),Object.isSealed||(Object.isSealed=function(){return!1}),Object.isFrozen||(Object.isFrozen=function(){return!1}),Object.isExtensible||(Object.isExtensible=function(object){if(Object(object)===object)throw new TypeError;for(var name=\"\";owns(object,name);)name+=\"?\";object[name]=!0;var returnValue=owns(object,name);return delete object[name],returnValue}),!Object.keys){var hasDontEnumBug=!0,dontEnums=[\"toString\",\"toLocaleString\",\"valueOf\",\"hasOwnProperty\",\"isPrototypeOf\",\"propertyIsEnumerable\",\"constructor\"],dontEnumsLength=dontEnums.length;for(var key in{toString:null})hasDontEnumBug=!1;Object.keys=function(object){if(\"object\"!=typeof object&&\"function\"!=typeof object||null===object)throw new TypeError(\"Object.keys called on a non-object\");var keys=[];for(var name in object)owns(object,name)&&keys.push(name);if(hasDontEnumBug)for(var i=0,ii=dontEnumsLength;ii>i;i++){var dontEnum=dontEnums[i];owns(object,dontEnum)&&keys.push(dontEnum)}return keys}}Date.now||(Date.now=function(){return(new Date).getTime()});var ws=\"\t\\n\u000b\\f\\r   ᠎             　\\u2028\\u2029﻿\";if(!String.prototype.trim||ws.trim()){ws=\"[\"+ws+\"]\";var trimBeginRegexp=RegExp(\"^\"+ws+ws+\"*\"),trimEndRegexp=RegExp(ws+ws+\"*$\");String.prototype.trim=function(){return(this+\"\").replace(trimBeginRegexp,\"\").replace(trimEndRegexp,\"\")}}var toObject=function(o){if(null==o)throw new TypeError(\"can't convert \"+o+\" to object\");return Object(o)}});";

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _m(0)
	}},staticRenderFns: [function (){with(this) {
	  return _h('section', {
	    staticClass: "editor"
	  }, [_h('div', {
	    attrs: {
	      "id": "ace_container"
	    }
	  })])
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-435b5df0", module.exports)
	  }
	}

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(33)
	
	/* script */
	__vue_exports__ = __webpack_require__(36)
	
	/* template */
	var __vue_template__ = __webpack_require__(38)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.name = __vue_options__.name || "preview"
	__vue_options__.__file = "/Users/TooBug/work/github/TooNote/src/component/preview.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-46603186"
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-46603186", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-46603186", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] preview.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(34);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/.0.23.1@css-loader/index.js?sourceMap!./../node_modules/.9.5.3@vue-loader/lib/style-rewriter.js?id=data-v-46603186&scoped=true!./../node_modules/.9.5.3@vue-loader/lib/selector.js?type=styles&index=0!./preview.vue", function() {
				var newContent = require("!!./../node_modules/.0.23.1@css-loader/index.js?sourceMap!./../node_modules/.9.5.3@vue-loader/lib/style-rewriter.js?id=data-v-46603186&scoped=true!./../node_modules/.9.5.3@vue-loader/lib/selector.js?type=styles&index=0!./preview.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports
	exports.i(__webpack_require__(35), "");
	
	// module
	exports.push([module.id, "\n.preview[data-v-46603186]{\n\tfont-family: \"PingFang SC\";\n\theight:100%;\n\toverflow-y:auto;\n\tflex:1;\n\tfont-size:14px;\n\tline-height: 28px;\n\tbackground:#fff;\n}\n", "", {"version":3,"sources":["/./component/preview.vue?4e123922"],"names":[],"mappings":";AACA;CACA,2BAAA;CACA,YAAA;CACA,gBAAA;CACA,OAAA;CACA,eAAA;CACA,kBAAA;CACA,gBAAA;CACA","file":"preview.vue","sourcesContent":["<style scoped>\n.preview{\n\tfont-family: \"PingFang SC\";\n\theight:100%;\n\toverflow-y:auto;\n\tflex:1;\n\tfont-size:14px;\n\tline-height: 28px;\n\tbackground:#fff;\n}\n@import \"../style/htmlbody.css\";\n</style>\n\n<template>\n<section class=\"preview\">\n\t<div class=\"htmlBody\" v-html=\"html\"></div>\n</section>\n</template>\n\n\n<script>\nimport {mapGetters} from 'vuex'\nlet _render;\nexport default {\n\tcomputed:{\n\t\thtml(){\n\t\t\tif(!this.currentNote || !this.currentNote.content){\n\t\t\t\treturn ''\n\t\t\t}\n\t\t\treturn _render.render(this.currentNote.content)\n\t\t},\n\t\t/*currentNote(){\n\t\t\treturn this.$store.getters.currentNote\n\t\t},*/\n\t\t...mapGetters(['currentNote'])\n\t},\n\twatch:{\n\t\thtml(){\n\t\t\tthis.$nextTick(() => {\n\t\t\t\tlet scrollMap = [];\n\n\t\t\t\tlet $preview = this.$el;\n\t\t\t\tlet $previewAnchors = $preview.querySelectorAll('.line');\n\t\t\t\tArray.prototype.forEach.call($previewAnchors, function($previewAnchor){\n\t\t\t\t\tlet top = $previewAnchor.offsetTop;\n\t\t\t\t\tif(top && top > scrollMap[$previewAnchor.dataset.line]){\n\t\t\t\t\t\tscrollMap[$previewAnchor.dataset.line] = top;\n\t\t\t\t\t}\n\t\t\t\t})\n\n\t\t\t\tlet contentLines = this.currentNote.content.split('\\n').length;\n\t\t\t\tif(!scrollMap[0]) scrollMap[0] = 0;\n\t\t\t\tif(!scrollMap[contentLines - 1]) scrollMap[contentLines - 1] = $preview.scrollHeight;\n\n\t\t\t\tfor(var i = 1; i<contentLines -1; i++){\n\t\t\t\t\tif(!scrollMap[i]){\n\t\t\t\t\t\tvar j = i+1;\n\t\t\t\t\t\twhile(!scrollMap[j] && j < contentLines - 1){\n\t\t\t\t\t\t\tj++;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tscrollMap[i] = scrollMap[i-1] + (scrollMap[j] - scrollMap[i-1]) / (j-i+1);\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\tthis.$store.commit('changeScrollMap', scrollMap);\n\t\t\t\t// console.log(scrollMap);\n\t\t\t\t// console.log('html changed');\n\t\t\t});\n\t\t}\n\t},\n\tdata(){\n\t\tvar data = {\n\t\t\t// content:'',\n\t\t\t// html:''\n\t\t};\n\t\treturn data;\n\t},\n\tmounted(){\n\t\tconsole.log('[preview] mounted', this, this.$store);\n\t\tvar Remarkable = require('remarkable');\n\t\tvar previewRenderer = new Remarkable();\n\t\tvar index = 0;\n\n\t\tlet customerRulesMap = {\n\t\t\tparagraph: 'p',\n\t\t\ttable: 'table',\n\t\t\t// list_item: 'li',\n\t\t\t// tr: 'tr',\n\t\t};\n\n\t\tfor(let token in customerRulesMap){\n\t\t\tconsole.log('[preview]',token);\n\t\t\tlet tag = customerRulesMap[token];\n\t\t\tpreviewRenderer.renderer.rules[`${token}_open`] = function (tokens, idx) {\n\t\t\t\tvar line;\n\t\t\t\tif(tag === 'tr'){\n\t\t\t\t\tconsole.log(tokens[idx]);\n\t\t\t\t}\n\t\t\t\tif (tokens[idx].lines/* && tokens[idx].level === 0*/) {\n\t\t\t\t\tline = tokens[idx].lines[0];\n\t\t\t\t\treturn `<${tag} class=\"line\" data-line=\"${line}\">`;\n\t\t\t\t}\n\t\t\t\treturn `<${tag}>`;\n\t\t\t};\n\t\t}\n\n\t\tpreviewRenderer.renderer.rules.heading_open = function (tokens, idx) {\n\t\t\tvar line;\n\t\t\tif (tokens[idx].lines && tokens[idx].level === 0) {\n\t\t\t\tline = tokens[idx].lines[0];\n\t\t\t\treturn '<h' + tokens[idx].hLevel + ' class=\"line\" data-line=\"' + line + '\"><a name=\"anchor'+(index++)+'\">';\n\t\t\t}\n\t\t\treturn '<h' + tokens[idx].hLevel + '>';\n\t\t};\n\n\t\tpreviewRenderer.renderer.rules.heading_close = function (tokens, idx) {\n\t\t\treturn '</a></h'+ tokens[idx].hLevel + '>';\n\t\t};\n\t\t_render = previewRenderer;\n\t}\n};\n</script>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports
	
	
	// module
	exports.push([module.id, ".htmlBody{\n\tline-height: 28px;\n\tfont-size: 14px;\n\tcolor:#4D4D4C;\n\tletter-spacing: 1px;\n\tpadding:0 20px;\n}\n/*标题*/\n.htmlBody h1,.htmlBody h2,.htmlBody h3,\n.htmlBody h4,.htmlBody h5,.htmlBody h6{\n\tmargin:16px 0;\n\tcolor:#718C00;\n\tfont-weight: normal;\n}\n/*表格*/\n.htmlBody table{\n\tmargin-bottom: 28px;\n\tmargin-left:auto;\n\tmargin-right:auto;\n\t/*width:80%;*/\n\twidth:100%;\n\tborder:1px solid #E0E0E0;\n\tborder-collapse: collapse;\n}\n.htmlBody table th,\n.htmlBody table td{\n\tpadding: 3px;\n\tborder:1px solid #E0E0E0;\n}\n.htmlBody table th{\n\tbackground:#F0F0F0;\n}\n\n/*段落*/\n.htmlBody p{\n\tmargin-bottom: 28px;\n\t/*text-indent: 34px;*/\n}\n\n/*列表*/\n.htmlBody ul,ol{\n\tmargin-bottom: 28px;\n\t/*padding-left:34px;*/\n\tlist-style-position: inside;\n}\n.htmlBody li > p{\n\ttext-indent: 0;\n\tmargin-bottom: 0;\n}\n.htmlBody ul ul,\n.htmlBody ul ol,\n.htmlBody ol ol,\n.htmlBody ol ul{\n\tpadding-left: 34px;\n\tmargin-bottom: 0;\n}\n\n/*代码*/\n.htmlBody code{\n\tbackground:#F0F0F0;\n\tpadding:0 5px;;\n\tfont-family: source-code-pro, Monaco, Menlo, \"Ubuntu Mono\", Consolas, monospace;\n}\n.htmlBody pre code{\n\t/*margin-left:34px;*/\n\tmargin-bottom: 28px;\n\tdisplay: block;\n\tbackground:#fff;\n\tborder:1px solid #E0E0E0;\n\toverflow-x: scroll;\n}\n/*引用*/\n.htmlBody blockquote{\n\t/*margin-left:34px;*/\n\tfont-size:13px;\n\tmargin-bottom: 28px;\n\tpadding:0 10px;\n\tbackground:#F0F0F0;\n\tborder-left:3px solid #E0E0E0;\n}\n.htmlBody blockquote p{\n\ttext-indent: 0;\n\tmargin-bottom: 14px;\n}\n/*图片*/\n.htmlBody img{\n\tmax-width: 100%;\n\tborder: 1px solid #E0E0E0;\n\tpadding: 1px;\n}\n\n/*链接*/\n.htmlBody a{\n\tcolor:#718C00;\n\ttext-decoration: none;\n}\n", "", {"version":3,"sources":["/./style/htmlbody.css"],"names":[],"mappings":"AAAA;CACC,kBAAkB;CAClB,gBAAgB;CAChB,cAAc;CACd,oBAAoB;CACpB,eAAe;CACf;AACD,MAAM;AACN;;CAEC,cAAc;CACd,cAAc;CACd,oBAAoB;CACpB;AACD,MAAM;AACN;CACC,oBAAoB;CACpB,iBAAiB;CACjB,kBAAkB;CAClB,cAAc;CACd,WAAW;CACX,yBAAyB;CACzB,0BAA0B;CAC1B;AACD;;CAEC,aAAa;CACb,yBAAyB;CACzB;AACD;CACC,mBAAmB;CACnB;;AAED,MAAM;AACN;CACC,oBAAoB;CACpB,sBAAsB;CACtB;;AAED,MAAM;AACN;CACC,oBAAoB;CACpB,sBAAsB;CACtB,4BAA4B;CAC5B;AACD;CACC,eAAe;CACf,iBAAiB;CACjB;AACD;;;;CAIC,mBAAmB;CACnB,iBAAiB;CACjB;;AAED,MAAM;AACN;CACC,mBAAmB;CACnB,cAAc;CACd,gFAAgF;CAChF;AACD;CACC,qBAAqB;CACrB,oBAAoB;CACpB,eAAe;CACf,gBAAgB;CAChB,yBAAyB;CACzB,mBAAmB;CACnB;AACD,MAAM;AACN;CACC,qBAAqB;CACrB,eAAe;CACf,oBAAoB;CACpB,eAAe;CACf,mBAAmB;CACnB,8BAA8B;CAC9B;AACD;CACC,eAAe;CACf,oBAAoB;CACpB;AACD,MAAM;AACN;CACC,gBAAgB;CAChB,0BAA0B;CAC1B,aAAa;CACb;;AAED,MAAM;AACN;CACC,cAAc;CACd,sBAAsB;CACtB","file":"htmlbody.css","sourcesContent":[".htmlBody{\n\tline-height: 28px;\n\tfont-size: 14px;\n\tcolor:#4D4D4C;\n\tletter-spacing: 1px;\n\tpadding:0 20px;\n}\n/*标题*/\n.htmlBody h1,.htmlBody h2,.htmlBody h3,\n.htmlBody h4,.htmlBody h5,.htmlBody h6{\n\tmargin:16px 0;\n\tcolor:#718C00;\n\tfont-weight: normal;\n}\n/*表格*/\n.htmlBody table{\n\tmargin-bottom: 28px;\n\tmargin-left:auto;\n\tmargin-right:auto;\n\t/*width:80%;*/\n\twidth:100%;\n\tborder:1px solid #E0E0E0;\n\tborder-collapse: collapse;\n}\n.htmlBody table th,\n.htmlBody table td{\n\tpadding: 3px;\n\tborder:1px solid #E0E0E0;\n}\n.htmlBody table th{\n\tbackground:#F0F0F0;\n}\n\n/*段落*/\n.htmlBody p{\n\tmargin-bottom: 28px;\n\t/*text-indent: 34px;*/\n}\n\n/*列表*/\n.htmlBody ul,ol{\n\tmargin-bottom: 28px;\n\t/*padding-left:34px;*/\n\tlist-style-position: inside;\n}\n.htmlBody li > p{\n\ttext-indent: 0;\n\tmargin-bottom: 0;\n}\n.htmlBody ul ul,\n.htmlBody ul ol,\n.htmlBody ol ol,\n.htmlBody ol ul{\n\tpadding-left: 34px;\n\tmargin-bottom: 0;\n}\n\n/*代码*/\n.htmlBody code{\n\tbackground:#F0F0F0;\n\tpadding:0 5px;;\n\tfont-family: source-code-pro, Monaco, Menlo, \"Ubuntu Mono\", Consolas, monospace;\n}\n.htmlBody pre code{\n\t/*margin-left:34px;*/\n\tmargin-bottom: 28px;\n\tdisplay: block;\n\tbackground:#fff;\n\tborder:1px solid #E0E0E0;\n\toverflow-x: scroll;\n}\n/*引用*/\n.htmlBody blockquote{\n\t/*margin-left:34px;*/\n\tfont-size:13px;\n\tmargin-bottom: 28px;\n\tpadding:0 10px;\n\tbackground:#F0F0F0;\n\tborder-left:3px solid #E0E0E0;\n}\n.htmlBody blockquote p{\n\ttext-indent: 0;\n\tmargin-bottom: 14px;\n}\n/*图片*/\n.htmlBody img{\n\tmax-width: 100%;\n\tborder: 1px solid #E0E0E0;\n\tpadding: 1px;\n}\n\n/*链接*/\n.htmlBody a{\n\tcolor:#718C00;\n\ttext-decoration: none;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
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
	
	var _vuex = __webpack_require__(3);
	
	let _render;
	exports.default = {
		computed: _extends({
			html() {
				if (!this.currentNote || !this.currentNote.content) {
					return '';
				}
				return _render.render(this.currentNote.content);
			}
		}, (0, _vuex.mapGetters)(['currentNote'])),
		watch: {
			html() {
				this.$nextTick(() => {
					let scrollMap = [];
	
					let $preview = this.$el;
					let $previewAnchors = $preview.querySelectorAll('.line');
					Array.prototype.forEach.call($previewAnchors, function ($previewAnchor) {
						let top = $previewAnchor.offsetTop;
						if (top && top > scrollMap[$previewAnchor.dataset.line]) {
							scrollMap[$previewAnchor.dataset.line] = top;
						}
					});
	
					let contentLines = this.currentNote.content.split('\n').length;
					if (!scrollMap[0]) scrollMap[0] = 0;
					if (!scrollMap[contentLines - 1]) scrollMap[contentLines - 1] = $preview.scrollHeight;
	
					for (var i = 1; i < contentLines - 1; i++) {
						if (!scrollMap[i]) {
							var j = i + 1;
							while (!scrollMap[j] && j < contentLines - 1) {
								j++;
							}
							scrollMap[i] = scrollMap[i - 1] + (scrollMap[j] - scrollMap[i - 1]) / (j - i + 1);
						}
					}
	
					this.$store.commit('changeScrollMap', scrollMap);
					// console.log(scrollMap);
					// console.log('html changed');
				});
			}
		},
		data() {
			var data = {
				// content:'',
				// html:''
			};
			return data;
		},
		mounted() {
			console.log('[preview] mounted', this, this.$store);
			var Remarkable = __webpack_require__(37);
			var previewRenderer = new Remarkable();
			var index = 0;
	
			let customerRulesMap = {
				paragraph: 'p',
				table: 'table'
			};
	
			for (let token in customerRulesMap) {
				console.log('[preview]', token);
				let tag = customerRulesMap[token];
				previewRenderer.renderer.rules[`${ token }_open`] = function (tokens, idx) {
					var line;
					if (tag === 'tr') {
						console.log(tokens[idx]);
					}
					if (tokens[idx].lines /* && tokens[idx].level === 0*/) {
							line = tokens[idx].lines[0];
							return `<${ tag } class="line" data-line="${ line }">`;
						}
					return `<${ tag }>`;
				};
			}
	
			previewRenderer.renderer.rules.heading_open = function (tokens, idx) {
				var line;
				if (tokens[idx].lines && tokens[idx].level === 0) {
					line = tokens[idx].lines[0];
					return '<h' + tokens[idx].hLevel + ' class="line" data-line="' + line + '"><a name="anchor' + index++ + '">';
				}
				return '<h' + tokens[idx].hLevel + '>';
			};
	
			previewRenderer.renderer.rules.heading_close = function (tokens, idx) {
				return '</a></h' + tokens[idx].hLevel + '>';
			};
			_render = previewRenderer;
		}
	};
	module.exports = exports['default'];

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = require("remarkable");

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('section', {
	    staticClass: "preview"
	  }, [_h('div', {
	    staticClass: "htmlBody",
	    domProps: {
	      "innerHTML": _s(html)
	    }
	  })])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-46603186", module.exports)
	  }
	}

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(40)
	
	/* script */
	__vue_exports__ = __webpack_require__(42)
	
	/* template */
	var __vue_template__ = __webpack_require__(43)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.name = __vue_options__.name || "menubar"
	__vue_options__.__file = "/Users/TooBug/work/github/TooNote/src/component/menubar.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-0b8853c9"
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-0b8853c9", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-0b8853c9", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] menubar.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(41);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/.0.23.1@css-loader/index.js?sourceMap!./../node_modules/.9.5.3@vue-loader/lib/style-rewriter.js?id=data-v-0b8853c9&scoped=true!./../node_modules/.9.5.3@vue-loader/lib/selector.js?type=styles&index=0!./menubar.vue", function() {
				var newContent = require("!!./../node_modules/.0.23.1@css-loader/index.js?sourceMap!./../node_modules/.9.5.3@vue-loader/lib/style-rewriter.js?id=data-v-0b8853c9&scoped=true!./../node_modules/.9.5.3@vue-loader/lib/selector.js?type=styles&index=0!./menubar.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.menubar[data-v-0b8853c9]{\n\tfont-family: \"PingFang SC\";\n\theight:24px;\n\tfont-size:13px;\n\tline-height: 24px;\n\tbackground:linear-gradient(top,#EEE,#CCC);\n\tcursor: default;\n}\n.menubar.hidden[data-v-0b8853c9]{\n\tdisplay: none;\n}\n.menubar ul[data-v-0b8853c9]{\n\tpadding:0 20px;\n\tlist-style: none;\n}\n.menubar ul li[data-v-0b8853c9]{\n\tdisplay: inline-block;\n\tmargin-right:10px;\n}\n.menubar ul li.active[data-v-0b8853c9]{\n\tbackground:rgb(40,141,248);\n\tcolor: white;\n}\n.menubar ul li span[data-v-0b8853c9]{\n\tpadding:0 5px;\n}\n.menubar ul > li > ul[data-v-0b8853c9]{\n\tposition: absolute;\n\tbackground:#D6D6D6;\n\tcolor:#333;\n\topacity: .9;\n\tdisplay: none;\n\tbox-shadow:0 3px 3px rgba(192,192,192,.5);\n\tpadding:0;\n\tborder:1px solid #ccc;\n}\n.menubar ul > li.active > ul[data-v-0b8853c9]{\n\tdisplay: block;\n}\n.menubar ul > li > ul > li[data-v-0b8853c9]{\n\tmargin:0;\n}\n.menubar ul > li > ul > li[data-v-0b8853c9]:hover{\n\tcolor:white;\n\tbackground:rgb(40,141,248);\n}\n.menubar ul > li > ul > li > span[data-v-0b8853c9]{\n\tpadding:0 20px;\n}\n", "", {"version":3,"sources":["/./component/menubar.vue?3dfb9452"],"names":[],"mappings":";AACA;CACA,2BAAA;CACA,YAAA;CACA,eAAA;CACA,kBAAA;CACA,0CAAA;CACA,gBAAA;CACA;AACA;CACA,cAAA;CACA;AACA;CACA,eAAA;CACA,iBAAA;CACA;AACA;CACA,sBAAA;CACA,kBAAA;CACA;AACA;CACA,2BAAA;CACA,aAAA;CACA;AACA;CACA,cAAA;CACA;AACA;CACA,mBAAA;CACA,mBAAA;CACA,WAAA;CACA,YAAA;CACA,cAAA;CACA,0CAAA;CACA,UAAA;CACA,sBAAA;CACA;AACA;CACA,eAAA;CACA;AACA;CACA,SAAA;CACA;AACA;CACA,YAAA;CACA,2BAAA;CACA;AACA;CACA,eAAA;CACA","file":"menubar.vue","sourcesContent":["<style scoped>\n.menubar{\n\tfont-family: \"PingFang SC\";\n\theight:24px;\n\tfont-size:13px;\n\tline-height: 24px;\n\tbackground:linear-gradient(top,#EEE,#CCC);\n\tcursor: default;\n}\n.menubar.hidden{\n\tdisplay: none;\n}\n.menubar ul{\n\tpadding:0 20px;\n\tlist-style: none;\n}\n.menubar ul li{\n\tdisplay: inline-block;\n\tmargin-right:10px;\n}\n.menubar ul li.active{\n\tbackground:rgb(40,141,248);\n\tcolor: white;\n}\n.menubar ul li span{\n\tpadding:0 5px;\n}\n.menubar ul > li > ul{\n\tposition: absolute;\n\tbackground:#D6D6D6;\n\tcolor:#333;\n\topacity: .9;\n\tdisplay: none;\n\tbox-shadow:0 3px 3px rgba(192,192,192,.5);\n\tpadding:0;\n\tborder:1px solid #ccc;\n}\n.menubar ul > li.active > ul{\n\tdisplay: block;\n}\n.menubar ul > li > ul > li{\n\tmargin:0;\n}\n.menubar ul > li > ul > li:hover{\n\tcolor:white;\n\tbackground:rgb(40,141,248);\n}\n.menubar ul > li > ul > li > span{\n\tpadding:0 20px;\n}\n</style>\n\n<template>\n<section class=\"menubar\">\n\t<ul>\n\t\t<li v-for=\"menu in menuList\" v-bind:class=\"{active:menu.isActive}\" v-on:click=\"menuClick(menu.title)\">\n\t\t\t<span>{{menu.title}}</span>\n\t\t\t<ul v-if=\"menu.subMenu && menu.subMenu.length\">\n\t\t\t\t<li v-for=\"subMenu in menu.subMenu\" v-on:click=\"subMenuClick(subMenu.event)\"><span>{{subMenu.title}}</span></li>\n\t\t\t</ul>\n\t\t</li>\n\t</ul>\n</section>\n</template>\n\n\n<script>\nimport Menu from '../api/menu/index';\nimport util from '../modules/util';\nlet menu = new Menu(util.platform);\nexport default {\n\tmethods:{\n\t\tmenuClick(title){\n\t\t\tthis.menuList.forEach(function(menu){\n\t\t\t\tif(menu.title === title){\n\t\t\t\t\tmenu.isActive = !menu.isActive;\n\t\t\t\t}else{\n\t\t\t\t\tmenu.isActive = false;\n\t\t\t\t}\n\t\t\t});\n\t\t\t// 触发vue更新\n\t\t\t// this.menuList = this.menuList.concat([]);\n\t\t},\n\t\tsubMenuClick(event){\n\t\t\tmenu.onClick(event);\n\t\t}\n\t},\n\tdata(){\n\t\tlet data = {\n\t\t\tisShow:menu.isVue,\n\t\t\tmenuList:[{\n\t\t\t\ttitle:'TooNote',\n\t\t\t\tisActive:false,\n\t\t\t\tsubMenu:[]\n\t\t\t},{\n\t\t\t\ttitle:'File',\n\t\t\t\tisActive:false,\n\t\t\t\tsubMenu:[{\n\t\t\t\t\ttitle:'新建',\n\t\t\t\t\tevent:'newNote',\n\t\t\t\t\thotKey:'cmd+n'\n\t\t\t\t},{\n\t\t\t\t\ttitle:'导入备份',\n\t\t\t\t\tevent:'importBackup'\n\t\t\t\t}]\n\t\t\t},{\n\t\t\t\ttitle:'Edit',\n\t\t\t\tisActive:false,\n\t\t\t\tsubMenu:[]\n\t\t\t}]\n\t\t};\n\t\treturn data;\n\t},\n\tmounted(){\n\t\tmenu.buildMenu(this.menuList);\n\t\t/*this.$nextTick(()=>{\n\t\t\tthis.$dispatch('toggleMenubar', menu.isVue);\n\t\t});*/\n\t}\n};\n</script>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _index = __webpack_require__(12);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _util = __webpack_require__(18);
	
	var _util2 = _interopRequireDefault(_util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	
	let menu = new _index2.default(_util2.default.platform);
	exports.default = {
		methods: {
			menuClick(title) {
				this.menuList.forEach(function (menu) {
					if (menu.title === title) {
						menu.isActive = !menu.isActive;
					} else {
						menu.isActive = false;
					}
				});
				// 触发vue更新
				// this.menuList = this.menuList.concat([]);
			},
			subMenuClick(event) {
				menu.onClick(event);
			}
		},
		data() {
			let data = {
				isShow: menu.isVue,
				menuList: [{
					title: 'TooNote',
					isActive: false,
					subMenu: []
				}, {
					title: 'File',
					isActive: false,
					subMenu: [{
						title: '新建',
						event: 'newNote',
						hotKey: 'cmd+n'
					}, {
						title: '导入备份',
						event: 'importBackup'
					}]
				}, {
					title: 'Edit',
					isActive: false,
					subMenu: []
				}]
			};
			return data;
		},
		mounted() {
			menu.buildMenu(this.menuList);
			/*this.$nextTick(()=>{
	  	this.$dispatch('toggleMenubar', menu.isVue);
	  });*/
		}
	};
	module.exports = exports['default'];

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('section', {
	    staticClass: "menubar"
	  }, [_h('ul', [_l((menuList), function(menu) {
	    return _h('li', {
	      class: {
	        active: menu.isActive
	      },
	      on: {
	        "click": function($event) {
	          menuClick(menu.title)
	        }
	      }
	    }, [_h('span', [_s(menu.title)]), " ", (menu.subMenu && menu.subMenu.length) ? _h('ul', [_l((menu.subMenu), function(subMenu) {
	      return _h('li', {
	        on: {
	          "click": function($event) {
	            subMenuClick(subMenu.event)
	          }
	        }
	      }, [_h('span', [_s(subMenu.title)])])
	    })]) : _e()])
	  })])])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-0b8853c9", module.exports)
	  }
	}

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _util = __webpack_require__(18);
	
	var _util2 = _interopRequireDefault(_util);
	
	var _note = __webpack_require__(45);
	
	var _note2 = _interopRequireDefault(_note);
	
	var _meta = __webpack_require__(50);
	
	var _meta2 = _interopRequireDefault(_meta);
	
	var _index = __webpack_require__(12);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	let self = {};
	let menu = new _index2.default(_util2.default.platform);
	
	self.on = menu.on.bind(menu);
	
	self.off = menu.off.bind(menu);
	
	self.trigger = menu.trigger.bind(menu);
	
	exports.default = self;
	module.exports = exports['default'];

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _util = __webpack_require__(18);
	
	var _util2 = _interopRequireDefault(_util);
	
	var _index = __webpack_require__(46);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	let note = {};
	let store = new _index2.default(_util2.default.platform);
	
	note.getTitleFromContent = function (content) {
		let firstLine = content.split('\n', 2)[0];
		if (!firstLine) return '';
		return firstLine.replace(/[#\s]/g, '');
	};
	
	note.getTitleWithoutCategory = function (title) {
		let titlePart = title.split('\\', 2);
		if (titlePart.length === 1) {
			return title;
		} else {
			return title.replace(titlePart[0] + '\\', '');
		}
	};
	
	note.getCategoryFromTitle = function (title) {
		let titlePart = title.split('\\', 2);
		if (titlePart.length === 1) {
			return '未分类';
		} else {
			return titlePart[0];
		}
	};
	
	note.getNote = (() => {
		var _ref = _asyncToGenerator(function* (id) {
			return yield store.readFile(`/note-${ id }.md`);
		});
	
		return function (_x) {
			return _ref.apply(this, arguments);
		};
	})();
	
	note.addNote = (() => {
		var _ref2 = _asyncToGenerator(function* (note) {
			if (!note.content) {
				note.content = '# Untitled Note';
			}
			return yield this.saveNoteContent(note);
		});
	
		return function (_x2) {
			return _ref2.apply(this, arguments);
		};
	})();
	
	note.deleteNote = (() => {
		var _ref3 = _asyncToGenerator(function* (id) {
			return yield store.deleteFile(`./note-${ id }.md`);
		});
	
		return function (_x3) {
			return _ref3.apply(this, arguments);
		};
	})();
	
	note.saveNoteContent = (() => {
		var _ref4 = _asyncToGenerator(function* (note, shouldThrottle) {
			return yield store.writeFile(`/note-${ note.id }.md`, note.content);
		});
	
		return function (_x4, _x5) {
			return _ref4.apply(this, arguments);
		};
	})();
	
	note.init = (() => {
		var _ref5 = _asyncToGenerator(function* (id) {
			var content = `# 欢迎使用TooNote\n\nTooNote是一款基于Markdown的笔记软件。`;
			return yield store.writeFile(`./note-${ id }.md`, content);
		});
	
		return function (_x6) {
			return _ref5.apply(this, arguments);
		};
	})();
	
	exports.default = note;
	module.exports = exports['default'];

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _web = __webpack_require__(47);
	
	var _web2 = _interopRequireDefault(_web);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	class Store {
		constructor(platform) {
			return new _web2.default();
		}
	}
	
	exports.default = Store;
	module.exports = exports['default'];

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _base = __webpack_require__(48);
	
	var _base2 = _interopRequireDefault(_base);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	class WebStore extends _base2.default {
		constructor() {
			super();
			console.log('WebStore init.');
		}
		createFolder(folderName) {}
		getFileList(folderName) {}
		_getPathKey(path) {
			return 'TooNote-LocalStorage-Key-' + path;
		}
		writeFile(fileName, fileContent) {
			var _this = this;
	
			return _asyncToGenerator(function* () {
				return new Promise(function (resolve, reject) {
					var path = _this._normalizePath(fileName);
					try {
						localStorage.setItem(_this._getPathKey(path), fileContent);
						resolve();
					} catch (e) {
						reject(e);
					}
				});
			})();
		}
		deleteFile(fileName) {
			var _this2 = this;
	
			return _asyncToGenerator(function* () {
				return new Promise(function (resolve, reject) {
					var path = _this2._normalizePath(fileName);
					try {
						localStorage.removeItem(_this2._getPathKey(path));
						resolve();
					} catch (e) {
						reject(e);
					}
				});
			})();
		}
		readFile(fileName) {
			var _this3 = this;
	
			return _asyncToGenerator(function* () {
				return new Promise(function (resolve, reject) {
					var path = _this3._normalizePath(fileName);
					var content = localStorage.getItem(_this3._getPathKey(path));
					if (typeof content !== 'string') content = false;
					resolve(content);
				});
			})();
		}
	}
	
	exports.default = WebStore;
	module.exports = exports['default'];

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _path = __webpack_require__(49);
	
	var _path2 = _interopRequireDefault(_path);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	class Store {
		constructor() {
			console.log('Store init.');
		}
		_normalizePath(filePath) {
			return _path2.default.normalize(_path2.default.join('./', filePath));
		}
	}
	
	exports.default = Store;
	module.exports = exports['default'];

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _util = __webpack_require__(18);
	
	var _util2 = _interopRequireDefault(_util);
	
	var _index = __webpack_require__(46);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	let store = new _index2.default(_util2.default.platform);
	
	class Meta {
		constructor() {}
		get data() {
			return store.readFile('/meta.json').then(content => {
				if (content) {
					return JSON.parse(content);
				} else {
					return this._initData();
				}
			});
		}
		_initData() {
			return _asyncToGenerator(function* () {
				let data = {
					init: false,
					recent: [],
					notebook: [{
						id: Date.now() + (Math.random() * 10000 >> 0),
						title: 'TooNote',
						notes: [{
							id: Date.now() + (Math.random() * 10000 >> 0),
							title: '欢迎使用TooNote'
						}]
					}]
				};
				yield store.writeFile('/meta.json', JSON.stringify(data));
				return data;
			})();
		}
		init() {
			var _this = this;
	
			return _asyncToGenerator(function* () {
				let data = yield _this.data;
				data.init = true;
				yield store.writeFile('/meta.json', JSON.stringify(data));
			})();
		}
		addNote(notebookId, note) {
			var _this2 = this;
	
			return _asyncToGenerator(function* () {
				let data = yield _this2.data;
				var targetNotebook = data.notebook.filter(function (metaNotebook) {
					return metaNotebook.id === notebookId;
				})[0];
	
				if (!note) {
					note = {
						id: Date.now() + (Math.random() * 10000 >> 0),
						title: 'Unititled Note'
					};
				}
				targetNotebook.notes.push(note);
				yield store.writeFile('/meta.json', JSON.stringify(data));
				return note;
			})();
		}
		deleteNote(noteId) {
			var _this3 = this;
	
			return _asyncToGenerator(function* () {
				let data = yield _this3.data;
				data.notebook.forEach(function (notebook) {
					notebook.notes.forEach(function (note, index) {
						if (note.id === noteId) {
							notebook.notes.splice(index, 1);
						}
					});
				});
				yield store.writeFile('/meta.json', JSON.stringify(data));
			})();
		}
		updateNote(noteId, noteTitle) {
			var _this4 = this;
	
			return _asyncToGenerator(function* () {
				let data = yield _this4.data;
				data.notebook.forEach(function (notebook) {
					notebook.notes.forEach(function (note) {
						if (note.id === noteId) {
							note.title = noteTitle;
						}
					});
				});
				yield store.writeFile('/meta.json', JSON.stringify(data));
				return data;
			})();
		}
		findNoteById(noteId) {
			var _this5 = this;
	
			return _asyncToGenerator(function* () {
				let data = yield _this5.data;
				let target;
				data.notebook.forEach(function (notebook) {
					notebook.notes.forEach(function (note) {
						if (note.id === noteId) {
							target = note;
						}
					});
				});
				return target;
			})();
		}
		findNotebookOfNote(noteId) {
			var _this6 = this;
	
			return _asyncToGenerator(function* () {
				let data = yield _this6.data;
				let target;
				data.notebook.forEach(function (notebook) {
					notebook.notes.forEach(function (note) {
						if (note.id === noteId) {
							target = notebook;
						}
					});
				});
				return target;
			})();
		}
	};
	
	let meta = new Meta();
	
	exports.default = meta;
	module.exports = exports['default'];

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _cubicInOut = __webpack_require__(52);
	
	var _cubicInOut2 = _interopRequireDefault(_cubicInOut);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	let scroll = {};
	
	class TooAnimate {
		constructor(options) {
			this.start = options.start;
			this.end = options.end;
			this.during = options.during;
			this.onTick = options.onTick;
			this._value = this.start;
			this.doAnimate();
		}
		doAnimate() {
			let delta = this.end - this.start;
			let startTime;
			let tick = time => {
				if (!startTime) startTime = time;
				let progress = (0, _cubicInOut2.default)((time - startTime) / this.during);
				if (progress > 1) progress = 1;
				this._value = progress * delta + this.start;
				this.onTick(this._value);
				if (progress < 1) {
					requestAnimationFrame(tick);
				}
			};
			requestAnimationFrame(tick);
		}
	}
	
	scroll.doScroll = ($target, end, during) => {
		var tooAnimate = new TooAnimate({
			start: $target.scrollTop,
			end: end,
			during: during,
			onTick: function (value) {
				$target.scrollTop = value;
			}
		});
	};
	
	exports.default = scroll;
	module.exports = exports['default'];

/***/ },
/* 52 */
/***/ function(module, exports) {

	function cubicInOut(t) {
	  return t < 0.5
	    ? 4.0 * t * t * t
	    : 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0
	}
	
	module.exports = cubicInOut

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _vue = __webpack_require__(2);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _vuex = __webpack_require__(3);
	
	var _vuex2 = _interopRequireDefault(_vuex);
	
	var _meta = __webpack_require__(50);
	
	var _meta2 = _interopRequireDefault(_meta);
	
	var _note = __webpack_require__(45);
	
	var _note2 = _interopRequireDefault(_note);
	
	var _io = __webpack_require__(54);
	
	var _io2 = _interopRequireDefault(_io);
	
	var _scroll = __webpack_require__(51);
	
	var _scroll2 = _interopRequireDefault(_scroll);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	// Vue.use(Vuex);
	
	const store = new _vuex2.default.Store({
		state: {
			contextMenuNoteId: null,
			currentNote: null,
			currentNotebook: null,
			notebooks: [],
			// 同步滚动位置数据
			scrollMap: []
		},
		mutations: {
			newNote(state, note) {
				state.currentNotebook.notes.push(note);
			},
			switchCurrentNote(state, note) {
				state.currentNote = note;
			},
			switchContextMenuNote(state, noteId) {
				state.contextMenuNoteId = noteId;
			},
			switchCurrentNotebook(state, notebook) {
				state.currentNotebook = notebook;
			},
			changeCurrentNoteContent(state, content) {
				state.currentNote.content = content;
			},
			changeCurrentNoteTitle(state, title) {
				state.currentNote.title = title;
			},
			updateNotebooks(state, notebooks) {
				state.notebooks = notebooks;
			},
			changeScrollMap(state, scrollMap) {
				state.scrollMap = scrollMap;
			}
		},
		getters: {
			contextMenuNoteId(state) {
				return state.contextMenuNoteId;
			},
			currentNote(state) {
				return state.currentNote;
			},
			allNotes(state) {
				let ret = [];
				state.notebooks.forEach(notebook => {
					ret = ret.concat(notebook.notes);
				});
				return ret;
			},
			notebooksWithCategories(state) {
				let ret = state.notebooks.map(notebook => {
					let ret = {
						title: notebook.title
					};
					ret.categories = {};
					notebook.notes.forEach(noteItem => {
						let category = _note2.default.getCategoryFromTitle(noteItem.title);
						let title = _note2.default.getTitleWithoutCategory(noteItem.title);
						if (!ret.categories[category]) ret.categories[category] = [];
						ret.categories[category].push({
							title: title,
							id: noteItem.id
						});
					});
					return ret;
				});
				return ret;
			},
			notebooks(state) {
				return state.notebooks;
			}
			/*currentNoteContent(state, getters){
	  	return getters.content;
	  }*/
		},
		actions: {
			changeCurrentNoteContent(context, content) {
				return _asyncToGenerator(function* () {
					context.commit('changeCurrentNoteContent', content);
					let title = _note2.default.getTitleFromContent(content);
					context.commit('changeCurrentNoteTitle', title);
	
					yield _note2.default.saveNoteContent(context.state.currentNote);
	
					// 找到目标笔记并修改标题
					context.state.notebooks.forEach(function (notebook) {
						notebook.notes.forEach(function (note, index) {
							if (note.id === context.state.currentNote.id) {
								note.title = title;
							}
						});
					});
	
					yield _meta2.default.updateNote(context.state.currentNote.id, title);
				})();
			},
			switchCurrentNoteById(context, noteId) {
				return _asyncToGenerator(function* () {
					// console.log('[store switchCurrentNoteById]', noteId);
					let targetNote = context.getters.allNotes.filter(function (note) {
						return note.id === noteId;
					})[0];
					if (targetNote) {
						let content = yield _note2.default.getNote(targetNote.id);
						targetNote = Object.assign({}, targetNote, { content });
						// console.log('[store] switchCurrentNoteById', targetNote);
						context.commit('switchCurrentNote', targetNote);
					}
				})();
			},
			importNotes(context, newNotes) {
				return _asyncToGenerator(function* () {
					for (let i = 0; i < newNotes.length; i++) {
						let newNote = newNotes[i];
						yield _meta2.default.addNote(context.state.currentNotebook.id, {
							id: newNote.id,
							title: newNote.title
						});
						yield _note2.default.addNote(newNote);
						context.commit('newNote', newNote);
					}
				})();
			},
			newNote(context) {
				return _asyncToGenerator(function* () {
					let newNote = yield _meta2.default.addNote(context.state.currentNotebook.id);
					yield _note2.default.addNote(newNote);
					// let metaData = await meta.data;
					// eventHub.$emit('metaDidChange', app.metaData);
	
					// eventHub.$emit('currentNoteWillChange', app.currentNote);
					context.commit('newNote', newNote);
					context.commit('switchCurrentNote', newNote);
					// eventHub.$emit('currentNoteDidChange', app.currentNote);
				})();
			},
			openContextMenuNote(context) {
				return _asyncToGenerator(function* () {
					context.dispatch('switchCurrentNoteById', context.state.contextMenuNoteId);
				})();
			},
			deleteContextMenuNote(context) {
				return _asyncToGenerator(function* () {
					let targetId = context.state.contextMenuNoteId;
					if (!targetId) return;
					// 如果删除的是当前笔记，切换到第一条笔记
					if (targetId === context.state.currentNote.id) {
						context.dispatch('switchCurrentNoteById', context.getters.allNotes[0].id);
					}
	
					// 找到目标笔记并删除
					context.state.notebooks.forEach(function (notebook) {
						notebook.notes.forEach(function (note, index) {
							if (note.id === targetId) {
								notebook.notes.splice(index, 1);
							}
						});
					});
	
					yield _meta2.default.deleteNote(targetId);
					yield _note2.default.deleteNote(targetId);
	
					context.dispatch('switchCurrentNoteById');
				})();
			},
			importBackup(context) {
				return _asyncToGenerator(function* () {
					let newNotes = yield _io2.default.getNotesFromBackUp();
					if (!confirm('备份文件含有' + newNotes.length + '条笔记，确认导入？')) return;
	
					context.dispatch('importNotes', newNotes);
				})();
			},
			syncScroll(context, row) {
				return _asyncToGenerator(function* () {
					// todo：节流
					let targetPosition = context.state.scrollMap[row];
					if (typeof targetPosition === 'undefined') return;
					_scroll2.default.doScroll(document.querySelector('.preview'), targetPosition, 500);
				})();
			}
		}
	});
	
	exports.default = store;
	module.exports = exports['default'];

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _jszip = __webpack_require__(55);
	
	var _jszip2 = _interopRequireDefault(_jszip);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	let io = {};
	
	io.selectFile = filters => {
		var remote = __webpack_require__(17).remote;
		var dialog = remote.dialog;
		var filePath = dialog.showOpenDialog({
			filters,
			properties: ['openFile']
		});
	
		if (!filePath || !filePath.length) return;
		filePath = filePath[0];
	
		var fs = __webpack_require__(56);
		return fs.readFileSync(filePath, 'binary');
	};
	
	// 从备份文件恢复
	io.getNotesFromBackUp = _asyncToGenerator(function* () {
		let fileContent = io.selectFile([{
			name: 'TooNote备份文件',
			extensions: ['tnt']
		}]);
		let zip = yield _jszip2.default.loadAsync(fileContent);
		let indexFile = yield zip.file('index').async('string');
		let zipNoteIndex = JSON.parse(indexFile || '{}');
	
		let newNotes = [];
		for (let id in zipNoteIndex) {
			let content = yield zip.file(id).async('string');
			newNotes.push({
				id: id,
				title: zipNoteIndex[id],
				content: JSON.parse(content)
			});
		}
		return newNotes;
	});
	exports.default = io;
	module.exports = exports['default'];

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = require("jszip");

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map