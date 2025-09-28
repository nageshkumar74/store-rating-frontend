export const isEmail = (email: string) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}$/i.test(email);

export const isPasswordStrong = (password: string) =>
    password.length >= 8;

export const isNotEmpty = (value: string) =>
    value.trim() !== '';
