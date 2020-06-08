import { User, UserRole } from '../models'
import { ID, ISO8601 } from '../../shared/base/models'
import { Column, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm'

export class UserEntity implements User {

  @PrimaryGeneratedColumn()
  public id: ID

  @CreateDateColumn()
  public createDate: ISO8601

  @Column({ unique: true })
  public email: string

  @Column()
  public firstName: string

  @Column()
  public lastName: string

  @Column({
    type: 'enum',
    enum: UserRole
  })
  public role: UserRole

  @Column({ unique: true })
  public username: string

  @Column({ default: '' })
  public description: string
}
