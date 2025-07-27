export function Footer() {
  return (
    <footer className="flex items-center justify-center border-t border-border-primary bg-bg-secondary p-4 text-sm text-text-secondary">
      <div className="flex flex-col items-center space-y-2">
        <p className="text-center">
          Designed & Built by{" "}
          <a
            href="https://rajanavadhane.dev"
            className="text-text-primary hover:underline"
          >
            Rajan Avadhane
          </a>
        </p>
        <p>© {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
