import React from 'react';
import { Card } from '../ui/card';

export default function ContactCard({ name, phone }) {
  return (
    <Card className="bg-[#371A6C] text-white w-full sm:w-80 shadow-lg p-4 relative cursor-pointer hover:border-primary border-2 border-transparent">
      <div className="flex items-start justify-between">
        <div className="flex items-center">
          <div className="bg-gray-400 w-16 h-16 rounded-full"></div>
          <div className="ml-4 flex flex-col justify-start">
            <p className="font-bold">{name}</p>
            <p className="mt-1 text-primary">{phone}</p>
          </div>
        </div>
        <div className="ml-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </div>
      </div>
    </Card>
  );
}
