'use client'
import { ThemeProvider } from "next-themes";

export function TProvider({ children }) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>
}