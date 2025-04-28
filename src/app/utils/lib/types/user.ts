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

export type UserActivites = BaseModel & {
  id: string;
  userId: string;
  createdAt: Date;
  sleepTrackerId?: String;
  userHydrationId?: String;
  foodLogId?: String;
  physicalActivityLogId?: String;
  category: ACTIVITY_TYPE;

  sleepTracker?: SleepTracker | null;
  userHydration?: UserHydration | null;
  foodLog?: FoodLog | null;
  physicalActivityLog?: PhysicalActivityLog | null;
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
  mealType: string;
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

export type UserCharacteristics = BaseModel & {
  userId: string;
  user: User;

  // Personal Data
  gender: string;
  age: string;
  height: string;
  currentWeight: string;

  // Activity Data
  physicalActivities: string;
  activityFactor: string;
  sportIntensity?: string | null;

  // Lifestyle Data
  mealsPerDay: string;
  sleepHours: string;

  // Calculated Fields
  manualCalorieAdjustment?: string | null;
  bmi?: string | null;
  tdee?: string | null;
  bmr?: string | null;
  bodyFatPercentage?: string | null;
};

export type PhysicalActivityLog = BaseModel & {
  id: string;
  userId: string;
  user: User;
  activityName: string;
  metValue: number;
  duration: number; // dalam menit
  caloriesBurned: number;
};

export type SleepTracker = BaseModel & {
  sleepTime: string;
  wakeTime: string;
  duration: number;
  userActivityId?: string | null;
  user: User;
};

export type BaseModel = {
  id: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
};

export type ACTIVITY_TYPE =
  | "FOOD_LOG"
  | "USER_HYDRATION"
  | "SLEEP_TRACKER"
  | "PHYSICAL_ACTIVITY";