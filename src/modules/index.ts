import Profile from './profile.module/profile.module';
import Auth from "../app.shared/auth";
import Dashboard from "./dashboard.module/dashboard.module";
import Data from "./data.module/data.module";
import Incidents from "./incidents.module/incidents.module";

export const CommonModules = [
    Dashboard,
    Profile,
    Auth,
    Data,
    Incidents
]