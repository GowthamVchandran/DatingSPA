import { photos } from './Photo';

export interface User {

    id: number;
    userName: string;
    gender: string;
    age: number;
    knownAs: string;
    createed: Date;
    lastActive: Date;
    city: string;
    country: string;
    photoURL: string;
    introduction?: string;
    lookingFor?: string;
    interest?: string;
    photos?: photos[];
}
