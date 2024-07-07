export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name"><h3>Assignment Name</h3></label>
      <input id="wd-name" value="A1 - ENV + HTML" /><br/><br />
      <textarea id="wd-description" cols={45} rows={10}>
        The assignment is available online Submit a link to the landing page of your Web 
        application running on Netlify. The landing page should include the following: 
        Your full name and section Links to each of the lab assignments Link to the 
        Kanbas application Links to all relevant source code repositories The Kanbas 
        application should include a link to navigate back to the landing page.
      </textarea>
      <br /><br />
      <table>
        <tr>
          <td align="right" valign="top"><label htmlFor="wd-points">Points</label></td>
          <td><input id="wd-points" value={100} /></td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top"><label htmlFor="wd-group">Assignment Group</label></td>
          <td>
            <select id="wd-group">
              <option selected >ASSIGNMENTS</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top"><label htmlFor="wd-display-grade-as">Display grade as </label></td>
          <td>
            <select id="wd-display-grade-as">
              <option selected >Percentage</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
        <td align="right" valign="top"><label htmlFor="wd-submission-type">Submission Type </label></td>
          <td>
            <select id="wd-submission-type">
              <option selected >Online</option>
            </select>
            <br /><br />
            Online Entry Options<br />
            <input type="checkbox" id="wd-text-entry"/>
            <label htmlFor="wd-text-entry">Text Entry</label>
            <br />
            <input type="checkbox" id="wd-website-url"/>
            <label htmlFor="wd-website-url">Website URL</label>
            <br />
            <input type="checkbox" id="wd-media-recordings"/>
            <label htmlFor="wd-media-recordings">Media Recordings</label>
            <br />
            <input type="checkbox" id="wd-student-annotation"/>
            <label htmlFor="wd-student-annotation">Student Annotation</label>
            <br />
            <input type="checkbox" id="wd-file-upload"/>
            <label htmlFor="wd-file-upload">File Uploads</label>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top"><label htmlFor="wd-assign-to">Assign</label></td>
          <td>
            <label htmlFor="wd-assign-to">Assign to </label><br />
            <input id="wd-assign-to" value="Everyone" />
            <br /><br />
            <label htmlFor="wd-due-date">Due </label><br />
            <input type="date" id="wd-due-date" value="2024-05-13"/>
            <br /><br />
            <label htmlFor="wd-available-from">Available From </label>
            <input type="date" id="wd-available-from" value="2024-05-06"/><br />
            <label htmlFor="wd-available-until">Until </label>
            <input type="date" id="wd-available-until" value="2024-05-20"/>
          </td>
        </tr>
      </table>
    </div>
  );
}