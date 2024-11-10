import React from 'react';
import { Activity, Users, Building, Calendar } from 'lucide-react';
import { mockTickets, mockCompanies, mockEvents } from '../data/mockData';

const StatCard = ({ icon: Icon, label, value, color }: {
  icon: React.ElementType;
  label: string;
  value: string | number;
  color: string;
}) => (
  <div className="bg-white rounded-lg shadow p-6">
    <div className="flex items-center">
      <div className={`p-3 rounded-full ${color} bg-opacity-10`}>
        <Icon className={`h-6 w-6 ${color.replace('bg-', 'text-')}`} />
      </div>
      <div className="ml-4">
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-2xl font-semibold">{value}</p>
      </div>
    </div>
  </div>
);

export default function Dashboard() {
  return (
    <div className="flex-1 p-8 bg-gray-50">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Tableau de Bord</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          icon={Activity}
          label="Tickets actifs"
          value={mockTickets.filter(t => t.status !== 'resolved').length}
          color="bg-blue-500"
        />
        <StatCard
          icon={Users}
          label="Entreprises"
          value={mockCompanies.length}
          color="bg-green-500"
        />
        <StatCard
          icon={Building}
          label="Salles disponibles"
          value="12"
          color="bg-purple-500"
        />
        <StatCard
          icon={Calendar}
          label="Événements à venir"
          value={mockEvents.length}
          color="bg-yellow-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Tickets récents</h2>
          <div className="space-y-4">
            {mockTickets.map(ticket => (
              <div key={ticket.id} className="border-b pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{ticket.title}</h3>
                    <p className="text-sm text-gray-500">{ticket.description}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    ticket.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    ticket.status === 'in_progress' ? 'bg-blue-100 text-blue-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {ticket.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Événements à venir</h2>
          <div className="space-y-4">
            {mockEvents.map(event => (
              <div key={event.id} className="border-b pb-4">
                <h3 className="font-medium">{event.title}</h3>
                <p className="text-sm text-gray-500">{event.description}</p>
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {new Date(event.date).toLocaleDateString()}
                  </span>
                  <span className="text-sm text-gray-500">
                    {event.currentParticipants}/{event.maxParticipants} participants
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}