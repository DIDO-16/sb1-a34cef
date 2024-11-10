import React from 'react';
import { Calendar, Users, MapPin } from 'lucide-react';
import { mockEvents } from '../../data/mockData';
import { useAuth } from '../../contexts/AuthContext';

export default function EventList() {
  const { user } = useAuth();

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Événements</h1>
        {user?.role === 'admin' && (
          <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            <Calendar className="h-4 w-4 mr-2" />
            Créer un événement
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockEvents.map(event => (
          <div key={event.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="mb-4">
              <h3 className="font-medium text-gray-900">{event.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{event.description}</p>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center text-sm text-gray-600">
                <Calendar className="h-4 w-4 mr-2" />
                {new Date(event.date).toLocaleDateString()}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="h-4 w-4 mr-2" />
                {event.location}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Users className="h-4 w-4 mr-2" />
                {event.currentParticipants}/{event.maxParticipants} participants
              </div>
            </div>

            <div className="pt-4 border-t">
              {event.currentParticipants < event.maxParticipants ? (
                <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                  S'inscrire
                </button>
              ) : (
                <button className="w-full px-4 py-2 bg-gray-100 text-gray-500 rounded-lg cursor-not-allowed">
                  Complet
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}