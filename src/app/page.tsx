import EntranceHall from "@/components/sections/EntranceHall";
import CuratorsNote from "@/components/sections/CuratorsNote";
import CharacterProfile from "@/components/sections/CharacterProfile";
import TraitsGallery from "@/components/sections/TraitsGallery";
import Timeline from "@/components/sections/Timeline";
import Footprints from "@/components/sections/Footprints";
import VisualArchives from "@/components/sections/VisualArchives";
import GrammarQuiz from "@/components/sections/GrammarQuiz";
import HiddenGallery from "@/components/sections/HiddenGallery";
import Mindset from "@/components/sections/Mindset";
import ClosingRoom from "@/components/sections/ClosingRoom";
import { ExhibitionProvider } from "@/context/ExhibitionContext";
import { LanguageProvider } from "@/context/LanguageContext";
import LanguageSelectionOverlay from "@/components/ui/LanguageSelectionOverlay";
import FloatingLanguageSwitcher from "@/components/ui/FloatingLanguageSwitcher";

export default function Home() {
  return (
    <LanguageProvider>
      <ExhibitionProvider>
        <LanguageSelectionOverlay />
        <FloatingLanguageSwitcher />
        <main className="min-h-screen bg-background text-warm-white selection:bg-gold/30">
          <EntranceHall />
          <CuratorsNote />
          <CharacterProfile />
          <TraitsGallery />
          <Timeline />
          <Footprints />
          <VisualArchives />
          <GrammarQuiz />
          <HiddenGallery />
          <Mindset />
          <ClosingRoom />
        </main>
      </ExhibitionProvider>
    </LanguageProvider>
  );
}
