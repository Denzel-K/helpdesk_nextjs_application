import Link from "next/link";
import Loading from "../loading";
import TicketList from "./TicketList";
import { Suspense } from 'react';

export default function Tickets() {
  return (
    <main>
      <nav className="flex flex-row align-middle justify-between">
        <div>
          <h2>Tickets</h2>
          <p><small>Currently open tickets</small></p>
        </div>
     
        <Link className="btn-primary px-3 py-1 rounded flex justify-between items-center gap-2 text-sm" href="/tickets/create"><span className="text-lg text-white">+</span>New ticket</Link>
      </nav>

      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>     
    </main>
  )
}
