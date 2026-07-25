import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="p-8">
        <h2 className="text-3xl font-bold">
          Welcome to my portfolio
        </h2>
      </main>
    </>
  );
}