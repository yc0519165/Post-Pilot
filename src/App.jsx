import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Solution from "./pages/Solution";
import Header from "./components/Header";
import Prospective from "./pages/Prospective";
import Retargeting from "./pages/Retargeting";
import Retention from "./pages/Retention";
import Cpg from "./pages/Cpg";
import Apparel from "./pages/Apparel";
import HomeFurnishing from "./pages/HomeFurnishing";
import PetSupplies from "./pages/PetSupplies";
import ThcCbd from "./pages/ThcCbd";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import Footer from "./components/Footer";
import Faqs from "./pages/Faqs";
import PostPilotBlogs from "./pages/PostPilotBlogs";
import DesignStudio from "./pages/DesignStudio";
import NerdMarketing from "./pages/NerdMarketing";
import Aboutus from "./pages/Aboutus";
import Partner from "./pages/Partner";
import Integration from "./pages/Integration";
import Contact from "./pages/Contact";
import Success from "./pages/Success";
import Pricing from "./pages/Pricing";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RightRequest from "./pages/RightRequest";
import OptOutMailers from "./pages/OptOutMailers";
import Reviews from "./pages/Reviews";
import DirectMailMarketing from "./pages/DirectMailMarketing";
import TermCondition from "./pages/TermCondition";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/solution/prospective" element={<Prospective />} />
        <Route path="/solution/retargeting" element={<Retargeting />} />
        <Route path="/solution/retantion" element={<Retention />} />
        <Route path="/solution/cpg" element={<Cpg />} />
        <Route path="/solution/apperial" element={<Apparel />} />
        <Route path="/solution/petSupplies" element={<PetSupplies />} />
        <Route path="/solution/homeFurnished" element={<HomeFurnishing />} />
        <Route path="/solution/thccbd" element={<ThcCbd />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/resource/faqs" element={<Faqs />} />
        <Route path="/resource/postPilotBlogs" element={<PostPilotBlogs />} />
        <Route path="/resource/designStudio" element={<DesignStudio />} />
        <Route path="/resource/nerdMarketing" element={<NerdMarketing />} />
        <Route path="/company/aboutus" element={<Aboutus />} />
        <Route path="/company/partner" element={<Partner />} />
        <Route path="/company/integration" element={<Integration />} />
        <Route path="/company/contact" element={<Contact />} />
        <Route path="/successStories" element={<Success />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/right-request-form" element={<RightRequest />} />
        <Route path="/opt-out-of-mailers" element={<OptOutMailers />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route
          path="/direct-mail-marketing"
          element={<DirectMailMarketing />}
        />
        <Route path="/terms-and-condition" element={<TermCondition />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
