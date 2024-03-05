import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import axios from "axios";
import Forms from "./Form";
// import { useRef } from "react";

function DarkExample() {
  const [data, setData] = useState([]);
  const [singleUser, setSingleUser] = useState([]);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:9000/user/")
      .then((res) => {
        setData([...res.data.data]);
      })
      .catch((err) => console.log(err));
  };

  const deleteIt = (id) => {
    if (window.confirm("Are you sure?")) {
      axios
        .delete(`http://localhost:9000/user/${id}`)
        .then((response) => {
          console.log("Resource deleted:", response.data);
          fetchData();
        })
        .catch((error) => {
          console.error("Error deleting resource:", error);
        });
    }
  };

  return (
    <>
      <Forms fetchData={fetchData} />
      <div className="table-responsive">
        <Table
          striped
          bordered
          hover
          variant="dark"
          className="mt-2 text-center"
        >
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item, ind) => (
                <tr key={ind}>
                  <td>{ind + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.age}</td>
                  <td>
                    <Button
                      onClick={() => deleteIt(item._id)}
                      variant="danger"
                      type="button"
                      className="btn-sm m-2"
                    >
                      Delete
                    </Button>
                    <Button
                      onClick={() => getSpecificUseData(item._id)}
                      variant="warning"
                      type="button"
                      className="btn-sm  mx-2"
                    >
                      Edit
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5}>
                  <h2 className="bg-light text-dark text-center my-2">
                    No Data Found
                  </h2>
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </>
  );
}



export default DarkExample;
