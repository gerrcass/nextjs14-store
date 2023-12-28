export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <nav>Category breadcrumbs</nav>
      {children}
    </main>
  );
}
