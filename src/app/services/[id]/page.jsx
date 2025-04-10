const ServiceDetailsPage = ({ params }) => {
    const id = params.id;

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

    const existData = data.find(service => service._id === id);

    if(existData){
        return (
            <section className='service'>
                <h1  className="text-center text-slate-800 text-2xl font-medium">Service Details page: {id}</h1>
    
                <div className="my-5">
                    <img src={existData?.image} alt="Service Image" className="w-full h-[250px] md:h-[400px] rounded-md" />
    
                    <div className="mt-5">
                        <h1 className="text-2xl font-medium text-slate-700">{existData?.title}</h1>
                    </div>
                </div>
            </section>
        );
    }
};

export default ServiceDetailsPage;