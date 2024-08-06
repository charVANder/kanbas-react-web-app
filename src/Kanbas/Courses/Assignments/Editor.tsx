import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addAssignment,
  updateAssignment,
  setAssignments,
} from "../Assignments/reducer";
import * as client from "./client";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const courseAssignments = assignments.filter(
    (assignment: any) => assignment.course === cid
  );
  const courseAssignment = courseAssignments.find(
    (assignment: any) => assignment._id === aid
  );
  const [assignment, setAssignment] = useState({
    title: "New Assignment Title",
    course: cid,
    description: "New Assignment Description",
    points: "100",
    duedate: "",
    startdate: "",
    enddate: "",
    _id: "",
  });
  const fetchAssignment = async () => {
    const fetchedAssignments = await client.findAssignmentsForCourse(
      cid as string
    );
    dispatch(setAssignments(fetchedAssignments));
    const specificAssignment = fetchedAssignments.find(
      (assignment: any) => assignment._id === aid
    );
    if (specificAssignment) {
      setAssignment(specificAssignment);
    } else {
      setAssignment({
        title: "New Assignment Title",
        course: cid,
        description: "New Assignment Description",
        points: "100",
        duedate: "",
        startdate: "",
        enddate: "",
        _id: "",
      });
    }
  };
  useEffect(() => {
    fetchAssignment();
  }, [cid, aid, dispatch]);
  const createAssignment = async (assignment: any) => {
    const newAssignment = await client.createAssignment(
      cid as string,
      assignment
    );
    dispatch(addAssignment(newAssignment));
  };
  const saveAssignment = async (assignment: any) => {
    const status = await client.updateAssignment(assignment);
    dispatch(updateAssignment(assignment));
  };

  return (
    <div id="wd-assignments-editor" className="container">
      <form>
        <div id="wd-name" className="form-group">
          <label htmlFor="wd-name">Assignment Name</label>
          <input
            className="form-control"
            id="wd-name"
            value={assignment.title || ""}
            onChange={(e) =>
              setAssignment({ ...assignment, title: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="wd-description"></label>
          <textarea
            className="form-control mb-3"
            id="wd-assignment-description"
            rows={7}
            value={assignment.description || ""}
            onChange={(e) =>
              setAssignment({ ...assignment, description: e.target.value })
            }
          ></textarea>
        </div>
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
              value={assignment.points || ""}
              onChange={(e) =>
                setAssignment({ ...assignment, points: e.target.value })
              }
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
                value={assignment.duedate || ""}
                onChange={(e) =>
                  setAssignment({ ...assignment, duedate: e.target.value })
                }
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
                    value={assignment.startdate || ""}
                    onChange={(e) =>
                      setAssignment({
                        ...assignment,
                        startdate: e.target.value,
                      })
                    }
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
                    value={assignment.enddate || ""}
                    onChange={(e) =>
                      setAssignment({ ...assignment, enddate: e.target.value })
                    }
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
            <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
              <button className="btn btn-secondary me-2">Cancel</button>
            </Link>
            <button
              onClick={() => {
                if (courseAssignment) {
                  saveAssignment(assignment);
                } else {
                  createAssignment(assignment);
                }
                navigate(`/Kanbas/Courses/${cid}/Assignments`);
              }}
              className="btn btn-danger"
              id="wd-assignments-save"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
