import { lazy, Suspense } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import { MainLayout } from 'src/layouts/main';

import { SplashScreen } from 'src/components/loading-screen';

import { authRoutes } from './auth';
import { dashboardRoutes } from './dashboard';

import { GuestGuard } from 'src/auth/guard';
import { AuthSplitLayout } from 'src/layouts/auth-split';

// ----------------------------------------------------------------------

const HomePage = lazy(() => import('src/pages/home'));

const JwtSignInPage = lazy(() => import('src/pages/auth/jwt/sign-in'));

export function Router() {
  return useRoutes([
    // Default: redirect to login
    { path: '/', element: <Navigate to="/login" replace /> },

    // Friendly /login path mapped to existing JWT sign-in
    {
      path: '/login',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <GuestGuard>
            <AuthSplitLayout section={{ title: 'Hi, Welcome back' }}>
              <JwtSignInPage />
            </AuthSplitLayout>
          </GuestGuard>
        </Suspense>
      ),
    },

    // Auth
    ...authRoutes,

    // Dashboard
    ...dashboardRoutes,

    // Optional Home (kept but not default)
    {
      path: '/home',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout>
            <HomePage />
          </MainLayout>
        </Suspense>
      ),
    },

    // No match
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
