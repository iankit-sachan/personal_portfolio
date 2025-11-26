import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Profile = {
  id: string;
  full_name: string;
  title: string;
  email: string;
  phone: string;
  bio: string;
  profile_image_url: string | null;
  github_url: string;
  linkedin_url: string;
  location: string;
  created_at: string;
  updated_at: string;
};

export type Education = {
  id: string;
  profile_id: string;
  degree: string;
  institution: string;
  university: string;
  start_year: number;
  end_year: number;
  location: string;
  sort_order: number;
  created_at: string;
};

export type Experience = {
  id: string;
  profile_id: string;
  title: string;
  company: string;
  location: string;
  start_date: string;
  end_date: string;
  description: string;
  responsibilities: string[];
  type: string;
  duration: string;
  link_url: string | null;
  sort_order: number;
  created_at: string;
};

export type Project = {
  id: string;
  profile_id: string;
  title: string;
  description: string;
  detailed_description: string[];
  technologies: string[];
  project_url: string | null;
  github_url: string | null;
  image_url: string | null;
  year: number;
  featured: boolean;
  sort_order: number;
  created_at: string;
};

export type Certification = {
  id: string;
  profile_id: string;
  title: string;
  issuing_organization: string;
  issue_year: number;
  certificate_url: string | null;
  credential_id: string | null;
  sort_order: number;
  created_at: string;
};

export type Skill = {
  id: string;
  profile_id: string;
  category: string;
  name: string;
  proficiency: string;
  sort_order: number;
  created_at: string;
};

export type Achievement = {
  id: string;
  profile_id: string;
  type: string;
  title: string | null;
  description: string;
  sort_order: number;
  created_at: string;
};
