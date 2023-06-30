'use client'
import { useState, useEffect } from 'react'
import axios from 'axios'
import MainCard from '@/components/maincard'
import {
  matchLoadCandidateHiki,
  userMyInfo,
  matchLoadCandidateCeo,
  getData,
} from '@/lib/api'

// 0 : hiki, loadcandidateceo, 1 : 자영,loadcandidatehiki
export default function MainPage() {
  const [items, setItems] = useState([])
  const [type, setType] =useState(0)
  const [showFull, setShowFull] = useState(false)
  const [isPic, setIsPic] = useState(false)

  useEffect(() => {
    const id = localStorage.getItem("id")
    userMyInfo(id).then((res) => {
      setType(res.type);
      callFunc(res.type)
      }
    ) 
  }, [])

  const callFunc = (t) => {
    const id = localStorage.getItem('id')
    if (t == 0) {
      matchLoadCandidateCeo(id).then((res) => {
        setItems([...res])
      })            
    }
    else {
      matchLoadCandidateHiki(id).then((res) => { setItems([...res]) }) 
    }
  }
  useEffect(()=>{
    const id = localStorage.getItem('id')
    
    if (items.length === 0) {
      callFunc(type)
    }
  },[items])


  return (
    <div className="flex h-full w-full gap-10 overflow-hidden">
      {items &&
        items.map((item: any, index) => (
          <MainCard
            showFull={showFull}
            setShowFull={setShowFull}
            id={item.id}
            name={item.name}
            intro={item.intro}
            employee_count={item.employee_count}
            type={item.type}
            representative={item.representative}
            setItems={setItems}
            items={items}
            type={type}
            type_ceo={item.type}
            key={index}
            nickname={item.nickname}
            info={item.info}
            studycareer={item.study_career}
            careers={item.careers}
            phone_number={item.phone_number}
            works={item.works}
          />
        ))}
    </div>
  )
}
