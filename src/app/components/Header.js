import Link from "next/link";

export function Header() {
  return (
    <header className="row-start-1 flex gap-[24px] flex-wrap items-center justify-center">
      <Link href="/">Główna</Link>
      <Link href="/login">Logowanie/Rejestracja</Link>
      <Link href="/cave">Jaskinia/Wyprawa</Link>
    </header>
  );
}
