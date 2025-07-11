'use client'
import React from 'react'
import AnimatedTabs from '../common/animated-tab'
import { NotificationsContent, ProfileContent, SecurityContent, SettingsContent } from '../common/tab-content'
import { User, Settings, Bell, Shield } from 'lucide-react';

const SkillSeactions = () => {
   const tabs = [
      {
         id: 'all',
         label: 'All',
         icon: <User size={16} />,
         content: <ProfileContent />
      },
      {
         id: 'frontend',
         label: 'Frontend',
         icon: <Settings size={16} />,
         content: <SettingsContent />
      },
      {
         id: 'backend',
         label: 'Backend',
         icon: <Bell size={16} />,
         content: <NotificationsContent />
      },
      {
         id: 'database',
         label: 'Database',
         icon: <Shield size={16} />,
         content: <SecurityContent />
      }
   ];
   return (
      <div className="container-webx !py-20">
         <div className="mb-5">
            <h2 className="relative text-2xl md:text-4xl font-semibold text-center mb-4">My skills</h2>
            <p className='w-11/12 lg:w-7/12 text-[15px] text-center mx-auto'>I specialize in full-stack JavaScript development, covering frontend, backend, and database technologies. Here&apos;s a breakdown of tools and frameworks I work with regularly.</p>
         </div>
         <AnimatedTabs tabs={tabs} defaultTab="all" />
      </div>
   )
}

export default SkillSeactions