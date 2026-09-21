import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { mockDatabase } from './data/mockDatabase';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(morgan('dev'));

// In-memory operational database instance
const db = { ...mockDatabase };

// Health Check
app.get('/api/health', (req: Request, res: Response) => {
  res.json({
    status: 'online',
    brand: 'SHREE CHOWDESHWARI TOURS AND TRAVELS',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// ----------------------------------------------------
// Public Travel Marketing Endpoints
// ----------------------------------------------------

// Destinations
app.get('/api/destinations', (req: Request, res: Response) => {
  res.json({ success: true, count: db.destinations.length, data: db.destinations });
});

app.get('/api/destinations/:slug', (req: Request, res: Response) => {
  const dest = db.destinations.find(d => d.slug === req.params.slug);
  if (!dest) {
    return res.status(404).json({ success: false, message: 'Destination not found' });
  }
  const relatedTours = db.tours.filter(t => t.destinationSlug === dest.slug);
  res.json({ success: true, data: { ...dest, tours: relatedTours } });
});

// Tours
app.get('/api/tours', (req: Request, res: Response) => {
  const { type, destination, featured } = req.query;
  let filtered = [...db.tours];

  if (type) {
    filtered = filtered.filter(t => t.tourType.toLowerCase() === (type as string).toLowerCase());
  }
  if (destination) {
    filtered = filtered.filter(t => t.destinationSlug === destination || t.destinationName.toLowerCase().includes((destination as string).toLowerCase()));
  }
  if (featured === 'true') {
    filtered = filtered.filter(t => t.isFeatured);
  }

  res.json({ success: true, count: filtered.length, data: filtered });
});

app.get('/api/tours/:slug', (req: Request, res: Response) => {
  const tour = db.tours.find(t => t.slug === req.params.slug);
  if (!tour) {
    return res.status(404).json({ success: false, message: 'Tour package not found' });
  }
  res.json({ success: true, data: tour });
});

// Reviews & FAQs
app.get('/api/reviews', (req: Request, res: Response) => {
  res.json({ success: true, count: db.reviews.length, data: db.reviews });
});

app.get('/api/faqs', (req: Request, res: Response) => {
  res.json({ success: true, count: db.faqs.length, data: db.faqs });
});

// ----------------------------------------------------
// Lead & Trip Planning Enquiries
// ----------------------------------------------------

app.post('/api/leads', (req: Request, res: Response) => {
  const { fullName, email, phone, destination, tourTitle, travelDate, travellersCount, estimatedBudget, message, source } = req.body;

  if (!fullName || !phone) {
    return res.status(400).json({ success: false, message: 'Full name and phone number are required.' });
  }

  const newLead = {
    id: `lead-${Date.now()}`,
    leadCode: `LEAD-2026-${Math.floor(100 + Math.random() * 900)}`,
    fullName,
    email: email || '',
    phone,
    destination: destination || 'Custom Karnataka / India Itinerary',
    tourTitle: tourTitle || 'Tailored Holiday Package',
    travelDate: travelDate || new Date().toISOString().split('T')[0],
    travellersCount: Number(travellersCount) || 2,
    estimatedBudget: Number(estimatedBudget) || 25000,
    status: 'NEW' as const,
    source: source || 'Web Form',
    assignedStaffName: 'Anand Kumar (Senior Sales)',
    nextFollowUp: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    createdAt: new Date().toISOString()
  };

  db.leads.unshift(newLead);

  res.status(201).json({
    success: true,
    message: 'Thank you! Your travel inquiry has been received. Our holiday specialist will call you shortly.',
    data: newLead
  });
});

// ----------------------------------------------------
// Booking Engine
// ----------------------------------------------------

app.post('/api/bookings', (req: Request, res: Response) => {
  const {
    tourId,
    tourTitle,
    destinationName,
    customerName,
    customerEmail,
    customerPhone,
    travelStartDate,
    travelEndDate,
    guestsCount,
    netAmount,
    pickupAddress,
    specialRequests
  } = req.body;

  if (!customerName || !customerPhone || !travelStartDate) {
    return res.status(400).json({ success: false, message: 'Missing required customer or booking details' });
  }

  const bookingRef = `SCT-2026-${Math.floor(100000 + Math.random() * 900000)}`;

  const newBooking = {
    id: `book-${Date.now()}`,
    bookingReference: bookingRef,
    tourTitle: tourTitle || 'Custom Tour',
    destinationName: destinationName || 'Karnataka',
    customerName,
    customerEmail: customerEmail || '',
    customerPhone,
    travelStartDate,
    travelEndDate: travelEndDate || travelStartDate,
    guestsCount: Number(guestsCount) || 2,
    netAmount: Number(netAmount) || 15000,
    paidAmount: Number(netAmount) ? Math.round(Number(netAmount) * 0.25) : 3500, // 25% Advance Token
    status: 'CONFIRMED' as const,
    paymentStatus: 'PARTIAL' as const,
    pickupAddress: pickupAddress || 'Bangalore pickup',
    createdAt: new Date().toISOString()
  };

  db.bookings.unshift(newBooking);

  res.status(201).json({
    success: true,
    message: 'Booking generated successfully!',
    bookingReference: bookingRef,
    data: newBooking
  });
});

app.get('/api/bookings/:reference', (req: Request, res: Response) => {
  const booking = db.bookings.find(b => b.bookingReference.toLowerCase() === req.params.reference.toLowerCase());
  if (!booking) {
    return res.status(404).json({ success: false, message: 'Booking reference not found' });
  }
  res.json({ success: true, data: booking });
});

// ----------------------------------------------------
// Admin Operations & Management APIs
// ----------------------------------------------------

app.get('/api/admin/overview', (req: Request, res: Response) => {
  const totalBookingsRevenue = db.bookings.reduce((sum, b) => sum + b.netAmount, 0);
  const totalExpenses = db.trips.reduce((sum, t) => sum + t.expenses, 0) + db.maintenance.reduce((sum, m) => sum + m.cost, 0);
  const activeTripsCount = db.trips.filter(t => t.status === 'IN_PROGRESS').length;
  const availableVehiclesCount = db.vehicles.filter(v => v.status === 'AVAILABLE').length;

  res.json({
    success: true,
    data: {
      metrics: {
        totalRevenue: totalBookingsRevenue,
        netProfit: totalBookingsRevenue - totalExpenses,
        activeBookings: db.bookings.length,
        pendingLeads: db.leads.filter(l => l.status === 'NEW' || l.status === 'CONTACTED').length,
        activeTrips: activeTripsCount,
        availableVehicles: availableVehiclesCount,
        totalFleet: db.vehicles.length,
        totalDrivers: db.drivers.length
      },
      recentBookings: db.bookings.slice(0, 5),
      activeLeads: db.leads.slice(0, 5),
      upcomingTrips: db.trips.slice(0, 5)
    }
  });
});

// Admin Bookings
app.get('/api/admin/bookings', (req: Request, res: Response) => {
  res.json({ success: true, count: db.bookings.length, data: db.bookings });
});

app.patch('/api/admin/bookings/:id/status', (req: Request, res: Response) => {
  const { status, paymentStatus } = req.body;
  const booking = db.bookings.find(b => b.id === req.params.id);
  if (!booking) {
    return res.status(404).json({ success: false, message: 'Booking not found' });
  }
  if (status) booking.status = status;
  if (paymentStatus) booking.paymentStatus = paymentStatus;
  res.json({ success: true, data: booking });
});

// Admin CRM Leads
app.get('/api/admin/leads', (req: Request, res: Response) => {
  res.json({ success: true, count: db.leads.length, data: db.leads });
});

app.patch('/api/admin/leads/:id/status', (req: Request, res: Response) => {
  const { status, assignedStaffName, nextFollowUp } = req.body;
  const lead = db.leads.find(l => l.id === req.params.id);
  if (!lead) {
    return res.status(404).json({ success: false, message: 'Lead not found' });
  }
  if (status) lead.status = status;
  if (assignedStaffName) lead.assignedStaffName = assignedStaffName;
  if (nextFollowUp) lead.nextFollowUp = nextFollowUp;
  res.json({ success: true, data: lead });
});

// Fleet & Drivers
app.get('/api/admin/drivers', (req: Request, res: Response) => {
  res.json({ success: true, count: db.drivers.length, data: db.drivers });
});

app.post('/api/admin/drivers', (req: Request, res: Response) => {
  const newDriver = {
    id: `drv-${Date.now()}`,
    driverCode: `DRV-${100 + db.drivers.length + 1}`,
    ...req.body,
    status: 'AVAILABLE'
  };
  db.drivers.push(newDriver);
  res.status(201).json({ success: true, data: newDriver });
});

app.get('/api/admin/vehicles', (req: Request, res: Response) => {
  res.json({ success: true, count: db.vehicles.length, data: db.vehicles });
});

app.post('/api/admin/vehicles', (req: Request, res: Response) => {
  const newVehicle = {
    id: `veh-${Date.now()}`,
    ...req.body,
    status: 'AVAILABLE'
  };
  db.vehicles.push(newVehicle);
  res.status(201).json({ success: true, data: newVehicle });
});

// Trips Dispatch & Profitability
app.get('/api/admin/trips', (req: Request, res: Response) => {
  res.json({ success: true, count: db.trips.length, data: db.trips });
});

app.get('/api/admin/maintenance', (req: Request, res: Response) => {
  res.json({ success: true, count: db.maintenance.length, data: db.maintenance });
});

app.get('/api/admin/fuel', (req: Request, res: Response) => {
  res.json({ success: true, count: db.fuelRecords.length, data: db.fuelRecords });
});

app.get('/api/admin/campaigns', (req: Request, res: Response) => {
  res.json({ success: true, count: db.campaigns.length, data: db.campaigns });
});

// Start Server
app.listen(PORT, () => {
  console.log(`[SCT Backend] Server running on http://localhost:${PORT}`);
});
