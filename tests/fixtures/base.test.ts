import { test as base } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';

// Tạo fixture tùy chỉnh
export const test = base.extend<{ loginPage: LoginPage }>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    // Tự động vào trang login và đăng nhập trước mỗi test
    await loginPage.navigate('/login');
    await loginPage.login('standard_user', 'secret_sauce');
    await use(loginPage);
  },
});

export { expect } from '@playwright/test';