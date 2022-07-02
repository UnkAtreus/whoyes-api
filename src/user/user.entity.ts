import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    username: string;

    @Column()
    email: string

    @Column()
    firstname: string

    @Column()
    lastname: string

    @Column()
    birthDate: Date

    @Column()
    idCard: string

    @Column()
    tel: string

    @Column()
    gender: string

    @Column()
    targetGender: string

    @Column()
    sexualOrientation: string

    @Column()
    password: string

    @Column()
    height: number

    @Column()
    weight: number

    @Column()
    penisLenght: number

    @Column()
    penisGirth: number

    @Column()
    breastSize: number

    @Column()
    waistSize: number

    @Column()
    hipSize: number

    @CreateDateColumn()
    created: Date

    @UpdateDateColumn()
    updated: Date

}