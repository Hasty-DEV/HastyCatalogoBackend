export type OwnerType = {
    id?: number;
    name: string;
    birthday: Date;
    gender: "Male" | "Female" | "Other";
    phone: string;
    cpf: string;
    stores?: object;
    email: string;
    password: string;
    created_at?: Date;
    updated_at?: Date;
}