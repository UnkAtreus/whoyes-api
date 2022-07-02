import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn  } from "typeorm";

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    postId: number;

    @Column()
    title: string

    @Column({ nullable: true })
    description: string

    @CreateDateColumn()
    created: Date

    @Column()
    sexTypeId: number;

    @Column()
    likeId: number;

    @Column()
    commentId: number;

    @Column()
    ownerID: number;

    @UpdateDateColumn()
    updated: Date
}