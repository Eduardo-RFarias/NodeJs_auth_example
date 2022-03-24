import passport from "passport";
import { Strategy, VerifyFunction } from "passport-local";
import User from "../models/User";

const authUser: VerifyFunction = async (
  cpf: string,
  password: string,
  next
) => {
  let user: User | null = null;

  try {
    user = await User.findOneBy({
      cpf,
    });
  } catch (error) {
    return next(error, false);
  }

  if (!user || !(await user.comparePassword(password))) {
    return next(null, false);
  }

  return next(null, user);
};

interface SerializedUser {
  id: number;

  name: string;
}

passport.use(new Strategy({ usernameField: "cpf" }, authUser));

passport.serializeUser((user, next) => {
  const parsedUser = user as User;
  const serializedUser: SerializedUser = {
    id: parsedUser.id,
    name: parsedUser.name,
  };

  next(null, serializedUser);
});

passport.deserializeUser((user, next) => {
  next(null, user as SerializedUser);
});

export default passport;
