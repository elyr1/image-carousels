import SlabsHorizontal from './SlabsHorizontal.jsx'
import SlabsVertical from './SlabsVertical.jsx'
import CircularSpinnerV1 from './CircularSpinnerV1.jsx'
import CircularSpinnerNo2 from './CircularSpinnerNo2.jsx'
import TitledCircularSpinner from './TitledCircularSpinner.jsx'

export const presets = [
  { id: 'slabs-horizontal', name: 'Slabs (horizontal)', Component: SlabsHorizontal },
  { id: 'slabs-vertical', name: 'Slabs (vertical)', Component: SlabsVertical },
  { id: 'circular-spinner-v1', name: 'Circular spinner v1', Component: CircularSpinnerV1 },
  { id: 'circular-spinner-no-2', name: 'Circular spinner no 2', Component: CircularSpinnerNo2 },
  { id: 'titled-circular-spinner', name: 'Titled circular spinner', Component: TitledCircularSpinner },
]
