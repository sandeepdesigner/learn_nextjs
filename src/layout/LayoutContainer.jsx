import Header from "./Header";
import Footer from "./footer";

function LayoutContainer({ children }) {
  return (
    <div className="main">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default LayoutContainer;
