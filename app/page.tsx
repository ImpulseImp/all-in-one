import EmailSubscribe from "@/components/EmailSubscribe";
import PricingGrids from "@/components/PricingGrids";
import ProductModal from "@/components/ProductModal";

export default function Home() {
  return (
    <div>
      {/* <h1>Hello Impulse</h1> */}
      <EmailSubscribe />
      <PricingGrids />
      <ProductModal />
    </div>
  );
}
