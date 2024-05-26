import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { iNote } from './interfaces/note.interface';

@Injectable()
export class NotesService {
    constructor(@InjectModel('Note') private readonly noteModel:Model<iNote>){

    }
   async getNotas():Promise<iNote[]>{
        return this.noteModel.find({status:true}).exec();
    }
   async getNotasBorradas():Promise<iNote[]>{
        return this.noteModel.find({status:false}).exec();
    }

   async getNotasPerFolder(id_folder:string):Promise<iNote[]>{
        return this.noteModel.find({folderId:id_folder}).exec();
    }

    async saveNota(createNoteDto:CreateNoteDto):Promise<iNote>{
        const createdNote = new this.noteModel(createNoteDto);
        return createdNote.save();
    }
    async editarNota(id: string, updateNoteDto: UpdateNoteDto): Promise<iNote> {
        return this.noteModel.findByIdAndUpdate(id, updateNoteDto, { new: true }).exec();
      }
}
