import Footer from "./components/footer";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-full h-full relative">
      {children}
      <Footer />
    </div>
  );
}