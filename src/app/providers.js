"use client";
import { StyleSheetManager } from "styled-components";

export function StyledComponentsRegistry({ children }) {
  return <StyleSheetManager>{children}</StyleSheetManager>;
}
