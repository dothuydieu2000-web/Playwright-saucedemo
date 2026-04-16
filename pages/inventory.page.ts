import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class InventoryPage extends BasePage {
  readonly productList = this.page.locator('.inventory_item');
  
  // Hàm thêm sản phẩm vào giỏ hàng bằng tên
  async addProductToCart(productName: string) {
    const product = this.productList.filter({ hasText: productName });
    await product.getByRole('button', { name: 'Add to cart' }).click();
  }

  // Hàm đi tới giỏ hàng
  async goToCart() {
    await this.page.locator('.shopping_cart_link').click();
  }
}