import Hero from "../components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="flex min-h-screen items-center justify-center bg-[#111114] px-6">
        <p className="max-w-xl text-center text-2xl font-light leading-relaxed text-zinc-300">
          The hero unpins here. Scroll back up and the car drives back with you.
        </p>
      </section>
    </main>
  );
}
