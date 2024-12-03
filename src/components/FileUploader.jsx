function FileUploader() {
  return (
    <div className="mt-10 bg-gray-100/10 p-3 rounded-md max-w-max mx-auto">
      <input
        type="file"
        className=" file:border-0 file:bg-slate-950/60 file:text-gray-200 file:p-[5px] file:rounded-md file:hover:bg-green-400 file:cursor-pointer file:hover:text-slate-950"
      />
    </div>
  );
}

export default FileUploader;
