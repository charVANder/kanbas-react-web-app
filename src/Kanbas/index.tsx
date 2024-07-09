import { Routes, Route, Navigate } from "react-router";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";

export default function Kanbas() {
  return (
    <div id="wd-kanbas">
      <table border={1} width="100%">
        <tr>
          <td valign="top">
            <KanbasNavigation />
          </td>
          <td valign="top">
            <Routes>
              <Route path="/" element={<Navigate to="Dashboard" />} />
              {/* <Route path="Account" element={<h1>Account<h1/>} /> */}
              <Route path="Dashboard" element={<Dashboard />} />
              <Route path="Courses/:id/*" element={<Courses />} />
              {/* <Route path="Calendar" element={<h1>Calendar<h1/>} />
              <Route path="Inbox" element={<h1>Inbox<h1/>} /> */}
            </Routes>
          </td>
        </tr>
        Back to landing (Labs) page{" "}
        <a id="wd-a" href="#/Labs">
          here!
        </a>
      </table>
    </div>
  );
}
