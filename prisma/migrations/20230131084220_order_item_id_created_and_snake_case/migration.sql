/*
  Warnings:

  - The primary key for the `orderitem` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `orderId` on the `orderitem` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `orderitem` table. All the data in the column will be lost.
  - Added the required column `id` to the `OrderItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `order_id` to the `OrderItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `orderitem` DROP FOREIGN KEY `OrderItem_orderId_fkey`;

-- DropForeignKey
ALTER TABLE `orderitem` DROP FOREIGN KEY `OrderItem_productId_fkey`;

-- AlterTable
ALTER TABLE `orderitem` DROP PRIMARY KEY,
    DROP COLUMN `orderId`,
    DROP COLUMN `productId`,
    ADD COLUMN `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    ADD COLUMN `order_id` INTEGER UNSIGNED NOT NULL,
    MODIFY `product_id` INTEGER UNSIGNED NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `OrderItem` ADD CONSTRAINT `OrderItem_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `Order`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderItem` ADD CONSTRAINT `OrderItem_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
