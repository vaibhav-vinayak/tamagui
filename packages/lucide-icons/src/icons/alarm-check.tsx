import type { IconProps } from '@tamagui/helpers-icon'
import { themed } from '@tamagui/helpers-icon'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import {
  Defs,
  Ellipse,
  G,
  Line,
  LinearGradient,
  Path,
  Polygon,
  Polyline,
  RadialGradient,
  Rect,
  Stop,
  Svg,
  SvgProps,
  Symbol,
  Use,
  Circle as _Circle,
  Text as _Text,
} from 'react-native-svg'

const Icon = (props: SvgProps) => {
  const { color = 'black', width = 24, height = 24, ...otherProps } = props
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <_Circle cx="12" cy="13" r="8" stroke={color} />
      <Path d="M5 3 2 6" stroke={color} />
      <Path d="m22 6-3-3" stroke={color} />
      <Path d="M6.38 18.7 4 21" stroke={color} />
      <Path d="M17.64 18.67 20 21" stroke={color} />
      <Path d="m9 13 2 2 4-4" stroke={color} />
    </Svg>
  )
}

Icon.displayName = 'AlarmCheck'

export const AlarmCheck = memo<IconProps>(themed(Icon))
