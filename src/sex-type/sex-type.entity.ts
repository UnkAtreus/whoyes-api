import { Post } from "src/post/post.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SexType {
    @PrimaryGeneratedColumn()
    sexTypeId: number;

    @OneToMany(() => Post, (post) => post.sexTypeId)
    post: Post[];

    @Column({ unique: true })
    type: string;
}