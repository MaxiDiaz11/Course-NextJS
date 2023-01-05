import Link from "next/link";
import { MainLayout } from "../components/Layouts/MainLayout";

export default function ContactPage() {
  return (
    <MainLayout>
      <h1>Contact Page</h1>
      <h1 className="tittle">
        Ir a <Link href={"/home"}>Home</Link>
      </h1>
      <h1 className="tittle">
        Ir a <Link href={"/about"}>About</Link>
      </h1>

      <p className="description">
        Get started by editing&nbsp;
        <code className="code">pages/conctact.tsx</code>
      </p>
    </MainLayout>
  );
}
