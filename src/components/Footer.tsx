export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-crevi-primary py-8">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm text-crevi-muted">
          © {new Date().getFullYear()} CREVI Comunicaciones. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
