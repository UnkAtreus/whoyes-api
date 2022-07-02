import { MatchUser } from "src/match-user/match-user.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Match {
    @PrimaryGeneratedColumn()
    matchId: number; 

    @OneToMany(() => MatchUser, (matchuser) => matchuser.matchId)
    matchuser: MatchUser;

    @Column()
    ownerId: number;

    @Column()
    partnerId: number;
}