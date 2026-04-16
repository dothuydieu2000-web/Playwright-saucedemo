import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
test.describe('Login Tests', () => {
// 👉 Data test
const testData = [
    {
        name: 'TC01 - Login success',
        user: 'standard_user',
        pass: 'secret_sauce',
        success: true
    },
    {
        name: 'TC02 - Acc bị blocked',
        user: 'locked_out_user',
        pass: 'secret_sauce',
        success: false,
        error: 'Epic sadface: Sorry, this user has been locked out.'
    },
    {
        name: 'TC03 - Login success',
        user: 'problem_user',
        pass: 'secret_sauce',
        success: true
    },
    {
        name: 'TC04 - Login success',
        user: 'performance_glitch_user',
        pass: 'secret_sauce',
        success: true
    },
    {
        name: 'TC05 - Login success',
        user: 'error_user',
        pass: 'secret_sauce',
        success: true
    },
    {
        name: 'TC06 - Login success',
        user: 'visual_user',
        pass: 'secret_sauce',
        success: true
    },
    {
        name: 'TC07 - Sai username/password',
        user: 'standard_user',
        pass: 'wrong',
        success: false,
        error: 'Epic sadface: Username and password do not match any user in this service'
    },
    {
        name: 'TC08 - Bỏ trống Username',
        user: '',
        pass: '123',
        success: false,
        error: 'Epic sadface: Username is required'
    },
    {
        name: 'TC09 - Bỏ trống Password',
        user: 'standard_user',
        pass: '',
        success: false,
        error: 'Epic sadface: Password is required'
    }
];

// 👉 Sử dụng loop
test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate('/');
});

for (const data of testData) {
  test(data.name, async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login(data.user, data.pass);

    if (data.success) {
      await expect(page).toHaveURL(/inventory/);
    } else {
      await expect(page.locator('[data-test="error"]')).toBeVisible();
    }
  });
}
})