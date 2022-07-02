import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Match {
    @PrimaryGeneratedColumn()
    matchId: number;

    @Column()
    ownerId: number

    @Column()
    partnerId: number
}