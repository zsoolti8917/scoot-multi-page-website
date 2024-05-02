import { FormData } from '@/components/Contact';

// Example implementation using fetch
export function sendEmail(data) {
  return fetch('/api/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    return data;
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

