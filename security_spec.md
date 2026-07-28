# Security Specification & Test Plan

## Data Invariants
1. **Consultations (`/consultations/{consultationId}`)**:
   - Anyone (authenticated or unauthenticated public visitors) can create a consultation request.
   - Submitted consultations must have required fields: `name`, `whatsapp`, `email`, `packageInterest`.
   - String sizes must be bounded (e.g. name <= 100, message <= 1000).
   - Only admins (or the owner) can read or update consultation requests.

2. **Career Applications (`/careerApplications/{applicationId}`)**:
   - Anyone can submit a job application.
   - Applications must have valid positionTitle, applicantName, whatsapp, email.
   - Only admins can read or update job applications.

3. **User Profiles (`/users/{userId}`)**:
   - Authenticated users can read and update their own user profile.
   - Role updates to 'admin' are forbidden from normal client profile updates.

## Dirty Dozen Security Test Scenarios
1. Oversized name string in Consultation (>100 chars).
2. Missing required field 'email' in Consultation payload.
3. Invalid email format string.
4. Non-admin attempting to list all consultations.
5. Attempting to assign `role: "admin"` on self user creation.
6. Attempting to inject extra unexpected fields ("ghostField") into Consultation document.
7. Attempting to modify immutable `createdAt` timestamp.
8. Attempting to update consultation status without admin privileges.
9. Invalid document ID string with special script tags or path traversal (`../`).
10. Attempting blanket read access on `/users` collection without user ID match.
11. Attempting to delete another user's profile document.
12. Unauthenticated user trying to read user profile of another account.
