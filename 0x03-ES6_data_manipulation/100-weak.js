// Define a WeakMap instance
export const weakMap = new WeakMap();

// Define the queryAPI function
export function queryAPI(endpoint) {
  // Initialize count for this endpoint if not already tracked
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  
  // Increment the count for this endpoint
  const count = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, count);
  
  // Check if count is >= 5 and throw an error if so
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
  
  return count;
}
