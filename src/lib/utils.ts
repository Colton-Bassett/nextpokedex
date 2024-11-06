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
