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
      <Polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" stroke={color} />
      <Line x1="22" x2="16" y1="9" y2="15" stroke={color} />
      <Line x1="16" x2="22" y1="9" y2="15" stroke={color} />
    </Svg>
  )
}

Icon.displayName = 'VolumeX'

export const VolumeX = memo<IconProps>(themed(Icon))
