function getUserId(jwt: string): string {
  console.log('Process jwt');
  return '12345';
}

function isAuthenticated(jwt: string): boolean {
  console.log('Check if user is authenticated');
  return true;
}
