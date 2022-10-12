/// <reference types="react" />
import type { ParamListBase, TabNavigationState } from '@react-navigation/native';
import type { BottomTabDescriptorMap, BottomTabNavigationConfig, BottomTabNavigationHelpers } from '../types';
declare type Props = BottomTabNavigationConfig & {
    state: TabNavigationState<ParamListBase>;
    navigation: BottomTabNavigationHelpers;
    descriptors: BottomTabDescriptorMap;
};
export default function BottomTabView(props: Props): JSX.Element;
export {};
