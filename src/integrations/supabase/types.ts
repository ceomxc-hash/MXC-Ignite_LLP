export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      organization_details: {
        Row: {
          collaboration_interests: string[] | null
          company_profile_url: string | null
          contact_designation: string | null
          contact_email: string | null
          contact_full_name: string | null
          contact_number: string | null
          created_at: string
          csr_esg_alignment: string | null
          entity_type: string | null
          explore_strategic_partnership: boolean | null
          id: string
          industry_sector: string | null
          logo_url: string | null
          open_to_sponsorship: string | null
          organization_name: string
          recruitment_interest: string | null
          user_id: string
          website_url: string | null
        }
        Insert: {
          collaboration_interests?: string[] | null
          company_profile_url?: string | null
          contact_designation?: string | null
          contact_email?: string | null
          contact_full_name?: string | null
          contact_number?: string | null
          created_at?: string
          csr_esg_alignment?: string | null
          entity_type?: string | null
          explore_strategic_partnership?: boolean | null
          id?: string
          industry_sector?: string | null
          logo_url?: string | null
          open_to_sponsorship?: string | null
          organization_name: string
          recruitment_interest?: string | null
          user_id: string
          website_url?: string | null
        }
        Update: {
          collaboration_interests?: string[] | null
          company_profile_url?: string | null
          contact_designation?: string | null
          contact_email?: string | null
          contact_full_name?: string | null
          contact_number?: string | null
          created_at?: string
          csr_esg_alignment?: string | null
          entity_type?: string | null
          explore_strategic_partnership?: boolean | null
          id?: string
          industry_sector?: string | null
          logo_url?: string | null
          open_to_sponsorship?: string | null
          organization_name?: string
          recruitment_interest?: string | null
          user_id?: string
          website_url?: string | null
        }
        Relationships: []
      }
      professional_details: {
        Row: {
          area_of_expertise: string[] | null
          company_name: string | null
          created_at: string
          current_designation: string | null
          github_url: string | null
          id: string
          instagram_url: string | null
          linkedin_url: string | null
          open_to_hiring_interns: boolean | null
          portfolio_url: string | null
          resume_url: string | null
          twitter_url: string | null
          user_id: string
          want_to_join_judging_panels: boolean | null
          want_to_publish_insights: boolean | null
          willing_to_be_mentor: boolean | null
          willing_to_take_guest_lectures: boolean | null
          work_domain: string | null
          years_of_experience: number | null
        }
        Insert: {
          area_of_expertise?: string[] | null
          company_name?: string | null
          created_at?: string
          current_designation?: string | null
          github_url?: string | null
          id?: string
          instagram_url?: string | null
          linkedin_url?: string | null
          open_to_hiring_interns?: boolean | null
          portfolio_url?: string | null
          resume_url?: string | null
          twitter_url?: string | null
          user_id: string
          want_to_join_judging_panels?: boolean | null
          want_to_publish_insights?: boolean | null
          willing_to_be_mentor?: boolean | null
          willing_to_take_guest_lectures?: boolean | null
          work_domain?: string | null
          years_of_experience?: number | null
        }
        Update: {
          area_of_expertise?: string[] | null
          company_name?: string | null
          created_at?: string
          current_designation?: string | null
          github_url?: string | null
          id?: string
          instagram_url?: string | null
          linkedin_url?: string | null
          open_to_hiring_interns?: boolean | null
          portfolio_url?: string | null
          resume_url?: string | null
          twitter_url?: string | null
          user_id?: string
          want_to_join_judging_panels?: boolean | null
          want_to_publish_insights?: boolean | null
          willing_to_be_mentor?: boolean | null
          willing_to_take_guest_lectures?: boolean | null
          work_domain?: string | null
          years_of_experience?: number | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          built_or_launched_product: string | null
          city: string | null
          consent_accurate_details: boolean | null
          consent_data_usage: boolean | null
          consent_receive_communication: boolean | null
          country: string | null
          created_at: string
          date_of_birth: string | null
          email: string
          full_name: string
          gender: Database["public"]["Enums"]["gender"] | null
          id: string
          join_whatsapp_community: boolean | null
          looking_for_short_term: string[] | null
          mobile_number: string | null
          participated_in_startup_event: boolean | null
          preferred_learning_style: string | null
          profile_photo_url: string | null
          role: Database["public"]["Enums"]["user_role"]
          startup_event_description: string | null
          state: string | null
          time_availability_per_week: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          built_or_launched_product?: string | null
          city?: string | null
          consent_accurate_details?: boolean | null
          consent_data_usage?: boolean | null
          consent_receive_communication?: boolean | null
          country?: string | null
          created_at?: string
          date_of_birth?: string | null
          email: string
          full_name: string
          gender?: Database["public"]["Enums"]["gender"] | null
          id?: string
          join_whatsapp_community?: boolean | null
          looking_for_short_term?: string[] | null
          mobile_number?: string | null
          participated_in_startup_event?: boolean | null
          preferred_learning_style?: string | null
          profile_photo_url?: string | null
          role: Database["public"]["Enums"]["user_role"]
          startup_event_description?: string | null
          state?: string | null
          time_availability_per_week?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          built_or_launched_product?: string | null
          city?: string | null
          consent_accurate_details?: boolean | null
          consent_data_usage?: boolean | null
          consent_receive_communication?: boolean | null
          country?: string | null
          created_at?: string
          date_of_birth?: string | null
          email?: string
          full_name?: string
          gender?: Database["public"]["Enums"]["gender"] | null
          id?: string
          join_whatsapp_community?: boolean | null
          looking_for_short_term?: string[] | null
          mobile_number?: string | null
          participated_in_startup_event?: boolean | null
          preferred_learning_style?: string | null
          profile_photo_url?: string | null
          role?: Database["public"]["Enums"]["user_role"]
          startup_event_description?: string | null
          state?: string | null
          time_availability_per_week?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      student_details: {
        Row: {
          areas_of_interest: string[] | null
          college_name: string | null
          college_roll_number: string | null
          created_at: string
          current_goal: string | null
          degree_program: string | null
          expected_graduation_year: number | null
          github_url: string | null
          id: string
          instagram_url: string | null
          key_skills: string[] | null
          linkedin_url: string | null
          open_to_internship: boolean | null
          past_projects: string | null
          portfolio_url: string | null
          resume_url: string | null
          specialization: string | null
          tools_technologies: string[] | null
          twitter_url: string | null
          user_id: string
          year_of_study: string | null
          youtube_url: string | null
        }
        Insert: {
          areas_of_interest?: string[] | null
          college_name?: string | null
          college_roll_number?: string | null
          created_at?: string
          current_goal?: string | null
          degree_program?: string | null
          expected_graduation_year?: number | null
          github_url?: string | null
          id?: string
          instagram_url?: string | null
          key_skills?: string[] | null
          linkedin_url?: string | null
          open_to_internship?: boolean | null
          past_projects?: string | null
          portfolio_url?: string | null
          resume_url?: string | null
          specialization?: string | null
          tools_technologies?: string[] | null
          twitter_url?: string | null
          user_id: string
          year_of_study?: string | null
          youtube_url?: string | null
        }
        Update: {
          areas_of_interest?: string[] | null
          college_name?: string | null
          college_roll_number?: string | null
          created_at?: string
          current_goal?: string | null
          degree_program?: string | null
          expected_graduation_year?: number | null
          github_url?: string | null
          id?: string
          instagram_url?: string | null
          key_skills?: string[] | null
          linkedin_url?: string | null
          open_to_internship?: boolean | null
          past_projects?: string | null
          portfolio_url?: string | null
          resume_url?: string | null
          specialization?: string | null
          tools_technologies?: string[] | null
          twitter_url?: string | null
          user_id?: string
          year_of_study?: string | null
          youtube_url?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      gender: "male" | "female" | "other" | "prefer_not_to_say"
      user_role: "student" | "professional" | "organization"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      gender: ["male", "female", "other", "prefer_not_to_say"],
      user_role: ["student", "professional", "organization"],
    },
  },
} as const
