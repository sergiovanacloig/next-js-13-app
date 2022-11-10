import Header from "./components/Header";

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
