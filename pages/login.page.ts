import { BasePage } from './base.page';

export class LoginPage extends BasePage {
  // Định nghĩa các phần tử (Locator)
  private readonly usernameInput = this.page.locator('#user-name');
  private readonly passwordInput = this.page.locator('#password');
  private readonly loginButton = this.page.locator('#login-button');

  // Định nghĩa hành động (Actions)
  async login(user: string, pass: string) {
    await this.usernameInput.fill(user);
    await this.passwordInput.fill(pass);
    await this.loginButton.click();
  }
}