# wireframe.md - Digital Wallet Wireframe

## App Structure Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                         ROLES                                    │
├─────────────────┬─────────────────┬─────────────────────────────┤
│     HOLDER      │     ISSUER      │        REVIEWER            │
│  (Researcher)   │   (System)      │    (Supervisor/Auditor)     │
│                 │                 │                             │
│ • Conduct exp  │ • Generate VC   │ • Verify data integrity     │
│ • Record data  │ • Sign credentials│ • Review experiments       │
│ • View wallet  │ • Timestamp     │ • Export reports            │
└────────┬────────┴────────┬────────┴────────────┬────────────────┘
         │                │                      │
         └────────────────┴──────────────────────┘
                          │
                    ┌─────▼─────┐
                    │  SHARED   │
                    │  UI/UX    │
                    └───────────┘
```

---

## Screen Flow Map

```
                    ┌─────────────────┐
                    │    HOME PAGE    │
                    │                 │
                    │  [My Wallet]    │───▶ WALLET PAGE
                    │  [Create Lab]   │───▶ CREATE EXPERIMENT
                    │  [Scan QR]      │───▶ SCANNER
                    │  [Verify]       │───▶ VERIFY SCAN
                    └─────────────────┘
                           │
           ┌───────────────┼───────────────┐
           │               │               │
           ▼               ▼               ▼
    ┌────────────┐  ┌────────────┐  ┌────────────┐
    │  WALLET    │  │  CREATE    │  │  VERIFY    │
    │  PAGE      │  │  EXPERIMENT│  │  RESULT    │
    └────────────┘  └────────────┘  └────────────┘
```

---

## Screen Details

### 1. HOME PAGE

```
┌─────────────────────────────────────────┐
│  🧪 Golden Recipe Lab                   │
│  [User: Dr. Som]                        │
│─────────────────────────────────────────│
│                                         │
│     ┌─────────────────────────────┐     │
│     │      [ MY WALLET ]         │     │
│     │   View VC cards & records  │     │
│     └─────────────────────────────┘     │
│                                         │
│     ┌─────────────────────────────┐     │
│     │    [ CREATE NEW LAB ]       │     │
│     │   Start new experiment      │     │
│     └─────────────────────────────┘     │
│                                         │
│     ┌─────────────────────────────┐     │
│     │      [ SCAN REAGENT ]       │     │
│     │   Scan QR to add reagent    │     │
│     └─────────────────────────────┘     │
│                                         │
│     ┌─────────────────────────────┐     │
│     │      [ VERIFY ]             │     │
│     │   Verify experiment VC      │     │
│     └─────────────────────────────┘     │
│                                         │
└─────────────────────────────────────────┘
```

---

### 2. WALLET PAGE (Holder View)

```
┌─────────────────────────────────────────┐
│  ← Back     My Wallet           [+]    │
│─────────────────────────────────────────│
│  FILTER: [All] [Experiments] [Credentials] │
│─────────────────────────────────────────│
│  ┌─────────────────────────────────────┐│
│  │ VC CARD                             ││
│  │ ─────────────────────────────────── ││
│  │ pH Indicator Experiment #001         ││
│  │ Researcher: Dr. Som                 ││
│  │ Date: 2026-05-18 09:30              ││
│  │ Status: ✓ Verified                  ││
│  │ [VIEW] [SHARE]                      ││
│  └─────────────────────────────────────┘│
│                                         │
│  ┌─────────────────────────────────────┐│
│  │ VC CARD                             ││
│  │ ─────────────────────────────────── ││
│  │ Vitamin C Test #002                 ││
│  │ Researcher: Dr. Som                 ││
│  │ Date: 2026-05-17 14:00              ││
│  │ Status: ✓ Verified                  ││
│  │ [VIEW] [SHARE]                      ││
│  └─────────────────────────────────────┘│
│                                         │
└─────────────────────────────────────────┘
```

---

### 3. CREATE EXPERIMENT (Flow)

#### Step 1: Select Template

```
┌─────────────────────────────────────────┐
│  ← Back     New Experiment      [Next] │
│─────────────────────────────────────────│
│  SELECT EXPERIMENT TYPE                 │
│                                         │
│  ┌─────────────────────────────────────┐│
│  │ [📋] pH Indicator Paper Test        ││
│  │     Acid-Base identification        ││
│  └─────────────────────────────────────┘│
│                                         │
│  ┌─────────────────────────────────────┐│
│  │ [📋] Vitamin C Degradation          ││
│  │     Heat stability test             ││
│  └─────────────────────────────────────┘│
│                                         │
│  ┌─────────────────────────────────────┐│
│  │ [📋] Custom Experiment              ││
│  │     Define your own protocol        ││
│  └─────────────────────────────────────┘│
│                                         │
└─────────────────────────────────────────┘
```

#### Step 2: Prepare (Scan Reagent QR)

```
┌─────────────────────────────────────────┐
│  ← Back     Step 1: Prepare     [Next] │
│─────────────────────────────────────────│
│  SCAN REAGENT QR CODES                  │
│                                         │
│  ┌─────────────────────────────────────┐│
│  │     📷                                ││
│  │   [Scan QR]                          ││
│  │     Align QR in frame                ││
│  └─────────────────────────────────────┘│
│                                         │
│  SCANNED REAGENTS:                      │
│  ┌─────────────────────────────────────┐│
│  │ ✓ pH Paper Lot#PH2026-001           ││
│  │   Expiry: 2027-01-15                ││
│  │   [✕ Remove]                        ││
│  └─────────────────────────────────────┘│
│                                         │
│  [+ Add More Reagent]                   │
│                                         │
└─────────────────────────────────────────┘
```

#### Step 3: Run (Start Experiment)

```
┌─────────────────────────────────────────┐
│  ← Back     Step 2: Run        [Start] │
│─────────────────────────────────────────│
│  EXPERIMENT READY                       │
│                                         │
│  pH Indicator Paper Test               │
│  Reagents: pH Paper Lot#PH2026-001      │
│                                         │
│  ─────────────────────────────────────  │
│                                         │
│         🕐 2026-05-18 09:30:00         │
│                                         │
│     ┌─────────────────────────────┐     │
│     │      [ ▶ START EXPERIMENT ] │     │
│     └─────────────────────────────┘     │
│                                         │
└─────────────────────────────────────────┘
```

```
┌─────────────────────────────────────────┐
│  ← Back     Experiment Running  [End]  │
│─────────────────────────────────────────┤
│  ▶ STARTED: 2026-05-18 09:30:00        │
│                                         │
│         ⏱️ 00:05:23                    │
│                                         │
│     ┌─────────────────────────────┐     │
│     │      [ 🔴 END EXPERIMENT ]  │     │
│     └─────────────────────────────┘     │
│                                         │
│  Current Observation:                   │
│  Sample: Lemon Juice                     │
│  Color: Red                              │
│  [Save Observation]                      │
│                                         │
└─────────────────────────────────────────┘
```

#### Step 4: Record (Form + Photo)

```
┌─────────────────────────────────────────┐
│  ← Back     Step 3: Record   [Submit]  │
│─────────────────────────────────────────│
│  RECORD OBSERVATIONS                    │
│                                         │
│  Sample Name: [Lemon Juice        ]    │
│                                         │
│  pH Color Result:                       │
│  [Red] [Orange] [Yellow] [Green] [Blue] │
│                                         │
│  Estimated pH: [ 2 ] (1-14)             │
│                                         │
│  ┌─────────────────────────────────────┐│
│  │        📷 Attach Photo              ││
│  │    [Tap to capture or select]      ││
│  └─────────────────────────────────────┘│
│                                         │
│  Notes: [Strong acid, rapid reaction ]  │
│                                         │
│  [+ Add Another Sample]                 │
│                                         │
└─────────────────────────────────────────┘
```

#### Step 5: Review & Issue VC

```
┌─────────────────────────────────────────┐
│  ← Back     Step 4: Review     [Issue] │
│─────────────────────────────────────────│
│  SUMMARY                                │
│                                         │
│  Experiment: pH Indicator Test #001     │
│  Researcher: Dr. Som (DID:did:...)     │
│  Started: 2026-05-18 09:30:00           │
│  Ended: 2026-05-18 09:45:00             │
│                                         │
│  Reagents Used:                         │
│  - pH Paper Lot#PH2026-001              │
│                                         │
│  Observations:                          │
│  - Lemon Juice: pH 2, Red               │
│  - Milk: pH 6, Light Yellow             │
│                                         │
│  ─────────────────────────────────────  │
│                                         │
│     ┌─────────────────────────────┐     │
│     │  [ ✓ ISSUE CREDENTIAL ]    │     │
│     │  Sign & timestamp this VC  │     │
│     └─────────────────────────────┘     │
│                                         │
└─────────────────────────────────────────┘
```

---

### 4. VERIFY (Reviewer Flow)

```
┌─────────────────────────────────────────┐
│  ← Back     Verify Experiment    [Scan]│
│─────────────────────────────────────────│
│  VERIFY EXPERIMENT CREDENTIAL           │
│                                         │
│  ┌─────────────────────────────────────┐│
│  │     📷                                ││
│  │   [Scan Experiment QR]               ││
│  │   Or enter experiment ID            ││
│  └─────────────────────────────────────┘│
│                                         │
│  Or paste VC JSON:                      │
│  [________________________________]     │
│  [VERIFY]                               │
│                                         │
└─────────────────────────────────────────┘
```

#### Verification Result

```
┌─────────────────────────────────────────┐
│  ← Back     Verification Result         │
│─────────────────────────────────────────┤
│  ✓ VERIFIED                             │
│                                         │
│  ┌─────────────────────────────────────┐│
│  │ CREDENTIAL DETAILS                  ││
│  │ ─────────────────────────────────── ││
│  │ Experiment: pH Indicator Test #001  ││
│  │ Hash: 7f3a9c... (matches)          ││
│  │ Signature: ✓ Valid                 ││
│  │ Timestamp: 2026-05-18 09:45:00    ││
│  │ Researcher DID: did:som:...        ││
│  │ Status: UNALTERED                  ││
│  └─────────────────────────────────────┘│
│                                         │
│  [VIEW FULL DATA]                       │
│  [EXPORT REPORT]                        │
│                                         │
└─────────────────────────────────────────┘
```

---

## Click Flow Summary

### Holder (Researcher) Flow

```
Home → My Wallet
       └── View VC cards
       └── Share VC

Home → Create Lab
       └── Select Template → Next
       └── Scan Reagent QR → Next
       └── Start Experiment → End
       └── Record Observations → Submit
       └── Review Summary → Issue VC → Wallet
```

### Issuer (System) Flow

```
User Action: Issue VC
       │
       ▼
System: Generate credential hash
System: Sign with researcher DID
System: Timestamp
System: Store in wallet
       │
       ▼
User: VC added to wallet
```

### Reviewer (Supervisor) Flow

```
Home → Verify
       └── Scan Experiment QR
       └── System validates hash
       └── Display verification result
       └── View full data / Export report
```

---

## Navigation Summary

| Button | Action | Destination |
|--------|--------|--------------|
| `My Wallet` | View VC cards | Wallet Page |
| `Create Lab` | New experiment | Create Flow |
| `Scan Reagent` | Add reagent | Scanner |
| `Verify` | Check VC | Verify Page |
| `Next` | Continue step | Next step |
| `Back` | Go previous | Previous screen |
| `View` | Open VC detail | VC Detail Modal |
| `Share` | Export VC | Share Options |
| `Issue` | Sign & timestamp | Create VC |
| `Export Report` | Download PDF | PDF Download |

---

## Key Screens Summary (for pitch/ppt)

| Screen | Purpose | Key Elements |
|--------|---------|---------------|
| Home | Entry point | 4 main buttons: Wallet, Create, Scan, Verify |
| Wallet | View records | VC cards with experiment info, filter, share |
| Create - Template | Select type | pH test, Vitamin C test, Custom |
| Create - Prepare | Scan reagents | QR scanner, reagent list |
| Create - Run | Timestamp | Start/End buttons, timer |
| Create - Record | Input data | Form fields, photo capture |
| Create - Review | Verify & issue | Summary, Issue Credential button |
| Verify | Check integrity | Scanner, verification result with hash/status |

---

## Contribution Notes

This wireframe aligns with:
- **summary-use-case.md**: Core problem (data correctness, completeness, immutability)
- **lab_example.md**: Two example experiments (pH paper, Vitamin C degradation)
- **flowlab.md**: 5-step VC flow and data model

Potential additions for pitch deck:
1. Slide with user flow diagram
2. Slide with role responsibilities
3. Screen mockups (this wireframe serves as blueprint)
4. Value proposition: "Data you can trust"