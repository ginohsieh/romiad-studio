import _metadata from "@/config/metadata";
import Fullpage from './Fullpage';

export const metadata = {
  title: _metadata.title,
  keywords: _metadata.keywords,
}

export default function Home() {
  return (
    <main>
      <Fullpage />
    </main>
  );
}
