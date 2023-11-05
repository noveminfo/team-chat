"use client";

import { UploadDropzone } from "@/lib/uploadthing";

import "@uploadthing/react/styles.css";
import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Skeleton } from "./ui/skeleton";

type Props = {
  onChange: (url?: string) => void;
  value: string;
  endpoint: "messageFile" | "serverImage";
};

export const FileUpload = ({ onChange, value, endpoint }: Props) => {
  const fileType = value?.split(".").pop();
  const [isLoaded, setIsLoaded] = useState(true);

  if (value && fileType !== "pdf") {
    return (
      <div className="relative h-20 w-20">
        {isLoaded && <Skeleton className="h-20 w-20 rounded-full" />}
        <Image
          fill
          src={value}
          alt="Upload"
          className="rounded-full"
          sizes="100%"
          onLoadingComplete={() => setIsLoaded(false)}
        />
        <button
          className="bg-rose-500 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm"
          onClick={() => onChange("")}
          type="button"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    );
  }
  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url);
      }}
      onUploadError={(error: Error) => {
        console.log(error);
      }}
    />
  );
};
