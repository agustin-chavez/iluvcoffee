import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Flavor} from './flavor.entity';

@Entity() // sql table === 'coffee' if no name is provided
export class Coffee {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ nullable: true })
    description: string;

    @Column()
    brand: string;

    @Column({ default: 0 })
    recommendations: number;

    @JoinTable() // specifies the owner side of the relationship
    @ManyToMany(
        type => Flavor,
        (flavor) => flavor.coffees,
        {
            cascade: true, // ['insert']
        }
    )
    flavors: Flavor[];
}