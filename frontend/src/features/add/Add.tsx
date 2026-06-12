import {
  type ChangeEvent,
  type DragEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  FaCheckCircle,
  FaCloudUploadAlt,
  FaImage,
  FaReceipt,
  FaTrash,
} from "react-icons/fa";

const acceptedImageTypes = ["image/jpeg", "image/png", "image/webp"];

const formatFileSize = (size: number) => {
  if (size < 1024 * 1024) {
    return `${(size / 1024).toFixed(1)} KB`;
  }

  return `${(size / (1024 * 1024)).toFixed(1)} MB`;
};

export default function Add() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [receiptImage, setReceiptImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const selectReceiptImage = (file: File | undefined) => {
    if (!file) {
      return;
    }

    if (!acceptedImageTypes.includes(file.type)) {
      setError("Upload a JPG, PNG, or WebP receipt image.");
      return;
    }

    setError("");
    setReceiptImage(file);
    setPreviewUrl((currentPreviewUrl) => {
      if (currentPreviewUrl) {
        URL.revokeObjectURL(currentPreviewUrl);
      }

      return URL.createObjectURL(file);
    });
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    selectReceiptImage(event.target.files?.[0]);
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    selectReceiptImage(event.dataTransfer.files[0]);
  };

  const clearReceiptImage = () => {
    setReceiptImage(null);
    setError("");
    setPreviewUrl((currentPreviewUrl) => {
      if (currentPreviewUrl) {
        URL.revokeObjectURL(currentPreviewUrl);
      }

      return "";
    });

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <main className="min-h-screen bg-primary p-6 text-white font-['Roboto']">
      <div className="mx-auto flex h-full max-w-6xl flex-col gap-5">
        <header className="flex flex-col gap-1">
          <div className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-lg bg-tertiary shadow-[2px_4px_4px_#00000040]">
              <FaReceipt size={22} />
            </div>
            <div>
              <h1 className="text-3xl font-semibold">Add receipt</h1>
              <p className="text-sm text-white/70">
                Import a receipt image for review and categorization.
              </p>
            </div>
          </div>
        </header>

        <section className="grid min-h-0 flex-1 grid-cols-1 gap-5 xl:grid-cols-[1.35fr_0.65fr]">
          <div
            className={`flex min-h-[520px] flex-col rounded-lg border-2 border-dashed p-4 transition-colors ${
              isDragging
                ? "border-quaternary bg-secondary"
                : "border-quaternary/60 bg-secondary/70"
            }`}
            onDragOver={(event) => {
              event.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
          >
            <input
              ref={inputRef}
              type="file"
              accept={acceptedImageTypes.join(",")}
              className="hidden"
              onChange={handleInputChange}
            />

            {previewUrl ? (
              <div className="flex min-h-0 flex-1 flex-col gap-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-quaternary">
                    <FaCheckCircle />
                    <span className="font-medium">Receipt ready</span>
                  </div>
                  <button
                    type="button"
                    onClick={clearReceiptImage}
                    className="flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm transition-colors hover:bg-primary/70"
                  >
                    <FaTrash />
                    Remove
                  </button>
                </div>
                <div className="flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-lg bg-primary/60">
                  <img
                    src={previewUrl}
                    alt="Selected receipt preview"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => inputRef.current?.click()}
                className="flex flex-1 flex-col items-center justify-center gap-4 rounded-lg bg-primary/35 p-6 text-center transition-colors hover:bg-primary/50"
              >
                <FaCloudUploadAlt size={64} className="text-quaternary" />
                <div>
                  <div className="text-2xl font-semibold">
                    Drop a receipt photo here
                  </div>
                  <div className="mt-1 text-sm text-white/70">
                    JPG, PNG, and WebP images are supported.
                  </div>
                </div>
                <span className="rounded-md bg-tertiary px-4 py-2 font-medium shadow-[2px_4px_4px_#00000040]">
                  Choose image
                </span>
              </button>
            )}
          </div>

          <aside className="flex flex-col gap-4 rounded-lg bg-quaternary p-5 text-denary shadow-[4px_4px_8px_#00000040]">
            <div>
              <h2 className="text-xl font-semibold">Receipt details</h2>
              <p className="text-sm text-black/60">
                Confirm the image before sending it to extraction.
              </p>
            </div>

            <div className="flex flex-col gap-3 rounded-lg bg-white/60 p-4">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-md bg-tertiary text-white">
                  <FaImage />
                </div>
                <div className="min-w-0">
                  <div className="truncate font-medium">
                    {receiptImage?.name ?? "No image selected"}
                  </div>
                  <div className="text-sm text-black/60">
                    {receiptImage
                      ? formatFileSize(receiptImage.size)
                      : "Waiting for upload"}
                  </div>
                </div>
              </div>

              {error ? (
                <div className="rounded-md bg-red-100 px-3 py-2 text-sm text-red-700">
                  {error}
                </div>
              ) : null}
            </div>

            <div className="mt-auto flex flex-col gap-3">
              <button
                type="button"
                onClick={() => inputRef.current?.click()}
                className="rounded-md bg-secondary px-4 py-3 font-medium text-white transition-colors hover:bg-secondary/85"
              >
                Select another image
              </button>
              <button
                type="button"
                disabled={!receiptImage}
                className="rounded-md bg-quinary px-4 py-3 font-semibold text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-45"
              >
                Continue
              </button>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
