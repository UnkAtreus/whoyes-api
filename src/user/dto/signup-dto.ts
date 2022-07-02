import { IsEmpty } from "class-validator";


export class SignUpDto {
    @IsEmpty()
    username: string

    @IsEmpty()
    email: string

    @IsEmpty()
    firstname: string

    @IsEmpty()
    lastname: string

    @IsEmpty()
    birthDate: Date

    @IsEmpty()
    idCard: string

    @IsEmpty()
    tel: string

    @IsEmpty()
    gender: string

    @IsEmpty()
    targetGender: string

    @IsEmpty()
    sexualOrientation: string

    @IsEmpty()
    height: number

    @IsEmpty()
    weight: number

    @IsEmpty()
    penisLenght: number

    @IsEmpty()
    penisGirth: number

    @IsEmpty()
    breastSize: number

    @IsEmpty()
    waistSize: number

    @IsEmpty()
    hipSize: number

    @IsEmpty()
    password: string

}