import { BsGripVertical } from "react-icons/bs";
import { PiNotePencil } from "react-icons/pi";

export default function AssignmentButtons() {
  return (
    <div className="float-end">
      <BsGripVertical className="fs-4 me-3" />
      <PiNotePencil className="fs-3 me-4 text-success" />
    </div>
  );
}
