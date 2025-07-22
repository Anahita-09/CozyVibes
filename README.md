# 🎵 Cozy Vibes By Ana - Music Website

A beautiful, cozy-themed music website featuring guitar recordings with a fully functional music player and filter system. Built with vanilla HTML, CSS, and JavaScript for a smooth, responsive experience.

![Cozy Vibes Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

### 🎵 **Music Player**
- **Full Audio Controls**: Play, pause, previous, next with smooth transitions
- **Progress Bar**: Clickable progress bar with real-time time display
- **Volume Control**: Fixed at 70% for optimal listening experience
- **Keyboard Shortcuts**: 
  - `Spacebar` - Play/Pause
  - `Left Arrow` - Previous track
  - `Right Arrow` - Next track
- **Visual Feedback**: Currently playing song is highlighted with green border
- **Auto-play Next**: Automatically plays next song when current ends
- **Smart Navigation**: Next/Previous buttons respect current filter

### 🎚️ **Filter System**
- **Language Filters**: Filter songs by Hindi, English, Italian, Japanese
- **Visual Feedback**: Active filter button is highlighted
- **Empty State**: Shows message when no songs match filter
- **Responsive Design**: Works perfectly on all screen sizes

### 🎨 **Design & Animations**
- **Cozy Theme**: Warm, pixel-art inspired design with brown color palette
- **Smooth Animations**: Hover effects, transitions, and scroll-triggered animations
- **Falling Leaves**: Animated background elements for ambiance
- **Responsive Layout**: Mobile-first design that adapts to any screen
- **Performance Optimized**: Uses `will-change` for smooth animations

## 🎼 Songs Included

| Language | Song | Artist | Duration |
|----------|------|--------|----------|
| Hindi | Kal Ho Naa Ho | Sonu Nigam | 5:42 |
| Hindi | Jeena Jeena | Atif Aslam | 4:15 |
| English | Señorita | Camila Cabello & Shawn Mendes | 3:10 |
| Italian | Bella Ciao | Manu Pilas | 3:45 |
| Japanese | Gurenge | LiSA | 3:58 |

## 🚀 Quick Start

1. **Clone or download** the project files
2. **Open** `index.html` in your web browser
3. **Or use a local server**: `npx live-server .`

## 📁 Project Structure

```
Music-website/
├── 📄 index.html          # Home page with featured songs
├── 🎵 music.html          # Music page with filters and full player
├── 👤 about.html          # About page with Ana's story
├── 🎨 styles.css          # All styling and animations
├── ⚡ script.js           # Main JavaScript functionality
├── 📖 README.md           # This file
├── 🎶 Music/              # Audio files
│   ├── Kal Ho Naa Ho - Sonu Nigam.mp3
│   ├── Jeena Jeena - Atif Aslam.mp3
│   ├── Señorita - Camila Cabello and Shawn Mendes.mp3
│   ├── Bella Ciao - Manu Pilas.mp3
│   └── Demon Slayer Gurenge - LiSA.mp3
└── 🍃 ghibli/             # Images and assets
    ├── guitarHand.png
    ├── leaf1.png
    ├── leaf2.png
    ├── leaf3.png
    ├── leaf4.png
    └── other.png
```

## 🛠️ Technical Details

### **Frontend Stack**
- **HTML5**: Semantic markup with proper accessibility
- **CSS3**: Custom properties, flexbox, grid, animations, responsive design
- **Vanilla JavaScript**: No external dependencies, pure ES6+
- **Font Awesome**: Icons loaded from CDN

### **Key Features**
- **Audio API**: HTML5 Audio element with custom controls
- **Intersection Observer**: Scroll-triggered animations
- **Local Storage**: Remembers user preferences
- **Event Delegation**: Efficient event handling
- **Error Handling**: Graceful fallbacks for audio loading

### **Performance Optimizations**
- **CSS Animations**: Hardware-accelerated transforms
- **Will-change**: Optimized animation performance
- **Efficient Selectors**: Minimal DOM queries
- **Lazy Loading**: Images and audio load on demand

## 🎯 How to Use

### **Playing Music**
1. Click on any song card to start playing
2. Use the audio player controls at the bottom
3. Use keyboard shortcuts for quick control
4. The currently playing song is highlighted in green

### **Filtering Songs**
1. Use the filter buttons (All, Hindi, English, Italian, Japanese)
2. Only songs in the selected language will be shown
3. Navigation respects the current filter
4. Empty state message appears when no songs match

### **Navigation**
- **Home**: Featured songs and introduction
- **Music**: Full music library with filters
- **About**: Ana's story and musical journey

## 🎨 Design System

### **Color Palette**
```css
--cozy-bg: #e7d9c1;      /* Background */
--cozy-brown: #7c5c3e;   /* Primary */
--cozy-dark: #4b3a28;    /* Text */
--cozy-accent: #bfae9c;  /* Secondary */
--cozy-pink: #e6b7c1;    /* Accent */
--cozy-green: #7fa07f;   /* Success/Active */
--cozy-blue: #7fa0b2;    /* Info */
```

### **Typography**
- **Font**: Quicksand (Google Fonts)
- **Weights**: 400 (regular), 600 (semi-bold), 700 (bold)
- **Responsive**: Scales appropriately on all devices

### **Animations**
- **Duration**: 0.2s - 0.6s for smooth feel
- **Easing**: `ease` for natural motion
- **Triggers**: Hover, click, scroll, and intersection

## 📱 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 60+ | ✅ Full Support |
| Firefox | 55+ | ✅ Full Support |
| Safari | 12+ | ✅ Full Support |
| Edge | 79+ | ✅ Full Support |

## 🔧 Development

### **Local Development**
```bash
# Clone the repository
git clone <repository-url>
cd Music-website

# Open in browser
open index.html

# Or use live server
npx live-server .
```

### **Customization**
1. **Add Songs**: Place MP3 files in `Music/` folder and update HTML
2. **Change Colors**: Modify CSS variables in `:root`
3. **Add Pages**: Create new HTML files and link in navigation
4. **Modify Animations**: Adjust timing and easing in CSS

## 🐛 Recent Fixes & Improvements

### ✅ **Audio Player**
- Complete rewrite of audio player functionality
- Fixed progress bar with click-to-seek
- Added play/pause icon changes
- Improved error handling for audio loading
- Added keyboard shortcuts

### ✅ **Filter System**
- Fixed duplicate filter code
- Added proper language attributes to all songs
- Added missing filter buttons (Italian, Japanese)
- Improved filter logic with error handling
- Added visual feedback for active filters

### ✅ **User Experience**
- Added visual feedback for currently playing song
- Improved hover effects and animations
- Fixed navigation between filtered songs
- Added empty state message when no songs match filter
- Better error handling and console logging

### ✅ **Code Quality**
- Removed duplicate and conflicting code
- Added proper error handling
- Improved code organization and readability
- Fixed CSS variable definitions
- Added comprehensive comments

### ✅ **Performance**
- Added `will-change` for smoother animations
- Optimized CSS selectors
- Improved event handling
- Better memory management

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 About the Creator

**Ana** - A passionate guitarist and music enthusiast who believes in the power of music to connect people. This website showcases her guitar recordings in a cozy, welcoming environment.

---

<div align="center">

**Made with ❤️ by Ana**

*Sharing cozy vibes through music*

[🎵 Listen Now](index.html) • [👤 About](about.html) • [🎶 Music](music.html)

</div> 