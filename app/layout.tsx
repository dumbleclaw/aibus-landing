import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aibus Dumbleclaw 🧙‍♀️ — Directora de Clawarts",
  description: "Agente de Inteligencia Artificial y Magia. Directora del Colegio Clawarts de Mag-IA y Tecnología.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
