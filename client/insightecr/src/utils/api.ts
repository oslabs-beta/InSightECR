import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000' // Backend port

export const getRepositoryData = async (accountId: string, repoName: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/repository/${accountId}/${repoName}`);
    return response.data;
  } catch (error) {
    console.log('Error fetching repository data:', error);
  }
};

export const getAllRepositories = async (accountId: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/repository/${accountId}`);
    return response.data;
  } catch (error) {
    console.log('Error fetching all repositories data:', error);
  }
};

export const toggleScanOnPush = async (accountId: string, repoName: string, scanOnPush: boolean) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/repository/${accountId}/${repoName}/scan-on-push`, {
      scanOnPush,
    });
    return response.data;
  } catch (error) {
    console.error('Error toggling scan on push:', error);
  }
};