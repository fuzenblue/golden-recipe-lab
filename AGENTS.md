# AGENTS.md - Golden Recipe Lab

## Project Overview

This is a **Digital Wallet / Verification Credential (VC) system for Laboratory Data Provenance**.

The core problem: Lab data recorded manually or in Excel cannot be proven to be correct, complete, and unaltered, making experiments unreliable and non-reproducible.

## Core Architecture

- **User Flow**: Prepare (scan QR) → Run (timestamp) → Record (form+photo) → Verify (QR scan) → Report (export immutable)
- **Key Entities**: Researchers, Reagents (with QR/lot numbers), Experiments, Observations, Credentials
- **Data Model**: Experiment records linked to reagent lots, timestamps, researcher credentials

## Key Files

| File | Purpose |
|------|---------|
| `summary-use-case.md` | Core problem statement in Thai |
| `lab-example.md` | Two example experiments with old vs new (VC) workflow |
| `flowlab.md` | This file - architecture diagram and flow |

## Development Notes

- This is a documentation/prototyping phase - no actual code yet
- The system is based on verifiable credentials (VC) concepts
- QR codes are used for reagent lot tracking and experiment verification
- Immutability and audit trail are core requirements

## Language

- Primary documentation: Thai (ภาษาไทย)
- Code (when implemented): English

## Future Implementation Hints

- Consider DID (Decentralized Identifiers) for researcher identity
- Consider Zero-Knowledge Proofs for privacy-preserving verification
- Consider IPFS or similar for immutable data storage
- Mobile app workflow with camera/QR scanning integration