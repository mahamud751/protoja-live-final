import CustomNavbar from "@/components/shared/CustomNavbar";
import Footer from "@/components/shared/Footer";

export function Provider({ children }) {
  return (
    <>
      <CustomNavbar />
      {children}
      <Footer />
    </>
  );
}
