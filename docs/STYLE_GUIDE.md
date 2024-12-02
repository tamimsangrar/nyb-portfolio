# Style Guide

## Code Style

### TypeScript
```typescript
// Use interfaces for object types
interface ComponentProps {
  title: string;
  description: string;
  onClick?: () => void;
}

// Use type for unions/intersections
type ButtonVariant = 'primary' | 'secondary' | 'ghost';

// Use proper return types
function Component({ title, description }: ComponentProps): JSX.Element {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
```

### Component Structure
```typescript
// Import statements
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Types/Interfaces
interface Props {
  // ...
}

// Component definition
export function ComponentName({ prop1, prop2 }: Props): JSX.Element {
  // Hooks
  const navigate = useNavigate();

  // Event handlers
  const handleClick = () => {
    // ...
  };

  // Render
  return (
    // JSX
  );
}
```

## CSS/Tailwind

### Class Organization
```html
<!-- Layout -->
<div class="flex flex-col items-center justify-center
            min-h-screen p-4 sm:p-6 md:p-8
            bg-black text-white">
  <!-- Component specific -->
  <div class="rounded-lg shadow-lg
              transform transition-all duration-300
              hover:scale-105">
    <!-- Typography -->
    <h2 class="text-2xl font-bold mb-4">
      Title
    </h2>
  </div>
</div>
```

### Animation Classes
```css
.fade-in {
  animation: fadeIn 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}

.slide-from-left {
  animation: slideFromLeft 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}
```