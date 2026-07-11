# Nepal Health Hospital - Frontend UI

This project contains the frontend user interface for Nepal Health Hospital, a multi-specialty hospital web portal in Kathmandu, Nepal.

## Table of Contents
- [Overview](#overview)
- [Design System](#design-system)
- [Pages](#pages)
- [Components](#components)
- [Getting Started](#getting-started)
- [File Structure](#file-structure)
- [Browser Support](#browser-support)
- [Accessibility](#accessibility)
- [Internationalization](#internationalization)

## Overview
The frontend is built with HTML5, CSS3, and vanilla JavaScript, following a mobile-first, responsive design approach. It implements the complete design system as specified, including:
- Modern, clean, medical aesthetic with trustworthy feel
- Generous whitespace and soft teal accents
- Mobile-first responsive layouts
- WCAG 2.1 AA accessibility compliance
- Bilingual support (English and Nepali)

## Design System
The design system is implemented in `assets/css/style.css` and includes:

### Colors
- Primary: #0891B2 (Medical Teal)
- Primary Dark: #0E7490
- Primary Light: #CFFAFE
- Secondary: #F97316 (Coral)
- Emergency: #EF4444
- Success: #10B981
- Background: #F8FAFC
- Surface: #FFFFFF
- Text: #0F172A (headings), #64748B (body)
- Border: #E2E8F0
- Footer: #0F172A (dark navy)

### Typography
- Headings: Poppins Bold (48/36/30/24px)
- Body: Inter Regular (16/14px)
- Line height: 1.5 body, 1.2 headings
- Nepali: Noto Sans Devanagari

### Spacing
4px base (4, 8, 16, 24, 32, 48, 64, 96)

### Radius
8px (cards), 12px (modals), 9999px (pills)

### Shadows
0 4px 6px rgba(0,0,0,0.07) standard

## Pages
The following pages have been implemented:
1. [Home](index.html) - Hero, quick actions, about preview, featured departments, top doctors, stats counter, health packages, testimonials, news & events, CTA banner
2. [About Us](about.html) - Hero banner, intro, mission/vision/values, leadership team, accreditations, infrastructure gallery, timeline
3. [Departments](departments.html) - Listing page with filterable grid of all departments
4. [Appointment Booking](appointment-booking.html) - 5-step form for booking appointments
5. [404 Error](404.html) - Page not found page
6. [Component Library](components.html) - Showcase of all UI components

Additional pages (to be implemented following the same patterns):
- Find a Doctor (/find-doctor.html)
- Doctor Profile (/doctor-profile.html)
- Patient Dashboard (/patient-dashboard.html)
- Emergency (/emergency.html)
- Health Packages (/health-packages.html)
- Contact (/contact.html)
- Auth (Login/Register/OTP) (/login.html, /register.html, /otp.html)
- Appointments List (/appointments-list.html)
- Lab Reports (/lab-reports.html)

## Components
Reusable UI components include:
- Navigation (sticky navbar, mobile hamburger menu)
- Footer (4-column with social icons)
- Buttons (primary, outline, ghost, danger; sizes sm/md/lg)
- Inputs (with label and form elements
- Card with hover effects
- Modal with backdrop
- Badge (teal/coral/green pills)
- Skeleton loader and spinner
- Breadcrumb
- Toast notifications
- Sticky emergency button (mobile)
- Stepper (for multi-step forms)
- Tabs
- Pills (filter buttons)

## Getting Started
To view the website locally:
1. Clone or download this repository
2. Open `index.html` in your web browser
3. For development, you can use any static file server (e.g., `python -m http.server`, `live-server`, etc.)

No build process or dependencies are required - it's plain HTML/CSS/JS.

## File Structure
```
nepal-health-hospital/
├── index.html              # Home page
├── about.html              # About us page
├── departments.html        # Departments listing
├── appointment-booking.html # Appointment booking (5-step)
├── 404.html                # Page not found
├── components.html         # Component library showcase
├── README.md               # This file
└── assets/
    ├── css/
    │   └── style.css       # Main stylesheet with design system
    ├── js/
    │   ├── main.js         # Common JavaScript (mobile menu, smooth scroll, etc.)
    │   └── appointment.js  # Appointment booking specific JavaScript
    ├── images/             # Image assets (placeholders)
    └── icons/              # Icon assets (SVG recommended)
```

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Chrome (Android)
- Mobile Safari (iOS)

## Accessibility
The interface follows WCAG 2.1 AA guidelines:
- Semantic HTML elements
- Proper color contrast (minimum 4.5:1)
- Keyboard navigable
- ARIA labels where necessary
- Focus visible outlines
- Responsive text scaling
- Alt text for all meaningful images

## Internationalization
The site supports English and Nepali:
- Language toggle in the navbar
- All text content is structured for easy translation
- Date and number formats adapt to locale
- Right-to-left support is not required for Nepali (left-to-right)
- Language-specific fonts (Noto Sans Devanagari for Nepali)

## Contributing
This is a demonstration implementation. For actual development:
1. Maintain consistency with the design system
2. Follow the established naming conventions
3. Ensure accessibility compliance for new components
4. Test responsiveness across devices
5. Keep file structure organized

## Credits
Design based on the specifications provided for "Nepal Health Hospital" multi-specialty hospital web portal.

**Note**: This is a frontend-only implementation. Backend integration would require connecting forms to APIs and adding authentication/authorization logic.