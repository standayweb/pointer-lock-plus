# Pointer Lock Plus
Provides additional features like sensitivity to pointer-lock.

## Code Example
```javascript
import lock from 'pointer-lock-plus';

this.pointer = lock({
  element: canvas,
  sensitivity: 0.002,
  onData: (dx, dy) => {
    console.log(dx);
    console.log(dy);
  },
});
```

## Installation
```
npm install pointer-lock-plus
```

## API Reference
It has the same hooks as [pointer-lock](https://github.com/chrisdickinson/pointer-lock) events, prefixed with on (onData, onClose, etc) and the the same callbacks are also available.

## Contributors
Contributions are welcome and suggestions on more stuff this library should offer.
