import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { useParams } from "react-router";
import db from "../../Database"

export default function Modules() {
  const { cid } = useParams();
  const courseModules = db.modules.filter((module) => module.course === cid);

  return (
    <div>
      <div id="wd-modules">
        <ModulesControls />
        <br />
        <br />
        <br />
        <br />
        <ul className="list-group rounded-0">
          {courseModules.map((module) => (
            <li
              key={module._id}
              className="wd-module list-group-item p-0 mb-5 fs-5 border-gray"
            >
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                {module.name}
                <ModuleControlButtons />
              </div>
              {module.lessons && (
                <ul className="wd-lessons list-group rounded-0">
                  {module.lessons.map((lesson) => (
                    <li
                      key={lesson._id}
                      className="wd-lesson list-group-item p-3 ps-1"
                      style={{
                        borderLeft: "5px solid #198754",
                      }}
                    >
                      <BsGripVertical className="me-2 fs-3" />
                      {lesson.name}
                      <LessonControlButtons />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// OLD VERSION
// export default function Modules() {
//   return (
//     <div>
//       <div id="wd-modules">
//         <ModulesControls />
//         <br />
//         <br />
//         <br />
//         <br />
//         <ul id="wd-modules" className="list-group rounded-0">
//           <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
//             <div className="wd-title p-3 ps-2 bg-secondary">
//               <BsGripVertical className="me-2 fs-3" />
//               Week 1
//               <ModuleControlButtons />
//             </div>
//             <ul className="wd-lessons list-group rounded-0">
//               <li className="wd-lesson list-group-item p-3 ps-1">
//                 <BsGripVertical className="me-2 fs-3" />
//                 LEARNING OBJECTIVES
//                 <LessonControlButtons />
//               </li>
//               <li className="wd-lesson list-group-item p-3 ps-1">
//                 <BsGripVertical className="me-2 fs-3" />
//                 Learn what is Web Development
//                 <LessonControlButtons />
//               </li>
//               <li className="wd-lesson list-group-item p-3 ps-1">
//                 <BsGripVertical className="me-2 fs-3" />
//                 LESSON 1
//                 <LessonControlButtons />
//               </li>
//               <li className="wd-lesson list-group-item p-3 ps-1">
//                 <BsGripVertical className="me-2 fs-3" />
//                 LESSON 2
//                 <LessonControlButtons />
//               </li>
//             </ul>
//           </li>

//           <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
//             <div className="wd-title p-3 ps-2 bg-secondary">
//               <BsGripVertical className="me-2 fs-3" />
//               Week 2
//               <ModuleControlButtons />
//             </div>
//             <ul className="wd-lessons list-group rounded-0">
//               <li className="wd-lesson list-group-item p-3 ps-1">
//                 <BsGripVertical className="me-2 fs-3" />
//                 LEARNING OBJECTIVES
//                 <LessonControlButtons />
//               </li>
//               <li className="wd-lesson list-group-item p-3 ps-1">
//                 <BsGripVertical className="me-2 fs-3" />
//                 LESSON 1
//                 <LessonControlButtons />
//               </li>
//               <li className="wd-lesson list-group-item p-3 ps-1">
//                 <BsGripVertical className="me-2 fs-3" />
//                 LESSON 2
//                 <LessonControlButtons />
//               </li>
//             </ul>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }
