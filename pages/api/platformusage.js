// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({error: 'Invalid request type'});
  }
  const body = req.body;
  if (!body.hasOwnProperty('usage') || body['usage'] < 0 || body['usage'] > 2) {
    return res.status(400).json({error: 'Invalid usage type'});
  }
  // store body['usage']
  return res.status(200).json({success: "OK"});
}
