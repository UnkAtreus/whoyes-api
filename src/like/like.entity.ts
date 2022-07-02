import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Like {
    @PrimaryGeneratedColumn()
    likeId: number;

    @Column()
    userId: number
}