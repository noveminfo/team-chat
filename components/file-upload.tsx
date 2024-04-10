"use client";

import { UploadDropzone } from "@/lib/uploadthing";

import "@uploadthing/react/styles.css";
import { FileIcon, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Skeleton } from "./ui/skeleton";

type Props = {
  onChange: (url?: string) => void;
  value: string;
  endpoint: "messageFile" | "serverImage";
};

export const FileUpload = ({ onChange, value, endpoint }: Props) => {
  const fileType = value?.split(".").pop() ?? "";
  const [isLoaded, setIsLoaded] = useState(true);

  if (value && endpoint === "serverImage") {
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

  if (value && endpoint === "messageFile") {
    if (["pdf"].includes(fileType)) {
      return (
        <div className="relative flex items-center p-2 mt-2 rounded-md bg-background/10">
          <FileIcon className="h-10 w-10 fill-indigo-200 stroke-indigo-400" />
          <a
            href={value}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-sm text-indigo-500 dark:text-indigo-400 hover:underline"
          >
            {value}
          </a>
          <button
            className="bg-rose-500 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm"
            onClick={() => onChange("")}
            type="button"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      );
    } else {
      return (
        <div className="relative h-60 w-60">
          {isLoaded && <Skeleton className="h-60 w-60 rounded-md" />}
          <Image
            fill
            src={value}
            alt="Upload"
            className="rounded-md"
            sizes="100%"
            onLoadingComplete={() => setIsLoaded(false)}
          />
          <button
            className="bg-rose-500 text-white p-1 rounded-full absolute top-[-10px] right-[-10px] shadow-sm"
            onClick={() => onChange("")}
            type="button"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      );
    }
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
