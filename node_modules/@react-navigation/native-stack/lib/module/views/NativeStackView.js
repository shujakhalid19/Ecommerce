import { getHeaderTitle, Header, HeaderBackButton, SafeAreaProviderCompat, Screen } from '@react-navigation/elements';
import * as React from 'react';
import { Image, StyleSheet, View } from 'react-native';
export default function NativeStackView({
  state,
  descriptors
}) {
  return /*#__PURE__*/React.createElement(SafeAreaProviderCompat, null, /*#__PURE__*/React.createElement(View, {
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
    return /*#__PURE__*/React.createElement(Screen, {
      key: route.key,
      focused: isFocused,
      route: route,
      navigation: navigation,
      headerShown: headerShown,
      headerTransparent: headerTransparent,
      header: header !== undefined ? header({
        back: previousDescriptor ? {
          title: getHeaderTitle(previousDescriptor.options, previousDescriptor.route.name)
        } : undefined,
        options,
        route,
        navigation
      }) : /*#__PURE__*/React.createElement(Header, {
        title: getHeaderTitle(options, route.name),
        headerTintColor: headerTintColor,
        headerLeft: typeof headerLeft === 'function' ? ({
          tintColor
        }) => headerLeft({
          tintColor,
          canGoBack,
          label: headerBackTitle
        }) : headerLeft === undefined && canGoBack ? ({
          tintColor
        }) => /*#__PURE__*/React.createElement(HeaderBackButton, {
          tintColor: tintColor,
          backImage: headerBackImageSource !== undefined ? () => /*#__PURE__*/React.createElement(Image, {
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
      style: [StyleSheet.absoluteFill, {
        display: isFocused ? 'flex' : 'none'
      }]
    }, /*#__PURE__*/React.createElement(View, {
      style: [styles.contentContainer, contentStyle]
    }, render()));
  })));
}
const styles = StyleSheet.create({
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