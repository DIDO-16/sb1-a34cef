import React from 'react';
import { Plus, Filter } from 'lucide-react';
import { mockTickets } from '../../data/mockData';
import { useAuth } from '../../contexts/AuthContext';
import TicketCard from './TicketCard';

export default function TicketList() {
  const { user } = useAuth();
  
  const filteredTickets = mockTickets.filter(ticket => {
    if (user?.role === 'it_service') return ticket.type === 'it';
    if (user?.role === 'building_service') return ticket.type === 'building';
    if (user?.role === 'company') return ticket.createdBy === user.id;
    return true; // Admin sees all tickets
  });

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Tickets</h1>
        <div className="flex space-x-4">
          <button className="flex items-center px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
            <Filter className="h-4 w-4 mr-2" />
            Filtrer
          </button>
          <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            <Plus className="h-4 w-4 mr-2" />
            Nouveau ticket
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTickets.map(ticket => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
}