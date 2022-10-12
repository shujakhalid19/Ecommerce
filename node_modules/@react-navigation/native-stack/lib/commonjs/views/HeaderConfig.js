"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = HeaderConfig;

var _elements = require("@react-navigation/elements");

var _native = require("@react-navigation/native");

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _reactNativeSafeAreaContext = require("react-native-safe-area-context");

var _reactNativeScreens = require("react-native-screens");

var _FontProcessor = require("./FontProcessor");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function HeaderConfig({
  headerBackImageSource,
  headerBackButtonMenuEnabled,
  headerBackTitle,
  headerBackTitleStyle,
  headerBackTitleVisible = true,
  headerBackVisible,
  headerShadowVisible,
  headerLargeStyle,
  headerLargeTitle,
  headerLargeTitleShadowVisible,
  headerLargeTitleStyle,
  headerLeft,
  headerRight,
  headerShown,
  headerStyle,
  headerBlurEffect,
  headerTintColor,
  headerTitle,
  headerTitleAlign,
  headerTitleStyle,
  headerTransparent,
  headerSearchBarOptions,
  route,
  title,
  canGoBack
}) {
  var _ref, _headerTitleStyleFlat, _headerStyleFlattened;

  const insets = (0, _reactNativeSafeAreaContext.useSafeAreaInsets)();
  const {
    colors
  } = (0, _native.useTheme)();
  const tintColor = headerTintColor !== null && headerTintColor !== void 0 ? headerTintColor : _reactNative.Platform.OS === 'ios' ? colors.primary : colors.text;
  const headerBackTitleStyleFlattened = _reactNative.StyleSheet.flatten(headerBackTitleStyle) || {};
  const headerLargeTitleStyleFlattened = _reactNative.StyleSheet.flatten(headerLargeTitleStyle) || {};
  const headerTitleStyleFlattened = _reactNative.StyleSheet.flatten(headerTitleStyle) || {};
  const headerStyleFlattened = _reactNative.StyleSheet.flatten(headerStyle) || {};
  const headerLargeStyleFlattened = _reactNative.StyleSheet.flatten(headerLargeStyle) || {};
  const [backTitleFontFamily, largeTitleFontFamily, titleFontFamily] = (0, _FontProcessor.processFonts)([headerBackTitleStyleFlattened.fontFamily, headerLargeTitleStyleFlattened.fontFamily, headerTitleStyleFlattened.fontFamily]);
  const titleText = title !== undefined ? title : route.name;
  const titleColor = (_ref = (_headerTitleStyleFlat = headerTitleStyleFlattened.color) !== null && _headerTitleStyleFlat !== void 0 ? _headerTitleStyleFlat : headerTintColor) !== null && _ref !== void 0 ? _ref : colors.text;
  const titleFontSize = headerTitleStyleFlattened.fontSize;
  const titleFontWeight = headerTitleStyleFlattened.fontWeight;
  const headerTitleStyleSupported = {
    color: titleColor
  };

  if (headerTitleStyleFlattened.fontFamily != null) {
    headerTitleStyleSupported.fontFamily = headerTitleStyleFlattened.fontFamily;
  }

  if (titleFontSize != null) {
    headerTitleStyleSupported.fontSize = titleFontSize;
  }

  if (titleFontWeight != null) {
    headerTitleStyleSupported.fontWeight = titleFontWeight;
  }

  const headerLeftElement = headerLeft === null || headerLeft === void 0 ? void 0 : headerLeft({
    tintColor,
    label: headerBackTitle,
    canGoBack
  });
  const headerRightElement = headerRight === null || headerRight === void 0 ? void 0 : headerRight({
    tintColor
  });
  const headerTitleElement = typeof headerTitle === 'function' ? headerTitle({
    tintColor,
    children: titleText
  }) : null;

  if (_reactNative.Platform.OS === 'ios' && headerSearchBarOptions != null && _reactNativeScreens.SearchBar == null) {
    throw new Error(`The current version of 'react-native-screens' doesn't support SearchBar in the header. Please update to the latest version to use this option.`);
  }
  /**
   * We need to set this in if:
   * - Back button should stay visible when `headerLeft` is specified
   * - If `headerTitle` for Android is specified, so we only need to remove the title and keep the back button
   */


  const backButtonInCustomView = headerBackVisible ? headerLeftElement != null : _reactNative.Platform.OS === 'android' && headerTitleElement != null;
  return /*#__PURE__*/React.createElement(_reactNativeScreens.ScreenStackHeaderConfig, {
    backButtonInCustomView: backButtonInCustomView,
    backgroundColor: (_headerStyleFlattened = headerStyleFlattened.backgroundColor) !== null && _headerStyleFlattened !== void 0 ? _headerStyleFlattened : headerTransparent ? 'transparent' : colors.card,
    backTitle: headerBackTitleVisible ? headerBackTitle : ' ',
    backTitleFontFamily: backTitleFontFamily,
    backTitleFontSize: headerBackTitleStyleFlattened.fontSize,
    blurEffect: headerBlurEffect,
    color: tintColor,
    direction: _reactNative.I18nManager.isRTL ? 'rtl' : 'ltr',
    disableBackButtonMenu: headerBackButtonMenuEnabled === false,
    hidden: headerShown === false,
    hideBackButton: headerBackVisible === false,
    hideShadow: headerShadowVisible === false,
    largeTitle: headerLargeTitle,
    largeTitleBackgroundColor: headerLargeStyleFlattened.backgroundColor,
    largeTitleColor: headerLargeTitleStyleFlattened.color,
    largeTitleFontFamily: largeTitleFontFamily,
    largeTitleFontSize: headerLargeTitleStyleFlattened.fontSize,
    largeTitleFontWeight: headerLargeTitleStyleFlattened.fontWeight,
    largeTitleHideShadow: headerLargeTitleShadowVisible === false,
    title: typeof headerTitle === 'string' ? headerTitle : titleText,
    titleColor: titleColor,
    titleFontFamily: titleFontFamily,
    titleFontSize: titleFontSize,
    titleFontWeight: titleFontWeight,
    topInsetEnabled: insets.top !== 0,
    translucent: // This defaults to `true`, so we can't pass `undefined`
    headerTransparent === true
  }, _reactNative.Platform.OS === 'ios' ? /*#__PURE__*/React.createElement(React.Fragment, null, headerLeftElement != null ? /*#__PURE__*/React.createElement(_reactNativeScreens.ScreenStackHeaderLeftView, null, headerLeftElement) : null, headerTitleElement != null ? /*#__PURE__*/React.createElement(_reactNativeScreens.ScreenStackHeaderCenterView, null, headerTitleElement) : null) : /*#__PURE__*/React.createElement(React.Fragment, null, headerLeftElement != null || typeof headerTitle === 'function' ? /*#__PURE__*/React.createElement(_reactNativeScreens.ScreenStackHeaderLeftView, null, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: styles.row
  }, headerLeftElement, headerTitleAlign !== 'center' ? typeof headerTitle === 'function' ? headerTitleElement : /*#__PURE__*/React.createElement(_elements.HeaderTitle, {
    tintColor: tintColor,
    style: headerTitleStyleSupported
  }, titleText) : null)) : null, headerTitleAlign === 'center' ? /*#__PURE__*/React.createElement(_reactNativeScreens.ScreenStackHeaderCenterView, null, typeof headerTitle === 'function' ? headerTitleElement : /*#__PURE__*/React.createElement(_elements.HeaderTitle, {
    tintColor: tintColor,
    style: headerTitleStyleSupported
  }, titleText)) : null), headerBackImageSource !== undefined ? /*#__PURE__*/React.createElement(_reactNativeScreens.ScreenStackHeaderBackButtonImage, {
    source: headerBackImageSource
  }) : null, headerRightElement != null ? /*#__PURE__*/React.createElement(_reactNativeScreens.ScreenStackHeaderRightView, null, headerRightElement) : null, _reactNative.Platform.OS === 'ios' && headerSearchBarOptions != null ? /*#__PURE__*/React.createElement(_reactNativeScreens.ScreenStackHeaderSearchBarView, null, /*#__PURE__*/React.createElement(_reactNativeScreens.SearchBar, headerSearchBarOptions)) : null);
}

const styles = _reactNative.StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});
//# sourceMappingURL=HeaderConfig.js.map