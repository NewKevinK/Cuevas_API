import { compare, hash } from 'bcryptjs'

const encrypt = async (pass : string) => {
    const hashPass = await hash(pass, 7);
    return hashPass;

};

const comparePass = async (pass : string, hashPass : string) => {
    return await compare(pass, hashPass);
};

export const methods = {encrypt, comparePass};