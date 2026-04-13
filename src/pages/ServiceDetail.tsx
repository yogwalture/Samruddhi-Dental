import { useParams, Link } from "react-router-dom";
import { servicesData } from "../data/services";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export function ServiceDetail() {
  const { id } = useParams();
  const service = servicesData.find(s => s.id === id);

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
        <Link to="/services" className={buttonVariants()}>
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="py-16 md:py-24 relative overflow-hidden bg-white">
      {/* Decorative background elements */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 150, ease: "linear" }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"
      />

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/services" className={buttonVariants({ variant: "ghost", className: "mb-8 -ml-4 text-muted-foreground hover:text-primary transition-colors" })}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to all services
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
          >
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-auto object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">{service.title}</motion.h1>
            <motion.p variants={itemVariants} className="text-lg text-slate-600 mb-8 leading-relaxed">
              {service.fullDesc}
            </motion.p>
            
            <motion.h3 variants={itemVariants} className="text-2xl font-semibold mb-6 text-slate-900">Key Benefits</motion.h3>
            <motion.ul variants={containerVariants} className="space-y-4 mb-10">
              {service.benefits.map((benefit, index) => (
                <motion.li key={index} variants={itemVariants} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-slate-700 leading-relaxed">{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={itemVariants} className="bg-primary/5 p-8 rounded-3xl border border-primary/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
              <h4 className="font-bold text-xl mb-3 text-slate-900 relative z-10">Ready to get started?</h4>
              <p className="text-slate-600 mb-6 relative z-10">Book a consultation with our experts to discuss your treatment plan.</p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block relative z-10">
                <Link to="/contact" className={buttonVariants({ size: "lg", className: "w-full sm:w-auto shadow-lg shadow-primary/20 rounded-full px-8" })}>
                  Book Appointment
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
