import { MatchUser } from "src/match-user/match-user.entity";
import { SexType } from "src/sex-type/sex-type.entity";
import { Like } from "src/like/like.entity"
import { Comment } from "src/comment/comment.entity";
import { Column, CreateDateColumn, Entity, OneToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "src/user/user.entity";

@Entity()
export class Posts {
    @PrimaryGeneratedColumn()
    postId: number;

    @OneToMany(() => MatchUser, (matchuser) => matchuser.postId)
    matchuser: MatchUser;

    @Column()
    title: string;

    @Column({ nullable: true })
    description: string;

    @CreateDateColumn()
    created: Date;

    @ManyToOne(() => SexType, (sexType) => sexType.post, {onDelete: 'CASCADE'})
    sexTypeId: SexType;

    @OneToMany(() => Like, (like) => like.postId)
    like: Like[];

    @OneToMany(() => Comment, (comment) => comment.post)
    commentId: Comment[];

    @ManyToOne(() => User, (owner) => owner.post, {onDelete: 'CASCADE'})
    ownerID: User;

    @UpdateDateColumn()
    updated: Date
}