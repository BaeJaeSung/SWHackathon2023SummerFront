import { getServerSession } from "next-auth"
import { authOption } from "@/app/api/auth/[...nextauth]/route"
import axios from 'axios'

export const getSession = async () => {
  return await getServerSession(authOption)
}


const api_end_point = 'http://3.39.72.59:3000/'

// API 호출을 위한 함수
function fetchData(url: string, data: any): Promise<any> {
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


export const userJoin = async (id: string, pw: string, nickname: string, type: number, age: number) => {
  const postData = {
    id: id,
    pw: pw,
    nickname: nickname,
    type: type,
    age: age
  };
  fetchData('user/join', postData)
    .then(data => {
      console.log('API 데이터:', data);
      // 데이터를 활용하여 추가적인 작업 수행
    })
    .catch(error => {
      console.error('API 호출 에러:', error);
      // 에러 처리
    });
}

export const userLogin = async (id: string, pw: string) => {
  const postData = {
    id: id,
    pw: pw,
  };
  fetchData('user/login', postData)
    .then(data => {
      console.log('API 데이터:', data);
      // 데이터를 활용하여 추가적인 작업 수행
    })
    .catch(error => {
      console.error('API 호출 에러:', error);
      // 에러 처리
    });
}

export const matchLoadCandidateHiki = async (id: string) => {
  const postData = {
    id: id,
  };
  fetchData('match/load_candidate_hiki', postData)
    .then(data => {
      console.log('API 데이터:', data);
      // 데이터를 활용하여 추가적인 작업 수행
    })
    .catch(error => {
      console.error('API 호출 에러:', error);
      // 에러 처리
    });
}

export const matchLoadCandidateCeo = async (id: string) => {
  const postData = {
    id: id,
  };
  fetchData('match/load_candidate_ceo', postData)
    .then(data => {
      console.log('API 데이터:', data);
      // 데이터를 활용하여 추가적인 작업 수행
    })
    .catch(error => {
      console.error('API 호출 에러:', error);
      // 에러 처리
    });
}

export const chatSend = async (chat_id: number, id: string, msg: string, type: number) => {
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

export const chatList = async (id: string, type: number) => {
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

export const chatContents = async (chat_id: number) => {
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

export const matchChoice = async (id: string, type: number, receiver_id: string, choice: number) => {
  const postData = {
    id: id,
    type: type,
    receiver_id: receiver_id,
    choice: choice
  };
  fetchData('match/choice', postData)
    .then(data => {
      console.log('API 데이터:', data);
      // 데이터를 활용하여 추가적인 작업 수행
    })
    .catch(error => {
      console.error('API 호출 에러:', error);
      // 에러 처리
    });
}

export const matchReceived = async (id: string, type: number) => {
  const postData = {
    id: id,
    type: type
  };
  return fetchData('match/received', postData)
    .then(data => {
      return data.map(({ name, type, intro }: any) => { return { name, type, intro } })
    })
    .catch(error => {
      console.error('API 호출 에러:', error);
      // 에러 처리
    });
}

export const matchMyApply = async (id: string, type: number) => {
  const postData = {
    id: id,
    type: type
  };
  return fetchData('match/my_apply', postData)
    .then(data => {
      return data.map(({ name, type, intro }: any) => { return { name, type, intro } })
    })
    .catch(error => {
      console.error('API 호출 에러:', error);
      // 에러 처리
    });
}

export const userRegisterProfileText = async (id: string, info: string) => {
  const postData = {
    id: id,
    info: info
  };
  fetchData('user/register_profile_text', postData)
    .then(data => {
      console.log('API 데이터:', data);
      // 데이터를 활용하여 추가적인 작업 수행
    })
    .catch(error => {
      console.error('API 호출 에러:', error);
      // 에러 처리
    });
}

export const userRegisterProfileStudyCareer = async (id: string, study_career: string) => {
  const postData = {
    id: id,
    study_career: study_career
  };
  fetchData('user/register_profile_study_career', postData)
    .then(data => {
      console.log('API 데이터:', data);
      // 데이터를 활용하여 추가적인 작업 수행
    })
    .catch(error => {
      console.error('API 호출 에러:', error);
      // 에러 처리
    });
}

export const userRegisterCareer = async (id: string, company_name: string, period: string, experience: string) => {
  const postData = {
    id: id,
    company_name: company_name,
    period: period,
    experience: experience
  };
  fetchData('user/register_career', postData)
    .then(data => {
      console.log('API 데이터:', data);
      // 데이터를 활용하여 추가적인 작업 수행
    })
    .catch(error => {
      console.error('API 호출 에러:', error);
      // 에러 처리
    });
}

export const userMyInfo = async (id: string) => {
  const postData = {
    id: id
  };
  fetchData('user/my_info', postData)
    .then(data => {
      console.log('API 데이터:', data);
      // 데이터를 활용하여 추가적인 작업 수행
    })
    .catch(error => {
      console.error('API 호출 에러:', error);
      // 에러 처리
    });
}

export const chatgptCreate = async (id: string, nickname: string, age: number, company_name: string, period: string, experience: string, study_career: string) => {
  const postData = {
    id: id,
    nickname: nickname,
    age: age,
    company_name: company_name,
    period: period,
    experience: experience,
    study_career: study_career
  };
  fetchData('chatgpt/create', postData)
    .then(data => {
      console.log('API 데이터:', data);
      // 데이터를 활용하여 추가적인 작업 수행
    })
    .catch(error => {
      console.error('API 호출 에러:', error);
      // 에러 처리
    });
}