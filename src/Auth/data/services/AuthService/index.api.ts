import type { AuthService } from './index'

export class AuthServiceAPI implements AuthService {
  async login(): Promise<boolean> {
    return true
  }
}
