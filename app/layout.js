import './globals.css';

export const metadata = {
  title: 'Project Y',
  description: 'X + Instagram + Facebook style feed',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen">
        <header className="border-b border-gray-800 p-4 sticky top-0 bg-black/80 backdrop-blur z-10">
          <h1 className="text-xl font-bold">Project Y</h1>
        </header>
        <main className="max-w-2xl mx-auto">{children}</main>
      </body>
    </html>
  );
}