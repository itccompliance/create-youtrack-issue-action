const {
  info: actionLog,
  setFailed,
  setOutput,
} = require('@actions/core');
const axios = require('axios');
const getInputs = require('./getInputs');

const run = async () => {
  try {
    const {
      customFields,
      description,
      projectId,
      serviceUrl,
      summary,
      token,
    } = getInputs();
    actionLog('Creating issue...');
    const response = await axios({
      url: '/api/issues',
      method: 'post',
      baseURL: serviceUrl,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      data: {
        summary,
        description,
        project: {
          id: projectId,
        },
        customFields: customFields ? JSON.parse(customFields) : [],
      },
    });
    const issueId = response.data.id;
    actionLog(`Issue ID ${issueId} created`);
    setOutput(issueId);
  } catch (error) {
    setFailed(error.message);
  }
};

run();
