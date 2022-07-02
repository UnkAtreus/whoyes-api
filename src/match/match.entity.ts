import { MatchUser } from "src/match-user/match-user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Match {
    @PrimaryGeneratedColumn()
    matchId: number; 

    @ManyToOne(() => MatchUser, (matchuser) => matchuser.matchId, {onDelete: 'CASCADE'})
    matchuser: MatchUser;

    @Column()
    ownerId: number;

    @Column()
    partnerId: number;
}