import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export function AirtableSetup() {
  return (
    <Alert className="max-w-4xl mx-auto my-8">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Setup Required: Connect Airtable</AlertTitle>
      <AlertDescription className="mt-2 space-y-3">
        <p>To enable tribute submissions, follow these steps:</p>
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>
            <strong>Create an Airtable account</strong> at{' '}
            <a href="https://airtable.com" target="_blank" rel="noopener noreferrer" className="text-primary underline">
              airtable.com
            </a>
          </li>
          <li>
            <strong>Create a new base</strong> and add a table called "Tributes" with these fields:
            <ul className="list-disc list-inside ml-4 mt-1">
              <li>Name (Single line text)</li>
              <li>Email (Email)</li>
              <li>Relationship (Single line text)</li>
              <li>Message (Long text)</li>
              <li>Created (Created time - auto field)</li>
            </ul>
          </li>
          <li>
            <strong>Get your API key</strong> from{' '}
            <a href="https://airtable.com/create/tokens" target="_blank" rel="noopener noreferrer" className="text-primary underline">
              airtable.com/create/tokens
            </a>
          </li>
          <li>
            <strong>Get your Base ID</strong> from{' '}
            <a href="https://airtable.com/api" target="_blank" rel="noopener noreferrer" className="text-primary underline">
              airtable.com/api
            </a>{' '}
            (select your base)
          </li>
          <li>
            <strong>Update the configuration</strong> in <code className="bg-muted px-1 py-0.5 rounded">src/services/airtable.ts</code> with your credentials
          </li>
        </ol>
        <p className="mt-4 text-sm text-muted-foreground">
          Note: For production, consider using environment variables to store your API credentials securely.
        </p>
      </AlertDescription>
    </Alert>
  );
}