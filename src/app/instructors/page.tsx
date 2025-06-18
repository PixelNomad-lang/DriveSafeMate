import Image from 'next/image';

interface Instructor {
  id: number;
  name: string;
  role: string;
  experience: string;
  qualifications: string[];
  image: string;
  bio: string;
}

const instructors: Instructor[] = [
  {
    id: 1,
    name: "John Smith",
    role: "Senior Driving Instructor",
    experience: "15+ years",
    qualifications: ["Certified Driving Instructor", "Defensive Driving Expert", "First Aid Certified"],
    image: "/instructors/instructor1.jpg",
    bio: "John has been teaching safe driving practices for over 15 years. His patient approach and extensive experience make him one of our most sought-after instructors."
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Driving Instructor",
    experience: "8+ years",
    qualifications: ["Advanced Driving Instructor", "Highway Safety Specialist", "Child Passenger Safety Technician"],
    image: "/instructors/instructor2.jpg",
    bio: "Sarah specializes in teaching new drivers and has helped hundreds of students become confident, safe drivers. She's known for her clear communication and supportive teaching style."
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Driving Instructor",
    experience: "10+ years",
    qualifications: ["Professional Driving Instructor", "Commercial Vehicle Specialist", "Road Safety Expert"],
    image: "/instructors/instructor3.jpg",
    bio: "Michael brings a wealth of experience in both private and commercial vehicle instruction. His attention to detail and focus on safety has earned him numerous accolades."
  }
];

export default function InstructorsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Expert Instructors
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our team of certified driving instructors at Drive Safe Mate Driving School.
            Each instructor brings years of experience and a commitment to teaching safe driving practices.
          </p>
        </div>

        {/* Instructors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {instructor.name}
                </h2>
                <p className="text-blue-600 font-semibold mb-2">
                  {instructor.role}
                </p>
                <p className="text-gray-600 mb-4">
                  Experience: {instructor.experience}
                </p>
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">
                    Qualifications:
                  </h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {instructor.qualifications.map((qual, index) => (
                      <li key={index}>{qual}</li>
                    ))}
                  </ul>
                </div>
                <p className="text-gray-600">{instructor.bio}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Book a lesson with one of our expert instructors today!
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
            Book a Lesson
          </button>
        </div>
      </div>
    </div>
  );
}
