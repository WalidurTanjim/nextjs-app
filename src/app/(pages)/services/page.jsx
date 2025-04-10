import SectionTitle from "@/app/components/SectionTitle/SectionTitle";
import Link from "next/link";

const ServicesPage = () => {
    const data = [
        {
            "_id": "1",
            "name": "Alice Johnson",
            "title": "Frontend Developer",
            "description": "Passionate about creating interactive UI with React and Tailwind CSS.\nEnjoys solving UI challenges and improving user experience.",
            "image": "https://i.ibb.co.com/SwT4gznz/echo-board.png"
        },
        {
            "_id": "2",
            "name": "Michael Lee",
            "title": "Backend Engineer",
            "description": "Loves working with Node.js and MongoDB to build scalable APIs.\nFocuses on clean architecture and efficient database queries.",
            "image": "https://i.ibb.co.com/vC6jqy8g/rinterio.png"
        },
        {
            "_id": "3",
            "name": "Sara Kim",
            "title": "UI/UX Designer",
            "description": "Designs beautiful and user-friendly interfaces with Figma.\nAims to bridge the gap between design and development.",
            "image": "https://i.ibb.co.com/FLp6rXKH/peddy.png"
        },
        {
            "_id": "4",
            "name": "David Chen",
            "title": "DevOps Specialist",
            "description": "Ensures smooth deployments and CI/CD pipelines using Docker and GitHub Actions.\nHas a strong focus on performance and uptime.",
            "image": "https://i.ibb.co.com/bRMv7q26/movie-portal.png"
        },
        {
            "_id": "5",
            "name": "Nina Patel",
            "title": "Full Stack Developer",
            "description": "Combines frontend and backend skills to build complete web solutions.\nLoves exploring new tech stacks and frameworks.",
            "image": "https://i.ibb.co.com/Y4R4ZZ8X/gadget-heaven.png"
        }
    ]

    return (
        <section className="services-page">
            <SectionTitle title="Services page" />

            <div className="my-5 grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {
                    data?.map(service => {
                        const { _id, name, title, description, image } = service;

                        return (
                            <Link href={`/services/${_id}`}>
                                <div key={_id} className="service group border border-gray-300 rounded-xl p-4 hover:shadow-md">
                                    <img src={image} alt="Service Image" className="w-full rounded-md h-[145px] border border-gray-400" />

                                    <div className="mt-3">
                                        <h1 className="text-slate-600 font-semibold group-hover:text-gray-900">{title}</h1>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default ServicesPage;