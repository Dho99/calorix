export type Register = {
  email: string;
  password: string;
  name: string;
  username: string;
};

export type User = {
    name?: string;
    email: string;
    emailVerified?: Date;
    image?: string;
    password?: string;
    username?: string;
    Chatbot: Chatbot[];
    UserCharacteristic?: UserCharacteristics;
    PhysicalActivityLog: PhysicalActivityLog[];
    UserActivites: UserActivites[];
    FoodLog: FoodLog[];
    UserHydration?: UserHydration;
};

export type UserActivites = {
  id: string;
  userId: string;
  activityName: string;
  caloriesBurned: number;
  createdAt: Date;
};

export type FoodLog = {
  id: string;
  userId: string;
  foodName: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  createdAt: Date;
  updatedAt: Date;
};

export type UserHydration = {
  id: string;
  userId: string;
  waterIntake: number; // dalam liter
  createdAt: Date;
};

export type Chatbot = {
  id: string;
  userId: string;
  message: string;
  response: string;
  createdAt: Date;
};

export type UserCharacteristics = {
  id: string;
  userId: string;
  gender: string;
  age: string;
  height: string;
  currentWeight: string;
  targetWeight: string;
  targetTime?: string;
  physicalActivities: string;
  goal: string;
  activityFactor: string;
  mealsPerDay: string;
  waterIntake: string;
  sleepHours: string;
  workoutsPerWeek: string;
  workoutDuration: string;
  caloriesPerDay: string;
  sportIntensity?: string;
  manualCalorieAdjustment?: string;
  bmi?: string;
  tdee?: string;
  bmr?: string;
  bodyFatPercentage?: string;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type PhysicalActivityLog = {
    id: string;
    userId: string;
    user: User;
    activityName: string;
    metValue: number;
    duration: number; // dalam menit
    caloriesBurned: number;
    createdAt: Date;
};


