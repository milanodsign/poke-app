'use client';

import { useGlobalContext } from '@/context/globalContext';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const CardLogin = ({ handleLogin, setUser, setPass }) => {
  const [viewPass, setViewPass] = useState(false);

  return (
    <div className="card cardLogin">
      <div className="card-body">
        <h1 className="text-center mb-4">Ingresar</h1>
        <div className="form-group">
          <input
            type="text"
            id="user"
            className="form-control-lg w-100 inputCustom"
            placeholder="Usuario"
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <span className="contentInput">
            <input
              type={viewPass ? 'text' : 'password'}
              id="user"
              className="form-control-lg w-100 inputCustom"
              placeholder="Contraseña"
              onChange={(e) => setPass(e.target.value)}
            />
            <span className="iconPassContent">
              <FontAwesomeIcon
                className="iconPass"
                icon={viewPass ? faEyeSlash : faEye}
                onClick={() => setViewPass(!viewPass)}
              />
            </span>
          </span>
        </div>
        <div className="form-group mt-4">
          <button className="btnLogin btn w-100" onClick={() => handleLogin()}>
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardLogin;
