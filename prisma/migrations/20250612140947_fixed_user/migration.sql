-- AlterTable
ALTER TABLE `user` ADD COLUMN `resetToken` VARCHAR(255) NULL,
    ADD COLUMN `resetTokenExpires` DATETIME(3) NULL;
