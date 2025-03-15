
---

<p align="center">
  <img src="https://github.com/AhmeddSaid/horizon-peaks-website/blob/master/public/logo.png?raw=true" alt="Horizon Peaks Logo">
</p>

<h1 align="center">Horizon Peaks - Customer Website</h1>

Horizon Peaks Customer Website is a modern, guest-facing application designed for potential and actual guests of the Horizon Peaks Hotel, a boutique retreat with 8 luxurious wooden cabins. Guests can explore hotel details, browse and reserve cabins, manage bookings, and update their profiles—all with a seamless and intuitive experience.

## Features

### 1. **Authentication**
- Guests must sign up and log in to reserve cabins or manage bookings.
- New guests receive a profile in the database upon signup.

### 2. **Cabins**
- Browse all cabins with details like capacity, price, and booked dates.
- Filter cabins by maximum guest capacity.

### 3. **Reservations**
- Reserve a cabin for a specific date range (set as *unconfirmed* since payments are made on-site).
- View all past and future reservations.
- Update or delete existing reservations.

### 4. **About**
- Learn about Horizon Peaks Hotel and its offerings.

### 5. **Profile**
- Set and update basic profile data (e.g., name, contact info) to streamline check-in.

## Pages

- **Homepage**: `/` - Landing page with hotel overview.
- **About**: `/about` - Information about Horizon Peaks.
- **Cabins**: `/cabins` - Browse and filter cabins.
- **Cabin Detail**: `/cabins/:cabinId` - View specific cabin details and make reservations.
- **Login**: `/login` - Guest authentication.
- **Reservation List**: `/account/reservations` - View and manage bookings.
- **Edit Reservation**: `/account/reservations/edit` - Modify booking details.
- **Profile**: `/account/profile` - Update guest profile information.

## Technology Stack

- **Frontend**: Next.js (Server-Side Rendering - SSR & Client-Side Rendering - CSR)
- **Styling**: TailwindCSS
- **UI State Management**: Context API
- **Authentication & Data**: Supabase (Postgres database, API, authentication)

### Tools
- **date-fns** - Date manipulation and formatting.
- **Next.js Router** - Dynamic routing and navigation.

## Database Modeling

The application leverages Supabase with a Postgres database, reusing tables from the Horizon Peaks Dashboard:
- **Bookings**: Stores reservation details (dates, guest info, cabin ID).
- **Cabins**: Contains cabin data (name, capacity, price).
- **Guests**: Holds guest profiles (name, email, etc.).

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Supabase account with "bookings," "cabins," and "guests" tables (schema from Horizon Peaks Dashboard)

### Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/AhmeddSaid/horizon-peaks-website.git
   cd horizon-peaks-website
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set Up Environment Variables**:
   Create a `.env.local` file in the root directory:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

4. **Run the Development Server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Visit `http://localhost:3000` in your browser.

5. **Build for Production** (optional):
   ```bash
   npm run build
   npm run start
   # or
   yarn build
   yarn start
   ```

## Usage
- **Explore**: Visit `/` and `/about` for hotel info.
- **Browse Cabins**: Go to `/cabins` or `/cabins/:cabinId` to view and reserve cabins.
- **Manage Bookings**: Log in at `/login`, then use `/account/reservations` to view/edit bookings.
- **Update Profile**: Edit details at `/account/profile`.

---

### **Code Author:** [Ahmed Said](https://ahmedsaidadnan.com)

---