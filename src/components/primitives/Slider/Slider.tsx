import React from 'react';
import { PanResponder, View } from 'react-native';
import {
  FormControlContext,
  IFormControlContext,
} from '../../composites/FormControl';
import Box from '../Box';
import { usePropsConfig } from '../../../hooks';
import type { ISliderProps } from './props';
import { SliderContext } from './Context';

type StateType = {
  barSize: number | null;
  deltaValue: number;
  value: number;
};

class NBSlider extends React.Component<
  ISliderProps & {
    thumbSize?: number;
    sliderSize?: number;
    activeColor?: string;
  },
  StateType
> {
  static contextType = SliderContext;
  state = {
    barSize: null,
    deltaValue: 0,
    value: this.props.defaultValue || 0,
  };

  panResponder = PanResponder.create({
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderMove: (_event, gestureState) =>
      !(this.props.isDisabled || this.props.isReadOnly) &&
      this.onMove(gestureState),
    onPanResponderRelease: () => this.onEndMove(),
    onPanResponderTerminate: () => {},
  });

  onMove(gestureState: any) {
    const { barSize } = this.state;
    const newDeltaValue = this.getValueFromBottomOffset(
      gestureState.dx,
      barSize,
      this.props.min || 0,
      this.props.max || 100
    );
    this.props.onChange &&
      this.props.onChange(this.state.value + newDeltaValue);
    this.setState({
      deltaValue: newDeltaValue,
    });
  }
  onEndMove() {
    const { value, deltaValue } = this.state;
    this.props.onChangeEnd && this.props.onChangeEnd(value + deltaValue);
    this.setState({ value: value + deltaValue, deltaValue: 0 });
  }

  onBarLayout = (event: any) => {
    const { width: barSize } = event.nativeEvent.layout;
    this.setState({ barSize });
  };

  capValueWithinRange = (value: number, range: number[]) => {
    if (value < range[0]) return range[0];
    if (value > range[1]) return range[1];
    return value;
  };

  getValueFromBottomOffset = (
    offset: number,
    barSize: number | null,
    rangeMin: number,
    rangeMax: number
  ) => {
    if (barSize === null) return 0;
    return ((rangeMax - rangeMin) * offset) / barSize;
  };

  getOffsetFromValue = (
    value: number,
    rangeMin: number,
    rangeMax: number,
    barSize: number | null
  ) => {
    if (barSize === null) return 0;
    const valueOffset = value - rangeMin;
    const totalRange = rangeMax - rangeMin;
    const percentage = valueOffset / totalRange;
    return barSize * percentage;
  };

  onAccessibilityAction = (event: any) => {
    const max = this.props.max ?? 100;
    const min = this.props.min ?? 0;

    const incrementStep = this.props.accessibilityIncrementSteps ?? max / 10;
    const decrementStep = this.props.accessibilityDecrementSteps ?? max / 10;

    switch (event.nativeEvent.actionName) {
      case 'increment':
        this.setState({
          value: Math.min(this.state.value + incrementStep, max),
        });
        break;
      case 'decrement':
        this.setState({
          value: Math.max(this.state.value - decrementStep, min),
        });
        break;
      default:
        break;
    }
  };

  render() {
    const { value, deltaValue, barSize } = this.state;
    const min = this.props.min ?? 0;
    const max = this.props.max ?? 100;
    const cappedValue = this.capValueWithinRange(value + deltaValue, [
      min,
      max,
    ]);

    const sliderOffset = this.getOffsetFromValue(
      cappedValue,
      min,
      max,
      barSize
    );

    return (
      <View
        accessible
        accessibilityRole="adjustable"
        accessibilityLabel={this.props.accessibilityLabel ?? 'Slider'}
        accessibilityValue={{
          min,
          max,
          now: value,
        }}
        accessibilityHint={this.props.accessibilityHint}
        accessibilityActions={[
          {
            name: 'increment',
            label: 'Increment',
          },
          {
            name: 'decrement',
            label: 'Decrement',
          },
        ]}
        onAccessibilityAction={this.onAccessibilityAction}
      >
        <SliderContext.Provider
          value={{
            sliderOffset,
            trackColor: this.props.trackColor,
            colorScheme: this.props.activeColor,
            barSize: this.state.barSize,
            panResponder: this.panResponder,
            isReversed: this.props.isReversed,
            thumbSize: this.props.thumbSize,
            sliderSize: this.props.sliderSize,
            value: this.state.value,
          }}
        >
          <Box
            position="relative"
            display="flex"
            my={3}
            justifyContent="center"
            alignItems="center"
            minHeight={3}
            minWidth="100%"
            {...this.props}
            onLayout={this.onBarLayout}
          >
            {this.state.barSize && this.state.value && this.props.children}
          </Box>
        </SliderContext.Provider>
      </View>
    );
  }
}

const Slider = ({ ...props }: ISliderProps) => {
  const formControlContext: IFormControlContext = React.useContext(
    FormControlContext
  );
  const newProps = usePropsConfig('Slider', {
    ...formControlContext,
    ...props,
  });

  return <NBSlider {...newProps} />;
};

export default Slider;
