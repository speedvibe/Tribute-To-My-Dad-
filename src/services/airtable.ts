// Airtable configuration
const AIRTABLE_BASE_ID = 'YOUR_BASE_ID'; // Replace with your Airtable base ID
const AIRTABLE_TABLE_NAME = 'Tributes'; // Your table name
const AIRTABLE_API_KEY = 'YOUR_API_KEY'; // Replace with your API key

const AIRTABLE_API_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`;

export interface Tribute {
  id?: string;
  name: string;
  email?: string;
  relationship?: string;
  message: string;
  createdAt?: string;
}

export async function fetchTributes(): Promise<Tribute[]> {
  try {
    const response = await fetch(AIRTABLE_API_URL + '?sort[0][field]=Created&sort[0][direction]=desc', {
      headers: {
        'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch tributes');
    }

    const data = await response.json();
    
    return data.records.map((record: any) => ({
      id: record.id,
      name: record.fields.Name || '',
      email: record.fields.Email || '',
      relationship: record.fields.Relationship || '',
      message: record.fields.Message || '',
      createdAt: record.fields.Created || record.createdTime,
    }));
  } catch (error) {
    console.error('Error fetching tributes:', error);
    return [];
  }
}

export async function submitTribute(tribute: Omit<Tribute, 'id' | 'createdAt'>): Promise<void> {
  const response = await fetch(AIRTABLE_API_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fields: {
        Name: tribute.name,
        Email: tribute.email || '',
        Relationship: tribute.relationship || '',
        Message: tribute.message,
      },
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to submit tribute');
  }
}