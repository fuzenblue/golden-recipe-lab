# flowlab.md - Digital Wallet Flow for Lab Data Provenance

---

## Core Problem

Lab data recorded manually or in Excel cannot be proven to be:
- **Correct** - data accurately reflects what was observed
- **Complete** - all relevant parameters are recorded
- **Unaltered** - data has not been modified after the fact

This makes experiments unreliable and non-reproducible.

---

## User Flow (VC-based)

```
┌──────────┐    ┌─────────┐    ┌──────────┐    ┌─────────┐    ┌──────────┐
│ Prepare  │───▶│   Run   │───▶│  Record  │───▶│ Verify  │───▶│  Report  │
│(scan QR) │    │(timestamp)   │(form+photo)   │(QR scan)│    │(export)  │
└──────────┘    └─────────┘    └──────────┘    └─────────┘    └──────────┘
     │               │               │               │               │
     ▼               ▼               ▼               ▼               ▼
  Reagent         Experiment      Observation    Verification    Immutable
  Lot Info        Start Time      Data + Photo   Credential      Report
```

### 1. Prepare (Scan QR)
- Scan reagent QR code → auto-capture lot number, manufacturer, expiry
- System links reagent to upcoming experiment

### 2. Run (Timestamp)
- Press "Start Experiment" → automatic timestamp
- Creates immutable "experiment started" credential

### 3. Record (Form + Photo)
- Fill observation form (temperature, time, measurements)
- Attach photo evidence
- Data signed by researcher credential

### 4. Verify (QR Scan)
- Supervisor/auditor scans experiment QR
- Views all original data, timestamps, reagent info
- Can confirm data integrity without modification

### 5. Report (Export)
- Export experiment report with embedded verification credential
- Report is cryptographically verifiable
- Includes full audit trail

---

## Data Model

```
Researcher
  └── DID (Decentralized Identifier)
  └── Credentials

Reagent
  └── Lot Number (from QR)
  └── Manufacturer
  └── Expiry Date

Experiment
  └── Researcher (linked to DID)
  └── Start Time (timestamp)
  └── End Time
  └── Reagents Used (linked to lots)
  └── Observations (form data + photos)
  └── Verification Credential

Verification Credential
  └── Hash of experiment data
  └── Researcher signature
  └── Timestamp
  └── Linked to experiment
```

---

## Key Features

| Feature | Description |
|---------|-------------|
| QR-based Tracking | Reagents tracked via QR codes (lot numbers) |
| Timestamping | Automatic time recording for experiment start/end |
| Immutable Records | Data cannot be altered after creation |
| Credential-based | Each experiment has a verification credential |
| Audit Trail | Full history of who, what, when |
| Photo Evidence | Attach photos to observations |
| Exportable | Generate verifiable reports |

---

## Implementation Considerations

- **Storage**: IPFS or similar for immutable data storage
- **Identity**: DID for researcher identification
- **Privacy**: Zero-Knowledge Proofs for privacy-preserving verification
- **Mobile**: Camera/QR scanning integration for mobile workflow
- **Verification**: Anyone can verify data integrity via QR scan