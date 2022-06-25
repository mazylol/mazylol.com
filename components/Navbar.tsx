export default function Navbar() {
  return (
    <div className="bg-neutral-200 h-16 shadow-md">
      <div className="flex flex-row p-4">
        <div className="navitem-container group">
          <p className="navitem">Home</p>
        </div>
        <div className="navitem-container group">
          <p className="navitem">Projects</p>
        </div>
        <div className="navitem-container group">
          <p className="navitem">Skills</p>
        </div>
        <div className="navitem-container group">
          <p className="navitem">About</p>
        </div>
      </div>
    </div>
  );
}
