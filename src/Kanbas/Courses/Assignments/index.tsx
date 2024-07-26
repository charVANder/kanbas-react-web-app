import { FaPlus } from "react-icons/fa6";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { GoTriangleDown } from "react-icons/go";
import AssignmentButtons from "./AssignmentButtons";
import db from "../../Database"
import { Link, useParams } from "react-router-dom";

export default function Assignments() {
  const { cid } = useParams();
  const courseAssignments = db.assignments.filter(
    (assignment) => assignment.course === cid
  );

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
      <ul className="list-group rounded-0 border-gray">
        <div className="wd-assignments-title p-3 ps-2 bg-secondary">
          <BsGripVertical className="me-2 fs-3" />
          <GoTriangleDown className="me-2 fs-5" />
          <strong className="fs-5">ASSIGNMENTS</strong>
          <AssignmentControlButtons />
        </div>
        {courseAssignments.map((assignment) => (
          <li key={assignment._id} className="list-group-item p-0 border-0">
            <div
              className="wd-assignment list-group-item p-3 ps-1 d-flex align-items-center"
              style={{
                borderLeft: "5px solid #198754",
              }}
            >
              <AssignmentButtons />
              <div>
                <Link
                  to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                  className="text-dark fw-bold fs-5"
                >
                  {assignment.title}
                </Link>
                <p className="fs-6 mb-0">
                  <span className="text-danger">Multiple Modules</span> |
                  <b>Not available until</b> {assignment.startdate} at 12:00am
                  | <br />
                  <b>Due</b> {assignment.enddate} at 11:59pm | 100pts
                </p>
              </div>
              <div className="ms-auto">
                <LessonControlButtons />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
