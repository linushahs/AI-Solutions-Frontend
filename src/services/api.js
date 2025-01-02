import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

export const InquiryService = {
  async getInquiries() {
    try {
      const response = await axios.get(`${API_BASE_URL}/inquiries`);

      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch Inquiries");
    }
  },

  async createInquiry(data) {
    try {
      const response = await axios.post(`${API_BASE_URL}/inquiries`, data);

      return response.data;
    } catch (error) {
      console.log("Unable to create inquiry!");
    }
  },

  async deleteInquiries(ids) {
    try {
      const response = await axios.delete(`${API_BASE_URL}/inquiries`, {
        data: ids,
      });
      return response.data;
    } catch (error) {
      throw new Error("Failed to delete Inquiries");
    }
  },
};
