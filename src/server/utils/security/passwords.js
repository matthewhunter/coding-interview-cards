import bcrypt from 'bcrypt';

// Takes a plaintext password and returns a salted hash
export const HashPassword = password => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
}

// Takes a plaintext and hashed password and returns true/false
export const ComparePassword = (password, hash) => bcrypt.compareSync(password, hash);