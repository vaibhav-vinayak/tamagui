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
      <Line x1="6" x2="6" y1="3" y2="15" stroke={color} />
      <_Circle cx="18" cy="6" r="3" stroke={color} />
      <_Circle cx="6" cy="18" r="3" stroke={color} />
      <Path d="M18 9a9 9 0 0 1-9 9" stroke={color} />
    </Svg>
  )
}

Icon.displayName = 'GitBranch'

export const GitBranch = memo<IconProps>(themed(Icon))
