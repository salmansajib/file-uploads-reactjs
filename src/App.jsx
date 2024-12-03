import FileUploader from "./components/FileUploader";

function App() {
  return (
    <div className="bg-slate-950 text-gray-200 min-h-screen py-10 px-4 font-sen">
      <div className="container mx-auto">
        <h1 className=" text-4xl font-semibold text-center">
          File Uploads In React
        </h1>

        <FileUploader />
      </div>
    </div>
  );
}

export default App;
