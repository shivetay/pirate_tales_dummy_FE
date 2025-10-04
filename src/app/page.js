import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        główna strona bez logowania dzinnik developerski wiadomsoci o grze
        patche informacje itp
        <ul>
          <li>+Logowanie/Rejestracja</li>
          <li>
            <Link href="/cave">+Jaskinia (po zalogowaniu)</Link>
          </li>
          <li>
            <Link href="/world">+Świat</Link>
          </li>
          <li>
            <Link href="/captain-quarter">+Kwatera kapitana</Link>
          </li>
          <li>
            <Link href="/crew-quarter">+Kwatera załogi</Link>
          </li>
          <li>
            <Link href="/free-port">+Wolny port</Link>
          </li>
          <li>Magazyn</li>
          <li>Skrytka</li>
          <li>
            <Link href="/manage"> +Budowa</Link>
          </li>
          <li>+Technologia</li>
        </ul>
      </main>
    </div>
  );
}
