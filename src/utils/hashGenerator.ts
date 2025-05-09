/**
 * Password Hash Generator Utility
 *
 * This utility generates SHA-256 hashes for use with the PasswordProtectedContent component.
 * Use this to create secure password hashes that can be used in your components.
 */
import { SHA256 } from "crypto-js";

/**
 * Generates a SHA-256 hash from a plain text password
 * @param password The plain text password to hash
 * @returns The SHA-256 hash of the password
 */
export function generatePasswordHash(password: string): string {
  return SHA256(password).toString();
}

/**
 * Formats a hash for use with the PasswordProtectedContent component
 * @param hash The hash string to format
 * @returns A formatted hash string with the "sha256:" prefix
 */
export function formatPasswordHash(hash: string): string {
  return `sha256:${hash}`;
}

/**
 * Convenience function to generate and format a password hash in one step
 * @param password The plain text password to hash and format
 * @returns A formatted hash string ready to use with PasswordProtectedContent
 */
export function createPasswordHash(password: string): string {
  const hash = generatePasswordHash(password);
  return formatPasswordHash(hash);
}
