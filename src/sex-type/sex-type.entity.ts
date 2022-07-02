import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SexType {
    @PrimaryGeneratedColumn()
    sexTypeId: number;

    @Column({ unique: true })
    type: string;
}