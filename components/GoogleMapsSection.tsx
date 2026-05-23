"use client";

import React from "react";
import { motion } from "framer-motion";

export default function GoogleMapsSection() {
  // Replace this with your actual Google Maps embed URL if needed
  // To get your custom link: Go to Google Maps -> Share -> Embed a map -> Copy HTML (extract the src="..." URL)
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172.4461621354262!2d77.39120546791386!3d28.614478633336347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce50231b6fe39%3A0x5d390880866a6406!2sMPIS%20REVOLUTION%20PRIVATE%20LIMITED!5e1!3m2!1sen!2sin!4v1779517965038!5m2!1sen!2sin";

  const MapLink = "https://maps.app.goo.gl/QqtEzyHLbLS1DEE16";
  return (
    <section className="relative bg-zinc-950 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden text-zinc-100">
      {/* Background glow ambiance */}
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[clamp(2.25rem,6vw,4.5rem)] font-normal tracking-tight text-white leading-[1.1]"
          >
              Find {" "}
            <span className="font-serif italic font-light text-blue-600">
            Us
            </span>
            
           
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-zinc-400 max-w-2xl mx-auto"
          >
            Stop by our headquarters or get in touch for a personal
            consultation.
          </motion.p>
        </div>

        {/* Layout Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Location Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-zinc-900/60 backdrop-blur-md p-8 rounded-2xl border border-zinc-800/80 flex flex-col justify-between h-full"
          >
            <div>
              <span className="inline-block text-xs font-semibold text-blue-400 bg-blue-950/40 border border-blue-900/60 px-3 py-1 rounded-full mb-6 tracking-wider">
                OUR HEADQUARTERS
              </span>
              <h3 className="text-2xl font-bold text-white mb-4">
                MPIS REVOLUTION PRIVATE LIMITED
              </h3>

              {/* Office Details */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-zinc-800 border border-zinc-700 text-blue-400 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Address</h4>
                    <p className="text-sm text-zinc-400 mt-0.5">
                      123 Business Boulevard, Sector 4, Ghaziabad, UP, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-zinc-800 border border-zinc-700 text-blue-400 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">
                      Operating Hours
                    </h4>
                    <p className="text-sm text-zinc-400 mt-0.5">
                      Mon - Fri: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="mt-8 pt-6 border-t border-zinc-800/80">
              <a
                href={MapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 px-4 rounded-xl transition-colors duration-200 shadow-[0_4px_20px_rgba(59,130,246,0.3)]"
              >
                Get Directions
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Map Embed Panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-2 relative min-h-[400px] lg:min-h-full rounded-2xl overflow-hidden border border-zinc-800/80 shadow-2xl bg-zinc-900"
          >
            {/* Custom dark filter overlay seamlessly blend standard Google maps into a dark web UI */}
            <div className="absolute inset-0 pointer-events-none z-10 border border-zinc-800/80 rounded-2xl" />

            <iframe
              title="Google Maps Location"
              src={mapEmbedUrl}
              className="w-full h-full  "
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
