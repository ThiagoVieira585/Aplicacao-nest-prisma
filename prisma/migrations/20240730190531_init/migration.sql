-- CreateTable
CREATE TABLE "pais" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "pais_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "filhos" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "fatherId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "filhos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "pais_email_key" ON "pais"("email");

-- CreateIndex
CREATE UNIQUE INDEX "pais_phone_key" ON "pais"("phone");

-- AddForeignKey
ALTER TABLE "filhos" ADD CONSTRAINT "filhos_fatherId_fkey" FOREIGN KEY ("fatherId") REFERENCES "pais"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
