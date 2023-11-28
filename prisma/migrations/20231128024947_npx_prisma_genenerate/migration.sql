/*
  Warnings:

  - You are about to drop the column `quatity` on the `orderItem` table. All the data in the column will be lost.
  - Added the required column `quantity` to the `orderItem` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_orderItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "quantity" INTEGER NOT NULL,
    "orderId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    CONSTRAINT "orderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "order" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "orderItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_orderItem" ("id", "orderId", "productId") SELECT "id", "orderId", "productId" FROM "orderItem";
DROP TABLE "orderItem";
ALTER TABLE "new_orderItem" RENAME TO "orderItem";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
