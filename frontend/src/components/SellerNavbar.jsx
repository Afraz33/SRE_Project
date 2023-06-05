import React from "react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCurrentState } from "../reduxStores/actions/Login";

function SellerNavbar({ isLogin, getCurrentState }) {
  const [seller, setSeller] = useState({});
  const [token, setToken] = useState("");
  useEffect(() => {
    getCurrentState();
    const ttoken = localStorage.getItem("token");
    // const storedSellerString = localStorage.getItem("seller");
    const storedSellerString = localStorage.getItem("seller");
    console.log("storedSellerString:", storedSellerString); // Check the value of storedSellerString
    const storedSeller = JSON.parse(storedSellerString);
    console.log("storedSeller:", storedSeller); // Check the parsed object
    // const storedSeller = JSON.parse(storedSellerString);
    setSeller(storedSeller);
    setToken(ttoken);
    console.log(token, seller);
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 shadow-sm">
        <div className="container-fluid">
          <a href="" className="navbar-brand fw-bold fs-4">
            <i class="fa fa-user-circle-o me-1" aria-hidden="true"></i>{" "}
            {seller.name}
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
            {isLogin && (
              <div className="button">
                <a
                  href=""
                  className="btn btn-outline-dark ms-2"
                  style={{ border: "None", backgroundColor: "#9c86b9" }}
                >
                  <i className="fa fa-lock me-1"></i> Logged In
                </a>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
const mapStateToProps = (state) => ({
  isLogin: state.loginStore.isLogin,
});

const mapDispatchToProps = {
  getCurrentState,
};

export default connect(mapStateToProps, mapDispatchToProps)(SellerNavbar);
// import React, { useEffect, useState } from "react";
// import { connect } from "react-redux";
// import { getCurrentState } from "../reduxStores/actions/Login";

// function SellerNavbar({ isLogin, getCurrentState }) {
//   const [seller, setSeller] = useState({});
//   const [token, setToken] = useState("");

//   useEffect(() => {
//     getCurrentState();
//     const ttoken = localStorage.getItem("token");
//     const storedSellerString = localStorage.getItem("seller");
//     const storedSeller = JSON.parse(storedSellerString);
//     setSeller(storedSeller);
//     setToken(ttoken);
//   }, [getCurrentState]);

//   useEffect(() => {
//     console.log(token, seller);
//   }, [token, seller]);

//   return (
//        <div>
//       <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 shadow-sm">
//         <div className="container-fluid">
//           <a href="" className="navbar-brand fw-bold fs-4">
//             <i class="fa fa-user-circle-o me-1" aria-hidden="true"></i> Seller
//             Name
//           </a>

//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="#">
//                   Home
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">
//                   Products
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">
//                   About
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//             {isLogin && (
//               <div className="button">
//                 <a
//                   href=""
//                   className="btn btn-outline-dark ms-2"
//                   style={{ border: "None", backgroundColor: "#9c86b9" }}
//                 >
//                   <i className="fa fa-lock me-1"></i> Logged In
//                 </a>
//               </div>
//             )}
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// const mapStateToProps = (state) => ({
//   isLogin: state.loginStore.isLogin,
// });

// const mapDispatchToProps = {
//   getCurrentState,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(SellerNavbar);
