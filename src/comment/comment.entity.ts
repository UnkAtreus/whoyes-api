import { Posts } from "src/post/post.entity";
import { User } from "src/user/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    commentId: number;

    @ManyToOne(() => Posts, (post) => post.commentId)
    post: Posts;

    @ManyToOne(() => User, (commentator) => commentator.comment)
    commentatorId: User;

    @Column()
    comment: string;

    @UpdateDateColumn()
    updated: Date;
}