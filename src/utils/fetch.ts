export const apiLink = "https://fakestoreapi.com";

export async function jsonFetch<T>(endpoint: string, request: RequestInit = {}): Promise<T> {
  const response = await fetch(`${apiLink}${endpoint}`, request);

  if (!response.ok) throw new Error("Request failed");

  return await response.json();
}