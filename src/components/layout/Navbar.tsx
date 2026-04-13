import { Link } from "react-router-dom";
import { Button, buttonVariants } from "@/components/ui/button";
import { Phone, Menu, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { servicesData } from "../../data/services";
import { motion } from "motion/react";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export function Navbar() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 shadow-sm"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-primary">Samruddhi Dental</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
            Home
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-primary transition-colors outline-none">
              Services <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56 bg-white/95 backdrop-blur-md border-slate-100 shadow-xl">
              <DropdownMenuItem render={<Link to="/services" className="font-semibold text-primary cursor-pointer" />}>
                All Services
              </DropdownMenuItem>
              {servicesData.map((service) => (
                <DropdownMenuItem key={service.id} render={<Link to={`/services/${service.id}`} className="cursor-pointer" />}>
                  {service.title}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to="/about" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
            About Us
          </Link>
          <Link to="/contact" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
            Contact
          </Link>
          
          <div className="flex items-center gap-2 ml-4">
            <motion.a 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://wa.me/919765799994" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="WhatsApp" 
              className={buttonVariants({ variant: "outline", size: "icon", className: "text-green-600 border-green-200 hover:bg-green-50 hover:text-green-700 shadow-sm" })}
            >
              <WhatsAppIcon className="h-5 w-5" />
            </motion.a>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/contact" className={buttonVariants({ className: "shadow-md shadow-primary/20" })}>
                Book Appointment
              </Link>
            </motion.div>
          </div>
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center gap-2">
          <a href="https://wa.me/919765799994" target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "ghost", size: "icon", className: "text-green-600" })}>
            <WhatsAppIcon className="h-5 w-5" />
          </a>
          <a href="tel:+919765799994" className={buttonVariants({ variant: "ghost", size: "icon", className: "text-primary" })}>
            <Phone className="h-5 w-5" />
          </a>
          <Sheet>
            <SheetTrigger className={buttonVariants({ variant: "ghost", size: "icon" })}>
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="overflow-y-auto bg-white/95 backdrop-blur-md">
              <nav className="flex flex-col gap-4 mt-8">
                <Link to="/" className="text-lg font-medium hover:text-primary">Home</Link>
                
                <div className="flex flex-col gap-2">
                  <span className="text-lg font-medium text-slate-500">Services</span>
                  <div className="flex flex-col gap-2 pl-4 border-l-2 border-slate-100">
                    <Link to="/services" className="text-base text-primary font-medium">View All</Link>
                    {servicesData.map((service) => (
                      <Link key={service.id} to={`/services/${service.id}`} className="text-base text-slate-600 hover:text-primary">
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link to="/about" className="text-lg font-medium hover:text-primary">About Us</Link>
                <Link to="/contact" className="text-lg font-medium hover:text-primary">Contact</Link>
                
                <Link to="/contact" className={buttonVariants({ className: "mt-4 shadow-md" })}>
                  Book Appointment
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
