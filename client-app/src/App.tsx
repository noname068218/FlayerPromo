import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./pages/services/Services";
import About from "./pages/about/About";
import NotFound from "./pages/notFound/NotFound";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Portfolio from "./pages/portfolio/Portfolio";
import Galleria from "./pages/galleria/Galleria";
import Reviews from "./pages/recensioni/Reviews";
import ContactForm from "./pages/contacts/ContactForm";
import AdminLogin from "./pages/admin/Login";
import ProtectedRoute from "./pages/protectedRoute/ProtectedRoute";
import AdminDashboard from "./pages/adminDashboard/AdminDashboard";
import AdminMessages from "./pages/admin/MessagesAdmin";
import GalleryUpload from "./pages/admin/GalleryUpload";
///add evre
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servizi" element={<Services />} />
        <Route path="/contactForm" element={<ContactForm />} />
        <Route path="/chi-siamo" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/galleria" element={<Galleria />} />
        <Route path="/review" element={<Reviews />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/messages"
          element={
            <ProtectedRoute>
              <AdminMessages />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/gallery-upload"
          element={
            <ProtectedRoute>
              <GalleryUpload />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
