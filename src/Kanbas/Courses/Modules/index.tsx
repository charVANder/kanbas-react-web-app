import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { useParams } from "react-router";
import * as client from "./client";
import React, { useState, useEffect } from "react";
import {
  setModules,
  addModule,
  editModule,
  updateModule,
  deleteModule,
} from "./reducer";
import { useSelector, useDispatch } from "react-redux";

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();
  const saveModule = async (module: any) => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };
  const removeModule = async (moduleId: string) => {
    await client.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };
  const createModule = async (module: any) => {
    const newModule = await client.createModule(cid as string, module);
    dispatch(addModule(newModule));
  };
  const fetchModules = async () => {
    const modules = await client.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };
  useEffect(() => {
    fetchModules();
  }, []);

  return (
    <div>
      <div id="wd-modules">
        <ModulesControls
          moduleName={moduleName}
          setModuleName={setModuleName}
          addModule={() => {
            createModule({ name: moduleName, course: cid });
            setModuleName("");
          }}
        />
        <br />
        <br />
        <br />
        <br />
        <ul className="list-group rounded-0">
          {modules
            .filter((module: any) => module.course === cid)
            .map((module: any) => (
              <li
                key={module._id}
                className="wd-module list-group-item p-0 mb-5 fs-5 border-gray"
              >
                <div className="wd-title p-3 ps-2 bg-secondary">
                  <BsGripVertical className="me-2 fs-3" />
                  {!module.editing && module.name}
                  {module.editing && (
                    <input
                      className="form-control w-50 d-inline-block"
                      onChange={(e) =>
                        saveModule({ ...module, name: e.target.value })
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          saveModule({ ...module, editing: false });
                        }
                      }}
                      value={module.name}
                    />
                  )}
                  <ModuleControlButtons
                    moduleId={module._id}
                    deleteModule={(moduleId) => {
                      removeModule(moduleId);
                    }}
                    editModule={(moduleId) => dispatch(editModule(moduleId))}
                  />
                </div>
                {module.lessons && (
                  <ul className="wd-lessons list-group rounded-0">
                    {module.lessons.map((lesson: any) => (
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

// import ModulesControls from "./ModulesControls";
// import ModuleControlButtons from "./ModuleControlButtons";
// import LessonControlButtons from "./LessonControlButtons";
// import { BsGripVertical } from "react-icons/bs";
// import { useParams } from "react-router";
// import * as client from "./client";
// import React, { useState, useEffect } from "react";
// import {
//   setModules,
//   addModule,
//   editModule,
//   updateModule,
//   deleteModule,
// } from "./reducer";
// import { useSelector, useDispatch } from "react-redux";

// export default function Modules() {
//   const { cid } = useParams();
//   const [moduleName, setModuleName] = useState("");
//   const { modules } = useSelector((state: any) => state.modulesReducer);
//   const dispatch = useDispatch();

//   const saveModule = async (module: any) => {
//     try {
//       const updatedModule = await client.updateModule(module);
//       dispatch(updateModule(updatedModule));
//     } catch (error) {
//       console.error("Error saving module:", error);
//     }
//   };

//   const removeModule = async (moduleId: string) => {
//     try {
//       await client.deleteModule(moduleId);
//       dispatch(deleteModule(moduleId));
//     } catch (error) {
//       console.error("Error removing module:", error);
//     }
//   };

//   const createModule = async (module: any) => {
//     try {
//       const newModule = await client.createModule(cid as string, module);
//       dispatch(addModule(newModule));
//     } catch (error) {
//       console.error("Error creating module:", error);
//     }
//   };

//   const fetchModules = async () => {
//     try {
//       const fetchedModules = await client.findModulesForCourse(cid as string);
//       dispatch(setModules(fetchedModules));
//     } catch (error) {
//       console.error("Error fetching modules:", error);
//     }
//   };

//   useEffect(() => {
//     if (cid) {
//       fetchModules();
//     }
//   }, [cid]);

//   return (
//     <div>
//       <div id="wd-modules">
//         <ModulesControls
//           moduleName={moduleName}
//           setModuleName={setModuleName}
//           addModule={() => {
//             if (moduleName.trim()) {
//               createModule({ name: moduleName, course: cid });
//               setModuleName("");
//             }
//           }}
//         />
//         <br />
//         <br />
//         <br />
//         <br />
//         <ul className="list-group rounded-0">
//           {modules
//             .filter((module: any) => module.course === cid)
//             .map((module: any) => (
//               <li
//                 key={module._id}
//                 className="wd-module list-group-item p-0 mb-5 fs-5 border-gray"
//               >
//                 <div className="wd-title p-3 ps-2 bg-secondary">
//                   <BsGripVertical className="me-2 fs-3" />
//                   {!module.editing && module.name}
//                   {module.editing && (
//                     <input
//                       className="form-control w-50 d-inline-block"
//                       onChange={(e) =>
//                         saveModule({ ...module, name: e.target.value })
//                       }
//                       onKeyDown={(e) => {
//                         if (e.key === "Enter") {
//                           saveModule({ ...module, editing: false });
//                         }
//                       }}
//                       value={module.name}
//                     />
//                   )}
//                   <ModuleControlButtons
//                     moduleId={module._id}
//                     deleteModule={() => removeModule(module._id)}
//                     editModule={() => dispatch(editModule(module._id))}
//                   />
//                 </div>
//                 {module.lessons && (
//                   <ul className="wd-lessons list-group rounded-0">
//                     {module.lessons.map((lesson: any) => (
//                       <li
//                         key={lesson._id}
//                         className="wd-lesson list-group-item p-3 ps-1"
//                         style={{ borderLeft: "5px solid #198754" }}
//                       >
//                         <BsGripVertical className="me-2 fs-3" />
//                         {lesson.name}
//                         <LessonControlButtons />
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </li>
//             ))}
//         </ul>
//       </div>
//     </div>
//   );
// }
