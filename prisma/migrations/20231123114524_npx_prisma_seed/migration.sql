/*
  Warnings:

  - Added the required column `quantity` to the `stock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `available` to the `desk` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_stock" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "productId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    CONSTRAINT "stock_productId_fkey" FOREIGN KEY ("productId") REFERENCES "product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_stock" ("id", "productId") SELECT "id", "productId" FROM "stock";
DROP TABLE "stock";
ALTER TABLE "new_stock" RENAME TO "stock";
CREATE UNIQUE INDEX "stock_productId_key" ON "stock"("productId");
CREATE TABLE "new_desk" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "available" BOOLEAN NOT NULL
);
INSERT INTO "new_desk" ("description", "id") SELECT "description", "id" FROM "desk";
DROP TABLE "desk";
ALTER TABLE "new_desk" RENAME TO "desk";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
