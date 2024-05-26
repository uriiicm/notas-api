import { IsString,IsBoolean, IsNotEmpty, IsOptional } from "class-validator";

export class UpdateNoteDto{
    @IsString()
    @IsOptional()
    readonly title?:string;

    @IsString()
    @IsOptional()
    readonly description?:string;

    @IsBoolean()
    @IsOptional()
    readonly status?:boolean;

    @IsString()
    @IsOptional()
    readonly folderId?:string;
}