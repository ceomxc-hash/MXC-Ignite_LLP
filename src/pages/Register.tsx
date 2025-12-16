import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { User, GraduationCap, Briefcase, Building2, ArrowLeft, ArrowRight, Check } from "lucide-react";
import type { User as SupabaseUser } from "@supabase/supabase-js";

const steps = [
  { id: 1, title: "Basic Info", icon: User },
  { id: 2, title: "Choose Role", icon: Briefcase },
  { id: 3, title: "Role Details", icon: GraduationCap },
  { id: 4, title: "Preferences", icon: Check },
];

const degreePrograms = [
  "B.Tech / B.E", "M.Tech / M.E", "BBA / MBA", "BCA / MCA",
  "B.Sc / M.Sc", "BA / MA", "Diploma / Polytechnic", "PhD / Research Scholar", "Other"
];

const yearsOfStudy = ["1st Year", "2nd Year", "3rd Year", "Final Year / 4th Year", "Completed"];
const studentGoals = ["Placement", "Startup", "Research", "Higher Studies", "Freelancing", "Exploring"];
const areasOfInterest = ["AI/ML", "UI/UX", "Product Management", "Cloud", "Business", "Marketing", "Cybersecurity", "Freelancing", "Others"];
const workDomains = ["IT", "Consulting", "EdTech", "Govt/PSU", "Research", "Startup", "Finance", "Others"];
const expertiseAreas = ["AI/ML", "Product", "UI/UX", "Strategy", "Sales/Marketing", "Cloud / DevOps", "Design"];
const entityTypes = ["College / University", "Startup", "Corporation", "NGO", "Government Body"];
const collaborationInterests = ["Workshops", "Sponsorship", "Hackathons / Innovation", "CSR Partnership", "Internship / Job Drives", "Hiring Students", "Co-hosting Events", "Content & Curriculum Building"];
const learningStyles = ["Live Sessions", "Self-Paced Videos", "Mentorship-Based", "Bootcamp-Style", "Text-based Articles & Guides"];
const shortTermGoals = ["Upskilling Courses", "Mentorship", "Freelance Gigs", "Research/Projects", "Job / Internship Opportunities", "Career Counseling"];

export default function Register() {
  const [currentStep, setCurrentStep] = useState(1);
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Form state
  const [formData, setFormData] = useState({
    // Basic Info
    fullName: "",
    email: "",
    mobileNumber: "",
    city: "",
    state: "",
    country: "",
    dateOfBirth: "",
    gender: "",
    
    // Role
    role: "",
    
    // Student Details
    degreeProgram: "",
    specialization: "",
    collegeName: "",
    yearOfStudy: "",
    expectedGraduationYear: "",
    collegeRollNumber: "",
    currentGoal: "",
    openToInternship: false,
    keySkills: [] as string[],
    pastProjects: "",
    resumeUrl: "",
    linkedinUrl: "",
    githubUrl: "",
    portfolioUrl: "",
    instagramUrl: "",
    twitterUrl: "",
    youtubeUrl: "",
    areasOfInterest: [] as string[],
    
    // Professional Details
    currentDesignation: "",
    companyName: "",
    yearsOfExperience: "",
    workDomain: "",
    areaOfExpertise: [] as string[],
    willingToBeMentor: false,
    willingToTakeGuestLectures: false,
    openToHiringInterns: false,
    wantToJoinJudgingPanels: false,
    wantToPublishInsights: false,
    
    // Organization Details
    organizationName: "",
    entityType: "",
    industrySector: "",
    websiteUrl: "",
    contactFullName: "",
    contactDesignation: "",
    contactEmail: "",
    contactNumber: "",
    collaborationInterests: [] as string[],
    exploreStrategicPartnership: false,
    recruitmentInterest: "",
    csrEsgAlignment: "",
    openToSponsorship: "",
    
    // Preferences
    preferredLearningStyle: "",
    timeAvailabilityPerWeek: "",
    lookingForShortTerm: [] as string[],
    participatedInStartupEvent: false,
    startupEventDescription: "",
    builtOrLaunchedProduct: "",
    joinWhatsappCommunity: false,
    
    // Consent
    consentAccurateDetails: false,
    consentReceiveCommunication: false,
    consentDataUsage: false,
  });

  const [skillInput, setSkillInput] = useState("");

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session?.user) {
        navigate('/auth');
      } else {
        setUser(session.user);
        setFormData(prev => ({
          ...prev,
          fullName: session.user.user_metadata?.full_name || "",
          email: session.user.email || "",
        }));
      }
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session?.user) {
        navigate('/auth');
      } else {
        setUser(session.user);
        setFormData(prev => ({
          ...prev,
          fullName: session.user.user_metadata?.full_name || "",
          email: session.user.email || "",
        }));
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleArrayItem = (field: string, item: string) => {
    const arr = formData[field as keyof typeof formData] as string[];
    if (arr.includes(item)) {
      updateFormData(field, arr.filter(i => i !== item));
    } else {
      updateFormData(field, [...arr, item]);
    }
  };

  const addSkill = () => {
    if (skillInput.trim() && !formData.keySkills.includes(skillInput.trim())) {
      updateFormData("keySkills", [...formData.keySkills, skillInput.trim()]);
      setSkillInput("");
    }
  };

  const removeSkill = (skill: string) => {
    updateFormData("keySkills", formData.keySkills.filter(s => s !== skill));
  };

  const handleSubmit = async () => {
    if (!user) return;
    
    if (!formData.consentAccurateDetails || !formData.consentReceiveCommunication || !formData.consentDataUsage) {
      toast({
        title: "Consent Required",
        description: "Please agree to all consent terms to continue.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      // Insert profile
      const { error: profileError } = await supabase.from('profiles').insert({
        user_id: user.id,
        full_name: formData.fullName,
        email: formData.email,
        mobile_number: formData.mobileNumber,
        city: formData.city,
        state: formData.state,
        country: formData.country,
        date_of_birth: formData.dateOfBirth || null,
        gender: formData.gender as any || null,
        role: formData.role as any,
        preferred_learning_style: formData.preferredLearningStyle,
        time_availability_per_week: formData.timeAvailabilityPerWeek ? parseInt(formData.timeAvailabilityPerWeek) : null,
        looking_for_short_term: formData.lookingForShortTerm,
        participated_in_startup_event: formData.participatedInStartupEvent,
        startup_event_description: formData.startupEventDescription,
        built_or_launched_product: formData.builtOrLaunchedProduct,
        consent_accurate_details: formData.consentAccurateDetails,
        consent_receive_communication: formData.consentReceiveCommunication,
        consent_data_usage: formData.consentDataUsage,
        join_whatsapp_community: formData.joinWhatsappCommunity,
      });

      if (profileError) throw profileError;

      // Insert role-specific details
      if (formData.role === 'student') {
        const { error } = await supabase.from('student_details').insert({
          user_id: user.id,
          degree_program: formData.degreeProgram,
          specialization: formData.specialization,
          college_name: formData.collegeName,
          year_of_study: formData.yearOfStudy,
          expected_graduation_year: formData.expectedGraduationYear ? parseInt(formData.expectedGraduationYear) : null,
          college_roll_number: formData.collegeRollNumber,
          current_goal: formData.currentGoal,
          open_to_internship: formData.openToInternship,
          key_skills: formData.keySkills,
          past_projects: formData.pastProjects,
          resume_url: formData.resumeUrl,
          linkedin_url: formData.linkedinUrl,
          github_url: formData.githubUrl,
          portfolio_url: formData.portfolioUrl,
          instagram_url: formData.instagramUrl,
          twitter_url: formData.twitterUrl,
          youtube_url: formData.youtubeUrl,
          areas_of_interest: formData.areasOfInterest,
        });
        if (error) throw error;
      } else if (formData.role === 'professional') {
        const { error } = await supabase.from('professional_details').insert({
          user_id: user.id,
          current_designation: formData.currentDesignation,
          company_name: formData.companyName,
          years_of_experience: formData.yearsOfExperience ? parseInt(formData.yearsOfExperience) : null,
          work_domain: formData.workDomain,
          area_of_expertise: formData.areaOfExpertise,
          willing_to_be_mentor: formData.willingToBeMentor,
          willing_to_take_guest_lectures: formData.willingToTakeGuestLectures,
          open_to_hiring_interns: formData.openToHiringInterns,
          linkedin_url: formData.linkedinUrl,
          github_url: formData.githubUrl,
          portfolio_url: formData.portfolioUrl,
          resume_url: formData.resumeUrl,
          instagram_url: formData.instagramUrl,
          twitter_url: formData.twitterUrl,
          want_to_join_judging_panels: formData.wantToJoinJudgingPanels,
          want_to_publish_insights: formData.wantToPublishInsights,
        });
        if (error) throw error;
      } else if (formData.role === 'organization') {
        const { error } = await supabase.from('organization_details').insert({
          user_id: user.id,
          organization_name: formData.organizationName,
          entity_type: formData.entityType,
          industry_sector: formData.industrySector,
          website_url: formData.websiteUrl,
          contact_full_name: formData.contactFullName,
          contact_designation: formData.contactDesignation,
          contact_email: formData.contactEmail,
          contact_number: formData.contactNumber,
          collaboration_interests: formData.collaborationInterests,
          explore_strategic_partnership: formData.exploreStrategicPartnership,
          recruitment_interest: formData.recruitmentInterest,
          csr_esg_alignment: formData.csrEsgAlignment,
          open_to_sponsorship: formData.openToSponsorship,
        });
        if (error) throw error;
      }

      toast({
        title: "Registration Complete!",
        description: "Welcome to the MXC Ecosystem.",
      });
      
      navigate('/dashboard');
    } catch (error: any) {
      toast({
        title: "Registration failed",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const canProceed = () => {
    if (currentStep === 1) {
      return formData.fullName && formData.email && formData.mobileNumber;
    }
    if (currentStep === 2) {
      return formData.role;
    }
    if (currentStep === 3) {
      if (formData.role === 'student') return formData.degreeProgram && formData.collegeName;
      if (formData.role === 'professional') return formData.currentDesignation && formData.companyName;
      if (formData.role === 'organization') return formData.organizationName && formData.entityType;
    }
    return true;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-navy-900 py-6">
        <div className="section-padding container-wide flex items-center justify-between">
          <a href="/">
            <img src="/mxc-logo.png" alt="MXC Logo" className="h-10 filter brightness-0 invert" />
          </a>
          <div className="flex items-center gap-4">
            {steps.map((step, idx) => (
              <div key={step.id} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                  currentStep >= step.id ? 'bg-gold text-navy-900' : 'bg-navy-700 text-slate-400'
                }`}>
                  {currentStep > step.id ? <Check size={16} /> : step.id}
                </div>
                {idx < steps.length - 1 && (
                  <div className={`w-12 h-0.5 mx-2 ${currentStep > step.id ? 'bg-gold' : 'bg-navy-700'}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form Container */}
      <div className="section-padding py-12">
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {/* Step 1: Basic Info */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-background rounded-lg shadow-lg p-8"
              >
                <h2 className="font-heading text-2xl font-semibold text-navy-900 mb-6">Basic Account Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Full Name *</Label>
                    <Input value={formData.fullName} onChange={(e) => updateFormData("fullName", e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label>Email ID *</Label>
                    <Input type="email" value={formData.email} onChange={(e) => updateFormData("email", e.target.value)} disabled />
                  </div>
                  <div className="space-y-2">
                    <Label>Mobile Number *</Label>
                    <Input value={formData.mobileNumber} onChange={(e) => updateFormData("mobileNumber", e.target.value)} placeholder="+91 98765 43210" />
                  </div>
                  <div className="space-y-2">
                    <Label>Date of Birth</Label>
                    <Input type="date" value={formData.dateOfBirth} onChange={(e) => updateFormData("dateOfBirth", e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label>Gender</Label>
                    <Select value={formData.gender} onValueChange={(v) => updateFormData("gender", v)}>
                      <SelectTrigger><SelectValue placeholder="Select gender" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                        <SelectItem value="prefer_not_to_say">Prefer not to say</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>City</Label>
                    <Input value={formData.city} onChange={(e) => updateFormData("city", e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label>State</Label>
                    <Input value={formData.state} onChange={(e) => updateFormData("state", e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label>Country</Label>
                    <Input value={formData.country} onChange={(e) => updateFormData("country", e.target.value)} />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2: Choose Role */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-background rounded-lg shadow-lg p-8"
              >
                <h2 className="font-heading text-2xl font-semibold text-navy-900 mb-6">Choose Your Role</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { value: "student", label: "Student", icon: GraduationCap, desc: "Currently pursuing education" },
                    { value: "professional", label: "Working Professional", icon: Briefcase, desc: "Industry experience" },
                    { value: "organization", label: "Organization / Institute", icon: Building2, desc: "Company or institution" },
                  ].map((role) => (
                    <button
                      key={role.value}
                      onClick={() => updateFormData("role", role.value)}
                      className={`p-6 rounded-lg border-2 transition-all text-left ${
                        formData.role === role.value
                          ? 'border-navy-800 bg-navy-50'
                          : 'border-border hover:border-navy-300'
                      }`}
                    >
                      <role.icon size={32} className={formData.role === role.value ? 'text-navy-800' : 'text-slate-400'} />
                      <h3 className="font-semibold text-navy-900 mt-4">{role.label}</h3>
                      <p className="text-sm text-slate-500 mt-1">{role.desc}</p>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 3: Role-specific Details */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-background rounded-lg shadow-lg p-8"
              >
                {/* Student Form */}
                {formData.role === 'student' && (
                  <>
                    <h2 className="font-heading text-2xl font-semibold text-navy-900 mb-6">Student Details</h2>
                    <div className="space-y-8">
                      <div>
                        <h3 className="font-medium text-navy-800 mb-4">Academic Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>Degree Program *</Label>
                            <Select value={formData.degreeProgram} onValueChange={(v) => updateFormData("degreeProgram", v)}>
                              <SelectTrigger><SelectValue placeholder="Select degree" /></SelectTrigger>
                              <SelectContent>
                                {degreePrograms.map(d => <SelectItem key={d} value={d}>{d}</SelectItem>)}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label>Specialization / Branch</Label>
                            <Input value={formData.specialization} onChange={(e) => updateFormData("specialization", e.target.value)} placeholder="e.g., Computer Science, AI" />
                          </div>
                          <div className="space-y-2 md:col-span-2">
                            <Label>College / University Name *</Label>
                            <Input value={formData.collegeName} onChange={(e) => updateFormData("collegeName", e.target.value)} />
                          </div>
                          <div className="space-y-2">
                            <Label>Year of Study</Label>
                            <Select value={formData.yearOfStudy} onValueChange={(v) => updateFormData("yearOfStudy", v)}>
                              <SelectTrigger><SelectValue placeholder="Select year" /></SelectTrigger>
                              <SelectContent>
                                {yearsOfStudy.map(y => <SelectItem key={y} value={y}>{y}</SelectItem>)}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label>Expected Graduation Year</Label>
                            <Input type="number" value={formData.expectedGraduationYear} onChange={(e) => updateFormData("expectedGraduationYear", e.target.value)} placeholder="2025" />
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-medium text-navy-800 mb-4">Career Goals & Skills</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>Your Current Goal</Label>
                            <Select value={formData.currentGoal} onValueChange={(v) => updateFormData("currentGoal", v)}>
                              <SelectTrigger><SelectValue placeholder="Select goal" /></SelectTrigger>
                              <SelectContent>
                                {studentGoals.map(g => <SelectItem key={g} value={g}>{g}</SelectItem>)}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2 flex items-end">
                            <div className="flex items-center space-x-2">
                              <Checkbox checked={formData.openToInternship} onCheckedChange={(c) => updateFormData("openToInternship", c)} />
                              <Label>Open to Internship Opportunities</Label>
                            </div>
                          </div>
                          <div className="space-y-2 md:col-span-2">
                            <Label>Key Skills</Label>
                            <div className="flex gap-2">
                              <Input value={skillInput} onChange={(e) => setSkillInput(e.target.value)} placeholder="e.g., Python, Excel" onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())} />
                              <Button type="button" onClick={addSkill} variant="outline">Add</Button>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {formData.keySkills.map(skill => (
                                <span key={skill} className="bg-navy-100 text-navy-800 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                                  {skill}
                                  <button onClick={() => removeSkill(skill)} className="text-navy-600 hover:text-navy-900">×</button>
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-medium text-navy-800 mb-4">Digital Presence</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>LinkedIn Profile URL</Label>
                            <Input value={formData.linkedinUrl} onChange={(e) => updateFormData("linkedinUrl", e.target.value)} placeholder="https://linkedin.com/in/..." />
                          </div>
                          <div className="space-y-2">
                            <Label>GitHub / Portfolio URL</Label>
                            <Input value={formData.githubUrl} onChange={(e) => updateFormData("githubUrl", e.target.value)} placeholder="https://github.com/..." />
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-medium text-navy-800 mb-4">Areas of Interest</h3>
                        <div className="flex flex-wrap gap-2">
                          {areasOfInterest.map(area => (
                            <button
                              key={area}
                              type="button"
                              onClick={() => toggleArrayItem("areasOfInterest", area)}
                              className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                                formData.areasOfInterest.includes(area)
                                  ? 'bg-navy-800 text-white border-navy-800'
                                  : 'bg-background border-border hover:border-navy-300'
                              }`}
                            >
                              {area}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* Professional Form */}
                {formData.role === 'professional' && (
                  <>
                    <h2 className="font-heading text-2xl font-semibold text-navy-900 mb-6">Professional Details</h2>
                    <div className="space-y-8">
                      <div>
                        <h3 className="font-medium text-navy-800 mb-4">Professional Background</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>Current Designation *</Label>
                            <Input value={formData.currentDesignation} onChange={(e) => updateFormData("currentDesignation", e.target.value)} />
                          </div>
                          <div className="space-y-2">
                            <Label>Company Name *</Label>
                            <Input value={formData.companyName} onChange={(e) => updateFormData("companyName", e.target.value)} />
                          </div>
                          <div className="space-y-2">
                            <Label>Years of Experience</Label>
                            <Input type="number" value={formData.yearsOfExperience} onChange={(e) => updateFormData("yearsOfExperience", e.target.value)} />
                          </div>
                          <div className="space-y-2">
                            <Label>Work Domain / Industry</Label>
                            <Select value={formData.workDomain} onValueChange={(v) => updateFormData("workDomain", v)}>
                              <SelectTrigger><SelectValue placeholder="Select domain" /></SelectTrigger>
                              <SelectContent>
                                {workDomains.map(d => <SelectItem key={d} value={d}>{d}</SelectItem>)}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-medium text-navy-800 mb-4">Expertise & Contributions</h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {expertiseAreas.map(area => (
                            <button
                              key={area}
                              type="button"
                              onClick={() => toggleArrayItem("areaOfExpertise", area)}
                              className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                                formData.areaOfExpertise.includes(area)
                                  ? 'bg-navy-800 text-white border-navy-800'
                                  : 'bg-background border-border hover:border-navy-300'
                              }`}
                            >
                              {area}
                            </button>
                          ))}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex items-center space-x-2">
                            <Checkbox checked={formData.willingToBeMentor} onCheckedChange={(c) => updateFormData("willingToBeMentor", c)} />
                            <Label>Willing to be a Mentor</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox checked={formData.willingToTakeGuestLectures} onCheckedChange={(c) => updateFormData("willingToTakeGuestLectures", c)} />
                            <Label>Willing to take Guest Lectures</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox checked={formData.openToHiringInterns} onCheckedChange={(c) => updateFormData("openToHiringInterns", c)} />
                            <Label>Open to Hiring Interns</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox checked={formData.wantToJoinJudgingPanels} onCheckedChange={(c) => updateFormData("wantToJoinJudgingPanels", c)} />
                            <Label>Join Judging / MentorX Panels</Label>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-medium text-navy-800 mb-4">Digital Presence</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>LinkedIn Profile URL</Label>
                            <Input value={formData.linkedinUrl} onChange={(e) => updateFormData("linkedinUrl", e.target.value)} />
                          </div>
                          <div className="space-y-2">
                            <Label>GitHub / Portfolio URL</Label>
                            <Input value={formData.githubUrl} onChange={(e) => updateFormData("githubUrl", e.target.value)} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* Organization Form */}
                {formData.role === 'organization' && (
                  <>
                    <h2 className="font-heading text-2xl font-semibold text-navy-900 mb-6">Organization Details</h2>
                    <div className="space-y-8">
                      <div>
                        <h3 className="font-medium text-navy-800 mb-4">Basic Details</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>Organization Name *</Label>
                            <Input value={formData.organizationName} onChange={(e) => updateFormData("organizationName", e.target.value)} />
                          </div>
                          <div className="space-y-2">
                            <Label>Type of Entity *</Label>
                            <Select value={formData.entityType} onValueChange={(v) => updateFormData("entityType", v)}>
                              <SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
                              <SelectContent>
                                {entityTypes.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label>Industry Sector</Label>
                            <Input value={formData.industrySector} onChange={(e) => updateFormData("industrySector", e.target.value)} />
                          </div>
                          <div className="space-y-2">
                            <Label>Website URL</Label>
                            <Input value={formData.websiteUrl} onChange={(e) => updateFormData("websiteUrl", e.target.value)} />
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-medium text-navy-800 mb-4">Point of Contact</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>Full Name</Label>
                            <Input value={formData.contactFullName} onChange={(e) => updateFormData("contactFullName", e.target.value)} />
                          </div>
                          <div className="space-y-2">
                            <Label>Designation</Label>
                            <Input value={formData.contactDesignation} onChange={(e) => updateFormData("contactDesignation", e.target.value)} />
                          </div>
                          <div className="space-y-2">
                            <Label>Official Email</Label>
                            <Input type="email" value={formData.contactEmail} onChange={(e) => updateFormData("contactEmail", e.target.value)} />
                          </div>
                          <div className="space-y-2">
                            <Label>Contact Number</Label>
                            <Input value={formData.contactNumber} onChange={(e) => updateFormData("contactNumber", e.target.value)} />
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-medium text-navy-800 mb-4">Collaboration Interests</h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {collaborationInterests.map(interest => (
                            <button
                              key={interest}
                              type="button"
                              onClick={() => toggleArrayItem("collaborationInterests", interest)}
                              className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                                formData.collaborationInterests.includes(interest)
                                  ? 'bg-navy-800 text-white border-navy-800'
                                  : 'bg-background border-border hover:border-navy-300'
                              }`}
                            >
                              {interest}
                            </button>
                          ))}
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox checked={formData.exploreStrategicPartnership} onCheckedChange={(c) => updateFormData("exploreStrategicPartnership", c)} />
                          <Label>Explore Strategic Partnership with MentorX</Label>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            )}

            {/* Step 4: Preferences & Consent */}
            {currentStep === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-background rounded-lg shadow-lg p-8"
              >
                <h2 className="font-heading text-2xl font-semibold text-navy-900 mb-6">Preferences & Consent</h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="font-medium text-navy-800 mb-4">Learning Preferences</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Preferred Learning Style</Label>
                        <Select value={formData.preferredLearningStyle} onValueChange={(v) => updateFormData("preferredLearningStyle", v)}>
                          <SelectTrigger><SelectValue placeholder="Select style" /></SelectTrigger>
                          <SelectContent>
                            {learningStyles.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Time Availability Per Week (hours)</Label>
                        <Input type="number" value={formData.timeAvailabilityPerWeek} onChange={(e) => updateFormData("timeAvailabilityPerWeek", e.target.value)} placeholder="e.g., 4" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-navy-800 mb-4">Looking for (short-term)</h3>
                    <div className="flex flex-wrap gap-2">
                      {shortTermGoals.map(goal => (
                        <button
                          key={goal}
                          type="button"
                          onClick={() => toggleArrayItem("lookingForShortTerm", goal)}
                          className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                            formData.lookingForShortTerm.includes(goal)
                              ? 'bg-navy-800 text-white border-navy-800'
                              : 'bg-background border-border hover:border-navy-300'
                          }`}
                        >
                          {goal}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-navy-800 mb-4">Experience</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox checked={formData.participatedInStartupEvent} onCheckedChange={(c) => updateFormData("participatedInStartupEvent", c)} />
                        <Label>Have you participated in any startup/innovation event?</Label>
                      </div>
                      {formData.participatedInStartupEvent && (
                        <Textarea
                          value={formData.startupEventDescription}
                          onChange={(e) => updateFormData("startupEventDescription", e.target.value)}
                          placeholder="Describe your experience..."
                          className="mt-2"
                        />
                      )}
                      <div className="space-y-2">
                        <Label>Have you built or launched any product/project?</Label>
                        <Textarea
                          value={formData.builtOrLaunchedProduct}
                          onChange={(e) => updateFormData("builtOrLaunchedProduct", e.target.value)}
                          placeholder="Brief description..."
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-navy-800 mb-4">Community</h3>
                    <div className="flex items-center space-x-2">
                      <Checkbox checked={formData.joinWhatsappCommunity} onCheckedChange={(c) => updateFormData("joinWhatsappCommunity", c)} />
                      <Label>Would you like to join MentorX WhatsApp Community?</Label>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="font-medium text-navy-800 mb-4">Consent *</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-2">
                        <Checkbox checked={formData.consentAccurateDetails} onCheckedChange={(c) => updateFormData("consentAccurateDetails", c)} />
                        <Label className="text-sm">I confirm all details provided are accurate</Label>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Checkbox checked={formData.consentReceiveCommunication} onCheckedChange={(c) => updateFormData("consentReceiveCommunication", c)} />
                        <Label className="text-sm">I agree to receive communication from MentorX regarding events, programs, and opportunities</Label>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Checkbox checked={formData.consentDataUsage} onCheckedChange={(c) => updateFormData("consentDataUsage", c)} />
                        <Label className="text-sm">I consent to MentorX using this data to create a personalized dashboard/chatbot for career support and mentorship</Label>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={() => setCurrentStep(prev => prev - 1)}
              disabled={currentStep === 1}
              className="gap-2"
            >
              <ArrowLeft size={16} /> Previous
            </Button>
            {currentStep < 4 ? (
              <Button
                variant="hero"
                onClick={() => setCurrentStep(prev => prev + 1)}
                disabled={!canProceed()}
                className="gap-2"
              >
                Next <ArrowRight size={16} />
              </Button>
            ) : (
              <Button
                variant="hero"
                onClick={handleSubmit}
                disabled={loading || !formData.consentAccurateDetails || !formData.consentReceiveCommunication || !formData.consentDataUsage}
                className="gap-2"
              >
                {loading ? "Submitting..." : "Complete Registration"}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
