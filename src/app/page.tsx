export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="space-y-4 px-6 text-center">
        <p className="font-sans text-sm uppercase tracking-[0.3em] text-muted-foreground">
          Ouro, Santa Catarina
        </p>
        <h1 className="font-heading text-6xl font-light italic md:text-8xl text-gradient-gold">
          Invernada do Sol
        </h1>
        <p className="mx-auto max-w-md font-sans text-lg font-light text-muted-foreground">
          Uma experiência que aquece a alma
        </p>
      </div>
    </main>
  )
}
