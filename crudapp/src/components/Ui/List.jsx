import { useEffect, useState } from "react";
import ListInfo from "./ListInfo";
import { Link } from "react-router-dom";

const List = () => {
  const [student, setStudent] = useState([]);
  // const j = d()
  useEffect(() => {
    const studentList = async () => {
      const response = await fetch(
        "https://react-http-49-default-rtdb.firebaseio.com/studentList.json"
      );
      const data = await response.json();
      const stuData = [];

      for (let i = 0; i < data.length; i++) {
        if (data[i] === null) {
          continue;
        }
        stuData.push({ i: i, ...data[i] });
      }
      if (student !== stuData) {
        setStudent(stuData);
      }
    };
    studentList();
  }, );
  return (
    <>
      <div className=" w-screen h-screen flex justify-center items-center  p-20">
        <div className=" w-[60%] p-10 flex flex-col gap-4">
          <h1 className=" text-2xl font-semibold flex justify-center">
            Student List
          </h1>
          <div className="flex justify-end">
            <Link
              to="/addstudent"
              className=" bg-green-500 px-6 py-2 rounded-xl text-xl font-bold "
            >
              ADD
            </Link>
          </div>
          {student.map((i) => (
            <ListInfo key={i.i} i={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default List;
