-- AlterTable
ALTER TABLE "UserCharacteristics" ADD COLUMN     "isDeleted" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "targetTime" DROP NOT NULL,
ALTER COLUMN "sportIntensity" DROP NOT NULL,
ALTER COLUMN "manualCalorieAdjustment" DROP NOT NULL,
ALTER COLUMN "bmi" DROP NOT NULL,
ALTER COLUMN "tdee" DROP NOT NULL,
ALTER COLUMN "bmr" DROP NOT NULL;

-- CreateTable
CREATE TABLE "PhysicalActivityLog" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "activityName" TEXT NOT NULL,
    "metValue" DOUBLE PRECISION NOT NULL,
    "duration" INTEGER NOT NULL,
    "caloriesBurned" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PhysicalActivityLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FoodLog" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "foodName" TEXT NOT NULL,
    "calories" DOUBLE PRECISION NOT NULL,
    "mealType" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FoodLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserActivites" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "calories" TEXT NOT NULL,
    "heartRate" TEXT NOT NULL,
    "steps" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserActivites_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserActivites_userId_key" ON "UserActivites"("userId");

-- AddForeignKey
ALTER TABLE "PhysicalActivityLog" ADD CONSTRAINT "PhysicalActivityLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodLog" ADD CONSTRAINT "FoodLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserActivites" ADD CONSTRAINT "UserActivites_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
