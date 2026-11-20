import type { ReactNode } from "react";
import RegisterSW from "./register-sw";

export const metadata = {
  title: "HandUp",
  description: "Learn a craft, earn a living.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <RegisterSW />
        {children}
      </body>
    </html>
  );
}
