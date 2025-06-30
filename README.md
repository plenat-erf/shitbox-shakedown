# Shitbox Shakedown Rally League Results & Gallery

A modern, responsive web app for displaying rally event results and a photo gallery, designed for the Shitbox Shakedown Rally League. Built with HTML, CSS, JavaScript, and Bootstrap, this project provides a visually engaging way to showcase event standings and race day photos.

## Features

- **Results Table:**
  - Loads results from a CSV file (`results/round1.csv`) and displays them in a styled, interactive table.
  - Podium rows (gold, silver, bronze) are visually highlighted.
  - Footnotes and tooltips for special results.
  - Responsive and mobile-friendly layout.

- **Photo Gallery:**
  - Automatically generates a gallery from images listed in `photo_reel/gallery.json`.
  - Clickable thumbnails open a modal with a larger view.
  - Modern, animated, and responsive design.

- **Easy Content Updates:**
  - Add new event results by updating the CSV file.
  - Add new photos to the `photo_reel` folder and run the gallery builder script to update the gallery.

## Project Structure

```ascii
├── build_gallery.py           # Script to generate gallery.json from images
├── index.html                 # Main web page
├── style.css                  # Custom styles
├── js/
│   └── render-results.js      # Loads and renders results table
├── photo_reel/
│   ├── gallery.json           # List of gallery images (auto-generated)
│   └── repo-XX.jpg            # Event photos
├── results/
│   └── round1.csv             # Event results (CSV)
├── logo.png                   # Site logo
├── SEC_C_MF.jpg               # Podium image
```

## Getting Started

### 1. Clone or Download

Clone this repository or download the files to your local machine.

### 2. Add/Update Results

- Edit `results/round1.csv` to update event results.
- The CSV should have the following columns:
  - `Position,Driver,Car,Time`

### 3. Add/Update Gallery Photos

- Place new images in the `photo_reel` directory.
- Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`, `.gif`
- Run the gallery builder script to update the manifest:

  ```sh
  python build_gallery.py
  ```

  This will regenerate `photo_reel/gallery.json` with the current images.

### 4. Open the Site

Open `index.html` in your web browser. All content loads locally—no server required.

## Dependencies

- [Bootstrap 5](https://getbootstrap.com/)
- [jQuery](https://jquery.com/)
- [DataTables](https://datatables.net/)
- [Google Fonts: Poppins, Roboto](https://fonts.google.com/)

All dependencies are loaded via CDN; no installation required.

## Customization

- **Event Info:**
  - Update event name, date, and images in `index.html` as needed.
- **Styling:**
  - Modify `style.css` for custom colors, fonts, or layout tweaks.

## License

Published by plenat_erf under licence from His Most Illustrious & Learned Joshua Sturre. See footer in `index.html` for details.

---

*For questions or contributions, please open an issue or pull request  
