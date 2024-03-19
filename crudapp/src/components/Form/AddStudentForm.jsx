import { useState } from "react";
import { useDispatch } from "react-redux";
import { studentListActions } from "../../store/studentListSlice";
import { Link } from "react-router-dom";

const AddStudentForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [contect, setContect] = useState();

  const addStudentHandler = (e) => {
    e.preventDefault();
    if (name.trim().length !== 0 && contect.match(/^\d{10}$/)) {
      dispatch(studentListActions.addStudent({ name, contect }));
      setName("")
      setContect("")
    } else {
      alert("Enter valid data...!");
    }
  };
  return (
    <div className=" w-screen h-screen flex justify-center items-center  p-20">
      <form
        className=" flex flex-col gap-4"
        onSubmit={addStudentHandler}
        action=""
      >
        <div className=" flex gap-4">
          <h3>Name:</h3>
          <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className=" flex gap-4">
          <h3>Contect:</h3>
          <input id="contect" type="number" value={contect} onChange={(e) => setContect(e.target.value)} />
        </div>
        <div className=" flex gap-4">
        <button className=" bg-green-500 px-6 py-2 rounded-xl text-xl font-bold ">
          Add
        </button>
        <Link to="/" className=" bg-blue-500 px-6 py-2 rounded-xl text-xl font-bold ">
          back
        </Link>
        </div>
        
      </form>
    </div>
  );
};

export default AddStudentForm;
