import { Posts } from "src/post/post.entity";
import { User } from "src/user/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Like {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Posts, (post) => post.like, {onDelete: 'CASCADE'})
    postId: Posts;

    @ManyToOne(() => User, (userId) => userId.like)
    userId: User;
}