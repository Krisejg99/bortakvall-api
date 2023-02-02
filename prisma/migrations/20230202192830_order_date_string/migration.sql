/*
  Warnings:

  - You are about to alter the column `created_at` on the `order` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `updated_at` on the `order` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `order` MODIFY `created_at` DATETIME NULL,
    MODIFY `order_date` VARCHAR(191) NULL,
    MODIFY `updated_at` DATETIME NULL;
