import { BasePage } from './base.page';

export class LoginPage extends BasePage {
  // Định nghĩa các phần tử (Locator)
  private readonly usernameInput = this.page.getByRole('textbox', { name: 'Username' });
  private readonly passwordInput = this.page.getByRole('textbox', { name: 'Password' });
  private readonly loginButton = this.page.getByRole('button', { name: 'Login' });

  // Định nghĩa hành động (Actions)
  async login(user: string, pass: string) {
    await this.usernameInput.fill(user);
    await this.passwordInput.fill(pass);
    await this.loginButton.click();
  }
}