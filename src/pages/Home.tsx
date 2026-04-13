import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Phone, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { servicesData } from "../data/services";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useRef, useState, useEffect } from "react";

const testimonialsData = [
  {
    name: "Vishal K",
    review: "Best dental clinic in Aurangabad. Dr. Samruddhi is very polite and explains everything in detail. The clinic is very clean and hygienic. I would highly recommend Samruddhi Dental to everyone."
  },
  {
    name: "Priya S",
    review: "I visited Samruddhi Dental for my root canal treatment. The treatment was completely painless. Dr. Samruddhi is very experienced and professional. The clinic is well-equipped with modern technology."
  },
  {
    name: "Rahul M",
    review: "Got my braces done here. The staff is very friendly and they explain every step of the process. Highly recommend Samruddhi Dental!"
  },
  {
    name: "Sneha P",
    review: "Excellent service! I went for teeth whitening and the results are amazing. The ambiance of the clinic is very soothing, which helps calm dental anxiety."
  },
  {
    name: "Amit D",
    review: "Very professional and transparent about the pricing. Got a dental implant done and the entire procedure was smooth. Thank you Dr. Samruddhi and team."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-32 md:py-48 overflow-hidden flex items-center min-h-[80vh]">
        {/* Parallax Background */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: backgroundY }}
        >
          <div className="absolute inset-0 bg-slate-900/70 z-10 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Dental Clinic" 
            className="w-full h-[120%] object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
                Advanced Dental Care for a <span className="text-blue-400">Brighter Smile</span>
              </h1>
              <p className="text-xl text-slate-200 mb-10 max-w-2xl drop-shadow-md">
                Experience top-quality dental care at Samruddhi Dental & Laser Center. Our expert team provides comprehensive treatments using the latest technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className={buttonVariants({ size: "lg", className: "text-base h-14 px-8 shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-1" })}>
                  Book Appointment
                </Link>
                <a href="tel:+919765799994" className={buttonVariants({ size: "lg", variant: "outline", className: "text-base h-14 px-8 bg-white/10 text-white border-white/20 hover:bg-white/20 hover:-translate-y-1 transition-all backdrop-blur-sm" })}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call +91 97657 99994
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features/Highlights */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { title: "Expert Doctors", desc: "Highly qualified and experienced dental professionals." },
              { title: "Advanced Technology", desc: "State-of-the-art equipment including laser dentistry." },
              { title: "Patient Comfort", desc: "Painless treatments in a relaxing environment." }
            ].map((feature, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                className="flex items-start gap-4 p-8 rounded-3xl bg-slate-50 border border-slate-100 transition-colors hover:border-primary/20 hover:bg-white"
              >
                <div className="p-3 bg-primary/10 rounded-2xl">
                  <CheckCircle2 className="h-8 w-8 text-primary shrink-0" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Comprehensive Services</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-16">
              We offer a wide range of dental treatments to meet all your oral health needs under one roof.
            </p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 text-left"
          >
            {servicesData.slice(0, 6).map((service) => (
              <motion.div key={service.id} variants={itemVariants} style={{ perspective: 1000 }}>
                <motion.div
                  whileHover={{ rotateX: 2, rotateY: -2, y: -8, boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.15)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="h-full"
                >
                  <Card className="h-full border-none shadow-md overflow-hidden flex flex-col bg-white/80 backdrop-blur-sm">
                    <div className="h-52 overflow-hidden relative group">
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <CardHeader className="p-6 pb-2">
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 pt-2 flex-grow flex flex-col justify-between">
                      <p className="text-slate-600 mb-6 line-clamp-2">{service.shortDesc}</p>
                      <Link to={`/services/${service.id}`} className={buttonVariants({ variant: "link", className: "p-0 h-auto justify-start text-primary font-semibold group/link" })}>
                        Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/services" className={buttonVariants({ variant: "outline", size: "lg", className: "rounded-full px-8 h-14 hover:bg-primary hover:text-white transition-all duration-300" })}>
              View All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-slate-50 to-white pointer-events-none"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-16">What Our Patients Say</h2>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden px-4 md:px-12 py-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-full"
                >
                  <Card className="border-none shadow-xl bg-white relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
                    <CardContent className="p-10 md:p-14">
                      <div className="flex gap-1 mb-8 text-amber-400 justify-center md:justify-start">
                        {[...Array(5)].map((_, j) => <Star key={j} className="h-6 w-6 fill-current" />)}
                      </div>
                      <p className="text-slate-700 mb-10 italic text-xl md:text-2xl leading-relaxed text-center md:text-left">
                        "{testimonialsData[currentTestimonial].review}"
                      </p>
                      <div className="flex items-center gap-4 justify-center md:justify-start">
                        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-2xl">
                          {testimonialsData[currentTestimonial].name.charAt(0)}
                        </div>
                        <div className="text-left">
                          <p className="font-bold text-slate-900 text-lg">{testimonialsData[currentTestimonial].name}</p>
                          <p className="text-slate-500 text-sm">Google Review</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-600 hover:text-primary hover:scale-110 transition-all z-10 border border-slate-100"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-600 hover:text-primary hover:scale-110 transition-all z-10 border border-slate-100"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonialsData.map((_, i) => (
                <button 
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${i === currentTestimonial ? 'bg-primary scale-125' : 'bg-slate-300 hover:bg-slate-400'}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-[100px] pointer-events-none"
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready for a Healthier Smile?</h2>
            <p className="text-primary-foreground/90 text-xl mb-10 max-w-2xl mx-auto">
              Schedule your consultation today and take the first step towards perfect oral health.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
              <Link to="/contact" className={buttonVariants({ size: "lg", variant: "secondary", className: "h-14 px-10 text-lg rounded-full shadow-2xl" })}>
                Book Your Appointment Now
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Floating Book Appointment Tab */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className="fixed bottom-6 right-6 z-50 md:hidden"
      >
        <Link to="/contact" className={buttonVariants({ size: "lg", className: "rounded-full shadow-2xl h-14 px-6" })}>
          Book Appointment
        </Link>
      </motion.div>
    </div>
  );
}
