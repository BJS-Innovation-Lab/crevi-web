import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-crevi-primary">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <Image
            src="/logo-crevi.png"
            alt="CREVI"
            width={120}
            height={38}
            className="h-8 w-auto object-contain opacity-60"
          />
          <p className="text-xs text-crevi-muted/40">
            © {new Date().getFullYear()} CREVI Comunicaciones. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
