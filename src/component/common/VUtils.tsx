import Swal from "sweetalert2";

export class VUtils {
  // static fakeApis() {
  //   return new Promise((resolve) => {
  //     const convrtData = JSON.stringify(arrayOfObjects);
  //     console.log(convrtData, "convrtDatas");
  //     resolve(convrtData);
  //   });
  // }
  static takeInp(Placeholder: string) {
    return Number(prompt(Placeholder));
  }
  static transformFirebaseResult(ref: any) {
    if (!ref) return null;
    if (Array.isArray(ref)) return ref;
    if (Array.isArray(ref.docs))
      return ref.docs.map((item: any) => ({ id: item.id, ...item.data() }));
    else if (typeof ref?.data === "function")
      return { id: ref.id, ...ref.data() };
    else if (typeof ref === "object") return ref;
    return null;
  }

  static async showConfirmAlert() {
    return new Promise((resolve) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) return resolve(true);
        return resolve(false);
      });
    });
  }

  // Make the function asynchronous
  static async convrtBs64(event: any, callBack: Function) {
    const file = event.target.files[0];
    console.log(file, "event");

    if (file) {
      const reader = new FileReader();

      // Use an async/await pattern for better readability
      reader.onload = async function (e: any) {
        try {
          const base64EncodedImage = e.target.result.split(",")[1];
          console.log(base64EncodedImage);

          // Check if base64EncodedImage is defined before calling the callback
          if (base64EncodedImage) {
            await callBack("data:video/mp4;base64," + base64EncodedImage);
            // "data:image/png;base64," this is very very imp
          }
        } catch (error) {
          console.error("Error converting image to Base64:", error);
        }
      };

      // Start reading the file
      reader.readAsDataURL(file);
    }
  }
}
