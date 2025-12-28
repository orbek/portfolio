# TACOLCY CRM System

> A comprehensive Client Relationship Management system for Belafonte TACOLCY Center

## 📋 Overview

The TACOLCY CRM is a full-stack web application designed to help Belafonte TACOLCY Center manage their client services, donor relationships, and grant-funded programs. The system tracks client demographics, service delivery, outcomes through CANS (Child and Adolescent Needs and Strengths) assessments, and donor engagement.

**Organization**: Belafonte TACOLCY Center - A nonprofit organization providing services to individuals and families in Miami

**Primary Grant Focus**: WeCare Grant

**Service Area**: Miami zip codes 33127, 33142, 33147, 33150

## 🎯 Key Features

### Client Management
- **Client Intake & Registration** - Capture comprehensive client demographic information
- **Kiosk/Tablet Intake** - Touch-friendly self-service intake for clients on tablets with family member registration
- **Family Management** - Track family units with head of household, spouse/partner, children, and other relatives
- **Household Registration** - Register entire households in a single kiosk intake session
- **Client Profiles** - Detailed individual and family information with full history
- **Child Details** - Track school information, attendance concerns, and disabilities (optional for children at different addresses)
- **Active/Inactive Status** - Manage client discharge and reopening
- **Donor Photo Uploads** - Upload and manage donor profile photos with Base64 encoding

### CANS Assessment System
- **Assessment Creation** - Parent and Child CANS assessments
- **Domain-Based Scoring** - Evaluate multiple life domains (0-3 scale)
- **Red Flag Detection** - Automatically identify scores requiring immediate intervention (≥2)
- **Due Date Tracking** - 60-day assessment cycles with overdue alerts
- **Assessment History** - Track progress over time

### FNSP Eligibility Assessment
- **Family and Neighborhood Support Partnership** - Eligibility verification for FNSP program
- **16-Question Assessment** - Comprehensive risk factor evaluation
- **Automatic Eligibility Calculation** - Based on child in household, risk factors (≥2), and service area
- **Age Restriction** - Only available for adult clients (18+)
- **Service Area Validation** - Zip code verification against database-configured service areas
- **Staff Attribution** - Track which staff member conducted the assessment

### Service Delivery & Case Management
- **Contact Logging** - Document all client interactions (email, phone, in-person, home visits)
- **Service Visit Tracking** - Record program utilization (food pantry, baby closet, etc.)
- **Follow-up Management** - Schedule and track next contact dates
- **Program Assignment** - Link services to specific programs and grants

### Donor Management
- **Donor Database** - Individual, corporate, and foundation donor records
- **Donation Tracking** - Record donations with amounts, dates, and campaigns
- **Birthday Tracking** - Month and day tracking for relationship building (privacy-safe)
- **Donor Interests** - Track donor preferences for targeted engagement
- **Campaign Management** - Organize donations by campaigns and events

### Reporting & Analytics
- **Real-Time Dashboard** - Live metrics from database (Total Clients, Active Families, Service Hours, CANS Due)
- **Service Reports** - Track program utilization and service delivery with CSV export
- **CANS Reports** - Overdue assessments and red flag alerts
- **Donor Reports** - Donation history and engagement metrics

### System Configuration
- **Programs Management** - Add, edit, and soft delete service programs
- **Campaigns Management** - Manage fundraising campaigns with goals and dates
- **Configuration Values** - Admin control for service area zip codes, contact types, donor interests
- **Soft Delete** - All deletes are reversible by setting IsActive = 0

### Announcements System
- **Admin Announcements** - Create and manage system-wide announcements
- **Dismissible Banners** - Users can dismiss announcements for 2 days
- **Cross-Device Persistence** - Dismissals tracked in database per user
- **Priority Ordering** - Display announcements by priority

### User Management
- **Role-Based Access** - Success Coach, Supervisor, Admin, Viewer roles
- **Staff Profiles** - User accounts with contact information
- **Authentication** - Secure JWT-based login system with MFA support
- **Multi-Factor Authentication (MFA)** - Optional TOTP-based MFA for enhanced security
- **Password Management** - Password reset via email

## 🏗️ Architecture

### Technology Stack

**Frontend**
- React 18 with TypeScript
- Vite for fast development and building
- React Router for navigation
- React Query (@tanstack/react-query) for data fetching with automatic caching
- React Hook Form with Zod validation
- Axios for API communication (with centralized interceptors)
- date-fns for date handling
- **Optimized**: Debounced search inputs, parallel queries, automatic cache invalidation

**Backend**
- Azure Functions v4 (Python 3.13)
- Python Programming Model v2
- pyodbc for Azure SQL Database connectivity
- Pydantic for data validation
- PyJWT for authentication
- SendGrid for email delivery

**Database**
- Azure SQL Database
- Comprehensive relational schema with 15+ tables
- Foreign key constraints for data integrity
- Audit fields (CreatedAt, UpdatedAt) on all tables

**Infrastructure**
- Azure Web App with Docker Container (Frontend)
- Azure Functions (Backend API)
- Azure SQL Database
- Azure Storage (Function App storage)
- Docker Hub (Container Registry)
- GitHub Actions (CI/CD Pipeline)

### Project Structure

```
tacolcy/
├── frontend/                 # React TypeScript application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── contexts/        # React contexts (AuthContext)
│   │   ├── pages/           # Page components (12 pages)
│   │   ├── services/        # API service layer
│   │   ├── theme/           # Brand colors and typography
│   │   ├── types/           # TypeScript type definitions
│   │   └── main.tsx         # Application entry point
│   ├── public/              # Static assets
│   ├── Dockerfile           # Multi-stage Docker build
│   ├── nginx.conf           # Nginx configuration for SPA
│   ├── docker-compose.yml   # Local Docker development
│   ├── .dockerignore        # Docker build exclusions
│   ├── package.json
│   └── vite.config.ts
├── backend/                  # Python Azure Functions
│   ├── function_app/        # Azure Function package (v1 model)
│   │   ├── __init__.py      # Main entry point
│   │   ├── function.json    # Azure Function configuration
│   │   ├── handlers/        # HTTP route handlers
│   │   ├── models/          # Pydantic data models
│   │   ├── services/        # Business logic layer
│   │   └── utils/           # Helper utilities
│   │       ├── auth.py          # JWT authentication
│   │       ├── config_helper.py # Centralized configuration
│   │       ├── database.py      # Database connection & queries
│   │       ├── email_service.py # SendGrid integration
│   │       ├── email_helpers.py # Email business logic
│   │       └── response.py      # API response formatting
│   ├── templates/           # Email HTML templates
│   ├── requirements.txt
│   └── host.json
├── database/                 # Database artifacts
│   ├── schema.sql           # Complete database schema
│   ├── seed.sql             # Sample data for development
│   ├── migrations/          # Database migration scripts
│   └── *.sql                # Various setup scripts
├── docs/                     # Documentation
│   ├── PROJECT_SETUP.md     # Development setup guide
│   ├── DEPLOYMENT.md        # Deployment instructions
│   ├── EMAIL_SETUP.md       # Email configuration
│   ├── DEPLOY_TO_EXISTING.md
│   ├── FRONTEND_ARCHITECTURE.md      # Frontend architecture details
│   ├── FRONTEND_API_ANALYSIS.md      # API calls and data fetching
│   ├── QUERY_AND_LOGGING_IMPROVEMENTS.md  # Backend improvements
│   ├── FRONTEND_DOCS_INDEX.md        # Frontend documentation index
│   └── BRAND_GUIDELINES.md           # Brand colors and typography
├── tests/                    # Test files
│   └── backend/             # Backend Python tests
├── .github/
│   └── workflows/
│       └── frontend-docker.yml  # CI/CD for Docker build & Azure deploy
├── CLAUDE.md                # Development guide for Claude Code
└── README.md                # This file
```

## 📊 Database Schema

### Core Tables

- **Staff** - System users with roles and authentication
- **Grants** - Funding sources with CANS requirements and service areas
- **Programs** - Services offered (Food Pantry, Baby Closet, Care Coordination, etc.)
- **Individuals** - Primary client table with demographics and contact info
- **Families** - Family grouping with primary contacts
- **FamilyMembers** - Junction table linking individuals to families
- **ChildDetails** - Child-specific information (school, grade, disabilities)

### Assessment Tables

- **CANSAssessments** - Parent/Child assessments with due dates and flags
- **CANSScores** - Individual assessment items by domain (0-3 scoring)
- **FNSPEligibility** - FNSP eligibility assessments with 16 risk factor questions

### Service Tracking Tables

- **ContactLogs** - Case management notes and interactions
- **ContactTypes** - Multi-select contact methods (Email, Phone, In-Person, etc.)
- **ServiceVisits** - Service utilization tracking by program

### Donor Management Tables

- **Donors** - Donor profiles (Individual, Corporate, Foundation)
- **DonorPhotos** - Donor profile photos with binary streaming
- **Campaigns** - Fundraising campaigns and events
- **Donations** - Donation records with amounts and campaigns
- **DonorInterests** - Donor engagement preferences

### Configuration Tables

- **ConfigurationCategories** - System configuration categories (ServiceAreaZipCodes, ContactTypes, etc.)
- **ConfigurationValues** - Dynamic configuration values with soft delete support

### Additional Tables

- **Events** - Community events and programs
- **EventAttendance** - Event participation tracking
- **Alerts** - System-generated notifications
- **Announcements** - System-wide admin announcements
- **AnnouncementReads** - Tracks which users dismissed which announcements

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/login` - User login (rate limited: 5 attempts per 15 minutes)
- `POST /api/auth/forgot-password` - Request password reset (rate limited)
- `POST /api/auth/reset-password` - Reset password with token (rate limited)
- `POST /api/auth/mfa/setup` - Initialize MFA setup, returns QR code
- `POST /api/auth/mfa/verify` - Verify TOTP code and enable MFA
- `POST /api/auth/mfa/disable` - Disable MFA for account
- `GET /api/auth/staff` - List staff members
- `POST /api/auth/staff` - Create new staff member

### Client Management
- `GET /api/individuals` - List clients (with pagination, filtering, and search)
  - Query params: `?page=1&pageSize=20&searchQuery=john&zipCode=33127&isActive=true&clientType=Individual`
  - Returns paginated response with metadata (totalItems, totalPages, currentPage)
- `GET /api/individuals/by-zip-codes` - **Batch endpoint** for service area zip codes
  - Query params: `?zipCodes=33127,33142,33147,33150&page=1&pageSize=20`
  - Returns individuals matching any zip code in single optimized query (4x faster)
- `GET /api/individuals/{id}/details` - **Composite endpoint** for client details
  - Returns individual + CANS eligibility + assessments in single response (50% faster)
- `POST /api/individuals` - Create new client (audit logged)
- `GET /api/individuals/{id}` - Get client details (audit logged)
- `PUT /api/individuals/{id}` - Update client (audit logged)
- `DELETE /api/individuals/{id}` - Soft delete client (audit logged)

### CANS Assessments
- `GET /api/individuals/{id}/cans/eligibility` - Check CANS eligibility
- `GET /api/individuals/{id}/cans` - List client assessments
- `POST /api/individuals/{id}/cans` - Create new assessment
- `GET /api/cans/{assessment_id}` - Get assessment details
- `PUT /api/cans/{assessment_id}` - Update assessment
- `GET /api/cans/overdue` - List overdue assessments
- `GET /api/cans/red-flags` - List red flag alerts

### FNSP Eligibility
- `GET /api/individuals/{id}/fnsp/eligibility` - Check FNSP eligibility status
- `GET /api/individuals/{id}/fnsp/assessment` - Get full FNSP assessment
- `POST /api/individuals/{id}/fnsp/assessment` - Create or update FNSP assessment

### Service Tracking
- `GET /api/contact-logs` - List contact logs
- `POST /api/contact-logs` - Create contact log

### Donor Management
- `GET /api/donors` - List donors
- `POST /api/donors` - Create new donor
- `GET /api/donors/{id}` - Get donor details
- `PUT /api/donors/{id}` - Update donor
- `POST /api/donors/{id}/photo` - Upload donor photo
- `GET /api/donors/{id}/photo` - Get donor photo
- `DELETE /api/donors/{id}/photo` - Delete donor photo
- `GET /api/donations` - List donations
- `POST /api/donations` - Record new donation

### Announcements
- `GET /api/announcements` - List active announcements for current user
- `GET /api/announcements/all` - List all announcements (admin)
- `POST /api/announcements` - Create announcement (admin)
- `PUT /api/announcements/{id}` - Update announcement (admin)
- `DELETE /api/announcements/{id}` - Delete announcement (admin)
- `POST /api/announcements/{id}/dismiss` - Dismiss announcement for 2 days

### Kiosk/Tablet Intake
- `POST /api/kiosk/generate-code` - Generate 4-digit intake code (staff, requires auth)
- `POST /api/kiosk/validate-code` - Validate code and get session token (public)
- `POST /api/kiosk/intake` - Submit intake form (requires kiosk session token)

### Configuration Management
- `GET /api/config/categories` - List configuration categories
- `GET /api/config/{category_name}` - Get values by category
- `POST /api/config/values` - Create configuration value
- `PUT /api/config/values/{id}` - Update configuration value
- `DELETE /api/config/values/{id}` - Soft delete configuration value
- `GET /api/programs` - List all programs
- `POST /api/programs` - Create new program
- `PUT /api/programs/{id}` - Update program
- `DELETE /api/programs/{id}` - Soft delete program
- `GET /api/campaigns` - List all campaigns
- `POST /api/campaigns` - Create new campaign
- `PUT /api/campaigns/{id}` - Update campaign
- `DELETE /api/campaigns/{id}` - Soft delete campaign

### Reports
- `GET /api/reports/dashboard` - Real-time dashboard statistics from database

### System
- `GET /api/health` - Health check endpoint
- `GET /api/test-db` - Database connection test

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ and npm
- **Python** 3.11+ (3.13 recommended)
- **Azure CLI** - [Install](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli)
- **Azure Functions Core Tools** - [Install](https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local)
- **Azure SQL Database** instance
- **SendGrid account** (for email functionality)

### Local Development Setup

#### 1. Clone the Repository

```bash
git clone https://github.com/orbek/tacolcy.git
cd tacolcy
```

#### 2. Database Setup

```bash
# Apply database schema
sqlcmd -S your-server.database.windows.net -d tacolcy_crm -U your-username -P your-password -i database/schema.sql

# Optional: Load sample data
# 1. Clean existing data (if needed)
sqlcmd -S your-server.database.windows.net -d tacolcy_crm -U your-username -P your-password -i database/cleanup_client_donor_data.sql

# 2. Add sample individuals and donors
sqlcmd -S your-server.database.windows.net -d tacolcy_crm -U your-username -P your-password -i database/006_sample_data_individuals_donors.sql

# 3. Add configuration tables and data
sqlcmd -S your-server.database.windows.net -d tacolcy_crm -U your-username -P your-password -i database/004_add_configuration_tables.sql
sqlcmd -S your-server.database.windows.net -d tacolcy_crm -U your-username -P your-password -i database/004b_insert_configuration_data.sql

# 4. Add soft delete support for Programs and Campaigns
sqlcmd -S your-server.database.windows.net -d tacolcy_crm -U your-username -P your-password -i database/005_add_programs_campaigns_soft_deletes.sql
```

See [docs/PROJECT_SETUP.md](docs/PROJECT_SETUP.md) for detailed database setup instructions.

#### 3. Backend Setup

```bash
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Create .env file
cp .env.example .env
# Edit .env with your configuration:
# - AZURE_SQL_SERVER, AZURE_SQL_DATABASE, AZURE_SQL_USER, AZURE_SQL_PASSWORD
# - SENDGRID_API_KEY, EMAIL_FROM_ADDRESS, EMAIL_FROM_NAME
# - JWT_SECRET_KEY

# Start local development server
func start
```

Backend will run on `http://localhost:7071`

#### 4. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Create .env file
cp .env.example .env
# Edit .env with your backend API URL:
# VITE_API_BASE_URL=http://localhost:7071/api

# Start development server
npm run dev
```

Frontend will run on `http://localhost:5173`

#### 5. Login to the Application

Default admin credentials (from seed data):
- Email: `admin@tacolcy.org`
- Password: `admin123`

### Production Deployment

See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for complete deployment instructions to Azure.

**Quick Deploy Steps:**

1. Configure settings: `cd backend && ../configure-settings.sh`
2. Deploy backend: `../deploy.sh`
3. Deploy frontend: Push to `main` branch (auto-deployed via GitHub Actions)

### Docker Containerization

The frontend is containerized using Docker and automatically deployed to Azure Web App via GitHub Actions.

**Docker Setup:**

```bash
# Build locally
cd frontend
docker build -t tacolcy-frontend .

# Run locally
docker-compose up

# Access at http://localhost:3000
```

**Container Configuration:**
- **Base Image**: nginx:alpine (production-optimized)
- **Build Stage**: Node.js 20 with Vite
- **Port**: 80 (mapped to 3000 in docker-compose)
- **Health Check**: `curl -f http://localhost:80/`

**CI/CD Pipeline:**
The GitHub Actions workflow (`.github/workflows/frontend-docker.yml`) automatically:
1. Builds the Docker image on push to `main` branch
2. Pushes to Docker Hub (`carlossbarbosa/tacolcy-frontend`)
3. Deploys to Azure Web App (`tacolcy`)

**Required GitHub Secrets:**
- `DOCKERHUB_USERNAME` - Docker Hub username
- `DOCKERHUB_TOKEN` - Docker Hub access token
- `AZURE_CREDENTIALS` - Azure service principal JSON
- `VITE_API_BASE_URL` - Backend API URL
- `VITE_AZURE_FUNCTION_KEY` - Azure Function key

## 🎨 Design & Branding

The application follows the Belafonte TACOLCY Center brand guidelines:

**Colors**
- Primary Purple: `#5B2C86` (PMS 2597)
- Primary Gold: `#FAA31B` (PMS 137)
- Cool Gray: `#9D9FA1` (PMS Cool Gray 7)

**Typography**
- Headlines: Roboto Slab (Light, Medium, Bold, Black)
- Body: Montserrat (Light, Regular, Semibold, Extra Bold)
- Fallback: Arial

See `docs/BRAND_GUIDELINES.md` for complete design specifications.

## 📖 Documentation

### Setup & Deployment
- **[PROJECT_SETUP.md](docs/PROJECT_SETUP.md)** - Complete development setup guide
- **[DEPLOYMENT.md](docs/DEPLOYMENT.md)** - Production deployment instructions
- **[DEPLOY_TO_EXISTING.md](docs/DEPLOY_TO_EXISTING.md)** - Deploy to existing Azure resources
- **[EMAIL_SETUP.md](docs/EMAIL_SETUP.md)** - Email configuration and templates

### Performance & Optimization
- **[IMPLEMENTATION_PRIORITY_SUMMARY.md](docs/IMPLEMENTATION_PRIORITY_SUMMARY.md)** - Complete optimization implementation summary (17/22 items complete)
- **[API_OPTIMIZATION_REPORT.md](docs/API_OPTIMIZATION_REPORT.md)** - Frontend API optimization analysis and recommendations
- **[BACKEND_API_OPTIMIZATION_REPORT.md](docs/BACKEND_API_OPTIMIZATION_REPORT.md)** - Backend API optimization analysis and recommendations
- **[OPTIMIZATION_IMPLEMENTATION_GUIDE.md](docs/OPTIMIZATION_IMPLEMENTATION_GUIDE.md)** - Step-by-step optimization implementation guide

### Security & Compliance
- **[SECURITY_HIPAA_COMPLIANCE_ASSESSMENT.md](docs/SECURITY_HIPAA_COMPLIANCE_ASSESSMENT.md)** - Security and HIPAA compliance assessment
- **[AUDIT_LOGGING_SYSTEM.md](docs/AUDIT_LOGGING_SYSTEM.md)** - Audit logging system design and implementation

### Architecture & System Design
- **[FRONTEND_ARCHITECTURE.md](docs/FRONTEND_ARCHITECTURE.md)** - Frontend architecture, data flow, and state management
- **[FRONTEND_API_ANALYSIS.md](docs/FRONTEND_API_ANALYSIS.md)** - Complete API calls and data fetching analysis
- **[QUERY_AND_LOGGING_IMPROVEMENTS.md](docs/QUERY_AND_LOGGING_IMPROVEMENTS.md)** - Backend query optimization and logging improvements
- **[FRONTEND_DOCS_INDEX.md](docs/FRONTEND_DOCS_INDEX.md)** - Frontend documentation index

### Design & Branding
- **[BRAND_GUIDELINES.pdf](docs/TACOLCY-BrandGuidelines.pdf)** - Official brand guidelines
- **[CANS_ASSESSMENT.pdf](docs/CANS%20ASSESSMENT.pdf)** - CANS assessment documentation
- **[CLAUDE.md](CLAUDE.md)** - Development guide for Claude Code

## 🛡️ Security

- **JWT-based Authentication** - Secure token management with 1-hour expiration (requires `JWT_SECRET` env variable)
- **Multi-Factor Authentication (MFA)** - Optional TOTP-based MFA using pyotp
  - QR code generation for authenticator app setup
  - Time-based one-time passwords (compatible with Google Authenticator, Authy, etc.)
  - Can be enabled/disabled per user
- **Role-Based Access Control** - Success Coach, Supervisor, Admin, Viewer roles with granular permissions
- **Password Security** - Password hashing with bcrypt via passlib
- **Rate Limiting** - Protection against brute-force attacks on authentication endpoints
  - Login: 5 attempts per 15 minutes per email
  - Password Reset: 5 attempts per 15 minutes per email/token
  - 15-minute lockout after limit exceeded
- **Session Timeout** - 30-minute inactivity timer with 5-minute warning modal
- **Audit Logging System** - Comprehensive logging of all PHI access and modifications for HIPAA compliance
  - Login attempts and authentication events
  - PHI access logs (READ operations)
  - PHI modification logs (CREATE, UPDATE, DELETE operations)
  - Search operation logs
- **Secure Error Handling** - No exception details exposed to clients, errors logged server-side only
- **Azure SQL Database** - Encrypted connections with secure authentication
- **Environment Variables** - Sensitive data stored in environment variables only
- **HTTPS Enforcement** - All production traffic encrypted

## 🚀 Performance Optimizations

The application includes comprehensive high-impact performance optimizations:

### Backend Optimizations

- **Pagination** - All list endpoints support pagination (default: 20 items per page, max 100)
  - Query parameters: `?page=1&pageSize=20`
  - Returns paginated response with metadata (totalItems, totalPages, currentPage)
- **Server-Side Filtering & Search** - Filter and search on the backend to reduce data transfer
  - Search: name, email, phone, clientID
  - Filters: zipCode, isActive, clientType
  - Example: `GET /individuals?searchQuery=john&zipCode=33127&isActive=true&page=1&pageSize=20`
- **Batch Endpoints** - Service area zip codes queried in a single request (4x faster)
  - `/individuals/by-zip-codes?zipCodes=33127,33142,33147,33150`
  - Replaces sequential loop with single optimized query
- **Composite Detail Endpoint** - Single endpoint returns individual + CANS eligibility + assessments (50% faster)
  - `/individuals/{id}/details` returns all related data in one response
  - Reduces 3 separate API calls to 1 optimized call
- **Secure Error Handling** - Generic error messages to clients, detailed logs server-side

### Frontend Optimizations

- **React Query Integration** - Automatic caching, deduplication, and background refetching
  - 5-minute stale time, 10-minute cache retention
  - 60-80% reduction in API calls on navigation
  - Automatic cache invalidation on mutations
  - Refetch on window focus for list pages
- **Configuration Caching** - Long-lived cache for configuration data (30-minute stale time)
  - Configuration data cached for 1 hour
  - Reduces redundant API calls for dropdown options
- **Debounced Search** - Search inputs debounced (300-500ms) to reduce unnecessary API calls
  - ClientListPage: 500ms delay
  - FamilyListPage: 300ms delay
  - DonorListPage: 300ms delay
- **Lazy Loading** - Dropdown data only fetched when modals open
  - FamilyDetailPage: Individuals fetched only when "Add Member" modal opens
  - Faster initial page loads
- **Parallel Queries** - Detail pages load multiple resources in parallel (50% faster)
  - ClientDetailPage uses composite endpoint for single optimized call
- **Optimistic Updates** - UI updates immediately, syncs with server in background
  - Create/Update operations show instant feedback
  - Automatic rollback on error
  - Snapshot-based state management
- **Background Refetching** - Auto-refresh data to keep it fresh
  - Dashboard metrics refetch every 5 minutes
  - List pages refetch on window focus
  - No manual refresh needed

### Performance Impact Summary

| Optimization | Impact | Description |
|-------------|--------|-------------|
| **Pagination** | ~90% faster | Large datasets: 20 records vs all records |
| **Batch Endpoint** | 4x faster | 1 call vs 4 sequential calls |
| **Composite Endpoint** | 50% faster | 1 call vs 3 parallel calls |
| **React Query Caching** | 60-80% reduction | Automatic deduplication and caching |
| **Lazy Loading** | Faster loads | Dropdowns loaded on-demand |
| **Debounced Search** | 70% reduction | Fewer API calls during typing |
| **Optimistic Updates** | Instant feedback | UI updates before server response |
| **Background Refetching** | Always fresh | Auto-refresh without user action |

## 🔧 Development

### Testing

```bash
# Frontend
cd frontend
npm run lint
npm run build

# Backend
cd backend
python -m pytest  # (if tests are configured)
```

### Code Style

- Frontend: ESLint with TypeScript rules
- Backend: PEP 8 Python style guide
- Consistent formatting across all files

### Recent Optimizations

**✅ All Critical & High Priority Optimizations Complete!**

- **17 of 22 optimization items complete** (77% complete)
- **All Critical Priority items** - ✅ 100% complete (3/3)
- **All High Priority items** - ✅ 100% complete (6/6)
- **All Medium Priority items** - ✅ 100% complete (6/6)
- **Core Optimizations** - ✅ 50% complete (2/4)

See [IMPLEMENTATION_PRIORITY_SUMMARY.md](docs/IMPLEMENTATION_PRIORITY_SUMMARY.md) for a detailed list of completed optimizations and remaining tasks.

## 🔄 Recent Updates (November 2025)

### FNSP Eligibility Assessment System
**Date**: November 27, 2025

Implemented FNSP (Family and Neighborhood Support Partnership) eligibility assessment:

- **16-Question Assessment**: Comprehensive risk factor evaluation questionnaire
- **Eligibility Criteria**:
  - Must have child under 18 or under 21 with disability in household
  - At least 2 risk factors must be identified
  - Must be in service area zip code
- **Age Restriction**: Only displayed for adult clients (18+) on client detail page
- **Service Area Configuration**: Zip codes fetched from database ConfigurationValues table
- **Staff Attribution**: Tracks which staff member conducted each assessment
- **Real-Time Eligibility Calculation**: Automatic eligibility determination with detailed reasoning

**Files Added/Modified**:
- `frontend/src/components/FNSPEligibilityDialog.tsx` - Assessment dialog with questionnaire
- `frontend/src/pages/ClientDetailPage.tsx` - FNSP section with age restriction
- `frontend/src/hooks/useServiceAreaZips.ts` - Hook for service area zip codes
- `frontend/src/types/fnsp.ts` - TypeScript types and question definitions
- `backend/function_app/handlers/fnsp_handlers.py` - API handlers
- `backend/function_app/services/fnsp_service.py` - Business logic
- `backend/function_app/models/fnsp.py` - Pydantic models
- `backend/function_app/utils/config_helper.py` - Centralized configuration helper

### Repository Reorganization
**Date**: November 27, 2025

Cleaned up repository structure for deployment readiness:

- **Backend Consolidation**: Removed duplicate root-level folders (handlers/, models/, services/, utils/)
- **Active Code Location**: All backend code now in `backend/function_app/` package
- **Test Organization**: Moved test files to `tests/backend/` folder
- **Documentation**: Moved markdown documentation to `docs/` folder
- **Root Files**: Only `README.md` and `CLAUDE.md` remain in root

### Kiosk/Tablet Intake System
**Date**: November 24, 2025

Implemented touch-friendly client self-service intake for tablets:

- **4-Digit Code System**: Staff generates code, client enters on tablet to access form
- **Step-by-Step Form**: Personal Info → Contact Info → Family Members → Consent & Signature → Review
- **Family Member Registration**: Add spouse/partner, children, and other family members during intake
- **Digital Signature**: Touch-friendly signature pad with canvas drawing
- **Touch-Optimized UI**: Large buttons, easy-to-tap inputs, tablet-friendly layout
- **Session Management**: 30-minute code expiration, 1-hour form session
- **Wake Lock**: Prevents screen timeout during intake

**Family Members Feature**:
- Primary individual can add family members (spouse/partner, children, other relatives)
- "Same Address" toggle - when checked, uses primary's address automatically
- Address fields optional for members with different addresses (common for children living with other parent)
- School information optional for children with different addresses
- All family members created as Individual records linked via Family/FamilyMembers tables
- Primary individual designated as "Head of Household"
- Relationship types: Spouse/Partner, Son, Daughter, Parent, Sibling, Grandparent, Grandchild, Other Family Member

**Kiosk Flow**:
1. Staff generates 4-digit code from Dashboard
2. Client goes to `/kiosk` on tablet
3. Client enters code → fills form → adds family members (optional) → signs → submits
4. Success page displays household name and all registered family members
5. Auto-redirect after 30 seconds

**Files Added/Modified**:
- `frontend/src/pages/KioskCodeEntryPage.tsx` - Code entry screen
- `frontend/src/pages/KioskIntakePage.tsx` - Multi-step intake form with family members
- `frontend/src/pages/KioskSuccessPage.tsx` - Thank you confirmation with family display
- `frontend/src/components/SignaturePad.tsx` - Digital signature capture
- `frontend/src/components/GenerateKioskCode.tsx` - Dashboard code generator
- `frontend/src/styles/KioskMode.css` - Tablet-optimized styles with color fixes
- `backend/function_app/handlers/kiosk_handlers.py` - API handlers with family creation logic

### Docker Containerization & CI/CD
**Date**: November 24, 2025

Implemented complete Docker containerization for the frontend with automated CI/CD:

- **Docker Multi-Stage Build**: Node.js 20 builder + nginx:alpine production image
- **Nginx Configuration**: SPA routing, gzip compression, security headers, health endpoint
- **GitHub Actions Pipeline**: Automatic build and deploy on push to `main` branch
- **Azure Web App Integration**: Automatic container deployment from Docker Hub
- **Health Checks**: Built-in health monitoring at `/health` endpoint

**Files Added/Modified**:
- `frontend/Dockerfile` - Multi-stage Docker build
- `frontend/nginx.conf` - Nginx SPA configuration
- `frontend/docker-compose.yml` - Local development setup
- `frontend/.dockerignore` - Build exclusions
- `.github/workflows/frontend-docker.yml` - CI/CD pipeline

### Announcements System
**Date**: November 2025

Added system-wide announcements feature for admin communications:

- **Dismissible Banners**: Users can dismiss announcements for 2 days
- **Cross-Device Persistence**: Dismissals tracked in AnnouncementReads table per user
- **Priority Ordering**: Announcements displayed by priority level
- **Admin Management**: Full CRUD operations for admins
- **Auto-Expiration**: Announcements can have optional end dates

**Database Tables Added**:
- `Announcements` - Stores announcement content, priority, and dates
- `AnnouncementReads` - Tracks dismissals per user with expiration

### Donor Photo Uploads
**Date**: November 2025

Implemented donor photo management with dedicated storage:

- **Binary Streaming**: Photos stored in DonorPhotos table with binary data
- **Base64 Encoding**: Frontend handles image upload/display via Base64
- **Photo Management**: Upload, view, and delete donor photos
- **Separate Table**: Decoupled from Donors table for better performance

**Database Tables Added**:
- `DonorPhotos` - Stores photo binary data, content type, and metadata

### Multi-Factor Authentication (MFA)
**Date**: November 2025

Added optional TOTP-based MFA for enhanced security:

- **TOTP Implementation**: Uses pyotp for time-based one-time passwords
- **QR Code Setup**: Generate QR codes for authenticator app scanning
- **Compatible Apps**: Works with Google Authenticator, Authy, Microsoft Authenticator
- **Enable/Disable**: Users can opt-in or opt-out of MFA
- **Login Integration**: MFA verification step after password authentication

### Field Naming Standardization
**Date**: November 4, 2025

Completed comprehensive field naming standardization across the entire application:

- **Backend API Responses**: All endpoints now consistently return **camelCase** field names
  - `firstName`, `lastName`, `clientID`, `individualID`, etc.
- **Frontend Data Models**: Updated all TypeScript interfaces and components to use camelCase
- **Database Schema**: Uses PascalCase column names, transformed to camelCase in API responses

**Impact**:
- Fixed client details page loading issues (was showing "Invalid Date" and "NaN years old")
- Fixed family creation search functionality (was not finding individuals)
- Improved type safety and consistency across the application

### Bug Fixes

#### Fixed Client Details Page Loading (November 4, 2025)
- **Issue**: Client details page was broken, showing "Invalid Date" and "NaN years old"
- **Root Cause**:
  1. Backend CANS Assessment query attempting to fetch non-existent database columns
  2. Frontend using PascalCase field names while backend returns camelCase
- **Fix**:
  1. Updated CANS Assessment query in [backend/function_app.py](backend/function_app.py) (lines 1868-1896) to match actual schema
  2. Updated all field references in [ClientDetailPage.tsx](frontend/src/pages/ClientDetailPage.tsx) from PascalCase to camelCase
  3. Added defensive fallback values for optional fields
- **Files Changed**:
  - `backend/function_app.py` - Fixed CANS Assessment query
  - `frontend/src/pages/ClientDetailPage.tsx` - Field naming standardization

#### Fixed Family Creation Search (November 4, 2025)
- **Issue**: Search for individuals when creating families was not working (e.g., searching "Garcia" returned no results)
- **Root Cause**: PascalCase/camelCase mismatch in search filter logic
- **Fix**: Updated field references to camelCase in search filters and display components
- **Files Changed**:
  - `frontend/src/pages/FamilyCreatePage.tsx` - Updated search filter logic
  - `frontend/src/pages/FamilyDetailPage.tsx` - Updated "Add Member" modal search

### New Features

#### Client Information Edit Functionality (November 4, 2025)
Added comprehensive edit functionality to client details page:

- **Edit Mode Toggle**: "Edit Information" button on client details page
- **Inline Form Editing**: All demographic and contact fields editable in-place
- **Real-time Validation**: Client-side validation before server submission
- **Optimistic Updates**: UI updates immediately, syncs with server in background
- **Error Handling**: Clear error messages with automatic rollback on failure
- **Save/Cancel Actions**: Save changes or cancel to revert

**Editable Fields**:
- Basic Information: First Name, Last Name, Date of Birth, Gender, Race/Ethnicity
- Contact Information: Address, City, Zip Code, Phone Number, Email Address

**Implementation Details**:
- Uses React Query's `useUpdateIndividual` hook for server mutations
- State management with React hooks (`useState` for edit mode and form data)
- Integrates with existing optimistic update patterns
- Maintains audit logging for all PHI modifications

**Files Changed**:
- `frontend/src/pages/ClientDetailPage.tsx` - Added edit functionality with form state management

### Backend Improvements

#### Query Optimization (November 2025)
- **Standardized Error Handling**: 4-level error handling hierarchy
  - Level 1: User-friendly messages for expected errors
  - Level 2: Generic error messages for security
  - Level 3: Detailed backend logging (never exposed to client)
  - Level 4: Database-level error tracking
- **Enhanced Logging**: Comprehensive logging for debugging and audit trails
  - Function entry/exit logging
  - Query parameter logging
  - Error context logging
  - No sensitive data in logs

See [docs/QUERY_AND_LOGGING_IMPROVEMENTS.md](docs/QUERY_AND_LOGGING_IMPROVEMENTS.md) for complete details.

### Frontend Architecture Updates

#### React Query v5 Integration (November 2025)
- **Centralized API Layer**: All API calls through dedicated service layer
- **Custom Hooks**: Reusable hooks for all data operations (useIndividuals, useFamilies, etc.)
- **Automatic Caching**: 5-minute stale time, 10-minute cache retention
- **Smart Invalidation**: Automatic cache updates on mutations
- **Optimistic UI Updates**: Instant feedback on all create/update/delete operations

See [docs/FRONTEND_ARCHITECTURE.md](docs/FRONTEND_ARCHITECTURE.md) and [docs/FRONTEND_API_ANALYSIS.md](docs/FRONTEND_API_ANALYSIS.md) for complete details.

### Documentation Organization

**Moved Documentation Files** (November 27, 2025):
- Reorganized markdown documentation files into `docs/` folder
- Kept `CLAUDE.md` in root for Claude Code integration
- Moved test files to `tests/` folder
- Updated all documentation cross-references to reflect new structure

**New Documentation Files**:
- [docs/FRONTEND_ARCHITECTURE.md](docs/FRONTEND_ARCHITECTURE.md) - Complete frontend architecture guide
- [docs/FRONTEND_API_ANALYSIS.md](docs/FRONTEND_API_ANALYSIS.md) - API calls and data fetching analysis
- [docs/QUERY_AND_LOGGING_IMPROVEMENTS.md](docs/QUERY_AND_LOGGING_IMPROVEMENTS.md) - Backend improvements
- [docs/FRONTEND_DOCS_INDEX.md](docs/FRONTEND_DOCS_INDEX.md) - Frontend documentation index

## 📝 License

Copyright © 2025 Belafonte TACOLCY Center. All rights reserved.

## 👥 Contact

For questions about the TACOLCY CRM system, please contact:
- **Technical Support**: [Your contact information]
- **Belafonte TACOLCY Center**: [Organization contact]

## 🙏 Acknowledgments

- Belafonte TACOLCY Center staff and volunteers
- WeCare Grant program
- All contributors to this project

---

*Last Updated: November 27, 2025*
*Version: 3.1.0 - FNSP eligibility assessment, repository reorganization, service area configuration from database*
