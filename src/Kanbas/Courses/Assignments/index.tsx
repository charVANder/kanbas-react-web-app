import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { BsGripVertical } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { GoTriangleDown } from "react-icons/go";
import AssignmentButtons from "./AssignmentButtons";
import { Link, useParams } from "react-router-dom";
import { deleteAssignment } from "./reducer";
import { useDispatch, useSelector } from "react-redux";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { FaTrash } from "react-icons/fa";

export default function Assignments() {
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const courseAssignments = assignments.filter(
    (assignment: any) => assignment.course === cid
  );
  const dispatch = useDispatch();
  const [selectedAssignment, setSelectedAssignment] = useState<any>(null);
  const handleDeleteButton = (assignment: any) => {
    setSelectedAssignment(assignment);
  };
  const handleConfirmDelete = () => {
    if (selectedAssignment) {
      dispatch(deleteAssignment(selectedAssignment._id));
      setSelectedAssignment(null);
    }
  };

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
        </button>
        <Link to={`/Kanbas/Courses/${cid}/Assignments/newAssignment`}>
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
        </Link>
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
        {courseAssignments.map((assignment: any) => (
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
                  <b>Not available until</b> {assignment.startdate} at 12:00am |{" "}
                  <br />
                  <b>Due</b> {assignment.enddate} at 11:59pm | 100pts
                </p>
              </div>
              <div className="ms-auto">
                <div className="wd-right-icons d-inline-flex align-items-center">
                  <FaTrash
                    className="text-danger me-2 fs-5"
                    data-bs-toggle="modal"
                    data-bs-target="#deleteModal"
                    onClick={() => handleDeleteButton(assignment)}
                  />
                  <GreenCheckmark />
                  <IoEllipsisVertical className="fs-4" />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Stuff for Deleting Assignments */}
      <div
        className="modal fade"
        id="deleteModal"
        tabIndex={-1}
        aria-labelledby="deleteModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="deleteModalLabel">
                Delete {selectedAssignment ? selectedAssignment.title : ""}?
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Are you sure you want to delete this assignment?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={handleConfirmDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
