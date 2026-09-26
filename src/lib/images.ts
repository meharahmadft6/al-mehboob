/**
 * Deterministic placeholder photography for development/demo purposes.
 * Swap for real photography before launch.
 */
export function placeholderImage(seed: string, width: number, height: number) {
  return `https://picsum.photos/seed/${encodeURIComponent(seed)}/${width}/${height}`;
}
