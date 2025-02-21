/*
 * @Author: KokoTa
 * @Date: 2024-03-06 17:23:30
 * @LastEditTime: 2024-03-06 17:42:03
 * @LastEditors: KokoTa
 * @Description: 
 * @FilePath: \fe-online\src\api\user.ts
 */

import delay from '../utils/delay'
export interface User {
  id: string
  name: string
}
const getUserData = (): User[] => {
  const count = Math.floor(Math.random() * 20)
  return Array(count)
    .fill(0)
    .map(() => {
      return {
        id: Math.random() + '',
        name: (Math.random() + 1).toString(36).substring(7),
      }
    })
}

const query = (params: Partial<User & { orgId: string }>) => {
  return delay(getUserData())
}

const userApi = {
  query,
}

export default userApi
