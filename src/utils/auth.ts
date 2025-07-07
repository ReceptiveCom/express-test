function extractJwtFromHeader(req: any): string | null {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return null;
  }
  const parts = authHeader.split(' ');
  if (parts.length !== 2 || parts[0] !== 'Bearer') {
    return null;
  }
  return parts[1];
}

function isAuthenticated(jwt: string): boolean {
  console.log('Process jwt');
  return true;
}

function getUserId(jwt: string): string {
  console.log('Process jwt');
  if (!isAuthenticated(jwt)) {
    throw new Error('Unauthorized');
  }
  return '12345';
}

export { extractJwtFromHeader, isAuthenticated, getUserId };
