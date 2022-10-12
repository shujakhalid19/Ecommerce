/// <reference types="react" />
import { DefaultNavigatorOptions, ParamListBase, TabNavigationState, TabRouterOptions } from '@react-navigation/native';
import type { BottomTabNavigationConfig, BottomTabNavigationEventMap, BottomTabNavigationOptions } from '../types';
declare type Props = DefaultNavigatorOptions<ParamListBase, TabNavigationState<ParamListBase>, BottomTabNavigationOptions, BottomTabNavigationEventMap> & TabRouterOptions & BottomTabNavigationConfig;
declare function BottomTabNavigator({ initialRouteName, backBehavior, children, screenListeners, screenOptions, sceneContainerStyle, ...restWithDeprecated }: Props): JSX.Element;
declare const _default: <ParamList extends ParamListBase>() => import("@react-navigation/native").TypedNavigator<ParamList, TabNavigationState<ParamListBase>, BottomTabNavigationOptions, BottomTabNavigationEventMap, typeof BottomTabNavigator>;
export default _default;
