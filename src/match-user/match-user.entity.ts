import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class MatchUser {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: number

    @Column()
    matchId: number

    @Column()
    postId: number

    @Column()
    status: string

    @Column({ nullable: true })
    score: number

    @Column({ nullable: true })
    description: string
}