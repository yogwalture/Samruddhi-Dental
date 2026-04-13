import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { servicesData } from "../data/services";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export function Services() {
  return (
    <div className="py-16 md:py-24 bg-slate-50/50 min-h-screen relative overflow-hidden">
      {/* Decorative background elements */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 100, ease: "linear" }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-[80px] pointer-events-none translate-y-1/3 -translate-x-1/3"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">Our Dental Services</h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            At Samruddhi Dental & Laser Center, we provide a comprehensive range of dental treatments using state-of-the-art technology to ensure the best care for our patients.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {servicesData.map((service) => (
            <motion.div key={service.id} variants={itemVariants} style={{ perspective: 1000 }}>
              <motion.div
                whileHover={{ rotateX: 2, rotateY: -2, y: -8, boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.15)" }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="h-full"
              >
                <Card className="h-full flex flex-col border border-white/50 shadow-md bg-white/80 backdrop-blur-sm overflow-hidden group">
                  <div className="h-56 overflow-hidden relative">
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <CardHeader className="p-8 pb-4">
                    <CardTitle className="text-2xl text-slate-900 group-hover:text-primary transition-colors">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-8 pt-0 flex-grow flex flex-col justify-between">
                    <CardDescription className="text-base text-slate-600 mb-8 leading-relaxed">
                      {service.shortDesc}
                    </CardDescription>
                    <Link to={`/services/${service.id}`} className={buttonVariants({ variant: "outline", className: "w-full justify-between h-12 rounded-xl group/btn hover:bg-primary hover:text-white transition-all duration-300 border-slate-200" })}>
                      Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto shadow-xl border border-slate-100 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Need a specific treatment?</h2>
            <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto">
              Contact us to discuss your dental concerns. Our expert team will guide you to the right treatment plan.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
              <Link to="/contact" className={buttonVariants({ size: "lg", className: "rounded-full px-10 h-14 text-lg shadow-lg shadow-primary/20" })}>
                Consult Our Doctors
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
