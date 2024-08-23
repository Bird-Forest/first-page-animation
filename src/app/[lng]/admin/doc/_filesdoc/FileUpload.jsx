"use client";
import { uploadAnyFile } from "@/src/app/services/upload";

export default function FileUpload({ lng }) {
  return (
    <div>
      <h2>File Upload</h2>
      <form action={uploadAnyFile}>
        <label htmlFor="upfile" className="block">
          Audio file:
        </label>
        <input type="file" name="upfile" multiple />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}
