import Footer from '@/components/core/Footer';
import Header from '@/components/core/Header';

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-r from-indigo-500">
      <Header />
      <main className="flex justify-center flex-col items-center flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
