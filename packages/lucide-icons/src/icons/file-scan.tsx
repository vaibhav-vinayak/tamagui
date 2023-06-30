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
      <Path
        d="M20 10V7.5L14.5 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h4.5"
        stroke={color}
      />
      <Polyline points="14 2 14 8 20 8" stroke={color} />
      <Path d="M16 22a2 2 0 0 1-2-2" stroke={color} />
      <Path d="M20 22a2 2 0 0 0 2-2" stroke={color} />
      <Path d="M20 14a2 2 0 0 1 2 2" stroke={color} />
      <Path d="M16 14a2 2 0 0 0-2 2" stroke={color} />
    </Svg>
  )
}

Icon.displayName = 'FileScan'

export const FileScan = memo<IconProps>(themed(Icon))
