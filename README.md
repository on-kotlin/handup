# HandUp
Learn a craft, earn a living.

## Purpose
A free, mobile-friendly platform for learning practical craft skills,
designed for people with limited connectivity and low-storage phones.

## Current Status
Planning stage. No confirmed community partners or recruited learners yet.
This repository records the initial implementation scope and pilot plan.

## First Deliverable
One beginner sewing lesson with text and compressed images.

A learner should be able to:
- Open the lesson on a low-end Android phone.
- Explicitly save it for offline use.
- Reopen the saved lesson in airplane mode.
- Mark it complete while offline.
- Sync completion after reconnecting.

## Planned Stack
- Next.js and TypeScript
- Supabase for authentication and course data
- IndexedDB for downloaded lesson data and queued progress
- Service worker and Cache API for offline assets

## Storage Principles
- No automatic media downloads.
- Show estimated download size before saving.
- Provide a screen to view and delete downloaded lessons.
- Handle quota errors without losing learner progress.

## Initial Scope
Build the text-and-image learning flow first.
Video downloads, multilingual content, and community features come later.

## Pilot Plan
During week one, contact three local community centers or sewing instructors
to ask about a small, free pilot.

Month-one targets, not confirmed commitments:
- Recruit 10 volunteer learners.
- Help at least 5 complete the first lesson.
- Collect feedback on usability, connectivity, and storage.

If institutional outreach is unsuccessful, seek individual volunteers
through local craft groups with administrator permission.

## First Task for Devin
Scaffold the application and implement the first lesson flow.
Document setup steps and provide a working demo of offline access
and progress synchronization.
