import { getSession } from '@/lib/auth';
import AdminSidebar from '@/components/admin/AdminSidebar';

export const metadata = {
  title: 'Admin',
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  // If not logged in, render children without admin chrome.
  // The login page is the only unprotected route under /admin (via middleware).
  // For any other admin route, middleware already redirects unauthenticated users.
  if (!session.isLoggedIn) {
    return <>{children}</>;
  }

  return (
    <div style={{ position: 'fixed', inset: 0, display: 'flex', zIndex: 200 }}>
      <AdminSidebar />
      <main
        style={{
          marginLeft: 240,
          flex: 1,
          background: 'var(--gray)',
          padding: 40,
          overflowY: 'auto',
          minHeight: '100vh',
        }}
      >
        {children}
      </main>
    </div>
  );
}
