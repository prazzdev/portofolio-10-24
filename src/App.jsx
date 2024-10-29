import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import ToolPage from "./pages/tool";
import ProjectPage from "./pages/project";
import BlogPage from "./pages/blog";
import PageTitle from "./helpers/components/PageTitle";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <PageTitle text="Agung Prasetyo | Junior Front End Web Developer" />
              <Home />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <PageTitle text="About | Agung Prasetyo" />
              <About />
            </>
          }
        />
        <Route
          path="/tool"
          element={
            <>
              <PageTitle text="Tool | Agung Prasetyo" />
              <ToolPage />
            </>
          }
        />
        <Route
          path="/project"
          element={
            <>
              <PageTitle text="Project | Agung Prasetyo" />
              <ProjectPage />
            </>
          }
        />
        <Route
          path="/blog"
          element={
            <>
              <PageTitle text="Blog | Agung Prasetyo" />
              <BlogPage />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
