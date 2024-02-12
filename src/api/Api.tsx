import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  setDoc,
} from "firebase/firestore";
import { useMutation, useQuery } from "react-query";
import { VUtils } from "../component/fakeapi/VUtils";
import { getStore } from "../services/FirebaseServices";
import axios from "axios";

export function useLists() {
  return useQuery("fromData", async () => {
    let ref = await getDocs(query(collection(getStore(), "fromData")));
    // throw new Error("Error Occured");
    return VUtils.transformFirebaseResult(ref);
  });
}

// export function useCusetomLists() {
//   return useQuery("fromData", async () => {
//     let ref = await getDocs(query(collection(getStore(), "fromData")));
//     // throw new Error("Error Occured");
//     return VUtils.transformFirebaseResult(ref);
//   });
// }
export function useAddUpdateList(postExecution?: (data: any) => void) {
  return useMutation("fromData", async (data: any) => {
    console.log(data);
    const { id } = data;
    let res: any = null;
    if (id) {
      res = await setDoc(doc(getStore(), "fromData", id), data);
    } else {
      res = await addDoc(collection(getStore(), "fromData"), data);
    }
    return res;
  });
}

export function useDeleteList(postExecution?: (id: string) => void) {
  return useMutation("fromData", async (id: string) => {
    let res = await deleteDoc(doc(getStore(), "fromData", id));
    return res;
  });
}
