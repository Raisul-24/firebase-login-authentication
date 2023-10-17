
// import { useContext } from "react";
// import { AuthContext } from "../Provider/AuthProvider";

const Home = () => {
   // const authInfo = useContext(AuthContext);
   // console.log(authInfo);
   return (
      <div>
         <h2 className="text-2xl py-6 text-center">This is Home for : {authInfo.name}</h2>
         
      </div>
   );
};

export default Home;