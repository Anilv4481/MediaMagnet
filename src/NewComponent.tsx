import React from "react";

export default function NewComponent() {
  const [response, setResponse] = React.useState<any>(null);
  async function handlePostRequest(url: string, data: any) {
    try {
      const apiUrl = url;
      const postData = {
        data: data,
      };

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      const responseData = await response.json();
      console.log("Response:", responseData);
      setResponse(responseData);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  React.useEffect(() => {
    handlePostRequest("http://localhost:3000/getVideo", {
      url: "https://youtube.com/watch?v=ydV4mNg0LU8&t=767s",
    });
  }, []);
  console.log(response, "state response");
  return (
    <div>
      new components
      {response && <div dangerouslySetInnerHTML={{ __html: response.anilV }} />}
      {/* {response &&
        response.map((item: any, index: number) => (
          <React.Fragment key={index}>
            <p>{item?.title}</p>
          </React.Fragment>
        ))} */}
    </div>
  );
}
