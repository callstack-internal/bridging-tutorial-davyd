import React from 'react';
import {processColor} from 'react-native';
import type {ComponentProps} from 'react';
import type {ColorValue} from 'react-native';

import ConicGradientViewNativeComponent from './ConicGradientViewNativeComponent';

type Props = ComponentProps<typeof ConicGradientViewNativeComponent>;

export function ConicGradientView({
  colors,
  ...restProps
}: Props): React.JSX.Element {
  const normalizedColors = colors.map(color =>
    processColor(color),
  ) as ReadonlyArray<ColorValue>;

  return (
    <ConicGradientViewNativeComponent
      {...restProps}
      colors={normalizedColors}
    />
  );
}
