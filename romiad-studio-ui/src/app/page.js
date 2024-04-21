import _metadata from "@/config/metadata";
import Fullpage from './Fullpage';

export const metadata = {
  title: _metadata.title,
  keywords: _metadata.keywords,
}

const anchors = ['main', 'motion', 'story', 'image', 'footer']

export default function Home() {
  return (
    <main>
      <Fullpage />
    </main>
  );
}
