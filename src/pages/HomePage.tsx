
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import DirectorsMessage from '../components/sections/DirectorsMessage';
import AdmissionProcess from '../components/sections/AdmissionProcess';
import FAQ from '../components/sections/FAQ';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';


export default function HomePage() {
  return (
    <>
      <Hero />
      <DirectorsMessage />
      <Features />
      
      <AdmissionProcess />
      <div className='text-center sm:mt-3 gap-4'>
        <Link to="/admission">  
        <Button variant="outline">
          Admission Page
        </Button>
        </Link>
       
        </div>  
      <FAQ />
      
    </>
  );
}