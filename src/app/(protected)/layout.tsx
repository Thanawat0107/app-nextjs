import Footer from "../_components/layout/Footer";
import Header from "../_components/layout/Header";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex flex-col min-h-screen">
      <Header />
      <main className="p-5 max-w-[70rem] mx-auto w-full">
        {children}
        </main>
      <Footer />
    </section>
  );
}
