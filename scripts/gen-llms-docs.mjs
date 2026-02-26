import fs from 'fs';
import path from 'path';

const PUBLIC_DIR = path.join(process.cwd(), 'public');

// Core pages content
const pages = {
  'home.md': `# TesseractApps - Home

TesseractApps is a technology company providing innovative software solutions and applications. We specialize in modern web development using React, TypeScript, and cutting-edge web technologies to deliver high-performance, user-centric applications.

## Value Proposition
Automating compliance, rostering, and operations to reduce costs and risk for NDIS, Aged Care, and Allied Health providers.

## Key Features
- Smart Rostering
- NDIS Compliance
- Time & Attendance
- Participant Management
`,
  'about.md': `# About TesseractApps

TesseractApps is a professional business website offering technology services and solutions. Our platform showcases our expertise in modern web development, enterprise applications, and digital innovation.

## Core Technologies
React 19, TypeScript, Vite, Material-UI, GSAP animations, React Router

## Target Audience
NDIS Providers, Aged Care, Allied Health, Disability Support Services.
`,
  'product.md': `# Tesseract Care Management Software

Tesseract Care Management Software is an all-in-one platform built specifically for NDIS & Care Providers.

## Product Features
- **Roster Management**: Intelligent rostering and scheduling solutions
- **Timesheet**: Time tracking and attendance management
- **Admin Console**: Centralized administrative control panel
- **Access Control Panel**: Role-based access and permissions management
- **HR Operations**: Human resources management tools
- **T-Sign**: Electronic signature and document signing
- **Clock In & Clock Out**: Staff attendance and time tracking system
- **Participant Management**: NDIS participant care and service coordination
- **Incident Management**: Incident reporting and tracking system
- **Forms**: Digital forms and data collection
- **Accounting**: Financial management and payroll integration
- **T Learning Hub**: Training and professional development platform
`,
  'pricing.md': `# TesseractApps Pricing

Please visit our official website at https://tesseractapps.com.au/pricing for the most up-to-date information regarding our subscription options, customized enterprise plans, and features included in each tier.
`,
};

// Generate pages
const pageKeys = Object.keys(pages);
let aggregatedContext = '';

for (const key of pageKeys) {
  const content = pages[key];
  const filePath = path.join(PUBLIC_DIR, key);
  
  // Write individual .md file
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Generated: public/${key}`);
  
  // Append to aggregated context
  aggregatedContext += `\n\n--- Start of ${key} ---\n\n`;
  aggregatedContext += content;
  aggregatedContext += `\n\n--- End of ${key} ---\n\n`;
}

// Generate the llms-ctx.txt (Aggregated file without optional stuff)
fs.writeFileSync(path.join(PUBLIC_DIR, 'llms-ctx.txt'), aggregatedContext.trim(), 'utf8');
console.log('Generated: public/llms-ctx.txt');

// We also generate an llms-ctx-full.txt (for now, same as ctx, but allows future expansion)
fs.writeFileSync(path.join(PUBLIC_DIR, 'llms-ctx-full.txt'), aggregatedContext.trim(), 'utf8');
console.log('Generated: public/llms-ctx-full.txt');

console.log('Successfully generated complete LLM text context documents.');
