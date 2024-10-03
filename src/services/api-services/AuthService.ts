import { baseApiService } from './BaseApiService';
import { User } from '../../models/entities/User';
import { forgotPassPayload } from 'models/apiPayloads/Auth/forgotPass';

class AuthService {
  static getInstance(): AuthService {
    return new AuthService();
  }

  async login(data: {
    email: string;
    password: string;
  }): Promise<{ user: User; token: string }> {
    return baseApiService.post('/login', data, { extras: { useAuth: false } });
  }

  async loginViaGoogle(data: { token: string }) {
    return baseApiService.post('/auth/google', data);
  }

  async signup(data: {}) {
    return baseApiService.post('/signup', data);
  }

  async fetchMe(): Promise<{ user: User }> {
    return baseApiService.get('/me');
  }

  async forgotPass(data: forgotPassPayload): Promise<{}> {
    return baseApiService.post('/forgot-password', data);
  }

  async isEmailUser(email: string): Promise<Boolean> {
    return baseApiService.get(`/is_email_user/${email}`);
  }
}

export const authService = AuthService.getInstance();
