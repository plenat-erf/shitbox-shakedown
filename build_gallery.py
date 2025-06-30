import os
import json

GALLERY_DIR = 'photo_reel'
OUTPUT_JSON = os.path.join(GALLERY_DIR, 'gallery.json')

# List image files (add/remove extensions as needed)
IMAGE_EXTS = ('.jpg', '.jpeg', '.png', '.webp', '.gif')

images = [
    f for f in sorted(os.listdir(GALLERY_DIR))
    if f.lower().endswith(IMAGE_EXTS) and not f.startswith('.')
    and f != 'gallery.json'  # Don't include the manifest itself!
]

with open(OUTPUT_JSON, 'w') as fout:
    json.dump(images, fout, indent=2)

print(f'Wrote {len(images)} images to {OUTPUT_JSON}')
