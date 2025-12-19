---

## src/config.js
```js
import 'dotenv/config';

export const OWNER_ID = process.env.OWNER_ID;
export const ALLOWED_GROUPS = (process.env.ALLOWED_GROUPS || '')
  .split(',')
  .map(s => s.trim())
  .filter(Boolean);

export const FORWARD_GROUP_ID = process.env.FORWARD_GROUP_ID || '';

export const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
export const KEY_DERIVE_SALT = process.env.KEY_DERIVE_SALT || '';
export const CONTACTS_PATH = process.env.CONTACTS_PATH || './contacts.json';
export const CONVO_DIR = process.env.CONVO_DIR || './conversations';
export const ARCHIVE_DIR = process.env.ARCHIVE_DIR || './archives';
export const MAX_ACTIVE_MESSAGES = Number(process.env.MAX_ACTIVE_MESSAGES || 200);
export const LOG_LEVEL = process.env.LOG_LEVEL || 'info';
export const INACTIVITY_SLEEP_MINUTES = Number(process.env.INACTIVITY_SLEEP_MINUTES || 45);
export const GHOST_DEFAULT = (process.env.GHOST_DEFAULT || 'on').toLowerCase() === 'on';
