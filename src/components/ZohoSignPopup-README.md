# Zoho Sign Style Popup Notification

A React component that replicates the Zoho Sign popup notification design with auto-trigger functionality, responsive design, and smooth animations.

## Features

- ✅ **Auto-trigger**: Appears every 1-3 minutes (randomized interval)
- ✅ **Responsive Design**: Mobile-friendly with proper breakpoints
- ✅ **Multiple Close Options**: X button, backdrop click, ESC key
- ✅ **Smooth Animations**: Fade in/out transitions
- ✅ **Customizable**: Text, callbacks, and timing
- ✅ **TypeScript Support**: Full type definitions included
- ✅ **Professional Styling**: Matches Zoho Sign design exactly

## Installation

The component is self-contained and only requires React and Tailwind CSS.

## Usage

### Basic Usage

```jsx
import ZohoSignPopup from './components/ZohoSignPopup';

function App() {
  const handleBookDemo = () => {
    console.log('Book Demo clicked!');
    // Redirect to demo booking page
  };

  const handleNeedAssistance = () => {
    console.log('Need Assistance clicked!');
    // Open support chat
  };

  return (
    <div>
      <h1>Your App Content</h1>
      
      <ZohoSignPopup
        onBookDemo={handleBookDemo}
        onNeedAssistance={handleNeedAssistance}
      />
    </div>
  );
}
```

### Advanced Usage with Custom Props

```jsx
import ZohoSignPopup from './components/ZohoSignPopup';

function App() {
  const handleClose = () => {
    console.log('Popup closed');
  };

  return (
    <div>
      <ZohoSignPopup
        onClose={handleClose}
        onBookDemo={() => window.open('/demo', '_blank')}
        onNeedAssistance={() => window.open('/support', '_blank')}
        autoTrigger={true}
        triggerInterval={{ min: 60000, max: 180000 }} // 1-3 minutes
        customTitle="Need help with your workspace?"
        customTrustText="Join 10,000+ companies using our platform"
      />
    </div>
  );
}
```

### Manual Trigger (No Auto-trigger)

```jsx
import React, { useState } from 'react';
import ZohoSignPopup from './components/ZohoSignPopup';

function App() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div>
      <button onClick={() => setShowPopup(true)}>
        Show Popup
      </button>
      
      {showPopup && (
        <ZohoSignPopup
          onClose={() => setShowPopup(false)}
          onBookDemo={() => console.log('Book Demo')}
          onNeedAssistance={() => console.log('Need Assistance')}
          autoTrigger={false}
        />
      )}
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onClose` | `() => void` | `undefined` | Callback when popup is closed |
| `onBookDemo` | `() => void` | `undefined` | Callback when "Book Your Demo" is clicked |
| `onNeedAssistance` | `() => void` | `undefined` | Callback when "Need Assistance?" is clicked |
| `autoTrigger` | `boolean` | `true` | Whether to auto-trigger the popup |
| `triggerInterval` | `{ min: number, max: number }` | `{ min: 60000, max: 180000 }` | Auto-trigger interval in milliseconds |
| `customTitle` | `string` | `"Can't find what you are looking for?"` | Custom headline text |
| `customTrustText` | `string` | `"40,000+ businesses trust Zoho Sign"` | Custom trust indicator text |

## Styling

The component uses Tailwind CSS classes and matches the Zoho Sign design:

- **Background**: Warm orange/yellow gradient (`bg-gradient-to-br from-yellow-400 to-orange-400`)
- **Size**: 800px wide × 400px tall (responsive)
- **Border**: White border with rounded corners (`rounded-2xl`)
- **Buttons**: Red primary button and yellow outlined secondary button
- **Typography**: Bold headlines, medium body text
- **Shadows**: Subtle drop shadow for depth

## Accessibility

- ✅ **Keyboard Navigation**: ESC key closes the popup
- ✅ **Screen Reader Support**: Proper ARIA labels
- ✅ **Focus Management**: Body scroll is disabled when popup is open
- ✅ **Click Outside**: Backdrop click closes the popup

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## Customization

### Custom Styling

You can override the default styles by modifying the Tailwind classes in the component or by using CSS-in-JS solutions.

### Custom Image

Replace the placeholder professional woman image by modifying the right side of the modal:

```jsx
{/* Right Side - Professional Woman Image */}
<div className="flex-1 relative hidden md:block">
  <img 
    src="/path/to/your/image.jpg" 
    alt="Professional support representative"
    className="absolute inset-0 w-full h-full object-cover"
  />
</div>
```

### Custom Colors

Modify the gradient colors by changing the Tailwind classes:

```jsx
// Change from yellow/orange to blue/purple
className="bg-gradient-to-br from-blue-400 to-purple-400"
```

## Demo

Run the demo component to see the popup in action:

```jsx
import ZohoSignPopupDemo from './components/ZohoSignPopupDemo';

function App() {
  return <ZohoSignPopupDemo />;
}
```

## License

MIT License - feel free to use in your projects! 