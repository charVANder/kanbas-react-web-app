export default function Tables() {
    return (
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
    )
}