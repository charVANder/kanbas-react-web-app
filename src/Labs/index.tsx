import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Lab4 from "./Lab4";
import store from "./store";
import { Provider } from "react-redux";

export default function Labs() {
  return (
    <Provider store={store}>
      <div id="wd-labs" className="container-fluid">
        <h1>Evangeline Kim, Section 01</h1>
        <h1>Labs</h1>
        {/* <h2>Table of Contents</h2> */}
        <TOC />
        <Routes>
          <Route path="/" element={<Navigate to="Labs" />} />
          <Route path="Lab1" element={<Lab1 />} />
          <Route path="Lab2" element={<Lab2 />} />
          <Route path="Lab3/*" element={<Lab3 />} />
          <Route path="Lab4" element={<Lab4 />} />
        </Routes>
        {/* GitHub main repository{" "}
      <a
        id="wd-github"
        href="https://github.com/charVANder/kanbas-react-web-app"
        target="blank"
      >
        here
      </a> */}
      </div>
    </Provider>
  );
}
