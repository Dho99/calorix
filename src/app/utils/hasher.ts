import bcrypt from "bcryptjs"

export const hashPassword = (raw: string) => {
    return bcrypt.hash(raw, 10);
}

export const validatePassword = async(hashpass: string, raw: string) => {
    return await bcrypt.compare(raw, hashpass);
} 