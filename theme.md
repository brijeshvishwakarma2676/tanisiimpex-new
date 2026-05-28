# Tanisi Impex — Site UI Theme Documentation

This document outlines the visual identity and design system of the Tanisi Impex web application. The theme is designed to evoke **Professionalism, Scale, Reliability, and Premium Quality**, aligning with the global export industry.

---

## 🎨 1. Color Palette

The color system uses a sophisticated "Maritime & Luxury" pairing.

### **Primary: Navy (Authority & Trust)**
Used for backgrounds, headers, and primary text.
*   **Navy-950 (#060F1C):** Deep space/midnight, used for the main hero and footer backgrounds.
*   **Navy-800 (#0A2342):** Core brand color, used for primary sections and buttons.
*   **Navy-500 (#1B3F6B):** Accent blue for icons and interactive elements.
*   **Navy-50 (#E8EDF5):** Subtle backgrounds for cards or sections.

### **Secondary: Gold (Premium & Excellence)**
Used for highlights, CTAs, and badges to denote "export-grade" quality.
*   **Gold-400 (#D4A017):** Primary gold, used for high-impact buttons and indicators.
*   **Gold-300 (#F0C040):** Light gold for hover states and subtle gradients.
*   **Gold-100 (#FDF3D0):** Soft background for badges and alerts.

---

## ✍️ 2. Typography

The site uses a "Classic meets Modern" font pairing.

*   **Headings:** `Playfair Display` (Serif)
    *   *Usage:* H1, H2, Section Headers.
    *   *Feel:* Traditional, established, elegant, and high-end.
*   **Body:** `DM Sans` (Sans-Serif)
    *   *Usage:* Paragraphs, navigation, buttons, and metadata.
    *   *Feel:* Highly legible, clean, and modern.

---

## 🌈 3. Gradients & Visual Effects

Consistent use of gradients adds depth and a "high-tech logistics" feel.

*   **Hero Gradient:** `linear-gradient(135deg, #060F1C 0%, #0A2342 40%, #1B3F6B 70%, #0A2342 100%)`
*   **Gold Accent Gradient:** `linear-gradient(135deg, #D4A017, #F0C040)`
*   **Glassmorphism:**
    *   `glass-navy`: Used for the sticky Navbar. Features high blur (`20px`) and 85% opacity Navy-800 with a subtle gold border.

---

## 🧊 4. Core UI Components

### **Buttons**
*   **Primary:** Rounded-full, Gold background, Navy text. Features a hover scale-up and gold shadow.
*   **Outline Navy:** Transparent with 2px Navy border. Turns solid Navy on hover.
*   **Ghost:** Subtle Navy-50 background on hover, ideal for navigation.

### **Cards**
*   **Style:** `rounded-2xl`, White background, thin gray border.
*   **Shadow:** Custom `0 4px 24px rgba(10, 35, 66, 0.08)`.
*   **Interaction:** Smooth lift effect (`-translate-y-1`) and deepened shadow on hover.

### **Badges**
*   **Badge-Gold:** Denotes high-value products or premium features.
*   **Badge-Green:** Used for certifications (FSSAI, APEDA) and "Ready" statuses.

---

## 🎞️ 5. Motion & Animation

Animations are purposeful and smooth, using **Framer Motion**.

*   **Intro Loader:** A multi-stage sequence (Cargo -> Ship -> Plane -> World) with a blur-reveal on typography.
*   **Scroll Reveals:** Elements "Fade Up" and "Fade In" as the user scrolls, controlled by `useScrollReveal`.
*   **Transitions:** Standard `400ms` duration for most hover interactions to feel deliberate and premium.

---

## 📐 6. Layout Constants

*   **Max Width:** `max-w-7xl` (1280px) for standard content containers.
*   **Spacing:** Consistent use of `px-4 sm:px-6 lg:px-8` for responsive padding.
*   **Borders:** Subtle `border-gray-100` for light sections, `border-white/10` for dark sections.
