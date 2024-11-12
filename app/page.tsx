'use client'
import { Poppins } from '@next/font/google'
import { useState } from 'react'
import Scene from './scene'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '400', '700', '900'], // Añade los pesos que necesites
})

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
      <main className={poppins.className}>
        <header className='flex w-full justify-center border-t-[15px] border-[#416aa3] p-3 pb-0'>
          <h1 className='text-4xl font-extrabold text-[#416aa3]'>
            <span className='text-[#83322D]'>Re</span>Card
          </h1>
        </header>
        {imageUrl && (
          <div className='h-[80vh]'>
            <Scene imageUrl={imageUrl} />
          </div>
        )}
        <div className='flex w-full justify-center p-5'>
          <fieldset className='relative flex'>
            <label
              className='cursor-pointer rounded-xl rounded-ss-none bg-[#83322D] p-4 text-center font-bold text-white hover:bg-[#C0605B]'
              htmlFor='file-upload'
            >
              Seleccionar Imagen
            </label>
            <input id='file-upload' type='file' accept='image/' onChange={handleImageUpload} className='hidden' />
          </fieldset>
        </div>
      </main>
    </>
  )
}
