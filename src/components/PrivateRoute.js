import { Navigate,useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const roles=[
    {
        name:"admin",
        allowedPages:["/add","/show","/add/1"]
    },
    {
        name:"user",
        allowedPages:["/show"]
    }
]
function PrivateRoute({ children }) {
    const location = useLocation();
    console.log(location);



  const auth = useAuth();

  //debugger;


  const role=localStorage.getItem("role");

  const routesAssigned=roles.find(ele=>ele.name==role);
const authorized=routesAssigned?.allowedPages.includes(location.pathname)




  return (auth())? children : <Navigate to="/login" />;
}

export default PrivateRoute;