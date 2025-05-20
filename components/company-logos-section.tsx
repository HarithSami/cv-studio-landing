import Image from 'next/image'

export function CompanyLogosSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container px-4 mx-auto">
        <h2 className="text-2xl font-bold text-center mb-12 text-foreground/80">
          Trusted by professionals at
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 lg:gap-32">
          {/* Light mode logo (hidden in dark mode) */}
          <Image 
            src="/images/logos-success-stories/ea.png" 
            alt="Electronic Arts logo" 
            width={120} 
            height={60} 
            className="h-8 w-auto object-contain opacity-50 dark:hidden" 
          />
          {/* Dark mode logo (hidden in light mode) */}
          <Image 
            src="/images/logos-success-stories/ea - dark.png" 
            alt="Electronic Arts logo" 
            width={120} 
            height={60} 
            className="h-8 w-auto object-contain opacity-50 hidden dark:block" 
          />
          
          {/* Light mode logo (hidden in dark mode) */}
          <Image 
            src="/images/logos-success-stories/cat.png" 
            alt="Caterpillar logo" 
            width={120} 
            height={60} 
            className="h-8 w-auto object-contain opacity-50 dark:hidden" 
          />
          {/* Dark mode logo (hidden in light mode) */}
          <Image 
            src="/images/logos-success-stories/cat - dark.png" 
            alt="Caterpillar logo" 
            width={120} 
            height={60} 
            className="h-8 w-auto object-contain opacity-50 hidden dark:block" 
          />
          
          {/* Light mode logo (hidden in dark mode) */}
          <Image 
            src="/images/logos-success-stories/bosch.png" 
            alt="Bosch logo" 
            width={120} 
            height={60} 
            className="h-8 w-auto object-contain opacity-50 dark:hidden" 
          />
          {/* Dark mode logo (hidden in light mode) */}
          <Image 
            src="/images/logos-success-stories/bosch - dark.png" 
            alt="Bosch logo" 
            width={120} 
            height={60} 
            className="h-8 w-auto object-contain opacity-50 hidden dark:block" 
          />
          
          {/* Light mode logo (hidden in dark mode) */}
          <Image 
            src="/images/logos-success-stories/nokia.png" 
            alt="Nokia logo" 
            width={120} 
            height={60} 
            className="h-8 w-auto object-contain opacity-50 dark:hidden" 
          />
          {/* Dark mode logo (hidden in light mode) */}
          <Image 
            src="/images/logos-success-stories/nokia -dark.png" 
            alt="Nokia logo" 
            width={120} 
            height={60} 
            className="h-8 w-auto object-contain opacity-50 hidden dark:block" 
          />
          
          {/* Light mode logo (hidden in dark mode) */}
          <Image 
            src="/images/logos-success-stories/bt.png" 
            alt="BT logo" 
            width={120} 
            height={60} 
            className="h-8 w-auto object-contain opacity-50 dark:hidden" 
          />
          {/* Dark mode logo (hidden in light mode) */}
          <Image 
            src="/images/logos-success-stories/bt - dark.png" 
            alt="BT logo" 
            width={120} 
            height={60} 
            className="h-8 w-auto object-contain opacity-50 hidden dark:block" 
          />
        </div>
      </div>
    </section>
  )
}
