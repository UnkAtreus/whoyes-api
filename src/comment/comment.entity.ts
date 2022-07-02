import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    commentId: number;

    @Column()
    commentatorId: number

    @Column()
    comment: string

    @UpdateDateColumn()
    updated: Date
}