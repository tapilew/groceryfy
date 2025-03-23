export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      Some layout specific to the Store section
      {children}
    </main>
  );
}
