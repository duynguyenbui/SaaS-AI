import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from 'lucide-react';

export const MAX_FREE_COUNTS = 5;

export const tools = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
    color: 'text-sky-500',
  },
  {
    label: 'Conversation',
    icon: MessageSquare,
    href: '/conversation',
    color: 'text-violet-500',
    bgColor: 'bg-violet-500/10',
  },
  {
    label: 'Music Generation',
    icon: Music,
    href: '/music',
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
  },
  {
    label: 'Video Generation',
    icon: VideoIcon,
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    href: '/video',
  },
  {
    label: 'Settings',
    icon: Settings,
    color: 'text-white/10',
    bgColor: 'bg-white',
    href: '/settings',
  },
];
