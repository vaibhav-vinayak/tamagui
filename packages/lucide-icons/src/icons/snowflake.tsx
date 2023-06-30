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
      <Line x1="2" x2="22" y1="12" y2="12" stroke={color} />
      <Line x1="12" x2="12" y1="2" y2="22" stroke={color} />
      <Path d="m20 16-4-4 4-4" stroke={color} />
      <Path d="m4 8 4 4-4 4" stroke={color} />
      <Path d="m16 4-4 4-4-4" stroke={color} />
      <Path d="m8 20 4-4 4 4" stroke={color} />
    </Svg>
  )
}

Icon.displayName = 'Snowflake'

export const Snowflake = memo<IconProps>(themed(Icon))
