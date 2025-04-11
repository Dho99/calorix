import {prisma} from "../lib/prisma/prisma";

export const findUser = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if(!user) return {success: false, message: "User not found"};

  return {
    success: true,
    data: user
  };
}