/*
  Warnings:

  - You are about to drop the column `categotyId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the `Categoty` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `categoryId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[Product] DROP CONSTRAINT [Product_categotyId_fkey];

-- AlterTable
ALTER TABLE [dbo].[Product] DROP COLUMN [categotyId];
ALTER TABLE [dbo].[Product] ADD [categoryId] NVARCHAR(1000) NOT NULL;

-- DropTable
DROP TABLE [dbo].[Categoty];

-- CreateTable
CREATE TABLE [dbo].[Category] (
    [id] NVARCHAR(1000) NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Category_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[Product] ADD CONSTRAINT [Product_categoryId_fkey] FOREIGN KEY ([categoryId]) REFERENCES [dbo].[Category]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
