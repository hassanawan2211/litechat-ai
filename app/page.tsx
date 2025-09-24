import ChatContainer from "@/components/ChatContainer";
import FeaturesGrid from "@/components/FeaturesGrid";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex flex-col">
      <section className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-4xl w-full">
          <HeroSection />
          <ChatContainer />
          <FeaturesGrid />
        </div>
      </section>
    </div>
  );
}