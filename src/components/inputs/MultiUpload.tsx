import React, { FC, useState, useEffect } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@/firebase";
import { v4 } from "uuid";
import { useField } from "formik";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { toast } from "react-toastify";

interface MultiUploadProps {
  name: string;
  label: string;
  id: string;
}

const MultiUpload: FC<MultiUploadProps> = ({
  name,
  label = "Upload  from Device",
  id,
}) => {
  const [images, setImages] = useState<any>([]);

  const [field, meta, helpers] = useField(name);

  const isInvalid = meta.error && meta.touched;

  useEffect(() => {
    const upload = async () => {
      if (images.length > 0 && images.length <= 30) {
        const photos = [];
        try {
          for (let img of images) {
            let imgRef = ref(storage, `images/${img.name}-${v4()}`);

            const snapshot = await uploadBytes(imgRef, img);
            const url = await getDownloadURL(snapshot.ref);

            photos.push(url);
            helpers.setValue(photos);
          }

          toast("Photos uploaded");
        } catch (err) {
          console.log(err);
        }
      }
    };

    upload();
  }, [images]);
  return (
    <div>
      <>
        <label
          htmlFor={id}
          className="bg-red-500 inline-block p-2 rounded-md text-white"
        >
          <div className="flex items-center gap-x-4 bg-red-500">
            <MdOutlinePhotoCamera />
            <span>{label}</span>
          </div>
        </label>
        <input
          className="hidden"
          id={id}
          onBlur={field.onBlur}
          type="file"
          multiple
          onChange={(e: any) => setImages(e.target.files)}
        />
        {field.value.length > 0 && (
          <div>{field.value.length} photos uploaded</div>
        )}
        {isInvalid && <div className="text-red-500">{meta.error}</div>}
      </>
    </div>
  );
};

export default MultiUpload;
