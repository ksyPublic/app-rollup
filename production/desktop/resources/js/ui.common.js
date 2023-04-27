var UI = (function (exports) {
  'use strict';

  function _iterableToArrayLimit(arr, i) {
    var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
    if (null != _i) {
      var _s,
        _e,
        _x,
        _r,
        _arr = [],
        _n = !0,
        _d = !1;
      try {
        if (_x = (_i = _i.call(arr)).next, 0 === i) {
          if (Object(_i) !== _i) return;
          _n = !1;
        } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
      } catch (err) {
        _d = !0, _e = err;
      } finally {
        try {
          if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
        } finally {
          if (_d) throw _e;
        }
      }
      return _arr;
    }
  }
  function ownKeys$2(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys$2(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
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
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
        result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }
    return object;
  }
  function _get() {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get.bind();
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) {
          return desc.get.call(arguments.length < 3 ? target : receiver);
        }
        return desc.value;
      };
    }
    return _get.apply(this, arguments);
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  var check = function (it) {
    return it && it.Math == Math && it;
  };

  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global$g =
    // eslint-disable-next-line es/no-global-this -- safe
    check(typeof globalThis == 'object' && globalThis) ||
    check(typeof window == 'object' && window) ||
    // eslint-disable-next-line no-restricted-globals -- safe
    check(typeof self == 'object' && self) ||
    check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
    // eslint-disable-next-line no-new-func -- fallback
    (function () { return this; })() || Function('return this')();

  var shared$4 = {exports: {}};

  var global$f = global$g;

  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty$7 = Object.defineProperty;

  var defineGlobalProperty$3 = function (key, value) {
    try {
      defineProperty$7(global$f, key, { value: value, configurable: true, writable: true });
    } catch (error) {
      global$f[key] = value;
    } return value;
  };

  var global$e = global$g;
  var defineGlobalProperty$2 = defineGlobalProperty$3;

  var SHARED = '__core-js_shared__';
  var store$3 = global$e[SHARED] || defineGlobalProperty$2(SHARED, {});

  var sharedStore = store$3;

  var store$2 = sharedStore;

  (shared$4.exports = function (key, value) {
    return store$2[key] || (store$2[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: '3.30.1',
    mode: 'global',
    copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',
    license: 'https://github.com/zloirock/core-js/blob/v3.30.1/LICENSE',
    source: 'https://github.com/zloirock/core-js'
  });

  var sharedExports = shared$4.exports;

  var fails$s = function (exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };

  var fails$r = fails$s;

  var functionBindNative = !fails$r(function () {
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    var test = (function () { /* empty */ }).bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != 'function' || test.hasOwnProperty('prototype');
  });

  var NATIVE_BIND$3 = functionBindNative;

  var FunctionPrototype$2 = Function.prototype;
  var call$g = FunctionPrototype$2.call;
  var uncurryThisWithBind = NATIVE_BIND$3 && FunctionPrototype$2.bind.bind(call$g, call$g);

  var functionUncurryThis = NATIVE_BIND$3 ? uncurryThisWithBind : function (fn) {
    return function () {
      return call$g.apply(fn, arguments);
    };
  };

  // we can't use just `it == null` since of `document.all` special case
  // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
  var isNullOrUndefined$7 = function (it) {
    return it === null || it === undefined;
  };

  var isNullOrUndefined$6 = isNullOrUndefined$7;

  var $TypeError$c = TypeError;

  // `RequireObjectCoercible` abstract operation
  // https://tc39.es/ecma262/#sec-requireobjectcoercible
  var requireObjectCoercible$8 = function (it) {
    if (isNullOrUndefined$6(it)) throw $TypeError$c("Can't call method on " + it);
    return it;
  };

  var requireObjectCoercible$7 = requireObjectCoercible$8;

  var $Object$4 = Object;

  // `ToObject` abstract operation
  // https://tc39.es/ecma262/#sec-toobject
  var toObject$8 = function (argument) {
    return $Object$4(requireObjectCoercible$7(argument));
  };

  var uncurryThis$q = functionUncurryThis;
  var toObject$7 = toObject$8;

  var hasOwnProperty = uncurryThis$q({}.hasOwnProperty);

  // `HasOwnProperty` abstract operation
  // https://tc39.es/ecma262/#sec-hasownproperty
  // eslint-disable-next-line es/no-object-hasown -- safe
  var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject$7(it), key);
  };

  var uncurryThis$p = functionUncurryThis;

  var id$1 = 0;
  var postfix = Math.random();
  var toString$b = uncurryThis$p(1.0.toString);

  var uid$3 = function (key) {
    return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$b(++id$1 + postfix, 36);
  };

  var engineUserAgent = typeof navigator != 'undefined' && String(navigator.userAgent) || '';

  var global$d = global$g;
  var userAgent = engineUserAgent;

  var process = global$d.process;
  var Deno = global$d.Deno;
  var versions = process && process.versions || Deno && Deno.version;
  var v8 = versions && versions.v8;
  var match, version;

  if (v8) {
    match = v8.split('.');
    // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
  }

  // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
  // so check `userAgent` even if `.v8` exists, but 0
  if (!version && userAgent) {
    match = userAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
      match = userAgent.match(/Chrome\/(\d+)/);
      if (match) version = +match[1];
    }
  }

  var engineV8Version = version;

  /* eslint-disable es/no-symbol -- required for testing */

  var V8_VERSION$2 = engineV8Version;
  var fails$q = fails$s;

  // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
  var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$q(function () {
    var symbol = Symbol();
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
      // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
      !Symbol.sham && V8_VERSION$2 && V8_VERSION$2 < 41;
  });

  /* eslint-disable es/no-symbol -- required for testing */

  var NATIVE_SYMBOL$1 = symbolConstructorDetection;

  var useSymbolAsUid = NATIVE_SYMBOL$1
    && !Symbol.sham
    && typeof Symbol.iterator == 'symbol';

  var global$c = global$g;
  var shared$3 = sharedExports;
  var hasOwn$a = hasOwnProperty_1;
  var uid$2 = uid$3;
  var NATIVE_SYMBOL = symbolConstructorDetection;
  var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

  var Symbol$1 = global$c.Symbol;
  var WellKnownSymbolsStore = shared$3('wks');
  var createWellKnownSymbol = USE_SYMBOL_AS_UID$1 ? Symbol$1['for'] || Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$2;

  var wellKnownSymbol$k = function (name) {
    if (!hasOwn$a(WellKnownSymbolsStore, name)) {
      WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn$a(Symbol$1, name)
        ? Symbol$1[name]
        : createWellKnownSymbol('Symbol.' + name);
    } return WellKnownSymbolsStore[name];
  };

  var wellKnownSymbol$j = wellKnownSymbol$k;

  var TO_STRING_TAG$3 = wellKnownSymbol$j('toStringTag');
  var test = {};

  test[TO_STRING_TAG$3] = 'z';

  var toStringTagSupport = String(test) === '[object z]';

  var documentAll$2 = typeof document == 'object' && document.all;

  // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
  // eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
  var IS_HTMLDDA = typeof documentAll$2 == 'undefined' && documentAll$2 !== undefined;

  var documentAll_1 = {
    all: documentAll$2,
    IS_HTMLDDA: IS_HTMLDDA
  };

  var $documentAll$1 = documentAll_1;

  var documentAll$1 = $documentAll$1.all;

  // `IsCallable` abstract operation
  // https://tc39.es/ecma262/#sec-iscallable
  var isCallable$k = $documentAll$1.IS_HTMLDDA ? function (argument) {
    return typeof argument == 'function' || argument === documentAll$1;
  } : function (argument) {
    return typeof argument == 'function';
  };

  var objectDefineProperty = {};

  var fails$p = fails$s;

  // Detect IE8's incomplete defineProperty implementation
  var descriptors = !fails$p(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
  });

  var isCallable$j = isCallable$k;
  var $documentAll = documentAll_1;

  var documentAll = $documentAll.all;

  var isObject$e = $documentAll.IS_HTMLDDA ? function (it) {
    return typeof it == 'object' ? it !== null : isCallable$j(it) || it === documentAll;
  } : function (it) {
    return typeof it == 'object' ? it !== null : isCallable$j(it);
  };

  var global$b = global$g;
  var isObject$d = isObject$e;

  var document$1 = global$b.document;
  // typeof document.createElement is 'object' in old IE
  var EXISTS$1 = isObject$d(document$1) && isObject$d(document$1.createElement);

  var documentCreateElement$2 = function (it) {
    return EXISTS$1 ? document$1.createElement(it) : {};
  };

  var DESCRIPTORS$b = descriptors;
  var fails$o = fails$s;
  var createElement = documentCreateElement$2;

  // Thanks to IE8 for its funny defineProperty
  var ie8DomDefine = !DESCRIPTORS$b && !fails$o(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement('div'), 'a', {
      get: function () { return 7; }
    }).a != 7;
  });

  var DESCRIPTORS$a = descriptors;
  var fails$n = fails$s;

  // V8 ~ Chrome 36-
  // https://bugs.chromium.org/p/v8/issues/detail?id=3334
  var v8PrototypeDefineBug = DESCRIPTORS$a && fails$n(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function () { /* empty */ }, 'prototype', {
      value: 42,
      writable: false
    }).prototype != 42;
  });

  var isObject$c = isObject$e;

  var $String$4 = String;
  var $TypeError$b = TypeError;

  // `Assert: Type(argument) is Object`
  var anObject$e = function (argument) {
    if (isObject$c(argument)) return argument;
    throw $TypeError$b($String$4(argument) + ' is not an object');
  };

  var NATIVE_BIND$2 = functionBindNative;

  var call$f = Function.prototype.call;

  var functionCall = NATIVE_BIND$2 ? call$f.bind(call$f) : function () {
    return call$f.apply(call$f, arguments);
  };

  var global$a = global$g;
  var isCallable$i = isCallable$k;

  var aFunction = function (argument) {
    return isCallable$i(argument) ? argument : undefined;
  };

  var getBuiltIn$5 = function (namespace, method) {
    return arguments.length < 2 ? aFunction(global$a[namespace]) : global$a[namespace] && global$a[namespace][method];
  };

  var uncurryThis$o = functionUncurryThis;

  var objectIsPrototypeOf = uncurryThis$o({}.isPrototypeOf);

  var getBuiltIn$4 = getBuiltIn$5;
  var isCallable$h = isCallable$k;
  var isPrototypeOf$3 = objectIsPrototypeOf;
  var USE_SYMBOL_AS_UID = useSymbolAsUid;

  var $Object$3 = Object;

  var isSymbol$2 = USE_SYMBOL_AS_UID ? function (it) {
    return typeof it == 'symbol';
  } : function (it) {
    var $Symbol = getBuiltIn$4('Symbol');
    return isCallable$h($Symbol) && isPrototypeOf$3($Symbol.prototype, $Object$3(it));
  };

  var $String$3 = String;

  var tryToString$3 = function (argument) {
    try {
      return $String$3(argument);
    } catch (error) {
      return 'Object';
    }
  };

  var isCallable$g = isCallable$k;
  var tryToString$2 = tryToString$3;

  var $TypeError$a = TypeError;

  // `Assert: IsCallable(argument) is true`
  var aCallable$4 = function (argument) {
    if (isCallable$g(argument)) return argument;
    throw $TypeError$a(tryToString$2(argument) + ' is not a function');
  };

  var aCallable$3 = aCallable$4;
  var isNullOrUndefined$5 = isNullOrUndefined$7;

  // `GetMethod` abstract operation
  // https://tc39.es/ecma262/#sec-getmethod
  var getMethod$5 = function (V, P) {
    var func = V[P];
    return isNullOrUndefined$5(func) ? undefined : aCallable$3(func);
  };

  var call$e = functionCall;
  var isCallable$f = isCallable$k;
  var isObject$b = isObject$e;

  var $TypeError$9 = TypeError;

  // `OrdinaryToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-ordinarytoprimitive
  var ordinaryToPrimitive$1 = function (input, pref) {
    var fn, val;
    if (pref === 'string' && isCallable$f(fn = input.toString) && !isObject$b(val = call$e(fn, input))) return val;
    if (isCallable$f(fn = input.valueOf) && !isObject$b(val = call$e(fn, input))) return val;
    if (pref !== 'string' && isCallable$f(fn = input.toString) && !isObject$b(val = call$e(fn, input))) return val;
    throw $TypeError$9("Can't convert object to primitive value");
  };

  var call$d = functionCall;
  var isObject$a = isObject$e;
  var isSymbol$1 = isSymbol$2;
  var getMethod$4 = getMethod$5;
  var ordinaryToPrimitive = ordinaryToPrimitive$1;
  var wellKnownSymbol$i = wellKnownSymbol$k;

  var $TypeError$8 = TypeError;
  var TO_PRIMITIVE = wellKnownSymbol$i('toPrimitive');

  // `ToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-toprimitive
  var toPrimitive$1 = function (input, pref) {
    if (!isObject$a(input) || isSymbol$1(input)) return input;
    var exoticToPrim = getMethod$4(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
      if (pref === undefined) pref = 'default';
      result = call$d(exoticToPrim, input, pref);
      if (!isObject$a(result) || isSymbol$1(result)) return result;
      throw $TypeError$8("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = 'number';
    return ordinaryToPrimitive(input, pref);
  };

  var toPrimitive = toPrimitive$1;
  var isSymbol = isSymbol$2;

  // `ToPropertyKey` abstract operation
  // https://tc39.es/ecma262/#sec-topropertykey
  var toPropertyKey$3 = function (argument) {
    var key = toPrimitive(argument, 'string');
    return isSymbol(key) ? key : key + '';
  };

  var DESCRIPTORS$9 = descriptors;
  var IE8_DOM_DEFINE$1 = ie8DomDefine;
  var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
  var anObject$d = anObject$e;
  var toPropertyKey$2 = toPropertyKey$3;

  var $TypeError$7 = TypeError;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var $defineProperty = Object.defineProperty;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
  var ENUMERABLE = 'enumerable';
  var CONFIGURABLE$1 = 'configurable';
  var WRITABLE = 'writable';

  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  objectDefineProperty.f = DESCRIPTORS$9 ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
    anObject$d(O);
    P = toPropertyKey$2(P);
    anObject$d(Attributes);
    if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
      var current = $getOwnPropertyDescriptor$1(O, P);
      if (current && current[WRITABLE]) {
        O[P] = Attributes.value;
        Attributes = {
          configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
          enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
          writable: false
        };
      }
    } return $defineProperty(O, P, Attributes);
  } : $defineProperty : function defineProperty(O, P, Attributes) {
    anObject$d(O);
    P = toPropertyKey$2(P);
    anObject$d(Attributes);
    if (IE8_DOM_DEFINE$1) try {
      return $defineProperty(O, P, Attributes);
    } catch (error) { /* empty */ }
    if ('get' in Attributes || 'set' in Attributes) throw $TypeError$7('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var makeBuiltIn$3 = {exports: {}};

  var DESCRIPTORS$8 = descriptors;
  var hasOwn$9 = hasOwnProperty_1;

  var FunctionPrototype$1 = Function.prototype;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getDescriptor = DESCRIPTORS$8 && Object.getOwnPropertyDescriptor;

  var EXISTS = hasOwn$9(FunctionPrototype$1, 'name');
  // additional protection from minified / mangled / dropped function names
  var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
  var CONFIGURABLE = EXISTS && (!DESCRIPTORS$8 || (DESCRIPTORS$8 && getDescriptor(FunctionPrototype$1, 'name').configurable));

  var functionName = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
  };

  var uncurryThis$n = functionUncurryThis;
  var isCallable$e = isCallable$k;
  var store$1 = sharedStore;

  var functionToString = uncurryThis$n(Function.toString);

  // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
  if (!isCallable$e(store$1.inspectSource)) {
    store$1.inspectSource = function (it) {
      return functionToString(it);
    };
  }

  var inspectSource$2 = store$1.inspectSource;

  var global$9 = global$g;
  var isCallable$d = isCallable$k;

  var WeakMap$1 = global$9.WeakMap;

  var weakMapBasicDetection = isCallable$d(WeakMap$1) && /native code/.test(String(WeakMap$1));

  var createPropertyDescriptor$4 = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var DESCRIPTORS$7 = descriptors;
  var definePropertyModule$4 = objectDefineProperty;
  var createPropertyDescriptor$3 = createPropertyDescriptor$4;

  var createNonEnumerableProperty$6 = DESCRIPTORS$7 ? function (object, key, value) {
    return definePropertyModule$4.f(object, key, createPropertyDescriptor$3(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var shared$2 = sharedExports;
  var uid$1 = uid$3;

  var keys = shared$2('keys');

  var sharedKey$3 = function (key) {
    return keys[key] || (keys[key] = uid$1(key));
  };

  var hiddenKeys$5 = {};

  var NATIVE_WEAK_MAP = weakMapBasicDetection;
  var global$8 = global$g;
  var isObject$9 = isObject$e;
  var createNonEnumerableProperty$5 = createNonEnumerableProperty$6;
  var hasOwn$8 = hasOwnProperty_1;
  var shared$1 = sharedStore;
  var sharedKey$2 = sharedKey$3;
  var hiddenKeys$4 = hiddenKeys$5;

  var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
  var TypeError$1 = global$8.TypeError;
  var WeakMap = global$8.WeakMap;
  var set, get, has;

  var enforce = function (it) {
    return has(it) ? get(it) : set(it, {});
  };

  var getterFor = function (TYPE) {
    return function (it) {
      var state;
      if (!isObject$9(it) || (state = get(it)).type !== TYPE) {
        throw TypeError$1('Incompatible receiver, ' + TYPE + ' required');
      } return state;
    };
  };

  if (NATIVE_WEAK_MAP || shared$1.state) {
    var store = shared$1.state || (shared$1.state = new WeakMap());
    /* eslint-disable no-self-assign -- prototype methods protection */
    store.get = store.get;
    store.has = store.has;
    store.set = store.set;
    /* eslint-enable no-self-assign -- prototype methods protection */
    set = function (it, metadata) {
      if (store.has(it)) throw TypeError$1(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      store.set(it, metadata);
      return metadata;
    };
    get = function (it) {
      return store.get(it) || {};
    };
    has = function (it) {
      return store.has(it);
    };
  } else {
    var STATE = sharedKey$2('state');
    hiddenKeys$4[STATE] = true;
    set = function (it, metadata) {
      if (hasOwn$8(it, STATE)) throw TypeError$1(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      createNonEnumerableProperty$5(it, STATE, metadata);
      return metadata;
    };
    get = function (it) {
      return hasOwn$8(it, STATE) ? it[STATE] : {};
    };
    has = function (it) {
      return hasOwn$8(it, STATE);
    };
  }

  var internalState = {
    set: set,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
  };

  var uncurryThis$m = functionUncurryThis;
  var fails$m = fails$s;
  var isCallable$c = isCallable$k;
  var hasOwn$7 = hasOwnProperty_1;
  var DESCRIPTORS$6 = descriptors;
  var CONFIGURABLE_FUNCTION_NAME$1 = functionName.CONFIGURABLE;
  var inspectSource$1 = inspectSource$2;
  var InternalStateModule$3 = internalState;

  var enforceInternalState = InternalStateModule$3.enforce;
  var getInternalState$3 = InternalStateModule$3.get;
  var $String$2 = String;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty$6 = Object.defineProperty;
  var stringSlice$6 = uncurryThis$m(''.slice);
  var replace$3 = uncurryThis$m(''.replace);
  var join = uncurryThis$m([].join);

  var CONFIGURABLE_LENGTH = DESCRIPTORS$6 && !fails$m(function () {
    return defineProperty$6(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
  });

  var TEMPLATE = String(String).split('String');

  var makeBuiltIn$2 = makeBuiltIn$3.exports = function (value, name, options) {
    if (stringSlice$6($String$2(name), 0, 7) === 'Symbol(') {
      name = '[' + replace$3($String$2(name), /^Symbol\(([^)]*)\)/, '$1') + ']';
    }
    if (options && options.getter) name = 'get ' + name;
    if (options && options.setter) name = 'set ' + name;
    if (!hasOwn$7(value, 'name') || (CONFIGURABLE_FUNCTION_NAME$1 && value.name !== name)) {
      if (DESCRIPTORS$6) defineProperty$6(value, 'name', { value: name, configurable: true });
      else value.name = name;
    }
    if (CONFIGURABLE_LENGTH && options && hasOwn$7(options, 'arity') && value.length !== options.arity) {
      defineProperty$6(value, 'length', { value: options.arity });
    }
    try {
      if (options && hasOwn$7(options, 'constructor') && options.constructor) {
        if (DESCRIPTORS$6) defineProperty$6(value, 'prototype', { writable: false });
      // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
      } else if (value.prototype) value.prototype = undefined;
    } catch (error) { /* empty */ }
    var state = enforceInternalState(value);
    if (!hasOwn$7(state, 'source')) {
      state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
    } return value;
  };

  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  // eslint-disable-next-line no-extend-native -- required
  Function.prototype.toString = makeBuiltIn$2(function toString() {
    return isCallable$c(this) && getInternalState$3(this).source || inspectSource$1(this);
  }, 'toString');

  var makeBuiltInExports = makeBuiltIn$3.exports;

  var isCallable$b = isCallable$k;
  var definePropertyModule$3 = objectDefineProperty;
  var makeBuiltIn$1 = makeBuiltInExports;
  var defineGlobalProperty$1 = defineGlobalProperty$3;

  var defineBuiltIn$8 = function (O, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== undefined ? options.name : key;
    if (isCallable$b(value)) makeBuiltIn$1(value, name, options);
    if (options.global) {
      if (simple) O[key] = value;
      else defineGlobalProperty$1(key, value);
    } else {
      try {
        if (!options.unsafe) delete O[key];
        else if (O[key]) simple = true;
      } catch (error) { /* empty */ }
      if (simple) O[key] = value;
      else definePropertyModule$3.f(O, key, {
        value: value,
        enumerable: false,
        configurable: !options.nonConfigurable,
        writable: !options.nonWritable
      });
    } return O;
  };

  var uncurryThis$l = functionUncurryThis;

  var toString$a = uncurryThis$l({}.toString);
  var stringSlice$5 = uncurryThis$l(''.slice);

  var classofRaw$2 = function (it) {
    return stringSlice$5(toString$a(it), 8, -1);
  };

  var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
  var isCallable$a = isCallable$k;
  var classofRaw$1 = classofRaw$2;
  var wellKnownSymbol$h = wellKnownSymbol$k;

  var TO_STRING_TAG$2 = wellKnownSymbol$h('toStringTag');
  var $Object$2 = Object;

  // ES3 wrong here
  var CORRECT_ARGUMENTS = classofRaw$1(function () { return arguments; }()) == 'Arguments';

  // fallback for IE11 Script Access Denied error
  var tryGet = function (it, key) {
    try {
      return it[key];
    } catch (error) { /* empty */ }
  };

  // getting tag from ES6+ `Object.prototype.toString`
  var classof$a = TO_STRING_TAG_SUPPORT$2 ? classofRaw$1 : function (it) {
    var O, tag, result;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
      // @@toStringTag case
      : typeof (tag = tryGet(O = $Object$2(it), TO_STRING_TAG$2)) == 'string' ? tag
      // builtinTag case
      : CORRECT_ARGUMENTS ? classofRaw$1(O)
      // ES3 arguments fallback
      : (result = classofRaw$1(O)) == 'Object' && isCallable$a(O.callee) ? 'Arguments' : result;
  };

  var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
  var classof$9 = classof$a;

  // `Object.prototype.toString` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.tostring
  var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
    return '[object ' + classof$9(this) + ']';
  };

  var TO_STRING_TAG_SUPPORT = toStringTagSupport;
  var defineBuiltIn$7 = defineBuiltIn$8;
  var toString$9 = objectToString;

  // `Object.prototype.toString` method
  // https://tc39.es/ecma262/#sec-object.prototype.tostring
  if (!TO_STRING_TAG_SUPPORT) {
    defineBuiltIn$7(Object.prototype, 'toString', toString$9, { unsafe: true });
  }

  // iterable DOM collections
  // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
  var domIterables = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0
  };

  // in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
  var documentCreateElement$1 = documentCreateElement$2;

  var classList = documentCreateElement$1('span').classList;
  var DOMTokenListPrototype$2 = classList && classList.constructor && classList.constructor.prototype;

  var domTokenListPrototype = DOMTokenListPrototype$2 === Object.prototype ? undefined : DOMTokenListPrototype$2;

  var classofRaw = classofRaw$2;
  var uncurryThis$k = functionUncurryThis;

  var functionUncurryThisClause = function (fn) {
    // Nashorn bug:
    //   https://github.com/zloirock/core-js/issues/1128
    //   https://github.com/zloirock/core-js/issues/1130
    if (classofRaw(fn) === 'Function') return uncurryThis$k(fn);
  };

  var uncurryThis$j = functionUncurryThisClause;
  var aCallable$2 = aCallable$4;
  var NATIVE_BIND$1 = functionBindNative;

  var bind$4 = uncurryThis$j(uncurryThis$j.bind);

  // optional / simple context binding
  var functionBindContext = function (fn, that) {
    aCallable$2(fn);
    return that === undefined ? fn : NATIVE_BIND$1 ? bind$4(fn, that) : function (/* ...args */) {
      return fn.apply(that, arguments);
    };
  };

  var uncurryThis$i = functionUncurryThis;
  var fails$l = fails$s;
  var classof$8 = classofRaw$2;

  var $Object$1 = Object;
  var split = uncurryThis$i(''.split);

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  var indexedObject = fails$l(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$Object$1('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classof$8(it) == 'String' ? split(it, '') : $Object$1(it);
  } : $Object$1;

  var ceil = Math.ceil;
  var floor$1 = Math.floor;

  // `Math.trunc` method
  // https://tc39.es/ecma262/#sec-math.trunc
  // eslint-disable-next-line es/no-math-trunc -- safe
  var mathTrunc = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? floor$1 : ceil)(n);
  };

  var trunc = mathTrunc;

  // `ToIntegerOrInfinity` abstract operation
  // https://tc39.es/ecma262/#sec-tointegerorinfinity
  var toIntegerOrInfinity$4 = function (argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- NaN check
    return number !== number || number === 0 ? 0 : trunc(number);
  };

  var toIntegerOrInfinity$3 = toIntegerOrInfinity$4;

  var min$3 = Math.min;

  // `ToLength` abstract operation
  // https://tc39.es/ecma262/#sec-tolength
  var toLength$4 = function (argument) {
    return argument > 0 ? min$3(toIntegerOrInfinity$3(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
  };

  var toLength$3 = toLength$4;

  // `LengthOfArrayLike` abstract operation
  // https://tc39.es/ecma262/#sec-lengthofarraylike
  var lengthOfArrayLike$7 = function (obj) {
    return toLength$3(obj.length);
  };

  var classof$7 = classofRaw$2;

  // `IsArray` abstract operation
  // https://tc39.es/ecma262/#sec-isarray
  // eslint-disable-next-line es/no-array-isarray -- safe
  var isArray$3 = Array.isArray || function isArray(argument) {
    return classof$7(argument) == 'Array';
  };

  var uncurryThis$h = functionUncurryThis;
  var fails$k = fails$s;
  var isCallable$9 = isCallable$k;
  var classof$6 = classof$a;
  var getBuiltIn$3 = getBuiltIn$5;
  var inspectSource = inspectSource$2;

  var noop = function () { /* empty */ };
  var empty = [];
  var construct = getBuiltIn$3('Reflect', 'construct');
  var constructorRegExp = /^\s*(?:class|function)\b/;
  var exec$1 = uncurryThis$h(constructorRegExp.exec);
  var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

  var isConstructorModern = function isConstructor(argument) {
    if (!isCallable$9(argument)) return false;
    try {
      construct(noop, empty, argument);
      return true;
    } catch (error) {
      return false;
    }
  };

  var isConstructorLegacy = function isConstructor(argument) {
    if (!isCallable$9(argument)) return false;
    switch (classof$6(argument)) {
      case 'AsyncFunction':
      case 'GeneratorFunction':
      case 'AsyncGeneratorFunction': return false;
    }
    try {
      // we can't check .prototype since constructors produced by .bind haven't it
      // `Function#toString` throws on some built-it function in some legacy engines
      // (for example, `DOMQuad` and similar in FF41-)
      return INCORRECT_TO_STRING || !!exec$1(constructorRegExp, inspectSource(argument));
    } catch (error) {
      return true;
    }
  };

  isConstructorLegacy.sham = true;

  // `IsConstructor` abstract operation
  // https://tc39.es/ecma262/#sec-isconstructor
  var isConstructor$3 = !construct || fails$k(function () {
    var called;
    return isConstructorModern(isConstructorModern.call)
      || !isConstructorModern(Object)
      || !isConstructorModern(function () { called = true; })
      || called;
  }) ? isConstructorLegacy : isConstructorModern;

  var isArray$2 = isArray$3;
  var isConstructor$2 = isConstructor$3;
  var isObject$8 = isObject$e;
  var wellKnownSymbol$g = wellKnownSymbol$k;

  var SPECIES$4 = wellKnownSymbol$g('species');
  var $Array$3 = Array;

  // a part of `ArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#sec-arrayspeciescreate
  var arraySpeciesConstructor$1 = function (originalArray) {
    var C;
    if (isArray$2(originalArray)) {
      C = originalArray.constructor;
      // cross-realm fallback
      if (isConstructor$2(C) && (C === $Array$3 || isArray$2(C.prototype))) C = undefined;
      else if (isObject$8(C)) {
        C = C[SPECIES$4];
        if (C === null) C = undefined;
      }
    } return C === undefined ? $Array$3 : C;
  };

  var arraySpeciesConstructor = arraySpeciesConstructor$1;

  // `ArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#sec-arrayspeciescreate
  var arraySpeciesCreate$2 = function (originalArray, length) {
    return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
  };

  var bind$3 = functionBindContext;
  var uncurryThis$g = functionUncurryThis;
  var IndexedObject$3 = indexedObject;
  var toObject$6 = toObject$8;
  var lengthOfArrayLike$6 = lengthOfArrayLike$7;
  var arraySpeciesCreate$1 = arraySpeciesCreate$2;

  var push$2 = uncurryThis$g([].push);

  // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
  var createMethod$3 = function (TYPE) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var IS_FILTER_REJECT = TYPE == 7;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    return function ($this, callbackfn, that, specificCreate) {
      var O = toObject$6($this);
      var self = IndexedObject$3(O);
      var boundFunction = bind$3(callbackfn, that);
      var length = lengthOfArrayLike$6(self);
      var index = 0;
      var create = specificCreate || arraySpeciesCreate$1;
      var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
      var value, result;
      for (;length > index; index++) if (NO_HOLES || index in self) {
        value = self[index];
        result = boundFunction(value, index, O);
        if (TYPE) {
          if (IS_MAP) target[index] = result; // map
          else if (result) switch (TYPE) {
            case 3: return true;              // some
            case 5: return value;             // find
            case 6: return index;             // findIndex
            case 2: push$2(target, value);      // filter
          } else switch (TYPE) {
            case 4: return false;             // every
            case 7: push$2(target, value);      // filterReject
          }
        }
      }
      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
    };
  };

  var arrayIteration = {
    // `Array.prototype.forEach` method
    // https://tc39.es/ecma262/#sec-array.prototype.foreach
    forEach: createMethod$3(0),
    // `Array.prototype.map` method
    // https://tc39.es/ecma262/#sec-array.prototype.map
    map: createMethod$3(1),
    // `Array.prototype.filter` method
    // https://tc39.es/ecma262/#sec-array.prototype.filter
    filter: createMethod$3(2),
    // `Array.prototype.some` method
    // https://tc39.es/ecma262/#sec-array.prototype.some
    some: createMethod$3(3),
    // `Array.prototype.every` method
    // https://tc39.es/ecma262/#sec-array.prototype.every
    every: createMethod$3(4),
    // `Array.prototype.find` method
    // https://tc39.es/ecma262/#sec-array.prototype.find
    find: createMethod$3(5),
    // `Array.prototype.findIndex` method
    // https://tc39.es/ecma262/#sec-array.prototype.findIndex
    findIndex: createMethod$3(6),
    // `Array.prototype.filterReject` method
    // https://github.com/tc39/proposal-array-filtering
    filterReject: createMethod$3(7)
  };

  var fails$j = fails$s;

  var arrayMethodIsStrict$2 = function (METHOD_NAME, argument) {
    var method = [][METHOD_NAME];
    return !!method && fails$j(function () {
      // eslint-disable-next-line no-useless-call -- required for testing
      method.call(null, argument || function () { return 1; }, 1);
    });
  };

  var $forEach = arrayIteration.forEach;
  var arrayMethodIsStrict$1 = arrayMethodIsStrict$2;

  var STRICT_METHOD = arrayMethodIsStrict$1('forEach');

  // `Array.prototype.forEach` method implementation
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  var arrayForEach = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  // eslint-disable-next-line es/no-array-prototype-foreach -- safe
  } : [].forEach;

  var global$7 = global$g;
  var DOMIterables$1 = domIterables;
  var DOMTokenListPrototype$1 = domTokenListPrototype;
  var forEach = arrayForEach;
  var createNonEnumerableProperty$4 = createNonEnumerableProperty$6;

  var handlePrototype$1 = function (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
      createNonEnumerableProperty$4(CollectionPrototype, 'forEach', forEach);
    } catch (error) {
      CollectionPrototype.forEach = forEach;
    }
  };

  for (var COLLECTION_NAME$1 in DOMIterables$1) {
    if (DOMIterables$1[COLLECTION_NAME$1]) {
      handlePrototype$1(global$7[COLLECTION_NAME$1] && global$7[COLLECTION_NAME$1].prototype);
    }
  }

  handlePrototype$1(DOMTokenListPrototype$1);

  // closest polyfill
  (function () {
    if (typeof Element !== "undefined") {
      if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
      }
      if (!Element.prototype.closest) {
        Element.prototype.closest = function (s) {
          var el = this;
          do {
            if (el.matches(s)) return el;
            el = el.parentElement || el.parentNode;
          } while (el !== null && el.nodeType === 1);
          return null;
        };
      }
    }
  })();

  (function () {
    if (typeof window.CustomEvent === 'function') return false; //If not IE

    function CustomEvent(event, params) {
      params = params || {
        bubbles: false,
        cancelable: false,
        detail: undefined
      };
      var evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    }
    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
  })();

  var objectGetOwnPropertyDescriptor = {};

  var objectPropertyIsEnumerable = {};

  var $propertyIsEnumerable = {}.propertyIsEnumerable;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

  // Nashorn ~ JDK8 bug
  var NASHORN_BUG = getOwnPropertyDescriptor$2 && !$propertyIsEnumerable.call({ 1: 2 }, 1);

  // `Object.prototype.propertyIsEnumerable` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
  objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor$2(this, V);
    return !!descriptor && descriptor.enumerable;
  } : $propertyIsEnumerable;

  // toObject with fallback for non-array-like ES3 strings
  var IndexedObject$2 = indexedObject;
  var requireObjectCoercible$6 = requireObjectCoercible$8;

  var toIndexedObject$8 = function (it) {
    return IndexedObject$2(requireObjectCoercible$6(it));
  };

  var DESCRIPTORS$5 = descriptors;
  var call$c = functionCall;
  var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
  var createPropertyDescriptor$2 = createPropertyDescriptor$4;
  var toIndexedObject$7 = toIndexedObject$8;
  var toPropertyKey$1 = toPropertyKey$3;
  var hasOwn$6 = hasOwnProperty_1;
  var IE8_DOM_DEFINE = ie8DomDefine;

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
  objectGetOwnPropertyDescriptor.f = DESCRIPTORS$5 ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject$7(O);
    P = toPropertyKey$1(P);
    if (IE8_DOM_DEFINE) try {
      return $getOwnPropertyDescriptor(O, P);
    } catch (error) { /* empty */ }
    if (hasOwn$6(O, P)) return createPropertyDescriptor$2(!call$c(propertyIsEnumerableModule$1.f, O, P), O[P]);
  };

  var objectGetOwnPropertyNames = {};

  var toIntegerOrInfinity$2 = toIntegerOrInfinity$4;

  var max$3 = Math.max;
  var min$2 = Math.min;

  // Helper for a popular repeating case of the spec:
  // Let integer be ? ToInteger(index).
  // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
  var toAbsoluteIndex$3 = function (index, length) {
    var integer = toIntegerOrInfinity$2(index);
    return integer < 0 ? max$3(integer + length, 0) : min$2(integer, length);
  };

  var toIndexedObject$6 = toIndexedObject$8;
  var toAbsoluteIndex$2 = toAbsoluteIndex$3;
  var lengthOfArrayLike$5 = lengthOfArrayLike$7;

  // `Array.prototype.{ indexOf, includes }` methods implementation
  var createMethod$2 = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject$6($this);
      var length = lengthOfArrayLike$5(O);
      var index = toAbsoluteIndex$2(fromIndex, length);
      var value;
      // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare -- NaN check
      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++];
        // eslint-disable-next-line no-self-compare -- NaN check
        if (value != value) return true;
      // Array#indexOf ignores holes, Array#includes - not
      } else for (;length > index; index++) {
        if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
      } return !IS_INCLUDES && -1;
    };
  };

  var arrayIncludes = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod$2(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod$2(false)
  };

  var uncurryThis$f = functionUncurryThis;
  var hasOwn$5 = hasOwnProperty_1;
  var toIndexedObject$5 = toIndexedObject$8;
  var indexOf$1 = arrayIncludes.indexOf;
  var hiddenKeys$3 = hiddenKeys$5;

  var push$1 = uncurryThis$f([].push);

  var objectKeysInternal = function (object, names) {
    var O = toIndexedObject$5(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) !hasOwn$5(hiddenKeys$3, key) && hasOwn$5(O, key) && push$1(result, key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (hasOwn$5(O, key = names[i++])) {
      ~indexOf$1(result, key) || push$1(result, key);
    }
    return result;
  };

  // IE8- don't enum bug keys
  var enumBugKeys$3 = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf'
  ];

  var internalObjectKeys$1 = objectKeysInternal;
  var enumBugKeys$2 = enumBugKeys$3;

  var hiddenKeys$2 = enumBugKeys$2.concat('length', 'prototype');

  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  // eslint-disable-next-line es/no-object-getownpropertynames -- safe
  objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys$1(O, hiddenKeys$2);
  };

  var objectGetOwnPropertySymbols = {};

  // eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
  objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

  var getBuiltIn$2 = getBuiltIn$5;
  var uncurryThis$e = functionUncurryThis;
  var getOwnPropertyNamesModule$1 = objectGetOwnPropertyNames;
  var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
  var anObject$c = anObject$e;

  var concat$2 = uncurryThis$e([].concat);

  // all object keys, includes non-enumerable and symbols
  var ownKeys$1 = getBuiltIn$2('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule$1.f(anObject$c(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
    return getOwnPropertySymbols ? concat$2(keys, getOwnPropertySymbols(it)) : keys;
  };

  var hasOwn$4 = hasOwnProperty_1;
  var ownKeys = ownKeys$1;
  var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
  var definePropertyModule$2 = objectDefineProperty;

  var copyConstructorProperties$1 = function (target, source, exceptions) {
    var keys = ownKeys(source);
    var defineProperty = definePropertyModule$2.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (!hasOwn$4(target, key) && !(exceptions && hasOwn$4(exceptions, key))) {
        defineProperty(target, key, getOwnPropertyDescriptor(source, key));
      }
    }
  };

  var fails$i = fails$s;
  var isCallable$8 = isCallable$k;

  var replacement = /#|\.prototype\./;

  var isForced$2 = function (feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true
      : value == NATIVE ? false
      : isCallable$8(detection) ? fails$i(detection)
      : !!detection;
  };

  var normalize = isForced$2.normalize = function (string) {
    return String(string).replace(replacement, '.').toLowerCase();
  };

  var data = isForced$2.data = {};
  var NATIVE = isForced$2.NATIVE = 'N';
  var POLYFILL = isForced$2.POLYFILL = 'P';

  var isForced_1 = isForced$2;

  var global$6 = global$g;
  var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
  var createNonEnumerableProperty$3 = createNonEnumerableProperty$6;
  var defineBuiltIn$6 = defineBuiltIn$8;
  var defineGlobalProperty = defineGlobalProperty$3;
  var copyConstructorProperties = copyConstructorProperties$1;
  var isForced$1 = isForced_1;

  /*
    options.target         - name of the target object
    options.global         - target is the global object
    options.stat           - export as static methods of target
    options.proto          - export as prototype methods of target
    options.real           - real prototype method for the `pure` version
    options.forced         - export even if the native feature is available
    options.bind           - bind methods to the target, required for the `pure` version
    options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
    options.unsafe         - use the simple assignment of property instead of delete + defineProperty
    options.sham           - add a flag to not completely full polyfills
    options.enumerable     - export as enumerable property
    options.dontCallGetSet - prevent calling a getter on target
    options.name           - the .name of the function if it does not match the key
  */
  var _export = function (options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) {
      target = global$6;
    } else if (STATIC) {
      target = global$6[TARGET] || defineGlobalProperty(TARGET, {});
    } else {
      target = (global$6[TARGET] || {}).prototype;
    }
    if (target) for (key in source) {
      sourceProperty = source[key];
      if (options.dontCallGetSet) {
        descriptor = getOwnPropertyDescriptor$1(target, key);
        targetProperty = descriptor && descriptor.value;
      } else targetProperty = target[key];
      FORCED = isForced$1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
      // contained in target
      if (!FORCED && targetProperty !== undefined) {
        if (typeof sourceProperty == typeof targetProperty) continue;
        copyConstructorProperties(sourceProperty, targetProperty);
      }
      // add a flag to not completely full polyfills
      if (options.sham || (targetProperty && targetProperty.sham)) {
        createNonEnumerableProperty$3(sourceProperty, 'sham', true);
      }
      defineBuiltIn$6(target, key, sourceProperty, options);
    }
  };

  var fails$h = fails$s;
  var wellKnownSymbol$f = wellKnownSymbol$k;
  var V8_VERSION$1 = engineV8Version;

  var SPECIES$3 = wellKnownSymbol$f('species');

  var arrayMethodHasSpeciesSupport$4 = function (METHOD_NAME) {
    // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/677
    return V8_VERSION$1 >= 51 || !fails$h(function () {
      var array = [];
      var constructor = array.constructor = {};
      constructor[SPECIES$3] = function () {
        return { foo: 1 };
      };
      return array[METHOD_NAME](Boolean).foo !== 1;
    });
  };

  var $$g = _export;
  var $filter = arrayIteration.filter;
  var arrayMethodHasSpeciesSupport$3 = arrayMethodHasSpeciesSupport$4;

  var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport$3('filter');

  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  // with adding support of @@species
  $$g({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$2 }, {
    filter: function filter(callbackfn /* , thisArg */) {
      return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty('remove')) return;
      Object.defineProperty(item, 'remove', {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function remove() {
          this.parentNode && this.parentNode.removeChild(this);
        }
      });
    });
  })([Element.prototype, CharacterData.prototype, DocumentType.prototype].filter(Boolean));

  var toPropertyKey = toPropertyKey$3;
  var definePropertyModule$1 = objectDefineProperty;
  var createPropertyDescriptor$1 = createPropertyDescriptor$4;

  var createProperty$4 = function (object, key, value) {
    var propertyKey = toPropertyKey(key);
    if (propertyKey in object) definePropertyModule$1.f(object, propertyKey, createPropertyDescriptor$1(0, value));
    else object[propertyKey] = value;
  };

  var uncurryThis$d = functionUncurryThis;

  var arraySlice$1 = uncurryThis$d([].slice);

  var $$f = _export;
  var isArray$1 = isArray$3;
  var isConstructor$1 = isConstructor$3;
  var isObject$7 = isObject$e;
  var toAbsoluteIndex$1 = toAbsoluteIndex$3;
  var lengthOfArrayLike$4 = lengthOfArrayLike$7;
  var toIndexedObject$4 = toIndexedObject$8;
  var createProperty$3 = createProperty$4;
  var wellKnownSymbol$e = wellKnownSymbol$k;
  var arrayMethodHasSpeciesSupport$2 = arrayMethodHasSpeciesSupport$4;
  var nativeSlice = arraySlice$1;

  var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$2('slice');

  var SPECIES$2 = wellKnownSymbol$e('species');
  var $Array$2 = Array;
  var max$2 = Math.max;

  // `Array.prototype.slice` method
  // https://tc39.es/ecma262/#sec-array.prototype.slice
  // fallback for not array-like ES3 strings and DOM objects
  $$f({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$1 }, {
    slice: function slice(start, end) {
      var O = toIndexedObject$4(this);
      var length = lengthOfArrayLike$4(O);
      var k = toAbsoluteIndex$1(start, length);
      var fin = toAbsoluteIndex$1(end === undefined ? length : end, length);
      // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
      var Constructor, result, n;
      if (isArray$1(O)) {
        Constructor = O.constructor;
        // cross-realm fallback
        if (isConstructor$1(Constructor) && (Constructor === $Array$2 || isArray$1(Constructor.prototype))) {
          Constructor = undefined;
        } else if (isObject$7(Constructor)) {
          Constructor = Constructor[SPECIES$2];
          if (Constructor === null) Constructor = undefined;
        }
        if (Constructor === $Array$2 || Constructor === undefined) {
          return nativeSlice(O, k, fin);
        }
      }
      result = new (Constructor === undefined ? $Array$2 : Constructor)(max$2(fin - k, 0));
      for (n = 0; k < fin; k++, n++) if (k in O) createProperty$3(result, n, O[k]);
      result.length = n;
      return result;
    }
  });

  (function () {
    var ElementPrototype = window.Element.prototype;
    var DocumentPrototype = window.Document.prototype;
    var DocumentFragmentPrototype = window.DocumentFragment.prototype;
    if (!ElementPrototype.prepend || !DocumentPrototype.prepend || !DocumentFragmentPrototype.prepend) {
      ElementPrototype.prepend = DocumentPrototype.prepend = DocumentFragmentPrototype.prepend = function () {
        var argArr = window.Array.prototype.slice.call(arguments);
        var docFrag = window.document.createDocumentFragment();
        argArr.forEach(function (argItem) {
          var isNode = argItem instanceof window.Node;
          docFrag.appendChild(isNode ? argItem : document.createTextNode(window.String(argItem)));
        });
        this.insertBefore(docFrag, this.firstChild);
      };
    }
  })();

  (function () {
    NodeList.prototype.forEach = Array.prototype.forEach;
  })();

  var masonry = {exports: {}};

  var outlayer = {exports: {}};

  var evEmitter = {exports: {}};

  /**
   * EvEmitter v1.1.0
   * Lil' event emitter
   * MIT License
   */

  var hasRequiredEvEmitter;

  function requireEvEmitter () {
  	if (hasRequiredEvEmitter) return evEmitter.exports;
  	hasRequiredEvEmitter = 1;
  	(function (module) {
  		/* jshint unused: true, undef: true, strict: true */

  		( function( global, factory ) {
  		  // universal module definition
  		  /* jshint strict: false */ /* globals define, module, window */
  		  if ( module.exports ) {
  		    // CommonJS - Browserify, Webpack
  		    module.exports = factory();
  		  } else {
  		    // Browser globals
  		    global.EvEmitter = factory();
  		  }

  		}( typeof window != 'undefined' ? window : commonjsGlobal, function() {

  		function EvEmitter() {}

  		var proto = EvEmitter.prototype;

  		proto.on = function( eventName, listener ) {
  		  if ( !eventName || !listener ) {
  		    return;
  		  }
  		  // set events hash
  		  var events = this._events = this._events || {};
  		  // set listeners array
  		  var listeners = events[ eventName ] = events[ eventName ] || [];
  		  // only add once
  		  if ( listeners.indexOf( listener ) == -1 ) {
  		    listeners.push( listener );
  		  }

  		  return this;
  		};

  		proto.once = function( eventName, listener ) {
  		  if ( !eventName || !listener ) {
  		    return;
  		  }
  		  // add event
  		  this.on( eventName, listener );
  		  // set once flag
  		  // set onceEvents hash
  		  var onceEvents = this._onceEvents = this._onceEvents || {};
  		  // set onceListeners object
  		  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
  		  // set flag
  		  onceListeners[ listener ] = true;

  		  return this;
  		};

  		proto.off = function( eventName, listener ) {
  		  var listeners = this._events && this._events[ eventName ];
  		  if ( !listeners || !listeners.length ) {
  		    return;
  		  }
  		  var index = listeners.indexOf( listener );
  		  if ( index != -1 ) {
  		    listeners.splice( index, 1 );
  		  }

  		  return this;
  		};

  		proto.emitEvent = function( eventName, args ) {
  		  var listeners = this._events && this._events[ eventName ];
  		  if ( !listeners || !listeners.length ) {
  		    return;
  		  }
  		  // copy over to avoid interference if .off() in listener
  		  listeners = listeners.slice(0);
  		  args = args || [];
  		  // once stuff
  		  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];

  		  for ( var i=0; i < listeners.length; i++ ) {
  		    var listener = listeners[i];
  		    var isOnce = onceListeners && onceListeners[ listener ];
  		    if ( isOnce ) {
  		      // remove listener
  		      // remove before trigger to prevent recursion
  		      this.off( eventName, listener );
  		      // unset once flag
  		      delete onceListeners[ listener ];
  		    }
  		    // trigger listener
  		    listener.apply( this, args );
  		  }

  		  return this;
  		};

  		proto.allOff = function() {
  		  delete this._events;
  		  delete this._onceEvents;
  		};

  		return EvEmitter;

  		})); 
  	} (evEmitter));
  	return evEmitter.exports;
  }

  var getSize = {exports: {}};

  /*!
   * getSize v2.0.3
   * measure size of elements
   * MIT license
   */

  var hasRequiredGetSize;

  function requireGetSize () {
  	if (hasRequiredGetSize) return getSize.exports;
  	hasRequiredGetSize = 1;
  	(function (module) {
  		/* jshint browser: true, strict: true, undef: true, unused: true */
  		/* globals console: false */

  		( function( window, factory ) {
  		  /* jshint strict: false */ /* globals define, module */
  		  if ( module.exports ) {
  		    // CommonJS
  		    module.exports = factory();
  		  } else {
  		    // browser global
  		    window.getSize = factory();
  		  }

  		})( window, function factory() {

  		// -------------------------- helpers -------------------------- //

  		// get a number from a string, not a percentage
  		function getStyleSize( value ) {
  		  var num = parseFloat( value );
  		  // not a percent like '100%', and a number
  		  var isValid = value.indexOf('%') == -1 && !isNaN( num );
  		  return isValid && num;
  		}

  		function noop() {}

  		var logError = typeof console == 'undefined' ? noop :
  		  function( message ) {
  		    console.error( message );
  		  };

  		// -------------------------- measurements -------------------------- //

  		var measurements = [
  		  'paddingLeft',
  		  'paddingRight',
  		  'paddingTop',
  		  'paddingBottom',
  		  'marginLeft',
  		  'marginRight',
  		  'marginTop',
  		  'marginBottom',
  		  'borderLeftWidth',
  		  'borderRightWidth',
  		  'borderTopWidth',
  		  'borderBottomWidth'
  		];

  		var measurementsLength = measurements.length;

  		function getZeroSize() {
  		  var size = {
  		    width: 0,
  		    height: 0,
  		    innerWidth: 0,
  		    innerHeight: 0,
  		    outerWidth: 0,
  		    outerHeight: 0
  		  };
  		  for ( var i=0; i < measurementsLength; i++ ) {
  		    var measurement = measurements[i];
  		    size[ measurement ] = 0;
  		  }
  		  return size;
  		}

  		// -------------------------- getStyle -------------------------- //

  		/**
  		 * getStyle, get style of element, check for Firefox bug
  		 * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
  		 */
  		function getStyle( elem ) {
  		  var style = getComputedStyle( elem );
  		  if ( !style ) {
  		    logError( 'Style returned ' + style +
  		      '. Are you running this code in a hidden iframe on Firefox? ' +
  		      'See https://bit.ly/getsizebug1' );
  		  }
  		  return style;
  		}

  		// -------------------------- setup -------------------------- //

  		var isSetup = false;

  		var isBoxSizeOuter;

  		/**
  		 * setup
  		 * check isBoxSizerOuter
  		 * do on first getSize() rather than on page load for Firefox bug
  		 */
  		function setup() {
  		  // setup once
  		  if ( isSetup ) {
  		    return;
  		  }
  		  isSetup = true;

  		  // -------------------------- box sizing -------------------------- //

  		  /**
  		   * Chrome & Safari measure the outer-width on style.width on border-box elems
  		   * IE11 & Firefox<29 measures the inner-width
  		   */
  		  var div = document.createElement('div');
  		  div.style.width = '200px';
  		  div.style.padding = '1px 2px 3px 4px';
  		  div.style.borderStyle = 'solid';
  		  div.style.borderWidth = '1px 2px 3px 4px';
  		  div.style.boxSizing = 'border-box';

  		  var body = document.body || document.documentElement;
  		  body.appendChild( div );
  		  var style = getStyle( div );
  		  // round value for browser zoom. desandro/masonry#928
  		  isBoxSizeOuter = Math.round( getStyleSize( style.width ) ) == 200;
  		  getSize.isBoxSizeOuter = isBoxSizeOuter;

  		  body.removeChild( div );
  		}

  		// -------------------------- getSize -------------------------- //

  		function getSize( elem ) {
  		  setup();

  		  // use querySeletor if elem is string
  		  if ( typeof elem == 'string' ) {
  		    elem = document.querySelector( elem );
  		  }

  		  // do not proceed on non-objects
  		  if ( !elem || typeof elem != 'object' || !elem.nodeType ) {
  		    return;
  		  }

  		  var style = getStyle( elem );

  		  // if hidden, everything is 0
  		  if ( style.display == 'none' ) {
  		    return getZeroSize();
  		  }

  		  var size = {};
  		  size.width = elem.offsetWidth;
  		  size.height = elem.offsetHeight;

  		  var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';

  		  // get all measurements
  		  for ( var i=0; i < measurementsLength; i++ ) {
  		    var measurement = measurements[i];
  		    var value = style[ measurement ];
  		    var num = parseFloat( value );
  		    // any 'auto', 'medium' value will be 0
  		    size[ measurement ] = !isNaN( num ) ? num : 0;
  		  }

  		  var paddingWidth = size.paddingLeft + size.paddingRight;
  		  var paddingHeight = size.paddingTop + size.paddingBottom;
  		  var marginWidth = size.marginLeft + size.marginRight;
  		  var marginHeight = size.marginTop + size.marginBottom;
  		  var borderWidth = size.borderLeftWidth + size.borderRightWidth;
  		  var borderHeight = size.borderTopWidth + size.borderBottomWidth;

  		  var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

  		  // overwrite width and height if we can get it from style
  		  var styleWidth = getStyleSize( style.width );
  		  if ( styleWidth !== false ) {
  		    size.width = styleWidth +
  		      // add padding and border unless it's already including it
  		      ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
  		  }

  		  var styleHeight = getStyleSize( style.height );
  		  if ( styleHeight !== false ) {
  		    size.height = styleHeight +
  		      // add padding and border unless it's already including it
  		      ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
  		  }

  		  size.innerWidth = size.width - ( paddingWidth + borderWidth );
  		  size.innerHeight = size.height - ( paddingHeight + borderHeight );

  		  size.outerWidth = size.width + marginWidth;
  		  size.outerHeight = size.height + marginHeight;

  		  return size;
  		}

  		return getSize;

  		}); 
  	} (getSize));
  	return getSize.exports;
  }

  var utils = {exports: {}};

  var matchesSelector = {exports: {}};

  /**
   * matchesSelector v2.0.2
   * matchesSelector( element, '.selector' )
   * MIT license
   */

  var hasRequiredMatchesSelector;

  function requireMatchesSelector () {
  	if (hasRequiredMatchesSelector) return matchesSelector.exports;
  	hasRequiredMatchesSelector = 1;
  	(function (module) {
  		/*jshint browser: true, strict: true, undef: true, unused: true */

  		( function( window, factory ) {
  		  // universal module definition
  		  if ( module.exports ) {
  		    // CommonJS
  		    module.exports = factory();
  		  } else {
  		    // browser global
  		    window.matchesSelector = factory();
  		  }

  		}( window, function factory() {

  		  var matchesMethod = ( function() {
  		    var ElemProto = window.Element.prototype;
  		    // check for the standard method name first
  		    if ( ElemProto.matches ) {
  		      return 'matches';
  		    }
  		    // check un-prefixed
  		    if ( ElemProto.matchesSelector ) {
  		      return 'matchesSelector';
  		    }
  		    // check vendor prefixes
  		    var prefixes = [ 'webkit', 'moz', 'ms', 'o' ];

  		    for ( var i=0; i < prefixes.length; i++ ) {
  		      var prefix = prefixes[i];
  		      var method = prefix + 'MatchesSelector';
  		      if ( ElemProto[ method ] ) {
  		        return method;
  		      }
  		    }
  		  })();

  		  return function matchesSelector( elem, selector ) {
  		    return elem[ matchesMethod ]( selector );
  		  };

  		})); 
  	} (matchesSelector));
  	return matchesSelector.exports;
  }

  /**
   * Fizzy UI utils v2.0.7
   * MIT license
   */

  var hasRequiredUtils;

  function requireUtils () {
  	if (hasRequiredUtils) return utils.exports;
  	hasRequiredUtils = 1;
  	(function (module) {
  		/*jshint browser: true, undef: true, unused: true, strict: true */

  		( function( window, factory ) {
  		  // universal module definition
  		  /*jshint strict: false */ /*globals define, module, require */

  		  if ( module.exports ) {
  		    // CommonJS
  		    module.exports = factory(
  		      window,
  		      requireMatchesSelector()
  		    );
  		  } else {
  		    // browser global
  		    window.fizzyUIUtils = factory(
  		      window,
  		      window.matchesSelector
  		    );
  		  }

  		}( window, function factory( window, matchesSelector ) {

  		var utils = {};

  		// ----- extend ----- //

  		// extends objects
  		utils.extend = function( a, b ) {
  		  for ( var prop in b ) {
  		    a[ prop ] = b[ prop ];
  		  }
  		  return a;
  		};

  		// ----- modulo ----- //

  		utils.modulo = function( num, div ) {
  		  return ( ( num % div ) + div ) % div;
  		};

  		// ----- makeArray ----- //

  		var arraySlice = Array.prototype.slice;

  		// turn element or nodeList into an array
  		utils.makeArray = function( obj ) {
  		  if ( Array.isArray( obj ) ) {
  		    // use object if already an array
  		    return obj;
  		  }
  		  // return empty array if undefined or null. #6
  		  if ( obj === null || obj === undefined ) {
  		    return [];
  		  }

  		  var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
  		  if ( isArrayLike ) {
  		    // convert nodeList to array
  		    return arraySlice.call( obj );
  		  }

  		  // array of single index
  		  return [ obj ];
  		};

  		// ----- removeFrom ----- //

  		utils.removeFrom = function( ary, obj ) {
  		  var index = ary.indexOf( obj );
  		  if ( index != -1 ) {
  		    ary.splice( index, 1 );
  		  }
  		};

  		// ----- getParent ----- //

  		utils.getParent = function( elem, selector ) {
  		  while ( elem.parentNode && elem != document.body ) {
  		    elem = elem.parentNode;
  		    if ( matchesSelector( elem, selector ) ) {
  		      return elem;
  		    }
  		  }
  		};

  		// ----- getQueryElement ----- //

  		// use element as selector string
  		utils.getQueryElement = function( elem ) {
  		  if ( typeof elem == 'string' ) {
  		    return document.querySelector( elem );
  		  }
  		  return elem;
  		};

  		// ----- handleEvent ----- //

  		// enable .ontype to trigger from .addEventListener( elem, 'type' )
  		utils.handleEvent = function( event ) {
  		  var method = 'on' + event.type;
  		  if ( this[ method ] ) {
  		    this[ method ]( event );
  		  }
  		};

  		// ----- filterFindElements ----- //

  		utils.filterFindElements = function( elems, selector ) {
  		  // make array of elems
  		  elems = utils.makeArray( elems );
  		  var ffElems = [];

  		  elems.forEach( function( elem ) {
  		    // check that elem is an actual element
  		    if ( !( elem instanceof HTMLElement ) ) {
  		      return;
  		    }
  		    // add elem if no selector
  		    if ( !selector ) {
  		      ffElems.push( elem );
  		      return;
  		    }
  		    // filter & find items if we have a selector
  		    // filter
  		    if ( matchesSelector( elem, selector ) ) {
  		      ffElems.push( elem );
  		    }
  		    // find children
  		    var childElems = elem.querySelectorAll( selector );
  		    // concat childElems to filterFound array
  		    for ( var i=0; i < childElems.length; i++ ) {
  		      ffElems.push( childElems[i] );
  		    }
  		  });

  		  return ffElems;
  		};

  		// ----- debounceMethod ----- //

  		utils.debounceMethod = function( _class, methodName, threshold ) {
  		  threshold = threshold || 100;
  		  // original method
  		  var method = _class.prototype[ methodName ];
  		  var timeoutName = methodName + 'Timeout';

  		  _class.prototype[ methodName ] = function() {
  		    var timeout = this[ timeoutName ];
  		    clearTimeout( timeout );

  		    var args = arguments;
  		    var _this = this;
  		    this[ timeoutName ] = setTimeout( function() {
  		      method.apply( _this, args );
  		      delete _this[ timeoutName ];
  		    }, threshold );
  		  };
  		};

  		// ----- docReady ----- //

  		utils.docReady = function( callback ) {
  		  var readyState = document.readyState;
  		  if ( readyState == 'complete' || readyState == 'interactive' ) {
  		    // do async to allow for other scripts to run. metafizzy/flickity#441
  		    setTimeout( callback );
  		  } else {
  		    document.addEventListener( 'DOMContentLoaded', callback );
  		  }
  		};

  		// ----- htmlInit ----- //

  		// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
  		utils.toDashed = function( str ) {
  		  return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {
  		    return $1 + '-' + $2;
  		  }).toLowerCase();
  		};

  		var console = window.console;
  		/**
  		 * allow user to initialize classes via [data-namespace] or .js-namespace class
  		 * htmlInit( Widget, 'widgetName' )
  		 * options are parsed from data-namespace-options
  		 */
  		utils.htmlInit = function( WidgetClass, namespace ) {
  		  utils.docReady( function() {
  		    var dashedNamespace = utils.toDashed( namespace );
  		    var dataAttr = 'data-' + dashedNamespace;
  		    var dataAttrElems = document.querySelectorAll( '[' + dataAttr + ']' );
  		    var jsDashElems = document.querySelectorAll( '.js-' + dashedNamespace );
  		    var elems = utils.makeArray( dataAttrElems )
  		      .concat( utils.makeArray( jsDashElems ) );
  		    var dataOptionsAttr = dataAttr + '-options';
  		    var jQuery = window.jQuery;

  		    elems.forEach( function( elem ) {
  		      var attr = elem.getAttribute( dataAttr ) ||
  		        elem.getAttribute( dataOptionsAttr );
  		      var options;
  		      try {
  		        options = attr && JSON.parse( attr );
  		      } catch ( error ) {
  		        // log error, do not initialize
  		        if ( console ) {
  		          console.error( 'Error parsing ' + dataAttr + ' on ' + elem.className +
  		          ': ' + error );
  		        }
  		        return;
  		      }
  		      // initialize
  		      var instance = new WidgetClass( elem, options );
  		      // make available via $().data('namespace')
  		      if ( jQuery ) {
  		        jQuery.data( elem, namespace, instance );
  		      }
  		    });

  		  });
  		};

  		// -----  ----- //

  		return utils;

  		})); 
  	} (utils));
  	return utils.exports;
  }

  var item = {exports: {}};

  /**
   * Outlayer Item
   */

  var hasRequiredItem;

  function requireItem () {
  	if (hasRequiredItem) return item.exports;
  	hasRequiredItem = 1;
  	(function (module) {
  		( function( window, factory ) {
  		  // universal module definition
  		  /* jshint strict: false */ /* globals define, module, require */
  		  if ( module.exports ) {
  		    // CommonJS - Browserify, Webpack
  		    module.exports = factory(
  		      requireEvEmitter(),
  		      requireGetSize()
  		    );
  		  } else {
  		    // browser global
  		    window.Outlayer = {};
  		    window.Outlayer.Item = factory(
  		      window.EvEmitter,
  		      window.getSize
  		    );
  		  }

  		}( window, function factory( EvEmitter, getSize ) {

  		// ----- helpers ----- //

  		function isEmptyObj( obj ) {
  		  for ( var prop in obj ) {
  		    return false;
  		  }
  		  prop = null;
  		  return true;
  		}

  		// -------------------------- CSS3 support -------------------------- //


  		var docElemStyle = document.documentElement.style;

  		var transitionProperty = typeof docElemStyle.transition == 'string' ?
  		  'transition' : 'WebkitTransition';
  		var transformProperty = typeof docElemStyle.transform == 'string' ?
  		  'transform' : 'WebkitTransform';

  		var transitionEndEvent = {
  		  WebkitTransition: 'webkitTransitionEnd',
  		  transition: 'transitionend'
  		}[ transitionProperty ];

  		// cache all vendor properties that could have vendor prefix
  		var vendorProperties = {
  		  transform: transformProperty,
  		  transition: transitionProperty,
  		  transitionDuration: transitionProperty + 'Duration',
  		  transitionProperty: transitionProperty + 'Property',
  		  transitionDelay: transitionProperty + 'Delay'
  		};

  		// -------------------------- Item -------------------------- //

  		function Item( element, layout ) {
  		  if ( !element ) {
  		    return;
  		  }

  		  this.element = element;
  		  // parent layout class, i.e. Masonry, Isotope, or Packery
  		  this.layout = layout;
  		  this.position = {
  		    x: 0,
  		    y: 0
  		  };

  		  this._create();
  		}

  		// inherit EvEmitter
  		var proto = Item.prototype = Object.create( EvEmitter.prototype );
  		proto.constructor = Item;

  		proto._create = function() {
  		  // transition objects
  		  this._transn = {
  		    ingProperties: {},
  		    clean: {},
  		    onEnd: {}
  		  };

  		  this.css({
  		    position: 'absolute'
  		  });
  		};

  		// trigger specified handler for event type
  		proto.handleEvent = function( event ) {
  		  var method = 'on' + event.type;
  		  if ( this[ method ] ) {
  		    this[ method ]( event );
  		  }
  		};

  		proto.getSize = function() {
  		  this.size = getSize( this.element );
  		};

  		/**
  		 * apply CSS styles to element
  		 * @param {Object} style
  		 */
  		proto.css = function( style ) {
  		  var elemStyle = this.element.style;

  		  for ( var prop in style ) {
  		    // use vendor property if available
  		    var supportedProp = vendorProperties[ prop ] || prop;
  		    elemStyle[ supportedProp ] = style[ prop ];
  		  }
  		};

  		 // measure position, and sets it
  		proto.getPosition = function() {
  		  var style = getComputedStyle( this.element );
  		  var isOriginLeft = this.layout._getOption('originLeft');
  		  var isOriginTop = this.layout._getOption('originTop');
  		  var xValue = style[ isOriginLeft ? 'left' : 'right' ];
  		  var yValue = style[ isOriginTop ? 'top' : 'bottom' ];
  		  var x = parseFloat( xValue );
  		  var y = parseFloat( yValue );
  		  // convert percent to pixels
  		  var layoutSize = this.layout.size;
  		  if ( xValue.indexOf('%') != -1 ) {
  		    x = ( x / 100 ) * layoutSize.width;
  		  }
  		  if ( yValue.indexOf('%') != -1 ) {
  		    y = ( y / 100 ) * layoutSize.height;
  		  }
  		  // clean up 'auto' or other non-integer values
  		  x = isNaN( x ) ? 0 : x;
  		  y = isNaN( y ) ? 0 : y;
  		  // remove padding from measurement
  		  x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
  		  y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;

  		  this.position.x = x;
  		  this.position.y = y;
  		};

  		// set settled position, apply padding
  		proto.layoutPosition = function() {
  		  var layoutSize = this.layout.size;
  		  var style = {};
  		  var isOriginLeft = this.layout._getOption('originLeft');
  		  var isOriginTop = this.layout._getOption('originTop');

  		  // x
  		  var xPadding = isOriginLeft ? 'paddingLeft' : 'paddingRight';
  		  var xProperty = isOriginLeft ? 'left' : 'right';
  		  var xResetProperty = isOriginLeft ? 'right' : 'left';

  		  var x = this.position.x + layoutSize[ xPadding ];
  		  // set in percentage or pixels
  		  style[ xProperty ] = this.getXValue( x );
  		  // reset other property
  		  style[ xResetProperty ] = '';

  		  // y
  		  var yPadding = isOriginTop ? 'paddingTop' : 'paddingBottom';
  		  var yProperty = isOriginTop ? 'top' : 'bottom';
  		  var yResetProperty = isOriginTop ? 'bottom' : 'top';

  		  var y = this.position.y + layoutSize[ yPadding ];
  		  // set in percentage or pixels
  		  style[ yProperty ] = this.getYValue( y );
  		  // reset other property
  		  style[ yResetProperty ] = '';

  		  this.css( style );
  		  this.emitEvent( 'layout', [ this ] );
  		};

  		proto.getXValue = function( x ) {
  		  var isHorizontal = this.layout._getOption('horizontal');
  		  return this.layout.options.percentPosition && !isHorizontal ?
  		    ( ( x / this.layout.size.width ) * 100 ) + '%' : x + 'px';
  		};

  		proto.getYValue = function( y ) {
  		  var isHorizontal = this.layout._getOption('horizontal');
  		  return this.layout.options.percentPosition && isHorizontal ?
  		    ( ( y / this.layout.size.height ) * 100 ) + '%' : y + 'px';
  		};

  		proto._transitionTo = function( x, y ) {
  		  this.getPosition();
  		  // get current x & y from top/left
  		  var curX = this.position.x;
  		  var curY = this.position.y;

  		  var didNotMove = x == this.position.x && y == this.position.y;

  		  // save end position
  		  this.setPosition( x, y );

  		  // if did not move and not transitioning, just go to layout
  		  if ( didNotMove && !this.isTransitioning ) {
  		    this.layoutPosition();
  		    return;
  		  }

  		  var transX = x - curX;
  		  var transY = y - curY;
  		  var transitionStyle = {};
  		  transitionStyle.transform = this.getTranslate( transX, transY );

  		  this.transition({
  		    to: transitionStyle,
  		    onTransitionEnd: {
  		      transform: this.layoutPosition
  		    },
  		    isCleaning: true
  		  });
  		};

  		proto.getTranslate = function( x, y ) {
  		  // flip cooridinates if origin on right or bottom
  		  var isOriginLeft = this.layout._getOption('originLeft');
  		  var isOriginTop = this.layout._getOption('originTop');
  		  x = isOriginLeft ? x : -x;
  		  y = isOriginTop ? y : -y;
  		  return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
  		};

  		// non transition + transform support
  		proto.goTo = function( x, y ) {
  		  this.setPosition( x, y );
  		  this.layoutPosition();
  		};

  		proto.moveTo = proto._transitionTo;

  		proto.setPosition = function( x, y ) {
  		  this.position.x = parseFloat( x );
  		  this.position.y = parseFloat( y );
  		};

  		// ----- transition ----- //

  		/**
  		 * @param {Object} style - CSS
  		 * @param {Function} onTransitionEnd
  		 */

  		// non transition, just trigger callback
  		proto._nonTransition = function( args ) {
  		  this.css( args.to );
  		  if ( args.isCleaning ) {
  		    this._removeStyles( args.to );
  		  }
  		  for ( var prop in args.onTransitionEnd ) {
  		    args.onTransitionEnd[ prop ].call( this );
  		  }
  		};

  		/**
  		 * proper transition
  		 * @param {Object} args - arguments
  		 *   @param {Object} to - style to transition to
  		 *   @param {Object} from - style to start transition from
  		 *   @param {Boolean} isCleaning - removes transition styles after transition
  		 *   @param {Function} onTransitionEnd - callback
  		 */
  		proto.transition = function( args ) {
  		  // redirect to nonTransition if no transition duration
  		  if ( !parseFloat( this.layout.options.transitionDuration ) ) {
  		    this._nonTransition( args );
  		    return;
  		  }

  		  var _transition = this._transn;
  		  // keep track of onTransitionEnd callback by css property
  		  for ( var prop in args.onTransitionEnd ) {
  		    _transition.onEnd[ prop ] = args.onTransitionEnd[ prop ];
  		  }
  		  // keep track of properties that are transitioning
  		  for ( prop in args.to ) {
  		    _transition.ingProperties[ prop ] = true;
  		    // keep track of properties to clean up when transition is done
  		    if ( args.isCleaning ) {
  		      _transition.clean[ prop ] = true;
  		    }
  		  }

  		  // set from styles
  		  if ( args.from ) {
  		    this.css( args.from );
  		    // force redraw. http://blog.alexmaccaw.com/css-transitions
  		    this.element.offsetHeight;
  		  }
  		  // enable transition
  		  this.enableTransition( args.to );
  		  // set styles that are transitioning
  		  this.css( args.to );

  		  this.isTransitioning = true;

  		};

  		// dash before all cap letters, including first for
  		// WebkitTransform => -webkit-transform
  		function toDashedAll( str ) {
  		  return str.replace( /([A-Z])/g, function( $1 ) {
  		    return '-' + $1.toLowerCase();
  		  });
  		}

  		var transitionProps = 'opacity,' + toDashedAll( transformProperty );

  		proto.enableTransition = function(/* style */) {
  		  // HACK changing transitionProperty during a transition
  		  // will cause transition to jump
  		  if ( this.isTransitioning ) {
  		    return;
  		  }

  		  // make `transition: foo, bar, baz` from style object
  		  // HACK un-comment this when enableTransition can work
  		  // while a transition is happening
  		  // var transitionValues = [];
  		  // for ( var prop in style ) {
  		  //   // dash-ify camelCased properties like WebkitTransition
  		  //   prop = vendorProperties[ prop ] || prop;
  		  //   transitionValues.push( toDashedAll( prop ) );
  		  // }
  		  // munge number to millisecond, to match stagger
  		  var duration = this.layout.options.transitionDuration;
  		  duration = typeof duration == 'number' ? duration + 'ms' : duration;
  		  // enable transition styles
  		  this.css({
  		    transitionProperty: transitionProps,
  		    transitionDuration: duration,
  		    transitionDelay: this.staggerDelay || 0
  		  });
  		  // listen for transition end event
  		  this.element.addEventListener( transitionEndEvent, this, false );
  		};

  		// ----- events ----- //

  		proto.onwebkitTransitionEnd = function( event ) {
  		  this.ontransitionend( event );
  		};

  		proto.onotransitionend = function( event ) {
  		  this.ontransitionend( event );
  		};

  		// properties that I munge to make my life easier
  		var dashedVendorProperties = {
  		  '-webkit-transform': 'transform'
  		};

  		proto.ontransitionend = function( event ) {
  		  // disregard bubbled events from children
  		  if ( event.target !== this.element ) {
  		    return;
  		  }
  		  var _transition = this._transn;
  		  // get property name of transitioned property, convert to prefix-free
  		  var propertyName = dashedVendorProperties[ event.propertyName ] || event.propertyName;

  		  // remove property that has completed transitioning
  		  delete _transition.ingProperties[ propertyName ];
  		  // check if any properties are still transitioning
  		  if ( isEmptyObj( _transition.ingProperties ) ) {
  		    // all properties have completed transitioning
  		    this.disableTransition();
  		  }
  		  // clean style
  		  if ( propertyName in _transition.clean ) {
  		    // clean up style
  		    this.element.style[ event.propertyName ] = '';
  		    delete _transition.clean[ propertyName ];
  		  }
  		  // trigger onTransitionEnd callback
  		  if ( propertyName in _transition.onEnd ) {
  		    var onTransitionEnd = _transition.onEnd[ propertyName ];
  		    onTransitionEnd.call( this );
  		    delete _transition.onEnd[ propertyName ];
  		  }

  		  this.emitEvent( 'transitionEnd', [ this ] );
  		};

  		proto.disableTransition = function() {
  		  this.removeTransitionStyles();
  		  this.element.removeEventListener( transitionEndEvent, this, false );
  		  this.isTransitioning = false;
  		};

  		/**
  		 * removes style property from element
  		 * @param {Object} style
  		**/
  		proto._removeStyles = function( style ) {
  		  // clean up transition styles
  		  var cleanStyle = {};
  		  for ( var prop in style ) {
  		    cleanStyle[ prop ] = '';
  		  }
  		  this.css( cleanStyle );
  		};

  		var cleanTransitionStyle = {
  		  transitionProperty: '',
  		  transitionDuration: '',
  		  transitionDelay: ''
  		};

  		proto.removeTransitionStyles = function() {
  		  // remove transition
  		  this.css( cleanTransitionStyle );
  		};

  		// ----- stagger ----- //

  		proto.stagger = function( delay ) {
  		  delay = isNaN( delay ) ? 0 : delay;
  		  this.staggerDelay = delay + 'ms';
  		};

  		// ----- show/hide/remove ----- //

  		// remove element from DOM
  		proto.removeElem = function() {
  		  this.element.parentNode.removeChild( this.element );
  		  // remove display: none
  		  this.css({ display: '' });
  		  this.emitEvent( 'remove', [ this ] );
  		};

  		proto.remove = function() {
  		  // just remove element if no transition support or no transition
  		  if ( !transitionProperty || !parseFloat( this.layout.options.transitionDuration ) ) {
  		    this.removeElem();
  		    return;
  		  }

  		  // start transition
  		  this.once( 'transitionEnd', function() {
  		    this.removeElem();
  		  });
  		  this.hide();
  		};

  		proto.reveal = function() {
  		  delete this.isHidden;
  		  // remove display: none
  		  this.css({ display: '' });

  		  var options = this.layout.options;

  		  var onTransitionEnd = {};
  		  var transitionEndProperty = this.getHideRevealTransitionEndProperty('visibleStyle');
  		  onTransitionEnd[ transitionEndProperty ] = this.onRevealTransitionEnd;

  		  this.transition({
  		    from: options.hiddenStyle,
  		    to: options.visibleStyle,
  		    isCleaning: true,
  		    onTransitionEnd: onTransitionEnd
  		  });
  		};

  		proto.onRevealTransitionEnd = function() {
  		  // check if still visible
  		  // during transition, item may have been hidden
  		  if ( !this.isHidden ) {
  		    this.emitEvent('reveal');
  		  }
  		};

  		/**
  		 * get style property use for hide/reveal transition end
  		 * @param {String} styleProperty - hiddenStyle/visibleStyle
  		 * @returns {String}
  		 */
  		proto.getHideRevealTransitionEndProperty = function( styleProperty ) {
  		  var optionStyle = this.layout.options[ styleProperty ];
  		  // use opacity
  		  if ( optionStyle.opacity ) {
  		    return 'opacity';
  		  }
  		  // get first property
  		  for ( var prop in optionStyle ) {
  		    return prop;
  		  }
  		};

  		proto.hide = function() {
  		  // set flag
  		  this.isHidden = true;
  		  // remove display: none
  		  this.css({ display: '' });

  		  var options = this.layout.options;

  		  var onTransitionEnd = {};
  		  var transitionEndProperty = this.getHideRevealTransitionEndProperty('hiddenStyle');
  		  onTransitionEnd[ transitionEndProperty ] = this.onHideTransitionEnd;

  		  this.transition({
  		    from: options.visibleStyle,
  		    to: options.hiddenStyle,
  		    // keep hidden stuff hidden
  		    isCleaning: true,
  		    onTransitionEnd: onTransitionEnd
  		  });
  		};

  		proto.onHideTransitionEnd = function() {
  		  // check if still hidden
  		  // during transition, item may have been un-hidden
  		  if ( this.isHidden ) {
  		    this.css({ display: 'none' });
  		    this.emitEvent('hide');
  		  }
  		};

  		proto.destroy = function() {
  		  this.css({
  		    position: '',
  		    left: '',
  		    right: '',
  		    top: '',
  		    bottom: '',
  		    transition: '',
  		    transform: ''
  		  });
  		};

  		return Item;

  		})); 
  	} (item));
  	return item.exports;
  }

  /*!
   * Outlayer v2.1.1
   * the brains and guts of a layout library
   * MIT license
   */

  var hasRequiredOutlayer;

  function requireOutlayer () {
  	if (hasRequiredOutlayer) return outlayer.exports;
  	hasRequiredOutlayer = 1;
  	(function (module) {
  		( function( window, factory ) {
  		  // universal module definition
  		  /* jshint strict: false */ /* globals define, module, require */
  		  if ( module.exports ) {
  		    // CommonJS - Browserify, Webpack
  		    module.exports = factory(
  		      window,
  		      requireEvEmitter(),
  		      requireGetSize(),
  		      requireUtils(),
  		      requireItem()
  		    );
  		  } else {
  		    // browser global
  		    window.Outlayer = factory(
  		      window,
  		      window.EvEmitter,
  		      window.getSize,
  		      window.fizzyUIUtils,
  		      window.Outlayer.Item
  		    );
  		  }

  		}( window, function factory( window, EvEmitter, getSize, utils, Item ) {

  		// ----- vars ----- //

  		var console = window.console;
  		var jQuery = window.jQuery;
  		var noop = function() {};

  		// -------------------------- Outlayer -------------------------- //

  		// globally unique identifiers
  		var GUID = 0;
  		// internal store of all Outlayer intances
  		var instances = {};


  		/**
  		 * @param {Element, String} element
  		 * @param {Object} options
  		 * @constructor
  		 */
  		function Outlayer( element, options ) {
  		  var queryElement = utils.getQueryElement( element );
  		  if ( !queryElement ) {
  		    if ( console ) {
  		      console.error( 'Bad element for ' + this.constructor.namespace +
  		        ': ' + ( queryElement || element ) );
  		    }
  		    return;
  		  }
  		  this.element = queryElement;
  		  // add jQuery
  		  if ( jQuery ) {
  		    this.$element = jQuery( this.element );
  		  }

  		  // options
  		  this.options = utils.extend( {}, this.constructor.defaults );
  		  this.option( options );

  		  // add id for Outlayer.getFromElement
  		  var id = ++GUID;
  		  this.element.outlayerGUID = id; // expando
  		  instances[ id ] = this; // associate via id

  		  // kick it off
  		  this._create();

  		  var isInitLayout = this._getOption('initLayout');
  		  if ( isInitLayout ) {
  		    this.layout();
  		  }
  		}

  		// settings are for internal use only
  		Outlayer.namespace = 'outlayer';
  		Outlayer.Item = Item;

  		// default options
  		Outlayer.defaults = {
  		  containerStyle: {
  		    position: 'relative'
  		  },
  		  initLayout: true,
  		  originLeft: true,
  		  originTop: true,
  		  resize: true,
  		  resizeContainer: true,
  		  // item options
  		  transitionDuration: '0.4s',
  		  hiddenStyle: {
  		    opacity: 0,
  		    transform: 'scale(0.001)'
  		  },
  		  visibleStyle: {
  		    opacity: 1,
  		    transform: 'scale(1)'
  		  }
  		};

  		var proto = Outlayer.prototype;
  		// inherit EvEmitter
  		utils.extend( proto, EvEmitter.prototype );

  		/**
  		 * set options
  		 * @param {Object} opts
  		 */
  		proto.option = function( opts ) {
  		  utils.extend( this.options, opts );
  		};

  		/**
  		 * get backwards compatible option value, check old name
  		 */
  		proto._getOption = function( option ) {
  		  var oldOption = this.constructor.compatOptions[ option ];
  		  return oldOption && this.options[ oldOption ] !== undefined ?
  		    this.options[ oldOption ] : this.options[ option ];
  		};

  		Outlayer.compatOptions = {
  		  // currentName: oldName
  		  initLayout: 'isInitLayout',
  		  horizontal: 'isHorizontal',
  		  layoutInstant: 'isLayoutInstant',
  		  originLeft: 'isOriginLeft',
  		  originTop: 'isOriginTop',
  		  resize: 'isResizeBound',
  		  resizeContainer: 'isResizingContainer'
  		};

  		proto._create = function() {
  		  // get items from children
  		  this.reloadItems();
  		  // elements that affect layout, but are not laid out
  		  this.stamps = [];
  		  this.stamp( this.options.stamp );
  		  // set container style
  		  utils.extend( this.element.style, this.options.containerStyle );

  		  // bind resize method
  		  var canBindResize = this._getOption('resize');
  		  if ( canBindResize ) {
  		    this.bindResize();
  		  }
  		};

  		// goes through all children again and gets bricks in proper order
  		proto.reloadItems = function() {
  		  // collection of item elements
  		  this.items = this._itemize( this.element.children );
  		};


  		/**
  		 * turn elements into Outlayer.Items to be used in layout
  		 * @param {Array or NodeList or HTMLElement} elems
  		 * @returns {Array} items - collection of new Outlayer Items
  		 */
  		proto._itemize = function( elems ) {

  		  var itemElems = this._filterFindItemElements( elems );
  		  var Item = this.constructor.Item;

  		  // create new Outlayer Items for collection
  		  var items = [];
  		  for ( var i=0; i < itemElems.length; i++ ) {
  		    var elem = itemElems[i];
  		    var item = new Item( elem, this );
  		    items.push( item );
  		  }

  		  return items;
  		};

  		/**
  		 * get item elements to be used in layout
  		 * @param {Array or NodeList or HTMLElement} elems
  		 * @returns {Array} items - item elements
  		 */
  		proto._filterFindItemElements = function( elems ) {
  		  return utils.filterFindElements( elems, this.options.itemSelector );
  		};

  		/**
  		 * getter method for getting item elements
  		 * @returns {Array} elems - collection of item elements
  		 */
  		proto.getItemElements = function() {
  		  return this.items.map( function( item ) {
  		    return item.element;
  		  });
  		};

  		// ----- init & layout ----- //

  		/**
  		 * lays out all items
  		 */
  		proto.layout = function() {
  		  this._resetLayout();
  		  this._manageStamps();

  		  // don't animate first layout
  		  var layoutInstant = this._getOption('layoutInstant');
  		  var isInstant = layoutInstant !== undefined ?
  		    layoutInstant : !this._isLayoutInited;
  		  this.layoutItems( this.items, isInstant );

  		  // flag for initalized
  		  this._isLayoutInited = true;
  		};

  		// _init is alias for layout
  		proto._init = proto.layout;

  		/**
  		 * logic before any new layout
  		 */
  		proto._resetLayout = function() {
  		  this.getSize();
  		};


  		proto.getSize = function() {
  		  this.size = getSize( this.element );
  		};

  		/**
  		 * get measurement from option, for columnWidth, rowHeight, gutter
  		 * if option is String -> get element from selector string, & get size of element
  		 * if option is Element -> get size of element
  		 * else use option as a number
  		 *
  		 * @param {String} measurement
  		 * @param {String} size - width or height
  		 * @private
  		 */
  		proto._getMeasurement = function( measurement, size ) {
  		  var option = this.options[ measurement ];
  		  var elem;
  		  if ( !option ) {
  		    // default to 0
  		    this[ measurement ] = 0;
  		  } else {
  		    // use option as an element
  		    if ( typeof option == 'string' ) {
  		      elem = this.element.querySelector( option );
  		    } else if ( option instanceof HTMLElement ) {
  		      elem = option;
  		    }
  		    // use size of element, if element
  		    this[ measurement ] = elem ? getSize( elem )[ size ] : option;
  		  }
  		};

  		/**
  		 * layout a collection of item elements
  		 * @api public
  		 */
  		proto.layoutItems = function( items, isInstant ) {
  		  items = this._getItemsForLayout( items );

  		  this._layoutItems( items, isInstant );

  		  this._postLayout();
  		};

  		/**
  		 * get the items to be laid out
  		 * you may want to skip over some items
  		 * @param {Array} items
  		 * @returns {Array} items
  		 */
  		proto._getItemsForLayout = function( items ) {
  		  return items.filter( function( item ) {
  		    return !item.isIgnored;
  		  });
  		};

  		/**
  		 * layout items
  		 * @param {Array} items
  		 * @param {Boolean} isInstant
  		 */
  		proto._layoutItems = function( items, isInstant ) {
  		  this._emitCompleteOnItems( 'layout', items );

  		  if ( !items || !items.length ) {
  		    // no items, emit event with empty array
  		    return;
  		  }

  		  var queue = [];

  		  items.forEach( function( item ) {
  		    // get x/y object from method
  		    var position = this._getItemLayoutPosition( item );
  		    // enqueue
  		    position.item = item;
  		    position.isInstant = isInstant || item.isLayoutInstant;
  		    queue.push( position );
  		  }, this );

  		  this._processLayoutQueue( queue );
  		};

  		/**
  		 * get item layout position
  		 * @param {Outlayer.Item} item
  		 * @returns {Object} x and y position
  		 */
  		proto._getItemLayoutPosition = function( /* item */ ) {
  		  return {
  		    x: 0,
  		    y: 0
  		  };
  		};

  		/**
  		 * iterate over array and position each item
  		 * Reason being - separating this logic prevents 'layout invalidation'
  		 * thx @paul_irish
  		 * @param {Array} queue
  		 */
  		proto._processLayoutQueue = function( queue ) {
  		  this.updateStagger();
  		  queue.forEach( function( obj, i ) {
  		    this._positionItem( obj.item, obj.x, obj.y, obj.isInstant, i );
  		  }, this );
  		};

  		// set stagger from option in milliseconds number
  		proto.updateStagger = function() {
  		  var stagger = this.options.stagger;
  		  if ( stagger === null || stagger === undefined ) {
  		    this.stagger = 0;
  		    return;
  		  }
  		  this.stagger = getMilliseconds( stagger );
  		  return this.stagger;
  		};

  		/**
  		 * Sets position of item in DOM
  		 * @param {Outlayer.Item} item
  		 * @param {Number} x - horizontal position
  		 * @param {Number} y - vertical position
  		 * @param {Boolean} isInstant - disables transitions
  		 */
  		proto._positionItem = function( item, x, y, isInstant, i ) {
  		  if ( isInstant ) {
  		    // if not transition, just set CSS
  		    item.goTo( x, y );
  		  } else {
  		    item.stagger( i * this.stagger );
  		    item.moveTo( x, y );
  		  }
  		};

  		/**
  		 * Any logic you want to do after each layout,
  		 * i.e. size the container
  		 */
  		proto._postLayout = function() {
  		  this.resizeContainer();
  		};

  		proto.resizeContainer = function() {
  		  var isResizingContainer = this._getOption('resizeContainer');
  		  if ( !isResizingContainer ) {
  		    return;
  		  }
  		  var size = this._getContainerSize();
  		  if ( size ) {
  		    this._setContainerMeasure( size.width, true );
  		    this._setContainerMeasure( size.height, false );
  		  }
  		};

  		/**
  		 * Sets width or height of container if returned
  		 * @returns {Object} size
  		 *   @param {Number} width
  		 *   @param {Number} height
  		 */
  		proto._getContainerSize = noop;

  		/**
  		 * @param {Number} measure - size of width or height
  		 * @param {Boolean} isWidth
  		 */
  		proto._setContainerMeasure = function( measure, isWidth ) {
  		  if ( measure === undefined ) {
  		    return;
  		  }

  		  var elemSize = this.size;
  		  // add padding and border width if border box
  		  if ( elemSize.isBorderBox ) {
  		    measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight +
  		      elemSize.borderLeftWidth + elemSize.borderRightWidth :
  		      elemSize.paddingBottom + elemSize.paddingTop +
  		      elemSize.borderTopWidth + elemSize.borderBottomWidth;
  		  }

  		  measure = Math.max( measure, 0 );
  		  this.element.style[ isWidth ? 'width' : 'height' ] = measure + 'px';
  		};

  		/**
  		 * emit eventComplete on a collection of items events
  		 * @param {String} eventName
  		 * @param {Array} items - Outlayer.Items
  		 */
  		proto._emitCompleteOnItems = function( eventName, items ) {
  		  var _this = this;
  		  function onComplete() {
  		    _this.dispatchEvent( eventName + 'Complete', null, [ items ] );
  		  }

  		  var count = items.length;
  		  if ( !items || !count ) {
  		    onComplete();
  		    return;
  		  }

  		  var doneCount = 0;
  		  function tick() {
  		    doneCount++;
  		    if ( doneCount == count ) {
  		      onComplete();
  		    }
  		  }

  		  // bind callback
  		  items.forEach( function( item ) {
  		    item.once( eventName, tick );
  		  });
  		};

  		/**
  		 * emits events via EvEmitter and jQuery events
  		 * @param {String} type - name of event
  		 * @param {Event} event - original event
  		 * @param {Array} args - extra arguments
  		 */
  		proto.dispatchEvent = function( type, event, args ) {
  		  // add original event to arguments
  		  var emitArgs = event ? [ event ].concat( args ) : args;
  		  this.emitEvent( type, emitArgs );

  		  if ( jQuery ) {
  		    // set this.$element
  		    this.$element = this.$element || jQuery( this.element );
  		    if ( event ) {
  		      // create jQuery event
  		      var $event = jQuery.Event( event );
  		      $event.type = type;
  		      this.$element.trigger( $event, args );
  		    } else {
  		      // just trigger with type if no event available
  		      this.$element.trigger( type, args );
  		    }
  		  }
  		};

  		// -------------------------- ignore & stamps -------------------------- //


  		/**
  		 * keep item in collection, but do not lay it out
  		 * ignored items do not get skipped in layout
  		 * @param {Element} elem
  		 */
  		proto.ignore = function( elem ) {
  		  var item = this.getItem( elem );
  		  if ( item ) {
  		    item.isIgnored = true;
  		  }
  		};

  		/**
  		 * return item to layout collection
  		 * @param {Element} elem
  		 */
  		proto.unignore = function( elem ) {
  		  var item = this.getItem( elem );
  		  if ( item ) {
  		    delete item.isIgnored;
  		  }
  		};

  		/**
  		 * adds elements to stamps
  		 * @param {NodeList, Array, Element, or String} elems
  		 */
  		proto.stamp = function( elems ) {
  		  elems = this._find( elems );
  		  if ( !elems ) {
  		    return;
  		  }

  		  this.stamps = this.stamps.concat( elems );
  		  // ignore
  		  elems.forEach( this.ignore, this );
  		};

  		/**
  		 * removes elements to stamps
  		 * @param {NodeList, Array, or Element} elems
  		 */
  		proto.unstamp = function( elems ) {
  		  elems = this._find( elems );
  		  if ( !elems ){
  		    return;
  		  }

  		  elems.forEach( function( elem ) {
  		    // filter out removed stamp elements
  		    utils.removeFrom( this.stamps, elem );
  		    this.unignore( elem );
  		  }, this );
  		};

  		/**
  		 * finds child elements
  		 * @param {NodeList, Array, Element, or String} elems
  		 * @returns {Array} elems
  		 */
  		proto._find = function( elems ) {
  		  if ( !elems ) {
  		    return;
  		  }
  		  // if string, use argument as selector string
  		  if ( typeof elems == 'string' ) {
  		    elems = this.element.querySelectorAll( elems );
  		  }
  		  elems = utils.makeArray( elems );
  		  return elems;
  		};

  		proto._manageStamps = function() {
  		  if ( !this.stamps || !this.stamps.length ) {
  		    return;
  		  }

  		  this._getBoundingRect();

  		  this.stamps.forEach( this._manageStamp, this );
  		};

  		// update boundingLeft / Top
  		proto._getBoundingRect = function() {
  		  // get bounding rect for container element
  		  var boundingRect = this.element.getBoundingClientRect();
  		  var size = this.size;
  		  this._boundingRect = {
  		    left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
  		    top: boundingRect.top + size.paddingTop + size.borderTopWidth,
  		    right: boundingRect.right - ( size.paddingRight + size.borderRightWidth ),
  		    bottom: boundingRect.bottom - ( size.paddingBottom + size.borderBottomWidth )
  		  };
  		};

  		/**
  		 * @param {Element} stamp
  		**/
  		proto._manageStamp = noop;

  		/**
  		 * get x/y position of element relative to container element
  		 * @param {Element} elem
  		 * @returns {Object} offset - has left, top, right, bottom
  		 */
  		proto._getElementOffset = function( elem ) {
  		  var boundingRect = elem.getBoundingClientRect();
  		  var thisRect = this._boundingRect;
  		  var size = getSize( elem );
  		  var offset = {
  		    left: boundingRect.left - thisRect.left - size.marginLeft,
  		    top: boundingRect.top - thisRect.top - size.marginTop,
  		    right: thisRect.right - boundingRect.right - size.marginRight,
  		    bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
  		  };
  		  return offset;
  		};

  		// -------------------------- resize -------------------------- //

  		// enable event handlers for listeners
  		// i.e. resize -> onresize
  		proto.handleEvent = utils.handleEvent;

  		/**
  		 * Bind layout to window resizing
  		 */
  		proto.bindResize = function() {
  		  window.addEventListener( 'resize', this );
  		  this.isResizeBound = true;
  		};

  		/**
  		 * Unbind layout to window resizing
  		 */
  		proto.unbindResize = function() {
  		  window.removeEventListener( 'resize', this );
  		  this.isResizeBound = false;
  		};

  		proto.onresize = function() {
  		  this.resize();
  		};

  		utils.debounceMethod( Outlayer, 'onresize', 100 );

  		proto.resize = function() {
  		  // don't trigger if size did not change
  		  // or if resize was unbound. See #9
  		  if ( !this.isResizeBound || !this.needsResizeLayout() ) {
  		    return;
  		  }

  		  this.layout();
  		};

  		/**
  		 * check if layout is needed post layout
  		 * @returns Boolean
  		 */
  		proto.needsResizeLayout = function() {
  		  var size = getSize( this.element );
  		  // check that this.size and size are there
  		  // IE8 triggers resize on body size change, so they might not be
  		  var hasSizes = this.size && size;
  		  return hasSizes && size.innerWidth !== this.size.innerWidth;
  		};

  		// -------------------------- methods -------------------------- //

  		/**
  		 * add items to Outlayer instance
  		 * @param {Array or NodeList or Element} elems
  		 * @returns {Array} items - Outlayer.Items
  		**/
  		proto.addItems = function( elems ) {
  		  var items = this._itemize( elems );
  		  // add items to collection
  		  if ( items.length ) {
  		    this.items = this.items.concat( items );
  		  }
  		  return items;
  		};

  		/**
  		 * Layout newly-appended item elements
  		 * @param {Array or NodeList or Element} elems
  		 */
  		proto.appended = function( elems ) {
  		  var items = this.addItems( elems );
  		  if ( !items.length ) {
  		    return;
  		  }
  		  // layout and reveal just the new items
  		  this.layoutItems( items, true );
  		  this.reveal( items );
  		};

  		/**
  		 * Layout prepended elements
  		 * @param {Array or NodeList or Element} elems
  		 */
  		proto.prepended = function( elems ) {
  		  var items = this._itemize( elems );
  		  if ( !items.length ) {
  		    return;
  		  }
  		  // add items to beginning of collection
  		  var previousItems = this.items.slice(0);
  		  this.items = items.concat( previousItems );
  		  // start new layout
  		  this._resetLayout();
  		  this._manageStamps();
  		  // layout new stuff without transition
  		  this.layoutItems( items, true );
  		  this.reveal( items );
  		  // layout previous items
  		  this.layoutItems( previousItems );
  		};

  		/**
  		 * reveal a collection of items
  		 * @param {Array of Outlayer.Items} items
  		 */
  		proto.reveal = function( items ) {
  		  this._emitCompleteOnItems( 'reveal', items );
  		  if ( !items || !items.length ) {
  		    return;
  		  }
  		  var stagger = this.updateStagger();
  		  items.forEach( function( item, i ) {
  		    item.stagger( i * stagger );
  		    item.reveal();
  		  });
  		};

  		/**
  		 * hide a collection of items
  		 * @param {Array of Outlayer.Items} items
  		 */
  		proto.hide = function( items ) {
  		  this._emitCompleteOnItems( 'hide', items );
  		  if ( !items || !items.length ) {
  		    return;
  		  }
  		  var stagger = this.updateStagger();
  		  items.forEach( function( item, i ) {
  		    item.stagger( i * stagger );
  		    item.hide();
  		  });
  		};

  		/**
  		 * reveal item elements
  		 * @param {Array}, {Element}, {NodeList} items
  		 */
  		proto.revealItemElements = function( elems ) {
  		  var items = this.getItems( elems );
  		  this.reveal( items );
  		};

  		/**
  		 * hide item elements
  		 * @param {Array}, {Element}, {NodeList} items
  		 */
  		proto.hideItemElements = function( elems ) {
  		  var items = this.getItems( elems );
  		  this.hide( items );
  		};

  		/**
  		 * get Outlayer.Item, given an Element
  		 * @param {Element} elem
  		 * @param {Function} callback
  		 * @returns {Outlayer.Item} item
  		 */
  		proto.getItem = function( elem ) {
  		  // loop through items to get the one that matches
  		  for ( var i=0; i < this.items.length; i++ ) {
  		    var item = this.items[i];
  		    if ( item.element == elem ) {
  		      // return item
  		      return item;
  		    }
  		  }
  		};

  		/**
  		 * get collection of Outlayer.Items, given Elements
  		 * @param {Array} elems
  		 * @returns {Array} items - Outlayer.Items
  		 */
  		proto.getItems = function( elems ) {
  		  elems = utils.makeArray( elems );
  		  var items = [];
  		  elems.forEach( function( elem ) {
  		    var item = this.getItem( elem );
  		    if ( item ) {
  		      items.push( item );
  		    }
  		  }, this );

  		  return items;
  		};

  		/**
  		 * remove element(s) from instance and DOM
  		 * @param {Array or NodeList or Element} elems
  		 */
  		proto.remove = function( elems ) {
  		  var removeItems = this.getItems( elems );

  		  this._emitCompleteOnItems( 'remove', removeItems );

  		  // bail if no items to remove
  		  if ( !removeItems || !removeItems.length ) {
  		    return;
  		  }

  		  removeItems.forEach( function( item ) {
  		    item.remove();
  		    // remove item from collection
  		    utils.removeFrom( this.items, item );
  		  }, this );
  		};

  		// ----- destroy ----- //

  		// remove and disable Outlayer instance
  		proto.destroy = function() {
  		  // clean up dynamic styles
  		  var style = this.element.style;
  		  style.height = '';
  		  style.position = '';
  		  style.width = '';
  		  // destroy items
  		  this.items.forEach( function( item ) {
  		    item.destroy();
  		  });

  		  this.unbindResize();

  		  var id = this.element.outlayerGUID;
  		  delete instances[ id ]; // remove reference to instance by id
  		  delete this.element.outlayerGUID;
  		  // remove data for jQuery
  		  if ( jQuery ) {
  		    jQuery.removeData( this.element, this.constructor.namespace );
  		  }

  		};

  		// -------------------------- data -------------------------- //

  		/**
  		 * get Outlayer instance from element
  		 * @param {Element} elem
  		 * @returns {Outlayer}
  		 */
  		Outlayer.data = function( elem ) {
  		  elem = utils.getQueryElement( elem );
  		  var id = elem && elem.outlayerGUID;
  		  return id && instances[ id ];
  		};


  		// -------------------------- create Outlayer class -------------------------- //

  		/**
  		 * create a layout class
  		 * @param {String} namespace
  		 */
  		Outlayer.create = function( namespace, options ) {
  		  // sub-class Outlayer
  		  var Layout = subclass( Outlayer );
  		  // apply new options and compatOptions
  		  Layout.defaults = utils.extend( {}, Outlayer.defaults );
  		  utils.extend( Layout.defaults, options );
  		  Layout.compatOptions = utils.extend( {}, Outlayer.compatOptions  );

  		  Layout.namespace = namespace;

  		  Layout.data = Outlayer.data;

  		  // sub-class Item
  		  Layout.Item = subclass( Item );

  		  // -------------------------- declarative -------------------------- //

  		  utils.htmlInit( Layout, namespace );

  		  // -------------------------- jQuery bridge -------------------------- //

  		  // make into jQuery plugin
  		  if ( jQuery && jQuery.bridget ) {
  		    jQuery.bridget( namespace, Layout );
  		  }

  		  return Layout;
  		};

  		function subclass( Parent ) {
  		  function SubClass() {
  		    Parent.apply( this, arguments );
  		  }

  		  SubClass.prototype = Object.create( Parent.prototype );
  		  SubClass.prototype.constructor = SubClass;

  		  return SubClass;
  		}

  		// ----- helpers ----- //

  		// how many milliseconds are in each unit
  		var msUnits = {
  		  ms: 1,
  		  s: 1000
  		};

  		// munge time-like parameter into millisecond number
  		// '0.4s' -> 40
  		function getMilliseconds( time ) {
  		  if ( typeof time == 'number' ) {
  		    return time;
  		  }
  		  var matches = time.match( /(^\d*\.?\d*)(\w*)/ );
  		  var num = matches && matches[1];
  		  var unit = matches && matches[2];
  		  if ( !num.length ) {
  		    return 0;
  		  }
  		  num = parseFloat( num );
  		  var mult = msUnits[ unit ] || 1;
  		  return num * mult;
  		}

  		// ----- fin ----- //

  		// back in global
  		Outlayer.Item = Item;

  		return Outlayer;

  		})); 
  	} (outlayer));
  	return outlayer.exports;
  }

  /*!
   * Masonry v4.2.2
   * Cascading grid layout library
   * https://masonry.desandro.com
   * MIT License
   * by David DeSandro
   */

  (function (module) {
  	( function( window, factory ) {
  	  // universal module definition
  	  /* jshint strict: false */ /*globals define, module, require */
  	  if ( module.exports ) {
  	    // CommonJS
  	    module.exports = factory(
  	      requireOutlayer(),
  	      requireGetSize()
  	    );
  	  } else {
  	    // browser global
  	    window.Masonry = factory(
  	      window.Outlayer,
  	      window.getSize
  	    );
  	  }

  	}( window, function factory( Outlayer, getSize ) {

  	// -------------------------- masonryDefinition -------------------------- //

  	  // create an Outlayer layout class
  	  var Masonry = Outlayer.create('masonry');
  	  // isFitWidth -> fitWidth
  	  Masonry.compatOptions.fitWidth = 'isFitWidth';

  	  var proto = Masonry.prototype;

  	  proto._resetLayout = function() {
  	    this.getSize();
  	    this._getMeasurement( 'columnWidth', 'outerWidth' );
  	    this._getMeasurement( 'gutter', 'outerWidth' );
  	    this.measureColumns();

  	    // reset column Y
  	    this.colYs = [];
  	    for ( var i=0; i < this.cols; i++ ) {
  	      this.colYs.push( 0 );
  	    }

  	    this.maxY = 0;
  	    this.horizontalColIndex = 0;
  	  };

  	  proto.measureColumns = function() {
  	    this.getContainerWidth();
  	    // if columnWidth is 0, default to outerWidth of first item
  	    if ( !this.columnWidth ) {
  	      var firstItem = this.items[0];
  	      var firstItemElem = firstItem && firstItem.element;
  	      // columnWidth fall back to item of first element
  	      this.columnWidth = firstItemElem && getSize( firstItemElem ).outerWidth ||
  	        // if first elem has no width, default to size of container
  	        this.containerWidth;
  	    }

  	    var columnWidth = this.columnWidth += this.gutter;

  	    // calculate columns
  	    var containerWidth = this.containerWidth + this.gutter;
  	    var cols = containerWidth / columnWidth;
  	    // fix rounding errors, typically with gutters
  	    var excess = columnWidth - containerWidth % columnWidth;
  	    // if overshoot is less than a pixel, round up, otherwise floor it
  	    var mathMethod = excess && excess < 1 ? 'round' : 'floor';
  	    cols = Math[ mathMethod ]( cols );
  	    this.cols = Math.max( cols, 1 );
  	  };

  	  proto.getContainerWidth = function() {
  	    // container is parent if fit width
  	    var isFitWidth = this._getOption('fitWidth');
  	    var container = isFitWidth ? this.element.parentNode : this.element;
  	    // check that this.size and size are there
  	    // IE8 triggers resize on body size change, so they might not be
  	    var size = getSize( container );
  	    this.containerWidth = size && size.innerWidth;
  	  };

  	  proto._getItemLayoutPosition = function( item ) {
  	    item.getSize();
  	    // how many columns does this brick span
  	    var remainder = item.size.outerWidth % this.columnWidth;
  	    var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
  	    // round if off by 1 pixel, otherwise use ceil
  	    var colSpan = Math[ mathMethod ]( item.size.outerWidth / this.columnWidth );
  	    colSpan = Math.min( colSpan, this.cols );
  	    // use horizontal or top column position
  	    var colPosMethod = this.options.horizontalOrder ?
  	      '_getHorizontalColPosition' : '_getTopColPosition';
  	    var colPosition = this[ colPosMethod ]( colSpan, item );
  	    // position the brick
  	    var position = {
  	      x: this.columnWidth * colPosition.col,
  	      y: colPosition.y
  	    };
  	    // apply setHeight to necessary columns
  	    var setHeight = colPosition.y + item.size.outerHeight;
  	    var setMax = colSpan + colPosition.col;
  	    for ( var i = colPosition.col; i < setMax; i++ ) {
  	      this.colYs[i] = setHeight;
  	    }

  	    return position;
  	  };

  	  proto._getTopColPosition = function( colSpan ) {
  	    var colGroup = this._getTopColGroup( colSpan );
  	    // get the minimum Y value from the columns
  	    var minimumY = Math.min.apply( Math, colGroup );

  	    return {
  	      col: colGroup.indexOf( minimumY ),
  	      y: minimumY,
  	    };
  	  };

  	  /**
  	   * @param {Number} colSpan - number of columns the element spans
  	   * @returns {Array} colGroup
  	   */
  	  proto._getTopColGroup = function( colSpan ) {
  	    if ( colSpan < 2 ) {
  	      // if brick spans only one column, use all the column Ys
  	      return this.colYs;
  	    }

  	    var colGroup = [];
  	    // how many different places could this brick fit horizontally
  	    var groupCount = this.cols + 1 - colSpan;
  	    // for each group potential horizontal position
  	    for ( var i = 0; i < groupCount; i++ ) {
  	      colGroup[i] = this._getColGroupY( i, colSpan );
  	    }
  	    return colGroup;
  	  };

  	  proto._getColGroupY = function( col, colSpan ) {
  	    if ( colSpan < 2 ) {
  	      return this.colYs[ col ];
  	    }
  	    // make an array of colY values for that one group
  	    var groupColYs = this.colYs.slice( col, col + colSpan );
  	    // and get the max value of the array
  	    return Math.max.apply( Math, groupColYs );
  	  };

  	  // get column position based on horizontal index. #873
  	  proto._getHorizontalColPosition = function( colSpan, item ) {
  	    var col = this.horizontalColIndex % this.cols;
  	    var isOver = colSpan > 1 && col + colSpan > this.cols;
  	    // shift to next row if item can't fit on current row
  	    col = isOver ? 0 : col;
  	    // don't let zero-size items take up space
  	    var hasSize = item.size.outerWidth && item.size.outerHeight;
  	    this.horizontalColIndex = hasSize ? col + colSpan : this.horizontalColIndex;

  	    return {
  	      col: col,
  	      y: this._getColGroupY( col, colSpan ),
  	    };
  	  };

  	  proto._manageStamp = function( stamp ) {
  	    var stampSize = getSize( stamp );
  	    var offset = this._getElementOffset( stamp );
  	    // get the columns that this stamp affects
  	    var isOriginLeft = this._getOption('originLeft');
  	    var firstX = isOriginLeft ? offset.left : offset.right;
  	    var lastX = firstX + stampSize.outerWidth;
  	    var firstCol = Math.floor( firstX / this.columnWidth );
  	    firstCol = Math.max( 0, firstCol );
  	    var lastCol = Math.floor( lastX / this.columnWidth );
  	    // lastCol should not go over if multiple of columnWidth #425
  	    lastCol -= lastX % this.columnWidth ? 0 : 1;
  	    lastCol = Math.min( this.cols - 1, lastCol );
  	    // set colYs to bottom of the stamp

  	    var isOriginTop = this._getOption('originTop');
  	    var stampMaxY = ( isOriginTop ? offset.top : offset.bottom ) +
  	      stampSize.outerHeight;
  	    for ( var i = firstCol; i <= lastCol; i++ ) {
  	      this.colYs[i] = Math.max( stampMaxY, this.colYs[i] );
  	    }
  	  };

  	  proto._getContainerSize = function() {
  	    this.maxY = Math.max.apply( Math, this.colYs );
  	    var size = {
  	      height: this.maxY
  	    };

  	    if ( this._getOption('fitWidth') ) {
  	      size.width = this._getContainerFitWidth();
  	    }

  	    return size;
  	  };

  	  proto._getContainerFitWidth = function() {
  	    var unusedCols = 0;
  	    // count unused columns
  	    var i = this.cols;
  	    while ( --i ) {
  	      if ( this.colYs[i] !== 0 ) {
  	        break;
  	      }
  	      unusedCols++;
  	    }
  	    // fit container to columns that have been used
  	    return ( this.cols - unusedCols ) * this.columnWidth - this.gutter;
  	  };

  	  proto.needsResizeLayout = function() {
  	    var previousWidth = this.containerWidth;
  	    this.getContainerWidth();
  	    return previousWidth != this.containerWidth;
  	  };

  	  return Masonry;

  	})); 
  } (masonry));

  var masonryExports = masonry.exports;
  var Masonry = /*@__PURE__*/getDefaultExportFromCjs(masonryExports);

  var call$b = functionCall;
  var anObject$b = anObject$e;
  var getMethod$3 = getMethod$5;

  var iteratorClose$2 = function (iterator, kind, value) {
    var innerResult, innerError;
    anObject$b(iterator);
    try {
      innerResult = getMethod$3(iterator, 'return');
      if (!innerResult) {
        if (kind === 'throw') throw value;
        return value;
      }
      innerResult = call$b(innerResult, iterator);
    } catch (error) {
      innerError = true;
      innerResult = error;
    }
    if (kind === 'throw') throw value;
    if (innerError) throw innerResult;
    anObject$b(innerResult);
    return value;
  };

  var anObject$a = anObject$e;
  var iteratorClose$1 = iteratorClose$2;

  // call something on iterator step with safe closing on error
  var callWithSafeIterationClosing$1 = function (iterator, fn, value, ENTRIES) {
    try {
      return ENTRIES ? fn(anObject$a(value)[0], value[1]) : fn(value);
    } catch (error) {
      iteratorClose$1(iterator, 'throw', error);
    }
  };

  var iterators = {};

  var wellKnownSymbol$d = wellKnownSymbol$k;
  var Iterators$4 = iterators;

  var ITERATOR$5 = wellKnownSymbol$d('iterator');
  var ArrayPrototype$1 = Array.prototype;

  // check on default Array iterator
  var isArrayIteratorMethod$2 = function (it) {
    return it !== undefined && (Iterators$4.Array === it || ArrayPrototype$1[ITERATOR$5] === it);
  };

  var classof$5 = classof$a;
  var getMethod$2 = getMethod$5;
  var isNullOrUndefined$4 = isNullOrUndefined$7;
  var Iterators$3 = iterators;
  var wellKnownSymbol$c = wellKnownSymbol$k;

  var ITERATOR$4 = wellKnownSymbol$c('iterator');

  var getIteratorMethod$3 = function (it) {
    if (!isNullOrUndefined$4(it)) return getMethod$2(it, ITERATOR$4)
      || getMethod$2(it, '@@iterator')
      || Iterators$3[classof$5(it)];
  };

  var call$a = functionCall;
  var aCallable$1 = aCallable$4;
  var anObject$9 = anObject$e;
  var tryToString$1 = tryToString$3;
  var getIteratorMethod$2 = getIteratorMethod$3;

  var $TypeError$6 = TypeError;

  var getIterator$2 = function (argument, usingIterator) {
    var iteratorMethod = arguments.length < 2 ? getIteratorMethod$2(argument) : usingIterator;
    if (aCallable$1(iteratorMethod)) return anObject$9(call$a(iteratorMethod, argument));
    throw $TypeError$6(tryToString$1(argument) + ' is not iterable');
  };

  var bind$2 = functionBindContext;
  var call$9 = functionCall;
  var toObject$5 = toObject$8;
  var callWithSafeIterationClosing = callWithSafeIterationClosing$1;
  var isArrayIteratorMethod$1 = isArrayIteratorMethod$2;
  var isConstructor = isConstructor$3;
  var lengthOfArrayLike$3 = lengthOfArrayLike$7;
  var createProperty$2 = createProperty$4;
  var getIterator$1 = getIterator$2;
  var getIteratorMethod$1 = getIteratorMethod$3;

  var $Array$1 = Array;

  // `Array.from` method implementation
  // https://tc39.es/ecma262/#sec-array.from
  var arrayFrom = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject$5(arrayLike);
    var IS_CONSTRUCTOR = isConstructor(this);
    var argumentsLength = arguments.length;
    var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    if (mapping) mapfn = bind$2(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
    var iteratorMethod = getIteratorMethod$1(O);
    var index = 0;
    var length, result, step, iterator, next, value;
    // if the target is not iterable or it's an array with the default iterator - use a simple case
    if (iteratorMethod && !(this === $Array$1 && isArrayIteratorMethod$1(iteratorMethod))) {
      iterator = getIterator$1(O, iteratorMethod);
      next = iterator.next;
      result = IS_CONSTRUCTOR ? new this() : [];
      for (;!(step = call$9(next, iterator)).done; index++) {
        value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
        createProperty$2(result, index, value);
      }
    } else {
      length = lengthOfArrayLike$3(O);
      result = IS_CONSTRUCTOR ? new this(length) : $Array$1(length);
      for (;length > index; index++) {
        value = mapping ? mapfn(O[index], index) : O[index];
        createProperty$2(result, index, value);
      }
    }
    result.length = index;
    return result;
  };

  var wellKnownSymbol$b = wellKnownSymbol$k;

  var ITERATOR$3 = wellKnownSymbol$b('iterator');
  var SAFE_CLOSING = false;

  try {
    var called = 0;
    var iteratorWithReturn = {
      next: function () {
        return { done: !!called++ };
      },
      'return': function () {
        SAFE_CLOSING = true;
      }
    };
    iteratorWithReturn[ITERATOR$3] = function () {
      return this;
    };
    // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
    Array.from(iteratorWithReturn, function () { throw 2; });
  } catch (error) { /* empty */ }

  var checkCorrectnessOfIteration$2 = function (exec, SKIP_CLOSING) {
    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
    var ITERATION_SUPPORT = false;
    try {
      var object = {};
      object[ITERATOR$3] = function () {
        return {
          next: function () {
            return { done: ITERATION_SUPPORT = true };
          }
        };
      };
      exec(object);
    } catch (error) { /* empty */ }
    return ITERATION_SUPPORT;
  };

  var $$e = _export;
  var from = arrayFrom;
  var checkCorrectnessOfIteration$1 = checkCorrectnessOfIteration$2;

  var INCORRECT_ITERATION = !checkCorrectnessOfIteration$1(function (iterable) {
    // eslint-disable-next-line es/no-array-from -- required for testing
    Array.from(iterable);
  });

  // `Array.from` method
  // https://tc39.es/ecma262/#sec-array.from
  $$e({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
    from: from
  });

  var classof$4 = classof$a;

  var $String$1 = String;

  var toString$8 = function (argument) {
    if (classof$4(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
    return $String$1(argument);
  };

  var uncurryThis$c = functionUncurryThis;
  var toIntegerOrInfinity$1 = toIntegerOrInfinity$4;
  var toString$7 = toString$8;
  var requireObjectCoercible$5 = requireObjectCoercible$8;

  var charAt$4 = uncurryThis$c(''.charAt);
  var charCodeAt = uncurryThis$c(''.charCodeAt);
  var stringSlice$4 = uncurryThis$c(''.slice);

  var createMethod$1 = function (CONVERT_TO_STRING) {
    return function ($this, pos) {
      var S = toString$7(requireObjectCoercible$5($this));
      var position = toIntegerOrInfinity$1(pos);
      var size = S.length;
      var first, second;
      if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
      first = charCodeAt(S, position);
      return first < 0xD800 || first > 0xDBFF || position + 1 === size
        || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
          ? CONVERT_TO_STRING
            ? charAt$4(S, position)
            : first
          : CONVERT_TO_STRING
            ? stringSlice$4(S, position, position + 2)
            : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
    };
  };

  var stringMultibyte = {
    // `String.prototype.codePointAt` method
    // https://tc39.es/ecma262/#sec-string.prototype.codepointat
    codeAt: createMethod$1(false),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: createMethod$1(true)
  };

  var objectDefineProperties = {};

  var internalObjectKeys = objectKeysInternal;
  var enumBugKeys$1 = enumBugKeys$3;

  // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys
  // eslint-disable-next-line es/no-object-keys -- safe
  var objectKeys$2 = Object.keys || function keys(O) {
    return internalObjectKeys(O, enumBugKeys$1);
  };

  var DESCRIPTORS$4 = descriptors;
  var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
  var definePropertyModule = objectDefineProperty;
  var anObject$8 = anObject$e;
  var toIndexedObject$3 = toIndexedObject$8;
  var objectKeys$1 = objectKeys$2;

  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  // eslint-disable-next-line es/no-object-defineproperties -- safe
  objectDefineProperties.f = DESCRIPTORS$4 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject$8(O);
    var props = toIndexedObject$3(Properties);
    var keys = objectKeys$1(Properties);
    var length = keys.length;
    var index = 0;
    var key;
    while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
    return O;
  };

  var getBuiltIn$1 = getBuiltIn$5;

  var html$1 = getBuiltIn$1('document', 'documentElement');

  /* global ActiveXObject -- old IE, WSH */

  var anObject$7 = anObject$e;
  var definePropertiesModule = objectDefineProperties;
  var enumBugKeys = enumBugKeys$3;
  var hiddenKeys$1 = hiddenKeys$5;
  var html = html$1;
  var documentCreateElement = documentCreateElement$2;
  var sharedKey$1 = sharedKey$3;

  var GT = '>';
  var LT = '<';
  var PROTOTYPE = 'prototype';
  var SCRIPT = 'script';
  var IE_PROTO$1 = sharedKey$1('IE_PROTO');

  var EmptyConstructor = function () { /* empty */ };

  var scriptTag = function (content) {
    return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
  };

  // Create object with fake `null` prototype: use ActiveX Object with cleared prototype
  var NullProtoObjectViaActiveX = function (activeXDocument) {
    activeXDocument.write(scriptTag(''));
    activeXDocument.close();
    var temp = activeXDocument.parentWindow.Object;
    activeXDocument = null; // avoid memory leak
    return temp;
  };

  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var NullProtoObjectViaIFrame = function () {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = documentCreateElement('iframe');
    var JS = 'java' + SCRIPT + ':';
    var iframeDocument;
    iframe.style.display = 'none';
    html.appendChild(iframe);
    // https://github.com/zloirock/core-js/issues/475
    iframe.src = String(JS);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(scriptTag('document.F=Object'));
    iframeDocument.close();
    return iframeDocument.F;
  };

  // Check for document.domain and active x support
  // No need to use active x approach when document.domain is not set
  // see https://github.com/es-shims/es5-shim/issues/150
  // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
  // avoid IE GC bug
  var activeXDocument;
  var NullProtoObject = function () {
    try {
      activeXDocument = new ActiveXObject('htmlfile');
    } catch (error) { /* ignore */ }
    NullProtoObject = typeof document != 'undefined'
      ? document.domain && activeXDocument
        ? NullProtoObjectViaActiveX(activeXDocument) // old IE
        : NullProtoObjectViaIFrame()
      : NullProtoObjectViaActiveX(activeXDocument); // WSH
    var length = enumBugKeys.length;
    while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
    return NullProtoObject();
  };

  hiddenKeys$1[IE_PROTO$1] = true;

  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  // eslint-disable-next-line es/no-object-create -- safe
  var objectCreate = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      EmptyConstructor[PROTOTYPE] = anObject$7(O);
      result = new EmptyConstructor();
      EmptyConstructor[PROTOTYPE] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO$1] = O;
    } else result = NullProtoObject();
    return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
  };

  var fails$g = fails$s;

  var correctPrototypeGetter = !fails$g(function () {
    function F() { /* empty */ }
    F.prototype.constructor = null;
    // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
    return Object.getPrototypeOf(new F()) !== F.prototype;
  });

  var hasOwn$3 = hasOwnProperty_1;
  var isCallable$7 = isCallable$k;
  var toObject$4 = toObject$8;
  var sharedKey = sharedKey$3;
  var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

  var IE_PROTO = sharedKey('IE_PROTO');
  var $Object = Object;
  var ObjectPrototype = $Object.prototype;

  // `Object.getPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.getprototypeof
  // eslint-disable-next-line es/no-object-getprototypeof -- safe
  var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
    var object = toObject$4(O);
    if (hasOwn$3(object, IE_PROTO)) return object[IE_PROTO];
    var constructor = object.constructor;
    if (isCallable$7(constructor) && object instanceof constructor) {
      return constructor.prototype;
    } return object instanceof $Object ? ObjectPrototype : null;
  };

  var fails$f = fails$s;
  var isCallable$6 = isCallable$k;
  var isObject$6 = isObject$e;
  var getPrototypeOf$1 = objectGetPrototypeOf;
  var defineBuiltIn$5 = defineBuiltIn$8;
  var wellKnownSymbol$a = wellKnownSymbol$k;

  var ITERATOR$2 = wellKnownSymbol$a('iterator');
  var BUGGY_SAFARI_ITERATORS$1 = false;

  // `%IteratorPrototype%` object
  // https://tc39.es/ecma262/#sec-%iteratorprototype%-object
  var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;

  /* eslint-disable es/no-array-prototype-keys -- safe */
  if ([].keys) {
    arrayIterator = [].keys();
    // Safari 8 has buggy iterators w/o `next`
    if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;
    else {
      PrototypeOfArrayIteratorPrototype = getPrototypeOf$1(getPrototypeOf$1(arrayIterator));
      if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
    }
  }

  var NEW_ITERATOR_PROTOTYPE = !isObject$6(IteratorPrototype$2) || fails$f(function () {
    var test = {};
    // FF44- legacy iterators case
    return IteratorPrototype$2[ITERATOR$2].call(test) !== test;
  });

  if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {};

  // `%IteratorPrototype%[@@iterator]()` method
  // https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
  if (!isCallable$6(IteratorPrototype$2[ITERATOR$2])) {
    defineBuiltIn$5(IteratorPrototype$2, ITERATOR$2, function () {
      return this;
    });
  }

  var iteratorsCore = {
    IteratorPrototype: IteratorPrototype$2,
    BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
  };

  var defineProperty$5 = objectDefineProperty.f;
  var hasOwn$2 = hasOwnProperty_1;
  var wellKnownSymbol$9 = wellKnownSymbol$k;

  var TO_STRING_TAG$1 = wellKnownSymbol$9('toStringTag');

  var setToStringTag$3 = function (target, TAG, STATIC) {
    if (target && !STATIC) target = target.prototype;
    if (target && !hasOwn$2(target, TO_STRING_TAG$1)) {
      defineProperty$5(target, TO_STRING_TAG$1, { configurable: true, value: TAG });
    }
  };

  var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
  var create$3 = objectCreate;
  var createPropertyDescriptor = createPropertyDescriptor$4;
  var setToStringTag$2 = setToStringTag$3;
  var Iterators$2 = iterators;

  var returnThis$1 = function () { return this; };

  var iteratorCreateConstructor = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
    var TO_STRING_TAG = NAME + ' Iterator';
    IteratorConstructor.prototype = create$3(IteratorPrototype$1, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
    setToStringTag$2(IteratorConstructor, TO_STRING_TAG, false);
    Iterators$2[TO_STRING_TAG] = returnThis$1;
    return IteratorConstructor;
  };

  var uncurryThis$b = functionUncurryThis;
  var aCallable = aCallable$4;

  var functionUncurryThisAccessor = function (object, key, method) {
    try {
      // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
      return uncurryThis$b(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
    } catch (error) { /* empty */ }
  };

  var isCallable$5 = isCallable$k;

  var $String = String;
  var $TypeError$5 = TypeError;

  var aPossiblePrototype$1 = function (argument) {
    if (typeof argument == 'object' || isCallable$5(argument)) return argument;
    throw $TypeError$5("Can't set " + $String(argument) + ' as a prototype');
  };

  /* eslint-disable no-proto -- safe */

  var uncurryThisAccessor = functionUncurryThisAccessor;
  var anObject$6 = anObject$e;
  var aPossiblePrototype = aPossiblePrototype$1;

  // `Object.setPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.setprototypeof
  // Works with __proto__ only. Old v8 can't work with null proto objects.
  // eslint-disable-next-line es/no-object-setprototypeof -- safe
  var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
    var CORRECT_SETTER = false;
    var test = {};
    var setter;
    try {
      setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set');
      setter(test, []);
      CORRECT_SETTER = test instanceof Array;
    } catch (error) { /* empty */ }
    return function setPrototypeOf(O, proto) {
      anObject$6(O);
      aPossiblePrototype(proto);
      if (CORRECT_SETTER) setter(O, proto);
      else O.__proto__ = proto;
      return O;
    };
  }() : undefined);

  var $$d = _export;
  var call$8 = functionCall;
  var FunctionName = functionName;
  var isCallable$4 = isCallable$k;
  var createIteratorConstructor = iteratorCreateConstructor;
  var getPrototypeOf = objectGetPrototypeOf;
  var setPrototypeOf$1 = objectSetPrototypeOf;
  var setToStringTag$1 = setToStringTag$3;
  var createNonEnumerableProperty$2 = createNonEnumerableProperty$6;
  var defineBuiltIn$4 = defineBuiltIn$8;
  var wellKnownSymbol$8 = wellKnownSymbol$k;
  var Iterators$1 = iterators;
  var IteratorsCore = iteratorsCore;

  var PROPER_FUNCTION_NAME$2 = FunctionName.PROPER;
  var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
  var IteratorPrototype = IteratorsCore.IteratorPrototype;
  var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
  var ITERATOR$1 = wellKnownSymbol$8('iterator');
  var KEYS = 'keys';
  var VALUES = 'values';
  var ENTRIES = 'entries';

  var returnThis = function () { return this; };

  var iteratorDefine = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
    createIteratorConstructor(IteratorConstructor, NAME, next);

    var getIterationMethod = function (KIND) {
      if (KIND === DEFAULT && defaultIterator) return defaultIterator;
      if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
      switch (KIND) {
        case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
        case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
        case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
      } return function () { return new IteratorConstructor(this); };
    };

    var TO_STRING_TAG = NAME + ' Iterator';
    var INCORRECT_VALUES_NAME = false;
    var IterablePrototype = Iterable.prototype;
    var nativeIterator = IterablePrototype[ITERATOR$1]
      || IterablePrototype['@@iterator']
      || DEFAULT && IterablePrototype[DEFAULT];
    var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
    var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
    var CurrentIteratorPrototype, methods, KEY;

    // fix native
    if (anyNativeIterator) {
      CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
      if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
        if (getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
          if (setPrototypeOf$1) {
            setPrototypeOf$1(CurrentIteratorPrototype, IteratorPrototype);
          } else if (!isCallable$4(CurrentIteratorPrototype[ITERATOR$1])) {
            defineBuiltIn$4(CurrentIteratorPrototype, ITERATOR$1, returnThis);
          }
        }
        // Set @@toStringTag to native iterators
        setToStringTag$1(CurrentIteratorPrototype, TO_STRING_TAG, true);
      }
    }

    // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
    if (PROPER_FUNCTION_NAME$2 && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
      if (CONFIGURABLE_FUNCTION_NAME) {
        createNonEnumerableProperty$2(IterablePrototype, 'name', VALUES);
      } else {
        INCORRECT_VALUES_NAME = true;
        defaultIterator = function values() { return call$8(nativeIterator, this); };
      }
    }

    // export additional methods
    if (DEFAULT) {
      methods = {
        values: getIterationMethod(VALUES),
        keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
        entries: getIterationMethod(ENTRIES)
      };
      if (FORCED) for (KEY in methods) {
        if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
          defineBuiltIn$4(IterablePrototype, KEY, methods[KEY]);
        }
      } else $$d({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
    }

    // define iterator
    if (IterablePrototype[ITERATOR$1] !== defaultIterator) {
      defineBuiltIn$4(IterablePrototype, ITERATOR$1, defaultIterator, { name: DEFAULT });
    }
    Iterators$1[NAME] = defaultIterator;

    return methods;
  };

  // `CreateIterResultObject` abstract operation
  // https://tc39.es/ecma262/#sec-createiterresultobject
  var createIterResultObject$3 = function (value, done) {
    return { value: value, done: done };
  };

  var charAt$3 = stringMultibyte.charAt;
  var toString$6 = toString$8;
  var InternalStateModule$2 = internalState;
  var defineIterator$2 = iteratorDefine;
  var createIterResultObject$2 = createIterResultObject$3;

  var STRING_ITERATOR = 'String Iterator';
  var setInternalState$2 = InternalStateModule$2.set;
  var getInternalState$2 = InternalStateModule$2.getterFor(STRING_ITERATOR);

  // `String.prototype[@@iterator]` method
  // https://tc39.es/ecma262/#sec-string.prototype-@@iterator
  defineIterator$2(String, 'String', function (iterated) {
    setInternalState$2(this, {
      type: STRING_ITERATOR,
      string: toString$6(iterated),
      index: 0
    });
  // `%StringIteratorPrototype%.next` method
  // https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
  }, function next() {
    var state = getInternalState$2(this);
    var string = state.string;
    var index = state.index;
    var point;
    if (index >= string.length) return createIterResultObject$2(undefined, true);
    point = charAt$3(string, index);
    state.index += point.length;
    return createIterResultObject$2(point, false);
  });

  var anObject$5 = anObject$e;

  // `RegExp.prototype.flags` getter implementation
  // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
  var regexpFlags$1 = function () {
    var that = anObject$5(this);
    var result = '';
    if (that.hasIndices) result += 'd';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
    if (that.dotAll) result += 's';
    if (that.unicode) result += 'u';
    if (that.unicodeSets) result += 'v';
    if (that.sticky) result += 'y';
    return result;
  };

  var fails$e = fails$s;
  var global$5 = global$g;

  // babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var $RegExp$2 = global$5.RegExp;

  var UNSUPPORTED_Y$1 = fails$e(function () {
    var re = $RegExp$2('a', 'y');
    re.lastIndex = 2;
    return re.exec('abcd') != null;
  });

  // UC Browser bug
  // https://github.com/zloirock/core-js/issues/1008
  var MISSED_STICKY = UNSUPPORTED_Y$1 || fails$e(function () {
    return !$RegExp$2('a', 'y').sticky;
  });

  var BROKEN_CARET = UNSUPPORTED_Y$1 || fails$e(function () {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
    var re = $RegExp$2('^r', 'gy');
    re.lastIndex = 2;
    return re.exec('str') != null;
  });

  var regexpStickyHelpers = {
    BROKEN_CARET: BROKEN_CARET,
    MISSED_STICKY: MISSED_STICKY,
    UNSUPPORTED_Y: UNSUPPORTED_Y$1
  };

  var fails$d = fails$s;
  var global$4 = global$g;

  // babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
  var $RegExp$1 = global$4.RegExp;

  var regexpUnsupportedDotAll = fails$d(function () {
    var re = $RegExp$1('.', 's');
    return !(re.dotAll && re.exec('\n') && re.flags === 's');
  });

  var fails$c = fails$s;
  var global$3 = global$g;

  // babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
  var $RegExp = global$3.RegExp;

  var regexpUnsupportedNcg = fails$c(function () {
    var re = $RegExp('(?<a>b)', 'g');
    return re.exec('b').groups.a !== 'b' ||
      'b'.replace(re, '$<a>c') !== 'bc';
  });

  /* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
  /* eslint-disable regexp/no-useless-quantifier -- testing */
  var call$7 = functionCall;
  var uncurryThis$a = functionUncurryThis;
  var toString$5 = toString$8;
  var regexpFlags = regexpFlags$1;
  var stickyHelpers = regexpStickyHelpers;
  var shared = sharedExports;
  var create$2 = objectCreate;
  var getInternalState$1 = internalState.get;
  var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
  var UNSUPPORTED_NCG = regexpUnsupportedNcg;

  var nativeReplace = shared('native-string-replace', String.prototype.replace);
  var nativeExec = RegExp.prototype.exec;
  var patchedExec = nativeExec;
  var charAt$2 = uncurryThis$a(''.charAt);
  var indexOf = uncurryThis$a(''.indexOf);
  var replace$2 = uncurryThis$a(''.replace);
  var stringSlice$3 = uncurryThis$a(''.slice);

  var UPDATES_LAST_INDEX_WRONG = (function () {
    var re1 = /a/;
    var re2 = /b*/g;
    call$7(nativeExec, re1, 'a');
    call$7(nativeExec, re2, 'a');
    return re1.lastIndex !== 0 || re2.lastIndex !== 0;
  })();

  var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;

  // nonparticipating capturing group, copied from es5-shim's String#split patch.
  var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

  var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

  if (PATCH) {
    patchedExec = function exec(string) {
      var re = this;
      var state = getInternalState$1(re);
      var str = toString$5(string);
      var raw = state.raw;
      var result, reCopy, lastIndex, match, i, object, group;

      if (raw) {
        raw.lastIndex = re.lastIndex;
        result = call$7(patchedExec, raw, str);
        re.lastIndex = raw.lastIndex;
        return result;
      }

      var groups = state.groups;
      var sticky = UNSUPPORTED_Y && re.sticky;
      var flags = call$7(regexpFlags, re);
      var source = re.source;
      var charsAdded = 0;
      var strCopy = str;

      if (sticky) {
        flags = replace$2(flags, 'y', '');
        if (indexOf(flags, 'g') === -1) {
          flags += 'g';
        }

        strCopy = stringSlice$3(str, re.lastIndex);
        // Support anchored sticky behavior.
        if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt$2(str, re.lastIndex - 1) !== '\n')) {
          source = '(?: ' + source + ')';
          strCopy = ' ' + strCopy;
          charsAdded++;
        }
        // ^(? + rx + ) is needed, in combination with some str slicing, to
        // simulate the 'y' flag.
        reCopy = new RegExp('^(?:' + source + ')', flags);
      }

      if (NPCG_INCLUDED) {
        reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
      }
      if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

      match = call$7(nativeExec, sticky ? reCopy : re, strCopy);

      if (sticky) {
        if (match) {
          match.input = stringSlice$3(match.input, charsAdded);
          match[0] = stringSlice$3(match[0], charsAdded);
          match.index = re.lastIndex;
          re.lastIndex += match[0].length;
        } else re.lastIndex = 0;
      } else if (UPDATES_LAST_INDEX_WRONG && match) {
        re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
      }
      if (NPCG_INCLUDED && match && match.length > 1) {
        // Fix browsers whose `exec` methods don't consistently return `undefined`
        // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
        call$7(nativeReplace, match[0], reCopy, function () {
          for (i = 1; i < arguments.length - 2; i++) {
            if (arguments[i] === undefined) match[i] = undefined;
          }
        });
      }

      if (match && groups) {
        match.groups = object = create$2(null);
        for (i = 0; i < groups.length; i++) {
          group = groups[i];
          object[group[0]] = match[group[1]];
        }
      }

      return match;
    };
  }

  var regexpExec$2 = patchedExec;

  var $$c = _export;
  var exec = regexpExec$2;

  // `RegExp.prototype.exec` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.exec
  $$c({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
    exec: exec
  });

  // TODO: Remove from `core-js@4` since it's moved to entry points

  var uncurryThis$9 = functionUncurryThisClause;
  var defineBuiltIn$3 = defineBuiltIn$8;
  var regexpExec$1 = regexpExec$2;
  var fails$b = fails$s;
  var wellKnownSymbol$7 = wellKnownSymbol$k;
  var createNonEnumerableProperty$1 = createNonEnumerableProperty$6;

  var SPECIES$1 = wellKnownSymbol$7('species');
  var RegExpPrototype$2 = RegExp.prototype;

  var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
    var SYMBOL = wellKnownSymbol$7(KEY);

    var DELEGATES_TO_SYMBOL = !fails$b(function () {
      // String methods call symbol-named RegEp methods
      var O = {};
      O[SYMBOL] = function () { return 7; };
      return ''[KEY](O) != 7;
    });

    var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$b(function () {
      // Symbol-named RegExp methods call .exec
      var execCalled = false;
      var re = /a/;

      if (KEY === 'split') {
        // We can't use real regex here since it causes deoptimization
        // and serious performance degradation in V8
        // https://github.com/zloirock/core-js/issues/306
        re = {};
        // RegExp[@@split] doesn't call the regex's exec method, but first creates
        // a new one. We need to return the patched regex when creating the new one.
        re.constructor = {};
        re.constructor[SPECIES$1] = function () { return re; };
        re.flags = '';
        re[SYMBOL] = /./[SYMBOL];
      }

      re.exec = function () { execCalled = true; return null; };

      re[SYMBOL]('');
      return !execCalled;
    });

    if (
      !DELEGATES_TO_SYMBOL ||
      !DELEGATES_TO_EXEC ||
      FORCED
    ) {
      var uncurriedNativeRegExpMethod = uncurryThis$9(/./[SYMBOL]);
      var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
        var uncurriedNativeMethod = uncurryThis$9(nativeMethod);
        var $exec = regexp.exec;
        if ($exec === regexpExec$1 || $exec === RegExpPrototype$2.exec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: uncurriedNativeRegExpMethod(regexp, str, arg2) };
          }
          return { done: true, value: uncurriedNativeMethod(str, regexp, arg2) };
        }
        return { done: false };
      });

      defineBuiltIn$3(String.prototype, KEY, methods[0]);
      defineBuiltIn$3(RegExpPrototype$2, SYMBOL, methods[1]);
    }

    if (SHAM) createNonEnumerableProperty$1(RegExpPrototype$2[SYMBOL], 'sham', true);
  };

  var charAt$1 = stringMultibyte.charAt;

  // `AdvanceStringIndex` abstract operation
  // https://tc39.es/ecma262/#sec-advancestringindex
  var advanceStringIndex$2 = function (S, index, unicode) {
    return index + (unicode ? charAt$1(S, index).length : 1);
  };

  var call$6 = functionCall;
  var anObject$4 = anObject$e;
  var isCallable$3 = isCallable$k;
  var classof$3 = classofRaw$2;
  var regexpExec = regexpExec$2;

  var $TypeError$4 = TypeError;

  // `RegExpExec` abstract operation
  // https://tc39.es/ecma262/#sec-regexpexec
  var regexpExecAbstract = function (R, S) {
    var exec = R.exec;
    if (isCallable$3(exec)) {
      var result = call$6(exec, R, S);
      if (result !== null) anObject$4(result);
      return result;
    }
    if (classof$3(R) === 'RegExp') return call$6(regexpExec, R, S);
    throw $TypeError$4('RegExp#exec called on incompatible receiver');
  };

  var call$5 = functionCall;
  var fixRegExpWellKnownSymbolLogic$1 = fixRegexpWellKnownSymbolLogic;
  var anObject$3 = anObject$e;
  var isNullOrUndefined$3 = isNullOrUndefined$7;
  var toLength$2 = toLength$4;
  var toString$4 = toString$8;
  var requireObjectCoercible$4 = requireObjectCoercible$8;
  var getMethod$1 = getMethod$5;
  var advanceStringIndex$1 = advanceStringIndex$2;
  var regExpExec$1 = regexpExecAbstract;

  // @@match logic
  fixRegExpWellKnownSymbolLogic$1('match', function (MATCH, nativeMatch, maybeCallNative) {
    return [
      // `String.prototype.match` method
      // https://tc39.es/ecma262/#sec-string.prototype.match
      function match(regexp) {
        var O = requireObjectCoercible$4(this);
        var matcher = isNullOrUndefined$3(regexp) ? undefined : getMethod$1(regexp, MATCH);
        return matcher ? call$5(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString$4(O));
      },
      // `RegExp.prototype[@@match]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
      function (string) {
        var rx = anObject$3(this);
        var S = toString$4(string);
        var res = maybeCallNative(nativeMatch, rx, S);

        if (res.done) return res.value;

        if (!rx.global) return regExpExec$1(rx, S);

        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
        var A = [];
        var n = 0;
        var result;
        while ((result = regExpExec$1(rx, S)) !== null) {
          var matchStr = toString$4(result[0]);
          A[n] = matchStr;
          if (matchStr === '') rx.lastIndex = advanceStringIndex$1(S, toLength$2(rx.lastIndex), fullUnicode);
          n++;
        }
        return n === 0 ? null : A;
      }
    ];
  });

  var NATIVE_BIND = functionBindNative;

  var FunctionPrototype = Function.prototype;
  var apply$1 = FunctionPrototype.apply;
  var call$4 = FunctionPrototype.call;

  // eslint-disable-next-line es/no-reflect -- safe
  var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call$4.bind(apply$1) : function () {
    return call$4.apply(apply$1, arguments);
  });

  var uncurryThis$8 = functionUncurryThis;
  var toObject$3 = toObject$8;

  var floor = Math.floor;
  var charAt = uncurryThis$8(''.charAt);
  var replace$1 = uncurryThis$8(''.replace);
  var stringSlice$2 = uncurryThis$8(''.slice);
  // eslint-disable-next-line redos/no-vulnerable -- safe
  var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
  var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

  // `GetSubstitution` abstract operation
  // https://tc39.es/ecma262/#sec-getsubstitution
  var getSubstitution$1 = function (matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject$3(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return replace$1(replacement, symbols, function (match, ch) {
      var capture;
      switch (charAt(ch, 0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return stringSlice$2(str, 0, position);
        case "'": return stringSlice$2(str, tailPos);
        case '<':
          capture = namedCaptures[stringSlice$2(ch, 1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  };

  var apply = functionApply;
  var call$3 = functionCall;
  var uncurryThis$7 = functionUncurryThis;
  var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
  var fails$a = fails$s;
  var anObject$2 = anObject$e;
  var isCallable$2 = isCallable$k;
  var isNullOrUndefined$2 = isNullOrUndefined$7;
  var toIntegerOrInfinity = toIntegerOrInfinity$4;
  var toLength$1 = toLength$4;
  var toString$3 = toString$8;
  var requireObjectCoercible$3 = requireObjectCoercible$8;
  var advanceStringIndex = advanceStringIndex$2;
  var getMethod = getMethod$5;
  var getSubstitution = getSubstitution$1;
  var regExpExec = regexpExecAbstract;
  var wellKnownSymbol$6 = wellKnownSymbol$k;

  var REPLACE = wellKnownSymbol$6('replace');
  var max$1 = Math.max;
  var min$1 = Math.min;
  var concat$1 = uncurryThis$7([].concat);
  var push = uncurryThis$7([].push);
  var stringIndexOf$1 = uncurryThis$7(''.indexOf);
  var stringSlice$1 = uncurryThis$7(''.slice);

  var maybeToString = function (it) {
    return it === undefined ? it : String(it);
  };

  // IE <= 11 replaces $0 with the whole match, as if it was $&
  // https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
  var REPLACE_KEEPS_$0 = (function () {
    // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
    return 'a'.replace(/./, '$0') === '$0';
  })();

  // Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
    if (/./[REPLACE]) {
      return /./[REPLACE]('a', '$0') === '';
    }
    return false;
  })();

  var REPLACE_SUPPORTS_NAMED_GROUPS = !fails$a(function () {
    var re = /./;
    re.exec = function () {
      var result = [];
      result.groups = { a: '7' };
      return result;
    };
    // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
    return ''.replace(re, '$<a>') !== '7';
  });

  // @@replace logic
  fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
    var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

    return [
      // `String.prototype.replace` method
      // https://tc39.es/ecma262/#sec-string.prototype.replace
      function replace(searchValue, replaceValue) {
        var O = requireObjectCoercible$3(this);
        var replacer = isNullOrUndefined$2(searchValue) ? undefined : getMethod(searchValue, REPLACE);
        return replacer
          ? call$3(replacer, searchValue, O, replaceValue)
          : call$3(nativeReplace, toString$3(O), searchValue, replaceValue);
      },
      // `RegExp.prototype[@@replace]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
      function (string, replaceValue) {
        var rx = anObject$2(this);
        var S = toString$3(string);

        if (
          typeof replaceValue == 'string' &&
          stringIndexOf$1(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
          stringIndexOf$1(replaceValue, '$<') === -1
        ) {
          var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
          if (res.done) return res.value;
        }

        var functionalReplace = isCallable$2(replaceValue);
        if (!functionalReplace) replaceValue = toString$3(replaceValue);

        var global = rx.global;
        if (global) {
          var fullUnicode = rx.unicode;
          rx.lastIndex = 0;
        }
        var results = [];
        while (true) {
          var result = regExpExec(rx, S);
          if (result === null) break;

          push(results, result);
          if (!global) break;

          var matchStr = toString$3(result[0]);
          if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength$1(rx.lastIndex), fullUnicode);
        }

        var accumulatedResult = '';
        var nextSourcePosition = 0;
        for (var i = 0; i < results.length; i++) {
          result = results[i];

          var matched = toString$3(result[0]);
          var position = max$1(min$1(toIntegerOrInfinity(result.index), S.length), 0);
          var captures = [];
          // NOTE: This is equivalent to
          //   captures = result.slice(1).map(maybeToString)
          // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
          // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
          // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
          for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));
          var namedCaptures = result.groups;
          if (functionalReplace) {
            var replacerArgs = concat$1([matched], captures, position, S);
            if (namedCaptures !== undefined) push(replacerArgs, namedCaptures);
            var replacement = toString$3(apply(replaceValue, undefined, replacerArgs));
          } else {
            replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
          }
          if (position >= nextSourcePosition) {
            accumulatedResult += stringSlice$1(S, nextSourcePosition, position) + replacement;
            nextSourcePosition = position + matched.length;
          }
        }
        return accumulatedResult + stringSlice$1(S, nextSourcePosition);
      }
    ];
  }, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

  var $TypeError$3 = TypeError;
  var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

  var doesNotExceedSafeInteger$1 = function (it) {
    if (it > MAX_SAFE_INTEGER) throw $TypeError$3('Maximum allowed index exceeded');
    return it;
  };

  var $$b = _export;
  var fails$9 = fails$s;
  var isArray = isArray$3;
  var isObject$5 = isObject$e;
  var toObject$2 = toObject$8;
  var lengthOfArrayLike$2 = lengthOfArrayLike$7;
  var doesNotExceedSafeInteger = doesNotExceedSafeInteger$1;
  var createProperty$1 = createProperty$4;
  var arraySpeciesCreate = arraySpeciesCreate$2;
  var arrayMethodHasSpeciesSupport$1 = arrayMethodHasSpeciesSupport$4;
  var wellKnownSymbol$5 = wellKnownSymbol$k;
  var V8_VERSION = engineV8Version;

  var IS_CONCAT_SPREADABLE = wellKnownSymbol$5('isConcatSpreadable');

  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/679
  var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails$9(function () {
    var array = [];
    array[IS_CONCAT_SPREADABLE] = false;
    return array.concat()[0] !== array;
  });

  var isConcatSpreadable = function (O) {
    if (!isObject$5(O)) return false;
    var spreadable = O[IS_CONCAT_SPREADABLE];
    return spreadable !== undefined ? !!spreadable : isArray(O);
  };

  var FORCED$1 = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport$1('concat');

  // `Array.prototype.concat` method
  // https://tc39.es/ecma262/#sec-array.prototype.concat
  // with adding support of @@isConcatSpreadable and @@species
  $$b({ target: 'Array', proto: true, arity: 1, forced: FORCED$1 }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    concat: function concat(arg) {
      var O = toObject$2(this);
      var A = arraySpeciesCreate(O, 0);
      var n = 0;
      var i, k, length, len, E;
      for (i = -1, length = arguments.length; i < length; i++) {
        E = i === -1 ? O : arguments[i];
        if (isConcatSpreadable(E)) {
          len = lengthOfArrayLike$2(E);
          doesNotExceedSafeInteger(n + len);
          for (k = 0; k < len; k++, n++) if (k in E) createProperty$1(A, n, E[k]);
        } else {
          doesNotExceedSafeInteger(n + 1);
          createProperty$1(A, n++, E);
        }
      }
      A.length = n;
      return A;
    }
  });

  var call$2 = functionCall;
  var hasOwn$1 = hasOwnProperty_1;
  var isPrototypeOf$2 = objectIsPrototypeOf;
  var regExpFlags = regexpFlags$1;

  var RegExpPrototype$1 = RegExp.prototype;

  var regexpGetFlags = function (R) {
    var flags = R.flags;
    return flags === undefined && !('flags' in RegExpPrototype$1) && !hasOwn$1(R, 'flags') && isPrototypeOf$2(RegExpPrototype$1, R)
      ? call$2(regExpFlags, R) : flags;
  };

  var PROPER_FUNCTION_NAME$1 = functionName.PROPER;
  var defineBuiltIn$2 = defineBuiltIn$8;
  var anObject$1 = anObject$e;
  var $toString = toString$8;
  var fails$8 = fails$s;
  var getRegExpFlags = regexpGetFlags;

  var TO_STRING = 'toString';
  var RegExpPrototype = RegExp.prototype;
  var nativeToString = RegExpPrototype[TO_STRING];

  var NOT_GENERIC = fails$8(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
  // FF44- RegExp#toString has a wrong name
  var INCORRECT_NAME = PROPER_FUNCTION_NAME$1 && nativeToString.name != TO_STRING;

  // `RegExp.prototype.toString` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.tostring
  if (NOT_GENERIC || INCORRECT_NAME) {
    defineBuiltIn$2(RegExp.prototype, TO_STRING, function toString() {
      var R = anObject$1(this);
      var pattern = $toString(R.source);
      var flags = $toString(getRegExpFlags(R));
      return '/' + pattern + '/' + flags;
    }, { unsafe: true });
  }

  var wellKnownSymbol$4 = wellKnownSymbol$k;
  var create$1 = objectCreate;
  var defineProperty$4 = objectDefineProperty.f;

  var UNSCOPABLES = wellKnownSymbol$4('unscopables');
  var ArrayPrototype = Array.prototype;

  // Array.prototype[@@unscopables]
  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  if (ArrayPrototype[UNSCOPABLES] == undefined) {
    defineProperty$4(ArrayPrototype, UNSCOPABLES, {
      configurable: true,
      value: create$1(null)
    });
  }

  // add a key to Array.prototype[@@unscopables]
  var addToUnscopables$2 = function (key) {
    ArrayPrototype[UNSCOPABLES][key] = true;
  };

  var toIndexedObject$2 = toIndexedObject$8;
  var addToUnscopables$1 = addToUnscopables$2;
  var Iterators = iterators;
  var InternalStateModule$1 = internalState;
  var defineProperty$3 = objectDefineProperty.f;
  var defineIterator$1 = iteratorDefine;
  var createIterResultObject$1 = createIterResultObject$3;
  var DESCRIPTORS$3 = descriptors;

  var ARRAY_ITERATOR = 'Array Iterator';
  var setInternalState$1 = InternalStateModule$1.set;
  var getInternalState = InternalStateModule$1.getterFor(ARRAY_ITERATOR);

  // `Array.prototype.entries` method
  // https://tc39.es/ecma262/#sec-array.prototype.entries
  // `Array.prototype.keys` method
  // https://tc39.es/ecma262/#sec-array.prototype.keys
  // `Array.prototype.values` method
  // https://tc39.es/ecma262/#sec-array.prototype.values
  // `Array.prototype[@@iterator]` method
  // https://tc39.es/ecma262/#sec-array.prototype-@@iterator
  // `CreateArrayIterator` internal method
  // https://tc39.es/ecma262/#sec-createarrayiterator
  var es_array_iterator = defineIterator$1(Array, 'Array', function (iterated, kind) {
    setInternalState$1(this, {
      type: ARRAY_ITERATOR,
      target: toIndexedObject$2(iterated), // target
      index: 0,                          // next index
      kind: kind                         // kind
    });
  // `%ArrayIteratorPrototype%.next` method
  // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
  }, function () {
    var state = getInternalState(this);
    var target = state.target;
    var kind = state.kind;
    var index = state.index++;
    if (!target || index >= target.length) {
      state.target = undefined;
      return createIterResultObject$1(undefined, true);
    }
    if (kind == 'keys') return createIterResultObject$1(index, false);
    if (kind == 'values') return createIterResultObject$1(target[index], false);
    return createIterResultObject$1([index, target[index]], false);
  }, 'values');

  // argumentsList[@@iterator] is %ArrayProto_values%
  // https://tc39.es/ecma262/#sec-createunmappedargumentsobject
  // https://tc39.es/ecma262/#sec-createmappedargumentsobject
  var values = Iterators.Arguments = Iterators.Array;

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables$1('keys');
  addToUnscopables$1('values');
  addToUnscopables$1('entries');

  // V8 ~ Chrome 45- bug
  if (DESCRIPTORS$3 && values.name !== 'values') try {
    defineProperty$3(values, 'name', { value: 'values' });
  } catch (error) { /* empty */ }

  var internalMetadata = {exports: {}};

  var objectGetOwnPropertyNamesExternal = {};

  var toAbsoluteIndex = toAbsoluteIndex$3;
  var lengthOfArrayLike$1 = lengthOfArrayLike$7;
  var createProperty = createProperty$4;

  var $Array = Array;
  var max = Math.max;

  var arraySliceSimple = function (O, start, end) {
    var length = lengthOfArrayLike$1(O);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    var result = $Array(max(fin - k, 0));
    for (var n = 0; k < fin; k++, n++) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  };

  /* eslint-disable es/no-object-getownpropertynames -- safe */

  var classof$2 = classofRaw$2;
  var toIndexedObject$1 = toIndexedObject$8;
  var $getOwnPropertyNames = objectGetOwnPropertyNames.f;
  var arraySlice = arraySliceSimple;

  var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
    ? Object.getOwnPropertyNames(window) : [];

  var getWindowNames = function (it) {
    try {
      return $getOwnPropertyNames(it);
    } catch (error) {
      return arraySlice(windowNames);
    }
  };

  // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
  objectGetOwnPropertyNamesExternal.f = function getOwnPropertyNames(it) {
    return windowNames && classof$2(it) == 'Window'
      ? getWindowNames(it)
      : $getOwnPropertyNames(toIndexedObject$1(it));
  };

  // FF26- bug: ArrayBuffers are non-extensible, but Object.isExtensible does not report it
  var fails$7 = fails$s;

  var arrayBufferNonExtensible = fails$7(function () {
    if (typeof ArrayBuffer == 'function') {
      var buffer = new ArrayBuffer(8);
      // eslint-disable-next-line es/no-object-isextensible, es/no-object-defineproperty -- safe
      if (Object.isExtensible(buffer)) Object.defineProperty(buffer, 'a', { value: 8 });
    }
  });

  var fails$6 = fails$s;
  var isObject$4 = isObject$e;
  var classof$1 = classofRaw$2;
  var ARRAY_BUFFER_NON_EXTENSIBLE = arrayBufferNonExtensible;

  // eslint-disable-next-line es/no-object-isextensible -- safe
  var $isExtensible = Object.isExtensible;
  var FAILS_ON_PRIMITIVES$1 = fails$6(function () { $isExtensible(1); });

  // `Object.isExtensible` method
  // https://tc39.es/ecma262/#sec-object.isextensible
  var objectIsExtensible = (FAILS_ON_PRIMITIVES$1 || ARRAY_BUFFER_NON_EXTENSIBLE) ? function isExtensible(it) {
    if (!isObject$4(it)) return false;
    if (ARRAY_BUFFER_NON_EXTENSIBLE && classof$1(it) == 'ArrayBuffer') return false;
    return $isExtensible ? $isExtensible(it) : true;
  } : $isExtensible;

  var fails$5 = fails$s;

  var freezing = !fails$5(function () {
    // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
    return Object.isExtensible(Object.preventExtensions({}));
  });

  var $$a = _export;
  var uncurryThis$6 = functionUncurryThis;
  var hiddenKeys = hiddenKeys$5;
  var isObject$3 = isObject$e;
  var hasOwn = hasOwnProperty_1;
  var defineProperty$2 = objectDefineProperty.f;
  var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
  var getOwnPropertyNamesExternalModule = objectGetOwnPropertyNamesExternal;
  var isExtensible = objectIsExtensible;
  var uid = uid$3;
  var FREEZING = freezing;

  var REQUIRED = false;
  var METADATA = uid('meta');
  var id = 0;

  var setMetadata = function (it) {
    defineProperty$2(it, METADATA, { value: {
      objectID: 'O' + id++, // object ID
      weakData: {}          // weak collections IDs
    } });
  };

  var fastKey$1 = function (it, create) {
    // return a primitive with prefix
    if (!isObject$3(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
    if (!hasOwn(it, METADATA)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible(it)) return 'F';
      // not necessary to add metadata
      if (!create) return 'E';
      // add missing metadata
      setMetadata(it);
    // return object ID
    } return it[METADATA].objectID;
  };

  var getWeakData = function (it, create) {
    if (!hasOwn(it, METADATA)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible(it)) return true;
      // not necessary to add metadata
      if (!create) return false;
      // add missing metadata
      setMetadata(it);
    // return the store of weak collections IDs
    } return it[METADATA].weakData;
  };

  // add metadata on freeze-family methods calling
  var onFreeze = function (it) {
    if (FREEZING && REQUIRED && isExtensible(it) && !hasOwn(it, METADATA)) setMetadata(it);
    return it;
  };

  var enable = function () {
    meta.enable = function () { /* empty */ };
    REQUIRED = true;
    var getOwnPropertyNames = getOwnPropertyNamesModule.f;
    var splice = uncurryThis$6([].splice);
    var test = {};
    test[METADATA] = 1;

    // prevent exposing of metadata key
    if (getOwnPropertyNames(test).length) {
      getOwnPropertyNamesModule.f = function (it) {
        var result = getOwnPropertyNames(it);
        for (var i = 0, length = result.length; i < length; i++) {
          if (result[i] === METADATA) {
            splice(result, i, 1);
            break;
          }
        } return result;
      };

      $$a({ target: 'Object', stat: true, forced: true }, {
        getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
      });
    }
  };

  var meta = internalMetadata.exports = {
    enable: enable,
    fastKey: fastKey$1,
    getWeakData: getWeakData,
    onFreeze: onFreeze
  };

  hiddenKeys[METADATA] = true;

  var internalMetadataExports = internalMetadata.exports;

  var bind$1 = functionBindContext;
  var call$1 = functionCall;
  var anObject = anObject$e;
  var tryToString = tryToString$3;
  var isArrayIteratorMethod = isArrayIteratorMethod$2;
  var lengthOfArrayLike = lengthOfArrayLike$7;
  var isPrototypeOf$1 = objectIsPrototypeOf;
  var getIterator = getIterator$2;
  var getIteratorMethod = getIteratorMethod$3;
  var iteratorClose = iteratorClose$2;

  var $TypeError$2 = TypeError;

  var Result = function (stopped, result) {
    this.stopped = stopped;
    this.result = result;
  };

  var ResultPrototype = Result.prototype;

  var iterate$2 = function (iterable, unboundFunction, options) {
    var that = options && options.that;
    var AS_ENTRIES = !!(options && options.AS_ENTRIES);
    var IS_RECORD = !!(options && options.IS_RECORD);
    var IS_ITERATOR = !!(options && options.IS_ITERATOR);
    var INTERRUPTED = !!(options && options.INTERRUPTED);
    var fn = bind$1(unboundFunction, that);
    var iterator, iterFn, index, length, result, next, step;

    var stop = function (condition) {
      if (iterator) iteratorClose(iterator, 'normal', condition);
      return new Result(true, condition);
    };

    var callFn = function (value) {
      if (AS_ENTRIES) {
        anObject(value);
        return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
      } return INTERRUPTED ? fn(value, stop) : fn(value);
    };

    if (IS_RECORD) {
      iterator = iterable.iterator;
    } else if (IS_ITERATOR) {
      iterator = iterable;
    } else {
      iterFn = getIteratorMethod(iterable);
      if (!iterFn) throw $TypeError$2(tryToString(iterable) + ' is not iterable');
      // optimisation for array iterators
      if (isArrayIteratorMethod(iterFn)) {
        for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
          result = callFn(iterable[index]);
          if (result && isPrototypeOf$1(ResultPrototype, result)) return result;
        } return new Result(false);
      }
      iterator = getIterator(iterable, iterFn);
    }

    next = IS_RECORD ? iterable.next : iterator.next;
    while (!(step = call$1(next, iterator)).done) {
      try {
        result = callFn(step.value);
      } catch (error) {
        iteratorClose(iterator, 'throw', error);
      }
      if (typeof result == 'object' && result && isPrototypeOf$1(ResultPrototype, result)) return result;
    } return new Result(false);
  };

  var isPrototypeOf = objectIsPrototypeOf;

  var $TypeError$1 = TypeError;

  var anInstance$2 = function (it, Prototype) {
    if (isPrototypeOf(Prototype, it)) return it;
    throw $TypeError$1('Incorrect invocation');
  };

  var isCallable$1 = isCallable$k;
  var isObject$2 = isObject$e;
  var setPrototypeOf = objectSetPrototypeOf;

  // makes subclassing work correct for wrapped built-ins
  var inheritIfRequired$1 = function ($this, dummy, Wrapper) {
    var NewTarget, NewTargetPrototype;
    if (
      // it can work only with native `setPrototypeOf`
      setPrototypeOf &&
      // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
      isCallable$1(NewTarget = dummy.constructor) &&
      NewTarget !== Wrapper &&
      isObject$2(NewTargetPrototype = NewTarget.prototype) &&
      NewTargetPrototype !== Wrapper.prototype
    ) setPrototypeOf($this, NewTargetPrototype);
    return $this;
  };

  var $$9 = _export;
  var global$2 = global$g;
  var uncurryThis$5 = functionUncurryThis;
  var isForced = isForced_1;
  var defineBuiltIn$1 = defineBuiltIn$8;
  var InternalMetadataModule = internalMetadataExports;
  var iterate$1 = iterate$2;
  var anInstance$1 = anInstance$2;
  var isCallable = isCallable$k;
  var isNullOrUndefined$1 = isNullOrUndefined$7;
  var isObject$1 = isObject$e;
  var fails$4 = fails$s;
  var checkCorrectnessOfIteration = checkCorrectnessOfIteration$2;
  var setToStringTag = setToStringTag$3;
  var inheritIfRequired = inheritIfRequired$1;

  var collection$2 = function (CONSTRUCTOR_NAME, wrapper, common) {
    var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
    var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
    var ADDER = IS_MAP ? 'set' : 'add';
    var NativeConstructor = global$2[CONSTRUCTOR_NAME];
    var NativePrototype = NativeConstructor && NativeConstructor.prototype;
    var Constructor = NativeConstructor;
    var exported = {};

    var fixMethod = function (KEY) {
      var uncurriedNativeMethod = uncurryThis$5(NativePrototype[KEY]);
      defineBuiltIn$1(NativePrototype, KEY,
        KEY == 'add' ? function add(value) {
          uncurriedNativeMethod(this, value === 0 ? 0 : value);
          return this;
        } : KEY == 'delete' ? function (key) {
          return IS_WEAK && !isObject$1(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
        } : KEY == 'get' ? function get(key) {
          return IS_WEAK && !isObject$1(key) ? undefined : uncurriedNativeMethod(this, key === 0 ? 0 : key);
        } : KEY == 'has' ? function has(key) {
          return IS_WEAK && !isObject$1(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
        } : function set(key, value) {
          uncurriedNativeMethod(this, key === 0 ? 0 : key, value);
          return this;
        }
      );
    };

    var REPLACE = isForced(
      CONSTRUCTOR_NAME,
      !isCallable(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails$4(function () {
        new NativeConstructor().entries().next();
      }))
    );

    if (REPLACE) {
      // create collection constructor
      Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
      InternalMetadataModule.enable();
    } else if (isForced(CONSTRUCTOR_NAME, true)) {
      var instance = new Constructor();
      // early implementations not supports chaining
      var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
      // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
      var THROWS_ON_PRIMITIVES = fails$4(function () { instance.has(1); });
      // most early implementations doesn't supports iterables, most modern - not close it correctly
      // eslint-disable-next-line no-new -- required for testing
      var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
      // for early implementations -0 and +0 not the same
      var BUGGY_ZERO = !IS_WEAK && fails$4(function () {
        // V8 ~ Chromium 42- fails only with 5+ elements
        var $instance = new NativeConstructor();
        var index = 5;
        while (index--) $instance[ADDER](index, index);
        return !$instance.has(-0);
      });

      if (!ACCEPT_ITERABLES) {
        Constructor = wrapper(function (dummy, iterable) {
          anInstance$1(dummy, NativePrototype);
          var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
          if (!isNullOrUndefined$1(iterable)) iterate$1(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
          return that;
        });
        Constructor.prototype = NativePrototype;
        NativePrototype.constructor = Constructor;
      }

      if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
        fixMethod('delete');
        fixMethod('has');
        IS_MAP && fixMethod('get');
      }

      if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

      // weak collections should not contains .clear method
      if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
    }

    exported[CONSTRUCTOR_NAME] = Constructor;
    $$9({ global: true, constructor: true, forced: Constructor != NativeConstructor }, exported);

    setToStringTag(Constructor, CONSTRUCTOR_NAME);

    if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

    return Constructor;
  };

  var makeBuiltIn = makeBuiltInExports;
  var defineProperty$1 = objectDefineProperty;

  var defineBuiltInAccessor$2 = function (target, name, descriptor) {
    if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
    if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
    return defineProperty$1.f(target, name, descriptor);
  };

  var defineBuiltIn = defineBuiltIn$8;

  var defineBuiltIns$1 = function (target, src, options) {
    for (var key in src) defineBuiltIn(target, key, src[key], options);
    return target;
  };

  var getBuiltIn = getBuiltIn$5;
  var defineBuiltInAccessor$1 = defineBuiltInAccessor$2;
  var wellKnownSymbol$3 = wellKnownSymbol$k;
  var DESCRIPTORS$2 = descriptors;

  var SPECIES = wellKnownSymbol$3('species');

  var setSpecies$1 = function (CONSTRUCTOR_NAME) {
    var Constructor = getBuiltIn(CONSTRUCTOR_NAME);

    if (DESCRIPTORS$2 && Constructor && !Constructor[SPECIES]) {
      defineBuiltInAccessor$1(Constructor, SPECIES, {
        configurable: true,
        get: function () { return this; }
      });
    }
  };

  var create = objectCreate;
  var defineBuiltInAccessor = defineBuiltInAccessor$2;
  var defineBuiltIns = defineBuiltIns$1;
  var bind = functionBindContext;
  var anInstance = anInstance$2;
  var isNullOrUndefined = isNullOrUndefined$7;
  var iterate = iterate$2;
  var defineIterator = iteratorDefine;
  var createIterResultObject = createIterResultObject$3;
  var setSpecies = setSpecies$1;
  var DESCRIPTORS$1 = descriptors;
  var fastKey = internalMetadataExports.fastKey;
  var InternalStateModule = internalState;

  var setInternalState = InternalStateModule.set;
  var internalStateGetterFor = InternalStateModule.getterFor;

  var collectionStrong$2 = {
    getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
      var Constructor = wrapper(function (that, iterable) {
        anInstance(that, Prototype);
        setInternalState(that, {
          type: CONSTRUCTOR_NAME,
          index: create(null),
          first: undefined,
          last: undefined,
          size: 0
        });
        if (!DESCRIPTORS$1) that.size = 0;
        if (!isNullOrUndefined(iterable)) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
      });

      var Prototype = Constructor.prototype;

      var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

      var define = function (that, key, value) {
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        var previous, index;
        // change existing entry
        if (entry) {
          entry.value = value;
        // create new entry
        } else {
          state.last = entry = {
            index: index = fastKey(key, true),
            key: key,
            value: value,
            previous: previous = state.last,
            next: undefined,
            removed: false
          };
          if (!state.first) state.first = entry;
          if (previous) previous.next = entry;
          if (DESCRIPTORS$1) state.size++;
          else that.size++;
          // add to index
          if (index !== 'F') state.index[index] = entry;
        } return that;
      };

      var getEntry = function (that, key) {
        var state = getInternalState(that);
        // fast case
        var index = fastKey(key);
        var entry;
        if (index !== 'F') return state.index[index];
        // frozen object case
        for (entry = state.first; entry; entry = entry.next) {
          if (entry.key == key) return entry;
        }
      };

      defineBuiltIns(Prototype, {
        // `{ Map, Set }.prototype.clear()` methods
        // https://tc39.es/ecma262/#sec-map.prototype.clear
        // https://tc39.es/ecma262/#sec-set.prototype.clear
        clear: function clear() {
          var that = this;
          var state = getInternalState(that);
          var data = state.index;
          var entry = state.first;
          while (entry) {
            entry.removed = true;
            if (entry.previous) entry.previous = entry.previous.next = undefined;
            delete data[entry.index];
            entry = entry.next;
          }
          state.first = state.last = undefined;
          if (DESCRIPTORS$1) state.size = 0;
          else that.size = 0;
        },
        // `{ Map, Set }.prototype.delete(key)` methods
        // https://tc39.es/ecma262/#sec-map.prototype.delete
        // https://tc39.es/ecma262/#sec-set.prototype.delete
        'delete': function (key) {
          var that = this;
          var state = getInternalState(that);
          var entry = getEntry(that, key);
          if (entry) {
            var next = entry.next;
            var prev = entry.previous;
            delete state.index[entry.index];
            entry.removed = true;
            if (prev) prev.next = next;
            if (next) next.previous = prev;
            if (state.first == entry) state.first = next;
            if (state.last == entry) state.last = prev;
            if (DESCRIPTORS$1) state.size--;
            else that.size--;
          } return !!entry;
        },
        // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
        // https://tc39.es/ecma262/#sec-map.prototype.foreach
        // https://tc39.es/ecma262/#sec-set.prototype.foreach
        forEach: function forEach(callbackfn /* , that = undefined */) {
          var state = getInternalState(this);
          var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
          var entry;
          while (entry = entry ? entry.next : state.first) {
            boundFunction(entry.value, entry.key, this);
            // revert to the last existing entry
            while (entry && entry.removed) entry = entry.previous;
          }
        },
        // `{ Map, Set}.prototype.has(key)` methods
        // https://tc39.es/ecma262/#sec-map.prototype.has
        // https://tc39.es/ecma262/#sec-set.prototype.has
        has: function has(key) {
          return !!getEntry(this, key);
        }
      });

      defineBuiltIns(Prototype, IS_MAP ? {
        // `Map.prototype.get(key)` method
        // https://tc39.es/ecma262/#sec-map.prototype.get
        get: function get(key) {
          var entry = getEntry(this, key);
          return entry && entry.value;
        },
        // `Map.prototype.set(key, value)` method
        // https://tc39.es/ecma262/#sec-map.prototype.set
        set: function set(key, value) {
          return define(this, key === 0 ? 0 : key, value);
        }
      } : {
        // `Set.prototype.add(value)` method
        // https://tc39.es/ecma262/#sec-set.prototype.add
        add: function add(value) {
          return define(this, value = value === 0 ? 0 : value, value);
        }
      });
      if (DESCRIPTORS$1) defineBuiltInAccessor(Prototype, 'size', {
        configurable: true,
        get: function () {
          return getInternalState(this).size;
        }
      });
      return Constructor;
    },
    setStrong: function (Constructor, CONSTRUCTOR_NAME, IS_MAP) {
      var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
      var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
      var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
      // `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
      // https://tc39.es/ecma262/#sec-map.prototype.entries
      // https://tc39.es/ecma262/#sec-map.prototype.keys
      // https://tc39.es/ecma262/#sec-map.prototype.values
      // https://tc39.es/ecma262/#sec-map.prototype-@@iterator
      // https://tc39.es/ecma262/#sec-set.prototype.entries
      // https://tc39.es/ecma262/#sec-set.prototype.keys
      // https://tc39.es/ecma262/#sec-set.prototype.values
      // https://tc39.es/ecma262/#sec-set.prototype-@@iterator
      defineIterator(Constructor, CONSTRUCTOR_NAME, function (iterated, kind) {
        setInternalState(this, {
          type: ITERATOR_NAME,
          target: iterated,
          state: getInternalCollectionState(iterated),
          kind: kind,
          last: undefined
        });
      }, function () {
        var state = getInternalIteratorState(this);
        var kind = state.kind;
        var entry = state.last;
        // revert to the last existing entry
        while (entry && entry.removed) entry = entry.previous;
        // get next entry
        if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
          // or finish the iteration
          state.target = undefined;
          return createIterResultObject(undefined, true);
        }
        // return step by kind
        if (kind == 'keys') return createIterResultObject(entry.key, false);
        if (kind == 'values') return createIterResultObject(entry.value, false);
        return createIterResultObject([entry.key, entry.value], false);
      }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

      // `{ Map, Set }.prototype[@@species]` accessors
      // https://tc39.es/ecma262/#sec-get-map-@@species
      // https://tc39.es/ecma262/#sec-get-set-@@species
      setSpecies(CONSTRUCTOR_NAME);
    }
  };

  var collection$1 = collection$2;
  var collectionStrong$1 = collectionStrong$2;

  // `Map` constructor
  // https://tc39.es/ecma262/#sec-map-objects
  collection$1('Map', function (init) {
    return function Map() { return init(this, arguments.length ? arguments[0] : undefined); };
  }, collectionStrong$1);

  var global$1 = global$g;
  var DOMIterables = domIterables;
  var DOMTokenListPrototype = domTokenListPrototype;
  var ArrayIteratorMethods = es_array_iterator;
  var createNonEnumerableProperty = createNonEnumerableProperty$6;
  var wellKnownSymbol$2 = wellKnownSymbol$k;

  var ITERATOR = wellKnownSymbol$2('iterator');
  var TO_STRING_TAG = wellKnownSymbol$2('toStringTag');
  var ArrayValues = ArrayIteratorMethods.values;

  var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
    if (CollectionPrototype) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
        createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
      } catch (error) {
        CollectionPrototype[ITERATOR] = ArrayValues;
      }
      if (!CollectionPrototype[TO_STRING_TAG]) {
        createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
      }
      if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
        // some Chrome versions have non-configurable methods on DOMTokenList
        if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
          createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
        } catch (error) {
          CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
        }
      }
    }
  };

  for (var COLLECTION_NAME in DOMIterables) {
    handlePrototype(global$1[COLLECTION_NAME] && global$1[COLLECTION_NAME].prototype, COLLECTION_NAME);
  }

  handlePrototype(DOMTokenListPrototype, 'DOMTokenList');

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.3): dom/data.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * Constants
   */

  var elementMap$1 = new Map();
  var Data = {
    set: function set(element, key, instance) {
      if (!elementMap$1.has(element)) {
        elementMap$1.set(element, new Map());
      }
      var instanceMap = elementMap$1.get(element);

      // make it clear we only want one instance per element
      // can be removed later when multiple key/instances are fine to be used
      if (!instanceMap.has(key) && instanceMap.size !== 0) {
        // eslint-disable-next-line no-console
        console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(Array.from(instanceMap.keys())[0], "."));
        return;
      }
      instanceMap.set(key, instance);
    },
    get: function get(element, key) {
      if (elementMap$1.has(element)) {
        return elementMap$1.get(element).get(key) || null;
      }
      return null;
    },
    getAll: function getAll(key) {
      var instances = [];
      elementMap$1.forEach(function (value, _key) {
        value.forEach(function (value2, _key2) {
          if (_key2 === key) {
            instances.push(value2);
          }
        });
      });
      return instances;
    },
    every: function every() {
      return elementMap$1;
    },
    remove: function remove(element, key) {
      if (!elementMap$1.has(element)) {
        return;
      }
      var instanceMap = elementMap$1.get(element);
      instanceMap.delete(key);

      // free up element references if there are no instances left for an element
      if (instanceMap.size === 0) {
        elementMap$1.delete(element);
      }
    }
  };

  // a string of all valid unicode whitespaces
  var whitespaces$2 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
    '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

  var uncurryThis$4 = functionUncurryThis;
  var requireObjectCoercible$2 = requireObjectCoercible$8;
  var toString$2 = toString$8;
  var whitespaces$1 = whitespaces$2;

  var replace = uncurryThis$4(''.replace);
  var ltrim = RegExp('^[' + whitespaces$1 + ']+');
  var rtrim = RegExp('(^|[^' + whitespaces$1 + '])[' + whitespaces$1 + ']+$');

  // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
  var createMethod = function (TYPE) {
    return function ($this) {
      var string = toString$2(requireObjectCoercible$2($this));
      if (TYPE & 1) string = replace(string, ltrim, '');
      if (TYPE & 2) string = replace(string, rtrim, '$1');
      return string;
    };
  };

  var stringTrim = {
    // `String.prototype.{ trimLeft, trimStart }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimstart
    start: createMethod(1),
    // `String.prototype.{ trimRight, trimEnd }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimend
    end: createMethod(2),
    // `String.prototype.trim` method
    // https://tc39.es/ecma262/#sec-string.prototype.trim
    trim: createMethod(3)
  };

  var PROPER_FUNCTION_NAME = functionName.PROPER;
  var fails$3 = fails$s;
  var whitespaces = whitespaces$2;

  var non = '\u200B\u0085\u180E';

  // check that a method works with the correct list
  // of whitespaces and has a correct name
  var stringTrimForced = function (METHOD_NAME) {
    return fails$3(function () {
      return !!whitespaces[METHOD_NAME]()
        || non[METHOD_NAME]() !== non
        || (PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME);
    });
  };

  var $$8 = _export;
  var $trim = stringTrim.trim;
  var forcedStringTrimMethod = stringTrimForced;

  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  $$8({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
    trim: function trim() {
      return $trim(this);
    }
  });

  var $$7 = _export;
  var uncurryThis$3 = functionUncurryThis;
  var IndexedObject$1 = indexedObject;
  var toIndexedObject = toIndexedObject$8;
  var arrayMethodIsStrict = arrayMethodIsStrict$2;

  var nativeJoin = uncurryThis$3([].join);

  var ES3_STRINGS = IndexedObject$1 != Object;
  var FORCED = ES3_STRINGS || !arrayMethodIsStrict('join', ',');

  // `Array.prototype.join` method
  // https://tc39.es/ecma262/#sec-array.prototype.join
  $$7({ target: 'Array', proto: true, forced: FORCED }, {
    join: function join(separator) {
      return nativeJoin(toIndexedObject(this), separator === undefined ? ',' : separator);
    }
  });

  var $$6 = _export;
  var $map = arrayIteration.map;
  var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$4;

  var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  // with adding support of @@species
  $$6({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
    map: function map(callbackfn /* , thisArg */) {
      return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var DESCRIPTORS = descriptors;
  var uncurryThis$2 = functionUncurryThis;
  var call = functionCall;
  var fails$2 = fails$s;
  var objectKeys = objectKeys$2;
  var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
  var propertyIsEnumerableModule = objectPropertyIsEnumerable;
  var toObject$1 = toObject$8;
  var IndexedObject = indexedObject;

  // eslint-disable-next-line es/no-object-assign -- safe
  var $assign = Object.assign;
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  var defineProperty = Object.defineProperty;
  var concat = uncurryThis$2([].concat);

  // `Object.assign` method
  // https://tc39.es/ecma262/#sec-object.assign
  var objectAssign = !$assign || fails$2(function () {
    // should have correct order of operations (Edge bug)
    if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, 'a', {
      enumerable: true,
      get: function () {
        defineProperty(this, 'b', {
          value: 3,
          enumerable: false
        });
      }
    }), { b: 2 })).b !== 1) return true;
    // should work with symbols and should have deterministic property order (V8 bug)
    var A = {};
    var B = {};
    // eslint-disable-next-line es/no-symbol -- safe
    var symbol = Symbol();
    var alphabet = 'abcdefghijklmnopqrst';
    A[symbol] = 7;
    alphabet.split('').forEach(function (chr) { B[chr] = chr; });
    return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
  }) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
    var T = toObject$1(target);
    var argumentsLength = arguments.length;
    var index = 1;
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    var propertyIsEnumerable = propertyIsEnumerableModule.f;
    while (argumentsLength > index) {
      var S = IndexedObject(arguments[index++]);
      var keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
      var length = keys.length;
      var j = 0;
      var key;
      while (length > j) {
        key = keys[j++];
        if (!DESCRIPTORS || call(propertyIsEnumerable, S, key)) T[key] = S[key];
      }
    } return T;
  } : $assign;

  var $$5 = _export;
  var assign = objectAssign;

  // `Object.assign` method
  // https://tc39.es/ecma262/#sec-object.assign
  // eslint-disable-next-line es/no-object-assign -- required for testing
  $$5({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign }, {
    assign: assign
  });

  /**
   *
   * @param {*} element
   * @returns
   */
  var getIndex = function getIndex(element) {
    if (!element) {
      return -1;
    }
    var currentElement = element;
    var index = 0;
    while (currentElement.previousElementSibling) {
      index += 1;
      currentElement = currentElement.previousElementSibling;
    }
    return index;
  };

  /**
   * element visible check
   * @param element
   */
  var isVisible = function isVisible(element) {
    return element.offsetWidth !== 0 || element.offsetWidth !== 0 && element.style.opacity !== '0' && element.style.visibility !== 'hidden';
  };

  /**
   * element disable check
   * @param {*} element
   * @returns
   */
  var isDisabled = function isDisabled(element) {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      return true;
    }
    if (element.classList.contains('disabled')) {
      return true;
    }
    if (typeof element.disabled !== 'undefined') {
      return element.disabled;
    }
    return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false';
  };

  /**
   * 엘리먼트에 선언되어있는 data attribute를 오브젝트 형태로 반환
   * UI 컴포넌트에서 data attribute로 속성 값 전달할 떄 사용
   * @param {*} element
   * @returns
   */
  var dataSetToObject = function dataSetToObject(element, dataAttrConfig) {
    var prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var config = {};
    for (var key in dataAttrConfig) {
      if (Object.prototype.hasOwnProperty.call(dataAttrConfig, key)) {
        var attrvalue = element.dataset["".concat(prefix).concat(key.charAt(0).toUpperCase() + key.slice(1))];
        if (attrvalue) {
          if (attrvalue === 'true' || attrvalue === 'false') {
            config[key] = JSON.parse(attrvalue);
          } else {
            config[key] = attrvalue;
          }
        }
      }
    }
    return config;
  };

  /**
   * target으로 받은 엘리먼트를 알아서 반환한다.
   * select, string 판단하여 적절하게..
   * @param {*} target
   */
  var getElement = function getElement(target) {
    if (typeof target === 'string') {
      return document.querySelector(target);
    } else {
      if (target !== null && target !== void 0 && target.jquery) {
        return target[0];
      } else {
        return target;
      }
    }
  };

  /**
   * 포커스 가능한 엘리먼트 반환
   * @param {*} element
   * @returns
   */
  var focusableElements = function focusableElements(element) {
    var focusableElementSelectors = ['a', 'button', 'input', 'textarea', 'select', 'details', '[tabindex]'];
    return [].concat(qsAll(element, focusableElementSelectors.map(function (selector) {
      return "".concat(selector, ":not([tabindex^=\"-\"])");
    }).join(', '))).filter(function (el) {
      return !isDisabled(el) && isVisible(el);
    });
  };

  /**
   * querySelector 반환
   * @param {*} target
   * @param {*} selector
   */
  var qs = function qs(target, selector) {
    return target === null || target === void 0 ? void 0 : target.querySelector(selector);
  };

  /**
   * querySelectorAll 처리하면 NodeList가 아닌 Array 형태로 반환
   * @param {*} target
   * @param {*} selector
   * @returns
   */
  var qsAll = function qsAll(target, selector) {
    return Array.from(target === null || target === void 0 ? void 0 : target.querySelectorAll(selector));
  };

  /**
   * 브라우저의 스크롤바 너비를 구하여 반환한다.
   * @returns
   */
  var getScrollBarWidth = function getScrollBarWidth() {
    var tempDiv = document.createElement('div');
    Object.assign(tempDiv.style, {
      position: 'absolute',
      width: '100%',
      height: "".concat(50, "px"),
      overflow: 'auto'
    });
    tempDiv.innerHTML = '<div style="height:200px;position: relative; width: 100%;"></div>';
    document.body.appendChild(tempDiv);
    var scWidth = tempDiv.offsetWidth - tempDiv.clientWidth;
    document.body.removeChild(tempDiv);
    // const scWidth = window.innerWidth - document.documentElement.clientWidth;
    return scWidth;
  };

  var UI = /*#__PURE__*/function () {
    function UI(element, config) {
      _classCallCheck(this, UI);
      if (!element) {
        this._throwError('option.wrapper is required.');
      }
      this._id = '';
      this._element = getElement(element);
      this._genID(config.id);
      Data.set(this._element, this.constructor.NAME, this);
    }
    _createClass(UI, [{
      key: "init",
      value:
      /**
       * 컴포넌트 초기화
       */
      function init() {
        // override
      }

      /**
       * 컴포넌트 업데이트
       */
    }, {
      key: "update",
      value: function update() {
        // override
      }

      /**
       * 컴포넌트 삭제
       */
    }, {
      key: "destroy",
      value: function destroy() {
        // override
        Data.remove(this._element, this.constructor.NAME);
        this._element = null;
      }

      /**
       * 현재 UI의 id 반환
       * @returns id
       */
    }, {
      key: "getID",
      value: function getID() {
        // 부모 클래스에서 구현
        return this._id;
      }

      /**
       * UI의 아이디를 생성한다.
       * @param {string} name 컴포넌트 이름
       * @param {string} id 컴포넌트 아이디
       */
    }, {
      key: "_genID",
      value: function _genID(id) {
        this._id = id || "".concat(this.constructor.NAME, "-").concat(Math.random().toString(36).substr(2, 9));
      }
    }, {
      key: "_getRandomSerial",
      value: function _getRandomSerial() {
        return "id_".concat(Math.random().toString(36).substr(2, 9));
      }
    }, {
      key: "_eventName",
      value: function _eventName(eventName) {
        return "".concat(eventName, ".").concat(this.constructor.NAME);
      }
    }, {
      key: "_throwError",
      value: function _throwError(message) {
        throw new Error("say! --> ".concat(this.constructor.NAME, ": ").concat(message));
      }
    }, {
      key: "_log",
      value: function _log(message) {
        var _consol;
        (_consol = consol).log.apply(_consol, ["".concat(this.constructor.NAME, ": ")].concat(_toConsumableArray(message)));
      }
    }, {
      key: "_warn",
      value: function _warn(message) {
        console.warn("".concat(this.constructor.NAME, ": ").concat(message));
      }
    }], [{
      key: "get",
      value: function get(element) {
        return Data.get(getElement(element), this.NAME);
      }
    }, {
      key: "getInstance",
      value: function getInstance(element) {
        return Data.get(getElement(element), this.NAME);
      }
    }, {
      key: "getInstances",
      value: function getInstances() {
        return Data.getAll(this.NAME);
      }
    }]);
    return UI;
  }();

  var collection = collection$2;
  var collectionStrong = collectionStrong$2;

  // `Set` constructor
  // https://tc39.es/ecma262/#sec-set-objects
  collection('Set', function (init) {
    return function Set() { return init(this, arguments.length ? arguments[0] : undefined); };
  }, collectionStrong);

  var $$4 = _export;
  var toObject = toObject$8;
  var nativeKeys = objectKeys$2;
  var fails$1 = fails$s;

  var FAILS_ON_PRIMITIVES = fails$1(function () { nativeKeys(1); });

  // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys
  $$4({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
    keys: function keys(it) {
      return nativeKeys(toObject(it));
    }
  });

  var $$3 = _export;
  var $includes = arrayIncludes.includes;
  var fails = fails$s;
  var addToUnscopables = addToUnscopables$2;

  // FF99+ bug
  var BROKEN_ON_SPARSE = fails(function () {
    // eslint-disable-next-line es/no-array-prototype-includes -- detection
    return !Array(1).includes();
  });

  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  $$3({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
    includes: function includes(el /* , fromIndex = 0 */) {
      return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables('includes');

  var isObject = isObject$e;
  var classof = classofRaw$2;
  var wellKnownSymbol$1 = wellKnownSymbol$k;

  var MATCH$1 = wellKnownSymbol$1('match');

  // `IsRegExp` abstract operation
  // https://tc39.es/ecma262/#sec-isregexp
  var isRegexp = function (it) {
    var isRegExp;
    return isObject(it) && ((isRegExp = it[MATCH$1]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
  };

  var isRegExp = isRegexp;

  var $TypeError = TypeError;

  var notARegexp = function (it) {
    if (isRegExp(it)) {
      throw $TypeError("The method doesn't accept regular expressions");
    } return it;
  };

  var wellKnownSymbol = wellKnownSymbol$k;

  var MATCH = wellKnownSymbol('match');

  var correctIsRegexpLogic = function (METHOD_NAME) {
    var regexp = /./;
    try {
      '/./'[METHOD_NAME](regexp);
    } catch (error1) {
      try {
        regexp[MATCH] = false;
        return '/./'[METHOD_NAME](regexp);
      } catch (error2) { /* empty */ }
    } return false;
  };

  var $$2 = _export;
  var uncurryThis$1 = functionUncurryThis;
  var notARegExp$1 = notARegexp;
  var requireObjectCoercible$1 = requireObjectCoercible$8;
  var toString$1 = toString$8;
  var correctIsRegExpLogic$1 = correctIsRegexpLogic;

  var stringIndexOf = uncurryThis$1(''.indexOf);

  // `String.prototype.includes` method
  // https://tc39.es/ecma262/#sec-string.prototype.includes
  $$2({ target: 'String', proto: true, forced: !correctIsRegExpLogic$1('includes') }, {
    includes: function includes(searchString /* , position = 0 */) {
      return !!~stringIndexOf(
        toString$1(requireObjectCoercible$1(this)),
        toString$1(notARegExp$1(searchString)),
        arguments.length > 1 ? arguments[1] : undefined
      );
    }
  });

  var $$1 = _export;
  var uncurryThis = functionUncurryThisClause;
  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
  var toLength = toLength$4;
  var toString = toString$8;
  var notARegExp = notARegexp;
  var requireObjectCoercible = requireObjectCoercible$8;
  var correctIsRegExpLogic = correctIsRegexpLogic;

  // eslint-disable-next-line es/no-string-prototype-startswith -- safe
  var nativeStartsWith = uncurryThis(''.startsWith);
  var stringSlice = uncurryThis(''.slice);
  var min = Math.min;

  var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');
  // https://github.com/zloirock/core-js/pull/702
  var MDN_POLYFILL_BUG = !CORRECT_IS_REGEXP_LOGIC && !!function () {
    var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
    return descriptor && !descriptor.writable;
  }();

  // `String.prototype.startsWith` method
  // https://tc39.es/ecma262/#sec-string.prototype.startswith
  $$1({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
    startsWith: function startsWith(searchString /* , position = 0 */) {
      var that = toString(requireObjectCoercible(this));
      notARegExp(searchString);
      var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
      var search = toString(searchString);
      return nativeStartsWith
        ? nativeStartsWith(that, search, index)
        : stringSlice(that, index, index + search.length) === search;
    }
  });

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.1.3): dom/event-handler.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  //import { getjQuery } from '../util/index';

  /**
   * Constants
   */
  var getjQuery = function getjQuery() {
    var _window = window,
      jQuery = _window.jQuery;
    if (jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
      return jQuery;
    }
    return null;
  };
  var namespaceRegex = /[^.]*(?=\..*)\.|.*/;
  var stripNameRegex = /\..*/;
  var stripUidRegex = /::\d+$/;
  var eventRegistry = {}; // Events storage
  var uidEvent = 1;
  var customEvents = {
    mouseenter: 'mouseover',
    mouseleave: 'mouseout'
  };
  var customEventsRegex = /^(mouseenter|mouseleave)/i;
  var nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'input', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll', 'storage']);

  /**
   * Private methods
   */

  function getUidEvent(element, uid) {
    return uid && "".concat(uid, "::").concat(uidEvent++) || element.uidEvent || uidEvent++;
  }
  function _getEvent(element) {
    var uid = getUidEvent(element);
    element.uidEvent = uid;
    eventRegistry[uid] = eventRegistry[uid] || {};
    return eventRegistry[uid];
  }
  function bootstrapHandler(element, fn) {
    return function handler(event) {
      event.delegateTarget = element;
      if (handler.oneOff) {
        EventHandler.off(element, event.type, fn);
      }
      return fn.apply(element, [event]);
    };
  }
  function bootstrapDelegationHandler(element, selector, fn) {
    return function handler(event) {
      var domElements = element.querySelectorAll(selector);
      for (var target = event.target; target && target !== this; target = target.parentNode) {
        for (var i = domElements.length; i--;) {
          if (domElements[i] === target) {
            event.delegateTarget = target;
            if (handler.oneOff) {
              EventHandler.off(element, event.type, selector, fn);
            }
            return fn.apply(target, [event]);
          }
        }
      }

      // To please ESLint
      return null;
    };
  }
  function findHandler(events, handler) {
    var delegationSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var uidEventList = Object.keys(events);
    for (var _i = 0, _uidEventList = uidEventList; _i < _uidEventList.length; _i++) {
      var _uidEvent = _uidEventList[_i];
      var event = events[_uidEvent];
      if (event.originalHandler === handler && event.delegationSelector === delegationSelector) {
        return event;
      }
    }
    return null;
  }
  function normalizeParams(originalTypeEvent, handler, delegationFn) {
    var delegation = typeof handler === 'string';
    var originalHandler = delegation ? delegationFn : handler;
    var typeEvent = getTypeEvent(originalTypeEvent);
    var isNative = nativeEvents.has(typeEvent);
    if (!isNative) {
      typeEvent = originalTypeEvent;
    }
    return [delegation, originalHandler, typeEvent];
  }
  function addHandler(element, originalTypeEvent, handler, delegationFn, oneOff) {
    if (typeof originalTypeEvent !== 'string' || !element) {
      return;
    }
    if (!handler) {
      handler = delegationFn;
      delegationFn = null;
    }

    // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
    // this prevents the handler from being dispatched the same way as mouseover or mouseout does
    if (customEventsRegex.test(originalTypeEvent)) {
      var wrapFn = function wrapFn(fn) {
        return function (event) {
          if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
            return fn.call(this, event);
          }
        };
      };
      if (delegationFn) {
        delegationFn = wrapFn(delegationFn);
      } else {
        handler = wrapFn(handler);
      }
    }
    var _normalizeParams = normalizeParams(originalTypeEvent, handler, delegationFn),
      _normalizeParams2 = _slicedToArray(_normalizeParams, 3),
      delegation = _normalizeParams2[0],
      originalHandler = _normalizeParams2[1],
      typeEvent = _normalizeParams2[2];
    var events = _getEvent(element);
    var handlers = events[typeEvent] || (events[typeEvent] = {});
    var previousFn = findHandler(handlers, originalHandler, delegation ? handler : null);
    if (previousFn) {
      previousFn.oneOff = previousFn.oneOff && oneOff;
      return;
    }
    var uid = getUidEvent(originalHandler, originalTypeEvent.replace(namespaceRegex, ''));
    var fn = delegation ? bootstrapDelegationHandler(element, handler, delegationFn) : bootstrapHandler(element, handler);
    fn.delegationSelector = delegation ? handler : null;
    fn.originalHandler = originalHandler;
    fn.oneOff = oneOff;
    fn.uidEvent = uid;
    handlers[uid] = fn;
    element.addEventListener(typeEvent, fn, delegation);
  }
  function removeHandler(element, events, typeEvent, handler, delegationSelector) {
    var fn = findHandler(events[typeEvent], handler, delegationSelector);
    if (!fn) {
      return;
    }
    element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
    delete events[typeEvent][fn.uidEvent];
  }
  function removeNamespacedHandlers(element, events, typeEvent, namespace) {
    var storeElementEvent = events[typeEvent] || {};
    for (var _i2 = 0, _Object$keys = Object.keys(storeElementEvent); _i2 < _Object$keys.length; _i2++) {
      var handlerKey = _Object$keys[_i2];
      if (handlerKey.includes(namespace)) {
        var event = storeElementEvent[handlerKey];
        removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
      }
    }
  }
  function getTypeEvent(event) {
    // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
    event = event.replace(stripNameRegex, '');
    return customEvents[event] || event;
  }
  var EventHandler = {
    on: function on(element, event, handler, delegationFn) {
      addHandler(element, event, handler, delegationFn, false);
      return element;
    },
    one: function one(element, event, handler, delegationFn) {
      addHandler(element, event, handler, delegationFn, true);
      return element;
    },
    off: function off(element, originalTypeEvent, handler, delegationFn) {
      if (typeof originalTypeEvent !== 'string' || !element) {
        return;
      }
      var _normalizeParams3 = normalizeParams(originalTypeEvent, handler, delegationFn),
        _normalizeParams4 = _slicedToArray(_normalizeParams3, 3),
        delegation = _normalizeParams4[0],
        originalHandler = _normalizeParams4[1],
        typeEvent = _normalizeParams4[2];
      var inNamespace = typeEvent !== originalTypeEvent;
      var events = _getEvent(element);
      var isNamespace = originalTypeEvent.startsWith('.');
      if (typeof originalHandler !== 'undefined') {
        // Simplest case: handler is passed, remove that listener ONLY.
        if (!events || !events[typeEvent]) {
          return;
        }
        removeHandler(element, events, typeEvent, originalHandler, delegation ? handler : null);
        return;
      }
      if (isNamespace) {
        for (var _i3 = 0, _Object$keys2 = Object.keys(events); _i3 < _Object$keys2.length; _i3++) {
          var elementEvent = _Object$keys2[_i3];
          removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
        }
      }
      var storeElementEvent = events[typeEvent] || {};
      for (var _i4 = 0, _Object$keys3 = Object.keys(storeElementEvent); _i4 < _Object$keys3.length; _i4++) {
        var keyHandlers = _Object$keys3[_i4];
        var handlerKey = keyHandlers.replace(stripUidRegex, '');
        if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
          var event = storeElementEvent[keyHandlers];
          removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
        }
      }
    },
    trigger: function trigger(element, event, args) {
      if (typeof event !== 'string' || !element) {
        return null;
      }
      var $ = getjQuery();
      var typeEvent = getTypeEvent(event);
      var inNamespace = event !== typeEvent;
      var isNative = nativeEvents.has(typeEvent);
      var jQueryEvent;
      var bubbles = true;
      var nativeDispatch = true;
      var defaultPrevented = false;
      var evt = null;
      if (inNamespace && $) {
        jQueryEvent = $.Event(event, args);
        $(element).trigger(jQueryEvent);
        bubbles = !jQueryEvent.isPropagationStopped();
        nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
        defaultPrevented = jQueryEvent.isDefaultPrevented();
      }
      if (isNative) {
        evt = document.createEvent('HTMLEvents');
        evt.initEvent(typeEvent, bubbles, true);
      } else {
        evt = new CustomEvent(event, {
          bubbles: bubbles,
          cancelable: true
        });
      }

      // merge custom information in our event
      if (typeof args !== 'undefined') {
        var _loop = function _loop() {
          var key = _Object$keys4[_i5];
          Object.defineProperty(evt, key, {
            get: function get() {
              return args[key];
            }
          });
        };
        for (var _i5 = 0, _Object$keys4 = Object.keys(args); _i5 < _Object$keys4.length; _i5++) {
          _loop();
        }
      }
      if (defaultPrevented) {
        evt.preventDefault();
      }
      if (nativeDispatch) {
        element.dispatchEvent(evt);
      }
      if (evt.defaultPrevented && typeof jQueryEvent !== 'undefined') {
        jQueryEvent.preventDefault();
      }
      return evt;
    },
    getEvent: function getEvent(element) {
      return _getEvent(element);
    }
  };

  var NAME$6 = 'ui.accordion';
  var dataAttrOptions$2 = {
    defaultsOpen: '',
    animate: true,
    toggle: true,
    multiple: false,
    openClass: 'is-active'
  };
  var defaultOptions$4 = _objectSpread2(_objectSpread2({}, dataAttrOptions$2), {}, {
    opennerSelector: "[aria-controls]",
    contentWrap: null,
    contentSelector: null,
    className: {
      expand: 'expand',
      expanding: 'expanding',
      expanded: 'expanded'
    }
  });
  var Accordion = /*#__PURE__*/function (_UI) {
    _inherits(Accordion, _UI);
    var _super = _createSuper(Accordion);
    function Accordion(element) {
      var _this;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      _classCallCheck(this, Accordion);
      _this = _super.call(this, element, options);
      _this._initOptions(options);
      _this._animating = false;
      _this._current = {
        header: null,
        headers: [],
        content: null
      };
      _this._before = {
        header: null,
        headers: [],
        content: null
      };
      return _this;
    }
    _createClass(Accordion, [{
      key: "updateOption",
      value:
      /**
       * 옵션값을 업데이트합니다.
       * @param {*} options
       */
      function updateOption(options) {
        this._options = _objectSpread2(_objectSpread2({}, this._options), options);
      }
    }, {
      key: "open",
      value: function open(target) {
        var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        this._selectCurrent(target);
        this._open(force);
      }
    }, {
      key: "close",
      value: function close(target) {
        this._selectCurrent(target);
        this._close();
      }
    }, {
      key: "init",
      value: function init() {
        var isDefault = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        this._initEvents();
        this._current = null;
        this._before = null;
        isDefault && this._defaultActive();
        return this;
      }
    }, {
      key: "_defaultActive",
      value: function _defaultActive() {
        var _this2 = this;
        // 기본으로 열릴 때 애니메이션을 생략한다.
        var beforeState = this._options.animate;
        if (this._options.defaultsOpen !== '') {
          this._options.animate = false;
          var headerIndexList = this._options.defaultsOpen.split(',');
          Array.from(headerIndexList).forEach(function (n) {
            _this2.open(n);
            _this2._animating = false;
          });
          this._options.animate = beforeState;
          return;
        }
        var headers = qsAll(this._element, this._options.opennerSelector);
        this._options.animate = false;
        headers.forEach(function (el) {
          if (el.getAttribute('aria-expanded') === 'true') {
            _this2.open(el, true);
            _this2._animating = false;
          }
        });
        this._options.animate = beforeState;
      }
    }, {
      key: "getElement",
      value: function getElement() {
        return this._element;
      }

      //오픈 함수
    }, {
      key: "_open",
      value: function _open() {
        var _this3 = this;
        var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var _this$_options = this._options,
          openClass = _this$_options.openClass,
          animate = _this$_options.animate,
          multiple = _this$_options.multiple,
          className = _this$_options.className;
        var possibleAnimation = isVisible(this._element);
        if (this._animating === true && animate === true) return;
        var _this$_current = this._current,
          header = _this$_current.header,
          headers = _this$_current.headers,
          content = _this$_current.content;
        if (force === false && header.classList.contains(openClass)) {
          this._animating = false;
          this._before = {
            header: header,
            headers: headers,
            content: content
          };
          return;
        }
        if (headers && headers.length > 1) {
          headers.forEach(function (el) {
            return el.classList.add(openClass);
          });
        } else {
          header.classList.add(openClass);
        }
        Accordion.HOOK.OPEN && Accordion.HOOK.OPEN(this);
        this._dispatch(Accordion.EVENT.OPEN, {
          component: this,
          current: this._current,
          eventType: Accordion.EVENT.OPEN
        });
        EventHandler.trigger(document, Accordion.EVENT.ALL, {
          component: this,
          eventType: Accordion.EVENT.OPEN
        });
        if (animate && possibleAnimation) {
          this._animating = false;
          content.classList.add(className.expanding);
          content.classList.remove(className.expand);
          content.style.height = "".concat(content.scrollHeight, "px");
          EventHandler.off(content, 'transitionend');
          EventHandler.one(content, 'transitionend', function () {
            content.classList.remove(className.expanding);
            content.classList.add(className.expand);
            content.classList.add(className.expanded);
            content.style.height = '';
            _this3._animating = false;
            Accordion.HOOK.OPENED && Accordion.HOOK.OPENED(_this3);
            _this3._dispatch(Accordion.EVENT.OPENED, {
              component: _this3,
              current: _this3._current,
              eventType: Accordion.EVENT.OPENED
            });
            EventHandler.trigger(document, Accordion.EVENT.ALL, {
              component: _this3,
              eventType: Accordion.EVENT.OPENED
            });
          });
        } else {
          content.classList.add(className.expanded);
          content.classList.add(className.expand);
          if (headers && headers.length > 1) {
            headers.forEach(function (el) {
              return el.classList.add(openClass);
            });
          } else {
            header.classList.add(openClass);
          }
          Accordion.HOOK.OPENED && Accordion.HOOK.OPENED(this);
          this._dispatch(Accordion.EVENT.OPENED, {
            component: this,
            current: this._current,
            eventType: Accordion.EVENT.OPENED
          });
          EventHandler.trigger(document, Accordion.EVENT.ALL, {
            component: this,
            eventType: Accordion.EVENT.OPENED
          });
        }
        if (multiple !== true) {
          if (this._before && this._before.header !== this._current.header) {
            this._animating = false;
            this._close(this._before);
          }
        }
        this._before = {
          header: header,
          headers: headers,
          content: content
        };
        this._aria(this._current, true);
      }

      /**
       * @private
       * 아코디언 닫기
       * @param {*} target
       * @returns void
       */
    }, {
      key: "_close",
      value: function _close(target) {
        var _this4 = this;
        var _this$_options2 = this._options,
          openClass = _this$_options2.openClass,
          animate = _this$_options2.animate,
          className = _this$_options2.className;
        if (this._animating === true && animate === true) return;
        var closeTarget = !!target ? target : this._current;
        if (!closeTarget || !closeTarget.header) return;
        var header = closeTarget.header,
          headers = closeTarget.headers,
          content = closeTarget.content;
        var possibleAnimation = isVisible(content);
        if (!header.classList.contains(openClass)) {
          this._animating = false;
          return;
        }
        if (headers && headers.length > 1) {
          headers.forEach(function (el) {
            return el.classList.remove(openClass);
          });
        } else {
          header.classList.remove(openClass);
        }
        Accordion.HOOK.CLOSE && Accordion.HOOK.CLOSE(this);
        this._dispatch(Accordion.EVENT.CLOSE, {
          component: this,
          current: closeTarget,
          eventType: Accordion.EVENT.CLOSE
        });
        EventHandler.trigger(document, Accordion.EVENT.ALL, {
          component: this,
          eventType: Accordion.EVENT.CLOSE
        });
        this._aria(closeTarget, false);
        if (animate && possibleAnimation) {
          this._animating = false;
          content.style.height = "".concat(content.getBoundingClientRect().height, "px");
          content.heightCache = content.offsetHeight;
          content.style.height = "";
          content.classList.add(className.expanding);
          content.classList.remove(className.expand);
          content.classList.remove(className.expanded);
          EventHandler.off(content, 'transitionend');
          EventHandler.one(content, 'transitionend', function () {
            content.classList.remove(className.expanding);
            content.classList.add(className.expand);
            _this4._animating = false;
            Accordion.HOOK.CLOSED && Accordion.HOOK.CLOSED(_this4);
            _this4._dispatch(Accordion.EVENT.CLOSED, {
              component: _this4,
              current: closeTarget,
              eventType: Accordion.EVENT.CLOSED
            });
            EventHandler.trigger(document, Accordion.EVENT.ALL, {
              component: _this4,
              eventType: Accordion.EVENT.CLOSED
            });
          });
          return;
        } else {
          content.classList.remove(className.expanding);
          content.classList.remove(className.expanded);
          content.classList.add(className.expand);
          Accordion.HOOK.CLOSED && Accordion.HOOK.CLOSED(this);
          this._dispatch(Accordion.EVENT.CLOSED, {
            component: this,
            current: closeTarget,
            eventType: Accordion.EVENT.CLOSED
          });
          // EventHandler.trigger(document, Accordion.EVENT.ALL, {
          //   component: this,
          //   eventType: Accordion.EVENT.CLOSED,
          // });
        }
      }

      /**
       * @private
       * 현제 아이템을 선택 _current에 할당
       * @param {*} target
       * @returns void
       */
    }, {
      key: "_selectCurrent",
      value: function _selectCurrent(target) {
        // 인덱스
        if (!isNaN(target)) {
          var accHeaders = qsAll(this._element, this._options.opennerSelector);
          this._current = {
            header: accHeaders[target],
            content: this._getContent(accHeaders[target])
          };
        } else {
          // 셀렉터 스트링
          if (typeof target === 'string') {
            var header = qs(this._element, target);
            this._current = {
              header: header,
              content: this._getContent(header)
            };
          } else {
            // 엘리먼트
            var _header = getElement(target);
            this._current = {
              header: _header,
              content: this._getContent(_header)
            };
          }
        }
      }
    }, {
      key: "_initEvents",
      value: function _initEvents() {
        var _this5 = this;
        EventHandler.on(this._element, _get(_getPrototypeOf(Accordion.prototype), "_eventName", this).call(this, 'click'), function (event) {
          if (!event.target.tagName.match(/^A$|AREA|INPUT|TEXTAREA|SELECT|BUTTON|LABEL/gim)) {
            event.preventDefault();
          }
          var _this5$_options = _this5._options,
            toggle = _this5$_options.toggle,
            openClass = _this5$_options.openClass,
            opennerSelector = _this5$_options.opennerSelector;
          var target = event.target.closest(opennerSelector);
          if (target) {
            var container = target.closest('[data-autoset="accordion"]');
            if (container !== _this5._element) return;
            _this5._selectContentBySelector(target, event.target);
            if (toggle) {
              if (_this5._current.header.classList.contains(openClass)) {
                _this5._close(_this5._current);
              } else {
                _this5._open();
              }
            } else {
              if (!_this5._current.header.classList.contains(openClass)) {
                _this5._open();
              }
            }
          }
        });
      }
    }, {
      key: "_selectContentBySelector",
      value: function _selectContentBySelector(target) {
        var opennerSelector = this._options.opennerSelector;
        if (opennerSelector === '[aria-controls]') {
          var controlsName = target.getAttribute("aria-controls");
          var controls = qsAll(document, "[aria-controls=\"".concat(controlsName, "\"]"));
          this._current = {
            header: target,
            headers: controls,
            content: this._getContent(target)
          };
        } else {
          this._current = {
            header: target,
            headers: [],
            content: this._getContent(target)
          };
        }
      }
    }, {
      key: "_getContent",
      value: function _getContent(target) {
        if (!target) {
          _get(_getPrototypeOf(Accordion.prototype), "_warn", this).call(this, "[".concat(target, "] not found!"));
          return;
        }
        var _this$_options3 = this._options,
          opennerSelector = _this$_options3.opennerSelector,
          contentSelector = _this$_options3.contentSelector,
          contentWrap = _this$_options3.contentWrap;
        var content;
        if (opennerSelector === '[aria-controls]') {
          var _contentName = this._getAttributeBySelector(target, this._options.opennerSelector);
          content = qs(document, "#".concat(_contentName));
        } else {
          if (!contentWrap) {
            var cWrap = target.closest("[data-autoset=\"accordion\"]");
            if (cWrap) {
              content = qs(cWrap, contentSelector);
            }
          } else {
            var _cWrap = target.closest(contentWrap);
            if (_cWrap) {
              content = qs(_cWrap, contentSelector);
            }
          }
        }
        if (!content) {
          _get(_getPrototypeOf(Accordion.prototype), "_warn", this).call(this, "[".concat(contentName, "] does not match any content element! "));
        }
        return content;
      }
    }, {
      key: "destory",
      value: function destory() {
        this._removeEvents();
        this._removeAttributes();
      }
    }, {
      key: "_removeEvents",
      value: function _removeEvents() {
        EventHandler.off(this._element, _get(_getPrototypeOf(Accordion.prototype), "_eventName", this).call(this, 'click'));
      }
    }, {
      key: "_removeAttributes",
      value: function _removeAttributes() {
        var _this6 = this;
        var controls = qsAll(this._element, this._options.opennerSelector);
        var _this$_options4 = this._options,
          openClass = _this$_options4.openClass,
          className = _this$_options4.className;
        controls.forEach(function (el) {
          var content = _this6._getContent(el);
          if (content) {
            if (content.classList.contains(className.expanded)) {
              content.classList.remove(className.expanded);
              content.setAttribute('aria-hidden', true);
              //content.setAttribute("tabIndex", -1);
            }
          }

          el.setAttribute('aria-expanded', false);
          if (el.classList.contains(openClass)) {
            el.classList.remove(openClass);
          }
        });
      }

      /**
       * @private
       * 웹 접근성 aria 속성 및 tabindex 설정
       * @param {*} target
       * @param {*} isActive
       * @returns void
       */
    }, {
      key: "_aria",
      value: function _aria(target) {
        var isActive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var toggle = this._options.toggle;
        var header = target.header,
          headers = target.headers,
          content = target.content;
        var isSelected = isActive ? true : false;
        var isHidden = isActive ? false : true;
        if (headers && headers.length > 1) {
          headers.forEach(function (el) {
            return el.setAttribute('aria-expanded', isSelected);
          });
        } else {
          header.setAttribute('aria-expanded', isSelected);
        }
        if (toggle === false) {
          if (headers && headers.length > 1) {
            headers.forEach(function (el) {
              return el.setAttribute('aria-disabled', isActive);
            });
          } else {
            header.setAttribute('aria-disabled', isActive);
          }
        }
        content.setAttribute('aria-hidden', isHidden);
        //content.setAttribute("tabIndex", tabIndex);
      }
    }, {
      key: "_getAttributeBySelector",
      value: function _getAttributeBySelector(target, selector) {
        return target.getAttribute(selector.replace('[', '').replace(']', ''));
      }
    }, {
      key: "_dispatch",
      value: function _dispatch(event, params) {
        EventHandler.trigger(this._element, event, params);
      }
    }, {
      key: "_initOptions",
      value: function _initOptions(options) {
        this._options = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, defaultOptions$4), Accordion.GLOBAL_OPTIONS), options), dataSetToObject(this._element, dataAttrOptions$2, Accordion.DATA_NAME));
      }
    }], [{
      key: "EVENT",
      get: function get() {
        return {
          OPEN: "open.".concat(NAME$6),
          OPENED: "opend.".concat(NAME$6),
          CLOSE: "close.".concat(NAME$6),
          CLOSED: "closed.".concat(NAME$6)
        };
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$6;
      }

      /**
       * 초기화 되어있는 모든 드롭다운메뉴 옵션을 업데이트합니다.
       * @param {*} options
       */
    }, {
      key: "updateOption",
      value: function updateOption(options) {
        var insList = Accordion.getInstances();
        if (insList.length > 0) {
          insList.forEach(function (ins) {
            ins.updateOption(_objectSpread2({}, options));
          });
        }
      }
    }]);
    return Accordion;
  }(UI);
  _defineProperty(Accordion, "GLOBAL_OPTIONS", {});
  _defineProperty(Accordion, "DATA_NAME", 'accordion');
  _defineProperty(Accordion, "DATA_TRIGGER_NAME", "[data-autoset=\"accordion\"]");
  _defineProperty(Accordion, "HOOK", {
    OPEN: null,
    OPENED: null,
    CLOSE: null,
    CLOSED: null
  });

  var NAME$5 = 'ui.tab';
  var defaultOptions$3 = {
    activeIndex: 0
  };
  var Tab = /*#__PURE__*/function (_UI) {
    _inherits(Tab, _UI);
    var _super = _createSuper(Tab);
    function Tab(element) {
      var _this;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      _classCallCheck(this, Tab);
      _this = _super.call(this, element, options);
      _this._initOptions(options);
      _this._element = element;
      _this._tablist = null;
      return _this;
    }
    _createClass(Tab, [{
      key: "_initVars",
      value: function _initVars() {
        this._tablist = this._element;
      }
    }, {
      key: "_initEvent",
      value: function _initEvent() {
        var _this2 = this;
        EventHandler.on(this._tablist, 'click', function (event) {
          if (event.target.closest("[data-autoset=\"tab\"]") === _this2._tablist) {
            _this2._clickEventHandler(event);
          }
        });
      }
    }, {
      key: "_initOptions",
      value: function _initOptions(options) {
        this._options = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, defaultOptions$3), Tab.GLOBAL_OPTIONS), options), dataSetToObject(this._element, Tab.DATA_NAME));
      }
    }, {
      key: "_clickEventHandler",
      value: function _clickEventHandler(event) {
        var target = event.target;
        if (!target) return;
        if (target.getAttribute('role') === 'tab') {
          event.preventDefault();
          this._options.activeIndex = _toConsumableArray(this._tablist.children[0].querySelectorAll('li')).indexOf(target.parentNode);
          this.select();
        }
      }
    }, {
      key: "init",
      value: function init() {
        this._initVars();
        this._initEvent();
        this._options.activeIndex = 0;
        return this;
      }
    }, {
      key: "select",
      value: function select(activeIndex) {
        var _this3 = this;
        this._options.activeIndex = activeIndex || activeIndex === 0 ? activeIndex : this._options.activeIndex;
        this._tablist.children[0].querySelectorAll('li').forEach(function (tab, index) {
          var target = tab.querySelector('a');
          target.setAttribute('aria-selected', '');
          if (index === _this3._options.activeIndex) {
            target.setAttribute('aria-selected', true);
            _toConsumableArray(_this3._tablist.children).filter(function (item) {
              if (item.classList.contains('tabs__panel')) {
                item.classList.remove('is-active');
              }
            });
            _this3._tablist.querySelector(target.getAttribute('href')).classList.add('is-active');
          }
        });

        // 탭 변경이벤트시 trigger
        EventHandler.trigger(this._tablist, Tab.EVENT.CHANGED, {
          detail: {
            activeIndex: this._options.activeIndex
          }
        });
      }
    }, {
      key: "destroy",
      value: function destroy() {
        EventHandler.off(this._tablist, 'click', this._clickEventHandler);
        this._options.activeIndex = null;
        this._options = null;
        _get(_getPrototypeOf(Tab.prototype), "destroy", this).call(this);
      }
    }, {
      key: "getElement",
      value: function getElement() {
        return this._element;
      }
    }], [{
      key: "EVENT",
      get: function get() {
        return {
          CHANGED: "".concat(NAME$5, ".changed")
        };
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$5;
      }

      /**
       * 다이얼로그 객체 반환
       * 인스턴스 반환
       * @param {*} element 다이얼로그 엘리먼트
       * @param {*} initialize 초기화되지 않은 대상에 대해서 초기화 후 인스턴스를 반환할지 여부
       * @returns
       */
    }, {
      key: "get",
      value: function get(element) {
        var initialize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var _el = getElement(element);
        if (!_el) {
          console.warn("\n  warning from [".concat(NAME$5, "] ---> [element] not found.\n\n"));
          return;
        }
        var instance = Tab.getInstance(_el);
        if (!instance && initialize) {
          instance = new Tab(_el);
          instance.init();
        }
        return instance;
      }
    }]);
    return Tab;
  }(UI);
  _defineProperty(Tab, "GLOBAL_OPTIONS", {});
  _defineProperty(Tab, "DATA_NAME", 'tab');

  // eslint-disable-next-line no-unused-vars
  var NAME$4 = 'ui.select';
  var OPENNER = "[data-select=\"btn\"]";
  var VALUE_HOLDER = "[data-select=\"value\"]";
  var SELECT_AREA = "[data-select=\"text\"]";
  var LIST_WRAP = "[data-select=\"list\"]";
  var AREA = "[data-select=\"option\"]";
  var dataAttrOptions$1 = {
    openClass: 'open',
    closeClass: 'close',
    animate: true
  };
  var defaultOptions$2 = _objectSpread2(_objectSpread2({}, dataAttrOptions$1), {}, {
    directionChange: null
  });
  var Select = /*#__PURE__*/function (_UI) {
    _inherits(Select, _UI);
    var _super = _createSuper(Select);
    function Select(element) {
      var _this;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      _classCallCheck(this, Select);
      _this = _super.call(this, element, options);
      // 옵션 엘리먼트리스트 반환
      _defineProperty(_assertThisInitialized(_this), "_getOptions", function () {
        return qsAll(_this._box, "button");
      });
      _this._initOptions(options);
      return _this;
    }
    _createClass(Select, [{
      key: "value",
      value:
      /**
       * 선택된 항목 value 반환
       * @param {*} value
       */
      function value() {
        return this._valueHolder.getAttribute('value');
      }
      /**
       * 선택된 항목 텍스트 반환
       * @param {*} value
       * @returns
       */
    }, {
      key: "text",
      value: function text() {
        var _this$_currentItem;
        if (this._currentItem) return (_this$_currentItem = this._currentItem) === null || _this$_currentItem === void 0 ? void 0 : _this$_currentItem.textContent;
        return null;
      }

      /**
       * 선택된 항목 인덱스 반환
       * @returns
       */
    }, {
      key: "index",
      value: function index() {
        return getIndex(this._currentItem);
      }
    }, {
      key: "_open",
      value: function _open() {
        if (this._isDisable) return;
        this._isOpen = true;
        this._element.classList.add(this._options.openClass);
        this._openner.setAttribute('aria-expanded', true);
      }

      /**
       * disable 처리
       * @param {*} isDisable
       */
    }, {
      key: "disable",
      value: function disable(isDisable) {
        this._isDisable = isDisable;
        if (this._isDisable) {
          this._openner.setAttribute('aria-disabled', 'true');
          this._openner.setAttribute('tabindex', -1);
        } else {
          this._openner.removeAttribute('aria-disabled');
          this._openner.setAttribute('tabindex', 0);
        }
      }

      /**
       * 현재 선택된 값 반환, 또는 선택
       * @returns
       */
    }, {
      key: "selectValue",
      value: function selectValue(value) {
        this._optionItems = this._getOptions();
        for (var i = 0; i < this._optionItems.length; i++) {
          var item = this._optionItems[i];
          if (item.getAttribute('value') === String(value)) {
            this._currentItem = item;
            break;
          }
        }
        this._select(this._currentItem, true);
      }

      /**
       * text를 통해 업데이트
       * @param {*} value
       */
    }, {
      key: "selectText",
      value: function selectText(value) {
        this._optionItems = this._getOptions();
        for (var i = 0; i < this._optionItems.length; i++) {
          var item = this._optionItems[i];
          if (item.textContent === String(value)) {
            this._currentItem = item;
            break;
          }
        }
        this._select(this._currentItem, true);
      }

      /**
       * 인덱스로 선택
       * @param {*} index
       * @returns
       */
    }, {
      key: "selectIndex",
      value: function selectIndex(index) {
        this._optionItems = this._getOptions();
        this._currentIndex = this._optionItems[index];
        this._select(this._currentIndex, true);
        return this._currentIndex;
      }
    }, {
      key: "setDefault",
      value: function setDefault() {
        this._currentIndex = -1;
        this._currentItem = undefined;
        var selectedItem = this._element.querySelector('[aria-selected="true"]');
        this._valueHolder.removeAttribute('value');
        this._valueHolder.removeAttribute('text');
        if (selectedItem) selectedItem.removeAttribute('aria-selected');
        var btn = this._element.querySelector('[data-empty]');
        btn.innerHTML = '';
      }
    }, {
      key: "destroy",
      value: function destroy() {
        EventHandler.off(this._element, _get(_getPrototypeOf(Select.prototype), "_eventName", this).call(this, 'click'));
        EventHandler.off(this._element, _get(_getPrototypeOf(Select.prototype), "_eventName", this).call(this, 'focusin'));
        EventHandler.off(this._element, _get(_getPrototypeOf(Select.prototype), "_eventName", this).call(this, 'focusout'));
        EventHandler.off(this._element, _get(_getPrototypeOf(Select.prototype), "_eventName", this).call(this, 'keydown'));
        this._childObserver.disconnect();
        this._childObserver = null;
        this._valueObserver.disconnect();
        this._valueObserver = null;
      }
    }, {
      key: "_close",
      value: function _close() {
        var goFocus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        this._isOpen = false;
        this._element.classList.remove(this._options.openClass);
        EventHandler.trigger(this._element, Select.EVENT.CLOSE);
        this._openner.setAttribute('aria-expanded', false);
        if (goFocus) {
          this._openner.focus();
        }
      }
    }, {
      key: "_select",
      value: function _select(item) {
        var _this2 = this;
        // this._valueObserverState(false);
        if (!item || this._isDisable && isForce === false) return;
        this._optionItems.forEach(function (el, i) {
          // 현재 인덱스 처리
          /**
           * @todo 같은 속성 내용으로 option이 설정되면 이 로직 변경필요
           */
          if (el === item) {
            _this2._currentIndex = i;
          }
          el.removeAttribute('aria-selected');
        });
        this._currentItem = item;
        this._currentItem.setAttribute('aria-selected', true);
        this._selectArea.innerHTML = this._currentItem.innerHTML;
        this._valueHolder.value = this._currentItem.getAttribute('value');
        this._valueHolder.setAttribute('text', this._currentItem.textContent);
        this._element.value = this._currentItem.textContent;
        this._valueObserverState(true);
      }
    }, {
      key: "_toggle",
      value: function _toggle() {
        if (this._element.classList.contains(this._options.openClass)) {
          this._close();
        } else {
          this._open();
        }
      }
    }, {
      key: "init",
      value: function init() {
        this._initVars();
        this._initEvents();
        this._select(this._currentItem, true, true);
        return this;
      }
    }, {
      key: "_initEvents",
      value: function _initEvents() {
        var _this3 = this;
        EventHandler.on(this._element, _get(_getPrototypeOf(Select.prototype), "_eventName", this).call(this, 'focusin'), function () {
          return _this3._setTimer(false);
        });
        EventHandler.on(this._element, _get(_getPrototypeOf(Select.prototype), "_eventName", this).call(this, 'focusout'), function () {
          return _this3._setTimer(true);
        });
        EventHandler.on(this._element, _get(_getPrototypeOf(Select.prototype), "_eventName", this).call(this, 'click'), function (event) {
          if (!event.target.tagName.match(/^A$|AREA|INPUT|TEXTAREA|SELECT|BUTTON|LABEL/gim)) {
            event.preventDefault();
          }
          var openner = event.target.closest(OPENNER);
          var item = event.target.closest("[class*=\"select\"] ".concat(LIST_WRAP, " ").concat(AREA, " button"));

          //오프너 토글
          if (openner) {
            _this3._toggle();
          }

          //class="select"내부에 data-select="list" > data-select="options" > button클릭시 실행
          if (item) {
            _this3._select(item, false);
            _this3._close(true);
          }
        });
      }

      //focus가 변경될시 닫음
    }, {
      key: "_setTimer",
      value: function _setTimer() {
        var _this4 = this;
        var isStart = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        if (isStart) {
          if (this._isOpen) this._closeTimer = setTimeout(function () {
            return _this4._close();
          }, 50);
        } else {
          if (this._closeTimer) {
            clearTimeout(this._closeTimer);
            this._closeTimer = null;
          }
        }
      }
    }, {
      key: "_initVars",
      value: function _initVars() {
        var _this5 = this;
        this._valueObserverState(false);
        this._currentIndex = -1;
        this._openner = qs(this._element, OPENNER);
        this._selectArea = qs(this._element, SELECT_AREA);
        this._boxWrap = qs(this._element, LIST_WRAP);
        this._box = qs(this._element, AREA);
        this._valueHolder = qs(this._element, VALUE_HOLDER);
        this._optionItems = this._getOptions();
        this._closeTimer = null;
        this._isDisable = this._openner.getAttribute('aria-disabled') === 'true';
        if (this._isDisable) {
          this._openner.setAttribute('tabindex', -1);
        }
        if (!this._valueObserver) {
          this._valueObserver = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
              var oldValue = mutation.oldValue;
              //if (mutation.attributeName === "aria-invalid") return;
              if (mutation.attributeName === 'text') {
                var _selectedText = _this5._valueHolder.getAttribute('text');
                if (_selectedText && oldValue !== _selectedText) {
                  _this5._currentItem = Array.from(_this5._optionItems).filter(function (item) {
                    return item.textContent === _selectedText;
                  })[0];
                  _this5._select(_this5._currentItem);
                }
              } else if (mutation.attributeName === 'value') {
                var _selectedValue = _this5._valueHolder.getAttribute('value');
                if (_selectedValue && oldValue !== _selectedValue) {
                  _this5._currentItem = Array.from(_this5._optionItems).filter(function (item) {
                    return item.getAttribute('value') === _selectedValue;
                  })[0];
                  _this5._select(_this5._currentItem);
                }
              }
            });
          });
        }

        // 디폴트값 셋팅 ( 디폴트값이 있는경우 위의 플레이스홀더처리를 덮어씌우고 디폴트값으로 셋팅 )
        // value 값으로 셋팅
        var selectedValue = this._valueHolder.getAttribute('value');
        // text 값으로 셋팅
        var selectedText = this._valueHolder.getAttribute('text');
        if (selectedValue) {
          this._currentItem = Array.from(this._optionItems).filter(function (item) {
            return item.getAttribute('value') === selectedValue;
          })[0];
        } else if (selectedText) {
          // modi: From 20220823 김원욱 if(selectedText) -> else if (selectedText): 중복해서 value와 text 둘다 있을 경우 text값이 우선 하는 오류 수정
          this._currentItem = Array.from(this._optionItems).filter(function (item) {
            return item.textContent === selectedText;
          })[0];
        }
      }
    }, {
      key: "_valueObserverState",
      value: function _valueObserverState() {
        var isObserve = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        if (isObserve) {
          if (this._valueObserver) {
            this._valueObserver.disconnect();
            this._valueObserver.observe(this._valueHolder, {
              attributes: true,
              attributeOldValue: true
            });
          }
        } else {
          if (this._valueObserver) this._valueObserver.disconnect();
        }
      }
    }, {
      key: "_initOptions",
      value: function _initOptions(options) {
        this._options = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, defaultOptions$2), Select.GLOBAL_OPTIONS), options), dataSetToObject(this._element, dataAttrOptions$1, Select.DATA_NAME));
      }
    }], [{
      key: "EVENT",
      get: function get() {
        return {
          CHANGE: "onChange.".concat(NAME$4),
          CLOSE: "onClose.".concat(NAME$4)
        };
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$4;
      }
    }, {
      key: "trigger",
      value: function trigger(event) {
        var el = event.target.closest(SelectBox.DATA_TRIGGER_NAME);
        if (el) {
          var isInstance = Select.get(el);
          if (!isInstance) {
            var _Select = new _Select(el);
            _Select.init()._open();
          }
        }
      }

      /**
       * 셀렉트 박스 객체 반환
       * 인스턴스 반환
       * @param {*} element 셀렉트박스 엘리먼트
       * @param {*} initialize 초기화되지 않은 대상에 대해서 초기화 후 인스턴스를 반환할지 여부
       * @returns
       */
    }, {
      key: "get",
      value: function get(element) {
        var initialize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var _el = getElement(element);
        if (!_el) {
          console.warn("\n  warning from [".concat(NAME$4, "] ---> [element] not found.\n\n"));
          return;
        }
        var instance = Select.getInstance(_el);
        if (!instance && initialize) {
          instance = new Select(_el);
          instance.init();
        }
        return instance;
      }
    }]);
    return Select;
  }(UI);
  _defineProperty(Select, "GLOBAL_OPTIONS", {});
  _defineProperty(Select, "DATA_NAME", 'select');
  _defineProperty(Select, "DATA_TRIGGER_NAME", "[data-select=\"select\"]");

  var NAME$3 = 'util.focustrap';
  var elementMap = new Map();
  var FocusTrap = /*#__PURE__*/function () {
    function FocusTrap(element) {
      _classCallCheck(this, FocusTrap);
      this._element = getElement(element);
      this._autoFocus = true;
      this._trapsElements = [];
      if (!elementMap.has(this._element)) elementMap.set(this._element, new Map());
      var instanceMap = elementMap.get(this._element);
      if (instanceMap.has(NAME$3)) {
        console.error("instance already registered!");
        return;
      }
      instanceMap.set(NAME$3, this);
    }
    _createClass(FocusTrap, [{
      key: "init",
      value: function init() {
        var isAutoFocus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        this._initVars();
        this._initEvents();
        if (isAutoFocus) {
          if (this._trapsElements.length > 0) {
            this._trapsElements[0].focus();
          } else {
            this._element.focus();
          }
        }
      }
    }, {
      key: "destroy",
      value: function destroy() {
        var autoComeback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        if (this._beforeFocused && autoComeback) this._beforeFocused.focus();
        Data.remove(this._element, this.constructor.NAME);
        this._removeEvents();
        this._removeVars();
      }
    }, {
      key: "_initVars",
      value: function _initVars() {
        this._trapsElements = focusableElements(this._element);
        this._beforeFocused = document.hasFocus() && document.activeElement !== document.body && document.activeElement !== document.documentElement && document.activeElement || null;
      }
    }, {
      key: "_initEvents",
      value: function _initEvents() {
        var _this = this;
        EventHandler.off(this._element, FocusTrap.EVENT.FOCUS_IN);
        EventHandler.on(this._element, FocusTrap.EVENT.FOCUS_IN, function (event) {
          event.stopPropagation();

          // 기존에 등록한 이벤트 모두 삭제 후 아래에서 다시 등록
          _this._trapsElements.forEach(function (el) {
            return EventHandler.off(el, FocusTrap.EVENT.KEY_DOWN);
          });
          _this._trapsElements = focusableElements(_this._element);
          var currentTtarget = event.target;
          var firstElement = _this._trapsElements[0];
          var lastElement = _this._trapsElements[_this._trapsElements.length - 1];

          // 첫 번째 엘리먼트
          if (currentTtarget === firstElement) {
            EventHandler.on(firstElement, FocusTrap.EVENT.KEY_DOWN, function (event) {
              var keyCode = event.keyCode || event.which;
              if (keyCode === 9 && event.shiftKey) {
                // 첫 번째 엘리먼트에서 시프트 + 탭(백 탭)이면 마지막 엘리먼트로 강제 포커스 이동
                lastElement.focus();
                event.preventDefault();
              }
            });
          }

          // 마지막 엘리먼트
          if (currentTtarget === lastElement) {
            EventHandler.on(lastElement, FocusTrap.EVENT.KEY_DOWN, function (event) {
              var keyCode = event.keyCode || event.which;
              if (keyCode === 9 && !event.shiftKey) {
                // 마지막 엘리먼트에서 탭 이면 첫 번째 엘리먼트로 강제 포커스 이동
                firstElement.focus();
                event.preventDefault();
              }
            });
          }
        });
      }
    }, {
      key: "_removeVars",
      value: function _removeVars() {
        if (!elementMap.has(this._element)) return;
        var instanceMap = elementMap.get(this._element);
        instanceMap.delete(NAME$3);
        if (instanceMap.size === 0) elementMap.delete(this._element);
        this._trapsElements = [];
        this._element = null;
      }
    }, {
      key: "_removeEvents",
      value: function _removeEvents() {
        this._trapsElements.forEach(function (el) {
          return EventHandler.off(el, FocusTrap.EVENT.KEY_DOWN);
        });
        EventHandler.off(this._element, FocusTrap.EVENT.FOCUS_IN);
      }
    }], [{
      key: "EVENT",
      get: function get() {
        return {
          FOCUS_IN: "focusin.".concat(NAME$3),
          KEY_DOWN: "keydown.".concat(NAME$3)
        };
      }
    }, {
      key: "get",
      value: function get(element) {
        if (elementMap.has(element)) {
          return elementMap.get(element).get(key) || null;
        }
        return null;
      }
    }]);
    return FocusTrap;
  }();

  var NAME$2 = 'ui.treemenu';
  var TreeMenu = /*#__PURE__*/function () {
    function TreeMenu(props) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      _classCallCheck(this, TreeMenu);
      this._options = options;
      this._params = _objectSpread2(_objectSpread2({}, props), {}, {
        _current: null
      });
    }
    _createClass(TreeMenu, [{
      key: "_initEvents",
      value: function _initEvents() {
        var content = this._params.content;
        var displayClass = this._options.displayClass;
        if (content && content.classList.contains(displayClass)) {
          this._close(content);
        } else {
          this._open(content);
        }
      }
    }, {
      key: "_initVars",
      value: function _initVars() {
        this._beforeActive = null;
      }
    }, {
      key: "_open",
      value: function _open() {
        var _this$_params = this._params,
          header = _this$_params.header,
          content = _this$_params.content,
          target = _this$_params.target;
        var _this$_options = this._options,
          selector = _this$_options.selector,
          openClass = _this$_options.openClass,
          setValue = _this$_options.setValue;
        var current = target.closest('[aria-controls]');
        this.originCurrent = current;
        if (current) {
          this._defaultInit(content);
          this._closeContentAll();
          var items = qsAll(content, "".concat(selector.items, " button"));
          content.classList.add(openClass);
          header.classList.add(openClass);
          items.forEach(function (list) {
            list.classList.remove(openClass);
          });
          items[0].classList.add(openClass);
          if (setValue) {
            this.value(current.textContent, 'list');
          }
        } else {
          var btn = target.closest('button');
          if (btn) {
            this._closeActiveAll();
            btn.classList.add(openClass);
            if (setValue) {
              this.value(btn.textContent, 'item');
            }
          }
        }
      }
    }, {
      key: "_closeActiveAll",
      value: function _closeActiveAll() {
        var target = this._params.target;
        var wrapper = target.closest('[data-item="btn"]');
        var btnAll = qsAll(wrapper, "button");
        var openClass = this._options.openClass;
        if (btnAll.length > 0) {
          btnAll.forEach(function (item) {
            item.classList.remove(openClass);
          });
        }
      }
    }, {
      key: "_closeContentAll",
      value: function _closeContentAll() {
        var openClass = this._options.openClass;
        var before = this._params.before;
        if (before.headers.length > 0) {
          before.headers.forEach(function (item) {
            var getContent = item.getAttribute('aria-controls');
            var content = qs(before.contents, "#".concat(getContent));
            if (item.classList.contains(openClass)) {
              item.classList.remove(openClass);
              content.classList.remove(openClass);
            }
          });
        }
      }
    }, {
      key: "_defaultInit",
      value: function _defaultInit() {
        var before = this._params.before;
        var openClass = this._options.openClass;
        var content = before.firstContent;
        var head = before.firstItem;
        var header = before.firstheader;
        content.classList.remove(openClass);
        head.classList.remove(openClass);
        header.setAttribute('aria-expanded', false);
      }
    }, {
      key: "value",
      value: function value(text, type) {
        var _this$originCurrent;
        var component = this._params.component;
        var _this$_options2 = this._options,
          selector = _this$_options2.selector,
          openClass = _this$_options2.openClass;
        var target = (_this$originCurrent = this.originCurrent) === null || _this$originCurrent === void 0 ? void 0 : _this$originCurrent.getAttribute('aria-controls');
        var getID = qs(component._element, "#".concat(target));
        var content = qs(getID, "".concat(selector.items, " .").concat(openClass));
        var list = qs(component._element, "".concat(selector.values.listValue)) || qs(document, "".concat(selector.values.listValue));
        var item = qs(component._element, "".concat(selector.values.itemsValue)) || qs(document, "".concat(selector.values.itemsValue));
        if (content) {
          list.textContent = text;
          item.textContent = content.textContent;
          this._params._current = {
            listValue: list.textContent,
            itemsValue: content.textContent
          };
        } else {
          if (type === 'list') {
            list.textContent = text;
          } else {
            item.textContent = text;
          }
          this._params._current = {
            listValue: list.textContent,
            itemsValue: item.textContent
          };
        }
      }
    }, {
      key: "init",
      value: function init() {
        this._initVars();
        this._initEvents();
        window.HitaiUI.TreeMenu = TreeMenu;
      }
    }], [{
      key: "EVENT",
      get: function get() {
        return {
          LISTSELECT: "onListSelect.".concat(NAME$2),
          ITEMSELECT: "onItemSelect.".concat(NAME$2),
          LISTOPEN: "listOpen.".concat(NAME$2),
          ITEMOPEN: "itemOpen.".concat(NAME$2)
        };
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$2;
      }
    }]);
    return TreeMenu;
  }();

  // eslint-disable-next-line no-unused-vars
  var NAME$1 = 'ui.boxopenner';
  var ANIMATE_CLASS = 'animate';
  var dataAttrOptions = {
    displayClass: 'expanded',
    animate: false,
    focuserble: true,
    setChildrenOpen: true,
    setValue: false,
    openClass: 'is-active'
  };
  var defaultOptions$1 = _objectSpread2(_objectSpread2({}, dataAttrOptions), {}, {
    selector: {
      openner: "[data-menu=\"btn\"]",
      content: "[data-menu=\"con\"]",
      items: "[data-item=\"btn\"]",
      values: {
        listValue: "[data-value=\"list\"]",
        itemsValue: "[data-value=\"item\"]"
      },
      controls: "aria-controls"
    },
    offset: "data-offset"
  });
  var BoxOpenner = /*#__PURE__*/function (_UI) {
    _inherits(BoxOpenner, _UI);
    var _super = _createSuper(BoxOpenner);
    function BoxOpenner(element) {
      var _this;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      _classCallCheck(this, BoxOpenner);
      _this = _super.call(this, element, options);
      _this._children = {
        header: null,
        content: null
      };
      _this._defaultChildren = null;
      _this._initOptions(options);
      return _this;
    }
    _createClass(BoxOpenner, [{
      key: "updateOption",
      value:
      /**
       * 옵션값을 업데이트합니다.
       * @param {*} options
       */
      function updateOption(options) {
        this._options = _objectSpread2(_objectSpread2({}, this._options), options);
      }
    }, {
      key: "open",
      value: function open(getProps) {
        this._setPropsOptionsUpdate(getProps);
        this._open();
      }
    }, {
      key: "close",
      value: function close() {
        this._close();
      }

      //오픈시 props가 있을시 업데이트
    }, {
      key: "_setPropsOptionsUpdate",
      value: function _setPropsOptionsUpdate(getProps) {
        if (!getProps) return;
        this._setProps = {
          element: getProps,
          content: null
        };
        var getControls = getProps.getAttribute('aria-controls');
        if (!getControls) return;
        this._setProps.content = document.querySelector("#".concat(getControls));
      }
    }, {
      key: "_open",
      value: function _open() {
        var _content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        if (this._isOpen) return;
        var _this$_options = this._options,
          animate = _this$_options.animate,
          selector = _this$_options.selector,
          displayClass = _this$_options.displayClass,
          openClass = _this$_options.openClass,
          focuserble = _this$_options.focuserble;
        var content = _content ? _content : qs(this._element, selector.content);
        var openner = qs(this._element, selector.openner);
        var list = BoxOpenner.getInstances();
        list.forEach(function (boxMenu) {
          if (boxMenu._isOpen) {
            boxMenu.close();
          }
        });

        // 애니메이션 일단 처리하지 않는다.
        if (animate === true) {
          this._element.classList.add(ANIMATE_CLASS);
        }
        this._isOpen = true;
        content.classList.add(displayClass);
        openner.classList.add(openClass);
        openner.setAttribute('aria-expanded', true);
        this._element.classList.add(openClass);

        // 컨텐츠가 오프너 버튼보다 아래있는 경우
        if (openner.getBoundingClientRect().top < content.getBoundingClientRect().top) {
          Object.assign(content.style, {
            'transform-origin': '0 0'
          });

          // 컨텐츠가 오프너 버튼보다 위에있는 경우
        } else {
          Object.assign(content.style, {
            'transform-origin': '0 100%'
          });
        }
        this._offsetElement();
        this._setCloseReadyEvents();
        content.setAttribute('tabindex', 0);
        if (focuserble) {
          this._focusTrap = new FocusTrap(content);
          this._focusTrap.init();
          content.focus();
        }
        EventHandler.trigger(this._element, BoxOpenner.EVENT.OPEN);
        EventHandler.trigger(document, BoxOpenner.EVENT.ALL, {
          component: this,
          eventType: BoxOpenner.EVENT.OPEND
        });
      }
    }, {
      key: "_close",
      value: function _close() {
        var _content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        if (!this._isOpen) return;
        var _this$_options2 = this._options,
          selector = _this$_options2.selector,
          openClass = _this$_options2.openClass,
          displayClass = _this$_options2.displayClass,
          focuserble = _this$_options2.focuserble;
        var content = _content ? _content : qs(this._element, selector.content);
        var openner = qs(this._element, selector.openner);
        //예외처리
        openner.classList.remove(openClass);
        openner.setAttribute('aria-expanded', false);
        content.classList.remove(displayClass);
        content.removeAttribute('tabindex');
        this._element.classList.remove(openClass);
        this._element.classList.remove(ANIMATE_CLASS);
        this._removeCloseReadyEvents();
        this._isOpen = false;
        if (focuserble) {
          this._focusTrap.destroy();
          this._focusTrap = null;
        }
        Object.assign(content.style, {
          'transform-origin': ''
        });
        EventHandler.trigger(this._element, BoxOpenner.EVENT.CLOSE);
        EventHandler.trigger(document, BoxOpenner.EVENT.ALL, {
          component: this,
          eventType: BoxOpenner.EVENT.CLOSED
        });
      }
    }, {
      key: "_setCloseReadyEvents",
      value: function _setCloseReadyEvents() {
        var _this2 = this;
        setTimeout(function () {
          // 화면이 스크롤 -> 닫기
          // EventHandler.on(window, 'scroll.boxOpenner', () => this._close());
          // ESC키 눌렀을 때 -> 닫기
          EventHandler.on(window, 'keydown.boxOpenner', function (event) {
            if (event.key === 'Escape') {
              event.preventDefault();
              if (_this2._setProps) {
                var _this2$_setProps = _this2._setProps,
                  content = _this2$_setProps.content;
                  _this2$_setProps.element;
                if (!content.classList.contains('expand')) {
                  content.classList.add('expand');
                  _this2._close();
                }
                return;
              }
              _this2._close();
            }
          });
          // 바탕 클릭했을 때 -> 닫기
          EventHandler.on(window, 'click.boxOpenner', function (event) {
            // 인풋에 동적으로 생성되는 (X) 버튼에 대한 예외처리
            if (event.target.closest("[data-auto-element=\"btn\"]")) return;
            if (event.target.closest(BoxOpenner.DATA_TRIGGER_NAME)) return;
            if (_this2._setProps) {
              var _this2$_setProps2 = _this2._setProps,
                content = _this2$_setProps2.content;
                _this2$_setProps2.element;
              if (!content.classList.contains('expand')) {
                content.classList.add('expand');
                _this2._close();
              }
              return;
            }
            _this2._close();
          });
        }, 0);
      }
    }, {
      key: "_offsetElement",
      value: function _offsetElement() {
        var _this$_options3 = this._options,
          offset = _this$_options3.offset,
          selector = _this$_options3.selector;
        var offsetSize = this._element.getAttribute(offset);
        if (!offsetSize) return;
        var getLeft = offsetSize.split(', ')[0];
        var getTop = offsetSize.split(', ')[1];
        var wrapper = qs(this._element, "".concat(selector.content));
        wrapper.style.top = "".concat(getTop, "px");
        wrapper.style.left = "".concat(getLeft, "px");
      }
    }, {
      key: "_removeCloseReadyEvents",
      value: function _removeCloseReadyEvents() {
        EventHandler.off(window, 'keydown.boxOpenner');
        EventHandler.off(window, 'click.boxOpenner');
      }
    }, {
      key: "_initEvents",
      value: function _initEvents() {
        var _this3 = this;
        EventHandler.on(this._element, _get(_getPrototypeOf(BoxOpenner.prototype), "_eventName", this).call(this, 'click'), function (event) {
          var _this3$_options = _this3._options,
            selector = _this3$_options.selector,
            displayClass = _this3$_options.displayClass;
          var openner = event.target.closest(selector.openner);
          if (openner) {
            event.preventDefault();
            var wrapper = event.target.closest(BoxOpenner.DATA_TRIGGER_NAME);
            if (wrapper) {
              var content = qs(wrapper, selector.content);
              if (_this3._isToggle) {
                if (content && content.classList.contains(displayClass)) {
                  _this3._close(content);
                } else {
                  _this3._open(content);
                }
              } else {
                _this3._open(content);
              }
            }
          } else {
            //children
            event.preventDefault();
            var item = event.target.closest('[aria-controls]');
            var _wrapper = event.target.closest(BoxOpenner.DATA_TRIGGER_NAME);
            var getID = item === null || item === void 0 ? void 0 : item.getAttribute(selector.controls);
            var targetContent = qs(_wrapper, "#".concat(getID));
            _this3._children = {
              target: event.target,
              header: item,
              content: targetContent,
              before: _this3._before,
              component: _this3
            };
            _this3._treeMenu = new TreeMenu(_this3._children, _this3._options);
            _this3._treeMenu.init();
            EventHandler.trigger(document, BoxOpenner.EVENT.ALL, {
              component: _this3._treeMenu,
              eventType: BoxOpenner.EVENT.TREEOPEN
            });
          }
        });
      }
    }, {
      key: "_initVars",
      value: function _initVars() {
        this._isOpen = false;
        this._isToggle = null;
        this._focusTrap = null;
        this._children = null;
        this._treeMenu = null;
        this._values = null;
        this._before = null;
        this._item;
        this._dir = 'down';
      }
    }, {
      key: "init",
      value: function init() {
        this._initEvents();
        this._initVars();
        this._defaultSelection();
      }
    }, {
      key: "_defaultSelection",
      value: function _defaultSelection() {
        var _this$_options4 = this._options,
          setChildrenOpen = _this$_options4.setChildrenOpen,
          _defaultChildren = _this$_options4._defaultChildren,
          openClass = _this$_options4.openClass,
          selector = _this$_options4.selector;
        var targetAllContent = qsAll(this._element, "[aria-controls]");
        var index = [_defaultChildren ? _defaultChildren : 0];
        var setID = targetAllContent[index].getAttribute('aria-controls');
        var content = qs(this._element, "#".concat(setID));
        var wrapper = qs(this._element, "".concat(selector.content));
        var childGroup = qs(content, "".concat(selector.items));
        var items = qsAll(childGroup, "button");
        this._values = {
          itemValue: targetAllContent[index].textContent,
          listValue: items[index].textContent
        };
        this._before = {
          headers: targetAllContent,
          firstheader: targetAllContent[index],
          contents: wrapper,
          firstContent: content,
          firstItem: items[index],
          items: items,
          firstValues: this._values
        };

        //처음에 보이지않지만, children을 오픈할지 여부
        if (setChildrenOpen) {
          targetAllContent[index].setAttribute('aria-expanded', true);
          content.classList.add(openClass);
          items[index].classList.add(openClass);
        }
      }
    }, {
      key: "_initOptions",
      value: function _initOptions(options) {
        this._options = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, defaultOptions$1), BoxOpenner.GLOBAL_OPTIONS), options), dataSetToObject(this._element, dataAttrOptions, BoxOpenner.DATA_NAME));
      }
    }], [{
      key: "EVENT",
      get: function get() {
        return {
          SELECT: "onSelect.".concat(NAME$1),
          OPEN: "open.".concat(NAME$1),
          OPEND: "opend.".concat(NAME$1),
          CLOSE: "close.".concat(NAME$1),
          CLOSED: "closed.".concat(NAME$1),
          TREEOPEN: "treeOpen.".concat(NAME$1),
          ALL: "all.".concat(NAME$1)
        };
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$1;
      }

      /**
       * 초기화 되어있는 모든 드롭다운메뉴 옵션을 업데이트합니다.
       * @param {*} options
       */
    }, {
      key: "updateOption",
      value: function updateOption(options) {
        var insList = BoxOpenner.getInstances();
        if (insList.length > 0) {
          insList.forEach(function (ins) {
            ins.updateOption(_objectSpread2({}, options));
          });
        }
      }
    }, {
      key: "trigger",
      value: function trigger(event) {
        var el = event.target.closest(BoxOpenner.DATA_TRIGGER_NAME);
        if (el) {
          var isInstance = BoxOpenner.get(el);
          if (!isInstance) {
            var _event$target, _event$target$closest;
            var boxOpenner = new BoxOpenner(el);
            boxOpenner.init();
            // 초기화 후 선택한 버튼을 다시한번 클릭하여 이전 이벤트를 처리한다.
            (_event$target = event.target) === null || _event$target === void 0 ? void 0 : (_event$target$closest = _event$target.closest(BoxOpenner._options.selector.openner)) === null || _event$target$closest === void 0 ? void 0 : _event$target$closest.click();
          }
        }
      }

      /**
       * 드롭다운 객체 반환
       * 인스턴스 반환
       * @param {*} element 드롭다운 엘리먼트
       * @param {*} initialize 초기화되지 않은 대상에 대해서 초기화 후 인스턴스를 반환할지 여부
       * @returns
       */
    }, {
      key: "get",
      value: function get(element) {
        var initialize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var _el = getElement(element);
        if (!_el) {
          console.warn("\n  warning from [".concat(NAME$1, "] ---> [element] not found.\n\n"));
          return;
        }
        var instance = BoxOpenner.getInstance(_el);
        if (!instance && initialize) {
          instance = new BoxOpenner(_el);
          instance.init();
        }
        return instance;
      }
    }]);
    return BoxOpenner;
  }(UI);
  _defineProperty(BoxOpenner, "GLOBAL_OPTIONS", {});
  _defineProperty(BoxOpenner, "DATA_NAME", 'openner');
  _defineProperty(BoxOpenner, "DATA_TRIGGER_NAME", "[data-autoset=\"openner\"]");

  var NAME = "ui.dialog";
  var defaultOptions = {
    openClass: "open",
    closeClass: "close",
    animate: true,
    destroy: false
  };
  var Dialog = /*#__PURE__*/function (_UI) {
    _inherits(Dialog, _UI);
    var _super = _createSuper(Dialog);
    function Dialog(element) {
      var _this;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      _classCallCheck(this, Dialog);
      _this = _super.call(this, element, options);
      _this._initOptions(options);
      _this._element = element;
      _this._isOpen = false;
      _this._closeButtons = null;
      _this._init();
      EventHandler.trigger(_this._element, Dialog.EVENT.INIT, {
        component: _assertThisInitialized(_this)
      });
      return _this;
    }
    _createClass(Dialog, [{
      key: "open",
      value: function open() {
        var _this2 = this;
        if (this._isOpen) return;
        if (this._options.animate) this._element.classList.add("animate");
        this._isOpen = true;
        this._element.classList.add(this._options.openClass);
        this._scrollHidden();
        EventHandler.trigger(this._element, Dialog.EVENT.OPEN, {
          component: this
        });
        var openEventHandler = function openEventHandler() {
          _this2._element.classList.add(_this2._options.openClass);
          EventHandler.trigger(_this2._element, Dialog.EVENT.OPENED, {
            component: _this2
          });
          _this2._element.removeEventListener("animationend", openEventHandler);
        };
        if (this._options.animate) {
          this._element.addEventListener("animationend", openEventHandler);
        }
        Dialog.COUNT++;
      }
    }, {
      key: "close",
      value: function close() {
        var _this3 = this;
        if (!this._isOpen) return;
        this._isOpen = false;
        this._element.classList.remove(this._options.openClass);
        EventHandler.trigger(this._element, Dialog.EVENT.CLOSE, {
          component: this
        });
        Dialog.COUNT--;
        // console.log('Dialog.COUNT:' + Dialog.COUNT);

        var closeEventHandler = function closeEventHandler() {
          _this3._element.classList.remove(_this3._options.closeClass);
          _this3._element.removeEventListener("animationend", closeEventHandler);
          EventHandler.trigger(_this3._element, Dialog.EVENT.CLOSED, {
            component: _this3
          });
          if (_this3._options.destroy) _this3.destroy();
          _this3._scrollVisible();
        };
        if (this._options.animate) {
          this._element.classList.add(this._options.closeClass);
          this._element.addEventListener("animationend", closeEventHandler);
        } else {
          if (this._options.destroy) this.destroy();
          this._scrollVisible();
        }
      }
    }, {
      key: "updateOption",
      value: function updateOption(options) {
        this._options = _objectSpread2(_objectSpread2({}, this._options), options);
        return this;
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this._element.remove();
        this._closeButtons = null;
        this._isOpen = null;
        EventHandler.off(this._element, "click", this._initEvent);
        EventHandler.off(this._element, Dialog.EVENT.OPEN);
        EventHandler.off(this._element, Dialog.EVENT.OPENED);
        EventHandler.off(this._element, Dialog.EVENT.CLOSE);
        EventHandler.off(this._element, Dialog.EVENT.CLOSED);
        _get(_getPrototypeOf(Dialog.prototype), "destroy", this).call(this);
      }
    }, {
      key: "getElement",
      value: function getElement() {
        return this._element;
      }
    }, {
      key: "_initOptions",
      value: function _initOptions(options) {
        this._options = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, defaultOptions), Dialog.GLOBAL_OPTIONS), options), dataSetToObject(this._element, Dialog.DATA_NAME));
      }
    }, {
      key: "_init",
      value: function _init() {
        var _this4 = this;
        EventHandler.on(this._element, "click", function (event) {
          return _this4._initEvent(event);
        });
      }
    }, {
      key: "_initEvent",
      value: function _initEvent(event) {
        if (event.target.closest("[data-dialog-close]")) this.close();
      }
    }, {
      key: "_scrollHidden",
      value: function _scrollHidden() {
        var scrollbarWidth = getScrollBarWidth();
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = scrollbarWidth + "px";
        document.querySelector("#header").style.paddingRight = scrollbarWidth + "px";
      }
    }, {
      key: "_scrollVisible",
      value: function _scrollVisible() {
        if (Dialog.COUNT <= 0) {
          document.body.style.overflow = "";
          document.body.style.paddingRight = 0;
          document.querySelector("#header").style.paddingRight = 0;
        }
      }
    }], [{
      key: "EVENT",
      get: function get() {
        return {
          INIT: "".concat(NAME, ".init"),
          OPEN: "".concat(NAME, ".open"),
          OPENED: "".concat(NAME, ".opened"),
          CLOSE: "".concat(NAME, ".close"),
          CLOSED: "".concat(NAME, ".closed")
        };
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME;
      }

      /**
       * 다이얼로그 객체 반환
       * 인스턴스 반환
       * @param {*} element 다이얼로그 엘리먼트
       * @param {*} initialize 초기화되지 않은 대상에 대해서 초기화 후 인스턴스를 반환할지 여부
       * @returns
       */
    }, {
      key: "get",
      value: function get(element) {
        var initialize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var _el = getElement(element);
        if (!_el) {
          console.warn("\n  warning from [".concat(NAME, "] ---> [element] not found.\n\n"));
          return;
        }
        var instance = Dialog.getInstance(_el);
        if (!instance && initialize) {
          instance = new Dialog(_el);
        }
        return instance;
      }

      /**
       * 초기화 되어있는 모든 다이얼로그의 옵션을 업데이트합니다.
       * @param {*} options
       */
    }, {
      key: "updateOption",
      value: function updateOption(options) {
        var insList = Dialog.getInstances();
        if (insList.length > 0) {
          insList.forEach(function (ins) {
            ins.updateOption(options);
          });
        }
      }
    }, {
      key: "trigger",
      value: function trigger(event) {
        var target = event.target;
        var trigger = target.closest("[data-dialog-trigger]");
        if (trigger) {
          var dialogID = trigger.getAttribute("data-dialog-trigger");
          var dialog = document.querySelector(dialogID);
          if (dialog) {
            if (!Dialog.getInstance(dialog)) {
              new Dialog(dialog).open();
            } else {
              Dialog.getInstance(dialog).open();
            }
          }
        }
      }
    }, {
      key: "closeAll",
      value: function closeAll() {
        if (Dialog.getInstances().length > 0) {
          Dialog.getInstances().forEach(function (dialog) {
            if (dialog && dialog._isOpen === true) dialog.close();
          });
        }
      }
    }]);
    return Dialog;
  }(UI);
  _defineProperty(Dialog, "GLOBAL_OPTIONS", {});
  _defineProperty(Dialog, "DATA_NAME", "dialog");
  _defineProperty(Dialog, "COUNT", 0);

  var DialogWrapper = /*#__PURE__*/function () {
    function DialogWrapper() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, DialogWrapper);
      this._options = options;
      this._element = document.createElement('div');
      this._instance = null;
      this._template = this._createTemplate(this._options);
      this._element.classList.add('modal', 'modal--alert');
      this._element.setAttribute('role', 'alertdialog');
      this._element.innerHTML = this._template;
      document.body.append(this._element);
      this._instance = new Dialog(this._element, {
        animate: true,
        destroy: true
      });
      return this;
    }
    _createClass(DialogWrapper, [{
      key: "getElement",
      value: function getElement() {
        return this._element;
      }
    }, {
      key: "_createTemplate",
      value: function _createTemplate(options) {
        if (!options || options.message === '') return;
        return "\n      <div class=\"modal__overlay\"></div>\n      <div class=\"modal__content\">\n        <section>\n          <div class=\"modal__body\">\n            <button type=\"button\" class=\"modal__btn-close\" data-dialog-close>\uD31D\uC5C5 \uB2EB\uAE30</button>\n            <div class=\"alert-mes\">".concat(options.message, "</div>\n          </div>\n          ").concat(options.dialog === 'alert' ? "<div class=\"modal__footer\">\n                  <button type=\"button\" class=\"btn btn--lg btn--dark\" data-dialog-close>\uD655\uC778</button>\n                </div>" : "<div class=\"modal__footer\">\n                <button type=\"button\" class=\"btn btn--lg btn--gray\" data-dialog-close>\uCDE8\uC18C</button>\n                <button type=\"button\" class=\"btn btn--lg btn--dark\" data-dialog-confirm>\uD655\uC778</button>\n              </div>", "\n        </section>\n      </div>");
      }
    }, {
      key: "open",
      value: function open() {
        this._instance.open();
      }
    }, {
      key: "close",
      value: function close() {
        this._instance.close();
      }
    }]);
    return DialogWrapper;
  }();

  // 년월
  $.datepicker.setDefaults({
    prevText: '이전달',
    nextText: '다음달',
    monthNamesShort: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
    dayNames: ['일', '월', '화', '수', '목', '금', '토'],
    dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
    dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
    dateFormat: 'yy.mm.dd',
    showMonthAfterYear: true,
    yearSuffix: '',
    showButtonPanel: false,
    //이전달 다음달 옵션
    changeMonth: true,
    changeYear: true
  });

  /**
   * 그리드 레이아웃
   */
  var masonryInit = function masonryInit() {
    var data = "[data-layout=\"masonry\"]";
    var mslElement = qsAll(document.body, data);
    var arr = [];
    mslElement.map(function (item) {
      var grid = item.getAttribute("data-layout-item");
      var msnry = new Masonry(item, {
        itemSelector: "".concat(grid)
      });
      arr.push(msnry);
    });
    window.masonry = [].concat(arr);
  };

  // menu 펼침/닫기
  window.foldMenuInit = function () {
    var openClass = 'open';
    var toggle = "data-toggle";
    var closeTrigger = "data-menu-close";
    var menuName = "[data-autoset=\"menu\"]";
    var menuContentName = "[data-menu=\"con\"]";
    var _initVarioble = function _initVarioble() {
      var menuElement = qsAll(document.body, menuName);
      return {
        menuElement: menuElement
      };
    };
    var menuElement = _initVarioble().menuElement;
    var _before = null;
    var _current = null;
    var _element = null;
    var _hasMenuCloseAttribute = function _hasMenuCloseAttribute(element) {
      return element.dataset.menuClose !== undefined;
    };
    var _initEvent = function _initEvent() {
      EventHandler.on(document, 'click.menu', function (event) {
        _element = event.target;
        var target = event.target.closest(menuName);
        var content = event.target.closest(menuContentName);

        //현재값 셋팅
        _current = target;
        if (target) {
          //type은 default true로 셋팅
          var type = target.getAttribute(toggle) ? target.getAttribute(toggle) : 'true';
          //toggle을 사용안할 경우
          if (type === 'false') {
            _open(target);
            _setClose();
            var closeBtn = event.target.getAttribute(closeTrigger);
            if (closeBtn !== null) {
              _close(target);
            }
          }
          //toggle을 사용할 경우
          else {
            _toggle(target, content);
          }
          EventHandler.trigger(_element, 'foldMenu.item', {
            element: _element,
            currentTarget: _element.closest('button') || _element.closest('a')
          });
        }

        //이전값 셋팅
        _before = target;
      });
    };

    /**
     * 전체닫기
     */
    var _closeAll = function _closeAll() {
      menuElement.forEach(function (element) {
        element.classList.remove(openClass);
      });
      _removeClose();
    };

    /**
     * 이벤트 삭제
     */
    var _removeClose = function _removeClose() {
      EventHandler.off(window, 'click.menu');
    };

    /**
     * 셀렉터 이외 클릭시
     */
    var _setClose = function _setClose() {
      EventHandler.on(window, 'click.menu', function (event) {
        if (event.target.closest(menuName)) return;
        if (event.target.closest(menuContentName)) return;
        _closeAll();
      });
    };

    /**
     *
     * @param {*} target
     * @returns
     */
    var _open = function _open(target) {
      target.classList.add(openClass);

      //현재값과 이전값이 같을때 처리하지 않음
      if (_before === _current) {
        return;
      } else {
        //현재 값과 이전값이 같지 않고 이전값이 존재할때
        if (_before) {
          _before.classList.remove(openClass);
        }
      }
    };

    /**
     *
     * @param {*} target
     */
    var _close = function _close(target) {
      target.classList.remove(openClass);
      EventHandler.trigger(_element, 'foldMenu.close', {
        element: _element
      });
    };

    /**
     *
     * @param {*} target
     */
    var _toggle = function _toggle(target, content) {
      if (target.classList.contains(openClass)) {
        if (content) {
          if (_hasMenuCloseAttribute(_element)) {
            _close(target);
          } else {
            return;
          }
        } else {
          _close(target);
        }
      } else {
        _open(target);
        _setClose();
      }
    };
    var init = function init() {
      _initEvent();
    };
    return {
      init: init
    };
  };

  // 비밀번호 숨기기/보이기
  var passwordInput = function passwordInput() {
    var btn = document.querySelectorAll('.input-wrap.input-wrap--password [data-toggle-btn]');
    if (!btn) return;
    var clickEvent = function clickEvent(event) {
      var input = event.target.closest('.input-wrap').querySelector('.input');
      if (event.target.classList.contains('is-active')) {
        input.setAttribute('type', 'password');
        event.target.classList.remove('is-active');
      } else {
        input.setAttribute('type', 'text');
        event.target.classList.add('is-active');
      }
    };
    btn.forEach(function (el) {
      EventHandler.on(el, 'click', clickEvent);
    });
  };

  // 이용후기작성(평점)
  var reviewValue = function reviewValue() {
    var bar = document.querySelector('[data-review]');
    if (!bar) return;
    var addEvent = function addEvent() {
      EventHandler.on(bar, 'mousemove', mousemove);
      EventHandler.on(bar, 'mouseup', mouseup);
    };
    var removeEvent = function removeEvent() {
      EventHandler.off(bar, 'mousemove', mousemove);
      EventHandler.off(bar, 'mouseup', mouseup);
    };
    var mousemove = function mousemove(event) {
      event.preventDefault();
      var value = Math.max(15, event.clientX - bar.getBoundingClientRect().left);
      if (value <= bar.clientWidth) {
        bar.querySelector('[data-review="bar"]').style.width = Math.ceil(value / 15) * 10 + '%';
        bar.querySelector('[data-review="value"]').textContent = Math.ceil(value / 15);
      }
    };
    var mouseup = function mouseup() {
      removeEvent();
    };
    EventHandler.on(bar, 'mousedown', addEvent);
    EventHandler.off(bar, 'mouseleave', removeEvent);
    EventHandler.on(bar, 'mouseleave', removeEvent);
    EventHandler.off(bar, 'click', mousemove);
    EventHandler.on(bar, 'click', mousemove);
  };

  /**
   * 초기화를 사용하지 않을 함수 모음
   */
  var uiFunc = function uiFunc() {
    reviewValue();
    passwordInput();
    window.foldMenuInit().init();
  };

  /**
   * 초기화를 사용할 함수 모음
   */
  var uiInitialize = function uiInitialize() {
    masonryInit();
  };
  var commonInit = {
    uiFunc: uiFunc,
    uiInitialize: uiInitialize
  };

  // window.__UI_DEBUG_MODE__ = true;

  Select.DATA_OPTIONS = "[data-select=\"select\"]";
  Accordion.DATA_OPTIONS = "[data-autoset=\"toggle\"]";
  BoxOpenner.DATA_OPTIONS = "[data-autoset=\"openner\"]";
  Tab.DATA_TRIGGER_NAME = "[data-autoset=\"tab\"]";
  Dialog.DATA_TRIGGER_NAME = "[data-dialog-trigger]";

  // 전역설정
  BoxOpenner.GLOBAL_OPTIONS = {
    openClass: "is-active",
    closeClass: "folded"
  };
  Select.GLOBAL_OPTIONS = {
    openClass: "expanded",
    closeClass: "folded"
  };
  Dialog.GLOBAL_OPTIONS = {
    openClass: "open",
    closeClass: "close"
  };

  //각 컴포넌트 초기화 헬퍼
  var UIInitializer = function UIInitializer(target, UI) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var parent = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var elements = parent === null ? document.querySelectorAll(target) : parent.querySelectorAll(target);
    elements.forEach(function (el) {
      if (!UI.getInstance(el)) {
        var ui = new UI(el, getOptions(el, UI, options));
        ui.init();
      }
    });
  };
  var getOptions = function getOptions(target, UI, options) {
    var _options = _objectSpread2({}, options);
    if (target.getAttribute("data-toggle") === "group" && UI.NAME === "ui.accordion") {
      _options = _objectSpread2({}, _options);
    }
    return _options;
  };
  var initialize = function initialize() {
    var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    console.log("initialize");
    // Select
    UIInitializer(Select.DATA_TRIGGER_NAME, Select, {}, parent);
    // BoxOpenner
    UIInitializer(BoxOpenner.DATA_TRIGGER_NAME, BoxOpenner, {}, parent);
    // Tab
    UIInitializer(Tab.DATA_TRIGGER_NAME, Tab, {}, parent);
    // Accordion
    UIInitializer(Accordion.DATA_TRIGGER_NAME, Accordion, {}, parent);

    //재사용가능성이 있는 함수의 경우 HitaiUI에 등록후 재실행
    commonInit.uiInitialize();
  };
  var SwiperA11y = function SwiperA11y(el) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return new window.Swiper(el, _objectSpread2(_objectSpread2({}, options), {}, {
      threshold: 10,
      // 10px 이상 움직여야 슬라이드 기능작동
      a11y: {
        nextSlideMessage: "다음 슬라이드",
        prevSlideMessage: "이전 슬라이드",
        firstSlideMessage: "첫번째 슬라이드",
        lastSlideMessage: "마지막 슬라이드"
      },
      on: _objectSpread2({
        init: function init() {
          var slides = this.slides;
          var swiper = this;
          var wrapper = this.el;
          [].forEach.call(slides, function (el, i) {
            var elTarget = options.a11yTarget ? el.querySelector(options.a11yTarget) : el;
            elTarget.setAttribute("tabindex", 0);
            EventHandler.on(elTarget, "focusin", function () {
              setTimeout(function () {
                wrapper.scrollLeft = 0;
                swiper.slideTo(i, 100);
              }, 0);
            });
          });
          if (options.init) {
            options.init.apply(this);
          }
        },
        afterInit: function afterInit() {
          if (options.afterInit) {
            options.afterInit.apply(this);
          }
        }
      }, options.on)
    }));
  };
  var Alert = function Alert(message) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var dialog = new DialogWrapper({
      message: message,
      dialog: "alert"
    });
    if (callback) {
      if (callback["ui.dialog.open"]) {
        EventHandler.one(dialog.getElement(), Dialog.EVENT.OPEN, function (event) {
          callback["ui.dialog.open"].apply(event.component, []);
        });
      }
      if (callback["ui.dialog.close"]) {
        EventHandler.one(dialog.getElement(), Dialog.EVENT.CLOSE, function (event) {
          callback["ui.dialog.close"].apply(event.component, []);
        });
      }
      if (callback["ui.dialog.opened"]) {
        EventHandler.one(dialog.getElement(), Dialog.EVENT.OPENED, function (event) {
          callback["ui.dialog.opened"].apply(event.component, []);
        });
      }
      if (callback["ui.dialog.closed"]) {
        EventHandler.one(dialog.getElement(), Dialog.EVENT.CLOSED, function (event) {
          setTimeout(function () {
            callback["ui.dialog.closed"].apply(event.component, []);
          }, 10);
        });
      }
    }
    dialog.open();
  };
  var Confirm = function Confirm(message) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var dialog = new DialogWrapper({
      message: message,
      dialog: "confirm"
    });
    EventHandler.one(dialog.getElement(), Dialog.EVENT.OPEN, function (event) {
      var confirm = dialog.getElement().querySelector("[data-dialog-confirm]");
      if (confirm) {
        EventHandler.one(confirm, "click", function () {
          if (callback) {
            callback.apply(event.component);
          }
        });
      }
    });
    dialog.open();
  };
  if (window.HitaiUI) {
    console.warn("");
    console.warn("   [ui.common.js] Overloading!");
    console.warn("");
    console.warn("   이 경고 문구는 [ui.common.js] 파일이 중복으로 로드되는 경우에 출력됩니다.");
    console.warn("   중복로드를 찾아 제거하세요.");
    console.warn("");
  } else {
    document.addEventListener("DOMContentLoaded", function () {
      // Dialog Trigger
      EventHandler.on(document, "click", function (event) {
        Dialog.trigger(event);
      });
      window.addEventListener("load", function winload(e) {
        EventHandler.trigger(window, "resize");
        window.removeEventListener("load", winload);
      });
      initialize();
      commonInit.uiFunc();
      EventHandler.trigger(document, "UILoaded");
      console.log("UI Initialized!");
    });
  }
  var windowResize = function windowResize() {
    window.dispatchEvent(new window.Event("resize"));
  };
  window.HitaiUI = {
    initialize: initialize,
    SwiperA11y: SwiperA11y,
    Select: Select,
    BoxOpenner: BoxOpenner,
    Accordion: Accordion,
    Tab: Tab,
    Dialog: Dialog,
    Alert: Alert,
    Confirm: Confirm,
    windowResize: windowResize
  };

  exports.Accordion = Accordion;
  exports.BoxOpenner = BoxOpenner;
  exports.Dialog = Dialog;
  exports.Masonry = Masonry;
  exports.Select = Select;
  exports.SwiperA11y = SwiperA11y;
  exports.Tab = Tab;
  exports.initialize = initialize;
  exports.windowResize = windowResize;

  return exports;

})({});
