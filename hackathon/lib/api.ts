import { getServerSession } from "next-auth"
import { authOption } from "@/app/api/auth/[...nextauth]/route"
import axios from 'axios'

export const getSession = async () => {
  return await getServerSession(authOption)
}


const api_end_point = 'http://3.39.72.59:3000/'

// API 호출을 위한 함수
function fetchData(url:string, data:any) {
  return new Promise((resolve, reject) => {
    axios.post(api_end_point + url, data)
      .then(response => {
        resolve(response.data); // 성공적으로 응답을 받은 경우 resolve 호출
      })
      .catch(error => {
        reject(error); // API 호출 중 에러가 발생한 경우 reject 호출
      });
  });
}


export const chatSend = async (chat_id:number, id:string, msg:string, type:number) => {
  const postData = {
    chat_id: chat_id,
    id: id,
    msg: msg,
    type: type
  };
  fetchData('chat/send', postData)
  .then(data => {
    console.log('API 데이터:', data);
    // 데이터를 활용하여 추가적인 작업 수행
  })
  .catch(error => {
    console.error('API 호출 에러:', error);
    // 에러 처리
  });
}

export const chatList = async (id:string, type:number) => {
  const postData = {
    id: id,
    type: type,
  };
  fetchData('chat/chat_list', postData)
  .then(data => {
    console.log('API 데이터:', data);
    // 데이터를 활용하여 추가적인 작업 수행
  })
  .catch(error => {
    console.error('API 호출 에러:', error);
    // 에러 처리
  });
}

export const chatContents = async (chat_id:number) => {
  const postData = {
    chat_id: chat_id,
  };
  fetchData('chat/contents', postData)
  .then(data => {
    console.log('API 데이터:', data);
    // 데이터를 활용하여 추가적인 작업 수행
  })
  .catch(error => {
    console.error('API 호출 에러:', error);
    // 에러 처리
  });
}