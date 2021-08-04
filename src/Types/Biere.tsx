

export interface IBiere {
    nom: string,
    ABV: string,
    SRM?: string,
    IBU?: string,
    style: string,
    saisonniere: number
}

export const defaultBiere : IBiere = {
    nom: '',
    ABV: '',
    SRM: '',
    IBU: '',
    style: 'IPA',
    saisonniere: 0
}

// class Biere implements IBiere {
//     constructor(Options?: IBiere) {
//         return { ...defaultBiere, ...Options };
//     }
// }
