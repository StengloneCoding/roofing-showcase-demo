---
name: Iron & Slate
colors:
  surface: '#f7fafc'
  surface-dim: '#d7dadc'
  surface-bright: '#f7fafc'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f4f6'
  surface-container: '#ebeef0'
  surface-container-high: '#e5e9eb'
  surface-container-highest: '#e0e3e5'
  on-surface: '#181c1e'
  on-surface-variant: '#444748'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eef1f3'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#1e1e1e'
  on-primary: '#ffffff'
  primary-container: '#333333'
  on-primary-container: '#9c9b9b'
  inverse-primary: '#c8c6c6'
  secondary: '#bb0010'
  on-secondary: '#ffffff'
  secondary-container: '#e12625'
  on-secondary-container: '#fffbff'
  tertiary: '#141f2f'
  on-tertiary: '#ffffff'
  tertiary-container: '#293446'
  on-tertiary-container: '#919cb2'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e4e2e1'
  primary-fixed-dim: '#c8c6c6'
  on-primary-fixed: '#1b1c1c'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#ffdad6'
  secondary-fixed-dim: '#ffb4ab'
  on-secondary-fixed: '#410002'
  on-secondary-fixed-variant: '#93000a'
  tertiary-fixed: '#d8e3fa'
  tertiary-fixed-dim: '#bcc7dd'
  on-tertiary-fixed: '#111c2c'
  on-tertiary-fixed-variant: '#3c475a'
  background: '#f7fafc'
  on-background: '#181c1e'
  surface-variant: '#e0e3e5'
typography:
  h1:
    fontFamily: Work Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Work Sans
    fontSize: 36px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  h3:
    fontFamily: Work Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: '0'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  section-padding: 80px
---

## Brand & Style

The brand identity for Grimm & Lechner centers on the concepts of "Stabilität" (stability) and "Meisterschaft" (mastery). As a traditional yet modern roofing company in Bamberg, the visual language must bridge the gap between heavy-duty construction and architectural precision.

The design style follows a **Corporate / Modern** approach with a focus on high-density information and structural integrity. It utilizes a sophisticated balance of heavy vertical lines and open whitespace to evoke the feeling of a well-planned blueprint. The emotional response is one of absolute reliability—the digital equivalent of a hand-shake agreement. Visuals should prioritize high-resolution photography of slate textures, precision flashing, and the historic skyline of Bamberg to ground the brand in its local context.

## Colors

The palette is anchored by **Charcoal Grey (#333333)**, representing the raw materials of the trade—slate, anthracite tiles, and steel. This color provides the "weight" of the design system.

The **Vibrant Red (#EF312D)** is used sparingly but with high intent. It serves as the primary signal color for conversion points (CTA buttons), urgent contact information, and critical iconography. To maintain a professional atmosphere, the neutral scale leans towards cool, architectural greys rather than warm beiges, ensuring the interface feels clean and engineered.

## Typography

This design system utilizes **Work Sans** for all headings. Its slightly wider apertures and sturdy letterforms convey the structural strength required for a construction firm. It feels grounded and authoritative.

For body copy and functional text, **Inter** is employed. Its exceptional legibility at small sizes and neutral character ensures that technical specifications and service descriptions are easy to digest. We utilize an uppercase label style for small metadata and categories to reinforce the organized, "blueprinted" aesthetic.

## Layout & Spacing

The system uses a **Fixed Grid** model for desktop environments, centering content within a 1280px container to maintain a controlled, professional presentation. A 12-column grid provides the structural foundation for service cards and imagery.

Rhythm is established via an 8px linear scale. Section spacing is generous (80px+) to allow the high-quality imagery of craftsmanship to "breathe," preventing the site from feeling cluttered or "cheap." Elements should align strictly to the grid to reflect the precision of the roofing trade.

## Elevation & Depth

To maintain a sense of "groundedness," this design system avoids floating elements or heavy shadows. Instead, it uses **Tonal Layers** and **Low-contrast outlines**. 

Depth is communicated through subtle shifts in background color (e.g., a light grey section followed by a white section) and 1px borders in a soft slate tint (#E2E8F0). When a shadow is necessary for a hover state on a card, it should be a "hard-floor" shadow—very low blur and minimal offset—to feel like a heavy object sitting on a surface rather than something light and airy.

## Shapes

The shape language is **Soft (0.25rem)**. While a completely sharp 0px corner can feel too aggressive or "brutalist," a high radius feels too "tech-oriented" and soft. A subtle 4px radius on buttons and cards provides a modern touch while maintaining the rectilinear, structural feeling of bricks, tiles, and beams. Large images may remain sharp (0px) to emphasize the architectural nature of the photography.

## Components

### Buttons
Primary buttons use the Vibrant Red background with white text, featuring a subtle darkening on hover. They are large (min-height 48px) and use bold weight text to command attention. Secondary buttons use a Charcoal Grey outline.

### Service Cards
Cards are the primary way to display roofing services (e.g., "Dachsanierung," "Flachdach"). They feature a top-aligned high-quality image, a bold H3 heading, and a 1px slate-grey border. On hover, the border color shifts to Charcoal.

### Input Fields
Forms should feel robust. Use 2px borders for active states in Charcoal Grey. Labels are always visible and positioned above the field in the `label-caps` style for maximum clarity.

### The "Trust Bar"
A specialized component for this system is the "Trust Bar"—a horizontal strip usually placed below the hero or above the footer containing the Master Craftsman (Meisterbrief) seal, years of experience, and local Bamberg associations.

### Contact Information
The "Emergency Roof Repair" or contact number is a persistent element, often highlighted in a Red top-bar or a floating action button on mobile, ensuring the user never has to search for a way to reach out.