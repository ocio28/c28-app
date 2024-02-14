export function slide_param(): string | null {
  const queryParams = new URLSearchParams(window.location.search);
  return queryParams.get('slide');
}