"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NativeStackView;

var _elements = require("@react-navigation/elements");

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function NativeStackView({
  state,
  descriptors
}) {
  return /*#__PURE__*/React.createElement(_elements.SafeAreaProviderCompat, null, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: styles.container
  }, state.routes.map((route, i) => {
    var _state$routes;

    const isFocused = state.index === i;
    const canGoBack = i !== 0;
    const previousKey = (_state$routes = state.routes[i - 1]) === null || _state$routes === void 0 ? void 0 : _state$routes.key;
    const previousDescriptor = previousKey ? descriptors[previousKey] : undefined;
    const {
      options,
      navigation,
      render
    } = descriptors[route.key];
    const {
      header,
      headerShown,
      headerTintColor,
      headerBackImageSource,
      headerLeft,
      headerRight,
      headerTitle,
      headerTitleAlign,
      headerTitleStyle,
      headerStyle,
      headerShadowVisible,
      headerTransparent,
      contentStyle,
      headerBackTitle
    } = options;
    return /*#__PURE__*/React.createElement(_elements.Screen, {
      key: route.key,
      focused: isFocused,
      route: route,
      navigation: navigation,
      headerShown: headerShown,
      headerTransparent: headerTransparent,
      header: header !== undefined ? header({
        back: previousDescriptor ? {
          title: (0, _elements.getHeaderTitle)(previousDescriptor.options, previousDescriptor.route.name)
        } : undefined,
        options,
        route,
        navigation
      }) : /*#__PURE__*/React.createElement(_elements.Header, {
        title: (0, _elements.getHeaderTitle)(options, route.name),
        headerTintColor: headerTintColor,
        headerLeft: typeof headerLeft === 'function' ? ({
          tintColor
        }) => headerLeft({
          tintColor,
          canGoBack,
          label: headerBackTitle
        }) : headerLeft === undefined && canGoBack ? ({
          tintColor
        }) => /*#__PURE__*/React.createElement(_elements.HeaderBackButton, {
          tintColor: tintColor,
          backImage: headerBackImageSource !== undefined ? () => /*#__PURE__*/React.createElement(_reactNative.Image, {
            source: headerBackImageSource,
            style: [styles.backImage, {
              tintColor
            }]
          }) : undefined,
          onPress: navigation.goBack,
          canGoBack: canGoBack
        }) : headerLeft,
        headerRight: typeof headerRight === 'function' ? ({
          tintColor
        }) => headerRight({
          tintColor
        }) : headerRight,
        headerTitle: typeof headerTitle === 'function' ? ({
          children,
          tintColor
        }) => headerTitle({
          children,
          tintColor
        }) : headerTitle,
        headerTitleAlign: headerTitleAlign,
        headerTitleStyle: headerTitleStyle,
        headerStyle: [headerTransparent ? {
          position: 'absolute',
          backgroundColor: 'transparent'
        } : null, headerStyle, headerShadowVisible === false ? {
          shadowOpacity: 0,
          borderBottomWidth: 0
        } : null]
      }),
      style: [_reactNative.StyleSheet.absoluteFill, {
        display: isFocused ? 'flex' : 'none'
      }]
    }, /*#__PURE__*/React.createElement(_reactNative.View, {
      style: [styles.contentContainer, contentStyle]
    }, render()));
  })));
}

const styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    flex: 1
  },
  backImage: {
    height: 24,
    width: 24,
    margin: 3,
    resizeMode: 'contain'
  }
});
//# sourceMappingURL=NativeStackView.js.map