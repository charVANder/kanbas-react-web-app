import { assignments } from "../../Database";
import { Link, useParams } from "react-router-dom";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignment = assignments.find(
    (assignment) => assignment._id === aid
  );

  return (
    <div id="wd-assignments-editor" className="container">
      <form>
        <div id="wd-name" className="form-group">
          <label htmlFor="wd-name">Assignment Name</label>
          <input
            type="text"
            className="form-control"
            id="wd-name"
            value={assignment?.title} //WHY CANT I GET THIS TO WORK T__T
          />
        </div>
        <div className="form-group">
          <label htmlFor="wd-description"></label>
          <p className="form-control" id="wd-description">
            The assignment is{" "}
            <span className="text-danger">available online</span>
            <br />
            <br />
            Submit a link to the landing page of your Web application running on
            Netlify.
            <br />
            <br />
            The landing page should include the following:
            <ul className="p-3">
              <li>Your full name and section</li>
              <li>Links to each of the lab assignments</li>
              <li>Link to the Kanbas application</li>
              <li>Links to all relevant source code repositories</li>
            </ul>
            The Kanbas application should include a link to navigate back to the
            landing page.
          </p>
        </div>
      </form>
      <form>
        <div className="form-group row mb-3">
          <label
            htmlFor="wd-points"
            className="col-sm-3 col-form-label text-end"
          >
            Points
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="wd-points"
              value={100}
            />
          </div>
        </div>

        <div className="form-group row mb-3">
          <label
            htmlFor="wd-group"
            className="col-sm-3 col-form-label text-end"
          >
            Assignment Group
          </label>
          <div className="col-sm-9">
            <select className="form-select" id="wd-group">
              <option selected>ASSIGNMENTS</option>
            </select>
          </div>
        </div>

        <div className="form-group row mb-3">
          <label
            htmlFor="wd-display-grade-as"
            className="col-sm-3 col-form-label text-end"
          >
            Display grade as
          </label>
          <div className="col-sm-9">
            <select className="form-select" id="wd-display-grade-as">
              <option selected>Percentage</option>
            </select>
          </div>
        </div>

        <div className="form-group row mb-3">
          <label
            htmlFor="wd-submission-type"
            className="col-sm-3 col-form-label text-end"
          >
            Submission Type
          </label>
          <div className="col-sm-9">
            <div className="border p-3">
              <select className="form-select mb-3" id="wd-submission-type">
                <option selected>Online</option>
              </select>
              <div>
                <label
                  htmlFor="wd-submission-type"
                  className="form-label fw-bold"
                >
                  Online Entry Options
                </label>
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="wd-text-entry"
                  />
                  <label className="form-check-label" htmlFor="wd-text-entry">
                    Text Entry
                  </label>
                </div>
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="wd-website-url"
                  />
                  <label className="form-check-label" htmlFor="wd-website-url">
                    Website URL
                  </label>
                </div>
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="wd-media-recordings"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="wd-media-recordings"
                  >
                    Media Recordings
                  </label>
                </div>
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="wd-student-annotation"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="wd-student-annotation"
                  >
                    Student Annotation
                  </label>
                </div>
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="wd-file-upload"
                  />
                  <label className="form-check-label" htmlFor="wd-file-upload">
                    File Uploads
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="form-group row mb-3">
          <label
            htmlFor="wd-assign-to"
            className="col-sm-3 col-form-label text-end"
          >
            Assign
          </label>
          <div className="col-sm-9">
            <div className="border p-3">
              <label htmlFor="wd-assign-to" className="form-label fw-bold">
                Assign to
              </label>
              <input
                type="text"
                className="form-control mb-3"
                id="wd-assign-to"
                value="Everyone"
              />
              <label htmlFor="wd-due-date" className="form-label fw-bold">
                Due
              </label>
              <input
                type="date"
                className="form-control mb-3"
                id="wd-due-date"
                value="2024-05-13"
              />
              <div className="row">
                <div className="col">
                  <label
                    htmlFor="wd-available-from"
                    className="form-label fw-bold"
                  >
                    Available From
                  </label>
                  <input
                    type="date"
                    className="form-control mb-3"
                    id="wd-available-from"
                    value="2024-05-06"
                  />
                </div>
                <div className="col">
                  <label
                    htmlFor="wd-available-until"
                    className="form-label fw-bold"
                  >
                    Until
                  </label>
                  <input
                    type="date"
                    className="form-control mb-3"
                    id="wd-available-until"
                    value="2024-05-20"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="form-group row mb-3">
          <div className="col-sm-3"></div>
          <div className="col-sm-9 text-end">
            <hr />
            <Link
              to={`/Kanbas/Courses/${cid}/Assignments`}
              className="btn btn-secondary me-2"
            >
              Cancel
            </Link>
            <Link
              to={`/Kanbas/Courses/${cid}/Assignments`}
              className="btn btn-danger"
            >
              Save
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
