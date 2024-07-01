import { Route, Routes } from "react-router-dom";
import React from "react";
import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import FooterAuth from "../FooterAuth/FooterAuth";
import BannerBlock from "../BannerBlock/BannerBlock";
import fonSign from "../../images/imgSignUp.svg";
import Login from "../Login/Login";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import NewPassword from "../NewPassword/NewPassword";

function AuthLayout({ children }) {
    return (
        <>
            {children}
            <FooterAuth />
        </>
    );
}

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<DefaultLayout><Main /></DefaultLayout>} />
                <Route path="/signUp" element={<AuthLayout><Register /></AuthLayout>} />
                <Route path="/login" element={<AuthLayout><Login /></AuthLayout>} />
                <Route path="/forgot-password" element={<AuthLayout><ForgotPassword /></AuthLayout>} />
                <Route path="/new-password" element={<AuthLayout><NewPassword /></AuthLayout>} />
                <Route path="/signLogin" element={
                    <div className='form'>
                        <Header />
                        <BannerBlock img={fonSign} title={"Start Your Journey By Login or Sign Up"}
                                     text={"Please Sign Up or Login to Enter Market Place"} textButtonOne={"Login"}
                                     textButtonTwo={"Sign Up"} linkOne={'/loginIn'} linkTwo={'/signUp'}
                                     classBtn={"button_group-auth"} classLine={'active'} />
                    </div>
                } />
            </Routes>
        </div>
    );
}

export default App;
