import { useMemo } from "react";
import md5 from "./md5";

/**
 * MD5 function, converts input to MD5 hex string
 * @param input {string} Input string
 */
export const md5hex = (input: string): string =>
  Array.from(md5(input))
    .map(x => x.toString(16).padStart(2, "0"))
    .join("");

/**
 * Simple function to generate a gravatar avatar image url based on email and size
 * @param email {string} Email to use for Gravatar
 * @param [size] {number} Size of avatar (in pixels)
 */
export const toGravatar = (email: string, size?: number) => {
  return email ? `https://www.gravatar.com/avatar/${md5hex(email)}?d=mp${size ? `&s=${size}` : ""}` : "";
};

/**
 * Hook to generate and memoize a gravatar avatar image url based on email and size
 * @param email {string} Email to use for Gravatar
 * @param [size] {number} Size of avatar (in pixels)
 */
export const useGravatar = (email: string, size?: number): string => {
  return useMemo(() => toGravatar(email, size), [email, size]);
};

/**
 * Hook to create and memoize (based on email) a gravatar avatar image url generation function based on size
 * This should be used when same email Gravatar is used in the same component in different sizes
 * @param email {string} Email to use for Gravatar
 */
export const useGravatarFactory = (email: string): ((size: number) => string) => {
  return useMemo(() => {
    if (!email) return () => "";
    const hash = md5hex(email);
    return (size: number) => `https://www.gravatar.com/avatar/${hash}?s=${size}&d=mp`;
  }, [email]);
};
