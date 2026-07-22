# Meta Pixel integration

Set the Meta Pixel ID in .env.local:

NEXT_PUBLIC_META_PIXEL_ID="YOUR_PIXEL_ID"

Restart the Next.js development or production server after changing the ID.

Tracked events:

- PageView: every App Router page navigation
- Lead: successful application submission
- Contact: general contact and branch inquiry submissions
- FeedbackSubmitted: successful feedback submission

No email address, phone number, or other personally identifiable form value is sent to Meta Pixel events.
