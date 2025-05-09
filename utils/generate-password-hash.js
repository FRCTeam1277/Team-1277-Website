#!/usr/bin/env node

/**
 * Password Hash Generator
 *
 * This script generates SHA-256 hashes for use with the PasswordProtectedContent component.
 * Usage: node generate-password-hash.js <password>
 */

import { createHash } from "crypto";
import { createInterface } from "readline";

// Helper function to create SHA-256 hash
function generateHash(password) {
  return createHash("sha256").update(password).digest("hex");
}

// Interactive mode if no password is provided as argument
if (process.argv.length < 3) {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log("===== Password Hash Generator =====");
  console.log("This utility generates SHA-256 hashes for the PasswordProtectedContent component.");

  rl.question("Enter the password to hash: ", (password) => {
    const hash = generateHash(password);
    console.log("\n===== Results =====");
    console.log("Plain hash:");
    console.log(hash);
    console.log("\nFormatted for component use:");
    console.log(`sha256:${hash}`);
    console.log("\nExample usage:");
    console.log(`<PasswordProtectedContent
  contentId="unique-id"
  passwordHash="sha256:${hash}"
  title="Protected Content"
  description="Enter the password to view this content."
>
  {/* Your protected content */}
</PasswordProtectedContent>`);
    rl.close();
  });
} else {
  // Direct mode if password is provided as argument
  const password = process.argv[2];
  const hash = generateHash(password);

  console.log("\n===== Results =====");
  console.log("Plain hash:");
  console.log(hash);
  console.log("\nFormatted for component use:");
  console.log(`sha256:${hash}`);
}
