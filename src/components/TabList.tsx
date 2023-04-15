import {ReactNode, useState} from "react";

interface TabListProps {
    tabs: { title: string, content: ReactNode }[]
}

export const TabList = ({tabs}: TabListProps) => {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div className="flex flex-col justify-center items-center gap-12">
            <div className="space-x-6">
                {tabs.map(({title}, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={activeTab === index ? "font-semibold text-[#5b4eed] dark:text-[#eb7d55]" : "font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"}
                    >
                        {title}
                    </button>
                ))}
            </div>
            {tabs[activeTab].content}
        </div>
    )
}