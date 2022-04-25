import { Navigate,useLocation } from "react-router-dom";


const roles=[
    {
        name:"admin",
        allowedPages:["/add","/show"]
    },
    {
        name:"user",
        allowedPages:["/show"]
    }
]
function PrivateRoute({ children }) {
    const location = useLocation();
    console.log(location);



  //const auth = useAuth();
  const auth=localStorage.getItem("token");
  const role=localStorage.getItem("role");

  const routesAssigned=roles.find(ele=>ele.name==role);
const authorized=routesAssigned?.allowedPages.includes(location.pathname)




  return (auth && authorized)? children : <Navigate to="/login" />;
}

export default PrivateRoute;