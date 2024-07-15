import { FaPlus } from "react-icons/fa6";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { GoTriangleDown } from "react-icons/go";
import AssignmentButtons from "./AssignmentButtons";

export default function Assignments() {
  return (
    <div id="wd-assignments" className="text-nowrap">
      <div className="d-flex align-items-center justify-content-between">
        <div className="input-group">
          <span className="input-group-text bg-white border-end-0">
            <FaSearch />
          </span>
          <input
            className="form-control form-control-lg border-start-0"
            type="text"
            id="wd-search-assignment"
            placeholder="Search..."
          />
        </div>
        <button
          id="wd-add-assignment-group"
          className="btn btn-lg btn-secondary me-1 float-end"
        >
          <FaPlus
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Group
        </button>{" "}
        <button
          id="wd-add-assignment"
          className="btn btn-lg btn-danger me-1 float-end"
        >
          <FaPlus
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Assignment
        </button>
      </div>
      <br />
      <br />
      <ul id="wd-assignments" className="list-group rounded-0">
        <li
          id="wd-assignments-title"
          className="wd-assignments-title list-group-item p-0 mb-5 fs-5 border-gray"
        >
          <div className="wd-assignments-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <GoTriangleDown className="me-2 fs-5" />
            <strong>ASSIGNMENTS</strong>
            <AssignmentControlButtons />
          </div>
          <li className="wd-assignment list-group-item p-3 ps-1 d-flex align-items-center">
            <AssignmentButtons />
            <div>
              <a
                href="#/Kanbas/Courses/1234/Assignments/123"
                className="text-dark fw-bold"
              >
                A1
              </a>
              <p className="fs-5 mb-0">
                <span className="text-danger">Multiple Modules</span> |{" "}
                <b>Not available until</b> May 6 at 12:00am | <br />
                <b>Due</b> May 13 at 11:59pm | 100pts
              </p>
            </div>
            <div className="ms-auto">
              <LessonControlButtons />
            </div>
          </li>
          <li className="wd-assignment list-group-item p-3 ps-1 d-flex align-items-center">
            <AssignmentButtons />
            <div>
              <a
                href="#/Kanbas/Courses/1234/Assignments/123"
                className="text-dark fw-bold"
              >
                A2
              </a>
              <p className="fs-5 mb-0">
                <span className="text-danger">Multiple Modules</span> |{" "}
                <b>Not available until</b> May 13 at 12:00am | <br />
                <b>Due</b> May 20 at 11:59pm | 100pts
              </p>
            </div>
            <div className="ms-auto">
              <LessonControlButtons />
            </div>
          </li>
          <li className="wd-assignment list-group-item p-3 ps-1 d-flex align-items-center">
            <AssignmentButtons />
            <div>
              <a
                href="#/Kanbas/Courses/1234/Assignments/123"
                className="text-dark fw-bold"
              >
                A3
              </a>
              <p className="fs-5 mb-0">
                <span className="text-danger">Multiple Modules</span> |{" "}
                <b>Not available until</b> May 20 at 12:00am | <br />
                <b>Due</b> May 27 at 11:59pm | 100pts
              </p>
            </div>
            <div className="ms-auto">
              <LessonControlButtons />
            </div>
          </li>
        </li>
      </ul>
    </div>
  );
}
