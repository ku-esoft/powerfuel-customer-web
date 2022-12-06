import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import PageLayout from "./../../../../layouts/PageLayout/PageLayout.layout";

const ProtectedRoute = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(localStorage.getItem("user") ? true : null);

  useEffect(() => {
    const loginCheck = () => {
      if (!user) {
        navigate("/auth/login");
      }
    };

    // loginCheck();
  }, []);

  return (
    <PageLayout>
      <Outlet />
    </PageLayout>
  );
};

export default ProtectedRoute;
