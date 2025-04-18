import axios from "axios";

const CALLER_OPERATOR_SERVICE_URL = process.env.CALLER_OPERATOR_SERVICE_URL;

class CallerService {
  /**
   * Fetches all callers from the caller-operator-service
   * @returns {Promise<Object[]>} - A list of callers
   */
  async getAllCallers() {
    try {
      const response = await axios.get(`${CALLER_OPERATOR_SERVICE_URL}/api/callers`);
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching callers: ${error.response?.data?.message || error.message}`);
    }
  }

  /**
   * Fetches a caller by ID from the caller-operator-service
   * @param {string} id - The ID of the caller
   * @returns {Promise<Object>} - The caller data
   */
  async getCallerById(id) {
    try {
      const response = await axios.get(`${CALLER_OPERATOR_SERVICE_URL}/api/callers/${id}`);
      return response.data;
    } catch (error) {
      if (error.response?.status === 404) {
        throw new Error(`Caller with ID ${id} not found`);
      }
      throw new Error(`Error fetching caller by ID: ${error.response?.data?.message || error.message}`);
    }
  }

  /**
   * Fetches an operator by ID from the caller-operator-service
   * @param {string} id - The ID of the operator
   * @returns {Promise<Object>} - The operator data
   */
  async getOperatorById(id) {
    try {
      const response = await axios.get(`${CALLER_OPERATOR_SERVICE_URL}/api/operators/${id}`);
      return response.data;
    } catch (error) {
      if (error.response?.status === 404) {
        throw new Error(`Operator with ID ${id} not found`);
      }
      throw new Error(`Error fetching operator by ID: ${error.response?.data?.message || error.message}`);
    }
  }
}

export default new CallerService();