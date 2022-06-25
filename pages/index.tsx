import Animation from '../components/Animation';

export default function Index() {
  return (
    <>
      <div className="text-center mt-8 text-neutral-700">
        <p className="text-7xl font-extrabold mb-2">Mazylol</p>
        <p className="text-3xl font-light text-center mb-12">
          An <span className="font-bold">Un</span>professional idiot who likes to code sometimes.
        </p>
      </div>
      <Animation />
      <div className="bg-neutral-400 min-h-screen mt-[75vh]">
        <div className="pt-12">
          <p className="text-6xl font-bold text-center text-neutral-800">I do some stuff...</p>
          <div className="grid grid-cols-2 gap-4 mt-8 mx-4">
            <div className="stuff-container">
              <p className="stuff">Code</p>
            </div>
            <div className="stuff-container">
              <p className="stuff">Code</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
