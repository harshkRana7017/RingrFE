import React, { FC, useEffect, useRef, useState } from 'react';
// components
import UploadFile from './UploadFile';
import Button from '../Button/Button';
// services
import uploadFile from './upload.service';

const UploadFileMain: FC = () => {
  const [dropFiles, setDropFiles] = useState<File[]>([]);
  const [uploadProgress, setUploadProgress] = useState<number>(0);

  const dropzoneRef = useRef<HTMLDivElement>(null);

  const handleReset = () => {
    setUploadProgress(0);
    setDropFiles([]);
  };

  const addDropFiles = (file: File[]) => {
    setDropFiles((prev) => [...prev, ...file]);
  };

  useEffect(() => {
    if (uploadProgress === 100) {
      handleReset();
    }
  }, [uploadProgress]);

  return (
    <div className='flex items-center justify-center'>
      <div className='px-4 py-10 bg-white '>
        <h5 className='mb-3 font-bold'>Upload Files</h5>
        <UploadFile
          addDropFiles={addDropFiles}
          dropFiles={dropFiles}
          dropzoneRef={dropzoneRef}
        />

        {uploadProgress ? (
          <div className='flex items-center gap-1 mt-4 rounded-lg'>
            <div className='w-full h-1 rounded-lg '>
              <div
                className='h-full bg-green-600 '
                style={{ width: `${uploadProgress}%` }}
              />
            </div>
            <span className='text-sm text-gray-500'>{uploadProgress}%</span>
          </div>
        ) : (
          <div className='flex gap-2 mt-4 item-center'>
            <Button
              className='px-1 text-sm text-white'
              onClick={handleReset}
              disabled={!dropFiles}
            >
              CANCEL
            </Button>
            <Button
              className='px-1 text-sm text-white'
              disabled={dropFiles.length === 0}
              onClick={() => uploadFile(dropFiles[0], setUploadProgress)}
            >
              UPLOAD
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadFileMain;
