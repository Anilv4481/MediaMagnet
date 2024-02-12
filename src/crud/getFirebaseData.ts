import { collection, getDocs } from "firebase/firestore";
import { getStore } from "../services/FirebaseServices";

export async function expoDatabase(collectionName: string) {
  getDocs(collection(getStore(), collectionName))
    .then(function (querySnapshot) {
      var data: any = [];
      querySnapshot.forEach(function (doc) {
        data.push({ id: doc.id, ...doc.data() });
      });

      // Convert the data to JSON format
      var jsonData = JSON.stringify(data);

      // Save the data to a file (you may need to modify this part based on your needs)
      var blob = new Blob([jsonData], { type: "application/json" });
      var url = URL.createObjectURL(blob);
      var a = document.createElement("a");
      a.href = url;
      a.download = `${collectionName}.json`;
      a.click();
      URL.revokeObjectURL(url);
    })
    .catch(function (error) {
      console.error("Error getting documents: ", error);
    });
}
