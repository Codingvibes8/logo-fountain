# LogoFactory 🎨

A modern, interactive logo maker application built with Next.js 15, TypeScript, and Tailwind CSS. Create beautiful logos with customizable icons, colors, and backgrounds.

![LogoFactory](public/logo-maker.svg)

## ✨ Features

- **Icon Selection**: Choose from hundreds of Lucide React icons or upload custom PNG icons
- **Customization Controls**:
  - Adjust icon size (up to 512px)
  - Rotate icons (0-360°)
  - Custom icon colors with gradient support
  - Background color/gradient customization
  - Adjustable padding and border radius
- **Real-time Preview**: See your logo changes instantly
- **Download**: Export your logo as a PNG image
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Color Picker**: [react-best-gradient-color-picker](https://www.npmjs.com/package/react-best-gradient-color-picker)
- **Canvas Export**: [html2canvas](https://html2canvas.hertzen.com/)

## 📦 Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Codingvibes8/logo-fountain.git
   cd logo-fountain
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production application
- `npm start` - Start the production server
- `npm run lint` - Run ESLint for code quality

## 📁 Project Structure

```
logo-fountain/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── ui/                 # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── slider.tsx
│   │   │   └── tabs.tsx
│   │   ├── Header.tsx          # App header
│   │   ├── SideNav.tsx         # Side navigation
│   │   ├── IconController.tsx  # Icon customization panel
│   │   ├── BackgroundController.tsx  # Background customization
│   │   ├── LogoPreview.tsx     # Logo preview area
│   │   ├── ColorPickerController.tsx # Color picker
│   │   └── IconList.tsx        # Icon selection dialog
│   ├── context/
│   │   └── UpdateStorageContext.ts  # State management
│   ├── constants/
│   │   └── icons.ts            # Icon list
│   └── lib/
│       └── utils.ts            # Utility functions
├── public/                     # Static assets
├── tailwind.config.ts          # Tailwind configuration
├── next.config.ts              # Next.js configuration
└── tsconfig.json               # TypeScript configuration
```

## 🎯 Usage

1. **Select an Icon**:
   - Click on the icon preview in the left panel
   - Choose from the icon library or upload a custom PNG

2. **Customize Your Icon**:
   - Adjust the size using the slider
   - Rotate the icon to your preferred angle
   - Pick a custom color or gradient

3. **Customize Background**:
   - Click the "Background" tab in the side navigation
   - Adjust border radius for rounded corners
   - Set padding around your icon
   - Choose background colors or gradients

4. **Download**:
   - Click the "Download" button in the header
   - Your logo will be saved as a PNG file

## 🎨 Customization

### Adding New Icons

Icons are defined in `src/constants/icons.ts`. To add more icons:

```typescript
export const iconList = [
  'YourIconName',
  // ... other icons
] as const;
```

### Modifying Colors

Theme colors are defined in `src/app/globals.css` using CSS variables. Customize the color scheme by modifying the HSL values:

```css
:root {
  --primary: 0 0% 9%;
  --secondary: 0 0% 96.1%;
  /* ... other colors */
}
```

## 🔧 Configuration

### Path Aliases

The project uses TypeScript path aliases for cleaner imports:

```typescript
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
```

### Environment Variables

Currently, the app uses localStorage for state persistence. No environment variables are required.

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

Build the production bundle:

```bash
npm run build
```

The optimized build will be in the `.next` folder.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**AdeCrown**

- GitHub: [@Codingvibes8](https://github.com/Codingvibes8)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [Lucide](https://lucide.dev/) for the icon library
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling

## 📸 Screenshots

![Logo Maker Interface](public/side-banner-logo.jpg)

---

**Built with ❤️ using Next.js and TypeScript**
