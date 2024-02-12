import "firebase/firestore";
import { addDoc, collection } from "firebase/firestore";
import { ChangeEvent } from "react";
import { getStore } from "../services/FirebaseServices";

export default function DBUploader() {
  async function handleFileUpload(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {
      console.log(e.target?.result, "e.target?.result");

      const jsonData = e.target?.result as string;
      const data = JSON.parse(jsonData);

      data.forEach((doc: any) => {
        addDoc(collection(getStore(), file.name.split(".")[0]), doc)
          .then(() => {
            alert("Document successfully written to Firestore.");
          })
          .catch((error) => {
            alert("Error writing document:");
            console.error("Error writing document: ", error);
          });
      });
    };

    reader.readAsText(file);
  }

  return (
    <div>
      <input type="file" onChange={(e) => handleFileUpload(e)} />
    </div>
  );
}
