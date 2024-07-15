import { LiaFileImportSolid, LiaFileExportSolid } from "react-icons/lia";
import { IoMdSettings } from "react-icons/io";
import { FaSearch } from "react-icons/fa";


export default function Grades() {
  return (
    <div>
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
            data-bs-toggle="dropdown"
            aria-expanded="false"
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
    </div>
  );
}

      // <div className="d-flex align-items-center justify-content-between">
      //   <div className="input-group">
          // <span className="input-group-text bg-white border-end-0">
          //   <FaSearch />
          // </span>
          // <input
          //   className="form-control form-control-lg border-start-0"
          //   type="text"
          //   id="wd-search-assignment"
          //   placeholder="Search..."
          // />
      //   </div>