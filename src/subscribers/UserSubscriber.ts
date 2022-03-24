import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  UpdateEvent,
} from "typeorm";
import bcrypt from "bcrypt";
import { validate } from "class-validator";
import User from "../models/User";
import ValidationError from "../errors/ValidationError";

@EventSubscriber()
class UserSubscriber implements EntitySubscriberInterface<User> {
  listenTo() {
    return User;
  }

  async beforeInsert(event: InsertEvent<User>) {
    const { password } = event.entity;
    // eslint-disable-next-line no-param-reassign
    event.entity.password = await bcrypt.hash(password, 10);

    const errors = await validate(event.entity);
    if (errors.length > 0) {
      throw new ValidationError(errors);
    }
  }

  async beforeUpdate(event: UpdateEvent<User>) {
    if (!event.entity) {
      return;
    }

    const oldPassword = event.databaseEntity.password;
    const newPassword = event.entity.password;

    if (oldPassword !== newPassword) {
      // eslint-disable-next-line no-param-reassign
      event.entity.password = await bcrypt.hash(newPassword, 10);
    }

    const errors = await validate(event.entity);
    if (errors.length > 0) {
      throw new ValidationError(errors);
    }
  }
}

export default UserSubscriber;
