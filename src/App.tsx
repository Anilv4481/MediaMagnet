import { useEffect } from "react";
import LoggedInRoutes from "./component/customRoutes/LoggedInRoutes";
import PublicRoutes from "./component/customRoutes/PublicRoutes";
import { authStore } from "./component/pullstate/store";
import { initFirebase } from "./services/FirebaseServices";

export default function App() {
  // const Iscondistion = authStore.useState();
  // const isLoggedIn = authStore.useState((s) => s.isloggedin);

  // useEffect(() => {
  //   initFirebase();
  // }, []);

  return <LoggedInRoutes />;
  return <PublicRoutes />;
}
