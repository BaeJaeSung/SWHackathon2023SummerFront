'use client'
import { useState, useRef, useEffect, SetStateAction } from 'react'
import Image from 'next/image'
import Icon from '@/public/add_circle_black_24dp.svg'
import SignUpLayout from '@/components/signUpLayout'
import AWS from "aws-sdk"
import { useRouter } from 'next/navigation'

const REGION = process.env.NEXT_PUBLIC_AWS_REGION;
const ACCESS_KEY_ID = process.env.NEXT_PUBLIC_AWS_ACCESS_KEY
const SECRET_KEY_ID = process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY
const BUCKET = process.env.NEXT_PUBLIC_REACT_APP_AWS_BUCKET
    
AWS.config.update({
  region:REGION,
  accessKeyId:ACCESS_KEY_ID,
  secretAccessKey:SECRET_KEY_ID,
});

export default function SignUpPhotoPage() {
  const [photo1, setPhoto1] = useState()
  const [photo2, setPhoto2] = useState()
  const [photo3, setPhoto3] = useState()
  const [photo4, setPhoto4] = useState()
  const [photo1File, setPhoto1File] = useState('')
  const [photo2File, setPhoto2File] = useState('')
  const [photo3File, setPhoto3File] = useState('')
  const [photo4File, setPhoto4File] = useState('')

  const photo1Input = useRef<HTMLInputElement>(null)
  const photo2Input = useRef<HTMLInputElement>(null)
  const photo3Input = useRef<HTMLInputElement>(null)
  const photo4Input = useRef<HTMLInputElement>(null)

  const router = useRouter()

  const onClickPhoto1 = () => {
    photo1Input?.current?.click()
  }

  const onClickPhoto2 = () => {
    photo2Input?.current?.click()
  }

  const onClickPhoto3 = () => {
    photo3Input?.current?.click()
  }

  const onClickPhoto4 = () => {
    photo4Input?.current?.click()
  }

  const handleFile1 = (e) => {
    if(e.target.files.length !== 0){
      encodeFileToBase64(e.target.files[0], 1);
      setPhoto1File(e.target.files[0]);
    }
  }
  const handleFile2 = (e) => {
    if(e.target.files.length !== 0){
      encodeFileToBase64(e.target.files[0], 2);
      setPhoto2File(e.target.files[0]);
    }
  }
  const handleFile3 = (e) => {
    if(e.target.files.length !== 0){
      encodeFileToBase64(e.target.files[0], 3);
      setPhoto3File(e.target.files[0]);
    }
  }
  const handleFile4 = (e) => {
    if(e.target.files.length !== 0){
      encodeFileToBase64(e.target.files[0], 4);
      setPhoto4File(e.target.files[0]);
    }
  }

  const checkFiles = () => {
    if (photo1) return true;
    return false;
  }

  const onClick = () => {
    const s3 = new AWS.S3();

    if (photo1File) {
      const params1={
        Bucket: "swhackathon",
        Key : "name"+"_1.jpg",
        Body: photo1File,
      };

      s3.upload(params1, function (err, data){
        if(err) {
          console.log("업로드 오류", err);
        } else {
          console.log("업로드 성공", data);
        }
      });      
    }

    if (photo2File) {
      const params2={
        Bucket: BUCKET,
        Key : "name"+"_2.jpg",
        Body: photo2File,
      };

      s3.upload(params2, function (err, data){
        if(err) {
          console.log("업로드 오류", err);
        } else {
          console.log("업로드 성공", data);
        }
      });      
    }

    if (photo3File) {
      const params3={
        Bucket: BUCKET,
        Key : "name"+"_3.jpg",
        Body: photo3File,
      };

      s3.upload(params3, function (err, data){
        if(err) {
          console.log("업로드 오류", err);
        } else {
          console.log("업로드 성공", data);
        }
      });
    }
 
    if (photo4File) {
      const params4={
        Bucket: BUCKET,
        Key : "name"+"_4.jpg",
        Body: photo4File,
      };

      s3.upload(params4, function (err, data){
        if(err) {
          console.log("업로드 오류", err);
        } else {
          console.log("업로드 성공", data);
        }
      });      
    }

    router.push("/signup/new/detail")
  }
  
  const encodeFileToBase64 = (fileBlob : any, num : number) =>{
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve)=>{
      reader.onload = () => {
        if(num === 1){
          setPhoto1(reader.result);
        } else if(num === 2){
          setPhoto2(reader.result);
        } else if(num === 3){
          setPhoto3(reader.result);
        } else{
          setPhoto4(reader.result);
        }
        resolve();
      }
    })
  }

  return (
    <SignUpLayout
      textTop="00님의"
      textBottom="사진을 등록해주세요"
      btnText="다음"
      btnEvent={onClick}
    >
      <div className="grid grid-cols-2 grid-rows-2 gap-4 rounded-lg px-10">
        <div
          className="flex h-56 cursor-pointer items-center justify-center rounded-lg border-2 border-dotted"
          onClick={onClickPhoto1}
        >
          {photo1 ? (
            <img
              className="h-full w-full object-contain"
              src={photo1}
              alt="preview-1"
            />
          ) : (
            <Image
              width={48}
              height={48}
              src={Icon}
              alt={'add'}
              className="pointer-events-none opacity-50"
            />
          )}
        </div>
        <input
          className="hidden"
          type="file"
          accept=".jpg, .jpeg, .png, .bmp"
          onChange={handleFile1}
          ref={photo1Input}
        />
        <div
          className="flex cursor-pointer items-center justify-center rounded-lg border-2 border-dotted text-center"
          onClick={onClickPhoto2}
        >
          {photo2 ? (
            <img
              className="h-full w-full object-contain"
              src={photo2}
              alt="preview-2"
            />
          ) : (
            <Image
              width={48}
              height={48}
              src={Icon}
              alt={'add'}
              className="pointer-events-none opacity-50"
            />
          )}
        </div>
        <input
          className="hidden"
          type="file"
          accept=".jpg, .jpeg, .png, .bmp"
          onChange={handleFile2}
          ref={photo2Input}
        />
        <div
          className="flex cursor-pointer items-center justify-center rounded-lg border-2 border-dotted text-center"
          onClick={onClickPhoto3}
        >
          {photo3 ? (
            <img
              className="h-full w-full object-contain"
              src={photo3}
              alt="preview-3"
            />
          ) : (
            <Image
              width={48}
              height={48}
              src={Icon}
              alt={'add'}
              className="pointer-events-none opacity-50"
            />
          )}
        </div>
        <input
          className="hidden"
          type="file"
          accept=".jpg, .jpeg, .png, .bmp"
          onChange={handleFile3}
          ref={photo3Input}
        />
        <div
          className="flex cursor-pointer items-center  justify-center rounded-lg border-2 border-dotted text-center"
          onClick={onClickPhoto4}
        >
          {photo4 ? (
            <img
              className="h-full w-full object-contain"
              src={photo4}
              alt="preview-4"
            />
          ) : (
            <Image
              width={48}
              height={48}
              src={Icon}
              alt={'add'}
              className="pointer-events-none opacity-50"
            />
          )}
        </div>
        <input
          className="hidden"
          type="file"
          accept=".jpg, .jpeg, .png, .bmp"
          onChange={handleFile4}
          ref={photo4Input}
        />
      </div>
    </SignUpLayout>
  )
}
