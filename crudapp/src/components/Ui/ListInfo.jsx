import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { studentListActions } from "../../store/studentListSlice";

const ListInfo = (props) => {
  const dispatch = useDispatch()
  return (
    <>
      <div className=" flex justify-between items-center">
        <div className=" flex">
          <h3>Name:</h3>
          <input id="name" type="text" value={props.i.name} readOnly />
        </div>
        <div className=" flex">
          <h3>Contect:</h3>
          <input id="contect" type="number" value={props.i.contect} readOnly />
        </div>
        <div className=" flex gap-4">
          <Link to={`/read/${props.i.i}`}
            className=" px-4 py-2 text-xs font-medium bg-green-500"
          >
            Read
          </Link>
          <Link to={`/edit/${props.i.i}`} className=" px-4 py-2 text-xs font-medium bg-blue-500">
            Edit
          </Link>
          <Link to="/" className=" px-4 py-2 text-xs font-medium bg-red-500" onClick={()=>{
            dispatch(studentListActions.deleteData(props.i.i))
          }}>
            Delete
          </Link>
        </div>
      </div>
    </>
  );
};

export default ListInfo;
