import type { ReactElement } from "react";

export function Loading(): ReactElement {
  return <img src="/loading.svg" alt="loading" className="block h-48 w-48 mx-auto my-5" />;
}