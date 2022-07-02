import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "src/user/user.entity"
import { Match } from "src/match/match.entity"
import { Posts } from "src/post/post.entity"

@Entity()
export class MatchUser {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user) => user.matchUser, {onDelete: 'CASCADE'})
    userId: User;

    @OneToMany(() => Match, (match) => match.matchuser, {onDelete: 'CASCADE'})
    matchId: Match;

    @OneToMany(() => Posts, (post) => post.matchuser, {onDelete: 'CASCADE'})
    postId: Posts;

    @Column()
    status: string;

    @Column({ nullable: true })
    score: number;

    @Column({ nullable: true })
    description: string;
}