import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { motion } from "motion/react";

export function Contact() {
  return (
    <div className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
        className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 100, ease: "linear" }}
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl pointer-events-none"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Contact & Book Appointment</h1>
          <p className="text-lg text-slate-600">
            Ready to improve your smile? Get in touch with us to schedule your visit or ask any questions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm h-full">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-slate-900">Clinic Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="flex items-start gap-4 group">
                  <div className="bg-primary/10 p-3 rounded-2xl shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <MapPin className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-slate-900">Location</h3>
                    <p className="text-slate-600 mb-2 leading-relaxed">Chh Sambhajinagar (Aurangabad), Maharashtra</p>
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Samruddhi%20Dental&query_place_id=ChIJN1lcf8Ci2zsRhsDpl2lW8Xg" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 hover:underline font-medium inline-flex items-center gap-1"
                    >
                      View on Google Maps
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-primary/10 p-3 rounded-2xl shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Phone className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-slate-900">Phone</h3>
                    <p className="text-slate-600 mb-2 leading-relaxed">Call us for immediate assistance or booking.</p>
                    <a href="tel:+919765799994" className="text-primary hover:text-primary/80 hover:underline font-medium text-lg">
                      +91 97657 99994
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-primary/10 p-3 rounded-2xl shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Clock className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-slate-900">Clinic Hours</h3>
                    <div className="space-y-1 text-slate-600">
                      <p className="font-medium text-slate-700">Monday - Saturday</p>
                      <p>Morning: 10:00 AM - 2:00 PM</p>
                      <p>Evening: 5:00 PM - 9:00 PM</p>
                      <p className="text-red-500 font-medium text-sm mt-2">Sunday Closed</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Booking Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <Card className="border-none shadow-xl bg-white relative overflow-hidden h-full">
              <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
              <CardHeader className="pb-6 pt-8">
                <CardTitle className="text-3xl text-slate-900">Request an Appointment</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Thank you! Your request has been submitted. We will call you shortly to confirm."); }}>
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-slate-700 font-medium">Full Name</Label>
                    <Input id="name" placeholder="John Doe" className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-colors" required />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-slate-700 font-medium">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-colors" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="date" className="text-slate-700 font-medium">Preferred Date</Label>
                      <Input id="date" type="date" className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-colors" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-slate-700 font-medium">Service Interested In</Label>
                    <select 
                      id="service" 
                      className="flex h-12 w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus:bg-white transition-colors"
                    >
                      <option value="">Select a service...</option>
                      <option value="consultation">General Consultation</option>
                      <option value="root-canal">Root Canal</option>
                      <option value="implants">Dental Implants</option>
                      <option value="braces">Braces / Aligners</option>
                      <option value="cleaning">Teeth Cleaning</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-slate-700 font-medium">Additional Notes (Optional)</Label>
                    <Textarea id="message" placeholder="Tell us about your dental issue..." rows={4} className="bg-slate-50 border-slate-200 focus:bg-white transition-colors resize-none" />
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button type="submit" className="w-full h-14 text-lg shadow-lg shadow-primary/25">
                      Submit Request
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
