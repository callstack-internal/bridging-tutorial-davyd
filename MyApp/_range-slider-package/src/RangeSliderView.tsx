import React, {Component, ComponentProps, createRef, ElementRef} from 'react';

import type {RangeSliderViewComponent} from './RangeSliderViewNativeComponent';
import RangeSliderViewNativeComponent, {
  RangeSliderViewCommands,
} from './RangeSliderViewNativeComponent';

type Props = ComponentProps<typeof RangeSliderViewNativeComponent>;

export class RangeSliderView extends Component<Props> {
  private innerRef = createRef<ElementRef<RangeSliderViewComponent>>();

  setLeftKnobValueProgrammatically = (value: number) => {
    const ref = this.innerRef.current;

    if (ref) {
      RangeSliderViewCommands.setLeftKnobValueProgrammatically(ref, value);
    }
  };

  setRightKnobValueProgrammatically = (value: number) => {
    const ref = this.innerRef.current;

    if (ref) {
      RangeSliderViewCommands.setRightKnobValueProgrammatically(ref, value);
    }
  };

  render() {
    return (
      <RangeSliderViewNativeComponent ref={this.innerRef} {...this.props} />
    );
  }
}
