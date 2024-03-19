import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const Read = () => {
  const [stuInfo, setStuInfo] = useState({});
  const {id} = useParams();
  const studentList = async () => {
    const response = await fetch(
      "https://react-http-49-default-rtdb.firebaseio.com/studentList.json"
    );
    const data = await response.json();
    
    setStuInfo({
        name:data[id].name,
        contect:data[id].contect,
    });
  };
  studentList();
  return (
    <>
      <div>
        <h1>Name : {stuInfo.name}</h1>
        <h1>Contect : {stuInfo.contect}</h1>
        <Link to="/" className=" bg-blue-500 px-6 py-2 rounded-xl text-xl font-bold ">back</Link>
      </div>
    </>
  );
};

export default Read;
