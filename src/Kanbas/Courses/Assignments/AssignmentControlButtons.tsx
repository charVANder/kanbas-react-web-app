import { BsThreeDotsVertical, BsPlus } from "react-icons/bs";

export default function AssignmentControlButtons() {
  return (
    <div className="float-end">
      <button className="bg-secondary rounded-pill me-2">40% of Total</button>
      <BsPlus className="fs-3" />
      <BsThreeDotsVertical className="fs-4" />
    </div>
  );
}
