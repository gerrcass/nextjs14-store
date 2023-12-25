export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <nav>Category breadcrumbs</nav>
      {children}
    </main>
  );
}
