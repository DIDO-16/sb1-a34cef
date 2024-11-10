export type User = {
  id: string;
  username: string;
  email: string;
  role: 'admin' | 'it_service' | 'building_service' | 'company' | 'potential_client';
  companyName?: string;
  avatar?: string;
};

export type TicketStatus = 'todo' | 'in_progress' | 'done';

export type Ticket = {
  id: string;
  title: string;
  description: string;
  type: 'it' | 'building';
  status: TicketStatus;
  priority: 'low' | 'medium' | 'high';
  createdBy: string;
  assignedTo?: string;
  createdAt: string;
  updatedAt: string;
  startedAt?: string;
  completedAt?: string;
  estimatedTime?: number; // in minutes
  actualTime?: number; // in minutes
  comments?: TicketComment[];
};

export type TicketComment = {
  id: string;
  ticketId: string;
  userId: string;
  content: string;
  createdAt: string;
};

export type Room = {
  id: string;
  name: string;
  capacity: number;
  type: 'meeting' | 'training';
  equipment: string[];
  isAvailable: boolean;
};

export type EventType = 'external' | 'tenant' | 'anpt';

export type Event = {
  id: string;
  title: string;
  description: string;
  type: EventType;
  date: string;
  endDate: string;
  location: string;
  maxParticipants: number;
  currentParticipants: number;
  registeredUsers?: string[];
  organizer: string; // User ID or company name for external events
  price?: number;
};

export type Invoice = {
  id: string;
  companyId: string;
  number: string;
  date: string;
  dueDate: string;
  items: InvoiceItem[];
  total: number;
  status: 'pending' | 'paid' | 'overdue';
  paidAt?: string;
};

export type InvoiceItem = {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
  type: 'rent' | 'service' | 'event';
};

export type TicketFormData = {
  title: string;
  description: string;
  type: 'it' | 'building';
  priority: 'low' | 'medium' | 'high';
};