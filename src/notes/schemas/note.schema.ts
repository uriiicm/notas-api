import {Schema} from 'mongoose';
export const NoteSchema = new Schema({
    title:{type:String, required:true},
    description:{type:String,required:true},
    status: {type: Boolean, required: false,default:true },
    folderId:{type:String,required:false,default:''}
}, { collection: 'notas' });