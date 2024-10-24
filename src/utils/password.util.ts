import * as bcrypt from 'bcrypt';

export class PasswordUtil {
  static generatePassword = async (password: string, saltRounds = 10): Promise<string> => {
    return bcrypt.hash(password, saltRounds);
  };

  static verifyPassword = async (password: string, passwordHash: string): Promise<boolean> => {
    return bcrypt.compare(password, passwordHash);
  };
}