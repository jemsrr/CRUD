import { createSlice } from "@reduxjs/toolkit";
const studentListSlice = createSlice({
  name: "student list",
  initialState: {
    id: "",
    name: "",
    contect: 0,
  },
  reducers: {
    addStudent(state, action) {
      const sendRequest = async () => {
        const data = await (
          await fetch(
            "https://react-http-49-default-rtdb.firebaseio.com/studentList.json"
          )
        ).json();
        const response = await fetch(
          "https://react-http-49-default-rtdb.firebaseio.com/studentList.json",
          {
            method: "PUT",
            body: JSON.stringify([
              ...data,
              {
                id: new Date().getTime(),
                name: action.payload.name,
                contect: action.payload.contect,
              },
            ]),
          }
        );
        if (!response.ok) {
          throw new Error("Sending cart data failed.");
        }
      };
      sendRequest(action);
    },
    deleteData(state, action) {
      const deleteRequest = async () => {
        await fetch(
          `https://react-http-49-default-rtdb.firebaseio.com/studentList/${action.payload}.json`,
          {
            method: "DELETE",
          }
        );
      };
      deleteRequest(action);
    },
  },
});

export const d = () => {
  let d =[]
  const sendRequest = async () => {
    const response = await fetch(
      "https://react-http-49-default-rtdb.firebaseio.com/studentList.json"
    );
    const data = await response.json()
    d.push(...data)
    // return [...data]
  };
  sendRequest()
  return  d
};

export const studentListActions = studentListSlice.actions;
export default studentListSlice;
