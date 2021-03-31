import type { RefObject } from 'react';
import type { ViewProps } from 'react-native';
import type { IBoxProps, IIconProps } from '../../primitives';

export type ITabsProps = IBoxProps & {
  align?: 'center' | 'end' | 'start';
  id?: string;
  colorScheme?: string;
  index?: number;
  defaultIndex?: number;
  isFitted?: boolean;
  isLazy?: boolean;
  isManual?: boolean;
  orientation?: 'horizontal' | 'vertical';
  size?: 'sm' | 'md' | 'lg';
  variant?: 'outline' | 'filled' | 'filled-outline';
  onChange?: (index: number) => void;
};

export type ITabBarProps = IBoxProps & {
  align?: 'center' | 'end' | 'start';
  isFitted?: boolean;
  size?: 'sm' | 'md' | 'lg';
  tablistRef?: RefObject<any>;
  tabListProps?: ViewProps;
};
export type ITabProps = IBoxProps & {
  isDisabled?: boolean;
  _active?: any;
  _disabled?: any;
  _hover?: any;
  item?: any;
};

export type ITabViewsProps = IBoxProps;
export type ITabViewProps = IBoxProps & {
  index?: number;
};

export type ITabsContextProps = {
  activeIconProps?: any;
  inactiveIconProps?: any;
  activeTabStyle?: any;
  inactiveTabStyle?: any;
  tabBarStyle?: any;
  isFitted?: boolean;
  align?: 'start' | 'center' | 'end';
  state?: any;
};
export type ITabContextProps = {
  isSelected?: boolean;
};

export type ITabsComponentType = ((props: ITabsProps) => JSX.Element) & {
  Bar: React.MemoExoticComponent<(props: ITabBarProps) => JSX.Element>;
  Tab: React.MemoExoticComponent<(props: ITabProps) => JSX.Element>;
  Views: React.MemoExoticComponent<(props: ITabViewsProps) => JSX.Element>;
  View: React.MemoExoticComponent<(props: ITabViewProps) => JSX.Element>;
  Icon: React.MemoExoticComponent<(props: IIconProps) => JSX.Element>;
};
