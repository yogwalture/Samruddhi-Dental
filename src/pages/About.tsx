import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";

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

export function About() {
  return (
    <div className="py-16 md:py-24 relative overflow-hidden bg-white">
      {/* Decorative background elements */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 150, ease: "linear" }}
        className="absolute top-20 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-[80px] pointer-events-none"
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
        className="absolute bottom-20 -right-40 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">About Samruddhi Dental</h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Dedicated to providing exceptional dental care with a focus on patient comfort, advanced technology, and lasting results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative perspective-1000"
          >
            <div className="absolute inset-0 bg-primary/20 rounded-3xl transform translate-x-6 translate-y-6 -z-10"></div>
            <motion.div
              whileHover={{ rotateY: 5, rotateX: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-slate-100 rounded-3xl aspect-square md:aspect-[4/3] flex items-center justify-center overflow-hidden shadow-2xl border-4 border-white"
            >
              <img 
                src="https://picsum.photos/seed/dental-clinic/800/600" 
                alt="Clinic Interior" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">Our Mission</h2>
            <p className="text-slate-600 mb-6 text-lg leading-relaxed">
              At Samruddhi Dental & Laser Center, our mission is to deliver high-quality, comprehensive dental care in a welcoming and comfortable environment. We believe that everyone deserves a healthy, beautiful smile.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              We combine years of clinical experience with the latest advancements in dental technology, including laser dentistry, to ensure our patients receive the most effective and painless treatments possible.
            </p>
          </motion.div>
        </div>

        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900">Why Choose Us?</h2>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Experienced Team",
                desc: "Our doctors are highly trained specialists dedicated to continuous learning and excellence in dentistry."
              },
              {
                title: "Advanced Technology",
                desc: "We utilize modern equipment like dental lasers and digital imaging for precise diagnosis and treatment."
              },
              {
                title: "Patient-Centric Care",
                desc: "Your comfort is our priority. We take the time to listen to your concerns and explain all treatment options."
              }
            ].map((item, i) => (
              <motion.div key={i} variants={itemVariants} style={{ perspective: 1000 }}>
                <motion.div
                  whileHover={{ y: -10, rotateX: 5, rotateY: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="h-full"
                >
                  <Card className="h-full border-none shadow-lg bg-slate-50 hover:bg-white transition-colors duration-300 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
                    <CardContent className="p-10 text-center flex flex-col items-center justify-center h-full">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                        <span className="text-2xl font-bold">{i + 1}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
