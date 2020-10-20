# `@rojo2/range`

A series of utility functions to work with ranges.

```javascript
import range from '@rojo2/range'

// Returns values between `min` and +Infinity
range.upper(0, 10) // 10
// Returns values between -Infinity and `max`
range.lower(100, 10) // 10
// Returns values between `min` and `max`
range.clamp(0, 10, 20) // 10
// Returns the linear extrapolation between `min` and `max`
range.from(5, 0, 10) // 0.5
// Returns the linear interpolation between `min` and `max`
range.to(0.5, 0, 10) // 5
// Returns the linear extrapolation between `fromMin` and
// `fromMax` and returns the linear interpolation between
// `toMin` and `toMax`.
// This is the same as calling to(from(value, fromMin, fromMax), toMin, toMax)
range.fromTo(5, 0, 10, 100, 200) // 150
```

Made with :heart: by [rojo2](https://rojo2.com)
