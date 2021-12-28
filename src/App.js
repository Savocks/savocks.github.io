import { Routes, Route } from "react-router-dom";
import { Home } from "./routes/home/Home";
import { Header } from "./components/header/Header";
import { AboutMe } from "./routes/about-me/AboutMe";
import { Projects } from "./routes/projects/Projects";
import { Contacts } from "./routes/contacts/Contacts";

export default function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about-me" element={<AboutMe />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/contacts" element={<Contacts />}/>
        </Routes>
      </main>
    </>
  );
}
