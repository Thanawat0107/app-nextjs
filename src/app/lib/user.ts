import { db } from "./db";

const getUsers = async () => {
  return await db.user.findMany({
    omit: {
      passwordHash: true,
    },
  });
};

const login = async () => {
    
}
