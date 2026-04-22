# Ozatech Tasks

A modern, responsive Todo List web application built with HTML, CSS, and vanilla JavaScript. Features a clean design based on CEFMART design tokens and persistent storage using LocalStorage.

## Features

- ✅ Add new tasks
- ✅ Mark tasks as complete/incomplete
- ✅ Delete tasks
- ✅ Persistent storage using browser LocalStorage
- ✅ Responsive design with Bootstrap 5
- ✅ Custom CEFMART theme with green/orange color scheme
- ✅ XSS protection for user input
- ✅ Empty state messaging
- ✅ Smooth animations and transitions

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom styles with CSS variables
- **Bootstrap 5.3.3** - Responsive framework
- **Vanilla JavaScript** - No frameworks, pure JS
- **LocalStorage** - Client-side data persistence
- **Google Fonts** - Poppins & Open Sans

## Project Structure

```
/
├── index.html    # Main HTML file
├── style.css     # Custom CSS with CEFMART design tokens
├── script.js     # Application logic
└── README.md     # This file
```

## Installation & Usage

1. Clone or download this repository
2. Open `index.html` in any modern web browser
3. Start managing your tasks!

No build process or server required - runs directly in the browser.

## Design Tokens

The application uses CEFMART's design system:

| Token | Value | Usage |
|-------|-------|-------|
| `--primary-green` | #0F7A33 | Primary buttons, accents |
| `--secondary-green` | #0A5C27 | Hover states, completed items |
| `--accent-orange` | #F39C12 | Active states |
| `--light-orange` | #F5B041 | Secondary accents |
| `--neutral-bg` | #F4F6F6 | Background color |
| `--text-dark` | #1B1B1B | Text color |

## Typography

- **Headings**: Poppins (weights: 500, 600, 700)
- **Body**: Open Sans (weights: 300, 400)

## Browser Support

Works on all modern browsers that support:
- ES6+ JavaScript
- LocalStorage API
- CSS Variables (Custom Properties)

## License

This project is open source and available for personal and commercial use.

---

Built with ❤️ by Ozatech
