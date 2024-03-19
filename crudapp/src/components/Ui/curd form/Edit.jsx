import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const Edit = () => {
  const [stuInfo, setStuInfo] = useState({});
  const [name, setName] = useState("");
  const [contect, setContect] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  const addStudentHandler = async (e) => {
    e.preventDefault();
    if (name.trim().length !== 0 && contect.match(/^\d{10}$/)) {
      const res = await fetch(
        `https://react-http-49-default-rtdb.firebaseio.com/studentList/${id}.json`,
        {
          method: "PATCH",
          body: JSON.stringify({
            name,
            contect,
          }),
        }
      );
      if (res.ok) {
        navigate("/");
      }
    } else {
      alert("Enter valid data...!");
    }
  };

  useEffect(() => {
    const studentList = async () => {
      const response = await fetch(
        "https://react-http-49-default-rtdb.firebaseio.com/studentList.json"
      );
      const data = await response.json();

      setStuInfo({
        name: data[id].name,
        contect: data[id].contect,
      });
    };
    studentList();
  }, [id]);

  return (
    <div className=" w-screen h-screen flex justify-center items-center  p-20">
      <form
        className=" flex flex-col gap-4"
        onSubmit={addStudentHandler}
        action=""
      >
        <div className=" flex gap-4">
          <h3>Name:</h3>
          <input
            type="text"
            defaultValue={stuInfo.name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className=" flex gap-4">
          <h3>Contect:</h3>
          <input
            type="number"
            defaultValue={stuInfo.contect}
            onChange={(e) => setContect(e.target.value)}
          />
        </div>
        <div className=" flex gap-4">
          <button className=" bg-green-500 px-6 py-2 rounded-xl text-xl font-bold ">
            Update
          </button>
          <Link
            to="/"
            className=" bg-blue-500 px-6 py-2 rounded-xl text-xl font-bold "
          >
            back
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Edit;
