import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { Length } from "class-validator";
import bcrypt from "bcrypt";

@Entity()
class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @Length(11, 11)
  cpf: string;

  @Column({ nullable: true })
  name: string;

  @Column()
  @Length(59, 60)
  password: string;

  public comparePassword(passwordToCompare: string) {
    return bcrypt.compare(passwordToCompare, this.password);
  }

  public toJSON() {
    return { cpf: this.cpf, name: this.name };
  }
}

export default User;
