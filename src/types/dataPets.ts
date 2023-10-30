export type PetType  = 'dog' | 'cat' | 'fish';

export interface DataPets  {
    type: PetType,
    image: string,
    name: string,
    color: string,
    sex: 'Masculino'| 'Feminino'
}

