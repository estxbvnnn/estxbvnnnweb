import sharp from 'sharp'
import pngToIco from 'png-to-ico'
import { writeFile, mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const SRC = resolve(root, '5c5855cb5186daa9d424f8189ed00dc2.jpg')
const PUBLIC = resolve(root, 'public')

await mkdir(PUBLIC, { recursive: true })

// Crop to square (center) then export the assets.
const square = (size) =>
  sharp(SRC).resize(size, size, { fit: 'cover', position: 'centre' }).png().toBuffer()

// 512px profile/og image
await sharp(SRC)
  .resize(512, 512, { fit: 'cover', position: 'centre' })
  .png()
  .toFile(resolve(PUBLIC, 'estxbvnnn.png'))

// Multi-size .ico
const sizes = [16, 32, 48, 64, 128, 256]
const pngs = await Promise.all(sizes.map(square))
const ico = await pngToIco(pngs)
await writeFile(resolve(PUBLIC, 'estxbvnnn.ico'), ico)

console.log('✓ Favicon generado: public/estxbvnnn.ico + public/estxbvnnn.png')
