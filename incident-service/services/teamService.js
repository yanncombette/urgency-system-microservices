import axios from "axios";

const TEAM_SERVICE_URL = process.env.TEAM_SERVICE_URL;

class TeamService {
  /**
   * Fetches all teams from the team service
   * @returns {Promise<Object[]>} - A list of teams
   */
  async getAllTeams() {
    try {
      const response = await axios.get(`${TEAM_SERVICE_URL}/api/teams`);
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching teams: ${error.response?.data?.message || error.message}`);
    }
  }

  /**
   * Fetches a team by ID from the team service
   * @param {string} id - The ID of the team
   * @returns {Promise<Object>} - The team data
   */
  async getTeamById(id) {
    try {
      const response = await axios.get(`${TEAM_SERVICE_URL}/api/teams/${id}`);
      return response.data;
    } catch (error) {
      if (error.response?.status === 404) {
        throw new Error(`Team with ID ${id} not found`);
      }
      throw new Error(`Error fetching team by ID: ${error.response?.data?.message || error.message}`);
    }
  }

  /**
   * Fetches an available team from the team service
   * @returns {Promise<Object>} - An available team
   */
  async getAvailableTeams() {
    try {
      const response = await axios.get(`${TEAM_SERVICE_URL}/api/teams/available`);
      return response.data;
    } catch (error) {
      if (error.response?.status === 404) {
        throw new Error("No available teams found");
      }
      throw new Error(`Error fetching available teams: ${error.response?.data?.message || error.message}`);
    }
  }

  /**
   * Updates the availability of a team
   * @param {string} id - The ID of the team
   * @param {boolean} availability - The new availability status
   * @returns {Promise<Object>} - The updated team
   */
  async updateTeamAvailability(id, availability) {
    try {
      const response = await axios.patch(`${TEAM_SERVICE_URL}/api/teams/${id}`, { availability });
      return response.data;
    } catch (error) {
      throw new Error(`Error updating team availability: ${error.response?.data?.message || error.message}`);
    }
  }
}

export default new TeamService();