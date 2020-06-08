import { User, UserRole } from './index'
import { IsEmail, IsEnum, IsISO8601, IsOptional, IsString } from 'class-validator'
import { ID, ISO8601 } from '../../shared/base/models'

export class CreateUserDto implements Omit<User, 'createDate' | 'id'> {

  @IsEmail()
  public email: string

  @IsString()
  public firstName: string

  @IsString()
  public lastName: string

  @IsEnum(UserRole)
  public role: UserRole

  @IsString()
  public username: string

  @IsOptional()
  @IsString()
  public description?: string

}

export class UpdateUserDto implements User {

  @IsISO8601()
  public createDate: ISO8601
  public email: string
  public firstName: string
  public id: ID
  public lastName: string
  public role: UserRole
  public username: string

  @IsOptional()
  @IsString()
  public description?: string
}
