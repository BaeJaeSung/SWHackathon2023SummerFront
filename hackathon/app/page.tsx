'use client'
import { useState, useEffect } from 'react'
import axios from 'axios'
import MainCard from '@/components/maincard'

export default function MainPage() {
  const [items, setItems] = useState([
    {
      nickname: '히키',
      info: '하하',
      studycareer: '제주여자고등학교',
      careers: {
        company_name: '한스델리',
        period: 2,
        experience: '홀',
      },
    },
  ])
  const [showFull, setShowFull] = useState(false)
  /*
  const [nickname, setNickname] = useState('히키')
  const [info, setInfo] = useState('하하')
  const [studycareer, setStudycareer] = useState('제주여자고등학교')
  const [careers, setCareers] = useState({
    pid: 0,
    uid: "",
    company_name: "한스델리",
    period: 2,
    experience: "홀",
  })*/
  localStorage.setItem('type', '0')
  useEffect(() => {
    axios
      .post('http://3.39.72.59:3000/match/load_candidate_hiki', {
        id: localStorage.getItem('id'),
      })
      .then((res) => {
        console.log(res)
        //for(let i=0; i<res.data.length; i++){
        res.data.map((item: any, index: number) =>
          setItems((prevItems) => [
            ...prevItems,
            {
              nickname: item.nickname,
              info: item.info,
              studycareer: item.study_career,
              careers: {
                company_name: item.career[0]?.company_name,
                period: item.career[0]?.period,
                experience: item.career[0]?.experience,
              },
            },
          ]),
        )

        //}
      })
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    console.log(items)
  }, [items])

  return (
    <div className="flex h-full w-full gap-10 overflow-hidden">
      {items &&
        items.map((item) => (
          <MainCard
            showFull={showFull}
            setShowFull={setShowFull}
            nickname={item.nickname}
            info={item.info}
            studycareer={item.studycareer}
            careers={item.careers}
          />
        ))}
    </div>
  )
}
