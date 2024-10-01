import localFont from "next/font/local";
import "../styles/globals.css";

// Ajustar la ruta de la fuente
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",  // Asegúrate de que el nombre del archivo coincida (mayúsculas/minúsculas importan)
});

// El componente principal de layout
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={geistSans.className}>
        {children}
      </body>
    </html>
  );
}
