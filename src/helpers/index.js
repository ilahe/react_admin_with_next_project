import { useRouter } from "next/router";
import Router from "next/router";
import { signIn } from "src/constants/path";
import az from "locales/az";
import ru from "locales/ru";

export const setSession = (token) => {
    if (token) {
        localStorage.setItem("access_token", `${token}`);
    }
};

export const LogOut = () => {
    localStorage.removeItem("access_token");
    Router.push(signIn);
};

export const setUser = (user) => {
    localStorage.setItem("auth_user", user);
};

export const getLanguage = () => {
    const router = useRouter();
    const { locale } = router;
    switch (locale) {
        case "az": {
            return az;
        }
        case "ru": {
            return ru;
        }
        default: {
            return az;
        }
    }
};
