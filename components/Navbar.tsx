import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="bg-neutral-200 h-16 shadow-md">
      <div className="flex flex-row p-4">
        <Link href="/">
          <div className="navitem-container group">
            <p className="navitem">Home</p>
          </div>
        </Link>
        <Link href="/construction">
          <div className="navitem-container group">
            <p className="navitem">Projects</p>
          </div>
        </Link>
        <Link href="/construction">
          <div className="navitem-container group">
            <p className="navitem">About</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
