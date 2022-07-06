import Animation from '../components/Animation';
import Image from 'next/image';
import Carbonbadge from 'react-carbonbadge';

export default function Index() {
  return (
    <>
      <div className="text-center mt-8 text-neutral-700">
        <p className="text-7xl font-extrabold mb-2">Mazylol</p>
        <p className="text-3xl font-light text-center mb-32">
          An <span className="font-bold">Un</span>professional idiot who likes to code sometimes.
        </p>
      </div>
      <Animation />
      <div className="bg-neutral-400 min-h-screen mt-[80vh] pb-4">
        <div className="pt-12">
          <p className="text-6xl font-bold text-center text-neutral-800">I do some stuff...</p>
          <div className="grid grid-cols-2 gap-4 mt-12 mx-4">
            <div className="stuff-container">
              <p className="stuff">Websites</p>
              <Image src="/website.png" alt="website" width={1280} height={800} />
            </div>
            <div className="stuff-container">
              <p className="stuff">CLI tools</p>
              <Image src="/clitools.png" alt="cli tools" width={1280} height={800} />
            </div>
            <div className="stuff-container">
              <p className="stuff">Discord Bots</p>
              <Image src="/discordbots.png" alt="discord bot" width={1280} height={800} />
            </div>
            <div className="stuff-container">
              <p className="stuff">Content?</p>
              <Image src="/setup.png" alt="content" width={1280} height={800} />
            </div>
          </div>
        </div>
        <div className="mt-8">
          <Carbonbadge />
        </div>
      </div>
    </>
  );
}
