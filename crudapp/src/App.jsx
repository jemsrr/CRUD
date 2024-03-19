import { Route, Routes } from "react-router-dom";
import List from "./components/Ui/List";
import AddStudentForm from "./components/Form/AddStudentForm";
import Read from "./components/Ui/curd form/Read";
import Edit from "./components/Ui/curd form/Edit";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/addstudent" element={<AddStudentForm />} />
        <Route path="/read/:id" element={<Read />} />
        <Route path="/edit/:id" element={<Edit/>} />

      </Routes>
    </>
  );
}

export default App;
