export function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-crevi-muted md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold tracking-[0.22em] text-white">
            CREVI
          </p>
          <p className="mt-2 max-w-md">
            Tecnología profesional en seguridad, telecomunicaciones y misión
            crítica.
          </p>
        </div>

        <div className="flex flex-wrap gap-5">
          <a href="#inicio" className="transition hover:text-white">
            Inicio
          </a>
          <a href="#servicios" className="transition hover:text-white">
            Servicios
          </a>
          <a href="#nosotros" className="transition hover:text-white">
            Nosotros
          </a>
          <a href="#contacto" className="transition hover:text-white">
            Contacto
          </a>
        </div>

        <p>© 2026 CREVI Comunicaciones. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
