# ARCHITECTURE SPECIFICATION
## Project: Shree Chowdeshwari Tours and Travels

---

## 1. System Topology & Architectural Invariants

### 1.1 Scope & Independence
- **Single Independent Platform**: This repository contains the complete, dedicated solution for **Shree Chowdeshwari Tours and Travels**.
- **No Multi-Tenant/Shared Infrastructure**: Completely isolated database, dedicated API backend, dedicated frontend.
- **Lightweight Infrastructure**: Designed to run smoothly on Hostinger managed Node.js environment without requiring microservice orchestration, external message queues, or distributed caches.

---

## 2. Relational Database Schema (MySQL + Prisma)

The database schema is fully normalized and organized into logical domains:

### 2.1 Identity, Users & Roles
- `users`: Administrative staff, operations managers, sales agents, fleet managers, drivers.
- `roles`: Role definitions (`SUPER_ADMIN`, `ADMIN`, `OPERATIONS_MANAGER`, `FLEET_MANAGER`, `SALES_AGENT`, `DRIVER`).
- `permissions`: Granular permission flags (`bookings.view`, `bookings.edit`, `fleet.manage`, `drivers.manage`, `crm.manage`, `finance.view`, `seo.edit`).
- `role_permissions`: Association table mapping roles to permissions.
- `customers`: Registered client travelers with profile metadata, emergency contacts, and preferences.
- `customer_addresses`: Multi-address storage for billing/residential records.

### 2.2 Catalog: Destinations & Tour Packages
- `destinations`: Destination master records (slug, state/country, hero image, highlights, best season, weather, SEO metadata, featured status).
- `destination_images`: High-resolution gallery assets associated with destinations.
- `tours`: Tour packages (slug, destinationId, tourType, duration, startingPrice, maxTravellers, overview, terms, cancellationPolicy, active status, featured status).
- `tour_images`: Gallery assets with captions and display orders.
- `tour_itineraries`: Day-by-day itinerary plans with day index, title, description, meals, stays, and activities.
- `tour_inclusions`: Bulleted list of luxury inclusions (5-star hotels, private chauffeurs, entry passes).
- `tour_exclusions`: Bulleted list of exclusions.
- `wishlist`: Customer bookmarked tours.
- `offers` & `coupons`: Promotional discount structures, minimum booking values, maximum discount caps, usage counts, and validity date windows.

### 2.3 CRM, Leads & Customer Enquiries
- `enquiries`: Incoming public inquiries (general, package-specific, custom trip builder, vehicle rental, corporate delegation).
- `leads`: CRM sales pipeline entity (customer details, destination, budget, travellers, travelDate, source, campaignId, status: `NEW`, `CONTACTED`, `QUALIFIED`, `QUOTATION`, `NEGOTIATION`, `WON`, `LOST`, assignedStaffId).
- `lead_notes`: Timestamped internal correspondence and staff log entries.
- `lead_followups`: Scheduled reminder dates and alarms for sales executives.

### 2.4 Booking, Passengers & Payments
- `bookings`: Master reservation entity with unique reference code (`SCT-2026-XXXXXX`), tourId, customerId, travelDate, returnDate, guestsCount, totalAmount, discountAmount, netAmount, status (`NEW`, `CONTACTED`, `QUOTATION_SENT`, `PAYMENT_PENDING`, `CONFIRMED`, `IN_PROGRESS`, `COMPLETED`, `CANCELLED`).
- `booking_passengers`: Passenger manifests (lead + fellow travelers, age, gender, emergency contacts, dietary requests).
- `booking_status_history`: Audit trail of all booking status transitions with author and notes.
- `payments`: Transaction records (paymentMethod, transactionRef, amount, currency, status: `PENDING`, `SUCCESS`, `FAILED`, `REFUNDED`).

### 2.5 Fleet & Driver Management
- `drivers`: Chauffeur profiles (driverId, fullName, mobile, alternateMobile, experienceYears, licenseNumber, licenseType, licenseExpiry, dateOfJoining, status: `AVAILABLE`, `ASSIGNED`, `ON_TRIP`, `ON_LEAVE`, `INACTIVE`).
- `driver_documents`: Document tracking (license, verification ID, medical certificate, issueDate, expiryDate, documentStatus).
- `vehicles`: Fleet inventory (registrationNumber, make, model, year, vehicleType: `SEDAN`, `SUV`, `MUV`, `TEMPO_TRAVELLER`, `MINI_BUS`, `LUXURY_COACH`, fuelType, seatingCapacity, currentOdometer, status: `AVAILABLE`, `ASSIGNED`, `ON_TRIP`, `MAINTENANCE`, `INACTIVE`).
- `vehicle_documents`: Critical regulatory records (Insurance, PUC, Fitness Certificate, Permit, Registration, expiry dates, alert flags).
- `vehicle_assignments`: Temporal assignment connecting Trips, Vehicles, and Drivers while preventing double-booking overlaps.

### 2.6 Trip Operations, Dispatch & Financials
- `trips`: Executable operations record (tripCode, bookingId, tourId, customerId, vehicleId, driverId, startDateTime, endDateTime, pickupLocation, dropLocation, status: `SCHEDULED`, `ASSIGNED`, `DRIVER_CONFIRMED`, `IN_PROGRESS`, `COMPLETED`, `CANCELLED`).
- `fuel_records`: Log entries (vehicleId, tripId, date, odometerReading, fuelType, litres, unitPrice, totalCost, fuelStation, calculatedKmPerLitre).
- `maintenance_records`: Maintenance orders (vehicleId, serviceDate, odometerReading, serviceType, workshopName, description, partsCost, labourCost, otherCost, totalCost, nextServiceDate, nextServiceKm).
- `maintenance_items`: Detailed line-item breakdown of replacement parts.
- `trip_expenses`: Comprehensive cost logging (tripId, expenseCategory: `FUEL`, `TOLL`, `PARKING`, `DRIVER_ALLOWANCE`, `ACCOMMODATION`, `PERMITS`, `MEALS`, `MISC`, amount, receiptUrl).
- **Trip Profitability Calculation**:
  $$\text{Operational Contribution} = \text{Trip Revenue} - \sum(\text{Fuel} + \text{Driver Cost} + \text{Tolls} + \text{Parking} + \text{Accommodation} + \text{Maintenance Allocations})$$

### 2.7 Marketing, Attribution & Funnels
- `campaigns`: Marketing initiatives (campaignName, source, medium, content, budget, start/end dates, status).
- `utm_tracking`: Inbound click & lead attribution capturing `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`.
- **Conversion Funnel Metrics**:
  $$\text{Landing Page View} \longrightarrow \text{Tour Detail View} \longrightarrow \text{Enquiry / WhatsApp Trigger} \longrightarrow \text{Booking Started} \longrightarrow \text{Booking Confirmed}$$

### 2.8 System Support & Audit
- `notifications`: In-app and operational alert notifications.
- `media`: Centralized media metadata library with WebP/AVIF asset references.
- `seo_metadata`: Page-level canonicals, OpenGraph, meta titles, descriptions, and schema flags.
- `settings`: Global business settings (contact numbers, WhatsApp helpline, GST, address, currency defaults).
- `audit_logs`: Immutable security log tracking user IDs, actions, target entities, and timestamps.

---

## 3. REST API Architecture (Express.js + TypeScript)

### Endpoint Directory

| Route Prefix | Domain | Description |
| :--- | :--- | :--- |
| `/api/auth` | Authentication | Register, Login, Logout, Refresh, Forgot Password, Reset Password, Profile |
| `/api/destinations` | Catalog | Public destination explorer & admin CRUD |
| `/api/tours` | Catalog | Public tour packages, filters, itineraries, inclusions & admin CRUD |
| `/api/bookings` | Bookings | Public booking checkout, passenger manifest, status lookup, admin management |
| `/api/enquiries` | Inquiries | Public inquiry intake & admin processing |
| `/api/leads` | CRM | 7-stage Kanban pipeline, notes, follow-up scheduler |
| `/api/drivers` | Operations | Driver records, license expiry alerts, availability status |
| `/api/vehicles` | Fleet | Vehicle fleet records, fitness/PUC/insurance expiry alerts |
| `/api/trips` | Dispatch | Operational dispatch board, assignments, live status |
| `/api/maintenance`| Fleet | Service logs, scheduled maintenance, parts cost history |
| `/api/fuel` | Fleet | Fuel receipts, fuel consumption analysis |
| `/api/expenses` | Finance | Trip expense accounting & contribution margin calculation |
| `/api/campaigns` | Marketing | Campaign management & UTM lead attribution |
| `/api/analytics` | Analytics | Dashboard KPIs (Revenue, Bookings, Leads, Fleet Availability) |
| `/api/seo` | SEO | Sitemap generation, meta tags, schema configs |

---

## 4. Frontend Architecture (Astro + Tailwind CSS + GSAP)

### 4.1 Rendering Strategy
- **Astro Static / Island Hybrid**:
  - Marketing pages (`/`, `/about`, `/destinations/*`, `/tours/*`, `/gallery`, `/faq`, `/reviews`) render as ultra-fast static HTML with zero client JavaScript overhead for Core Web Vitals.
  - Interactive widgets (Search Console, Itinerary Accordion, Custom Trip Builder, Modals, Booking Wizard) are loaded as lightweight hydrated components.
  - Customer Portal (`/my-account/*`) and Admin SaaS (`/admin/*`) are powered by responsive client components connecting to the REST API with token/cookie authentication.

### 4.2 Design System Tokens
- **Primary Navy**: `#0A1128` (Deep Midnight Heritage), `#0F172A` (Obsidian Slate), `#1E293B` (Titanium)
- **Luxury Gold**: `#D4AF37` (Imperial Gold), `#C5A880` (Champagne Gold), `#9E7E50` (Antique Gold)
- **Canvas / Neutral**: `#F8F9FA` (Porcelain Silk), `#FFFFFF` (Pure Crisp White), `#F1F5F9` (Muted Slate)
- **Status Accents**: `#059669` (Emerald Success), `#2563EB` (Azure Cobalt), `#D97706` (Warm Amber), `#DC2626` (Crimson Alert)
- **Typography Pairing**:
  - Headings / Editorial: `Playfair Display`, `Cormorant Garamond`
  - Body / UI / Clean: `Plus Jakarta Sans`, `Inter`
  - Numbers / Currency / Codes: `JetBrains Mono` / Tabular Numeral variants.
