import { useState } from "react";
import Header from "./Header";

export default function FileUpload() {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const handleSubmission = () => {
    console.log("Handler subsmission");
    const formData = new FormData();

    formData.append("file", selectedFile);

    fetch("http://localhost:5000/upload-file", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const changeHandler = (event) => {
    console.log("handler");
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };
  return (
    <>
      <Header title="My Todos List" searchBar={false} />
      <div className="container mb-3 pad-5">
        <input
          className="form-control"
          type="file"
          name="file"
          onChange={changeHandler}
        />
        {isFilePicked ? (
          <div>
            <p>Filename: {selectedFile.name}</p>
            <p>Filetype: {selectedFile.type}</p>
            <p>Size in bytes: {selectedFile.size}</p>
            <p>
              lastModifiedDate:{" "}
              {selectedFile.lastModifiedDate.toLocaleDateString()}
            </p>
          </div>
        ) : (
          <p>Select a file to show details</p>
        )}
        <div>
          <button
            className="btn btn-md-3 btn-success"
            onClick={handleSubmission}
            disabled={!isFilePicked}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
