import Nav from "@components/Nav";
import Footer from "@components/Footer";

export const metadata = {
  title: "Loby",
  description: "",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main className="app">
          <div className="grad grid-cols-3 grid-rol-2">
            <Nav />
            {children}
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
