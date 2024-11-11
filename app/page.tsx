'use client'

import { useState } from "react";
import Scene from "./scene"

export default function Page() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
    }
  };
  return (
    <>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <div className="h-[600px]">
        { imageUrl && <Scene imageUrl={imageUrl}/>}
      </div>
    </>
  )
}
