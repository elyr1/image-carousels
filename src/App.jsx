import { useState } from 'react'
import { presets } from './presets/index.js'
import { items } from './items.js'

function navigate(href) {
  // Links are optional. Add href to an item to enable navigation.
  if (href) window.location.assign(href)
}

export default function App() {
  const [presetId, setPresetId] = useState(presets[0].id)
  const preset = presets.find((entry) => entry.id === presetId)
  const Preset = preset.Component

  return (
    <main className="playground">
      <header className="playground-header">
        <h1>Blinds</h1>
        <div className="preset-picker">
          <label htmlFor="preset">Preset</label>
          <select
            id="preset"
            value={presetId}
            onChange={(event) => setPresetId(event.target.value)}
          >
            {presets.map((entry, index) => (
              <option key={entry.id} value={entry.id}>
                {index + 1}. {entry.name}
              </option>
            ))}
          </select>
        </div>
      </header>

      <section className="carousel-stage" aria-label={preset.name}>
        <Preset key={preset.id} items={items} navigate={navigate} />
      </section>
    </main>
  )
}
