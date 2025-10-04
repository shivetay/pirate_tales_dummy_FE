import Link from "next/link";

export default function Cave() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        jaskinia - strona po zalogowaniu jesli na misji nie ma dostepu do
        jaskini. tylko widok misji
        <p>
          jedna główna grafika. dostep do kluczowych miejsc. reszta w formie
          pojedynczych grafik na jednym ekranie w formie tabeli
        </p>
        <Link href="/world">świat - budnek wiezy</Link>
        <Link href="/dock">Dok</Link>
        <Link href="/captain-quarter">Kwatera kapitana</Link>
        <Link href="/crew-quarter">Kwatera załogi</Link>
        <Link href="/manage">Zarzadzca</Link>
        <Link href="/savant">Uczony</Link>
      </main>
    </div>
  );
}
