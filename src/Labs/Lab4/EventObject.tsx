import React, { useState } from "react";

export default function EventObject() {
  const [event, setEvent] = useState(null);
  const handleClick = (e: any) => { // on click receive event
    e.target = e.target.outerHTML; // replace target with HTML to avoid circular reference
    delete e.view;
    setEvent(e); // set event object so it can be displayed
  };
  return (
    <div>
      <h2>Event Object</h2>
      <button
        onClick={(e) => handleClick(e)}
        className="btn btn-primary"
        id="wd-display-event-obj-click"
      >
        Display Event Object
      </button>
      <pre>{JSON.stringify(event, null, 2)}</pre>
      <hr />
    </div>
  );
}
