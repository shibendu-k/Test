# Test
Testing a whatsapp bot

WhatsApp assistant using @whiskeysockets/baileys (no browser) + Google Gemini. Encrypted histories, context-aware phonebook, personalities, ghost-read, auto-sleep, archiving, view-once forwarding.

## Features
- Context-aware phonebook (UUID contacts), default personalities per contact
- Menu flow on `!suggest <text>` → pick contact → pick personality → reply
- AES-256-GCM encrypted histories; key derived in RAM via `/unlock <password>`
- Archiving: keep last N active messages, auto-archive overflow (configurable)
- Ghost mode: delay read receipts; mark read when replying
- Inactivity auto-sleep (close socket) after idle period
- View-once capture/forward to allowed group
- Log masking of phone numbers
- Allowed-groups + owner super-user access control
- Language mimicry stub; media/link context stub for AI

## Install
```bash
npm install @whiskeysockets/baileys winston dotenv
