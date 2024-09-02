import React, { FC, useCallback, RefObject } from 'react';
import { useDropzone } from 'react-dropzone';

interface UploadFileProps {
  addDropFiles: (value: File[]) => void;
  dropFiles: File[];
  dropzoneRef: RefObject<HTMLDivElement>;
}

const UploadFile: FC<UploadFileProps> = ({
  addDropFiles,
  dropFiles,
  dropzoneRef,
}) => {
  const onDropAccepted = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      addDropFiles(acceptedFiles);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDropAccepted,
  });

  return (
    <>
      <div
        {...getRootProps()}
        ref={dropzoneRef}
        className={`bg-gray-100 border border-dashed border-gray-700 w-[500px] pt-4 px-2 ${
          dropFiles.length === 1 ? 'hidden' : ''
        }`}
      >
        <input {...getInputProps()} multiple />
        {!isDragActive && (
          <>
            <div className='flex justify-start gap-2'>
              <button className='px-1 text-sm text-gray-700 border border-gray-700'>
                CHOOSE FILES
              </button>
              {dropFiles.length === 0 && (
                <span className='font-bold text-gray-700'> No file chosen</span>
              )}
            </div>
            <div className='my-4'>
              <span className='font-bold text-gray-700'>
                or drop files here
              </span>
            </div>
          </>
        )}
        {isDragActive && (
          <div className='flex items-center justify-center w-full h-8'>
            <p>Drop file here :-</p>
          </div>
        )}
      </div>
      {dropFiles.length > 0 && (
        <div className='w-[500px]'>
          <img
            src={URL.createObjectURL(dropFiles[0])}
            alt={dropFiles[0].name}
          />
        </div>
      )}
    </>
  );
};

export default UploadFile;
