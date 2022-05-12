import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

/**
 * Check is user's authorization match with the rule
 * @param {object | null} user User object
 * @param {string} role Values: "none" - only for not authorized users, "any" - for authorized users
 */
export const checkUserRole = (user, role) => {
  if (!role || role === 'none') {
    // Don't need to validate
    return true;
  }

  const userRole = user ? 'any' : 'none';

  return role === userRole;
};

function RoleProtector({ role: userRole, redirect, children }) {
  const user = useSelector(({ main }) => main.user);

  const isRoleAccepted = useMemo(
    () => checkUserRole(user, userRole),
    [user, userRole]
  );

  if (!isRoleAccepted) {
    if (redirect) {
      return <Navigate to={redirect} />;
    }
    return null;
  }

  return children;
}

RoleProtector.propTypes = {
  children: PropTypes.node,
  role: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  redirect: PropTypes.string,
};

RoleProtector.defaultProps = {
  children: null,
  redirect: '',
};

export default RoleProtector;
