# blinds

a carousel on real springs. hover a slat and it springs open with a small
overshoot while its neighbours squeeze aside. the same spring core runs nine
layouts: an expander strip, a drifting conveyor, a turning drum, the classic
centred carousel, a swipe stack, a dealt deck, a fan of cards, a folding
carousel with its own arrows and dots, and peek, one hero card with its
neighbours showing at the edges. drag it, flick it, scroll it sideways, or
let it play itself. one component, no dependencies.

live demo with every knob: [feralui.dev/blinds](https://feralui.dev/blinds)

## install

```
npm i feral-blinds
```

## use it

```tsx
import { Blinds } from 'feral-blinds'
import 'feral-blinds/blinds.css'

<div style={{ height: 480 }}>
  <Blinds
    items={projects.map(p => ({
      title: p.name,
      subtitle: p.oneLiner,
      meta: p.year,
      image: p.cover,
    }))}
    autoPlay={3400}
    onActivate={(i) => navigate(projects[i].href)}
  />
</div>
```

give the wrapper a height and the strip fills it. items without an `image`
get generated gradient art from their `hue`. clicking a slat that is already
open fires `onActivate`, which is where navigation belongs: the first click
opens a project, the second commits to it.

the fastest way to configure it is the demo: pick a layout, pull the dials
while it moves, copy the code.

## layouts

| mode | what it is |
| --- | --- |
| `strip` | the expander: hover opens a slat, neighbours squeeze aside. default |
| `reel` | a conveyor that drifts on its own and loops forever |
| `ring` | cards riding a turning cylinder |
| `snap` | the classic centred carousel, flick to skip cards |
| `stack` | a swipe pile, throw the top card away |
| `deck` | a fanned pile, swipe to deal the top card out and tuck it under |
| `fan` | a hand of cards held in an arc |
| `fold` | one flat card between folded wings, stepped by arrows and a dot pill |
| `peek` | one hero card at a time, neighbours peeking in at the edges; the photo drifts inside its frame as you swipe and the caption sits below the card |

## props

| prop | default | what it does |
| --- | --- | --- |
| `items` | | `{ title, subtitle?, meta?, image?, srcSet?, sizes?, hue?, render? }` per slat; `srcSet` and `sizes` pass straight to the photo so each card size loads the right file |
| `mode` | `'strip'` | one of the layouts above |
| `direction` | `'horizontal'` | `'vertical'` works everywhere except deck, fan, fold and peek |
| `expandRatio` | `5` | how many closed slats the open one is worth |
| `tuning` | `{ k: 170, c: 17, lean: 0.55, squeeze: 1 }` | spring stiffness and damping, artwork lean, neighbour squeeze |
| `shape` | `'slab'` | `'squircle'`, `'pill'`, `'arch'`, `'cut'` or `'slant'` |
| `shadow` | `'soft'` | `'deep'` or `'none'` |
| `labelStyle` | `'swing'` | `'steady'`, `'sideways'` or `'none'` |
| `labelPosition` | `'bottom'` | `'top'` or `'center'` |
| `radius` | `18` | slat corner radius, px |
| `gap` | `8` | space between slats, px |
| `textSize` | `1.05` | title size, rem |
| `showIndex` | `true` | the little number chip |
| `showBody` | `true` | the subtitle and meta block |
| `cardScale` | `1` | card size on the card layouts |
| `spread` | `1` | separation: spacing on the drum and fold, depth on snap and stack, looseness on deck and fan |
| `perspective` | `1500` | camera distance for snap, the drum and fold, px |
| `reelSlatWidth` | `120` | closed slat width on the reel, px |
| `deckSwing` | `1` | how far the dealt card travels outside the pile |
| `autoPlay` | `false` | ms per slide; on the reel and drum, the cruise tempo |
| `defaultOpen` | `null` | a slat to start open |
| `pinnable` | `true` | clicking keeps a slat open |
| `maxPins` | `1` | how many slats can be pinned at once |
| `interaction` | `'hover'` | `'scrub'` maps the pointer across the whole strip |
| `magnify` | `false` | neighbours grow toward the open slat instead of squeezing |
| `onOpen` | | fires when someone opens a slat |
| `onActivate` | | fires on a click on an already open slat |

## notes

- one rAF loop writes styles straight to the DOM, sleeps when everything has
  settled, and never runs React state per frame.
- on phones the strip stacks into tappable rows by itself; the belt and card
  layouts keep working with touch drags.
- under reduced motion the springs turn near critical, so the reveal still
  works but nothing bounces.
- slats are real buttons: arrow keys walk the strip and screen readers hear
  each title with its open state.

## license

MIT
