// Hardcode full URL to improve response time
export const CONFIG_ENDPOINT_ORIGIN = window.location.origin;
export const CONFIG_ENDPOINT_PATH = '/wp-json/dev-api/v1/data/';
export const CONFIG_ENDPOINT = `${CONFIG_ENDPOINT_ORIGIN}${CONFIG_ENDPOINT_PATH}`;
