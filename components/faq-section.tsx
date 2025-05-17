"use client";

import { motion } from "@/components/motion-wrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does CV Studio's AI tailoring work?",
    answer: "CV Studio uses natural language processing to analyze job descriptions and identify key requirements, skills, and qualifications. It then reorganizes and emphasizes the relevant parts of your resume to match these requirements, ensuring your application passes through ATS systems and impresses hiring managers."
  },
  {
    question: "Will the AI rewrite my entire resume?",
    answer: "No, CV Studio won't completely rewrite your experience or qualifications. Rather, it intelligently reorganizes, emphasizes, and adjusts your existing content to better align with the job description. You maintain full control over the final version and can accept or reject any changes."
  },
  {
    question: "Is my personal data secure?",
    answer: "Absolutely. We take data privacy very seriously. Your resume data is encrypted both in transit and at rest. We don't sell or share your personal information with third parties, and you can request deletion of your data at any time."
  },
  {
    question: "How many different versions of my resume can I create?",
    answer: "With our standard plan, you can create unlimited tailored versions of your resume. Each version is saved in your account so you can track which resume was used for which application."
  },
  {
    question: "What file formats can I download my resume in?",
    answer: "CV Studio allows you to download your tailored resume in multiple formats including PDF, DOCX, TXT, and HTML. This ensures compatibility with various application systems."
  },
  {
    question: "Can CV Studio help with cover letters too?",
    answer: "Yes! Our premium plans include AI-powered cover letter generation that matches the tone and focus of your tailored resume, creating a consistent and compelling application package."
  }
];

export function FaqSection() {
  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            className="mt-4 text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Everything you need to know about CV Studio
          </motion.p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.05 * index }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}