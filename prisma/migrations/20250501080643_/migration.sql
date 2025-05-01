-- CreateTable
CREATE TABLE "UserTraining" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "trainingName" TEXT NOT NULL,
    "trainingType" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "caloriesBurned" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserTraining_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserTraining" ADD CONSTRAINT "UserTraining_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
