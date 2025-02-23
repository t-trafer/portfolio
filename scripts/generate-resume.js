import { existsSync, writeFileSync, unlinkSync } from 'fs';
import { join } from 'path';

const DOC_ID = '1LK6__3jlJl9XaYdSv4RxSfoonj-IXA7h';
const OUTPUT_PATH = join(process.cwd(), 'public', 'resume.pdf');
const TIMEOUT = 10000;

async function downloadPdf() {
  const exportUrl = `https://docs.google.com/document/export?format=pdf&id=${DOC_ID}`;

  console.log('📥 Downloading PDF...');
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT);

    const response = await fetch(exportUrl, {
      signal: controller.signal,
      headers: {
        'Accept': 'application/pdf',
      },
    });

    clearTimeout(timeoutId);

    if (response.status === 404) {
      throw new Error('Document not found or not public');
    }
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    if (!response.headers.get('content-type')?.includes('pdf')) {
      throw new Error('Response is not a PDF');
    }

    const arrayBuffer = await response.arrayBuffer();
    
    if (existsSync(OUTPUT_PATH)) {
      unlinkSync(OUTPUT_PATH);
    }

    writeFileSync(OUTPUT_PATH, Buffer.from(arrayBuffer));
    console.log('✅ PDF downloaded successfully!');
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('❌ Download timed out');
    } else {
      console.error('❌ Error:', error.message);
    }
    
    if (existsSync(OUTPUT_PATH)) {
      unlinkSync(OUTPUT_PATH);
    }
    
    process.exit(1);
  }
}

process.on('SIGINT', () => {
  console.log('\n Process interrupted');
  if (existsSync(OUTPUT_PATH)) {
    unlinkSync(OUTPUT_PATH);
  }
  process.exit(1);
});

downloadPdf().catch((error) => {
  console.error('💥 Unhandled error:', error);
  process.exit(1);
});