import axios from "axios";

export const get379 = async (req, res) => {
  try {
    const data = await axios.get(
      "https://osdr.nasa.gov/osdr/data/osd/meta/379?api_key=OncOIJhxEFpsWAuDD9BvQ4cfKnWz4fsKRNMhUhnU"
    );

    res.status(200).send(data.data);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const get665 = async (req, res) => {
  try {
    const data = await axios.get(
      "https://osdr.nasa.gov/osdr/data/osd/meta/665?api_key=OncOIJhxEFpsWAuDD9BvQ4cfKnWz4fsKRNMhUhnU"
    );

    res.status(200).send(data.data);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
