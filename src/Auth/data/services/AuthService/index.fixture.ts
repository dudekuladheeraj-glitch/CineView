import type { AuthService } from './index'

export class AuthServiceFixture implements AuthService {
  async login(): Promise<boolean> {
    return true
  }
}
