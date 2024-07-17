import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { Navigate, Route, Routes } from "react-router";
import { FaAlignJustify } from "react-icons/fa";
import Grades from "./Grades";

export default function Courses() {
  return (
    <div id="wd-courses" style={{ overflowX: "hidden" }}>
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        Course 1234
      </h2>
      <hr />
      <CoursesNavigation />
      <div className="wd-main-content-offset m-4">
        <Routes>
          <Route path="/" element={<Navigate to="Home" />} />
          <Route path="Home" element={<Home />} />
          <Route path="Modules" element={<Modules />} />
          <Route path="Piazza" element={<h2>Piazza</h2>} />
          <Route path="Zoom" element={<h2>Zoom</h2>} />
          <Route path="Assignments" element={<Assignments />} />
          <Route path="Assignments/:id" element={<AssignmentEditor />} />
          <Route path="Quizzes" element={<h2>Quizzes</h2>} />
          <Route path="Grades" element={<Grades />} />
        </Routes>
      </div>
    </div>
  );
}
