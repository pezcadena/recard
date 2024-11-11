'use client'

import { useState } from 'react'
import Scene from './scene'

export default function Page() {
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setImageUrl(url)
    }
  }
  return (
    <>
      <main>
        <div className='h-[80vh]'>{imageUrl && <Scene imageUrl={imageUrl} />}</div>
        <div className='flex w-full justify-center'>
          <fieldset className='rounded-xl rounded-ss-none bg-[#83322D] p-4 text-center font-bold text-white'>
            <label htmlFor='file-upload'>Seleccionar Imagen</label>
            <input id='file-upload' type='file' accept='image/' onChange={handleImageUpload} className='hidden' />
          </fieldset>
        </div>
      </main>
    </>
  )
}
