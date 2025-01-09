import * as React from 'react';
import Logout from '@mui/icons-material/Logout';
import { Account } from '@toolpad/core/Account';
import { AuthenticationContext, SessionContext } from '@toolpad/core/AppProvider';

import { useNavigate } from 'react-router-dom';  // Import useNavigate hook

export default function AccountInfo({setUserData,userData}) {
  let email = userData.email;
  let userName = email.split('@')[0];
  userName = userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();

  const demoSession = {
    user: {
      name: userName,
      email: email,
    },
  };
  const [session, setSession] = React.useState(demoSession);

  const navigate = useNavigate(); // Initialize useNavigate hook

  function handleLogout() {
    // Clear user data and update context/local storage
    setUserData({ login: false });
    localStorage.setItem('login', JSON.stringify({ login: false }));
    
    // Redirect user to the home page
    navigate('/');  // Navigate to the home page on sign out
  }

  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        setSession({
          user: {
            name: 'Bharat Kashyap',
            email: 'bharatkashyap@outlook.com',
          },
        });
      },
      signOut: handleLogout,  // Use handleLogout when signing out
    };
  }, []);

  return (
    <AuthenticationContext.Provider value={authentication}>
      <SessionContext.Provider value={session}>
        {/* preview-start */}
        <Account
          slotProps={{
            signInButton: {
              color: 'success',
            },
            signOutButton: {
              color: 'success',
              startIcon: <Logout />,
            },
            preview: {
              variant: 'expanded',
              slotProps: {
                avatarIconButton: {
                  sx: {
                    width: 'fit-content',
                    margin: 'auto',
                  },
                },
                avatar: {
                  variant: 'rounded',
                },
              },
            },
          }}
        />
      </SessionContext.Provider>
    </AuthenticationContext.Provider>
  );
}
