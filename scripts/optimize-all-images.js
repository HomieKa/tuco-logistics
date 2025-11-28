#!/usr/bin/env node
import { readdir } from "fs/promises";
import { join, dirname } from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const IMAGE_DIRS = [
  "src/assets/images/leadership",
  "src/assets/images/about_us",
  "src/assets/images/contact_us",
  "src/assets/images/our_approach",
  "src/assets/images",
];

const QUALITY = 85;
const MAX_WIDTH = 1200; // Reasonable max width for web images

async function optimizeImagesInDirectory(dir) {
  const dirPath = join(__dirname, "..", dir);

  try {
    const files = await readdir(dirPath);
    const jpgFiles = files.filter(
      (file) => file.endsWith(".jpg") || file.endsWith(".jpeg")
    );

    if (jpgFiles.length === 0) {
      return 0;
    }

    console.log(`\n📁 ${dir}/`);

    for (const file of jpgFiles) {
      const inputPath = join(dirPath, file);
      const outputPath = join(
        dirPath,
        file.replace(/\.(jpg|jpeg)$/i, ".webp")
      );

      console.log(`  ⚙️  Processing ${file}...`);

      try {
        await sharp(inputPath)
          .resize(MAX_WIDTH, MAX_WIDTH, {
            fit: "inside",
            withoutEnlargement: true,
          })
          .webp({ quality: QUALITY })
          .toFile(outputPath);

        console.log(`  ✅ Created ${file.replace(/\.(jpg|jpeg)$/i, ".webp")}`);
      } catch (error) {
        console.error(`  ❌ Failed to process ${file}:`, error.message);
      }
    }

    return jpgFiles.length;
  } catch (error) {
    if (error.code !== "ENOENT") {
      console.error(`Error reading directory ${dir}:`, error.message);
    }
    return 0;
  }
}

async function optimizeAllImages() {
  console.log("🖼️  Optimizing all JPG images to WebP...\n");

  let totalProcessed = 0;

  for (const dir of IMAGE_DIRS) {
    const count = await optimizeImagesInDirectory(dir);
    totalProcessed += count;
  }

  console.log(`\n✅ Image optimization complete!`);
  console.log(`📊 Total images processed: ${totalProcessed}`);
  console.log(
    "\n💡 Note: Original .jpg files are preserved. Review the WebP versions and update your imports."
  );
  console.log("   You can delete the original .jpg files manually if needed.");
}

optimizeAllImages();
