import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { history } from "./helpers";
import { alertActions } from "./actions";
import Paper from "@mui/material/Paper";

// auth
import Auth from "./containers/Auth/Auth";
import Login from "./containers/Auth/Login/Login";
import Register from "./containers/Auth/Register/Register";

// home
import Home from "./containers/Home";

// protected route
import ProtectedRoute from "./components/common/auth/ProtectedRoute/ProtectedRoute.component";

// dashboard
import Dashboard from "./containers/Dashboard";

// history
import History from "./containers/History";

// profile
import Profile from "./containers/Profile";

// reservation
import ReserveFuel from "./containers/ReserveFuel";
import ReserveFuelSuccess from "./containers/ReserveFuel/Success";

// schedule
import Schedule from "./containers/Schedule";
import ScheduleDetail from "./containers/Schedule/Detail";

// token
import Token from "./containers/Token";

// 404
import NotFound from "./containers/misc/NotFound/NotFound";

const App = (props) => {
  const dispatch = useDispatch();

  history.listen((location, action) => {
    dispatch(alertActions.clear());
  });

  return (
    <Paper className="App" elevation={0}>
      <BrowserRouter>
        <Routes>
          {/* Auth */}
          <Route path="auth" element={<Auth />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>

          <Route path="/" element={<ProtectedRoute />}>
            {/* hoe */}
            <Route index element={<Home />} />

            {/* dashboard */}
            <Route path="/dashboard" element={<Dashboard />} />

            {/* history */}
            <Route path="/history" element={<History />} />

            {/* profile */}
            <Route path="/profile" element={<Profile />} />

            <Route path="/reserve">
              {/* reserve */}
              <Route index element={<ReserveFuel />} />
              {/* reserve success */}
              <Route path="/reserve/success">
                <Route index element={<ReserveFuelSuccess />} />
              </Route>
            </Route>

            <Route path="/schedule">
              {/* shedule */}
              <Route index element={<Schedule />} />
              {/* shedule detail */}
              <Route path="/schedule/:station">
                <Route index element={<ScheduleDetail />} />
              </Route>
            </Route>

            {/* token */}
            <Route path="/token" element={<Token />} />
          </Route>

          {/* Not found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Paper>
  );
};

export default App;
