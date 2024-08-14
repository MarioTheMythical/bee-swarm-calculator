// Assuming TypeScript configuration issues

interface ChangelogEntry {
  version: string;
  date: string;
  changes: string[];
}

// ... rest of your code

// tsconfig.json
{
  "compilerOptions": {
    "target": "es5", // Or a higher target as needed
    "lib": ["dom", "esnext"],
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    // ... other options
  }
}
