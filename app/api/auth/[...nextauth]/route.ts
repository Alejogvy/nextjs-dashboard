import NextAuth from 'next-auth';
import { authConfig } from '@/auth.config';
import { handlers } from '@/auth';

const handler = NextAuth(authConfig);

export const { GET, POST } = handlers;