export async function validateGuest(token: string) {
  const GOOGLE_SCRIPT_URL = `https://script.google.com/macros/s/${process.env.NEXT_PUBLIC_GET_LIST_API}/exec`;
  try {
    const res = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token,
        apiKey: process.env.NEXT_PRIVATE_GET_LIST_SUPER_SECRET,
      }),
    });  
    
    return res.json();
  } catch (error) {
    throw new Error(`${error}`);
  }
}