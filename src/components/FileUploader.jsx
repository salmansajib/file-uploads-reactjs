import { useState } from "react";

function FileUploader() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    console.log(e.target.files);

    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div>
      <div className="mt-10 bg-gray-100/10 p-3 rounded-md max-w-max mx-auto">
        <input
          type="file"
          onChange={handleFileChange}
          className="file:border-0 file:bg-gray-200 file:text-slate-950 file:p-[5px] file:rounded-md file:hover:bg-blue-300 file:cursor-pointer"
        />
      </div>

      {file ? (
        <div className="mt-5 bg-gray-100/10 max-w-[500px] mx-auto p-5 rounded-md space-y-2 text-lg">
          <p>
            File Name: <span className="text-blue-200">{file.name}</span>{" "}
          </p>
          <p>
            File Size:{" "}
            <span className="text-blue-200">
              {(file.size / 1024).toFixed(2)} KB
            </span>{" "}
          </p>
          <p>
            File Type: <span className="text-blue-200">{file.type}</span>{" "}
          </p>
        </div>
      ) : (
        <p className="mt-5 text-center text-lg text-red-500">
          Please choose a file to see the file info and upload the file.
        </p>
      )}
    </div>
  );
}

export default FileUploader;
