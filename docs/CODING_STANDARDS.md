# Coding Standards

## Best Practices

### Modular Components
- Create reusable, self-contained components
- Keep components focused on a single responsibility
- Use props for configuration and data passing
- Implement proper TypeScript types and interfaces

### File Organization
- Maintain small, focused files
- Avoid monolithic files with multiple responsibilities
- Group related components and utilities together
- Use clear, descriptive file names

### Component Structure
- Separate business logic from presentation
- Use hooks for shared functionality
- Implement proper error handling
- Follow consistent naming conventions

## Design Guidelines

### UI Components
- Use Tailwind CSS for styling
- Implement responsive designs
- Ensure accessibility standards are met
- Follow consistent spacing and layout patterns

### Animations
- Use CSS transitions for simple animations
- Implement intersection observer for scroll animations
- Maintain smooth performance
- Consider reduced motion preferences

### Images
- Use Unsplash for stock photos
- Only use valid, existing URLs
- Implement proper loading strategies
- Include meaningful alt text

## Project Structure

### Dependencies
- React for UI components
- React Router for navigation
- Lucide React for icons
- Tailwind CSS for styling
- TypeScript for type safety

### File Organization
```
src/
  components/    # Reusable UI components
  pages/         # Page components
  hooks/         # Custom React hooks
  utils/         # Utility functions
  types/         # TypeScript types
  styles/        # Global styles
```