-- CreateTable
CREATE TABLE "filhos" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "fatherId" TEXT NOT NULL,

    CONSTRAINT "filhos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "filhos" ADD CONSTRAINT "filhos_fatherId_fkey" FOREIGN KEY ("fatherId") REFERENCES "pais"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
