import { useNavigate } from "react-router-dom"

const WorkPlace = () => {

    const navigate = useNavigate()

    const workplaceServices = [
        {
            heading: 'Write Blog Post',
            desc: 'Transform a blog post into content for all of your channels.',
            link: '/services/blog-writing'
        },
        {
            heading: 'Write Ads',
            desc: 'Transform a blog post into content for all of your channels.',
            link: '/services/ad-writing'
        },
        {
            heading: 'SEO Optimized Writing',
            desc: 'Transform a blog post into content for all of your channels.',
            link: '/services/seo-writing'
        }
    ]

    const ServiceCard = ({ ...props }) => {
        return (
            <div className='flex-1 h-full w-full lg:max-w-96 flex flex-col justify-between items-start p-8 bg-[#F5F8FF] border border-black border-b-4 rounded-3xl gap-4'>
                <h1 className='text-2xl font-semibold'>{props.heading}</h1>
                <span className='text-[#0F0F0F]/[0.80]'>{props.desc}</span>
                <button className='w-full bg-[#01004F] text-white rounded-xl p-2' onClick={() => navigate(`${props.link}`)}>
                    Generate Post
                </button>
            </div>
        )
    }

    return (
        <section
            className='w-full min-h-screen py-24 px-20 flex flex-col gap-8'
        >
            <h1 className='text-4xl font-semibold'>Create you marketing with AI</h1>
            <div
                className='grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
            >
                {
                    workplaceServices.map((service, index) => (
                        <ServiceCard
                            {...service}
                            key={index}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default WorkPlace