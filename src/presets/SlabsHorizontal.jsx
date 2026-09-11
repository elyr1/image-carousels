import { Blinds } from 'feral-blinds'
import 'feral-blinds/blinds.css'

export default function SlabsHorizontal({ items, navigate }) {
  return (
<div style={{ height: 520 }}>
  <Blinds
    items={items}
    mode="ring"
    labelStyle="steady"
    labelPosition="bottom"
    spread={0.4}
    perspective={2250}
    radius={0}
    gap={8}
    textSize={1.05}
    expandRatio={2.5}
    tuning={{ k: 180, c: 19, lean: 0.05, squeeze: 0.8 }}
    autoPlay={6000}
    showIndex={false}
    showBody={false}
  />
</div>
  )
}
