import { TamaguiLogo, ThemeTint, ThemeTintAlt } from '@tamagui/logo'
import { CheckCircle, ChevronRight, Copy, Link as LinkIcon } from '@tamagui/lucide-icons'
import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import type { ImageProps, ParagraphProps, XStackProps } from 'tamagui'
import {
  Adapt,
  Button,
  Card,
  H1,
  H2,
  H3,
  H4,
  H5,
  Image,
  Paragraph,
  Separator,
  Spacer,
  Text,
  Theme,
  ThemeableStack,
  TooltipSimple,
  XGroup,
  XStack,
  YStack,
  styled,
} from 'tamagui'
import { LinearGradient } from 'tamagui/linear-gradient'
import type { LinkProps } from '~/components/Link'
import { Link } from '~/components/Link'

import { AvatarCard } from '~/components/AvatarCard'
import { Code, CodeInline } from '~/components/Code'
import { DataTable } from '~/components/DataTable'
import { Features } from '~/components/Features'
import { HR } from '~/components/HR'
import { LI } from '~/components/LI'
import { Notice, NoticeFrame } from '~/components/Notice'
import { OffsetBox } from '~/components/OffsetBox'
import { SubTitle } from '~/components/SubTitle'
import { TamaguiCard } from '~/components/TamaguiCard'
import { BenchmarkChart } from '~/features/site/benchmarks/BenchmarkChart'
import { BenchmarkChartNative } from '~/features/site/benchmarks/BenchmarkChartNative'
import { BenchmarkChartWeb } from '~/features/site/benchmarks/BenchmarkChartWeb'
import { BentoCard } from '~/features/bento/BentoCard'
import { MediaPlayer } from '~/features/site/home/MediaPlayer'
import { SocialLinksRow } from '~/features/site/home/SocialLinksRow'
import { ExternalIcon } from '~/features/icons/ExternalIcon'
import { useClipboard } from '~/hooks/useClipboard'
import { DocCodeBlock } from '../docs/DocsCodeBlock'
import { DocsTabs } from '../docs/DocsTabs'
import { HeroContainer } from '../docs/HeroContainer'
import { Highlights } from '../docs/Highlights'
import { InlineTabs } from '../docs/InlineTabs'
import { PropsTable } from '../docs/PropsTable'
import { SponsorButton } from '~/features/docs/SponsorButton'
import { UL } from '~/components/UL'
import * as Demos from '../docs/demos'
import { unwrapText } from '~/helpers/unwrapText'

import type { YStackProps } from 'tamagui'
import { HomeAnimations } from '../site/home/HomeAnimations'
import { LogoCard } from '~/components/LogoCard'

const Preview = (props: YStackProps) => (
  <YStack
    data-preview
    margin={0}
    overflow="visible"
    borderWidth={1}
    borderColor="$borderColor"
    borderTopLeftRadius="$3"
    borderTopRightRadius="$3"
    mb="$-3"
    padding="$3"
    pb="$4"
    position="relative"
    ai="flex-start"
    {...props}
  />
)

const IntroParagraph = ({ children, large, disableUnwrapText, ...props }: any) => {
  return (
    <Paragraph
      tag="p"
      size={large ? '$9' : '$8'}
      mb="$4"
      fow={large ? '200' : '300'}
      $sm={{
        size: '$7',
      }}
      {...props}
    >
      {disableUnwrapText ? children : unwrapText(children)}
    </Paragraph>
  )
}

const TableFrame = styled(ThemeableStack, {
  bordered: true,
  br: '$4',
  ov: 'hidden',
  my: '$4',
})

const Table = ({ heading, children, ...props }) => {
  return (
    <TableFrame className="no-scrollbar" overflow={'scroll' as any} {...props}>
      {!!heading && (
        <TableCell size="$4" bg="$color1" fow="500" color="$color9">
          {heading}
        </TableCell>
      )}
      <XStack minWidth="100%" ai="stretch">
        {children}
      </XStack>
    </TableFrame>
  )
}

const code = (props) => {
  const {
    hero,
    line,
    scrollable,
    className,
    children,
    id,
    showLineNumbers,
    collapsible,
    ...rest
  } = props
  if (!className) {
    return <CodeInline>{unwrapText(children)}</CodeInline>
  }
  return (
    <YStack mt="$3">
      <DocCodeBlock
        isHighlightingLines={line !== undefined}
        className={className}
        isHero={hero !== undefined}
        showLineNumbers={showLineNumbers !== undefined}
        {...rest}
      >
        {children}
      </DocCodeBlock>
    </YStack>
  )
}

const Anchor = ({
  href = '',
  replace,
  children,
  ...props
}: LinkProps & ParagraphProps) => {
  return (
    <Link asChild href={href} replace={replace}>
      {/* @ts-ignore */}
      <Paragraph
        className="link"
        tag="a"
        // @ts-ignore
        fontSize="inherit"
        display="inline"
        cursor="pointer"
        {...props}
      >
        {children}
        {/* @ts-ignore */}
        {href.startsWith?.('http') ? (
          <>
            &nbsp;
            <Text
              // @ts-ignore
              fontSize="inherit"
              display="inline-flex"
              y={2}
              ml={-1}
            >
              <ExternalIcon />
            </Text>
          </>
        ) : null}
      </Paragraph>
    </Link>
  )
}

const TableCell = styled(Paragraph, {
  bbw: 1,
  bbc: '$borderColor',
  fd: 'row',
  ai: 'center',
  pos: 'relative',
  f: 1,
  jc: 'center',
  ta: 'center',
  h: '$4',
  p: '$2',
  px: '$3',
  size: '$5',
  ellipse: true,

  variants: {
    head: {
      true: {
        bg: '$color1',
      },
    },
    highlight: {
      true: {
        bg: '$yellow2',
      },
    },
  } as const,
})

const TableCol = styled(ThemeableStack, {
  brw: 1,
  brc: '$borderColor',
  f: 1,
  mr: -1,
  fd: 'column',
})

const TableHighlight = styled(YStack, {
  fullscreen: true,
  bg: '$yellow1',
})

export const components = {
  Tabs: DocsTabs,
  InlineTabs: InlineTabs,

  SocialLinksRow: () => (
    <YStack mt="$6" mx="$-4">
      <SocialLinksRow />
    </YStack>
  ),

  Wide: (props) => (
    <YStack mx="$-8" $sm={{ mx: '$-2' }}>
      {props.children}
    </YStack>
  ),

  Adapt,
  LogoCard,

  Table,
  TableCell,
  TableHighlight,
  TableCol,

  Spacer,
  ExampleAnimations: HomeAnimations,
  ScrollView,
  Features,
  Text,
  Paragraph,
  OffsetBox,
  YStack,
  XStack,
  Theme,
  BenchmarkChart,
  Separator,
  Code,
  HeroContainer,
  BenchmarkChartNative,
  BenchmarkChartWeb,
  TooltipSimple,

  ...Demos,

  TamaguiDemo: () => {
    return <TamaguiLogo />
  },

  Highlights,
  ThemeTint,
  PropsTable,
  DataTable,
  Description: SubTitle,
  UL,
  LI,

  TamaguiExamplesCode: () => null,

  TLDR: (props) => {
    return (
      <YStack
        $gtMd={{ mx: '$-4' }}
        mt="$5"
        mb="$3"
        px="$6"
        py="$2"
        br="$6"
        bw={1}
        o={0.8}
        bc="$borderColor"
        {...props}
      />
    )
  },

  Button,

  Beta: () => (
    <Button
      accessibilityLabel="Beta blog post"
      pe="none"
      size="$2"
      theme="pink_alt2"
      pos="absolute"
      t={-15}
      r={-75}
      rotate="5deg"
    >
      Beta
    </Button>
  ),

  IntroParagraph,

  Grid: (props) => <XStack flexWrap="wrap" jc="space-between" {...props} />,
  Card: TamaguiCard,

  AvatarCard: AvatarCard,

  Note: (props) => (
    <YStack
      tag="aside"
      mt="$5"
      mb="$5"
      borderRadius="$3"
      // & & p
      // fontSize: '$3',
      // color: '$slate11',
      // lineHeight: '23px',
      // margin: 0,
      {...props}
    />
  ),

  Notice,

  h1: (props) => <H1 width="max-content" pos="relative" mb="$2" {...props} />,

  h2: ({ children, ...props }) => (
    <H2
      pos="relative"
      width={`fit-content` as any}
      pt="$8"
      mt="$-4"
      mb="$2"
      data-heading
      {...props}
    >
      {children}
    </H2>
  ),

  h3: ({ children, id, ...props }) => (
    <LinkHeading pt="$8" mt="$-4" mb="$1" id={id}>
      <H3 pos="relative" width={`fit-content` as any} id={id} data-heading {...props}>
        {children}
      </H3>
      {getNonTextChildren(children)}
    </LinkHeading>
  ),

  h4: (props) => (
    <H4 pos="relative" width={`fit-content` as any} mt="$4" mb="$3" {...props} />
  ),

  h5: (props) => <H5 mt="$4" {...props} />,

  p: (props) => (
    <Paragraph
      className="docs-paragraph"
      display="block"
      size="$6"
      my="$2.5"
      {...props}
    />
  ),

  a: Anchor,

  hr: HR,

  ul: ({ children }) => {
    return (
      <UL my="$4">
        {React.Children.toArray(children).map((x) => (typeof x === 'string' ? null : x))}
      </UL>
    )
  },

  ol: (props) => <YStack {...props} tag="ol" mb="$3" />,

  li: (props) => {
    return (
      <LI size="$6" my="$1.5" className="docs-paragraph">
        {props.children}
      </LI>
    )
  },

  strong: (props) => (
    <Paragraph tag="strong" fontSize="inherit" {...props} fontWeight="700" />
  ),

  img: ({ ...props }) => (
    <YStack tag="span" my="$6">
      {/* TODO make this a proper <Image /> component */}
      <YStack tag="img" {...props} maxWidth="100%" />
    </YStack>
  ),

  pre: ({ children }) => <>{children}</>,

  code,

  Image: ({
    children,
    size,
    overlap,
    linked,
    ...props
  }: ImageProps & { size?: 'hero'; overlap?: boolean; linked?: boolean }) => {
    const content = (
      <OffsetBox
        size={size}
        tag="figure"
        f={1}
        mx={0}
        mb="$3"
        ai="center"
        jc="center"
        ov="hidden"
        {...(overlap && {
          mt: '$-6',
        })}
      >
        <Image maxWidth="100%" {...props} />
        {!!children && (
          <Text tag="figcaption" lineHeight={23} color="$colorPress" mt="$2">
            {children}
          </Text>
        )}
      </OffsetBox>
    )

    if (linked) {
      return (
        <Link target="_blank" href={props.src as string}>
          {content}
        </Link>
      )
    }

    return content
  },

  Video: ({
    small,
    large,
    src,
    children = '',
    muted = true,
    autoPlay = true,
    controls,
    size,
    ...props
  }) => (
    <YStack tag="figure" mx={0} my="$6">
      <OffsetBox size={size}>
        <video
          src={src}
          autoPlay={autoPlay}
          playsInline
          muted={muted}
          controls={controls}
          loop
          style={{ width: '100%', display: 'block' }}
        ></video>
      </OffsetBox>
      <Text tag="figcaption" lineHeight={23} mt="$2" color="$colorPress">
        {children}
      </Text>
    </YStack>
  ),

  blockquote: ({ children, ...props }) => {
    return (
      <YStack
        my="$4"
        px="$6"
        ml="$3"
        borderLeftWidth={1}
        borderColor="$borderColor"
        jc="center"
        {...props}
      >
        <Paragraph
          fontFamily="$silkscreen"
          whiteSpace="revert"
          size="$8"
          lh="$9"
          fow="300"
          color="$color"
          opacity={0.65}
        >
          {unwrapText(children)}
        </Paragraph>
      </YStack>
    )
  },

  Preview: (props) => {
    return <Preview {...props} mt="$5" />
  },

  MediaPlayerDemo: ({ theme, ...props }) => {
    return (
      <Theme name={theme}>
        <MediaPlayer {...props} />
      </Theme>
    )
  },

  GroupDisabledDemo: () => {
    return (
      <XGroup als="center" disabled>
        <XGroup.Item>
          <Button>First</Button>
        </XGroup.Item>
        <XGroup.Item>
          <Button>Second</Button>
        </XGroup.Item>
        <XGroup.Item>
          <Button>Third</Button>
        </XGroup.Item>
      </XGroup>
    )
  },

  DemoButton: () => <Button>Hello world</Button>,

  BentoCard: BentoCard,

  SponsorButton,

  SponsorNotice: () => {
    return (
      <NoticeFrame theme="red">
        <YStack maw="100%" space>
          <H4 color="$color10" fontFamily="$silkscreen">
            👋 Hey! Listen!
          </H4>
          <YStack ov="hidden" f={1} o={0.85} space>
            <Paragraph>
              Tamagui is fully OSS, self-funded and built by{' '}
              <a href="https://twitter.com/natebirdman" target="_blank" rel="noreferrer">
                me
              </a>
              .
            </Paragraph>
            <Paragraph>
              My goal is to support Tamagui development with sponsorships that get early
              access to <a href="#sponsors">some really interesting</a> new features.
            </Paragraph>
            <SponsorButton />
          </YStack>
        </YStack>
      </NoticeFrame>
    )
  },

  Blog: {
    ThemeBuilder: {
      ExamplePalette: React.lazy(() =>
        import('../site/blog/BlogThemeBuilderExamples').then((x) => ({
          default: x.ExamplePalette,
        }))
      ),
      ExampleTemplate: React.lazy(() =>
        import('../site/blog/BlogThemeBuilderExamples').then((x) => ({
          default: x.ExampleTemplate,
        }))
      ),
    },
  },

  DocsIntro: () => {
    return (
      <YStack gap="$1">
        <ThemeTintAlt offset={2}>
          <IntroParagraph mt="$4">
            Tamagui makes styling React easy and fast on web, Android, and iOS. It focuses
            on platform-native output, with an optional optimizing compiler that
            significantly improves your app or site performance.
          </IntroParagraph>

          <Paragraph size="$6">Tamagui is three things:</Paragraph>

          <UL mt="$4" gap="$2">
            <ThemeTintAlt>
              <LI size="$6" color="$color11">
                <Anchor href="/docs/core/introduction">
                  <CodeInline>
                    <span style={{ color: 'var(--color12)' }}>@tamagui/core</span>
                  </CodeInline>
                </Anchor>
                &nbsp;is a style library that expands on the React Native style API with
                many features from CSS - all without any external dependency except for
                React.
              </LI>
            </ThemeTintAlt>

            <ThemeTintAlt offset={2}>
              <LI size="$6" color="$color11">
                {/* @ts-ignore */}
                <Anchor href="/docs/intro/compiler-install">
                  <CodeInline>
                    <span style={{ color: 'var(--color12)' }}>@tamagui/static</span>
                  </CodeInline>
                </Anchor>{' '}
                is an optimizing compiler that{' '}
                <Anchor href="/docs/intro/benchmarks">
                  significantly improves performance
                </Anchor>{' '}
                by hoisting objects and CSS at build-time, leaving behind flatter React
                trees.
              </LI>
            </ThemeTintAlt>

            <ThemeTintAlt offset={3}>
              <LI size="$6" color="$color11">
                <Anchor href="/docs/components/stacks">
                  <CodeInline>
                    <span style={{ color: 'var(--color12)' }}>tamagui</span>
                  </CodeInline>
                </Anchor>{' '}
                is a large universal component kit in styled and unstyled forms.
              </LI>
            </ThemeTintAlt>
          </UL>
        </ThemeTintAlt>
      </YStack>
    )
  },

  GetStarted: () => {
    const clipBoard = useClipboard(`npm create tamagui@latest`)

    return (
      <XStack gap="$4" f={1} fw="wrap" pt="$3" my="$5">
        <ThemeTintAlt>
          <Card f={1}>
            <Card.Header gap="$2">
              <H4 size="$4" color="$color9">
                Quick start
              </H4>
              <Paragraph size="$4" color="$color11">
                Choose from a few starters:
              </Paragraph>
            </Card.Header>

            <Card.Footer p="$6" pt={0}>
              <XStack ai="center" gap="$4" f={1}>
                <Code f={1} bg="$color4" p="$3" br="$4" size="$5">
                  npm create tamagui@latest
                </Code>
                <Button
                  position="absolute"
                  aria-label="Copy code to clipboard"
                  size="$2"
                  right="$3"
                  display="inline-flex"
                  icon={clipBoard.hasCopied ? CheckCircle : Copy}
                  onPress={() => {
                    clipBoard.onCopy()
                  }}
                  $xs={{
                    display: 'none',
                  }}
                >
                  Copy
                </Button>
              </XStack>
            </Card.Footer>
          </Card>
        </ThemeTintAlt>

        <Link asChild href="/docs/intro/installation">
          <Card
            tag="a"
            animation="quickest"
            f={1}
            y={0}
            hoverStyle={{ y: -2, bg: '$backgroundHover' }}
            pressStyle={{ y: 2, bg: '$color2' }}
          >
            <Card.Header gap="$2">
              <H4 size="$4" color="$color8">
                Install
              </H4>
              <Paragraph size="$6" color="$color9">
                Set up an app.
              </Paragraph>
            </Card.Header>

            <Card.Footer>
              <ChevronRight pos="absolute" b="$4" r="$4" color="$color11" />
            </Card.Footer>
          </Card>
        </Link>
      </XStack>
    )
  },

  Aside: ({ children, ...props }) => {
    const [cutoff, setCutoff] = useState(true)

    return (
      <YStack
        tag="aside"
        space="$2"
        bg="$color1"
        br="$4"
        p="$5"
        px="$5"
        pb="$10"
        mx="$-2"
        bc="$borderColor"
        bw={1}
        my="$4"
        pos="relative"
        {...(cutoff && {
          maxHeight: 300,
          overflow: 'hidden',
        })}
        {...props}
      >
        <YStack tag="span" my="$-5">
          {children}
        </YStack>

        {cutoff && (
          <LinearGradient
            pos="absolute"
            b={0}
            l={0}
            r={0}
            height={200}
            colors={['$background0', '$background']}
            zi={1000}
          >
            <Spacer f={1} />
            <Button onPress={() => setCutoff(!cutoff)} als="center">
              Show more
            </Button>
            <Spacer size="$4" />
          </LinearGradient>
        )}
      </YStack>
    )
  },
}

const LinkHeading = ({ id, children, ...props }: { id: string } & XStackProps) => (
  <XStack
    tag="a"
    href={`#${id}`}
    id={id}
    data-id={id}
    display="inline-flex"
    ai="center"
    space
    {...props}
  >
    {children}
    <YStack tag="span" opacity={0.3}>
      <LinkIcon size={12} color="var(--color)" aria-hidden />
    </YStack>
  </XStack>
)

const getNonTextChildren = (children) => {
  return React.Children.map(children, (x) => {
    if (typeof x === 'string') return null
    if (x['type'] === code) return null
    return x
  }).flat()
}
