import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="flex justify-center space-x-4 my-8">
      <Link href="/">
        <button className="btn">Registration</button>
      </Link>
      <Link href="/waiting-list">
        <button className="btn">Waiting List</button>
      </Link>
    </nav>
  );
}
