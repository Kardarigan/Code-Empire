import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Layout,
  Home,
  About,
  Blog,
  Policy,
  Contact,
  Service,
  Single_Blog,
  Single_Service,
} from "./comps/Portal";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:blog" element={<Single_Blog />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/service/:service" element={<Single_Service />} />
          <Route
            path="/courses"
            element={
              <h1 className="size-screen flex-fullcenter text-indigo-400 md:text-8xl text-5xl">
                ...دوره ها تو راهن
              </h1>
            }
          />
          <Route
            path="*"
            element={
              <h1 className="size-screen flex-fullcenter text-indigo-400 md:text-8xl text-5xl">
                404
              </h1>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
