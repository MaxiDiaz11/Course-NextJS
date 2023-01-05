import Link from "next/link";
import { MainLayout } from "../../components/Layouts/MainLayout";
import { DarkLayout } from "../../components/Layouts/DarkLayout";

export default function PricingPage() {
  return (
    <>
      <h1>Pricing Page</h1>
      <h1 className="tittle">
        Ir a <Link href={"/"}>Home</Link>
      </h1>

      <p className="description">
        Get started by editing&nbsp;
        <code className="code">pages/pricing.tsx</code>
      </p>
    </>
  );
}

PricingPage.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
