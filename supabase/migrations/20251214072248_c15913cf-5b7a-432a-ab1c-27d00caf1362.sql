-- Create enum for user roles
CREATE TYPE public.user_role AS ENUM ('student', 'professional', 'organization');

-- Create enum for gender
CREATE TYPE public.gender AS ENUM ('male', 'female', 'other', 'prefer_not_to_say');

-- Create profiles table for basic user info
CREATE TABLE public.profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  mobile_number TEXT,
  profile_photo_url TEXT,
  city TEXT,
  state TEXT,
  country TEXT,
  date_of_birth DATE,
  gender public.gender,
  role public.user_role NOT NULL,
  preferred_learning_style TEXT,
  time_availability_per_week INTEGER,
  looking_for_short_term TEXT[],
  participated_in_startup_event BOOLEAN DEFAULT FALSE,
  startup_event_description TEXT,
  built_or_launched_product TEXT,
  consent_accurate_details BOOLEAN DEFAULT FALSE,
  consent_receive_communication BOOLEAN DEFAULT FALSE,
  consent_data_usage BOOLEAN DEFAULT FALSE,
  join_whatsapp_community BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create student_details table
CREATE TABLE public.student_details (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE,
  degree_program TEXT,
  specialization TEXT,
  college_name TEXT,
  year_of_study TEXT,
  expected_graduation_year INTEGER,
  college_roll_number TEXT,
  current_goal TEXT,
  open_to_internship BOOLEAN DEFAULT FALSE,
  key_skills TEXT[],
  tools_technologies TEXT[],
  past_projects TEXT,
  resume_url TEXT,
  linkedin_url TEXT,
  github_url TEXT,
  portfolio_url TEXT,
  instagram_url TEXT,
  twitter_url TEXT,
  youtube_url TEXT,
  areas_of_interest TEXT[],
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create professional_details table
CREATE TABLE public.professional_details (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE,
  current_designation TEXT,
  company_name TEXT,
  years_of_experience INTEGER,
  work_domain TEXT,
  area_of_expertise TEXT[],
  willing_to_be_mentor BOOLEAN DEFAULT FALSE,
  willing_to_take_guest_lectures BOOLEAN DEFAULT FALSE,
  open_to_hiring_interns BOOLEAN DEFAULT FALSE,
  linkedin_url TEXT,
  github_url TEXT,
  portfolio_url TEXT,
  resume_url TEXT,
  instagram_url TEXT,
  twitter_url TEXT,
  want_to_join_judging_panels BOOLEAN DEFAULT FALSE,
  want_to_publish_insights BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create organization_details table
CREATE TABLE public.organization_details (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE,
  organization_name TEXT NOT NULL,
  entity_type TEXT,
  industry_sector TEXT,
  website_url TEXT,
  logo_url TEXT,
  company_profile_url TEXT,
  contact_full_name TEXT,
  contact_designation TEXT,
  contact_email TEXT,
  contact_number TEXT,
  collaboration_interests TEXT[],
  explore_strategic_partnership BOOLEAN DEFAULT FALSE,
  recruitment_interest TEXT,
  csr_esg_alignment TEXT,
  open_to_sponsorship TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.student_details ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.professional_details ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.organization_details ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for profiles
CREATE POLICY "Users can view their own profile" ON public.profiles FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own profile" ON public.profiles FOR UPDATE USING (auth.uid() = user_id);

-- Create RLS policies for student_details
CREATE POLICY "Users can view their own student details" ON public.student_details FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own student details" ON public.student_details FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own student details" ON public.student_details FOR UPDATE USING (auth.uid() = user_id);

-- Create RLS policies for professional_details
CREATE POLICY "Users can view their own professional details" ON public.professional_details FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own professional details" ON public.professional_details FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own professional details" ON public.professional_details FOR UPDATE USING (auth.uid() = user_id);

-- Create RLS policies for organization_details
CREATE POLICY "Users can view their own organization details" ON public.organization_details FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own organization details" ON public.organization_details FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own organization details" ON public.organization_details FOR UPDATE USING (auth.uid() = user_id);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_profiles_updated_at
BEFORE UPDATE ON public.profiles
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();