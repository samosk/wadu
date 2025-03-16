const production = {
	basePath: '/wadu',  // Base path for GitHub Pages: https://samosk.github.io/wadu/
	assetPath: '/wadu'  // Assets are also in the /Wadu directory
  };
  
  const development = {
	basePath: '',     // No base path needed in local development
	assetPath: 'wadu'   // Local assets in the wadu directory
  };
  
  // Determine if we're in production based on the URL
  const isProduction = window.location.hostname.includes('github.io');
  
  // Export the appropriate config
  const config = isProduction ? production : development;
  
  // Log the current environment and config for debugging
  console.log('Environment:', isProduction ? 'production' : 'development');
  console.log('Current config:', config);
  
  export default config;