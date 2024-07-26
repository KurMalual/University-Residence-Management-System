# University Dashboard

This project is a university dashboard that provides an overview of various metrics such as room occupancy, maintenance requests, student numbers, and alerts. The dashboard also includes a dark mode feature for better accessibility and user preference.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Responsive Design**: The dashboard is fully responsive and works on all devices.
- **Dark Mode**: Users can switch between light and dark themes.
- **Real-time Data**: Displays current metrics for rooms, maintenance requests, students, and alerts.
- **Charts**: Visual representations of occupancy rates and maintenance requests over time using ApexCharts.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/university-dashboard.git
   ```
2. Navigate to the project directory:
   ```bash
   cd university-dashboard
   ```
3. Open `index.html` in your preferred browser.

## Usage
- The dashboard is designed to be intuitive and easy to use.
- The sidebar contains navigation links to different sections of the dashboard.
- The header contains a theme switcher to toggle between light and dark modes.

## File Structure
```
university-dashboard/
│
├── css/
│   ├── dark-theme.css       # Dark theme styles
│   ├── styles.css           # Light theme styles
│
├── js/
│   ├── scripts.js           # Main JavaScript file
│   ├── theme-switcher.js    # Theme switcher JavaScript
│
├── index.html               # Main HTML file
│
└── README.md                # README file
```

## Customization
To customize the dashboard, you can modify the CSS and JavaScript files in the `css` and `js` directories, respectively. 

### Theme Customization
- **Dark Theme**: Edit `css/dark-theme.css` for dark mode styles.
- **Light Theme**: Edit `css/styles.css` for light mode styles.

### JavaScript Functionality
- **Theme Switcher**: The theme switcher functionality is handled in `js/theme-switcher.js`.

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-branch
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-branch
   ```
5. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```