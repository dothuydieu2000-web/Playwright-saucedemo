import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import { InventoryPage } from '../../pages/inventory.page';
import { CartPage } from '../../pages/cart.page';

test('Xóa sản phẩm khỏi giỏ hàng', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  // 1. Đăng nhập
  await loginPage.navigate('/login');
  await loginPage.login('standard_user', 'secret_sauce');

  // 2. Thêm sản phẩm vào giỏ
  await inventoryPage.addProductToCart('Sauce Labs Backpack');

  // 3. Đi tới giỏ hàng
  await inventoryPage.goToCart();

  // 4. Xóa sản phẩm
  await cartPage.proceedToRemove('Sauce Labs Backpack');

  // 5. Dòng sản phẩm đó không còn nhìn thấy được nữa
const productRow = page.locator('.cart_item', { hasText: 'Sauce Labs Backpack' });
await expect(productRow).not.toBeVisible();
});