import { NextRequest } from "next/server";
import { isValidPassword } from "./isValidPassword";
import { headers } from "next/headers";

// server action helpers
export function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export async function mockSlowRequest() {
  return new Promise((resolve) => {
    // Simulate a delay of 2 seconds (2000 milliseconds)
    setTimeout(() => {
      resolve("Data retrieved after a slow request!");
      console.log("Finished slow request!");
    }, 2000);
  });
}

// for middleware
export async function isAuthenticated(req: NextRequest) {
  const authHeader =
    req.headers.get("authorization") || req.headers.get("Authorization");

  if (authHeader == null) return false;

  // Basic username:password
  const [username, password] = Buffer.from(authHeader.split(" ")[1], "base64")
    .toString()
    .split(":");

  return (
    username === process.env.ADMIN_USERNAME &&
    (await isValidPassword(
      password,
      process.env.HASHED_ADMIN_PASSWORD as string,
    ))
  );
}

// for server actions
export async function isAuthenticatedAction() {
  const headersList = await headers();
  const authHeader =
    headersList.get("authorization") || headersList.get("Authorization");

  if (authHeader == null) return false;

  // Basic username:password
  const [username, password] = Buffer.from(authHeader.split(" ")[1], "base64")
    .toString()
    .split(":");

  return (
    username === process.env.ADMIN_USERNAME &&
    (await isValidPassword(
      password,
      process.env.HASHED_ADMIN_PASSWORD as string,
    ))
  );
}
