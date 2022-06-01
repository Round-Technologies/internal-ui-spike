export default function RootLayout({ children }) {
  console.log("yes")
  return (
    <html>
      <body>
          {children}
      </body>
    </html>
  )
}