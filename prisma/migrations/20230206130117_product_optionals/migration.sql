/*
  Warnings:

  - You are about to alter the column `created_at` on the `order` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `updated_at` on the `order` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - Made the column `stock_quantity` on table `product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `order` MODIFY `created_at` DATETIME NULL,
    MODIFY `updated_at` DATETIME NULL;

-- AlterTable
ALTER TABLE `product` MODIFY `on_sale` BOOLEAN NULL DEFAULT false,
    ALTER COLUMN `stock_status` DROP DEFAULT,
    MODIFY `stock_quantity` INTEGER UNSIGNED NOT NULL;
