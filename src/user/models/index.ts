import { ID, ISO8601 } from '../../shared/base/models'

export enum UserRole {

}

export interface User {
  id: ID
  username: string
  firstName: string
  lastName: string
  email: string
  createDate: ISO8601
  role: UserRole

  description?: string
}
