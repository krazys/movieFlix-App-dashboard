// import { createContext, useContext, useMemo, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../config/firebase";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(false);

//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         const uid = user.uid;
//         // console.log("uid", uid);
//       }
//     //   else {
//     //     navigate("/login");

//     //     console.log("user is logged out");
//     //   }
//     });
// };
