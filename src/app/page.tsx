import { cookies } from 'next/headers';
import HeroSection from '@/components/HeroSection';
import LocationSection from '@/components/LocationSection';
import OurStory from '@/components/OurStory';
import GiftSection from '@/components/GiftSection';
import Gallery from '@/components/Gallery';
import RsvpForm from '@/components/RsvpForm';

export default async function Home() {
  const cookieStore = await cookies();

  const guest = JSON.parse(
    cookieStore.get('guest')?.value || '{}'
  );
  return (
    <>
      <HeroSection guest={guest}/>
      <LocationSection />
      <OurStory />
      <Gallery />
      <GiftSection />
      <RsvpForm guest={guest}/>
    </>
  );
}
