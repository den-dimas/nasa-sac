import axios from "axios";

export const get379 = async (req, res) => {
  try {
    const data = await axios.get(
      "https://osdr.nasa.gov/geode-py/ws/repo/studies/OSD-379/table/4?page=1&page_size=141&table_name=sample"
    );

    res.status(200).send(data.data);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const get665 = async (req, res) => {
  try {
    const data = await axios.get(
      "https://osdr.nasa.gov/geode-py/ws/repo/studies/OSD-665/table/4?page=1&page_size=141&table_name=sample"
    );

    res.status(200).send(data.data);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
