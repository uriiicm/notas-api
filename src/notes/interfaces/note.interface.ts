import Document from 'mongoose';
export interface iNote extends Document{
    readonly title: string;
    readonly description: string;
    readonly status:boolean;
    readonly folderId: string;
}

