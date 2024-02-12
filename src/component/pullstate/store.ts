import { User } from "firebase/auth";
import { Store } from "pullstate";
type IinitialType = {
  isloggedin: User | null;
};
const initialType = {
  isloggedin: null,
};
export const authStore = new Store<IinitialType>(initialType);

export default class isLoginHelper {
  static setLoggedIn(loginValuse: any) {
    return authStore.update((s) => {
      s.isloggedin = loginValuse;
    });
  }
}
