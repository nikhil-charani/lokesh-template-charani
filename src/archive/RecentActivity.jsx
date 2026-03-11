import React from 'react';
import { Calendar, UserPlus, CheckCircle, FileText, Briefcase } from 'lucide-react';

const activityData = [
    {
        id: 1,
        title: 'New Employee Onboarded',
        desc: 'Sarah Johnson joined UI/UX Design team',
        time: 'Just now',
        icon: UserPlus,
        color: 'text-primary',
        bgColor: 'bg-lightSky'
    },
    {
        id: 2,
        title: 'Leave Request Approved',
        desc: 'Mike Kline (Annual Leave) approved by HR',
        time: '2 hours ago',
        icon: CheckCircle,
        color: 'text-green-500',
        bgColor: 'bg-green-50'
    },
    {
        id: 3,
        title: 'Interview Scheduled',
        desc: 'Interview with David Lee for Frontend Developer',
        time: 'Yesterday, 10:30 AM',
        icon: Calendar,
        color: 'text-orange-500',
        bgColor: 'bg-orange-50'
    },
    {
        id: 4,
        title: 'Monthly Report Generated',
        desc: 'Financial expense reports exported',
        time: 'Yesterday, 04:15 PM',
        icon: FileText,
        color: 'text-[#8B5CF6]',
        bgColor: 'bg-[#8B5CF6]/10'
    },
    {
        id: 5,
        title: 'Project Milestone Reached',
        desc: 'NEXI5 Portal Phase 1 successfully delivered',
        time: '2 Days ago',
        icon: Briefcase,
        color: 'text-[#2563EB]',
        bgColor: 'bg-[#2563EB]/10'
    }
];

export default function RecentActivity() {
    return (
        <div className="bg-white p-6 rounded-[10px] border border-borderColor shadow-[0px_10px_25px_rgba(0,0,0,0.08)] flex flex-col mb-6">
            <h3 className="font-headings font-bold text-dark text-lg mb-6">Recent Activity</h3>

            <div className="flex flex-col relative w-full px-2">
                {/* Vertical Timeline Track */}
                <div className="absolute left-6 top-4 bottom-4 w-px bg-borderColor hidden sm:block"></div>

                {activityData.map((activity, index) => {
                    const Icon = activity.icon;
                    return (
                        <div key={activity.id} className="relative flex items-start gap-4 sm:gap-6 mb-6 last:mb-0 group cursor-default">
                            {/* Icon Container with background hiding the track wire */}
                            <div className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${activity.bgColor} border-4 border-white group-hover:scale-110 transition-transform`}>
                                <Icon size={16} className={activity.color} />
                            </div>

                            <div className="flex-1 bg-gray-50/50 hover:bg-lightBlueBg/50 p-3 sm:p-4 rounded-lg border border-transparent hover:border-borderColor transition-colors">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1.5 sm:gap-0 mb-1">
                                    <h4 className="text-[14px] font-bold text-dark">{activity.title}</h4>
                                    <span className="text-xs font-semibold text-textSecondary bg-white border border-borderColor px-2 py-0.5 rounded-full inline-block w-max">
                                        {activity.time}
                                    </span>
                                </div>
                                <p className="text-[13px] text-textSecondary font-medium leading-relaxed">{activity.desc}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <button className="w-full mt-6 py-2.5 rounded-md bg-lightBlueBg text-primary font-semibold text-sm hover:bg-primary hover:text-white transition-all active:scale-95 border border-primary/20">
                View All Activity
            </button>
        </div>
    );
}
