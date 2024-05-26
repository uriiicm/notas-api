import { IsString,IsBoolean, IsNotEmpty, IsOptional } from "class-validator";

export class CreateNoteDto{
    @IsString()
    @IsNotEmpty()
    readonly title:string;

    @IsString()
    @IsNotEmpty()
    readonly description:string;

    @IsBoolean()
    @IsOptional()
    readonly status:boolean;

    @IsString()
    @IsOptional()
    readonly folderId:string;
}