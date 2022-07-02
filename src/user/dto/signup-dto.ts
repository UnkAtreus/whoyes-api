import { IsEmpty, IsOptional } from "class-validator";


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

    @IsOptional()
    penisLenght?: number

    @IsOptional()
    penisGirth?: number

    @IsOptional()
    breastSize?: number

    @IsOptional()
    waistSize?: number

    @IsOptional()
    hipSize?: number

    @IsEmpty()
    password: string

}