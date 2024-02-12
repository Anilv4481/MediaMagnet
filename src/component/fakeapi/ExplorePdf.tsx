import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  initializeFirestore,
  query,
  setDoc,
} from "firebase/firestore";
import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { firebaseConfig } from "../../services/FirebaseConfig";
import { getStore } from "../../services/FirebaseServices";
import { getApp } from "firebase/app";
import { VUtils } from "./VUtils";

const PdfDownloadButton = ({ textData }: any) => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
  const [data, setData] = React.useState<any>([]);
  const db = initializeFirestore(getApp(), { ignoreUndefinedProperties: true });
  async function getDocsFir() {
    const myDataCol = await getDocs(query(collection(db, "myData")));
    const transformRes = myDataCol.docs.map((item: any) => ({
      id: item.id,
      ...item.data(),
    }));
    setData(transformRes);
    console.log(transformRes, "transformRes");
    return transformRes;
  }
  const MyDocument = () => (
    <Document>
      <Page>
        <div>{textData}</div>
      </Page>
    </Document>
  );

  async function addDocFir(d: any) {
    console.log("function clicked");
    const data = await addDoc(collection(db, "myData"), d);
    return await getDocsFir();
  }

  async function updateDocFir(id: string) {
    const data = await setDoc(doc(db, "myData", id), {
      name: "Los Angeles",
      country: "USA",
    });
    return await getDocsFir();
  }
  React.useEffect(() => {
    getDocsFir();
  }, []);

  async function deleteDocFir(id: string) {
    const dData = deleteDoc(doc(db, "myData", id));
    return await getDocsFir();
  }
  // console.log(myDataCol, "myDataCol");
  return (
    <div>
      {data &&
        data.map((item: any, indx: number) => (
          <>
            <p>{item.name}</p>
            <p>{item.country}</p>
            <p>{indx + 1}</p>
            <p onClick={() => updateDocFir(item.id)}>Edit </p>
            <p onClick={() => deleteDocFir(item.id)}>deleteDocFir </p>
          </>
        ))}
      <button
        onClick={async () =>
          await addDocFir({
            name: "Tokyo",
            country: "Japan",
          })
        }
      >
        add data
      </button>

      <h2>Download PDF</h2>
      <a
        href={`data:application/pdf;base64,${btoa(textData)}`}
        download="document.pdf"
      >
        <button>Download PDF</button>
      </a>
      <MyDocument />
    </div>
  );
};

export default PdfDownloadButton;
