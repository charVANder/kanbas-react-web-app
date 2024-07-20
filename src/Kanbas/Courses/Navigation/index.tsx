import "./index.css";
import { useParams, useLocation, Link } from "react-router-dom";
import db from "../../Database"

const links = [
  "Home",
  "Modules",
  "Piazza",
  "Zoom",
  "Assignments",
  "Quizzes",
  "Grades",
];

export default function CoursesNavigation() {
  const { cid } = useParams();
  const location = useLocation();

  return (
    <div
      id="wd-courses-navigation"
      className="list-group fs-5 rounded-0 position-fixed d-flex d-none d-md-block z-2"
    >
      {links.map((link) => (
        <Link
          key={link}
          to={`/Kanbas/Courses/${cid}/${link}`}
          className={`list-group-item text-danger border border-0 ${
            location.pathname.includes(link) ? "active" : ""
          }`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}

//         <a
//           href={`#/Kanbas/Courses/${cid}/${link}`}
//           className={`list-group-item text-danger border border-0 ${
//             location.pathname.includes(link) ? "active" : ""
//           }`}
//         >
//           {link}
//         </a>