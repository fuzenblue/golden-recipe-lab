# Integration Guide - Researcher Digital Wallet
## Academic Position Request Workflows (Thai Universities)

**Date:** May 2026  
**Reference:** "Data ใช้ในการขอตำแหน่ง อ้างอิง swu.md"  
**Project:** Researcher Digital Wallet for SWU & Thai Public Universities

---

## 📌 Project Context

This Researcher Digital Wallet is specifically designed for **Thai academic position promotion requests** (ขอตำแหน่ง) across three academic ranks:
- **ผู้ช่วยศาสตราจารย์** (Assistant Professor)
- **รองศาสตราจารย์** (Associate Professor)
- **ศาสตราจารย์** (Professor)

### Core Integration Points

The wallet integrates with **5 external organizations** to collect **6 types of Verifiable Credentials (VC1-6)**:

| Credential | Type | Issuer | Data Collected |
|------------|------|--------|----------------|
| **VC1** | Personal Identity | Thai National ID Agency | Name, DOB, ID Number, Age |
| **VC2** | Employment & HR | HR Office (สำนักงานจัดการบุคลากร) | Faculty, Department, Position, Appointment Date, Degrees |
| **VC3** | Teaching Record | Faculty/Department (คณะ) | Courses (3 years), Credits, Schedule, Evaluation Scores |
| **VC4** | Publications | Scopus/TCI/Journals | DOI, ISSN, Volume, Authors, Database Level |
| **VC5** | Co-author Confirmation | Co-researchers (ผู้ร่วมวิจัย) | Contribution %, Digital Signature |
| **VC6** | Consolidated (auto-generated) | Wallet System | Aggregated VC1-5, Ready for 11 forms |

---

## 🔄 Workflow Process

### Phase 1: Initial Setup (Day 1)
```
1. Researcher logs in with institutional email (@swu.ac.th)
2. System auto-imports VC1 (Personal ID)
3. System auto-fetches VC2 (HR Data)
4. Dashboard shows: VC1 ✓ VC2 ✓ (Ready)
5. Researcher proceeds to next phase
```

### Phase 2: Credential Collection (Days 2-14)
```
Request VC3 - Teaching Record:
  → Faculty system receives request with VC1+2
  → Faculty verifies & sends 3-year course data
  → ✓ VC3 received (Verified)

Request VC4 - Publications:
  → Journal databases (Scopus/TCI) verify identity
  → Send publication list with DOI/ISSN
  → ✓ VC4 received (Verified)
  
Request VC5 - Co-author Confirmations:
  → System generates signing requests for each co-author
  → Co-authors digitally sign contribution percentages
  → ✓ VC5 received (Digitally signed)
```

### Phase 3: Form Generation (Day 15-16)
```
1. All VC1-5 collected → System creates VC6
2. Researcher clicks "Generate Position Request Forms"
3. System auto-fills all 11 official forms:
   - ก.พ.อ. 03 (Main application)
   - แบบแสดงหลักฐานผลงานวิชาการ (Research verification)
   - เอกสารประกอบการสอน (Teaching documentation)
   - ข้อมูลของอาจารย์ผู้ขอ (Researcher info)
   - เอกสารรับรองภาระงาน (Teaching workload)
   - แบบรับรองจริยธรรม (Ethics form)
   - บันทึกเสนอขอประเมินการสอน (Teaching eval request)
   - บันทึกเสนอขอตำแหน่ง (Position request memo)
   - บันทึกข้อความแจ้งการโอนเงิน (Fund transfer memo)
   - แบบฟอร์มตรวจสอบเอกสาร (Document verification 1)
   - แบบฟอร์มตรวจสอบเอกสาร (Document verification 2)
4. Researcher reviews & confirms all forms
5. System generates Verifiable Presentation (VP)
```

### Phase 4: Submission & Tracking (Day 17+)
```
1. Researcher submits VP to University Committee
2. Committee receives cryptographically-verified package
3. Auto-status updates:
   - "Documentation Review" (3-5 days)
   - "Teaching Evaluation" (1-2 weeks)
   - "Academic Work Evaluation" (2-4 weeks)  
   - "Committee Decision" (1 week)
4. Final notification: Approved/Conditional/Rejected
```

---

## 🏗️ Technical Data Structure

### Credential Data Model (JSON-LD Format)

**VC1 - Personal Identity**
```json
{
  "type": "VerifiableCredential",
  "@context": ["https://www.w3.org/2018/credentials/v1"],
  "issuer": {"id": "https://idagency.thailand.gov.th"},
  "credentialSubject": {
    "name": "สกุลนามศรีโภค",
    "prefix": "ดร.",
    "birthDate": "1985-05-15",
    "nationalIDNumber": "1234567890123"
  }
}
```

**VC2 - Employment Credential**
```json
{
  "type": "EmploymentCredential",
  "issuer": {"id": "https://hr.swu.ac.th"},
  "credentialSubject": {
    "institution": "Srinakharinwirot University",
    "faculty": "Faculty of Science",
    "department": "Department of Chemistry",
    "position": "Assistant Professor (ผช.)",
    "appointmentDate": "2015-01-01",
    "employmentStatus": "Civil Servant",
    "educationHistory": [...]
  }
}
```

**VC3 - Teaching Record**
```json
{
  "type": "TeachingRecordCredential",
  "issuer": {"id": "https://science.swu.ac.th"},
  "credentialSubject": {
    "teachingRecords": [
      {
        "courseCode": "CHM101",
        "courseName": "General Chemistry",
        "credits": 3,
        "year": 2025,
        "semester": 1,
        "evaluationScore": "Excellent"
      }
    ],
    "totalCredits": 45
  }
}
```

**VC4 - Publication Credential**
```json
{
  "type": "PublicationCredential",
  "issuer": {"id": "https://scopus.elsevier.com"},
  "credentialSubject": {
    "publications": [
      {
        "title": "Advanced Polymer Synthesis",
        "doi": "10.1016/j.polymer.2024.127231",
        "journal": "Journal of Polymer Science",
        "authors": ["Srikul Namphithak", "Co-author 1"],
        "authorPosition": "First Author",
        "databaseLevel": "International (Scopus)"
      }
    ]
  }
}
```

**VC5 - Co-author Confirmation (digitally signed)**
```json
{
  "type": "ContributionConfirmationCredential",
  "issuer": {"id": "did:key:coauthor_digital_signature"},
  "credentialSubject": {
    "publication": "10.1016/j.polymer.2024.127231",
    "contributor": "Srikul Namphithak",
    "contributionPercentage": 50,
    "digitalSignature": "..."
  }
}
```

**VC6 - Consolidated (Auto-generated)**
```json
{
  "type": "ConsolidatedAcademicCredential",
  "aggregatedFrom": ["VC1", "VC2", "VC3", "VC4", "VC5"],
  "readyForFormGeneration": true,
  "formsToGenerate": [
    "ก.พ.อ.03",
    "แบบแสดงหลักฐานผลงาน",
    ...
  ],
  "verifiablePresentation": {...}
}
```

---

## 🔗 API Integration Requirements

### 1. Authentication API
- **Login:** POST `/auth/login` with institutional email
- **Auto-bind VC1:** GET `/auth/user/identity` (Thai ID lookup)
- **Auto-fetch VC2:** GET `/auth/user/employment` (HR database lookup)

### 2. Wallet API (walt.id)
- **List credentials:** GET `/api/wallet/credentials`
- **Import credential:** POST `/api/wallet/credentials/import`
- **Create presentation:** POST `/api/wallet/presentations`

### 3. Issuer Request API
- **VC3 Request:** POST `/api/issuer/vc3/request` → Faculty System
- **VC4 Request:** POST `/api/issuer/vc4/request` → Journal DBs
- **VC5 Request:** POST `/api/issuer/vc5/request` → Co-researchers

### 4. Form Generation API
- **Generate Forms:** POST `/api/forms/generate` (input: VC6)
- **Validate Forms:** POST `/api/forms/validate` (check compliance)
- **Create VP:** POST `/api/forms/presentation` (create Verifiable Presentation)

### 5. Submission API
- **Submit:** POST `/api/submission/send` (send VP to committee)
- **Track Status:** GET `/api/submission/{referenceId}/status`
- **Get Decision:** GET `/api/submission/{referenceId}/decision`

---

## 📊 Form Mapping - Auto-Population

Each of the 11 forms is auto-populated from the aggregated credential data:

| Form | Source Data | Required Fields | Auto-Fill % |
|------|-------------|-----------------|------------|
| **ก.พ.อ. 03** | VC1+VC2 | Name, ID, Position, Faculty | 100% |
| **Research Work Verification** | VC4+VC5 | Publications, DOI, Authors | 95% |
| **Teaching Documentation** | VC3 | Courses, Credits, Evaluations | 100% |
| **Researcher Info** | VC1+VC2 | Name, Faculty, Department | 100% |
| **Teaching Workload Certificate** | VC3 | Total units, schedule | 90% |
| **Ethics & Conduct** | Manual | Signature, declaration | 0% (manual) |
| **Teaching Eval Request** | VC2+VC3 | Position, courses | 80% |
| **Position Request Memo** | VC1+VC2 | Name, target position, field | 100% |
| **Fund Transfer Memo** | VC2 | Department, position level | 70% |
| **Document Verification 1** | VC1-4 | Signature, issuer verification | 95% |
| **Document Verification 2** | VC4+VC5 | Publication data, authors | 90% |

---

## 🔒 Security & Verification

### Credential Verification Process
```
1. Verify issuer signature (using public key from trust registry)
2. Verify credential has not been tampered with
3. Verify issuer is in authorized list (HR office, Faculty, Journal, etc.)
4. Verify credential is not expired/revoked
5. Display trust badge to user
```

### Presentation Verification Process
```
1. Verify all 11 forms are correctly auto-populated
2. Verify digital signature on VP
3. Verify issuer chain (wallet → form system → committee)
4. Create audit log of submission
5. Send cryptographic proof to committee
```

---

## 🎯 Frontend Implementation Checklist

### Credential Management UI
- [ ] VC1 tab - Personal Identity (read-only, auto-populated)
- [ ] VC2 tab - Employment/HR (read-only, auto-populated)
- [ ] VC3 tab - Teaching Records (status: requesting/received/verified)
- [ ] VC4 tab - Publications (status: requesting/received/verified)
- [ ] VC5 tab - Co-author Confirmations (status: requesting/signed/verified)
- [ ] VC6 tab - Consolidated (status: ready/generating/generated)

### Form Management UI
- [ ] Request Wizard (position, method, discipline)
- [ ] Auto-population preview (11 forms side-by-side)
- [ ] Form validation interface
- [ ] Submission confirmation
- [ ] Status tracker with timeline

### Integration Points
- [ ] Login with institutional email
- [ ] Fetch VC1 from Thai ID agency
- [ ] Fetch VC2 from HR database
- [ ] Send VC3 request to Faculty system
- [ ] Send VC4 request to Journal databases
- [ ] Send VC5 signing requests to co-authors
- [ ] Generate Verifiable Presentation from VC1-5
- [ ] Submit VP to university committee
- [ ] Track submission status in real-time

---

## 📈 Implementation Timeline

| Phase | Duration | Deliverable |
|-------|----------|-------------|
| **Phase 1** | Weeks 1-2 | Auth, VC1/VC2 auto-fetch, basic UI |
| **Phase 2** | Weeks 3-5 | VC3/VC4/VC5 request workflows |
| **Phase 3** | Weeks 6-8 | Form generation & auto-population engine |
| **Phase 4** | Weeks 9-10 | Submission, tracking, notifications |
| **Phase 5** | Weeks 11-12 | Testing, optimization, security audit |

---

## 🚀 Success Metrics

- ✅ Reduce form completion time from 2-3 days to <30 minutes
- ✅ Reduce verification time from 3-5 days to <1 hour
- ✅ Achieve 98% credential verification success rate
- ✅ Support 11/11 government forms (100% compliance)
- ✅ User satisfaction >4.5/5
- ✅ Support 95% of Thai academic promotion scenarios

---

## 📞 Support & References

- **Source Document:** "Data ใช้ในการขอตำแหน่ง อ้างอิง swu.md"
- **Tech Stack:** [TECHSTACK.md](./TECHSTACK.md)
- **Spec Details:** [SPECIFICATION.md](./SPECIFICATION.md)
- **Quick Start:** [QUICKSTART.md](./QUICKSTART.md)
- **walt.id Docs:** https://docs.walt.id/
- **W3C VC Standards:** https://www.w3.org/TR/vc-data-model/

---

**Last Updated:** May 20, 2026  
**Status:** Ready for Development  
**Next Review:** Weekly team sync

