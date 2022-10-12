function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { getHeaderTitle, Header, SafeAreaProviderCompat, Screen } from '@react-navigation/elements';
import * as React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
import BottomTabBarHeightCallbackContext from '../utils/BottomTabBarHeightCallbackContext';
import BottomTabBarHeightContext from '../utils/BottomTabBarHeightContext';
import BottomTabBar, { getTabBarHeight } from './BottomTabBar';
import { MaybeScreen, MaybeScreenContainer } from './ScreenFallback';
export default function BottomTabView(props) {
  const {
    tabBar = props => /*#__PURE__*/React.createElement(BottomTabBar, props),
    state,
    navigation,
    descriptors,
    safeAreaInsets,
    detachInactiveScreens = Platform.OS === 'web' || Platform.OS === 'android' || Platform.OS === 'ios',
    sceneContainerStyle
  } = props;
  const focusedRouteKey = state.routes[state.index].key;
  const [loaded, setLoaded] = React.useState([focusedRouteKey]);

  if (!loaded.includes(focusedRouteKey)) {
    setLoaded([...loaded, focusedRouteKey]);
  }

  const dimensions = SafeAreaProviderCompat.initialMetrics.frame;
  const [tabBarHeight, setTabBarHeight] = React.useState(() => getTabBarHeight({
    state,
    descriptors,
    dimensions,
    layout: {
      width: dimensions.width,
      height: 0
    },
    insets: { ...SafeAreaProviderCompat.initialMetrics.insets,
      ...props.safeAreaInsets
    },
    style: descriptors[state.routes[state.index].key].options.tabBarStyle
  }));

  const renderTabBar = () => {
    return /*#__PURE__*/React.createElement(SafeAreaInsetsContext.Consumer, null, insets => {
      var _ref, _safeAreaInsets$top, _ref2, _safeAreaInsets$right, _ref3, _safeAreaInsets$botto, _ref4, _safeAreaInsets$left;

      return tabBar({
        state: state,
        descriptors: descriptors,
        navigation: navigation,
        insets: {
          top: (_ref = (_safeAreaInsets$top = safeAreaInsets === null || safeAreaInsets === void 0 ? void 0 : safeAreaInsets.top) !== null && _safeAreaInsets$top !== void 0 ? _safeAreaInsets$top : insets === null || insets === void 0 ? void 0 : insets.top) !== null && _ref !== void 0 ? _ref : 0,
          right: (_ref2 = (_safeAreaInsets$right = safeAreaInsets === null || safeAreaInsets === void 0 ? void 0 : safeAreaInsets.right) !== null && _safeAreaInsets$right !== void 0 ? _safeAreaInsets$right : insets === null || insets === void 0 ? void 0 : insets.right) !== null && _ref2 !== void 0 ? _ref2 : 0,
          bottom: (_ref3 = (_safeAreaInsets$botto = safeAreaInsets === null || safeAreaInsets === void 0 ? void 0 : safeAreaInsets.bottom) !== null && _safeAreaInsets$botto !== void 0 ? _safeAreaInsets$botto : insets === null || insets === void 0 ? void 0 : insets.bottom) !== null && _ref3 !== void 0 ? _ref3 : 0,
          left: (_ref4 = (_safeAreaInsets$left = safeAreaInsets === null || safeAreaInsets === void 0 ? void 0 : safeAreaInsets.left) !== null && _safeAreaInsets$left !== void 0 ? _safeAreaInsets$left : insets === null || insets === void 0 ? void 0 : insets.left) !== null && _ref4 !== void 0 ? _ref4 : 0
        }
      });
    });
  };

  const {
    routes
  } = state;
  return /*#__PURE__*/React.createElement(SafeAreaProviderCompat, null, /*#__PURE__*/React.createElement(MaybeScreenContainer, {
    enabled: detachInactiveScreens,
    style: styles.container
  }, routes.map((route, index) => {
    const descriptor = descriptors[route.key];
    const {
      lazy = true,
      unmountOnBlur
    } = descriptor.options;
    const isFocused = state.index === index;

    if (unmountOnBlur && !isFocused) {
      return null;
    }

    if (lazy && !loaded.includes(route.key) && !isFocused) {
      // Don't render a lazy screen if we've never navigated to it
      return null;
    }

    const {
      header = ({
        layout,
        options
      }) => /*#__PURE__*/React.createElement(Header, _extends({}, options, {
        layout: layout,
        title: getHeaderTitle(options, route.name)
      }))
    } = descriptor.options;
    return /*#__PURE__*/React.createElement(MaybeScreen, {
      key: route.key,
      style: [StyleSheet.absoluteFill, {
        zIndex: isFocused ? 0 : -1
      }],
      visible: isFocused,
      enabled: detachInactiveScreens
    }, /*#__PURE__*/React.createElement(BottomTabBarHeightContext.Provider, {
      value: tabBarHeight
    }, /*#__PURE__*/React.createElement(Screen, {
      focused: isFocused,
      route: descriptor.route,
      navigation: descriptor.navigation,
      headerShown: descriptor.options.headerShown,
      headerTransparent: descriptor.options.headerTransparent,
      headerStatusBarHeight: descriptor.options.headerStatusBarHeight,
      header: header({
        layout: dimensions,
        route: descriptor.route,
        navigation: descriptor.navigation,
        options: descriptor.options
      }),
      style: sceneContainerStyle
    }, descriptor.render())));
  })), /*#__PURE__*/React.createElement(BottomTabBarHeightCallbackContext.Provider, {
    value: setTabBarHeight
  }, renderTabBar()));
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden'
  }
});
//# sourceMappingURL=BottomTabView.js.map