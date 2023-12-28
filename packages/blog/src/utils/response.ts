export const response = (statusCode: number, data: unknown) => {
  return {
    statusCode: statusCode,
    headers: {
      /* Required for CORS support to work */
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    },
    body: JSON.stringify(data),
  };
};

export const request = (data: string) => {
  return JSON.parse(data);
};
