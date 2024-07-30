/*
  Warnings:

  - You are about to drop the `filhos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "filhos" DROP CONSTRAINT "filhos_fatherId_fkey";

-- DropTable
DROP TABLE "filhos";
