import axios, { AxiosResponse } from 'axios';

async function uploadFileToS3(
  file: File,
  presignedUrl: string,
  setUploadProgress: (value: number) => void
): Promise<AxiosResponse> {
  return axios.put(presignedUrl, file, {
    headers: {
      'Content-Disposition': `attachment; filename=${file.name}`,
      'Content-Type': `${file.type}`,
    },
    onUploadProgress: (progressEvent) => {
      setUploadProgress(Math.ceil((progressEvent.progress ?? 0) * 100));
    },
  });
}

async function getPresignedURL(data: {
  fileName: string;
  fileType: string;
}): Promise<string> {
  const _url = 'URL';
  const response = await axios.post(_url, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.data.url;
}

export default async function uploadFile(
  file: File,
  setUploadProgress: (value: number) => void
): Promise<string | undefined> {
  const _file = new File(
    [file],
    file.name.replace(/,/g, '_').replace(/ /g, '_'),
    {
      lastModified: file.lastModified,
      type: file.type,
    }
  );
  const presignedUrl = await getPresignedURL({
    fileName: _file.name,
    fileType: _file.type,
  });
  if (presignedUrl.length > 0) {
    await uploadFileToS3(_file, presignedUrl, setUploadProgress);
    return presignedUrl.split('?')[0];
  }
  return undefined;
}
