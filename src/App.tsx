/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8fafc',
        padding: '2rem',
      }}
    >
      <section
        style={{
          maxWidth: '720px',
          width: '100%',
          textAlign: 'center',
          background: '#ffffff',
          borderRadius: '24px',
          boxShadow: '0 24px 80px rgba(15, 23, 42, 0.08)',
          padding: '3rem',
        }}
      >
        <img
          src="/logo.png"
          alt="Academy of Excellence logo"
          style={{
            width: '240px',
            maxWidth: '100%',
            height: 'auto',
            marginBottom: '2rem',
          }}
        />
        <h1 style={{fontSize: '2.5rem', margin: '0 0 1rem', color: '#0f172a'}}>
          Welcome to Academy of Excellence
        </h1>
        <p style={{fontSize: '1rem', lineHeight: 1.75, color: '#475569', margin: 0}}>
          This React app now renders the logo correctly from the public folder. Start building your website here.
        </p>
      </section>
    </main>
  );
}
