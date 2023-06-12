import Navbar from '@/components/navbar/NavBar';
import Footer from '@/components/footer/Footer';

export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      <Navbar />
      {children}
      <Footer />
    </section>
  );
}
