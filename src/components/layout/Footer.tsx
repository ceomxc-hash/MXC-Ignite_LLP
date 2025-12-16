import { Linkedin, Mail, MapPin, Instagram, MessageCircle } from "lucide-react";
export function Footer() {
  return <footer className="bg-navy-900 text-primary-foreground">
      <div className="section-padding py-20">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                
              </div>
              <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-md mb-8">
                Building the operating system for next-generation leadership. 
                Where talent becomes power, and ambition meets infrastructure.
              </p>
              <div className="flex items-center gap-4">
                <a href="https://www.linkedin.com/company/mxcignite/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-sm bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors duration-300">
                  <Linkedin size={18} />
                </a>
                <a href="https://www.instagram.com/mentorxcommunity" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-sm bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors duration-300">
                  <Instagram size={18} />
                </a>
                <a href="https://chat.whatsapp.com/JG6cgUxH8RYBZXyXWbfNWp" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-sm bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors duration-300">
                  <MessageCircle size={18} />
                </a>
                <a href="mailto:mentorxcommunity@gmail.com" className="w-10 h-10 rounded-sm bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors duration-300">
                  <Mail size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-semibold text-sm mb-6 tracking-wide">
                Ecosystem
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="#system" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300">
                    The System
                  </a>
                </li>
                <li>
                  <a href="#categories" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300">
                    Categories
                  </a>
                </li>
                <li>
                  <a href="#mentors" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300">
                    Mentors
                  </a>
                </li>
                <li>
                  <a href="#portal" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300">
                    Portal
                  </a>
                </li>
                <li>
                  <a href="#partners" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300">
                    Partners
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading font-semibold text-sm mb-6 tracking-wide">
                Connect
              </h4>
              <ul className="space-y-4">
                <li>
                  <a href="mailto:mentorxcommunity@gmail.com" className="flex items-start gap-3 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300">
                    <Mail size={16} className="mt-0.5 shrink-0" />
                    mentorxcommunity@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sm text-primary-foreground/60">
                  <MapPin size={16} className="mt-0.5 shrink-0" />
                  Hyderabad, India
                </li>
              </ul>
              <p className="mt-6 text-xs text-primary-foreground/40 leading-relaxed">
                For ecosystem partnerships, institutions, governments, and global collaborators.
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-primary-foreground/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-primary-foreground/40">
                © {new Date().getFullYear()} MXC Ignite LLP. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <a href="#" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/60 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/60 transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>;
}