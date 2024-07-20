import { LiaFileImportSolid, LiaFileExportSolid } from "react-icons/lia";
import { IoMdSettings } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import { grades } from "../../Database";
import { users } from "../../Database";
import { enrollments } from "../../Database";

export default function Grades() {
  const { cid } = useParams();
  const filteredAssignments = assignments.filter(
    (assignment) => assignment.course === cid
  );
  const filteredEnrollments = enrollments.filter(
    (enrollment) => enrollment.course === cid
  );
  const filteredGrades = grades.filter((grade) =>
    filteredAssignments.some(
      (assignment) => assignment._id === grade.assignment
    )
  );

  return (
    <div className="container">
      <div id="wd-grade-options" className="text-nowrap">
        <button
          id="wd-settings"
          className="btn btn-lg btn-secondary me-1 float-end"
          type="button"
        >
          <IoMdSettings className="fs-4" />
        </button>
        <div className="btn-group me-1 float-end">
          <button
            id="wd-export-btn"
            className="btn btn-lg btn-secondary dropdown-toggle"
            type="button"
          >
            <LiaFileExportSolid className="position-relative me-2" />
            Export
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                made you look :p
              </a>
            </li>
          </ul>
        </div>
        <button
          id="wd-import-btn"
          className="btn btn-lg btn-secondary me-1 float-end"
        >
          <LiaFileImportSolid
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Import
        </button>
      </div>
      <br />
      <br />
      <br />
      <div id="wd-student-assignment-names" className="row mt-3">
        <div className="col">
          <label htmlFor="wd-student-name" className="fw-bold">
            Student Names
          </label>
          <div className="input-group mb-3">
            <span className="input-group-text">
              <FaSearch />
            </span>
            <input
              type="text"
              className="form-control"
              id="wd-student-name"
              placeholder="Search Students"
            />
          </div>
        </div>
        <div className="col">
          <label htmlFor="wd-assignment-name" className="fw-bold">
            Assignment Names
          </label>
          <div className="input-group mb-3">
            <span className="input-group-text">
              <FaSearch />
            </span>
            <input
              type="text"
              className="form-control"
              id="wd-assignment-name"
              placeholder="Search Assignments"
            />
          </div>
        </div>
      </div>
      <div id="wd-filter-btn" className="row">
        <div className="col">
          <button
            id="wd-filters-btn"
            className="btn btn-lg btn-secondary me-1"
            type="button"
          >
            {" "}
            <FiFilter
              className="position-relative me-2"
              style={{ bottom: "1px" }}
            />
            Apply Filters
          </button>
        </div>
      </div>
      <div
        id="wd-grades-table-wrapper"
        className="table-responsive mt-3"
        style={{
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <table
          id="wd-grades-table"
          className="table table-striped table-bordered"
          style={{
            minWidth: "600px",
          }}
        >
          <thead>
            <tr>
              <th scope="col">Student Name</th>
              {filteredAssignments.map((assignment) => (
                <th scope="col" className="fw-normal text-center">
                  {assignment.title}
                  <br />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredEnrollments.map((enrollment) => {
              const student = users.find(
                (user) => user._id === enrollment.user
              );
              return (
                <tr key={enrollment._id}>
                  <th className="text-danger fw-normal">
                    {student ? `${student.firstName} ${student.lastName}` : ""}
                  </th>
                  {filteredAssignments.map((assignment) => {
                    const grade = filteredGrades.find(
                      (grade) =>
                        grade.assignment === assignment._id &&
                        grade.student === enrollment.user
                    );
                    return (
                      <td key={assignment._id}>
                        <input
                          type="text"
                          className="form-control"
                          value={grade ? `${grade.grade}%` : "-"}
                        />
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
