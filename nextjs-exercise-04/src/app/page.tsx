import { Header } from "@/components/Header";

export default function Home() {
  return (
    <main className="page-shell">
      <section className="demo-card">
        <Header />
        <h2>Welcome to the Exercise 04 demo</h2>
        <p className="intro">
          The header and icon are Server Components. The color-mode button is a
          Client Component because it uses state and an onClick event handler.
        </p>
        <p className="intro">
          Open the terminal running the development server to see the Header
          calculation logged on the server.
        </p>
      </section>
    </main>
  );
}