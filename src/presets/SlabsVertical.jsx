import { Blinds } from 'feral-blinds'
import 'feral-blinds/blinds.css'

export default function SlabsVertical({ items, navigate }) {
  return (
<div style={{ height: 520 }}>
  <Blinds
    items={items}
    mode="ring"
    labelStyle="steady"
    labelPosition="bottom"
    shadow="none"
    spread={0.4}
    direction="vertical"
    perspective={1800}
    radius={0}
    gap={8}
    textSize={1.05}
    expandRatio={3.2}
    tuning={{ k: 205, c: 19, lean: 0.05, squeeze: 0.8 }}
    autoPlay={6000}
    showIndex={false}
    showBody={false}
  />
</div>
  )
}
