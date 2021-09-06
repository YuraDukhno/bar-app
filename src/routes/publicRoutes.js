import Main from "../pages/Main"
import Schedule from "../pages/Schedule";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Staff from "../pages/Staff";
import Tips from "../pages/Tips";
import { MAIN_ROUTE, SIGN_UP, SIGN_IN, SCHEDULE, STAFF, TIPS } from "../utils/constants"

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: SIGN_UP,
        Component: SignUp,
    },
    {
        path: SIGN_IN,
        Component: SignIn,
    },
    {
        path: STAFF,
        Component: Staff,
    },
    {
        path: SCHEDULE,
        Component: Schedule,
    },
    {
        path: TIPS,
        Component: Tips,
    }

]