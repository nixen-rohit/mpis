import React from 'react'
import Faq from "@/components/Faq";
import Consultation from '@/components/Consultation';
import { Testimonials } from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";

import ServicePrice from '@/components/ServicePrice';

export default function page() {
  return (
    <div className='bg-white '>
      <ServicePrice />
      <Testimonials />

      <Consultation />
      <CtaBanner />
      <Faq />
    </div>
  )
}
