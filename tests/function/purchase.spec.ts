import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import { InventoryPage } from '../../pages/inventory.page';
import { CartPage } from '../../pages/cart.page';

test('Mua hàng thành công từ trang danh sách sản phẩm', async ({ page }) => {
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

  // 4. Thanh toán
  await cartPage.proceedToCheckout();

  // 5. Kiểm tra kết quả
  await expect(page).toHaveURL(/checkout-step-one.html/);
});