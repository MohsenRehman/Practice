import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Activity, Users, FileText, Clock, ArrowRight, ActivitySquare, HeartPulse } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-slate-50 overflow-hidden flex items-center">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-1/2 -left-24 w-72 h-72 bg-teal-100 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-6"
          >
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full w-fit">
              <Activity className="w-4 h-4" />
              <span className="text-sm font-semibold tracking-wide uppercase">Digital Medical Enterprise</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
              Transform Healthcare with <span className="text-blue-600">One Connected</span> Digital Platform
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed">
              Digitize patient care, clinical workflows, medical records, appointments, prescriptions, and healthcare operations with a secure and intelligent healthcare platform.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <button className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg shadow-blue-200 transition-all duration-200 group">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-blue-700 bg-white border-2 border-blue-100 hover:border-blue-200 hover:bg-blue-50 rounded-xl transition-all duration-200">
                Explore Platform
              </button>
            </div>
            
            <div className="flex items-center space-x-6 pt-8 text-sm font-medium text-slate-500">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-teal-500" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-blue-500" />
                <span>10k+ Providers</span>
              </div>
            </div>
          </motion.div>

          {/* Right Dashboard Visual */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 z-10 overflow-hidden">
              {/* Dashboard Header */}
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-100">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                    Dr
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-800">Dr. Sarah Jenkins</h3>
                    <p className="text-xs text-slate-500">Chief of Cardiology</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-400">Today's Schedule</p>
                  <p className="text-sm font-semibold text-slate-800">8 Patients</p>
                </div>
              </div>

              {/* Dashboard Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <motion.div 
                  whileHover={{ y: -2 }}
                  className="bg-blue-50 rounded-xl p-4 border border-blue-100"
                >
                  <div className="flex items-center justify-between mb-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-md">+12%</span>
                  </div>
                  <p className="text-2xl font-bold text-slate-800">1,284</p>
                  <p className="text-xs text-slate-500">Active Patients</p>
                </motion.div>
                
                <motion.div 
                  whileHover={{ y: -2 }}
                  className="bg-teal-50 rounded-xl p-4 border border-teal-100"
                >
                  <div className="flex items-center justify-between mb-2">
                    <ActivitySquare className="w-5 h-5 text-teal-600" />
                    <span className="text-xs font-medium text-teal-600 bg-teal-100 px-2 py-1 rounded-md">Normal</span>
                  </div>
                  <p className="text-2xl font-bold text-slate-800">98%</p>
                  <p className="text-xs text-slate-500">System Health</p>
                </motion.div>
              </div>

              {/* Recent Activity List */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Upcoming Appointments</h4>
                
                <div className="flex items-center p-3 hover:bg-slate-50 rounded-lg transition-colors border border-slate-50">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mr-3">
                    <span className="text-sm font-medium text-slate-600">MJ</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-slate-800">Michael Johnson</p>
                    <p className="text-xs text-slate-500">Cardiology Review</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-xs text-slate-500 mb-1">
                      <Clock className="w-3 h-3 mr-1" />
                      10:30 AM
                    </div>
                    <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded">Waiting</span>
                  </div>
                </div>

                <div className="flex items-center p-3 hover:bg-slate-50 rounded-lg transition-colors border border-slate-50">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mr-3">
                    <span className="text-sm font-medium text-slate-600">ES</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-slate-800">Emily Smith</p>
                    <p className="text-xs text-slate-500">Annual Checkup</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-xs text-slate-500 mb-1">
                      <Clock className="w-3 h-3 mr-1" />
                      11:15 AM
                    </div>
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Confirmed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -right-6 top-20 bg-white p-3 rounded-xl shadow-lg border border-slate-100 hidden md:flex items-center space-x-3 z-20"
            >
              <div className="bg-green-100 p-2 rounded-lg">
                <FileText className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800">Lab Results</p>
                <p className="text-[10px] text-slate-500">Ready for review</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -left-8 bottom-16 bg-white p-3 rounded-xl shadow-lg border border-slate-100 hidden md:flex items-center space-x-3 z-20"
            >
              <div className="bg-purple-100 p-2 rounded-lg">
                <HeartPulse className="w-4 h-4 text-purple-600" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800">Vitals Normal</p>
                <p className="text-[10px] text-slate-500">Updated 5m ago</p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
