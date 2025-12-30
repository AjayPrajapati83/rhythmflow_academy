export interface Profile {
  id: string;
  email: string;
  full_name?: string;
  phone?: string;
  address_line?: string;
  city?: string;
  state?: string;
  pincode?: string;
  dance_experience?: string;
  preferred_styles?: string[];
  avatar_url?: string;
  role: 'student' | 'admin';
  created_at: string;
  updated_at: string;
}

export interface Course {
  id: string;
  title: string;
  description?: string;
  instructor_name?: string;
  instructor_bio?: string;
  instructor_image?: string;
  dance_style: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  price: number;
  duration_weeks?: number;
  thumbnail_url?: string;
  video_url?: string;
  curriculum?: any;
  is_popular: boolean;
  created_at: string;
  updated_at: string;
}

export interface Enrollment {
  id: string;
  user_id: string;
  course_id: string;
  progress: number;
  enrolled_at: string;
  last_accessed?: string;
  completed: boolean;
  course?: Course;
}

export interface Order {
  id: string;
  user_id: string;
  course_id: string;
  amount: number;
  transaction_id: string;
  payment_method?: string;
  status: string;
  created_at: string;
  course?: Course;
}

export interface CartItem {
  id: string;
  user_id: string;
  course_id: string;
  added_at: string;
  course?: Course;
}

export interface Review {
  id: string;
  user_id: string;
  course_id: string;
  rating: number;
  comment?: string;
  approved: boolean;
  created_at: string;
  profile?: Profile;
}
