'use client';

import {
  ScanBarcode,
  FilePlus2,
  Home,
  Mail,
  MoreHorizontal,
} from 'lucide-react';
import SidebarDesktop from './sidebar-desktop';
import { SidebarItems } from '@/types';
import { SidebarButton } from './sidebar-button';

const sidebarItems: SidebarItems = {
  links: [
    { label: 'Home', href: '/', icon: Home },
    { label: 'Pedidos', href: '/pedidos', icon: ScanBarcode },
    { label: 'Expedidos', href: '/expedidos', icon: FilePlus2 },
  ],
  // extras: (
  //   <div className='flex flex-col gap-2'>
  //     <SidebarButton icon={MoreHorizontal} className='w-full'>
  //       More
  //     </SidebarButton>
  //   </div>
  // ),
};

export function Sidebar() {
  return <SidebarDesktop sidebarItems={sidebarItems} />;
}
