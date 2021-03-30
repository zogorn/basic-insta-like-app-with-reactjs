const FileInput = ({ onFileChange }: any) => {
  const handelChange = (event: any) => {
    const file = event.target.files[0];
    const fileUrl = URL.createObjectURL(file);

    onFileChange(fileUrl);
  };

  return (
    <>
      <input type="file" multiple={false} onChange={(e) => handelChange(e)} />
    </>
  );
};

export default FileInput;
