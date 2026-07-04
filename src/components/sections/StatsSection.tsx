// React import removed because it was unused

const statsData = [
    {
        id: "01",
        label: "Années d'expérience",
        value: "15+"
    },
    {
        id: "02",
        label: "Filiales",
        value: "5+"
    },
    {
        id: "03",
        label: "Projets Réalisés",
        value: "50+"
    },
    {
        id: "04",
        label: "Collaborateurs",
        value: "200+"
    }
];

export default function StatsSection() {
    return (
        <section className="w-full bg-white py-12 md:py-24">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col">
                {/* Optional Title or leaving it clean like the image */}
                <div className="w-full flex flex-col">
                    {statsData.map((stat, index) => (
                        <div 
                            key={stat.id} 
                            className={`flex flex-col md:flex-row items-start md:items-center justify-between py-12 lg:py-16 border-b border-black/10 ${index === 0 ? 'border-t' : ''} hover:bg-gray-50/50 transition-colors duration-300`}
                        >
                            {/* Left side: Index and Label */}
                            <div className="flex items-center gap-4 mb-4 md:mb-0 md:w-1/2">
                                <span className="text-xs md:text-sm font-sans font-medium text-black/30">
                                    {stat.id}
                                </span>
                                <span className="text-sm md:text-base font-sans font-medium text-black/60">
                                    {stat.label}
                                </span>
                            </div>
                            
                            {/* Right side: Large Number */}
                            <div className="md:w-1/2 flex justify-start md:justify-end">
                                <h3 className="text-6xl md:text-8xl lg:text-[120px] leading-none font-sans font-bold tracking-tighter text-sibiri-blue">
                                    {stat.value}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
