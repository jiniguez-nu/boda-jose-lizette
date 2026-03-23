import HeroSection from '@/components/HeroSection';
import LocationSection from '@/components/LocationSection';
import OurStory from '@/components/OurStory';
import GiftSection from '@/components/GiftSection';
import Gallery from '@/components/Gallery';
import RsvpForm from '@/components/RsvpForm';

export default function Home() {
  return (
    <>
      <HeroSection />
      <LocationSection />
      <OurStory />
      <Gallery />
      <GiftSection />
      <RsvpForm />
    </>
  );
}
