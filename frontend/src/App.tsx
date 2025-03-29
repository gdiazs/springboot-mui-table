import "./App.css";
import UsersTable from "./components/users-table";

function App() {
  return (
    <div className="w-full lg:w-6xl sm-w-full m-auto">
      <div className="bg-slate-700 w-full mt-3 p-6 rounded-t-md text-slate-100">
        <div>guillermods.com</div>
      </div>
      <div className="bg-white p-3 shadow">
        <h2 className="font-bold">Spring Boot and React MUI - Table Example</h2>
      </div>
      <div className="w-full bg-slate-100 p-3">
        <UsersTable />
      </div>
    </div>
  );
}

export default App;
