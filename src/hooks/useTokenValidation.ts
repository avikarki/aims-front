// // hooks/useTokenValidation.ts
// import { useEffect, useState } from "react";
// import { useAppSelector } from "../app/hooks";

// interface TokenValidation {
//   access: boolean | null;
//   refresh: boolean | null;
// }

// export function useTokenValidation(): TokenValidation {
//   const { accessToken, refreshToken } = useAppSelector((state) => ({
//     accessToken: state.auth.accessToken,
//     refreshToken: state.auth.refreshToken,
//   }));
//   const [validation, setValidation] = useState<TokenValidation>({
//     access: null,
//     refresh: null,
//   });

//   useEffect(() => {
//     if (!accessToken || !refreshToken) {
//       setValidation({ access: false, refresh: false });
//       return;
//     }

//     try {
//       const accessPayload = JSON.parse(atob(accessToken.split(".")[1]));
//       const refreshPayload = JSON.parse(atob(refreshToken.split(".")[1]));

//       setValidation({
//         access: accessPayload.exp * 1000 > Date.now(),
//         refresh: refreshPayload.exp * 1000 > Date.now(),
//       });
//     } catch {
//       setValidation({ access: false, refresh: false });
//     }
//   }, [accessToken, refreshToken]);

//   return validation;
// }

// hooks/useTokenValidation.ts
import { useEffect, useState, useRef } from "react";
import { useAppSelector } from "../app/hooks";
import { selectTokens } from "../features/auth/authSlice";

interface TokenValidation {
  access: boolean | null;
  refresh: boolean | null;
}

export function useTokenValidation() {
  const { accessToken, refreshToken } = useAppSelector(selectTokens);
  const [validation, setValidation] = useState<TokenValidation>({
    access: null,
    refresh: null,
  });
  const checkingRef = useRef(false);

  useEffect(() => {
    if (checkingRef.current) return;
    checkingRef.current = true;

    const validate = () => {
      if (!accessToken || !refreshToken) {
        setValidation({ access: false, refresh: false });
        checkingRef.current = false;
        return;
      }

      try {
        const accessPayload = JSON.parse(atob(accessToken.split(".")[1]));
        const refreshPayload = JSON.parse(atob(refreshToken.split(".")[1]));

        setValidation({
          access: accessPayload.exp * 1000 > Date.now(),
          refresh: refreshPayload.exp * 1000 > Date.now(),
        });
      } catch {
        setValidation({ access: false, refresh: false });
      } finally {
        checkingRef.current = false;
      }
    };

    validate();
  }, [accessToken, refreshToken]);

  return validation;
}
