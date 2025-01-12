
import CourseCard from '../ui/CourseCard';
import { courses } from '../../data/courses';

export default function CourseList() {
  return (
    <section className="mt-16">
      <h3 className="text-2xl font-bold text-white mb-8">What will you learn in this Degree?</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </section>
  );
}