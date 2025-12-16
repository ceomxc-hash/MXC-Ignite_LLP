import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { LogOut, User, Mail, Phone, MapPin, Briefcase, GraduationCap, Building2, Linkedin, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import type { User as SupabaseUser } from "@supabase/supabase-js";

interface Profile {
  full_name: string;
  email: string;
  mobile_number: string | null;
  city: string | null;
  state: string | null;
  country: string | null;
  role: 'student' | 'professional' | 'organization';
}

export default function Dashboard() {
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session?.user) {
        navigate('/auth');
      } else {
        setUser(session.user);
      }
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session?.user) {
        navigate('/auth');
      } else {
        setUser(session.user);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  useEffect(() => {
    if (user) {
      fetchProfile();
    }
  }, [user]);

  const fetchProfile = async () => {
    if (!user) return;
    
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('user_id', user.id)
      .maybeSingle();

    if (error) {
      console.error('Error fetching profile:', error);
    } else if (!data) {
      navigate('/register');
    } else {
      setProfile(data);
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({ title: "Logged out successfully" });
    navigate('/');
  };

  const getRoleIcon = () => {
    if (!profile) return User;
    switch (profile.role) {
      case 'student': return GraduationCap;
      case 'professional': return Briefcase;
      case 'organization': return Building2;
      default: return User;
    }
  };

  const RoleIcon = getRoleIcon();

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="animate-pulse text-navy-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-navy-900 py-4">
        <div className="section-padding container-wide flex items-center justify-between">
          <a href="/">
            <img src="/mxc-logo.png" alt="MXC Logo" className="h-10 filter brightness-0 invert" />
          </a>
          <Button variant="ghost" onClick={handleLogout} className="text-white hover:bg-navy-800">
            <LogOut size={18} className="mr-2" /> Logout
          </Button>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="section-padding py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-background rounded-lg shadow-lg overflow-hidden"
          >
            {/* Profile Header */}
            <div className="bg-gradient-to-r from-navy-800 to-navy-900 p-8 text-white">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center">
                  <RoleIcon size={36} className="text-navy-900" />
                </div>
                <div>
                  <h1 className="font-heading text-3xl font-semibold">{profile?.full_name}</h1>
                  <p className="text-slate-300 capitalize mt-1">{profile?.role?.replace('_', ' ')}</p>
                </div>
              </div>
            </div>

            {/* Profile Details */}
            <div className="p-8">
              <h2 className="font-heading text-xl font-semibold text-navy-900 mb-6">Profile Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-navy-600" />
                  <div>
                    <p className="text-sm text-slate-500">Email</p>
                    <p className="text-navy-900">{profile?.email}</p>
                  </div>
                </div>
                {profile?.mobile_number && (
                  <div className="flex items-center gap-3">
                    <Phone size={20} className="text-navy-600" />
                    <div>
                      <p className="text-sm text-slate-500">Mobile</p>
                      <p className="text-navy-900">{profile.mobile_number}</p>
                    </div>
                  </div>
                )}
                {(profile?.city || profile?.state || profile?.country) && (
                  <div className="flex items-center gap-3">
                    <MapPin size={20} className="text-navy-600" />
                    <div>
                      <p className="text-sm text-slate-500">Location</p>
                      <p className="text-navy-900">
                        {[profile?.city, profile?.state, profile?.country].filter(Boolean).join(', ')}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Quick Actions */}
              <div className="mt-8 pt-8 border-t">
                <h2 className="font-heading text-xl font-semibold text-navy-900 mb-6">Quick Links</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <a
                    href="https://chat.whatsapp.com/JG6cgUxH8RYBZXyXWbfNWp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors flex items-center gap-3"
                  >
                    <ExternalLink size={20} className="text-green-600" />
                    <span className="text-green-800 font-medium">Join WhatsApp Community</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/mxcignite/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors flex items-center gap-3"
                  >
                    <Linkedin size={20} className="text-blue-600" />
                    <span className="text-blue-800 font-medium">Follow on LinkedIn</span>
                  </a>
                  <a
                    href="/"
                    className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors flex items-center gap-3"
                  >
                    <ExternalLink size={20} className="text-slate-600" />
                    <span className="text-slate-800 font-medium">Explore MXC Website</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
