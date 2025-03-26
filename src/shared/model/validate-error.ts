export const validateEmailAndPassword = (error: string): string => {
  switch (error) {
    case "auth/invalid-email":
      return "Не правильно введена почта";
    case "auth/missing-password":
      return "Не правильно введен пароль";
    case "auth/email-already-in-use":
      return "Этот email уже используется";
    case "auth/weak-password":
      return "Пароль слишком простой";
    case "auth/invalid-credential":
      return "Эти данные не действительны";
    case "password-does-not-meet-requirements":
      return "Пароль не соответствует требованиям";
  }

  return "";
};
