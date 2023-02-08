import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <title>Todo List Page</title>

      <body>
        <nav style={{ padding:15, margin: 5 }}>
          <Link href="/" style={{ padding:"0 10px 0 0" }}>Home</Link>
          <Link href="/todo" style={{ padding:"0 10px 0 0" }}>Form Todo</Link>
        </nav>
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}
