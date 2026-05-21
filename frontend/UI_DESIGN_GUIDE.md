# Researcher Digital Wallet - Holder UI/UX Design Guide

## Design Document Version 1.1
**Date:** May 2026  
**Status:** Implementation Complete  
**Platform:** Mobile-first (Max 432px), Responsive

---

## 1. Design Principles

### Core Principles
- **Clarity** - Information hierarchy is clear and intuitive
- **Simplicity** - Minimal steps to accomplish tasks
- **Trust** - Security indicators visible, data clearly protected
- **Accessibility** - WCAG 2.1 AA compliant
- **Thai-First** - Thai language primary, design for Thai users

### Design Goals
- Reduce cognitive load for first-time users
- Build trust through visual security indicators
- Enable quick access to credential requests
- Provide clear status tracking
- Support offline functionality

---

## 2. Color Palette

### Primary Colors
| Name | Hex | Usage | Thai Context |
|------|-----|-------|--------------|
| **Primary Blue** | #0066CC | Main CTAs, Links | Professional, official |
| **Success Green** | #00AA00 | Approved, verified credentials | Positive actions |
| **Warning Orange** | #FF9900 | Expiring soon, pending | Attention needed |
| **Error Red** | #CC0000 | Rejected, expired, errors | Critical alerts |
| **Neutral Dark** | #333333 | Text, dark mode | Content |
| **Neutral Light** | #F5F5F5 | Backgrounds, light mode | Clean appearance |

### Secondary Colors
- **Gold** #FFD700 - Badges, achievements
- **Gray** #999999 - Disabled states, secondary text
- **Light Blue** #E3F2FD - Hover states, backgrounds

### Accessibility
- Contrast ratio: 4.5:1 minimum (AA level)
- No color-only information (always include icons/text)
- Support for color blindness (avoid red/green only combinations)

---

## 3. Typography

### Font Family
- **Primary Font:** Inter or Roboto (sans-serif) - Western text
- **Thai Font:** Sarabun or IBM Plex Sans Thai - Thai text
- **Monospace:** Courier New or IBM Plex Mono - Code/IDs

### Font Sizes & Weights

| Element | Size | Weight | Usage |
|---------|------|--------|-------|
| **Heading 1** | 32px | 700 (Bold) | Page title |
| **Heading 2** | 24px | 700 (Bold) | Section title |
| **Heading 3** | 20px | 600 (Semibold) | Subsection |
| **Body Large** | 16px | 400 (Regular) | Main text |
| **Body Small** | 14px | 400 (Regular) | Secondary text |
| **Caption** | 12px | 400 (Regular) | Meta info, dates |
| **Button** | 14px | 600 (Semibold) | CTAs |

### Line Heights
- Heading: 1.2
- Body: 1.5
- Caption: 1.4

---

## 4. Layout & Spacing

### Grid System
- **Base Unit:** 8px (multiples of 8 for all spacing)
- **Columns:** 12 columns responsive grid
- **Gutters:** 16px (mobile), 24px (tablet), 32px (desktop)
- **Max Width:** 1200px for desktop

### Spacing Scale
```
xs:  4px  (half unit)
sm:  8px  (1 unit)
md: 16px  (2 units)
lg: 24px  (3 units)
xl: 32px  (4 units)
2xl: 48px (6 units)
```

### Safe Areas
- Mobile: 16px padding all sides
- Tablet: 24px padding all sides
- Desktop: 32px padding all sides

---

## 5. Page Flows & Wireframes

### Flow Diagram
```
┌─────────────────────────────────────────┐
│         Login/Authentication             │
│    (Email @g.swu.ac.th or Bua Sri ID)  │
└────────────────┬────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────┐
│      PIN Setup (6 digits)                │
│   (First time only)                      │
└────────────────┬────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────┐
│     DASHBOARD / HOME PAGE                │
│  ┌───────────────────────────────────┐  │
│  │      SMART CARD Display           │  │
│  │  (Name, ID, Affiliation, etc.)    │  │
│  └───────────────────────────────────┘  │
│                                          │
│  ┌─────────┬─────────┬─────────┬──────┐ │
│  │ Check   │ Submit  │ My Docs │ (+)  │ │
│  │ Requests│ Request │         │      │ │
│  └─────────┴─────────┴─────────┴──────┘ │
│                                          │
│  ┌───────────────────────────────────┐  │
│  │      Bottom Navigation Menu        │  │
│  │  [Home] [Wallet] [Profile] [Etc]  │  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
```

---

## 6. Page Specifications

### 6.1 Login Page

#### Screen Layout
```
┌──────────────────────────────┐
│                              │
│      [Logo/Brand]            │
│                              │
│   Researcher Digital Wallet  │
│   Thai Academic Edition      │
│                              │
│  ┌────────────────────────┐  │
│  │ Email / Bua Sri ID     │  │
│  │ [____________________] │  │
│  └────────────────────────┘  │
│                              │
│  ┌────────────────────────┐  │
│  │ Password               │  │
│  │ [____________________] │  │
│  └────────────────────────┘  │
│                              │
│  [     LOGIN BUTTON      ]   │
│                              │
│  "Forgot Password?" Link     │
│  "First Time?" Register Link │
│                              │
└──────────────────────────────┘
```

#### Components
- **Input Fields:**
  - Label: "อีเมลสถาบัน / Bua Sri ID"
  - Placeholder: "example@g.swu.ac.th"
  - Error state: Red border + error message
  - Success state: Green check icon

- **Password Field:**
  - Label: "รหัสผ่าน"
  - Show/hide toggle icon
  - Strength indicator (optional)

- **Login Button:**
  - Size: Full width (mobile), 200px (desktop)
  - Color: Primary Blue
  - States: Default, Hover, Active, Disabled, Loading
  - Text: "เข้าสู่ระบบ" (Sign In)

- **Links:**
  - "ลืมรหัสผ่าน?" (Forgot Password?)
  - "ลงทะเบียนครั้งแรก" (New User Registration)

#### Validation Rules
```javascript
// Email validation
- Must be @g.swu.ac.th or registered domain
- Format: user@domain.ac.th

// Bua Sri ID validation
- Thai ID format: 1X(9digits)
- Format: 1234567890123

// Password validation
- Minimum 8 characters
- At least 1 uppercase
- At least 1 number
- At least 1 special character
```

#### Error Messages
- "Please enter valid email or ID"
- "Password must be at least 8 characters"
- "Invalid credentials"
- "Account locked - try again in 15 minutes"

---

### 6.2 PIN Setup Page (First Time Only)

#### Screen Layout
```
┌──────────────────────────────┐
│  PIN Setup                   │
│  "Secure your account"       │
│                              │
│  Enter 6-digit PIN:          │
│  ⊙ ⊙ ⊙ ⊙ ⊙ ⊙               │
│                              │
│  [1] [2] [3]                 │
│  [4] [5] [6]                 │
│  [7] [8] [9]                 │
│     [0] [⌫]                  │
│                              │
│  [CANCEL] [CONFIRM]          │
│                              │
└──────────────────────────────┘
```

#### Components
- **PIN Input Display:**
  - 6 circular indicators (dots)
  - Filled dots as user enters numbers
  - Animation for visual feedback

- **Numeric Keypad:**
  - 0-9 buttons
  - Backspace button (⌫)
  - Large touch targets (48px minimum)

- **Action Buttons:**
  - CANCEL: Secondary style
  - CONFIRM: Primary blue, disabled until 6 digits entered

#### Behavior
- Auto-focus on first number input
- No echo of PIN (for security)
- Vibration feedback on mobile (optional)
- Confirmation requires re-entry of PIN
- Must match both entries to proceed

#### Security Notes
- PIN stored encrypted locally
- Used for session authentication only
- Auto-logout after 30 minutes inactivity
- Option to disable PIN (use biometric instead)

---

### 6.3 Dashboard / Home Page

#### Overall Layout
```
┌────────────────────────────────────┐
│    HEADER (Minimal)                │
│  Logo | Settings | Notifications  │
├────────────────────────────────────┤
│                                    │
│  ╔═══════════════════════════════╗ │
│  ║   SMART CARD                  ║ │
│  ║  ┌────────────┐               ║ │
│  ║  │  [Photo]   │  ชื่อ นามสกุล  ║ │
│  ║  │            │  ID: 1234...  ║ │
│  ║  └────────────┘               ║ │
│  ║  สังกัด: SWU                  ║ │
│  ║  ตำแหน่ง: ผช.                ║ │
│  ║  หมดอายุ: 15 มี.ค. 2568    ║ │
│  ╚═══════════════════════════════╝ │
│                                    │
│  SERVICES GRID (2x2):              │
│  ┌──────────────┬──────────────┐  │
│  │ ✓ ตรวจสอบ    │ ✎ ส่งคำร้อง   │  │
│  │ คำขอ        │ ใหม่          │  │
│  ├──────────────┼──────────────┤  │
│  │ 📄 เอกสาร    │ ➕ เพิ่มเติม │  │
│  │ ของฉัน      │              │  │
│  └──────────────┴──────────────┘  │
│                                    │
│  RECENT ACTIVITY / NEWS:           │
│  "Your request was approved..."    │
│  "Credential expires in 30 days"   │
│                                    │
├────────────────────────────────────┤
│  BOTTOM NAVIGATION MENU            │
│  [🏠] [👛] [📋] [👤]              │
└────────────────────────────────────┘
```

#### 6.3.1 Smart Card Section

**Specifications:**
- **Dimensions:** Full width - 16px margin, max 400px desktop
- **Height:** ~200px
- **Background:** Gradient (dark blue to lighter blue) or solid color
- **Border Radius:** 12px
- **Shadow:** 0 4px 12px rgba(0,0,0,0.15)
- **Padding:** 24px

**Content Layout:**
```
Top Section:
├─ Left: Profile Photo (80x80px, circular)
└─ Right: Name/ID (vertical stack)
  ├─ Name: [Display Name] (20px, bold, white)
  ├─ ID: ID: 1234567890123 (14px, gray)
  └─ Status: ✓ Verified (12px, green)

Bottom Section (grid):
├─ Affiliation: 🏢 Faculty of Science
├─ Position: 👨‍🎓 Assistant Professor (ผช.)
├─ Department: Chemistry Department
└─ Expiry: 📅 Expires: 15 มี.ค. 2568
```

**Interactive Features:**
- Tap/click to expand full card details
- Swipe left for additional info (mobile)
- QR code on back view (tap to reveal)

#### 6.3.2 Services Grid

**Grid Layout:**
- **Mobile:** 2 columns, stacked
- **Tablet:** 2 columns, side-by-side
- **Desktop:** 2-4 columns, flexible

**Card Specifications:**
- **Dimensions:** Equal width, 120px height minimum
- **Border Radius:** 8px
- **Padding:** 16px
- **Border:** 1px solid #E0E0E0
- **Background:** White/Light gray
- **Shadow:** 0 2px 4px rgba(0,0,0,0.08)

**Service Cards:**

| Box | Icon | Title | Thai Title | Description |
|-----|------|-------|-----------|-------------|
| 1 | ✓ | Check Requests | ตรวจสอบคำขอ | View previous requests & status |
| 2 | ✎ | Submit Request | ส่งคำร้องใหม่ | Start new position request |
| 3 | 📄 | My Documents | เอกสารของฉัน | View/manage my credentials |
| 4 | ➕ | More Services | เพิ่มเติม | Additional options |

**Interaction:**
- Hover state: Background color change, shadow increase
- Click: Navigate to respective section
- Ripple effect on click (Material Design style)
- Loading state: Spinner overlay

#### 6.3.3 Bottom Navigation Menu

**Specifications:**
- **Position:** Fixed at bottom (mobile), horizontal menu (desktop)
- **Height:** 56px (mobile), 64px (desktop)
- **Background:** White
- **Border-top:** 1px solid #E0E0E0
- **Shadow:** 0 -2px 4px rgba(0,0,0,0.08)

**Menu Items (5):**
```
Mobile View (5 icons):
[🏠] [👛] [📋] [👤] [⋮]
Home  Wallet Requests Profile More

Desktop View (horizontal):
[Home] [Wallet] [Requests] [Profile] [Settings]
```

**Navigation Items:**

| Icon | Label | Thai | Route | Badge |
|------|-------|------|-------|-------|
| 🏠 | Home | หน้าแรก | `/dashboard` | — |
| 👛 | Wallet | กระเป๋า | `/wallet` | Count |
| 📋 | Requests | คำร้อง | `/requests` | Count |
| 👤 | Profile | โปรไฟล์ | `/profile` | — |
| ⋮ | More | เพิ่มเติม | `/menu` | — |

**States:**
- **Active:** Primary blue, filled icon
- **Inactive:** Gray, outline icon
- **Badge:** Red dot or number (when items need attention)

---

### 6.4 Check Requests Page

#### Screen Layout
```
┌──────────────────────────────┐
│ ← Back | Requests            │
├──────────────────────────────┤
│ Filters: [All ▼] [2024 ▼]   │
├──────────────────────────────┤
│                              │
│ REQUEST ITEM 1:              │
│ ┌────────────────────────────┤
│ │ ✓ Approved                 │
│ │ Position: ผช. → รศ.       │
│ │ Date: 15 มี.ค. 2567      │
│ │ ID: REQ-2567-001           │
│ │ [View Details ▶]           │
│ └────────────────────────────┘
│                              │
│ REQUEST ITEM 2:              │
│ ┌────────────────────────────┤
│ │ ⏳ Pending Review            │
│ │ Position: ผช. → ศ.       │
│ │ Date: 01 เม.ย. 2568      │
│ │ ID: REQ-2568-002           │
│ │ [View Details ▶]           │
│ └────────────────────────────┘
│                              │
│ REQUEST ITEM 3:              │
│ ┌────────────────────────────┤
│ │ ✗ Rejected                 │
│ │ Position: ผช. → รศ.       │
│ │ Date: 20 ต.ค. 2567       │
│ │ ID: REQ-2567-003           │
│ │ [View Details ▶]           │
│ └────────────────────────────┘
│                              │
└──────────────────────────────┘
```

#### Request Item Card
- **Status Badge:** Color-coded (Green = Approved, Orange = Pending, Red = Rejected)
- **Status Icon:** ✓, ⏳, ✗
- **Information:**
  - Target position
  - Submission date
  - Request ID
- **Action Button:** "View Details" → Navigate to detail page

#### Status Types
| Status | Color | Icon | Meaning |
|--------|-------|------|---------|
| Approved | Green | ✓ | Position granted |
| Pending | Orange | ⏳ | Under review |
| Rejected | Red | ✗ | Request denied |
| Cancelled | Gray | — | Withdrawn request |

---

### 6.5 Submit Request Page

#### Screen Layout
```
┌──────────────────────────────┐
│ ← Back | Submit Request      │
├──────────────────────────────┤
│                              │
│ SELECT REQUEST TYPE:         │
│                              │
│ ┌──────────────────────────┐ │
│ │ 🎓 Promotion Request     │ │
│ │ Request new position     │ │
│ │ (ผช. → รศ. → ศ.)      │ │
│ └──────────────────────────┘ │
│                              │
│ ┌──────────────────────────┐ │
│ │ 📝 Teaching Evaluation   │ │
│ │ Request teaching review  │ │
│ └──────────────────────────┘ │
│                              │
│ ┌──────────────────────────┐ │
│ │ 📊 Academic Work Review  │ │
│ │ Request research review  │ │
│ └──────────────────────────┘ │
│                              │
│ ┌──────────────────────────┐ │
│ │ 📋 Other Requests        │ │
│ │ Other official requests  │ │
│ └──────────────────────────┘ │
│                              │
└──────────────────────────────┘
```

#### Request Type Options
Each option shows:
- **Icon:** Visual representation
- **Title:** Request type name
- **Description:** Brief explanation
- **Arrow:** Indicates clickable

#### After Selection
Wizard/Stepper shows:
1. **Step 1: Select Target Position**
   - Current position: ผช. (Assistant Professor)
   - Target position: (dropdown) รศ. / ศ.
   - Request method: Normal / Special

2. **Step 2: Review Credentials**
   - VC1: ✓ Personal ID
   - VC2: ✓ Employment Info
   - VC3: ⏳ Teaching Records (pending)
   - VC4: ✓ Publications
   - VC5: ⏳ Co-author Confirmations (pending)
   - VC6: ❌ Ready to generate (when all ready)

3. **Step 3: Confirm & Submit**
   - Summary of request
   - Consent checkbox: "I confirm this information is correct"
   - [Cancel] [Submit] buttons

---

### 6.6 My Documents Page

#### Screen Layout
```
┌──────────────────────────────┐
│ ← Back | My Documents        │
├──────────────────────────────┤
│ Filter: [All ▼] [Type ▼]    │
├──────────────────────────────┤
│                              │
│ CATEGORY: Personal           │
│ ┌──────────────────────────┐ │
│ │ 🆔 Personal ID (VC1)      │ │
│ │ Status: ✓ Verified        │ │
│ │ Issued: 01 ม.ค. 2567     │ │
│ │ Expires: 15 มี.ค. 2570  │ │
│ │ [View] [Share] [Export]  │ │
│ └──────────────────────────┘ │
│                              │
│ CATEGORY: Employment         │
│ ┌──────────────────────────┐ │
│ │ 🏢 Employment (VC2)       │ │
│ │ Status: ✓ Verified        │ │
│ │ Issued: 15 ม.ค. 2567     │ │
│ │ Faculty of Science        │ │
│ │ [View] [Share] [Export]  │ │
│ └──────────────────────────┘ │
│                              │
│ ┌──────────────────────────┐ │
│ │ 📚 Teaching Records (VC3) │ │
│ │ Status: ⏳ Requesting...  │ │
│ │ [Retry] [Cancel]         │ │
│ └──────────────────────────┘ │
│                              │
│ CATEGORY: Academic Work      │
│ ┌──────────────────────────┐ │
│ │ 📄 Publications (VC4)     │ │
│ │ Status: ✓ Verified        │ │
│ │ 5 publications on record  │ │
│ │ [View] [Share] [Export]  │ │
│ └──────────────────────────┘ │
│                              │
└──────────────────────────────┘
```

#### Document Item
- **Category Label:** Grouped by type
- **Document Type:** With icon
- **Status:** ✓ Verified, ⏳ Requesting, ❌ Missing
- **Details:** Issued date, expiry, summary
- **Actions:** View, Share (with PIN), Export

#### Document Status Badges
```
✓ Verified     - Green, credential verified and valid
⏳ Requesting  - Orange, waiting for issuer response
❌ Missing     - Red, credential not available
⚠ Expiring     - Orange, expires in 30 days
✗ Expired      - Red, credential no longer valid
```

---

### 6.7 Profile Page

#### Screen Layout
```
┌──────────────────────────────┐
│ ← Back | Profile             │
├──────────────────────────────┤
│                              │
│      ┌────────────────┐      │
│      │   [Photo]      │      │
│      │ (Tap to change)│      │
│      └────────────────┘      │
│                              │
│  PERSONAL INFORMATION:        │
│  Name: สกุลนามศรีโภค          │
│  Prefix: ดร.                 │
│  Birth Date: 15 มี.ค. 2528 │
│  National ID: 1234567890123  │
│                              │
│  INSTITUTION INFORMATION:     │
│  University: SWU              │
│  Faculty: Science             │
│  Department: Chemistry        │
│  Position: ผช.              │
│                              │
│  CONTACT INFORMATION:         │
│  Email: user@g.swu.ac.th    │
│  Phone: [_________________]  │
│  Office: [_________________] │
│                              │
│  SETTINGS:                    │
│  [☐] Biometric Login         │
│  [☑] Email Notifications     │
│  [☑] SMS Notifications       │
│  [☑] Push Notifications      │
│                              │
│  SECURITY:                    │
│  [Change PIN]                 │
│  [Change Password]            │
│  [View Login History]         │
│  [Logout]                     │
│                              │
│  ABOUT:                       │
│  [Privacy Policy]             │
│  [Terms of Service]           │
│  [Support & Feedback]         │
│  Version 1.0.0                │
│                              │
└──────────────────────────────┘
```

#### Sections
- **Profile Photo:** Tap to upload new
- **Personal Info:** Read-only or editable
- **Institution Info:** Auto-populated from VC2
- **Contact Info:** Editable fields
- **Settings:** Toggle switches
- **Security:** Actions (Change PIN, etc.)
- **About:** Links and version

---

## 7. Component Library

### Buttons

**Primary Button**
```
[    PRIMARY ACTION    ]
Background: #0066CC (Primary Blue)
Text: White, 14px semibold
Padding: 12px 24px
Border-radius: 4px
States:
  - Default: Blue background
  - Hover: Dark blue (#0052A3)
  - Active: Darker blue (#003D7A)
  - Disabled: Gray (#CCCCCC), opacity 0.5
```

**Secondary Button**
```
[    SECONDARY ACTION    ]
Background: White
Border: 1px solid #0066CC
Text: Blue, 14px semibold
Padding: 12px 24px
Border-radius: 4px
```

**Danger Button**
```
[    DELETE / CANCEL    ]
Background: #CC0000 (Red)
Text: White, 14px semibold
Padding: 12px 24px
```

### Form Inputs

**Text Input**
```
Label: "Field Name"
[_________________________]
Helper text (optional)

States:
- Empty: Light gray border
- Focused: Blue border, shadow
- Filled: Blue bottom border
- Error: Red border + error message
- Disabled: Gray, opacity 0.5
```

**Select/Dropdown**
```
Label: "Select Option"
[Option 1 ▼________________]
- Opens with animation
- Options highlight on hover
- Selected item marked with ✓
```

**Checkbox**
```
☑ I agree to terms
Unchecked: □
Checked: ☑
```

**Radio Button**
```
○ Option 1
● Option 2 (selected)
○ Option 3
```

### Status Indicators

**Badge**
```
Status Colors:
✓ Verified     [Green Badge]
⏳ Pending     [Orange Badge]
✗ Rejected     [Red Badge]
⚠ Warning     [Orange Badge]
ℹ Info         [Blue Badge]
```

**Alert Box**
```
Success Alert (Green background):
┌─────────────────────────────┐
│ ✓ Request submitted successfully
│   Reference: REQ-2568-001
└─────────────────────────────┘

Error Alert (Red background):
┌─────────────────────────────┐
│ ✗ Error: Invalid credentials
│   Please try again
└─────────────────────────────┘

Warning Alert (Orange background):
┌─────────────────────────────┐
│ ⚠ Credential expires in 30 days
│   Please renew soon
└─────────────────────────────┘
```

### Icons

**Essential Icons:**
- Home: 🏠
- Wallet/Documents: 👛
- Requests/Clipboard: 📋
- Profile/Person: 👤
- Settings: ⚙️
- Search: 🔍
- Menu/More: ⋮
- Back: ←
- Check/Verified: ✓
- Alert/Warning: ⚠
- Error/Rejected: ✗
- Loading/Pending: ⏳
- PDF Document: 📄
- Camera: 📷
- Download: ⬇️
- Share: 🔗

---

## 8. Responsive Design

### Breakpoints
```
Mobile:    < 480px   (phones)
Small:     480-768px (large phones, small tablets)
Tablet:    768-1024px (tablets)
Desktop:   > 1024px  (desktops)
```

### Layout Changes

**Mobile (< 480px):**
- Single column layout
- Bottom navigation (5 items)
- Full-width cards with padding
- Stacked forms
- Larger touch targets (44px minimum)

**Tablet (768-1024px):**
- 2 column layout where appropriate
- Side navigation menu (collapsible)
- Grid services (2x2)
- Medium touch targets (40px)

**Desktop (> 1024px):**
- Multi-column layout
- Horizontal top navigation
- Grid services (2x4 or 1x4)
- Standard touch targets (36px)

### Example - Dashboard on Different Screens

**Mobile:**
```
[Header]
[Smart Card - Full width]
[Service 1]
[Service 2]
[Service 3]
[Service 4]
[Bottom Nav]
```

**Tablet:**
```
[Header]
[Smart Card - Full width]
[Service 1] [Service 2]
[Service 3] [Service 4]
[Bottom Nav]
```

**Desktop:**
```
[Header]
[Smart Card - 50%] [News/Activity - 50%]
[Service 1] [Service 2] [Service 3] [Service 4] [+More]
[Left Nav] [Content Area] [Right Sidebar]
```

---

## 9. User Interactions

### Loading States
- Show spinner overlay
- Disable interactive elements
- Display progress bar for long operations (>2 seconds)
- Allow cancellation where appropriate

### Error Handling
- Clear error messages in user's language
- Suggest corrective action
- Provide support contact if unresolved
- Log error for debugging

### Confirmation Dialogs
```
┌─────────────────────────────┐
│ Confirm Action              │
├─────────────────────────────┤
│                             │
│ Are you sure you want to    │
│ submit this request?         │
│                             │
│ [CANCEL]  [CONFIRM]        │
│                             │
└─────────────────────────────┘
```

### Toast Notifications (Bottom)
```
✓ Request submitted successfully [X]
(Auto-dismiss after 4 seconds)
```

---

## 10. Accessibility Features

### WCAG 2.1 AA Compliance

**Color Contrast:**
- All text: 4.5:1 ratio minimum
- Large text (18px+): 3:1 ratio minimum
- Interactive elements: 3:1 ratio

**Keyboard Navigation:**
- Tab through all interactive elements
- Enter/Space to activate buttons
- Arrow keys for selections
- Esc to close modals

**Screen Reader Support:**
- Semantic HTML structure
- ARIA labels for icons
- Form labels associated with inputs
- Status updates announced

**Mobile Accessibility:**
- Touch targets: 44px minimum
- Readable text: 16px minimum
- Color not only indicator
- Zoom support up to 200%

---

## 11. Performance Guidelines

### Load Time Targets
- Initial load: < 3 seconds
- Page transitions: < 1 second
- API responses: < 500ms

### Optimization
- Lazy load images
- Minimize bundle size
- Cache static assets
- Compress data transfers
- Reduce database queries

---

## 12. Branding & Tone

### Visual Identity
- **Brand Color:** Primary Blue (#0066CC)
- **Logo:** Thai institutional logo + Wallet icon
- **Style:** Modern, clean, professional
- **Language:** Thai primary, English secondary

### Tone of Voice
- **Professional:** Authority and trustworthiness
- **Friendly:** Approachable and helpful
- **Clear:** Jargon-free language
- **Encouraging:** Support users through process

### Example Messages
- Success: "✓ คำร้องของคุณถูกส่งเรียบร้อยแล้ว" (Your request has been submitted successfully)
- Error: "❌ ขออภัย เกิดข้อผิดพลาด กรุณาลองใหม่" (Sorry, an error occurred. Please try again)
- Loading: "⏳ กำลังประมวลผล..." (Processing...)

---

## 13. Additional Features (Optional)

These can be added to the 4-item grid or menu:

### Suggested Services
1. **📞 Support/Help** - Contact support team
2. **📈 Statistics** - View request history statistics
3. **💾 Backup** - Backup credentials
4. **🔐 Security** - Manage security settings
5. **📝 Forms** - View generated forms
6. **🔔 Notifications** - View all notifications
7. **⚙️ Settings** - Advanced settings
8. **📱 My Devices** - Manage logged-in devices

### Advanced Features
- **Credential Sharing** - Share with verifiers via QR code
- **Offline Mode** - Access stored credentials offline
- **Biometric Login** - Fingerprint/Face ID
- **Dark Mode** - Night mode theme
- **Push Notifications** - Real-time status updates
- **Request Templates** - Save common requests
- **Batch Operations** - Select multiple requests
- **Export/Import** - Backup credentials

---

## 14. Security UI Elements

### Security Indicators
```
🔒 Secure Connection    - Shows on all pages
🛡️ Data Protected       - Encryption indicator
✓ Verified             - Credential verification badge
⚠️ Action Required      - Missing documents alert
```

### PIN/Biometric
- PIN entry: Hidden dots, no echo
- Biometric: Clear success/failure feedback
- Session timeout: Warning before logout (5 min)

---

## 15. Development Notes

### Technology Stack for UI
- **Framework:** React 18
- **Component Library:** Material-UI (MUI)
- **Styling:** Tailwind CSS + Emotion
- **Icons:** Heroicons or Font Awesome
- **Forms:** React Hook Form
- **State:** Redux Toolkit

### File Structure
```
src/
├── components/
│   ├── auth/
│   │   ├── LoginPage.tsx
│   │   └── PINSetup.tsx
│   ├── dashboard/
│   │   ├── Dashboard.tsx
│   │   ├── SmartCard.tsx
│   │   └── ServicesGrid.tsx
│   ├── requests/
│   │   ├── CheckRequests.tsx
│   │   ├── SubmitRequest.tsx
│   │   └── RequestDetail.tsx
│   ├── documents/
│   │   └── MyDocuments.tsx
│   ├── profile/
│   │   └── Profile.tsx
│   └── common/
│       ├── Button.tsx
│       ├── Input.tsx
│       ├── Card.tsx
│       └── BottomNav.tsx
├── pages/
├── styles/
└── constants/
    └── colors.ts
```

---

## 16. Design Handoff Checklist

- [ ] All colors finalized with accessibility checks
- [ ] All typography defined with Thai fonts
- [ ] All spacing/layout specs documented
- [ ] All component states defined
- [ ] All responsive breakpoints specified
- [ ] All icons created or sourced
- [ ] Accessibility audit completed
- [ ] Mobile interaction flows documented
- [ ] Loading states specified
- [ ] Error states specified
- [ ] Dark mode (if applicable) specified
- [ ] Design system documented in Figma/Adobe XD
- [ ] Component library created
- [ ] Stakeholder approval obtained

---

## 17. Testing Checklist

### UI Testing
- [ ] All pages render correctly on mobile/tablet/desktop
- [ ] All buttons work and navigate correctly
- [ ] All forms validate input correctly
- [ ] All status indicators display correctly
- [ ] All transitions are smooth and performant

### Usability Testing
- [ ] First-time users can complete login in < 2 minutes
- [ ] Users can find services in < 1 minute
- [ ] Navigation is intuitive
- [ ] Error messages are clear
- [ ] All text is readable

### Accessibility Testing
- [ ] WCAG 2.1 AA compliance verified
- [ ] Keyboard navigation works
- [ ] Screen readers work
- [ ] Color contrast meets standards
- [ ] Mobile touch targets are adequate

---

## 18. PAGE-BY-PAGE UI DIAGRAMS

### How to Read These Diagrams
```
╔══════════════════════════════════════════════════════════════╗
║  [HEADER]                                   [STATUS BAR]    ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║                    CONTENT AREA                             ║
║         (Shows UI elements and layouts)                     ║
║                                                              ║
║                                                              ║
║                                                              ║
╠══════════════════════════════════════════════════════════════╣
║   [HOME]    [WALLET]    [APPLY]    [PROFILE]                ║
║            BOTTOM NAV                                       ║
╚══════════════════════════════════════════════════════════════╝

Legend:
┌─────────────────────────────────┐
│ Component     │  Description   │
├───────────────┼────────────────┤
│ [HEADER]      │  Top bar       │
│ ┌───────────┐ │                │
│ │  CARD     │ │  Boxed area    │
│ └───────────┘ │                │
│  ────────     │  Divider       │
│  [BTN]        │  Button        │
│  ● Status     │  Indicator     │
│  <Back        │  Navigation    │
└───────────────┴────────────────┘
```

---

### PAGE 1: LOGIN
```
╔══════════════════════════════════════════════════════════════╗
║  [HEADER] ลงชื่อเข้าใช้งาน                    [STATUS: ●]    ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║              ┌──────────────────────┐                         ║
║              │    🏛️               │                         ║
║              │  GRL WALLET          │                         ║
║              │  Thai Academic       │                         ║
║              │  Researcher Wallet   │                         ║
║              └──────────────────────┘                         ║
║                                                              ║
║  ┌─────────────────────────────────────────────────────────┐  ║
║  │  📧 อีเมล / Email                                       │  ║
║  │  ┌─────────────────────────────────────────────────────┐│  ║
║  │  │ demo@swu.ac.th                                      ││  ║
║  │  └─────────────────────────────────────────────────────┘│  ║
║  └─────────────────────────────────────────────────────────┘  ║
║                                                              ║
║  ┌─────────────────────────────────────────────────────────┐  ║
║  │  🔒 รหัสผ่าน / Password                                   │  ║
║  │  ┌─────────────────────────────────────────────────────┐│  ║
║  │  │ ••••••••                                           ││  ║
║  │  └─────────────────────────────────────────────────────┘│  ║
║  └─────────────────────────────────────────────────────────┘  ║
║                                                              ║
║  ┌─────────────────────────────────────────────────────────┐  ║
║  │                                                         │  ║
║  │              เข้าสู่ระบบ / LOGIN                         │  ║
║  │                                                         │  ║
║  └─────────────────────────────────────────────────────────┘  ║
║                                                              ║
║                    ลืมรหัสผ่าน? / Forgot Password?            ║
║                                                              ║
║                                                              ║
╠══════════════════════════════════════════════════════════════╣
║   [HOME]    [WALLET]    [APPLY]    [PROFILE]                ║
╚══════════════════════════════════════════════════════════════╝

Elements:
- Logo: 64x64px centered
- Email input: text type, placeholder "demo@swu.ac.th"
- Password input: password type, show/hide toggle
- Login button: full width, primary color, disabled until valid
- Demo hint: small text below button
```

---

### PAGE 2: PIN SETUP (First Time)
```
╔══════════════════════════════════════════════════════════════╗
║  [HEADER] ตั้งค่า PIN                              [STATUS] ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║                    ┌───────────┐                            ║
║                    │    🔐     │                            ║
║                    └───────────┘                            ║
║                                                              ║
║              สร้างรหัส PIN 8 หลักของคุณ                       ║
║           Create your 8-digit PIN                           ║
║                                                              ║
║              ● ● ● ● ● ● ● ●                                ║
║              (PIN dots)                                     ║
║                                                              ║
║  ┌───────────────────────────────────────────────────────┐   ║
║  │           ┌───┐ ┌───┐ ┌───┐                           │   ║
║  │           │ 1 │ │ 2 │ │ 3 │                           │   ║
║  │           └───┘ └───┘ └───┘                           │   ║
║  │           ┌───┐ ┌───┐ ┌───┐                           │   ║
║  │           │ 4 │ │ 5 │ │ 6 │                           │   ║
║  │           └───┘ └───┘ └───┘                           │   ║
║  │           ┌───┐ ┌───┐ ┌───┐                           │   ║
║  │           │ 7 │ │ 8 │ │ 9 │                           │   ║
║  │           └───┘ └───┘ └───┘                           │   ║
║  │           ┌───┐ ┌───┐ ┌───┐                           │   ║
║  │           │ ⌫ │ │ 0 │ │ ✓ │                           │   ║
║  │           └───┘ └───┘ └───┘                           │   ║
║  └───────────────────────────────────────────────────────┘   ║
║                                                              ║
║              (Demo PIN: 12345678)                            ║
║                                                              ║
╠══════════════════════════════════════════════════════════════╣
║   [HOME]    [WALLET]    [APPLY]    [PROFILE]                ║
╚══════════════════════════════════════════════════════════════╝

Elements:
- PIN dots: 8 circles, filled when digit entered
- Keypad: 3x4 grid (1-9, backspace, 0, confirm)
- Button size: 64x64px minimum touch target
- Backspace: ← icon
- Confirm: ✓ icon (enabled when 8 digits entered)
```

---

### PAGE 3: PIN VERIFY (Returning User)
```
╔══════════════════════════════════════════════════════════════╗
║  [HEADER] ยืนยันตัวตน                                [STATUS] ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║                    ┌───────────┐                            ║
║                    │    🔐     │                            ║
║                    └───────────┘                            ║
║                                                              ║
║              กรุณากรอกรหัส PIN ของคุณ                         ║
║           Enter your 8-digit PIN                            ║
║                                                              ║
║              ● ● ● ● ○ ○ ○ ○                                ║
║              (2 digits entered)                             ║
║                                                              ║
║  ┌───────────────────────────────────────────────────────┐   ║
║  │           ┌───┐ ┌───┐ ┌───┐                           │   ║
║  │           │ 1 │ │ 2 │ │ 3 │                           │   ║
║  │           └───┘ └───┘ └───┘                           │   ║
║  │           ┌───┐ ┌───┐ ┌───┐                           │   ║
║  │           │ 4 │ │ 5 │ │ 6 │                           │   ║
║  │           └───┘ └───┘ └───┘                           │   ║
║  │           ┌───┐ ┌───┐ ┌───┐                           │   ║
║  │           │ 7 │ │ 8 │ │ 9 │                           │   ║
║  │           └───┘ └───┘ └───┘                           │   ║
║  │           ┌───┐ ┌───┐ ┌───┐                           │   ║
║  │           │ ⌫ │ │ 0 │ │ ✓ │                           │   ║
║  │           └───┘ └───┘ └───┘                           │   ║
║  └───────────────────────────────────────────────────────┘   ║
║                                                              ║
║                    ●●● ○○○○○  (attempts remaining)           ║
║                                                              ║
╠══════════════════════════════════════════════════════════════╣
║   [HOME]    [WALLET]    [APPLY]    [PROFILE]                ║
╚══════════════════════════════════════════════════════════════╝

Elements:
- PIN dots: 8 circles (filled = entered, empty = remaining)
- Wrong attempt indicator: red dots on left
- Max attempts: 3, then lockout
```

---

### PAGE 4: DASHBOARD (HOME)
```
╔══════════════════════════════════════════════════════════════╗
║  [HEADER]                                                     ║
║  ┌─────────────────────────────────────────────────────────┐ ║
║  │  👋 สวัสดี, ดร.สมชาย มหาวิทยาลัยศิริธรรมโชติ                 │ ║
║  │     Welcome, Dr. Somchai                               │ ║
║  │  📅 May 20, 2026                                        │ ║
║  └─────────────────────────────────────────────────────────┘ ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║  📋 VERIFIABLE CREDENTIALS                                   ║
║  ┌─────────────────────────────────────────────────────────┐ ║
║  │  ┌─────────────────────────────────────────────────┐    │ ║
║  │  │ VC1 │ ข้อมูลส่วนตัว        │ ● verified  │ [>]  │    │ ║
║  │  └─────────────────────────────────────────────────┘    │ ║
║  │  ┌─────────────────────────────────────────────────┐    │ ║
║  │  │ VC2 │ ประวัติการทำงาน      │ ● verified  │ [>]  │    │ ║
║  │  └─────────────────────────────────────────────────┘    │ ║
║  │  ┌─────────────────────────────────────────────────┐    │ ║
║  │  │ VC3 │ ผลงานวิชาการ        │ ○ pending    │ [>]  │    │ ║
║  │  └─────────────────────────────────────────────────┘    │ ║
║  └─────────────────────────────────────────────────────────┘ ║
║                                                              ║
║  🎯 QUICK ACTIONS                                            ║
║  ┌───────────────────────┐ ┌───────────────────────┐        ║
║  │    📄                 │ │    📋                 │        ║
║  │   สมัครตำแหน่ง         │ │   ดูวุฒิบัตร          │        ║
║  │   Apply Position      │ │   View Credentials    │        ║
║  └───────────────────────┘ └───────────────────────┘        ║
║                                                              ║
║  📊 APPLICATION STATUS                                       ║
║  ┌─────────────────────────────────────────────────────────┐ ║
║  │  📝 ไม่มีการสมัครงานที่กำลังดำเนินการ                       │ ║
║  │     No active applications                              │ ║
║  │                                                         │ ║
║  │     [  สมัครตำแหน่งใหม่ / Apply for Position  ]          │ ║
║  └─────────────────────────────────────────────────────────┘ ║
║                                                              ║
║                                                              ║
╠══════════════════════════════════════════════════════════════╣
║   [HOME]    [WALLET]    [APPLY]    [PROFILE]                ║
╚══════════════════════════════════════════════════════════════╝

Elements:
- Greeting card: gradient background, user name + university
- VC list: compact cards with status badges
- Status colors: ● green (verified), ● orange (pending)
- Quick actions: 2-column grid, icon + text
- Application status: card with CTA button
```

---

### PAGE 5: WALLET (CREDENTIALS LIST)
```
╔══════════════════════════════════════════════════════════════╗
║  [HEADER] กระเป๋าเอกสาร / Wallet                   [STATUS]  ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║  ┌─────────────────────────────────────────────────────────┐ ║
║  │ [VC1] [VC2] [VC3]  ← TABS                               │ ║
║  └─────────────────────────────────────────────────────────┘ ║
║                                                              ║
║  VC1: ข้อมูลส่วนตัว (Personal Info) — ACTIVE TAB              ║
║                                                              ║
║  ┌─────────────────────────────────────────────────────────┐ ║
║  │  ┌─────────────────────────────────────────────────┐    │ ║
║  │  │ 🏛️ ออกโดย: มหาวิทยาลัยศิริธรรมโชติ                │    │ ║
║  │  │    Issued by: Srinakharinwirot University        │    │ ║
║  │  ├─────────────────────────────────────────────────┤    │ ║
║  │  │                                                 │    │ ║
║  │  │ 👤 ชื่อ-นามสกุล: ดร.สมชาย ใจดี                    │    │ ║
║  │  │    วันเกิด: 15 มีนาคม 2523                       │    │ ║
║  │  │    รหัสประจำตัว: 1234567890123                   │    │ ║
║  │  │                                                 │    │ ║
║  │  │ 🎓 การศึกษา: ปริญญาเอก                          │    │ ║
║  │  │    สาขา: วิทยาการคอมพิวเตอร์                      │    │ ║
║  │  │                                                 │    │ ║
║  │  │ 📧 อีเมล: somchai@swu.ac.th                     │    │ ║
║  │  │ 📱 โทร: 081-234-5678                            │    │ ║
║  │  │                                                 │    │ ║
║  │  ├─────────────────────────────────────────────────┤    │ ║
║  │  │ ● verified │ อัพเดท: 20 พ.ค. 2569 09:30         │    │ ║
║  │  └─────────────────────────────────────────────────┘    │ ║
║  └─────────────────────────────────────────────────────────┘ ║
║                                                              ║
║  ┌─────────────────────────────────────────────────────────┐ ║
║  │  [  📤 แชร์ / Share  ]    [  📥 ดาวน์โหลด / Download ]   │ ║
║  └─────────────────────────────────────────────────────────┘ ║
║                                                              ║
╠══════════════════════════════════════════════════════════════╣
║   [HOME]    [WALLET]    [APPLY]    [PROFILE]                ║
╚══════════════════════════════════════════════════════════════╝

Elements:
- Tabs: horizontal scrollable, active tab underlined
- VC Card: bordered card with shadow
- Issuer badge: top of card
- Field rows: icon + label + value
- Status footer: badge + timestamp
- Action buttons: outline style, full width below card
```

---

### PAGE 6: APPLICATIONS (LIST)
```
╔══════════════════════════════════════════════════════════════╗
║  [HEADER] ประวัติการสมัคร / Applications             [STATUS] ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║  ┌─────────────────────────────────────────────────────────┐ ║
║  │  📋 เลือกตำแหน่งที่ต้องการสมัคร                            │ ║
║  │     Select Position to Apply                            │ ║
║  │                                                         │ ║
║  │  ┌─────────────────────────────────────────────────┐    │ ║
║  │  │ ○  ผู้ช่วยศาสตราจารย์ (Assistant Professor)      │    │ ║
║  │  │    คุณสมบัติ: ปริญญาเอก + ผลงาน 2 ชิ้น            │    │ ║
║  │  └─────────────────────────────────────────────────┘    │ ║
║  │  ┌─────────────────────────────────────────────────┐    │ ║
║  │  │ ○  รองศาสตราจารย์ (Associate Professor)          │    │ ║
║  │  │    คุณสมบัติ: ปริญญาเอก + ผลงาน 5 ชิ้น + ประสบการณ์ │    │ ║
║  │  └─────────────────────────────────────────────────┘    │ ║
║  │  ┌─────────────────────────────────────────────────┐    │ ║
║  │  │ ○  ศาสตราจารย์ (Professor)                        │    │ ║
║  │  │    คุณสมบัติ: ปริญญาเอก + ผลงาน 10 ชิ้น + ประสบการณ์ │    │ ║
║  │  └─────────────────────────────────────────────────┘    │ ║
║  └─────────────────────────────────────────────────────────┘ ║
║                                                              ║
║  ┌─────────────────────────────────────────────────────────┐ ║
║  │                                                         │ ║
║  │         [ เริ่มการสมัคร / Start Application  ]          │ ║
║  │                                                         │ ║
║  └─────────────────────────────────────────────────────────┘ ║
║                                                              ║
║  📜 ประวัติการสมัคร / Application History                    ║
║  ┌─────────────────────────────────────────────────────────┐ ║
║  │  [EMPTY STATE]                                          │ ║
║  │                                                         │ ║
║  │           📭 ไม่มีการสมัครงานที่ผ่านมา                     │ ║
║  │              No previous applications                   │ ║
║  │                                                         │ ║
║  └─────────────────────────────────────────────────────────┘ ║
║                                                              ║
╠══════════════════════════════════════════════════════════════╣
║   [HOME]    [WALLET]    [APPLY]    [PROFILE]                ║
╚══════════════════════════════════════════════════════════════╝

Elements:
- Position cards: radio buttons, requirements listed
- Start button: primary, disabled until position selected
- History section: shows past applications if any
- Empty state: icon + message
```

---

### PAGE 7: APPLICATION STEP 1 (VC1)
```
╔══════════════════════════════════════════════════════════════╗
║  [HEADER] ขั้นตอนที่ 1/4                            [STATUS]  ║
║  ← กลับ / Back                                        25%    ║
╠══════════════════════════════════════════════════════════════╣
║  ┌─────────────────────────────────────────────────────────┐ ║
║  │ VC1: ข้อมูลส่วนตัว / Personal Information                │ ║
║  │ [━━━━━━━●━━━━━━━━━━━━] Progress Bar                     │ ║
║  └─────────────────────────────────────────────────────────┘ ║
║                                                              ║
║  ┌─────────────────────────────────────────────────────────┐ ║
║  │  👤 ข้อมูลส่วนตัว                    [✏️ แก้ไข/Edit]       │ ║
║  ├─────────────────────────────────────────────────────────┤ ║
║  │                                                         │ ║
║  │  ชื่อ-นามสกุล: ดร.สมชาย ใจดี                             │ ║
║  │  วันเกิด: 15 มีนาคม 2523                                 │ ║
║  │  รหัสประจำตัวประชาชน: 1-2345-67890-12-3                  │ ║
║  │                                                         │ ║
║  ├─────────────────────────────────────────────────────────┤ ║
║  │  🎓 การศึกษา                                           │ ║
║  │  ปริญญา: ดุษฎีบัณฑิต (Ph.D.)                           │ ║
║  │  สาขา: วิทยาการคอมพิวเตอร์                               │ ║
║  │  มหาวิทยาลัย: จุฬาลงกรณ์มหาวิทยาลัย                       │ ║
║  │  ปีที่จบ: 2556                                          │ ║
║  │                                                         │ ║
║  ├─────────────────────────────────────────────────────────┤ ║
║  │  📞 ติดต่อ                                             │ ║
║  │  อีเมล: somchai@swu.ac.th                              │ ║
║  │  โทรศัพท์: 081-234-5678                                │ ║
║  │                                                         │ ║
║  └─────────────────────────────────────────────────────────┘ ║
║                                                              ║
║  ⚠️ แจ้งเตือน: หากแก้ไขข้อมูล จะต้องผ่านการยืนยันจากมหาวิทยาลัย  ║
║     Notice: Editing requires university re-verification      ║
║                                                              ║
║  ┌─────────────────────────────────────────────────────────┐ ║
║  │  [✓] ข้าพเจ้ายืนยันว่าข้อมูลข้างต้นถูกต้อง                 │ ║
║  │      I confirm the above information is correct         │ ║
║  └─────────────────────────────────────────────────────────┘ ║
║                                                              ║
║  ┌─────────────────────────────────────────────────────────┐ ║
║  │                                                         │ ║
║  │         [ ถัดไป / Next Step  → ]                        │ ║
║  │                                                         │ ║
║  └─────────────────────────────────────────────────────────┘ ║
║                                                              ║
╠══════════════════════════════════════════════════════════════╣
║   [HOME]    [WALLET]    [APPLY]    [PROFILE]                ║
╚══════════════════════════════════════════════════════════════╝

Elements:
- Back button: top left, arrow icon
- Progress bar: 25% filled, step indicator
- VC1 card: read-only fields (if not editing)
- Edit button: pencil icon, top right
- Warning alert: yellow background, alert icon
- Checkbox: confirmation before proceeding
- Next button: primary, disabled until confirmed
```

---

### PAGE 8: APPLICATION STEP 2 (VC2)
```
╔══════════════════════════════════════════════════════════════╗
║  [HEADER] ขั้นตอนที่ 2/4                            [STATUS]  ║
║  ← กลับ / Back                                        50%    ║
╠══════════════════════════════════════════════════════════════╣
║  ┌─────────────────────────────────────────────────────────┐ ║
║  │ VC2: ประวัติการทำงาน / Work History                      │ ║
║  │ [━━━━━━━━━━●━━━━━━━━━━━] Progress Bar                   │ ║
║  └─────────────────────────────────────────────────────────┘ ║
║                                                              ║
║  ┌─────────────────────────────────────────────────────────┐ ║
║  │  💼 ตำแหน่งปัจจุบัน                    [✏️ แก้ไข/Edit]   │ ║
║  ├─────────────────────────────────────────────────────────┤ ║
║  │                                                         │ ║
║  │  ตำแหน่ง: ผู้ช่วยศาสตราจารย์                              │ ║
║  │  คณะ: คณะวิทยาศาสตร์                                     │ ║
║  │  ภาควิชา: วิทยาการคอมพิวเตอร์                            │ ║
║  │  เงินเดือน: 65,000 บาท                                   │ ║
║  │                                                         │ ║
║  ├─────────────────────────────────────────────────────────┤ ║
║  │  📅 ระยะเวลาทำงาน                                       │ ║
║  │  เริ่มงาน: 1 มิถุนายน 2559                              │ ║
║  │  รวม: 10 ปี 11 เดือน                                    │ ║
║  │                                                         │ ║
║  ├─────────────────────────────────────────────────────────┤ ║
║  │  📚 ภาระงานสอน                                         │ ║
║  │  รายวิชา: CS101, CS201, CS301                          │ ║
║  │  ชั่วโมง/สัปดาห์: 12 ชั่วโมง                             │ ║
║  │                                                         │ ║
║  └─────────────────────────────────────────────────────────┘ ║
║                                                              ║
║  ┌─────────────────────────────────────────────────────────┐ ║
║  │  ⏳ [ รอการยืนยันจากมหาวิทยาลัย ]                          │ ║
║  │     หากแก้ไข จะต้องผ่านการยืนยันจากมหาวิทยาลัยอีกครั้ง     │ ║
║  └─────────────────────────────────────────────────────────┘ ║
║                                                              ║
║  ┌─────────────────────────────────────────────────────────┐ ║
║  │  [✓] ข้าพเจ้ายืนยันว่าข้อมูลข้างต้นถูกต้อง                 │ ║
║  └─────────────────────────────────────────────────────────┘ ║
║                                                              ║
║  ┌─────────────────────────────────────────────────────────┐ ║
║  │  [ ถัดไป / Next Step  → ]                               │ ║
║  └─────────────────────────────────────────────────────────┘ ║
║                                                              ║
╠══════════════════════════════════════════════════════════════╣
║   [HOME]    [WALLET]    [APPLY]    [PROFILE]                ║
╚══════════════════════════════════════════════════════════════╝

Elements:
- Progress bar: 50% filled
- VC2 card: similar structure to VC1
- Section dividers: position, tenure, teaching load
- Pending badge: orange, shows if edit was made
- Next button: only enabled if checkbox checked
```

---

### PAGE 9: APPLICATION STEP 3 (VC3 - HAS PUBLICATIONS)
```
╔══════════════════════════════════════════════════════════════╗
║  [HEADER] ขั้นตอนที่ 3/4                            [STATUS]  ║
║  ← กลับ / Back                                        75%    ║
╠══════════════════════════════════════════════════════════════╣
║  ┌─────────────────────────────────────────────────────────┐ ║
║  │ VC3: ผลงานวิชาการ / Academic Publications                 │ ║
║  │ [━━━━━━━━━━━━━━●━━━━━━━━] Progress Bar                   │ ║
║  └─────────────────────────────────────────────────────────┘ ║
║                                                              ║
║  📊 สรุปผลงาน / Summary: 5 ผลงาน (ต้องมีอย่างน้อย 5 ผลงาน)      ║
║                                                              ║
║  ┌─────────────────────────────────────────────────────────┐ ║
║  │  📄 1. "Deep Learning for Thai NLP"                      │ ║
║  │     วารสาร: ACM Transactions          ● verified        │ ║
║  │     ปี: 2565 │ ค่าคุณimpact: 3.5                          │ ║
║  └─────────────────────────────────────────────────────────┘ ║
║  ┌─────────────────────────────────────────────────────────┐ ║
║  │  📄 2. "Neural Machine Translation"                      │ ║
║  │     วารสาร: Springer Nature          ● verified         │ ║
║  │     ปี: 2564 │ ค่าคุณimpact: 4.2                          │ ║
║  └─────────────────────────────────────────────────────────┘ ║
║  ┌─────────────────────────────────────────────────────────┐ ║
║  │  📄 3. "BERT for Thai Language"                         │ ║
║  │     วารสาร: IEEE Access               ● verified         │ ║
║  │     ปี: 2563 │ ค่าคุณimpact: 3.8                          │ ║
║  └─────────────────────────────────────────────────────────┘ ║
║                                                              ║
║  ... (แสดง 5 ผลงานล่าสุด / Show 5 latest)                     ║
║                                                              ║
║  ┌─────────────────────────────────────────────────────────┐ ║
║  │  [✓] ข้าพเจ้ายืนยันว่าข้อมูลข้างต้นถูกต้อง                 │ ║
║  └─────────────────────────────────────────────────────────┘ ║
║                                                              ║
║  ┌─────────────────────────────────────────────────────────┐ ║
║  │  [ ถัดไป / Next Step  → ]                               │ ║
║  └─────────────────────────────────────────────────────────┘ ║
║                                                              ║
╠══════════════════════════════════════════════════════════════╣
║   [HOME]    [WALLET]    [APPLY]    [PROFILE]                ║
╚══════════════════════════════════════════════════════════════╝
```

---

### PAGE 10: APPLICATION STEP 3 (VC3 - NO PUBLICATIONS)
```
╔══════════════════════════════════════════════════════════════╗
║  [HEADER] ขั้นตอนที่ 3/4                            [STATUS]  ║
║  ← กลับ / Back                                        75%    ║
╠══════════════════════════════════════════════════════════════╣
║  ┌─────────────────────────────────────────────────────────┐ ║
║  │ VC3: ผลงานวิชาการ / Academic Publications                 │ ║
║  │ [━━━━━━━━━━━━━━●━━━━━━━━] Progress Bar                   │ ║
║  └─────────────────────────────────────────────────────────┘ ║
║                                                              ║
║  ┌─────────────────────────────────────────────────────────┐ ║
║  │  ⚠️ คุณยังไม่มี VC3                                      │ ║
║  │     You don't have VC3 yet                              │ ║
║  │                                                         │ ║
║  │     กรุณาขอ VC3 จากสำนักพิมพ์เพื่อดำเนินการต่อ              │ ║
║  │     Please request VC3 from publisher to continue       │ ║
║  └─────────────────────────────────────────────────────────┘ ║
║                                                              ║
║  📤 ขอ VC3 ใหม่ / Request New VC3                           ║
║                                                              ║
║  ┌─────────────────────────────────────────────────────────┐ ║
║  │  🏢 เลือกสำนักพิมพ์ / Select Publisher                    │ ║
║  │                                                         │ ║
║  │  ┌─────────────────────────────────────────────────┐    │ ║
║  │  │ ○  Scopus                                       │    │ ║
║  │  └─────────────────────────────────────────────────┘    │ ║
║  │  ┌─────────────────────────────────────────────────┐    │ ║
║  │  │ ○  TCI (Thai-Journal Citation)                 │    │ ║
║  │  └─────────────────────────────────────────────────┘    │ ║
║  │  ┌─────────────────────────────────────────────────┐    │ ║
║  │  │ ○  SRI (สถาบันวิจัยศึกษาประสบการณ์)                │    │ ║
║  │  └─────────────────────────────────────────────────┘    │ ║
║  └─────────────────────────────────────────────────────────┘ ║
║                                                              ║
║  ┌─────────────────────────────────────────────────────────┐ ║
║  │  📝 หัวข้อวิจัย / Research Topic                         │ ║
║  │  ┌─────────────────────────────────────────────────────┐│ ║
║  │  │ การประยุกต์ใช้ AI ในการศึกษา                        ││ ║
║  │  └─────────────────────────────────────────────────────┘│ ║
║  └─────────────────────────────────────────────────────────┘ ║
║                                                              ║
║  🔗 VC1 จะถูกแนบโดยอัตโนมัติเพื่อยืนยันตัวตน                    ║
║     VC1 will be attached automatically for identity          ║
║                                                              ║
║  ┌─────────────────────────────────────────────────────────┐ ║
║  │  [ 📤 ขอ VC3 / Request VC3  ]                           │ ║
║  └─────────────────────────────────────────────────────────┘ ║
║                                                              ║
╠══════════════════════════════════════════════════════════════╣
║   [HOME]    [WALLET]    [APPLY]    [PROFILE]                ║
╚══════════════════════════════════════════════════════════════╝

Elements:
- Warning card: yellow background, alert icon
- Publisher selection: radio buttons with descriptions
- Topic input: textarea, required
- Auto-attach notice: info text about VC1
- Request button: primary, disabled until all fields filled
```

---

### PAGE 11: APPLICATION VERIFY (FINAL)
```
╔══════════════════════════════════════════════════════════════╗
║  [HEADER] ตรวจสอบและยืนยัน / Review & Confirm        [STATUS] ║
║  ← กลับ / Back                                       100%    ║
╠══════════════════════════════════════════════════════════════╣
║  ┌─────────────────────────────────────────────────────────┐ ║
║  │ [━━━━━━━━━━━━━━━●━━━━━━━━━━━━] ✓ พร้อมส่ง               │ ║
║  └─────────────────────────────────────────────────────────┘ ║
║                                                              ║
║  📋 สรุปคำขอ / Application Summary                          ║
║                                                              ║
║  ┌─────────────────────────────────────────────────────────┐ ║
║  │  🎯 ตำแหน่งที่สมัคร: ผู้ช่วยศาสตราจารย์                    │ ║
║  │     Position: Assistant Professor                      │ ║
║  └─────────────────────────────────────────────────────────┘ ║
║                                                              ║
║  📄 VC1: ข้อมูลส่วนตัว                           ● verified   ║
║  ┌─────────────────────────────────────────────────────────┐ ║
║  │  ดร.สมชาย ใจดี | ปริญญาเอก | ม.จุฬาฯ                      │ ║
║  └─────────────────────────────────────────────────────────┘ ║
║                                                              ║
║  📄 VC2: ประวัติการทำงาน                           ● verified ║
║  ┌─────────────────────────────────────────────────────────┐ ║
║  │  ผศ. | 10 ปี | คณะวิทยาศาสตร์ | เงินเดือน 65,000         │ ║
║  └─────────────────────────────────────────────────────────┘ ║
║                                                              ║
║  📄 VC3: ผลงานวิชาการ                              ● verified ║
║  ┌─────────────────────────────────────────────────────────┐ ║
║  │  5 ผลงาน | Scopus, IEEE, Springer                       │ ║
║  └─────────────────────────────────────────────────────────┘ ║
║                                                              ║
║  ┌─────────────────────────────────────────────────────────┐ ║
║  │  🏛️ ผู้ตรวจสอบ / Verifier                                │ ║
║  │  มหาวิทยาลัยศิริธรรมโชติ (Srinakharinwirot University)    │ ║
║  └─────────────────────────────────────────────────────────┘ ║
║                                                              ║
║  ┌─────────────────────────────────────────────────────────┐ ║
║  │  [✓] ข้าพเจ้ายืนยันให้ส่งข้อมูลนี้เป็น Verifiable          │ ║
║  │      Presentation (VP) ไปยังผู้ตรวจสอบ                    │ ║
║  └─────────────────────────────────────────────────────────┘ ║
║                                                              ║
║  ┌─────────────────────────────────────────────────────────┐ ║
║  │                                                         │ ║
║  │    [ 📤 ส่งใบสมัคร / Submit Application  ]              │ ║
║  │                                                         │ ║
║  └─────────────────────────────────────────────────────────┘ ║
║                                                              ║
╠══════════════════════════════════════════════════════════════╣
║   [HOME]    [WALLET]    [APPLY]    [PROFILE]                ║
╚══════════════════════════════════════════════════════════════╝

Elements:
- Progress bar: 100%, green, "Ready to submit"
- Position card: top, shows selected position
- VC summary cards: compact, show key info + status
- Verifier info: university name
- Confirmation checkbox: required before submit
- Submit button: primary, full width, prominent
```

---

### PAGE 12: PROFILE / SETTINGS
```
╔══════════════════════════════════════════════════════════════╗
║  [HEADER] โปรไฟล์ / Profile                        [STATUS]  ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║  ┌─────────────────────────────────────────────────────────┐ ║
║  │  ┌──────┐                                               │ ║
║  │  │ 👤🖼️ │  ดร.สมชาย ใจดี                                │ ║
║  │  │      │  somchai@swu.ac.th                           │ ║
║  │  └──────┘  มหาวิทยาลัยศิริธรรมโชติ                       │ ║
║  │           [ แก้ไขรูปโปรไฟล์ / Edit Photo ]              │ ║
║  └─────────────────────────────────────────────────────────┘ ║
║                                                              ║
║  📊 สถิติ / Statistics                                      ║
║  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐           ║
║  │    VC1      │ │    VC2      │ │    VC3      │           ║
║  │  ● active   │ │  ● active   │ │  ● pending  │           ║
║  └─────────────┘ └─────────────┘ └─────────────┘           ║
║                                                              ║
║  ⚙️ การตั้งค่า / Settings                                   ║
║  ┌─────────────────────────────────────────────────────────┐ ║
║  │  🔐 เปลี่ยนรหัส PIN / Change PIN              [→]        │ ║
║  ├─────────────────────────────────────────────────────────┤ ║
║  │  🔔 การแจ้งเตือน / Notifications            [ON ]        │ ║
║  ├─────────────────────────────────────────────────────────┤ ║
║  │  🌐 ภาษา / Language                         [TH ]        │ ║
║  ├─────────────────────────────────────────────────────────┤ ║
║  │  📱 อุปกรณ์ที่เชื่อมต่อ / Connected Devices    [→]      │ ║
║  ├─────────────────────────────────────────────────────────┤ ║
║  │  🔒 ความปลอดภัย / Security                      [→]     │ ║
║  └─────────────────────────────────────────────────────────┘ ║
║                                                              ║
║  ┌─────────────────────────────────────────────────────────┐ ║
║  │  [ 🚪 ออกจากระบบ / Logout ]                              │ ║
║  └─────────────────────────────────────────────────────────┘ ║
║                                                              ║
║  ┌─────────────────────────────────────────────────────────┐ ║
║  │  ℹ️ เวอร์ชัน / Version: 1.0.0 | GRL Wallet              │ ║
║  └─────────────────────────────────────────────────────────┘ ║
║                                                              ║
╠══════════════════════════════════════════════════════════════╣
║   [HOME]    [WALLET]    [APPLY]    [PROFILE] (ACTIVE)       ║
╚══════════════════════════════════════════════════════════════╝

Elements:
- Profile header: avatar (64x64), name, email, university
- Statistics: 3 cards showing VC status
- Settings list: icon + label + value/arrow
- Logout button: danger color, full width
- Version info: footer, small text
```

---

### NAVIGATION FLOW DIAGRAM

```
┌─────────────────────────────────────────────────────────────────┐
│                      APP NAVIGATION                              │
└─────────────────────────────────────────────────────────────────┘

    ┌──────────────────────────────────────────────────────────────┐
    │                         LOGIN                                 │
    │                   demo@swu.ac.th / demo123                   │
    └─────────────────────┬────────────────────────────────────────┘
                          │
                          ▼
    ┌──────────────────────────────────────────────────────────────┐
    │              NEW USER? ───────────────────────────────────┐  │
    │                  │                                        │  │
    │         ┌────────┴────────┐                              │  │
    │         ▼                  ▼                              │  │
    │    [YES: First Time]   [NO: Returning]                    │  │
    │         │                  │                              │  │
    │         ▼                  ▼                              │  │
    │  ┌────────────┐      ┌────────────┐                       │  │
    │  │ PIN SETUP  │      │ PIN VERIFY │                       │  │
    │  │ 12345678   │      │             │                       │  │
    │  └─────┬──────┘      └──────┬──────┘                       │  │
    └────────┼───────────────────┼───────────────────────────────┘  │
             │                   │
             └─────────┬─────────┘
                       ▼
             ┌────────────────────┐
             │    DASHBOARD       │
             │    (Home)          │
             └─────────┬──────────┘
                       │
       ┌───────────────┼───────────────┬───────────────┐
       │               │               │               │
       ▼               ▼               ▼               ▼
┌────────────┐  ┌────────────┐  ┌────────────┐  ┌────────────┐
│  WALLET    │  │  APPLY     │  │  PROFILE   │  │   BACK     │
│  (VCs 1-3) │  │  (Steps)   │  │  (Settings)│  │   (PIN)    │
└────────────┘  └─────┬──────┘  └────────────┘  └────────────┘
                     │
        ┌────────────┼────────────┬────────────┐
        │            │            │            │
        ▼            ▼            ▼            ▼
   ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐
   │ STEP 1  │ │ STEP 2  │ │ STEP 3  │ │ VERIFY  │
   │ (VC1)   │ │ (VC2)   │ │ (VC3)   │ │ (Submit)│
   └────┬────┘ └────┬────┘ └────┬────┘ └────┬────┘
        │            │            │            │
        └────────────┴────────────┴────────────┘
                           │
                           ▼
                   ┌───────────────┐
                   │   SUCCESS     │
                   │   SCREEN      │
                   └───────────────┘
```

---

## 19. Implementation Summary

### Tech Stack
- **Framework:** React 18 (JavaScript)
- **Styling:** Tailwind CSS + DaisyUI
- **State:** Redux Toolkit
- **Router:** React Router 6
- **Icons:** Font Awesome 6

### File Structure
```
src/
├── App.jsx                    # Routes configuration
├── components/
│   ├── Layout.jsx            # Mobile layout with bottom nav
│   ├── Header.jsx           # Top header
│   └── Sidebar.jsx           # Sidebar (desktop)
├── pages/
│   ├── Login.jsx             # Login page
│   ├── Dashboard.jsx         # Home dashboard
│   ├── Wallet.jsx            # Credential wallet
│   ├── Applications.jsx       # Application list
│   ├── Settings.jsx          # Profile & settings
│   ├── application/
│   │   ├── ApplicationStep1.jsx   # VC1 form
│   │   ├── ApplicationStep2.jsx   # VC2 form
│   │   ├── ApplicationStep3.jsx   # VC3 form
│   │   └── ApplicationVerify.jsx   # Final review
│   ├── PinSetup.jsx          # PIN creation
│   └── PinVerify.jsx         # PIN verification
├── store/
│   └── slices/
│       ├── authSlice.js       # Auth state
│       ├── credentialsSlice.js # Credentials state
│       └── applicationsSlice.js # Applications state
├── data/
│   └── vcData.js             # Mock VC data (VC1, VC2, VC3)
└── api/                       # API clients
```

### Mobile Design Specs
- **Max Width:** 432px (phone container)
- **Safe Area:** 16px padding
- **Bottom Nav Height:** 64px
- **Header Height:** 56px
- **Touch Target:** Minimum 44px

### DaisyUI Theme (grltheme)
```javascript
{
  primary: "#0066CC",     // Main CTAs
  secondary: "#6C63FF",   // Secondary actions
  accent: "#FF9900",       // Warnings
  neutral: "#333333",     // Text
  "base-100": "#FFFFFF",  // Background
  success: "#00AA00",      // Verified
  warning: "#FF9900",      // Pending
  error: "#CC0000"         // Errors
}
```

---

**Design Document Version:** 1.1  
**Last Updated:** May 20, 2026  
**Status:** Implementation Complete

