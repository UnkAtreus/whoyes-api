import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { MatchUser } from "src/match-user/match-user.entity"
import { Posts } from "src/post/post.entity"
import { Comment } from "src/comment/comment.entity"
import { Like } from "src/like/like.entity"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    username: string;

    @Column()
    email: string;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    birthDate: Date;

    @Column()
    idCard: string;

    @Column()
    tel: string;

    @Column()
    gender: string;

    @Column()
    targetGender: string;

    @Column()
    sexualOrientation: string;

    @Column()
    password: string;

    @Column()
    height: number;

    @Column()
    weight: number;

    @Column({ nullable: true })
    penisLenght: number;

    @Column({ nullable: true })
    penisGirth: number;

    @Column({ nullable: true })
    breastSize: number;

    @Column({ nullable: true })
    waistSize: number;

    @Column({ nullable: true })
    hipSize: number;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;

    @OneToMany(() => MatchUser, (matchUser) => matchUser.userId)
    matchUser: MatchUser[];

    @OneToMany(() => Posts, (post) => post.ownerID)
    post: Posts[];

    @OneToMany(() => Comment, (comment) => comment.commentatorId)
    comment: Comment[];

    @OneToMany(() => Like, (like) => like.userId,)
    like: Like[];
}