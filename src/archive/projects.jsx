import { FolderKanban, TrendingUp, CheckCircle2, AlertTriangle } from 'lucide-react';

const statsData = [
    {
        title: 'Total Projects',
        value: '48',
        icon: FolderKanban,
        color: 'text-primary',
        bgColor: 'bg-lightSky',
        label: '+8 this month'
    },
    {
        title: 'Active Projects',
        value: '21',
        icon: TrendingUp,
        color: 'text-emerald-500',
        bgColor: 'bg-emerald-50',
        label: '+3 this month'
    },
    {
        title: 'Completed Projects',
        value: '19',
        icon: CheckCircle2,
        color: 'text-indigo-500',
        bgColor: 'bg-indigo-50',
        label: '+6 completed'
    },
    {
        title: 'Overdue Projects',
        value: '8',
        icon: AlertTriangle,
        color: 'text-rose-500',
        bgColor: 'bg-rose-50',
        label: 'Needs attention',
        labelColor: 'text-rose-500 font-medium'
    }
];

export default function ProjectStatsCards() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
            {statsData.map((stat, index) => {
                const Icon = stat.icon;
                return (
                    <div
                        key={index}
                        className="bg-white rounded-[10px] p-6 shadow-[0px_10px_25px_rgba(0,0,0,0.08)] border border-borderColor hover:shadow-lg transition-all duration-300 group"
                    >
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm font-medium text-textSecondary mb-1">{stat.title}</p>
                                <h3 className="text-3xl font-bold text-dark font-headings">{stat.value}</h3>
                            </div>
                            <div className={`p-3 rounded-md ${stat.bgColor} transition-transform group-hover:scale-110`}>
                                <Icon className={stat.color} size={24} />
                            </div>
                        </div>
                        <div className="mt-4 flex items-center gap-2">
                            <span className={`text-xs ${stat.labelColor || 'text-textSecondary'}`}>
                                {stat.label}
                            </span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
