// Shared TypeScript Interfaces for Shree Chowdeshwari Tours and Travels

export type UserRole =
  | 'SUPER_ADMIN'
  | 'ADMIN'
  | 'OPERATIONS_MANAGER'
  | 'FLEET_MANAGER'
  | 'MARKETING_MANAGER'
  | 'SALES_AGENT'
  | 'DRIVER';

export type TourType =
  | 'FAMILY'
  | 'HONEYMOON'
  | 'ADVENTURE'
  | 'LUXURY'
  | 'PILGRIMAGE'
  | 'CORPORATE'
  | 'GROUP'
  | 'WEEKEND'
  | 'INTERNATIONAL'
  | 'CUSTOM';

export type BookingStatus =
  | 'NEW'
  | 'CONTACTED'
  | 'QUOTATION_SENT'
  | 'PAYMENT_PENDING'
  | 'CONFIRMED'
  | 'IN_PROGRESS'
  | 'COMPLETED'
  | 'CANCELLED';

export type LeadStatus =
  | 'NEW'
  | 'CONTACTED'
  | 'QUALIFIED'
  | 'QUOTATION'
  | 'NEGOTIATION'
  | 'WON'
  | 'LOST';

export type DriverStatus =
  | 'AVAILABLE'
  | 'ASSIGNED'
  | 'ON_TRIP'
  | 'ON_LEAVE'
  | 'INACTIVE';

export type VehicleStatus =
  | 'AVAILABLE'
  | 'ASSIGNED'
  | 'ON_TRIP'
  | 'MAINTENANCE'
  | 'INACTIVE';

export type VehicleType =
  | 'SEDAN'
  | 'SUV'
  | 'MUV'
  | 'TEMPO_TRAVELLER'
  | 'MINI_BUS'
  | 'LUXURY_COACH'
  | 'OTHER';

export type TripStatus =
  | 'SCHEDULED'
  | 'ASSIGNED'
  | 'DRIVER_CONFIRMED'
  | 'IN_PROGRESS'
  | 'COMPLETED'
  | 'CANCELLED';

export interface IDestination {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  heroImage: string;
  stateOrCountry: string;
  highlights: string[];
  bestTimeToVisit: string;
  travelTips?: string;
  isFeatured: boolean;
  isActive: boolean;
  toursCount?: number;
  startingPrice?: string;
}

export interface ITour {
  id: string;
  tourCode: string;
  title: string;
  slug: string;
  destinationName: string;
  destinationSlug: string;
  tourType: TourType;
  durationDays: number;
  durationNights: number;
  startingPrice: number;
  originalPrice?: number;
  maxTravellers: number;
  badge?: string;
  overview: string;
  heroImage: string;
  gallery: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
    stay?: string;
    meals?: string;
    activities: string[];
  }[];
  inclusions: string[];
  exclusions: string[];
  isFeatured: boolean;
  isActive: boolean;
  rating: number;
  reviewsCount: number;
}

export interface IBooking {
  id: string;
  bookingReference: string;
  tourTitle: string;
  destinationName: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  travelStartDate: string;
  travelEndDate: string;
  guestsCount: number;
  netAmount: number;
  paidAmount: number;
  status: BookingStatus;
  paymentStatus: 'PENDING' | 'PARTIAL' | 'PAID' | 'REFUNDED';
  pickupAddress?: string;
  createdAt: string;
}

export interface ILead {
  id: string;
  leadCode: string;
  fullName: string;
  email: string;
  phone: string;
  destination?: string;
  tourTitle?: string;
  travelDate?: string;
  travellersCount: number;
  estimatedBudget?: number;
  status: LeadStatus;
  source: string;
  assignedStaffName?: string;
  nextFollowUp?: string;
  createdAt: string;
}

export interface IDriver {
  id: string;
  driverCode: string;
  fullName: string;
  photoUrl?: string;
  mobile: string;
  experienceYears: number;
  licenseNumber: string;
  licenseType: string;
  licenseExpiry: string;
  status: DriverStatus;
  assignedVehicle?: string;
  currentTrip?: string;
}

export interface IVehicle {
  id: string;
  registrationNumber: string;
  make: string;
  model: string;
  year: number;
  vehicleType: VehicleType;
  fuelType: string;
  seatingCapacity: number;
  currentOdometer: number;
  status: VehicleStatus;
  assignedDriver?: string;
  insuranceExpiry: string;
  pucExpiry: string;
  fitnessExpiry: string;
}

export interface ITrip {
  id: string;
  tripCode: string;
  bookingReference: string;
  tourTitle: string;
  customerName: string;
  vehicleReg?: string;
  driverName?: string;
  startDateTime: string;
  endDateTime: string;
  pickupLocation: string;
  dropLocation: string;
  passengersCount: number;
  status: TripStatus;
  revenue: number;
  expenses: number;
  estimatedProfit: number;
}
