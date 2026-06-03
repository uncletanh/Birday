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
import SleepReminder from "@/components/ui/SleepReminder";
import MagicCursor from "@/components/ui/MagicCursor";
import SectionDivider from '@/components/ui/SectionDivider';
import { ExhibitionProvider } from "@/context/ExhibitionContext";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import LanguageSelectionOverlay from "@/components/ui/LanguageSelectionOverlay";
import FloatingLanguageSwitcher from "@/components/ui/FloatingLanguageSwitcher";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";

export default function Home() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ExhibitionProvider>
          <LanguageSelectionOverlay />
          <FloatingLanguageSwitcher />
          <ThemeSwitcher />
          <SleepReminder />
          <MagicCursor />
        <main className="min-h-screen bg-background text-foreground selection:bg-gold/30 selection:text-gold">
          <EntranceHall />
          <SectionDivider />
          <CuratorsNote />
          <SectionDivider />
          <CharacterProfile />
          <SectionDivider />
          <TraitsGallery />
          <SectionDivider />
          <Timeline />
          <SectionDivider />
          <Footprints />
          <SectionDivider />
          <VisualArchives />
          <SectionDivider />
          <GrammarQuiz />
          <SectionDivider />
          <HiddenGallery />
          <SectionDivider />
          <Mindset />
          <SectionDivider />
          <ClosingRoom />
        </main>
        </ExhibitionProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
