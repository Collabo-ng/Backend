import { Document, model, Model, Schema, SchemaTimestampsConfig } from 'mongoose';

type UserDocument = Document & SchemaTimestampsConfig & {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  verifiedAt?: Date | null;
  deletedAt?: Date | null;
}

const UserSchema: Schema<UserDocument> = new Schema<UserDocument>({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  verifiedAt: {
    type: Date,
    default: null,
  },
  deletedAt: {
    type: Date,
    default: null,
  }
}, {
  timestamps: true,
});

const User: Model<UserDocument> = model('User', UserSchema);

export { User, UserDocument };