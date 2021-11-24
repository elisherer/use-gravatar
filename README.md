[![npm version](https://badge.fury.io/js/use-gravatar.svg)](https://www.npmjs.com/package/use-gravatar)

# useToggle
A React hook (memoized) for getting gravatar's url based on email address

## Usage

```tsx
import { useGravatar } from 'use-gravatar';

const Component = ({ email } : { email: string }) => {
  const src = useGravatar(email, 48);
  return (
    <img src={src} alt="Avatar" />
  )
}
```

## API

```ts
/**
 * Simple function to generate a gravatar avatar image url based on email and size
 * @param email {string} Email to use for Gravatar
 * @param [size] {number} Size of avatar (in pixels)
 */
export declare const toGravatar: (email: string, size?: number) => string;
/**
 * Hook to generate and memoize a gravatar avatar image url based on email and size
 * @param email {string} Email to use for Gravatar
 * @param [size] {number} Size of avatar (in pixels)
 */
export declare const useGravatar: (email: string, size?: number) => string;
/**
 * Hook to create and memoize (based on email) a gravatar avatar image url generation function based on size
 * This should be used when same email Gravatar is used in the same component in different sizes
 * @param email {string} Email to use for Gravatar
 */
export declare const useGravatarFactory: (email: string) => (size: number) => string;
/**
 * MD5 function, converts input to MD5 hex string
 * @param input {string} Input string
 */
export declare const md5hex: (input: string) => string;
```
## LICENSE

MIT
