import Header from "../components/Header";
import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <tittle>Nextjs App</tittle>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
