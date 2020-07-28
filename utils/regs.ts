export const regs = {
    // at least one lowercase, one uppercase, one number, 6-15
    password: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*^.{6,15}$)/
}