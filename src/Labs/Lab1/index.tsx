export default function Lab1() {
    return (
      <div id="wd-lab1">
        <h2>Lab 1</h2>
        <h3>HTML Examples</h3>
        <div id="wd-h-tag">
          <h4>Heading Tags</h4>
          Text documents are often broken up into several sections and subsections. Each section is usually prefaced with a short title or heading that attempts to summarize the topic of the section it precedes. For instance this paragraph is preceded by the heading Heading Tags. The font of the section headings are usually larger and bolder than the plain text and their subsection headings. This document uses headings to introduce topics such as HTML Documents, HTML Tags, Heading Tags, etc. HTML heading tags can be used to format plain text so that it renders in a browser as large headings. There are 6 heading tags for different sizes: h1, h2, h3, h4, h5, and h6. Tag h1 is the largest heading and h6 is the smallest heading.
        </div>
        <div id="wd-p-tag">
          <h4>Paragraph Tag</h4>
          <p id="wd-p-1">
This is a paragraph. We often separate a long set of sentences with
vertical spaces to make the text easier to read. Browsers ignore vertical
white spaces and render all the text as one single set of sentences. To
force the browser to add vertical spacing, wrap the paragraphs you want to 
separate with the paragraph tag
          </p>
          <p id="wd-p-2">
This is the first paragraph. The paragraph tag is used to format
vertical gaps between long pieces of text like this one
          </p>
          <p id="wd-p-3">
This is the second paragraph. Even though there is a deliberate white
gap between the paragraph above and this paragraph, by default
browsers render them as one contiguous piece of text as shown here on
the right.
          </p>
          <p id="wd-p-4">
This is the third paragraph. Wrap each paragraph with the paragraph
tag to tell browsers to render the gaps.
          </p>
        </div>
        <div id="wd-lists">
          <h4>List Tags</h4>
          <h5>Ordered List Tag</h5>
          How to make pancakes:
          <ol id="wd-pancakes">
            <li>Mix dry ingredients.</li>
            <li>Add wet ingredients.</li>
            <li>Stir to combine.</li>
            <li>Heat a skillet or griddle.</li>
            <li>Pour batter onto the skillet.</li>
            <li>Cook until bubbly on top.</li>
            <li>Flip and cook the other side.</li>
            <li>Serve and enjoy!</li>
          </ol>
          My Favorite Recipe:
          <ol id="wd-your-favorite-recipe">
            <li>Grab a bowl of you favorite gelato or ice cream (I prefer vanilla).</li>
            <li>Make a double shot espresso with your favorite coffee beans.</li>
            <li>Pour the espresso over the bowl of gelato.</li>
            <li>You can choose how much to pour over depending on your preference</li>
            <li>Enjoy your Affogato with a spoon. Once it fully melts you can just drink the rest!</li>
          </ol>
          <h5>Unordered List Tag</h5>
          My favorite books (in no particular order)
          <ul id="wd-my-books">
            <li>Dune</li>
            <li>Lord of the Rings</li>
            <li>Ender's Game</li>
            <li>Red Mars</li>
            <li>The Forever War</li>
          </ul>
          Your favorite books (in no particular order)
          <ul id="wd-your-books">
            <li>Ender's Game</li>
            <li>The Giver</li>
            <li>Lord of the Rings</li>
            <li>The Secret Garden</li>
            <li>Kira Kira</li>
          </ul>
        </div>
        <div id="wd-tables">
          <h4>Table Tag</h4>
          <table border={1} width="100%"> {/* declares the table, sets border and width */}
            <thead> {/* declares the table heading section */}
              <tr> {/* declares the headings row */}
                <th>Quiz</th> {/* declares heading for first column */}
                <th>Topic</th> {/* declares heading for second column */}
                <th>Date</th> {/* declares heading for third column */}
                <th>Grade</th> {/* declares heading for fourth column */}
              </tr>
            </thead>
            <tbody> {/* declares the table's main content */}
              <tr> {/* declares the first row */}
                <td>Q1</td> {/* declares data for first row, first column */}
                <td>HTML</td> {/* declares data for first row, second column */}
                <td>2/3/21</td> {/* declares data for first row, third column */}
                <td>85</td> {/* declares data for first row, fourth column */}
              </tr>
              <tr> {/* declares the second row */}
                <td>Q2</td>
                <td>CSS</td>
                <td>2/10/21</td>
                <td>90</td>
              </tr>
              <tr> {/* declares the third row */}
                <td>Q3</td>
                <td>JavaScript</td>
                <td>2/17/21</td>
                <td>95</td>
              </tr>
              <tr> {/* declares the fourth row */}
                <td>Q4</td>
                <td>How to Survive a Zombie Apocalypse</td>
                <td>2/24/21</td>
                <td>94</td>
              </tr>
              <tr> {/* declares the fifth row */}
                <td>Q5</td>
                <td>What is the Meaning of Life</td>
                <td>3/3/21</td>
                <td>95</td>
              </tr>
              <tr> {/* declares the sixth row */}
                <td>Q6</td>
                <td>How to Pronounce Worcestershire</td>
                <td>3/10/21</td>
                <td>96</td>
              </tr>
              <tr> {/* declares the seventh row */}
                <td>Q7</td>
                <td>How to Center a Div</td>
                <td>3/17/21</td>
                <td>97</td>
              </tr>
              <tr> {/* declares the eighth row */}
                <td>Q8</td>
                <td>How to Start a Vegetable Garden at Home</td>
                <td>3/24/21</td>
                <td>98</td>
              </tr>
              <tr> {/* declares the ninth row */}
                <td>Q9</td>
                <td>All About Hedgehogs</td>
                <td>3/31/21</td>
                <td>99</td>
              </tr>
              <tr> {/* declares the tenth row */}
                <td>Q10</td>
                <td>Why Pokemon is Better than Digimon</td>
                <td>4/7/21</td>
                <td>100</td>
              </tr>
            </tbody>
            <tfoot> {/* declares the table footer section */}
              <tr> {/* declares the footer row */}
                <td colSpan={3}>Average</td> {/* declares that the data spans 3 columns */}
                <td>94.9</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div id="wd-images">
        <h4>Image tag</h4>
        Loading an image from the internet:
        <br />
        <img id="wd-starship" width="400px" src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"/>
        <br />
        Loading a local image:
        <br />
        <img id="wd-teslabot" src="images/teslabot.jpg" height="200px" />
        </div>
        <div id="wd-forms">
          <h4>Form Elements</h4>
          <form id="wd-text-fields">
            <h5>Text Fields</h5>
            <label htmlFor="wd-text-fields-username">Username:</label>
            <input id="wd-text-fields-username" placeholder="jdoe" /> <br />
            <label htmlFor="wd-text-fields-password">Password:</label>
            <input type="password" id="wd-text-fields-password" value="123@#$asd" />
            <br />
            <label htmlFor="wd-text-fields-first-name">First name:</label>
            <input type="text" id="wd-text-fields-first-name" title="John" /> <br />
            <label htmlFor="wd-text-fields-last-name">Last name:</label>
            <input type="text" id="wd-text-fields-last-name" placeholder="Doe" value="Wonderland" title="The last name" />
            
            <h5>Text boxes</h5>
            <label>Biography:</label><br/>
            <textarea id="wd-textarea" cols={30} rows={10}>Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.</textarea>

            <h5 id="wd-buttons">Buttons</h5>
            <button id="wd-all-good" onClick={() => alert("Life is Good!")} type="button">
              Hello World!
            </button>

            <h5>File upload</h5>
            <input id="wd-upload" type="file"/>

            <h5 id="wd-radio-buttons">Radio buttons</h5>
            <label>Favorite movie genre:</label><br />
            <input type="radio" name="radio-genre" id="wd-radio-comedy"/>
            <label htmlFor="wd-radio-comedy">Comedy</label><br />
            <input type="radio" name="radio-genre" id="wd-radio-drama"/>
            <label htmlFor="wd-radio-drama">Drama</label><br />
            <input type="radio" name="radio-genre" id="wd-radio-scifi"/>
            <label htmlFor="wd-radio-scifi">Science Fiction</label><br />
            <input type="radio" name="radio-genre" id="wd-radio-fantasy"/>
            <label htmlFor="wd-radio-fantasy">Fantasy</label>

            <h5 id="wd-checkboxes">Checkboxes</h5>
            <label>Favorite movie genre:</label><br/>
            <input type="checkbox" name="check-genre" id="wd-chkbox-comedy"/>
            <label htmlFor="wd-chkbox-comedy">Comedy</label><br/>
            <input type="checkbox" name="check-genre" id="wd-chkbox-drama"/>
            <label htmlFor="wd-chkbox-drama">Drama</label><br/>
            <input type="checkbox" name="check-genre" id="wd-chkbox-scifi"/>
            <label htmlFor="wd-chkbox-scifi">Science Fiction</label><br/>
            <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy"/>
            <label htmlFor="wd-chkbox-fantasy">Fantasy</label>

            <h4 id="wd-dropdowns">Dropdowns</h4>
            <h5>Select one</h5>
            <label htmlFor="wd-select-one-genre"> Favorite movie genre: </label><br/>
            <select id="wd-select-one-genre">
              <option value="COMEDY">Comedy</option>
              <option value="DRAMA">Drama</option>
              <option selected value="SCIFI">
                  Science Fiction</option>
              <option value="FANTASY">Fantasy</option>
            </select>
            <h5>Select many</h5>
            <label htmlFor="wd-select-many-genre"> Favorite movie genres: </label><br/>
            <select id="wd-select-many-genre" multiple>
              <option selected value="COMEDY">Comedy</option>
              <option value="DRAMA">Drama</option>
              <option selected value="SCIFI">
                  Science Fiction</option>
              <option value="FANTASY">Fantasy</option>
            </select>

            <h4>Other HTML field types</h4>
            <label htmlFor="wd-text-fields-email"> Email: </label>
            <input type="email"
                  placeholder="jdoe@somewhere.com"
                  id="wd-text-fields-email"/><br/>
            <label htmlFor="wd-text-fields-salary-start"> Starting salary:
            </label>
            <input type="number"
                  id="wd-text-fields-salary-start"
                  placeholder="1000"
                  value="100000"/><br/>
            <label htmlFor="wd-text-fields-rating"> Rating: </label>
            <input type="range" id="wd-text-fields-rating"
                  placeholder="Doe"
                  max="5"
                  value="4"/><br/>
            <label htmlFor="wd-text-fields-dob"> Date of birth: </label>
            <input type="date"
                  id="wd-text-fields-dob"
                  value="2000-01-21"/><br/>
          </form>
        </div>
        <h4>Anchor tags</h4>
        Please <a id="wd-lipsum" href="https://www.lipsum.com" target="blank">click here</a>
        to get dummy text<br/>
        Please <a id="wd-github" href="https://github.com/charVANder/kanbas-react-web-app" target="blank">click here</a>
        to jump to Van's GitHub repository<br/>

      </div>
    );
  }
