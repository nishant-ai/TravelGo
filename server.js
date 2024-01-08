const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Add this line
const app = express();
const PORT = 4000;

app.use(cors()); // Use cors middleware
app.use(express.json());

app.get('/places', async (req, res) => {
  try {
    const apiKey = 'AIzaSyC8b6pWwiE-bUcv9JX-09a9lO0g4hXGrNg';
    const apiUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(req.query.query)}&key=${apiKey}`;

    const response = await axios.get(apiUrl);
    res.json(response.data);
  } catch (error) {
    console.error('Error forwarding request to Google Places API:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/photo', async (req, res) => {
  try {
    const apiKey = 'AIzaSyC8b6pWwiE-bUcv9JX-09a9lO0g4hXGrNg'; // Replace with your actual API key
    const { photo_reference, maxheight, maxwidth } = req.query;

    // Check if required parameters are provided
    if (!photo_reference || (!maxheight && !maxwidth)) {
      return res.status(400).json({ error: 'Invalid parameters' });
    }

    // Construct the photo URL with parameters
    const photoUrl = `https://maps.googleapis.com/maps/api/place/photo?maxheight=${maxheight || ''}&maxwidth=${maxwidth || ''}&photoreference=${photo_reference}&key=${apiKey}`;

    const response = await axios.get(photoUrl, { responseType: 'arraybuffer' });
    const photoBase64 = Buffer.from(response.data, 'binary').toString('base64');

    res.status(200).json({
      url: `data:${response.headers['content-type']};base64,${photoBase64}`,
    });
  } catch (error) {
    console.error('Error fetching photo from Google Places API:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
