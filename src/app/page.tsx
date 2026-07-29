import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a192f] to-[#020c1b]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12 flex gap-12">
        <Sidebar />
        <MainContent />
      </div>
    </main>
  );
}
