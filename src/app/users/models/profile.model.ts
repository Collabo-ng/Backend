import { Model } from '../../../internal/postgres';
import { Gender, ProfileType } from '../../../enums/enum';

export type Readonly<T> = {
  readonly [K in keyof T]: T[K];
};

export interface UserProfile extends Omit<Readonly<Model>, 'id'> {
  user_id: string;
  profile_type: ProfileType;
}

export interface TeacherProfile extends Omit<Readonly<Model>, 'id'> {
  first_name: string;
  last_name: string;
  slug: string;
  gender: Gender;
  password: string;
  bio?: string;
  phone?: string;
  avatar_key?: string;
  location: {
    city?: string;
    state?: string;
    country?: string;
  };
  teaching_category?: string;
  verified_at?: Date;
  user_id: string;
}

export interface SchoolProfile extends Omit<Readonly<Model>, 'id'> {
  name: string;
  slug: string;
  phone?: string;
  password: string;
  verified_at?: Date;
  user_id: string;
}

export interface CreatorProfile extends Omit<Readonly<Model>, 'id'> {
  first_name: string;
  last_name: string;
  slug: string;
  password: string;
  verified_at?: Date;
  user_id: string;
}