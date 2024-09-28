export type Breed = {
    name: string,
    breed_group: string,
    life_span: string,
    temperament: string
}

export type Animal = {
    id: string,
    url: string,
    breeds?: Breed[]
}