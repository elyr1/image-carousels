# Blinds playground

Five saved presets, one selector, using the official feral-blinds 0.3.1 package.

## Run in VS Code

1. Extract this ZIP.
2. In VS Code, choose File > Open Folder and open the feral-blinds-playground folder.
3. Open Terminal > New Terminal and run:

```bash
npm ci
npm run dev
```

Open the local URL printed in the terminal, normally http://localhost:5173.

Requires Node.js 20.19+ in the 20.x line, or 22.12+. Node 24 is also supported. Vite's documented requirements: https://vite.dev/guide/

This is a complete separate project. The terminal must be in the folder containing this project's package.json.

## Add your images

1. Put image files in public/images/.
2. Edit src/items.js.
3. Give each item a title and image path:

```js
export const items = [
  { title: 'My first photo', image: '/images/photo-01.jpg' },
  { title: 'My second photo', image: '/images/photo-02.jpg' },
  { title: 'My third photo', image: '/images/photo-03.jpg' },
]
```

Six initial items are included. Their images are initially omitted, so the component displays its own built-in gradient artwork. All five presets share the same items list.

An optional href enables navigation when the component calls onActivate. No href means that callback has no navigation effect. The preset's onActivate expression is preserved exactly.

## Your presets

| Selector entry | Original JSX |
| --- | --- |
| 1. Slabs (horizontal) | src/presets/SlabsHorizontal.jsx |
| 2. Slabs (vertical) | src/presets/SlabsVertical.jsx |
| 3. Circular spinner v1 | src/presets/CircularSpinnerV1.jsx |
| 4. Circular spinner no 2 | src/presets/CircularSpinnerNo2.jsx |
| 5. Titled circular spinner | src/presets/TitledCircularSpinner.jsx |

Every supplied Blinds prop and 520px wrapper height are retained. Props omitted from your snippets remain omitted, preserving the package's defaults. The supplied JSX is wrapped in exported React functions so the selector can mount it. Selecting another preset mounts a fresh instance, restarting its autoplay cycle and clearing the previous preset's interaction state.

Only the page shell and preset selector have new styling. The project's stylesheet contains no overrides for the component's classes or animation.

## Package provenance

vendor/feral-blinds-0.3.1.tgz is the unchanged official npm tarball downloaded earlier in this conversation. package.json installs that file as feral-blinds, and each preset imports:

```js
import { Blinds } from 'feral-blinds'
import 'feral-blinds/blinds.css'
```

The package implementation and CSS have not been edited or reconstructed. Original licensing and documentation are included in vendor/LICENSE.feral-blinds and vendor/README.feral-blinds.md.

Official release: https://www.npmjs.com/package/feral-blinds/v/0.3.1
Demo: https://feralui.dev/blinds?v=drum
SHA-512: sha512-Xs4fsdr8CSVgSpy9WqZRcKf/Wpw4awewLdL8ivG8Atyr0TIMvPrLN0ys6BHACdLYHcrhV3KkX6Uhg+XTeZoNVQ==

Runtime dependencies: the vendored feral-blinds 0.3.1 release, react 19.3.0, and react-dom 19.3.0.
Build dependencies: vite 8.3.0 and @vitejs/plugin-react 6.1.1.
package-lock.json pins the complete installed dependency tree.

## Production build

```bash
npm run build
```

This creates dist/. Use npm run preview to serve that build locally.
