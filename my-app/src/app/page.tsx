import Image from "next/image";
import Navbar from "../../components/navigation/Navbar";
import ImageList from "../../components/landing-page/ImageList";
import Footer from "../../components/Footer"; // Change the import statement to match the actual file name

export default function Home() {
  return (
    <div>
      <Navbar />
      <ImageList />
      <Footer />
    </div>
  );
}
