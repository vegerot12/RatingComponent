import React, { useState, useEffect } from "react";
const URL = "https://reqres.in/api/users";
const Table = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        const sortedData = data.data.sort((a, b) =>
          a.first_name.localeCompare(b.first_name)
        );
        setTableData(sortedData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((item) => (
          <tr>
            <td>{`${item.first_name} ${item.last_name}`} </td>
            <td>{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
