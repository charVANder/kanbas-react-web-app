import { LiaFileImportSolid, LiaFileExportSolid } from "react-icons/lia";
import { IoMdSettings } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";

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
        id="wd-grades-table"
        className="table-responsive mt-3"
      >
        <table
          id="wd-grades-table"
          className="table table-striped table-bordered"
        >
          <thead>
            <tr>
              <th scope="col">Student Name</th>
              <th scope="col" className="fw-normal text-center">
                A1 SETUP
                <br />
                Out of 100%
              </th>
              <th scope="col" className="fw-normal text-center">
                A2 HTML
                <br />
                Out of 100%
              </th>
              <th scope="col" className="fw-normal text-center">
                A3 CSS
                <br />
                Out of 100%
              </th>
              <th scope="col" className="fw-normal text-center">
                A4 BOOTSTRAP
                <br />
                Out of 100%
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="text-danger fw-normal">Ash Ketchum</th>
              <td>
                <input type="text" className="form-control" value="99.6%" />
              </td>
              <td>
                <input type="text" className="form-control" value="92.7%" />
              </td>
              <td>
                <input type="text" className="form-control" value="86.9%" />
              </td>
              <td>
                <input type="text" className="form-control" value="94.3%" />
              </td>
            </tr>
            <tr>
              <th className="text-danger fw-normal">Brock Harrison</th>
              <td>
                <input type="text" className="form-control" value="98.8%" />
              </td>
              <td>
                <input type="text" className="form-control" value="100%" />
              </td>
              <td>
                <input type="text" className="form-control" value="100%" />
              </td>
              <td>
                <input type="text" className="form-control" value="100%" />
              </td>
            </tr>
            <tr>
              <th className="text-danger fw-normal">Misty Waterflower</th>
              <td>
                <input type="text" className="form-control" value="100%" />
              </td>
              <td>
                <input type="text" className="form-control" value="97.7%" />
              </td>
              <td>
                <input type="text" className="form-control" value="98.9%" />
              </td>
              <td>
                <input type="text" className="form-control" value="99.2%" />
              </td>
            </tr>
            <tr>
              <th className="text-danger fw-normal">Samuel Oak</th>
              <td>
                <input type="text" className="form-control" value="100%" />
              </td>
              <td>
                <input type="text" className="form-control" value="100%" />
              </td>
              <td>
                <input type="text" className="form-control" value="100%" />
              </td>
              <td>
                <input type="text" className="form-control" value="100%" />
              </td>
            </tr>
            <tr>
              <th className="text-danger fw-normal">Gary Oak</th>
              <td>
                <input type="text" className="form-control" value="100%" />
              </td>
              <td>
                <input type="text" className="form-control" value="100%" />
              </td>
              <td>
                <input type="text" className="form-control" value="100%" />
              </td>
              <td>
                <input type="text" className="form-control" value="100%" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
