import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculator",
  description: "Usa nuestra calculadora online fácil y rápida para resolver cálculos matemáticos.",
  keywords: ["calculadora", "calculadora online", "operaciones matemáticas"],
  authors: [{ name: "Anselmo Vecchio" }],
  robots: "index, follow",
  openGraph: {
    title: "Calculadora Online | Mejor Calculadora Web",
    description: "Usa nuestra calculadora online fácil y rápida para resolver cálculos matemáticos.",
    url: "https://tu-sitio.com",
    images: [
      {
        url: "https://i.pinimg.com/736x/b5/bd/57/b5bd57770f6fa3b82912428dc4d9e905.jpg",
        width: 500,
        height: 300,
        alt: "Calculadora Online",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}