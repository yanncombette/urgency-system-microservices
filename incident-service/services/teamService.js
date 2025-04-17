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
}

export default new TeamService();