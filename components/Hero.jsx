"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const imageRef = useRef(null);

  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full pt-36 md:pt-48 pb-10">
      <div className="space-y-6 text-center">
        <div className="space-y-6 mx-auto">
          <motion.h1
            className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title animate-gradient"
            variants={headingVariants}
            initial="hidden"
            animate="visible"
          >
            Your AI Career Coach for
            <br />
            Professional Success
          </motion.h1>

          <motion.p
            className="mx-auto max-w-[600px] text-muted-foreground md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            Advance your career with personalized guidance, interview prep, and
            AI-powered tools for job success.
          </motion.p>
        </div>

        <motion.div
          className="flex justify-center space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
        >
          <Link href="/dashboard">
            <Button size="lg" className="bg-emerald-500 px-8">
              Get Started
            </Button>
          </Link>
        </motion.div>

        <div className="hero-image-wrapper mt-5 md:mt-0">
          <motion.div
            ref={imageRef}
            className="px-3 md:px-0 inline-block"
            whileHover={{ rotateY: 10, rotateX: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            style={{ perspective: 1000 }}
          >
            <Image
              src="/banner3.jpeg"
              width={1280}
              height={720}
              alt="Dashboard Preview"
              className="rounded-lg shadow-2xl border mx-auto"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
