
import SectionTitle from '../components/ui/SectionTitle';
import CourseList from '../components/curriculum/CourseList';
import LearningPath from '../components/curriculum/LearningPath';
import ProgramStats from '../components/curriculum/ProgramStats';
import Structure from '../components/curriculum/Structure';

export default function CurriculumPage() {
  return (
    <div className="bg-[#1A1A1A] pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionTitle
          title="Curriculum Overview"
          subtitle="Your Learning Journey"
          description="A comprehensive curriculum designed to transform you into a data science professional"
        />
        
        <ProgramStats />
        <Structure />
        <LearningPath />
        <CourseList />
      </div>
    </div>
  );
}