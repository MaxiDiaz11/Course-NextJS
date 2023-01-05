import Link from "next/link";
import { MainLayout } from "../components/Layouts/MainLayout";
import { DarkLayout } from "../components/Layouts/DarkLayout";

export default function AboutPage() {
  return (
    <>
      <h1>About Page</h1>
      <h1 className="tittle">
        Ir a <Link href={"/"}>Home</Link>
      </h1>

      <p className="description">
        Get started by editing&nbsp;
        <code className="code">pages/about.tsx</code>
      </p>
    </>
  );
}

AboutPage.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
