import Navbar from './Navbar';

export default function Layout({ children }: { children: any }) {
  return (
    <>
      <div className="bg-neutral-300 min-h-screen">
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  );
}
