import { TrendingUp, TrendingDown, Clock, CheckCircle, XCircle, FileText } from 'lucide-react';

export default function LeaveStats() {
    const stats = [
        {
            title: "Total Leave Requests",
            value: "125",
            subtext: "This month",
            indicator: "▲ 12%",
            isPositive: true,
            icon: FileText,
            color: "text-blue-500",
            bg: "bg-lightSky"
        },
        {
            title: "Approved Leaves",
            value: "80",
            subtext: "This month",
            indicator: "▲ 8%",
            isPositive: true,
            icon: CheckCircle,
            color: "text-blue-600",
            bg: "bg-blue-50"
        },
        {
            title: "Pending Requests",
            value: "30",
            subtext: "This month",
            indicator: "▲ 5%",
            isPositive: true,
            icon: Clock,
            color: "text-orange-500",
            bg: "bg-orange-50"
        },
        {
            title: "Rejected Requests",
            value: "15",
            subtext: "This month",
            indicator: "▼ 2%",
            isPositive: false,
            icon: XCircle,
            color: "text-red-500",
            bg: "bg-red-50"
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                    <div
                        key={index}
                        className="bg-white rounded-[10px] p-6 border border-borderColor shadow-sm hover:shadow-soft transition-shadow duration-300"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <p className="text-textSecondary text-sm font-medium mb-1">{stat.title}</p>
                                <h3 className="text-3xl font-bold text-dark">{stat.value}</h3>
                            </div>
                            <div className={`p-3 rounded-md ${stat.bg} ${stat.color}`}>
                                <Icon size={24} />
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${stat.isPositive
                                ? 'text-emerald-700 bg-emerald-100/50'
                                : 'text-rose-700 bg-rose-100/50'
                                }`}>
                                {stat.isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                                <span>{stat.indicator.replace(/[▲▼]/g, '').trim()}</span>
                            </div>
                            <span className="text-textSecondary text-xs">{stat.subtext}</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
