import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex flex-row align-middle justify-between">
      <h1>Primate Helpdesk</h1>
      <div className="links-to-pages">
        <Link href="/" className="mr-4">Dashboard</Link>
        <Link href="/tickets">Tickets</Link>
      </div>
    </nav>
  )
}

