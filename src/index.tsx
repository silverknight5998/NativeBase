export default {
  multiply(a: number, b: number) {
    return Promise.resolve(a * b);
  },
};

import {
  AppBar,
  Badge,
  IBadgeProps,
  IconButton,
  IIconButtonProps,
  AlertTitle,
  AlertDescription,
  AlertIcon,
  Alert,
  IAlertProps,
  AspectRatio,
  IAspectRatioProps,
  Avatar,
  AvatarBadge,
  AvatarGroup,
  BreadCrumb,
  BreadCrumbItem,
  BreadCrumbLink,
  IBreadCrumbProps,
  CloseButton,
  ICloseButtonProps,
  Container,
  IContainerProps,
  Divider,
  IDividerProps,
  Kbd,
  Progress,
  Accordion,
  IAccordionProps,
  AccordionItem,
  IAccordionItemProps,
  AccordionButton,
  IAccordionButtonProps,
  AccordionPanel,
  IAccordionPanelProps,
  AccordionIcon,
  IAccordionIconProps,
  IAccordionContextProps,
  IAccordionItemContextProps,
  Skeleton,
  ISkeletonProps,
  SkeletonCircle,
  ISkeletonCircleProps,
  SkeletonText,
  ISkeletonTextProps,
  FormControl,
  IFormControlProps,
  FormLabel,
  IFormLabelProps,
  FormErrorMessage,
  IFormErrorMessageProps,
  FormHelperText,
  IFormHelperTextProps,
  IFormControlContext,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  StatArrow,
  StatGroup,
  Tag,
  TagCloseButton,
  Code,
  Center,
  Square,
  Circle,
  ICenterProps,
  ICircleProps,
  ISquareProps,
  Wrap,
  IWrapProps,
  PinInput,
  IPinInputProps,
  PinInputField,
  IPinInputFieldProps,
  Fade,
  useFadeTransition,
  IFadeProps,
  ScaleFade,
  IScaleFadeProps,
  Slide,
  ISlideProps,
  SlideFade,
  ISlideFadeProps,
  NumberInput,
  INumberInputProps,
  NumberInputField,
  INumberInputFieldProps,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  INumberInputContext,
  INumberInputSteppersProps,
  INumberInputStepperProps,
  Collapse,
  CircularProgress,
  CircularProgressLabel,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  AlertDialog,
  AlertDialogContent,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  IToastProps,
  useToast,
  Menu,
  MenuItem,
  MenuGroup,
  MenuItemOption,
  MenuOptionGroup,
  IMenuProps,
  IMenuItemProps,
  IMenuItemOptionProps,
  IMenuGroupProps,
  IMenuOptionGroupProps,
  SimpleGrid,
  ISimpleGridProps,
  Tabs,
  TabBar,
  Tab,
  ITagProps,
  TabViews,
  TabView,
  ITabsProps,
  ITabBarProps,
  ITabProps,
  ITabViewsProps,
  ITabViewProps,
  ITabsContextProps,
  Actionsheet,
  ActionsheetContent,
  ActionsheetFooter,
  ActionsheetHeader,
  ActionsheetItem,
  IActionsheetProps,
  IActionsheetContentProps,
  IActionsheetFooterProps,
  IActionsheetHeaderProps,
  IActionsheetItemProps,
  Snackbar,
  useSnackbar,
  ISnackbarProps,
  IuseSnackbarProps,
  Fab,
  IFabProps,
  Typeahead,
  useTypeahead,
} from './components/composites';

import {
  View,
  Text,
  ITextProps,
  Checkbox,
  ICheckboxProps,
  CheckboxGroup,
  ICheckboxGroupProps,
  Radio,
  IRadioProps,
  IRadioValue,
  RadioGroup,
  IRadioGroupProps,
  Button,
  ButtonGroup,
  IButtonProps,
  Column,
  Row,
  Box,
  IBoxProps,
  Stack,
  VStack,
  HStack,
  ZStack,
  Slider,
  SliderThumb,
  SliderTrack,
  SliderFilledTrack,
  ISliderProps,
  ISliderContextProps,
  Icon,
  createIcon,
  IIconProps,
  Path,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  IInputProps,
  Image,
  IImageProps,
  Spinner,
  ISpinnerProps,
  Heading,
  IHeadingProps,
  Flex,
  Switch,
  ISwitchProps,
  IFlexProps,
  TextArea,
  Link,
  ILinkProps,
  Spacer,
  List,
  ListItem,
  ListIcon,
  Ol,
  Ul,
  IListProps,
  IListItemProps,
  Select,
  ISelectProps,
  ISelectItemProps,
} from './components/primitives';

export * from './theme';
export * from './core';
export * from './hooks';
export * from './color-mode';

export {
  AppBar,
  Alert,
  AlertTitle,
  AlertDescription,
  AlertIcon,
  AspectRatio,
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Badge,
  Button,
  ButtonGroup,
  IconButton,
  Heading,
  View,
  Text,
  Code,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Column,
  Row,
  Center,
  Square,
  Circle,
  Box,
  Stack,
  VStack,
  HStack,
  ZStack,
  Slider,
  SliderThumb,
  SliderTrack,
  SliderFilledTrack,
  Icon,
  createIcon,
  Path,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Spinner,
  Image,
  Switch,
  Flex,
  Kbd,
  BreadCrumb,
  BreadCrumbItem,
  BreadCrumbLink,
  CloseButton,
  Container,
  Divider,
  Link,
  Progress,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  StatArrow,
  StatGroup,
  Tag,
  TagCloseButton,
  TextArea,
  Wrap,
  PinInput,
  PinInputField,
  Fade,
  useFadeTransition,
  ScaleFade,
  Slide,
  SlideFade,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Spacer,
  Collapse,
  CircularProgress,
  CircularProgressLabel,
  List,
  ListItem,
  ListItem as Li,
  ListIcon,
  Ol,
  Ul,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  AlertDialog,
  AlertDialogContent,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  useToast,
  Menu,
  MenuItem,
  MenuGroup,
  MenuItemOption,
  MenuOptionGroup,
  SimpleGrid,
  Tabs,
  TabBar,
  Tab,
  TabViews,
  TabView,
  Actionsheet,
  ActionsheetContent,
  ActionsheetFooter,
  ActionsheetHeader,
  ActionsheetItem,
  Snackbar,
  useSnackbar,
  Fab,
  Typeahead,
  useTypeahead,
  Select,
};
export type {
  IAlertProps,
  IAspectRatioProps,
  IHeadingProps,
  IBadgeProps,
  IButtonProps,
  IIconButtonProps,
  ITextProps,
  ICheckboxProps,
  ICheckboxGroupProps,
  IRadioProps,
  IRadioValue,
  IRadioGroupProps,
  ICenterProps,
  ICircleProps,
  ISquareProps,
  IBoxProps,
  IBreadCrumbProps,
  ITagProps,
  ISliderProps,
  ISliderContextProps,
  IIconProps,
  IInputProps,
  ISpinnerProps,
  IImageProps,
  ICloseButtonProps,
  IContainerProps,
  IDividerProps,
  ILinkProps,
  IAccordionProps,
  IAccordionItemProps,
  IAccordionButtonProps,
  IAccordionPanelProps,
  IAccordionIconProps,
  IAccordionContextProps,
  IAccordionItemContextProps,
  ISkeletonProps,
  ISkeletonCircleProps,
  ISkeletonTextProps,
  IFormControlProps,
  IFormLabelProps,
  IFormErrorMessageProps,
  IFormHelperTextProps,
  IFormControlContext,
  ISwitchProps,
  IFlexProps,
  IWrapProps,
  IPinInputProps,
  IPinInputFieldProps,
  IFadeProps,
  IScaleFadeProps,
  ISlideProps,
  ISlideFadeProps,
  INumberInputProps,
  INumberInputFieldProps,
  INumberInputContext,
  INumberInputSteppersProps,
  INumberInputStepperProps,
  IListProps,
  IListItemProps,
  IToastProps,
  IMenuProps,
  IMenuItemProps,
  IMenuItemOptionProps,
  IMenuGroupProps,
  IMenuOptionGroupProps,
  ISimpleGridProps,
  ITabsProps,
  ITabBarProps,
  ITabProps,
  ITabViewsProps,
  ITabViewProps,
  ITabsContextProps,
  IActionsheetProps,
  IActionsheetContentProps,
  IActionsheetFooterProps,
  IActionsheetHeaderProps,
  IActionsheetItemProps,
  ISnackbarProps,
  IuseSnackbarProps,
  IFabProps,
  ISelectProps,
  ISelectItemProps,
};
