import "./Table.css";

export default function Table() {
  return (
    <form>
      <table className="form-table">
        <tbody>
          <tr>
            <td>FIRST NAME</td>
            <td><input type="text" /> <span>(max 30 characters)</span></td>
          </tr>

          <tr>
            <td>LAST NAME</td>
            <td><input type="text" /> <span>(max 30 characters)</span></td>
          </tr>

          <tr>
            <td>DATE OF BIRTH</td>
            <td>
              <select><option>Day</option></select>
              <select><option>Month</option></select>
              <select><option>Year</option></select>
            </td>
          </tr>

          <tr>
            <td>EMAIL ID</td>
            <td><input type="email" /></td>
          </tr>

          <tr>
            <td>MOBILE NUMBER</td>
            <td><input type="text" /> <span>(10 digit)</span></td>
          </tr>

          <tr>
            <td>GENDER</td>
            <td>
              Male <input type="radio" name="gender" />
              Female <input type="radio" name="gender" />
            </td>
          </tr>

          <tr>
            <td>ADDRESS</td>
            <td><textarea rows="4"></textarea></td>
          </tr>

          <tr>
            <td>CITY</td>
            <td><input type="text" /></td>
          </tr>

          <tr>
            <td>PIN CODE</td>
            <td><input type="text" /></td>
          </tr>

          <tr>
            <td>STATE</td>
            <td><input type="text" /></td>
          </tr>

          <tr>
            <td>COUNTRY</td>
            <td><input type="text" /></td>
          </tr>

          <tr>
            <td>HOBBIES</td>
            <td>
              Drawing <input type="checkbox" />
              Singing <input type="checkbox" />
              Dancing <input type="checkbox" />
              Sketching <input type="checkbox" />
              <br />
              Others <input type="checkbox" /> <input type="text" />
            </td>
          </tr>

          {/* Qualification */}
          <tr>
            <td>QUALIFICATION</td>
            <td>
              <table className="inner-table">
                <thead>
                  <tr>
                    <th>Exam</th>
                    <th>Board</th>
                    <th>%</th>
                    <th>Year</th>
                  </tr>
                </thead>
                <tbody>
                  {["Class X", "Class XII", "Graduation", "Masters"].map((e, i) => (
                    <tr key={i}>
                      <td>{e}</td>
                      <td><input type="text" /></td>
                      <td><input type="text" /></td>
                      <td><input type="text" /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </td>
          </tr>

          <tr>
            <td>COURSES</td>
            <td>
              BCA <input type="radio" name="course" />
              B.Com <input type="radio" name="course" />
              B.Sc <input type="radio" name="course" />
              B.A <input type="radio" name="course" />
            </td>
          </tr>

          <tr>
            <td colSpan="2" align="center">
              <button type="submit">Submit</button>
              <button type="reset">Reset</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}