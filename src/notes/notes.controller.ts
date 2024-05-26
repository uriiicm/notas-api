import { Body, Controller,Get, Param, Post, Put, Req } from '@nestjs/common';
import { NotesService } from 'src/notes/notes.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { iNote } from './interfaces/note.interface';

@Controller('notes')
export class NotesController {
    constructor(private readonly notesService:NotesService){}

    @Get()
    getNotes():Promise<iNote[]>{
        return this.notesService.getNotas();
    }
    @Get('eliminadas')
    getNotesBorradas():Promise<iNote[]>{
        return this.notesService.getNotasBorradas();
    }
    @Get('folder/:folderId')
    getNotesByFolder(@Param('folderId') folderId:string):Promise<iNote[]>{
        return this.notesService.getNotasPerFolder(folderId);
    }

    @Post()
    saveNote(@Body() createNoteDto:CreateNoteDto):Promise<iNote>{
        return this.notesService.saveNota(createNoteDto);
    }

    @Put(':id')
    updateNota(@Param('id') id: string, @Body() updateNoteDto: UpdateNoteDto): Promise<iNote> {
        return this.notesService.editarNota(id, updateNoteDto);
    }

}
